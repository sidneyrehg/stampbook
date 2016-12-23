import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp : Ember.inject.service(),
  actions: {

  addUser(email, pass) {
    const auth = this.get('firebaseApp').auth();
    auth.createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

}
});
