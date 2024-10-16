//  twitter 시스템 클래스로 구현해라

// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

// obj = {
//  1: {feed:[1, 2],follow:[2,3]}
// }
var Twitter = function () {
  this.tweets = [];
  this.user = {};
};

// id:number 가진놈이 number 게시물 올리는 거
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.unshift({ userId: userId, tweetId: tweetId });

  if (!this.user[userId]) this.user[userId] = new Set();
};

// 팔로우랑 나 통틀어서 게시물 전체 확인 최신일수록 앞에 떠야함
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.user[userId]) return [];
  return this.tweets
    .filter((tweet) => {
      return tweet.userId === userId || this.user[userId].has(tweet.userId);
    })
    .slice(0, 10)
    .map((tweet) => tweet.tweetId);
};

// 친추
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.user[followerId]) this.user[followerId] = new Set();
  this.user[followerId].add(followeeId);
};

// 친삭
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.user[followerId]) {
    this.user[followerId].delete(followeeId);
  }
};
