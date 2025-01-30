// var nam = "AMJLT Cyber School"

// if(true){
//     var nam = "Aziz"
//     console.log(nam); //Aziz
// }
// console.log(nam); 

// var nam = "Maga"
// console.log(nam);

// let name = "Dedpool"
// if(true){
//     let name = "AMJ"
//     console.log(name);
// }

// console.log("жалпы аты " + name);

// const text = "Efrat"

// console.log(" Menin atym" + text);
// console.log("my name is" + text);

// let age = 5
// let age2 = 20
// console.log(age + age2);

// var name = "AMJLT cyber school"
// console.log( name)

// var name = "Aziz"
// let age = "200"
// console.log(  age)

// const birthYear = 2010;










// косу

// let a = 5, b = 3;
// sum = a+b

// let z = 50
// let y = 7

// z++; // z=z+1 
// z--; // z=z-1 

// z+=2 // z=z+2 
// z-=5 // z=z-5 
// z*=5 // z=z*5  
// z/=5 // z=z/5 
// z%=5 // z=z%5 
// console.log(" z *  y = " + (z+y));

// console.log(" a * b = " + (sum));

// console.log(" z % y = " + (z%y));

// var num = prompt("Введите  число:")

// var a = num * num

// var b = alert("Ваше число:" + a) 

// var num = prompt("Введите первое число:")
// var num2 = prompt("Введите второе число:")
// var a = num * num2
// var b = (+num + +num2) * 2;
// alert("Ауданы:"+ a + '\n' + "Периметры:" + b )





// Week10 day1

// let a = 5, b = 10 
// console.log(a==b);  //folse
// console.log(a!=b);  //true
// console.log(a<=b);  //true
// console.log(a>=b);  //folse
// console.log(( a >= b ) && ( a = b )); //folse
// console.log(( a < b) || ( a > b ));  //true
// console.log(( a <= b) && ( a < b));  //true
// console.log(( a >= b) || ( a > b));  //folse

// let isAlan = true
// let isBeka = true
// console.log(!isAlan);
// if(!isAlan){
//     console.log("Sizge mektep kabyrgasyna kiruge bolmaidy");
// }
// else if(isAlan){
//     console.log("Sizge kiruge ruksat");  
// }


// let age2 = 20, bilet = true, isVip = false;
// if((age2>=18 && bilet) || isVip){
//     console.log("sizge kiruge bolady");
   
// }
// else{
//     console.log("sizge kiruge tyiym salynady");
// }


// let age = 30

// if(age>12 && age<45){
//     console.log("true");
// }
// else{
//     console.log("false");
    
// }

// let n = 21
// alert((n>20) && (n<50) && (n % 2==0))

// Калькулятор

// var num1 = prompt("Birinshi sandy engiziniz")

// var num2 = prompt("Ekinshi sandy engiziniz")

 


// week 10 day 3



// let score = +prompt("Bagany zhaz")

// if(score>=90 && score<=100){
//     alert(" sizdin baqanyz: A")
// }else if(score>=80 && score<90 ){
//     alert(" sizdin baqanyz: B")
// }else if(score>=70 && score<=80){
//     alert(" sizdin baqanyz: C")
// }else if(score>=50 && score<70 ){
//     alert(" sizdin baqanyz: D")
// }else{
//     alert("siz qaita tapsyruqa qaldynyz")
// }




// let score = prompt("burger turin tandanyz chizburger/gumburger/ dvoinoi chizburger")
// let baga = 0
// if(score == "chizburger"){
//     baga = 1090
// }else if(score == "gumburger"){
//     baga = 1190
// }else if(score == " dvoinoi chizburger"){
//     baga = 1490
// }

// alert("sizdin zakazynyz qabyldandy" + '\n'+ "burger turi " + '\n'  + score + '\n' + "Summasy:" + baga + "tg" )

// let san = prompt("1-3 deyin sandy engiz")

// switch(san){
//     case "1":
//         alert("siz 1 degen sandy engizdiniz")
//         break;
//     case "2":
//         alert("siz 2 degen sandy engizdiniz")
//         break;
//     case "3":
//         alert("siz 3 degen sandy engizdiniz")
//         break;
//     default:
//         alert("siz qate terdiniz. Qaitra engizuinizdi otinemin")
// }



// let pay = prompt("сусын Таңдаңыз: kofe, chai, su")
// let qospa;

// switch(pay){
//     case "kofe":
//         let turi = prompt("Kandai sirop tandaisyz (Karamel/Molochnyi/Latte)")
//         switch(turi){
//             case "Karamel":
//                 qospa = "Karamel"
//                 break;
//             case "molochnyi":
//                 qospa = "Molochnyi"
//                 break;
//             case "Latte":
//                 qospa = "Latte"
//                 break;
//             default: 
//                 alert("Bizde ondai kofe turi zhoq")
//         }
//         break;
//     case "chai":
//         let dami = prompt("Kandai chai tandaisyz tandaisyz")
//         switch(dami){
//             case "Kok":
//                 qospa = "Kok"
//                 break;
//             case "Sut":
//                 qospa = "Sut"
//                 break;
//             case "Qara":
//                 qospa = "Qara"
//                 break;
//             default: 
//                 alert("Bizde ondai kofe turi zhoq")
//         }
//         break;
//     case "su":
//         alert("Siz  su tandadynyz")
//         break;
//     default:
//         alert("siz qate terdiniz. Qaitra engizuinizdi otinemin")
// }

// alert("Sizdin tandauynyz" + pay + '\n' + "Turi" + qospa)





