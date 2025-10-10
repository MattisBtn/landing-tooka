export const useFacebookPixel = () => {
  const track = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined') {
      console.warn('[FB Pixel] Window is undefined')
      return
    }
    if (!window.fbq) {
      console.warn('[FB Pixel] fbq not loaded yet')
      return
    }
    console.log('[FB Pixel] Tracking:', event, data)
    window.fbq('track', event, data)
  }

  const trackCustom = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined') {
      console.warn('[FB Pixel] Window is undefined')
      return
    }
    if (!window.fbq) {
      console.warn('[FB Pixel] fbq not loaded yet')
      return
    }
    console.log('[FB Pixel] Tracking Custom:', event, data)
    window.fbq('trackCustom', event, data)
  }

  return { track, trackCustom }
}
