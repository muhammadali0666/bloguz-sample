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
              <p className="contact-main-mini-p">bog'lanish</p>
              <h3 className="contact-main-title">
                Biz bilan bo'glaning
              </h3>
            </div>
            <p className="contact-left-p">
              Bizga xatolar va takliflar bo'yicha va imloviy xatolar topsangiz biz bilan bog'lanishingiz mumkin murojatingizdan xursand bo'lamiz.
            </p>
            <div className="contact-wrapper">
            <div className="contact-main-card contact-main-card-extra">
              <IoCall className="contact-icon" />
              <a target="_blank" href="tel:+998904565025" className="contact-main-card-box">
                <h4 className="contact-main-card-title">(90)456-50-25</h4>
                <p className="contact-main-card-text">Telefon raqam</p>
              </a>
            </div>
            <div className="contact-main-card contact-main-card-extra">
              <RiMessage3Fill className="contact-icon" />
              <a href="mailto:muhammadalishuhratjonov50@gmail.com" className="contact-main-card-box">
                <h4 className="contact-main-card-title">msh@gmail.com</h4>
                <p className="contact-main-card-text">Email</p>
              </a>
            </div>
            </div>
          </div>
          <div className="contact-main-right">
            <form className="contact-form">
              <fieldset>
                <label htmlFor="name">Ism</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Sizning ismimgiz..."
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
                  placeholder="Sizning emailingiz..."
                  autoComplete="on"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="subject">Mavzu</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Mavzu matni..."
                  autoComplete="on"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Xabar</label>
                <textarea
                  placeholder="Sizning xabaringiz..."
                  cols="30"
                  rows="10"
                ></textarea>
              </fieldset>
              <button className="contact-btn">Xabar Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
