import image1 from "../images/demo6.png";
import image2 from "../images/demo7.png";
import image3 from "../images/demo9.png";
import image4 from "../images/demo8.png";

const orderFormInputs = [
  {
    id: "name",
    textarea: false,
    placeholder: "Ваше имя",
    type: "text",
    minLength: 3,
  },
  {
    id: "tel",
    textarea: false,
    placeholder: "Ваш номер телефона",
    type: "tel",
    minLength: 3,
  },
  {
    id: "email",
    textarea: false,
    placeholder: "Ваша почта",
    type: "email",
    minLength: 3,
  },
  {
    id: "date",
    textarea: false,
    placeholder: "Дата мероприятия",
    type: "date",
    minLength: 3,
  },
  {
    id: "adress",
    textarea: true,
    placeholder: "Адрес мероприятия",
    type: "text",
    minLength: 3,
  },
  {
    id: "comment",
    textarea: true,
    placeholder: "Комментарий",
    type: "text",
    minLength: 1,
  },
];

const data = [
  {
    id: 876,
    image: image1,
    title: "Мини круассан с лососем, рукколой и цитрусовой филадельфией",
    price: 5,
    amount: 0,
    newer: true,
  },
  {
    id: 76,
    image: image2,
    title: "Бородинский тост с форшмаком из сельди и перепелиным яйцом",
    price: 2,
    amount: 0,
  },
  { id: 809, image: image3, title: "Оладушки с лососем", price: 3, amount: 0 },
  {
    id: 602,
    image: image4,
    title: "Профитроли с муссом из копченого лосося и икрой ",
    price: 4,
    amount: 0,
  },
];
export { orderFormInputs, data };
