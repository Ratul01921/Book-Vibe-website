import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utiliti/addToDb';
import Book from '../book.jsx/Book';

const ListedBook = () => {
    const [readBook, setReadBook] = useState([]);


    const allBooks = useLoaderData();

    useEffect(() => {
        const storageReadList = getStoreReadList();
        const storageReadListInt = storageReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storageReadListInt.includes(book.bookId));
        setReadBook(readBookList)
        console.log(allBooks, storageReadList, storageReadListInt);
    }, [])
    return (
        <div>
            <h1>Listed Books</h1>

            <Tabs>
                <TabList>
                    <Tab>Book Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read: {readBook.length}</h2>
                    <div className='w-2/4'>
                        {
                            readBook.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;