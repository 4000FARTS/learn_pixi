import { Application, Assets, SimplePlane, Sprite } from "pixi.js";
import { loadAssets } from "./assets";

const app = new Application({
  view: document.getElementById("pixi-canvas"),
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: "black",
  width: 640,
  height: 480,
});
async function gameloaded(){
  const texas = await Assets.loadBundle("main")
   const background = new SimplePlane(texas.bunny)
   background.width = app.screen.width
   background.height = app.screen.height
   app.stage.addChild(background)
}
loadAssets(gameloaded)