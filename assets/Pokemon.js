class Pokemon
{
  constructor(name,number,type,hp,level,attack,defense,speed,special,description)
  {
    var img_bank = {
      richard        : 'assets_v2/richard.png',
      gabo       : 'assets_v2/gabo.png',
      mau        : 'assets_v2/mau.png',
      duko        : 'assets_v2/duko.png',
      juan        : 'assets_v2/juan.png',
      lili         : 'assets_v2/lili.png',
      butterfree    : 'assets/poke_butterfree.gif',
    }
    var sound_roars = {
      richard      : new Audio('assets/sound_roar1.wav'),
      gabo     : new Audio('assets/sound_roar2.wav'),
      mau      : new Audio('assets/sound_roar3.wav'),
      duko      : new Audio('assets/sound_roar4.wav'),
      juan      : new Audio('assets/sound_roar5.wav'),
      lili       : new Audio('assets/sound_roar6.wav'),
      butterfree  : new Audio('assets/sound_roar7.wav'),
    }

    this.name         = name;
    this.number       = number;
    this.type         = type;
    this.hp           = hp;
    this.level        = level;
    this.attack       = attack;
    this.defense      = defense;
    this.speed        = speed;
    this.special      = special;
    this.description  = description;
    this.img_url      = img_bank[this.name.toLowerCase()];
    this.sound_roar   = sound_roars[this.name.toLowerCase()];
  }

  roar()
  {
    this.sound_roar.play();
  }
}