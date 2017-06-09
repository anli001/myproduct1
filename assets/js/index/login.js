/**
 * 登陆功能:
 * 1.给form表单注册submit事件
 * 2.禁用form的默认的submit事件,之前要禁用，是因为如果不禁用,数据就直接提交,
 * 而我们希望的是通过js获取数据，通过ajax提交
 * 3.通过js获取用户名和密码
 * 4.判断用户名和密码是否为空，如果为空就不提交(可以给个提示)
 * 5.发ajax请求,要对着接口文档去发请求
 * 6.如果登陆失败,要给用户提示
 *   如果登陆成功,直接跳转到首页!
 */

// 1.给form表单注册submit事件
// 事件都会对应一个回调函数,事件发生进，函数就会执行
$('form').on('submit', function (event) {
  // return false
  // 2.禁用form的默认的submit事件
  // 这个方法就是用来阻止默认事件
  event.preventDefault()
  // 3.通过js获取用户名和密码
  var name = $('#name').val()
  var pass = $('#pass').val()

  // 4.判断用户名和密码是否为空，如果为空就不提交(可以给个提示)
  if(!name.trim() || !pass.trim()) {
    window.alert('请输入用户名或者密码!')
  }

  // 5.发ajax请求,要对着接口文档去发请求
  var options = {
    // http://bxg.com,域名不一样，前端不可以发跨域请求
    // url: 'http://api.botue.com/login',
    url: 'http://bxg.com/api/login', // *注意:要改成自己网页的域名!*
    type: 'post',
    data: {
      tc_name: name,
      tc_pass: pass
    },
    success: function (data) {
      // console.log(data)
      if (data.code === 200) {
        window.alert('登陆成功!')
      }
    },
    error: function () {
      // console.log('error')
      // 状态码404,会进行error执行
      window.alert('登陆失败！')
    }
  }
  $.ajax(options)
})

// https://standardjs.com/readme-zhcn.html


// /api   http://api.botue.com

// function name () {}
// dom不是js规范里的： ecmascript,Math
// document, navigator,console
// alert

