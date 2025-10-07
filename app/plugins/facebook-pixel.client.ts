export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const pixelId = '1544800703551362'

  const loadPixel = () => {
    if (window.fbq) return

    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `
    script.setAttribute('data-cookieconsent', 'marketing')
    document.head.appendChild(script)
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
