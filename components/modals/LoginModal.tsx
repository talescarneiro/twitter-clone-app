import React, { useCallback, useState } from 'react'

import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'

import Input from '../Input'
import Modal from '../Modal'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      email: '', password: ''
    }
  })

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, registerModal, loginModal])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {email, password})
      .then((callback) => {
        console.log(callback)
        setIsLoading(false)

        if (callback?.ok) {
          toast.success('Logged in')
          loginModal.onClose()
        }

        if (callback?.error) {
          toast.error(callback.error)
        }
      })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
        <Input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
        />
        <Input 
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
        />
    </div>
  )

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>First time?</p>
      <span onClick={onToggle} className='text-white cursor-pointer hover:underline'> Create an account</span>
    </div>
  )

  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title='Login'
        actionLabel='Sign in'
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default LoginModal