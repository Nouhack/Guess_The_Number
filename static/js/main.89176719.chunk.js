(this.webpackJsonpnouhack_game=this.webpackJsonpnouhack_game||[]).push([[0],{12:function(e,t,s){e.exports={results:"history_results__s71vj",h4:"history_h4__34Jh0",hold_items:"history_hold_items__2q9iO"}},31:function(e,t,s){},34:function(e,t,s){e.exports={item_box:"items_item_box__1YhRR"}},41:function(e,t,s){},42:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),n=s.n(c),i=s(15),l=s.n(i),r=(s(41),s(29)),o=s(17),m=s(18),h=s(21),d=s(20),j=(s(42),s(13),s(54)),b=s(32),x=s(59),u=s(58),v=s(19),p=s(8),O=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"h-100",children:[Object(a.jsxs)(j.a,{className:"InputValues align-items-sm-center justify-content-center justify-content-sm-center no-gutters",children:[Object(a.jsx)(b.a,{xs:2,sm:2,className:"text-right mt-3 mt-sm-0 ",children:Object(a.jsx)(p.a.div,{initial:{x:"-100vw"},animate:{x:0},transition:{duration:2},children:Object(a.jsx)(x.a,{className:"incDec",variant:"outline-success",onClick:this.props.decrement,children:" -"})})}),Object(a.jsx)(b.a,{xs:4,sm:4,className:" text-center mt-3 mt-sm-0  ",children:Object(a.jsxs)(p.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:3},children:[Object(a.jsx)(u.a.Control,{className:"MyInput w-75 m-auto d-none d-md-block",style:{border:"none","border-right":"none","border-bottom":"1px solid #4CAF50","text-align":"center"},type:"Number",onChange:this.props.inputFunction,name:"tentacles",min:"0",max:"100",value:this.props.defaultVal,onKeyPress:this.props.keyFunction}),Object(a.jsx)(u.a.Control,{className:"MyInput w-75 m-auto d-md-none",style:{border:"none","border-right":"none","border-bottom":"1px solid #4CAF50","text-align":"center"},type:"quantity",onChange:this.props.inputFunction,name:"tentacles",min:"0",max:"100",value:this.props.defaultVal,onKeyPress:this.props.keyFunction})]})}),Object(a.jsx)(b.a,{xs:2,sm:2,className:"text-left mt-3 mt-sm-0",children:Object(a.jsx)(p.a.div,{initial:{x:"100vw"},animate:{x:0},transition:{duration:2},children:Object(a.jsx)(x.a,{className:"incDec",variant:"outline-success",onClick:this.props.increment,children:" +"})})})]}),Object(a.jsxs)(j.a,{className:"buttonsRowHeight bg-white align-items-center  text-center mt-sm-2 mt-md-0",children:[Object(a.jsx)(b.a,{xs:12,sm:6,md:4,className:"mt-md-3 order-2 order-sm-2 order-md-0",children:Object(a.jsx)(p.a.div,{initial:{x:"-100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:Object(a.jsx)(x.a,{variant:"outline-success",className:"w-100 mb-2",onClick:this.props.ActiveModal,children:" Setting"})})}),Object(a.jsx)(b.a,{xs:12,sm:12,md:4,className:"mt-md-3 order-1 order-sm-1 order-md-0",children:Object(a.jsx)(p.a.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:120},children:Object(a.jsx)(x.a,{variant:"success",className:"w-100 mb-2",style:{borderRadius:"50px"},onClick:this.props.buttonFunction,children:" Commit"})})}),Object(a.jsx)(b.a,{xs:12,sm:6,md:4,className:"mt-md-3 order-3 order-sm-3 order-md-0",children:Object(a.jsx)(p.a.div,{initial:{x:"100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:Object(a.jsx)(x.a,{variant:"outline-success",className:" w-100 mb-2",onClick:this.props.reset,children:" Reset"})})}),Object(a.jsx)(b.a,{xs:12,sm:6,md:6,className:"mb-md-3 order-4 order-sm-4 order-md-0",children:Object(a.jsx)(v.b,{to:"/aboutDev",children:Object(a.jsx)(p.a.div,{initial:{x:"-100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:Object(a.jsx)(x.a,{variant:"outline-success",className:"w-100 mb-2",onClick:this.props.reset,children:" About Developer"})})})}),Object(a.jsx)(b.a,{xs:12,sm:6,md:6,className:"mb-md-3 order-5 order-sm-4 order-md-0",children:Object(a.jsx)(v.b,{to:"/aboutGame",children:Object(a.jsx)(p.a.div,{initial:{x:"100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:Object(a.jsx)(x.a,{variant:"outline-success",className:" w-100 mb-2",onClick:this.props.reset,children:" About Game"})})})})]})]})}}]),s}(n.a.Component),f=s(12),g=s.n(f),y=s(34),M=s.n(y),N=function(e){return Object(a.jsx)(p.a.div,{className:M.a.item_box,initial:{y:"-100vh"},animate:{y:0},transition:{type:"spring",stiffness:120},children:Object(a.jsx)("p",{children:e.numbers})})},w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={trys:[]},a}return Object(m.a)(s,[{key:"componentDidUpdate",value:function(){console.log("hada khou",this.props.message)}},{key:"render",value:function(){var e=[];if(this.props.isClicked){console.log("xxxx",this.props.list);for(var t=0;t<this.props.len;t++)e.push(Object(a.jsx)(N,{numbers:this.props.list[t]},t))}return Object(a.jsxs)(p.a.div,{className:g.a.results,initial:{y:"30vh"},animate:{y:0},transition:{duration:2},children:[Object(a.jsx)("h4",{className:g.a.h4,children:"Attempts"}),Object(a.jsxs)("div",{className:g.a.hold_items,children:["wrong"===this.props.alert?Object(a.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:this.props.message}):"right"===this.props.alert?Object(a.jsx)("div",{className:"alert alert-success text-center",role:"alert",children:"Right Answe"}):null,e]})]})}}]),s}(n.a.Component),z=s(57),_=(s(49),function(e){return Object(a.jsx)(n.a.Fragment,{children:Object(a.jsxs)(z.a,{show:e.show,onHide:e.EnableDisableSShow,children:[Object(a.jsx)(z.a.Header,{closeButton:!0,children:Object(a.jsx)(z.a.Title,{className:"BodyFont",children:"Settings"})}),Object(a.jsxs)(z.a.Body,{className:"BodyFont",children:["choose the Minimum and Maximum value",Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"inWrapper",children:[Object(a.jsx)("input",{id:"leftInput",type:"Number",className:"form-control in ",name:"tentacles",min:"0",max:"100",value:e.minVal,onChange:e.minValListner}),Object(a.jsx)("input",{id:"rightInput",type:"Number",className:"form-control in ",name:"tentacles",min:"0",max:"100",value:e.maxVal,onChange:e.maxValListner})]})]}),Object(a.jsxs)(z.a.Footer,{children:[Object(a.jsx)(x.a,{variant:"secondary",className:"btn btn-danger",onClick:e.EnableDisableSShow,children:"Close"}),Object(a.jsx)(x.a,{variant:"primary",className:"btn btn-success",onClick:e.buttonValidaion,children:"Save"})]})]})})}),k=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(z.a,{show:e.show,onHide:e.EnableOrDisable,centered:!0,children:[Object(a.jsx)(z.a.Header,{closeButton:!0,children:Object(a.jsx)(z.a.Title,{className:"BodyFont centered",children:"Congratulation"})}),Object(a.jsxs)(z.a.Body,{className:"BodyFont",children:["You DID it after ",e.Tries," Attempts",Object(a.jsx)("img",{src:"https://www.animatedimages.org/data/media/1574/animated-success-image-0013.gif"})]}),Object(a.jsx)(z.a.Footer,{children:Object(a.jsx)(x.a,{variant:"secondary",className:"btn btn-danger",onClick:e.EnableOrDisable,children:"Close"})})]})})},B=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).getValue=function(e){a.setState({val:e.target.value})},a.displayTry=function(){isNaN(a.state.val)||""===a.state.val||(console.log("LA VAL HYA",a.state.MainValue),a.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{data:e.data.concat(a.state.val),clicked:!0,status:"wrong",showAlertMessage:a.state.val>a.state.MainValue?"value < ".concat(a.state.val):"value > ".concat(a.state.val," ")})})))},a.resetAllConfig=function(){a.setState({data:[],val:0,clicked:!1,showModal:!1,result:!1,showAlertMessage:"none",predef_max_val:20,predef_min_val:0,status:"none",MainValue:Math.floor(20*Math.random())+0})},a.rightAnswer=function(){a.setState({status:"right"})},a.tries=function(){a.setState((function(e){return{attempts:e.attempts+1}}))},a.test=function(){a.state.MainValue==a.state.val?(a.rightAnswer(),a.activeSuccessModal(),console.log("rak shih khou")):(a.tries(),console.log("rak ghalat"),console.log("hadi hya la val nouh",a.state.MainValue),console.log("hadi hya laval ta3 val nouh",a.state.val),a.displayTry())},a.handleKeyPress=function(e){"Enter"===e.key&&a.test()},a.activMod=function(){a.setState({showModal:!a.state.showModal})},a.activeSuccessModal=function(){a.setState({showSuccessModal:!a.state.showSuccessModal})},a.minValueChanger=function(e){console.log(e.target.value),Number(e.target.value)>=Number(a.state.predef_max_val)?a.setState({predef_min_val:Number(e.target.value),predef_max_val:Number(e.target.value)+1}):a.setState({predef_min_val:e.target.value})},a.maxValueChanger=function(e){console.log(e.target.value),Number(e.target.value)<=Number(a.state.predef_min_val)?a.setState({predef_min_val:Number(e.target.value)-1,predef_max_val:Number(e.target.value)}):a.setState({predef_max_val:e.target.value})},a.setFinalVal=function(){a.setState({MainValue:Math.floor(Math.random()*(Number(a.state.predef_max_val)-Number(a.state.predef_min_val)))+Number(a.state.predef_min_val),showModal:!1})},a.Increment=function(){console.log("rani hna"),a.setState({val:a.state.val+1})},a.Decrement=function(e){0!==a.state.val&&a.setState({val:a.state.val-1})},a.state={val:0,data:[],attempts:0,clicked:!1,showModal:!1,showSuccessModal:!1,result:!1,showAlertMessage:"none",predef_min_val:0,predef_max_val:20,status:"none",MainValue:Math.floor(20*Math.random())+0},a}return Object(m.a)(s,[{key:"componentDidMount",value:function(){console.log(this.state.MainValue)}},{key:"render",value:function(){return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(j.a,{className:"h-50  align-tems-center",children:Object(a.jsx)(b.a,{children:Object(a.jsx)(O,{buttonFunction:this.test,inputFunction:this.getValue,keyFunction:this.handleKeyPress,ActiveModal:this.activMod,reset:this.resetAllConfig,defaultVal:this.state.val,increment:this.Increment,decrement:this.Decrement})})}),Object(a.jsx)(j.a,{className:"mt-3  mt-sm-5 mt-md-0",children:Object(a.jsx)(b.a,{children:Object(a.jsx)(w,{num:this.state.val,isClicked:this.state.clicked,list:this.state.data,len:this.state.data.length,alert:this.state.status,message:this.state.showAlertMessage})})}),Object(a.jsx)(_,{show:this.state.showModal,EnableDisableSShow:this.activMod,minValListner:this.minValueChanger,maxValListner:this.maxValueChanger,buttonValidaion:this.setFinalVal,minVal:this.state.predef_min_val,maxVal:this.state.predef_max_val}),Object(a.jsx)(k,{show:this.state.showSuccessModal,EnableOrDisable:this.activeSuccessModal,Tries:this.state.attempts})]})}}]),s}(n.a.Component),C=s(56),F=s(7),S=(s(50),s(55)),D=function(e){return Object(a.jsx)(p.a.div,{initial:"hidden",animate:"visible",variants:{hidden:{scale:8,opacity:0},visible:{scale:1,opacity:1,transition:{duration:2}}},children:Object(a.jsxs)(j.a,{className:"justify-content-sm-center text-center  mt-md-4",children:[Object(a.jsx)(b.a,{sm:2,md:3,xs:12,className:"text-right",children:Object(a.jsx)(S.a,{src:"https://www.flaticon.com/svg/static/icons/svg/892/892926.svg",className:"imageSize",fluid:!0,alt:""})}),Object(a.jsxs)(b.a,{sm:8,md:6,xs:12,className:"text-align-center text-dark pt-1 pt-sm-2 pt-md-3 pt-lg-4 ",children:[Object(a.jsx)("h1",{className:"NouhackClass d-md-none",children:" Guess The number Mobile "}),Object(a.jsx)("h1",{className:"NouhackClass d-none d-md-block",children:" Guess The number "})]}),Object(a.jsx)(b.a,{sm:2,md:3,xs:12,className:"text-left",children:Object(a.jsx)(S.a,{src:"https://www.flaticon.com/svg/static/icons/svg/892/892926.svg",className:"imageSize",fluid:!0,alt:""})})]})})},A=(s(31),function(){return Object(a.jsxs)(p.a.div,{className:"h-auto mt-sm-5 mt-5",initial:{x:"100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:[Object(a.jsx)("h4",{className:g.a.h4,children:"About Developer"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{className:"textNouhack",children:["I'm Nouh Saiche 25 years old Full stack web Developer and Desktop Developer from Algeria, If you don't Know where it's Located well Then it's in the North Africa .",Object(a.jsx)("br",{})," My self learning Story started by taking some online python courses and end up with:"]}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{className:g.a.h4,children:"knowledge"}),Object(a.jsxs)(j.a,{className:"justify-content-sm-center justify-content-center pl-5 mt-md-4 w-auto",children:[Object(a.jsx)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:Object(a.jsxs)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:[Object(a.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"70.252",y1:"1237.476",x2:"170.659",y2:"1151.089",gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",children:[Object(a.jsx)("stop",{offset:"0","stop-color":"#5A9FD4"}),Object(a.jsx)("stop",{offset:"1","stop-color":"#306998"})]}),Object(a.jsx)("path",{fill:"url(#a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"}),Object(a.jsxs)("linearGradient",{id:"b",gradientUnits:"userSpaceOnUse",x1:"209.474",y1:"1098.811",x2:"173.62",y2:"1149.537",gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",children:[Object(a.jsx)("stop",{offset:"0","stop-color":"#FFD43B"}),Object(a.jsx)("stop",{offset:"1","stop-color":"#FFE873"})]}),Object(a.jsx)("path",{fill:"url(#b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"}),Object(a.jsxs)("radialGradient",{id:"c",cx:"1825.678",cy:"444.45",r:"26.743",gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[Object(a.jsx)("stop",{offset:"0","stop-color":"#B8B8B8","stop-opacity":".498"}),Object(a.jsx)("stop",{offset:"1","stop-color":"#7F7F7F","stop-opacity":"0"})]}),Object(a.jsx)("path",{opacity:".444",fill:"url(#c)","enable-background":"new",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"})]})}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:["  ",Object(a.jsx)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{fill:"#003A2B",d:"M126.5 83.8c0 3.8-3.1 6.9-6.9 6.9h-111.2c-3.8 0-6.9-3.1-6.9-6.9v-39.6c0-3.8 3.1-6.9 6.9-6.9h111.2c3.8 0 6.9 3.1 6.9 6.9v39.6z"}),Object(a.jsx)("path",{fill:"#fff",d:"M23 45.6h6v27.4c-3 .6-5.3.8-7.7.8-7.2 0-11-3.3-11-9.5 0-6 4-10 10.2-10 1 0 1.7.1 2.6.3v-9h-.1zm0 13.8c-.7-.2-1.3-.3-2-.3-3 0-4.7 1.8-4.7 5.1 0 3.2 1.7 4.9 4.7 4.9.7 0 1.2 0 2-.2v-9.5zM38.4 54.8v13.7c0 4.7-.3 7-1.4 9-1 1.9-2.2 3.1-4.8 4.4l-5.5-2.6c2.6-1.2 3.9-2.3 4.7-4 .8-1.7 1.1-3.7 1.1-8.8v-11.7h5.9zm-5.9-9.1h5.9v6.1h-5.9v-6.1zM42 56.1c2.6-1.2 5.1-1.8 7.8-1.8 3 0 5 .8 5.9 2.4.5.9.7 2 .7 4.5v12c-2.7.4-6 .7-8.5.7-5 0-7.2-1.7-7.2-5.6 0-4.2 3-6.1 10.2-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-4.7.6-7 1.8v-4.5h.1zm9.2 9.4c-3.9.4-5.2 1-5.2 2.5 0 1.2.7 1.7 2.3 1.7.9 0 1.7-.1 2.8-.3v-3.9h.1zM59.3 55.7c3.5-.9 6.4-1.3 9.3-1.3 3 0 5.2.7 6.5 2 1.2 1.3 1.6 2.7 1.6 5.6v11.6h-5.9v-11.4c0-2.3-.8-3.1-2.9-3.1-.8 0-1.5.1-2.7.4v14.1h-5.9v-17.9zM79 76.8c2.1 1.1 4.2 1.6 6.3 1.6 3.9 0 5.5-1.6 5.5-5.3v-.1c-1.2.6-2.3.8-3.8.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2 4.3c-1.6-.3-.1 0-1.3-.2v.6l.1 2.5v3.2c0 .8 0 1.6.1 2.4v1.6c0 5.1-.4 7.5-1.7 9.4-1.8 2.9-5 4.3-9.6 4.3-2.3 0-4.3-.3-6.4-1.2v-5.4h.1zm11.8-17.6h-.6000000000000001c-1.2 0-2.5.3-3.4.8-1.4.8-2.2 2.3-2.2 4.3 0 3 1.5 4.7 4.1 4.7.8 0 1.5-.2 2.2-.4v-9.4h-.1zM109 54.3c5.9 0 9.5 3.7 9.5 9.8 0 6.2-3.8 10.1-9.8 10.1-5.9 0-9.6-3.7-9.6-9.7.1-6.3 3.9-10.2 9.9-10.2zm-.1 15c2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2s-3.7 1.9-3.7 5.2c.1 3.4 1.4 5.2 3.7 5.2z"})]})})]}),Object(a.jsx)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:Object(a.jsxs)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:[Object(a.jsx)("path",{fill:"#0074BD",d:"M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"}),Object(a.jsx)("path",{fill:"#EA2D2E",d:"M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"}),Object(a.jsx)("path",{fill:"#0074BD",d:"M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"}),Object(a.jsx)("path",{fill:"#EA2D2E",d:"M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"}),Object(a.jsx)("path",{fill:"#0074BD",d:"M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"})]})}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsx)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:Object(a.jsx)("path",{fill:"#00618A",d:"M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927-4.894-3.092-17.448-9.817-21.072-.975-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"})})]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsxs)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:[Object(a.jsx)("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185h-125.184z"}),Object(a.jsx)("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"})]})]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsxs)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:[Object(a.jsx)("path",{fill:"#1572B6",d:"M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"}),Object(a.jsx)("path",{fill:"#33A9DC",d:"M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"}),Object(a.jsx)("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"}),Object(a.jsx)("path",{fill:"#EBEBEB",d:"M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"}),Object(a.jsx)("path",{fill:"#fff",d:"M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"}),Object(a.jsx)("path",{fill:"#EBEBEB",d:"M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"})]})]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsxs)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:[Object(a.jsx)("path",{fill:"#E44D26",d:"M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"}),Object(a.jsx)("path",{fill:"#F16529",d:"M64 116.8l36.378-10.086 8.559-95.878h-44.937z"}),Object(a.jsx)("path",{fill:"#EBEBEB",d:"M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"}),Object(a.jsx)("path",{fill:"#fff",d:"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"})]})]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsx)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:Object(a.jsxs)("g",{fill:"#61DAFB",children:[Object(a.jsx)("circle",{cx:"64",cy:"47.5",r:"9.3"}),Object(a.jsx)("path",{d:"M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"})]})})]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:["  ",Object(a.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",width:"100%"})," "]}),Object(a.jsxs)(b.a,{xl:2,lg:2,sm:3,xs:5,className:"mb-md-5 mb-sm-4 mb-4",children:[" ",Object(a.jsx)("svg",{viewBox:"0 0 128 128",style:{width:"50%"},children:Object(a.jsx)("path",{fill:"#5B4282",d:"M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"})})]})]})]})}),V=function(){return Object(a.jsxs)(p.a.div,{className:"h-auto mt-sm-5 mt-5",initial:{x:"-100vw"},animate:{x:0},transition:{type:"spring",stiffness:120},children:[Object(a.jsx)("h4",{className:g.a.h4,children:"About Game"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{className:"textNouhack",children:["Guess The number is a guess Game where the player should find the random number generated in less attempts .",Object(a.jsx)("br",{})," The default random value is between 0 and 20 and you Can Modify the Min and Max in the setting To make it more fun"]}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{className:g.a.h4,children:Object(a.jsx)("a",{href:"https://github.com/Nouhack",target:"_blank",children:Object(a.jsx)("p",{children:" Join me in GitHub"})})})]})};var E=function(){return Object(a.jsxs)(C.a,{className:"container-sm Maincontainer",children:[Object(a.jsx)(j.a,{className:"h-auto mt-sm-5 align-tems-center",children:Object(a.jsx)(b.a,{className:"bg-white align-self-center",children:Object(a.jsx)(D,{})})}),Object(a.jsx)(F.a,{path:"/",exact:!0,component:B}),Object(a.jsx)(F.a,{path:"/aboutDev",exact:!0,component:A}),Object(a.jsx)(F.a,{path:"/aboutGame",exact:!0,component:V})]})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,60)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};l.a.render(Object(a.jsx)(v.a,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.89176719.chunk.js.map