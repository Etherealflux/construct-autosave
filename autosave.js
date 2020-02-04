setTimeout(() => {
    setInterval(() => {
        window.dispatchEvent(new KeyboardEvent("keydown", {keyCode: 83, ctrlKey: true}))
    }, 10000);   
},
10000);
