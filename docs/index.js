$(() => {
    var mouseLeave = true;
    $("#liWeapon").on({
        "mouseenter": () => {
            $("#liWeapon ul:not(:animated)").slideDown();
        },
        "mouseleave": () => {
            if(mouseLeave) {
                $("#liWeapon ul").slideUp();
            }
        }
    })
    $("#liItems").on({
        "mouseenter": () => {
            $("#liItems ul:not(:animated)").slideDown();
        },
        "mouseleave": () => {
            if(mouseLeave) {
                $("#liItems ul").slideUp();
            }
        }
    })
    $("#liSetting").on({
        "mouseenter": () => {
            $("#liSetting ul:not(:animated)").slideDown();
        },
        "mouseleave": () => {
            if(mouseLeave) {
                $("#liSetting ul").slideUp();
            }
        }
    })
    $(".sub-menu").on({
        "mouseleave": () => {
            mouseLeave = true;
        },
        "mouseenter": () => {
            mouseLeave = false;
        }
    })
    //click
    $("#liPlay a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./play/index.html");
    })
    $("#liStart a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./status/index.html");
    })
    $("#liArts a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./arts/index.html");
    })
    $("#liItems a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./items/index.html");
    })
    $("#liSetting a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./setting/index.html");
    })
    $("#ligun a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./weapon/gun/index.html");
    })
    $("#lisword a").on("click", () => {
        $("iframe")[0].contentDocument.location.replace("./weapon/sword/index.html");
    })
})