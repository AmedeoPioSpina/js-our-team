const users = [
    {
        fullName: "Wayne Barnett",
        job: "Founder & CEO",
        referenceImage: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName: "Angela Caroll",
        job: "Chief Editor",
        referenceImage: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Walter Gordon",
        job: "Office Manger",
        referenceImage: "../img/walter-gordon-office-manager.jpg"
    },
    {
        fullName: "Angela Lopez",
        job: "Social Media Manager",
        referenceImage: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        fullName: "Scott Estrada",
        job: "Developer",
        referenceImage: "../img/scott-estrada-developer.jpg"
    },
    {
        fullName: "Barbara Ramos",
        job: "Graphic Designer",
        referenceImage: "../img/barbara-ramos-graphic-designer.jpg"
    },
]

let usersCardsContainer = document.querySelector(".users-cards-container");

for(let i = 0; i < users.length; i++){
    let articleUserCard = document.createElement("article");
    articleUserCard.classList.add("user-card");
    articleUserCard.innerHTML = 
    `
    <div class="reference-image-container">
        <img src="${users[i].referenceImage}" alt="${users[i].fullName} image">
    </div>
    <h2>
        ${users[i].fullName}
    </h2>
    <p>
        ${users[i].job}
    </p>
    `;
    usersCardsContainer.appendChild(articleUserCard);
}