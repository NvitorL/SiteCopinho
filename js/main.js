jQuery(document).ready(function () {
  jQuery("#galeria1").nanogallery2( {
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    itemsBaseURL: 'img/',
    thumbnailDisplayTransition: 'slideDown',
    thumbnailHoverEffect2: 'scale120',
                        
    items: [
      {src: 'EGNdOYHX0AEwZSl.jpeg'},
      {src: 'EGNdOYFXkAAHgTi.jpeg'},
      {src: 'EGNdOYEX0AAXetv.jpeg'},
      {src: 'EGNdOYCX0AIMkAj.jpeg'},
    ]
  });

  jQuery("#galeria2").nanogallery2( {
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    galleryMosaic :   [
          { "c": 1, "r": 1, "w": 2, "h": 2 },
          { "c": 3, "r": 1, "w": 2, "h": 1 },
          { "c": 3, "r": 2, "w": 1, "h": 2 },
          { "c": 4, "r": 2, "w": 1, "h": 2 },
          { "c": 1, "r": 3, "w": 2, "h": 1 },
          { "c": 1, "r": 4, "w": 4, "h": 1 },
      ],
    itemsBaseURL: 'img/',
    thumbnailDisplayTransition: 'slideUp',
    thumbnailHoverEffect2: 'scale120',
                        
    items: [
      {src: 'cuphead_promo_cuphead_mugman.png', title: "Xicrinha e Caneco"},
      {src: 'a_cuphead-bee-switch-transparent.png', title: "Rumor Honeybottoms"},
      {src: 'EDEb_KoX4AEXqgx.jpeg', title: "Cuphead, Mugman e a Ms. Chalice"},
      {src: 'a_cuphead-devil-switch-transparent.png', title: "Devil"},
      {src: 'a_cuphead-genie-switch-transparent.png', title: "Djimmi The Great"},
      {src: 'proxy.duckduckgo.com.jpeg'},
    ]
  });

  jQuery("#galeria3").nanogallery2( {
    thumbnailHeight: 200,
    thumbnailWidth: 'auto',
    itemsBaseURL: 'img/',
    thumbnailDisplayTransition: 'slideUp',
    thumbnailHoverEffect2: 'scale120|imageBlurOn|imageSepiaOn',
                        
    items: [
      {src: 'cuphead_screenshot_0001.png'},
      {src: 'cuphead_screenshot_0002.png'},
      {src: 'cuphead_screenshot_0003.png'},
      {src: 'cuphead_screenshot_0004.png'},
      {src: 'cuphead_screenshot_0005.png'},
      {src: 'cuphead_screenshot_0006.png'},
      {src: 'cuphead_screenshot_0007.png'},
      {src: 'cuphead_screenshot_0008.png'},
      {src: 'cuphead_screenshot_0009.png'},
      {src: 'proxy.duckduckgo.com.png'},
      {src: 'proxy.duckduckgo.com1.jpeg'},
      {src: 'proxy.duckduckgo.com2.jpeg'},
    ]
  });
});
              