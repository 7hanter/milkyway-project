# MilkywayProject

## This project is created by Felipe Moscoso, for the Axelspace technical Assignment :)

## Content
1. [Before start](#before-start)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Folder structure](#folder-structure-example)
5. [Run the app](#run-the-app)
6. [Build the app](#build-the-app)
7. [Check linter rules](#check-linter-rules)
8. [Run unit tests](#run-unit-tests)

### Before start

We recommend use [Visual Studio Code](https://code.visualstudio.com/) to work in this project, also there's a few prerequisites such as:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Angular CLI](https://cli.angular.io/)

## Tech Stack

- Core: [Angular](https://angular.io/)
- Unit Test: [Karma](https://karma-runner.github.io/latest/index.html) & [Jasmine](https://jasmine.github.io/index.html)

## Architecture

The project keep and follow the most used patterns within Angular projects, however, it has custom handlers and other patterns to maintain and handle the flow data trough the entire application.

> Always try to follow the best practices of the pattern we're using here.

### Folder structure example
```
📂public
📂src
┣ 📂assets
┃ ┗ img
┣ 📂components
┣ 📂config
┣ 📂core
┣ 📂modules
┣ 📂services
┗ 📂unit-tests
📜.editorconfig
📜.gitignore
📜angular.json
📜package.json
📜tsconfig.json
 ```

### Folder structure description

| Folder        | Description  	|
|---	        |---	|
| src/config  	| Services routes, application internal routes, environments config, unit test config, lang resources, etc.   	|
| src/core  	| Main startup of the application, compatibility, mock services config, routes and url mapping.  	|
| src/modules  	| Redux props and data flow injectors.  	|
| src/services  	| Angular services.  	|
| src/components  	| Main components of the application 	|
| src/assets  	| Main styles, css files, custom theme, color palette, etc.  	|
| src/unit-tests  	| Unit test coverage of the components, redux, etc.  	|

## Run the app
> Keep in mind the current env file to guarantee the expected behavior of the following commands
```bash
npm run start # to run the app with the built in script
ng serve -o # or using the angular-cli
```

## Build the app
```bash
npm run build # to run the app with the built in script
ng build # or using the angular-cli
```

## Check linter rules
> To preserve a clean, fancy and with the best practices code always remember to check your linter rules
```bash
npm run lint # to run the app with the built in script
ng lint # or using the angular-cli
```

## Run unit tests
> You could use the [Angular/Karma Test Explorer](https://marketplace.visualstudio.com/items?itemName=raagh.angular-karma-test-explorer) already mentioned or you also can explore the tests following:
```bash
npm run test # to run the app with the built in script
ng test # or using the angular-cli
```