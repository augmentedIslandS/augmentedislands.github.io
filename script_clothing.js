//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
        poster = "Imgs/Posters/dress1_poster.png";
        src = "Models/Clothing/Dress1.gltf";
        ios_src = "Models/Clothing/Dress1.usdz";
        alt_comment = "Dress 01";
      break;
    case 1:
        poster = "Imgs/Posters/dress2_poster.png";
        src = "Models/Clothing/Dress2.gltf";
        ios_src = "Models/Clothing/Dress2.usdz";
        alt_comment = "Dress 01";
      break;
    case 2:
        poster = "Imgs/Posters/casual_poster.png";
        src = "Models/Clothing/CasualOutfit.gltf";
        ios_src = "Models/Clothing/CasualOutfit.usdz";
        alt_comment = "Casual Look";
      break;
    case 3:
        poster = "Imgs/Posters/swimsuitD_poster.png";
        src = "Models/Swimsuits/Swimsuit_D.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_D.usdz";
        alt_comment = "Swimsuit";
      break;
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
