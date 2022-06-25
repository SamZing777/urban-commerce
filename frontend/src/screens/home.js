import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from './header';
import Scroll from './scroll';
import Category from './categories.js';
import '../css/home.css';

const Home = () => {

  // const navigate = useNavigate();
  // const loginPage = () =>{
  //     navigate("/login", {replace: true});
  //   }
  // const aboutPage = () =>{
  //     navigate("/about", {replace: true});
  // }

  return(

    <section>
        <Header />
        <Scroll />
        <Category />
    </section>

  )

}

export default Home;
