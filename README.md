# My Personal Website V2

The second version of my personal website with React.

Integrated with Google Analystics.

## Set Up & Quick Start
1. Git clone the repo
2. Install and use the correct version of Node and npm
   ```bash
   # check version
   node --version
   npm --version
   ```
3. `cd personal-website-v2`
4. `npm install`
5. `npm start`

## Deployed to Github Page
- The first time to deploy
  - Make some configurations 
  - [REF](https://hackernoon.com/how-to-deploy-a-react-app-to-github-pages)

## Deployed to Github Page

- Not the first time
  - Run `npm run deploy` locally to deploy
  - If success, will see `Published` in terminal
  - If you have set a domain, Sometimes, needs to set the Github Pages domain again.

- The first time to deploy
  - Create a new Github repository
  - Change the react app name to what you want, may be the same as  Github repository
    - Search for all `personal-website-v2`, change to `Your-app-name`
  - add remote repository
    ```
    git remote add origin remote repository URL
    git push -u origin main
    ```
  - install gh-pages 
    ```
    npm install gh-pages — save-dev
    ```
  - go to `pakage.json` file and change to homepage property 
    ```json
    "homepage": "https://username.github.io/repository-name",
    ```
  - Still in `pakage.json` file, add those two lines in the scripts property
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```
    in my case it look like that:
    ```json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    },
    ```
  - Run `npm run deploy` locally to deploy
    - If success, will see `Published` in terminal
 
- Ref: this [link](https://hackernoon.com/how-to-deploy-a-react-app-to-github-pages)
