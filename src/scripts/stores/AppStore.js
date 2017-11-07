var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppApi = require('../utils/appApi');

var CHANGE_EVENT = 'change';

var items = [];

var AppStore = assign({}, EventEmitter.prototype, {

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register((payload) => {
    var action = payload.action;

    switch(action.actionType) {

    }


    return true;
});

module.exports = AppStore;