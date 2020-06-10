import React from "react";

const Book = ({ title, description, published_year }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{description}</h5>
      <p>{published_year}</p>
    </div>
  );
};
export default Book;
