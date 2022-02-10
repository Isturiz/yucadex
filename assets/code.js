var interface = new Interface();
var pokedex = [
  //new Pokemon(name,number,type,hp,level,attack,defense,speed,special,description)
  new Pokemon('Gabo',24,'Unknow',79,21,35,20,70,75,'Bueno en metcon y ecuaciones de segundo grado. No sabe hacer snatch.'),
  new Pokemon('Richard',0,'Unknow',80,20,50,100,20,30,'.'),
  new Pokemon('Mau',23,'Arquitecto',80,20,35,45,60,60,''),
  new Pokemon('Duko',0,'Unknow',79,21,75,60, 55, 10,'El duko '),
  new Pokemon('Juan',9,'Unknow',84,16,40,40,50,70,'Levanta más kilos que tú y ta chikito de paso. Vive lesionado'),
  new Pokemon('Lili',0,'Unknow',0,0,0,0,0,0,'.'),
  //new Pokemon('Butterfree',42,'veneno',120,22,80,60,60,90,'Butterfree bate sus alas para polinizar las plantas. Se le puede encontrar en jardines y macetas.'),
];

for(var pokemon of pokedex)
{
  interface.addPokemonToTheList(pokemon);
}