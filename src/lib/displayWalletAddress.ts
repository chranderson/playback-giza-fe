/**
 *
 *  transform crypto wallet address to standard truncated format for display,
 *  for easy reading of start and end characters
 *
 * - prefixCount defaults to 7
 * - suffixCount defaults to 5
 *
 *  eg: 0x6dc02f3ba1d9ef1f  =>  `'0x6dc...ef1f'`
 */
export function formatWalletAddressForDisplay({
  address,
  prefixCount = 7,
  suffixCount = 5
}: {
  address: string;
  prefixCount?: number;
  suffixCount?: number;
}) {
  if (address.length <= prefixCount + suffixCount) return address;

  return `${address.slice(0, prefixCount)}...${address.substring(
    address.length - suffixCount,
    address.length
  )}`;
}
