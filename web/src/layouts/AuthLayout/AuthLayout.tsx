import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="bg-auth">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-24 w-[460px] pt-20"
        />
        <div className="auth-wrapper">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default AuthLayout
