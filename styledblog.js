let form = document.querySelector('form');
let write = document.querySelector('#write');
let title = document.querySelector('#title');
let date = document.querySelector('#date');
let out = document.querySelector('output');
let comments = document.querySelector('#comments');

let data = [];

if (localStorage.getItem("c_data") === null) {
  localStorage.setItem("c_data", JSON.stringify(data));
} else {
  data = JSON.parse(localStorage.getItem("c_data"));
}


let add_post = (post, index) => {
  comments.insertAdjacentHTML('afterbegin',`
  <div class='dark_bg hori_3 fade_in shadow'>
    <p>Title: ${post.title}</p>
    <p>Date: ${post.date}</p>
    <p>Comment: ${post.write}</p>
    <div>
    <i id="edit_${index}" class="fas fa-edit"></i>
    <i id="delete_${index}" class="fas fa-trash-alt"></i>
    </div>
  </div>
  `);
};

let render = () => {
  comments.innerHTML='';
  data = JSON.parse(localStorage.getItem("c_data"))
  data.forEach((post,index) => {add_post(post,index)});
}

render();

form.addEventListener("submit", function(e){
  e.preventDefault();
  if (write.value === "" || title.value === "" || date.value === "") {
    out.innerHTML = "Please fill all three entries.";
  } else {
    out.innerHTML = "Posted!";
    data = JSON.parse(localStorage.getItem("c_data"))
    data.push({
      title: DOMPurify.sanitize(title.value),
      date: DOMPurify.sanitize(date.value),
      write: DOMPurify.sanitize(write.value)
    });
    localStorage.setItem("c_data", JSON.stringify(data));
    write.value ='';
    title.value ='';
    date.value ='';
    render();
  }
});


document.addEventListener('click',function(e){
  if(e.target && e.target.id.split('_')[0]== 'delete'){
    data = JSON.parse(localStorage.getItem("c_data"))
    data.splice(e.target.id.split('_')[1], 1);
    localStorage.setItem("c_data", JSON.stringify(data));
    out.innerHTML = "Comment deleted.";
    render();
  }
  else if(e.target && e.target.id.split('_')[0]== 'edit'){
    data = JSON.parse(localStorage.getItem("c_data"))
    let index = e.target.id.split('_')[1];
    let post = data[index];
    write.value = post.write;
    title.value = post.title;
    date.value = post.date;
    data.splice(index, 1);
    localStorage.setItem("c_data", JSON.stringify(data));
    out.innerHTML = "Editing comment...";
    render();
  }
});