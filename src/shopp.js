import React from "react";



function Shop(props){


    return (
        <div className="col-lg-4 col-md-6 mb-4 ">
            <div className="card h-100 Card ">
              <a  href="#">{props.details.img}</a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#"> {props.details.bookName} </a>
                </h4>
                <h5>{props.details.currency}{props.details.price}</h5>
                <p className="card-text">{props.details.author}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted star">★ ★ ★ ★ ☆</small>
                <button className="btn btn-info" onClick={()=>props.handlebtnclicked(props.details)}>Add to Cart</button>
              </div>
            </div>
          </div>
    );
}



export default Shop;