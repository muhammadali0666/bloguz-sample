import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./questions.css"

export default function AccordionComp() {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq-inner">
          <h2 className="faq-title">Ko'p beriladigan savollarga javoblar</h2>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy">1 Blogda nima mavzular yuritiladi!</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
               Bu blogda xar hil turdagi mavzular yuritiladi masalan: sport, siyosat, mashxurlar
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy"> 2 BlogUz loyihasi rasmiymi?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
                BlogUz loyihasi startup loyiha bo'loib bu sayt davlat tomonidan rasmiylashtirlimagan.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy">3 Ma'lumotlar qanchalik ishonchli?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
                Bu sayt shaxsiy blog sayt bo'lib turli xil mavzuda blogerning shaxsiy fikirlaridir.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy">4 Sayt yangilanadimi?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
                Sayt albatta foydalanuvchilarga qulaylik uchun yangilanib boradi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy">5 Sayt haqida kimga murojat qilaman?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
                Bog'lanish bo'limiga murojat qilsa bo'ladi, o'qib chiqqandan so'ng iloji boricha maslahatlaringizga amal qilinadi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accardion">
            <AccordionSummary className="accardion-summary" aria-controls="panel1-content" id="panel1-header">
              <Typography className="accardion-typograpy">6 Bergan ma'lumotlar to'g'riligiga javob berasizlarmi?</Typography>
            </AccordionSummary>
            <AccordionDetails className="accardion-details">
              <Typography className="accardion-text">
               Bu sayt blogerning shaxsiy fikirlari bo'lib, ma'lumotlar uchun javob berilmaydi.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
