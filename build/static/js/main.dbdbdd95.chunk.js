(this.webpackJsonpFitnessTrackerReact=this.webpackJsonpFitnessTrackerReact||[]).push([[0],{16:function(e,t,c){},55:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(1),i=c.n(n),r=c(20),a=c.n(r),o=c(15),l=c(2),j=(c(16),c(13)),d=c.n(j),b=(c(51),c(0)),u=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{class:"title",children:Object(b.jsx)("h1",{children:" Our Combinded Users Success Percentage "})}),Object(b.jsx)("img",{id:"fitness-gif",src:"https://cdn.dribbble.com/users/159027/screenshots/3866020/run-dribbble_3.gif"}),Object(b.jsx)("div",{class:"progressbar",children:Object(b.jsxs)("div",{class:"circle",children:[Object(b.jsx)("div",{class:"bar"}),Object(b.jsx)("div",{class:"box",children:Object(b.jsx)("span",{children:"73%"})})]})})]})},h=c(5),O=c.n(h),x=c(10),p=(c(55),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(s.a)(r,2),o=a[0],l=a[1],j=Object(n.useState)(""),u=Object(s.a)(j,2),h=u[0],p=u[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),m=g[0],v=g[1],y=Object(n.useState)(!1),k=Object(s.a)(y,2),w=k[0],S=k[1],C=Object(n.useState)(!0),R=Object(s.a)(C,2),T=R[0],N=R[1],I=function(){var e=Object(x.a)(O.a.mark((function e(){var t,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://fitnesstrac-kr.herokuapp.com/api","/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:o})});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,localStorage.setItem("fitToken",s.token),p("Thanks for registering, return to login screen to login."),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p("Oops, could not register user, please try again"),setTimeout((function(){$("#regUsername").val(""),$("#regPassword").val(""),$(".messages").text("")}),3e3);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(x.a)(O.a.mark((function e(){var t,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://fitnesstrac-kr.herokuapp.com/api","/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:o})});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,localStorage.setItem("fitToken",JSON.stringify(s.token)),p("Welcome, you are logged in!"),window.location.href="".concat(window.location.orgin,"/home"),window.location.href="/home",e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),p("Oops! could not log user in, please try again"),setTimeout((function(){$("#username").val(""),$("#password").val(""),$(".messages").text("")}),3e3);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{id:"fitnesstrk",children:" Fitness Tracker "}),Object(b.jsx)("img",{id:"fitness",src:"https://i.pinimg.com/originals/e4/38/d5/e438d548b3de392c3634a53a5aae74e1.gif"}),Object(b.jsx)("img",{id:"fitness2",src:"https://i.pinimg.com/originals/e4/38/d5/e438d548b3de392c3634a53a5aae74e1.gif"}),T?Object(b.jsxs)("div",{class:"options-reg",children:[Object(b.jsx)("button",{class:"btn2",id:"login",onClick:function(){v(!0),N(!1)},children:"Log In"}),Object(b.jsx)("button",{class:"btn2",id:"register",onClick:function(){S(!0),N(!1)},children:"Register"})]}):null,Object(b.jsx)(d.a,{style:{opacity:1},isOpen:m,onRequestClose:function(){return v(!1)},children:Object(b.jsx)("div",{class:"login-register",children:Object(b.jsxs)("form",{class:"login-form",onSubmit:function(e){e.preventDefault(),q()},children:[Object(b.jsx)("h1",{children:" Login "}),Object(b.jsx)("input",{type:"username",id:"username",placeholder:"Username",required:!0,onInput:function(e){return i(e.target.value)}}),Object(b.jsx)("input",{type:"password",id:"password",placeholder:"Password",required:!0,onInput:function(e){return l(e.target.value)}}),Object(b.jsx)("div",{class:"messages",children:h}),Object(b.jsx)("button",{class:"btn",type:"submit",children:"Log In"}),Object(b.jsx)("h5",{id:"link-reg",onClick:function(){S(!0),v(!1)},children:"Don't have an Account? Register Here..."})]})})}),Object(b.jsx)(d.a,{style:{opacity:1},isOpen:w,onRequestClose:function(){return S(!1)},children:Object(b.jsx)("div",{class:"login-register",children:Object(b.jsxs)("form",{class:"register-form",onSubmit:function(e){e.preventDefault(),I()},children:[Object(b.jsx)("h1",{children:" Register"}),Object(b.jsx)("input",{type:"username",id:"regUsername",placeholder:"Username",required:!0,onInput:function(e){return i(e.target.value)}}),Object(b.jsx)("input",{type:"password",id:"regPassword",placeholder:"Password",required:!0,onInput:function(e){return l(e.target.value)}}),Object(b.jsx)("div",{class:"messages",children:h}),Object(b.jsx)("button",{class:"btn",type:"submit",children:"Register"}),Object(b.jsx)("h5",{id:"link-log",onClick:function(){v(!0),S(!1)},children:"Already have an Account? Login Here..."})]})})})]})}),f=c(12),g=c.n(f),m=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("".concat("https://fitnesstrac-kr.herokuapp.com/api","/routines")).then((function(e){var t=e.data;t.length&&(i(t),console.log(t))}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{id:"fitness-gif",src:"https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1586410730/content-items/004/129/014/Male-Jabber-Jab-Gym-original.gif?1586410730"}),c&&c.length>0?c.map((function(e){return Object(b.jsxs)("div",{class:"card routines",children:[Object(b.jsxs)("div",{class:"author",children:[Object(b.jsxs)("h1",{children:[" ",e.creatorName," "]}),Object(b.jsxs)("h3",{children:[" ",e.name," "]}),Object(b.jsxs)("small",{children:[e.goal," "]})]}),Object(b.jsxs)("div",{class:"activity",children:[Object(b.jsxs)("h3",{children:[" ",e.activities.name," "]}),Object(b.jsxs)("small",{children:[" ",e.activities.description," "]})]}),Object(b.jsx)("div",{class:"activity-info",children:Object(b.jsx)("div",{class:"progressbar-card",children:Object(b.jsxs)("div",{class:"circle-card",children:[Object(b.jsx)("div",{class:"bar-card"}),Object(b.jsx)("div",{class:"box-card",children:Object(b.jsx)("span",{children:"80% Results"})})]})})})]})})):null]})},v=function(e){try{return g.a.get("".concat("https://fitnesstrac-kr.herokuapp.com/api","/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data.username}))}catch(t){console.error("Oops, could not get username")}},y=function(e,t){try{return g.a.get("".concat("https://fitnesstrac-kr.herokuapp.com/api","/users/").concat(e,"/routines"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data}))}catch(c){console.error("Oops, could not get users routines")}},k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)(Object(x.a)(O.a.mark((function e(){var t,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(localStorage.getItem("fitToken")))){e.next=9;break}return e.next=4,v(t);case 4:return c=e.sent,e.next=7,y(c,t);case 7:s=e.sent,i(s);case 9:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{id:"fitness-gif",src:"https://i.pinimg.com/originals/6f/8e/de/6f8ede4dab23b0518f0efc61e5810d71.gif"}),c&&c.length>0?c.map((function(e){return Object(b.jsxs)("div",{class:"card routines",children:[Object(b.jsxs)("div",{id:"edits",children:[Object(b.jsx)("button",{class:"edit-btn",children:Object(b.jsx)("i",{class:"fa fa-ellipsis-h","aria-hidden":"true"})}),Object(b.jsxs)("ul",{class:"edit-options",children:[Object(b.jsx)("li",{children:Object(b.jsxs)("button",{children:[Object(b.jsx)("i",{class:"fa fa-pencil-square","aria-hidden":"true"}),"Edit"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("button",{children:[Object(b.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"}),"Delete"]})})]})]}),Object(b.jsxs)("div",{class:"author",children:[Object(b.jsxs)("h1",{children:[" ",e.creatorName," "]}),Object(b.jsxs)("h3",{children:[" ",e.name," "]}),Object(b.jsxs)("small",{children:[" ",e.goal," "]})]}),Object(b.jsxs)("div",{class:"activity",children:[Object(b.jsxs)("h3",{children:[" ",e.activities.name," "]}),Object(b.jsxs)("small",{children:[" ",e.activities.description," "]})]}),Object(b.jsx)("div",{class:"activity-info",children:Object(b.jsx)("div",{class:"progressbar-card",children:Object(b.jsxs)("div",{class:"circle-card",children:[Object(b.jsx)("div",{class:"bar-card"}),Object(b.jsx)("div",{class:"box-card",children:Object(b.jsx)("span",{children:"80% Results"})})]})})})]})})):null]})},w=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("".concat("https://fitnesstrac-kr.herokuapp.com/api","/activities")).then((function(e){var t=e.data;t.length&&(i(t),console.log(t))}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{id:"fitness-gif",src:"https://cdn.dribbble.com/users/1304577/screenshots/4227985/gym-guy-8x6.gif"}),c&&c.length>0?c.map((function(e){return Object(b.jsxs)("div",{class:"card activities",children:[Object(b.jsxs)("div",{class:"activities-List",children:[Object(b.jsxs)("h1",{children:[" ",e.name," "]}),Object(b.jsxs)("small",{children:[" ",e.description," "]})]}),Object(b.jsx)("div",{class:"activity-info",children:Object(b.jsx)("div",{class:"progressbar-act",children:Object(b.jsxs)("div",{class:"circle-act",children:[Object(b.jsx)("div",{class:"bar-act"}),Object(b.jsx)("div",{class:"box-act",children:Object(b.jsx)("span",{children:"60% Results"})})]})})})]})})):null]})},S=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(!1),a=Object(s.a)(r,2),j=a[0],h=a[1],O=Object(n.useState)(!1),x=Object(s.a)(O,2),f=x[0],g=x[1],v=Object(n.useState)(!1),y=Object(s.a)(v,2),S=y[0],C=y[1],R=Object(n.useState)(!1),T=Object(s.a)(R,2);T[0],T[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("fitToken"))?C(!0):C(!1)}),[]);return Object(b.jsxs)("div",{id:"app",children:[S&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{class:"upload",children:Object(b.jsx)("button",{class:"btn-upload",onClick:function(){g(!0)},children:Object(b.jsx)("i",{class:"fa fa-file-text","aria-hidden":"true"})})}),Object(b.jsx)(d.a,{style:{opacity:1},isOpen:f,onRequestClose:function(){return g(!1)},children:Object(b.jsxs)("div",{class:"uploads",children:[Object(b.jsx)("button",{class:"cancel",onClick:function(){g(!1)},children:"Close"}),Object(b.jsxs)("div",{class:"options",children:[Object(b.jsx)("button",{class:"btn2",id:"activity",onClick:function(){h(!0),g(!1)},children:"New Activity"}),Object(b.jsx)("button",{class:"btn2",id:"routine",onClick:function(){i(!0),g(!1)},children:"New Routine"})]})]})}),Object(b.jsx)(d.a,{style:{opacity:1},isOpen:c,onRequestClose:function(){return i(!1)},children:Object(b.jsxs)("div",{class:"upload-form",children:[Object(b.jsx)("button",{class:"cancel",onClick:function(){i(!1)},children:"Close"}),Object(b.jsxs)("form",{class:"new-routine",children:[Object(b.jsx)("h1",{children:" New Routine"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",placeholder:"Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Goal"})]}),Object(b.jsxs)("div",{class:"radio-btn",children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{children:"Public"}),Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("label",{children:"Private "})]}),Object(b.jsx)("button",{type:"submit",class:"btn-sub",children:"Submit"}),Object(b.jsx)("h5",{id:"link-act",onClick:function(){h(!0),i(!1)},children:"Want to add a new activity? Click Here..."})]})]})}),Object(b.jsx)(d.a,{style:{opacity:1},isOpen:j,onRequestClose:function(){return h(!1)},children:Object(b.jsxs)("div",{class:"upload-form",children:[Object(b.jsx)("button",{class:"cancel",onClick:function(){h(!1)},children:"Close"}),Object(b.jsxs)("form",{class:"new-activity",children:[Object(b.jsx)("h1",{children:" New Activity"}),Object(b.jsx)("input",{type:"text",placeholder:"Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Description"}),Object(b.jsx)("input",{type:"text",placeholder:"Duration"}),Object(b.jsx)("input",{type:"text",placeholder:"Count"}),Object(b.jsxs)("div",{class:"act-newSub",children:[Object(b.jsx)("button",{type:"submit",class:"btn-sub",children:"Submit"}),Object(b.jsx)("h5",{id:"link-rou",onClick:function(){i(!0),h(!1)},children:"Want to add a new routine? Click Here..."})]})]})]})}),Object(b.jsx)(o.b,{to:"/home",children:Object(b.jsx)("button",{class:"btn",id:"home",children:"Home"})}),Object(b.jsx)(o.b,{to:"/routines",children:Object(b.jsx)("button",{class:"btn",id:"routines",children:"Routines"})}),Object(b.jsx)(o.b,{to:"/myroutines",children:Object(b.jsx)("button",{class:"btn",id:"myroutines",children:"My Routines"})}),Object(b.jsx)(o.b,{to:"/activities",children:Object(b.jsx)("button",{class:"btn",id:"activities",children:"Activities"})}),Object(b.jsx)("div",{class:"logout",children:Object(b.jsxs)("button",{class:"btn",id:"signout",onClick:function(e){e.preventDefault(),localStorage.removeItem("fitToken"),window.location.href="/"},children:[Object(b.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"}),"Logout"]})})]})}),Object(b.jsx)("body",{children:Object(b.jsx)("div",{class:"feed",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/home",children:Object(b.jsx)(u,{})}),Object(b.jsxs)("div",{class:"post",children:[Object(b.jsx)(l.a,{path:"/routines",children:Object(b.jsx)(m,{})}),Object(b.jsx)(l.a,{path:"/myroutines",children:Object(b.jsx)(k,{})}),Object(b.jsx)(l.a,{path:"/activities",children:Object(b.jsx)(w,{})})]})]})})})]})};a.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})})}),document.getElementById("app"))}},[[77,1,2]]]);
//# sourceMappingURL=main.dbdbdd95.chunk.js.map