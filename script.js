let isDOBOpen = false;
let dateOfbirth;
const settingCogEl = document.getElementById("SettingIcon");
const settingContentEl = document.getElementById("Settingcontent");
const intialTextEl = document.getElementById("intialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const btnEl = document.getElementById("btn");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("Year");
const monthEl = document.getElementById("Months");
const dayEl = document.getElementById("Days");
const hourEl = document.getElementById("Hour");
const minutesEl = document.getElementById("Minutes");
const secondsEl = document.getElementById("Seconds");

const MakeTwoDigitNumber = (number) => {

return number > 9 ? number : `0${number}`;

}

const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add("hide");
    } else {
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    console.log("Toggle", isDOBOpen);
};

const updateAge = () => {
    const currentdata = new Date();
    const datediff = currentdata - dateOfbirth;
    const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365) % 12);
    const day = Math.floor(datediff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(datediff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(datediff / (1000 * 60)) % 60;
    const second = Math.floor(datediff / 1000) % 60;

    yearEl.innerHTML = MakeTwoDigitNumber(year);
    monthEl.innerHTML = MakeTwoDigitNumber(month);
    dayEl.innerHTML = MakeTwoDigitNumber(day);
    hourEl.innerHTML = MakeTwoDigitNumber(hour);
    minutesEl.innerHTML = MakeTwoDigitNumber(minute);
    secondsEl.innerHTML = MakeTwoDigitNumber(second);
}

const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateOfbirth = dateString ?  new Date(dateString) : null;

    const year = localStorage.getItem('year');
    const month = localStorage.getItem('month');
    const date = localStorage.getItem('date');

    if(year && month && date){
        console.log({
            year,
            month,
            date,
        });
    }

    if (dateOfbirth) {

        localStorage.setItem('year',dateOfbirth.getFullYear());
        localStorage.setItem('month',dateOfbirth.getMonth());
        localStorage.setItem('date',dateOfbirth.getDate());
        
        intialTextEl.classList.add("hide")
        afterDOBBtnTxtEl.classList.remove("hide");
        setInterval(() => updateAge(),1000)
    } else {
        afterDOBBtnTxtEl.classList.add("hide");
        intialTextEl.classList.remove("hide");
    }
};

setDOBHandler();

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
btnEl.addEventListener("click", setDOBHandler);
