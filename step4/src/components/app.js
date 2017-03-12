/**
 * 
 * @authors Phelps Chou
 * @date    2017-03-12 12:44:19
 * @version $Id$
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';


class App extends React.Component { //定义组件，继承父类
  constructor() { //constructor 是和 class 一起用来创建和初始化对象的特殊方法。
    super(); //在装载组件(mounting)之前调用会React组件的构造函数。当实现React.Component子类的构造函数时，应该在任何其他语句之前调用super(props)
    this.state = { //设置初始状态
      todos: []
    };
  }
  addTodo(item) { // 新增了添加todo事项的方法
    this.state.todos.push(item);
    this.setState({
      todos: this.state.todos
    }); //设置状态
  }
  render() {
    return (
      <div className="todo-wrapper">
        <TodoHeader addTodo={this.addTodo.bind(this)} />
        <TodoMain todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));