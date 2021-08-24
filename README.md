# gatsby-pie

gatsby rework of the pie website

Even if you installed dependancies before for stuff on a different branch its probably a good idea to do it again

## Steps to get it to work

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

## Why the switch from create react app to gatsby?

TLDR: graphQL and the gatsby-source-filesystem plugin

Longer:

With graphQL and the gatsby-source-filesystem plugin we can run queries on our file system (ie instead of a bunch of image imports for `gallery.js` I can query the gallery directory and get the images out that way. Additionally, with graphQL we can also use it with a headless cms potentially. The good thing about a headless cms is that the data can be decoupled from the project and hosted on some other platform like [Contentful](https://app.contentful.com/). On [Contentful](https://app.contentful.com/) content models can be created, think of them as templates for your data. Then when adding data to the platform, I can select which template to use. With graphQL, that particular template can then be queried. This is cool because [Contentful](https://app.contentful.com/) has a nice gui so more people can be responsible for the website data management without having to understand the codebase or even have any coding knowledge. Additionally, because the data is linked to the website by a webhook, there would be no need to pull the repo, then after changes, make a pr.

## Important Platforms

### Yeah security is a thing I guess

Replace PIEPASSWORD with the password that pie uses for everything then append 12 to it

### get form

For the contact us form: [https://getform.io/](https://getform.io/)

email: jonathan.atkins@berkeley.edu

password: PIEPASSWORD12

### contentful

For the contentful account: [https://app.contentful.com/](https://app.contentful.com/)

email: jonathan.atkins@berkeley.edu

password: PIEPASSWORD12

### netlify

Where the website is hosted right now: [https://pioneers-demo.netlify.app/](https://pioneers-demo.netlify.app/)

<hr/>

# How to Make a Page

How to add a page to the website as of now. First do the setup listed above if not done already and bug @Jonathan Atkins for instructions on how to add the [Contentful](https://www.contentful.com/) api key if needed.

## General Page Setup

```jsx
// Example.js

import React from "react";

// example import of svg from React Icons
import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping";

// example import of components
import { TimelineOne } from "../components/Timelines";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CustomizedContainer from "../components/CustomizedContainer";
import AlternativeButton from "../components/AlternativeButton";
import SEO from "../components/SEO";

// needed to use Styled Components
import styled from "styled-components";

// example import of theme to get at the "css variables" for the proj
import theme from "../../assets/themes/theme";

// needed for a Contenful graphql query
import { useStaticQuery, graphql } from "gatsby";

// example query
const query = graphql`
  {
    allContentfulRecruitingTimeline(
    ) {
      nodes {
        content {
          raw
        }
        event
        time
        internalTime
      }
    }
  }
`;

const Example = () => {
  // get out a json object from the query
  // helps to print data to see object structure (expect lots of nesting)
  const data = useStaticQuery(query);
  const events = data.allContentfulRecruitingTimeline.nodes;
  return (
    // wrap everything in Layout
    <Layout>
      {/* add page meta data */}
      <SEO
        title="Get Involved"
        description="Want to help out? Here at PiE, we don't have an application process."
      />

      {/* this is the hero component that I will figure out at some point */}
      <HeroWrapper>
        <div className="hero-image">
          <div>
            <h1>Get Involved</h1>
          </div>
        </div>
      </HeroWrapper>

      {/* after the hero wrap each "section" in a CustomizedContainer */}
      <CustomizedContainer color={theme.colors.grey100}>
        {/* Pie header */}
        <Header type={"blue-header"}>Join Us For Fall Recruiting</Header>
        ...
        {/* example use of svg from React Icons */}
        <BiGroup />
        {/* example button */}
        <AlternativeButton link="/getInvolved/Forms">Join Us</AlternativeButton>
      </CustomizedContainer>

      <CustomizedContainer>...</CustomizedContainer>
    </Layout>
  );
};

const HeroWrapper = styled.div`
  .hero-image {
    background-color: coral;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

export default Example;
```

- `Layout.js`: Wrap everything is this. It contains the header and footer.
- `SEO.js`: Always add this. It adds site meta data where title is the title of the page (see it on the tab) and description is the gist for the page
- `HeroWrapper`: Yeah not really implemented yet but this is where the hero image would be
- `CustomizedContainer.js`: Wrap all _sections_ in this. Adds margins and can pass in a prop for the background color
- `Header.js`: Add this to the beginning of a _section._ Can pass in a prop for the type of header this is - `gold-header` or `blue-header`
- `AlternativeButton.js`: This is the button used for the project. Can pass in a prop for the color this is - `gold` or `blue`
- [React Icons](https://react-icons.github.io/react-icons/): This is where most of the icons/svgs come from. These are nice because they can be imported as React Components
- `theme.js`: `theme` can be imported to get at the _css variables ish things_ for the project. This is to standardize some things like colors and shadows.
  - If you feel the need to add different colors or shadows please add them to `theme.js` .
  - If a new color is used please use [ShadowLord](https://noeldelgado.github.io/shadowlord/#afe2a2) to get all the different shades.

> Note: there are more made components in the project under `components` but are not listed here.

# How to add a Mech Page

There is a way automatically make pages, but I have not looked into it just yet so there will have to be a couple more pages.

## Change an existing page

To change existing page log into [Contentful](https://www.contentful.com/) and navigate to the Content tab. From there find the correct page identified by its name and go in and change the content. Upon completion hit the green publish button. There should be a trigger for the website to rebuild and redeploy with the new info.

## To create a new page

Log into [Contentful](https://www.contentful.com/) and navigate to the Content tab. To the right hit the **Add Mechanical Hub Posts.** If it is not already there there should be a dropdown menu available. After adding something to all the fields.

> NOTE: for the alerts section there needs to be a alert named "temp"

After publishing the page you will then need to navigate to the GitHub repo for the website and clone it. While it might be more helpful to go through the entire setup process that will not be necessary. Simply add a new js file in the `/MechanicalHub` directory and title it with the name that you gave to the post, with no spaces and the beginning of each new word capitalized.

Example:

Blog → Blog.js

Student Resources → StudentResources.js

Tree and Bear → TreeAndBear

### Inside the js

Inside the new js file post the following template:

```jsx
import React from "react";
import CustomizedContainer from "../../../components/CustomizedContainer";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import styled from "styled-components";

import theme from "../../../assets/themes/theme";

import HubPage from "../../../components/HubPage";

const NameNoSpace = () => {
  return (
    <Layout>
      <SEO
        title="NameWithSpace"
        description="Here is the info for NameWithSpace"
      />

      <CustomizedContainer>
        <HubPage name="NameNoSpace" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  );
};

export default NameNoSpace;
```

For every place `NameNoSpace` appears replace with name of the js file name. For every place `NameWithSpace` appears replace with the name of the post from the Contentful entry.

After that is completed save the file and then run the following:

```bash
git add .
git commit -m "new post"
git push
```

> NOTE: if this is too much this an also all be done on github. Simply go through the same process of creating the file, pasting the template and replacing the right things
