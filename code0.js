gdjs.MenuPPALCode = {};
gdjs.MenuPPALCode.localVariables = [];
gdjs.MenuPPALCode.idToCallbackMap = new Map();
gdjs.MenuPPALCode.GDNewTextObjects1= [];
gdjs.MenuPPALCode.GDNewTextObjects2= [];
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1= [];
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2= [];
gdjs.MenuPPALCode.GDRedExplosionObjects1= [];
gdjs.MenuPPALCode.GDRedExplosionObjects2= [];
gdjs.MenuPPALCode.GDNewText2Objects1= [];
gdjs.MenuPPALCode.GDNewText2Objects2= [];
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1= [];
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2= [];
gdjs.MenuPPALCode.GDarribaObjects1= [];
gdjs.MenuPPALCode.GDarribaObjects2= [];
gdjs.MenuPPALCode.GDABAJOObjects1= [];
gdjs.MenuPPALCode.GDABAJOObjects2= [];
gdjs.MenuPPALCode.GDRIGHTObjects1= [];
gdjs.MenuPPALCode.GDRIGHTObjects2= [];
gdjs.MenuPPALCode.GDLEFTObjects1= [];
gdjs.MenuPPALCode.GDLEFTObjects2= [];
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1= [];
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2= [];
gdjs.MenuPPALCode.GDGold_9595CoinObjects1= [];
gdjs.MenuPPALCode.GDGold_9595CoinObjects2= [];
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1= [];
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2= [];
gdjs.MenuPPALCode.GDBulletObjects1= [];
gdjs.MenuPPALCode.GDBulletObjects2= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1= [];
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2= [];
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1= [];
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2= [];
gdjs.MenuPPALCode.GDCactusObjects1= [];
gdjs.MenuPPALCode.GDCactusObjects2= [];
gdjs.MenuPPALCode.GDHeartObjects1= [];
gdjs.MenuPPALCode.GDHeartObjects2= [];
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects1= [];
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects2= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects1= [];
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects2= [];
gdjs.MenuPPALCode.GDDiegoObjects1= [];
gdjs.MenuPPALCode.GDDiegoObjects2= [];
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects1= [];
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects2= [];
gdjs.MenuPPALCode.GDChickenObjects1= [];
gdjs.MenuPPALCode.GDChickenObjects2= [];
gdjs.MenuPPALCode.GDBee1Objects1= [];
gdjs.MenuPPALCode.GDBee1Objects2= [];
gdjs.MenuPPALCode.GDRinoObjects1= [];
gdjs.MenuPPALCode.GDRinoObjects2= [];
gdjs.MenuPPALCode.GDOrcObjects1= [];
gdjs.MenuPPALCode.GDOrcObjects2= [];
gdjs.MenuPPALCode.GDChameleonObjects1= [];
gdjs.MenuPPALCode.GDChameleonObjects2= [];
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects1= [];
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects2= [];
gdjs.MenuPPALCode.GDGold_9595starObjects1= [];
gdjs.MenuPPALCode.GDGold_9595starObjects2= [];
gdjs.MenuPPALCode.GDGold_9595star2Objects1= [];
gdjs.MenuPPALCode.GDGold_9595star2Objects2= [];
gdjs.MenuPPALCode.GDGold_9595star3Objects1= [];
gdjs.MenuPPALCode.GDGold_9595star3Objects2= [];
gdjs.MenuPPALCode.GDGold_9595star4Objects1= [];
gdjs.MenuPPALCode.GDGold_9595star4Objects2= [];
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects1= [];
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects2= [];
gdjs.MenuPPALCode.GDGold_9595star5Objects1= [];
gdjs.MenuPPALCode.GDGold_9595star5Objects2= [];


gdjs.MenuPPALCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[k] = gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bloque_solido"), gdjs.MenuPPALCode.GDbloque_9595solidoObjects1);
{for(var i = 0, len = gdjs.MenuPPALCode.GDbloque_9595solidoObjects1.length ;i < len;++i) {
    gdjs.MenuPPALCode.GDbloque_9595solidoObjects1[i].hide();
}
}
}

}


};

