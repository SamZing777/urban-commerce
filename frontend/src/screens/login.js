import React from 'react';
import '../css/login.css';


const Login = () => {

  return(

    <section>

      <div className="background">
        <div className="card">
          <form method="POST" enctype="multipart/form-data">
              <h2> Sign into your account </h2>
              <p>Email</p>
              <input type="email" />

              <p>Password <span>Forgot your password?</span></p>
              <input type="password" />

              <input type=""/>
              <span>Stay signed in for a week</span>

              <input type="submit" value="Continue"/>
            </form>
        </div>
      </div>

    </section>
  )

}

export default Login;
