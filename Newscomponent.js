import React, { Component } from 'react'

class Newscomponent extends Component {
  render() {
    let {title,description,imageUrl}=this.props;
    return (
      <div>
        <div className="card">
       <img src={imageUrl} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{title+"..."}</h5>
       <p className="card-text">{description+"..."}.</p>
       <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
      </div>
     </div>
      </div>
    )
  }
}

export default Newscomponent;

