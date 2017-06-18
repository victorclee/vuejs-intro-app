document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#app",
    data: {
      reviews: [
                { text: "Vue.js is so cool",
                  rating: 8,
                  reviewer: "Victor"
                },
                { text: "You're so functional Vue.js",
                  rating: 9,
                  reviewer: "Mike"
                },
                { text: "I miss Angular.js",
                  rating: 6,
                  reviewer: "Jer"
                }
                ],
      newReviewText: '',
      newReviewRating: '',
      newReviewReviewer: ''
    }, 
    methods: {
      addReview: function() {
        if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewReviewer !== '') {
          var reviewObj = {
                            text: this.newReviewText,
                            rating: this.newReviewRating,
                            reviewer: this.newReviewReviewer,
                            };
          this.reviews.push(reviewObj);
          
          this.newReviewText = '';
          this.newReviewRating = '';
          this.newReviewReviewer = '';
        }
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1;
      }
    }
  });
});