import React, { useCallback, useState } from "react";
import Banner from "./banner";
// import navValues from "../helpers/navValues";
import ComponentPicker from "./componentPicker";
// import { INavValues } from "../helpers/navValues";

interface INavValues {
  home: string;
  house: string;
}
const navValues: INavValues = {
  home: "home",
  house: "house"
}
interface INavState {
  current: string;
  param?: string;
}

interface INavContext {
  current: string;
  navigate: (navTo: string, param: any) => void;
  param?:any
}
const navigationContext = React.createContext<INavContext>({current:navValues.home, navigate:()=>{} });

const App: React.FC = () => {
  const [nav, setNav] = useState<INavState>({ current: navValues.home });

  const navigate = (navTo: string, param?: string) => {
    setNav({ current: navTo, param });
  };

  return (
    <navigationContext.Provider value={{ navigate, ...nav }}>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};



export { navigationContext };
export default App;