/*
 * Meta Pixel helper.
 *
 * The base pixel + PageView live in index.html; this file only fires the
 * conversion events. Safe no-op when fbq is missing (ad-blocker, or a dev run
 * without it) — the calls sit inside booking click handlers, so a throw here
 * would cost a booking, not just a statistic.
 *
 * Function names describe the USER ACTION; the Meta event name each one maps
 * to is decided here and nowhere else. If Meta's naming needs to change again,
 * this file is the only file that changes.
 */
export function track(event, params) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq('track', event, params)
}

/* Reached the booking form. The high-volume intent signal — this is the event
   to optimise campaigns on, since confirmed bookings are far too rare to keep
   Meta's optimiser out of its learning phase. */
export function trackBookingIntent(source) {
  track('Lead', { content_name: 'NexaERP demo form', content_category: source })
}

/* Booking confirmed with a date, time slot and contact details. Schedule is
   Meta's standard event for "a person books an appointment" — the literal
   definition of what happened, and the number to report as real bookings. */
export function trackBookingConfirmed(channel) {
  track('Schedule', { content_name: 'NexaERP demo booking', content_category: channel })
}

/* Reached out directly, no booking details (WhatsApp bubble, phone, email). */
export function trackContact(channel) {
  track('Contact', { content_category: channel })
}
