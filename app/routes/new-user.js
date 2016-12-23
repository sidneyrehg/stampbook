import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp : Ember.inject.service(),
  actions: {
    addUser: function(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
  }
});
