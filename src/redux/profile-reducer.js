const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  DEL_POST = "DEL-POST";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  //   debugger;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        author: "Kolya Bubkin",
        message: state.newPostText,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case DEL_POST:
      for (let i = 0; i < state.posts.length; i++) {
        if (
          state.posts[i].id === action.id &&
          state.posts[i].author === action.author
        ) {
          state.posts.splice([i], 1);
        }
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const upateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const deletePostActionCreator = (author, id) => ({
  type: DEL_POST,
  author: author,
  id: id,
});

export default profileReducer;
