import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAXpY4mGSbBYn_mrY6YfihYjzFlNQ9yLD0",
    authDomain: "smit-learning.firebaseapp.com",
    projectId: "smit-learning",
    storageBucket: "smit-learning.appspot.com",
    messagingSenderId: "734240451877",
    appId: "1:734240451877:web:e7b35be3e6645a67333ecc",
    measurementId: "G-FTJDX6BRE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

let todo_collectins = collection(db, 'todos');

const todo_input = document.getElementById('todo_input');
const add_todo = document.getElementById('add_todo');
const todo_list = document.getElementById('todo_list');

getTodoToDb();
add_todo.addEventListener('click', addTodoToDb);

async function addTodoToDb() {
    try {
        const obj = {
            todo: todo_input.value,
            date: new Date().toISOString(),
        };
        const docRef = await addDoc(todo_collectins, obj);
        // console.log("Document written with ID: ", docRef);
        getTodoToDb();
        todo_input.value = "";

    } catch (e) {
        console.error("Error adding document: ", e);
    };

};

async function getTodoToDb() {
    try {
        const querySnapshot = await getDocs(todo_collectins);
        todo_list.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const { todo, date } = doc.data();
            const ele = `<li id="${doc.id}">${todo} - ${new Date(date).toLocaleDateString()}</li>`;
            todo_list.innerHTML += ele;
            // console.log(todo, date);
        });

        todo_list.childNodes.forEach((li) => {
            li.addEventListener('click', deleteTodo);
        });

    } catch (error) {
        console.log(error);
    };
};

async function deleteTodo() {
    try {
        const docId = this.id;
        const docCollection = doc(db, 'todos', docId);
        const docRef = await deleteDoc(docCollection);
        getTodoToDb();
        // console.log(docRef);
    } catch (error) {
        console.log(error);
    };
};


