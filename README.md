# Github Cards

A React app where you input a github username, it gets the user's info via the github api, and then it displays some of the user's info. It is the result of completing the [React: Getting Started](https://www.pluralsight.com/courses/react-js-getting-started) course on Pluralsight and is one of the two applications that are implemented.

The course concerns the fundamental concepts of React: designing class components and stateful function component; how to one-way flow data and behavior in a component tree; how to read and update state elements; modern JavaScript features used with React like arrow functions, destructuring rest and spread operators, classes, async/await, and more; taking input from the user; reading data from an API; managing side effects, like timers; sharing stateful logic with custom hooks; configuring and using a local JavaScript development environment on your machine; and the skills and knowledge you need to understand React projects and start simple React applications from scratch.

## Technology

- Node.js version 18
- React
- Next.js

## Getting Started

1. Install [Node 18](https://nodejs.org) (I recommend using nvm - node version manager - to switch between versions of node)
2. Clone this repository

```
git clone https://github.com/g-esco101/github-cards-js.git
```

3. Change to root directory

```
cd github-cards-js
```

4. Install node packages with dependencies

```
npm install
```

5. Run the app

```
npm run dev
```

## Building the app for production

1. Build the app

```
npm run build
```

2. Run the app

```
npm run start
```

## Creating project from an empty directory

This section is intended for people taking the course and wish to create the project from an empty directory. It uses the latest versions of the tools/dependencies instead of using the versions in the course.

- Make a new directory to use as the main directory for the project (I named mine github-cards-js):

```
mkdir github-cards-js
```

- Move into this directory:

```
cd github-cards-js
```

- Initialize the project (this will create the package.json file):

```
npm init -y
```

- Install dependencies:

```
npm install react react-dom next axios
```

- Add these scripts to the package.json file using your IDE or text editor:

```
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

- Nextjs has file based routing built into it: Any js file that you put into your pages directory, will get executed when the user browses to the root of your website followed by the name of that js file. Create the pages directory and add a file named index.js and a file named \_document.js:

```
mkdir pages
```

index.js

```
import App from "../src/components/App";

const IndexPage = () => {
  return <App />;
};

export default IndexPage;
```

\_document.js

```
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="css/local-styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

The \_document.js file acts like a template for all your React pages, such that what is mentioned in the Head section is pulled into all your site pages. You can add other dependencies like bootstrap, fontawesome icons, fonts from google, and a custom css file here. Be sure to change the name of the css file to match yours.

- In the project root directory (github-card-js), add the public directory from the instructor's public or make your own. Webpack will serve your contents from this directory. It is essentially the root of the web project and contains these directories (static assets): css, images, etc.

- Now you can begin coding the app! Run the app:

```
npm run dev
```
