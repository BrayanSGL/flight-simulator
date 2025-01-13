import "./LoginPage.css"

function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input
          className="login-input"
          type="text"
          placeholder="Username"
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
        />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
