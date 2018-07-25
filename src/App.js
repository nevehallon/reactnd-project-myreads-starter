import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import './App.css'
import Search from './Search'

class BooksApp extends React.Component {
  state = { books: [],
    isLoading: false
   }

    componentDidMount() {

      this.startLoading();
      // get books on load
      BooksAPI.getAll()
      .then((books) => {this.setState({ books })
      })
      .catch(() => { alert('Something went wrong with your request.'); })
      .then(this.endLoading);
  }

  startLoading = () => {
    this.setState({ isLoading: true });
  };

  endLoading = () => {
    this.setState({ isLoading: false });
  };


  switchGroup = ( newBook, newGroup ) => {
    BooksAPI.update(newBook, newGroup).then(response =>{

      // set group for new or updated book
      newBook.group = newGroup

      // get list of books without updated or new book
      let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      // add book to array and set new state
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <Search
          books={ books }
          switchGroup={ this.switchGroup }
        />
        )} />
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList 
            books={ books }
            switchGroup={ this.switchGroup }
            />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
