export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const facebookPixelId = String(config.facebookPixelId)
  let pixelInitialized = false

  const hasMarketingConsent = (): boolean => {
    return window.Cookiebot?.consent?.marketing === true
  }

  const initPixel = async () => {
    if (pixelInitialized || !hasMarketingConsent()) return
    pixelInitialized = true

    try {
      const script = useScriptMetaPixel({
        id: facebookPixelId
      })

      await script.load()
      
      if (window.fbq) {
        window.fbq('track', 'PageView')
      }
    } catch (error) {
      console.error('Failed to load Facebook Pixel:', error)
      pixelInitialized = false
    }
  }

  const handleConsentChange = () => {
    if (hasMarketingConsent()) {
      initPixel()
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('CookiebotOnAccept', handleConsentChange)
    window.addEventListener('CookiebotOnDecline', handleConsentChange)

    if (window.Cookiebot?.consent) {
      initPixel()
    } else {
      const checkCookiebot = setInterval(() => {
        if (window.Cookiebot?.consent) {
          clearInterval(checkCookiebot)
          initPixel()
        }
      }, 100)

      setTimeout(() => clearInterval(checkCookiebot), 5000)
    }
  }
})
