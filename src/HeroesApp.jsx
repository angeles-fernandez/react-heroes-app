import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <h1><AppRouter/></h1>    
    </AuthProvider>
  )
}
