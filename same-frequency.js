// add whatever parameters you deem necessary

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    
    let count1 = {}
    let count2 = {}
    //also we can use helper function makeFrequencyConter
    for(i =0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }

    for(let j = 0; j < str2.length; j++) {
        count2[str2[j]] = (count2[str2[j]] || 0) + 1;
    }
    
    for(let key in count1) {
        if(count1[key] !== count2[key]) return false;
    }
    
   return true;
}


/** helper function */
// function makeFreqCounter(str) {
//     const freqCounter = new Map();      
//     for(let ele of str) {
//         let valCount = freqCounter.get(ele) || 0;
//         freqCounter.set(ele, valCount + 1);
//     }
//     return freqCounter;
// }


module.exports = sameFrequency;