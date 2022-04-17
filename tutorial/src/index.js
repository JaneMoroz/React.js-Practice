import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// Setup vars
const firstBook = {
  author: "Marilyn Sadler",
  title: "It's Not Easy Being a Bunny",
  img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L.jpg",
};

const secondBook = {
  author: "Shannon Bream",
  title: "The Mothers and Daughters of the Bible Speak",
  img: "https://images-na.ssl-images-amazon.com/images/I/81DSi4ECwyL.jpg",
};

/////////////////////////////////////////////////////
// stateless functional component
// always return JSX

/////////////////////////////////////////////////////
// JSX Rules
// return single element
// div/section/article or fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

/////////////////////////////////////////////////////
// Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello again")
//   );
// };

/////////////////////////////////////////////////////
// Mini Book Project
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

// const Image = () => (
//   <img src="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L.jpg" />
// );

// const Title = () => <h1>It's Not Easy Being a Bunny</h1>;

// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Marilyn Sadler
//   </h4>
// );

// Legacy
// ReactDom.render(<Greeting />, document.getElementById("root"));

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
