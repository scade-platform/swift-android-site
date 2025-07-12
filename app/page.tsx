import Link from "next/link";

export default function Home() {
  return (
    <div
      className="content text-center">

      <main className="">
        <div className="inline-block themed-icon">
          <svg width="68" height="36" viewBox="0 0 68 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H15.5246V7.33981H7.56325V30.0583H15.5246V36H0V0Z"/>
            <path d="M42.7667 11.4816L47.9814 5.767C45.8517 4.0369 39.9604 0.524277 33.5515 0.524277C25.5305 0.524277 20.0173 5.05049 20.0173 11.0447C20.0173 17.0388 24.1174 19.1359 29.2325 20.866C30.0286 21.1456 30.785 21.3728 31.4816 21.6C35.1438 22.7709 37.0744 23.4 36.6564 25.7418C36.1389 28.5728 30.5461 27.8214 28.8344 27.4019C27.481 27.0524 23.5203 25.6893 21.729 25.0602L18.5245 31.8233C20.7935 33.0466 26.8043 35.4757 32.6559 35.4757C39.9604 35.4757 47.4838 32.1728 47.4838 25.0427C47.4838 17.9825 41.7915 16.2175 36.8157 14.6621C36.7559 14.6447 36.7161 14.6272 36.6564 14.6097C31.6408 13.0369 29.551 11.9185 30.3471 9.64661C31.1432 7.39224 36.5569 7.21748 42.7667 11.4816Z"/>
            <path d="M67.5246 36H52V28.6602H59.96131V5.94175H52V0H67.5246V36Z"/>
          </svg>
        </div>
        <h1 className="color-ios">
          <b>Swift For Android</b>
        </h1>
        <p>
          SCADE enables you to develop native Swift application code for Android and iOS
        </p>
        <Link href='/' className="">
          Get Started
        </Link>
      </main>
      <section>
        <p>
          With SCADE <span className="color-ios">AppLogic</span> you use Swift code on both Swift and Android
        </p>
        <div className="border-ios">
          <p className="color-ios">
            Develop your Code in Swift
          </p>
          <pre className="text-left p-4 focus-visible:outline-none font-[family-name:var(--font-geist-mono)]">
            <code lang="swift">
            {`            @jvm
            class Arrays {
              static func mapReversed(_ arr: [Int], fct: (Int) -> Int) -> [Int] {
                return arr.reversed().map(fct)
              }
            }`}
            </code>
          </pre>
        </div>
        <div className="border-android">
          <p className="color-android">
            Develop your Code in Swift
          </p>
          <pre className="text-left p-4 focus-visible:outline-none font-[family-name:var(--font-geist-mono)]">
            <code lang="kotlin">
            {`            val arr = longArrayOf(1, 2, 3)

            Arrays.mapReversed(arr) {
              it + 1
            }`}
            </code>
          </pre>
        </div>
        <p>
          SCADE <b>AppLogic</b> takes the pain and cost out of <b>cross platform native mobile development</b>.
          You develop your app logic in Swift and compile and run it on both iOS and Android.
        </p>
      </section>
      <section>
        <h2>
          Develop faster.  Reduce development cost
        </h2>
        <div>
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
        <p>
          Lower your development cost and increase revenue with SCADE AppLogic
          for native cross application development
        </p>
      </section>
      <section>
        <h2>
          How does it work ?
        </h2>
        <div>
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
        <p>
          Develop your app logic in Swift, compile the code to a native AAR file, and easily call the Swift code using Java or Kotlin.
          SCADE <b>AppLogic</b> consist of the Android compiler to create the AAR file and the generator to create the Java / Kotlin access layer (Swift4J).
        </p>
      </section>
      <section>
        <h2>
          Swift library support
        </h2>
        <div>
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
        <p>
          Use popular 3rd party libraries to speed up development and run it one both platforms.
          SCADE <b>AppLogic</b> ensures seamless use of your favorite library both on iOS and Android
        </p>
        <ul>
          <li>
            Swift Foundation
          </li>
          <li>
            Alamofire
          </li>
          <li>
            Swift Foundation
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
      <section>
        <h2>
          More Questions
        </h2>
        <p>
          For more answers, see our frequently asked question & answer section <Link href="/docs">here</Link>
        </p>
      </section>
    </div>

  );
}





