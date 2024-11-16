import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container-fluid" style={{padding: 0,backgroundColor: "#f9ddb1",height: "100vh"}}>
        <div className='menutitle'>
                <h1>Contact Us</h1> 
            </div>
      <div className="row">
        <div className="col-md-5 contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-5 contact-info">
          <h2>Contact Information</h2>
          <p>Email: ajpizzas@gmail.com</p>
          <p>Phone: +91 8197923506</p>
          <p>Address: Vit, Vellore, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
