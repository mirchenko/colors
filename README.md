# Colors
# Installation

  !Require [postgres!](https://www.postgresql.org/)

```
    > git clone https://github.com/mirchenko/colors.git yourfolder
    > cd yourfolder
 ```
 
Move to your postgres console and create database `colors` for example.
Set up your pg credentials in `./knexfile` `connection` field.

 ```
    > knex migrate:latest
    > knex seed:run
    > yarn server-build
```

# Usage

```
    > yarn start
```
Open your browser and navigate to [http://localhost:8080](http://localhost:8080)