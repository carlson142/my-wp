import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import { AnimatePresence } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const location = useLocation();

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/my-wp" element={<HomePage />} /> {/* ЗАМЕНИТЬ ПРИ ДЕПЛОЕ! */}
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Container>
  );
};

export default App;
