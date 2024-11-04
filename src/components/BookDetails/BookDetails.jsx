import { useLoaderData, useParams } from "react-router-dom";
import { addToStorageReadList, addToStorageWishList } from "../../utiliti/addToDb";


const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookName, image, author, rating, tags, category, totalPages, publisher, yearOfPublishing, review } = book;

    const handleMarkReadBook = (id)=> {
        addToStorageReadList(id)
    }

    const handleMarkWishlist = (id) => {
        addToStorageWishList(id)
    }
    return (
        <div>
            <div className="flex justify-center items-center gap-8 ">
                <div className="w-5/12 bg-gray-400 flex justify-center items-center">
                    <img className="w-96 p-20 " src={image} alt="" />
                </div>
                <div className="space-y-4 w-7/12">
                    <h1 className="text-3xl font-bold ">{bookName}</h1>
                    <p className="text-xl">By: {author}</p>
                    <p className="border-y-2 p-5 m-5">{category}</p>
                    <p><small>{review}</small></p>
                    <h2 className="flex gap-5">

                        <div className="badge badge-secondary">{tags[0]}</div>
                        <div className="badge badge-secondary">{tags[1]}</div>
                    </h2>
                    <div className="space-x-2">
                        <button onClick={()=> handleMarkReadBook(bookId)} className="btn btn-outline">Read</button>
                        <button onClick={()=> handleMarkWishlist(bookId)} className="btn btn-active btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;