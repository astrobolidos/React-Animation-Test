var React 			= require('react/addons');
var SubTaskList 	= require('./subTaskList');

var TaskList = React.createClass({
	getInitialState: function(){
		return { taskList: [] };
	},
	componentWillMount: function(){
		this.setState({taskList: tasks})
	},
	handleKeyPress: function(e) {
		if( e === undefined ) return;
		if( e.keyCode != 13 ) return;

		var tasks = this.state.taskList;
		tasks.push({key:tasks.length, desc: this.refs.newTask.value, subtasks: []});
		this.setState({taskList: tasks});
	},
	render: function(){
		return (
			<ol>
				<input type="text" name="newTask" ref="newTask" placeholder="Add a new task!" onKeyDown={this.handleKeyPress()} ></input>
			{ this.state.taskList.map(function(task){
				return (
					<li key={task.key}>
						{task.desc}
						<SubTaskList subtasks={task.subTasks} />
					</li>
					)
			})}
			</ol>
			);
	}
});

module.exports = TaskList;

var tasks = [
{ key:1, desc:"Have breakfast", subTasks: [ 
{ key: 1, desc: 'dring orange juice' },
{ key: 2, desc: 'eat porridge' } ] 
},
{ key:2, desc:"Say goodbye",  subTasks: []	},
{ key:3, desc:"Drive to work", subTasks: [] },
{ key:4, desc:"Lunch break", subTasks: [] }
];