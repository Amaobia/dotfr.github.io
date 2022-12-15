var canvas;
var ctx;
var x;
var y;
var width;
var height;
var ScrlX;
var ScrlY;
var keyOne = "no";
var room = "houseDown";
var playD = "normal";
var s1;
var roomLoadOnSta
var place = "house";
var drawstairs1 = "no";
var RunningBoots = "no";
var Rpress = "no";
var coins = 0;
var checkrandchestTwo = "no";
window.onload = start();
function drawPlay(PlayX, PlayY, PlayWidth, PlayHeight){
   if (playD == "normal"){
    ctx.beginPath;
    ctx.fillStyle = "#FFE5B4";
    ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight);
    ctx.closePath;
    ctx.fillStyle = "yellow";
    ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight-30);
    ctx.closePath
    ctx.fillStyle = "dodgerblue";
    ctx.fillRect(PlayX+10, PlayY+50, PlayWidth-20, PlayHeight-20)
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+13, PlayY+80, PlayWidth-40, PlayHeight - 20);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+27, PlayY+80, PlayWidth-40, PlayHeight - 20);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+30, PlayY+15, PlayWidth-40, PlayHeight - 30);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+10, PlayY+15, PlayWidth-40, PlayHeight - 30);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+7, PlayY+45, PlayWidth-15, PlayHeight - 55);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+40, PlayY+50, PlayWidth-45, PlayHeight - 30);
    ctx.closePath;
    ctx.fillStyle = "black";
    ctx.fillRect(PlayX+5, PlayY+50, PlayWidth-45, PlayHeight - 30);
    ctx.closePath;
   }
   if (playD == "right"){
      ctx.beginPath;
      ctx.fillStyle = "#FFE5B4";
      ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight);
      ctx.closePath;
      ctx.fillStyle = "yellow";
      ctx.fillRect(PlayX, PlayY, PlayWidth-20, PlayHeight);
      ctx.closePath;
      ctx.fillRect(PlayX+20, PlayY, PlayWidth-20, PlayHeight-40);
      ctx.fillStyle = "dodgerblue";
      ctx.fillRect(PlayX+15, PlayY+50, PlayWidth-25, PlayHeight-20)
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+15, PlayY+80, PlayWidth-40, PlayHeight - 20);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+25, PlayY+80, PlayWidth-25, PlayHeight - 40);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+35, PlayY+15, PlayWidth-40, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+40, PlayY+45, PlayWidth-40, PlayHeight - 55);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+40, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+20, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;
      if (Rpress == "yes"){
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+15, PlayY+100, PlayWidth-40, PlayHeight-40);
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+40, PlayY+80, PlayWidth-40, PlayHeight-40);
      }
   }
   if (playD == "left"){
      ctx.beginPath;
      ctx.fillStyle = "#FFE5B4";
      ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight);
      ctx.closePath;
      ctx.fillStyle = "yellow";
      ctx.fillRect(PlayX+20, PlayY, PlayWidth-20, PlayHeight);
      ctx.closePath;
      ctx.fillRect(PlayX, PlayY, PlayWidth-20, PlayHeight-40);
      ctx.fillStyle = "dodgerblue";
      ctx.fillRect(PlayX+15, PlayY+50, PlayWidth-25, PlayHeight-20)
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+5, PlayY+80, PlayWidth-25, PlayHeight - 40);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+30, PlayY+80, PlayWidth-40, PlayHeight - 20);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+5, PlayY+15, PlayWidth-40, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX, PlayY+45, PlayWidth-40, PlayHeight - 55);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+30, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+10, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;

      if (Rpress == "yes"){
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+30, PlayY+100, PlayWidth-40, PlayHeight-40);
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+5, PlayY+80, PlayWidth-40, PlayHeight-40);
      }
   }
   if (playD == "down"){
      ctx.beginPath;
      ctx.fillStyle = "#FFE5B4";
      ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight);
      ctx.closePath;
      ctx.fillStyle = "yellow";
      ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight-30);
      ctx.closePath
      ctx.fillStyle = "dodgerblue";
      ctx.fillRect(PlayX+10, PlayY+50, PlayWidth-20, PlayHeight-20)
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+13, PlayY+80, PlayWidth-40, PlayHeight - 20);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+27, PlayY+80, PlayWidth-40, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+30, PlayY+15, PlayWidth-40, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+10, PlayY+15, PlayWidth-40, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+7, PlayY+45, PlayWidth-15, PlayHeight - 55);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+40, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;
      ctx.fillStyle = "black";
      ctx.fillRect(PlayX+5, PlayY+50, PlayWidth-45, PlayHeight - 30);
      ctx.closePath;

      if (Rpress == "yes"){
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+13, PlayY+100, PlayWidth-40, PlayHeight-40);
         ctx.fillStyle = "orange";
         ctx.fillRect(PlayX+27, PlayY+90, PlayWidth-40, PlayHeight-40);
      }
   }
   if (playD == "up"){
   ctx.beginPath;
   ctx.fillStyle = "#FFE5B4";
   ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight);
   ctx.closePath;
   ctx.fillStyle = "yellow";
   ctx.fillRect(PlayX, PlayY, PlayWidth, PlayHeight-10);
   ctx.closePath
   ctx.fillStyle = "dodgerblue";
   ctx.fillRect(PlayX+10, PlayY+50, PlayWidth-20, PlayHeight-20)
   ctx.closePath;
   ctx.fillStyle = "black";
   ctx.fillRect(PlayX+13, PlayY+80, PlayWidth-40, PlayHeight - 30);
   ctx.closePath;
   ctx.fillStyle = "black";
   ctx.fillRect(PlayX+27, PlayY+80, PlayWidth-40, PlayHeight - 20);
   ctx.closePath;
   ctx.fillStyle = "black";
   ctx.fillRect(PlayX+40, PlayY+50, PlayWidth-45, PlayHeight - 30);
   ctx.closePath;
   ctx.fillStyle = "black";
   ctx.fillRect(PlayX+5, PlayY+50, PlayWidth-45, PlayHeight - 30);
   ctx.closePath;

   if (Rpress == "yes"){
      ctx.fillStyle = "orange";
      ctx.fillRect(PlayX+13, PlayY+90, PlayWidth-40, PlayHeight-40);
      ctx.fillStyle = "orange";
      ctx.fillRect(PlayX+27, PlayY+100, PlayWidth-40, PlayHeight-40);
   }
   }
}

