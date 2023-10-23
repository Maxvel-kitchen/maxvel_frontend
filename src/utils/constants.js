import image1 from "../images/demo6.png";
import image2 from "../images/demo7.png";
import image3 from "../images/demo9.png";
import image4 from "../images/demo8.png";
import ramen from "../images/ramen-bowl-with-sides.jpg";
import sushi from "../images/sushi.jpg";
import seaplatter from "../images/grilled-seafood-platter.jpg";
import beetsalad from "../images/dinner-salad.jpg";
import grilledveg from "../images/food-garnished-with-greens.jpg";
import strawpancakes from "../images/fruit-topped-pancakes-to-start-the-day.jpg";
import meatball from "../images/meatball-appetizers.jpg";
import tomatpasta from "../images/penne-al-vodka.jpg";
import lobster from "../images/photo-of-a-cooked-and-garnished-lobster-tail.jpg";
import spinaksalad from "../images/root-vegetable-salad.jpg";
import tart from "../images/seafood-salad-appetizer.jpg";
import seapasta from "../images/shellfish-pasta-pizza-and-italian-food.jpg";
import shrimpbread from "../images/shrimp-lunch-dish.jpg";
import texpizza from "../images/tex-mex-pizza-on-cutting-board.jpg";
import raspchock from "../images/top-view-of-raspberries-chocolate-and-mint-in-white-dish.jpg";
import wafflesfresh from "../images/waffles-for-breakfast.jpg";
import caprese from "../images/white-plate-with-a-caprese-salad-on-it-and-dressing.jpg";
import maindish from "../images/bacon-and-eggs-breakfast.jpg";
import flats from "../images/bite-size-flat-bread.jpg";
import meatramen from "../images/chopsticks-held-over-bowl-of-hot-noodle-soup.jpg";
import crepes from "../images/crepes-filled-with-fresh-fruit.jpg";
import cupcake from "../images/cupcakes-with-red-icing-and-small-confetti-hearts.jpg";
import creme from "../images/curry-bowl-garnished-with-greens.jpg";
import platedsuchi from "../images/fresh-plated-sushi-roll.jpg";

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
    id: 1,
    image: image1,
    title: "Мини круассан с лососем, рукколой и цитрусовой филадельфией",
    price: 5,
    amount: 0,
    newer: true,
  },
  {
    id: 76,
    image: image2,
    title: "Тост с форшмаком из сельди и перепелиным яйцом",
    price: 2,
    amount: 0,
  },
  { id: 809, image: image3, title: "Оладушки с лососем", price: 3, amount: 0 },
  {
    id: 602,
    image: image4,
    title: "Салат из свежей зелени и овощей",
    price: 4,
    amount: 0,
  },
];

export const newData = [
  {
    id: 1,
    image: image1,
    title: "Мини круассан с лососем, рукколой и цитрусовой филадельфией",
    price: 5,
    amount: 0,
    newer: true,
  },
  {
    id: 2,
    image: image2,
    title: "Тост с авокадо и яйцом",
    price: 2,
    amount: 0,
    newer: true,
  },
  {
    id: 3,
    image: image3,
    title: "Оладушки с лососем",
    price: 3,
    amount: 0,
    newer: true,
  },
  {
    id: 4,
    image: image4,
    title: "Салат из свежей зелени и овощей",
    price: 3,
    amount: 0,
    newer: true,
  },
];

export const asia = [
  {
    id: 5,
    image: ramen,
    title: "Рамен с яйцом и специями",
    price: 4,
    amount: 0,
  },
  {
    id: 7,
    image: meatramen,
    title: "Большой рамен с мясом и овощами",
    price: 5,
    amount: 0,
  },
  {
    id: 6,
    image: sushi,
    title: "Суши-ассорти на компанию",
    price: 8,
    amount: 0,
  },
  {
    id: 8,
    image: platedsuchi,
    title: "Большой платтер суши в ассортименте",
    price: 8,
    amount: 0,
  },
];

