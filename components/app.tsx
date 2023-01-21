import Banner from "./banner";
import HouseList from "./houseList";
import { useState } from 'react';
import House from "./house";
import { SetStateAction } from "react";
import React from 'react';

const App: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = React.useState<undefined>();
  const setSelectedHouseWrapper = (house: SetStateAction<undefined>) => {
    // do checks on house
    setSelectedHouse(house)
  }

  return (
    <>
      <Banner subtitle={"Providing houses all over the world"}/>
      {selectedHouse ? <House house={selectedHouse}/> : <HouseList selectHouse={setSelectedHouseWrapper}/>}
      </>
  );
};

export default App;
