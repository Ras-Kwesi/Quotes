# Quotes Project

This is a website that can generate new quotes from a form into a list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Angular CLI & Angular v6.1.2
NodeJs
Typescript ES6


### Installing

* Node installation
    * Visit the node download page 
        https://nodejs.org/en/download/package-manager/

    * Install Node.js via package manager link, it will be found on the page.
    * Install Node for your system.
    * Confirming Installation.
         `npm -v`
        `node -v`

* Angular Installation
    * `npm install -g @angular/cli`
    * Run  `ng` to display angular commands to prove its installation.

* TypeScript Installation
    * Run `npm install -g typescript`
    * Run `tsc -v` to check version and confirm installation

## Deployment
1. Run `npm i -g angular-cli-ghpages` globally for gh-pages Angular deployment tool. Only do this once.
2. Run [`ng build --prod --base-href="https://GithubUserName.github.io/GithubREPO/"` to create a dist       folder that is used for production.
3. Remove the dist/ line in our gitignore folder.
4. Run `sudo npx ngh --dir=dist/project-name` to deploy to github pages.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Live Site

To test the software functionality, follow the link for a live setup https://ras-kwesi.github.io/Quotes/

## Authors

* **Kwesi Makonnen** - *GitHub Profile Link* - [Ras-Kwesi](https://github.com/Ras-Kwesi)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details