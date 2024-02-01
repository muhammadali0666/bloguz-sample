import { ContactHero } from "../../components/contactHero";
import { ContactMain } from "../../components/contactMain";
import { Layouts } from "../../components/layouts";

export const Contact = () => {
  return (
    <Layouts>
      <ContactHero />
      <ContactMain />
      {/* <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047.678957084284!2d66.97335241238619!3d39.65519737145364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18b7c2e59337%3A0x532c8e039ecc92af!2sRegistan%20Square!5e1!3m2!1sen!2s!4v1706612491565!5m2!1sen!2s"
          width="600"
          height="450"
          style={{border:"0px", borderRadius: "16px", width: "100%", height: "50vh"}}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </Layouts>
  );
};
