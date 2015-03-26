var React = require('react/addons');

var SubTaskList = React.createClass({
	getInitialState: function(){
		return { subTasks: [] };
	},
	componentDidMount: function(){
		this.setState({subTasks: this.props.subtasks})
	},
	render: function(){
		return (
			<ol>
				{ this.state.subTasks.map(function(sub){
					return (
						<li key={sub.key}>
							{sub.desc}
						</li>
					)
				})}
			</ol>
			);
	}
});

module.exports = SubTaskList;