var user_number = document.getElementById("user_number")
var random_number = document.getElementById("random_number")
var result = document.getElementById("result")
var info_box_result = document.getElementById("info_box_result")
var win_html = document.getElementById("win")
var loss_html = document.getElementById("loss")
var total = document.getElementById("total")
var msg = document.getElementById("msg")

count = 10;
win = 0;
loss = 0;

function tryMyLuck(userNumber) {
    // alert(userNumber)
    var randomNumber = Math.random() * 6;
    var ceil = Math.ceil(randomNumber)
    // console.log(ceil);
    user_number.innerText = userNumber;
    random_number.innerText = ceil;
    total.innerText = --count;

    if (userNumber === ceil) {
        // console.log("you win");
        result.innerText = "You Won" 
        // info_box_result.style.backgroundColor = "Green"
        win_html.innerText = ++win     
    } else{
        // console.log("you loss");
        result.innerText = "You Loss"
        // info_box_result.style.borderColor = "Red"
        loss_html.innerText = ++loss
    }
  checkresult();
}

function checkresult() {
    if (count == 0) {
        if (win >= 3) {
            msg.innerText = "Congrats ! You Won"
        } else {
            msg.innerText = "Sorry ! You Loss Try Again"
        }
        count= 10;
        win = 0;
        loss = 0;
        total.innerText = count;
        win_html.innerText = loss;
        loss_html.innerText = win;
    } 
}