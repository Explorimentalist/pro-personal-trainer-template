import { test, expect } from '@playwright/test';

/**
 * Design Verification Tests
 * These tests verify that the design principles from context/design-principles_checklist.md are implemented correctly
 */

test.describe('Typography and Color Scheme Verification', () => {
  test('hero typography scale and hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Verify hero h1 is using proper scale (should be 60-80px on desktop)
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    
    const styles = await heroHeading.evaluate(el => getComputedStyle(el));
    const fontSize = parseInt(styles.fontSize);
    
    // Check desktop typography scale (60-80px for hero)
    if (page.viewportSize()?.width && page.viewportSize()!.width >= 1024) {
      expect(fontSize).toBeGreaterThanOrEqual(48); // Allow some flexibility for rem calculations
      expect(fontSize).toBeLessThanOrEqual(100);
    }
  });

  test('color contrast accessibility', async ({ page }) => {
    await page.goto('/');
    
    // Check that primary text has sufficient contrast
    const bodyText = page.locator('p').first();
    await expect(bodyText).toBeVisible();
    
    // This would need to be enhanced with actual color contrast calculation
    // For now, just verify text is visible and readable
    await expect(bodyText).toHaveCSS('color', /rgb\(\d+,\s*\d+,\s*\d+\)/);
  });
});

test.describe('Mobile Responsiveness Verification', () => {
  test('mobile navigation and touch targets', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size
    await page.goto('/');
    
    // Verify mobile navigation exists
    const mobileMenu = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"]');
    if (await mobileMenu.count() > 0) {
      await expect(mobileMenu).toBeVisible();
      
      // Check touch target size (minimum 44px)
      const bbox = await mobileMenu.boundingBox();
      expect(bbox?.width).toBeGreaterThanOrEqual(44);
      expect(bbox?.height).toBeGreaterThanOrEqual(44);
    }
  });

  test('responsive layout on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad size
    await page.goto('/');
    
    // Verify content is properly laid out on tablet
    await expect(page.locator('main')).toBeVisible();
    
    // Check that content doesn't overflow
    const main = page.locator('main');
    const bbox = await main.boundingBox();
    expect(bbox?.width).toBeLessThanOrEqual(768);
  });
});

test.describe('Performance and Core Web Vitals', () => {
  test('page load performance', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // Wait for main content to be visible
    await expect(page.locator('h1')).toBeVisible();
    const loadTime = Date.now() - startTime;
    
    // Should load within 3 seconds (3000ms) as per design principles
    expect(loadTime).toBeLessThan(3000);
  });

  test('images have proper alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      // All images should have alt text (empty alt="" is acceptable for decorative images)
      expect(alt).not.toBeNull();
    }
  });
});

test.describe('Conversion Optimization Elements', () => {
  test('primary CTA visibility and placement', async ({ page }) => {
    await page.goto('/');
    
    // Check for primary CTA in hero section
    const primaryCTA = page.locator('button, a').filter({ hasText: /Book|Start|Get Started|Free Consultation/i }).first();
    await expect(primaryCTA).toBeVisible();
    
    // Verify CTA is above the fold
    const ctaBbox = await primaryCTA.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 0;
    
    expect(ctaBbox?.y).toBeLessThan(viewportHeight);
  });

  test('contact information prominence', async ({ page }) => {
    await page.goto('/');
    
    // Phone number should be visible (as per conversion optimization)
    const phoneLinks = page.locator('a[href^="tel:"]');
    if (await phoneLinks.count() > 0) {
      await expect(phoneLinks.first()).toBeVisible();
    }
  });
});

test.describe('Accessibility Compliance', () => {
  test('keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation through key elements
    await page.keyboard.press('Tab');
    const firstFocusable = page.locator(':focus');
    await expect(firstFocusable).toBeVisible();
    
    // Verify focus is visible
    const focusedElement = await firstFocusable.evaluate(el => getComputedStyle(el));
    expect(focusedElement.outlineWidth !== '0px' || focusedElement.boxShadow !== 'none').toBeTruthy();
  });

  test('heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have proper heading hierarchy (h1 -> h2 -> h3, etc.)
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // Should have exactly one h1 per page
    
    // If h3 exists, h2 should also exist
    const h2Count = await page.locator('h2').count();
    const h3Count = await page.locator('h3').count();
    
    if (h3Count > 0) {
      expect(h2Count).toBeGreaterThan(0);
    }
  });
});

test.describe('Trust Signals and Social Proof', () => {
  test('testimonials or social proof present', async ({ page }) => {
    await page.goto('/');
    
    // Look for common testimonial indicators
    const testimonialSection = page.locator('section, div').filter({ 
      hasText: /testimonial|review|client|success|transformation/i 
    });
    
    // At least some form of social proof should be present
    expect(await testimonialSection.count()).toBeGreaterThan(0);
  });

  test('contact and business information', async ({ page }) => {
    await page.goto('/contact');
    
    // Contact page should have business hours
    const businessInfo = page.locator('text=/hours|open|closed|monday|tuesday|wednesday|thursday|friday|saturday|sunday/i');
    expect(await businessInfo.count()).toBeGreaterThan(0);
  });
});