var saveRoomAs;

function drawRoom(ScrollX, ScrollY, RoomWidth, RoomHeight){
   if (room == "houseDown"){
   canvas.style.backgroundColor = "black";
    ctx.beginPath;
    ctx.fillStyle = "#D2691E";
    ctx.fillRect(ScrollX, ScrollY, RoomWidth, RoomHeight);
    ctx.closePath;
    ctx.fillStyle = "blue";
    ctx.font = "20px arial";
    ctx.fillText(s1, 50, 50);
    ctx.closePath;
    ctx.fillStyle = "red";
    ctx.fillRect(ScrollX+200, ScrollY+450, RoomWidth/4, RoomHeight/10);
    ctx.closePath;
    ctx.fillStyle = "gold";
    ctx.font = "30px arial";
    ctx.fillText("coins : " + " " + coins, 50, 600);
    ctx.stroke();
    if (drawstairs1 == "yes"){
      ctx.fillStyle = "#800000";
      ctx.fillRect(ScrollX+450, ScrollY, 25, 25);
      ctx.closePath;
      ctx.fillRect(ScrollX+425, ScrollY+25, 25, 25);
      ctx.closePath;
      ctx.fillRect(ScrollX+400, ScrollY+50, 25, 25);
      ctx.closePath;
      ctx.fillRect(ScrollX+375, ScrollY+75, 125, 25);
    }
   }
   if (room == "houseUp"){
      canvas.style.backgroundColor = "black";
       ctx.beginPath;
       ctx.fillStyle = "#D2691E";
       ctx.fillRect(ScrollX, ScrollY, RoomWidth, RoomHeight);
       ctx.closePath;
       ctx.fillStyle = "blue";
       ctx.font = "20px arial";
       ctx.fillText(s1, 50, 50);
       ctx.closePath;
         ctx.fillStyle = "#800000";
         ctx.fillRect(ScrollX+75, ScrollY+400, 25, 25);
         ctx.closePath;
         ctx.fillRect(ScrollX+50, ScrollY+425, 25, 25);
         ctx.closePath;
         ctx.fillRect(ScrollX+25, ScrollY+450, 25, 25);
         ctx.closePath;
         ctx.fillRect(ScrollX, ScrollY+475, 100, 25);
         ctx.closePath;
         ctx.fillRect(ScrollX+100, ScrollY+400, 25, 100);
         ctx.closePath;
         ctx.fillStyle = "#9b4524";
         ctx.fillRect(ScrollX, ScrollY, 100, 50);
         ctx.closePath;
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX, ScrollY+40, 100, 5);
         ctx.closePath;

         ctx.fillStyle = "#9b4524";
         ctx.fillRect(ScrollX+200, ScrollY, 100, 50);
         ctx.closePath;
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX+200, ScrollY+40, 100, 5);
         ctx.closePath;
         
         ctx.fillStyle = "#9b4524";
         ctx.fillRect(ScrollX+400, ScrollY, 100, 50);
         ctx.closePath;
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX+400, ScrollY+40, 100, 5);
         ctx.closePath;

         ctx.fillStyle = "#9b4524";
         ctx.fillRect(ScrollX+125, ScrollY, 50, 50);
         ctx.closePath;
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX+125, ScrollY+40, 50, 5);
         ctx.closePath;

         ctx.fillStyle = "#9b4524";
         ctx.fillRect(ScrollX+325, ScrollY, 50, 50);
         ctx.closePath;
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX+325, ScrollY+40, 50, 5);
         ctx.closePath;

         ctx.fillStyle = "gold";
         ctx.font = "30px arial";
         ctx.fillText("coins : " + " " + coins, 50, 600);
         ctx.stroke();
      }

      if (room == "DesertLandsZoneOne"){

         canvas.style.backgroundColor = "blue";

         ctx.beginPath;
         ctx.fillStyle = "#C2B280";
         ctx.fillRect(ScrollX-150, ScrollY+100, RoomWidth, RoomHeight/4);
         ctx.closePath;

         ctx.fillRect(ScrollX+850, ScrollY+100, 100, RoomHeight/4);
         ctx.closePath;

         ctx.fillStyle = "#FFE5B4";
         ctx.fillRect(ScrollX+875, ScrollY+200, 50, 50);
         ctx.closePath;
         
         ctx.fillStyle = "#8B4513";
         ctx.fillRect(ScrollX+875, ScrollY+200, 50, 12);
         ctx.closepath;

         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX + 880, ScrollY+210, 20, 5);

         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX + 880, ScrollY+210, 15, 30);
         
         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX + 900, ScrollY+210, 15, 30);

         ctx.fillStyle = "black";
         ctx.fillRect(ScrollX, ScrollY+200, 25, 50);
         ctx.closePath;

         ctx.fillStyle = "#A7947A";
         ctx.fillRect(ScrollX-25, ScrollY+225, 25, 100);
         ctx.closePath;

         ctx.fillRect(ScrollX-25, ScrollY+175, 25, 25);

         ctx.fillRect(ScrollX-50, ScrollY+150, 25, 25);

         ctx.fillRect(ScrollX-150, ScrollY+325, 125, 25);

         ctx.fillRect(ScrollX-150, ScrollY+125, 100, 25);


         ctx.fillStyle = "black";
         ctx.font = "25px arial";
         ctx.fillText(s1, 50, 50);
         ctx.closePath;

         ctx.fillStyle = "gold";
         ctx.font = "30px arial";
         ctx.fillText("coins : " + " " + coins, 50, 600);
         ctx.stroke();
         ctx.closePath;
      }
}
var Rwidth;
var Rheight;
function start(){
   s1 = "It seems you are in a room and you have forgotten who you are, head outside for answers. Press C to close any chat like this one";
    canvas = document.querySelector("canvas");
    keyOne = "no";
    ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    x = 50;
    y = 50;
    height = 500;
    width = 500;
    ScrlX = 450;
    ScrlY = 50;
    Rwidth = 500;
    Rheight = 500;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
    ctx.fillStyle = "blue";
    ctx.font = "20px arial";
    ctx.fillText(s1, 50, 50);
}
   document.onkeydown = function (event) {
      console.log(event.keyCode);
      switch (event.keyCode) {
         case 67:
            s1 = "";
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
            break;
         case 37:
            playD = "left";
            MoveLeft();
            break;
         case 38:
            playD = "up"
            MoveUp();
            break;
         case 39:
            playD = "right";
            MoveRight();
            break;
         case 40:
            playD = "down";
            MoveDown();
            break;
         case 87:
            playD = "up";
            MoveUp();
            break;
         case 83:
            playD = "down";
            MoveDown();
            break;
         case 68:
            playD = "right";
            MoveRight();
            break;
         case 65:
            playD = "left";
            MoveLeft();
            break;
         case 82:
            if (RunningBoots == "yes" && Rpress == "no"){
               Rpress = "yes";
               ctx.clearRect(0, 0, innerWidth, innerHeight);
               drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
               drawPlay(670, 250, 50, 50);
            }
            else{
            if (RunningBoots == "yes" && Rpress == "yes"){
               Rpress = "no";
               ctx.clearRect(0, 0, innerWidth, innerHeight);
               drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
               drawPlay(670, 250, 50, 50);
            }
         }
      }
   };
   function MoveLeft(){
   if (room == "houseDown" || room == "houseUp"){
   if (ScrlX >= 668){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ScrlX = ScrlX + 0;
      drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
      drawPlay(670, 250, 50, 50);
   }
   else{
      if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlX = ScrlX + 2;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
         }
         if (RunningBoots == "yes" && Rpress == "yes"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlX = ScrlX + 4;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
         }
      }
   }

   if (room == "DesertLandsZoneOne"){
      if (ScrlX >= 668){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlX = ScrlX + 0;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlX = ScrlX + 2;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
            }
            if (RunningBoots == "yes" && Rpress == "yes"){
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               ScrlX = ScrlX + 4;
               drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
               drawPlay(670, 250, 50, 50);
            }
         }
      }
   }
   function MoveUp(){
      if (room == "houseDown" || room == "houseUp"){
      if (ScrlY >= 248){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ScrlY = ScrlY+0;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlY = ScrlY + 2;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
         }
         if (RunningBoots == "yes" && Rpress == "yes"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlY = ScrlY + 4;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
         }
      }
   }
   if (room == "DesertLandsZoneOne"){
      if (ScrlY >= 148){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlY = ScrlY + 0;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlY = ScrlY + 2;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
      }
      if (RunningBoots == "yes" && Rpress == "yes"){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlY = ScrlY + 4;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
   }
   }
}

   
   function MoveRight(){
      if (room == "houseDown" || room == "houseUp"){
      if (ScrlX <= 222){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ScrlX = ScrlX - 0;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlX = ScrlX - 2;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
            }
            if (RunningBoots == "yes" && Rpress == "yes"){
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               ScrlX = ScrlX - 4;
               drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
               drawPlay(670, 250, 50, 50);
            }
      }
   }
   
   if (room == "DesertLandsZoneOne"){
      if (ScrlX <= -130){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ScrlX = ScrlX - 0;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlX = ScrlX - 2;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
            }
            if (RunningBoots == "yes" && Rpress == "yes"){
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               ScrlX = ScrlX - 4;
               drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
               drawPlay(670, 250, 50, 50);
            }
      }
   }
}
   function MoveDown(){
      if (room == "houseDown" || room == "houseUp"){
      if (ScrlY <= -138){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ScrlY = ScrlY - 0;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlY = ScrlY - 2;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
         }
         if (RunningBoots == "yes" && Rpress == "yes"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlY = ScrlY - 4;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
         }
      }
   }

   if (room == "DesertLandsZoneOne" && ScrlX >= -138){
      if (ScrlY <= 10){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ScrlY = ScrlY - 0;
    drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
    drawPlay(670, 250, 50, 50);
      }
      else{
         if (RunningBoots == "no" && Rpress == "no" || RunningBoots == "yes" && Rpress == "no"){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ScrlY = ScrlY - 2;
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
         }
         if (RunningBoots == "yes" && Rpress == "yes"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ScrlY = ScrlY - 4;
            drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
            drawPlay(670, 250, 50, 50);
         }
      }
   }
   }
   window.onload = testy();
   function testy(){
      requestAnimationFrame(testy);
      console.log(ScrlX);
   }
   function testMat1(){
      requestAnimationFrame(testMat1);
   if (keyOne == "no"  && ScrlX > 375 && ScrlX < 496 && ScrlY <= -116 && room == "houseDown"){
      s1 = "The door is locked. Search around the house for a key. It also seems like a mysterious staircase has appeared somewhere inside the house.";
      drawstairs1 = "yes";
    }
    if (keyOne == "yes"  && ScrlX > 375 && ScrlX < 496 && ScrlY <= -116 && room == "houseDown"){
      ScrlX = 450;
      ScrlY = 50;
      Rwidth = 1000;
      Rheight = 1000;
      room = "DesertLandsZoneOne";

      s1 = "You have came out of your house and are in some stranded island. Maybe you can find wood to build a raft.";
      clearRect(0, 0, innerWidth, innerHeight);
      drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
      drawPlay(670, 250, 50, 50);
    }
   }
    window.onload = testMat1();
    window.onload = testStairsOneUp();
    window.onload = testStairsOneDown();
    function testStairsOneUp(){
      requestAnimationFrame(testStairsOneUp);
      if (ScrlY >= 150 && room == "houseDown" && drawstairs1 == "yes" && ScrlX <= 338){
         ScrlX = 554;
         ScrlY = -26;
         room = "houseUp";
         clearRect(0, 0, innerWidth, innerHeight);
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
    }
    function testStairsOneDown(){
      requestAnimationFrame(testStairsOneDown);
      if (ScrlY <= -54 && room == "houseUp" && ScrlX >= 592){
         ScrlY = 212;
         ScrlX = 348;
         room = "houseDown";
         clearRect(0, 0, innerWidth, innerHeight);
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
    }
    window.onload = checkChestOneRoomUp();
    function checkChestOneRoomUp(){
      requestAnimationFrame(checkChestOneRoomUp);
      if (ScrlY >= 226 && ScrlX >= 620 && RunningBoots == "no" && room == "houseUp"){
         RunningBoots = "yes";
         s1 = "You got the running boots! Press R to equip and unequip them at any time.";
         ScrlX = 450;
         ScrlY = 50;
         ctx.clearRect(0, 0, innerWidth, innerHeight);
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
      if (ScrlY >= 226 && ScrlX >= 620 && RunningBoots == "yes"){
         s1 = "This chest is empty.";
      }
    }
    window.onload = checkKeyChest();
    function checkKeyChest(){
      requestAnimationFrame(checkKeyChest);
      if (ScrlY >= 226 && ScrlX <= 350 && ScrlX >= 342 && keyOne == "no" && room == "houseUp"){
         keyOne = "yes";
         s1 = "You got keys!";
         ScrlX = 450;
         ScrlY = 50;
         ctx.clearRect(0, 0, innerWidth, innerHeight);
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
      if (ScrlY >= 226 && ScrlX <= 350 && ScrlX >= 340 && keyOne == "yes" && room == "houseUp"){
         s1 = "This chest is empty.";
      }
    }
    window.onload = checkrandchest1();
    window.onload = checkrandchest2();
    window.onload = checkrandchest3();
    function checkrandchest1(){
      requestAnimationFrame(checkrandchest1);
      if (ScrlY >= 226 && ScrlX <= 550 && ScrlX >= 540 && room == "houseUp"){
         s1 = "This chest is empty";
      }
    }
    function checkrandchest2(){
      requestAnimationFrame(checkrandchest2);
      if (ScrlY >= 226 && ScrlX <= 474 && ScrlX >= 414 && room == "houseUp" && checkrandchestTwo == "no"){
         checkrandchestTwo = "yes";
         s1 = "you got 20 coins!"
         coins = coins + 20;
         ScrlX = 450;
         ScrlY = 50;
         ctx.clearRect(0, 0, inerWidth, innerHeight);
         drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
         drawPlay(670, 250, 50, 50);
      }
      if (ScrlY >= 226 && ScrlX <= 474 && ScrlX >= 414 && room == "houseUp" && checkrandchestTwo == "yes"){
         s1 = "This chest is empty";
      }
    }
    function checkrandchest3(){
      requestAnimationFrame(checkrandchest3);
      if (ScrlY >= 226 && ScrlX <= 270 && room == "houseUp"){
         s1 = "This chest is empty";
      }
    }
    window.onload = goBackInHouse();
    function goBackInHouse(){
      requestAnimationFrame(goBackInHouse);
    if (ScrlY >= 14 && ScrlY <= 126 && room == "DesertLandsZoneOne" && ScrlX >= 650 && ScrlX <= 670){
      room = "houseDown";
      s1 = "You are back in the house";
      Rwidth = 500;
      Rheight = 500;
      ScrlY = -90;
      ScrlX = 440;
      ctx.clearRect(0, 0, inerWidth, innerHeight);
      drawRoom(ScrlX, ScrlY, Rwidth, Rheight);
      drawPlay(670, 250, 50, 50);
    }
   }
   window.onload = testAnything();
   function testAnything(){
      requestAnimationFrame(testAnything);
      console.log(ScrlX);
       if (ScrlX == -130 && room == "DesertLandsZoneOne"){
         ctx.clearRect(0, 0, innerWidth, innerHeight);
         canvas.style.backgroundColor = "#C2B280";
         ctx.fillStyle = "blue";
         ctx.fillRect(0, 0, innerWidth, innerHeight-100);

         ctx.fillStyle = "#9b4524";
         ctx.fillRect(innerWidth/2-150, 550, 50, 10);

         ctx.fillStyle = "#9b4524";
         ctx.fillRect(innerWidth/2-165, 525, 75, 25);

         ctx.fillStyle = "black";
         ctx.fillRect(innerWidth/2-140, 275, 25, 250);
         //
         ctx.fillStyle = "#9b4524";
         ctx.fillRect(innerWidth/2-10, 525, 75, 25);

         ctx.fillStyle = "black";
         ctx.fillRect(innerWidth/2-20, 275, 25, 250);
         //
         ctx.fillStyle = "gray";
         ctx.fillRect(innerWidth/2-150, 150, 160, 150);
         ctx.fillStyle = "black";
         ctx.fillRect(innerWidth/2-150, 300, 160, 75);
         ctx.fillStyle = "black";
         ctx.fillRect(innerWidth/2-150, 200, 160, 75);
         ctx.fillStyle = "black";
         ctx.fillRect(innerWidth/2-150, 200, 160, 75);
       }
   }