//let entrysTest = ["test", "lol", "sus", "rtx","toast", "lolo", "sos", "rtox"]

let entrys = ['215144253', '905624371', '238422655', '1069230788', '1462988536', '2091094295', '1551615938', '1899628979', '1336188914', '1485941316', '1534881471', '959011620', '995380584', '908622034', '1935087656', '1767549046', '1948424327', '1594794675', '952767415', '252823478', '1012333898'] //entrys = ["215144253", "905624371", "238422655", "1069230788", "1462988536", "2091094295", "1551615938", "1899628979", "1336188914", "1485941316", "1534881471", "959011620", "995380584", "908622034", "1935087656", "1948424327", "1767549046", "1594794675", "952767415", "252823478", "1012333898"]//["215144253", "905624371", "238422655", "1069230788", "1462988536", "2091094295", "1551615938", "1899628979", "1336188914", "1485941316", "1534881471", "959011620", "995380584", "908622034", "1935087656", "1948424327", "1767549046", "1594794675", "952767415", "252823478", "1012333898"]
//entrys = getEntrysSTR()

function fillFromTamble(scoresArray, fromWhere){
    //variable that store the link that genrated
    let scoresLink = ""
    //counters
    let rowCone=0, rowCube=0

    //run over all of the lines
    for(let i = 0; i/2 < scoresArray.length; i+=2){
        //and over all of the values in each line
        for(let j = 0; j < scoresArray[0].length; j++){
            //count if it is a cone
            if(scoresArray[i/2][j] === 2){
                rowCone++;
                //don't worry about that ("row" + i + "cones") = ("row" + i + "cones") +1
            }
            //count if it is a cube
            else if(scoresArray[i/2][j] === 1){
                rowCube++;
                //don't worry about that ("row" + i + "cubes") = ("row" + i + "cubes") +1
            }
        }
        //generate the link to the google forms
        if(i/2+1 === scoresArray.length){
            scoresLink += "&entry." + entrys[i+fromWhere] + "=" + (rowCone+rowCube)
        }
        else{
            scoresLink += "&entry." + entrys[i+fromWhere] + "=" + rowCone
            scoresLink += "&entry." + entrys[i+1+fromWhere] + "=" + rowCube
        }
        //reset the counters
        rowCone=0
        rowCube=0
    }
    //return the link
    return scoresLink;
}

function updateEntrys(){
    getQuestionsEntrys().then( temp =>{
            entrys = temp
    });
}
// let nums = [[1, 2, 0, 1],[2, 0, 2, 0],[1, 1, 0, 1], [0, 0, 0, 0]]
// console.log(fillFromTamble(nums, 4))

function fillFromArray(fromWhere, answares){
    let theLink = ""

    for(let i = fromWhere; i < fromWhere + answares.length ;i++){
        console.log("i:"+i-fromWhere)
        for(let j = 0; j < answares[i-fromWhere].length;j++){
            console.log("j:"+j)
            if(answares[i-fromWhere][j] != "")
            theLink += "&entry." + entrys[i] + "=" + answares[i-fromWhere][j]
        }
    }
    theLink = (theLink)
    return theLink
}

function fillOne(ondex, answare){
    return ("&entry." + entrys[ondex] + "=" + answare)
}

function unbuild(cookieTag){
    let theCookie = document.cookie.split(cookieTag+"=")[1].split("expires")[0]
    theCookie = theCookie.split('&entry.')

    for(let i = 0; i< theCookie.length ;i++){
        console.log("before: " + theCookie[i])
        theCookie[i] = theCookie[i].split('=')[1]
        console.log("after: " + theCookie[i])
    }

    console.log("cook: " + theCookie)
}

//console.log(fillFromArray(1, ["hi", "hello", "world"]))
