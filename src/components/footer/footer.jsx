import Map from "../map/map";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Map />
      </div>
    </footer>
  );
}

export default Footer;
