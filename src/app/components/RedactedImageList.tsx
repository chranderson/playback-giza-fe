import Image from 'next/image';

const images = [
  {
    id: '1',
    src: '/redacted/redacted-1.png',
    alt: 'redacted frame 1'
  },
  {
    id: '2',
    src: '/redacted/redacted-2.png',
    alt: 'redacted frame 2'
  },
  {
    id: '3',
    src: '/redacted/redacted-3.png',
    alt: 'redacted frame 3'
  },
  {
    id: '4',
    src: '/redacted/redacted-4.png',
    alt: 'redacted frame 4'
  },
  {
    id: '5',
    src: '/redacted/redacted-5.png',
    alt: 'redacted frame 5'
  }
];

const RedactedImageList = () => {
  return (
    <div className="flex flex-row w-full overflow-x-auto gap-4 h-max">
      {images.map((image) => (
        <Image
          key={image.id}
          className="aspect-video h-[280px]"
          src={image.src}
          alt={image.alt}
          width={498}
          height={280}
        />
      ))}
    </div>
  );
};

RedactedImageList.displayName = 'RedactedImageList';

export { RedactedImageList };
