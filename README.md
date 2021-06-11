# spd-1-5-take-home-be
In this take home example, there is only one route and it is a POST route that accepts one json property: 'mood'.<br>
It will store the mood you provide in the json body and the current weather in San francisco in a mongodb database that you are required to configure.


## Getting Started

Install the yarn packages via:
```
yarn install
``` 

then you must have an mongo atlas ready for development purposes, go to `env.example` and scan through the required variables. Then create a `.env` that is an exact replica of the `env.example` and full out the variables.

then you can start the dev server via:
```
yarn run dev
```
