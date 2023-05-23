import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SettingsContext } from '../../../Context/SettingsContext';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useContext } from 'react';

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
        sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.15)' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.15)',
  backgroundColor: 'transparent',
  padding: 0,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  maxHeight: '10vh',
  overflowY: 'auto',
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-root': {
    borderRadius: '0px',
  },
  '& .MuiToggleButton-root': {
    border: 'none',
    justifyContent: 'start',
    fontSize: '1.5vh !important',
    color: 'rgba(255, 255, 255, 0.15)',
  },
  '& .Mui-selected': {
    color: 'rgba(255, 255, 255, 0.15) !important ',
    backgroundColor: 'rgba(255, 255, 255, 0.011) !important',
  },
}));

const AccordionConfigs = () => {
  const { savedSettings, settings, handleValue } = useContext(SettingsContext);

  return (
    <>
      <Accordion>
        <AccordionSummary>
          <Typography sx={{ fontSize: '1.6vh' }}>Selecione a config</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ToggleButtonGroupStyled
            fullWidth
            orientation="vertical"
            value={settings.settings.config}
            exclusive
            onChange={(e) => {
              handleValue('config', e.target.value, 'settings');
            }}
          >
            {savedSettings.map((item) => (
              <ToggleButton value={item.name} key={`option-${item}`}>
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroupStyled>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionConfigs;
