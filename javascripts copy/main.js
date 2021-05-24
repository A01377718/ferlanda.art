(function ($) {
      'use strict'

      var navHeight = $('#nav').height();
      // Scrollspy
      $('body').scrollspy({
            target: '#nav',
            offset: $(window).height() / 2
      })
      $('#modalSchedule').modal('show')

      // Smooth scroll
      $("#nav .main-nav a[href^='#']").on('click', function (e) {
            e.preventDefault()
            $('html, body').animate({
                  scrollTop: $(this.hash).offset().top
            }, 600)
      })
      $("a[href^='#']").on('click', function (e) {
            e.preventDefault()
            // var hash = this.hash
            $('html, body').animate({
                  scrollTop: $(this.hash).offset().top - navHeight
            }, 600)
      })

      $('#back-to-top').on('click', function () {
            $('body,html').animate({
                  scrollTop: 0
            }, 600)
      })

      // Btn nav collapse
      $('#nav .nav-collapse').on('click', function () {
            $('#nav').toggleClass('open')
      })

      // On Scroll
      $(window).on('scroll', function () {
            var wScroll = $(this).scrollTop()

            // Fixed nav
            wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav')

            // Back To Top Appear
            wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut()
      })
})(jQuery)
