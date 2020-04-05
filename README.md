# sturdy-umbrella
Weather display application for raspberry pi

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Setup Chromium to run Kiosk mode
1. Run ```sudo apt-get update && sudo apt-get upgrade -y``` to get the latest updates and upgrade all installed software on your Pi
2. Install Chromium by running ```sudo apt-get install chromium x11-xserver-utils unclutter```
3. With your Vue app running, in a seperate terminal run ```chromium --kiosk http://localhost:8080```