// let score = prompt("burger turin tandanyz chizburger/gumburger/ dvoinoi chizburger")
// let baga = 0
// switch(score){
//     case "chizburger":
//         var chis = +prompt("Qansha burger alasyz")
//         baga = 1090 * chis 
//         break;
//     case "gumburger":
//         var chis = +prompt("Qansha burger alasyz")
//         baga = 1190 * chis 
//         break;
//     case "dvoinoi chizburger":
//         var chis = +prompt("Qansha burger alasyz")
//         baga = 1490 * chis 
//         break;
//     default:
//         alert("Bizde bundai burger turi zhoq")
// }

// alert("sizdin zakazynyz qabyldandy" + '\n'+ "burger turi " + score + '\n' + "Summasy:" + baga + "tg" )









// loops

// for(let i = 1; i<=20; i++){
//     if(i % 2 !== 0){
//         console.log(i + " - taq");
//     }else {
//     }
    
// }


// for(let i  = 1; i < 10 ; i++ ){
//     if(i==5){
//         console.log(i);  
//         break;
//     }
//     console.log(i);
    
// }

// for(let i = 10; i >= 0 ; i-- ){
//     if(i == 5 || i == 6){
//         continue;
//     }
//     console.log(i);
// }

// for(let i  = 1; i <= 50 ; i++ ){
//     if(i)
//     console.log(i);
    
// }




// while


// let i = 0;
// while(i < 5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// let i = 0;

// while(i < 10){
//     if(i == 5){
//         console.log(" Цикл токтатылды сан табылды:" + i);
//         break;
//     }
//     console.log(i);
//     i++;
// }



// let num = +prompt("Kez kelgen san engiz")

// let sum = 0;
// let i = 1;
// while (i <= num){ 
//     sum = sum + i;
//     i++;
  
// }
//  alert(num + " deuingi sandardyn qosyndysy" + sum);   


// let mumkindik = 3

// while(mumkindik>0){
//     let zhyl = prompt("Qazaq khandygy kashan quryldy")
//     if(zhyl== "1465"){
//         alert("siz durys zhauap berdiniz")
//         break
//     }else{
//         mumkindik--;
//         if(mumkindik>0){
//             alert("Sizde qalgan mumkindik sany" + mumkindik + '\n' +  "qaita bagyndy synap koriniz")
        
//         }else{
//             alert("Sizde mumkindik qalmady, tarih oqy ")
//         }
//     }
// }

// let i = 1;
// let taq = 0
// while(i <= 20){
//     if(i % 2 !== 0){
//         taq = taq +i
//         console.log(`jup sandar qosyndysy ${i} interatsia qosyndysy ${taq}`);
        
//     }
//     i++;
    
// }
// console.log("taq sandardyn qosyndysy" + taq);



// let san = prompt("san engizini")
// let i = 1
// while(i <= san){
//     if(i % 3==0 && i % 5==0){
//         console.log(` ${i}fizzBuzz`);
//     }else if(i % 3==0){
//         console.log(`${i} fizz`);
//     }else if(i % 5==0){
//         console.log(`${i} Buzz`);
//     }
//     i++;
// }


// let i = 0

// while(i <= 30){
//     console.log(i);
//     i+=3;
// }


// let i = 50

// while(i >= 0){
//     console.log(i);
//     i-=5;
// }


// let san = +prompt("san zhazynyz")
// let i = 1
// let sum = 1
// while(i <= san){
    
//     sum = sum * i
//     i++;
// }
// alert(sum)

// function salember(habarlama, san){
//     alert(habarlama)
//     console.log(san);
    
// }

// salember("hello world", 5);

// let qosasyn = function (number1, number2) {
//     return number1 + number2
// }

// let kobeitu = qosuamaly(3,5) * azaituamaly(5,3) * qosasyn(8,5)
// alert(kobeitu)

// function qosuamaly(san1, san2){
//     console.log(san1 +san2);
//     return san1 + san2
// }

// function azaituamaly(num1, num2) {
//     return num1 - num2
    
// }
// let azaitu =  function(san1, san2) {
//     console.log(`eki sannyn azaityndysy  ${san1 - san2}`);
//     return san1 - san2
// }

// let natizhe = qosu(10,5) + azaitu(6,3) + bolu(4,2)

// function qosu(san1, san2) {
//     console.log(`Eki sannyn qosyndysy ${san1 + san2}`);
//     return san1 + san2
// }

// function bolu(san1, san2) {
//     console.log(`eki sannyn bolindisi ${san1 / san2}`);
//     return san1 / san2
// }

// alert(natizhe)


// let aty = prompt("Atynyz")

// function atynyz(esimi) {
//     return 'salem ' + esimi
// }

// alert(atynyz(aty))


// let san1 = prompt(" Birinsh sandy zhazynyz" )
// let san2 = prompt(" Ekinshi sandy zhazynyz" )
// let san3 = prompt(" ushinshi sandy zhazynyz" )
// function sandar(san1,san2,san3) {
//     return san1 * san2 * san3;
// }

// alert(sandar(san1,san2,san3))





// function bolu(san1, san2){
//     return san1 / san2
// }

// let bolingenMan = bolu(15, 5) //15/5=3

// console.log(bolingenMan);

// function kobeitu(san1, san2) {
//     return san1 * san2
// }

// let kobeituAmaly = kobeitu(bolu(15,5), 2) //3*2=6

// console.log(kobeituAmaly);


// let qosu = (san1, san2) => san1 + san2;
// console.log(qosu(3,5)); //8



// function qosu(san1, san2) {
//     return san1 + san2
// }

// function azaitu(san1, san2) {
//     return san1 - san2
// }

// function kobeitu(san1, san2) {
//     return san1 * san2
// }

// let qosuAmaly = qosu(4,5) // 4+5=9

// let azaituAmaly = azaitu(10,7) // 10-7=3

// let kobeituAmaly = kobeitu(qosuAmaly,azaituAmaly)  //9*3=27

// console.log(kobeituAmaly);


