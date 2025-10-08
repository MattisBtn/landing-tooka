export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const pixelId = '1544800703551362'

  const loadPixel = () => {
    if (window.fbq) return

    const n: any = window.fbq = function(...args: any[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
    }
    if (!window._fbq) window._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    window.fbq('init', pixelId)
    window.fbq('track', 'PageView')
  }

  const checkConsent = () => {
    if (window.Cookiebot?.consent?.marketing) {
      loadPixel()
    }
  }

  window.addEventListener('CookiebotOnAccept', checkConsent)
  window.addEventListener('CookiebotOnDecline', checkConsent)

  const interval = setInterval(() => {
    if (window.Cookiebot) {
      clearInterval(interval)
      checkConsent()
    }
  }, 100)

  setTimeout(() => clearInterval(interval), 10000)
})
