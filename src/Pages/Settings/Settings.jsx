import { useContext, useState } from 'react';
import './Settings.css';
import CustomCheckbox from '../../Components/CustomCheckbox/CustomCheckbox';
import CustomAccordion from './Components/CustomAccordion';
import { Button, InputBase, Typography } from '@mui/material';
import styled from 'styled-components';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import AccordionConfigs from './Components/AccordionConfigs';
import { SettingsContext } from '../../Context/SettingsContext';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.6vh !important',
  color: 'rgba(255, 255, 255, 0.35)',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1.6vh !important',
  color: 'rgba(255, 255, 255, 0.35) !important',
  textTransform: 'none !important',
}));

const Settings = () => {
  const { addConfig } = useContext(SettingsContext);
  const [valueInput, setValueInput] = useState('');

  const handleValue = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <div className="mainSettings">
      <div className="boxSettings">
        <div className="headerConfig">
          <p>SETTINGS</p>
        </div>
        <div className="boxConfigs">
          <CustomCheckbox
            name="streamMode"
            tab="settings"
            label="Stream Mode"
          />
          <CustomAccordion />
        </div>
      </div>
      <div className="boxSettings">
        <div className="headerConfig">
          <p>OTHERS</p>
        </div>
        <div className="boxConfigs">
          <Title>Config Name</Title>
          <InputBase
            value={valueInput}
            onChange={handleValue}
            placeholder="Coloque o nome aqui"
            variant="filled"
          />
          <ButtonStyled
            startIcon={<SaveRoundedIcon />}
            variant="text"
            onClick={addConfig}
          >
            Save Config
          </ButtonStyled>
        </div>
        <div className="boxConfigs">
          <Title>Configs</Title>
          <AccordionConfigs />
        </div>
      </div>
    </div>
  );
};

export default Settings;
