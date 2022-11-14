//Webpage Title
var divt = createSe("div", "id", "titles", "");
var h1 = createSe("h1", "id", "title", "The Universe Of Ice and Fire");
var h6 = createSe("h6", "id", "sub-title", "(Detailed Collection Of Books-HBO Series)");
divt.append(h1, h6);
document.body.append(divt);

//Function for Creating Elements
function createSe(tagname, atname, atvalue, content) {
  let div = document.createElement(tagname);
  div.setAttribute(atname, atvalue);
  div.innerHTML = content;
  return div;
}

//(Async/Await) Fetching API
async function sai() {
  var url = await fetch(`https://www.anapioficeandfire.com/api/books`);
  var result = await url.json();
  // Cretaing Container
  var allcontent = createSe("div", "class", "all-content", "");
  var container = createSe("div", "class", "container", "");
  var row = createSe("div", "class", "row", "");
  var colum = createSe("div", "class", "col", "");
  var h3 = createSe("h3", "id", "body-head", "Top 10 Books");
  var para1 = createSe("p", "id", "of", "Of");
  var para2 = createSe("p", "id", "author_name");
  para2.innerHTML = `Author <span id="rr">George R. R. Martin</span>`;
  // Creating DropDown
  //var select = createSe("select", "id", "books");
  var select = document.createElement("select");
  select.setAttribute("id", "books");
  //select.setAttribute("onchange", "fun()");
  select.innerHTML = `<option value="User">Choose Your Favourite Book</option>;`
  for (var i = 0; i < result.length; i++) {
    select.innerHTML += `<option value="${result[i].name}">${result[i].name}</option>;`
  }
  select.addEventListener(`change`, (fun) => {
    var value = document.getElementById("books").value;
    var t = result.filter(function (obj) {
      return obj.name == value;
    })[0];
    name.innerHTML = `Book Name: ${t.name}`;
    author.innerHTML = `Author Name: ${t.authors}`;
    // Fetching Data From Character API 
    var temp = [];
    for (var i = 0; i < 12; i++) {
      var ac = t.characters[i];
      var ch = fetch(ac).then((data) => data.json()).then((data1) => {
        var es = "";
        if ((data1.name) != es && temp.length < 5) {
          temp.push(`${data1.name}`);
          char.innerHTML = `<div class="c1">Characters: ${temp}</div>`;
        }
      });
    }
    isbn.innerHTML = `ISBN: ${t.isbn}`;
    nfp.innerHTML = `No.Of.Pages: ${t.numberOfPages}`;
    pub.innerHTML = `Publisher: ${t.publisher}`;
    rdate.innerHTML = `Release Date: ${t.released}`;
  });
  // Creating Display Elements to display the fetched DATA
  var brk = document.createElement("br");
  var divd = createSe("div", "id", "book-details", "")
  var name = createSe("div", "class", "name", "");
  var author = createSe("div", "class", "author", "");
  var char = createSe("div", "class", "char", "");
  var isbn = createSe("div", "class", "isbn", "");
  var nfp = createSe("div", "class", "nfp", "");
  var pub = createSe("div", "class", "pub", "");
  var rdate = createSe("div", "class", "rdate", "");
  divd.append(name, author, char, isbn, nfp, pub, rdate);
  colum.append(h3, para1, para2, select, brk, divd);
  row.append(colum);
  container.append(row);
  allcontent.append(container);
  document.body.append(allcontent);

}
sai();