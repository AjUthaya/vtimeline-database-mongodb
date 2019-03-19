# VTimeline (Database)

![logo_banner](https://imgur.com/vYrOcrm.png)

VTimeline is a content management system that allows you to create a vertical full screen timeline, where you can easily add, update or delete events. So let's say that you need a way to present a number of historical events or your life story for that matter, then this is the solution for you. You are able to add an image, title, description, start and end date to your event. The events will automatically be ordered ascending based on the start date.

## Prerequisites

### System

Software that the system requires to be able to run this repository.

- [Docker](https://www.docker.com/products/docker-desktop) - Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".

- [NodeJS](https://nodejs.org/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

- [NVM](https://github.com/creationix/nvm) - Node Version Manager - Simple bash script to manage multiple active node.js versions

- [MySQL](https://www.mysql.com/) - MySQL is an open source relational database management system.

### Configuration

A list of the configuration files that you have to create, for every configuration file listed below there should a file with the suffix "\-example" before the extention. So all you have to do is copy that file and replace the values.

- config/local.js

## Run

### Development

1. Coming soon

### Review

1. Coming soon

### Staging

1. Coming soon

### Production

1. Coming soon

## Test

### Development

1. Coming soon

### Review

1. Coming soon

### Staging

1. Coming soon

### Production

1. Coming soon

## Application

### Linter

Coming soon

### Architecture

![application_architecture](https://imgur.com/t9ZFuZz.png)

### Data model

Coming soon

## Versioning

We use git for versioning. For the versions available, see the [tags on this repository](https://github.com/AjUthaya/vtimeline-database-mysql/tags).

### Add a new version tag

1. Update the CHANGELOG file with a new section and the "Unreleased Changes" link with the new tag version

2. Create a new tag `git tag X.X.X`

3. Push the new tag to remote `git push origin --tags`

### Add a version tag for an older commit

1. Type in `git log` in the root of the repo, to list all the commits with ID's

   - Press <kbd>Q</kbd> to get out of the list view

2. Create a tag for an older commit `git tag -a X.X.X COMMIT_ID`

3. Push the tag to remote `git push origin --tags`

### Remove a version tag

1. Remove tag `git tag -d X.X.X`

2. Remove tag from remote `git push -d origin X.X.X`

## Technologies

### [NPM](https://www.npmjs.com/)

NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment NodeJS. It consists of a command line client, also called NPM, and an online database of public and paid-for private packages, called the NPM registry.

### [SequelizeJS](http://docs.sequelizejs.com/)

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
