# Backpack Foundations

This repo contains common design system elements that are shared across Skyscanner platforms. These include but are not limited to icons and tokens e.g. colours, typography etc.

[![Build Status](https://github.com/Skyscanner/backpack-foundations/workflows/Foundations%20CI/badge.svg)](https://github.com/Skyscanner/backpack-foundations/actions)

## Table of contents

* [Structure](#structure)
* [Contributing](#contributing)
* [Contact](#contact)
* [Changelog](./CHANGELOG.md)

## Structure


This repo is broken down into the following [packages](/packages):

### `bpk-foundations-common`

All tokens that are common across all platforms, broken down into two parts:

`base/` – tokens that are consistent across all platforms, like colours or animations. This could expand in the future as we align more across platforms.

`app/` – tokens that are shared across iOS and Android.

### `bpk-foundations-<android/ios/web>`

These specific packages target any tokens that are only applicable to them, e.g. breakpoints for web or elevations for Android.

These packages inherit the `bpk-foundations-common` tokens and export them through each `aliases.json` file, so they can be added to the platform alongside their specific tokens.

## Usage

### Installing packages

```sh
npm install @skyscanner/[package-name] --save
```

**Note:** You should not install the `bpk-foundations-common` package as this is consumed within each platform-specific package and serves tokens directly.

## Contributing

To contribute please see [contributing.md](CONTRIBUTING.md).
