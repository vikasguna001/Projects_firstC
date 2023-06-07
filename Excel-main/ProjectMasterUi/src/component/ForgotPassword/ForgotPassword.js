import React from 'react'

function ForgotPassword() {
  return (
    <div className="auth">
    <div className="auth_left">
      <div className="card">
        <div className="text-center mb-5">
          <a className="header-brand" href="index-2.html">
            <i className="fa fa-soccer-ball-o brand-logo" />
          </a>
        </div>
        <div className="card-body">
          <div className="card-title">Forgot password</div>
          <p className="text-muted">
            Enter your email address and your password will be reset and emailed
            to you.
          </p>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-primary btn-block">
              Send me new password
            </button>
          </div>
        </div>
        <div className="text-center text-muted">
          Forget it, <a href="login.html">Send me Back</a> to the Sign in screen.
        </div>
      </div>
    </div>
    <div className="auth_right full_img" />
  </div>
  
  )
}

export default ForgotPassword;