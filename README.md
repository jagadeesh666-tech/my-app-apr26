# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


======================================================SETUP==================================================================
android -> playstore -> facebookApp

nodejs -> npm -> angular


SetUp:
------
1) Download and install nodejs

    check: node -v
           npm -v

2) Install angular

    npm install -g @angular/cli@15

    check: ng version

3) create new app

    cd desktop
    ng new my-app

4) start the server
    
    ng serve

    check: in browser localhost:4200

**) allow scripts exection form powershell
    1) open powershell as administrator
    2) run command:  set-executionPolicy unrestricted


================================GIT============================

GIT:
====

1) laptopGitSoftware <-> github site

    git config --global user.name  xxxxxxxxxxxxxx
    git config --global user.email xxxxxxxxxxxxxx

    check: git config --list

2) my-app  <-> repository

    git init
    git remote add origin xxxxxxxxxxxxx

    check: git remote -v

3) code sync

    git add .                      //  changes -> stagedChanged
    git commit -m "xxxxxxxx"       //  stagedChange -> 0
    git push                       //  100%

    ***) first time suggestion command with -f




    1)  get     get(url)                         all

2)  get     get(url/id)                      single

3)  get     get(url?filter=red)              filtering/searching

4)  get     get(url?limit=10&page=1)         pagination 

5)  get     get(url?sortBy=color&order=asc)  sorting

6)  post    post(url,data)                   create

7)  put     put(url/id,data)                 update

8)  delete  delete(url/id)                   delete
