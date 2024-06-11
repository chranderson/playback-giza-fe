import Image from 'next/image';

const RedactedImageList = () => {
  return (
    <div className="flex flex-row gap-4 h-max">
      <Image
        className="aspect-video"
        src="/tenor.gif"
        alt="not today satan"
        width={498}
        height={280}
      />
      <Image src="/tenor.gif" alt="not today satan" width={498} height={280} />
      <Image src="/tenor.gif" alt="not today satan" width={498} height={280} />
    </div>
  );
};

RedactedImageList.displayName = 'RedactedImageList';

export { RedactedImageList };
