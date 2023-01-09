// function printHeart(){
//     return "<3";
// }
// console.log(printHeart());


// function returnDay(num) {
//     const days=["Monday", "tuesday", "Wendsday", "Thruesday", "Friday", "Saturday", "Sunday"];
//     const day =days[num -1];
//     if (num<=1 && num>=7) {
//         return day;
//     }else{
//         return "null";
//     }

//     }
//     console.log(returnDay(1));

//     function isShortWeather(temperatura){
//         if (temperatura >=75 ) {
//             return true;
//         }else {
//             return false;
//         }
//     }
//     console.log(isShortWeather(75));

//     function lastElement(array){
    
//         if (!array.length) {
//             return "null";
//         }else {
//            return array[array.length -1];

//         }
//     }
//     console.log(lastElement([2,4,5]));

//     function square(num){
//         return num*num;
//     }
//     console.log(square(4));

//     const square = {
//         area : function(num){
//             return num*num;
//         },
//         perimeter : function(num){
//             return num*4;
//         }
//     };
//     console.log(square.area(10));
//     console.log(square.perimeter(10));

    const hen = {
     name: "Helen",
     eggCount:(0),
     layAnEgg : function (){
        this.eggCount +=1;
         return "EGG";
     }
    }
    // console.log(hen.layAnEgg());
    console.log(hen.eggCount);