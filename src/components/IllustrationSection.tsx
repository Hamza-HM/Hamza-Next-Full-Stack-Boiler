import Image from 'next/image';

export const IllustrationSection = () => {
  return (
    <div className="hidden w-1/2 bg-primary/5 md:flex">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div>
            <Image
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
              alt="decorative image"
              width={100}
              height={100}
            />
            <div className="mx-auto w-full max-w-md xl:max-w-xl">
              <h3 className="text-center text-2xl font-bold text-black">
                Design your own card
              </h3>
              <p className="mt-2.5 text-center leading-relaxed text-gray-500">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <div className="mt-10 flex items-center justify-center space-x-3">
                <div className="h-1.5 w-20 rounded-full bg-orange-500"></div>
                <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
                <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
