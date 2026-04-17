// Write your code here!
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach(post => {

    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    console.log(data); 

    displayPosts(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchPosts();