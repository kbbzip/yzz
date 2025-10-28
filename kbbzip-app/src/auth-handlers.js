// 3. 实现登录处理
async function handleLogin() {
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value
  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert(`登录失败: ${error.message}`)
  } else {
    window.location.href = '/dashboard'
  }
}

// 4. 实现注册处理
async function handleSignUp() {
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value
  
  const { error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    alert(`注册失败: ${error.message}`)
  } else {
    alert('注册成功！请检查邮箱验证')
  }
}