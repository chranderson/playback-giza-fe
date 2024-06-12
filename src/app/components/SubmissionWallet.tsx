import { useAccount } from 'wagmi';
import { formatWalletAddressForDisplay } from '@/lib/displayWalletAddress';

const SubmissionWallet = () => {
  const { address } = useAccount();

  return (
    <div className="flex flex-col gap-4">
      <p>
        Wallet Address to receive tokens:{' '}
        <span className="font-bold" title={address}>
          {address
            ? formatWalletAddressForDisplay({ address })
            : 'Please connect wallet'}
        </span>
      </p>
    </div>
  );
};

SubmissionWallet.displayName = 'SubmissionWallet';

export { SubmissionWallet };
