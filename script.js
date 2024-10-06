$(document).ready(function() {
    // Fade-in effect for the card deck
    $(window).on('load', function() {
        $('.card-deck').fadeIn(1000);
        $("#hero_left").animate({left: '0px'}, 1500);  // Slide in hero section
        $(".card001").animate({left: '0px'}, 1500);   // Slide in card001
        $(".card003").animate({right: '0px'}, 1500);  // Slide in card003
    });

    // Navbar link hover effect
    $('nav a').hover(function() {
        $(this).css('color', '#adb5bdff');  // Change color on hover
    }, function() {
        $(this).css('color', '');  // Reset color after hover
    });

    // Card footer link hover effects
    $(".card-footer a").mouseenter(function() {
        $(this).css({
            "background-color": "#343a40ff",  // Dark background on hover
            "color": "#f8f9faff"  // White text on hover
        });
    }).mouseleave(function() {
        $(this).css({
            "background-color": "#6c757d",  // Original background color
            "color": "#f8f9fa"  // Original text color
        });
    });

    // Set initial positions for hero and cards for sliding animations
    $("#hero_left").css({position: 'relative', left: '-1000px'});
    $(".card001").css({position: 'relative', left: '-1000px'});
    $(".card003").css({position: 'relative', right: '-1000px'});

    // Theme toggle functionality
    $("#themeToggle").click(function() {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            setDarkMode();  // Apply dark mode styles
        } else {
            setLightMode(); // Apply light mode styles
        }
    });

    // Function to apply Dark Mode
    function setDarkMode() {
        $("body").addClass("dark-mode");
        $("#themeToggle").text("🌙");
        $("#themeToggle").removeClass("btn-light").addClass("btn-dark");
    }

    // Function to apply Light Mode
    function setLightMode() {
        $("body").removeClass("dark-mode");
        $("#themeToggle").text("🌞");
        $("#themeToggle").removeClass("btn-dark").addClass("btn-light");
    }
});
