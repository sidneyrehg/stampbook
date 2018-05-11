import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addItem: function() {
      var title = this.get('title');
      var email = this.get('email');
      var stamps = this.get('stamps');
      var description = this.get('description');
      var self = this;

      // Create new item
      var newItem = this.store.createRecord('members', {
        title: title,
        email: email,
        description: description,
        stamps: stamps
      });

      // Save to Database
      newItem.save();
      console.log('New Item Added');
      // Clear Form
      this.setProperties({
        title: '',
        description: '',
        email: '',
        stamps: ''
      });

      // Redirect to members route
      self.transitionToRoute('members');

    }
  }

});

<!—[if lte IE 8]>
 <!--[if lte IE 8]> <div style="width: 100%; background: red; border: 1px black; padding-top: 10px; padding-bottom: 10px; color: #fff; text-align: center; font-weight: bold; font-size: 18px"> Sorry, you are using an unsupported browser. This page will not display correctly. <br /> <a href="http://www.whatbrowser.org" style="color: #fff;" target="_blank"> Please click here to upgrade to a newer browser. </a> </div> <![endif]--> <script src="https://embed-452835.secondstreetapp.com/Scripts/dist/embed.js" data-ss-embed="promotion" data-opguid="227a990b-94a1-453c-aebd-2a0ac05c116e" data-routing="hash">/**/</script>
