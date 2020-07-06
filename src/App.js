import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <FinalTodoList />
    </div>
  );
}

let todosData = [
  {
    name: "todo1",
    completed: false
  },
  {
    name: "todo2",
    completed: false
  },
  {
    name: "todo3",
    completed: false
  }
];

class Todo extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <ul className="row text-primary">
          <li
            className="col-10 offset-1"
            onClick={() => handleClick(this.props)}
          >
            {this.props.name} {this.props.completed.toString()}
          </li>
        </ul>
      </div>
    );
  }
}

class FinalTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: todosData
    };
    this.checkTodo = this.checkTodo.bind(this);
  }
  checkTodo(data1) {
    data1.completed = true;
    this.setState(state => {
      return this.state.data.map(data => {
        if (data.name === data1.name) {
          data.completed = !data.completed;
          return state;
        }
      });
    });
  }
  render() {
    return (
      <div className="container-fluid">
        {this.state.data.map(data1 => {
          if (data1.completed) {
            let i = 1000;
            return (
              <div>
                <Todo key={i++} {...data1} handleClick={this.checkTodo} />
              </div>
            );
          }
        })}
        <hr />
        {this.state.data.map(data1 => {
          if (!data1.completed) {
            let i = 100;
            return (
              <div>
                <Todo key={i++} {...data1} handleClick={this.checkTodo} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
