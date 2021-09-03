# gatsby-pie

gatsby rework of the pie website

Even if you installed dependancies before for stuff on a different branch its probably a good idea to do it again

## Setup

After pulling the repo install gatsby. `cd` into the folder and run the following:

```elm
npm install -g gatsby-cli
```

Then cd into the pie-website, install dependancies and boot up the server:

```elm
cd pie-website
npm install
npm start
```

Note: this will take a long time probably - there are some fat things to install

The site is now running at `http://localhost:8000`

\_Note: You'll also see a second link: `http://localhost:8000/___graphql`\_. This is a tool you can use to experiment with querying your data.

When working on the repo keep the following in mind

- The error messages are not as helpful as in create react app
- changes won't automatically appear in browser after file save, will have to reload browser
- sometimes after changes you will need to restart the server by stopping it and then rerunning `npm start`
- from the tutorial I watched for this, when you are doing graphQL queries and the query is correct but things do not seem to be working, try running `gatsby clean` then try again
- if you need an icon svg, browse the selection from [React Icons](https://react-icons.github.io/react-icons/) and import the icon like how it is done in `links.js`


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
