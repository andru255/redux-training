//Listen some event
function register(state, action){
    var result;
    if(typeof state === "undefined") {
        result = 0;
    }

    switch(action.type){
        case "NEW":
            result = "New!";
            break;
    };
    // ret
    return result;
};

//Creating the store
var store = Redux.createStore(register);

var viewerEl = document.querySelector(".b-viewer");

function render(){
    viewerEl.innerHTML = store.getState().toString();
}
//The "store" is listening
store.subscribe(render);

document.querySelector(".b-form-register__btn-submit")
    .addEventListener("click", function(evt){
        evt.preventDefault(); 
        //Let the "store" trigger the action type "NEW"
        store.dispatch({
            type: "NEW"
        });
    });

