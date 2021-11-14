import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'johoon',
        database: 'week10',
        password: 'johoonee',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getUsers : async () => { // await 는 query 가 끝날 때 까지 기다린다.
        const [rows] = await promisePool.query(`select * from user`);

        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

// data 를 받고, query 문을 실행한다.
export const deleteSql = {
    deleteDepartment : async (data) => {
        // Step 3
        console.log('deleteSql.deleteDepartment:', data.Dnumber); // console 창에 삭제버튼을 누른 DATA의
                                                                  //   Dnumber를 출력한다.
        const sql = `delete from department WHERE Dnumber BETWEEN ${data.Dnumber} - 2 AND ${data.Dnumber}`;
        
        // Step 2
        //console.log('deleteSql.deleteDepartment:', data.Dnumber);
        //const sql = `delete from department where Dnumber = ${data.Dnumber}`;

        
        await promisePool.query(sql);
    },
}