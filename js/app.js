window.React 	= require('react/addons');
React 				= require('react/addons');
TaskList 			= require('./components/taskList');

var App = React.createClass({
	render: function() {
		return <TaskList />
	}
});

React.render(<App/>, document.body);