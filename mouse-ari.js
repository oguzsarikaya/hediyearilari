  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-32.png"), auto';
    var clickableItems = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');
    clickableItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        item.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-50-180.png"), auto';
      });

      item.addEventListener('mouseout', function() {
        item.style.cursor = 'url("https://static.ticimax.cloud/62286//uploads/editoruploads/mause-cursor-32.png"), auto';
      });
    });
  });
