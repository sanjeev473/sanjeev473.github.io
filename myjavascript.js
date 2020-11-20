$(document).ready(function () {
  $('.js__method__name').click(function () {
    let text = $(this).text().trim().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
    console.log(text);
    window.scrollTo({ top: document.getElementById(text).offsetTop - 0, behavior: 'smooth' });
  })
})