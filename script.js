document.addEventListener("DOMContentLoaded", () => {
    const chakras = [
        { id: "root", audio: "root-audio" },
        { id: "sacral", audio: "sacral-audio" },
        { id: "solar", audio: "solar-audio" },
        { id: "heart", audio: "heart-audio" },
        { id: "throat", audio: "throat-audio" },
        { id: "third-eye", audio: "third-eye-audio" },
        { id: "crown", audio: "crown-audio" }
    ];

    function activateChakra(index) {
        if (index >= chakras.length) return; 

        const chakraElement = document.getElementById(chakras[index].id);
        const audioElement = document.getElementById(chakras[index].audio);

        chakraElement.style.boxShadow = "0 0 30px white"; 
        audioElement.play();  

        setTimeout(() => {
            chakraElement.style.boxShadow = "";  
            audioElement.pause();
            audioElement.currentTime = 0;  

            activateChakra(index + 1);  
        }, 120000); 
    }

    activateChakra(0);  
});
