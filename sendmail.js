let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 465,
    secure: false, // use TLS
    auth: {
        user: 'username',
        pass: 'pass'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: 'localhost',
    to: 'nillerpost@hotmail.com',
    subject: 'Sending Email using SMTP and Node.js',
    text: 'That was damn easy!'
};

//If you want to ignore unauthorized certificate errors, use this:
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


/*
function sendmail() {
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '*****',
            pass: '*****'
        }
    });

    let mailOptions = {
        from: '*****',
        to: '*****',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    //If you want to ignore unauthorized certificate errors, use this:
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}*/

function timestamp() {
    let currentWeekNumber = require('current-week-number');
    let weeknumber = currentWeekNumber();
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'wedensday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date();
    let sec = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDay();
    console.log(hour, minute, sec, weekdays[day], 'Weeknumber:', weeknumber);
}


function daily() {
    let currentWeekNumber = require('current-week-number');
    let weeknumber = currentWeekNumber();
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'wedensday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date();
    let day = date.getDay();
    console.log('Daily job: ' + weekdays[day], 'Weeknumber: ', weeknumber);
}

function bar() {
    console.log('testfunction bar!!!')
}

/*
module.exports = {
    timestamp: timestamp,
    daily: daily,
    bar: bar,
    sendmail: sendmail
};*/