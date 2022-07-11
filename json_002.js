const person = [
    {"name":"홍길동", "age":20, "nationality" :"대한민국"},
    {"name":"안나별","age":21, "nationality":"대한민국"},
    {"name":"슈바이처", "age":43,"nationality":"미국"},
    {"name" : "징기스칸" , "age":34,"nationality":"몽골"}
];

console.log(typeof person[0]); 
console.log(typeof person[1]); 


console.log('---------------------------');
console.log(person[3].name+ ""+ person[0].age +""+ person[0].nationality);

//[3] : 반복
console.log('---------------------------전개 연산자');
const str1 = "korea";
console.log(...person);
console.log(...str1);   //전개 연산자
console.log([...str1]);   //_proto __ --> Array
console.log({...str1});   // _proto__ --> Object
console.log({...person}[2].name);   //슈바이처

console.log({...person});   // _proto__ --> Object

// [4] : 반복 가능한 객체 --> for .. of... (전개 연산자)
console.log('-----------------------------------for ..of');
for(let ele of person){                     // person --> iterable 즉, 반복 가능한 객체가 오면 된다.
    console.log(ele);

}

console.log('-----------------------------------for ..in');
for(let i in person){                     // person --> iterable 즉, 반복 가능한 객체가 오면 된다.
    console.log(i);

}

//[5] : 수정
console.log('----------------------------------------역따옴표');
person[0].name = "홍길자";
person[0].age = 22;
console.log('홍길동의 이름이 ${person[0].name} 홍길자로 수정되었고, 나이는 ${person[0].name}22살로 수정되었습니다.');



