export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (/auth/.test(to.fullPath) && user.value)
    return navigateTo('/')

  if (!/profile/.test(to.fullPath) && !user.value)
    return navigateTo('/auth')
})
