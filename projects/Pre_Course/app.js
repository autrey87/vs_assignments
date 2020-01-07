const ericPics = [href = "pic1.jpg", href = "pic2.jpg", href = "pic3.jpg", href = "https://mitchrappfan.files.wordpress.com/2015/05/under-construction.gif"]
const captions = ["Good Morning World!! Now, click the button..", "One of my favorite people at one one of my favorite places", "When I was cooler.", "sorry I havent figured this out yet. Click the button, not the picture.."]
var count = -1
let iteration = 0
const button = document.getElementById("button")
const picBox = document.getElementById("picBox")
const caption = document.getElementById("caption")
function clickButton() {
    if (count < 1) {
        count++
        picBox.src = (ericPics[count])
        caption.innerHTML = (captions[count])
        button.innerHTML = "Next"
    }
    else if (count <= 1) {
        count++
        picBox.src = (ericPics[count])
        caption.innerHTML = (captions[count])
        button.innerHTML = "Start Over"
    }
    else {
        count = 0
        picBox.src = (ericPics[count])
        caption.innerHTML = (captions[count])
        button.innerHTML = "Next"
    }
    iteration++
    console.log(iteration)
    if (iteration >= 3){
        iteration = 0
    }
}
function picButton() {
    for (i = 0; i < ericPics.length; i++) {
        picBox.src = (ericPics[i])
        caption.innerHTML = (captions[i])
        button.innerHTML = "Start Over"
    }
}
