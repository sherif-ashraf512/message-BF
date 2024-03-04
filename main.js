let envelope = document.querySelector('.envelope-wrapper');
if(envelope){
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
    });
}

let msg=document.querySelector(".msg");
if(msg){
    onload = () => {
        const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        }, 5000);
    };
}

let p=document.querySelector("#message");
if(p){
    let text1 = "This message for you, shrouqaah🥰";
    let index1 = 1;
    let text2 = "Your presence in my life is a radiant light❤️<br>Your unwavering support and encouragement have been my anchor, pushing me forward with each challenge.<br>Your friendship is not just comforting; it's a therapeutic blessing that I cherish deeply.<br> Thank you for being the incredible soul that you are.<br>Thank you for being💗";
    let index2 = 1;
    function writing(){
        p.innerHTML=text1.slice(0,index1);
        index1++;
        if(index1>text1.length){
            p.innerHTML=text2.slice(0,index2)
            index2++;
        }
        if(index2>text2.length){
            p.innerHTML=text2;
            clearInterval(interval);
        }
    }

    let interval = setInterval(function(){
        writing();
    },180);
}
