import {ZStackPlayer} from '../src';


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

const url = new URL(window.location.href);
let numstacks = url.searchParams.get('n');
if (numstacks) {
    numstacks = parseInt(numstacks, 10);
}
const options = {
    names: Array.from({ length: 100 }, (e, i) => { return "explosion00-frame" + pad(i+1, 3) + ".png"; }),
    names2: numstacks ? Array.from({ length: 100 }, (e, i) => { return "explosion01-nofire-frame" + pad(i+1, 3) + ".png"; }) : null,
    animSpeed: 100,
    initialSlice: 50
};

const player = new ZStackPlayer(options);
