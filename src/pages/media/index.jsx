import { Layouts } from "../../components/layouts";
import { MediaComp } from "../../components/mediaComp";

export const Media = () => {
  return (
    <Layouts>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-inner">
            <div className="contact-hero-box">
              <button className="contact-hero-btn">Rasmlar</button>
              <h2 className="contact-hero-title">Baham ko'rilgan rasmlar</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <MediaComp /> */}
    </Layouts>
  );
};
