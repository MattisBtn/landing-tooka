import { useFacebookPixel } from '~/composables/useFacebookPixel'
import { useTikTokPixel } from '~/composables/useTikTokPixel'

export const useAppCta = () => {
  const { trackCustom } = useFacebookPixel()
  const { track: trackTt } = useTikTokPixel()

  const handleAppAccessCta = (placement: string) => {
    try {
      trackCustom('AppAccessCTA', {
        content_name: 'App Access CTA',
        content_category: 'cta',
        destination_url: 'https://app.tooka.io',
        placement
      })
    } catch {}
    try {
      trackTt('ClickButton', {
        button_name: 'AppAccessCTA',
        placement,
        destination: 'app.tooka.io'
      })
    } catch {}
  }

  return { handleAppAccessCta }
}


