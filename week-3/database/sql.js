import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'johoon', // 내 User ID
    database: 'week3', // Database name
    password: 'johoonee', // 내 MySQL password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

const sql = {

  getUsers : async () => {
    const [rows] = await promisePool.query(`
      SELECT * FROM STUDENT
    `)
    
    return rows
  },
}

// var sequelize = new Sequelize('HW1_test', 'root', 'YjjH16530!@', {
//   host: 'localhost',
//   dialect: 'mysql', // pick one of 'mysql','sqlite','postgres','mssql',
//   port: 3306,
// });
// sequelize.authenticate().complete(function (err) {
//   if (err) {
//      console.log('There is connection in ERROR');
//   } else {
//      console.log('Connection has been established successfully');
//   }
//  });
module.exports = sql