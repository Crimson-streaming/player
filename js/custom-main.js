(function ($) {
    "use strict";

    // Vérification si jQuery est chargé
    if (typeof jQuery === 'undefined') {
        console.error("jQuery n'est pas chargé.");
        return;
    }

    // Fonction pour gérer le changement d'image utilisateur
    $("input[name='user_image']").on("change", function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(".fileupload_img").attr("src", e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    // Gestion des filtres de navigation
    $("#filter_list, #filter_by_lang, #filter_by_genre").change(function (e) {
        e.preventDefault(); // Empêche le comportement par défaut
        var selectedValue = $(this).val();
        if (selectedValue) {
            window.location = selectedValue; // Vérifiez si cela doit vraiment être là
        }
    });

    // Gestion du preloader
    $(window).on("load", function () {
        $(".preloader").delay(333).fadeOut("slow");
        $("body").delay(333);
    });

    // Initialisation des sliders
    if ($(".splide").length > 0) {
        new Splide(".splide", {
            autoplay: true,
            rewind: true,
            focus: "center",
            autoWidth: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            pagination: false,
            type: "loop",
            gap: "1em",
            padding: {
                right: "8rem",
                left: "8rem"
            },
            breakpoints: {
                767: {
                    padding: {
                        right: "0rem",
                        left: "0rem"
                    }
                }
            }
        }).mount();
    }

    // Carrousels
    function initializeOwlCarousel(selector) {
        $(selector).owlCarousel({
            nav: true,
            margin: 20,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: { items: 2, slideBy: 2, margin: 15 },
                640: { items: 3, slideBy: 3 },
                768: { items: 4, slideBy: 4 },
                991: { items: 5, slideBy: 5 },
                1198: { items: 6, slideBy: 6 }
            }
        });
    }

    initializeOwlCarousel(".recently-watched-video-carousel");
    initializeOwlCarousel(".video-carousel");
    initializeOwlCarousel(".video-shows-carousel");
    initializeOwlCarousel(".tv-season-video-carousel");
    initializeOwlCarousel(".season-item-related");

    // Gestion du menu utilisateur
    var userMenuOpen = false;
    $(".user-menu").on("click", function () {
        userMenuOpen = !userMenuOpen;
        $(".user-menu ul").css({ 
            opacity: userMenuOpen ? "1" : "0", 
            visibility: userMenuOpen ? "visible" : "hidden" 
        });
    });

    // Fermer le menu utilisateur en cliquant ailleurs
    $("body").click(function (event) {
        if (!$(event.target).closest('.user-menu').length) {
            $(".user-menu ul").css({ 
                opacity: "0", 
                visibility: "hidden" 
            });
            userMenuOpen = false;
        }
    });

    // Initialisation de Nice Select
    $(document).ready(function () {
        $("select").niceSelect();
    });

    // Gestion des boutons de partage
    $(".btn-share").on("click", function (e) {
        e.preventDefault();
        $("#socialGallery").toggle();
    });

    // Scroll vers le haut
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 500) {
            $(".scroll-top").fadeIn("slow");
        } else {
            $(".scroll-top").fadeOut("slow");
        }
    });

    $(".scroll-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 800, "easeOutCubic");
    });

    // Attributs ARIA pour l'accessibilité
    $(".owl-prev").attr("aria-label", "Précédent");
    $(".owl-next").attr("aria-label", "Suivant");
    $(".owl-prev").attr("aria-hidden", "true");
    $(".owl-next").attr("aria-hidden", "true");

}(jQuery));
