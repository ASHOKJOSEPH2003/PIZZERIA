import React from 'react';
import './Contact';

function BirthdayPartyForm() {
  return (
    <div className="container-fluid" style={{ padding: 0, backgroundColor: "#f9ddb1", height: "100vh" }}>
      <div className='menutitle'>
        <h1>Birthday Party Booking</h1>
      </div>
      <div className="row">
        <div className="col-md-6 contact-form">
          <h2>Party Booking Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Your Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Preferred Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="mb-3">
              <label htmlFor="guests" className="form-label">Number of Guests</label>
              <input type="number" className="form-control" id="guests" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 contact-info">
          <h2>Contact Information</h2>
          <p>Email: ajpizzas@gmail.com</p>
          <p>Phone: +91 8197923506</p>
          <p>Address: Vit, Vellore, India</p>
        </div>
      </div>
    </div>
  );
}

export default BirthdayPartyForm;
