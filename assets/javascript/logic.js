$(document).ready(function(){
	var me;
	var opponent;

	//constructor for players
	function Player(Deck, image){
		this.health = 30;
		this.Deck = Deck;
		this.image = image;
		this.hand = [];
		this.field = [];
	}
	//constructor for decks
	function Deck(){
		this.cards = [];

		this.addCard = function(card){
			this.cards.push(card);
		}
		//shuffles cards array
		this.shuffle = function(){
			var currentIndex = this.cards.length, temporaryValue, randomIndex;

			while(0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex --;

				temporaryValue = this.cards[currentIndex];
				this.cards[currentIndex] = this.cards[randomIndex];
				this.cards[randomIndex] = temporaryValue;
			}
			return this;
		}
	}
	//constructor for cards
	function Card(attack, health, name, image, description){
		this.attack = attack;
		this.health = health;
		this.name = name;
		this.image = image;
		this.description = description;

		this.createElement = function(){
			var img = $('<img class="card-image">');
			img.attr('src', this.image);
			
			return img;
		}
	}
	//random integer from start to end.
	function randomNum(start, end){
		return Math.floor(Math.random()*(end-start) + start + 1);
	}
	//data for all cards in the game
	var abradolf = new Card(5, 8, "Abradolf Lincler", "./assets/images/abradolflincler.jpg", "Created by Rick to be the perfect balance of cunning and moral fiber");
	var ants = new Card(5, 3, "Ants In My Eyes Johnson", "./assets/images/antsinmyeyesjohnson.jpg", "I have a very rare condition. I can't feel anything");
	var beth = new Card(5, 3, "Beth Smith", "./assets/images/bethsmith.jpg", "We both know a deer is closer to a horse than you are to a real doctor");
	var bird = new Card(4, 4, "Bird Person", "./assets/images/birdperson.jpg", "Rick's best friend, intergalactic criminal");
	var butter = new Card(2, 12, "Butter Robot", "./assets/images/butterrobot.png", "His purpose is to pass the butter");
	var chair = new Card(7, 9, "Chair Person", "./assets/images/chairperson.png", "I'd like to order one large phone with an extra side of phone");
	var council = new Card(8, 5, "Council of Ricks", "./assets/images/councilofricks.png", "Poor little rickless bastards");
	var cromulon = new Card(10, 2, "Cromulon", "./assets/images/cromulon.png", "Show me what you got. I want to see what you got");
	var eyeholeman = new Card(6, 3, "Eyehole Man", "./assets/images/eyeholeman.jpg", "Get up on out of here with my eye holes");
	var fart = new Card(4, 10, "Fart", "./assets/images/fart.jpg", "Goodbye moonman");
	var gazorpians = new Card(5, 6, "Gazorpians", "./assets/images/gazorpians.png", "I'm here to talk if you need me.");
	var hepatitis = new Card(12, 3, "Hepatitis C", "./assets/images/hepatitisc.png", "I guess they're just cool like that?");
	var ice = new Card(3, 12, "Ice T", "./assets/images/icet.png", "My story begins at the dawn of time in the faraway realm of Alphabetrium");
	var jan = new Card(6, 6, "Jan Michael Vincent", "./assets/images/janmichaelvincent.jpg", "We need a god-damn Jan Michael Vincent out here!");
	var jerry = new Card(4, 4, "Jerry Smith", "./assets/images/jerrysmith.png", "Life is effort and I'll stop when I die");
	var bits = new Card(5, 3, "Lil' Bits", "./assets/images/lilbits.jpg", "We got tiny lasagna, tiny pizza, tiny pie, mmmm... little tiny fried eggs");
	var seed = new Card(12, 1, "Mega Seeds", "./assets/images/megaseed.png", "They're incr*eee*dibly powerful, Morty");
	var mortyjr = new Card(5, 8, "Morty Jr.", "./assets/images/mortyjunior.jpg", "Daddy, can I go outside? That's where all the people and animals are");
	var meeseeks = new Card(5, 8, "Mr. Meeseeks", "./assets/images/mrmeeseeks.jpg", "I'm Mr. Meeeeseeeeks");
	var butt = new Card(3, 10, "Mr. Poopybutthole", "./assets/images/mrpoopybutthole.jpg", "Ooooh weee! This little poopy pants is huuuungry");
	var pencilvester = new Card(4, 9, "Pencilvester", "./assets/images/pencilvester.jpg", "Nobody's perfect rick. Why do you think they gave me one of these?");
	var personalspace = new Card(2, 11, "Personal Space Show", "./assets/images/personalspace.jpg", "1: Personal Space! 2: Personal Space! 3: Stay out of my Personal Space...");
	var plumbus = new Card(7, 7, "Plumbus", "./assets/images/plumbus.jpg", "I always wondered how plumbuses got made");
	var powerarmor = new Card(5, 8, "Purging with Power Armor", "./assets/images/powerarmor.jpg", "It feels good.");
	var gearhead = new Card(3, 5, "Revolio Gearhead Clockberg Jr.", "./assets/images/revoliogearheadclockbergjr.jpg", "What they don't teach you is that the gear wars were never about gears at all");
	var scaryterry = new Card(5, 3, "Scary Terry", "./assets/images/scaryterry.png", "You can run, but you can't hide!");
	var snowball = new Card(8, 4, "Snowball", "./assets/images/snowball.jpg", "My name is now snowball, as my fur is pretty, and white.");
	var stealy = new Card(5, 6, "Stealy", "./assets/images/stealy.jpg", "We got a bag of bobbish. Thats eight grapples");
	var summer = new Card(4, 9, "Summer Smith", "./assets/images/summersmith.jpg", "What teenage girl has pictures of her family. It's not like we're Mormon or dying");
	var zeep = new Card(7, 7, "Zeep Xanflorp", "./assets/images/zeepxanflorp.jpg", "Eek barba durkel, somebody's gonna get laid in college");

	// cards divided between two decks
	var deckOne = new Deck();
	var deckTwo = new Deck();
	deckOne.addCard(abradolf);
	deckTwo.addCard(ants);
	deckOne.addCard(beth);
	deckTwo.addCard(bird);
	deckOne.addCard(butter);
	deckTwo.addCard(chair);
	deckOne.addCard(council);
	deckTwo.addCard(cromulon);
	deckOne.addCard(eyeholeman);
	deckTwo.addCard(fart);
	deckOne.addCard(gazorpians);
	deckTwo.addCard(hepatitis);
	deckOne.addCard(ice);
	deckTwo.addCard(jan);
	deckOne.addCard(jerry);
	deckTwo.addCard(bits);
	deckOne.addCard(seed);
	deckTwo.addCard(mortyjr);
	deckOne.addCard(meeseeks);
	deckTwo.addCard(butt);
	deckOne.addCard(pencilvester);
	deckTwo.addCard(personalspace);
	deckOne.addCard(powerarmor);
	deckTwo.addCard(plumbus);
	deckOne.addCard(gearhead);
	deckTwo.addCard(scaryterry);
	deckOne.addCard(snowball);
	deckTwo.addCard(stealy);
	deckOne.addCard(summer);
	deckTwo.addCard(zeep);


	//shuffling and assigning decks to different players
	var rick = new Player(deckOne.shuffle(), "ricksanchez.png");
	var morty = new Player(deckTwo.shuffle(), "mortysmith.png");
	//user chooses player
	console.log(rick, morty);

	var choice = confirm("Press OK for Rick, Press Cancel for morty");
	if(choice){
		me = rick;
		opponent = morty;
	}else{
		me = morty;
		opponent = rick;
	}
	//each hand drawn from new deck
	for(var i = 3; i>=0; i--){
		//console.log(me.Deck.cards);
		var card = me.Deck.cards.pop();
		me.hand.push(card);
		opponent.hand.push(opponent.Deck.cards.pop());
	}

	var handElements = [null, null, null, null];
	var fieldElements = [null, null, null, null];
	var opponentElements = [null, null, null, null];


	//graps all visible card slots on table w/ jquery selectors.
	handElements[0] = $("#hand-1");
	handElements[1] = $("#hand-2");
	handElements[2] = $("#hand-3");
	handElements[3] = $("#hand-4");

	fieldElements[0] = $("#field-1");
	fieldElements[1] = $("#field-2");
	fieldElements[2] = $("#field-3");
	fieldElements[3] = $("#field-4");

	opponentElements[0] = $("#opponent-1");
	opponentElements[1] = $("#opponent-2");
	opponentElements[2] = $("#opponent-3");
	opponentElements[3] = $("#opponent-4");

	
	display();
	myPlace();
	


	function displayHand(){
		for(var i = 0; i<4; i++){
			handElements[i].empty();
			var background = $('<div class="background">');
			if(me.hand[i] !== null && me.hand[i] !== undefined){
				background.append(me.hand[i].createElement());
				var overlay = $('<div class="overlay">');
				overlay.html('<h4>' + me.hand[i].name + '</h4> <p>Health: ' +me.hand[i].health + ' Attack: ' + me.hand[i].attack + '</p>');
				background.append(overlay);
			}else{
				var overlay = $('<div class="placeholder">');
				overlay.html('<h4>My Hand</h4>');
				background.append(overlay);
			}
			handElements[i].append(background);
		}
	}

	function displayField(){
		for(var i = 0; i<4; i++){
			fieldElements[i].empty();
			var background = $('<div class="background">');
			console.log(me.field[i]);
			if(me.field[i] !== null && me.field[i] !== undefined){
				background.append(me.field[i].createElement());
				var overlay = $('<div class="overlay">');
				overlay.html('<h4>' + me.field[i].name + '</h4> <p>Health: ' + me.field[i].health + ' Attack: ' + me.field[i].attack + '</p>');
				background.append(overlay);
			}else{
				var overlay = $('<div class="placeholder">');
				overlay.html('<h4>My Field</h4>');
				background.append(overlay);
				console.log("yaddayadda", me.field[i]);
			}
			fieldElements[i].append(background);
		}
	}

	function displayOpponent(){
		for(var i = 0; i<4; i++){
			opponentElements[i].empty();
			var background = $('<div class="background">');
			if(opponent.field[i] !== null && opponent.field[i] !== undefined){
				background.append(opponent.field[i].createElement());
				var overlay = $('<div class="overlay">');
				overlay.html('<h4>' + opponent.field[i].name + '</h4> <p>Health: ' + opponent.field[i].health + ' Attack: ' + opponent.field[i].attack + '</p>');
				background.append(overlay);
			}else{
				var overlay = $('<div class="placeholder">');
				overlay.html('<h4>Opponent Field</h4>');
				background.append(overlay);
			}
			opponentElements[i].append(background);
		}
	}

	function display(){
		displayField();
		displayOpponent();
		displayHand();
	}


	function onGameWin(){
		alert("You win! You had " + me.health + " health remaining!");
	}

	function onGameLose(){
		alert("You lose! Your opponent had " + opponent.health + " health remaining!");
	}

	function myPlace(){
		for(var i = 0; i<4; i++){
			$("#hand-" + (i + 1) + " .background").draggable({revert: "invalid", snap: "ui-widget-header"});
			fieldElements[i].droppable({
				classes:{
					"ui-droppable-active": "ui-state-active",
					"ui-droppable-hover": "ui-state-hover"
				},

				drop: function(event, ui){
					$(ui.draggable).draggable('disable');
					$(ui.draggable).appendTo(fieldElements[i]);
					var id = $(ui.draggable)[0];
					var num = parseInt(id.parentNode.id.split("-")[1]) - 1;
					var currentCard = me.hand.splice(num,1);
					me.field[i] = currentCard;
					console.log(JSON.stringify(me.field[i]));
					display();
					myAttack();
				}
			});
		}
	}

	function opponentPlace(){	

		opponentAttack();

	}

	function myAttack(){
		for(var i = 0; i<4; i++){
			var myCard = me.field[i];
			var opponentCard = opponent.field[i];
			if(myCard !== null && myCard !== undefined){
				var position = myCard.offset();
				myAnimation(position.left, position.top);
				setTimeOut(myAnimation(position.left, position.top),300);
				setTimeOut(myAnimation(position.left, position.top),300);
				if(opponentCard != null){
					opponentCard.health -= myCard.attack;
					if(opponentCard.health <= 0){
						opponent.health += opponentCard.health;
						opponent.field[i] = null;
					}
				}else{
					opponent.health -= myCard.attack;
				}
			}
		}
		opponentPlace();
	}

	function opponentAttack(){
		for(var i = 0; i<4; i++){
			var myCard = me.field[i];
			var opponentCard = opponent.field[i];
			if(opponentCard != null){
				var position = opponentCard.offset();
				myAnimation(position.left, position.top);
				setTimeOut(myAnimation(position.left, position.top),300);
				setTimeOut(myAnimation(position.left, position.top),300);
				if(myCard != null){
					myCard.health -= opponentCard.attack;
					if(myCard.health <= 0){
						me.health += myCard.health;
						me.field[i] = null;
					}
				}else{
					me.health -= opponentCard.attack;
				}
			}
		}

		myPlace();	
	}

	function myAnimation(x, y){
		colorMode(RGB);
  		background(0, 0, 0, 25);
  		var mySwirl = new Swirly(x, y);
  		fireworks.push(mySwirl);
	}
});












