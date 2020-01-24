//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
      poster = "Imgs/SurfPosters/OldSchoolTwin.png";
      src = "Models/Surfboards/OldSchoolTwin.gltf";
      ios_src = "Models/Surfboards/OldSchoolTwin.usdz";
      alt_comment = "Old School Twin Texture 01";
      break; 
    case 1:
      poster = "Imgs/SurfPosters/Seahawk.png";
      src = "Models/Surfboards/Seahawk.gltf";
      ios_src = "Models/Surfboards/Seahawk.usdz";
      alt_comment = "Seahawk 01";
      break;
    case 2:
      poster = "Imgs/SurfPosters/DeadlyFlyingTurtle.png";
      src = "Models/Surfboards/DeadlyFlyingTurtle.gltf";
      ios_src = "Models/Surfboards/DeadlyFlyingTurtle.usdz";
      alt_comment = "Deadly Flying Turtle 01";
      break;
    case 3:
      poster = "Imgs/SurfPosters/SpicyFlyingTurtle.png";
      src = "Models/Surfboards/SpicyFlyingTurtle.gltf";
      ios_src = "Models/Surfboards/SpicyFlyingTurtle.usdz";
      alt_comment = "Spicy Flying Turtle 01";
      break;
    case 4:
      poster = "Imgs/SurfPosters/Bushwacker.png";
      src = "Models/Surfboards/Bushwacker.gltf";
      ios_src = "Models/Surfboards/Bushwacker.usdz";
      alt_comment = "Bushwacker 01";
      break;   
    case 5:
      poster = "Imgs/SurfPosters/F-Money.png";
      src = "Models/Surfboards/F-Money.gltf";
      ios_src = "Models/Surfboards/F-Money.usdz";
      alt_comment = "F-Money 01";
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

  //document.getElementById("modelModule").remove();
  //document.getElementById("modelNoModule").remove();

  //reload_mv('https://unpkg.com/@google/model-viewer@v0.8.1/dist/model-viewer.js', 0);
  //reload_mv('https://unpkg.com/@google/model-viewer@v0.8.1/dist/model-viewer-legacy.js', 1);
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
