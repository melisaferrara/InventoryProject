import React, { useContext } from 'react';
import { IconContext } from '../context/InventoryContext';

const Equip = () => {
  const { selectedIcon } = useContext(IconContext);
  console.log(selectedIcon);

  const categories = [ 'helm', 'armor', 'greave'];

  return (
    <div className='flex gap-2 items-center w-max h-max'>
      <div className='flex gap-2'>
        <div className='border border-cyan-500 w-24 h-24 bg-cyan-900'>
          {selectedIcon['weapon'] && <img src={selectedIcon['weapon'].icon} alt='weapon' />}
        </div>
      </div>

      <div className='flex flex-col gap-2 items-center'>
        {categories.map((category) => {
          const icon = selectedIcon[category];
          return (
            <div key={category} className='border border-cyan-500 w-24 h-24 bg-cyan-900'>
              {icon && <img src={icon.icon} alt={icon.category} />}
            </div>
          );
        })}
      </div>

      <div className='border border-cyan-500 w-24 h-24 bg-cyan-900'>
          {selectedIcon['shield'] && <img src={selectedIcon['shield'].icon} alt='shield' />}
        </div>
    </div>
  );
};

export default Equip;
