const initialMainMenuReducer = {
  mainMenuList: [
    {
      id: 13,
      name: "Руккола, креветки, пармезан, валяные томаты",
      price: "4.00",
      new: false,
      text: "текст",
      ingredients: "ингредиенты",
      image: null,
      category: [2],
      sub_category: [],
    },
    {
      id: 14,
      name: "Три вида томатов, буффало, моцарелла, авокадо",
      price: "4.00",
      new: false,
      text: "текст",
      ingredients: "ингредиенты",
      image: null,
      category: [2],
      sub_category: [],
    },
  ],
};

// eslint-disable-next-line default-param-last
function mainMenuReducer(state = initialMainMenuReducer, action) {
  //   console.log("mainMenuReducer state: ", state);
  return { ...state, mainMenuList: action.payload };
}

export default mainMenuReducer;
