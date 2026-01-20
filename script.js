document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const notice = document.getElementById('notice');
  const toggle = document.querySelector('.toggle-pw');

  // 检查是否已登录
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    // 已登录，允许访问命令页面
    const currentPage = window.location.pathname;
    if (currentPage.includes('dos-commands') || currentPage.includes('linux-commands') || currentPage.includes('powershell-commands')) {
      // 允许访问
      return;
    }
  }

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

    // 模拟登录流程
    notice.textContent = '正在登录…';
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    
    // 简单的登录验证（演示：admin/123456）
    const validEmail = 'admin';
    const validPassword = '123456';
    
    setTimeout(()=>{
      btn.disabled = false;
      
      if (vEmail === validEmail && vPassword === validPassword) {
        // 登录成功
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', vEmail);
        notice.textContent = '登录成功，正在跳转...';
        notice.style.color = '#22c55e';
        
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 500);
      } else {
        // 登录失败
        notice.textContent = '用户名或密码错误';
        notice.style.color = '#ef4444';
      }
    }, 900);
  });
});

// 为命令页面添加登录检查
function checkLoginForCommands() {
  const currentPage = window.location.pathname;
  const isCommandPage = currentPage.includes('dos-commands') || 
                       currentPage.includes('linux-commands') || 
                       currentPage.includes('powershell-commands');
  
  if (isCommandPage) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      alert('请先登录！');
      window.location.href = 'index.html';
    }
  }
}

// 页面加载时检查
document.addEventListener('DOMContentLoaded', checkLoginForCommands);

// 添加登出功能
function logout() {
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('userName');
  window.location.href = 'index.html';
}
