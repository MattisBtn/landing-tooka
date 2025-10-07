declare global {
  interface Window {
    fbq?: (
      command: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, any>
    ) => void
    _fbq?: any
    Cookiebot?: {
      consent?: {
        marketing: boolean
        statistics: boolean
        preferences: boolean
        necessary: boolean
      }
      consented?: boolean
      declined?: boolean
      hasResponse?: boolean
      show?: () => void
      renew?: () => void
      withdraw?: () => void
    }
  }
}

export {}

