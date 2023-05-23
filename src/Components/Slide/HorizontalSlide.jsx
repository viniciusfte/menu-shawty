import { Box, Slider, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SettingsContext } from '../../Context/SettingsContext';

const CustomSlide = styled(Slider)({
  padding: '8px 0 !important',
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
    height: 32,
    borderRadius: '50% 50% 50% 0',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
    '.MuiSlider-rail': {
      backgroundColor: '#fff !important',
    },
  },
});

const HorizontalSlide = ({ title, name, tab }) => {
  const { settings, handleValue } = useContext(SettingsContext);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          gutterBottom
          sx={{
            color: 'rgba(255, 255, 255, 0.35)',
            fontSize: '1.6vh',
            lineHeight: '1',
          }}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            color: 'rgba(255, 255, 255, 0.15)',
            fontSize: '2vh',
            lineHeight: '1',
          }}
        >
          {settings[tab][name]}
        </Typography>
      </Box>
      <CustomSlide
        value={settings[tab][name]}
        onChange={(e) => handleValue(name, e.target.value, tab)}
      />
    </Box>
  );
};

export default HorizontalSlide;
