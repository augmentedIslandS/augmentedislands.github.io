//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/OldSchoolTwin.gltf";
      ios_src = "Models/Surfboards/OldSchoolTwin.usdz";
      alt_comment = "Old School Twin Texture 01";
      break; 
    case 1:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/Seahawk.gltf";
      ios_src = "Models/Surfboards/Seahawk.usdz";
      alt_comment = "Seahawk 01";
      break;
    case 2:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/DeadlyFlyingTurtle.gltf";
      ios_src = "Models/Surfboards/DeadlyFlyingTurtle.usdz";
      alt_comment = "Deadly Flying Turtle 01";
      break;
    case 3:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/SpicyFlyingTurtle.gltf";
      ios_src = "Models/Surfboards/SpicyFlyingTurtle.usdz";
      alt_comment = "Spicy Flying Turtle 01";
      break;
    case 4:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/Bushwacker.gltf";
      ios_src = "Models/Surfboards/Bushwacker.usdz";
      alt_comment = "Bushwacker 01";
      break;   
    case 5:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/F-Money.gltf";
      ios_src = "Models/Surfboards/F-Money.usdz";
      alt_comment = "F-Money 01";
      break; 
    case 6:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/TurTwin.gltf";
      ios_src = "Models/Surfboards/TurTwin.usdz";
      alt_comment = "Tur Twin";
      break; 
    case 7:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/NewToy.gltf";
      ios_src = "Models/Surfboards/NewToy.usdz";
      alt_comment = "New Toy";
      break; 
    case 8:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/Hipjell.gltf";
      ios_src = "Models/Surfboards/Hipjell.usdz";
      alt_comment = "Hipjell";
      break; 
    case 9:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/RXP.gltf";
      ios_src = "Models/Surfboards/RXP.usdz";
      alt_comment = "RXP";
      break; 
    case 10:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/G-Nome.gltf";
      ios_src = "Models/Surfboards/G-Nome.usdz";
      alt_comment = "G-Nome";
      break; 
    case 11:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/TwinRoyale.gltf";
      ios_src = "Models/Surfboards/TwinRoyale.usdz";
      alt_comment = "Twin Royale";
      break; 
    case 12:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/V12FlyingTurtle.gltf";
      ios_src = "Models/Surfboards/V12FlyingTurtle.usdz";
      alt_comment = "V12 Flying Turtle";
      break; 
    case 13:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/NewBuddy.gltf";
      ios_src = "Models/Surfboards/NewBuddy.usdz";
      alt_comment = "New Buddy";
      break; 
    case 14:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/PROIIXV.gltf";
      ios_src = "Models/Surfboards/PROIIXV.usdz";
      alt_comment = "PRO II XV";
      break; 
    case 15:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/CalTwin.gltf";
      ios_src = "Models/Surfboards/CalTwin.usdz";
      alt_comment = "Cal Twin";
      break; 
    case 16:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/NDR.gltf";
      ios_src = "Models/Surfboards/NDR.usdz";
      alt_comment = "NDR";
      break; 
    case 17:
      //poster = "Imgs/SurfPosters/SpanishOmelette.png";
      src = "Models/Surfboards/Snowboard.gltf";
      ios_src = "Models/Surfboards/Snowboard.usdz";
      alt_comment = "Wide Wise 2020";
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
