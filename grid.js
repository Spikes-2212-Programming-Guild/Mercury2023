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
            if(/iPhone/i.test(navigator.userAgent)){
                console.log("iPhone looser here")
                bt.style.width = "50px";
                bt.style.height = "50px";
            }
            else{
                bt.style.width = (window.innerWidth - 50) / 9 + "px";
                bt.style.height = (window.innerWidth - 50) / 9 + "px";
            }

            bt.style.fontSize = (window.innerWidth - 50) / 9 + "px";
            //bt.style.textAlign = "center";
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
            //bt.style.textEmphasisColor = "blue"
            //bt.style.border = "none"
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
                    if(/iPhone/i.test(navigator.userAgent)){
                        console.log("iPhone looser here")
                    }
                    else{
                        document.cookie = "grid" + GridNum + "button" + (9*(i+1)+j) + "=" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
                    }
                }
                else if(bt.textContent === "" && i === 3){
                    bt.textContent = cube
                    let bt2 = document.getElementById("button" + (9*(i-1)+j))
                    bt2.textContent = ""
                    if(/iPhone/i.test(navigator.userAgent)){
                        console.log("iPhone looser here")
                    }
                    else{
                        document.cookie = "grid" + GridNum + "button" + (9*(i-1)+j) + "=" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
                    }
                }
                else{
                    bt.textContent = ""
                }
                console.log("row: " + (i+1) + " num: " + (j+1))
                //bt.textContent = Number(bt.textContent)*-1 + 1
                if (/iPhone/i.test(navigator.userAgent) && false) {
                    window.alert("you have an iPhone you noob! too bad you didn't have mony to buy an android...")
                }
                else{
                    document.cookie = "grid" + GridNum + "button" + (9*i+j) + "=" + document.getElementById("button" + (9*i+j)).textContent + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
                    console.log("you arn't using an iPhone! you're good!")
                }
            }
            try{
                bt.textContent = document.cookie.split("grid" + GridNum + "button" + (9*i+j) + "=")[1].split("expires")[0]
                
            }
            catch{
                console.log("wasnt any data to recover")
            }
        }
        document.body.appendChild(table);
    }
}

function buildArray(){
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
    console.log(data)
    return data;
}
