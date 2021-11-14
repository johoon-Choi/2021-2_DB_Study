import express from "express";
import { selectSql } from "../database/sql";
// import { ... } -> 이러한 중괄호는 사용자가 정의한 module 을
//   사용할 때 쓰인다.

const router = express.Router();

// 아래의 '/' 는 '/select' 와 같은 의미이다.
router.get('/', async function(req, res) {
    const department = await selectSql.getDepartment();

    res.render('select', {
        title: 'IT 공대', // 화면에 title 로 'IT 공대' 를 출력한다.
        department        // 화면에 department TABLE 을 출력한다.
    });
});

module.exports = router;

