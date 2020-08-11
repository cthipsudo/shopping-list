/* eslint-disable no-undef, no-console, indent, quotes */

'use strict';

// THe user should enter items they need to purchase by 
// adding text in the field 
// and hitting return OR clicking the add item button.

function addItem(){
    $('#js-shopping-list-form').on('submit', event => {
        event.preventDefault();
        let shoppingItem = $('#shopping-list-entry').val();
        console.log(shoppingItem);
        if(shoppingItem !== ""){
          $('#shopping-list-entry').val("");
          console.log(shoppingItem);
          $('ul.shopping-list').append(`
          <li>
          <span class="shopping-item">${shoppingItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
          </li>`
          );
        }
    });
}

/**
 * The use can check and uncheck the item on the list
 * (CSS will add and underline under the text)
 */

$('ul.shopping-list').on('click', "li .shopping-item-toggle", function() {
    //console.log("You are trying to remove this item" + this);
    let currentItem = $(this).parent().parent();
    let foodLabel = currentItem.children('span');
    // I could've done
    //let foodLabel = $(this).closest("li").children('span');
    console.log(foodLabel);
    foodLabel.toggleClass('shopping-item__checked');
    //currentItem.detach();
});

/**
  * Remove Items
  */

 $('ul.shopping-list').on('click', "li .shopping-item-delete", function() {
    console.log("You are trying to remove this item" + this);
    let currentItem = $(this).parent().parent();
    // I could've done
    //let currentItem = $(this).closest("li");
    currentItem.detach();
});
$(addItem);