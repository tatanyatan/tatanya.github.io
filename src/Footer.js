import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="./logo.webp" alt=" " width={137} />
      </div>

      <div className="socsety">
        <a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer">
          <img src='./wasap.webp' alt=" " />
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <img src='./vk.webp' alt=" " />
        </a>
        <a href="https://t.me/telegram" target="_blank" rel="noopener noreferrer">
          <img src='./tg.webp' alt=" " />
        </a>
      </div>

      <div className="texty">
        <p>Copyright &copy; 2023 All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;


