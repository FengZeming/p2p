var gulp = require('gulp');
var sftp=require('gulp-sftp')
var ssh=require('gulp-ssh')

var config = {
  sftp: {
    host: '',
    user: '',
    port: '',
    key: '',
    remotePath: ''
  }
};

//上传到远程服务器任务
gulp.task('upload', function () {
  return gulp.src('./build/**')
    .pipe(sftp({
      host: config.sftp.host,
      user: config.sftp.user,
      port: config.sftp.port,
      key: config.sftp.key,
      remotePath: config.sftp.remotePath
    }));
});
