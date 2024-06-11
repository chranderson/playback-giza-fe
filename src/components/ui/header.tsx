import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/playback-logo.jpg" alt="Logo" width={203} height={61} />
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 sm:h-24">
      <div className="container flex flex-wrap gap-2 lg:flex-nowrap lg:justify-stretch lg:h-14 max-w-screen-2xl items-center">
        <Logo />
        <nav className="sm:pl-24 flex flex-1 flex-wrap flex-nowrap gap-4 font-medium">
          <Link className="text-wrap-none" href="https://x.com/playbacknet">
            █ X.com █
          </Link>
          <Link href="https://github.com/orgs/playback-network/repositories">
            GITHUB██████
          </Link>
        </nav>

        <ConnectButton />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export { Header };
