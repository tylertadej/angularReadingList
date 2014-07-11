/**
 * @ngdoc overview
 * @name readingListApp
 * @description
 * # readingListApp
 *
 * Main module of the application.
 */



(function(){

  'use strict';

  angular.module('readingList', [ ])
    .controller('ReadingListCtrl', function(){
      this.books = books;
      this.genres = genres;
    })
  ;  






  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      authors: ['George R.R. Martin', 'DOS Computer'],
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'HTML for Babies',
      authors: ['John C Vanden-Heuvel Sr'],
      isbn: '0615487661',
      review: "It's never too early to be standards compliant! I taught my little one mark-up in under one hour!",
      rating: 5,
      genres: { fiction: true }
    },{
      title: 'A is for Array',
      authors: ['Brandon J Hansen', 'John Fake Doe'],
      isbn: '1489522212',
      review: 'A is for Array is the ABC book for future programmers. Filled with fun illustrations and simple real-world examples, my children loved seeing my world intertwined with theirs!',
      rating: 4,
      genres: { fiction: true }
    },{
      title: 'The Dragon Reborn',
      authors: ['Robert Jordan'],
      isbn: '0812513711',
      review: 'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern. Moiraine',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    }
  ];


})();
