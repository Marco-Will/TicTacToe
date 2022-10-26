let fields = [];

let currentShape = 'Player 2';

let gameOver = false;


function getId(id)
{ 
  return document.getElementById(id);
}

function fillShape(id)
{

    if(!fields[id] && !gameOver)
    {

   
        if(currentShape == 'Player 2')
        {
            currentShape = 'Player 1';
            getId('player1').classList.add('inactive')
            getId('player2').classList.remove('inactive')
            
        }
        else
        {
            currentShape = 'Player 2';
            getId('player1').classList.remove('inactive')
            getId('player2').classList.add('inactive')
        }

        fields[id] = currentShape;
        
        console.log(fields);
        checkForWin()
        draw();
    }

}

function draw()
{
    for (let i = 0; i < fields.length; i++) 
    {
        if(fields[i] == 'Player 1')
        {
              getId('circle_' + i).classList.remove('hide');
              
        } 

        if(fields[i] == 'Player 2')
        {
              getId('cross_' + i).classList.remove('hide');
        } 
        
        
    }
}

function changeThemeDark()
{
    getId('gameContainer').style.background ='linear-gradient(-45deg, #7d7c7c, #9a9697, #535b5e, #464a49)';
    getId('gameContainer').style.backgroundSize=' 400% 400%'
    getId('gameContainer').style.animation ='gradient 15s ease infinite';
}
function changeThemeYellowOrange()
{
   
    getId('gameContainer').style.background ='linear-gradient(-45deg, #bead24, #adaa1a, #b07c13, #ab7524)';
    getId('gameContainer').style.backgroundSize=' 400% 400%'
    getId('gameContainer').style.animation ='gradient 15s ease infinite';
}

function changeThemeBlueRed()
{
    getId('gameContainer').style.background ='linear-gradient(-45deg, #ee7752, #5a1932, #166683, #23d5ab)';
    getId('gameContainer').style.backgroundSize=' 400% 400%'
    getId('gameContainer').style.animation ='gradient 15s ease infinite';
}
function checkForWin()
{
    let winner;
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0] )
    {
        winner = fields[0]
        getId('line0').style.transform ='scaleX(1)';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[4] )
    {
        winner = fields[4]
        getId('line1').style.transform ='scaleX(1)';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[7] )
    {
        winner = fields[7]
        getId('line2').style.transform ='scaleX(1)';
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0] )
    {
        winner = fields[0]
        getId('line4').style.transform ='rotate(90deg) scaleX(1.0)';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1] )
    {
        winner = fields[1]
        getId('line3').style.transform ='rotate(90deg) scaleX(1.0)';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2] )
    {
        winner = fields[2]
        getId('line5').style.transform ='rotate(90deg) scaleX(1.0)';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0] )
    {
        winner = fields[0]
        getId('line6').style.transform ='rotate(45deg) scaleX(1.0)';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2] )
    {
        winner = fields[2]
        getId('line6').style.transform ='rotate(-45deg) scaleX(1.0)';
    }

    if(winner)
    {
        console.log('WINNER',winner)
        gameOver = true;

        
       getId('winnerPlace').innerHTML = `${winner} won `
        setTimeout(function()
        {
            getId('gameField').classList.add('hide')
            getId('gameMenu2').classList.remove('hide')
            getId('gameOverScreen').classList.remove('hide')
        }, 2000)
    }

  
    
}

function restart()
{
    fields =[];
    gameOver = false;
    getId('gameOverScreen').classList.add('hide')
    getId('gameMenu2').classList.add('hide')
    getId('gameField').classList.remove('hide')

    for (let i = 0; i < 7; i++) {
        getId('line' + i).style.transform ='scaleX(0.0)'
        
    }
    for (let i = 0; i < 9; i++) {
        getId('cross_' + i).classList.add('hide')
        getId('circle_' + i).classList.add('hide')
        
    }
}