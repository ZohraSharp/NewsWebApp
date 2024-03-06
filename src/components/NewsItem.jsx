import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, source } = this.props
    return (
      <div>
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex:'1', left: ' 90%'}}>
              {source}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
