// let students=[];
// let teacher =new Array();

let students = [    "steven",
                    "jennifer",
                    "hugh",
                    "jay",
                    "Sharon",
                    "Delia",
                    "Eliliott"
];
students[5]= "Della";
students.pop();
console.log(students);
document.getElementById("output").innerHTML= students[5];

console.log(students.length);

let loopCounter = 0;
while (loopCounter < students.length){
    document.getElementById("output").innerHTML += students[loopCounter] + "<br/>";
    loopCounter ++;
}

let grades = [75, 88, 49, 46, 79, 48, 97, 85, 100];
grades.push(90);
grades.push(100);
for(let x =0; x<grades.length; x++){
    total =total =grades[x];
}  
document.getElementById("output").innerHTML+= Math.round(total/grades.length);


