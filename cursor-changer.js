<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Varsayılan imleç
    document.body.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-32.png"), auto';

    // Tıklanabilir öğeler için imleç
    var clickableItems = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');

    // Tıklanabilir öğelerin üzerine gelindiğinde ve ayrıldığında imleci değiştir
    clickableItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        // Mouse üzerine gelince döndürülmüş imleci kullan
        item.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-50-180.png"), auto';
      });

      item.addEventListener('mouseout', function() {
        // Mouse ayrılınca varsayılan imlece dön
        item.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-32.png"), auto';
      });
    });
  });
</script>
