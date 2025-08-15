import React from 'react'

const AuthFormCard = ({children, className = ""}) => {
  return (
    <div className={`w-full max-w-sm card-modern ${className}`}>
      {children}
    </div>
  )
}

export default AuthFormCard
