document.addEventListener('DOMContentLoaded', async () => {
    // window.ipcAPI.getId()
    // .then((payload) => {
    //     console.log(payload);
    //     document.getElementById("profile").innerHTML = payload[0]["name"];
    // });
    const urlParams = new URL(location.href).searchParams;
    const char = urlParams.get('char');

    if (char == "Lb") {
        document.getElementById("Name").innerText = "파운드";
        new spine.SpinePlayer("player-container", {
            viewport: {
                x: -3100,
                y: -100,
                width: 3840,
                height: 2160,
                padLeft: "0%",
                padRight: "0%",
                padTop: "0%",
                padBottom: "0%"
            },
            jsonUrl: "../spine/ib/ib.json",
            atlasUrl: "../spine/ib/ib.atlas",
    
            animation: "animation",
            showControls: false,
            backgroundImage: {
                url: "../UI_Image/UI/Character_Skill_Page/Background.png",
                x: 0,
                y: 0
            },
    
            rawDataURIs: {
                "ib.skel.bytes": "../spine/ib_by/ib.skel.bytes",
                "ib.atlas": "../spine/ib_by/ib.atlas",
                "ib.png": "../spine/ib_by/ib.png"
            }
        });
    }
    else if (char == "Riana") {
        document.getElementById("Name").innerText = "리아나";
        new spine.SpinePlayer("player-container", {
            viewport: {
                x: -3000,
                y: -200,
                width: 3840,
                height: 2160,
                padLeft: "0%",
                padRight: "0%",
                padTop: "0%",
                padBottom: "0%"
            },
            jsonUrl: "../spine/Riana/riana.json",
            atlasUrl: "../spine/Riana/riana.atlas",
    
            animation: "animation",
            showControls: false,
            backgroundImage: {
                url: "../UI_Image/UI/Character_Skill_Page/Background.png",
                x: 0,
                y: 0
            },
    
            rawDataURIs: {
                "riana.skel": "../spine/riana_by/riana.skel",
                "riana.atlas": "../spine/riana_by/riana.atlas",
                "riana.png": "../spine/riana_by/riana.png"
            }
        });
    }
    else if (char == "Allium") {
        document.getElementById("Name").innerText = "알리움";
        new spine.SpinePlayer("player-container", {
            viewport: {
                x: -3000,
                y: -200,
                width: 3840,
                height: 2160,
                padLeft: "0%",
                padRight: "0%",
                padTop: "0%",
                padBottom: "0%"
            },
            jsonUrl: "../spine/allium_json/allium_3.json",
            atlasUrl: "../spine/allium_json/allium_1.atlas",
    
            animation: "animation",
            showControls: false,
            backgroundImage: {
                url: "../UI_Image/UI/Character_Skill_Page/Background.png",
                x: 0,
                y: 0
            },
    
            rawDataURIs: {
                "allium.bytes": "../spine/allium_bytes/allium.bytes",
                "allium_lliuste.atlas": "../spine/allium_bytes/allium_lliuste.atlas",
                "allium_png.png": "../spine/allium_bytes/allium_png.png"
            }
        });
    }
});