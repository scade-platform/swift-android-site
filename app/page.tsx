import Link from "next/link";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/Footer";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const swiftCode = `
@jvm
class Arrays {
  static func mapReversed(_ arr: [Int], fct: (Int) -> Int) -> [Int] {
    return arr.reversed().map(fct)
  }
}
`.trim();
  const kotlinCode = `
val arr = longArrayOf(1, 2, 3)
Arrays.mapReversed(arr) {
  it + 1
}
`.trim();
  return (
    <div
      className="section text-center max-w-[600px]">
      <main className="mt-52">
        <div className="inline-block themed-icon">
          <svg width="68" height="36" viewBox="0 0 68 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H15.5246V7.33981H7.56325V30.0583H15.5246V36H0V0Z"/>
            <path d="M42.7667 11.4816L47.9814 5.767C45.8517 4.0369 39.9604 0.524277 33.5515 0.524277C25.5305 0.524277 20.0173 5.05049 20.0173 11.0447C20.0173 17.0388 24.1174 19.1359 29.2325 20.866C30.0286 21.1456 30.785 21.3728 31.4816 21.6C35.1438 22.7709 37.0744 23.4 36.6564 25.7418C36.1389 28.5728 30.5461 27.8214 28.8344 27.4019C27.481 27.0524 23.5203 25.6893 21.729 25.0602L18.5245 31.8233C20.7935 33.0466 26.8043 35.4757 32.6559 35.4757C39.9604 35.4757 47.4838 32.1728 47.4838 25.0427C47.4838 17.9825 41.7915 16.2175 36.8157 14.6621C36.7559 14.6447 36.7161 14.6272 36.6564 14.6097C31.6408 13.0369 29.551 11.9185 30.3471 9.64661C31.1432 7.39224 36.5569 7.21748 42.7667 11.4816Z"/>
            <path d="M67.5246 36H52V28.6602H59.96131V5.94175H52V0H67.5246V36Z"/>
          </svg>
        </div>
        <h1 className="color-ios mt-2 font-bold text-3xl lg:text-5xl med mb-4">
          Swift For Android
        </h1>
        <p className="mb-8">
          SCADE enables you to develop native Swift application code for Android and iOS
        </p>
        <Link href='/docs/getting-started/developmentprocess' className="bg-accent color-background px-8 py-2 inline-block rounded-md font-bold mb-8 hover:opacity-80">
          Get Started
        </Link>
      </main>
      <section>
        <p className="mb-8 mt-6">
          With SCADE <span className="color-ios font-bold">AppLogic</span> you use Swift code on both Swift and Android
        </p>
        <div className="border-ios">
          <p className="color-ios font-bold mt-4">
            Develop your Code in Swift
          </p>
          <CodeBlock language="swift" code={swiftCode}/>
        </div>
        <div className="border-android mt-6 mb-8">
          <p className="color-android font-bold mt-4">
            Use it on Android
          </p>
          <CodeBlock language="kotlin" code={kotlinCode}/>
        </div>
        <p className="mb-8">
          SCADE <b>AppLogic</b> takes the pain and cost out of <b>cross platform native mobile development</b>.
          You develop your app logic in Swift and compile and run it on both iOS and Android.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-12 mb-12">
          Develop faster.  Reduce development cost
        </h2>
        <p className="mb-8">
          Lower your development cost and increase revenue with SCADE AppLogic
          for native cross application development
        </p>
        <Image src={`${basePath}/landing/fast.svg`} width="753" height="316" className="img-fluid inline-block" alt="logo"/>
        <div className="hidden">
          UI Code
          30%
          UI Code
          30%
          UI Code
          30%
          UI Code
          30%
          Application
          Logic Code

          70%
          Application
          Logic Code

          70%
          Application
          Logic Code

          70%
          iOS
          Android
          iOS
          Android
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-12 mb-12">
          How does it work ?
        </h2>
        <Image src={`${basePath}/landing/how.svg`} width="668" height="162" className="img-fluid inline-block dark:bg-white rounded-3xl" alt="logo"/>
        <div className="hidden">
          iOS App
          Android App
          Swift
          Android
          Compiler
          Java / Kotlin
          Swift non-UI
          code
          Swift Binary
          library (AAR)
        </div>
        <p className="mt-6">
          Develop your app logic in Swift, compile the code to a native AAR file, and easily call the Swift code using Java or Kotlin.
          SCADE <b>AppLogic</b> consist of the Android compiler to create the AAR file and the generator to create the Java / Kotlin access layer (Swift4J).
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-12 mb-12">
          Swift library support
        </h2>
        <Image src={`${basePath}/landing/support.svg`} width="668" height="322" className="img-fluid inline-block dark:bg-white rounded-3xl" alt="logo"/>
        <div className="hidden">
          iOS App
          Android App
          Swift
          Android
          Compiler
          Java / Kotlin
          Swift non-UI
          code
          Swift Binary
          library (AAR)
          Foundation
          Foundation
          SQLite
          SQLite
          Alamofire
          Alamofire
          ...
          ...
        </div>
        <p className="mt-6">
          Use popular 3rd party libraries to speed up development and run it one both platforms.
          SCADE <b>AppLogic</b> ensures seamless use of your favorite library both on iOS and Android
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc text-left max-w-[600px] mx-auto mt-8">
          <li>
            Swift Foundation
          </li>
          <li>
            Alamofire
          </li>
          <li>
            SQLite
          </li>
          <li>
            CryptoSwift
          </li>
          <li>
            Realm
          </li>
          <li>
            ....
          </li>
        </ul>
      </section>
      <section className="pb-20">
        <h2 className="text-2xl font-bold mt-12 mb-6">
          More Questions
        </h2>
        <p>
          For more answers, see our frequently asked question & answer section <Link href="/docs" className="underline hover:no-underline underline-offset-4">here</Link>
        </p>
      </section>
      <div className="flex items-center m-[auto]"><Footer/></div>
    </div>

  );
}





