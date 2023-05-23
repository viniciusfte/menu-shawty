import { useContext, useState } from 'react';
import './App.css';
import Aimbot from './Pages/Aimbot/Aimbot';
import {
  Button,
  ButtonBase,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import Trigger from './Pages/Trigger/Trigger';
import Recoil from './Pages/Recoil/Recoil';
import Locker from './Pages/Locker/Locker';
import AimIcon from './assets/icons_menu/AimIcon.jsx';
import TriggerIcon from './assets/icons_menu/TriggerIcon.jsx';
import RecoilIcon from './assets/icons_menu/RecoilIcon.jsx';
import LockerIcon from './assets/icons_menu/LockerIcon.jsx';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { SettingsContext } from './Context/SettingsContext';
import Settings from './Pages/Settings/Settings';
import styled from 'styled-components';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.15)',
    },
    primary: {
      main: '#9667BC',
    },
  },
});

const tabs = [
  { name: 'AIMBOT', icon: <AimIcon />, tabContent: <Aimbot /> },
  { name: 'TRIGGER', icon: <TriggerIcon />, tabContent: <Trigger /> },
  { name: 'RECOIL', icon: <RecoilIcon />, tabContent: <Recoil /> },
  { name: 'LOCKER', icon: <LockerIcon />, tabContent: <Locker /> },
  {
    name: 'SETTINGS',
    icon: <TuneRoundedIcon sx={{ fontSize: '15px' }} />,
    tabContent: <Settings />,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: '85%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && { ...children }}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: '1.6vh !important',
  color: 'rgba(255, 255, 255, 0.35) !important',
  textTransform: 'none !important',
}));

const CustomTabs = styled(Tabs)(({ theme }) => ({
  width: '100%',
  '.MuiButtonBase-root': {
    justifyContent: 'start',
    fontSize: '1.5vh',
    minHeight: 'fit-content',
    color: 'rgba(255, 255, 255, 0.15)',
    fill: 'rgba(255, 255, 255, 0.15)',
  },
  borderColor: 'divider',
  '.MuiTabs-indicator': {
    left: 0,
  },
  '.Mui-selected': {
    color: 'rgba(255, 255, 255, 0.6) !important',
    fill: '#fff !important',
    fillOpacity: '0.6 !important',
  },
}));

function App() {
  const { logout } = useContext(SettingsContext);
  const [tabSelected, setTabSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <div className="box">
          <div
            style={{
              flexGrow: 1,
              height: '100%',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '20%',
                display: 'flex',
                padding: '3% 0px',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <CustomTabs
                orientation="vertical"
                variant="scrollable"
                value={tabSelected}
                onChange={handleChange}
              >
                {tabs.map((item) => (
                  <Tab
                    icon={item.icon}
                    iconPosition="start"
                    label={item.name}
                  />
                ))}
              </CustomTabs>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'center', gap: 2 }}
                >
                  <ButtonStyled
                    variant="text"
                    startIcon={<LogoutRoundedIcon fontSize="1vh" />}
                    onClick={logout}
                  >
                    Sair
                  </ButtonStyled>
                </div>
              </div>
            </div>

            {tabs.map((item, index) => (
              <TabPanel value={tabSelected} index={index}>
                {item.tabContent}
              </TabPanel>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
