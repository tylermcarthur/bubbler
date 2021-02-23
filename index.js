var createANewBubble = document.getElementById('createBubble');
var body = document.getElementById('body1')
var bubbleCount = 1
var bubbleHolderZIndex = 1
var createNewTopic = document.getElementById('BHS-create-btn')



createANewBubble.addEventListener('click',function(){
    let bubbleHolder = document.getElementsByClassName('bubbleHolder')[bubbleHolderZIndex -1];
    let newDiv = document.createElement('div')
    newDiv.className = 'bubble rounded-circle'
    newDiv.id = `bubble${bubbleCount}`
    bubbleHolder.appendChild(newDiv)
    var x = new RandomObjectMover(newDiv, bubbleHolder);
    x.startMovement();
    bubbleCount++
});


createNewTopic.addEventListener('click', function(){
    let subjectSelector = document.getElementById('subjectSelector')
    let newDiv = document.createElement('div')
    let body = document.getElementsByTagName('body')[0]
    newDiv.className = 'mb-3 rounded BHS card'
    newDiv.id = `${bubbleHolderZIndex+2}`
    newDiv.style.height = '9%'
    newDiv.style.width = '100%'
    subjectSelector.appendChild(newDiv)

    let newH5 = document.createElement('h5')
    newH5.className = 'card-title text-center'
    newH5.textContent = 'TEST'
    newDiv.appendChild(newH5)

    let newBubbleHolder = document.createElement('div')
    console.log()
    if(document.getElementById('body3') != null){
        newBubbleHolder.className = "container-lg bg-dark rounded shadow-lg bubbleHolder"
    } else {
        newBubbleHolder.className = "container-lg bg-white rounded shadow-lg bubbleHolder"
    }
    bubbleHolderZIndex ++
    newBubbleHolder.style.zIndex = (bubbleHolderZIndex) 
    body.appendChild(newBubbleHolder)

    var num = document.getElementsByClassName('bubbleHolder').length
    let newBtn = document.createElement('button')
    newBtn.className = 'btn btn-dark text-dark BHS-Btn'
    newBtn.type = 'button'
    newBtn.style.height = '100%'
    newBtn.addEventListener('click',function(){
        let x = document.getElementsByClassName('bubbleHolder')
        for(let i = 0; i < x.length; i++){
            if(x[i].classList.contains("invisible")){
                continue;
            } else{
                x[i].className += " invisible"
            }
        }
        x[num-1].classList.remove("invisible")
    })
    newDiv.appendChild(newBtn)

})


document.getElementById('BHS-btn1').addEventListener('click', function(){
    let x = document.getElementsByClassName('bubbleHolder')
    for(let i = 0; i < x.length; i++){
        if(x[i].classList.contains("invisible")){
            continue;
        } else{
            x[i].className += " invisible"
        }
    }
    x[0].classList.remove("invisible")
})
