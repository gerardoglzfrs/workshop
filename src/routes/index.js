const router = require("express").Router();
const user = require("../controllers/userController")

router.get("/",(req, res) => {
    console.log('===Reg', res);
    res.render("vista");
});

router.post("/users", user.saveUser, (req, res, next)=>{
    console.log("usuario guardado");
}); 

module.exports = router;