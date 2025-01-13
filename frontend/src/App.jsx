import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";


import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
