const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY",
  SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, author: "Sam Fisher" },
    { id: 2, author: "Sarah Connor" },
    { id: 3, author: "Alex Merphie" }
  ],
  messages: [
    { id: 1, message: "- Hi! How are you?!", type: "question" },
    { id: 2, message: "- Hello! I`m Fine. Ty!", type: "answer" },
    { id: 3, message: "- And how you?", type: "answer" },
    { id: 4, message: "- I`m fine too", type: "question" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = {
        id: 5,
        message: `- ${state.newMessageBody}`,
        type: "answer"
      };
      state.messages.push(body);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = message => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: message
});

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE
});

export default dialogsReducer;
