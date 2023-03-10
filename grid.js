//functions to the html

let cubeColor = "rgb(100, 70, 255)"
let cubeTextColor = "rgb(208,166,255)"
let cone = '◮' // ▲ △ ⋀ ⧍ ▴ ◮ ▵ ∆
let coneTextColor = "rgb(255,0,77)"
let coneColor = "rgb(255, 255, 0)"
let cube = '◨' // ■ ▣ ▪ ▨ ▩ █ ▦ ▢ ⎕ ⬕ □ ◨ ◪ ⬔ █ ▪

function buildHTML(GridNum){
    
    for(let i = 0, table; i < 4 ;i++){
        table = document.createElement("table")
        let row = table.insertRow(0)

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
            // txt.textContent = "row: " + (i + 1)
            txt.style.color = "rgb(255,255,255)"
            //txt.align = "center"
            document.body.appendChild(txt);
        }

        for(let j = 0, cell, bt; j < 9 ;j++){
            
            cell = row.insertCell(j);
            bt = document.createElement("button");
            bt.style.width = (window.innerWidth-50)/9 + "px";
            
            
            // //bt.style = "margin:5px;width:180px;padding:20px;font-size:28px;"
            // //bt.style.margin = "5px"
            // bt.style.height = (window.innerWidth-50)/9 + "px";
            // bt.style.fontSize = (window.innerWidth-50)/10 + "px"
            // //input.type = "text";
            // //bt.textContent = 0
            // bt.style.display = "inline-flex";
            // bt.style.alignItems = "center";
            // bt.style.justifyContent = "center"
            // // bt.style.textAlign = "center";
            // //bt.style.verticalAlign = "baseline"
            // bt.style.textAlign = "center";


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

            cell.appendChild(bt);
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
                console.log("row: " + (i+1) + " num: " + (j+1))
            }
        }
        document.body.appendChild(table);
    }
    retreveGrid(GridNum);
}

function buildArray(startIndex){
    let data = new Array(3)
    
    for(let i = 0; i < 4 ;i++){
        if(i<3){
            data[i] = new Array(9)
            //console.log("new")
        }
        console.log(data)
        for(let j = 0; j < 9 ;j++){
            //console.log(i)
            if(document.getElementById("button" + (9*i+j)).textContent === cube){
                if(i<3){
                    data[i][j] = 1
                }
                else{
                    //console.log(i-1+(" button" + (9*i+j)))
                    data[i-1][j] = 1
                }
                //console.log("line: " + i + (" button: " + (9*i+j)+ " value: " + 1))
            }
            else if(document.getElementById("button" + (9*i+j)).textContent === cone){
                if(i<3){
                    data[i][j] = 2
                }
                else{
                    data[i-1][j] = 2
                }
                //console.log("line: " + i + (" button: " + (9*i+j)+ " value: " + 2))
            }
            else{
                if(i<3){
                    data[i][j] = 0
                }
                //console.log("line: " + i + (" button: " + (9*i+j)+ " value: " + 0))
            }
        }
        // if(i === 3){
        //     console.log("line " + (i-1) + ": " + data[i-1])
        // }
        // else{
        //     console.log("line " + i + ": " + data[i])
        // }
        
    }
    //var dataSTarr = JSON.stringify(data)
    //document.cookie = "gridArrayCookie" + startIndex + "=" + dataSTarr + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
    //$.cookie("gridArrayCookie" + startIndex, JSON.stringify(data));
    //let sahuy = [456, 23, 89]
    let sahuy = JSON.stringify(data)
    console.log("sahuy: " + sahuy)
    document.cookie = "gridArrayCookie" + startIndex + "=" + sahuy + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
    // sahuy = document.cookie.split("gridArrayCookie" + startIndex + "=")[1].split("expires")[0]
    // sahuy = JSON.parse(sahuy)
    // console.log("sahuy2: " + sahuy)
    
    console.log(data)
    return data;
}

function retreveGrid(startIndex){
    for(let i = 0; i < 3 ; i++){
        for(let j = 0; j < 9 ; j++){
            //var storedAry = JSON.parse($.cookie("gridArrayCookie" + startIndex));
            try{
                let sahuy = document.cookie.split("gridArrayCookie" + startIndex + "=")[1].split("expires")[0]
                sahuy = JSON.parse(sahuy)
                console.log("seccess: " + i + j + " " + sahuy[i][j])

                let btTS = document.getElementById("button" + (9*i+j))
                if(sahuy[i][j] == 1 && i < 2){
                    btTS.textContent = cube
                }
                else if(sahuy[i][j] == 1 && i == 2){
                    btTS = document.getElementById("button" + (9*(i+1)+j))
                    btTS.textContent = cube
                }
                else if(sahuy[i][j] == 2){
                    btTS.textContent = cone
                }
            }
            catch{
                console.log("no cookies for you")
            }
        }
    }
}
