var m = parseInt(prompt('Пополнить счет на:'));
var money = document.getElementById('money');
money.innerHTML = m;

console.log('Внесено денег: ',m);
var stavka = document.querySelector('#stavka');
var s = parseInt(prompt('Укажите ставку:'));
stavka.innerHTML = s;
console.log('Ставка: ',s);

var img = new Array('fish.gif','octopus.gif','pearl.gif','shark.gif','shell.gif','star-magenta.gif','star-red.gif');
var krut = document.querySelector('.krut');
var f1 = document.querySelector('.f1 img');
var f2 = document.querySelector('.f2 img');
var f3 = document.querySelector('.f3 img');
var prize = document.querySelector('#prize');

krut.addEventListener('click', function(e){
	e.preventDefault();
	if(m>s) {
		var f1_random = Math.round(Math.random()*6);
	var f2_random = Math.round(Math.random()*6);
	var f3_random = Math.round(Math.random()*6);
	f1.setAttribute('src', 'images/'+img[f1_random]+'');
	f2.setAttribute('src', 'images/'+img[f2_random]+'');
	f3.setAttribute('src', 'images/'+img[f3_random]+'');
	if(f1_random==0&&f2_random==0&&f3_random==0){
		prize.innerHTML = 'Выигрыш 40 к 1';
		m+=s*40;
		money.innerHTML = m;
		console.log(m);
	} else {
		if(f1_random==1&&f2_random==1&&f3_random==1) {
			prize.innerHTML = 'Выигрыш 80 к 1';
			m+=s*80;
			money.innerHTML = m;
			console.log(m);
		} else {
			if(f1_random==2&&f2_random==2&&f3_random==2) {
				prize.innerHTML = 'Выигрыш 800 к 1';
				m+=s*800;
				money.innerHTML = m;
				console.log(m);
			} else {
 				if(f1_random==3&&f2_random==3&&f3_random==3) {
					prize.innerHTML = 'Выигрыш 200 к 1';
					m+=s*200;
					money.innerHTML = m;
					console.log(m);
				} else {
					 if(f1_random==4&&f2_random==4&&f3_random==4) {
						prize.innerHTML = 'Выигрыш 20 к 1';
						m+=s*800;
						money.innerHTML = m;
						console.log(m);
					} else {
						} if(f1_random==5&&f2_random==5&&f3_random==5||f1_random==6&&f2_random==6&&f3_random==6) {
							prize.innerHTML = 'Выигрыш 10 к 1';
							m+=s*10;
							money.innerHTML = m;
							console.log(m);
		
						} else {
							if(f1_random==5&&f2_random==5||f1_random==6&&f2_random==6||f1_random==5&&f2_random==6||f1_random==6&&f2_random==5||f2_random==5&&f3_random==5||f2_random==6&&f3_random==6||f2_random==5&&f3_random==6||f2_random==6&&f3_random==5||f1_random==5&&f3_random==5||f1_random==6&&f3_random==6||f1_random==5&&f3_random==6||f1_random==6&&f3_random==5) {
								prize.innerHTML = 'Выигрыш 5 к 1';
								m+=s*5;
								money.innerHTML = m;
								console.log(m);
							} else {
								if(f1_random==5||f2_random==5||f3_random==5||f1_random==6||f2_random==6||f3_random==6) {
								prize.innerHTML = 'Выигрыш 2 к 1';
								m+=s*2;
								money.innerHTML = m;
								console.log(m);	
								} else {
									m-=s;
									money.innerHTML = m;
									prize.innerHTML = 'Ничего';
								}
							} 
						}
					}
				}
			}
		}
	} else {
		m += parseInt(prompt('Недостаточно средств, пополните счет\nПополнить на:'));
		money.innerHTML = m;
	}
});