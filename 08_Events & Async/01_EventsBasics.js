//there may be some problem with onclick event , so we should use eventlistner which gives propagator property
// document.getElementById('owl').onclick = function(){
// alert("owl clicked")
// }

// document.getElementById('owl').addEventListener("click", function () {alert("owl clicked")},false)

//attachEvent() , jQuery() ---> old methods


document.getElementById('owl').addEventListener("click", function (e) { console.log(e); })


//event bubbling :-
//  buuble goes from bottom to top ,,,so 1st owl will be selected then ul
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul"); //body te click korle console e "clicked inside the ul" dekhabe
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked"); // ow;=l w click korle 1st "owl clicked" dekhabe then  "clicked inside the ul" dekhabe 
//     e.stopPropagation() // to prevent bubbling it is used ,,, only "owl clicked" will be printed
// }, false)


// event capturing:-
// capturing goes from top to bottom,,,so 1st ul will be selected then owl
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul"); //body te click korle console e "clicked inside the ul" dekhabe
// }, true)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked"); // ow;=l w click korle 1st "clicked inside the ul" dekhabe then "owl clicked" dekhabe
// }, false)

//=====================================================
//preventDefault method prevents default behaviour ,,,for example clicking on google.com leads t google webpage but we don't want that to be happen

document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log("google clicked");
}, false)


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// by clicking on any img it will disappear
document.querySelector("#images").addEventListener('click', function (e) {
    // console.log(e.target);
    //<img id="prayer" width="200px" src="https://images.pexels.co…inysrgb&w=1600&lazy=load" alt=""> gives target/source of event
    // console.log(e.target.parentNode);

// ----------------
    //old method  |
//-----------------
    // rm.parentNode.removeChild(rm); li  er parent means ul ke access kora holo then tar child er upor remove() apply kora holo , kon child seta specify korar jonno removeChild(rm)

// ----------------
    //new method   |
//-----------------

    // let rm = e.target.parentNode;
    // rm.remove();
    // if we click outside of image then whole ul will be removed as outside of image falls under ul,,, so e.target.parentNode returns ul ,,, rm=ul,,, rm.remove() then removes all list items



// ----------------
//modified method  |
//-----------------

    console.log(e.target.tagName);
// img = IMG , link = A, li = LI, ul= UL
    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        let rm = e.target.parentNode;
        rm.remove();
    }
    else{
        console.log("you clicked outside");
    }

}, false)





