import Image from 'next/image';

interface AvatarProps {
  url: string;
  className?: string;
}

const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <Image
      loading="lazy"
      src={url}
      alt="Profile Picture"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
