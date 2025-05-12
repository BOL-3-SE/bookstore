export const useAuth = () => {
  const client = useSupabaseClient()
  const user = useSupabaseUser()

  const login = async (email: string, password: string) => {
    const { error } = await client.auth.signInWithPassword({ email, password })
    if (error) throw createError({ statusCode: 401, message: error.message })
  }

  const register = async (email: string, password: string) => {
    const { error } = await client.auth.signUp({ email, password })
    if (error) throw createError({ statusCode: 400, message: error.message })
  }

  const logout = async () => {
    const { error } = await client.auth.signOut()
    if (error) throw createError({ statusCode: 500, message: error.message })
  }

  const getSession = async () => {
    const { data, error } = await client.auth.getSession()
    if (error) throw createError({ statusCode: 500, message: error.message })
    return data.session
  }

  return {
    user,
    login,
    register,
    logout,
    getSession,
  }
}