gdjs.MenuPPALCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPPALCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPALCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects1.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects2.length = 0;
gdjs.MenuPPALCode.GDNewText2Objects1.length = 0;
gdjs.MenuPPALCode.GDNewText2Objects2.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.MenuPPALCode.GDarribaObjects1.length = 0;
gdjs.MenuPPALCode.GDarribaObjects2.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects1.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects2.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects1.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects2.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects1.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects2.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPALCode.GDBulletObjects1.length = 0;
gdjs.MenuPPALCode.GDBulletObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.MenuPPALCode.GDCactusObjects1.length = 0;
gdjs.MenuPPALCode.GDCactusObjects2.length = 0;
gdjs.MenuPPALCode.GDHeartObjects1.length = 0;
gdjs.MenuPPALCode.GDHeartObjects2.length = 0;
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.MenuPPALCode.GDDiegoObjects1.length = 0;
gdjs.MenuPPALCode.GDDiegoObjects2.length = 0;
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.MenuPPALCode.GDChickenObjects1.length = 0;
gdjs.MenuPPALCode.GDChickenObjects2.length = 0;
gdjs.MenuPPALCode.GDBee1Objects1.length = 0;
gdjs.MenuPPALCode.GDBee1Objects2.length = 0;
gdjs.MenuPPALCode.GDRinoObjects1.length = 0;
gdjs.MenuPPALCode.GDRinoObjects2.length = 0;
gdjs.MenuPPALCode.GDOrcObjects1.length = 0;
gdjs.MenuPPALCode.GDOrcObjects2.length = 0;
gdjs.MenuPPALCode.GDChameleonObjects1.length = 0;
gdjs.MenuPPALCode.GDChameleonObjects2.length = 0;
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595starObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595starObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star2Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star2Objects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star3Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star3Objects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star4Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star4Objects2.length = 0;
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star5Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star5Objects2.length = 0;

gdjs.MenuPPALCode.eventsList0(runtimeScene);
gdjs.MenuPPALCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPALCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPALCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects1.length = 0;
gdjs.MenuPPALCode.GDRedExplosionObjects2.length = 0;
gdjs.MenuPPALCode.GDNewText2Objects1.length = 0;
gdjs.MenuPPALCode.GDNewText2Objects2.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.MenuPPALCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.MenuPPALCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.MenuPPALCode.GDarribaObjects1.length = 0;
gdjs.MenuPPALCode.GDarribaObjects2.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects1.length = 0;
gdjs.MenuPPALCode.GDABAJOObjects2.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects1.length = 0;
gdjs.MenuPPALCode.GDRIGHTObjects2.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects1.length = 0;
gdjs.MenuPPALCode.GDLEFTObjects2.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.MenuPPALCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPALCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPALCode.GDBulletObjects1.length = 0;
gdjs.MenuPPALCode.GDBulletObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.MenuPPALCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.MenuPPALCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.MenuPPALCode.GDCactusObjects1.length = 0;
gdjs.MenuPPALCode.GDCactusObjects2.length = 0;
gdjs.MenuPPALCode.GDHeartObjects1.length = 0;
gdjs.MenuPPALCode.GDHeartObjects2.length = 0;
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.MenuPPALCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.MenuPPALCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.MenuPPALCode.GDDiegoObjects1.length = 0;
gdjs.MenuPPALCode.GDDiegoObjects2.length = 0;
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.MenuPPALCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.MenuPPALCode.GDChickenObjects1.length = 0;
gdjs.MenuPPALCode.GDChickenObjects2.length = 0;
gdjs.MenuPPALCode.GDBee1Objects1.length = 0;
gdjs.MenuPPALCode.GDBee1Objects2.length = 0;
gdjs.MenuPPALCode.GDRinoObjects1.length = 0;
gdjs.MenuPPALCode.GDRinoObjects2.length = 0;
gdjs.MenuPPALCode.GDOrcObjects1.length = 0;
gdjs.MenuPPALCode.GDOrcObjects2.length = 0;
gdjs.MenuPPALCode.GDChameleonObjects1.length = 0;
gdjs.MenuPPALCode.GDChameleonObjects2.length = 0;
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.MenuPPALCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595starObjects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595starObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star2Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star2Objects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star3Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star3Objects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star4Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star4Objects2.length = 0;
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.MenuPPALCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.MenuPPALCode.GDGold_9595star5Objects1.length = 0;
gdjs.MenuPPALCode.GDGold_9595star5Objects2.length = 0;


return;

}

gdjs['MenuPPALCode'] = gdjs.MenuPPALCode;
