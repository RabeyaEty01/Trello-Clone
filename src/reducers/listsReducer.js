const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a static list and a static card",
      },
      {
        id: 1,
        text: "we used a mix between material UI React and styled components",
      },
    ],
  },
  {
    title: "This Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we will create our first reducer",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita.",
      },
      {
        id: 2,
        text: "consectetur adipisicing elit.sit amet consectetur adipisicing elit. Officia reiciendis magni ipsa eos iure expedita delectus, quo architecto sint consectetur!",
      },
    ],
  },
  {
    title: "This Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we will create our first reducer",
      },
      {
        id: 1,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, expedita.",
      },
      {
        id: 2,
        text: "consectetur adipisicing elit.sit amet consectetur adipisicing elit. Officia reiciendis magni ipsa eos iure expedita delectus, quo architecto sint consectetur!",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default listsReducer;
