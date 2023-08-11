# remark-mentions

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]

## What is this?

This package is a [unified][unified-link] ([remark][remark-link]) plugin to convert @ mentions to links: `@wooorm` -> `[**@wooorm**](https://github.com/wooorm)`.

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**remark** adds support for markdown to unified.
**mdast** is the markdown AST that remark uses.
This is a remark plugin that transforms mdast.

## Install

```sh
npm install remark-mentions
```

## Usage

```js
import {remark} from 'remark'
import remarkMentions from 'remark-mentions'

const markdown = "Hello @user!";

const file = await remark()
  .use(remarkMentions, {
    usernameLink: (username) => `/User/Profile/${username}`, // This is optional
  })
  .process(markdown)

console.log(String(file))
```

<!-- Definitions -->

[build-badge]: https://github.com/finnrg/remark-mentions/workflows/main/badge.svg

[build]: https://github.com/finnrg/remark-mentions/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/finnrg/remark-mentions.svg

[coverage]: https://codecov.io/github/finnrg/remark-mentions

[unified-link]: https://github.com/unifiedjs/unified

[remark-link]: https://github.com/remarkjs/remark
