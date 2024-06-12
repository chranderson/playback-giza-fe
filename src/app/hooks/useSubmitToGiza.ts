import { useMutation } from '@tanstack/react-query';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const submitToGiza = async ({
  images,
  task,
  address
}: {
  images: string[];
  task: string;
  address: string;
}) => {
  await sleep(3000);

  return await fetch('/api/giza-mock', {
    method: 'POST',
    body: JSON.stringify({
      images,
      task,
      address
    })
  });
};

const useSubmitToGiza = () => {
  const { address } = useAccount();
  const router = useRouter();
  return useMutation({
    mutationFn: () =>
      submitToGiza({
        images: ['image-1.png', 'image-2.png', 'image-3.png'],
        task: 'browser_window_management',
        address: address! as string
      }).then(async (data) => {
        const body = await data.json();
        if (!body.success) throw new Error(body.error);
        return body.data;
      }),
    onSuccess: (data) => {
      console.log('success data', data);
      return router.push('/success');
    },
    onError: (error) => {
      console.error('error: error', error);
    }
  });
};

export { useSubmitToGiza };
