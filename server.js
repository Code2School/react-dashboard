const express = require('express');
const path = require('path')

const port = process.env.PORT || 3001;
const server = express();

server.use(express.static(path.join(__dirname, 'dist')));

// Visitor
server.get('/api/visitors', (req, res) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const monthlyVisitors = months.map((month) => ({
		month,
		currentYear: Math.ceil(Math.random() * 100),
		lastYear: Math.ceil(Math.random() * 100)
	}));

	const currentYearVisitors = monthlyVisitors.reduce((total, visitor) => total + visitor.currentYear, 0);
	const lastYearVisitors = monthlyVisitors.reduce((total, visitor) => total + visitor.lastYear, 0);

	res.json({
		monthlyVisitors,
		currentYearVisitors,
		lastYearVisitors
	})
});

// Orders
server.get('/api/orders', (req, res) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const monthlyOrders = months.map((month) => ({
		month,
		delivered: Math.ceil(Math.random() * 100),
		estimated: Math.ceil(Math.random() * 100)
	}));

	const totalDelivered = monthlyOrders.reduce((total, order) => total + order.delivered, 0);
	const totalEstimated = monthlyOrders.reduce((total, order) => total + order.estimated, 0);

	res.json({
		monthlyOrders,
		totalDelivered,
		totalEstimated
	})
});

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => {
	console.log(`JSON Server is running with port ${port}`)
})
