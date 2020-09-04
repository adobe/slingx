slingx
======

A comprehensive toolkit AEM Administrators for Sling CRUD Operations

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slingx.svg)](https://npmjs.org/package/slingx)
[![Downloads/week](https://img.shields.io/npm/dw/slingx.svg)](https://npmjs.org/package/slingx)
[![License](https://img.shields.io/npm/l/slingx.svg)](https://github.com/2019/slingx/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slingx
$ slingx COMMAND
running command...
$ slingx (-v|--version|version)
slingx/1.0.0 darwin-x64 node-v10.13.0
$ slingx --help [COMMAND]
USAGE
  $ slingx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`slingx copy`](#slingx-copy)
* [`slingx create`](#slingx-create)
* [`slingx delete`](#slingx-delete)
* [`slingx help [COMMAND]`](#slingx-help-command)
* [`slingx import`](#slingx-import)
* [`slingx move`](#slingx-move)
* [`slingx query`](#slingx-query)

## `slingx copy`

Copy Node(s) in a Sling repository

```
USAGE
  $ slingx copy
```

_See code: [src/commands/copy.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/copy.js)_

## `slingx create`

Create new Node(s) in a Sling repository

```
USAGE
  $ slingx create
```

_See code: [src/commands/create.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/create.js)_

## `slingx delete`

Deletes Node(s) in a Sling repository

```
USAGE
  $ slingx delete
```

_See code: [src/commands/delete.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/delete.js)_

## `slingx help [COMMAND]`

display help for slingx

```
USAGE
  $ slingx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `slingx import`

Import Asset(s) with metadata

```
USAGE
  $ slingx import
```

_See code: [src/commands/import.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/import.js)_

## `slingx move`

Moves Node(s) in a Sling repository

```
USAGE
  $ slingx move
```

_See code: [src/commands/move.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/move.js)_

## `slingx query`

Execute Search Query on an AEM repository

```
USAGE
  $ slingx query
```

_See code: [src/commands/query.js](https://github.com/adobe/slingx/blob/v1.0.0/src/commands/query.js)_
<!-- commandsstop -->

## Contributing
You need node>=10.13.0 and npm>=6.4.1. Follow the typical npm install, npm test workflow.
Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
