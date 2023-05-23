import React from 'react';
import './CardAgent.css';
import CheckIcon from '../../../assets/check.svg';

const CardAgent = ({ agent, selectAgent, handleAgent }) => {
  return (
    <div
      style={{ backgroundImage: `url(${agent.icon})` }}
      className={agent.name == selectAgent ? 'selectedBox' : 'boxAgent'}
      onClick={() => handleAgent(agent.name)}
    >
      {agent.name == selectAgent ? <img src={CheckIcon} /> : <></>}
    </div>
  );
};

export default CardAgent;
