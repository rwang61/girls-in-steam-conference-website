import './../styles/FAQ.css';
import { execTeamFAQData, eventsFAQData } from '../data/FAQData.js';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({question, answer}) => {
  return(
    <div className="accordion">
            <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
              >
                <Typography 
                    variant="h5"
                    sx={{ 
                        fontWeight: "bold",
                        color: "#6363AB", 
                        marginLeft: "10px",
                        fontFamily: "Josefin Sans"}} >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    color: "#5A4067",
                    fontWeight: "medium",
                    marginBottom: "70px",
                    marginLeft: "10px",
                  }}
                >
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
        </div>
  )
}

export default function FAQ() {
  return (
    <div id="FAQ" className="faq">
      <div className="faq-section">
        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px", marginBottom: "10px" }} >
          Exec Team FAQs
        </Typography>
        {execTeamFAQData.map((data, index) => <AccordionItem key={`exec_${index}`} question={data.question} answer={data.answer} />)}
      </div>
      <div className="faq-section">
        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px", marginBottom: "10px" }} >
          Events FAQs
        </Typography>
        {eventsFAQData.map((data, index) => <AccordionItem key={`events_${index}`} question={data.question} answer={data.answer} />)}
      </div>
    </div>
  );
}