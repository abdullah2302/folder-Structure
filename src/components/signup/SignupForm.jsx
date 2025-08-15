import React from 'react'
import EmailField from '../common/EmailField'
import PasswordField from '../common/PasswordField'
import SignupButton from './SignupButton'
import { useAuthForm } from '../../hooks/useAuthForm'

const SignupForm = () => {
  const { formData, handleChange } = useAuthForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`signup success! Email: ${formData.email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <EmailField value={formData.email} onChange={handleChange} />
      <PasswordField value={formData.password} onChange={handleChange} />
      <SignupButton />
    </form>
  )
}

export default SignupForm
