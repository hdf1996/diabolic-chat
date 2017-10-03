// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require action_cable
//= require jquery
//= require miner.js

(function() {
  this.Application || (this.Application = {});

  var protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  var host     = window.AppConfig.WEBSOCKET_HOST || window.location.host;
  var path     = window.AppConfig.WEBSOCKET_PATH || '/cable';
  var userId   = window.AppConfig.WEBSOCKET_USER_ID_SECRET;
  var url      = protocol + host + path;

  if(userId) {
    url += '?user_id=' + encodeURIComponent(userId);
  }
  Application.cable = ActionCable.createConsumer(url);

}).call(this);
