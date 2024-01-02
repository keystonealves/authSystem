import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div
        className='flex h-full items-center justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-500 to-zinc-800'>
      {children}
    </div>
  )
}

export default AuthLayout