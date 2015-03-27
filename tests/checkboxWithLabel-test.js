describe('TaskApp', function() {
  it('Loads all elements on render', function() {
    var React = require('react/addons');
    var TaskApp = require('../js/components/taskApp');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var taskApp = TestUtils.renderIntoDocument(
      <TaskApp />
    );
  });
});