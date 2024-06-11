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

const UploadDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <UploadButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Please confirm</DrawerTitle>
          <DrawerDescription>
            If you proceed, you will be signing your soul to the devil. Are you
            sure you want to proceed?
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 pt-4 px-4">
          <SubmissionWallet />
          <RedactedImageList />
        </div>
        <DrawerFooter>
          <div className="flex items-end justify-end">
            <Button
              size="lg"
              className="bg-black w-max"
              // variant="destructive"
              onClick={() => alert('submit to giza')}
            >
              <CheckIcon className="h-6 w-6 mr-2" />
              Confirm
            </Button>
          </div>
          {/* <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

UploadDrawer.displayName = 'UploadDrawer';
export { UploadDrawer };
