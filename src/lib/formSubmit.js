const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

/**
 * Posts to a Formspree-compatible endpoint (https://formspree.io/f/XXXX or similar).
 * Set VITE_FORM_ENDPOINT in .env to enable real delivery — see README.
 */
export async function submitForm(data) {
  if (!ENDPOINT) {
    console.warn('[form] VITE_FORM_ENDPOINT is not set — submission was not sent anywhere. See README "Contact form" section.');
    return { ok: true, skipped: true };
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Form submission failed with status ${res.status}`);
  return { ok: true };
}
