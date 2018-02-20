import React from 'react'

const Comment = (props) => {
	return <h5>{props.comment.author} says: {props.comment.text}</h5>
}

export default Comment