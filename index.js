// Closures
// A closure is when an iiner function remembes variables from its outer function even after the outer function is finished

function outer(){
    let count=0;

    return function inner(){
        count++;
        return count;
    }
}

function createCounter(){
    let count =0;

    return{
        increment(){
            count ++;
            return count;
        },

        decrement(){
            count--;
            return count;
        }
    }
}


const counter=outer();
const counter2=createCounter();
// console.log(counter());
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.decrement());


function createUser(name){
    let userName=name;
    return{
         changeName(n){
           userName=n
            // console.log(userName);
            // return ;
        },
        sayName(){
            return userName;
            // return ;
        }
       
    }
}




const user=createUser("Shiv");
console.log(user.sayName())
console.log(user.changeName("Prav"));
console.log(user.sayName());