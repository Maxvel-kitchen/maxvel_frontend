/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Map from "../map/map";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contacts}>
          <p className={style.text}>+35799981120</p>
          <ul className={style.items}>
            <li className={style.item}>
              <a
                target="_blank"
                className={`${style.link} ${style.link_instagram}`}
                href="https://www.instagram.com"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li className={style.link}>
              <a
                target="_blank"
                className={`${style.link} ${style.link_telegram}`}
                href="https://web.telegram.org/"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li className={style.link}>
              <a
                target="_blank"
                className={`${style.link} ${style.link_whatsapp}`}
                href="https://web.whatsapp.com/"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
        <div className={style.map}>
          <p className={style.text}>Tochni 7740, Кипр</p>
          <Map />
        </div>
        <form>
          <p className={style.text}>
            Ничего не хочу решать, просто позвоните мне:
          </p>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
