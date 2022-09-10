import { getPostsData } from "./post-get.js";

export const createPostsList = async () => {
  const posts = await getPostsData();
  const postsList = document.querySelector('.posts-list');
  let postItem = '';

  for (let i = 0; i < posts.posts.length; i++) {
    postItem += `
      <li class="nav-item">
        <a class="posts-list__link nav-link mb-5 m-3 mt-5" href="post.html?id=${posts.posts[i].id}">
          Статья ${i + 1}
        </a>
      </li>
    `;

    postsList.innerHTML = postItem;
  }
}
