import React from 'react'

const PasswordField = ({value, onChange}) => {
  return (
    <div className="form-group">
    <label className="form-label">Password</label>
    <input
      name="password"
      type="password"
      placeholder="Enter your password"
      value={value}
      onChange={onChange}
      className="input-modern focus-ring"
      required
    />
  </div>
  )
}

export default PasswordField