(function(){
  var todo = document.querySelector('#todoList');
  var form = document.querySelector('form');
  var item = document.querySelector('#newItem');
  //todo=UL(list), form=input area, item=text input

  //build new list item, reset submit, save list 
  form.addEventListener('submit', function(ev) {
    todo.innerHTML += '<li>' + item.value + '</li>';
    item.value = '';
    saveListLocal();
    ev.preventDefault();
  });

  //ev=click, 1=checkmark, 2=delete, resave list
  todoList.addEventListener('click', function(ev) {
    var state = ev.target;
    if (state.tagName === 'LI') {
      if (state.classList.contains('completed')) {
        state.parentNode.removeChild(state);
      } else {  
        state.classList.add('completed');
      }
      saveListLocal();
    };
    ev.preventDefault();
  });

  // after DOM loads, check for stored list
  document.addEventListener('DOMContentLoaded', getListLocal);
  
  // stores data forever locally
  function saveListLocal() {
    localStorage.todolist = todo.innerHTML;
  };

  // if something's saved locally, get it
  function getListLocal() {
    if (localStorage.todolist) {
      todo.innerHTML = localStorage.todolist;
    }
  };

})();

// ============ calendar =============

// find today's date
function calendar () {
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  // d = something like: Thu Jun 11 2015 13:11:32 GMT-0700 (PDT)

  setText('calendar-day', day[d.getDay()]); //1-7
  setText('calendar-date', d.getDate()); //1-31
  setText('calendar-month-year', month[d.getMonth()] + ' ' + (1900 + d.getYear())); //M=1-12, Y=115
};

// set values of calendar <p>'s'
function setText(id, val){
  document.getElementById(id).innerHTML = val;
};

// call calendar
window.onload = calendar;






