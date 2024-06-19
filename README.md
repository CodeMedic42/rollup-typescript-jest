# rollup-typescript-jest

This repo is to help try and figure out how to get Rollup, Typescript, and Jest working together to create a series of esm module libraries. Lerna is also used because this is a monorepo.

## Getting Started

### PNPM
This library uses PNPM as the package manager. Be sure to have PNPM installed globally.

```bash
npm i pnpm -g
```

### Installation of dependencies
To install just run

```bash
pnpm i
```

### Building
This repo uses Rollup and Typescript to build everything. To execute the build just run the following.

```bash
pnpm build
```

Because this is a monorepo lerna is used to execute the build command in all projects.

### Testing
This repo uses Jest to test everything. To execute the test just run the following.

```bash
pnpm test
```

Because this is a monorepo lerna is used to execute the test command in all projects.

## Per Project
If you want to run the build or test for a particular project just change your directory to that project and run the same command from above. For example to run the test for library-a execute the following.

```bash
cd libraries/library-a
pnpm test
```

## Issues
Currently there is on issue at the moment. The tests for Library A are failing.