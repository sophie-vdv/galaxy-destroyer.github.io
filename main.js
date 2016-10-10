// Component to change to random color on click.
AFRAME.registerComponent('cursor-destroy', {
    init: function () {
        var explosion_image = document.getElementById('explosion');
        this.el.addEventListener('click', function () {
            var target_position = AFRAME.utils.entity.getComponentProperty(this, 'position');
            AFRAME.utils.entity.setComponentProperty(explosion_image, 'position', target_position);
            this.setAttribute('visible', false);
            explosion_image.setAttribute('visible', true);
            explosion_image.emit('BANG');


            console.log('ok', target_position);
            var audio = document.getElementById("audio");
            audio.play();
        });
    }
});