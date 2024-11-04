import { useEffect, useState } from "react";
import Book from "../book.jsx/Book";


const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div >
            <h1 className="text-4xl font-bold text-center">
                Books
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center  items-center">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;