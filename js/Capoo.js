// 创建一个新的图片元素并添加到页面中
function createGifElement() {
    var gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');

    var gifImage = document.createElement('img');
    gifImage.src = '../images/Capoo/Capoo.gif'; // 修改为你的GIF图像路径
    gifImage.alt = 'Capoo GIF Image'; // 修改为你的GIF图像的alt文本

    gifContainer.appendChild(gifImage);
    document.body.appendChild(gifContainer);

    return gifContainer;
}

// 检测设备类型并在移动设备上隐藏 GIF 图像
function checkDeviceType() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var gifContainer = createGifElement();
    if (isMobile) {
        gifContainer.classList.add('gif-hidden');
    }
}

// 当页面加载完成时检测设备类型
document.addEventListener('DOMContentLoaded', function () {
    checkDeviceType();
});