import React from 'react'


const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
    
      <div className="my-3">
      <div className="card" >

    <div style={  {display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'}
                }>
    <span className="badge rounded-pill bg-danger">{source}</span>
    </div>

  <img src={!imageUrl?"https:img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/325000/325079.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...  </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
  </div>
  </div>
     
    )

}

export default NewsItem
