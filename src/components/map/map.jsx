import style from "./map.module.css";

function Map() {
  return (
    <div className={style.map}>
      <iframe
        className={style.content}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d791.3358605266632!2d33.322777290886265!3d34.781557486838494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e0bb9f7cedf309%3A0xb8f923ea8f96bb9!2sMaxVel%20Kitchen!5e0!3m2!1sru!2sru!4v1677420877538!5m2!1sru!2sru"
        width="297"
        height="203"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта"
      />
    </div>
  );
}

export default Map;
