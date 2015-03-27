var React 			= require('react/addons');
var SubTaskList 	= require('./subTaskList');

var TaskList = React.createClass({
  render: function() {
  	 var component = this;
    var createTask = function(task) {
      return (
			<li key={task.key} onClick={component.props.itemDeleted.bind(null, task)} >
				{task.desc}
				<SubTaskList subTasks={task.subTasks} />
			</li>
      )
    };
    return (
    	<ul>
    		{this.props.tasks.map(createTask)}
    	</ul>
    	)
  }
});

module.exports = TaskList;