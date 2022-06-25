import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/plans.css';

const Error = () => {

  const navigate = useNavigate();

  return(

    <section>

      <div className="content">
        <div className="item">
            <h4> This page doesn't exist </h4>
            <button onClick={navigate(-1)}>Go back</button>
        </div>
      </div>

    </section>
  )

}

export default Error;
