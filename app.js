var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: 'xxx@qq.com',//用户名
        pass: 'xxx'//密码
    }
});

var mailOptions = {
    from: 'xxx@qq.com ', // 发件人邮箱
    to: 'xxx@qq.com', // 收件人
    subject: 'Hello ✔', // 标题
    text: 'Hello world ✔', // 文本内容
    html: '<b>Hello world ✔</b>' // html内容
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        //console.log('Message sent: ' + info.response);
		console.log('发送成功');
    }
});


//https://www.npmjs.com/package/nodemailer