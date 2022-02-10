class Interface
{
  constructor()
  {
    this.screens = {
      list        : 'screen_list',
      description : 'screen_description'
    };

    this.sounds = {
      enter       : new Audio('assets/sound_enter.wav'),
    }
    
    this.yukamons       = [];
    this.currentScreen  = '';
    this.currentYukamon = 0;

    this.setupListeners();
    this.goToScreen(this.screens.list);
  }

  setupListeners()
  {
    window.addEventListener('keydown', e => this.onKeyDown(e));
  }

  touch(e)
  {
    document.addEventListener("touchstart", onTouch());

    var position = e;

    //if position(position )
  }

  onKeyDown(e)
  {
    var key = e.key;

    if(this.currentScreen == this.screens.list)
    {
      if(key == 'ArrowUp')    this.moveArrowInList(-1);
      if(key == 'ArrowDown')  this.moveArrowInList(1);
      if(key == 'Enter')      this.goToScreen(this.screens.description);
    }

    if(this.currentScreen == this.screens.description)
    {
      if(key == 'Escape')
      {
        this.sounds.enter.play();
        this.goToScreen(this.screens.list)
      } 
    }
  }

  goToScreen(screenName)
  {
    this.currentScreen = screenName;

    this.hideAllScreens();
    if(this.currentScreen == this.screens.description) this.fillYukamonDescription();
    document.getElementById(screenName).classList.remove('hide');
  }

  hideAllScreens()
  {
    for(var i in this.screens)
    {
      var screenName = this.screens[i];
      document.getElementById(screenName).classList.add('hide');
    }
  }

  moveArrowInList(direction)
  {
    this.currentYukamon += direction;
    this.currentYukamon = Math.max(0,Math.min(this.currentYukamon,this.yukamons.length-1));

    var arrows = document.getElementsByClassName('img_arrow');
    for(var arrow of arrows)
    {
      arrow.classList.add('hide');
    }

    var id        = this.currentYukamon;
    var currArrow = document.getElementById('arrow'+id);
    currArrow.classList.remove('hide');
  }

  fillYukamonDescription()
  {
    var id      = this.currentYukamon;
    var yukamon = this.yukamons[id];

    yukamon.roar();

    document.getElementById('desc_img').setAttribute('src',yukamon.img_url);
    document.getElementById('desc_name').innerHTML        = yukamon.name;
    document.getElementById('desc_name').innerHTML        = yukamon.name;
    document.getElementById('desc_level').innerHTML       = yukamon.level;
    document.getElementById('desc_hp1').innerHTML         = yukamon.hp;
    document.getElementById('desc_hp2').innerHTML         = yukamon.hp;
    document.getElementById('desc_number').innerHTML      = yukamon.number;
    document.getElementById('desc_type').innerHTML        = yukamon.type;
    document.getElementById('desc_attack').innerHTML      = yukamon.attack;
    document.getElementById('desc_defense').innerHTML     = yukamon.defense;
    document.getElementById('desc_speed').innerHTML       = yukamon.speed;
    document.getElementById('desc_special').innerHTML     = yukamon.special;
    document.getElementById('desc_description').innerHTML = yukamon.description;
  }

  addYukamonToTheList(yukamon)
  {
    var id    = this.yukamons.length;
    var child = '\
    <table id="poke'+id+'" align="center">\
          <tr>\
            <td class="arrow_container" width="35" align="right">\
              <img src="assets/poke_asset_arrow.gif" id="arrow'+id+'" class="img_arrow margin_right" width="17">\
            </td>\
            <td width="80">\
              <img src="'+yukamon.img_url+'" width="60">\
            </td>\
            <td width="240">\
              <h3 class="no_margin no_padding uppercase">'+yukamon.name+'</h3>\
              <span class="text_small text_bold">HP:</span><img src="assets/poke_asset_lifebar.gif" alt="">\
            </td>\
            <td class="text_bold" width="120">\
              L:'+yukamon.level+' <br>\
              '+yukamon.hp+'/'+yukamon.hp+'\
            </td>\
          </tr>\
        </table>\
    ';

    document.getElementById('yukamon_list_container').innerHTML += child;
    this.yukamons.push(yukamon);
    this.moveArrowInList(-1);
  }
}