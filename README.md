# gatsby-pie

Gatsby rework of the pie website.

## Setup

After pulling the repo add the environment variables (note these are not here after pulling from the repo because `.env` files are part of the `.gitignore`). There are a few that are used for the mail chimp form, but these are not really needed for local development. However, what will be needed will the the Contentful api key. To get it head over to [Contentful](https://app.contentful.com/) and click on the settings dropdown tab on the navbar. Under the header `Space Settings`, click on the one that says `API keys`. There should be two keys listed, click on the `PieWebsite` one. Then you want to copy to clipboard the `Content Delivery API - access token`. Back in your `website2` files, make a new file called `.env.development` inside the `pie-website` directory. Then put inside the following:
```elm
CONTENTFUL_API_KEY=Contentful_API_Key
```
Replacing Contentful_API_Key with what you grabbed from Contentful.

> Note: the commands for setup use `npm`, so if you do not have it run the command `npm install -g npm`
> <br>
> More on that [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Next, install the Gatsby CLI globally. `cd` into the project folder and run the following:

```elm
npm install -g gatsby-cli
```

Then cd into `pie-website`, install the dependancies and boot up the server:

```elm
cd pie-website
npm install
npm start
```

Note: this will take a long time probably - there are some fat things to install.

The site is now running at `http://localhost:8000`

\_Note: You'll also see a second link: `http://localhost:8000/___graphql`\_. This is a tool you can use to experiment with querying your data.

## Important Platforms For Content

Replace PIEPASSWORD with the password that pie uses for everything then append 12 to it

### get form

For the contact us form: [https://getform.io/](https://getform.io/)

email: jonathan.atkins@berkeley.edu

password: PIEPASSWORD12

### contentful

For the contentful account: [https://app.contentful.com/](https://app.contentful.com/)

email: jonathan.atkins@berkeley.edu

password: PIEPASSWORD12
