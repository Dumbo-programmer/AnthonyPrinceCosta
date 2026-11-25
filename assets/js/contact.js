/* contact */
(function () {
  'use strict';

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  // Fallback for older browsers and non-secure local previews.
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    copied = false;
  }
  document.body.removeChild(el);
  return copied;
}

const copyPhoneBtn = document.getElementById('copy-phone-btn');
const copyPhoneLabel = document.getElementById('copy-phone-label');
const copyFeedback = document.getElementById('copy-feedback');
const copyFeedbackText = document.getElementById('copy-feedback-text');
if (copyPhoneBtn) {
  copyPhoneBtn.addEventListener('click', async () => {
    const copied = await copyText('+880 1720-242606');
    if (copyPhoneLabel) copyPhoneLabel.textContent = copied ? 'Copied!' : 'Copy failed';
    if (copyFeedbackText) {
      copyFeedbackText.textContent = copied
        ? 'Copied +880 1720-242606 to clipboard.'
        : 'Clipboard unavailable — please copy the number manually.';
    }
    if (copyFeedback) copyFeedback.classList.remove('hidden');
    setTimeout(() => {
      if (copyPhoneLabel) copyPhoneLabel.textContent = 'Copy Number';
      if (copyFeedback) copyFeedback.classList.add('hidden');
    }, 2500);
  });
}

const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value.trim();
    const role = document.getElementById('sender-role').value.trim();
    const msg = document.getElementById('sender-message').value.trim();
    const intro = role
      ? `Greetings Sir,\nFrom: ${name} (${role})`
      : `Greetings Sir,\nFrom: ${name}`;
    const encoded = encodeURIComponent(`${intro}\n\n${msg}`);
    window.open(`https://wa.me/8801720242606?text=${encoded}`, '_blank', 'noopener,noreferrer');
  });
}
})();
