var studentsName = [
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        class: '10th Grade',
    },
    {
        name: 'Jane Smith',
        fatherName: 'Robert Smith',
        age: 15,
        rollNo: '102',
        class: '9th Grade',
    },
    {
        name: 'Michael Johnson',
        fatherName: 'James Johnson',
        age: 17,
        rollNo: '103',
        class: '11th Grade',
    },
    {
        name: 'Emily Davis',
        fatherName: 'William Davis',
        age: 14,
        rollNo: '104',
        class: '8th Grade',
    },
    {
        name: 'Jessica Brown',
        fatherName: 'Charles Brown',
        age: 16,
        rollNo: '105',
        class: '10th Grade',
    },
    {
        name: 'Daniel Wilson',
        fatherName: 'Thomas Wilson',
        age: 15,
        rollNo: '106',
        class: '9th Grade',
    },
    {
        name: 'Sarah Taylor',
        fatherName: 'Andrew Taylor',
        age: 17,
        rollNo: '107',
        class: '11th Grade',
    },
    {
        name: 'David Lee',
        fatherName: 'George Lee',
        age: 14,
        rollNo: '108',
        class: '8th Grade',
    },
    {
        name: 'Laura Martin',
        fatherName: 'Paul Martin',
        age: 16,
        rollNo: '109',
        class: '10th Grade',
    },
    {
        name: 'Kevin White',
        fatherName: 'Mark White',
        age: 15,
        rollNo: '110',
        class: '9th Grade',
    },
    {
        name: 'Anna Harris',
        fatherName: 'Steven Harris',
        age: 17,
        rollNo: '111',
        class: '11th Grade',
    },
    {
        name: 'Brian Clark',
        fatherName: 'Edward Clark',
        age: 14,
        rollNo: '112',
        class: '8th Grade',
    },
    {
        name: 'Sophia Lewis',
        fatherName: 'Henry Lewis',
        age: 16,
        rollNo: '113',
        class: '10th Grade',
    },
    {
        name: 'Christopher Walker',
        fatherName: 'Frank Walker',
        age: 15,
        rollNo: '114',
        class: '9th Grade',
    },
    {
        name: 'Grace Hall',
        fatherName: 'Peter Hall',
        age: 17,
        rollNo: '115',
        class: '11th Grade',
    },
    {
        name: 'Justin Allen',
        fatherName: 'Patrick Allen',
        age: 14,
        rollNo: '116',
        class: '8th Grade',
    },
    {
        name: 'Olivia Young',
        fatherName: 'Bruce Young',
        age: 16,
        rollNo: '117',
        class: '10th Grade',
    },
    {
        name: 'Nathan Hernandez',
        fatherName: 'Larry Hernandez',
        age: 15,
        rollNo: '118',
        class: '9th Grade',
    },
    {
        name: 'Mia King',
        fatherName: 'Joe King',
        age: 17,
        rollNo: '119',
        class: '11th Grade',
    },
    {
        name: 'Ethan Wright',
        fatherName: 'Stanley Wright',
        age: 14,
        rollNo: '120',
        class: '8th Grade',
    },
    {
        name: 'Ava Lopez',
        fatherName: 'Timothy Lopez',
        age: 16,
        rollNo: '121',
        class: '10th Grade',
    },
    {
        name: 'Jacob Scott',
        fatherName: 'Chris Scott',
        age: 15,
        rollNo: '122',
        class: '9th Grade',
    },
    {
        name: 'Samantha Green',
        fatherName: 'Shawn Green',
        age: 17,
        rollNo: '123',
        class: '11th Grade',
    },
    {
        name: 'Andrew Adams',
        fatherName: 'Jason Adams',
        age: 14,
        rollNo: '124',
        class: '8th Grade',
    },
    {
        name: 'Ella Baker',
        fatherName: 'Ryan Baker',
        age: 16,
        rollNo: '125',
        class: '10th Grade',
    },
];

var user_table = document.getElementById('user_table');
var total_students = document.getElementById('total_students');
var total_present = document.getElementById('total_present');
var total_absent = document.getElementById('total_absent');
var total_leave = document.getElementById('total_leave');
var userName = document.getElementById('name');
var fathername = document.getElementById('fathername');
var rollno = document.getElementById('rollno');
var age = document.getElementById('age');
var userClass = document.getElementById('userClass');


function addData() {

    user_table.innerHTML = "";

    for (let i = 0; i < studentsName.length; i++) {

        user_table.innerHTML += `<tr class="border border-2 border-[black]">
        <td class="border border-2 border-[black] p-2">${i + 1}</td>
        <td class="border border-2 border-[black] p-2">${studentsName[i].name}</td>
        <td class="border border-2 border-[black] p-2">${studentsName[i].fatherName}</td>
        <td class="border border-2 border-[black] p-2">${studentsName[i].rollNo}</td>
        <td class="border border-2 border-[black] p-2">${studentsName[i].age}</td>
        <td class="border border-2 border-[black] p-2">${studentsName[i].class}</td>
    </tr>`;

    }
    total_students.innerHTML = studentsName.length;


}

addData();

function addUser() {
    var obj = {

        name: userName.value,
        fatherName: fathername.value,
        rollNo: rollno.value,
        age: age.value,
        class: userClass.value,
    };

    studentsName.push(obj);
    addData();

    userName.value = "";
    fathername.value = "";
    rollno.value = "";
    age.value = "";
    userClass.value = "";
}


function btn(element) {
    if (element === 'Present') {
        total_present.innerHTML = parseInt(total_present.innerHTML) + 1;
    } else if (element === 'Absent') {
        total_absent.innerHTML = parseInt(total_absent.innerHTML) + 1;
    } else if (element === 'Leave') {
        total_leave.innerHTML = parseInt(total_leave.innerHTML) + 1;
    };
};