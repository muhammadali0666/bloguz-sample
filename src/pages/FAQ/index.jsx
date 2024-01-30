import { Layouts } from "../../components/layouts";
import AccordionComp from "../../components/questions";

export const FAQ = () => {
  return (
    <Layouts>
          <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-inner">
         <div className="contact-hero-box">
         <button className="contact-hero-btn">
            Savollar
          </button>
          <h2 className="contact-hero-title">
          Savollarga javoblar
          </h2>
         </div>
        </div>
      </div>
    </section>
      <AccordionComp />
    </Layouts>
  );
};
