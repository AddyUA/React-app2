import React from "react";
import store from "../../../redux/redux";
import { deletePostActionCreator } from "../../../redux/profile-reducer";

const Post = (props) => {
  // debugger;

  let postElement = React.createRef();

  const delPost = () => {
    // debugger;
    let author = postElement.current.firstChild.lastChild.innerText;
    // возвращает число из строки
    let id = parseInt(postElement.current.id.match(/\d+/));
    store.dispatch(deletePostActionCreator(author, id));
  };

  return (
    <div className="post" id={`post-${props.id}`} ref={postElement}>
      <div className="post__item">
        <img
          className="post__item-img"
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png"
          alt="post logo"
        />
        <h3 className="post__item-author">{props.author}</h3>
      </div>
      <p className="post-text">{props.message}</p>
      <div className="flex-center">
        <button className="post-btn btn" onClick={delPost}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
