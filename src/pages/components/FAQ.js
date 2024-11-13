import './../styles/FAQ.css';
import { execTeamFAQData } from '../data/FAQData.js';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

const AccordionItem = ({ question, answer }) => {
  return (
    <div className="accordion">
      <Accordion sx={{
        marginBottom: '-16px',
        padding: '0 0',
        backgroundColor: 'transparent',
        boxShadow: 'none',
          '& MuiAccordion-root': {
            backgroundColor: 'transparent'
          },
          '& MuiPaper-root': {
            backgroundColor: 'transparent'
          }
        }}>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon sx={{
          color: '#D0CDEA',
          fontSize: '36px',
          marginRight: '0',
          padding: '0 0'
        }}
        />}
        sx={{
          overflowX: 'hidden',
          padding: '0 0',
          margins: '0 0'
        }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#D0CDEA',
              marginLeft: '0px',
              fontFamily: 'Josefin Sans',
              overflow: 'visible',
              padding: '0 0'
            }}>
            {question}
            <Divider sx={{
          width: '350%',
          margin: '0 0',
          marginTop: '8px',
          marginRight: '10px',
          borderBottom: '1px solid #D0CDEA'
        }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          marginTop: '-16px',
          backgroundColor: 'transparent',
          minHeight: '0px',
          maxHeight: '48px'
          }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              color: '#D0CDEA',
              fontWeight: 'medium',
              marginBottom: '70px',
              marginLeft: '-16px',
              marginTop: '0px'
            }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default function FAQ() {
  return (
    <div id="FAQ" className="faq">
      <div className="faq-section">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px', textShadow: '4px 8px 4px rgba(0, 0, 0, 0.25)', color: '#EDE9EA'}}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        {execTeamFAQData.map((data, index) => (
          <AccordionItem key={`exec_${index}`} question={data.question} answer={data.answer} />
        ))}
      </div>
    </div>
  );
}
