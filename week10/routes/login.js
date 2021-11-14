import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => { // homepage 에서 넘겨주는 data는
                                       //   여기에 저장이 된다.
    const vars = req.body;
    const users = await selectSql.getUsers();

    let whoAmI = '';
    let checkLogin = false;

    // map 은  for loop 랑 똑같지만 더 간결하게 쓸 수 있다.
    users.map((user)=> {
        console.log(user.Id);

        // 입력된 data 의 id 및 password 가
        //   현재 data의 id 와 password 정보와 같은 경우
        if (vars.id === user.Id && vars.password === user.Password) {
            console.log('login success!'); // console 창에 'login success!' 를 출력.
            checkLogin = true; // 로그인에 성공 하였으므로 checkLogin 을 true 로 변경한다.

            if (vars.id === 'admin') { // id 가 'admin' 이라면
                whoAmI = 'admin';      //   whoAmI 값을 'admin' 으로 초기화를 한다.
            }
            else {                     // id 가 'admin' 이 아니라면
                whoAmI = 'user';       //   whoAmI 값을 'user' 로 초기화를 한다.
            }
        }
    })

    console.log('whoAmI:', whoAmI);
 
    if (checkLogin && whoAmI === 'admin') {       // Login 이 된 상태이면서 'admin' 이 Login 을 한 경우
        res.redirect('/delete');                  //   /delete 로 page 이동을 한다.
    } else if (checkLogin && whoAmI === 'user') { // Login 이 된 상태이면서 'user' 가 Login 을 한 경우
        res.redirect('/select');                  //   /select 로 page 이동을 한다.
    } else {                                      // 그 외의 경우에는 
        console.log('login failed!');             //   'login failed!' 를 출력한다.
        res.send("<script>alter('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;

