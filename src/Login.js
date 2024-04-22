import { useState } from "react";
/*import useNavigate*/
import { useNavigate} from "react-router-dom";

function Login() {
  /*called useNavigate function in order to return navigate*/
  const navigate = useNavigate();
  let [username, setUsername] = useState(null);
  let [password, setPassword] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      /* use navigate here*/
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-xl text-gray-900 pb-3">Login</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            className="border w-full focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            className="border w-full focus:outline-none"
          />
        </div>
        <button className="px-12 py-2 bg-purple-600 text-white hover:bg-purple-500 focus:outline-none">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