// let aksha = +prompt("Aksha engiz")
// let valut = prompt("Valuta engiz")

// function aqsha(aksha, valut) {
//     if(valut == "dollar"){
//         console.log(aksha * 500);
//         return aksha * 500
//     }else if(valut == "euro"){
//         console.log(aksha * 550);
//         return aksha * 550
//     }else if(valut == "rubl"){
//         console.log(aksha * 6);
//         return aksha * 6
//     }else if(valut == "tenge"){
//         console.log(aksha * 1);
//         return aksha * 1
//     }else{
//         console.log("Durys valuta engiziniz");
//     }
// }
// let convert = aqsha(aksha,valut)
// alert(aksha + valut + "=" + aqsha(aksha, valut) + "Tenge");



// let san = +prompt("san engiz")

    
// function convertfuktorial(sam) {
    
//     if(san > 1){
//         let sam = 1;
//         let i = 2;
//         while (i <= san){ 
//         sum = sum * i;
//         i++;
//     }
//     }else if(san < 0){
//         alert("siz teris sandy engizdiniz")
//     }else{
//         return 1
//     }
// }

// alert(`${san} factorialy = ${convertfuktorial(san)}`)





// document.getElementById("give-alert").addEventListener("click",function(){
//     alert("Qalai zhagdai baurym")

// })

// let kosu = (a,b) => a+b
// console.log(kosu(4,6));

// let findlength =(text) => text.length;
// console.log(findlength("hello world"));

// let compareScores = (score1,score2) => {
//     if(score1 > score2){
//         return "birinshi student zhogary baga aldy"
//     }else{
//         return "Ekinshi student zhogary baga aldy"
//     }
// };
// console.log(compareScores(85 , 90));


// let bagasy = 0
// let tagam;
// let sum = 0
// function tovar() {
//     let i = 1
//     while(true){
//         let name = prompt(i + "shygyn nomerinin aty")
//         if(name.toLowerCase() == "Toqtatu"){
//             console.log(`shygyn nomeri #${i}: toqtatu`);  
//             console.log(`ketken summa: ${sum}`);
//             console.log(`en qymbat shygyn: ${tagam}`);
//             break;
//         }else{
//             let shygynBaga = +prompt(i + "-shygyn nomerinin bagasy")
//             console.log(`shygyb nomeri #${i}: ${name} ${shygynBaga}`);
//             sum = sum + shygynBaga;
            // if(max < shygynBaga){
            //     max = shygynBaga;
            //     tagam = name;
            // }   
//         }
//         i++;
//     }
// }
// tovar();



// tap

// let student;
// let upai = 0
// function test() {
//     let i = 1;
//     while (true) {
//         let name = prompt(i + "Studenttin atyn zhazynyz")
//             if(name.toLowerCase() =="stop" ){
//                 alert(`en kop bal zhinagan studet ${student} ${upai} bal`)
                
//                 break;
//             }else{
//                 let bal = +prompt("oqushynyn zhinagan baly")
//                  if(bal < 0 || bal > 100){
//                 alert(`Qate: bal 0-100 aralygynda bolu kerek 
//                 qaita engizuinizdi suraimyz`)
//                 continue;
//                 }
//                 if(upai<bal){
//                     upai=bal
//                     student = name
//                 }
//             }   
//         i++;
//     }
// }

// test()


// document.getElementById("give").addEventListener("click",function(){
//     alert("Shukir zhaqsymyn")
// })


// function san(){ 
//     let san1 = +prompt("birinshi sandy zhazynyz") 
//     let san2 = +prompt("ekinsi sandy engiz") 
//         for(let i = san1; i<=san2; ){ 
//             if(san2 > san1){
//                 console.log("sandar qarama qaishy");
//             }else{
//                 console.log(i); 
//                 i++;
//             }  
//         }        
// }
// san()


// Array

// let azyqTulik =["Banan", "Alma", "Shie", "Mango", 3 ,8]

// console.log(azyqTulik);
// console.log(azyqTulik[2]);//shie
// console.log(azyqTulik[1]); // Alma
// console.log(azyqTulik[0]); // Banan

// azyqTulik[1] = "Ananas"
// azyqTulik[6] = "Aziz"
// azyqTulik[4] = "Ysh"

// console.log(azyqTulik);


// let fruits = ["alma", "Banan " , "Shie"]

// fruits[3] = "Apelsin"

// console.log(fruits);

// fruits[1] = "Mango"
// console.log(fruits);

// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }



// let num = +prompt("Kez kelgen san engiz")
// let arr = []
// let i = 0;
// while (i < num){ 
//     let end = +prompt( i + `index san zhaz`)
//     i++;
//     arr[i] = end
// } 

// console.log(arr);




// let array = ["Amjlt", "Aziz", 2025]

// console.log(array);

// array.push("Marker" , 5) // "Push" - Массив сонына элементтер косады

// let popElement = array.pop() // "pop" - массивтын сонгы турган элементын алып тастайды
// console.log("songy Alyp tastalyngan element - " + popElement);
// console.log(array);

// let shiftedElement = array.shift() // "shift" - Birinshi turgan elemetti alyp tastaidy
// console.log("Birinshi  Alyp tastalyngan element - " + shiftedElement);
// console.log(array);

// // Unshift() - Massivtin basyna zhana element qosaddy
// array.unshift("Beka", "Alih")
// console.log(array);




// let array = ["Ronaldo", "Messi ", "Neymar" , "Ramos"]
//  let barlyqSoz = prompt("Qansha soz engizesiz")
//  let i = 0
//  while (i < barlyqSoz) {
//     let soz = prompt("Soz engiz")
//     array.push(soz)
//     i++;
//     console.log( "Qosylyp zhatqan element" + array);
//  }

// console.log(array);




