/* Server */
const SMTPServer = require('smtp-server').SMTPServer;

const server = new SMTPServer({
    secure: true,
    auth: {
        user: 'username',
        pass: 'pass'
    },
});

server.listen(465);

server.on('error', err => {
    console.log('Error %s', err.message);
});