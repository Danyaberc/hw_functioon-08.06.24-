let elBtn = document.querySelector('.btn')
let elMsg = document.querySelector('.message')

let funcRes = (resYear,resMonth,resDay) =>{
    console.log('resYEAR:',resYear);
    console.log('resMonth:',resMonth);
    console.log('resDay:', resDay)
    elBtn.addEventListener('click',()=>{
        elMsg.classList.toggle('active')
        if(!elMsg.classList.contains('active')){
            elMsg.innerHTML = ''
        }  
        elMsg.innerHTML = age;
    })
   

}


let calcAge = (calcBirthday) => {
    const dateNow = new Date()
    const dateBirth = new Date(calcBirthday)

    let age = dateNow.getFullYear() - dateBirth.getFullYear()
    let yearBirth = dateBirth.getFullYear();
    let monthBirth = dateBirth.getMonth()
    let dayBirth =  dateBirth.getDay()

    console.log('it`s my age age', age)
    console.log("it`s my yearBirth",yearBirth)
    console.log('it`s my monthBirth monthBirth', monthBirth)
    console.log('it`s my dayBirth dayBirth', dayBirth)

    funcRes(yearBirth, monthBirth , dayBirth)
    return age
}

const myBirthDay = "1999-04-09"
let age = calcAge(myBirthDay)
console.log('returnage',age)

