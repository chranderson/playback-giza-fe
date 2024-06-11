'use client';

import { useEffect } from 'react';

const message = `


PLAYBACK.NETWORK ████████████████████████████████████████████████████████████████████

█████████ is a new ██████████████████████████████████
█████████████████zero knowledge██████████████ redacted recordings █████████████████
███████████████████████████████████████
██████ Large Action Model (LAM)s ██████████████████████  decentralized ███████████████
███ $███ █████████████████████
‍
████████ reward early participation ███████ own your data ████████████████.


Join our Discord server: https://discord.gg/f7sKcYKf



`;
const SecretConsoleMessage = () => {
  useEffect(() => {
    console.log(message);
  }, []);

  return null;
};

SecretConsoleMessage.displayName = 'SecretConsoleMessage';

export { SecretConsoleMessage };
