import dialogsReducer from "../dialogs-reducer";
import profileReducer from "../profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          author: "Sam Fisher",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem
                    consectetur itaque in. Magni aperiam incidunt unde consequuntur. Ad
                    vitae corporis laboriosam similique quam, necessitatibus veniam quis
                    porro atque! Veniam?`,
        },
        {
          id: 2,
          author: "Sarah Connor",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        },
        {
          id: 3,
          author: "Alex Merphie",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem
                    consectetur itaque in. Magni aperiam incidunt unde consequuntur.`,
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, author: "Sam Fisher" },
        { id: 2, author: "Sarah Connor" },
        { id: 3, author: "Alex Merphie" },
      ],
      messages: [
        { id: 1, message: "- Hi! How are you?!", type: "question" },
        { id: 2, message: "- Hello! I`m Fine. Ty!", type: "answer" },
        { id: 3, message: "- And how you?", type: "answer" },
        { id: 4, message: "- I`m fine too", type: "question" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // debugger;
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber();
  },
};

window.store = store;

export default store;
