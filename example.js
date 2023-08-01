import fs from "fs";
import remarkMentions from "./index.js";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

const buffer = fs.readFileSync("example.md");

unified()
  .use(remarkParse)
  .use(remarkMentions)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(buffer)
  .then((file) => console.log(String(file)));

unified()
  .use(remarkParse)
  .use(remarkMentions, {
    usernameLink: (username) => `/User/Profile/${username}`,
  })
  .use(remarkStringify)
  .process(buffer)
  .then((file) => console.log(String(file)));
