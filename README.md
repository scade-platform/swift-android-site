# swift-android-site
Swift for Android Site

---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

If you do not have npm installed, visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  or [https://github.com/nodesource/distributions](https://github.com/nodesource/distributions) and follow the instruction on the website of your choice to download npm and Node.js. 
For Linux users, [https://github.com/nodesource/distributions](https://github.com/nodesource/distributions) is recommended.

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.



## Edit Pages

Follow these steps to change site the content:

1. **Homepage**
   - Open the `app/page.tsx` file.
   - You may edit text inside page but be sure you have not touched any tags and mark down is not supported.

2. **What's new**
   - Open the `content/Blog/Blog.md` file.
   - You may edit text inside like with simple .md file.

3. **swift-for-android**
   - Open the `content/SwiftForAndroid/SwiftForAndroidText.md` file.
   - You may edit text inside like with simple .md file.

## Edit Documentation

- Open the `content/docs` folder.
- If a `.md` file is added to the `/docs` folder, its content will be automatically generated in the website documentation.
- Edit the `meta.json` file to organize the newly added file among the others. A folder can also be sorted like a file.
- If a folder is added, a `meta.json` file is required to sort the content inside that folder.
- If `meta.json` is not created inside a folder, the files will be sorted alphabetically.

