import Link from "next/link";
import TextChangeWidth from "@/components/TextChangeWidth";
import Image from "next/image";
import DynamicTextField from "@/components/DynamicTextField";
import FooterSmall from "@/components/FooterSmall";
import getDynamicTextFieldMetadata from "@/utils/getDynamicTextField";

export default function Home() {
  const postMatadata = getDynamicTextFieldMetadata("content/SwiftForAndroid")
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
      <div
        className="grid grid-rows-[1fr] items-center justify-items-center p-8 font-(family-name:--font-geist-sans)">

        <main className="flex flex-col row-start-1 items-center sm:items-start text-center">
          <div className="mb-8 w-full">
            <TextChangeWidth/>
            <h1 className="dynamic-title">Swift For Android</h1>
          </div>
          <Image
            className="dark m-auto mb-8"
            src={`${basePath}/logo-swift.png`}
            alt="App logo"
            width={200}
            height={20}
            priority
          />
          <ol className="mb-8 list-inside text-sm text-center sm:text-left font-(family-name:--font-geist-mono) m-auto">
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
              className="rounded-full border border-solid color-background bg-foreground hover:opacity-80 transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://scade.io/docs"
            >
              Get Started
            </Link>
          </div>
          <h3 className="font-light m-auto text-xl font-bold mt-16 mb-4 font-(family-name:--font-geist-mono)">
            Subscribe to the Swift for Android Newsletter
          </h3>
          <p className="font-light m-auto text-center mb-0 font-(family-name:--font-geist-mono)">We send updates once a month</p>
          <iframe src="/MailerLite.html" frameBorder="0" className="m-auto w-[450px] h-[320px] max-w-full inline-block"></iframe>
          <div className="flex items-center m-auto"><FooterSmall/></div>
        </main>

      </div>

  );
}





