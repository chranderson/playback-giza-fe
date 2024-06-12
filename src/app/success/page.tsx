import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export default function Success() {
  return (
    <main className="flex flex-col flex-1 items-center justify-between lg:p-24">
      <div className="relative overflow-hidden lg:py-24 h-full my-auto">
        <div className="relative z-10">
          <div className="container py-10 lg:py-0">
            <div className="max-w-2xl text-center mx-auto">
              {/* Title */}
              <div className="mt-6 max-w-2xl ">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight ![line-height:1.2] lg:text-5xl">
                  Success!
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-2xl">
                <p className="text-xl text-muted-background flex flex-col gap-2">
                  <span>Great job ████!</span>
                  <span>Your ██████ data has been securely uploaded.</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-col items-center gap-4">
                <Link
                  className="flex gap-2 text-lg items-center text-red-500 font-medium"
                  href="/"
                >
                  <ArrowLeftIcon className="h-6 w-6" />
                  Back
                </Link>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
