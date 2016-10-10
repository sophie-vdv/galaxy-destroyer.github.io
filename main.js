// Component to change to random color on click.
AFRAME.registerComponent('cursor-destroy', {
    init: function () {
        this.el.addEventListener('click', function () {
            console.log('ok');
            var audio = document.getElementById("audio");
            audio.play();
        });
    }
});