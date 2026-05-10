gdjs.GANADORCode = {};
gdjs.GANADORCode.localVariables = [];
gdjs.GANADORCode.idToCallbackMap = new Map();
gdjs.GANADORCode.GDNewTextObjects1= [];
gdjs.GANADORCode.GDNewTextObjects2= [];
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.GANADORCode.GDYellowJellyButtonObjects1= [];
gdjs.GANADORCode.GDYellowJellyButtonObjects2= [];
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1= [];
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2= [];
gdjs.GANADORCode.GDbloque_9595solidoObjects1= [];
gdjs.GANADORCode.GDbloque_9595solidoObjects2= [];
gdjs.GANADORCode.GDarribaObjects1= [];
gdjs.GANADORCode.GDarribaObjects2= [];
gdjs.GANADORCode.GDABAJOObjects1= [];
gdjs.GANADORCode.GDABAJOObjects2= [];
gdjs.GANADORCode.GDRIGHTObjects1= [];
gdjs.GANADORCode.GDRIGHTObjects2= [];
gdjs.GANADORCode.GDLEFTObjects1= [];
gdjs.GANADORCode.GDLEFTObjects2= [];
gdjs.GANADORCode.GDTXT_9595VIDAObjects1= [];
gdjs.GANADORCode.GDTXT_9595VIDAObjects2= [];
gdjs.GANADORCode.GDGold_9595CoinObjects1= [];
gdjs.GANADORCode.GDGold_9595CoinObjects2= [];
gdjs.GANADORCode.GDtxt_9595monedasObjects1= [];
gdjs.GANADORCode.GDtxt_9595monedasObjects2= [];
gdjs.GANADORCode.GDBulletObjects1= [];
gdjs.GANADORCode.GDBulletObjects2= [];
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1= [];
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2= [];
gdjs.GANADORCode.GDSkullGameOverDialogObjects1= [];
gdjs.GANADORCode.GDSkullGameOverDialogObjects2= [];
gdjs.GANADORCode.GDOrc_9595WarriorObjects1= [];
gdjs.GANADORCode.GDOrc_9595WarriorObjects2= [];
gdjs.GANADORCode.GDCactusObjects1= [];
gdjs.GANADORCode.GDCactusObjects2= [];
gdjs.GANADORCode.GDHeartObjects1= [];
gdjs.GANADORCode.GDHeartObjects2= [];
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects1= [];
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects2= [];
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects1= [];
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects2= [];
gdjs.GANADORCode.GDDiegoObjects1= [];
gdjs.GANADORCode.GDDiegoObjects2= [];
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects1= [];
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects2= [];
gdjs.GANADORCode.GDChickenObjects1= [];
gdjs.GANADORCode.GDChickenObjects2= [];
gdjs.GANADORCode.GDBee1Objects1= [];
gdjs.GANADORCode.GDBee1Objects2= [];
gdjs.GANADORCode.GDRinoObjects1= [];
gdjs.GANADORCode.GDRinoObjects2= [];
gdjs.GANADORCode.GDOrcObjects1= [];
gdjs.GANADORCode.GDOrcObjects2= [];
gdjs.GANADORCode.GDChameleonObjects1= [];
gdjs.GANADORCode.GDChameleonObjects2= [];
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects1= [];
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects2= [];
gdjs.GANADORCode.GDGold_9595starObjects1= [];
gdjs.GANADORCode.GDGold_9595starObjects2= [];
gdjs.GANADORCode.GDGold_9595star2Objects1= [];
gdjs.GANADORCode.GDGold_9595star2Objects2= [];
gdjs.GANADORCode.GDGold_9595star3Objects1= [];
gdjs.GANADORCode.GDGold_9595star3Objects2= [];
gdjs.GANADORCode.GDGold_9595star4Objects1= [];
gdjs.GANADORCode.GDGold_9595star4Objects2= [];
gdjs.GANADORCode.GDAdventure_9595BoyObjects1= [];
gdjs.GANADORCode.GDAdventure_9595BoyObjects2= [];
gdjs.GANADORCode.GDGold_9595star5Objects1= [];
gdjs.GANADORCode.GDGold_9595star5Objects2= [];


gdjs.GANADORCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPPAL", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bloque_solido"), gdjs.GANADORCode.GDbloque_9595solidoObjects1);
{for(var i = 0, len = gdjs.GANADORCode.GDbloque_9595solidoObjects1.length ;i < len;++i) {
    gdjs.GANADORCode.GDbloque_9595solidoObjects1[i].hide();
}
}
}

}


};

