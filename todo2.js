$(function() {

  $('#addtaskbutton').on('click', function() {
    var $newTask = $('#newtask').val();
    if ($newTask !== '') {
      var listItem = '<li><input type="checkbox"><label>' + $newTask + '</label><input type="text" type="submit"><button class="edit" id="edit">Edit</button><button class="delete">Delete</button>';
    };
    $('#incomplete-tasks').append(listItem);
    $('#newtask').val('');
  });

  $('ul').on('click', 'input[type="checkbox"]', function() {
    var parentEl = $(this).parent();
    var listEl = parentEl.parent();
    if (listEl.is('#incomplete-tasks')) {
      parentEl.remove();
      $('#completed-tasks').append(parentEl);
    } else {
      parentEl.remove();
      $('#incomplete-tasks').append(parentEl);
    };
  });

  $('ul').on('click submit', 'button.edit', function() {
    var parentEl = $(this).parent();
    var editTask = parentEl.find('input[type="text"]').val();
    var editLabel = parentEl.find('label');
    var editButton = parentEl.find('button#edit');
    if (!parentEl.hasClass('edititem')) {
      parentEl.addClass('edititem');
      editButton.text('Save');
    } else {
      editLabel.text(editTask);
      parentEl.removeClass('edititem');
      editButton.text('Edit');
    }
  })

  $('ul').on('click', 'button.delete', function() {
    var parentEl = $(this).parent();
    parentEl.remove();
  })

});
