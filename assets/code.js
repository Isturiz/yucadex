var interface = new Interface();
var yukadex = [
  //new Yukamon(name,number,type,hp,level,attack,defense,speed,special,description)
  new Yukamon('Gabo',24,'Unknow',79,21,35,20,70,75,'Bueno en metcon y ecuaciones de segundo grado. No sabe hacer snatch.'),
  new Yukamon('Richard',0,'Unknow',80,20,50,100,20,30,'.'),
  new Yukamon('Mau',23,'Arquitecto',80,20,35,45,60,60,''),
  new Yukamon('Duko',0,'Unknow',79,21,75,60, 55, 10,'El duko '),
  new Yukamon('Juan',9,'Unknow',84,16,40,40,50,70,'Levanta más kilos que tú y ta chikito de paso. Vive lesionado'),
  new Yukamon('Lili',0,'Unknow',0,0,0,0,0,0,'.'),
  //new Yukamon('Butterfree',42,'veneno',120,22,80,60,60,90,'Butterfree bate sus alas para polinizar las plantas. Se le puede encontrar en jardines y macetas.'),
];

for(var yukamon of yukadex)
{
  interface.addYukamonToTheList(yukamon);
}