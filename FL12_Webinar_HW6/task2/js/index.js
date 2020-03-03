const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
  
(function ( $ ) {

  $.fn.addItem = function() { 

       this.on('click', function(e) {
        e.preventDefault();
        let text = $input.val();
        $list.append(
          `<li class="item">
             <span class="item-text">${text}</span>
             <button class="item-remove">Remove</button> 
           </li>
          `);
          $input.val('');
       });
  };

}( jQuery ));

$(document).ready(function() {

  $add.addItem();

  $list.on('click', '.item-remove', function(e) {
    e.preventDefault();
    $(this).parent().remove();
  });

  $list.on('click', '.item-text', function() {
    $(this).toggleClass('done');
  });

});

