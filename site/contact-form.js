// Contact form: after sending, return the visitor to the thank-you page on this same site.
const form = document.querySelector('.consult-form')

if (form) {
  const button = form.querySelector('button[type="submit"]')
  const status = form.querySelector('.consult-status')
  const next = form.querySelector('input[name="_next"]')

  if (next && location.protocol.startsWith('http')) {
    next.value = new URL('thank-you.html', location.href).href
  }

  // The browser highlights the first missing field; say so in words too.
  form.addEventListener('invalid', () => {
    status.textContent = 'Please complete the highlighted fields, then send again.'
  }, true)

  form.addEventListener('submit', () => {
    button.disabled = true
    button.textContent = 'Sending…'
    status.textContent = 'Sending your request…'
  })
}
