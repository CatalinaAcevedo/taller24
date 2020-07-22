var number = 0;
while (number < 2 || number >10){
    number = number(prompt('Elija un numero entre el 2 y el 10'));
}

van index = 1;
while (index <=10){
    console.log(number + " * " + index + " = " + number * index);
    index++
}