import React, { Component } from 'react';

class Library extends Component {

  render() {
    return (
      <div>{
        this.props.items.map( (item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={#}
              target=""
              rel="noopener"
              >
              <img
                src={undefined !== imageLinks ? imageLinks.thumbnail : {book}}
                alt={`Pictured: The cover for the book ${title}.`}
                className="bookCover"
              />
              <header className="bookTitle">
                {title}
              </header>
            </a>
          )
        })
      }</div>
    )
  }
}

export default Library;