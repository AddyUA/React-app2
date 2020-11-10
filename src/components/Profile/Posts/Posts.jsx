import React from "react";

const Posts = props => {
  // debugger;
  const PostsElements = props => {
    return (
      <div className="post" id={`post-${props.id}`} ref={postElementTarget}>
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

  const postElement = props.profilePage.posts.map(el => (
    <PostsElements
      author={el.author}
      message={el.message}
      key={el.id}
      id={el.id}
    />
  ));

  const postElementTarget = React.createRef();

  const delPost = () => {
    // debugger;
    let author = postElementTarget.current.firstChild.lastChild.innerText;
    // возвращает число из строки
    let id = parseInt(postElementTarget.current.id.match(/\d+/));
    props.deletePostActionCreator(author, id);
  };

  return <div className="post-section">{postElement}</div>;
};

export default Posts;