// "Slice" - Massivtin belgili bir boligin koshirip alady 
// let massiv = [11, 22, 33, 44, 55, 66]
// let sliceElements = massiv.slice(2,5)
// console.log(sliceElements);




// "splice" - Massivke element qosady, alady nemese auystyrady  
// splice(bastapqy index , qansha san oshiru sanagy, qosatyn elementter...)
// let massiv = [11, 22, 33, 44, 55, 66,]

// massiv.splice(1,1)
// massiv.splice(2,1)

// console.log(massiv);



// let massiv = [10, 20, 30, 40]

// massiv.push(50)
// massiv.shift()
// massiv.splice(1, 1, 25)

// console.log(massiv.slice(2,4));
// console.log(massiv);



// let numbers = [1, 4, 7, 9, 11]

// for (let i = 0; i<numbers.length; i++){ // "number.length" - nomerdin uzyndygyn eseptep shagarady

//     console.log(numbers[i]);
    
// }


// let numbers = [1, 4, 7, 9, 11]

// for (let san of numbers ){  // "san of numbers" - degen numbers degen massivtin ishindegin san degen ainymalyga salyp otyrady

//     console.log(san);
    
// }



// let fruits = ["apple", "Banana", "Cherry"]

// fruits.forEach(function(fruits){
//     console.log(fruits);
    
// })

// let sandar = [4, 7, 8, 10, 9]

// let doubled = sandar.map(san => san*2)

// console.log(doubled);


// let sandar = [1, 4, 7, 2, 12]

// let doubled = sandar.map(
//     san=>{
//         if (san%2 == 0) {
//             return san            
//         }else{return "taq"}
//     }
// )
// console.log(doubled);

//qysqartalgan turi

// let doubled=sandar.map(san=> san%2==0?san:"taq") 
// console.log(doubled);

// let sozder =["Almaty", "Astana", "Aqtau"]
// let city =[]
// for (let i = 0; i<sozder.length; i++) {
//     city[i] = sozder[i]+" qalasy"
// }
// console.log(city);



// let sandar = [1, 4, 7, 2, 12, 9, 6, 3]

// let even = sandar.filter(san=> san % 2==0)
// console.log(even);

// let add = sandar.filter(san=> san % 2==1)
// console.log(add);


       




// JS Object

// let car = {
//     brand:"toyota",
//     model:"Camry",
//     jyly:"2023",
//     drive: function(){
//         alert("Daiyn")
//     }
// }
// car.drive()
// console.log(car.jyly); //2023
// console.log(car.brand); // toyota

// car.brand = "Mersedes" //Озгерту
// console.log(car.brand); //Mersedes

// car.tusi = "Qara"
// console.log(car.tusi); // Косу




// let device = {
//     deviceAty:"Laptop",
//     model:"Lenovo",
//     baga: 350000,
//     discont: function(){
//         return this.baga * 0.9
//     }
// }

// console.log(` Skidka men noutbooktyn bagasy  ${device.discont()} `);



// let pizza = {
//     turi:"Peperony",
//     baga: 2500,
//     kolemi: "25 sm  ",
//     quramy:"Qamyr, syr, kolbasa, tuzdyqtar",
//     info: function(){
//         return ` Pizza turi ${this.turi} \n pizza bagasy ${this.baga} \n pizza kolemi ${this.kolemi} pizza quramy ${this.quramy}`
//     }
// }

// console.log(pizza.info());



// let kinoObj = {
//     kinoteatr: "Kinopark",
//     film: ["Переводчик", "Лига справедливости", "Оно"],
//     addfilm: function(kino){
//         this.film.push(kino)
//     }   
// }

// let filmQosb = prompt("Qandai kino qosasyz")

// kinoObj.addfilm(filmQosb)



// let qoldanushy = {
//     name: "Aziz",
//     age: 18,
//     hobbies: ["Musik", "Read book", "Play games"]
// }

// while(true){
//     let hobby = prompt("Hobby turin zhaz")
//     if(hobby == 0){
//         break;
//     }else{
//         qoldanushy.hobbies.push(hobby)
//     }
// }
// let uzyn = qoldanushy.hobbies.filter(
//     hobbies => hobbies.length>=6)

// console.log(uzyn);


// console.log(qoldanushy);



// let qoldanushylar = [
// {
//     name: "Aliya",
//     age: 19
// },
// {
//     name: "Aziz",
//     age: 19
// },
// {
//     name: "Maia",
//     age: 21
// },
// {
//     name: "Aziz",
//     age: 23
// }
// ]

// console.log(qoldanushylar[2]); // name: Maia, age: 21

// console.log(qoldanushylar.filter(aziz =>aziz.name == "Aziz"));
// console.log(qoldanushylar.filter(jasy => jasy.age>=20 ));


// let course = {
//     kursAty: "A<JLT Cyber School",
//     mugalimder: [
//         {
//             name: "galymbek",
//             age: 30,
//             hobbyes: ["Training", "chilling", "coding"]
//         },
//         {
//             name: "Temirlan",
//             age: 22,
//             hobbyes: ["gaming", "swimmind", "coding"]
//         },
//         {
//             name: "Roza",
//             age: 21,
//             hobbyes: ["Training", "chilling", "coding"]
//         }
//     ],
//     oqushylar: [
//         {
//             name: "Efrat",
//             age: 36
//         },
//         {
//             name: "Aziz",
//             age: 18
//         },
//         {
//             name: "Anuar",
//             age: 34
//         },
//         {
//             name: "Baksultan",
//             age: 14
//         }
//     ]
// }

// console.log(course.mugalimder[2].age);

// course.mugalimder[2].name = "Dilnaz"
// course.mugalimder.push({name: "Aru", age:24})
// console.log(course.mugalimder);