export const dessert = [
  {
    id: 9,
    image: strawpancakes,
    title: "Панкейки со свежей клубникой",
    price: 4,
    amount: 0,
    newer: true,
  },
  {
    id: 10,
    image: crepes,
    title: "Блины со свежими овощами и карамелью",
    price: 5,
    amount: 0,
  },
  {
    id: 11,
    image: cupcake,
    title: "Ванильные капкейки с декоративными элементами",
    price: 2,
    amount: 0,
  },
  {
    id: 12,
    image: raspchock,
    title: "Боул свежая малина с мятой, шоколадом и взбитыми сливками",
    price: 4,
    amount: 0,
  },
  {
    id: 13,
    image: wafflesfresh,
    title: "Венские вафли со свежими ягодами, фруктами и джемом",
    price: 4,
    amount: 0,
  },
];

export const platter = [
  {
    id: 14,
    image: seaplatter,
    title: "Платтер из жареных морепродуктов и овощей",
    price: 20,
    amount: 0,
    newer: true,
  },
  {
    id: 6,
    image: sushi,
    title: "Суши-ассорти на компанию",
    price: 8,
    amount: 0,
  },
  {
    id: 8,
    image: platedsuchi,
    title: "Большой платтер суши в ассортименте",
    price: 5,
    amount: 0,
  },
];

export const salad = [
  {
    id: 4,
    image: image4,
    title: "Салат из свежей зелени и овощей",
    price: 3,
    amount: 0,
    newer: true,
  },
  {
    id: 15,
    image: beetsalad,
    title: "Салат со свеклой, зеленью и кедровыми орешками",
    price: 5,
    amount: 0,
  },
  {
    id: 16,
    image: spinaksalad,
    title: "Салат с тыквой и шпинатом",
    price: 3,
    amount: 0,
  },
  {
    id: 17,
    image: caprese,
    title: "Салат капрезе с листочками мяты",
    price: 4,
    amount: 0,
  },
];

export const mainDish = [
  [
    {
      id: 18,
      image: maindish,
      title: "Большое главное людо с беконом, картофелем, овощами и грибами",
      price: 7,
      amount: 0,
      newer: true,
    },
    {
      id: 19,
      image: texpizza,
      title:
        "Пицца по-мексикански с куриной грудкой, сладким перцем и кукурузой",
      price: 7,
      amount: 0,
    },
    {
      id: 7,
      image: meatramen,
      title: "Большой рамен с мясом и овощами",
      price: 5,
      amount: 0,
    },
  ],
  [
    {
      id: 20,
      image: lobster,
      title: "Лобстер фаршированный изысканным соусом с зеленью",
      price: 15,
      amount: 0,
    },
    {
      id: 21,
      image: seapasta,
      title: "Паста с мидиями и креветками",
      price: 9,
      amount: 0,
    },
    {
      id: 22,
      image: shrimpbread,
      title: "Боул запеченные креветки с брускеттой и зеленью",
      price: 7,
      amount: 0,
    },
    {
      id: 3,
      image: image3,
      title: "Оладушки с лососем",
      price: 3,
      amount: 0,
      newer: true,
    },
  ],
  [
    {
      id: 23,
      image: tomatpasta,
      title: "Паста аль денте 'Перья' с томатным соусом",
      price: 5,
      amount: 0,
    },
    {
      id: 24,
      image: creme,
      title: "Крем-суп с зеленью",
      price: 4,
      amount: 0,
    },
  ],
];

export const starter = [
  [
    {
      id: 25,
      image: meatball,
      title: "Мясные шарики с брусничным соусом",
      price: 10,
      amount: 0,
    },
    {
      id: 26,
      image: flats,
      title: "Мясные и овощные тарталетки на плоской лепешке",
      price: 8,
      amount: 0,
    },
  ],
  [
    {
      id: 27,
      image: tart,
      title: "Тарталетки с измельченными морепродуктами",
      price: 10,
      amount: 0,
    },
    {
      id: 1,
      image: image1,
      title: "Мини круассан с лососем, рукколой и цитрусовой филадельфией",
      price: 5,
      amount: 0,
      newer: true,
    },
  ],
  [
    {
      id: 28,
      image: grilledveg,
      title: "Запеченые овощи с зеленью",
      price: 5,
      amount: 0,
    },
    {
      id: 2,
      image: image2,
      title: "Тост с авокадо и яйцом",
      price: 2,
      amount: 0,
      newer: true,
    },
  ],
];

export { orderFormInputs, data };
