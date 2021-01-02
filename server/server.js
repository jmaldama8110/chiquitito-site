const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');

const puerto = process.env.PORT || 3000;

const crypto = require('crypto');

app.use(express.static(publicPath));
app.use(express.json({ limit: '50mb' }));


app.get('*', (req, res) => {
    const redirectPath = path.join(publicPath, 'index.html');
    console.log(redirectPath);

    res.sendFile(redirectPath);
});

app.post('/facebook-baja', (req, res) => {
    


})

const  parseRequest = (signed_request, secret) => {
    signed_request = signed_request.split('.');
    var encoded_sig = signed_request[0];
    var payload = signed_request[1];


    var data = JSON.parse(new Buffer(payload, 'base64').toString());

    if (data.algorithm.toUpperCase() !== 'HMAC-SHA256')
      return null;

    var hmac = crypto.createHmac('sha256', secret);
    var encoded_payload = hmac.update(payload).digest('base64')
      .replace(/\//g, '_').replace(/\+/g, '-').replace(/={1,2}$/, '');

    if (encoded_sig !== encoded_payload)
      return null;

    return data;
}

app.listen(puerto, () => console.log('Server ejecutando!' + puerto));