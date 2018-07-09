let clicks=[];
let container=document.getElementById('container');
let clickselement=document.getElementById("clicks");

function timeStampToTime(timestamp) {
    let time=new Date();
    time.setMilliseconds(timestamp);
    let hours = time.getHours() > 12? time.getHours()-12: time.getHours();
    let formattedTime = hours + ':' + time.getMinutes() + ':' + time.getSeconds();
    formattedTime += '   ' + time.getHours() >= 12? 'pm' : 'am';
    return formattedTime;
    
}

//event listener for mouse over

container.addEventListener('mouseover', function(e){
    let html =`
        <h1>X: ${e.clientX}</h1>
        <h1>Y: ${e.clientY}</h1>
        <h1>T: ${timeStampToTime(e.timeStamp)}</h1>
        `
        container.getElementsByClassName('hover-container')[0].innerHTML = html;
});

    let deleteClick=function(e, timestamp){
        e.stopPropagation();
        let clickEl=e.target.parentNode.parentNode;
        for(let i in clicks){
            if(clicks[i].t==timestamp){
                clickEl.remove();
                clicks.splice(i, 1);
                breaks;

            }
        }

    }
 //eventlistener for clicks

 container.addEventListener('click', function(e){
     let click= {
         x:e.clientX,
         y:e.clientY,
         t:e.timeStamp,
         time: timeStampToTime(e.timestamp)
     };
     clicks.push(click);
     let html=document.createElement('div');
     html.innerHTML =`
        <div class='click'>
            <div>x: ${e.clientX}</div>
            <div>y: ${e.clientY}</div>
            <div>t: ${timeStampToTime(e.timeStamp)}</div>
            <span class="close" onclick='deleteClick(event, "${click.t}")'><button>x</button><span> 
        </div>
        `;
        container.querySelector('#clicks').appendChild(html);
 });
