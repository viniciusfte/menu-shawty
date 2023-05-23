import React from 'react';
import './Trigger.css';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import HorizontalSlide from '../../Components/Slide/HorizontalSlide';
import styled from 'styled-components';
import CustomCheckbox from '../../Components/CustomCheckbox/CustomCheckbox';

const Trigger = () => {
  return (
    <div className="mainRecoil">
      <div className="boxRecoil">
        <div className="headerConfig">
          <p>TRIGGER</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            padding: '1vw',
          }}
        >
          <CustomCheckbox name="value" tab="trigger" label="Triggerbot" />
          <HorizontalSlide title="Delay(ms)" name="delay" tab="trigger" />
        </div>
      </div>
      <div className="boxRecoil">
        <div className="headerConfig">
          <p>CONFIG</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Trigger;
