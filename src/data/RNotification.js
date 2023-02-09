import { renderMarkdown } from "../utils.js";

export const notices = {
  type: 'object[]',
  desc: renderMarkdown(`List of notice, with each item have following properties:
    - \`id\` (type: \`any\`)
    - \`type\` (type: \`string\`): primary, secondary, success, error, info, warn.
    - \`title\` (type: \`string\`)
    - \`detail\` (type: \`string\`)
  `, true)
}