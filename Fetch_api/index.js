const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  console.log(res);
  const posts = await res.json();

  console.log(posts);
  // .then((res) => res.json())
  // .then((posts) => console.log(posts))
  // .catch((e) => console.log(e));
};

const createPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });

  const p = await res.json();
  console.log(p);
  // .then((res) => res.json())
  // .then((d) => console.log(d))
  // .catch((e) => console.log(e));
};

// getPosts();
// createPost();

const translate = async () => {
  const translate_data = {
    source_language: "en",
    target_language: "my",
    text: "What is your name?",
  };
  const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ebd0a625c5msh4ace21b8bc7f9cbp1e8213jsn64543325a181',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: JSON.stringify({
      source_language: 'en',
      target_language: 'my',
      text: 'What is your name?'
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};


const getLanguages=async ()=>{
  const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ebd0a625c5msh4ace21b8bc7f9cbp1e8213jsn64543325a181',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// translate();
getLanguages();
