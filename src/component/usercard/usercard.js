import React,{ Component }  from 'react'
//import PropTypes from 'prop-types'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import { withRouter } from "react-router-dom";


@withRouter
class UserCard extends Component{
    constructor ( props ) {
        super( props );
        this.handleClick = this.handleClick.bind( this );
    }
    handleClick ( v ) {
        this.props.history.push( "/chat/" + v._id );
    }
	render(){
		return (
			<WingBlank>
			<WhiteSpace/>
				{this.props.userlist &&this.props.userlist.map((v,i)=>(
					v.avatar?(<Card key={i} onClick={ () => this.handleClick( v ) }>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Card.Header>
						<Card.Body>
							{v.type=='boss'? <div>company:{v.company}</div> :null}

							{v.desc.split('\n').map(d=>(
								<div key={d}>{d}</div>
							))}
							{v.type=='boss'? <div>salary:{v.money}</div> :null}
						</Card.Body>
					</Card>):null

				))}
			</WingBlank>
		)


	}
}
export default UserCard

