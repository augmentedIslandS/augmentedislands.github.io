//import '@google/model-viewer';

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
      alt_comment = "Nike AR Shoes HD";
      break;
    case 1:
      poster = "/Imgs/Posters/dress1_poster.png";
      src = "/Models/Clothing/Dress1.gltf";
      ios_src = "/Models/Clothing/Dress1.usdz";
      alt_comment = "Dress 1 HD";
      break;
    case 2:
      poster = "/Imgs/Posters/dress2_poster.png";
      src = "/Models/Clothing/Dress2.gltf";
      ios_src = "/Models/Clothing/Dress2.usdz";
      alt_comment = "Dress 2 HD";
      break;
    case 3:
      poster = "/Imgs/Posters/burger_poster.png";
      src = "/Models/Misc/Burger/burger.glb";
      ios_src = "/Models/Misc/Burger/burger.usdz";
      alt_comment = "Burger Ultra HD";
      break;
    case 4:
      poster = "/Imgs/Posters/casual_poster.png";
      src = "/Models/Clothing/CasualOutfit.gltf";
      ios_src = "/Models/Clothing/CasualOutfit.usdz";
      alt_comment = "Casual HD";
      break;
    case 5:
    poster = "/Imgs/Posters/pipe_poster.png";
    src = "/Models/Pipe/USPipe_CrossSection.gltf";
    ios_src = "/Models/Pipe/USPipe_CrossSection.usdz";
    alt_comment = "Pipe 2.0";
      break;
    case 6:
      poster = "";
      src = "";
      ios_src = "";
      alt_comment = "";
  }

  document.getElementById("currentModel").remove();

  var modelviewer = document.createElement("model-viewer");
  modelviewer.setAttribute("class", "model");
  modelviewer.setAttribute("ID", "currentModel");
  modelviewer.setAttribute("poster", poster);
  //model.src = src;
  modelviewer.setAttribute("src", src);
  modelviewer.setAttribute("ios-src", ios_src);
  modelviewer.setAttribute("alt", alt_comment);
  var shadow = 1;
  modelviewer.setAttribute("shadow-intensity", shadow);
  modelviewer.setAttribute("camera-controls", '');
  modelviewer.setAttribute("ar", '');
  modelviewer.setAttribute("auto-rotate", '');
  modelviewer.setAttribute("autoplay", "true");

  document.getElementById("modelContainer").appendChild(modelviewer);

  //document.getElementById("modelModule").remove();
  //document.getElementById("modelNoModule").remove();

  //reload_mv('https://unpkg.com/@google/model-viewer@v0.7.2/dist/model-viewer.js', 0);
  //reload_mv('https://unpkg.com/@google/model-viewer@v0.7.2/dist/model-viewer-legacy.js', 1);
}

function reload_mv(srcUrlContains, isModule) {
  var scriptsContainer = document.getElementById('model-scripts-container');
  var script = document.createElement('script');

  if (isModule == 0) {
    script.setAttribute("ID", "modelModule");
    script.setAttribute("type", "module");
  }
  if (isModule == 1) {
    script.setAttribute("ID", "modelNoModule");
    script.setAttribute("nomodule", '');
  }
  script.src = srcUrlContains;
  scriptsContainer.appendChild(script);
}
