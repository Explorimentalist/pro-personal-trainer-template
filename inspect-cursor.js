const { chromium } = require('playwright');

async function inspectButtonCursor() {
  console.log('Starting browser inspection...');
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  
  try {
    console.log('Navigating to http://localhost:3001...');
    await page.goto('http://localhost:3001', { 
      waitUntil: 'networkidle',
      timeout: 10000 
    });
    
    await page.waitForTimeout(3000);
    
    console.log('Page loaded, inspecting buttons...');
    
    // Find all button elements
    const buttons = await page.locator('button').all();
    console.log(`Found ${buttons.length} button elements`);
    
    // Find elements with cursor-pointer class
    const cursorPointerElements = await page.locator('.cursor-pointer').all();
    console.log(`Found ${cursorPointerElements.length} elements with cursor-pointer class`);
    
    // Inspect first few visible buttons
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      
      console.log(`\n--- Button ${i + 1} ---`);
      
      try {
        // Get basic info
        const tagName = await button.evaluate(el => el.tagName.toLowerCase());
        const classes = await button.getAttribute('class') || '';
        const textContent = (await button.textContent() || '').trim().substring(0, 50);
        
        console.log(`Tag: ${tagName}`);
        console.log(`Text: "${textContent}"`);
        console.log(`Classes: ${classes}`);
        
        // Get computed styles
        const computedStyles = await button.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            cursor: computed.cursor,
            pointerEvents: computed.pointerEvents,
            display: computed.display,
            position: computed.position,
            visibility: computed.visibility,
            zIndex: computed.zIndex
          };
        });
        
        console.log(`Computed cursor: ${computedStyles.cursor}`);
        console.log(`Pointer events: ${computedStyles.pointerEvents}`);
        console.log(`Display: ${computedStyles.display}`);
        console.log(`Visibility: ${computedStyles.visibility}`);
        
        // Check if cursor-pointer is in classes
        const hasCursorPointer = classes.includes('cursor-pointer');
        console.log(`Has cursor-pointer class: ${hasCursorPointer}`);
        
        // Check if element is actually clickable
        const isClickable = await button.evaluate(el => {
          return !el.disabled && el.style.pointerEvents !== 'none';
        });
        console.log(`Is clickable: ${isClickable}`);
        
        // Only try to hover if element is visible
        const isVisible = computedStyles.display !== 'none' && computedStyles.visibility !== 'hidden';
        if (isVisible) {
          try {
            await button.hover({ timeout: 2000 });
            const cursorOnHover = await button.evaluate(el => {
              return window.getComputedStyle(el).cursor;
            });
            console.log(`Cursor on hover: ${cursorOnHover}`);
          } catch (hoverError) {
            console.log(`Could not hover: ${hoverError.message}`);
          }
        } else {
          console.log('Button not visible, skipping hover test');
        }
        
        // Stop after finding 5 buttons to avoid too much output
        if (i >= 4) break;
        
      } catch (error) {
        console.log(`Error inspecting button ${i + 1}: ${error.message}`);
      }
    }
    
    // Check for global styles that might override cursor
    console.log('\n--- Checking for CSS overrides ---');
    
    const globalCursorRules = await page.evaluate(() => {
      const rules = [];
      
      try {
        const stylesheets = Array.from(document.styleSheets);
        
        for (const sheet of stylesheets) {
          try {
            const cssRules = Array.from(sheet.cssRules || sheet.rules || []);
            
            for (const rule of cssRules) {
              if (rule.style && rule.style.cursor) {
                rules.push({
                  selector: rule.selectorText,
                  cursor: rule.style.cursor,
                  href: sheet.href || 'inline'
                });
              }
            }
          } catch (e) {
            // Skip inaccessible stylesheets (CORS)
          }
        }
      } catch (e) {
        console.log('Error accessing stylesheets:', e.message);
      }
      
      return rules;
    });
    
    console.log('CSS rules affecting cursor:');
    globalCursorRules.forEach(rule => {
      console.log(`  ${rule.selector}: cursor: ${rule.cursor} (from: ${rule.href})`);
    });
    
    // Check specifically for * selectors that might override
    const universalCursorRules = globalCursorRules.filter(rule => 
      rule.selector && (rule.selector.includes('*') || rule.selector === 'body')
    );
    
    if (universalCursorRules.length > 0) {
      console.log('\n⚠️  Found universal selectors that might override cursor:');
      universalCursorRules.forEach(rule => {
        console.log(`  ${rule.selector}: cursor: ${rule.cursor}`);
      });
    }
    
    // Take a screenshot for reference
    await page.screenshot({ path: 'button-inspection.png', fullPage: true });
    console.log('\nScreenshot saved as button-inspection.png');
    
  } catch (error) {
    console.error('Error during inspection:', error.message);
  } finally {
    await browser.close();
  }
}

inspectButtonCursor().catch(console.error);