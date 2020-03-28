# Semana Omnistack, RocketSeat - Edition 11 (2020)

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=BeTheHero&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcelso-alexandre%2Fsemana_omnistack_11%2Fmaster%2Fglobal%2Finsomnia%2Fbackend.json)

## What is this?

This project were made in a week for programming learning purposes only. This week project were named `Be The Hero` by the the sponsor of #SemanaOmnistack, the RocketSeat CTO [@RocketSeat/diego3g](https://github.com/diego3g).

The project has the intention of allowing NGO's to publish cases where they are in need of funding to solve, by using the web application. The users, named here as "Heroes", could use the mobile app to get in contact and help

## Tecnologies

The backend API were developed using mainly NodeJS and Express, the web front-end were developed with the ReactJS framework, and the mobile app with React-Native framework

## The interface

![NGO Web Interface](https://github.com/celso-alexandre/semana_omnistack_11/raw/master/global/readme/assets/web01.gif)
![User App](https://github.com/celso-alexandre/semana_omnistack_11/raw/master/global/readme/assets/app01.gif)

## How to Start (Back-end)

First, clone this repository with `git clone https://github.com/celso-alexandre/semana_omnistack_11.git bethehero`

Run the migrations to generate the sqlite tables with `cd bethehero/backend && yarn run-migrations`

Install all node packages in backend with `yarn`. After that, start the backend with `yarn dev`

## Web front-end (For NGO access)

Now that your back-end has started, access the web folder with `cd ../web`, install all web front-end dependencies with `yarn` and start the development server with `yarn start`

## Mobile App (For user access)

Access the app folder with `cd ../app`, install all mobile app dependencies with `yarn` and start the development expo server with `yarn start` or `expo start`. In the page, you can for example, run the app by installing the expo app on Android or IOS and then scan the QR Code or view a web version of the app
