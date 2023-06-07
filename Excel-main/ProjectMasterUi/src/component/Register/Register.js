import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";

function Register() {
  let common = new CommonService();
  
  const [UserName, SetUserName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Gender, SetGender] = useState("");
  const [Submitted,SetSubmitted] = useState(false)
  function SubmitData(){
    
    
    // if(!UserName || !Email || !Password || !FirstName || !LastName || !Phone || !Gender )
    // { 
    //   ToasterError("Please Enter Details..!!");
    //   return
    // }



    SetSubmitted(true)
  
    const UserData = {
      UserName: UserName,
      Email: Email,
      Password: Password,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Gender:Gender
    };
    try {
      const UserRagister = `${urlConstant.User.UserDataPost}`;
      common.httpPost(UserRagister, UserData).then(()=>{
        SetUserName("");
        SetEmail("");
        SetPassword("");
        SetFirstName("");
        SetLastName("");
        SetPhone("");
        SetGender("");
      })
    } catch (error) {
      console.log(error);
    }
  
  }
  
  return (
   <>
   
  <ToastContainer/>

    <div className="auth">
      <div className="auth_left">
        <div className="card">
          <div className="text-center mb-5">
            <Link className="header-brand" to="/">
              <i className="fa fa-soccer-ball-o brand-logo" />
            </Link>
          </div>
          <div className="card-body">
            <div className="card-title">Create new account</div>
            <div className="form-group">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className={'form-control' + ( Submitted && !UserName ? ' invalid' : '')}
                placeholder="Enter name"
                value={UserName}
                onChange={(e) => {
                  SetUserName(e.target.value);
                }}
              />
              <span  className={ ( Submitted && !UserName ? ' invalid_span' : 'valid_span')}>username is requried</span>
            </div>
            <div className="form-group ">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className={'form-control' + ( Submitted && !Email ? ' invalid' : '')}
                placeholder="Enter email"
                value={Email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
              <span  className={ ( Submitted && !Email ? ' invalid_span' : 'valid_span')}>email is requried</span>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={'form-control' + ( Submitted && !Password ? ' invalid' : '')}
                placeholder="Password"
                value={Password}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
             <span  className={ ( Submitted && !Password ? ' invalid_span' : 'valid_span')}>password is requried</span>
            </div>

            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className={'form-control' + ( Submitted && !FirstName ? ' invalid' : '')}
                placeholder="Enter name"
                value={FirstName}
                onChange={(e) => {
                  SetFirstName(e.target.value);
                }}
              />
              <span  className={ ( Submitted && !FirstName ? ' invalid_span' : 'valid_span')}>firstname is requried</span>

            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className={'form-control' + ( Submitted && !LastName ? ' invalid' : '')}
                placeholder="Enter name"
                value={LastName}
                onChange={(e) => {
                  SetLastName(e.target.value);
                }}
              />
              <span  className={ ( Submitted && !LastName ? ' invalid_span' : 'valid_span')}>lastname is requried</span>

            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <input
                type="radio"
                value="Male"
                name="Gender"
                placeholder="Enter name"
                onChange={(e) => {
                  SetGender(e.target.value);
                }}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="Gender"
                placeholder="Enter name"
                onChange={(e) => {
                  SetGender(e.target.value);
                }}
              />
              Female
             <br></br> <span  className={ ( Submitted && !Gender ? ' invalid_span' : 'valid_span')}>gender is requried</span>

            </div>

            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className={'form-control' + ( Submitted && !Phone ? ' invalid' : '')}
                placeholder="Enter name"
                value={Phone}
                onChange={(e) => {
                  SetPhone(e.target.value);
                }}
              />
              <span  className={ ( Submitted && !Phone ? ' invalid_span' : 'valid_span')}>Phonenumber is requried</span>

            </div>

            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">
                  Agree the <a href="#">terms and policy</a>
                </span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" onClick={()=>{SubmitData()}} className="btn btn-primary btn-block">
                Create new account
              </button>
            </div>
          </div>
          <div className="text-center text-muted">
            Already have account? <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="auth_right full_img" />

    </div>
    </>
  );
}

export default Register;
