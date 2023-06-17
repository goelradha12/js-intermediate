const nodeList = document.querySelectorAll("[data-time]");

//  to convert to array
const nodeArray = [...nodeList];
// go to every item and get time value
const totalseconds = nodeArray.map(node=> node.dataset.time)
                .map(time=>{
                    // Split time in min and sec, then calculate total seconds
                    let [minutes,seconds] = time.split(":");
                    let secondAll = parseFloat(minutes)*60 + parseFloat(seconds); 
                    return secondAll;
                })
                .reduce((total,second)=>{
                    // take all seconds and reduce them to one value
                    // console.log(total,second);
                    return total + second;
                });

// Now change the second in time
const hours = Math.floor(totalseconds/3600);
let secondsRemain = totalseconds%3600;

const minutes = Math.floor(secondsRemain/60);
secondsRemain = secondsRemain%60;

const totalTime = (hours) + ":" + (minutes) + ":" + (secondsRemain);
console.log(totalTime);
// console.log(hours, minutes, secondsRemain);