export default defineNuxtRouteMiddleware(() => {
  if (process.server) {
    const event = useRequestEvent();
    if (!event) return navigateTo('/');
    const token = getCookie(event, 'tk_merci');
    if (!token) return navigateTo('/');
    setCookie(event, 'tk_merci', '', { path: '/', maxAge: -1, sameSite: 'lax' });
    return;
  }

  const cookie = useCookie<string | null>('tk_merci');
  if (!cookie.value) return navigateTo('/');
  cookie.value = null;
});