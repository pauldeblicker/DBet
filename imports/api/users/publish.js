Meteor.publish('userData', function() {
    return Meteor.users.find({ _id : this.userId }, { fields : { 'profile.picture' : 1, 'profile.score' : 1 }});
});