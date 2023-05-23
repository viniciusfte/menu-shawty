import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomGroupButtons from './CustomGroupButtons';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  '.MuiAccordion-root': {},
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.35)' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.35)',
  backgroundColor: 'transparent',
  padding: 0,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  height: '20vh',
  overflowY: 'auto',
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomAccordion = () => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary>
          <Typography sx={{ fontSize: '1.5vh' }}>Aim Key</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGroupButtons name="aimKey" tab="settings" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary>
          <Typography sx={{ fontSize: '1.5vh' }}>Trigger Key</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGroupButtons name="triggerKey" tab="settings" />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CustomAccordion;
