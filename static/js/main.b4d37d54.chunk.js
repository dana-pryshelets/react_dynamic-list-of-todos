(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=a(1),l=a(2),i=a(4),u=a(3),m=(a(13),a(14),function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),d=function(e){return m("/users/ ".concat(e))},p=a(5),h=a.n(p),f=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",completed:"all"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.todos,n=t.selectUser,c=t.selectedUserId,s=this.state.completed,o=a.filter((function(t){return t.title&&t.title.toLowerCase().includes(e.state.title.toLowerCase())})).filter((function(e){return"completed"===s?e.completed:"uncompleted"===s?!e.completed:e}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("form",{className:"d-flex gap-3 mb-3 ms-5"},r.a.createElement("input",{type:"text",value:this.state.title,placeholder:"Title",onChange:function(t){e.setState({title:t.target.value})}}),r.a.createElement("select",{name:"todos",value:this.state.completed,onChange:function(t){e.setState({completed:t.target.value})}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"uncompleted"},"Active"),r.a.createElement("option",{value:"completed"},"Completed"))),r.a.createElement("ul",{className:"TodoList__list"},o.map((function(e){return r.a.createElement("li",{key:e.id,className:h()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{type:"button",className:h()("button","TodoList__user-button",{"TodoList__user-button--selected":e.userId===c}),onClick:function(){n(e.userId)}},"User\xa0#",e.userId))})))))}}]),a}(r.a.Component)),v=(a(16),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&d(this.props.userId).then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props,a=t.userId,n=t.clearUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",a)),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},"Shanna@melissa.tv"),r.a.createElement("p",{className:"CurrentUser__phone"},"010-692-6593 x09125"))),r.a.createElement("button",{type:"button",onClick:function(){n(e.id)},className:"btn btn-outline-secondary"},"Clear"))}}]),a}(r.a.Component)),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(t){e.setState({selectedUserId:0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;m("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:t,selectUser:this.selectUser,selectedUserId:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(v,{clearUser:this.clearUser,userId:a}):"No user selected")))}}]),a}(r.a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b4d37d54.chunk.js.map