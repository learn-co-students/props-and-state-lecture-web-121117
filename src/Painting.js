import React from 'react'
import PaintingDetails from './PaintingDetails'

class Painting extends React.Component {

	// constructor(props){
	// 	super(props)

	// 	this.state = {
	// 		liked: false
	// 	}
	// }

	state = {
		liked: true
	}

	handleClick = (event) => {
		this.setState({
			liked: !this.state.liked
		})
	}

	render(){
		console.log(this.state)
		return (
			<div>
				<img className={this.state.liked ? "liked-painting" : "painting"} src={this.props.image}/>
				<PaintingDetails name={this.props.name}
								 artist={this.props.artist}
								 liked={this.state.liked}
								 handleClick={this.handleClick}/>
			</div>
		)
	}
}

export default Painting