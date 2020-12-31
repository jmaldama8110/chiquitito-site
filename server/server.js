const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');

const puerto = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.json({ limit: '50mb' }));

app.get('*', (req, res) => {
    const redirectPath = path.join(publicPath,'index.html');
    console.log(redirectPath);

    res.sendFile( redirectPath );
});

app.post('/baja', (req, res) => {

    res.send('hola')
})

app.listen(puerto, () => console.log('Server ejecutando!' + puerto));