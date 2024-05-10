import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// Set up database connection
const appSettings = {
    databaseURL: "https://realtime-database-ebaca-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsListInDB = ref(database, "endorsementsList");

const endorsementTitleEl = document.querySelector("#endorsement-title");
const endorsementMessageEl = document.querySelector("#endorsement-message");
const senderEl = document.querySelector("#sender");
const publishBtn = document.querySelector("#publish-btn");
const endorsementsListEl = document.querySelector("#endorsements-list");

endorsementTitleEl.addEventListener("keypress", listenForEnterKey);
endorsementMessageEl.addEventListener("keypress", listenForEnterKey);
senderEl.addEventListener("keypress", listenForEnterKey);
publishBtn.addEventListener("click", function () {
    const endorsementTitle = endorsementTitleEl.value;
    const endorsementMessage = endorsementMessageEl.value;
    const sender = senderEl.value;

    if (endorsementTitle && endorsementMessage && sender) {
        push(endorsementsListInDB, pushObject(endorsementTitle, endorsementMessage, sender))
        clearInputFields();
    }    
});

onValue(endorsementsListInDB, function (snapshot) {
    if (snapshot.exists()) {
        const endorsementsList = Object.entries(snapshot.val());
        clearEndorsementsList()

        for (let i = endorsementsList.length - 1; i >= 0; i--) {
            const endorsement = endorsementsList[i];
            appendToEndorsementsList(endorsement);
        }
    } else {
        endorsementsListEl.innerHTML = "<p>No endorsements yet...</p>";
    }
});

function appendToEndorsementsList(endorsement) {
    const endorsementID = endorsement[0];
    const endorsementEl = document.createElement("li");
    endorsementEl.classList.add("endorsement");
    
    endorsementEl.innerHTML = `
    <div class="endorsement-title">${endorsement[1].title}</div>
    <div class="sender">From: ${endorsement[1].sender}</div>
    <div class="endorsement-message">${endorsement[1].message}</div>
    <div class="likes-and-dislikes">
        <button class="like-btn"><img src="images/like.svg" alt="like button"></button>
        ${endorsement[1].likes}
        <button class="dislike-btn"><img src="images/dislike.svg" alt="dislike button"></button>
        ${endorsement[1].dislikes}
    </div>
    `;

    const likeBtn = endorsementEl.querySelector(".like-btn");
    const dislikeBtn = endorsementEl.querySelector(".dislike-btn");

    likeBtn.addEventListener("click", function () {
        const exactLocationOfEndorsement = ref(database, `endorsementsList/${endorsementID}`);
        update(exactLocationOfEndorsement, {
            likes: endorsement[1].likes + 1
        });
    });
    dislikeBtn.addEventListener("click", function () {
        const exactLocationOfEndorsement = ref(database, `endorsementsList/${endorsementID}`);
        update(exactLocationOfEndorsement, {
            dislikes: endorsement[1].dislikes + 1
        });
    });

    document.querySelector("#endorsements-list").appendChild(endorsementEl);
}

function listenForEnterKey(event) {
    if (event.key === "Enter") {
        publishBtn.click();
    }
}

function pushObject(title, message, sender) {
    return {
        title: title,
        message: message,
        sender: sender,
        likes: 0,
        dislikes: 0
    }
}

function clearEndorsementsList() {
    document.querySelector("#endorsements-list").innerHTML = "";
}

function clearInputFields() {
    endorsementTitleEl.value = "";
    endorsementMessageEl.value = "";
    senderEl.value = "";
}