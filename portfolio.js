// greetings fn

function greet()
{
    alert("Welcome fellow traveller");
}

//change color
const image=document.querySelector('.profimg');
const leftPane=document.querySelector('.left-pane');

image.addEventListener('mouseover',()=>{
    leftPane.style.backgroundColor='red';
});
image.addEventListener('mouseout',()=>{
    leftPane.style.backgroundColor='#6A9C89'
}
)
