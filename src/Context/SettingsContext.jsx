import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsStorage = ({ children }) => {
  const [settings, setSettings] = useState({
    user: 'claudio',
    aimbot: {
      value: false,
      drawFov: false,
      fov: 0,
      sensivity: 0,
      hitbox: 0,
    },
    trigger: {
      value: false,
      delay: 0,
    },
    recoil: {
      value: false,
      maxRecoil: 0,
      speed: 0,
    },
    locker: {
      value: false,
      agent: '',
    },
    settings: {
      streamMode: false,
      aimKey: '',
      triggerKey: '',
      config: '',
    },
  });

  const [savedSettings, setsavedSettings] = useState([
    { name: 'Jorge', settings: [] },
    { name: 'Claudio', settings: [] },
    { name: 'Antonio', settings: [] },
    { name: 'Armando', settings: [] },
  ]);

  const handleValue = (name, value, tab) => {
    setSettings({
      ...settings,
      [tab]: { ...settings[tab], [name]: value },
    });
  };

  const addConfig = (e) => {};

  const logout = (e) => {};

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        handleValue,
        savedSettings,
        addConfig,
        logout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
