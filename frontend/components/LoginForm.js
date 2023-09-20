import React, { useEffect, useState } from 'react'
import PT from 'prop-types'

const initialFormValues = {
  username: '',
  password: '',
}
export default function LoginForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true)
  // ✨ where are my props? Destructure them here
  const { login } = props;

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    // ✨ implement
    login(values);
    setValues(initialFormValues);
  }
  // const isDisabled = () => { //!changed from this 
  //   const trimmedUsername = values.username.trim();
  //   const trimmedPassword = values.password.trim();
  //   console.log(String(trimmedPassword).length)
  //   // ✨ implement
  //   // Trimmed username must be >= 3, and
  //   // trimmed password must be >= 8 for
  //   // the button to become enabled
  // }
  useEffect(() => {
    const trimmedUsername = values.username.trim();
    const trimmedPassword = values.password.trim();
    if (trimmedUsername.length >= 3 && trimmedPassword.length >= 8) {
      setDisabled(false); 
    }
  }, [values])

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={disabled} id="submitCredentials">Submit credentials</button>
    </form>
  )
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
}
