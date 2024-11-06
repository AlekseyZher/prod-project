import { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/aboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/mainPage/MainPageAsync";
import { useTheme } from "./theme/useTheme";
import { className } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>тема</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
