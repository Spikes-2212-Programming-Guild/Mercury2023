// all of the constant variables that required by the code
const cube = '◨' //options: ■ ▣ ▪ ▨ ▩ █ ▦ ▢ ⎕ ⬕ □ ◨ ◪ ⬔ █ ▪
const cubeColor = "rgb(100, 70, 255)"
const cubeTextColor = "rgb(208,166,255)"
const cubeValue = 1

const cone = '◮' //options: ▲ △ ⋀ ⧍ ▴ ◮ ▵ ∆
const coneColor = "rgb(255, 255, 0)"
const coneTextColor = "rgb(255,0,77)"
const coneValue = 2

// a function that builds the grid html page
function buildHTML(GridNum){

    // run 4 times to create the 4 (3) rows of the grid
    // there are 3 rows in the grid but 4 rows is created because in the 3rd row it is possible to put cone/cube in any location
    // the 3rd and 4rd rows are the same row but one is for cones and the other for cubes
    for(let i = 0, table; i < 4 ;i++){

        //create a table with 1 row of buttons/game pieces
        table = document.createElement("table")
        let row = table.insertRow(0)

        // check if and what title to put above any row and add it to the html page
        if(i<3){
            let txt = document.createElement("h4")
            if(i === 0){
                txt.textContent = "High"
            }
            else if(i === 1){
                txt.textContent = "Middle"
            }
            else{
                txt.textContent = "Bottom"
            }
            txt.style.fontSize = "19px"
            txt.style.color = "rgb(255,255,255)"
            document.body.appendChild(txt);
        }

        // for this row create a cell and a button/game pieces
        for(let j = 0, cell, bt; j < 9 ;j++){
            
            cell = row.insertCell(j);
            bt = document.createElement("button");

            //set the button parameters and desine and create a unique ID to it
            bt.style.display = "inline-flex";
            bt.style.alignItems = "center";
            bt.style.justifyContent = "center";
            bt.style.fontFamily = "Arial, sans-serif;"

            bt.style.width = (window.innerWidth - 50) / 9 + "px";
            bt.style.height = (window.innerWidth - 50) / 9 + "px";

            bt.style.fontSize = (window.innerWidth - 50) / 9 + "px";
            bt.style.textAlign = "center";
            bt.style.verticalAlign = "middle";
            bt.id = "button" + (9*i+j);

            //add the button to the cell
            cell.appendChild(bt);

            // set the button color based on his location in the grid
            if(j%3 === 1 && i < 2){
                bt.style.backgroundColor = cubeColor
                bt.style.color = cubeTextColor
                bt.style.borderColor = cubeTextColor
            }
            else if(i < 2){
                bt.style.backgroundColor = coneColor
                bt.style.color = coneTextColor
                bt.style.borderColor = coneTextColor
            }
            else if(i === 2){
                bt.style.backgroundColor = coneColor
                bt.style.color = coneTextColor
                bt.style.borderColor = coneTextColor
            }
            else{
                bt.style.backgroundColor = cubeColor
                bt.style.color = cubeTextColor
                bt.style.borderColor = cubeTextColor
            }

            // function that changes the button text when the button clicked to represent game piece
            bt.onclick = function test(){
                if(bt.textContent === "" && bt.style.backgroundColor === cubeColor && i < 3){
                    bt.textContent = cube
                }
                else if(bt.textContent === "" && i < 2){
                    bt.textContent = cone
                }
                else if(bt.textContent === "" && i === 2){
                    bt.textContent = cone
                    let bt2 = document.getElementById("button" + (9*(i+1)+j))
                    bt2.textContent = ""
                }
                else if(bt.textContent === "" && i === 3){
                    bt.textContent = cube
                    let bt2 = document.getElementById("button" + (9*(i-1)+j))
                    bt2.textContent = ""
                }
                else{
                    bt.textContent = ""
                }
                //print the location of the button on the grid (D bug)
                console.log("row: " + (i+1) + " num: " + (j+1))
            }
        }
        //add the row table to the html
        document.body.appendChild(table);
    }
    retreveGrid(GridNum);
}

// function to create a 3x9 array that represent the grid
function buildArray(startIndex){
    let data = new Array(3)
    
    // run over all of the 4 (3, read in the buildHTML documentation) rows of the grid
    for(let i = 0; i < 4 ;i++){
        
        // check if needed to add a new row to the array (max = 3, the last two are combined to the same row)
        if(i<3){
            data[i] = new Array(9)
        }

        // run over each button/game pice in every row
        for(let j = 0; j < 9 ;j++){

            // each game pieces have different value, and the value get stored in the array
            if(document.getElementById("button" + (9*i+j)).textContent === cube){
                if(i<3){
                    data[i][j] = cubeValue
                }
                else{
                    data[i-1][j] = cubeValue
                }
            }
            else if(document.getElementById("button" + (9*i+j)).textContent === cone){
                if(i<3){
                    data[i][j] = coneValue
                }
                else{
                    data[i-1][j] = coneValue
                }
            }
            else if(i<3){
                data[i][j] = 0
            }
        }
    }
    
    // store the array in a cookie so it could be auto loaded next time
    let sahuy = JSON.stringify(data)
    document.cookie = "gridArrayCookie" + encodeURIComponent(startIndex) + "=" + sahuy + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
    
    //return the array
    console.log(data)
    return data;
}

// function that retreve all of the data from the grid cookie and puts it in the html elements
function retreveGrid(startIndex){

    //try to get the cookies
    try{
        let sahuy = decodeURIComponent(document.cookie.split("gridArrayCookie" + startIndex + "=")[1].split(";")[0])
        sahuy = JSON.parse(sahuy)
        
        // run over all of the values in all of the rows
        for(let i = 0; i < 3 ; i++){
            for(let j = 0; j < 9 ; j++){
                
                // get the button and put the game pice value in it
                let btTS = document.getElementById("button" + (9*i+j))
                if(sahuy[i][j] == cubeValue && i < 2){
                    btTS.textContent = cube
                }
                else if(sahuy[i][j] == cubeValue && i == 2){
                    btTS = document.getElementById("button" + (9*(i+1)+j))
                    btTS.textContent = cube
                }
                else if(sahuy[i][j] == coneValue){
                    btTS.textContent = cone
                }
            }
        }
    }
    catch{
        console.log("no cookies for you")
    }
}
