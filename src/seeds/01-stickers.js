const stickers = require('../stickersexamples');


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('sticker').insert(stickers);
    });
};
