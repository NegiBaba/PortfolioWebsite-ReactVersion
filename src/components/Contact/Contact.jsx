import React from "react";

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <form
        className="contact-form"
        action="mailto:piyushnegi319@gmail.com"
        method="post"
      >
        <input type="text" name="" placeholder=" Your Name" />
        <input type="email" name="" placeholder=" Your E-mail" />
        <textarea
          name="message"
          rows="8"
          cols="30"
          placeholder="  Say Hello!"
        ></textarea>
        <input className="submit-btn" type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default Contact;
