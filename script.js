document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const notice = document.getElementById('notice');
  const toggle = document.querySelector('.toggle-pw');

  toggle.addEventListener('click',()=>{
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    toggle.textContent = type === 'password' ? '显示' : '隐藏';
    toggle.setAttribute('aria-label', type === 'password' ? '显示密码' : '隐藏密码');
  });

  function clearErrors(){
    emailError.textContent = '';
    passwordError.textContent = '';
    notice.textContent = '';
  }

  form.addEventListener('submit',function(e){
    e.preventDefault();
    clearErrors();
    let ok = true;
    const vEmail = email.value.trim();
    const vPassword = password.value;

    if(!vEmail){
      emailError.textContent = '请输入邮箱或用户名';
      ok = false;
    }
    if(!vPassword || vPassword.length < 6){
      passwordError.textContent = '密码至少6位';
      ok = false;
    }

    if(!ok){
      return;
    }

    // 模拟登录流程（这里应调用后端 API）
    notice.textContent = '正在登录…';
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    setTimeout(()=>{
      btn.disabled = false;
      notice.textContent = '登录成功（模拟）';
      // 这里可以重定向：window.location = '/dashboard'
    },900);
  });
});
