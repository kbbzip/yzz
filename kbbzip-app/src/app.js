// 初始化Supabase客户端
const supabaseUrl = https://btfvmnarsjibtcmzolya.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZnZtbmFyc2ppYnRjbXpvbHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyODYxOTAsImV4cCI6MjA3Njg2MjE5MH0.fsYK2FDwhI1hgIe_1bjWTNgk0jDHbhiXGFCSxgvVWB8;
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 视图切换功能
function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}-view`).classList.add('active');
}

// 对象选择功能
async function selectObject(objectName) {
    if (objectName === '对象选择') return;
    const { data } = await supabase
        .from('objects')
        .select('*')
        .eq('name', objectName);
    console.log('Selected object:', data);
}