entrys = ['215144253', '905624371', '238422655', '1069230788', '1462988536', '2091094295', '1551615938', '1899628979', '1336188914', '1485941316', '1534881471', '959011620', '995380584', '908622034', '1935087656', '1767549046', '1948424327', '1594794675', '952767415', '252823478', '1012333898'] //entrys = ["215144253", "905624371", "238422655", "1069230788", "1462988536", "2091094295", "1551615938", "1899628979", "1336188914", "1485941316", "1534881471", "959011620", "995380584", "908622034", "1935087656", "1948424327", "1767549046", "1594794675", "952767415", "252823478", "1012333898"]
let Questions = [["שם סקאוטר"], ["מספר משחק (למשל q18)"], ["מספר קבוצה"], ["ברית", "אדומה", "כחולה"], ["שורה עליונה - קונוסים שהוצלחו"], ["שורה עליונה - קוביות שהוצלחו"], ["שורה אמצעית - קונוסים שהוצלחו"], ["שורה אמצעית - קוביות שהוצלחו"], ["שורה תחתונה - קונוסים/קוביות שהוצלחו"], ["תחנת טעינה", "לא עלה", "עלה בלי להתאזן", "התאזן", "ניסה ונכשל (הא איזה לוזר)"], ["שורה עליונה - קונוסים שהוצלחו"], ["שורה עליונה - קוביות שהוצלחו"], ["שורה אמצעית - קונוסים שהוצלחו"], ["שורה אמצעית - קוביות שהוצלחו", ], ["שורה תחתונה - קונוסים/קוביות שהוצלחו"], ["תחנת טעינה", "לא עלה (לוזר)", "עלה בלי להתאזן (קצת לוזר)", "התאזן בגלל רובוט אחר (עדיין לוזר)", "עלה אבל רובוט אחר הרס את האיזון (קצת פחות לוזר)", "הרס את האיזון של הברית (סופר לוזר)", "התאזן בכוחות עצמו (chad)"], ["זמן טיפוס"], ["האם שיחקו הגנה נגדם?", "כן", "לא", "לפעמים (יותר מ-20 אחוז)"], ["האם הרובוט נשבר?", "כן", "לא"], ["אם הרובוט נשבר, איך?"], ["הפיל קונוסים/קוביות", "הפיל יותר מ-1 ב-loading zone", "הפיל יותר מ-1 באמצע המגרש", "הפיל יותר מ-1 ב-community", "לא הפיל יותר מ-1 באף אזור"]]//[["שם סקאוטר"], ["מספר משחק (למשל q18)"], ["מספר קבוצה"], ["ברית", "אדומה", "כחולה"], ["שורה עליונה - קונוסים שהוצלחו"], ["שורה עליונה - קוביות שהוצלחו"], ["שורה אמצעית - קונוסים שהוצלחו"], ["שורה אמצעית - קוביות שהוצלחו"], ["שורה תחתונה - קונוסים/קוביות שהוצלחו"], ["תחנת טעינה", "לא עלה", "עלה בלי להתאזן", "התאזן", "ניסה ונכשל (הא איזה לוזר)"], ["שורה עליונה - קונוסים שהוצלחו"], ["שורה עליונה - קוביות שהוצלחו"], ["שורה אמצעית - קונוסים שהוצלחו"], ["שורה אמצעית - קוביות שהוצלחו", ], ["שורה תחתונה - קונוסים/קוביות שהוצלחו"], ["זמן טיפוס"], ["תחנת טעינה", "לא עלה (לוזר)", "עלה בלי להתאזן (קצת לוזר)", "התאזן בגלל רובוט אחר (עדיין לוזר)", "עלה אבל רובוט אחר הרס את האיזון (קצת פחות לוזר)", "הרס את האיזון של הברית (סופר לוזר)", "התאזן בכוחות עצמו (chad)"], ["האם שיחקו הגנה נגדם?", "כן", "לא", "לפעמים (יותר מ-20%)"], ["האם הרובוט נשבר?", "כן", "לא"], ["אם הרובוט נשבר, איך?"], ["הפיל קונוסים/קוביות", "הפיל יותר מ-1 ב-loading zone", "הפיל יותר מ-1 באמצע המגרש", "הפיל יותר מ-1 ב-community", "לא הפיל יותר מ-1 באף אזור"]]

//entrys = getEntrysSTR()
//Questions = getQuestionsSTR()

function buildHTML(formwhere, until){
    let tambel = document.createElement("table")
    //tambel.style.alignSelf = "center"
    // document.body.appendChild(document.createElement("button"))
    for(let i = formwhere, row, cell, text, textBox; i < until ;i++){
        row = tambel.insertRow(i-formwhere)
        cell = row.insertCell(0)
        text = document.createElement("p")
        text.style.color = "white"
        
        cell.appendChild(text)
        //textBox.value = "lol"
        if(Questions[i].length == 1){
            textBox = document.createElement("input")
            textBox.id = "textBox" + (i - formwhere)
            textBox.type = "text"
            textBox.style.backgroundColor = "rgb(100,100,100)"
            textBox.style.width = window.innerWidth*0.9 + "px"
            textBox.style.height = window.innerWidth/10 + "px"
            textBox.style.fontSize = window.innerWidth/18 + "px"
            cell.appendChild(textBox)
        }
        else{
            for (let j = 1, lbl, tembel = document.createElement("table"), row, minicell; j < Questions[i].length; j++) {
                row = tembel.insertRow(j - 1)
                minicell = row.insertCell(0)
                lbl = document.createElement("label")
                lbl.textContent = Questions[i][j]
                lbl.id = "textLabel" + (i - formwhere) + "row" + j
                lbl.style.color = "white"
                lbl.style.fontSize = window.innerWidth/25 + "px"
                textBox = document.createElement("input")
                textBox.id = "textBox" + (i - formwhere) + "row" + j
                textBox.style.height = window.innerWidth/25 + "px"
                textBox.style.width = window.innerWidth/25 + "px"
                textBox.type = "checkbox"
                minicell.appendChild(lbl)
                minicell.appendChild(textBox)
                
                cell.appendChild(tembel)
              }              
        }
        
        if(window.innerHeight < window.innerWidth){
            text.style.fontSize = (window.innerWidth/200)*(window.innerHeight/100)*0.5 + "px"
        }
        else{
            text.style.fontSize = (window.innerWidth/100)*(window.innerHeight/200) + "px"
        }
        console.log(window.innerWidth)

        if(Questions.length > i){
            text.textContent = Questions[i][0]
            // if(Questions[i].length > 1){
            //     text.textContent += Questions[i].length
            // }
        }
        else{
            text.textContent = "click here to get free iPhone"
        }
    }
    document.body.appendChild(tambel)
}
