import React from "react";

const Book = ({ title, description, updated_date }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{description}</h5>
      <p>{updated_date}</p>
    </div>
  );
};
export default Book;
