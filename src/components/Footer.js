import "../footer.css";

function Footer({ copyright }) {
  return (
    <footer>
      <ul className="footer-flex">
        <li>
          <span>{copyright} Copyright 2022</span>
        </li>
        <li>Noah Kondra-Ross</li>
        <li>Erik Larsen</li>
        <li>Emerson Connors</li>
      </ul>
    </footer>
  );
}
Footer.defaultProps = {
  copyright: "\u00a9",
};

export default Footer;
