import { Box, Slider, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SettingsContext } from '../../Context/SettingsContext';

const CustomSlide = styled(Slider)({
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    color: 'rgba(255, 255, 255, 0.25)',
    height: 32,
    borderRadius: '50% 50% 50% 0',
    transformOrigin: 'bottom left',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(250%, -30%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
    '.MuiSlider-rail': {
      backgroundColor: '#fff !important',
    },
  },
});

const VerticalSlide = ({ name, tab }) => {
  const { settings, handleValue } = useContext(SettingsContext);

  return (
    <Box sx={{ height: '100%' }}>
      <CustomSlide
        valueLabelDisplay="on"
        orientation="vertical"
        value={settings[tab][name]}
        onChange={(e) => handleValue(name, e.target.value, tab)}
      />
    </Box>
  );
};

export default VerticalSlide;
