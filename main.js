window.addEventListener("load", () => {

    const $ = str => document.querySelector(str);

    let beatStart, beatEnd, beatCount;

    const display = $(".display");
    
    const updateDisplay = () => {
        const secondsPassed = (beatEnd - beatStart) / 1000;
        const bpm =  beatCount / secondsPassed * 60;
        display.innerText = bpm.toFixed(2);
    };

    const reset = () => {
        beatStart = undefined;
        beatEnd = undefined;
        beatCount = -1;
        display.innerText = "Tap Tap";
    };

    $(".heart").addEventListener("click", () => {
        if (beatStart === undefined) beatStart = Date.now();
        beatEnd = Date.now();
        if (++beatCount) updateDisplay();
    });

    $(".reset").addEventListener("click", reset);

    reset();
});