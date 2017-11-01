var gulp = require('gulp');
var sftp=require('gulp-sftp')
var ssh=require('gulp-ssh')

var config = require('./ftpconfig.js')

//上传到远程服务器任务
gulp.task('upload', function () {
  return gulp.src('/Users/guider/Documents/vue/p2p/dist/**')
    .pipe(sftp({
      host: config.sftp.host,
      port: config.sftp.port,
      user: config.sftp.user,
      pass: config.sftp.key,
      remotePath: config.sftp.remotePath
    }));
});
