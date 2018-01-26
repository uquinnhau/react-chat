
import React from 'react'
import {NavBar,InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{ update }
)
class GeniusInfo extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc:''
		}
	}
	onChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render(){
		const redirectTo = this.props.redirectTo
		const path = this.props.location.pathname
		
		return (
			<div>
				{redirectTo&&redirectTo!==path? <Redirect to={this.props.redirectTo}/> :null}
				<NavBar mode="dark" >genius info page</NavBar>
				<AvatarSelector 
					selectAvatar={(imgname)=>{
						this.setState({
							avatar:imgname
						})
					}}
				></AvatarSelector>
				<InputItem onChange={(v)=>this.onChange('title',v)}>
					position
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.onChange('desc',v)}
					rows={3}
					autoHeight
					title='resume'
				>
				</TextareaItem>
				<Button 
					onClick={()=>{
						this.props.update(this.state)
					}}
					type='primary'>conservation</Button>
			</div>
			
		)
	}
}

export default GeniusInfo