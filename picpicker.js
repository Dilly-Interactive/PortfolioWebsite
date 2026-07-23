/*  
 *   The page will display a picture and 3 buttons.
 * All of the images are tagged with different tags.
 * The buttons will change the picture.
 * Depending which button is pressed, the image may change differently.
 * A "Similar" image has at least one similar tag to the current image.
 * A "Random" image is random and unaffected by tags.
 * A "Different" image shares no tags with the current image.
 */

/*   TAG LIST
 * angel
 * bird
 * building
 * broken
 * bug
 * city
 * clothing
 * dark
 * fire
 * flower
 * food
 * forest
 * gross
 * human
 * indoor
 * mammal
 * meat
 * moon
 * mountain
 * mushroom
 * music
 * plant
 * post
 * rainbow
 * rock
 * sky
 * snow
 * sun
 * sunset
 * tool
 * train
 * tree
 * water
 * wet
 */

//["Images/.jpg", ]

const pictureDatabase = [["Images/angel.jpg", "angel", "snow", "city"], 
["Images/beeflower.jpg", "bug", "flower"], 
["Images/beehivefall.jpg", "bug", "city"], 
["Images/beehiveforest.jpg", "bug", "forest"], 
["Images/bird.jpg", "bird"], 
["Images/birdgrass.jpg", "bird", "grass", "water"], 
["Images/birdscity.jpg", "bird", "city", "pole", "building"], 
["Images/bugflower.jpg", "bug", "flower"], 
["Images/butterflyblue.jpg", "bug"], 
["Images/butterflyflower.jpg", "bug", "flower"], 
["Images/canyon.jpg", "forest", "water", "rock"], 
["Images/carvedrock.jpg", "water", "rock"], 
["Images/catdoor.jpg", "mammal"], 
["Images/catwindow.jpg", "mammal", "dark"], 
["Images/chinagarment.jpg", "clothing"], 
["Images/cntower.png", "building"], 
["Images/cokehash.png", "human", "dark", "city"], 
["Images/crow.jpg", "bird"], 
["Images/crowlamp.jpg", "bird", "pole"], 
["Images/daymoon1.jpg", "moon", "pole", "tree"], 
["Images/daymoon2.jpg", "moon"], 
["Images/dewdrops.jpg", "plant", "grass"], 
["Images/dog.jpg", "mammal", "city", "dark"], 
["Images/dragonflygrass.jpg", "bug", "grass"], 
["Images/ducksit.jpg", "bird", "water", "tree"], 
["Images/evening1.jpg", "sunset", "pole"], 
["Images/evening2.jpg", "sunset", "pole", "dark", "building"], 
["Images/evening3.jpg", "sunset", "city", "pole", "dark", "tree"], 
["Images/flowergodray.jpg", "flower", "grass"], 
["Images/flowerphotobomber.jpg", "flower"], 
["Images/fossil.jpg", "rock", "plant"], 
["Images/glowingmoon.jpg", "moon", "dark", "tree", "building"], 
["Images/goldfinch.jpg", "bird", "tree"], 
["Images/greendaysinger.jpg", "human", "music"], 
["Images/herongrass.jpg", "bird", "water", "tree", "grass"], 
["Images/hoziersinger.jpg", "human", "music"], 
["Images/icedbranches.jpg", "tree", "city", "snow"], 
["Images/jessewellessinger.jpg", "human", "music", "indoor"], 
["Images/justrained.jpg", "city", "wet"], 
["Images/knives.jpg", "tool"], 
["Images/moondarkness.jpg", "moon", "dark"], 
["Images/moonpost.jpg", "moon", "city", "pole"], 
["Images/mountainrocks.jpg", "mountain", "rock", "forest", "water"], 
["Images/mushroom1.jpg", "mushroom", "plant"], 
["Images/mushroom2.jpg", "mushroom", "plant"], 
["Images/poop.jpg", "gross", "city"], 
["Images/pumpkin.jpg", "indoor", "tool"], 
["Images/racoontree.jpg", "tree", "mammal"], 
["Images/rainbow.jpg", "forest", "mountain", "rainbow"], 
["Images/ribs1.jpg", "indoor", "food"], 
["Images/ribs2.jpg", "indoor", "food"], 
["Images/squirrelfood.jpg", "mammal", "city"], 
["Images/squirrelfood2.jpg", "mammal", "city", "snow"], 
["Images/trainfog.jpg", "train"], 
["Images/trainfogvisitor.jpg", "human", "train"], 
["Images/trainhat.jpg", "clothing", "train"], 
["Images/tuliphouse.jpg", "flower", "building", "tree"], 
["Images/tulipsgradient.jpg", "flower"], 
["Images/tulipstreesky.jpg", "flower", "tree"], 
["Images/tuliptuliptree.jpg", "flower", "tree"], 
["Images/universityriver.jpg", "building", "water", "forest"], 
["Images/wagyusteak.jpg", "indoor", "food"], 
["Images/wasbike.jpg", "dark", "city", "tool"]];

var currentImage = pictureDatabase[0]
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//console.log('hello world!');
//console.log(pictureDatabase.length);

async function randomizeImage(){
    var i = 0;
    i = Math.floor(Math.random() * pictureDatabase.length);
    document.getElementById("photodisplay").src = pictureDatabase[i][0];
    document.getElementById("imagetitle").textContent = cutFolder(pictureDatabase[i][0]);
    currentImage = pictureDatabase[i];
    //console.log("randomizing!");
    //console.log(currentImage[0]);
    await delay(50); 
    window.scrollTo(0, document.body.scrollHeight);
}

async function similarImage(){
    var i = 0;
    i = Math.floor(Math.random() * pictureDatabase.length);
    var match = currentImage.some(r=> pictureDatabase[i].includes(r));
    //console.log(match);
    while (!match || pictureDatabase[i] == currentImage){
        i = Math.floor(Math.random() * pictureDatabase.length);
        match = currentImage.some(r=> pictureDatabase[i].includes(r));
    } 
    document.getElementById("photodisplay").src = pictureDatabase[i][0];
    document.getElementById("imagetitle").textContent = cutFolder(pictureDatabase[i][0]);
    currentImage = pictureDatabase[i];
    //console.log("finding similar image!");
    //console.log(currentImage[0]);
    await delay(50); 
    window.scrollTo(0, document.body.scrollHeight);
}

async function differentImage(){
    var i = 0;
    i = Math.floor(Math.random() * pictureDatabase.length);
    var match = currentImage.some(r=> pictureDatabase[i].includes(r));
    //console.log(match);
    while (match){
        i = Math.floor(Math.random() * pictureDatabase.length);
        match = currentImage.some(r=> pictureDatabase[i].includes(r));
    } 
    document.getElementById("photodisplay").src = pictureDatabase[i][0];
    document.getElementById("imagetitle").textContent = cutFolder(pictureDatabase[i][0]);
    currentImage = pictureDatabase[i];
    //console.log("finding different image!");
    //console.log(currentImage[0]);
    await delay(50); 
    window.scrollTo(0, document.body.scrollHeight);
}

async function changeImage() {
    document.getElementById("photodisplay").src = "Images/wasbike.jpg";
}

function cutFolder(title) {
    var finishedTitle;
    finishedTitle = title.replace("Images/", "");
    return finishedTitle;
}