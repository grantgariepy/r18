import navValues from "../helpers/navValues";
import House from "./house";
import HouseList from "./houseList";

interface ICurrent{
  currentNavLocation:string
}

const ComponentPicker: React.FC<ICurrent> = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;