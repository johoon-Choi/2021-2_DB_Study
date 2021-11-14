import express from "express";
import { insertSql, selectSql } from "../database/sql";
// 삽입과 관련된 query 함수들을 불러온다.
// insertSql 이라는 module 을 가져온다.

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // home.hbs 에서
})

router.post('/', (req, res) => { // homepage 에서 넘겨주는 data는
                                 //   여기에 저장이 된다.
    const vars = req.body;
    const var_length = Object.keys(req.body).length;

    if (var_length > 4) { // data 의 개수가 5개 이상인 경우 (employee)
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    }
    else { // data 의 개수가 4개 이하인 경우 (department)
        const data ={
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        }

        insertSql.setDepartment(data);
    }
    res.redirect('/'); // page 이동 없이 같은 주소로 새로고침을 한다.
})

module.exports = router;

