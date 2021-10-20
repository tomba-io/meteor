export const name = 'tomba-meteor';
if (Meteor.isServer) {
    Tomba = Npm.require('tomba');
    // console.log('This is Tomba', Tomba);
} 