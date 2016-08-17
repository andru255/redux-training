var RegisterModule = function(){
    var st ={
        blockViewer: ".b-viewer",
        txtName: ".b-form-register__txt-name",
        btnSubmit: ".b-form-register__btn-submit",
        btnSubmit2: ".b-form-register__btn-submit2",
        RegisterStore: ""
    };
    var subscribeEvents = function(){
        events.onLoad();
        document.querySelector(st.btnSubmit)
            .addEventListener("click", events.onClick);
    };
    var events = {
        onLoad: function(){
            st.RegisterStore = functions.createRegisterStore();
            st.RegisterStore.subscribe(events.onSubscribeAtRegisterStore);
        },
        onClick: function(evt){
            evt.preventDefault();
            var value = document.querySelector(st.txtName).value;
            st.RegisterStore.dispatch({
                type: "NEW",
                value: value
            });
        },
        onSubscribeAtRegisterStore: function(){
            var objToStr = JSON.stringify(st.RegisterStore.getState(), null, 2);
            var text = "I'm listening this action: " + objToStr;
            document.querySelector(st.blockViewer).innerHTML = text;
        }
    };
    var functions = {
        RegisterHandler: function(state, action){
            var result;
            var types = {
                "NEW": function(){
                    return action;
                }
            };
            if(typeof types[action.type] !== "undefined"){
                result = types[action.type]();
            }
            return result;
        },
        createRegisterStore: function(){
            return Redux.createStore(functions.RegisterHandler);
        }
    };

    return {
        init: function(){
            subscribeEvents();
        }
    };
};

RegisterModule().init();
