import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Apply to the Team Dog Walker Team</h1>
              <h3>
                Hello!  If you would like to apply to be a walker please fill out the form below:
              </h3>
              <p>
                WORK WITH TRUSTED AND LOVED DOG WALKERS
                Want to make some money with a business that reinvests in the Community and you!  Team Dog Lover is looking for dog walkers!
                Most dog walk schedules are Monday through Friday between 9AM and 5pm - You can work when your schedule permits and only take jobs you desire
                <ul>
                  <li>
                    A free meet and great is 25$ (all paid to you)
                  </li>
                  <li>
                  The services are 30$ for a minute walk. (You make 25$)
                  </li>
                  <li>
                    45$ for a hour hour walk (You make 35$)
                  </li>
                  <li>
                    85$ for an overnight stay/house boarding. (You make 70$)
                  </li>
                </ul>
                QUALIFICATIONS:
                <ol>
                  <li>
                    Reliable, responsible, and honest
                  </li>
                  <li>
                    18 years of age or older
                  </li>
                  <li>
                    Ability to handle various breeds and sizes of dogs
                  </li>
                  <li>
                    Ability to walk dogs in all weather conditions
                  </li>
                  <li>
                    Pass a background check
                  </li>
                </ol>
                Set a schedule that works for you.  Enjoy camaraderie with your fellow dog walkers
              </p>
              <form
                name="apply"
                method="post"
                action="/apply/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="apply" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
