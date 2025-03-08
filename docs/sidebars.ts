import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // API 文档侧边栏
  apiSidebar: [
    {
      type: 'category',
      label: 'API 文档',
      items: [
        'api/array',
        'api/object',
        'api/function',
        'api/string',
        'api/utility',
        'api/qs',
        'api/cx',
      ],
    },
  ],

  // 指南侧边栏
  guideSidebar: [
    {
      type: 'category',
      label: '指南',
      items: [
        'guide/getting-started',
      ],
    },
  ],
};

export default sidebars;
