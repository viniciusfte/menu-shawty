import React from 'react';
import './Aimbot.css';
import HorizontalSlide from '../../Components/Slide/HorizontalSlide';
import VerticalSlide from '../../Components/Slide/VerticalSlide';
import CustomCheckbox from '../../Components/CustomCheckbox/CustomCheckbox';

const Aimbot = () => {
  return (
    <div className="mainAimbot">
      <div className="boxAim">
        <div className="headerConfig">
          <p>AIMBOT</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            padding: '1vw',
          }}
        >
          <CustomCheckbox label="Aimbot" name="value" tab="aimbot" />
          <CustomCheckbox label="DrawFov" name="drawfov" tab="aimbot" />
          <HorizontalSlide title="FOV" name="fov" tab="aimbot" />
          <HorizontalSlide title="Sensivity" name="sensivity" tab="aimbot" />
        </div>
      </div>
      <div className="boxHitBoxAim">
        <div className="headerConfig">
          <p>HITBOX</p>
        </div>
        <div className="hitbox">
          <VerticalSlide name="hitbox" tab="aimbot" />
        </div>
      </div>
    </div>
  );
};

export default Aimbot;
