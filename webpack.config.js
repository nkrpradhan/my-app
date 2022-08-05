const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: ["regenerator-runtime", "./src/index.js"],
  mode: "development",
  devServer: {
    port: 8085,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
               to compile any file with extension
               .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
              Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env" /* to transfer any advansed ES to ES5 */,
            "@babel/preset-react",
          ], // to compile react to ES5
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      filename: "remoteEntry.js",
      remotes: { store: "store@http://localhost:8084/remoteEntry.js" },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
