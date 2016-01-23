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

if (isFree('south')==true) {
	south();
} 
else {
	east();
}

var i = 0;
for (i = 0; i < 10; i++) {
    if (isFree('east')==true)
        east();
    else
        south();
}

//5level