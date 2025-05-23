import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>SignIn to your <span className="highlight">PopX</span> Account</h2>
        <p>Welcome back to PopX!</p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button className="primary" onClick={() => navigate("/account")}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
