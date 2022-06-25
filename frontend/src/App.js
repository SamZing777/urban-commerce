import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/home';
// import About from './screens/about';
// import Login from './screens/login';
// import Footer from './screens/footer';
// import Error from './screens/error';

const App = () => {
  return (
    <Home />
  );
}

export default App;


// <div className="App">
//   <Router>
//     <Routes>
//       <Route path="/" exact element={<Home />} />
//       <Route path="/about" exact element={<About />} />
//       <Route path="/login" exact element={<Login />} />
//       <Route path="*" exact element={<Error />} />
//     </Routes>
//   </Router>
//   <Footer/>
// </div>
