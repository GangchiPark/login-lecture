"use strcict";
//서버 구동
const app = require("../app");
const PORT = 3000;

app.listen(PORT, function(){
   console.log("서버 가동");
});
