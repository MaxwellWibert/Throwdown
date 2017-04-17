function Player(Deck){
	this.health = 30;
	this.Deck = Deck;
}

function Deck(){
	this.cards = [];

	this.addCard = function(card){
		this.cards.push(card);
	}
}

function Card(attack, health, name, image, description){
	this.attack = attack;
	this.health = health;
	this.name = name;
	this.image = image;
	this.description = description;
}

//all cards in the game
var abradolf = new card(5, 8, "Abradolf Lincler", "./assets.images.abradolflincler.jpg", "Created by Rick to be the perfect balance of evil and honest");
var ants = new card(5, 3, "Ants In My Eyes Johnson", "./assets.images.antsinmyeyesjohnson.jpg", "I have a very rare condition. I can't feel anything");
var beth = new card(5, 3, "Beth Smith", "./assets.images.bethsmith.jpg", "We both know a deer is closer to a horse than you are to a real doctor");
var bird = new card(4, 4, "Bird Person", "./assets.images.birdperson.jpg", "Rick's best friend, intergalactic criminal");
var butter = new card(2, 12, "Butter Robot", "./assets.images.butterrobot.png", "His purpose is to pass the butter");
var chair = new new card(7, 9, "Chair Person", "./assets.images.chairperson.jpg", "I'd like to order one large phone with an extra side of phone");
var council = new card(8, 5, "Council of Ricks", "./assets.images.councilofricks.jpg", "Poor little rickless bastards");
var cromulon = new card(10, 2, "Cromulon", "./assets.images.cromulon.jpg", "Show me what you got. I want to see what you got");
var eyeholeman = new card(6, 3, "Eyehole Man", "./assets.images.eyeholeman.jpg", "Get up on out of here with my eye holes");
var fart = new card(4, 10, "Fart", "./assets.images.fart.jpg", "Goodbye moonman");
var gazorpians = new card(5, 6, "Gazorpians", "./assets.images.gazorpians.jpg", "I'm here to talk if you need me.");
var hepatitis = new card(12, 3, "Hepatitis C", "./assets.images.hepatitisc.png", "I guess they're just cool like that?");
var ice = new card(3, 12, "Ice T", "./assets.images.icet.png", "My story begins at the dawn of time in the faraway realm of Alphabetrium");
var jan = new card(6, 6, "Jan Michael Vincent", "./assets.images.janmichaelvincent.jpg", "We need a god-damn Jan Michael Vincent out here!");
var jerry = new card(4, 4, "Jerry Smith", "./assets.images.jerrysmith.png", "Life is effort and I'll stop when I die");
var bits = new card(5, 3, "Lil' Bits", "./assets.images.lilbits.jpg", "We got tiny lasagna, tiny pizza, tiny pie, mmmm... little tiny fried eggs");
var seed = new card(12, 1, "Mega Seeds", "./assets.images.megaseed.png", "They're incr*eee*dibly powerful, Morty");
var mortyjr = new card(5, 8, "Morty Jr.", "./assets.images.mortyjunior.jpg", "Daddy, can I go outside? That's where all the people and animals are");
var meeseeks = new card(5, 8, "Mr. Meeseeks", "./assets.images.mrmeeseeks.jpg", "I'm Mr. Meeeeseeeeks");
var butt = new card(3, 10, "Mr. Poopybutthole", "./assets.images.mrpoopybutthole.jpg", "Ooooh weee! This little poopy pants is huuuungry");
var pencilvester = new card(4, 9, "Pencilvester", "./assets.images.pencilvester.jpg", "Nobody's perfect rick. Why do you think they gave me one of these?");
var personalspace = new card(2, 11, "Personal Space Show", "./assets.images.personalspace.jpg", "1: Personal Space! 2: Personal Space! 3: Stay out of my Personal Space...");
var plumbus = new card(7, 7, "Plumbus", "./assets.images.plumbus.jpg", "I always wondered how plumbuses got made");
var powerarmor = new card(5, 8, "Purging with Power Armor", "./assets.images.powerarmor.jpg", "It feels good.");
var gearhead = new card(3, 5, "Revolio Gearhead Clockberg Jr.", "./assets.images.revoliogearheadclockbergjr.jpg", "What they don't teach you is that the gear wars were never about gears at all");
var scaryterry = new card(5, 3, "Scary Terry", "./assets.images.scaryterry.png", "You can run, but you can't hide!");
var snowball = new card(8, 4, "Snowball", "./assets.images.snowball.jpg", "My name is now snowball, as my fur is pretty, and white.");
var stealy = new card(5, 6, "Stealy", "./assets.images.stealy.jpg", "We got a bag of bobbish. Thats eight grapples");
var summer = new card(4, 9, "Summer Smith", "./assets.images.summersmith.jpg", "What teenage girl has pictures of her family. It's not like we're Mormon or dying");
var zeep = new card(7, 7, "Zeep Xanflorp", "./assets.images.zeepxanflorp.jpg", "Eek barba durkel, somebody's gonna get laid in college");