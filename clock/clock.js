// function add(a,b)
// {
//     console.log(a+b);
// }

// greet();


// let id  = setTimeout(greet, 2000);
// let id_1  = setTimeout(greet, 2000);
// console.log(id, id_1);

// clearTimeout(id);

// let id = setInterval(greet, 1001);
// console.log(id);
// clearInterval(id);

// let id = setTimeout(add, 1000);


// let obj = new Date(2025, 0, 1);
// let obj_1 = new Date(2025,0,2);
// let obj_2 = new Date(2025,0,3);

// console.log(obj_2-obj_1);

// console.log(typeof obj);
// console.log(Number(obj));

// let obj = new Date();


function handle_clock()
{
const date = new Date();
// console.log(date);

const hr  = date.getHours() % 12;
const min  = date.getMinutes();
const secd = date.getSeconds();

console.log(hr, min, secd);

const hr_deg = 180 + (hr*30 + min*(0.5)) ;
const min_deg =180 +  (min*6 + secd*(0.1));
const sec_deg =180 + ( secd*6);

console.log(hr_deg, min_deg, sec_deg);


let sec_hand = document.getElementById("scd");
console.log(sec_hand);

let rand_sec = `rotate(${sec_deg}deg)`;
sec_hand.style.transform=rand_sec;


let min_hand = document.getElementById("mnt");
let rand_min = `rotate(${min_deg}deg)`;
min_hand.style.transform=rand_min;

let hr_hand = document.getElementById("hrs");
let rand_hr = `rotate(${hr_deg}deg)`;
hr_hand.style.transform=rand_hr;


}


setInterval(handle_clock, 1000);


