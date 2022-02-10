var interface = new Interface();
var pokedex = [
  //new Pokemon(name,number,type,hp,level,attack,defense,speed,special,description)
  new Pokemon('Gabo',24,'Bruja',79,21,35,20,70,75,'Bueno en metcon y ecuaciones de segundo grado. No sabe hacer snatch.'),
  new Pokemon('Richard',0,'tierra',0,0,0,0,0,0,'Diglet es de naturaleza amigable y siempre se le ve rodeado de su manada. Tiene un periodo de hibernación de 3 meses en invierno.'),
  new Pokemon('Mau',23,'legendario',0,20,0,0,0,0,'No tenemos información de este Pokemon'),
  new Pokemon('Duko',6,'bicho',0,21,0,0,0,0,'El duko '),
  new Pokemon('Juan',1,'Unknow',84,16,40,40,50,70,'Levanta más kilos que tú y ta chikito de paso. Vive lesionado'),
  new Pokemon('Lili',0,'planta',0,0,0,0,0,0,'Odish tiene hojas que expelen un aroma lacrimógeno. Debe de tratárselo con cautela.'),
  //new Pokemon('Butterfree',42,'veneno',120,22,80,60,60,90,'Butterfree bate sus alas para polinizar las plantas. Se le puede encontrar en jardines y macetas.'),
];

for(var pokemon of pokedex)
{
  interface.addPokemonToTheList(pokemon);
}