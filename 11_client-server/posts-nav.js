import { getPostsData } from "./post-get.js";

export const createPostsNav = async () => {
  const pagination = await getPostsData();
  const postsNav = document.querySelector('.nav__list');
  let postNav = '';

  for (let i = 1; i <= pagination.pagination.pages; i++) {
    postNav += `
      <li class="page-item col">
        <a class="nav__link page-link mb-3" href="index.html?page=${i}">
          Старница ${i}
        </a>
      </li>
    `;

    postsNav.innerHTML = postNav;
  }
}
