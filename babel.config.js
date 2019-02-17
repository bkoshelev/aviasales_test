const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
    "@babel/react",
    
  ];

  const plugins = [
    "@babel/plugin-proposal-export-default-from"
  ]
  
  module.exports = { presets, plugins };