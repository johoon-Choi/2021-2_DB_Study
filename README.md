# 2021_2_DB

## <span style="color:yellow">3주차 실습 실행 방법</span>
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:johoon-Choi/2021_2_DB.git
    - (token을 사용하는 경우) git clone https://github.com/johoon-Choi/2021_2_DB.git
2. week-3 폴더로 이동
    > cd week-3
3. 콘솔창 (powershell) 에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력 (주석 부분)

<br>

## <span style="color:yellow">8주차 실습 실행 방법</span>
1. home.js / home.hbs
    - Employee 데이터 삽입과 Department 데이터 삽입을 하는 페이지이다.
2. select.js / select.hbs
    - localhost:${PORT}/select 로 이동을 한다.
    - 아래와 같이 data 들에 대한 표가 출력이 된다.
    - ## <span style="color:black">직원 테이블</span>
      Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
       ---|---|---|---|---|---|---|---|---|---|
       Wallace|K|Mcnabb|1111111|19971223|Seoul|M|500||1
    - ## <span style="color:black">부서 테이블</span>
      Dname|Dnumber|Mgr_ssn|Mgr_start_date
       ---|---|---|---|
       A|1|1111111|20170430
3. update.js
    - **updateDepartment.hbs** 파일과 **updateEmployee.hbs** 파일이 있다.
    - Department table 에 대한 데이터나 Employee table 에 대한 데이터를 수정한다.
<br>

## <span style="color:yellow">10주차 실습 실행 방법</span>
1. login.js / login.hbs
    - 가장 처음에 홈페이지에 출력이 되는 js 파일이다. login 기능을 가지고 있다.
2. select.js / select.hbs
    - 만약 user 로 login 을 했다면 localhost:${PORT}/select 로 이동을 한다.
    - 아래와 같이 data 들에 대한 표가 출력이 된다.
    -  Dname|Dnumber|
        ---|---|
        전기공학과|2
        정보통신공학과|0
        컴퓨터공학과|1
    - ``` SQL
      SELECT * FROM department 
    - 위와 같은 command 가 실행이 된 것 이다.
3. delete.js / delete.hbs
    - 만약 admin 으로 login 을 했다면 localhost:${PORT}/delete 로 이동을 한다.
    - department TABLE 에서 원하는 data들을 삭제할 수 있는 페이지 이다.