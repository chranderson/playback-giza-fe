import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/playback-logo.jpg" alt="Logo" width={203} height={61} />
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 h-24">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Logo />
        <nav className="pl-24 flex flex-wrap gap-4 font-medium">
          <Link className="text-wrap-none" href="https://x.com/playbacknet">
            █ X.com █
          </Link>
          <Link href="https://github.com/orgs/playback-network/repositories">
            GITHUB██████
          </Link>
        </nav>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export { Header };
