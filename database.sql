CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(70) NOT NULL,
  email_address VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  profile TEXT DEFAULT '',
  profile_pic TEXT DEFAULT '',
  followers INTEGER DEFAULT 0,
  following INTEGER DEFAULT 0,
  created_on VARCHAR(256) NOT NULL
)

CREATE TABLE posts
(
  post_id SERIAL PRIMARY KEY,
  caption TEXT DEFAULT '', 
  image_urls TEXT [] NOT NULL,
  posted_by INTEGER NOTNULL REFERENCES users(user_id) ON DELETE CASCADE
  posted_on VARCHAR(256) NOT NULL,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0
);

CREATE TABLE likes
(
  like_id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  liked_on VARCHAR(255) NOT NULL
);
CREATE TABLE followers
(
  follower_id SERIAL PRIMARY KEY,
  follower_user INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  following_user INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  followed_on VARCHAR(256) NOT NULL
);

CREATE TABLE comments 
(
  comment_id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  commented_on VARCHAR(256) NOT NULL
);
