const noPage = require('../../workplace/configs/noPage');
const endHandler = require('./endHandler');
let store = require('../store/index')
module.exports = (err, isLast) => {

  if ((err === 404 || err === '404' || err.status === 404 || err.status === '404')
    && isLast && !store.ismapper) {
    noPage(store.res);
  }
  else {
    // 匹配下一个路由
  }

}