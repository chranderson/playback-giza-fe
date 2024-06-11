'use client';

import { Button } from '@/components/ui/button';
import { UploadIcon } from 'lucide-react';

const UploadButton = () => {
  return (
    <Button
      className="flex flex-nowrap justify-center gap-4 font-bold"
      onClick={() => alert('action is WIP')}
      size={'lg'}
      variant="destructive"
    >
      <UploadIcon className=" h-6 w-6" />
      Secure & Upload Video
    </Button>
  );
};

UploadButton.displayName = 'UploadButton';
export { UploadButton };
