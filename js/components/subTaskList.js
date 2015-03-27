var React = require('react/addons');

var SubTaskList = React.createClass({
	getInitialState: function() {
		return { subTasks: [] }
	},
	componentDidMount: function() {
		this.setState({subTasks: this.props.subTasks});
	},
	itemDeleted: function(subTask, e) {
		e.stopPropagation();

		var toDeleteIndex = this.state.subTasks.indexOf(subTask);
		this.state.subTasks.splice(toDeleteIndex,1);
		this.setState({subTasks: this.state.subTasks});
	},
	handleKeyPress: function(e) {
		e.stopPropagation();
		if( e === undefined ) return;
		if( e.key != 'Enter' ) return;

		var nextSubTasks = this.state.subTasks.concat({
			key: this.state.subTasks.length, 
			desc: this.refs.subTask.getDOMNode().value
		});
		this.setState({subTasks: nextSubTasks });
		this.refs.subTask.getDOMNode().value = '';
	},	
	onClick: function(e) {
		e.stopPropagation();
	},
	render: function(){
		var component = this;
		var createSubTask = function(subtask) {
			return (
				<li key={subtask.key} onClick={component.itemDeleted.bind(null, subtask)}>
					{subtask.desc}</li>
			)
		};

		return (
			<ol>
				<input type="text" name="newSubTask" ref="subTask" placeholder="Enter a subtask!" onKeyPress={this.handleKeyPress} onClick={this.onClick} ></input>
				{ this.state.subTasks.map(createSubTask)}
			</ol>
			);
		}
});

module.exports = SubTaskList;