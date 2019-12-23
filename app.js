var txt = document.getElementById('mcqs')
var btn = document.getElementById('submit')

btn.addEventListener('click', () => {
   myvalue = txt.value;
   // console.log(myvalue)
   let splitarray = myvalue.split('\n')
   // console.log(splitarray)
   let obj = {};
   let optionarray = [];
   let questions = [];
   let answers = [];
   for (var i = 0; i < splitarray.length; i++) {
      // console.log(splitarray[i])
      if (Object.keys(obj).length === 0) {
         obj.question = splitarray[i];
         // console.log(obj.question)
         console.log(questions)
         localStorage.setItem('questions',JSON.stringify(questions))
      }
      else {
         if (splitarray[i] === "") {
            questions.push(obj)
            obj = {}
            optionarray = []

         } else {
            if (splitarray[i].indexOf("*") !== -1) {
               // optionarray.push(splitarray[i])
               obj.answers = splitarray[i]
               // console.log('mila ===>', obj.answers)
            }
            optionarray.push(splitarray[i])
            obj.options = optionarray
         }
      }
      // localStorage.setItem()


   }



})






//    < P > KUCH BI </P >
//       <P id="demo">

//       </P>

// myfunction = () => {
//    var str = "How are you fine";
//    var n = str.indexOf('fine');
//    document.getElementById('demo').innerHTML = n;

// }
















// var txt = document.getElementById('mcqs')
// var btn = document.getElementById('submit')
// btn.addEventListener('click', () => {
//    myvalue = txt.value;
//    // console.log(myvalue)
//    let splitarray = myvalue.split('\n')
//    // console.log(splitarray)
//    let obj = {}
//    let questions = []
//    let optionarray = []
//    for (var i = 0; i < splitarray.length; i++) {
//       // console.log(splitarray[i])
//       if (Object.keys(obj).length === 0) {
//          obj.question = splitarray[i];
//          // console.log(obj.question)
//          console.log(obj)
//       } else {
//          if (splitarray[i] === "") {
//             questions.push(obj)
//             obj = {}
//             optionarray = []
//          } else {
//             optionarray.push(splitarray[i])
//             obj.option = optionarray         
//          }
//       }
//    }
// })













































// add a key in obj or remove a key in obj

// var obj = {
//    name : "zain",
//    class : "bscs"


// }



// console.log(delete obj.name)
// console.log(obj.ali = 'khan')
// console.log(obj)
// console.log(Object.keys(obj).length)
// console.log(obj.lengh)
// 





