(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

        itemget = document.getElementById('#item');

        
    
    form.addEventListener('submit',function(e){

      list.innerHTML += '<li>' + item.value + '</li>';
      a.push (item.value);
      store(a);
      item.value = "";
    },false)
    
    var a=[];
    // window.onbeforeunload = function() {} 

    function store(a){

        localStorage.setItem("items", JSON.stringify(a)); 
    }
    
    
    getValues();
    
    function getValues(){
        var storedValues = localStorage.getItem("items")
        var arItems = JSON.parse(storedValues)

        for(let i = 0; i<arItems.length; i++){
        console.log(arItems[i]); 
        list.innerHTML += '<li>' + arItems[i] + '</li>';  
        a.push(arItems[i]);

        }





    }


    // localStorage.setItem('items',item )
    // console.log(getItem('items'));

    // function addToLocalstorage(){




    // }
    // retain();
})();

// var  storedItems = localStorage.getItem("items");
//         var arr = JSON.parse(storedItems);
//         console.log(arr);

    // list.innerHTML = '<li>a</li>'+'<li>b</li>'+'<li>c</li>'+'<li>d</li>';


        // var storedList = JSON.parse(localStorage.getItem("items")); 

// let todos = [];
// var items = document.createElement(todos);

// function addToLocalStorage(todos) {
//      localStorage.setItem('todos', JSON.stringify(todos));
// }


// for (x in localStorage){
    //     console.log(localStorage.getItem(x));
    // }
    // function retain(){
    //     if(localStorage !== null){
    //         a+= item;
    //     }
    //     else{
    //         localStorage.setItem("items", JSON.stringify(a));

    //     }
    // }

    



