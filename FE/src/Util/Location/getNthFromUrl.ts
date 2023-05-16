import { Location } from 'react-router-dom';

function getNthFromLocation(location: Location, nth: number): number {
  const splitedURL = location.pathname.split('/');
  return Number(splitedURL[nth]);
}

export default getNthFromLocation;
