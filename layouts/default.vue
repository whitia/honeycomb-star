<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
if (process.client) {
  window.onload = () => {
    scrollElementsAnimation();
  }

  window.addEventListener( "scroll", function() {
    scrollHeaderAnimation();
    scrollElementsAnimation();
  });
}

// スクロール時、ヘッダーのスタイルを変更
var scrollHeaderAnimation = () => {
  var headerElement = document.getElementById( "header" );
  var rect = headerElement.getBoundingClientRect() ;
  var y = rect.top + window.pageYOffset;

  if (y > 0) {
    headerElement.classList.remove('hidden');
  } else {
    headerElement.classList.add('hidden');
  }
}

// スクロール時、要素をふわっと出現
var scrollElementsAnimation = () => {
  document.querySelectorAll('.effect').forEach(element => {
    var elemPos = element.getBoundingClientRect().top + window.pageYOffset;
    var scroll = window.pageYOffset;
    var windowHeight = window.innerHeight;

    var delay = element.dataset.delay ? element.dataset.delay : 0;

    if (scroll > elemPos - windowHeight) {
      setTimeout(() => {
        element.classList.add('show');
      }, delay);
    }
  });
}
</script>
