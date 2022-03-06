import React from 'react'

const Signup = () => {
  return (
    <div style={{marginTop:"5rem"}}>  
         <form  style={{ width: "70%", margin: "auto", backgroundColor: "white", borderRadius: "6px", padding: "3rem" }}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block mt-3">Register</button>
                <p className="forgot-password text-center">
                    Already registered <a href="/login">log in?</a>
                </p>
            </form>
    </div>

)
}

export default Signup