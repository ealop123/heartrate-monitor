window.addEventListener("load", () => {

    const getEl = id => document.getElementById(id);
    const getTime = () => performance.now();

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

    getEl("heart").addEventListener("click", () => {
        if (beatStart === undefined) beatStart = getTime();
        beatEnd = getTime();
        if (++beatCount) updateDisplay();
    });

    getEl("reset").addEventListener("click", reset);

    reset();
});