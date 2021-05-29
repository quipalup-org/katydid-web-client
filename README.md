[![Issues][issues-shield]][issues-url]
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://katydid-app.herokuapp.com">
    <img src="" alt="Logo" width="175">
  </a>

  <h1 align="center">Katydid-web-client</h1>

  <p align="center">
    The frontend repo for Katydid project
    <br />
    <a href="https://github.com/code-sherpas/katydid-web-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/code-sherpas/katydid-web-client">View Demo</a>
    ·
    <a href="https://github.com/code-sherpas/katydid-web-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/code-sherpas/katydid-web-client/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <a href="https://katydid-app.herokuapp.com">
  </a>
</p>

Check out a live demo [here](https://katydid-app.herokuapp.com).

Katydid is a web application for a **daycare service**. This application empowers parents and guardians to pursue their professional goals and also look after their ward. 

This application has features like: listing all children that are in the daycare service on a particular day and time, examining a child's meal log entries etc. 

### Built With

* [react](https://reactjs.org)
* [material-ui](https://www.npmjs.com/package/@material-ui/core)
* [redux](https://www.npmjs.com/package/redux)
* [firebase](https://www.npmjs.com/package/firebase)
* [axios](https://www.npmjs.com/package/axios)
* [clsx](https://www.npmjs.com/package/clsx)
* [serve](https://www.npmjs.com/package/serve)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-dom](https://www.npmjs.com/package/react-dom)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
* node

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/code-sherpas/katydid-web-client.git
```
2. Install NPM packages
```sh
npm install
```
3. Add the necessary environment variables to a `.env` file.
```sh
{
        echo '  REACT_APP_FIREBASE_API_KEY='
        echo '  REACT_APP_FIREBASE_APPID='
        echo '  REACT_APP_FIREBASE_AUTH_DOMAIN='
        echo '  REACT_APP_FIREBASE_MEASUREMENT_ID='
        echo '  REACT_APP_FIREBASE_MESSAGING_SENDER_ID='
        echo '  REACT_APP_FIREBASE_PROJECT_ID='  
        echo '  REACT_APP_FIREBASE_STORAGE_BUCKET='
        echo '  REACT_APP_BACKEND_URL='
} >> .env
```



<!-- USAGE EXAMPLES -->
## Usage

1. Start react app

```sh
npm start
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/code-sherpas/katydid-web-client/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.  :smile:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

