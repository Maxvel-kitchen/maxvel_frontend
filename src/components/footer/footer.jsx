/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
import Map from "../map/map";
import Input from "../input/input";
import Button from "../button/button";
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
                aria-label="instagram"
              ></a>
            </li>
            <li className={style.link}>
              <a
                target="_blank"
                className={`${style.link} ${style.link_telegram}`}
                href="https://web.telegram.org/"
                rel="noopener noreferrer"
                aria-label="telegram"
              ></a>
            </li>
            <li className={style.link}>
              <a
                target="_blank"
                className={`${style.link} ${style.link_whatsapp}`}
                href="https://web.whatsapp.com/"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              ></a>
            </li>
          </ul>
        </div>
        <div className={style.map}>
          <p className={style.text}>Tochni 7740, Кипр</p>
          <Map />
        </div>
        <form className={style.form}>
          <p className={style.text}>
            Ничего не хочу решать, просто позвоните мне:
          </p>
          <fieldset className={style.fieldset}>
            <Input
              placeholder="Ваш номер телефона"
              type="text"
              minLength="8"
              required="required"
            />
            <Input
              placeholder="Комментарий"
              type="text"
              minLength="100"
              required="required"
            />
            <Button text="Отправить" styles={style.submit} submit />
          </fieldset>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
