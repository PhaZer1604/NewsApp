import React from 'react'

const NewsItem = (props)=> {

      let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-4">
        <div className="card">
        <img src={!imageUrl?"https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...<span className='badge rounded-pill bg-secondary'>{source}</span></h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read more...</a>
                <div className="card-footer">
                  <small className="text-muted">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small>
                </div>
            </div>
        </div>
      </div>
    )
}

export default NewsItem