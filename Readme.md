# Cucumber & WebdriverIO Example

This project is a demo for using Cucumber + WebdriverIO. This is the example provided when WebdriverIO helpder
configuration tool, but reviewed to work on node v20.9.0 (lts/iron).

## Instructions

Create a new project

```shell
  mkdir cucumber-wdio-example && cd cucumber-wdio-example
```

Initialize the folder as a node project

```shell
  npm init
```

Install typescript

```shell 
  npm install --save-dev typescript
``` 

Install WebdriverIO package

```shell
  npm install --save-dev @wdio/cli
```

Initialize/Configure WebdriverIO using the helper configuration tool.
When asked, choose "E2E Testing", "On my local machine", "Web - ...", "Chrome", "Cucumber ...", "TypeScript ...", "spec;
allure; junit or any other", and accept all the defaults for the other questions.

```shell
  npx wdio config
```

Check ./features and ./step-definitions created folders as weel as wdio.conf.ts configuration file.

Run tests

```shell
$ npm run wdio
```