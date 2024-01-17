import './../styles/FAQ.css';
import { FAQData } from '../data/FAQData.js';
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
        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px", marginBottom: "10px" }} >
                Frequently Asked Questions
        </Typography>
        {FAQData.map((data) => <AccordionItem question={data.question} answer={data.answer} />)}
    </div>
  );
}