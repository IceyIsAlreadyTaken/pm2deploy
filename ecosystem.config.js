module.exports = {
  apps: [{
    name: 'testPm2', // pm2任务名称
    script: 'npm run start', // node执行程序入口文件

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root', // 服务器登录名
      host: '39.105.159.152', // 服务器地址
      ref: 'origin/master', // 代码仓库分支
      repo: 'git@github.com:IceyIsAlreadyTaken/pm2deploy.git', // 代码仓库地址
      path: '/var/www/production', // 部署到服务器上的地址
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production' // 服务器克隆代码之后执行脚本
    }
  }
};
