var express = require('express'),
	React = require('react'),
	ReactDOMServer = require('react-dom/server'),
	AppComponent = React.createFactory(require('./AppComponent')),
	app;

app = express();

function homeView (request, response) {
	var message = request.params.msg || 'Hi John',
		component = AppComponent({ msg: message });

	response.send(ReactDOMServer.renderToStaticMarkup(component));
}

app.get('/', homeView);
app.get('/:msg', homeView);

app.listen(4000);