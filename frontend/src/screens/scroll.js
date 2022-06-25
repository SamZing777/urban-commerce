import React from 'react';
// import { useNavigate } from 'react-router-dom';
import HorizontalScroll from 'react-horizontal-scrolling'

import '../css/scroll.css';

const Scroll = () => {

  // const navigate = useNavigate();
  // const loginPage = () =>{
  //     navigate("/login", {replace: true});
  //   }
  // const aboutPage = () =>{
  //     navigate("/about", {replace: true});
  // }

  return(

    <section>
    <HorizontalScroll>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
        <div className="card">
            <h3> Best deals of the month </h3>
            <small> Ends 30th June </small>
            <p> Now live </p>
            <img src="" />
        </div>
      </HorizontalScroll>

    </section>

  )

}

export default Scroll;
