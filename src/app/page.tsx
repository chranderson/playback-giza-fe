'use client';

import Image from 'next/image';
import { HiddenTweetLink } from './components/HiddenTweetLink';
import { UploadDrawer } from './components/UploadDrawer';
import { useSubmitToGiza } from './hooks/useSubmitToGiza';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const mutation = useSubmitToGiza();
  const { isConnected } = useAccount();
  return (
    <main className="flex flex-col flex-1 items-center justify-between lg:p-24">
      <HiddenTweetLink />
      <div className="relative overflow-hidden lg:py-24">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-0">
            <div className="max-w-2xl text-center mx-auto">
              {/* Title */}
              <div className="mt-6 max-w-2xl ">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight ![line-height:1.2] lg:text-5xl">
                  Connect your ████████ data to Giza.
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-2xl">
                <p className="text-xl text-muted-background">
                  Load your ████████ data to accomplish the ████████ task.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="min-h-16 flex flex-col gap-4 items-center">
                  {!isConnected && <ConnectButton />}
                  {isConnected && mutation.isIdle && !mutation.isError && (
                    <UploadDrawer onConfirm={mutation.mutateAsync} />
                  )}
                  {mutation.isPending && (
                    <h2 className="animate-pulse font-bold text-xl text-red-500">
                      Submitting to Giza...
                    </h2>
                  )}

                  {mutation.isError && (
                    <>
                      <h2 className="font-bold text-xl text-red-500">
                        Error! {mutation.error.message}
                      </h2>

                      <Button
                        className="animate-pulse"
                        onClick={mutation.reset}
                        size="lg"
                        variant="destructive"
                      >
                        Try again
                      </Button>
                    </>
                  )}
                </div>

                <Image
                  className="mx-auto -translate-x-6"
                  src="/sanitized-copy.png"
                  alt="sanitized copy - sensitive information deleted"
                  width={329}
                  height={80}
                />
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
