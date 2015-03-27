var React 						= require('react/addons');
var TaskList 					= require('./taskList');

var TaskApp = React.createClass({
	getInitialState: function() {
		return { tasks: [], placeholder: 'Add a new task!' }
	},
	componentDidMount: function() {
		this.setState({tasks: taskHardcodedData})
	},
	itemDeleted: function(task) {
		var toDeleteIndex = this.state.tasks.indexOf(task);
		this.state.tasks.splice(toDeleteIndex,1);
		this.setState({tasks: this.state.tasks});
	},
	handleKeyPress: function(e) {
		if( e === undefined ) return;
		if( e.key != 'Enter' ) return;

		var nextTasks = this.state.tasks.concat({
			key: this.state.tasks.length, 
			desc: this.refs.newTask.getDOMNode().value, 
			subTasks: []
		});
		this.setState({tasks: nextTasks, placeholder: 'Add a new task!'});
	},
	render: function() {
		return (
			<div className="content">
				<input type="text" name="newTask" ref="newTask" placeholder={this.state.placeHolder} onKeyPress={this.handleKeyPress} ></input>

					<TaskList tasks={this.state.tasks} itemDeleted={this.itemDeleted} />

			</div>
		)
	}
});

module.exports = TaskApp;

var taskHardcodedData = [
	{ key:0, desc:"Have breakfast", subTasks: [ 
		{ key: 0, desc: 'dring orange juice' },
		{ key: 1, desc: 'eat porridge' } 
	] 
},
	{ key:1, desc:"Say goodbye",  subTasks: []	},
	{ key:2, desc:"Drive to work", subTasks: [] },
	{ key:3, desc:"Lunch break", subTasks: [] }
];