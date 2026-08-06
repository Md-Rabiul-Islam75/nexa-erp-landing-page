/*
 * Meta Pixel helper.
 * The base pixel + PageView live in index.html; this only fires the conversion
 * events. Safe no-op when fbq is missing (ad-blocker, or a dev run without it).
 */
export function track(event, params) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq('track', event, params)
}

/* A demo booking was confirmed — the event to optimise ad delivery on. */
export function trackLead(channel) {
  track('Lead', { content_name: 'NexaERP demo booking', content_category: channel })
}

/* Someone reached out directly (WhatsApp bubble, phone, email). */
export function trackContact(channel) {
  track('Contact', { content_category: channel })
}

/* Someone reached the booking form — the high-volume intent signal Meta can
   actually train on, since completed bookings are too rare on their own. */
export function trackBookingIntent(source) {
  track('InitiateCheckout', { content_name: 'NexaERP demo form', content_category: source })
}
