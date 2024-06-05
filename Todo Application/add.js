var input = document.getElementById('input');
// input button
// var addTodo = document.getElementById('addTodo');   
var deleteAll = document.getElementById('deleteAll');
var para = document.getElementById('para');
var login_container = document.getElementById('login_container');
var home_container = document.getElementById('home_container');
var email = document.getElementById('email');
var password = document.getElementById('password');
var user_email = document.getElementById('user_email');
var specialEmail = "admin@gmail.com"


// addTodo.addEventListener('click', function () {
//     if (!input.value) return alert('Please Enter Text')

//     var newDate = new Date();

//     var newPara = `
//     <p class="ml-10 mt-3 flex justify-between items-center">
//      <span class="text-white text-2xl">* ${input.value}</span> 
//        <span class="flex items-center justify-center">
//        <span class="text-white mr-5"> 
//        ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}<br>${newDate.getMinutes()}:${newDate.getHours()}
//         </span>
//             <button onclick="edit(this)" class=" border border-2 rounded-md bg-[gray] p-2">Edit</button>
//             <button onclick="deleteLine(this)" class="m-2 border border-2 rounded-md bg-[red] p-2">Delete</button>
//       </span>
//     </p>`;
//     para.innerHTML += newPara;
//     input.value = "";
// });

function edit(params) {
    // console.log(params.parentElement.previousElementSibling);
    var curentValue = params.parentElement.previousElementSibling.innerText;
    var updatedValue = prompt('Enter Value To Edit,', curentValue);
    params.parentElement.previousElementSibling.innerText = updatedValue;

};



function deleteLine(params) {
    // console.log(params.parentElement.parentElement);
    params.parentElement.parentElement.remove();
    
};

deleteAll.addEventListener('click', function () {
    para.innerHTML = "";
    localStorage.removeItem('notes');
});

function login_btn() {
    if (!email.value || !password.value) return alert("Please add email and password.");
    localStorage.setItem("Email", email.value);
    if (email.value === specialEmail) {
        console.log('hello admin')
    }
    check_user();
};

function check_user() {
    var storedEmail = localStorage.getItem("Email");
    if (storedEmail) {
        login_container.style.display = "none";
        home_container.style.display = "block";
        user_email.innerHTML = storedEmail;
    } else {
        login_container.style.display = "block";
        home_container.style.display = "none";
    }
};


check_user();


function logout() {
    localStorage.removeItem('Email');
    check_user();
};

function submitnotes() {
    var email = localStorage.getItem("Email");

    var obj = {
        email: email,
        notes: input.value,
    };

    saveValueInStorage(obj);
    input.value = "";
};

function saveValueInStorage(obj) {
    var notes = localStorage.getItem('notes');

    if (notes) {
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem("notes", JSON.stringify(notes));
    } else {
        notes = [obj];
        localStorage.setItem("notes", JSON.stringify(notes));
    };
    displayUserNotes();
};

function displayUserNotes() {
    var notes = localStorage.getItem("notes");
    var currentUser = localStorage.getItem("Email");
    if (notes) {
        para.innerHTML = "";
        notes = JSON.parse(notes);
        notes.forEach(function (data, ind) {
            if (data.email === currentUser) {
                var newDate = new Date();
                var newPara = `
    <p class="ml-10 mt-3 flex justify-between items-center">
     <span class="text-white text-2xl">* ${data.notes}</span> 
       <span class="flex items-center justify-center">
       <span class="text-white mr-5"> 
       ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}<br>${newDate.getMinutes()}:${newDate.getHours()}
        </span>
            <button onclick="edit(this)" class=" border border-2 rounded-md bg-[gray] p-2">Edit</button>
            <button onclick="deleteLine(this)" class="m-2 border border-2 rounded-md bg-[red] p-2">Delete</button>
      </span>
    </p>`;
                para.innerHTML += newPara;
            };
        });
    };
};

displayUserNotes();
