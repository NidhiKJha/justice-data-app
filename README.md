This app helps us to understand the judgements made by Supreme Court, High Court and Session Courts in different cases. The data used in this is referenced from [39A report](https://static1.squarespace.com/static/5a843a9a9f07f5ccd61685f3/t/5e25a02b5dfafe47d399d2ad/1579524149035/Project+39A+Annual-Statistics-04-PG-Web.pdf).

### To run the app

1. #### `yarn install`

2. #### `Creating a .env.local file`

To run this app we need to create a .env.local file. For that

1.  Go to the terminal and type `touche .env.local`. This will create a .env.local file in the root of the app.
2.  In .env.local file ,

REACT_APP_MAPBOX_TOKEN: "Your access token here"

To get access Token : You need to go to [mapbox](https://www.mapbox.com/), create an account and then you can generate an access token.

3. #### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Deployed Link : https://justice-data-39a.netlify.app//

### Functionalities Added

1. Charts
2. Maps
3. Slider
4. Code Quality Improvement using Prettier
5. Accessibility of the app is 76%

### Tech Used

1. [Create React App](https://github.com/facebook/create-react-app).
2. MapBox
3. chart.js
