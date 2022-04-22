var fighting_rimImg, fighting_rim

//Creating posing sprites for the fighter1
//This is the fighter1 var
var fighter,fighterImg,fighterImg2,fighterAnime
//All Poses variables for fighter 1
var beampostureFull, beampostureFullImg
var halfbeamPosture, halfbeamPostureImg
var fullKick, fullKickImg
var halfTurn, halfTurnImg
var Punch, PunchImg
var blueBeam, blueBeamImg,blueBeamGroup
var fighterdown
var f1dead
var f1w,f1wImg,f2w,f2wImg

var f1beamballs = 20
//var beamballst

var beamButton,beamButtonImg
var kickButton,kickButtonImg
var punchButton, punchButtonImg

var fightState = 1
var fightState2 = 1

var fighter2
var f2kb,f2pb,f2fbb,f2kbImg,f2pbImg,f2fbbImg
var fireball,fireballImg,fireballGroup
var fireballst = 20 
//health
f1health = 100
f2health = 100

//borders
var rightborder, leftborder,downborder

//gamestate
gamestate = "play"

function preload(){
    //loading Images for sprites of f1
    fighting_rimImg = loadImage("rim.gif")
    beampostureFullImg = loadImage("Fighter_FullBeamPosture.png")
    halfbeamPostureImg = loadImage("Fighter_BeamPostureHalf.png")
    fullKickImg = loadImage("Fighter_FullKick.png")
    halfTurnImg = loadImage("Fighter_Halfturn.png")
    blueBeamImg = loadImage("Fighter_Beam.png")
    PunchImg = loadImage("Fighter_Punch.png")
    punchButtonImg = loadImage("punchbutton.png")
    kickButtonImg = loadImage("kickbutton.png")
    beamButtonImg = loadImage("beambutton.png")
    fireballImg = loadImage("f2b.png")
    f2pbImg = loadImage("f2fp.png")
    f2kbImg = loadImage("f2fk.png")
    f2fbbImg = loadImage("f2b.png")
    fighterdown = loadImage("f1f3.png")
    f1wImg = loadImage("Fighter1 wins.png")
    f2wImg = loadImage("FIGHTER2WINS.PNG")
    //Animations
    fighterAnime = loadAnimation("Fighter_Stand.png","Fighter_Stand2.png","Fighter_Stand.png")
    punchingAnime = loadAnimation("Fighter_Stand.png","Fighter_Punch.png","Fighter_Stand.png")
    kickingAnime = loadAnimation("Fighter_Halfturn.png","Fighter_FullKick.png","Fighter_Halfturn.png")
    beamthrowAnime = loadAnimation("Fighter_Stand.png","Fighter_BeamPostureHalf.png","Fighter_FullBeamPosture.png","Fighter_Stand.png")
    f1KOanime = loadAnimation("Fighter_Stand.png","f1f1.png","f1f2.png","f1f3.png")
   
//f2 anime
    f2anime = loadAnimation("f2s1.png","f2s2.png","f2s1.png")
    f2punching = loadAnimation("f2hp.png","f2fp.png","f2hp.png")
    f2kicking = loadAnimation("f2hk.png","f2fk.png","f2hk.png")
    f2beamthrow = loadAnimation("f2hbp.png","f2fbp.png","f2hbp.png")
    f2KOanime = loadAnimation("f2s1.png","f2f1.png","f2f2.png","f2f3.png")
    f1dead = loadAnimation("f1f3.png","f1f3.png","f1f3.png")
}


function setup() {

    createCanvas(1600,800)
    
    

    //Adding Images
    fighting_rim = createSprite(800,500 )
    fighting_rim.addImage(fighting_rimImg)
    fighting_rim.scale = 2.1

    //Sprites
    fighter = createSprite(200,700)
    fighter.addAnimation("Anime",fighterAnime)
    fighter.addAnimation("kicking",kickingAnime)
    fighter.addAnimation("punching",punchingAnime)
    fighter.addAnimation("throwing",beamthrowAnime)
    fighter.addAnimation("f1f",f1KOanime)
    fighter.addAnimation("dead",f1dead)
    fighter.scale = 2

    blueBeam = loadImage(blueBeamImg)
    fireball = loadImage(fireballImg)

   // beamballst = createGroup()

    punchButton = createSprite(100,230)
    punchButton.addImage(punchButtonImg)
    punchButton.scale = 0.3

    kickButton = createSprite(250,224)
    kickButton.addImage(kickButtonImg)
    kickButton.scale = 0.4

    beamButton = createSprite(400,230)
    beamButton.addImage(beamButtonImg)
    beamButton.scale = 0.3

    f2pb = createSprite(1200,230)
    f2pb.addImage(f2pbImg)
    f2pb.scale = 1.2

    f2kb = createSprite(1350,224)
    f2kb.addImage(f2kbImg)
    f2kb.scale = 1.2

    f2fbb = createSprite(1500,230)
    f2fbb.addImage(f2fbbImg)
    f2fbb.scale = 2


    //f2 sprites create

    fighter2 = createSprite(1400,700)
    fighter2.addAnimation("f2",f2anime)
    fighter2.addAnimation("f2k",f2punching)
    fighter2.addAnimation("f2p",f2kicking)
    fighter2.addAnimation("f2b",f2beamthrow)
    fighter2.addAnimation("f2f",f2KOanime)
    fighter2.scale = 1.7
    
    //creating borders
    rightborder = createSprite(-1,485,1,130)
    rightborder.scale = 5

    leftborder = createSprite(1601,485,1,130)
    leftborder.scale = 5

    downborder = createSprite(800,778,1600,10)
downborder.visible = false;

    //depth
    fighter.depth = fighter2.depth

}

