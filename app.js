// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

/*The purpose of this exercise is to add multiple images by writing a javascript code. Logic is simply like that:
//I have the baseUrl=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/ and it shows one 
//pokemon image and the second url is https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png 
//which shows the second image we want to addd on. Urls simply go like that and i will add multiple images(1.png, 2.png, 3.png....)
*/
const container = document.querySelector("#container");
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //base url

for (let i = 1; i < 105; i++) {
    /*Now let's create our structure for every image, it will be like this:
    <div>
        <img>
            <span>

            </span>
        </img>
    </div>
    */
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span")
    label.innerText = `${i}.`;
    const newImg = document.createElement("img"); //creating the image element in every for loop
    newImg.src = `${baseUrl}${i}.png`; //new url structure
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
