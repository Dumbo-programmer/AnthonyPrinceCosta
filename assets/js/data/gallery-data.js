/* gallery data */
(function () {
  'use strict';

  window.SiteData = window.SiteData || {};
  window.SiteData.gallery = [
    { src: 'gallery/fb-01.jpg', width: 720, height: 720, title: 'Profile Portrait', alt: 'Profile portrait of Anthony Prince Costa', caption: 'Profile photograph from the public Facebook profile of Anthony Prince Costa.' },
    { src: 'gallery/fb-02.jpg', width: 1600, height: 900, title: 'Facebook Photograph 02', alt: 'Photograph 02 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-03.jpg', width: 960, height: 1280, title: 'Facebook Photograph 03', alt: 'Photograph 03 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-04.jpg', width: 960, height: 1280, title: 'Facebook Photograph 04', alt: 'Photograph 04 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-05.jpg', width: 1536, height: 2048, title: 'Facebook Photograph 05', alt: 'Photograph 05 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-06.jpg', width: 960, height: 1280, title: 'Facebook Photograph 06', alt: 'Photograph 06 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-07.jpg', width: 1600, height: 900, title: 'Facebook Photograph 07', alt: 'Photograph 07 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-08.jpg', width: 1280, height: 960, title: 'Facebook Photograph 08', alt: 'Photograph 08 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-09.jpg', width: 1280, height: 960, title: 'Facebook Photograph 09', alt: 'Photograph 09 from the Facebook profile of Anthony Prince Costa', caption: 'Photograph sourced from the public Facebook profile fb.com/princejuboraj.' },
    { src: 'gallery/fb-10.png', width: 960, height: 720, title: 'Facebook Graphic 10', alt: 'Graphic image from the Facebook profile of Anthony Prince Costa', caption: 'Graphic image sourced from the public Facebook profile fb.com/princejuboraj.' }
  ].map((photo, index) => ({
    id: index + 1,
    fig: `FIG. ${String(index + 1).padStart(2, '0')}`,
    categoryLabel: 'Facebook Gallery',
    title: photo.title,
    alt: photo.alt,
    subtitle: 'SOURCE · fb.com/princejuboraj',
    caption: photo.caption,
    src: photo.src,
    width: photo.width,
    height: photo.height
  }));
})();
