/**
 * Public array of routes
 * These routes are publicly accessible
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
]

/**
 * Protected array of routes
 * These routes are protected by authentication
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

/**
 * The prefix for API routes authentication
 * Routes that start with this prefix are protected
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default login redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"