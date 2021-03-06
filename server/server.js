const path = require('path');
const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

const publicPath = path.join(__dirname, '..', 'build');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use('/*', createProxyMiddleware({target: 'https://manage-volunteers.herokuapp.com/',changeOrigin: true}));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});