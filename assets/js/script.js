function copyEmail() {
    const email = document.querySelector('.email-copy').textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}