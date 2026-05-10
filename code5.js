gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1= [];
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2= [];
gdjs.GameOverCode.GDUnnamedObjects1= [];
gdjs.GameOverCode.GDUnnamedObjects2= [];
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.GameOverCode.GDbloque_9595solidoObjects1= [];
gdjs.GameOverCode.GDbloque_9595solidoObjects2= [];
gdjs.GameOverCode.GDarribaObjects1= [];
gdjs.GameOverCode.GDarribaObjects2= [];
gdjs.GameOverCode.GDABAJOObjects1= [];
gdjs.GameOverCode.GDABAJOObjects2= [];
gdjs.GameOverCode.GDRIGHTObjects1= [];
gdjs.GameOverCode.GDRIGHTObjects2= [];
gdjs.GameOverCode.GDLEFTObjects1= [];
gdjs.GameOverCode.GDLEFTObjects2= [];
gdjs.GameOverCode.GDTXT_9595VIDAObjects1= [];
gdjs.GameOverCode.GDTXT_9595VIDAObjects2= [];
gdjs.GameOverCode.GDGold_9595CoinObjects1= [];
gdjs.GameOverCode.GDGold_9595CoinObjects2= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects1= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects2= [];
gdjs.GameOverCode.GDBulletObjects1= [];
gdjs.GameOverCode.GDBulletObjects2= [];
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.GameOverCode.GDSkullGameOverDialogObjects1= [];
gdjs.GameOverCode.GDSkullGameOverDialogObjects2= [];
gdjs.GameOverCode.GDOrc_9595WarriorObjects1= [];
gdjs.GameOverCode.GDOrc_9595WarriorObjects2= [];
gdjs.GameOverCode.GDCactusObjects1= [];
gdjs.GameOverCode.GDCactusObjects2= [];
gdjs.GameOverCode.GDHeartObjects1= [];
gdjs.GameOverCode.GDHeartObjects2= [];
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects1= [];
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects2= [];
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects1= [];
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects2= [];
gdjs.GameOverCode.GDDiegoObjects1= [];
gdjs.GameOverCode.GDDiegoObjects2= [];
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects1= [];
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects2= [];
gdjs.GameOverCode.GDChickenObjects1= [];
gdjs.GameOverCode.GDChickenObjects2= [];
gdjs.GameOverCode.GDBee1Objects1= [];
gdjs.GameOverCode.GDBee1Objects2= [];
gdjs.GameOverCode.GDRinoObjects1= [];
gdjs.GameOverCode.GDRinoObjects2= [];
gdjs.GameOverCode.GDOrcObjects1= [];
gdjs.GameOverCode.GDOrcObjects2= [];
gdjs.GameOverCode.GDChameleonObjects1= [];
gdjs.GameOverCode.GDChameleonObjects2= [];
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects1= [];
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects2= [];
gdjs.GameOverCode.GDGold_9595starObjects1= [];
gdjs.GameOverCode.GDGold_9595starObjects2= [];
gdjs.GameOverCode.GDGold_9595star2Objects1= [];
gdjs.GameOverCode.GDGold_9595star2Objects2= [];
gdjs.GameOverCode.GDGold_9595star3Objects1= [];
gdjs.GameOverCode.GDGold_9595star3Objects2= [];
gdjs.GameOverCode.GDGold_9595star4Objects1= [];
gdjs.GameOverCode.GDGold_9595star4Objects2= [];
gdjs.GameOverCode.GDAdventure_9595BoyObjects1= [];
gdjs.GameOverCode.GDAdventure_9595BoyObjects2= [];
gdjs.GameOverCode.GDGold_9595star5Objects1= [];
gdjs.GameOverCode.GDGold_9595star5Objects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.GameOverCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[k] = gdjs.GameOverCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPPAL", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bloque_solido"), gdjs.GameOverCode.GDbloque_9595solidoObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDbloque_9595solidoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDbloque_9595solidoObjects1[i].hide();
}
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDUnnamedObjects1.length = 0;
gdjs.GameOverCode.GDUnnamedObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GameOverCode.GDarribaObjects1.length = 0;
gdjs.GameOverCode.GDarribaObjects2.length = 0;
gdjs.GameOverCode.GDABAJOObjects1.length = 0;
gdjs.GameOverCode.GDABAJOObjects2.length = 0;
gdjs.GameOverCode.GDRIGHTObjects1.length = 0;
gdjs.GameOverCode.GDRIGHTObjects2.length = 0;
gdjs.GameOverCode.GDLEFTObjects1.length = 0;
gdjs.GameOverCode.GDLEFTObjects2.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDBulletObjects1.length = 0;
gdjs.GameOverCode.GDBulletObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GameOverCode.GDCactusObjects1.length = 0;
gdjs.GameOverCode.GDCactusObjects2.length = 0;
gdjs.GameOverCode.GDHeartObjects1.length = 0;
gdjs.GameOverCode.GDHeartObjects2.length = 0;
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.GameOverCode.GDDiegoObjects1.length = 0;
gdjs.GameOverCode.GDDiegoObjects2.length = 0;
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.GameOverCode.GDChickenObjects1.length = 0;
gdjs.GameOverCode.GDChickenObjects2.length = 0;
gdjs.GameOverCode.GDBee1Objects1.length = 0;
gdjs.GameOverCode.GDBee1Objects2.length = 0;
gdjs.GameOverCode.GDRinoObjects1.length = 0;
gdjs.GameOverCode.GDRinoObjects2.length = 0;
gdjs.GameOverCode.GDOrcObjects1.length = 0;
gdjs.GameOverCode.GDOrcObjects2.length = 0;
gdjs.GameOverCode.GDChameleonObjects1.length = 0;
gdjs.GameOverCode.GDChameleonObjects2.length = 0;
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595starObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595starObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595star2Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star2Objects2.length = 0;
gdjs.GameOverCode.GDGold_9595star3Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star3Objects2.length = 0;
gdjs.GameOverCode.GDGold_9595star4Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star4Objects2.length = 0;
gdjs.GameOverCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.GameOverCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595star5Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star5Objects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameOverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameOverCode.GDUnnamedObjects1.length = 0;
gdjs.GameOverCode.GDUnnamedObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GameOverCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GameOverCode.GDarribaObjects1.length = 0;
gdjs.GameOverCode.GDarribaObjects2.length = 0;
gdjs.GameOverCode.GDABAJOObjects1.length = 0;
gdjs.GameOverCode.GDABAJOObjects2.length = 0;
gdjs.GameOverCode.GDRIGHTObjects1.length = 0;
gdjs.GameOverCode.GDRIGHTObjects2.length = 0;
gdjs.GameOverCode.GDLEFTObjects1.length = 0;
gdjs.GameOverCode.GDLEFTObjects2.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GameOverCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDBulletObjects1.length = 0;
gdjs.GameOverCode.GDBulletObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GameOverCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GameOverCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GameOverCode.GDCactusObjects1.length = 0;
gdjs.GameOverCode.GDCactusObjects2.length = 0;
gdjs.GameOverCode.GDHeartObjects1.length = 0;
gdjs.GameOverCode.GDHeartObjects2.length = 0;
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.GameOverCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.GameOverCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.GameOverCode.GDDiegoObjects1.length = 0;
gdjs.GameOverCode.GDDiegoObjects2.length = 0;
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.GameOverCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.GameOverCode.GDChickenObjects1.length = 0;
gdjs.GameOverCode.GDChickenObjects2.length = 0;
gdjs.GameOverCode.GDBee1Objects1.length = 0;
gdjs.GameOverCode.GDBee1Objects2.length = 0;
gdjs.GameOverCode.GDRinoObjects1.length = 0;
gdjs.GameOverCode.GDRinoObjects2.length = 0;
gdjs.GameOverCode.GDOrcObjects1.length = 0;
gdjs.GameOverCode.GDOrcObjects2.length = 0;
gdjs.GameOverCode.GDChameleonObjects1.length = 0;
gdjs.GameOverCode.GDChameleonObjects2.length = 0;
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.GameOverCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595starObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595starObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595star2Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star2Objects2.length = 0;
gdjs.GameOverCode.GDGold_9595star3Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star3Objects2.length = 0;
gdjs.GameOverCode.GDGold_9595star4Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star4Objects2.length = 0;
gdjs.GameOverCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.GameOverCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595star5Objects1.length = 0;
gdjs.GameOverCode.GDGold_9595star5Objects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
