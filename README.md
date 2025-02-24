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
If server does not start try updating npm
```bash
npm install -g npm
```

If you do not have npm installed visit https://nodejs.org/en/download/ or https://github.com/nodesource/distributions and follow the instruction on the website of your choise to download npm and Node.js.
For Linux users https://github.com/nodesource/distributions is recomended.

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.



## Edit Homepage

Follow these steps to change the content on the homepage:

1. **The short description**
   - Open the `content/HomePage` folder.
   - By editing `HomePageText.md`, you can change the description of the homepage.

2. **The main content**
   - There are five boxes that can be used to display content.
   - Open the `components` folder.
   - Open the `InfoHome.jsx` file.
   - There, you will find the function `InfoHome`.
   - Insert the box you wish to add to the content of your page.
   
   **Example:**
   ```jsx
   <HomeInfoItemOneTextW title={content.titleVariable} text={content.textVariable} />
   ```
   - Open the `content/HomePage` folder.
   - Open the `HomePageInfo.mdx` file.
   - Add new variables for the title, content, or images. The variable names should match the ones used in the box added previously. Every variable should be unique. If a variable appears to be already used, threre might be a conflict.

   **Example:**
   ```js
   export const titleVariable = "Title";
   export const textVariable = "Text/Content";
   ```

Since all the main page content is stored in a single file, making changes can be more difficult. If necessary, the editing process could be simplified by creating a separate document for each box. However, this could lead to confusion.

## Edit Documentation

- Open the `components/docs` folder.
- If a `.md` file is added to the `/docs` folder, its content will be automatically generated in the website documentation.
- Edit the `meta.json` file to organize the newly added file among the others. A folder can also be sorted like a file.
- If a folder is added, a `meta.json` file is required to sort the content inside that folder.
- If `meta.json` is not created inside a folder, the files will be sorted alphabetically.

