//1level
help();
map();
legend();
north();
north();

//2level
map();
hint();
hint();
//command test
isFree('east');

while (east() ==true) { east(); }

//3level
map();
hint();
isFree('south');
//command test! Never use do-while loop!!!!!!!!!!!!!! Never!!!!!!!

//command test2
if (isFree('south')==true) {
	south();
} 
else {
	east();
}

map();


//4level

//5level