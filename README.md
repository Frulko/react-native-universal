# Universal React Native app
⚠ Work-in-progress project ⚠️

This is a sample repository with aim to handle multi react-native ouput.  
It based on classic react-native project with addition of react-native-web.   
It's purpose is to handle a fully production-ready react-native-web output. 


## Features
- Trully react-native app
- Support react-native-web w/ web features
- Hot reloading for web
- Production mode for web
- split file for web and native
- redux support for both native and web

## Quick-start


## Production build
- just call `npm run web:production`

## Platform specific split
In react-native we could add suffixe `.android.js` or `.ios.js` also a global `.native.js` for target only react-native behaviors
In the web part (in the webpack) we handle `.web.js` for target web-only behaviors

## React-Native Android/iOS


## React-Native-Web