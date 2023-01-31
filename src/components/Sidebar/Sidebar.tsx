import { ICurrentPoint } from '../types/points';

interface ISidebar {
  isOpen: boolean;
  isLoading: boolean;
  setIsOpen: (flag: boolean) => void;
  cities: ICurrentPoint[] | null;
}

const Sidebar = ({ isOpen, isLoading, cities, setIsOpen }: ISidebar) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={isOpen ? 'sidebar active' : 'sidebar'}>
      <ul className="sidebar-items-container">
        {cities?.map((item) => (
          <li key={item.id} className="sidebar-item">
            <img className="sidebar-item-image" src={item.image} alt="собака бедная" />
            <div className="sidebar-item-text-container">
              <p className="sidebar-item-text">{item.name}</p>
              <p className="sidebar-item-city">{item.cityId[0].name}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="sidebar-close" onClick={() => setIsOpen(false)}>
        X
      </div>
    </div>
  );
};

export default Sidebar;