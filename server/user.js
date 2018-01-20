const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User =model.getModel('user')
//const _filter = {'pwd':0,'__v':0}

Router.get('/list',function(req,res){
	//const { type } = req.query
	//User.remove({},function(err,doc){})
	User.find({},function(err,doc){
		return res.json(doc)
	})	
})
//update
// Router.post('/update',function(req,res){
// 	const userid = req.cookies.userid
// 	if (!userid) {
// 		return json.dumps({code:1})
// 	}
// 	const body = req.body
// 	User.findByIdAndUpdate(userid,body,function(err,doc){
// 		const data = Object.assign({},{
// 			user:doc.user,
// 			type:doc.type
// 		},body)
// 		return res.json({code:0,data})
// 	})
// })
//user register
Router.post('/register',function(req,res){
	const {user,pwd,type} =req.body
	User.findOne({user:user},function(err,doc){
		// in caes of repeated registion by the exist of user
		if(doc){
			return res.json({code:1,msg:'repeated user !'})
		}
		//instore in repository with  new user data
		const userModel = new User({user,type,pwd:md5Pwd(pwd),type});
		userModel.save(function(e,d){
			if(e){
				return res.json({code:1,msg:'serverSide error !'})
			}
			const {user,type,_id} = d;
			//inject cookie into cleintSide
			//response.cookie("userid",_id);
			return res.json({code:0,doc:data})
		})
	})
})
//login
Router.post('/login', function(req,res){
	const {user, pwd} = req.body
	User.findOne({user,pwd:md5Pwd(pwd)},function(err,doc){
		if (!doc) {
			return res.json({code:1,msg:'usrName or pwd error'})
		}
		res.cookie('userid', doc._id)
		return res.json({code:0,data:doc})
	})
})
Router.get('/info',function(req, res){
	const {userid} = req.cookies
	if (!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid} ,_filter , function(err,doc){
		if (err) {
			return res.json({code:1, msg:'serverSide'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})
	//with cookie or not
	
})
//md5
function md5Pwd(pwd){
	const salt = 'imooc_is_good_32893UQIUNhau``_@'
	return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router