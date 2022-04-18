import React from "react";

const Book = (props) => {
  // Destructuring
  const { img, title, author, children } = props;
  // OR pass { img, title, author } in the parameters instead of props

  // Attribute, Event Handler
  // onClick, onMouseOver
  // reference example
  const clickHandler = (e) => {
    e.target.innerText = "clicked";
    alert("hello on click");
  };
  // If you need to pass an argument
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      {children}
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
