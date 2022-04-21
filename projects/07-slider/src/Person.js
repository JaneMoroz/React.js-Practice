import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Person = ({ image, name, title, quote, personIndex, index, length }) => {
  let position = "nextSlide";

  if (personIndex === index) {
    position = "activeSlide";
  }

  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <article className={position}>
      <img className="person-img" src={image} alt={name} />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Person;
