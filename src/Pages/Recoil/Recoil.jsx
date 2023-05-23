import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import HorizontalSlide from '../../Components/Slide/HorizontalSlide';
import './Recoil.css';
import CustomCheckbox from '../../Components/CustomCheckbox/CustomCheckbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
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
    width: 19,
    height: 19,
    backgroundImage: 'radial-gradient(#9667BC,#9667BC 28%,transparent 32%)',
    content: '""',
  },
});

function BpRadio(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const Recoil = () => {
  return (
    <div className="mainRecoil">
      <div className="boxRecoil">
        <div className="headerConfig">
          <p>RECOIL</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            padding: '1vw',
          }}
        >
          <CustomCheckbox name="value" tab="recoil" label="Recoil Control" />
          <HorizontalSlide title="Max Recoil" name="maxRecoil" tab="recoil" />
          <HorizontalSlide title="Speed" name="speed" tab="recoil" />
        </div>
      </div>
      <div className="boxRecoil">
        <div className="headerConfig">
          <p>OTHERS</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Recoil;
