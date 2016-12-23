import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider, email, password) {
      this.get('session').open('firebase', { provider, email, password }).then(function(data) {
        console.log(data.currentUser);
      }).catch(function(error) {
        // Error Alerts
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/invalid-email') {
          alert('Invalid Email');
        }
        else if (errorCode === 'auth/user-disabled') {
          alert('This user has been disabled');
        }
        else if (errorCode === 'auth/user-not-found') {
          alert('No account found with this email');
        }
        else if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