// let flatted = course.mugalimder.flatMap(hobbyes =>hobbyes.hobbyes)
// console.log(flatted);



// let klass = [
//     {
//         name: "Aliya",
//         age: 19,
//         lesson: ["math", "Informatika"]
//     },
//     {
//         name: "Aziz",
//         age: 19,
//         lesson: ["Quqyq", "D.Zh. Tarih"]
//     },
//     {
//         name: "Maia",
//         age: 21,
//         lesson: ["Qazaq tili", "Adebiet"]
//     },
//     {
//         name: "Aziz",
//         age: 23,
//         lesson: ["fizika", "Geometria"]
//     }
//     ]

    // let flatted = klass.flatMap(pan =>pan.lesson)
    // console.log(flatted);

    
    // function jasOqushy(){
    //     let min = klass[0].age
    //     let jasOqushyAty = ""
    //     for(let i=1; i<klass.length; i++){       
    //         if(min>klass[i].age){
    //             min = klass[i].age
    //             jasOqushyAty = klass[i].name
    //         }
    //     }
    //     alert("En jas oqushy" + jasOqushyAty + `\n jasy` + min )
    // }

    
    // jasOqushy()
    // console.log(klass);
    
    // let man = {
    //     name: "Aziz",
    //     nickname: "Krasavchik",
    //     age: 18
    // }

    // let maninfo = {...man, hobby: "swimming"}
    // // console.log(maninfo);
    

    // let oqushy = [11,22,33,44,55,66]

    // let oqushyAttary  = ["Aziz", "Esim ", "Maga", "sara",...oqushy]
    // console.log(oqushyAttary);
    

    // let = [num1,num2, num3, num4] = oqushy

    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
    
    // let arr1 = [1,2,3,4,5]
    // let arr2 = [6,7,8,9,10]

    // let arr = [...arr1,...arr2]
    // console.log(arr);
    


    // let arr1 = [1,2,3,4,5]

    // // let [a,b,...rested] = arr1

    // let a = [1]
    // let b =[2]
    // let rested = [3,4,5]

    // console.log(rested);

    // let student = {
    //     name: "Aziz",
    //     nickname: "Aiz",
    //     age: 20
    // }

    // let {name,...Miras} = student

    // console.log(name);
    // console.log(Miras);
    
    
    // let book = {title: "Abay joly ", author: "Muqtar Auezov", year : 1942}

    // let {title , author, year} = book
    // console.log(title);
    // console.log(author);
    // console.log(year);


    // let fruits = ["alma", "Shie", "Mandarin"]
    // let [a,...qalqany] = fruits

    // console.log(a);
    // console.log(qalqany);


    // let arr1 = [1,2,3]
    // let arr2 =[4,5,6]

    // let arr = [...arr1,...arr2]
    // console.log(arr);
    

    // let user = {name: "Ali", age :25}
    // let userName = {...user, hobbyes: "swimming"}
    // console.log(userName);
    
    

    // let person = {
    //     name: prompt("Atyndy engiz"),
    //     age : +prompt("Jasyndy engiz"),
    //     hobby: prompt("Hobbydi engiz")
    // }

    // let {name, age, hobby} = person

    // if(age<0){
    //     alert("Sen ali planda joksyn")
    // }else if(age>=18 && age<100){
    //     alert("Ereseksin")
    // }else if(age>100){
    //     alert("Dinozavrsyn")
    // }else if(age < 18 && age >0){
    //     alert("Shigolsyn")
    // }else{
    //     alert("Durys zhaz")
    // }
    // console.log(person);
    



//     let person ={
//     name: "Okusylar",
//     oqushylar: [
//         {name: "Aziz", age: 18, hobbyes:"swimming"},
//         {name: "Beka", age: 28, hobbyes:"slipping"},
//         {name: "Maga", age: 23, hobbyes:"playing"},
//     ],
//     adamQosu: function() {
//         let myname = prompt("Atyndy engiz")
//         let myage = +prompt("Jasyndy engiz")
//         let myhobby= prompt("Hobbydi engiz")
//         this.oqushylar.push({name: myname, age: myage, hobby: myhobby})
//         alert("Adam qosyldy")
//         console.log(this.oqushylar);

//     },
//     adamKorsetu: function() {
//         return this.oqushylar
//     }
// }
//     let arr = prompt( "Qandai areket zhasaisyz. qosu/barlygyn koru").toLowerCase()

//     if(arr =="barlygyn koru"){
//         console.log(person.adamKorsetu());
//     }else if(arr=="qosu"){
//         console.log(person.adamQosu());
        
//     }else{
//         alert("Qate zhazdyn qaita zhaz")
//     }
 

// let oqushylar = [
//             {name: "Aziz", age: 18, hobbyes:"swimming", bal: 90},
//             {name: "Beka", age: 28, hobbyes:"slipping", bal: 80},
//             {name: "Maga", age: 23, hobbyes:"playing", bal: 70},
// ]
// let jas = oqushylar.filter( age => age.age >= 20 )

// console.log(jas);

// let upai = oqushylar.map(num => num.bal * 1.1)
// console.log(upai);

// let numbers = [1, 2, 3, 4]
// let sum = numbers.reduce((total, num)=> total + num )
// console.log(sum);
 

// 1.Тауарлар атауы мен бағадан тұратын object құр

// Берілген массивтен әрбір өнімнің бағасы 1000
// теңгеден жоғары екенін тексеріңіз.
// Барлық өнімнің бағаларының жалпы сомасын
// есептеңіз.
// Барлық өнімдердің атауын массив түрінде алыңыз.
// Бағасы 10мыңнан асатын тауарларға 15 пайыз
// жеңілдік жасаңыз


