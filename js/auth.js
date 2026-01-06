const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req,res)=>{
 const hash = await bcrypt.hash(req.body.password,10);
 const user = await User.create({...req.body,password:hash});
 res.json(user);
});

router.post('/login', async (req,res)=>{
 const user = await User.findOne({email:req.body.email});
 if(!user) return res.status(401).json({error:'Usuário não encontrado'});
 const ok = await bcrypt.compare(req.body.password,user.password);
 if(!ok) return res.status(401).json({error:'Senha inválida'});
 const token = jwt.sign({id:user._id,role:user.role},'SECRET');
 res.json({token,role:user.role});
});

module.exports = router;