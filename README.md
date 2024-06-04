# ReactNativePokemon 📁

Pokedex first/second generation

- This project was generated with [React Native](https://reactnative.dev) version 0.74.2
```bash
npx react-native init reactnativePokemon --template react-native-template-typescript
```
- React - Version 18.2.0
- Metro - Version 0.80.90
- Node - Version 20.12.2
- Npm - Version 10.5.0

## Install 🔨

- Install `XCode`, [`Android Studio`](https://developer.android.com/studio?hl=es-419) and [`JDK 18`](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html)
- Environment variables:
  - **MacOS (zshrc)**
   ```bash
   open -e ~/.zshrc
   ```
   Add this variables to your PATH:
   ```bash
   # JAVA
   export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-18.jdk/Contents/Home
   export PATH=$JAVA_HOME/bin:$PATH
   # ANDROID
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
   Save your file and execute that command to update your configuration:
   ```bash
   source ~/.zshrc
   ```
   Install `watchman`. It allows watchs hotreload sync files in **React Native**
   ```bash
   brew install watchman
   ```
   Add the following scripts to your `package.json` file, execute and fix errors:
   ```bash
   "doctor": "react-native doctor" 
   ```
   Update script `ios` for this (or anything emulator device):
   ```bash
   "ios": "react-native run-ios --simulator='iPhone 15 Pro'"
   ```

## Development server 🚀

First you need to run `Metro`:
```bash
npm run start
```
and then, run a specify platform _iOS_ or _Android_:
```bash
## Launch app iOS
npm run ios

## Launch app Android
npm run android
```