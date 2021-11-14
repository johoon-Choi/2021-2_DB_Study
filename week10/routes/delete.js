import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment();

    res.render('delete', {
        title: "삭제 기능", // 화면에 title 로 '삭제 기능'을 출력한다.
        department         // 화면에 department TABLE 을 출력한다.
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Dnumber: req.body.delBtn, // Button 을 누른 Data 의 Dnumber 값을   
    };                            //   Dnumber 에 저장을 한다.

    await deleteSql.deleteDepartment(data); // 삭제하려는 data 가 삭제가 될 때 까지 기다린다.

    res.redirect('/delete'); // 삭제 완료 후 /delete page 로 다시 이동을 한다.
});                       //   로 이동한다.

module.exports = router;

