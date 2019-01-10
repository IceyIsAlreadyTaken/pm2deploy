PM2一键部署
## PM2介绍  
PM2是node进程管理工具，可以利用它来简化很多Node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等  

## PM2好处
    1. 无需手动或者使用ftp将本地代码拷贝到远程服务器
    2. 无需手动重启远程node服务
    3. 项目的升级迭代非常方便
    4. 具有负载均衡功能
   

## 实现步骤
    1.将本地代码发布到github远程仓库(这里可以根据自身情况确定代码发布的远程仓库，一般公司代码都会发布到自己的gitlab)
    2.在需要运行node服务的服务器上生成ssh key,并将公钥添加到github后台(这里主要是为了服务器能够从远程仓库拉取代码,所以确保远程服务器上已经安装了git)
    ```
    yum install -y git  (centos系统)
    apt-get install git (ubuntu系统)
    ```
    3.在本地及远程仓库全局安装pm2
    ```
    npm install -g pm2
    ```
    4.使用pm init 生成ecosystem.config.js配置文件，并修改相应配置（主要是修改app下的name和script,deploy下的host,ref,repo,path,该项目的ecosystem.config.js中详细的配置描述）
    pm2文档地址：https://pm2.io/doc/en/runtime/guide/ecosystem-file/
    5.切换到本地根目录，运行部署命令
    ```
     # Setup deployment at remote location
     pm2 deploy production setup

     # Update remote version
     pm2 deploy production update // 更新部署的时候确保代码已经提交到git仓库
    ```
    
















### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
