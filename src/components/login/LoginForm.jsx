import React from 'react'
import EmailField from '../common/EmailField'
import PasswordField from '../common/PasswordField'
import LoginButton from './LoginButton'
import { useAuthForm } from '../../hooks/useAuthForm'

const LoginForm = () => {
  const { formData, handleChange } = useAuthForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`login success! Email: ${formData.email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <EmailField value={formData.email} onChange={handleChange} />
      <PasswordField value={formData.password} onChange={handleChange} />
      <LoginButton />
    </form>
  )
}

export default LoginForm
