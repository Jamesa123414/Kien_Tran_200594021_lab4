const header = document.querySelector("header");
const section = document.querySelector("section");

async function populate() {
    const url = "js/i-scream.json";
    const response = await fetch(url);
    const responseJson = await response.json();
    populateHeader(responseJson);
    showTopFlavors(responseJson);
}

populate();

function populateHeader(jsonData) {
    let h1 = document.createElement("h1");
    h1.textContent = jsonData.companyName;
    header.appendChild(h1);
}

function showTopFlavors(jsonData) {
    let topFlavors = jsonData.topFlavors;
    for (let flavor of topFlavors) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let list = document.createElement("ul");

        h2.textContent = flavor.name;
        p1.textContent = "Calories: " + flavor.calories;
        p2.textContent = "Type: " + flavor.type;
        image.src = flavor.image;

        for (let ingredient of flavor.ingredients) {
            let listItem = document.createElement("li");
            listItem.textContent = ingredient;
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);
    }
}
