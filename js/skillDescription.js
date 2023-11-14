document.getElementById("gotoIndexpage").addEventListener("click", gotoIndexpage);

function gotoIndexpage() {
    const urlParams = new URL(location.href).searchParams;
    location.href="characterIntroduce.html?char=" + urlParams.get('char');
}

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
                x: -3200,
                y: -50,
                width: 3840,
                height: 2160,
                padLeft: "0%",
                padRight: "0%",
                padTop: "0%",
                padBottom: "0%"
            },
            jsonUrl: "../spine/allium_json/allium.json",
            atlasUrl: "../spine/allium_json/allium.atlas",
    
            animation: "animation",
            showControls: false,
            backgroundImage: {
                url: "../UI_Image/UI/Character_Skill_Page/Background.png",
                x: 0,
                y: 0
            },
    
            rawDataURIs: {
                "allium.skel.bytes": "../spine/allium_by/allium.skel.bytes",
                "allium.atlas": "../spine/allium_by/allium.atlas",
                "allium.png": "../spine/allium_by/allium.png"
            }
        });
    }
});