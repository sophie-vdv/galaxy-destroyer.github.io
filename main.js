var numPlanet = 0;

AFRAME.registerComponent('cursor-destroy', {
    init : function () {
        var explosion_image = document.getElementById('explosion');
        var audio = document.getElementById("audio");

        this.el.addEventListener('click', function () {

            audio.play();

            var target_position = AFRAME.utils.entity.getComponentProperty(this, 'position');
            AFRAME.utils.entity.setComponentProperty(explosion_image, 'position', target_position);
            this.setAttribute('visible', false);

            explosion_image.setAttribute('visible', true);
            explosion_image.emit('BANG');

            numPlanet = numPlanet || document.querySelectorAll('.planet').length;
            numPlanet--;

            document.getElementById("remaining").innerHTML = numPlanet;

            if(numPlanet === 0){
                document.getElementById("win-message").style.display = 'block';
                console.log('0 planet');
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var totalPlanet = document.querySelectorAll('.planet').length;
    document.getElementById("total").innerHTML = totalPlanet;

    var timePeriodInMs = 4000;

    setTimeout(function () {
            document.getElementById("wasd").style.display = "none";
        },
        timePeriodInMs);
});


var button = document.getElementById("wasd");
button.addEventListener("click",function(){
    var audio = document.getElementById("audio");
    audio.play();
});

