import React from 'react';
import '../css/signup.css';

const Signup = () => {

  return(

    <section>

      <div className="background">
        <div className="card">
          <form method="POST" enctype="multipart/form-data">
              <h2> Create your safe invest account </h2>
              <p>Username</p>
              <input type="text" />

              <p>First Name</p>
              <input type="text" />

              <p>Last Name</p>
              <input type="text" />

              <p>Email</p>
              <input type="email" />

              <p>Password <span>Forgot your password?</span></p>
              <input type="password" />

              <input type="submit" value="Create account"/>
            </form>
        </div>
      </div>

    </section>
  )

}

export default Signup;
