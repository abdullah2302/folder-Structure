import React from 'react'

const AuthFormHeader = ({type}) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-theme mb-2">
        {type === "login" ? "Welcome back" : "Create account"}
      </h2>
      <p className="text-muted text-sm">
        {type === "login" ? "Sign in to your account" : "Get started with your free account"}
      </p>
    </div>
  )
}

export default AuthFormHeader
