# Contributing to Backpack Foundations

You want to help us enable Skyscanner to create beautiful, coherent products at scale? That's awesome! :heart:

## Table of contents

* [Prerequisites](#prerequisites)
* [Getting started](#getting-started)
* [Adding a new component](#adding-a-new-component)
* [How to](#how-to)

## Prerequisites

### Licence

By contributing your code, you agree to license your contribution under the terms of the [APLv2](./LICENSE).

All files are released with the Apache 2.0 licence.

If you are adding a new file it should have a header comment containing licence information:

<details>
<summary>Show/hide licence header</summary>

```
Backpack - Skyscanner's Design System

Copyright 2016-<current year> Skyscanner Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

</details>

### Installing Node

Backpack is developed using Node. The required Node version is specified in `.nvmrc`.

This is enforced using a pre-install hook that calls out to [ensure-node-env](https://github.com/Skyscanner/ensure-node-env).

If you use [nvm](https://github.com/creationix/nvm) or [nave](https://github.com/isaacs/nave) to manage your Node environment, Backpack has built-in support for these. Just run `nvm use` to install the correct Node version.

To install npm, use `npm install --global npm@^9.5.1`.

### Code style

Backpack uses a combination of [ESLint](https://eslint.org) and [Prettier](https://prettier.io) to enforce coding styles. ESLint runs as a pre-commit hook, so it isn't possible to commit code that causes ESLint to fail.

We recommend that you install [a plugin to your editor](https://eslint.org/docs/user-guide/integrations#editors) to run ESLint automatically, which will then show you any errors inline. You can even enable an option to fix ESLint errors automatically upon saving.

## Getting started

### Getting the code

> Skyscanner employees only

Please ensure you have push rights to this repository, rather than forking the repository for contributions. Follow the "Engineering Contribution" guide in the Backpack space in Confluence to get access.

### Install dependencies

Run `npm install` to install dependencies from npm.

<details>
<summary>A note on dependencies</summary>

Backpack Foundations is a multi-package repository, also known as a monorepo. This means that instead of having one code repository for each npm package, we manage them all inside this single repository.

We use [Lerna](https://lernajs.io) to achieve this. Lerna links packages together inside this repo by 'bootstrapping'.

When you run `npm install`, Lerna is bootstrapped automatically as a post-install hook. However, if you change dependencies within a package, you will need to run Lerna manually with `npm run bootstrap`.

</details>

### Build the code

Backpack Foundations code depends on some things that must be built first.

Use `npm run build` to do this.

### Tokens

Any visual CSS parameters of the component, such as *color, margins, paddings* etc. should not live as magic numbers in the component code, but as **tokens** in the `bpk-<android/ios/web/common>` package.

Tokens are defined in the `src/base` directory. Tokens come in two layers: In `aliases.json`, all base tokens are defined with concrete values, such as colours, numbers and sizes. The other files then map those aliases to tokens for specific elements. If you need to add a new token and there is no 1:1 mapping from the existing aliases, add or multiply 2 aliases to achieve the desired value for your token.

After making changes to the base files (and updating imports when adding new files), run `npm run build`.

> You should probably not touch `aliases.json`, as our color palette or grid rarely changes.

## How to

<details>
<summary>Create a pull request to Backpack Foundations</summary>

For anything non-trivial, we strongly recommend speaking to the Backpack owners before starting work on a PR. This lets us pass on any advice or knowledge we already have about the work you're proposing. It might even be something we're already working on. After this, follow the steps below.

1. If you are a Skyscanner employee, follow the "Engineering Contribution" guide in the Backpack space in Confluence to get push rights to this repository. Otherwise, you should [fork the repository](https://github.com/Skyscanner/backpack-foundations/fork).
2. Create a new branch.
3. Make your changes.
4. Commit and push your new branch.
5. Submit a [pull request](https://github.com/Skyscanner/backpack-foundations/pulls).
6. Notify someone in in #backpack.

Bear in mind that small, incremental pull requests are likely to be reviewed faster.

</details>

<details>
<summary>Run tests</summary>

`npm test` will pick up any files that end in `-test.js`, so you don't need to do anything to make Jest pick them up.

You can also run the tests in 'watch mode', which means the process will continually run and run tests every time files change. Use `npm run jest:watch` to do this.

</details>

<details>
<summary>Run the development environment</summary>

We use [Storybook](https://storybook.js.org/) for our development environment. Run `npm start` to build foundations and start the Storybook server, then go to [http://localhost:6006](http://localhost:6006) in a web browser to view it. We use Storybook to visualise any changes to our web tokens storing foundational design values such as shadows, borders, colours etc.

A story represents a category of tokens which store foundational design values such as shadows, borders, colours etc.
Any changes to an existing foundational token, or adding a new token to one of the existing categories will be automatically reflected in the story that corresponds to that category.
</details>
<details>
<summary>Run linters manually</summary>

* `npm run lint` to lint both JS and SCSS.
* `npm run lint:js` to lint JS.
* `npm run lint:js:fix` to lint and try to automatically fix any errors.
* `npm run lint:scss` to lint SCSS.
* `npm run lint:scss:fix` to lint and try to automatically fix any SCSS errors.

</details>

<details>
<summary>Publish packages (Backpack owners only)</summary>

- Publish the latest draft on the [releases pages](https://github.com/Skyscanner/backpack-foundations/releases)
- Ensure CI runs the release workflow successfully
- Once released verify the artifacts are available

Be aware that if `bpk-foundations-common` has changed, *all* packages in the repository will be updated as they all depend on `bpk-foundations-common`. Changing an existing token is almost always worth a "major" release, whereas adding a new token is usually a "minor" release.

</details>

## And finally..

If you have any questions at all, don't hesitate to get in touch. We love to talk all things Backpack and we look forward to seeing your contribution!
