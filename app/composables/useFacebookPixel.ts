export const useFacebookPixel = () => {
  const track = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined' || !window.fbq) return
    window.fbq('track', event, data)
  }

  const trackCustom = (event: string, data?: Record<string, any>) => {
    if (typeof window === 'undefined' || !window.fbq) return
    window.fbq('trackCustom', event, data)
  }

  return { track, trackCustom }
}
