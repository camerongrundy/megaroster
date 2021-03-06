$(document).foundation()

var megaRoster = {
  init: function() {
    this.setupEventListeners();
  },

  setupEventListeners: function() {
    document.querySelector('#studentForm').onsubmit = this.addStudent.bind(this);
  },

  addStudent: function(ev) {
    ev.preventDefault();
    var f = ev.currentTarget;
    var studentName = f.studentName.value;
    var item = this.buildListItem(studentName);
    var list = document.querySelector('#list');
    list.appendChild(item);
    f.reset();
    f.studentName.focus();
  },

  buildListItem: function(studentName) {
    var item = document.createElement('li');
    item.innerHTML = studentName;
    return item;
  },
}

megaRoster.init();
