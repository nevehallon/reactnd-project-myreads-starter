import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Fishelf extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      switchGroup: PropTypes.func.isRequired
    }
  
    render() {
      const { books, switchGroup } = this.props
  
      return (
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              book={ book }
              books={ books }
              key={ book.id }
              switchGroup={ switchGroup }
            />
          ))}
        </ol>
      )
    }
  
  }
  
  export default Fishelf