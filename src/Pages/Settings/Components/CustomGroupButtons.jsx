import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import styled from 'styled-components';
import { SettingsContext } from '../../../Context/SettingsContext';

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-root': {
    borderRadius: '0px',
  },
  '& .MuiToggleButton-root': {
    border: 'none',
    textTransform: 'none',
    fontSize: '1.6vh !important',
    color: 'rgba(255, 255, 255, 0.35)',
  },
  '& .Mui-selected': {
    color: 'rgba(255, 255, 255, 0.35) !important ',
    backgroundColor: 'rgba(255, 255, 255, 0.01) !important',
  },
}));

const listButtons = [
  'Left Mouse',
  'Right Mouse',
  'Mouse 4',
  'Mouse 5',
  'Tab',
  'Shift',
  'Alt',
  'Ctrl',
];

const CustomGroupButtons = ({ name, tab }) => {
  const { settings, handleValue } = useContext(SettingsContext);
  return (
    <ToggleButtonGroupStyled
      fullWidth
      orientation="vertical"
      value={settings[tab][name]}
      exclusive
      onChange={(e) => {
        handleValue(name, e.target.value, tab);
      }}
    >
      {listButtons.map((item) => (
        <ToggleButton value={item} key={`option-${item}`}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroupStyled>
  );
};

export default CustomGroupButtons;
