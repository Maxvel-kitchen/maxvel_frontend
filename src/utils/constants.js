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
  { id: 876, title: "Макарун", price: 55, amount: 0, newer: true },
  { id: 876, title: "Маун", price: 5, amount: 0 },
  { id: 876, title: "Макар", price: 85, amount: 0 },
  { id: 876, title: "Мкаун", price: 51, amount: 0 },
];
export { orderFormInputs, data };
