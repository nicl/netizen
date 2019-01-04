# Netizen

Community mapping.

Use cases: anything around community.

Not for: for-profit organisations (these are not allowed on the site).

To prevent stale data, organisations are automatically removed after 1 year unless renewed.

Data model:

    name: string
    address: string // typically just number and street
    postcode: string
    tags: string[]
    description: string
    website: URL
    email: string // used for renewal and contact info

Tags are not freeform, but must be from the provided list:

    physical health
    mental health
    food
    cooperative
    environment
    education
    children
    teenagers
    elderly
    men
    women
    sexuality
    homelessness
    culture

This list is constantly subject to review and tags may be added/removed or
re-classified at any point.

## Local development

Netizen is currently a website. It is written in Javascript (really Typescript) and mostly runs on the client.

    npm run start // serve the JS assets

Then simply, open `index.html` in your browser of choice.

Note, the index file assumed JS assets are available at http://localhost:8080/bundle.js so you'll need to update it if you change how the JS is served.

To see changes, simply refresh in your browser.

See the `scripts` key in the `package.json` file for an up-to-date list of commands to run and test the app.

