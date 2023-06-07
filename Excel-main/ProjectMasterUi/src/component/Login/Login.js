import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginData, incNumber, decNumber } from "../../redux/action/LoginAction";
import urlConstant from '../../constants/urlConstant';
import CommonService from "../../services/commonService";


function Login() {
  let navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  let common = new CommonService();
 
  const submit = () => {
    debugger;
    const data = {
      Email:username,
      Password:password 
    };
      // axios.get(env.apiURL + `bussinessUnit/BusinessUnit_BussinssUnitgetdata`, {})
      const getBussinssUnit = `${urlConstant.User.UserLogin}`;
      common
        .httpPost(getBussinssUnit,data)
        .then(function (res) {
          // setList(res.data.data);
          debugger;
          const payload ={
            username : res.data.UserName  , Password : res.data.Password,Email : res.data.Email
          };
          //  const payload = res.data.data.find(
          //     (user) =>
          //       user.username === username && username && user.password === password
          //   );
          if (payload) {
            dispatch({
              type: "LOGIN",
              payload,
            });

            navigate("/", { replace: true });
            alert("done...");
          } else {
            alert("wrong");
          }
        })
        .catch(function (error) {
          console.log(error);
         // ToasterError("Error");
        });
    // const payload = users.find(
    //   (user) =>
    //     user.username === username && username && user.password === password
    // );

  
  };

  return (
    <>
      <div className="auth">
        <div className="auth_left">
          <div className="card">
            <div className="text-center mb-2">
              {/*
          <a className="header-brand" href="index-2.html">
            <i className="fa fa-soccer-ball-o brand-logo" />
          </a>{" "}
          */}
              <Link className="header-brand" to="/">
                <i className="fa fa-soccer-ball-o brand-logo" />
              </Link>
            </div>
            <div className="card-body">
              <div className="card-title">Login to your account</div>
              {/* <div className="form-group">
                <select className="custom-select">
                  <option>Project Manager</option>
                  <option>Team Leader</option>
                  <option>Employee</option>
                </select>
              </div> */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Password
                  <a href="forgot-password.html" className="float-right small">
                    I forgot password
                  </a>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">Remember me</span>
                </label>
              </div>
              <div className="form-footer">
                {/* <a href="/" className="btn btn-primary btn-block" title="">
                  Sign in
                </a> */}
                <button  className="btn btn-primary btn-block" onClick={submit}> Sign in</button>
              </div>
            </div>
            <div className="text-center text-muted">
              Don't have account yet? <link to="/Register" />
              Sign up
            </div>
          </div>
        </div>
        <div className="auth_right full_img" />
      </div>
    </>
  );
}

export default Login;
