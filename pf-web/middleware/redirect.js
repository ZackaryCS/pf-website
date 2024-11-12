export default defineNuxtRouteMiddleware((to) => {
    if (to.path.startsWith('/api')) return // Only intercept non-API routes
    return navigateTo('/')
  })
  