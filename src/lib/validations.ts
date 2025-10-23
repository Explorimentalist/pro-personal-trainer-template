import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  service: z.string().optional(),
  goals: z.string().min(10, {
    message: "Please provide at least 10 characters describing your goals.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.enum([
    "personal-training",
    "group-training",
    "nutrition-coaching",
    "wellness-therapy",
  ]),
  preferredDate: z.string().min(1, {
    message: "Please select a preferred date.",
  }),
  preferredTime: z.string().min(1, {
    message: "Please select a preferred time.",
  }),
  goals: z.string().min(10, {
    message: "Please describe your goals in at least 10 characters.",
  }),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
