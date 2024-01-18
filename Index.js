var x, y;
var headerWins = document.querySelector("h1")
var leftImage = document.querySelector("img")
var rightImage = document.querySelector("img.img2")


  
        function myFunction(){
            x = Math.floor(Math.random()*6) + 1 ;
            y = Math.floor(Math.random()*6) + 1 ;
            var randomNumber1 = "./images/dice" + x +".png";
            var randomNumber2 = "./images/dice" + y +".png";
            leftImage.setAttribute("src", randomNumber1);
            rightImage.setAttribute("src", randomNumber2);    
            if( x > y) {
                headerWins.innerText = "Player 1 wins!";
                
            } else if ( x < y ){
                headerWins.innerText = "Player 2 wins!";
            } else {
                headerWins.innerText = "Draw!!!"
            }
        
        }






