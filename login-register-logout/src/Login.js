import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);


  const submit = () => {
    const payload = users.find(
      (user) =>
        user.username === username && username && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("done...");
    } else {
      alert("wrong");
    }
  };

  return (
    <div>
      {/* <from> */}
        <input
          type="text"
          placeholder="uasername"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button onClick={submit}>submit</button>
      {/* </from> */}
    </div>
  );
}

export default Login;
