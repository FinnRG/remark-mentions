/**
 * @typedef {import('mdast').Root} Root
 *
 * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction
 *
 * @typedef Options
 *  Configuration
 * @property {(username: string) => string} usernameLink
 */

import { findAndReplace } from "mdast-util-find-and-replace";

const userGroup = "[\\da-z][-\\da-z]{0,38}";
const mentionRegex = new RegExp(
  "@(" + userGroup + "(?:\\/" + userGroup + ")?)",
  "gi"
);

/**
 *
 * @type {import("unified").Plugin<[Options?]|void[], Root>}
 */
export default function remarkMentions(
  opts = { usernameLink: (/** @type {string} */ username) => `/${username}` }
) {
  // @ts-ignore
  return (tree, _file) => {
    findAndReplace(tree, [[mentionRegex, replaceMention]]);
  };

  /**
   * @type {ReplaceFunction}
   * @param {string} value
   * @param {string} username
   */
  function replaceMention(value, username) {
    return {
      type: "link",
      url: opts.usernameLink(username),
      children: [{ type: "strong", children: [{ type: "text", value }] }],
    };
  }
}
