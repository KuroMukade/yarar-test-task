import Skeleton from '../Skeleton/Skeleton';
import { ICurrentPoint } from '../types/points';

interface ISidebar {
  cities: ICurrentPoint[];
}

const Sidebar = ({ cities }: ISidebar) => {
  console.log(cities)
  const skeletons = new Array(4);
  console.log(skeletons)

  return (
    <div className={'sidebar'}>
      {cities ? <ul className="sidebar-items-container">
         {cities?.map((item, index) => (
          <li key={item.id} className="sidebar-item">
            <img className="sidebar-item-image" src={item.image} alt="собака бедная" />
            <div className="sidebar-item-text-container">
              <p className="sidebar-item-text">{item.name}</p>
              <p className="sidebar-item-city">{item.cityId[0].name}</p>
            </div>
          </li>
        ))}
      </ul> : skeletons.map((item, index) => <Skeleton key={index} />) }
       {/* <ul className="sidebar-items-container">
         {cities?.map((item, index) => (
          <Skeleton key={index} />
          // <li key={item.id} className="sidebar-item">
          //   <img className="sidebar-item-image" src={item.image} alt="собака бедная" />
          //   <div className="sidebar-item-text-container">
          //     <p className="sidebar-item-text">{item.name}</p>
          //     <p className="sidebar-item-city">{item.cityId[0].name}</p>
          //   </div>
          // </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
