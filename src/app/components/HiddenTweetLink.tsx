import Link from 'next/link';

const HiddenTweetLink = () => {
  return (
    <Link
      aria-label="x.com link - @playbacknet"
      className="absolute top-0 left-0 opacity-0 h-0 w-0"
      href="https://x.com/playbacknet/status/1800562771773493252"
    >
      we are looking for p̶a̶t̶i̶e̶n̶t̶ z̶e̶r̶o̶ our first beta tester.
    </Link>
  );
};

HiddenTweetLink.displayName = 'HiddenTweetLink';

export { HiddenTweetLink };
