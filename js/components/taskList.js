var React 			= require('react/addons');
var SubTaskList 	= require('./subTaskList');
var ReactTransitionGroup 	= React.addons.CSSTransitionGroup;

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
    		<ReactTransitionGroup transitionName="example" transitionAppear={true}>
    			{this.props.tasks.map(createTask)}
    		</ReactTransitionGroup>
    	</ul>
    	)
  }
});

module.exports = TaskList;