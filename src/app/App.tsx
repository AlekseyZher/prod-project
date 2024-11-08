import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { className } from "shared/config/lib/classNames/classNames";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>тема</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