gdjs.GANADORCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GANADORCode.GDNewTextObjects1.length = 0;
gdjs.GANADORCode.GDNewTextObjects2.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.GANADORCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.GANADORCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GANADORCode.GDarribaObjects1.length = 0;
gdjs.GANADORCode.GDarribaObjects2.length = 0;
gdjs.GANADORCode.GDABAJOObjects1.length = 0;
gdjs.GANADORCode.GDABAJOObjects2.length = 0;
gdjs.GANADORCode.GDRIGHTObjects1.length = 0;
gdjs.GANADORCode.GDRIGHTObjects2.length = 0;
gdjs.GANADORCode.GDLEFTObjects1.length = 0;
gdjs.GANADORCode.GDLEFTObjects2.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GANADORCode.GDBulletObjects1.length = 0;
gdjs.GANADORCode.GDBulletObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GANADORCode.GDCactusObjects1.length = 0;
gdjs.GANADORCode.GDCactusObjects2.length = 0;
gdjs.GANADORCode.GDHeartObjects1.length = 0;
gdjs.GANADORCode.GDHeartObjects2.length = 0;
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.GANADORCode.GDDiegoObjects1.length = 0;
gdjs.GANADORCode.GDDiegoObjects2.length = 0;
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.GANADORCode.GDChickenObjects1.length = 0;
gdjs.GANADORCode.GDChickenObjects2.length = 0;
gdjs.GANADORCode.GDBee1Objects1.length = 0;
gdjs.GANADORCode.GDBee1Objects2.length = 0;
gdjs.GANADORCode.GDRinoObjects1.length = 0;
gdjs.GANADORCode.GDRinoObjects2.length = 0;
gdjs.GANADORCode.GDOrcObjects1.length = 0;
gdjs.GANADORCode.GDOrcObjects2.length = 0;
gdjs.GANADORCode.GDChameleonObjects1.length = 0;
gdjs.GANADORCode.GDChameleonObjects2.length = 0;
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595starObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595starObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595star2Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star2Objects2.length = 0;
gdjs.GANADORCode.GDGold_9595star3Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star3Objects2.length = 0;
gdjs.GANADORCode.GDGold_9595star4Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star4Objects2.length = 0;
gdjs.GANADORCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.GANADORCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595star5Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star5Objects2.length = 0;

gdjs.GANADORCode.eventsList0(runtimeScene);
gdjs.GANADORCode.GDNewTextObjects1.length = 0;
gdjs.GANADORCode.GDNewTextObjects2.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.GANADORCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.GANADORCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.GANADORCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.GANADORCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects1.length = 0;
gdjs.GANADORCode.GDarea_9595de_9595da_95241oObjects2.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects1.length = 0;
gdjs.GANADORCode.GDbloque_9595solidoObjects2.length = 0;
gdjs.GANADORCode.GDarribaObjects1.length = 0;
gdjs.GANADORCode.GDarribaObjects2.length = 0;
gdjs.GANADORCode.GDABAJOObjects1.length = 0;
gdjs.GANADORCode.GDABAJOObjects2.length = 0;
gdjs.GANADORCode.GDRIGHTObjects1.length = 0;
gdjs.GANADORCode.GDRIGHTObjects2.length = 0;
gdjs.GANADORCode.GDLEFTObjects1.length = 0;
gdjs.GANADORCode.GDLEFTObjects2.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects1.length = 0;
gdjs.GANADORCode.GDTXT_9595VIDAObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GANADORCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GANADORCode.GDBulletObjects1.length = 0;
gdjs.GANADORCode.GDBulletObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.GANADORCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects1.length = 0;
gdjs.GANADORCode.GDOrc_9595WarriorObjects2.length = 0;
gdjs.GANADORCode.GDCactusObjects1.length = 0;
gdjs.GANADORCode.GDCactusObjects2.length = 0;
gdjs.GANADORCode.GDHeartObjects1.length = 0;
gdjs.GANADORCode.GDHeartObjects2.length = 0;
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects1.length = 0;
gdjs.GANADORCode.GDCrate_9595Red_9595FlatObjects2.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects1.length = 0;
gdjs.GANADORCode.GDWall_9595Red_9595Flat2Objects2.length = 0;
gdjs.GANADORCode.GDDiegoObjects1.length = 0;
gdjs.GANADORCode.GDDiegoObjects2.length = 0;
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects1.length = 0;
gdjs.GANADORCode.GDNormal_9595Potion_9595RedObjects2.length = 0;
gdjs.GANADORCode.GDChickenObjects1.length = 0;
gdjs.GANADORCode.GDChickenObjects2.length = 0;
gdjs.GANADORCode.GDBee1Objects1.length = 0;
gdjs.GANADORCode.GDBee1Objects2.length = 0;
gdjs.GANADORCode.GDRinoObjects1.length = 0;
gdjs.GANADORCode.GDRinoObjects2.length = 0;
gdjs.GANADORCode.GDOrcObjects1.length = 0;
gdjs.GANADORCode.GDOrcObjects2.length = 0;
gdjs.GANADORCode.GDChameleonObjects1.length = 0;
gdjs.GANADORCode.GDChameleonObjects2.length = 0;
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects1.length = 0;
gdjs.GANADORCode.GDThickPixelRoundBulletAmmoObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595starObjects1.length = 0;
gdjs.GANADORCode.GDGold_9595starObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595star2Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star2Objects2.length = 0;
gdjs.GANADORCode.GDGold_9595star3Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star3Objects2.length = 0;
gdjs.GANADORCode.GDGold_9595star4Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star4Objects2.length = 0;
gdjs.GANADORCode.GDAdventure_9595BoyObjects1.length = 0;
gdjs.GANADORCode.GDAdventure_9595BoyObjects2.length = 0;
gdjs.GANADORCode.GDGold_9595star5Objects1.length = 0;
gdjs.GANADORCode.GDGold_9595star5Objects2.length = 0;


return;

}

gdjs['GANADORCode'] = gdjs.GANADORCode;
