$(document).ready(function () {
  
// Change color of nav links on hover
$('nav a').hover(function() {
    $(this).css('color', '#f39c12');  // Change color on hover
}, function() {
    $(this).css('color', '');  // Reset color after hover
});
$('body').hide().fadeIn(1500);  // Fade in over 1.5 seconds on page start
// Change image every 5 seconds in the adoption section
$(document).ready(function() {
    let currentImage = 0;
    const images = ['Images/dogs_in_cage.jpg', 'Images/dogs002.jpg', 'Images/dogs003.jpg'];

    function changeImage() {
        currentImage = (currentImage + 1) % images.length;
        $('.adoption_info_left img').fadeOut(500, function() {
            $(this).attr('src', images[currentImage]).fadeIn(500);
        });
    }
    setInterval(changeImage, 5000);  // Change image every 5 seconds

    // Change image on click
    $('.adoption_info_left img').click(changeImage);

});
});
