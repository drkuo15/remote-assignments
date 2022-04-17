const welcome = document.querySelector('.message');
welcome.addEventListener ('click', () => {
    welcome.innerHTML=`<h1> Have a Good Time! </h1>`;
})

const show = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
show.addEventListener ('click', () => {
    menu.classList.add("menu-show");
})
const close = document.querySelector('.hamburger_close');
close.addEventListener ('click', () => {
    menu.classList.remove("menu-show");
})

const hidden = document.querySelector('.action');
const content = document.querySelector('.hidden-content');
hidden.addEventListener ('click', () => {
    if (content.style.display === "block" ){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
})

function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(callback, delayTime, n1 + n2);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
  //   console.log(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds



function ajax(src, callback) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: src,
      success: function (data) {
        //   console.log("data: ", data);
        //   console.log(data[0]);
        callback(data);
      },
    });
  }
  function render(data) {
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or something alike
  
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Adding the entire table to the body tag
    document.getElementById("product-table").appendChild(table);
  
    // Creating and adding data to first row of the table
    let row_1 = document.createElement("tr");
    let heading_1 = document.createElement("th");
    heading_1.appendChild(document.createTextNode("Name"));
    let heading_2 = document.createElement("th");
    heading_2.appendChild(document.createTextNode("Price"));
    let heading_3 = document.createElement("th");
    heading_3.appendChild(document.createTextNode("Description"));
  
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
  
    // Add data dynamically
    for (let i = 0; i < data.length; i++) {
      var row = document.createElement("tr");
      var row_data_1 = document.createElement("td");
      row_data_1.appendChild(document.createTextNode(data[i].name));
      var row_data_2 = document.createElement("td");
      row_data_2.appendChild(document.createTextNode(data[i].price));
      var row_data_3 = document.createElement("td");
      row_data_3.appendChild(document.createTextNode(data[i].description));
  
      row.appendChild(row_data_1);
      row.appendChild(row_data_2);
      row.appendChild(row_data_3);
      tbody.appendChild(row);
    }
  }
  ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function (response) {
      // console.log(response);
      render(response);
    }
  ); // you should get product information in JSON format and render data in the page
  
  // function getProducts() {
  //   ajax(
  //     "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  //     function (response) {
  //       render(response);
  //     }
  //   );
  // }
  