import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'johoon',
        database: 'week8',
        password: 'johoonee',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getEmployee : async () => { // async 는 query 가 끝날 때 까지 기다린다.
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

// data 를 받고, query 문을 실행한다.
export const insertSql = {
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}",  "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;
        
            await promisePool.query(sql);
    },

    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;

            await promisePool.query(sql);
    },
}

export const updateSql = {
    updateEmployee : async(data) => {
        const sql = `update employee set salary = "${data.Salary}" where Dno = 1`;
        await promisePool.query(sql);
    },
    updateDepartment : async () => {
        const sql = `update department set dname = "A_dept" where Dnumber = 1`;
        await promisePool.query(sql);
    },
}