function draw() {  

    
    
    
    if (fightState === 1){
        fighter.changeAnimation("Anime",fighterAnime)

        //Function to move fighter
    if(keyDown("a")){
        fighter.x -= 5
    }

    if (keyDown("d")){
        fighter.x +=5
        
    }

   
}

   

    if (fightState===2){
        fighter.changeAnimation("kicking",kickingAnime)
        fightState = 1
    }

   if (fightState===3){
        fighter.changeAnimation("punching",punchingAnime)
        fightState = 1
    }

    if (fightState === 4){
        fighter.changeAnimation("throwing",beamthrowAnime)
        blueBeam = createSprite(fighter.x,fighter.y -20)
        blueBeam.addImage(blueBeamImg)
        blueBeam.scale = 1.5
        fightState = 1
        blueBeam.velocityX =10
        blueBeam.lifetime = 160
        f1beamballs -=1
     
        fightState = 1
        

        

    }

    if (fightState === 5  ||fightState2 === 5 || fightState2 === 6) {
        gamestate = "end"
    }
    else{
        gamestate = "play"
    }

    
    if (fightState === 5){
        f2w = createSprite(800,400)
        f2w.addImage(f2wImg)
        f2w.scale = 2
    }

    if(blueBeam.x > fighter2.x - 50 && blueBeam.x < fighter2.x  + 50 && blueBeam.y > fighter2.y - 50 && blueBeam.y < fighter2.y  + 50 )
    {
        f2health -= 1
    }
    if(fireball.x > fighter.x - 50 && fireball.x < fighter.x +50 && fireball.y > fighter.y - 50 && fireball.y <fighter.y +50 )
    {
        f1health -= 1
    }

   
    
    //fighting functions for fighter2

    if (fightState2 ===1 ){

        fighter2.changeAnimation("f2",f2anime)

        if(keyDown("u")){
            fighter2.x -=5
        }
        if(keyDown("o")){
            fighter2.x +=5
        }
    }

    if (fightState2===2){
        fighter2.changeAnimation("f2k",f2kicking)
        fightState2 = 1
    }

   if (fightState2===3){
        fighter2.changeAnimation("f2p",f2punching)
        fightState2 = 1
    }

    if (fightState2 === 4 ){
        fighter2.changeAnimation("f2b",f2beamthrow)
        fireball = createSprite(fighter2.x,fighter2.y -20)
        fireball.addImage(fireballImg)
        fireball.scale = 1.2
        fightState2 = 1
        fireball.velocityX =-10
        fireball.lifetime = 160
        fireballst -=1

        fightState2 = 1
        
        

    }
    if(fightState2 === 5){
        fighter2.changeAnimation("f2f",f2KOanime)

        fightState2 = 6
    }

    if (fightState2 === 6){
        f1w = createSprite(800,400)
        f1w.addImage(f1wImg)
        f1w.scale = 2
        
    }
    
   
   

    //add gravity
    fighter.velocityY +=2
    fighter2.velocityY +=2

    //functions in draw
    kicker()
    puncher()
    beaming()
    kicker2()
    puncher2()
    beaming2()
    jump()
    damage()
    death()
    //collisions
    fighter.collide(rightborder)
    fighter.collide(leftborder)
    fighter2.collide(rightborder)
    fighter2.collide(leftborder)
    fighter.collide(downborder)
    fighter2.collide(downborder)
    

   
    

    drawSprites()
    textSize(30)
    fill(255)
    //fireball.debug = true;
    if (gamestate === "play"){
        text("X",230,310)
    text("Z",80,310)
    text("C",400,310)
    text("A for left, D for right, Q to jump",40,400)
    text("BeamBalls Left For Fighter1 : "+ f1beamballs,40,360)
    text("H",1200,310)
    text("J",1350,310)
    text("K",1500,310)
    text("U for left, O for right, P to jump",1150,400)
    text("FireBalls Left For Fighter2 : "+ fireballst,1150,360)
    text(f1health+ " HP",fighter.x,600)
    text(f2health+ " HP",fighter2.x,600)
    }
    
    
      
    
    
    
    

    
    

}










//functions
function kicker(){
    if (keyDown("x")){
        fightState = 2
    }
}
function puncher(){
    if (keyDown("z")){
        fightState = 3
    }
}
function beaming(){
    if(keyDown("c")){
        fightState = 4
    }
    if (f1beamballs === 0){
        if(keyDown("c")){
            fightState = 1
        }
    }
}

//functions for f2
function kicker2(){
    if (keyDown("h")){
        fightState2 = 2
    }
}
function puncher2(){
    if (keyDown("j")){
        fightState2 = 3
    }
}
function beaming2(){
    if(keyDown("k")){
        fightState2 = 4
    }
    if (fireballst === 0){
        if(keyDown("k")){
            fightState2 = 1
        }
    }
}
function jump(){
    if (fightState ===1 || fightState ===2 || fightState ===3 || fightState ===4){
    if (keyDown("q") && fighter.y >= 687){
        fighter.velocityY = -28
    }
}
    if (fightState2 ===1 || fightState2 ===2 || fightState2 ===3 || fightState2 ===4){
    if (keyDown("p") && fighter2.y >=687){
        fighter2.velocityY = -28
    }
}


}

function death(){
    if(f1health <= 0){
        fightState = 5
        
    }
    if(f2health<=0){
        fightState2 = 5
    }
}

function damage(){
    if(fighter.isTouching(fighter2) && fightState === 2 ){
        f2health -= 1
    }
    if(fighter.isTouching(fighter2) && fightState === 3 ){
        f2health -= 1
    }
    if(fighter2.isTouching(fighter) && fightState2 === 2 ){
        f1health -= 1
    }
    if(fighter2.isTouching(fighter) && fightState2 === 3 ){
        f1health -= 1
    }

    }
