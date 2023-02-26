/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useForm } from "react-hook-form";
import Map from "../map/map";
import Input from "../input/input";
import InputValidate from "../input-validate/input-validate";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import style from "./footer.module.css";

function Footer() {
  const {
    register,
    formState: { errors, isValid, dirtyFields },
  } = useForm({ mode: "onChange" });
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Element name="contacts">
          <div className={style.contacts}>
            <a className={style.text} href="tel:+35799981120">
              +35799981120
            </a>
            <ul className={style.items}>
              <li className={style.link}>
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
        </Element>
        <div className={style.map}>
          <p className={style.text}>Tochni 7740, Кипр</p>
          <Map />
        </div>
        <form className={style.form}>
          <p className={style.text}>
            Ничего не хочу решать, просто позвоните мне:
          </p>
          <fieldset className={style.fieldset}>
            <InputValidate
              styles={style.input}
              dirtyFields={dirtyFields.tel}
              placeholder="Ваш номер телефона"
              type="tel"
              name="tel"
              register={register("tel", {
                required: true,
                minLength: 10,
              })}
              errors={errors.tel}
              emptyMessage="Введите номер телефона"
              incorrectMessage="Номер введён неверно"
            />

            <Input
              styles={style.input}
              placeholder="Комментарий"
              type="text"
              name="comment"
              register={register("comment")}
            />
            <Checkbox
              register={register("checkbox", {
                required: true,
              })}
              styles={style.checkbox}
              id="footer-check"
            />
            <Button
              text="Отправить"
              submit
              disabled={!isValid}
              styles={style.button}
            />
          </fieldset>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
