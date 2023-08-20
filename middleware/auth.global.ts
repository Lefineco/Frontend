export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (/auth/.test(to.fullPath) && user.value)
    return navigateTo('/')
})
