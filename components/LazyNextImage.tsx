import Image from 'next/image';
import { useState } from 'react';

const LazyNextImage = ({ className, ...props }: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={`${className} 
    duration-700 ease-in-out group-hover:opacity-75
    ${isLoading ? ' blur-2xl grayscale' : ' blur-0 grayscale-0'})`}
      {...props}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default LazyNextImage;
