var images=[   "fam.jpg",
"Rayan.jpg",
    "dad.jpg",
    "mom.jpg",
    "sister.webp"
];
var names=["My Family",
    "Rayan Vanigota",
    "Pankaj Vanigota",
    "Neetu Vanigota",
    "Yashvi Vanigota"
];
var i=0;
function update(){
    i++;
    var nooffaminarray=5;
    if(i>nooffaminarray){
        i=0;
    }
    var updatedImage=images[i];
    var updatedNames=names[i];
    document.getElementById("img_member").src=updatedImage;
    document.getElementById("name_member").innerHTML=updatedNames;
}