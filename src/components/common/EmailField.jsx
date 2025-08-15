import React from 'react'

const EmailField = ({value, onChange}) => {
  return (
    <div className="form-group">
    <label className="form-label">Email address</label>
    <input
      name="email"
      type="email"
      placeholder="Enter your email"
      value={value}
      onChange={onChange}
      className="input-modern focus-ring"
      required
    />
  </div>
  )
}

export default EmailField