'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { UploadButton } from './UploadButton';
import { Button } from '@/components/ui/button';
import { RedactedImageList } from './RedactedImageList';
import { SubmissionWallet } from './SubmissionWallet';
import { CheckIcon } from 'lucide-react';

const RedactedUploadsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <UploadButton />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Please confirm</SheetTitle>
          <SheetDescription>
            If you proceed, you will be signing your soul to the devil. Are you
            sure you want to proceed?
          </SheetDescription>
          <div className="flex flex-col gap-4 pt-4">
            <SubmissionWallet />
            <RedactedImageList />
            <div className="flex items-end justify-end">
              <Button
                size="lg"
                className="bg-black"
                // variant="destructive"
                onClick={() => alert('submit to giza')}
              >
                <CheckIcon className="h-6 w-6 mr-2" />
                Confirm
              </Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

RedactedUploadsSheet.displayName = 'RedactedUploadsSheet';

export { RedactedUploadsSheet };
