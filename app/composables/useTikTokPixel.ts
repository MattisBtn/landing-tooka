export const useTikTokPixel = () => {
  const page = (data?: Record<string, any>) => {
    if (import.meta.client && (window as any).ttq) {
      ;(window as any).ttq.page(data)
    }
  }

  const track = (event: string, data?: Record<string, any>) => {
    if (import.meta.client && (window as any).ttq) {
      ;(window as any).ttq.track(event, data)
    }
  }

  return { page, track }
}


