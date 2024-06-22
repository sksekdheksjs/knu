  document.getElementById('login-btn').addEventListener('click', () => {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('signup-form').classList.add('hidden');
});

document.getElementById('signup-btn').addEventListener('click', () => {
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
});

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  // Login logic here
  alert(`Logged in as ${username}`);
  document.getElementById('auth').classList.add('hidden');
  document.getElementById('feed').classList.remove('hidden');
  document.getElementById('followers').classList.remove('hidden');
}

function signup() {
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  // Signup logic here
  alert(`Signed up as ${username}`);
  document.getElementById('auth').classList.add('hidden');
  document.getElementById('feed').classList.remove('hidden');
  document.getElementById('followers').classList.remove('hidden');
}

function createPost() {
  const content = document.getElementById('post-content').value;
  const media = document.getElementById('post-media').files[0];
  // Post creation logic here

  const postElement = document.createElement('div');
  postElement.className = 'post';
  postElement.innerHTML = `
      <header>
          <h3>${'Username'}</h3>
          <button onclick="deletePost(this)">Delete</button>
      </header>
      <div class="post-content">
          <p>${content}</p>
          ${media ? `<img src="${URL.createObjectURL(media)}" alt="Media" style="max-width: 100%;">` : ''}
      </div>
      <div class="post-actions">
          <button onclick="toggleLike(this)">❤️ 0</button>
          <button onclick="showComments(this)">Comments</button>
      </div>
      <div class="comments hidden">
          <textarea placeholder="Add a comment..."></textarea>
          <button onclick="addComment(this)">Comment</button>
          <div class="comment-list"></div>
      </div>
  `;
  document.getElementById('posts').prepend(postElement);
}

function deletePost(button) {
  const post = button.closest('.post');
  post.remove();
}

function toggleLike(button) {
  const isLiked = button.textContent.includes('❤️');
  button.textContent = isLiked ? '🤍 0' : '❤️ 1';
}

function showComments(button) {
  const comments = button.closest('.post').querySelector('.comments');
  comments.classList.toggle('hidden');
}

function addComment(button) {
  const commentText = button.previousElementSibling.value;
  const commentList = button.nextElementSibling;
  const commentElement = document.createElement('div');
  commentElement.className = 'comment';
  commentElement.innerHTML = `
      <p>${commentText}</p>
      <button onclick="deleteComment(this)">Delete</button>
      <button onclick="toggleCommentLike(this)">❤️ 0</button>
  `;
  commentList.append(commentElement);
  button.previousElementSibling.value = '';
}

function deleteComment(button) {
  const comment = button.closest('.comment');
  comment.remove();
}

function toggleCommentLike(button) {
  const isLiked = button.textContent.includes('❤️');
  button.textContent = isLiked ? '🤍 0' : '❤️ 1';
}

function addFollower() {
  const username = document.getElementById('add-follower-username').value;
 

  const followerElement = document.createElement('div');
  followerElement.className = 'follower';
  followerElement.innerHTML = `
      <p>${username}</p>
      <button onclick="removeFollower(this)">Remove</button>
  `;
  document.getElementById('follower-list').append(followerElement);
  document.getElementById('add-follower-username').value = '';
}

function removeFollower(button) {
    const follower = button.closest('.follower');
    follower.remove();
}