const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    const maxlikes = Math.max(...blogs.map(blog => blog.likes));
    return { likes: maxlikes }
}

const mostBlogs = (blogs) => {
  const grouped = _.countBy(blogs, 'author');
  const topAuthor = _.maxBy(Object.keys(grouped), author => grouped[author]);
  return {
    author: topAuthor,
    blogs: grouped[topAuthor]
  };
};

const mostLikes = (blogs) => {
  const grouped = _.groupBy(blogs, 'author');

  const mostLiked = _.maxBy(Object.keys(grouped), author => {
    return _.sumBy(grouped[author], 'likes');
  });

  return {
    author: mostLiked,
    likes: _.sumBy(grouped[mostLiked], 'likes')
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}