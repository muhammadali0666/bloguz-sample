import { Footer } from "../footer";
import { Header } from "../header";
import { HeaderTop } from "../headerTop";
import "./index.css";

export const Layouts = ({ children }) => {
  return (
    <>
      <HeaderTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