// exam 6
// let eShop = {
//     name: "Elektronika Dukeni",
//     phoneNumber: "8 707 707 7070",
//     products: [
//         {productName: "Apple 11",
//         category: "Elektronika",
//         price: 200000,
//         stock: 10
//         },
//         {productName: "Apple 12",
//         category: "E-sim",
//         price: 250000,
//         stock: 10
//         },
//         {productName: "Apple 13",
//         category: "Elektronika",
//         price: 300000,
//         stock: 15
//         },
//         {productName: "Apple 14",
//         category: "E-sim",
//         price: 400000,
//         stock: 30
//         },
//         {productName: "Apple 15",
//         category: "dualSim",
//         price: 450000,
//         stock: 20
//         }, 
//     ],
//     changeShopName: function () {
//         let janaAtau = prompt("Jana ataudy engiz")
//         this.name = janaAtau //"magazin" => "janaAtau"
//     },
//     changePhoneNumber: function () {
//         let janaNomer = prompt("Jana nomer engiz")
//         if(janaNomer ==""){
//             this.phoneNumber = this.phoneNumber
//         }else{
//             this.phoneNumber = this.janaNomer
//         }
//     },
//     listProductNames: function(){
//         let productList = []
//         this.products.forEach(function(element){
//             productList.push(element.productName)
//         })
//         productList= productList.join(`\n`) 
//         alert(productList)
//     },
//     addProduct: function(){
//         let 
//     }
// }
// // 2tapsyrma
// eShop.changeShopName()
// console.log(eShop);


// // 3 tapsyrma
// eShop.changePhoneNumber()
// console.log(eShop);

// //includes()


// let taqyryp = document.getElementById("title")
// let = textter = document.getElementsByClassName('text')
// console.log(textter[0].textContent);

// let taqyryp = document.getElementById('news-title')
// taqyryp.textContent = 'JS janartulary'
// console.log(taqyryp.textContent);

// let mazmun = document.getElementById('news-content')
// mazmun.innerHTML= 'JS bagdarlamalau alemdegi en songy janalyqtardy oqynyz'
// console.log(mazmun.innerHTML);

// let silteme = document.querySelector('#news-link')
// silteme.href = 'https://facebook.com'


// mouse Events
// 15 week

// function buttonClick(){
//     alert("Sen meni bastyn")
// }
// let taqyryp = document.getElementById('title')

// taqyryp.addEventListener("click",function() {
//     taqyryp.style.fontSize = "50px"
//     taqyryp.style.color = "red"
//     taqyryp.style.border = "2px solid violet"
// })

// let qorap = document.querySelector('.box')

// qorap.addEventListener( "mouseenter", function(){
//     qorap.style.backgroundColor = "darkblue"
//     qorap.style.transitionDuration = "1s"
//     qorap.style.borderRadius = "50%"
// })
// qorap.addEventListener('mouseleave',function(){
//     qorap.style.backgroundColor = "white"
//     qorap.style.transitionDuration = "1s"
//     qorap. style.borderRadius = "30px"
// })

// let tuime = document.getElementById('myButton')

// tuime.addEventListener("click", function(){
//     alert("Tuime basyldy")
// })


// let qorap1 = document.querySelector("#box1")

// qorap1.addEventListener('mouseenter', function(){
//     qorap1.style.backgroundColor = "lightblue"
//     qorap1.style.transitionDuration = "1s"
//     qorap1. style.borderRadius = "50px"
// })

// qorap1.addEventListener('mouseleave', function(){
//     qorap1.style.backgroundColor = "white"
//     qorap1.style.transitionDuration = "1s"
//     qorap1. style.borderRadius = "50px"
// })


// let  tizim1 = document.getElementById('itemList1')

// tizim1.addEventListener("mouseenter", function(){
//     tizim1.style.fontSize = "20px"
//     tizim1.style.color = "red"
// })
// tizim1.addEventListener("mouseleave", function(){
//     tizim1.style.fontSize = "16px"
//     tizim1.style.color = "black"
// })


// let  tizim2 = document.getElementById('itemList2')

// tizim2.addEventListener("click", function(){
//     tizim2.style.fontSize = "20px"
//     tizim2.style.color = "red"
// })

// let  tizim3 = document.getElementById('itemList3')

// tizim3.addEventListener("click", function(){
//     tizim3.style.fontSize = "20px"
//     tizim3.style.color = "red"
// })

// let sandar = document.getElementById('san')

// let button = document.getElementById('sandyArttyru')

// button.addEventListener("click", function(){
//     let sanAmai = parseInt(sandar.textContent)
//     sandar.textContent = sanAmai + 1
// })

        



// let formInput = document.getElementById('form')
// let errorMassage = document.getElementById('errorMassage')
// formInput.addEventListener('submit', function(event){   //форманы жыберу кезынде орындалады 
//     event.preventDefault() //event.preventDefault() деген данныйды обновить етилип кетпейти сактап калады
//     let pochta = document.getElementById('email').value
//     let parol = document.getElementById('password').value
    
    
//     if(!pochta.includes('@')){
//         errorMassage.textContent = 'Sizde emailmen problemalar bar'
//     }else if(parol.length<=6){
//         errorMassage.textContent = "Sizdin paroliniz 6 dan tomen"
//     }else{
//         errorMassage.textContent = ''
//         errorMassage.style.color = 'green'
//         errorMassage.textContent = "sizde bari durys, Qabyldandy"
//         console.log({email:pochta, password: parol});
        
//     }

//     console.log(`pochta: ${pochta}`);
//     console.log(`Parol: ${parol}` );
// })



// let dropDown = document.getElementById('dropdown')
// let text = document.getElementById('tandalgany')

// dropDown.addEventListener("change", function(){
//     text.textContent = dropDown.value
// })


// let focused = document.getElementById('focus')
// let parapgraph = document.getElementById('focusedText')

