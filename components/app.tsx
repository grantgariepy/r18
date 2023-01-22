import Banner from "./banner";
import HouseList from "./houseList";
import { useState, useCallback } from 'react';
import React from 'react';
import navValues from '../helpers/navValues';
import ComponentPicker from "./componentPicker";

type CallbackType = (...args: string[]) => void;

const navigationContext = React.createContext(navValues.home)

const App = () => {
  const navigate:any = useCallback<CallbackType>(
    (navTo, param:any) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState<any>({ current: navValues.home, navigate });
  return (
    <>
      <navigationContext.Provider value={nav}>
        <Banner subtitle={"Providing houses all over the world"}/>
      <ComponentPicker currentNavLocation={nav.current} />
      </navigationContext.Provider>
    </>
  );
};

export { navigationContext }
export default App;
