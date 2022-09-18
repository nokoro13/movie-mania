import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageFavorites from "./pages/PageFavorite";
import { PageDetail } from "./pages/PageDetail";
import Footer from "./components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />
        <main>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  {" "}
                  <PageHome /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <PageAbout /> <Footer />
                </>
              }
            />
            <Route
              path="favorites"
              element={
                <>
                  <PageFavorites /> <Footer />
                </>
              }
            />
            <Route path="detail/:id" element={<PageDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