// focused.addEventListener('focus', function(){
//     parapgraph.textContent = 'Element was focused'
// })

// focused.addEventListener('blur', function(){
//     parapgraph.textContent = 'We were leaved the focused area'
// })


// let inputed = document.getElementById("inputed")
// let = text = document.getElementById('text')

// inputed.addEventListener('input', function(){
//     text.textContent = inputed.value
// })

// let batyrma = document.getElementById('batyrma')
// let tizim = document.createElement('ul')
// let i = 0

// let divelement = document.getElementById('container')
// divelement.appendChild(tizim)

// batyrma.addEventListener("click", function(){
//     let tizimElement = document.createElement('li')
//     tizimElement.textContent = `Tizim elementi  ${i++}`
//     tizim.appendChild(tizimElement)
// })
// let names = [
//     {name: Aziz},
//     {name: Aisulu},
//     {name: Efrat},
//     {name: Beka}
// ]


// let containerElement = document.getElementById('container')
// let secondElement = document.getElementById('second')

// let button = document.getElementById('remove-btn')

// button.addEventListener("click", function(){
//     containerElement.removeChild(secondElement)
// })    



// let addBtn = document.getElementById('add-btn')
// let listBox = document.getElementById('list-box')
// let searchBtn = document.getElementById("search-btn")

// addBtn.addEventListener('click', function(event){
//     event.preventDefault()
//     let ToDoitem = document.getElementById('newTask').value
//     console.log(ToDoitem);
//     if(ToDoitem && ToDoitem !=null && ToDoitem !=undefined){
//         let createdItem = createNewlist(ToDoitem)
//         listBox.appendChild(createdItem)
//     }

// })
// searchBtn.addEventListener('click', function(e){
//     e.preventDefault()
//     let searchText = document.getElementById('search-text')

//     let items = listBox.querySelectorAll('div')
//     console.log(items);

//     items.forEach(function(item){
//         let paragraph = item.querySelector('p').textContent.toLowerCase()
//         if(searchText.value.toLowerCase()=='' || searchText.value.toLowerCase() == null){

//         }
//         else if(paragraph == searchText.value.toLowerCase()){
//             item.style.display = "block"
//         }else{
//             item.style.display = 'none'
//         }

//         console.log(`paragraph manderi ${paragraph}`);
//     })
    

// })

// function createNewlist(newToDoitem){
//     let newDiv = document.createElement('div')
//     let itemName = document.createElement('p')
//     let delateButton = document.createElement('button')
//     newDiv.class = "newDiv"

//     itemName.textContent = newToDoitem
//     delateButton.textContent = "Oshir"

//     delateButton.addEventListener('click', function(){
//         listBox.removeChild(newDiv)
//     })

//     newDiv.appendChild(itemName)
//     newDiv.appendChild(delateButton)
//     return newDiv
// }






// let posts = []; 

// function addPost(event){
//     event.preventDefault()
//     let titleInput = document.getElementById('titleInput')
//     let contentInput = document.getElementById('contentInput')

//     if(titleInput.value && contentInput.value){
//         let post = {
//             id: Date.now(),
//             title: titleInput.value,
//             content: contentInput.value,
//             // date: new Date().toLocaleDateString('kk-KZ')
            
//         };

//         posts.push(post);
//         console.log(posts);
        
//         renderPosts(); 

//         titleInput.value = '';
//         contentInput.value = '';
//     }
// }

// function renderPosts(){
//     let blogPostsDiv = document.getElementById('blogPosts')
//     blogPostsDiv.innerHTML = '';


//     posts.forEach(post => {
//         let postDiv = document.createElement('div')
//         postDiv.className = 'post';
//         postDiv.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.content}</p>
//             <small>${post.date}</small>
//             <button onclick = "editPost(${post.id})" class="button" style=" background-color: orange;">Ондеу</button>
//             <button onclick = "removePost(${post.id})" class="button" style=" background-color: red;">Жою</button>
//             `;
//             blogPostsDiv.appendChild(postDiv)
//     });

// }

// let addBtn = document.getElementById('addPostBtn')
// addBtn.addEventListener('click', addPost);


// function removePost(id){
//     posts = posts.filter(post =>post.id !== id);
//     renderPosts();

// }


// function editPost(id){
//     let post = posts.find(post => post.id ===id);

//     document.getElementById('titleInput').value = post.title;
//     document.getElementById('contentInput').value = post.content

//     removePost(id);
// }


// function renderPostst(){
//     let blogPostsDiv = document.getElementById('blogPosts');
//     blogPostsDiv.innerHTML = '';

//     posts.forEach(post => {
//         let postDiv = document.createElement('div');
//         postDiv.className = 'post';
//         postDiv.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.title}</p>
//         <small>${post.title}</small>
//         <button onclick = "editPost(${post.id})" class="button" style=" background-color: orange;">Ондеу</button>
//         <button onclick = "removePost(${post.id})" class="button" style=" background-color: red;">Жою</button>
//         `;
//         blogPostsDiv.appendChild(postDiv);
//     });
// }




// DOM CSS


// let btn = document.getElementById('btn')

// btn.addEventListener('click',function(){ 
//     btn.classList.add('btn-styled')  //add деген тегке class косады
// })

// btn.addEventListener('dblclick', function(){
//     btn.classList.remove('btn-styled') // remove бул тегтен класты жояды
// })


// btn.addEventListener('click', function(){
//     btn.classList.toggle('btn-styled') // toggle бул class бар болса жояды , жок болса косады
// })

// if(btn.classList.contains('btn-styled')){
//     alert("Батырмага btn-styled class косылды")
// }else{
//     alert("Батырмага btn-styled class алынды")
// }


// let button = document.getElementById('btn')

// let body = document.getElementById('body')

