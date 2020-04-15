//import '@google/model-viewer';

function changeIt(number) {

  var poster = "";
  var src = "";
  var ios_src = "";
  var alt_comment = "";

  switch (number) {

    case 0:
        //poster = "Imgs/Posters/shoes_poster.png";
        src = "Models/NikeShoes/NikeShoe.gltf";
        ios_src = "Models/NikeShoes/NikeShoe.usdz";
        alt_comment = "Nike AR Shoes 01";
      break;
    case 1:
        //poster = "Imgs/Posters/dress1_poster.png";
        src = "Models/Clothing/Dress1.gltf";
        ios_src = "Models/Clothing/Dress1.usdz";
        alt_comment = "Dress 01";
      break;
    case 2:
        poster = "Imgs/Posters/dress2_poster.png";
        src = "Models/Clothing/Dress2.gltf";
        ios_src = "Models/Clothing/Dress2.usdz";
        alt_comment = "Dress 01";
      break;
    case 3:
        //poster = "Imgs/Posters/casual_poster.png";
        src = "Models/Clothing/CasualOutfit.gltf";
        ios_src = "Models/Clothing/CasualOutfit.usdz";
        alt_comment = "Casual 01";
      break;
    case 4:
        //poster = "Imgs/Posters/swimsuitA_poster.png";
        src = "Models/Swimsuits/Swimsuit_A.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_A.usdz";
        alt_comment = "Swimsuit_A 01";
      break;
    case 5:
        //poster = "Imgs/Posters/swimsuitB_poster.png";
        src = "Models/Swimsuits/Swimsuit_B.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_B.usdz";
        alt_comment = "Swimsuit_B 01";
      break;
    case 6:
        //poster = "Imgs/Posters/swimsuitC_poster.png";
        src = "Models/Swimsuits/Swimsuit_C.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_C.usdz";
        alt_comment = "Swimsuit_C 01";
	 break;
    case 7:
        //poster = "Imgs/Posters/swimsuitD_poster.png";
        src = "Models/Swimsuits/Swimsuit_D.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_D.usdz";
        alt_comment = "Swimsuit_D 01";
      break;
    case 8:
        //poster = "Imgs/Posters/swimsuitE_poster.png";
        src = "Models/Swimsuits/Swimsuit_E.gltf";
        ios_src = "Models/Swimsuits/Swimsuit_E.usdz";
        alt_comment = "Swimsuit_E 01";
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
