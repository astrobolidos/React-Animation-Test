var React = require('react/addons');

var SubTaskList = React.createClass({
	render: function(){
	var createSubTask = function(subtask) {
		return (
			<li key={subtask.key}>{subtask.desc}</li>
		)
	};

	return (
		<ol>
			{ this.props.subTasks.map(createSubTask)}
		</ol>
		);
	}
});

module.exports = SubTaskList;