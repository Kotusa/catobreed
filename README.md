# About Catobreed 🐈

> The application is based on [The Cat API](https://thecatapi.com/)

**The Catobreed application based on the free public API can help you find various breeds of cats. You can also search for different images and gifs with cats and use filters to specify your request.
You can check published project [here](https://catobreed.vercel.app/) 💫**

![preview](https://i.ibb.co/3MB1gHR/catobreed-1.png)

---

### 🟣 The stack:

- [React](https://reactjs.org/) as main JS-library
- [Redux Toolkit](https://redux-toolkit.js.org/) as state manager
- [Ant Design](https://ant.design/) and UI-kit
- [Styled-Components](https://styled-components.com/) for styling

### 🟣 Main features

The project is based on [CRA](https://github.com/facebook/create-react-app) without eject. I also used [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) as helpful plugins.
Also created aliases.js to configurate aliases and make import declarations more clear.


### 🟣 Detailed directory layout

    .
    ├── src
    │   ├── api                # Client api
    │   ├── assets             # Images and icons
    │   ├── components
    │   │   ├── atoms          # Smallest components
    │   │   ├── molecules      # More difficult components
    │   │   ├── organisms      # Combinations of molecules
    │   │   └── templates      # Projections / patterns
    │   ├── constants
    │   │   ├── media          # Consts for media queries
    │   │   ├── routes         # Consts for route paths
    │   │   └── types          # Consts for service needs
    │   ├── helpers            # Secondary functions
    │   ├── hooks              # Custom hooks
    │   ├── pages              # App pages are here
    │   ├── reducers           # Redux state logic is described here
    │   ├── routes             # Route paths
    │   ├── store              # Default app state and store configurations
    │   ├── theme              # App themes
    │   ├── index.js           # App's entry point
    │   └── Root.js            # App's config
    ├── aliases.js
    ├── catobreed              # CLI
    ├── config-overrides.js
    ├── docker-compose.yml
    ├── Dockerfile             # Docker configuration file
    ├── jsconfig.json
    └── README.md

### 🟣 Installation

_You have two ways to launch Catobreed locally:_

##### Docker (using CLI)

Clone the project repository and run the following command in the root folder:

```sh
./catobreed up
```

Wait till containers are built and check the result on http://localhost:3000


##### NodeJS

App requires NodeJS, install it if you haven't yet.
Next, you need to install dependencies, type `npm install` or `yarn`, depending on your package manager.
Once packages are installed, you can run the app: `npm run start` or `yarn start`.

---

#### That's all! Hope you enjoyed this 😸
