<img alt="React Native Time Date Picker" src="assets/logo.png" width="1050"/>

[![React Native Time Date Picker](https://img.shields.io/badge/-Easy%20to%20use%20time%20and%20date%20picker%20with%20lots%20of%20options%20for%20React%20Native.-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-time-date-picker)

[![npm version](https://img.shields.io/npm/v/react-native-time-date-picker.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-time-date-picker)
[![npm](https://img.shields.io/npm/dt/react-native-time-date-picker.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-time-date-picker)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Time Date Picker"
        src="assets/Screenshots/date-picker.gif" />
</p>
<p align="center">
  <img alt="React Native Time Date Picker"
        src="assets/Screenshots/time-picker.gif" />
</p>
<p align="center">
  <img alt="React Native Time Date Picker"
        src="assets/Screenshots/month-picker.gif" />
</p>


# Installation

Add the dependency:

```bash
npm i react-native-time-date-picker
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```json
"moment": ">= 2.29.4",
"@freakycoder/react-native-bounceable": ">= 1.0.3"
```

# Usage

## Import

```jsx
import TimeDatePicker from "react-native-time-date-picker";
```

## Fundamental Usage

```jsx
 <TimeDatePicker
    selectedDate={now}
    onMonthYearChange={(month) => {
        console.log("month: ", month);
    }}
    onSelectedChange={(selected) => {
        console.log("selected: ", selected);
    }}
    onTimeChange={(time) => {
        console.log("time: ", time);
    }}
/>
```

## Customization Example Usage

```jsx
  <TimeDatePicker
    selectedDate={now}
    mode={Modes.time}
    options={{
        daysStyle: {
            borderRadius: 16,
            borderWidth: 0.5,
            borderColor: "#f1f1f1",
        },
        is24Hour: false,
    }}
    onMonthYearChange={(month) => {
        console.log("month: ", month);
    }}
    onSelectedChange={(selected) => {
        console.log("selected: ", selected);
    }}
    onTimeChange={(time) => {
        console.log("time: ", time);
    }}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property     |   Type   |  Default   | Description                                                                                          |
|--------------|:--------:|:----------:|------------------------------------------------------------------------------------------------------|
| mode         |  Modes   | Modes.date | change the picker's main component (options: Modes.date, Modes.time, Modes.monthYear, Modes.calendar |
| currentDate  |   Date   | new Date() | set the current date which initially visible month                                                   |
| selectedDate |  string  | undefined  | set the selected date which primarly value of date picker                                            |
| onSelectedChange | function |  default   | set your own logic when the date is selected                                                         |
| onTimeChange | function |  default   | set your own logic when the time is changed                                                          |
| onMonthYearChange | function |  default   | set your own logic when the month year is selected                                                   |

## Customization (Optionals)

| Property       |   Type    | Default | Description                                                            |
|----------------|:---------:|:-------:|------------------------------------------------------------------------|
| style          | ViewStyle | default | set or override the style object for the main container                |
| minimumDate    |  string   | default | set the minimum selectable day from user                               |
| maximumDate    |  string   | default | set the maximum selectable day from user                               |
| selectorStartingYear        |  number   |    0    | change the minimum selectable year for year picker                     |
| selectorEndingYear        |  number   |    0    | change the maximum selectable year for year picker                     |
| disableDateChange     |  boolean  |  false  | disable the month & year from being changed                            |

## Customization for Options Prop

```js
const defaultOptions: IOptions ={
    backgroundColor: "#fff",
    textHeaderColor: "#241523",
    textDefaultColor: "#432d50",
    selectedTextColor: "#fff",
    mainColor: "#aa7ff9",
    textSecondaryColor: "#967aa5",
    borderColor: "rgba(53, 33, 52, 0.1)",
    defaultFont: "System",
    headerFont: "System",
    textFontSize: 15,
    textHeaderFontSize: 17,
    headerAnimationDistance: 100,
    daysAnimationDistance: 200,
    daysStyle: {},
    is24Hour: true,
};

```

## Credits

Heavily inspired by [react-native-modern-datepicker](https://github.com/HosseinShabani/react-native-modern-datepicker)
Re-written whole structure with Typescript and enhanced with lots of ways with better coding, types and localization

## Future Plans

- [x] ~~LICENSE~~
- [ ] Better integration with date timestamp (number) based
- [ ] Better Documentation
- [ ] Website
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Time Date Picker is available under the MIT license. See the LICENSE file for more info.
