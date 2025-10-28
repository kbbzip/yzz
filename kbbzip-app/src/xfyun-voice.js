// 科大讯飞语音识别封装
let recorder;
let audioChunks = [];

async function startXFYunRecognition() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorder = new MediaRecorder(stream);
        
        recorder.ondataavailable = (e) => {
            audioChunks.push(e.data);
            if (recorder.state === 'inactive') {
                processAudio(new Blob(audioChunks));
            }
        };
        
        recorder.start(1000); // 每1秒收集一次数据
        document.querySelector('.pulse-circle').style.display = 'inline-block';
        
    } catch (error) {
        console.error('麦克风访问失败:', error);
    }
}

async function processAudio(blob) {
    const formData = new FormData();
    formData.append('audio', blob, 'recording.wav');
    
    // 替换为您的讯飞API端点
    const response = await fetch(wss://iat-api.xfyun.cn/v2/iat, {
        method: 'POST',
        body: formData,
        headers: {
            'AppID': XFYUN_APPID
        }
    });
    
    const result = await response.json();
    parseVoiceCommand(result.text);
}




















