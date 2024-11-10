import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import { IconButton, Theme } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import ProductPage from "./pages/ProductPage";

function App() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <Theme grayColor="mauve" radius="large" appearance={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="theme__button">
          <IconButton onClick={changeTheme}>
            {theme == "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </div>
      </Theme>
    </>
  );
}

export default App;
