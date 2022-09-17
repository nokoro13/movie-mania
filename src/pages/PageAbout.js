import { useEffect } from "react";
import "../about.css";
import tmdbLogo from "../images/tmdb-logo.svg";

const PageAbout = () => {
  useEffect(() => {
    document.title = `About`;
  }, []);

  return (
    <section className="page-heading">
      <section className="about-body">
        <h2>About page</h2>
        <p>
          Moovy is a movie database website that displays movies based upon the
          users preferences. We feature movies from around the world, old and
          new a like. We strive to make finding movies a simple and easy
          process.
        </p>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <div className="tmdb-flex">
          <img src={tmdbLogo} alt="tmdb logo" className="tmdb-logo-img" />
        </div>
      </section>
    </section>
  );
};

export default PageAbout;
