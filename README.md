This is a [Next.js](https://nextjs.org/) project stubbed out to use a Keystone backend, Apollo as a GraphQL client.

The frontend is using styled components.

## Getting Started

First, install and run the development server:

npm install

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

_Issue_

The project is generating an error in the console about multiple renderers concurrently rendering the same context provider

        Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.
            at AppContainer (/Users/thorntonbf/GitHub/apolloTest/node_modules/next/dist/server/render.js:298:29)
            at AppContainerWithIsomorphicFiberStructure (/Users/thorntonbf/GitHub/apolloTest/node_modules/next/dist/server/render.js:327:57)
            at AppTree
        Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.
        Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.
            at AppContainer (/Users/thorntonbf/GitHub/apolloTest/node_modules/next/dist/server/render.js:298:29)
            at AppContainerWithIsomorphicFiberStructure (/Users/thorntonbf/GitHub/apolloTest/node_modules/next/dist/server/render.js:327:57)
            at AppTree
        Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.

The issue at hand is _I think_ that the project is rendering data from Apollo via \_app.js but is also rendering the styled components pieces via a custom \_document.js.

I'm not sure how to reconcile this error.
