console.log('Loaded');
var img=document.getElementById('stew');
var marginLeft=0;
function moveRight(){
marginLeft=marginLeft+5;
img.style.marginLeft=marginLeft+'px';
}
    img.onclick = function() {
    var interval = setInterval(moveRight,50);
};

var button =document.getElementById('counter');

button.onclick = function() {

var request=new XMLhttpRequest();
request.onreadystateChange = function(){
    if(request.readystate === XMLhttpRequest.DONE){
        if(request.status === 200){
            var counetr=request.responseText;
            var span =document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
};
request.open('GET','http://athulcscs.imad.hasura-app.io/counter',true);
request.send(null);
};