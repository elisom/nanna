import React from 'react';
import {useWindowDimensions} from 'react-native';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const windowWidth = useWindowDimensions().width;
  const isLarge = windowWidth > 425;
  return (
    <AppContext.Provider value={{width: windowWidth, isLarge}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext as default};
