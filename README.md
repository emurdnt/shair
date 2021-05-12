# Installation Requirements

Run `npm i` to install the necessary packages and dependencies.

## Run the Project Locally

Run `npm start` in your console and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployed App
Check out [this link](https://shair-your-car.herokuapp.com/) to see the deployed version of my app on Heroku.

## Additional Libraries Used

  - "@material-ui/core" - I chose to use Material UI's ready-made components, grid system and typography for this project.
  - "@material-ui/lab" - The filters are all autocompletes so the user can narrow down the suggestions. Autocomplete is a part of the Material UI Lab.
  -  "axios" - For fetching the data from the API.
  -  "node-sass" - I prefer to use .scss in styling.

##
![app overview](https://github.com/emurdnt/shair/blob/main/src/assets/app-overview.png)
* The overview of the app. I have chosen to make my app almost a part of the existing Shair Web App. I thought that it made sense to follow the styling, look, and feel of the site.

![filter and result area](https://github.com/emurdnt/shair/blob/main/src/assets/filter-result-area.png)
* This is the filter and result section. The user can filter using the car make, type and year. These sections rely on Material UI's grid system to respond to different media queries. I added a result count.

![Autocomplete filters](https://github.com/emurdnt/shair/blob/main/src/assets/auto-complete-filters.png)
* I have decided to make the filters use the `Autocomplete` component because there are more than 10 choices for car makers alone. It will be easier for the user to type what they are specifically looking for to narrow the choices down.

![validation](https://github.com/emurdnt/shair/blob/main/src/assets/validation.png)
* The car maker is a required field so I added a validation to this field.

![loading state](https://github.com/emurdnt/shair/blob/main/src/assets/loading-state.png)
* I added a `loading` screen to my app. This is a good indication to the user that the app is still fetching data.

![loading state](https://github.com/emurdnt/shair/blob/main/src/assets/empty-result.png)
* I also created an `empty` screen when the result is empty. I did this because I noticed that that there is no way to populate the year dropdown using the car maker. Unlike the car type which can be populated when the car maker is selected.

## Design Choices

I created 2 custom hooks for this project: `useApplicationData hook` and `useVisualMode hook`. The `useApplicationData hook` is the main entry point of any process that changes the state. It is also responsible for dispatching the necessary actions to the reducer. 

The second hook is responsible for switching between the different modes a component can have. I used this primarily in the results. When the user fills out the filters and hits search, the component transitions into a `loading mode` which shows the spinner. If there are cars that match the query, the `show mode` will show the results. An `empty mode` will render instead of the `show mode` if there are no cars that match the query. 

The app is responsive so please check it out on mobile!

## Challenges, More Ideas, Etc.

I honestly would love to implement the menu popping down when you scroll that is currently on the Shair Web App. Due to the time constraints, I decided to forego that functionality. I have also started implementing the slider for the year. It is working but I ran into the challenge of distinguishing if the slider is in the default value or if it is actually a part of the query.

If I had more time, I would also create automated tests using Cypress and Jest.

Although the bulk of my experience is with Angular and RxJs. I found this project to be fun and a good learning experience.
