var input = document.getElementById('input');
var addTodo = document.getElementById('addTodo');
var deleteAll = document.getElementById('deleteAll');
var para = document.getElementById('para');

addTodo.addEventListener('click', function () {
    if (!input.value) return alert('Please Enter Text')

    var newDate = new Date();

    var newPara = `
    <p class="ml-10 mt-3 flex justify-between items-center">
     <span class="text-white text-2xl">* ${input.value}</span> 
       <span class="flex items-center justify-center">
       <span class="text-white mr-5"> 
       ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}<br>${newDate.getMinutes()}:${newDate.getHours()}
        </span>
            <button onclick="edit(this)" class=" border border-2 rounded-md bg-[gray] p-2">Edit</button>
            <button onclick="deleteLine(this)" class="m-2 border border-2 rounded-md bg-[red] p-2">Delete</button>
      </span>
    </p>`;
    para.innerHTML += newPara;
    input.value = "";
});

function edit(params) {
    // console.log(params.parentElement.previousElementSibling);
    var curentValue = params.parentElement.previousElementSibling.innerText;
    var updatedValue = prompt('Enter Value To Edit,',curentValue);
    params.parentElement.previousElementSibling.innerText = updatedValue;
};

function deleteLine(params) {
    // console.log(params.parentElement.parentElement);
    params.parentElement.parentElement.remove();
};

deleteAll.addEventListener('click', function () {
    para.innerHTML = "";
});
