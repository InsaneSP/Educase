import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <img
          src="https://i.imgur.com/4M34hi2.png"
          alt="PopX Logo"
          style={{ width: "80px", margin: "0 auto 20px" }}
        />
        <h1>Welcome to <span className="highlight">PopX</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/signup">
            <button className="primary">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="secondary">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
