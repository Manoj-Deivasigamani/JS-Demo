document.addEventListener("DOMContentLoaded", function() {
    const printButton = document.getElementById("printButton");
    const outputParagraph = document.getElementById("output");
    
    printButton.addEventListener("click", function() {
        let numbers = "";
        for (let i = 1; i <= 100; i++) {
            numbers += i + " ";
        }
        outputParagraph.textContent = numbers;
    });
});


//external same onfocus and onblue implementation in js
let lastname=document.getElementById('ln');
lastname.onfocus=function()
{
    lastname.style.backgroundColor='yellow';
};
lastname.onblur=function()
{
    lastname.style.backgroundColor='brown';
};


//for the usage of hover
let qs=document.querySelector('#userInfo');
qs.onmouseover=function()
{
    qs.style.color='red';
}
qs.onmouseout=function()
{
    qs.style.color='blue';
}


//ADDEVENTLISTENER METHOD-predefined function
function displayAlert()
{
    alert('u successfully signed in')
}
document.getElementById('submits')
.addEventListener('click',displayAlert);



//ADDEVENTLISTENER METHOD-anonymous function
document.getElementById('signin')
.addEventListener('click',function()
    {
        alert('you clicked sign up button pls enter all ur details')
    }
);

document.getElementById('mailee')
.addEventListener('focus',function()
    {
        //document.getElementById('mailee').style.background='yellow' otherwise written as
        console.log(this);
        this.style.background='yellow'
    }
)
document.getElementById('mailee')
.addEventListener('blur',function()
    {
        //document.getElementById('mailee').style.background='yellow' otherwise written as
        console.log(this);
        this.style.background='grey'
    }
)