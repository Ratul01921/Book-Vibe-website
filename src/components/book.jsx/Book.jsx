import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, bookName, image, author, rating, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 m-4 shadow-xl">
                <figure>
                    <img className='h-96'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">{tags[0]}</div>
                        <div className="badge badge-secondary">{tags[1]}</div>
                    </h2>
                    <p className='text-2xl font-medium'>{bookName}</p>
                    <p className='text-lg '>{author}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;