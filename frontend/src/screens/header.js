import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaMap } from 'react-icons/fa';
import '../css/header.css';

const Header = () => {

  // const navigate = useNavigate();
  // const loginPage = () =>{
  //     navigate("/login", {replace: true});
  //   }
  // const aboutPage = () =>{
  //     navigate("/about", {replace: true});
  // }

  return(

    <section>
        <div className="container">
          <div className="content">
            <h3> Urban Commerce </h3>
          </div>
          <div className="right">
            <button>Use App</button>
          </div>
        </div>

        <div className="container">
          <h5> <FaMap /> Los Angeles </h5>
        </div>

        <div className="container">
            <input type="text" placeholder="search for services" />
        </div>

    </section>

  )

}

export default Header;
