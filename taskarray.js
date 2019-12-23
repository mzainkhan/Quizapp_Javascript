console.log("zain")


var ages = [8, 9, 10, 18, 20, 22];
var myages = ages.slice(3, 4)
console.log(myages)



var txt = document.getElementById('mcqs')
var btn = document.getElementById('submit')
btn.addEventListener('click', () => {
    myvalue = txt.value;
    // console.log(myvalue)
    let splitarray = myvalue.split('\n')
    // console.log(splitarray)
    let obj = {}
    let questions = []
    let optionarray = []
    console.log(splitarray)
    for (var i = 0; i < splitarray.length; i++) {
        if (Object.keys(obj).length === 0) {
            obj.question = splitarray[i]
            console.log(obj.question)
        } else {
            if (splitarray[i] === "") {
                questions.push(obj)
                obj = {},
                    optionarray = []
            } 
             else{
                optionarray.push(splitarray[i])

             }

        }





    }



})














// checkadult = (age) => {
//     return age >= 18
// }
// console.log(checkadult)
// myfunction = () =>{
//     document.getElementById("demo").innerHTML += ages.findIndex(checkadult);

// }
// console.log(ages)
// var arr=['karachi','multan','lahore','hyderabad','islamabad',];
//  var narr =  arr.length
//   console.log(narr)
//  arr[arr.length] = arr[2]
//  arr[2] = 'zain'
//  console.log(arr) 


// for(var i = 0 ; i < arr.le ; i++){
//    arr[arr.length] = arr[1]    
//     arr[1] = 'zain'
//    console.log(arr)
//   }     


// console.log('myarray',arr)
// arr.push('faislabad')
// console.log('myupdatearray',arr)

//   var newarray = arr[3]=['peshawar']
// console.log(arr)



// arr.push('hello')

// console.log('task',arr)

// arr.pop()

// console.log('task',arr)

// arr[2]=1000
// console.log('task',arr)


