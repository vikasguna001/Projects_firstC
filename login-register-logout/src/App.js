import "./App.css";
import Register from "./Register";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {products.map((products, i) => {
        return <h1>{products.name}</h1>;
      })}
      {users.map((users, i) => {
        return <h1>{users.name}-{users.username}-{users.password}</h1>;
      })}

      <Register />
      {user ? (
        <input
          type="button"
          value="logout"
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
          }}
        />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
