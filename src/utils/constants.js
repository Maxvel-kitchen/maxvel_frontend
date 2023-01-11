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

export default orderFormInputs;
