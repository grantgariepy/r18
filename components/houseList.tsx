import React, { useState } from "react";
import useHouses from "../hooks/useHouses";
import HouseRow, { IHouse } from "./houseRow";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "../helpers/loadingStatus";
import { HouseType } from "../types/houseProps";

const HouseList = () => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded){

    return <LoadingIndicator loadingState={loadingState} />;
  }

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
        photo: ""
      } as HouseType
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
            <HouseRow key={h.id} house={h as IHouse} />
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