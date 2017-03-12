var React = require('react');
var ReactDOM = require('react-dom');
class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello Beijing</h1>
				<EmployeeList />			
			</div>
		);
    }
};	

var EmployeeList = React.createClass({
    render: function () {
        return (
            <div>
			   <ul>
                  <li>Christophe Coenraets</li>
                  <li>Lisa Jones</li>
               </ul>
			</div>
        );
    }
});



ReactDOM.render(<HomePage />,  document.body);

