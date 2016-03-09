# Wepabel: Webpack + Babel

## Intro

_Just useful babel stuff, the easy dev afforded by webpack-dev-server and a terrible name_

This package is geared more toward _coding now_, it doesn't help with testing or production assets. Good for playing around with APIS, hacking around and testing stuff out.

## Files

### Package.json:

```
{
    "name": "webpabel",
    "version": "1.0.0",
    "description": "webpack + babel = webpabel",
    "main": "webpack.config.js",
```

Note: only npm start - put your tests in!

```
    "scripts": {
        "// webpack output": "",
        "start": "webpack-dev-server --watch --colors --progress"
```


No dependencies:

```
    "dependencies": {
    },
```

Delete/move these if you are using react

```    
    "// dependencies u probably want": {
        "react": "^0.14.6",
        "react-dom": "^0.14.3"
    },
```

This is what I consider the good stuff - rammed with es6/7 features.

```    
    "devDependencies": {
        "babel-plugin-syntax-async-generators": "^6.3.13",
        "babel-plugin-transform-runtime": "^6.4.3",
        "babel-plugin-transform-decorators-legacy": "^1.1.0",
        "babel-polyfill": "^6.3.14",
        "babel-preset-es2015": "^6.3.13",
        "babel-preset-react": "^6.5.0",
        "babel-preset-stage-0": "^6.3.13",
        "babel-loader": "^6.2.0",
```

And of course webpack for serving and bundling:

```        
        "webpack": "^1.12.9",
        "webpack-dev-server": "^1.14.0"
    }
}
```


### webpack.config.js

```
var path = require("path");

module.exports = {
  entry: [
```

IMPORTANT: The [ES6 polyfill](https://babeljs.io/docs/usage/polyfill/) runtime is included in the browser. Slower speed > avoiding `babel-node` (just my opinion in November '15 when I initially set this up)

```  
    'babel-polyfill',
    './app/App.js'
  ],
  output: {
```

`public` is what is often the `dist` or `build` folder - just seems to be the convention when using webpack-dev-server:

```
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public/'
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          include: [
```

I like to be specific about what goes into my bundle (and avoid regex)

```
              path.join(__dirname, 'app')
          ],
          loader: 'babel',
          query: {
              presets: [
                  require.resolve('babel-preset-es2015'),
                  require.resolve('babel-preset-react'),
                  require.resolve('babel-preset-stage-0')
              ]
          }
        }
    ]
  }
};
```
