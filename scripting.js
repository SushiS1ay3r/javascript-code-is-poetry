// Daniel Huang
// Period 3 & 4 ODD
// 9/29/23

function createParagraph()
{
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    para.textContent = "My name is Daniel Huang.";
    para1.textContent = "His body is super long!";
    document.body.appendChild(para);
    document.body.appendChild(para1);
}

function createParagraph2()
{
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para2.textContent = "He originates from Hong Kong.";
    para3.textContent = "He used to be a Master at Ping-pong.";
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}

function createParagraph3()
{
    const para4 = document.createElement("p");
    const para5 = document.createElement("p");
    para4.textContent = "Now come follow me along!";
    para5.textContent = "And sing this song...";
    document.body.appendChild(para4);
    document.body.appendChild(para5);
}

function createParagraph4()
{
    const para6 = document.createElement("p");
    const para7 = document.createElement("p");
    para6.textContent = "My name is Daniel Huang";
    para7.textContent = "His body is super strong!";
    document.body.appendChild(para6);
    document.body.appendChild(para7);
}

function createParagraph5()
{
    const para8 = document.createElement("p");
    const para9 = document.createElement("p");
    para8.textContent = "He originates from Hong Kong.";
    para9.textContent = "He used to be a Master at Mahjong.";
    document.body.appendChild(para8);
    document.body.appendChild(para9);
}

function createParagraph6()
{
    const para10 = document.createElement("p");
    const para11 = document.createElement("p");
    para10.textContent = "Now hit the gong,";
    para11.textContent = "and let's finish this song!";
    document.body.appendChild(para10);
    document.body.appendChild(para11);
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

button1.addEventListener("click", createParagraph);
button2.addEventListener("click", createParagraph2);
button3.addEventListener("click", createParagraph3);
button4.addEventListener("click", createParagraph4);
button5.addEventListener("click", createParagraph5);
button6.addEventListener("click", createParagraph6);

// const buttons = document.querySelectorAll('button');

// for (const button of buttons)
// {
//     button.addEventListener("click", createParagraph);
// }

