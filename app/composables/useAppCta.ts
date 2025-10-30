import { useFacebookPixel } from '~/composables/useFacebookPixel'
import { useTikTokPixel } from '~/composables/useTikTokPixel'

export const useAppCta = () => {
  const { trackCustom } = useFacebookPixel()
  const { track: trackTt } = useTikTokPixel()

  const handleAppAccessCta = (placement: string) => {
    try {
      trackCustom('AppAccessCTA', { placement, destination: 'app.tooka.io' })
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


