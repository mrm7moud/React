# React + Redux + React Router + Sass
If you're not sure what any of the above things are, google them.

## Folder structure
Try to understand the folder structure:

- **actions**
  - functions which are called from your components
  - these functions dispatch `actions`
  - related to redux
- **assets**
  - static files such as icons, graphics, logos
- **components**
  - react components
- **constants**
  - action types
- **reducers**
  - functions which listen for `actions` return a new state
  - related to redux
- **styles**
  - css/sass

## How to run this app
### Dev
1. Clone this repo
2. run `npm install`
3. run `npm run dev:build`
>  this bundles and watches the react app
4. in another terminal tab, run `npm run dev:start`
>  this runs and watches the server
