// 중첩된 JSON 데이터 다루기
// 한 권의 도서 정보를 갖고 있는 JSON 데이터에서 해당 도서가 속해있는 카테고리를 출력하시오


//[1] : 중첩 데이터
window.onload =() =>{

    const book = {
        "isbn":"123-456-789",
        "author":{
            "name":"홍길동",
            "email":"an1413@hs.ac.kr"
        },
        "editor":{
            "name":"이순신",
            "email":"lee@leesoonsin.com"
        },
        "title":"대한민국의 정의는 죽었는가?",
        "category":[
            "Non-Fiction","IT","Politics"
        ]
    }

    console.log(book["author"].name);
    console.log(book["editor"].email);
    console.log(book.category.length);

    // 개별 엑세스
    let val ="";
    val = book.category[0];
    document.getElementById("aaa").innerText = val;

    for(let i=0; i<book.category.length; i++){
        val += book.category[i] +"<br>";
    }
    document.getElementById("aaa").innerHTML = val;

};