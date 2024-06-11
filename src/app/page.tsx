import Image from 'next/image';
// import { UploadButton } from './components/UploadButton';
import { HiddenTweetLink } from './components/HiddenTweetLink';
import { RedactedUploadsSheet } from './components/RedactedUploadsSheet';

export default function Home() {
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
                {/* <UploadButton /> */}
                <RedactedUploadsSheet />
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
      <div id="hero-footer" className="container max-w-screen-2xl flex w-full">
        <Image
          src="/unevaluated.png"
          alt="this is unevaluated data"
          width={197}
          height={16}
        />
      </div>
      {/* End Hero */}
    </main>
  );
}
