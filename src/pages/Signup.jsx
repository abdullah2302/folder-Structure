import React from 'react'
import AuthFormCard from '../components/common/AuthFormCard'
import AuthFormHeader from '../components/common/AuthFormHeader'
import AuthFormDivider from '../components/common/AuthFormDivider'
import AuthPageCenter from '../components/common/AuthPageCenter'
import SignupForm from '../components/signup/SignupForm'
import SignupFooter from '../components/signup/SignupFooter'

const Signup = () => {
  return (
    <AuthPageCenter>
      <AuthFormCard>
        <AuthFormHeader type="signup" />
        <SignupForm />
        <AuthFormDivider />
        <SignupFooter />
      </AuthFormCard>
    </AuthPageCenter>
  )
}

export default Signup
