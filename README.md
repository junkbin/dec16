## WEB-VIEW
* ``` killall node ```
* ``` yarn start ```

## TODO
* Native Base
* Multiple Component
* Navigation
* ICONS 
* ANIMATION
* CSS Transition.
* Move from one screen to another. 
* Share data across screen.
* Splash 
* IOS
* APP ICON


## TODO LIST 
* Contact List
* SMS List
* SMS Listener
* Call Log list
* Make Call
* Camera Access.
* Offline


## More
* Production Build.
* Crashlytics. 
* Across Device. [Different handsets]
* Across Platform. [ANDROID & IOS]
* Deployment Statregy. [APP STORE & PLAY STORE]
* Testing Statregy


## RUN EMULATOR
* List all emulator
```
/Users/santosh/Library/Android/sdk/tools/bin/avdmanager list avd
```
* Start an emulator
```
    /Users/santosh/Library/Android/sdk/tools/emulator @Nexus_6_API_26
```

* Android Release Build
```
    $ cd your-app-folder
    $ cd android && ./gradlew assembleRelease

    "release": "cd android && ./gradlew assembleRelease"
```


* Android Debug Build
```
    $ cd your-app-folder
    $ cd android && ./gradlew assembleDebug

    "debug": "cd android && ./gradlew assembleDebug"
```

* WORKING COMMAND TO BUILD DEBUG APK
```
mkdir -p android/app/src/main/assets && rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew clean assembleDebug && cd ../
```


* Non Working 
```
    mkdir android/app/src/main/assets

    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```



## Basics
* DEBUG
* console.log();
* Style Intellisense
* Debug Inside VSCode. 