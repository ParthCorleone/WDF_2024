function enableDarkMode(){
    document.body.classList.add('dark-mode');
    document.getElementById('id1').style.backgroundColor='#383838';
}
function enableLightMode(){
    document.body.classList.remove('dark-mode');
    document.getElementById('id1').style.backgroundColor='beige';
}