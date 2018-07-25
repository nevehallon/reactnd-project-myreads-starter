import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Fishelf from './Fishelf'

class BookList extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      switchGroup: PropTypes.func.isRequired
    }

    state = { groupSwitch: false }


    render() {
        const { books, switchGroup } = this.props

        const groupTypes = 
            [{ type: 'currentlyReading', name: 'Currently Reading' },
             { type: 'wantToRead',  name: 'Want to Read' },
             { type: 'read', name: 'Read'}]
             

        return (

        <div className='book-list-content'>
        {groupTypes.map((group, i) => {
            const groupie = books.filter( book => book.group === group.type)
            return (
                <div className='group' key={i}>
                <h2 className='group-name'>{ group.name }</h2>
                <div className='group-books'>

                <Fishelf
                  books={ groupie }
                  switchGroup={ switchGroup }
                />

                </div>
                </div> )
        })}
        </div>
        )
    }
}

export default BookList
