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


    const parsedRequest = parseSignedRequest(req.body,process.env.FACEBOOK_SECRETKEY);

    console.log(parsedRequest);

    const respuestaFacebook = {
        url: 'https://www.chiquititodetalles.com/baja-condiciones',
        confirmation_code: '3503840934020'
    };
    res.send(respuestaFacebook)
})

const base64decode = (data) => {
    while (data.length % 4 !== 0) {
        data += '=';
    }
    data = data.replace(/-/g, '+').replace(/_/g, '/');
    return new Buffer.from(data, 'base64').toString('utf-8');
}

const parseSignedRequest = (signedRequest, secret) => {

    const encoded_data = signedRequest.split('.', 2);
    
    // decode the data
    const sig = encoded_data[0];
    const json = base64decode(encoded_data[1]);
    const data = JSON.parse(json);

    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
        throw Error('Unknown algorithm: ' + data.algorithm + '. Expected HMAC-SHA256');
    }

    const expected_sig = crypto.createHmac('sha256', secret)
        .update(encoded_data[1])
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace('=', '');

    if (sig !== expected_sig) {
        throw Error('Invalid signature: ' + sig + '. Expected ' + expected_sig);
    }

    return data;
}

app.listen(puerto, () => console.log('Server ejecutando!' + puerto));