const mysql = require('../../src/db/twmysql')

const blogs = {
  insert: function (uid,title,date,context) {
    return mysql.execSQL(`insert into blogs(uid,title,date,context) values(${uid},'${title}','${date}','${context}')`);
  },
  updateByBid: function (bid,uid,title,date,context) {
    return mysql.execSQL(`update blogs set uid=${uid},title='${title}',date='${date}',context='${context}' where bid=${bid};`);
  },
  delete: function (bid) {
    return mysql.execSQL(`delete from blogs where bid=${bid}`);
  },
  findByBid: function (bid) {
    return mysql.execSQL(`select * from blogs where bid=${bid}`);
  },
  findAll: function () {
    return mysql.execSQL('select * from blogs');
  }
}

module.exports = blogs;