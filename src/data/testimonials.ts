export type Testimonial = {
  name: string;
  business: string;
  project: string;
  quote: string;
  audioUrl?: string;
  videoUrl?: string;
};

/**
 * Client testimonials.
 *
 * Intentionally empty: no testimonial text, audio or video has been supplied yet,
 * and inventing client quotes is not acceptable. Add verified entries here and
 * the slider on /testimonials and the homepage will render them automatically.
 */
export const testimonials: Testimonial[] = [];