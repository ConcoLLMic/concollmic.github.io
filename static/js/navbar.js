// Injects the shared navbar and wires interactions
(function() {
  function initBurgerHandlers(root) {
    var $root = root ? $(root) : $(document);
    $root.find('.navbar-burger').off('click').on('click', function() {
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });
  }

  function loadNavbar() {
    var $container = $('#navbar-container');
    if ($container.length === 0) return;
    $.get('navbar.html', function(markup) {
      $container.html(markup);
      initBurgerHandlers($container);
    });
  }

  $(document).ready(function() {
    loadNavbar();
  });
})();


