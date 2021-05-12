# Installation Requirements

Run `npm i` to install the necessary packages and dependencies.

## Run the Project Locally

Run `npm start` in your console and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Libraries Used

  - "@material-ui/core" - I chose to use Material UI's ready-made components, grid system and typography for this project.
  - "@material-ui/lab" - The filters are all autocompletes so the user can narrow down the suggestions. Autocomplete is a part of the Material UI Lab.
  -  "axios" - For fetching the data from the API.
  -  "node-sass" - I prefer to use .scss in styling.

##
![app overview](https://github.com/emurdnt/shair/blob/main/src/assets/app-overview.png)
* The overview of the app. I have chosen to make my app almost a part of the existing Shair Web App. I thought that it made sense to follow the styling, look and feel of the site.*

![filter and result area](https://github.com/emurdnt/shair/blob/main/src/assets/filter-result-area.png)
* This is the filter and result section. The user can filter using the car make, type and year.The these sections rely on Material UI's grid system to respond to different media queries.*

![Autocomplete filters](https://github.com/emurdnt/shair/blob/main/src/assets/auto-complete-filters.png)
* I have decided to make the filters use `autocomplete` component because I saw that there are more than 10 choices for car makers alone. It will be easier for the user to type what they are specifically looking for to narrow the choices down.*

![loading state](https://github.com/emurdnt/shair/blob/main/src/assets/loading-state.png)
![loading state](https://github.com/emurdnt/shair/blob/main/src/assets/empty-result.png)