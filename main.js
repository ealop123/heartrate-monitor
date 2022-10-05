window.addEventListener("load", () => {

    const getEl = id => document.getElementById(id);

    let beatStart, beatEnd, beatCount;

    const display = getEl("display");
    
    const updateDisplay = () => {

        const secondsPassed = (beatEnd - beatStart) / 1000;
        const bpm =  beatCount / secondsPassed * 60;
        display.innerText = bpm.toFixed(2);

    };

    const reset = () => {

        beatStart = undefined;
        beatEnd = undefined;
        beatCount = -1;
        display.innerText = "---.--";

    };

    getEl("heart").addEventListener("click", e => {
        
        if (beatStart === undefined) beatStart = e.timeStamp;

        beatEnd = e.timeStamp;

        if (++beatCount) updateDisplay();

    });

    getEl("reset").addEventListener("click", reset);

    reset();
});