// button.addEventListener('click', function(){
//     body.classList.toggle('body')
//     if(body.classList.contains('body')){
        
//     }
// })



// let button = document.getElementById('btn')

// let p = document.getElementById('p')

// button.addEventListener('click', function(){
//     p.classList.toggle('p-style')
// })


// week 19 day4

// function fetchData(){
//     fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/products').then(response=>{
//         return response.json()
//     }).then(otvet=>(console.log(otvet))).catch(()=>{
//         console.log('error');
        
//     })
// }

// fetchData()


// async function fetchData() {
//     try{
//         let user = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/products')
//         if(!user.ok){
//             throw new Error("Ақпарат алу мүмкін болмады")
//         }
//         let data = await user.json()
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// fetchData()




// function fetchPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
//         if(!response.ok){
//             throw new Error('Посттарды алу мүмкін болмады')
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error('қате', err))
// }

// fetchPosts();



    // async function fetchPosts() {
    //     try{
    //         let post = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         if(!post.ok){
    //             throw new Error('Посттарды алу мүмкін болмады')
    //         }
    //         let data = await post.json()
    //         console.log(data)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // fetchPosts();


// async function fetchData() {
//     try{
//         let user = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/products')
   
//         if(!user.ok){
//             throw new Error('new error')
//         }

//         let data = await user.json()
//         let container = document.getElementById('container')    

//         for(let i = 0; i<data.length; i++){
//             let div = document.createElement('div')

//             div.innerHTML = `
//              <h2>${data[i].name}</h2>
//              <p>${data[i].price}</p>`

//              container.appendChild(div)
//         }
//     }catch(err){
//         console.error(err.message)
//     }
// }

// fetchData()


// let div = document.createElement('div')


// localStorage.setItem('name', "Aziz")
// localStorage.setItem('surname', "Berik")
// localStorage.setItem('hobby', "Coding")
// localStorage.setItem('age', "18")

// localStorage.clear()
// localStorage.removeItem('name')

// let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')
// let surname = localStorage.getItem('surname')

// div.innerHTML = `<h1>${name}</h1>
// <h2>${surname}</h2>
// <p>${age}</p>`



// document.body.appendChild(div)

// let name = document.getElementById('name')
// let age = document.getElementById('age')
// let saqtau = document.getElementById('btn-saqtau')
// let korsetu = document.getElementById('btn-korsetu')
// let clear = document.getElementById('btn-clear')

// saqtau.addEventListener('click', function() {
//     localStorage.setItem("name", name.value)
//     localStorage.setItem("age", age.value)
// })

// korsetu.addEventListener('click', function() {
//     let name = localStorage.getItem("name")
//     let age = localStorage.getItem("age")

//     alert(`Аты: ${name} \n жасы:${age}`)
// })

// clear.addEventListener('click', function() {
//     localStorage.clear()
// })

// // Немесе мына түрі

// saqtau.addEventListener('click', function(e) {
//     e.preventDefault()
    
//     if(name && age ){
//         localStorage.setItem("name", name.value)
//         localStorage.setItem("age", age.value)
//     }
// })

// korsetu.addEventListener('click', function() {
//     let name = localStorage.getItem("name")
//     let age = localStorage.getItem("age")

//     if(name && age){
//         alert(`Аты: ${name} \n жасы:${age}`)
//     }
    
// })

// clear.addEventListener('click', function(e) {
//     e.preventDefault()
//     localStorage.clear()
//     window.location.reload()
// })

// let name = document.getElementById('name')
// let age = document.getElementById('age')
// let saqtau = document.getElementById('btn-saqtau')
// let korsetu = document.getElementById('btn-korsetu')
// let clear = document.getElementById('btn-clear')
// let massivName = []


// saqtau.addEventListener('click', function() {
//     localStorage.setItem("name", name.value)
//     localStorage.setItem("age", age.value)
// })

// korsetu.addEventListener('click', function() {
//     let name = localStorage.getItem("name")                            
//     let age = localStorage.getItem("age")

//     alert(`Аты: ${name} \n жасы:${age}`)
// })

// clear.addEventListener('click', function() {
//     localStorage.clear()
// })


// let saqtau = document.getElementById('saqtau')
// let data = document.getElementById('data')
// let listData =[]

// saqtau.addEventListener('click', function(e){
//     e.preventDefault()

//     let name = document.getElementById('input1').value
//     let age = document.getElementById('input2').value

//     if(name && age){
//         listData.push({name: name, age: age})
//         console.log(listData);
        
//         sessionStorage.setItem('Info',JSON.stringify(listData))
//     }else{
//         alert("Ақпарат ергіз")
//     }
// })

// let korsetu = document.getElementById("korsetu")

// korsetu.addEventListener('click', function(e){
//     e.preventDefault()

//     let aqparat = JSON.parse(sessionStorage.getItem('Info'))
    
    

//     if(aqparat){
//         data.textContent = ''

//         aqparat.forEach((person, i) => {3
//             let div = document.createElement('div')

//         div.innerHTML = `
//         <div> index: ${i}</div>
//         <h1>${person.name}</h1>
//         <p>${person.age}</p>
//         <button  onclick="oshir(${i})">Өшіру</button>`

//         data.appendChild(div)
//         });
        
//     }else{
//         alert('Ақпарат жоқ, Ақпарат енгіз')
//     }
// })


// function oshir(index) {
//     console.log('Өщірейін деп жатқан индекс: ', index);
//     data = JSON.parse(sessionStorage.getItem('Info'))

//     data = data.filter((el, i) => index != i)
//     console.log(data);

//     sessionStorage.setItem('Info', JSON.stringify(data))
//     window.location.reload()
// }

// let tazalau = document.getElementById("tazalau")

// tazalau.addEventListener("click", function(){
//     sessionStorage.clear()
//     window.location.reload()
// })
