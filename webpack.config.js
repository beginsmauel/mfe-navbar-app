const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
//const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "navbar",
    webpackConfigEnv,
  });

/*
  plugins: [
    new HtmlWebpackPlugin(),

    new StandaloneSingleSpaPlugin({
      // required
       appOrParcelName: "navbar",

       disabled: false
    })
  ]

*/

  return merge(defaultConfig, {
    // customizations can go here
  });
};
