import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });
});

router.post('/employee', async (req, res) => {
    const vars = req.body;
    console.log(vars.salary); // 제대로 입력이 되었는지 확인하는 용도

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select');
    // 변경한 값이 제대로 바뀌었는지 확인을 할 수 있다.
});

router.post('/department', async (req, res) => {
    await updateSql.updateDepartment();

    res.redirect('/select');
    // 변경한 값이 제대로 바뀌었는지 확인을 할 수 있다.
});

module.exports = router;

