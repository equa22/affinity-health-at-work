(function ($, Drupal, drupalSettings) {

  'use strict';
  var $body = $('body');
  var initialised = false;
  

  $('.toggle').click(function() {
    if($body.hasClass('menu-opened')) {
      $body.removeClass('menu-opened')
    } else {
      $body.addClass('menu-opened')
    }  
  });

  $('.region-primary-menu').on('mouseleave', function() {
    $body.removeClass('menu-opened');
  })


  $('.paragraph--type--show-hide-item .field--name-field-title').click(function(e) {
    if($($(e.target).closest('.paragraph--type--show-hide-item')).hasClass('open')) {
      $($(e.target).closest('.paragraph--type--show-hide-item')).removeClass('open');
    } else {
      $($(e.target).closest('.paragraph--type--show-hide-item')).addClass('open');
    }
  }) 


  function getImageTag(img, className) {
    return '<img class="curve ' + (className ? className : '') + '" src="http://affinityhealthatwork.co.uk/themes/affinity/images/' + img + '"/>';
  };

  Drupal.behaviors.clickEvents = {
    attach: function (context, settings) {

    }
  };


  Drupal.behaviors.users = {
    attach: function (context, settings) {
      var $contacts = $('.view-users-list .views-row'); 

      $contacts.each(function() {
        var name = $($(this).find('.views-field-field-name')[0]).text().split(' ');
        var $link = $($(this).find('.views-field-field-contact a')[0])
        $link.text('contact ' + name[0]);
        $link.addClass('reveal');
        $(this).addClass()
      })

      $('.file a').attr('target', '_blank');

      $('a').toArray().forEach(function(item) {
        if($(item).attr('href') == 'http://affinityhealthhub.co.uk/' || $(item).attr('href') == 'http://affinityhealthatwork.co.uk/sites/default/files/2018-08/Affinity_Health_at_Work_Privacy_Policy.pdf') {
          $(item).attr('target', '_blank');
        };
      });

      
      
    }
  };


  Drupal.behaviors.twitter = {
    attach: function (context, settings) {
      var style = "<style type='text/css'>" +
      ".SandboxRoot.env-bp-970 p.timeline-Tweet-text {" +
            "font-size: 13px;" +
            "line-height: 20px;" +
            "margin-left: 0;" +
            "margin-top: 22px;" +
        "}" +
        ".SandboxRoot.env-bp-970 .timeline-Tweet-actions {" + 
          "margin-left: 0;" +
          "display: none;" +
        "}" +
        "ol.timeline-TweetList {" +
          "display: flex;" +
          "flex-wrap: wrap;" +
          "padding-bottom: 25px;" +
        "}" +
        ".SandboxRoot.var-fully-expanded .timeline-Viewport {" +
            "overflow: visible;" +
        "}" +
        ".timeline-Tweet {" + 
          "background-color: white;" +
          "border-radius: 5px;" +
          "padding: 15px;" +
        "}" +
        ".timeline-Tweet-brand {" +
            "display: none;" +
        "}" +
        ".SandboxRoot.env-bp-970 .timeline-Tweet-author {" +
            "padding-left: 45px;" +
        "}" +
        ".Avatar--edge, .Avatar {" +
            "width: 40px;" +
        "}" +
        ".timeline-Tweet:hover {" + 
        /*
          "-webkit-box-shadow: 0px 7px 27px 0px rgba(50, 50, 50, 0.51);" +
          "-moz-box-shadow: 0px 7px 27px 0px rgba(50, 50, 50, 0.51);" +
          "box-shadow: 0px 7px 27px 0px rgba(50, 50, 50, 0.51);" +*/
          "-webkit-box-shadow: -1px 18px 30px -12px rgba(50, 50, 50, 0.51);"+
          "-moz-box-shadow:    -1px 18px 30px -12px rgba(50, 50, 50, 0.51);" +
          "box-shadow:         -1px 18px 30px -12px rgba(50, 50, 50, 0.51);" +
          "background-color: white;" +
        "}" +
        /*".TwitterCardsGrid {" +
          "display: none;"
        "}" +*/
        ".timeline-Tweet-media {" +
            "display: none;" +
        "}" +
        "a {" +
          "color: #887cbe;" +
        "}" +
        "a:hover {" + 
          "color: #bebddc;" +
        "}" +
        "span.TweetAuthor-screenName.Identity-screenName {" + 
          "font-size: 13px;" + 
        "}" +
        "span.TweetAuthor-name.Identity-name.customisable-highlight {" + 
          "font-size: 15px;" +
        "}" +
        "li.timeline-TweetList-tweet.customisable-border {" +
          "width: calc(33.33% - 33.33px);" +
          "padding-bottom: 0;" +
          "margin-right: 50px;" +
          "border-top: none;" +
        "}" +
        "li.timeline-TweetList-tweet.customisable-border:last-child {" +
          "margin-right: 0;" +
        "} " +
        ".timeline-Widget {" + 
          "background-color: transparent;" +
          //"max-width: 1500px;" +
          "max-width: 1024px;" +
          "width: calc(100% - 120px);" +
          "margin: auto;" +
        "}" + 
        ".timeline-Body {" + 
          "border: none;" + 
        "}" +
        //mobile and tablet
        "@media (max-width: 1023px) {" +
          "li.timeline-TweetList-tweet.customisable-border {" +
            "width: 100%;" +
            "padding-bottom: 0;" +
            "margin-right: 0;" +
            "margin-bottom: 20px;" +
          "}" +
          ".SandboxRoot.env-bp-660 .timeline-Tweet-text {" +
            "font-size: 18px;" +
            "line-height: 24px;" +
          "}" +
          ".timeline-Widget {" +
            "width: calc(100% - 30px);" +
            "margin-left: 15px;" + 
          "}" +
        "}" +
        "</style>";


      if(!initialised) {
        initialised = true;

        $('.toggle').append('<div class="x-wrap"><span id="line1"></span><span id="line2"></span><span id="line3"></span></div>');
         setTimeout(function() {
            $($('iframe.twitter-timeline')[0]).contents().find("head").append($(style));
            setTimeout(function() {
              $('#block-twitterblock').css('max-height', ($($('iframe.twitter-timeline')[0]).contents().find(".timeline-Viewport").height() + 160) + 'px');
              
              setTimeout(function() {
                $('#block-twitterblock').addClass('show');
              }, 300);
            }, 500);
          }, 2000);

         if($('.paragraph--type--links').html() < 25) {
          $('.field--name-field-links').remove();
         }
         $('.field--name-field-background-image').css('height', ($('.paragraph--type--heading').outerHeight() + 100) + 'px');

         if(!$('body').hasClass('page-node-type-front-page')) {
            $('.paragraph--type--heading').prepend('<a href="/home" class="home-link">Home</a>').append('<img class="curve" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_white.svg"/>');
      
          } /*else {
            $($('.field--name-field-links')[1]).append('<img class="curve extra" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_beige.svg"/>');
            $($('.field--name-field-links')[1]).prepend('<img class="curve up" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_white.svg"/>');
          }
          

          $('#block-basicsubscribelink').prepend('<img class="curve" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_purple.svg"/>');
          $('#block-footer-2').prepend('<img class="curve" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_grey.png"/>');
         
         if($('#block-testctabutton')) {
          $('#block-testctabutton').prepend('<img class="curve up" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_down_light.svg"/>');
          $('#block-testctabutton').append('<img class="curve down" src="http://affinityhealthatwork.co.uk/themes/affinity/images/circle_up_light.svg"/>');
         }*/

         /*
          Apend curves
        */
         // home
         if($('body').hasClass('page-node-type-front-page')) {
          // white top at header links
          $('.paragraph--type--heading .field--name-field-links').append(getImageTag('circle_down_white.svg'));
          // .paragraph--type--heading.field--name-field-links
          $($('.field--name-field-links')[1]).append(getImageTag('circle_down_beige.svg'));
          // white bottom at twitter
         }
         
         // on all pages
         // purple down at main
         $('main').append(getImageTag('circle_down_purple.svg'));
         // grey down at subscribe
         $('#block-basicsubscribelink').append(getImageTag('circle_down_grey.svg'));
         // bottom at menu
         // .region-primary-menu
         $('.region-primary-menu').append(getImageTag('circle_up_light_purple.svg'));

           /*var $item;
         if($('.field--name-field-page-heading').next().length == 0) {
          $item = $('.block-system-main-block');
          $item.next().css({
            'top': $('.paragraph--type--heading').outerHeight(),
            'z-index': 3,
            'position': "relative",
            'background-color': 'white'
          });
        } else {
          $item = $('.field--name-field-page-heading');
          $item.next().css({
            'top': $('.paragraph--type--heading').outerHeight(),
            'z-index': 3,
            'position': "relative",
            'background-color': 'white'
          });
        }

        $('footer').css({
          'top': $('.paragraph--type--heading').outerHeight(),
          'position': "relative"
        })*/
      }
    }
  };

  $(window).on('scroll', function() {
    /*
    if($(window).scrollTop() > 90 && !$('.page-node-type-front-page').hasClass('purple-menu')) {
      $('body').addClass('purple-menu');
    } else if($(window).scrollTop() <= 90 && $('.page-node-type-front-page').hasClass('purple-menu')) {
        $('body').removeClass('purple-menu');
    }*/
  })
})(jQuery, Drupal, drupalSettings);


