interface HeaderOptionProps {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
}

const HeaderOption = ({ icon: Icon, title, selected }: HeaderOptionProps) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      {/* @ts-ignore */}
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
