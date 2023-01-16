import style from "./map.module.css"

function Map() {
  return (
    <div className={style.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.9622598803894!2d33.32072321523444!3d34.78172538041384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bc9d7e07eb34e7f!2zMzTCsDQ2JzU0LjIiTiAzM8KwMTknMjIuNSJF!5e0!3m2!1sru!2sru!4v1673510258009!5m2!1sru!2sru"
        width="297"
        height="203"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта"
      />
    </div>
  );
}

export default Map;
