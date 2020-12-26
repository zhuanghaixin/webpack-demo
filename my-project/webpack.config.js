'use strict'

const path = require('path')

module.exports ={
    entry:'./src/index.js', // 1.入口文件
    output:{  // 2.出口文件
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'production' // 3. 生产环境

}
