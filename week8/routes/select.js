import express from "express";
import { selectSql } from "../database/sql";
// import { ... } -> 이러한 중괄호는 사용자가 정의한 module 을
//   사용할 때 쓰인다.

const router = express.Router();

// 아래의 '/' 는 '/select' 와 같은 의미이다.
router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;

