
var Zip = function(zipName, outputName) {
    // 引入archiver模块
var fs = require('fs');
var archiver = require('archiver');
var moment = require('moment');
var time = moment(new Date()).format("YYYYMMDDhhmmss")

// 当前目录下生成压缩包 可以调整zip存放目录
var output = fs.createWriteStream(`./${outputName? outputName : zipName}_${time}.zip`);

//设置压缩格式为zip
var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

// 监听close事件
output.on('close', function() {
console.log(archive.pointer() + ' total bytes');
});

// 监听结束
output.on('end', function() {
console.log('Data has been drained');
});

// 监听错误
archive.on('error', function(err) {
throw err;
});

// 管道输出到file
archive.pipe(output);


// 设置对应路径
archive.directory(`${zipName}/`, false);

// 结束
archive.finalize();
}

module.exports = Zip;