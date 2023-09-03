export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (user.value && /^\/auth/.test(to.path))
    return navigateTo('/')
  else if (!user.value && /^\/profile/.test(to.path))
    return navigateTo('/auth')
})
