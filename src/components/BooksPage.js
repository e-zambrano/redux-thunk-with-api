import { useEffect } from "react";

function BookPage(props) {
  useEffect(() => {
    props.loadBooks();
  }, []);

  return (
    <div>
      {console.log(props)}
      {props.books.map((book) => {
        return <div>{book.id}</div>;
      })}
    </div>
  );
}

export default BookPage;
