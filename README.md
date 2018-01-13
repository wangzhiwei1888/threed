##react-native-web (通过react-native-web从0开始构建三端项目)学习笔记

```

sudo npm install -g create-react-app

create-react-app react-native-web

cd react-native-web

yarn add react-native-web

npm run start

http://localhost:3000/

然后可以将项目代码里面的标签换成 react-native 的

将 web 的项目代码 src 和 public 两个目录copy 到 react-native init test1 的项目下
将package.json 的依赖一次copy过去

修改路径 ，就可以看到项目跑起来了。

web 版和 ios版都可以跑起来


```

```
梳理流程

react-native init threed

cd threed

修改package.json 如下

{
  "name": "threed",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev":"react-native run-ios",
    "dev-android":"react-native run-android",
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "start-web": "react-scripts start",
    "build-web": "react-scripts build"
  },
  "dependencies": {
    "react": "16.2.0",
    "react-dom": "^16.2.0",
    "react-native": "0.52.0",
    "react-native-web": "^0.3.0",
    "react-scripts": "1.0.17"
  },
  "devDependencies": {
    "babel-jest": "22.0.6",
    "babel-plugin-react-native-web": "^0.3.0",
    "babel-preset-react-native": "4.0.0",
    "jest": "22.0.6",
    "react-test-renderer": "16.2.0"
  },
  "jest": {
    "preset": "react-native"
  }
}

执行 npm i

2、创建 src目录，将 index.js 和 App.js copy 到 src目录

index.js内容

import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('threed', () => App);

AppRegistry.runApplication('threed',{
	rootTag:document.getElementById('root')
})

并将 外层的 App.js 删除，公用 src目录下的App.js

修改外层 index.js 引用 App.js路径
import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('threed', () => App);


3、创建 public 目录，新建 index.html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
	<noscript>
      You need to enable JavaScript to run this app.
    </noscript>

    <div id="root"></div>
</body>
</html>


注意：此处的 src 和public目录是固定的 

在 react-script 依赖下可以看到如下代码

path.js

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
};



4、执行命令

ios中启动 
npm run dev
浏览器中启动
npm run start-web


```
参考
https://www.youtube.com/watch?v=pwHNupJEqZE

http://necolas.github.io/react-native-web/storybook/?selectedKind=Example%20apps&selectedStory=Calculator&full=0&down=0&left=1&panelRight=0
https://github.com/necolas/react-native-web