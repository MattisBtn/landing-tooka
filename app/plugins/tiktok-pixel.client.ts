export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const pixelId = (config.public as any)?.tiktokPixelId as string | undefined

  const loadPixel = () => {
    if (!pixelId || (window as any).ttq?.loaded) return
    ;(function (w: any, d: Document, libName: string) {
      w.TiktokAnalyticsObject = libName
      const ttq = (w[libName] = w[libName] || [])
      ttq.loaded = true
      ttq.methods = [
        'page',
        'track',
        'identify',
        'instances',
        'debug',
        'on',
        'off',
        'once',
        'ready',
        'alias',
        'group',
        'enableCookie',
        'disableCookie',
        'holdConsent',
        'revokeConsent',
        'grantConsent',
      ]
      ttq.setAndDefer = (target: any, method: string) => {
        target[method] = function () {
          target.push([method].concat([].slice.call(arguments, 0)))
        }
      }
      for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i])
      ttq.instance = function (id: string) {
        const inst = ttq._i[id] || []
        for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(inst, ttq.methods[n])
        return inst
      }
      ttq.load = (id: string, n?: any) => {
        const src = 'https://analytics.tiktok.com/i18n/pixel/events.js'
        ttq._i = ttq._i || {}
        ttq._i[id] = []
        ttq._i[id]._u = src
        ttq._t = ttq._t || {}
        ttq._t[id] = +new Date()
        ttq._o = ttq._o || {}
        ttq._o[id] = n || {}
        const s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = `${src}?sdkid=${id}&lib=${libName}`
        const firstScript = d.getElementsByTagName('script')[0]
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(s, firstScript)
        } else if (d.head) {
          d.head.appendChild(s)
        } else if (d.body) {
          d.body.appendChild(s)
        }
      }
      ttq.load(pixelId)
      ttq.page()
    })(window, document, 'ttq')
  }

  const loadWhenMarketingConsent = () => {
    const cb = (window as any).Cookiebot
    if (cb?.consent?.marketing) {
      loadPixel()
      return
    }
    window.addEventListener('CookiebotOnConsentReady', () => {
      if ((window as any).Cookiebot?.consent?.marketing) loadPixel()
    })
    window.addEventListener('CookiebotOnAccept', () => {
      if ((window as any).Cookiebot?.consent?.marketing) loadPixel()
    })
  }

  loadWhenMarketingConsent()

  const router = useRouter()
  router.afterEach(() => {
    ;(window as any).ttq?.page()
  })
})


