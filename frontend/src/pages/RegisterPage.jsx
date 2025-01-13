import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-container">
      <h1 className="register-title">Create an Account</h1>
      <form className="register-form">
        <input
          className="register-input"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="register-button">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
