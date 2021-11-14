import express from "express";          // import 를 통해 사용하려 하는 module 들을 쓴다.
import logger from "morgan";            // import <별명> from "~";
import path from "path";                // 보통 경로를 설정할 때 많이 쓰이는 module

import homeRouter from "../routes/home";     // Home 화면에 대한 모듈
                                             // home.js 에서는 homeRouter 라는 것을 불러와서 씀
import updateRouter from "../routes/update"; // update.js 에서는 updateRouter 라는 것을 불러와서 씀
import selectRouter from "../routes/select"; // select.js 에서는 selectRouter 라는 것을 불러와서 씀

const PORT = 3000;     // 자유롭게 수정 가능

const app = express(); // express 는 HTTP 기능을 wrapping 해서  
                       //   서버를 알아서 연결 해 준다.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev")); // log를 더 자세히 볼 때 쓰인다.

app.use('/', homeRouter); // main homepage
app.use('/update', updateRouter); // localhost:3000/update
app.use('/select', selectRouter); // localhost:3000/select

// Server 를 실행시키는 부분
app.listen(PORT, () => { // 이 부분은 router 선언을 다 한 후에 작성 해야함
    console.log(`Example app listening at http://localhost:${PORT}`)
})

