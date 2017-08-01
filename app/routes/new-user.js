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

      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already in use for another account');
      }
      else if (errorCode ==='auth/invalid-email') {
        alert('Invalid email address');
      }
      else if (errorCode === 'auth/operation-not-allowed') {
        alert('Operation not allowed. Contact administrator.');
      }
      else if (errorCode === 'auth/weak-password') {
        alert('Password not strong enough. Please choose another password');
      } else {
        alert(errorMessage);
      }
    });
    this.transitionTo('members');
  }

}
});
