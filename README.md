# GI : Gitignore Generator [![npm](https://img.shields.io/npm/v/gi-gitignore-generator.svg)](https://npmjs.org/package/gi-gitignore-generator) ![Dependencies](https://david-dm.org/Ealenn/gi-gitignore-generator.svg) [![GitHub issues](https://img.shields.io/github/issues/Ealenn/gi-gitignore-generator.svg)](https://github.com/Ealenn/gi-gitignore-generator/issues)

> A simple NodeJS CLI to generate .gitignore or .gitignore_global

## Installation

Ensure that you have installed [NodeJS](https://nodejs.org/)

```sh
$ npm install --global gi-gitignore-generator
```

MacOS **env: node\r: No such file or directory** error
```sh
brew install dos2unix
sudo dos2unix /usr/local/lib/node_modules/gi-gitignore-generator/app.js
sudo dos2unix /usr/local/lib/node_modules/gi-gitignore-generator/gitignore.js
```

## Usage

Make your .gitignore
```sh
gi <lib>,<lib>...
```

### List of template
```sh
gi list
```

### Help
```sh
gi --help
```

### Version
```sh
gi --version
```

## Exemple

Add .gitignore for WordPress
```sh
gi wordpress
```

Add .gitignore for Android, Visual Studio and intelliJ
```sh
gi android,visualstudio,intellij
```

Add .gitignore_global for Symfony, PHPStorm, NetBeans, Less, SASS
```sh
gi symfony,intellij,netbeans,less,sass -G
```

## Fork

```sh
git clone https://github.com/Ealenn/gi-gitignore-generator.git gi-gitignore-generator
cd gi-gitignore-generator
npm install
npm link
```

## License

Created with [gitignore.io](https://www.gitignore.io)
Copyright (C) 2016 Rudy Marchandise

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
