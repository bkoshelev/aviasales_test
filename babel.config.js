const presets = [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
      },
    ],
    "@babel/react",
    
  ];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import"
  ]
  
  module.exports = { presets, plugins };