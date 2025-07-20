import Image from "next/image";
import Link from "next/link";
import DynamicTextField from '@/components/DynamicTextField';
import getDynamicTextFieldMetadata from '@/utils/getDynamicTextField';
import TextChangeWidth from '@/components/TextChangeWidth';
import FooterSmall from "@/components/FooterSmall";


export default function SwiftForAndroid() {
  const postMatadata = getDynamicTextFieldMetadata("content/SwiftForAndroid")
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className="grid grid-rows-[1fr] items-center justify-items-center p-8 font-(family-name:--font-geist-sans)">

      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <div>
          <TextChangeWidth/>
          <h1 className="dynamic-title">Swift For Android</h1>
        </div>
        <Image
          className="dark m-auto"
          src={`${basePath}/logo-swift.png`}
          alt="Next.js logo"
          width={200}
          height={20}
          priority
        />
        <ol className="list-inside text-sm text-center sm:text-left font-(family-name:--font-geist-mono) m-auto">
          <div>
            {<div className="container">
              {postMatadata.map((post, postIndex) => {
                return (
                  <DynamicTextField key={postIndex} post={post}/>
                )
              })}
            </div>}
          </div>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row m-auto">
          <Link
            className="rounded-full border border-solid border-black/8 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/docs/getting-started/developmentprocess"
          >
            Get Started
          </Link>
        </div>
        <div className="flex items-center m-auto"><FooterSmall/></div>
      </main>

    </div>

  );
}





