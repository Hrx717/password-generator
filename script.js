const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "@&*_./";

const passBox = document.getElementById('pass-box');
const totalChar = document.getElementById('total-char');
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (passwd = "") => {
    if(upperInput.checked) {
        passwd+=getRandomData(upperSet);
    }
    if(lowerInput.checked) {
        passwd+=getRandomData(lowerSet);
    }
    if(numberInput.checked) {
        passwd+=getRandomData(numberSet);
    }
    if(symbolInput.checked) {
        passwd+=getRandomData(symbolSet);
    }

    if(passwd.length < totalChar.value) {
        return generatePassword(passwd)
    }

    passBox.innerText = truncateString(passwd, totalChar.value);
}

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

generatePassword();

document.getElementById('btn').addEventListener('click',()=>generatePassword());