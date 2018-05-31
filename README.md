# A Weather app written on React, Redux



### Overview

This web app gives user the ability to view the temperature, pressure and humidity of any given location. A location can be searched using the search field. Locations are displayed via Google Maps API and weather information is obtained via OpenWeatherMap API.

#### Technology Stack
This app makes use of the following Technologies

1. React JS framework
2. React-redux framework
3. Axios for Ajax requests
4. React-Sparklines for displaying charts
5. Redux-Promise middleware
6. Lodash

#### How it works
The app provides the user the ability to search for any location using a search field. The search field functionality is implemented as a simple HTML Form which lets user enter any location name and initializes the Search component state. The `onSubmit` action of the form then makes a call to the redux action creator to fetch the location specific information from the OpenWeather API and receives a promise. Once the promise is successfully resolved, another call to the GOOGLE MAPS API is made to fetch the location map to be displayed in the browser. The JSON data is ultimately rendered into charts using the Sprkline framework and displayed.

<div align="center">
    <img src="/resources/screenshot.png" width="400px"</img>
</div>
