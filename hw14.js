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
map();
hint();

var i = 0;
for (i = 0; i < 10; i++) {
    if (isFree('east')==true)
        east();
    else
        south();
}

//5level
map();
hint();

var i = 0;
for(i=0; i<10; i++){
	if (isFree('east')==true) 
		east();
	else
		south();
}
for (i=0; i<6; i++){
	if (isFree('west')==true)
		west();
	else
		south();
}
for (i=0; i<10; i++){
	if (isFree('west')==true)
		west();
	else
		north();
}
for (i=0; i<10; i++){
	if (isFree('south')==true)
		south();
	else
		east();
}