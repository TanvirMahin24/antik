import React from "react";
import "./Books.scss";
import { Container } from "reactstrap";

const Books = (props) => {
  const bookList = props.books.map((book) => (
    <div key={book.id} className="col-md-4 bookItem mb-4 mx-auto">
      <div className="hovereffect">
        <img className="img-book" src={book.image} alt={book.name} />
        <div className="overlay">
          <h2>{book.name}</h2>
          <h4>{book.description}</h4>
          <a
            className="info"
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={"wrapper"}>
      <h1 className="text-center text-light font-weight-lighter pt-4">
        My Books
      </h1>
      <div className={"line"}></div>
      <Container className="p-5 ">
        <div className="row">{bookList}</div>
      </Container>
    </div>
  );
};

export default Books;
