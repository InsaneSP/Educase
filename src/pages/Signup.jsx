import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", company: "", isAgency: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    const { name, phone, email, password, company, isAgency } = form;
    if (!name || !phone || !email || !password || !company || !isAgency) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      return;
    }
    navigate("/account");
  };

  return (
    <div className="container">
      <div className="card signup-container">
        <h2>Create your <span className="highlight">PopX</span> account</h2>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          {/* Agency Radio Buttons */}
          <div className="input-group">
            <label>Are you an agency?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button className="primary" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
