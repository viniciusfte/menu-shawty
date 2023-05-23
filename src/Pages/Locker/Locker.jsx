import React, { useContext } from 'react';
import './Locker.css';
import CardAgent from './Components/CardAgent';
import AstraIcon from '../../assets/icons_agents/Astra_icon.webp';
import BreachIcon from '../../assets/icons_agents/Breach_icon.webp';
import BrimIcon from '../../assets/icons_agents/Brimstone_icon.webp';
import ChamberIcon from '../../assets/icons_agents/Chamber_icon.webp';
import CypherIcon from '../../assets/icons_agents/Cypher_icon.webp';
import FadeIcon from '../../assets/icons_agents/Fade_icon.webp';
import GekkoIcon from '../../assets/icons_agents/Gekko_icon.webp';
import HarborIcon from '../../assets/icons_agents/Harbor_icon.webp';
import JettIcon from '../../assets/icons_agents/Jett_icon.webp';
import KayoIcon from '../../assets/icons_agents/Kayo_icon.webp';
import KilljoyIcon from '../../assets/icons_agents/Killjoy_icon.webp';
import NeonIcon from '../../assets/icons_agents/Neon_icon.webp';
import OmenIcon from '../../assets/icons_agents/Omen_icon.webp';
import PhoenixIcon from '../../assets/icons_agents/Phoenix_icon.webp';
import RazeIcon from '../../assets/icons_agents/Raze_icon.webp';
import ReynaIcon from '../../assets/icons_agents/Reyna_icon.webp';
import SageIcon from '../../assets/icons_agents/Sage_icon.webp';
import SkyeIcon from '../../assets/icons_agents/Skye_icon.webp';
import SovaIcon from '../../assets/icons_agents/Sova_icon.webp';
import ViperIcon from '../../assets/icons_agents/Viper_icon.webp';
import YoruIcon from '../../assets/icons_agents/Yoru_icon.webp';
import { SettingsContext } from '../../Context/SettingsContext';
import CustomCheckbox from '../../Components/CustomCheckbox/CustomCheckbox';
import CustomAccordion from '../Settings/Components/CustomAccordion';

const agents = [
  { name: 'ASTRA', icon: AstraIcon },
  { name: 'BREACH', icon: BreachIcon },
  { name: 'BRIMSTONE', icon: BrimIcon },
  { name: 'CHAMBER', icon: ChamberIcon },
  { name: 'CYPHER', icon: CypherIcon },
  { name: 'FADE', icon: FadeIcon },
  { name: 'GEKKO', icon: GekkoIcon },
  { name: 'HARBOR', icon: HarborIcon },
  { name: 'JETT', icon: JettIcon },
  { name: 'KAYO', icon: KayoIcon },
  { name: 'KILLJOY', icon: KilljoyIcon },
  { name: 'NEON', icon: NeonIcon },
  { name: 'OMEN', icon: OmenIcon },
  { name: 'PHOENIX', icon: PhoenixIcon },
  { name: 'RAZE', icon: RazeIcon },
  { name: 'REYNA', icon: ReynaIcon },
  { name: 'SAGE', icon: SageIcon },
  { name: 'SKYE', icon: SkyeIcon },
  { name: 'SOVA', icon: SovaIcon },
  { name: 'VIPER', icon: ViperIcon },
  { name: 'YORU', icon: YoruIcon },
];

const Locker = () => {
  const { settings, handleValue } = useContext(SettingsContext);

  const handleAgent = (agent) => {
    if (agent != settings.locker.agent) {
      handleValue('agent', agent, 'locker');
    } else {
      handleValue('agent', '', 'locker');
    }
  };

  return (
    <div className="mainLocker">
      <div className="boxLocker">
        <div className="headerConfigLocker">
          <p>AGENT PICKER</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            padding: '1vw',
          }}
        >
          <CustomCheckbox name="value" tab="locker" label="Agent Locker" />
        </div>
      </div>
      <div className="boxLocker">
        <div className="headerConfigLocker">
          <p>SELECTED AGENT: {settings.locker.agent}</p>
        </div>
        {settings.locker.value && (
          <div className="boxCards">
            {agents.map((item) => {
              return (
                <CardAgent
                  key={`agent-${item.name}`}
                  handleAgent={handleAgent}
                  agent={item}
                  selectAgent={settings.locker.agent}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Locker;
