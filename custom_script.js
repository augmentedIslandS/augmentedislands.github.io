function changeIt(number) {
  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
      poster = "Imgs/Posters/shoes_poster.png";
      src = "Models/NikeShoes/NikeShoe1.gltf";
      ios_src = "Models/NikeShoes/NikeShoe1.usdz";
      alt_comment = "Nike AR Shoes";
      break;
    case 1:
      poster = "/Imgs/Posters/dress1_poster.png";
      src = "/Models/Clothing/Dress1.gltf";
      ios_src = "/Models/Clothing/Dress1.usdz";
      alt_comment = "Dress 1";
      break;
    case 2:
      poster = "/Imgs/Posters/dress2_poster.png";
      src = "/Models/Clothing/Dress2.gltf";
      ios_src = "/Models/Clothing/Dress2.usdz";
      alt_comment = "Dress 2";
      break;
    case 3:
      poster = "";
      src = "";
      ios_src = "";
      alt_comment = "";
      break;
    case 4:
      poster = "";
      src = "";
      ios_src = "";
      alt_comment = "";
      break;
    case 5:
      poster = "";
      src = "";
      ios_src = "";
      alt_comment = "";
      break;
    case 6:
      poster = "";
      src = "";
      ios_src = "";
      alt_comment = "";
  }

  //document.getElementById("currentModel").remove();

  //var modelviewer = document.createElement("model-viewer");
  var modelviewer = document.getElementById("currentModel");
  //modelviewer.setAttribute("class", "model");
  //modelviewer.setAttribute("ID", "currentModel");
  modelviewer.setAttribute("poster", poster);
  modelviewer.setAttribute("ios-src", src);
  modelviewer.setAttribute("alt", alt_comment);
  //var shadow = 1;
  //modelviewer.setAttribute("shadow-intensity", shadow);
  //modelviewer.setAttribute("camera-controls", "");
  //modelviewer.setAttribute("ar", "");
  //modelviewer.setAttribute("auto-rotate", "");

  //document.getElementById("modelContainer").appendChild(modelviewer);

}
