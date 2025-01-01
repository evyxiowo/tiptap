import { Node } from '@tiptap/core';

const Ext = Node.create({
  name: 'customNode',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'div[data-custom-node]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-custom-node': '' }, 0];
  },
});

export default Ext;
