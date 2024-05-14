import { useState } from "react";
import './contact.scss'
function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('https://catalog.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };
  return (
    <div className="contactContainer">

 
    <div  className="contact">
      <h1>Contact Us</h1>
      <p>If you have any further inquires, please let us know by filling the form below</p>
      <form onSubmit={handleSubmit}>
        
     <div className="name">

     <div className="firstName">
     <p className="firstName">First Name</p>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

     </div>
      <div className="secondName">
      <p className="lastName">Last Name</p>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      </div>
     </div>

      <p className="email">Email:</p>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <p className="message">Message:</p>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <div type="submit" className="btn">Submit</div>
    </form>
    </div>
    </div>
  )
}

export default Contact