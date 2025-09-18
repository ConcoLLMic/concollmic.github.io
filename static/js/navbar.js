// Injects the shared navbar and wires interactions
(function() {
  function initBurgerHandlers(root) {
    var $root = root ? $(root) : $(document);
    var $burger = $root.find('.navbar-burger');
    var $menu = $root.find('.navbar-menu');
    var $overlay = $root.find('.navbar-overlay');

    function openSidebar() {
      $burger.addClass('is-active');
      $menu.addClass('is-active');
      $overlay.addClass('is-active');
      $('body').addClass('navbar-sidebar-open');
    }

    function closeSidebar() {
      $burger.removeClass('is-active');
      $menu.removeClass('is-active');
      $overlay.removeClass('is-active');
      $('body').removeClass('navbar-sidebar-open');
    }

    function toggleSidebar() {
      if ($menu.hasClass('is-active')) closeSidebar(); else openSidebar();
    }

    $burger.off('click').on('click', function() {
      toggleSidebar();
    });

    $overlay.off('click').on('click', function() {
      closeSidebar();
    });

    // Close on navigation link click (use event delegation)
    $root.find('.navbar-menu a').off('click.navclose').on('click.navclose', function() {
      closeSidebar();
    });

    // Close on escape
    $(document).off('keydown.navbar').on('keydown.navbar', function(e) {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  function loadNavbar() {
    var $container = $('#navbar-container');
    if ($container.length === 0) return;
    $.get('navbar.html', function(markup) {
      $container.html(markup);
      // Keep navbar where it's injected on docs page; no DOM relocation
      initBurgerHandlers($(document));
    });
  }

  $(document).ready(function() {
    loadNavbar();
  });
})();


