import React from 'react'
import AuthFormCard from '../components/common/AuthFormCard'
import AuthFormHeader from '../components/common/AuthFormHeader'
import AuthFormDivider from '../components/common/AuthFormDivider'
import AuthPageCenter from '../components/common/AuthPageCenter'
import LoginForm from '../components/login/LoginForm'
import LoginFooter from '../components/login/LoginFooter'

const Login = () => {
  return (
    <AuthPageCenter>
      <AuthFormCard>
        <AuthFormHeader type="login" />
        <LoginForm />
        <AuthFormDivider />
        <LoginFooter />
      </AuthFormCard>
    </AuthPageCenter>
  )
}

export default Login