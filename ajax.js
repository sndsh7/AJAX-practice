let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked button fetch ")

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    //xhr.open("GET", 'http://dummy.restapiexample.com/api/v1/employees',true);
    xhr.open("POST", 'http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');
    

    // What to do on progress
    xhr.onprogress = function(){
        console.log("on process")
    }
    // What to do when data load
    xhr.onload = function(){
        if(this.status === 200)
        {
            console.log(this.response)
        }
        else
        {
            console.error();
        }
        
    }

    param = '{"name":"test","salary":"123","age":"23"}';

    xhr.send(param)

}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popClickHandler)

function popClickHandler(){
    console.log("You have clicked button pop ")

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    xhr.open("GET", 'http://dummy.restapiexample.com/api/v1/employees',true);

    // What to do when data load
    xhr.onload = function(){
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);
            //console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                console.log(key)
                str += `<li>${obj[key].employee_name} </>`;
            }
            list.innerHTML = str;
        }
        else
        {
            console.error();
        }
        
    }

    xhr.send()

}