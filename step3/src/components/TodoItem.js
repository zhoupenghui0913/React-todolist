/**
 * 
 * @authors Phelps Chou
 * @date    2017-03-12 14:34:36
 * @version $Id$
 */

import React from 'react';

class TodoItem extends React.Component {
	render() {
		let className = this.props.isDone ? 'task-done' : '';
		return (
			<li>
				<label>
				  	<input type="checkbox"/>
				  	<span className={className}>{this.props.text}</span>
				</label>
			</li>
		);
	}
}

export default TodoItem;