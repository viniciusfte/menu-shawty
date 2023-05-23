import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/SettingsContext';
import styled from 'styled-components';
import { Checkbox, FormControlLabel } from '@mui/material';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 15,
  height: 15,
  boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
  background: 'rgba(255, 255, 255, 0.011)',
  border: '1.33333px solid rgba(255, 255, 255, 0.01)',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'transparent',
  background: 'rgba(255, 255, 255, 0.011)',
  border: '1.33333px solid rgba(255, 255, 255, 0.01)',
  '&:before': {
    display: 'block',
    width: 14,
    height: 14,
    backgroundImage: 'radial-gradient(#9667BC,#9667BC 28%,transparent 32%)',
    content: '""',
  },
});

const CustomCheckbox = ({ label, name, tab }) => {
  const { settings, handleValue } = useContext(SettingsContext);

  return (
    <FormControlLabel
      sx={{
        color: 'rgba(255, 255, 255, 0.35)',
        '.MuiFormControlLabel-label': { fontSize: '1.6vh' },
      }}
      label={label}
      control={
        <Checkbox
          disableRipple
          color="default"
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon />}
          checked={settings[tab][name]}
          onChange={(e) => handleValue(name, e.target.checked, tab)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
    />
  );
};

export default CustomCheckbox;
