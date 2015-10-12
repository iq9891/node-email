## 使用方法 ##

1. 第一步就是在当前路径打开cmd
2. 输入如下代码
<pre>npm install</pre>
3. 在transporter对象中设置默认发送邮箱的用户名和密码,如下：
<pre>var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: 'xxx@qq.com',//用户名
        pass: 'xxx'//密码
    }
});</pre>
4. 在mailOptions对象中设置发送信息,如下：
<pre>var mailOptions = {
    from: 'xxx@qq.com ', // 发件人邮箱
    to: 'xxx@qq.com', // 收件人
    subject: 'Hello ✔', // 标题
    text: 'Hello world ✔', // 文本内容
    html: '<b>Hello world ✔</b>' // html内容
};</pre>
5. 输入如下代码
<pre>node app</pre>	

## 功能 ##

发送邮件