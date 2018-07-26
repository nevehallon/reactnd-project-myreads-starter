import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import GroupSwitcher from './GroupSwitcher'
import noCover from './icons/no-cover-image.png'

class Book extends PureComponent {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    switchGroup: PropTypes.func.isRequired
  }

  render() {
    const { book, books, switchGroup } = this.props

    // add fallbacks for missing cover images and title
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : "No title available"

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ width: 128, height: 188, backgroundImage: `url(${coverImg})`}}>
                </div>
                <GroupSwitcher
                  book={ book }
                  books={ books }
                  switchGroup={ switchGroup }
                />
              </div>
              <div className="book-title">{ title }</div>
              { /* Check for authors and render each on separate line if exist*/
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book