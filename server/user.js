const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User =model.getModel('user')

Router.get('/list',function(req,res){
	const { type } = req.query
	//User.remove({},function(e,d){})
	User.find({type},function(err,doc){
		return res.json({code:0},data:doc)
	})	
})

Router.post('/register',function(req,res){
	console.log(req.body)
	const {user,pwd,type} =req.body
	User.findOne({user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'repeated user !'})
		}
		User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
			if(e){
				return res.json({code:1,msg:'serverSide error !'})
			}

			return res.json({code:0})
		})
	})
})

Router.get('/info',function(req,res){
	//with cookie or not
	return res.json({code:1})
})

function md5Pwd(pwd){
	const salt = 'imooc_is_good_32893UQIUNhau``_@'
	return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router