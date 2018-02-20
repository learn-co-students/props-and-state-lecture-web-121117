import React from 'react'
import Comment from './Comment'

// export default class CommentList extends React.Component {
// 	render(){
// 		return ()
// 	}
// }

const CommentList = (props) => {

	let commentComponents = props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)

	return (
		<div>{commentComponents}</div>
	)
}

export default CommentList