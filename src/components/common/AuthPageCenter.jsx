import React from 'react'

const AuthPageCenter = ({children, className = ""}) => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      {children}
    </div>
  )
}

export default AuthPageCenter
