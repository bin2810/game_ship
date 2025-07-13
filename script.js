

document.getElementById('start').addEventListener("click", () => {
    
    const introducts = document.getElementById('introducts');
    const game_frame = document.getElementById('game_frame');

    introducts.classList.add("hidden");
    game_frame.classList.remove("hidden");

    const ship = document.getElementById('main_ship');
    let moveinterval = null;

    const moveship = (direction) => {
        const step = 5;
        const rect = ship.getBoundingClientRect();
        const board = document.getElementById('game_frame').getBoundingClientRect();
        const top = ship.offsetTop;
        const left = ship.offsetLeft;
       
        switch (direction) {
            case "up":
                if (top - step >= 0) ship.style.top = `${top - step}px`;
                break;
            case "down":
                if (top + ship.clientHeight + step <= board.height)
                    ship.style.top = `${top + step}px`;
                break;
            case "left":
                if (left - step >= 0) ship.style.left = `${left - step}px`;
                break;
            case "right":
                if (left + ship.clientWidth + step <= board.width)
                    ship.style.left = `${left + step}px`;
                break;
        }

    };
    
     const startMoving = (direction) => {
        moveinterval= setInterval(() => moveship(direction), 30);
    };


    const stopMoving = () => {
        clearInterval(moveinterval);
    };


    // Gắn vùng điều khiển
    ["up", "down", "left", "right"].forEach((dir) => {
        const btn = document.getElementById("control_" + dir);
        btn.addEventListener("mouseenter", () => startMoving(dir));
        btn.addEventListener("mouseleave", stopMoving);
    });

});


