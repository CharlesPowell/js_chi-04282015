'use strict';

/**
 * @ngdoc function
 * @name testApp.service:UserCollection
 * @description
 * # User Collection Value
 * service of the testApp
 */
angular.module('testApp')
    .factory('UserCollection', [function() {
        return {
            _users: [],
            getUser: function(id) {
                var filteredUsers = this._users.filter(function(user) { return user.id === +id; });
                return filteredUsers.length > 0 ? filteredUsers[0] : undefined;
            },
            setUsers: function(users) {
                if(angular.isArray(users)) {
                    this._users = users;
                }
                else {
                    this._users = [];
                    this._users.push(users);
                }
                return this._users;
            },
            removeUser: function(id) {
                var index = this._users.indexOf({id : id});
                if(index !== -1) {
                    this._users.splice(index, 1);
                }
                return this._users;
            }
        };
    }]);
