import {
  BsPlusCircleDotted,
  BsGearFill,
  BsSuitHeartFill,
} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { MdBusiness } from 'react-icons/Md';
import { GoHome } from 'react-icons/Go';
import { IoMdNotificationsOutline } from 'react-icons/Io';
import { AiOutlineBlock } from 'react-icons/Ai';
import { RxHamburgerMenu } from 'react-icons/Rx';

export const Sidebar = () => {
  return (
    <div
      className="fixed grid grid-cols-5 bottom-0 h-16 w-full  
      sm:flex sm:justify-between bg-gray-900 
      text-white shadow sm:h-full sm:w-16 sm:flex-col"
    >
      <div className="hidden sm:flex sm:flex-col sm:justify-start border-b-[1px] border-gray-700">
        <SidebarIcon show={true} icon={<BiUserCircle size="28" />} />
        <SidebarIcon show={true} icon={<MdBusiness size="28" />} />
      </div>
      <div className="col-span-4 flex justify-around sm:flex-col sm:justify-center">
        <SidebarIcon show={false} icon={<GoHome size="28" />} />
        <SidebarIcon show={false} icon={<AiOutlineBlock size="28" />} />
        <SidebarIcon show={false} icon={<BsSuitHeartFill size="28" />} />
        <SidebarIcon
          show={false}
          icon={<IoMdNotificationsOutline size="28" />}
        />
      </div>
      <div className="hidden sm:flex sm:flex-col sm:justify-end border-t-[1px] border-gray-700">
        <SidebarIcon show={true} icon={<BsPlusCircleDotted size="28" />} />
        <SidebarIcon show={true} icon={<BsGearFill size="28" />} />
      </div>
      <div className="col-span-1 flex justify-around sm:hidden">
        <SidebarIcon
          burgerMenue={true}
          show={false}
          icon={<RxHamburgerMenu size="28" />}
        />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, show, burgerMenue }) => {
  let style: Array[] = ['', ''];
  if (show) {
    style[0] = 'hidden';
  }
  if (burgerMenue) {
    style[1] = 'sm:hidden';
  }
  return (
    // relative flex items-center justify-center h-12 w-12 mx-2 rounded-[100%] bg-gray-800 mt-2
    // hover:bg-orange-400 hover:rounded-2xl transition-all duration-200 cursor-pointer
    <div
      className={`relative flex items-center justify-center
       h-12 w-12 mx-2 rounded-[100%] bg-gray-800 my-2
        hover:bg-orange-400 hover:rounded-2xl transition-all
         duration-200 cursor-pointer ${style[0]} sm:flex ${style[1]}`}
    >
      <i>{icon}</i>
    </div>
  );
};
