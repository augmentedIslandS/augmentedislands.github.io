//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
        //poster = "Imgs/Posters/shoes_poster.png";
        src = "Models/Demo/camera.glb";
        ios_src = "Models/Demo/camera.usdz";
        alt_comment = "Retro Camera";
      break;
    case 1:
        //poster = "Imgs/Posters/dress1_poster.png";
        src = "Models/Demo/arcane_shimmer_axe.glb";
        ios_src = "Models/Demo/arcane_shimmer_axe.usdz";
        alt_comment = "Fancy Axe";
      break;
    case 2:
        //poster = "Imgs/Posters/dress2_poster.png";
        src = "Models/Demo/fantasy_mini_grimoire.glb";
        ios_src = "Models/Demo/fantasy_mini_grimoire.usdz";
        alt_comment = "Grimoire";
      break;
    case 3:
        //poster = "Imgs/Posters/casual_poster.png";
        src = "Models/Demo/lambo.glb";
        ios_src = "Models/Demo/lambo.usdz";
        alt_comment = "Lambo";
      break;
    case 4:
        //poster = "Imgs/Posters/swimsuitA_poster.png";
        src = "Models/Demo/lord_inquisitor_servo_skull.glb";
        ios_src = "Models/Demo/lord_inquisitor_servo_skull.usdz";
        alt_comment = "Lord Inquisitor";
      break;
    case 5:
        //poster = "Imgs/Posters/swimsuitB_poster.png";
        src = "Models/Demo/model_47a_-_loggerhead_sea_turtle.glb";
        ios_src = "Models/Demo/model_47a_-_loggerhead_sea_turtle.usdz";
        alt_comment = "Sea Turtle";
      break;
    case 6:
        //poster = "Imgs/Posters/swimsuitC_poster.png";
        src = "Models/Demo/city_survival_girl.glb";
        ios_src = "Models/Demo/city_survival_girl.usdz";
        alt_comment = "Survival Girl";
	 break;
    case 7:
        //poster = "Imgs/Posters/swimsuitD_poster.png";
        src = "Models/Demo/veribot.glb";
        ios_src = "Models/Demo/veribot.usdz";
        alt_comment = "Veribot";
      break;
    case 8:
        //poster = "Imgs/Posters/swimsuitE_poster.png";
        src = "Models/Demo/the_steampunk_vault.glb";
        ios_src = "Models/Demo/the_steampunk_vault.usdz";
        alt_comment = "Vault";
      break;
    case 9:
        //poster = "Imgs/Posters/swimsuitF_poster.png";
        src = "Models/Swimsuits/Swimsuit_F.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_F.usdz";
        alt_comment = "Swimsuit_F 01";
      break;
    case 10:
        //poster = "Imgs/Posters/burger_poster.png";
        src = "Models/Misc/Burger/burger.glb";
        ios_src = "Models/Misc/Burger/burger.usdz";
        alt_comment = "Burger 01";
      break;
    case 11:
        //poster = "Imgs/Posters/cake_poster.png";
        src = "Models/Misc/Cake/Cake.glb";
        ios_src = "Models/Misc/Cake/Cake.usdz";
        alt_comment = "Cake 01";
      break;
    case 12:
        //poster = "Imgs/Posters/pipe_poster.png";
        src = "Models/Pipe/USPipe_CrossSection.gltf";
        ios_src = "Models/Pipe/USPipe_CrossSection.usdz";
        alt_comment = "U.S. Pipe CrossSection 1.2";
      break;
    case 13:
        //poster = "Imgs/Posters/pipeemsemble_poster.png";
        src = "Models/Pipe/USPipe_Ensamble.gltf";
        ios_src = "Models/Pipe/USPipe_Ensamble.usdz";
        alt_comment = "U.S. Pipe Emsemble Product 1.2";
      break;
    case 14:
        //poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Pipe/USPipe_Full.gltf";
        ios_src = "Models/Pipe/USPipe_Full.usdz";
        alt_comment = "U.S. Pipe Emsemble Full 1.2";
      break;
    case 15:
        //poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/NikeShoes/Nike_Low_AnimTest_1.gltf";
        ios_src = "Models/NikeShoes/Nike_Low_AnimTest_1.usdz";
        alt_comment = "Nike Anim Test 02";
      break;
    case 16:
        //poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Milkbone.gltf";
        ios_src = "Models/Smuckers/Milkbone.usdz";
        alt_comment = "Smuckers Milkbone 01";
      break;
    case 17:
        //poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Uncrustables.gltf";
        ios_src = "Models/Smuckers/Uncrustables.usdz";
        alt_comment = "Smuckers Uncrustables 01";
      break;
    case 18:
        //poster = "Imgs/Posters/pipefull_poster.png";
        src = "Models/Smuckers/Jam.gltf";
        ios_src = "Models/Smuckers/Jam.usdz";
        alt_comment = "Smuckers Jam 01";
          break;
    case 19:
        //poster = "Imgs/Posters/pipefull_poster.png";
          src = "Models/Gibson/Gibson.gltf";
          ios_src = "Models/Gibson/Gibson.usdz";
          alt_comment = "Gibson Les Paul Guitar";
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