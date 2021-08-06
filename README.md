# JOT

Jot is a micro-notes app that is 100% private, open source, and automatically syncs between your devices. 

## Tech Stack

* React Native
* React Navigation
* React Native Elements
* Redux Toolkit
* Expo
* Expo Electron
* Typescript
* [OrbitDB Docs](https://github.com/orbitdb/orbit-db/blob/main/API.md#orbitdbdocsnameaddress-options) type database.
* Yarn

## Roadmap

### Version 0.1

The first version will be a desktop application with only the basic functionality - adding, removing, editing and searching notes. 

## Contributing

Here are instructions for running the application locally. Take a look at our open issues for ways to contribute!

1. Install [nvm](https://github.com/nvm-sh/nvm). This allows us to standardize on one node version.
2. Clone the repository and `cd` into it.
3. Set the node version.
```
nvm use
```
4. Install Expo.
```
npm install -g expo-cli
```
5. Install yarn.
```
npm install -g yarn
```
6. Install project dependencies.
```
yarn
```
7. Start the Electron App.
```
yarn expo-electron start
```
