import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        name="Contact form"
        onSubmit={this.submitForm}
        action="https://formspree.io/mpzylblj"
        method="POST"
        id="contactForm"
        data-netlify="true"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                required
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                required
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="4"
            placeholder="Message. Please mention your Email and Name here otherwise your email will be marked as Spam"
            required
          ></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>

        {status === "SUCCESS" ? (
          <p className="text-success bg-light">Thanks!</p>
        ) : (
          <input
            type="submit"
            value="Send Message"
            className="btn btn-custom btn-lg"
          />
        )}
        {status === "ERROR" && (
          <p className="text-danger bg-light">Ooops! There was an error.</p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
