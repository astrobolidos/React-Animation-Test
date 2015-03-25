var React = require('react/addons');

var TaskList = React.createClass({
	getInitialState: function(){
		return { taskList: [] };
	},
	componentWillMount: function(){
		this.setState({taskList: tasks})
	},
	render: function(){
		return (
			<ol>
				{ this.state.taskList.map(function(task){
					return <li>{task.desc}</li>
				})}
			</ol>
			);
	}
});

module.exports = TaskList;

var tasks = [
			{ key:1, desc:"Have breakfast"},
			{ key:2, desc:"Say goodbye"},
			{ key:3, desc:"Drive to work" },
			{ key:4, desc:"Lunch break" }
			];