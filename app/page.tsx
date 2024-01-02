import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

import React from 'react'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

const font = Poppins({ subsets: ['latin'], weight: '600' })

const Home = () => {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-500 to-zinc-800'>
      <div className='space-y-6 text-center max-w-sm'>
        <h1 className={cn(
          'text-6xl font-semibold text-white drop-shadow-md',
          font.className
          )}>Auth.K</h1>
        <p className='text-white text-xl'>Funcionalidade completa para autenticação de usuários</p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Entrar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}

export default Home