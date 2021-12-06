interface AvatarProps {
  url: string;
  className?: string;
}

const Avatar = ({ url, className }: AvatarProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      src={url}
      alt="Profile Picture"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
