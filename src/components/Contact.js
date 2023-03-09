import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameValid(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(true);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsMessageValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setIsNameValid(false);
    }

    if (!email || !isValidEmail(email)) {
      setIsEmailValid(false);
    }

    if (!message) {
      setIsMessageValid(false);
    }

    if (name && isValidEmail(email) && message) {
      // handle form submission
      setIsFormSubmitted(true);
    }
  };

  const isValidEmail = (email) => {
    // simplified email validation regex, not foolproof
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="container" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <h2>Contact</h2>
            {!isFormSubmitted && (
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <label htmlFor="name">Name</label>
                  </div>
                  <div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className={!isNameValid ? "invalid" : ""}
                    />
                  </div>

                  {!isNameValid && (
                    <p className="error">Please enter your name.</p>
                  )}
                </div>
                <div>
                  <div>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={!isEmailValid ? "invalid" : ""}
                    />
                  </div>

                  {!isEmailValid && (
                    <p className="error">Please enter a valid email address.</p>
                  )}
                </div>
                <div>
                  <div>
                    <label htmlFor="message">Message</label>
                  </div>
                  <div>
                    <textarea
                      id="message"
                      value={message}
                      onChange={handleMessageChange}
                      className={!isMessageValid ? "invalid" : ""}
                    ></textarea>
                  </div>

                  {!isMessageValid && (
                    <p className="error">Please enter a message.</p>
                  )}
                </div>
                <button type="submit">Send</button>
              </form>
            )}
            {isFormSubmitted && (
              <div>
                <p>Thank you for your message, {name}!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
