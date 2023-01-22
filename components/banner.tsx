import { useContext } from 'react';
import navValues from '../helpers/navValues';
import { navigationContext } from './app';

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

interface BannerProps {
  subtitle: string;
}
const Banner: React.FC<BannerProps> = ( {subtitle} ) => {
  const { navigate }:any = useContext(navigationContext)
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./GloboLogo.png" alt="logo" className="logo" onClick={()=> navigate(navValues.home)} />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {subtitle}
      </div>
    </header>
  );
};

export default Banner;
