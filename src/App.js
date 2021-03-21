import logo from './logo.svg';
import './App.css';
import Shop from './shopp';

import { useState } from 'react';

function App() {
let booksdetails =[
  {
    img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "The Inner Engineering",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 178,
    author : "by Sadhguru"
  },
  {
    img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "Death: An Inside Story",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 189,
    author : "by Sadhguru"
  },
  {
    img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "Emotion & Relationships ",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 178,
    author : "by Sadhguru"
  },
  {
    img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "Don’t Polish Your Ignorance …It May Shine",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 185,
    author : "by Sadhguru"
  },
  {
    img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "Of Mystics & Mistakes",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 185,
    author : "by Sadhguru"
  },
  {
     img : <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>,
    bookName : "Pebbles Of Wisdom",
    currency : <i className="fas fa-rupee-sign"></i>,
    price : 140,
    author : "by Sadhguru"
  }
]

const[cartData, setCartData] = useState([]);
 function handleClicked(books){
  setCartData([...cartData,books])

}
  return (
    <>
    <div className="container bg-dark">
      <div className="row">
      <div className="col-lg-3">

        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          {
            cartData.map((books)=>{
              return <a  href="#" className="list-group-item addbooks ">{books.bookName}</a>
            })
          }
        
      </div>

    </div>
        <div className="col-lg-9">
        <div className="row">
       {
         booksdetails.map((book)=>{
           return <Shop details={book} handlebtnclicked={handleClicked}></Shop>
         })


        }
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;





