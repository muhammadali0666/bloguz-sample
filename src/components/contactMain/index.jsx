import "./contact.css";
import { RiMessage3Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

export const ContactMain = () => {
  return (
    <section className="contact-main">
      <div className="container">
        <div className="contact-main-inner">
          <div className="contact-main-left">
            <div className="contact-main-mini">
              <p className="contact-main-mini-p">contact us</p>
              <h3 className="contact-main-title">
                Get In Touch With Our Agents
              </h3>
            </div>
            <p className="contact-left-p">
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>
            <div className="contact-main-card">
              <IoCall className="contact-icon" />
              <div className="contact-main-card-box">
                <h4 className="contact-main-card-title">(90)456-50-25</h4>
                <p className="contact-main-card-text">Phone Number</p>
              </div>
            </div>
            <div className="contact-main-card">
              <RiMessage3Fill className="contact-icon" />
              <div className="contact-main-card-box">
                <h4 className="contact-main-card-title">msh@gmail.com</h4>
                <p className="contact-main-card-text">Email</p>
              </div>
            </div>
          </div>
          <div className="contact-main-right">
            <form className="contact-form">
              <fieldset>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                  autoComplete="on"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email..."
                  autoComplete="on"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject..."
                  autoComplete="on"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="YourMessage..."
                  cols="30"
                  rows="10"
                ></textarea>
              </fieldset>
              <button className="contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
