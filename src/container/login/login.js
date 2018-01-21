import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			user:'',
			pwd:''
		}
		this.register =this.register.bind(this)
		this.handleLogin=this.handleLogin.bind(this)
	}
	register(){
		this.props.history.replace('/register')
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	handleLogin(){
		this.props.login(this.state)
	}
	render(){
		return (
			<div>
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
						<InputItem
						  onChange={v=>this.handleChange('user',v)}
						>usrName</InputItem>
						<InputItem
						  type='password'
						  onChange={v=>this.handleChange('pwd',v)}
						>psw</InputItem>
					</List>
					<Button  onClick={this.handleLogin} type='primary'>login</Button> 
					<WhiteSpace/>		
					<Button  onClick={this.register} type='primary'>register</Button> 				
				</WingBlank>				
			</div>
			)
	}
}

export default Login