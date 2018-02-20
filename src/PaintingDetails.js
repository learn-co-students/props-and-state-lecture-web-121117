import React from 'react'

const PaintingDetails = (props) => {
	return (
		<div>
			<h3>{props.name}</h3>
			<h3>{props.artist}</h3>
			<button onClick={props.handleClick}>{props.liked ? "Unlike" : "Like"}</button>
		</div>
	)
}

export default PaintingDetails