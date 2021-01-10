<p align="center">
  <a href="https://vuospeak.web.app/" target="__blank">
    <img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1610232178/App_banners/vuospeak_ck3kql.png" width="alt" alt="Vuospeak banner">
  </a>
</p>

# Vuospeak

**Vuospeak** is an application that saves notes using **voice recognition**, it is developed in [Angular](https://angular.io/); This application incorporates concepts such as [Ngrx-store](https://ngrx.io/guide/store), [Ngrx-effects](https://ngrx.io/guide/effects) and [Ngrx-entity](https://ngrx.io/guide/entity); **Vuospeak** uses the [Firebase](https://firebase.google.com/) platform and incorporates the [Authentication](https://firebase.google.com/docs/auth) system, [Firestore](https://firebase.google.com/docs/firestore) and [Hosting](https://firebase.google.com/docs/hosting). If you want to take a look, click here: [Vuospeak](https://vuospeak.web.app) or on the image.

## Prerequisites
1. Have `Node.js` installed on your computer. More information: https://nodejs.org/en/
2. Have `Angular.js` installed on your computer. More information: https://angular.io/guide/setup-local
3. Have `Git` installed on your computer. More information: https://git-scm.com/

## Setting up Firebase.
Since our project uses **Firebase** we need to configure a few things

- Login and create an application in Firebase. Click here https://firebase.google.com/docs/web/setup and follow the steps in the official guide.

## Setting the environment variables.

1. At the root of the project you will find a file `.example.env`, enter the file and copy all the variables; now create a `.env` file and paste what you copied earlier.
2. Now it is time to copy the configuration of your application **Firebase** and assign the respective value to each of the environment variables in the `.env` file

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
