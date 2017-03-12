/**
 * 
 * @authors Phelps Chou
 * @date    2017-03-12 14:34:36
 * @version $Id$
 */

import React from 'react';
import TodoItem from './TodoItem';

class TodoMain extends React.Component {
	render() {
		if (this.props.todos.length === 0) {
			return (
				<div className="todo-empty">您目前没有待办任务</div>
			);
		} else {
			return (
				<ul className="todo-main">
		          {
		            this.props.todos.map((todo,index) => {
		              //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
		              return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props} key={index}/>
		            })
		          }
		        </ul>
			);
		}
	}
}

export default TodoMain;