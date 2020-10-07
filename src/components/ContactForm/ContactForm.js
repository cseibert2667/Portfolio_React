import React from "react";
import "./ContactForm.css"

export default function ContactForm() {
  return (
    <div class="container-contact float-left ml-4 my-5">
      <h1><b>Contact</b></h1>
      <hr class="my-3" />
      <div class="row">
        <div class="col-10">
          <form>
            <div class="form-group">
              <label for="inputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="inputMessage">Message</label>
              <textarea
                class="form-control"
                id="inputMessage"
                rows="3"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
