//JSON 데이터를 웹페이지로 출력하기
// Parsing --> 다른 형식으로 저장된 데이터를 목적에 맞는 형태의 형식으로 변환하는 것
// JSON Parsing --> JSON 형식의 텍스트 문자열을 목적에 맞게 객체로 변환.


window.onload = () => {

    document.getElementById('btn').addEventListener('click',function() {
       
        console.log('text..');
        // ====================================================
        let json = 
        {
            "book":[{
                "isbn":"123-456-789",
                "author":{
                    "name":"홍길동",
                    "email":"hong@hongkildong.com"
                },
                "editor":{
                    "name":"이순신",
                    "email":"lee@leesoonsin.com"
                },
                "title":"대한민국의 정의는 죽었는가",
                "category":[
                    "Non-Fiction","IT","Polotics"
                ],
                "picture":"images/joe.jpg",
                "description":"백두산 저자의 야심찬 신작! 절찬리에 판매중~",
                "comments":[{
                    "id":"김진경",
                    "text":"무거운 주제를 무겁지 않게 써주셔서 감사합니다."
                },
                {
                    "id":"안나별",
                    "text":"책 산날 제일 많이 읽었어요..ㅋㅋ"
                },
                {
                    "id":"이정길",
                    "text":"2권은 없나요? 또 쓰시면 또 구매할게요~"
                },
                {
                    "id":"안효정",
                    "text":"대학생이라면 필독서~"
                }],
                "comwinner":["김진경","안나별","이정길"],
                "add1":false,
                "add2":true
      }]
    }
        json = json["book"];
        console.log(json.length);
        console.log(json);
        // console.log(json.json);  // undefined
        console.log(json[0].isbn);
        console.log(json[0].editor);
        console.log(json[0].category);
        console.log(json[0].comments);
        console.log(json[0].comments[0]);
        console.log(json[0].comments[json[0].comments.length-1]);
        console.log(json[0].comments.length);

        console.log('---------------------------------------');

        for(let i=0; i<json.length; i++){
            console.log(json[i].commnets);
            console.log(json[i].comwinner);

        }

        console.log('-------------------------------------');

        for(let i = 0; i <json.length; i++){
            for(let j = 0; j< json[i].comments.length;j++){
                // 댓글 참가자
                let bookComments = json[i].comments[j]
                console.log(bookComments.id+":"+bookComments.text);
            }
            //당첨자
            console.log(typeof json[i].comwinner.join(",")); //string
        }

    