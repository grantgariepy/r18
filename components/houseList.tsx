import React, { useEffect, useRef, useState } from "react";
import useHouses from "../hooks/useHouses";
import HouseRow from "./houseRow";
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from "./loadingIndicator";


interface FuncProps {
  //here you can declare the return type (here is void)
  selectHouse: (values: any) => void;
}

const HouseList: React.FC<FuncProps> = ({selectHouse}) => {
  
const {houses, setHouses, loadingState} = useHouses();

if (loadingState != loadingStatus.loaded){
  return <LoadingIndicator loadingState={loadingState}/>
}
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: houses.length + 1,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} selectHouse={selectHouse}/>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;