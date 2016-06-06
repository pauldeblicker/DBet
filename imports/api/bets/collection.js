import { Mongo } from 'meteor/mongo';

export const Bets = new Mongo.Collection('bets');

Bets.allow({
    insert(userId) {
        return !!userId;
    },
    remove(userId) {
        return !!userId;
    },
    update(userId) {
        return !!userId;
    }
});

Meteor.methods({
    saveBet (matchId, value) {
        return Bets.upsert({ userId: Meteor.userId(), matchId: matchId }, { userId: Meteor.userId(), matchId: matchId, value : value });
    }
});