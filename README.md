# react-cv

## React and Composite View Pattern

Starter template for React with webpack. Does focus on simplicity! Minimum dependencies (only React, react-router and Webpack).

With composite view pattern we can easily scale huge applications.  Just by copying the react component (page) and creating new route.

The minimal environment to enable react with react-router and webpack. You can use any web server (Apache, Nginx...). I am using Apache web server for demo.

## [See demo](http://mikayel.com/react-cv-demo/)
As you can see from simple demo app.js is less than 70 KB and chunk files are less than 1KB. But it will help to build huge, intuitive and easy scalable application with react. Even react beginner can do it.

* Compilation with webpack
* React
* react-router
* Stylesheets just CSS
* Loads a react component (and dependencies) on demand.


### Getting Started

Just [clone](github-windows://openRepo/https://github.com/mikayel/react-cv) or
[fork](https://github.com/mikayel/react-cv/fork) the repo and start hacking:

## Local Installation

Install [node.js](https://nodejs.org)

```shell
sudo npm install -g webpack   # If you don't have webpack installed

git clone -o react-cv -b master --single-branch \
      https://github.com/mikayel/react-cv.git www
      
cd www
npm install                   # Install Node.js components listed in ./package.json

webpack                       # Compilation with webpack
webpack -p                    # Compilation with webpack for production
webpack -w                    # Reale time compilation with webpack for development only

## Usage

If you are not using www as your document_root
copy index.html to your web server root, change __build__/app.js path, change web server path in webpack.config.js 

open web server

### Dependencies

* React
* Webpack

```
____

###More about The Composite View Pattern
All websites have something in common: they are made of pages that share similar structures. The pages share the same layout, while each page is made of different independent pieces, but always placed in the same position across all the site.

The Composite View pattern formalizes this typical use, by allowing to create pages that have a similar structure, in which each section of the page vary in different situations.

####How the pattern works
To understand this pattern, let's take an example. In the following picture you can see a typical structure of a web page.

| Header | 
| ------------- | 
| Menu \| Body |
| Footer  | 

This structure is called "Classic Layout". The template organizes the page according to this layout, putting each "piece" in the needed place, so that the header goes up, the footer down, etc.
It can happen that, for example clicking on a link, it is needed to change only a part of the page, typically the body.

| Header | 
| ------------- | 
| Menu \| Body 1|
| Footer  |  

| Header | 
| ------------- | 
| Menu \| Body 2 |
| Footer  | 

As you can see, the pages are different, but their difference is only in the body part. Note that, however, the pages are distinct, it is not like a refresh of a frame in a frameset!

Using the composite view pattern, the other part of the page have been reused, and the layout consistence has been preserved.

####The role of the View Helper
Each piece of the composed page can have a "view helper". This pattern allows the preparation of the data to be displayed in a consistent way for the page piece itself, for example to create a menu.


####Composite View vs. Decorator
Tiles is a composite view framework: it allows to reuse page pieces across the application. But another approach to achieve the same result is using the Decorator pattern. For example, Sitemesh is based on the Decorator pattern.
Instead of creating a template and organizing the pieces together, the Decorator pattern (in this case) takes a simple HTML page, transforms it adding the missing pieces (in our example, adding header, footer and menu) and finally renders it.
Here you can find a comparison table between the two patterns.

| Aspect  | Composite View | Decorator |
| ------------- | ------------- | ------------- |
| Reusability  | The different parts of the page (template and pieces) can be reused across the whole application.  | Each decorator can be reused, but the decoration itself can be applied to one page at a time.  |
| Ease of configuration | Each page must be defined explicitly. | The decorator can be applied even to the entire application. |
| Runtime configuration |	The pages can be configured and organized at runtime |	Since one page is decorated at a time, this feature is not present. |
| Performances 	| Low overhead for composition. |	The page to be decorated has to be parsed. |

