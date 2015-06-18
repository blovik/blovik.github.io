(function(){
  var todo = document.querySelector('#todoList');
  var form = document.querySelector('form');
  var item = document.querySelector('#newItem');
  //todo=UL(list), form=input area, item=text input

  //build new list item, reset submit, save list 
  form.addEventListener('submit', function(ev) {
    todo.innerHTML += '<li class="item">' + '<button class="editBtn">edit</button>' + ' ' + item.value + '</li>';
    item.value = '';
    saveListLocal();
    ev.preventDefault();
  });

   // edit =========================================
  todoList.addEventListener('click', function(el) {
    var oldTodo = el.target;
    if (oldTodo.tagName === 'BUTTON') {
      oldTodo.parentNode.lastChild.textContent = '';
      var newTodo = prompt('Okay, what did you really want to say?');
      newTodo = '<button class="editBtn">edit</button>' + ' ' + newTodo;
      oldTodo.outerHTML = newTodo;
      saveListLocal();
   };
    el.preventDefault();
  });

  //ev=click, 1=checkmark, 2=delete, resave list
  todoList.addEventListener('click', function(ev) {
    var state = ev.target;
    if (state.tagName === 'LI') {
      if (state.classList.contains('completed')) {
        var goAway = confirm('Delete?');
        if(goAway){
        state.parentNode.removeChild(state);
        //localStorage.todolist = "";
        } else {
          return;
        }
      } else {  
        state.classList.add('completed');
      }
      saveListLocal();
    };
    ev.preventDefault();
  });

  // after DOM loads, check for stored list
  document.addEventListener('DOMContentLoaded', getListLocal);
  
  // stores data forever locally ==============
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

// ============== Edit Button ===============



// ============ calendar =============

// find today's date
function calendar () {
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  // d = something like: Thu Jun 11 2015 13:11:32 GMT-0700 (PDT)

  newCalendar('calendar-day', day[d.getDay()]); //1-7
  newCalendar('calendar-date', d.getDate()); //1-31
  newCalendar('calendar-month-year', month[d.getMonth()] + ' ' + (1900 + d.getYear())); //M=1-12, Y=115
};

// set values of calendar <p>'s'
function newCalendar(id, val){
  document.getElementById(id).innerHTML = val;
};

// call calendar
window.onload = calendar;

// clear local memory
function clearAll() {
  localStorage.todolist = '';
}








