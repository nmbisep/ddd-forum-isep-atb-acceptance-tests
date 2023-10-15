# Cucumber & WebdriverIO Example

Create a new project

```shell
$ mkdir cucumber-wdio-example && cd cucumber-wdio-example
```

Initialize the folder as a node project

```shell
$ npm init
```

Install typescript

```shell 
$ npm install --save-dev typescript
``` 

Install WebdriverIO package

```shell
$ npm install --save-dev @wdio/cli
```

Initialize/Configure WebdriverIO

```shell
$ npx wdio config
```

Check ./features and ./step-definitions created folders as weel as wdio.conf.ts configuration file.

Run tests

```shell
$ npm run wdio
```