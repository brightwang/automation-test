1. Install Nightwatch
http://selenium-release.storage.googleapis.com/index.html
https://sites.google.com/a/chromium.org/chromedriver/downloads

2. 安装依赖
> npm install
```
"start_process": true,
    "server_path": "/usr/local/lib/node_modules/nightwatch/bin/selenium-server-standalone-3.9.1.jar",
    "log_path": "",
    "port": 4444,
    "cli_args": {
        "webdriver.chrome.driver": "/usr/local/lib/node_modules/nightwatch/bin/chromedriver"
    }
```
替换正确的存放地址

3.启动服务
> npm run server

4.运行测试
> npm run api-test
> npm run ui-test