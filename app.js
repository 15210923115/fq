var express = require('express');
var app = express();
var request = require('request');
var qs = require('querystring');
var url = require('url');

app.all('*',function (req, res) {
    // var uri = url.format({
    //     protocol: 'https',
    //     hostname: 'www.google.com',
    //     pathname: req.path,
    //     search: qs.stringify(req.query)
    // });
    // return req.pipe(request(uri)).pipe(res);
    res.send('hello world');
});

app.listen(8866,'0.0.0.0');