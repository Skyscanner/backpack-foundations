# Backpack Foundations

This repo contains common design system elements that are shared across our platforms. These include but not limited to: Icons and Tokens e.g. colours, typography, etc

[![Build Status](https://github.com/Skyscanner/backpack-foundations/workflows/Foundations%20CI/badge.svg)](https://github.com/Skyscanner/backpack-foundations/actions)

## Table of contents

* [Structure](#structure)
* [Contributing](#contributing)
* [Contact](#contact)
* [Changelog](./CHANGELOG.md)

## Structure

This repo is broken down into the following [packages](/packages):

### bpk-common

This package contains all tokens that are common across all platforms, and is broken down into two parts.

`base/` these are tokens that are consistent across all platforms. Think colours or animations and could expand in the future as we align more across platforms

`app/` these are tokens that are shared across our mobile platforms, which target specifically iOS and Android.

### bpk-<android/ios/react-native/web>

These specifc packages target any tokens that are only applicable to them. E.g. breakpoints for Web or elevations for Android.

These packages inherit the common package tokens and export them through each `aliases.json` file so can be made to the platform alongside their specifc tokens.

### bpk-svgs

This package contains all our svgs but just split from the main Backpack web repo.

## Usage

### Installing packages

```sh
npm install [package-name] --save
```

**Note:** You should not install the `bpk-common` package as this is consumed within each platform specific package and serves tokens directly.

## Contributing

To contribute please see [contributing.md](CONTRIBUTING.md).

## Contact
- backpack@skyscanner.net
