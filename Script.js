let element = document.querySelector('.header');
console.log(element);

let contentBox = document.getElementById("main-content");
console.log(contentBox);

let picBoxOne = document.getElementById("box-one");
console.log(picBoxOne);

let picBoxTwo = document.getElementById("box-two");
console.log(picBoxTwo);

let textOne = document.getElementById("article-one");
console.log(textOne);

let textTwo = document.getElementById("article-two");

let anchorOne = document.getElementById("link-one");

let anchorTwo = document.getElementById("link-two");

let button = document.getElementById("btn-switch");
// console.log(button);

button.addEventListener('click', function (click) {
    contentBox.style.background = 'lightsalmon';
    picBoxOne.style.borderRadius = '50%';
    // picBoxOne.style.background = 'lightcyan';
    picBoxOne.style.backgroundImage = " url('./CSS/Images/Netanyahu_Khamenei Three.webp')";
    textOne.style.top = '150px';
    textOne.style.color = 'maroon';
    anchorOne.style.color = 'whitesmoke';
    picBoxTwo.style.borderRadius = '50%';
    // picBoxTwo.style.background = 'lightgreen';
    picBoxTwo.style.backgroundImage = " url('./CSS/Images/Barcelona cuisine.webp')";
    textTwo.style.top = '150px';
    textTwo.style.color = 'darkblue';
    anchorTwo.style.color = 'darkblue';
    console.log("button clicked!");
});
// Note: Sometimes the problem of image path and directory can arise while inserting images via JS, so, you gotta be careful about that. //
