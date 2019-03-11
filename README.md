This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run eject](#npm-run-eject)
* [Writing and Running Tests](#writing-and-running-tests)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
* [Sharing and Deployment](#sharing-and-deployment)
  * [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
  * [Building an Expo "standalone" app](#building-an-expo-standalone-app)
  * [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
    * [Build Dependencies (Xcode & Android Studio)](#build-dependencies-xcode-android-studio)
    * [Should I Use ExpoKit?](#should-i-use-expokit)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.
## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

1. Встановити на власний комп'ютер Android Studio (Windows, Linux, Mac) або XСode (Mac)
2. Вивчити команди системи контролю версій git (див. Basic Git commands )
3. Зареєструватися на GitHub.
`https://github.com/PetroKok`
4. Встановити git кліент на вибір: SourceTree, TortoiseGit, SmartGit або інший.
`git`
![alt text](./public/lab1/git%20add.jpg)

5. Створити новий проект для Android чи iOS або склонувати проект-приклад згідно до індивідуального завдання (див. нижче)
![alt text](./public/lab1/start.jpg)
6. Розібратися зі структурою проекту
![alt text](./public/lab1/strc.jpg)
7. Розібратися зі структурою файлу AndroidManifest.xml(App.js or Client.js)
![alt text](./public/lab1/file.jpg)
8. Запустити проект на емуляторі (- проблеми з біос, віртуалізація не працює)
9. Під’єднати мобільний телефон з ОС “Android” за допомогою USB і увімкнути відлагодження через USB (ADB or EXPO)
![alt text](./public/lab1/conn.jpg)
10. Запустити проект на телефоні
![alt text](./public/lab1/window.jpg)

11. Налаштувати запуск тестів. Створити хибний тест. Запустити і пересвідчитися, що хибний тест не пройшов
![alt text](./public/lab1/testfail.jpg)
![alt text](./public/lab1/testsuccess.jpg)

12. Знайти основну діяльність (MainActivity), перейти на неї
![alt text](./public/lab1/file.jpg)
13. Вивчити роботу команди ADB 
14. Вивчити клас Log для виводу відлагоджувальних повідомлень
![alt text](./public/lab1/deb.jpg)

15. Перейти на клас MainActivity, знайти метод onCreate, додати лог Log.d(TAG, "Activity onCreate"), поставити Breakpoint на цьому методі.
![alt text](./public/lab1/break.jpg)

16. Запустити проект в режимі відлагодження, розібратися з панеллю відлагодження
![alt text](./public/lab1/deb-panel.jpg)
![alt text](./public/lab1/deb.jpg)

17. Знайти, де знаходиться програма adb (під Linux/Mac команда find ~/Library/Android/ -name adb), та встановити режим виведення логів VERBOSE для MainActivity (<шлях до adb>/adb shell setprop log.tag.MainActivity VERBOSE)
18. Перейти в Android Monitor → LogCat, Відфільтрувати журнал по рядку “Activity ”
19. Перезапустити прогаму
20. Перейти в LogCat, дослідити, у які стани переходять класи діяльностей програми (Activity) при перемиканні на інші програми
21. Написати звіт, розмістити скріншоти на DropBox (або інший ресурс)