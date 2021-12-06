import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import HeaderOption from './HeaderOption';

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption icon={SearchIcon} title="All" selected />
        <HeaderOption icon={PhotographIcon} title="Images" />
        <HeaderOption icon={PlayIcon} title="Videos" />
        <HeaderOption icon={NewspaperIcon} title="News" />
        <HeaderOption icon={MapIcon} title="Maps" />
        <HeaderOption icon={DotsVerticalIcon} title="More" />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
