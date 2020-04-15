//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
        poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Milkbone.gltf";
        ios_src = "Models/Smuckers/Milkbone.usdz";
        alt_comment = "Smuckers Milkbone 01";
      break;
    case 1:
        poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Uncrustables.gltf";
        ios_src = "Models/Smuckers/Uncrustables.usdz";
        alt_comment = "Smuckers Uncrustables 01";
      break;
    case 2:
        poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Jam.gltf";
        ios_src = "Models/Smuckers/Jam.usdz";
        alt_comment = "Smuckers Jam 01";
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
