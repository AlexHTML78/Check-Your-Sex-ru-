let visible = false;
let checkBtn = document.getElementById('check');
checkBtn.addEventListener('click', function(){
    let choose = document.getElementById('choose');
     if (visible === false) {
        choose.style.display = 'flex';
        visible = true;
    }
    else {
        choose.style.display = 'none';
        visible = false;
    }
});


let man = document.getElementById('man');
let girl = document.getElementById('girl');
    man.addEventListener('change', function(){
      alert('Вы Парень!');
        this.checked = false;
        document.body.style.backgroundImage = 'url(http://media.rockstargames.com/rockstargames/img/global/downloads/wallpapers/games/v-igg2-1920x1080.jpg)';
});
    girl.addEventListener('change', function(){
        alert('Вы Дама!');
        this.checked = false;
        document.body.style.backgroundImage = 'url(https://img.gta5-mods.com/q95/images/gta-v-loading-screen-girl/349d8c-newloadingscreen.png)';
    });

