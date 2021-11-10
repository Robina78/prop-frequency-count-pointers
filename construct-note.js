/**
* Build two frequency counter
*/
function constructNote(message, letters) {
    const messageFreq = makeFreqCounter(message);
    const lettersFreq = makeFreqCounter(letters);
    
    for(let key of messageFreq.keys()) {
        if(!lettersFreq.get(key)) return false;
        if(messageFreq.get(key) > lettersFreq.get(key)) return false;
    }
    return true;
}

function makeFreqCounter(str) {
    const freqCounter = new Map();
    for(let ele of str) {
        let valCount = freqCounter.get(ele) || 0;
        freqCounter.set(ele, valCount + 1);
    }
    return freqCounter;
}


module.exports = constructNote;