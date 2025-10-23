// Resend email service configuration
export const resendConfig = {
  apiKey: process.env.RESEND_API_KEY,
  fromEmail: process.env.RESEND_FROM_EMAIL || "noreply@heyokofitness.com",
  fromName: process.env.RESEND_FROM_NAME || "Hey Oko Fitness",
};

// Email templates
export const emailTemplates = {
  contactForm: {
    subject: "New Contact Form Submission - Hey Oko Fitness",
    toEmail: process.env.CONTACT_EMAIL || "info@heyokofitness.com",
  },
  bookingRequest: {
    subject: "New Booking Request - Hey Oko Fitness", 
    toEmail: process.env.BOOKING_EMAIL || "bookings@heyokofitness.com",
  },
  welcomeClient: {
    subject: "Welcome to Hey Oko Fitness!",
  },
  bookingConfirmation: {
    subject: "Your Booking Confirmation - Hey Oko Fitness",
  },
} as const;

// Email sending function types
export interface ContactFormEmail {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  goals: string;
}

export interface BookingRequestEmail {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  goals: string;
}

// HTML email template generator
export function generateContactFormEmailHtml(data: ContactFormEmail): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
    ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ""}
    <p><strong>Goals & Message:</strong></p>
    <p>${data.goals}</p>
  `;
}

export function generateBookingRequestEmailHtml(data: BookingRequestEmail): string {
  return `
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
    <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
    <p><strong>Goals:</strong></p>
    <p>${data.goals}</p>
  `;
}