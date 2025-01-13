import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">Oops! Pagina no escontrada.</p>
        <a href="/" className="notfound-button">Volver a casa</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
