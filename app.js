let animate = document.querySelector('#animate')
let pos = 0;
$('#btn').click(function () {
    let pos = 0;
    /* let game = setInterval(myfuncion, 5) */
    $('#animate').animate({
        top: '351px',
        left: '351px',
        pos: '350px',
        function () {
            if (pos == '350px') {
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'success'
                )
            }
        }

    })

})

function myfuncion() {
    if (pos === 350) {
        clearInterval(game)
        
        
    } else {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'success'
        )
        pos++;
        animate.style.top = `${pos}px`
        animate.style.left = `${pos}px`
    }
}


let name = prompt('enter name')
if (name === 2) {
    alert('accepted')
}

let name = prompt('enter name')
if (name === 2) {
    alert('accepted')
}