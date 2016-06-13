//THIS SHOULD HAVE THE COMPONENT FOR RESULTS DIV

//THIS SHOULD HAVE COMPONENT FOR QUERY DIV

var React = require('react');

var Saved = React.createClass({
	render: function(){

		return (
			<div className="main-container">
			<div className="container">
			<div className="row">
			<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
					</div>
					<div className="panel-body">
						<ul className="list-group">
						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Aliens Invade Paris</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 03/15/16</p>
							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Obama Gives Commencement Speech</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 03/15/16</p>

						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>AIDS is Cured!</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 03/15/16</p>

							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Knicks Win Championship</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 03/15/16</p>
							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Mud: The New Superfood?</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 03/15/16</p>
							
						  </li>						  
						</ul>					
					</div>
				</div>

			</div>
		</div>
		
	</div>
	</div>
			)
	}
});

module.exports = Saved