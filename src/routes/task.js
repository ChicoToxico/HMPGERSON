const router = require('express').Router();

router.get('/task',(req,res,next)=>{
  res.send('hola por 2');
});
module.exports = router;
