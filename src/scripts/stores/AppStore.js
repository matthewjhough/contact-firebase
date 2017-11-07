var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppApi = require('../utils/appApi');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {

    getContacts() {
        return _contacts;
    },

    saveContact(contact) {
        _contacts.push(contact);
    },

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
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact...');

            // store save
            AppStore.saveContact(action.contact);

            // emit change
            AppStore.emit(CHANGE_EVENT);
            break;
    }


    return true;
});

module.exports = AppStore;