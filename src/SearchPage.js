import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchPage extends Component{
    state={
        query:'',
        searchedBooks:[],
        errorMessage: ''
    }

    updateQuery = (query) =>{
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query);
    }

    updateSearchedBooks =(query)=>{
        if(query){
            BooksAPI.search(query)
                .then((searchedBooks) =>{
                    if (searchedBooks.error){
                        this.setState({ searchedBooks: [],
                            errorMessage: 'Book not found'
                        });
                    } else {
                        this.setState({
                            searchedBooks : searchedBooks,
                            errorMessage: ''
                        })
                    }
        })
        } else {
this.setState({ searchedBooks: [] });
    }
        }
    render () {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event)=> this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map(searchedBook =>(
                                <li key={searchedBook.id}>
                        <Book
                        book={searchedBook}
                        moveShelf={this.props.moveShelf}
                        />
                                    </li>
                            ))
                        }
                    </ol>
                    <h1>{this.state.errorMessage}</h1>
                </div>
            </div>
        );
    }
}

export default SearchPage;