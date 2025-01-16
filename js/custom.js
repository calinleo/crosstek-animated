function scrollAnim() {
  if ($(".wow").length) {
    var wow = new wow({
      mobile: false,
    });
    wow.init();
  }
}

jQuery(document).on("ready", function () {
  (function ($) {
    scrollAnim();
  })(jQuery);
});
