'use strict'

const path = require('path')

module.exports ={
    // entry:'./src/index.js', // 1.入口文件   1.1单入口  字符串 单页应用 1.2 多入口 对象 多页应用
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{  // 2.出口文件
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    mode:'production' // 3. 生产环境

}
