const characterId = document.getElementById("characterId");
const btn = document.getElementById("btn-go");
const content = document.getElementById("content");
const image = document.getElementById("img");

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`) //requisicao da api
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      return data;
    }); //engine point


    return result
};

btn.addEventListener("click", async(event) => {
  event.preventDefault();

  const res = await fetchApi(characterId.value);  //converter já o objeto em JSON e jogou numa variavel

  content.textContent = `${JSON.stringify(res,undefined,2)}`;


  image.src = `${res.image}`; //propriedade img


});
