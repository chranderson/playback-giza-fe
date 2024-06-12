'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { UploadButton } from './UploadButton';
import { RedactedImageList } from './RedactedImageList';
import { SubmissionWallet } from './SubmissionWallet';
import { CheckIcon } from 'lucide-react';

const UploadDrawer = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <UploadButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Please confirm</DrawerTitle>
          <DrawerDescription>
            Share the latest gizatech blog post on twitter.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 pt-4 px-4">
          <SubmissionWallet />
          <RedactedImageList />
        </div>
        <DrawerFooter>
          <div className="flex items-end justify-end gap-4">
            <DrawerClose asChild>
              <Button size="lg" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
            <Button size="lg" className="bg-black w-max" onClick={onConfirm}>
              <CheckIcon className="h-6 w-6 mr-2" />
              Confirm
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

UploadDrawer.displayName = 'UploadDrawer';
export { UploadDrawer };
