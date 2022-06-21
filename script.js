console.log("Ready !");
window.addEventListener("load", () => {
    console.log("Hello world !");

    let colors = ['red', 'green', 'blue'];
    let colorChange = document.querySelector('.colorChange');
    let i = 0;

    //Color changing title
    setInterval(() => {
        changeColor(i);
    }, 1000);


    function changeColor(i) {
            timeout = setTimeout(function () {
                colorChange.style.backgroundColor = colors[i];
                if (i == 3) {
                    clearTimeout(timeout);
                    return;
                }
                changeColor(i+1);
            }, 500);
    }

    //Color changing slider
    let red, green, blue;

    document.querySelector('#red').addEventListener('input', () => {
        updateColor();
        colorDiv();
        updateBorder()
    });
    document.querySelector('#green').addEventListener('input', () => {
        updateColor();
        colorDiv();
        updateBorder()
    });
    document.querySelector('#blue').addEventListener('input', () => {
        updateColor();
        colorDiv();
        updateBorder()
    });
    document.querySelector('#opacity').addEventListener('input', () => {
        updateColor();
        colorDiv();
        updateBorder()
    });

    document.querySelector('#updateColorBtn').addEventListener('click', colorBody);

    function updateColor() {
        red = document.querySelector('#redSpan').innerText = document.querySelector('#red').value;
        green = document.querySelector('#greenSpan').innerText = document.querySelector('#green').value;
        blue = document.querySelector('#blueSpan').innerText = document.querySelector('#blue').value;
        opacity = document.querySelector('#opacSpan').innerText = document.querySelector('#opacity').value;

        return red, green, blue;
    }

    function colorBody() {
        document.body.style.backgroundColor = document.querySelector("#colorSpan").innerText;
    }

    function colorDiv(){
        document.querySelector('#rgbDiv').style.backgroundColor = document.querySelector("#colorSpan").innerText;
    }

    function updateBorder() {
        document.querySelector('#rgbDiv').style.borderColor = 'rgba(' + (255 - red) + ',' + (255 - green) + ',' + (255 - blue) + ')';
    }

    //Gallery
    let currentImg = 0;
    let galleryArr =
        [
            'images/cute_lazy_kitten.jpg',
            'images/chien.jpg',
            'images/renard.jpg',
            'images/hamster.jpg',
            'images/cookie.gif',
            'images/cakes.gif'
        ];

    const gallery = document.querySelector('#gallery');
    const previous = document.querySelector('#prevImg');
    const next = document.querySelector('#nextImg');

    setTimeout(function () {
        gallery.src = galleryArr[currentImg];
    }, 500);

    previous.addEventListener('click', () => {
        if (currentImg === 0) {
            currentImg = galleryArr.length - 1;
        }
        else {
            currentImg--;
        }
        gallery.src = galleryArr[currentImg];
    });

    next.addEventListener('click', () => {
        if (currentImg === 5) {
            currentImg = 0;
        }
        else {
            currentImg++;
        }
        gallery.src = galleryArr[currentImg];
    });

    //Text exercise
    let textArea = document.querySelector('#textArea');
    let output = document.querySelector('#textOutput');
    let length = document.querySelector('#textLength');

    textArea.addEventListener('input', () => {
        output.innerText = textArea.value;
        length.innerText = textArea.value.length + "/ 300";
    });


    //Window events
    window.addEventListener('keydown', (event) => {
        document.querySelector('#key').innerText = event.key;
    });

    window.addEventListener('mousemove', e => {
        document.querySelector('#x').innerText = e.offsetX;
        document.querySelector('#y').innerText = e.offsetY;
    });

    window.addEventListener('mouseout', () => {
        document.querySelector('#mouse').innerText = 'Dehors';
    });

    window.addEventListener('mouseover', () =>{
        document.querySelector('#mouse').innerText = 'Dedans';
    })

});