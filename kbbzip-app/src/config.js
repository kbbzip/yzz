export const SUPABASE_URL = https://btfvmnarsjibtcmzolya.supabase.co; // 替换为您的实际URL
export const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZnZtbmFyc2ppYnRjbXpvbHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyODYxOTAsImV4cCI6MjA3Njg2MjE5MH0.fsYK2FDwhI1hgIe_1bjWTNgk0jDHbhiXGFCSxgvVWB8; // 替换为您的实际key
export const XFYUN_APPID = ec4b98c5;
// 1. 禁用默认UI
export const authConfig = {
  disableDefaultUI: true,
  customLoginUrl: '/custom-login'
}

// 2. 创建自定义登录组件
export function CustomAuthForm() {
  return (
    <div className="auth-container">
      <h2>工作笔记系统</h2>
      <input type="email" placeholder="邮箱" id="login-email" />
      <input type="password" placeholder="密码" id="login-password" />
      <button onClick={handleLogin}>登录</button>
      <button onClick={handleSignUp}>注册</button>
    </div>
  )
}