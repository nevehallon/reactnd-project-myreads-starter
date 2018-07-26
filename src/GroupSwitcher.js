import React, { Component } from 'react';
import PropTypes from 'prop-types'

class GroupSwitcher extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    switchGroup: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, switchGroup } = this.props

    // set current group to none as default
    let currentGroup = 'none'

    // if book is in current list, set current group to book.group
    for (let item of books ) {
      if (item.id === book.id)  {
        currentGroup = item.shelf
        break
      }
    }

    return (
      <div className="book-group-changer">
        <select  onChange={(event) => switchGroup(book, event.target.value)}
          defaultValue={ currentGroup }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default GroupSwitcher