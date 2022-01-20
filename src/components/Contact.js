import React from "react";

function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   function submitForm(event) {
//     event.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/JSON" },
//       body: encode({}),
//     });
//   }

  return (
    <section id="contact">
      <div className="contact-container">
        <form name="contact" className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <h2 className="form-header">Reach out with a message!</h2>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="message"
              className="form-label"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
            />
          </div>
          <button type="submit" className="btn contact-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
