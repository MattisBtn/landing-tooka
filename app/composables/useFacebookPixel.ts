export const useFacebookPixel = () => {
  const track = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined') return

    if (window.Cookiebot?.consent?.marketing && window.fbq) {
      window.fbq('track', event, data)
    }
  }

  const trackCustom = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined') return

    if (window.Cookiebot?.consent?.marketing && window.fbq) {
      window.fbq('trackCustom', event, data)
    }
  }

  return {
    track,
    trackCustom
  }
}

