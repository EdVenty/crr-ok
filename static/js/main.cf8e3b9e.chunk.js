(this["webpackJsonpcrr-ok"]=this["webpackJsonpcrr-ok"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"page.index.delivery-alert-message.overflow":"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u0445\u043e\u043b\u043b\u0435 \u043f\u0435\u0440\u0438\u043e\u0434 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438! \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0442\u0430\u043d\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 5-10 \u043c\u0438\u043d\u0443\u0442.","page.index.delivery-alert-message.robot-broken":"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0420\u043e\u0431\u043e\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0442\u0435\u0445.\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438! \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430!","page.index.delivery-alery-message.unknown":"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430!"}')},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(35),l=a.n(i),c=a(63),o=(a(73),a(28)),d=a(29),u=a(33),v=a(32),b=a(46),j=a(38);!function(e){e[e.none=0]="none",e[e.hallOverlow=1]="hallOverlow",e[e.robotBroken=2]="robotBroken",e[e.unknown=3]="unknown"}(n||(n={}));var h,p,O=function(e){switch(e){case n.hallOverlow:return j["page.index.delivery-alert-message.overflow"];case n.robotBroken:return j["page.index.delivery-alert-message.robot-broken"];case n.unknown:default:return j["page.index.delivery-alery-message.unknown"]}},m=Object(b.a)("DELIVERY_DISABLED_RESON"),f=Object(b.a)("DELIVERY_OFF"),y=Object(b.a)("DELIVERY_ON"),x=a(16),g=Object(x.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELIVERY_OFF":e.deliveryDisabled=!0;break;case"DELIVERY_ON":e.deliveryDisabled=!1;break;case"DELIVERY_DISABLED_RESON":e.deliveryDisabledReason=t.payload}return console.log(e),e})),k=a(2),D=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={reason:g.getState().deliveryDisabledReason,deliveryDisabled:g.getState().deliveryDisabled},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.subscribe((function(){return e.setState({reason:g.getState().deliveryDisabledReason,deliveryDisabled:g.getState().deliveryDisabled})}))}},{key:"render",value:function(){var e;return this.state.deliveryDisabled?Object(k.jsx)("div",{className:"alert-card container",children:O(null!==(e=this.state.reason)&&void 0!==e?e:n.none)}):null}}]),a}(s.a.PureComponent),w=a(36),N=a(15),S=a(51),C=(a(75),a(56)),E=a(64),q=(a(76),a(62)),F=function(e){e.width;var t=e.values,a=void 0===t?[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]:t,n=e.defaultValue,r=void 0===n?a[0]:n,s=e.isDisabled,i=void 0!==s&&s,l=e.onChangeCallback,c=void 0===l?void 0:l,o=Object(E.a)(e,["width","values","defaultValue","isDisabled","onChangeCallback"]);return Object(k.jsx)(q.a,Object(C.a)({className:"drop-down",classNamePrefix:"drop-down",isDisabled:i,defaultValue:r,onChange:c,options:a},o))},V=a(110),R=S.a.div(h||(h=Object(N.a)(["\n    background: ",";\n    font-family: ",";\n    box-shadow: ",";\n    padding: ",";\n    border-radius: ",";\n"])),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.fontBase}),(function(e){return e.theme.boxShadowSecondary}),(function(e){return e.theme.deliveryFormPadding}),(function(e){return e.theme.borderRadius})),L=S.a.div(p||(p=Object(N.a)(["\n    /* margin: ","; */\n    margin-bottom: 1em;\n"])),(function(e){return e.theme.deliveryFormElementMargin})),I=[{value:"tren",label:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f"},{value:"prep",label:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f"},{value:"kab-1",label:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21161"},{value:"kab-5",label:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21165"},{value:"kab-6",label:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21166"},{value:"kab-7",label:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21167"}],B=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={sending:!1,deliveryFrom:I[0].value,deliveryTo:I[1].value},n.sendDelivery=n.sendDelivery.bind(Object(w.a)(n)),n.acceptedDelivery=n.acceptedDelivery.bind(Object(w.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.subscribe((function(){e.setState({disabled:g.getState().deliveryDisabled})})),g.dispatch(m(n.hallOverlow))}},{key:"sendDelivery",value:function(){this.setState({sending:!0}),setTimeout(this.acceptedDelivery,5e3),document.body.style.backgroundColor="#c7c7c7"}},{key:"acceptedDelivery",value:function(){this.setState({sending:!1,deliveryApproved:!0}),document.body.style.backgroundColor="#3f9e22",setTimeout((function(){return document.body.style.backgroundColor="#0e6cc4"}),1e4)}},{key:"render",value:function(){var e=this;return Object(k.jsxs)(R,{className:"delivery-form",children:[Object(k.jsx)(L,{children:Object(k.jsx)("h2",{children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"})}),Object(k.jsxs)(L,{children:[Object(k.jsx)("p",{children:"\u041f\u0443\u043d\u043a\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(k.jsx)(F,{isDisabled:this.state.disabled,values:I.filter((function(t){return t.value!==e.state.deliveryTo})),onChangeCallback:function(t){return e.setState({deliveryFrom:null===t||void 0===t?void 0:t.value})},defaultValue:I[0]})]}),Object(k.jsxs)(L,{children:[Object(k.jsx)("p",{children:"\u041f\u0443\u043d\u043a\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f"}),Object(k.jsx)(F,{isDisabled:this.state.disabled,values:I.filter((function(t){return t.value!==e.state.deliveryFrom})),onChangeCallback:function(t){return e.setState({deliveryTo:null===t||void 0===t?void 0:t.value})},defaultValue:I[1]})]}),Object(k.jsxs)(c.a,{variant:"contained",onClick:function(){return e.sendDelivery()},disabled:this.state.disabled||this.state.sending,children:["\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0430",this.state.sending?Object(k.jsx)(V.a,{style:{position:"absolute"},size:"2rem"}):null]}),this.state.deliveryApproved?Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430. \u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f \u0440\u043e\u0431\u043e\u0442\u0430. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0434\u0435\u0441\u044c:"}),Object(k.jsx)("a",{href:"https://google.com/",children:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430?"})]}):null]})}}]),a}(s.a.PureComponent),_=(a(94),function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={status:n.props.status},n}return Object(d.a)(a,[{key:"evalStatus",value:function(){switch(this.state.status){case"waiting":return"\u0436\u0434\u0451\u0442";case"toGetter":return"\u0432 \u043f\u0443\u0442\u0438 \u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e";case"toSender":return"\u0432 \u043f\u0443\u0442\u0438 \u043a \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044e";case"openGetter":return"\u043f\u0440\u0438\u0431\u044b\u043b \u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044e";case"openSender":return"\u043f\u0440\u0438\u0431\u044b\u043b \u043a \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044e"}return this.state.status}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"delivery-request-container ".concat(this.props.prefix,"-delivery-request-container"),children:Object(k.jsxs)("div",{className:"delivery-request ".concat(this.props.prefix,"-delivery-request ").concat(this.props.fromMe?"delivery-request-my "+this.props.prefix+"-delivery-request-my":"delivery-request-other "+this.props.prefix+"-delivery-request-other"),children:[Object(k.jsx)("h4",{className:"delivery-request-client ".concat(this.props.prefix,"-delivery-request-client"),children:this.props.clientName}),Object(k.jsxs)("div",{className:"delivery-request-points ".concat(this.props.prefix,"-delivery-request-points"),children:[Object(k.jsx)("p",{children:this.props.from}),Object(k.jsx)("img",{src:"https://img.icons8.com/ios/100/000000/van.png",className:"delivery-icon",alt:"van"}),Object(k.jsx)("p",{children:this.props.to})]}),Object(k.jsx)("p",{className:"delivery-request-status ".concat(this.props.prefix,"-delivery-request-status"),children:this.evalStatus()})]})})}}]),a}(s.a.PureComponent));var M=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("div",{className:"wave -one"}),Object(k.jsx)("div",{className:"wave -two"}),Object(k.jsx)("div",{className:"wave -three"})]}),Object(k.jsx)("div",{className:"text",children:Object(k.jsx)("a",{href:"#info",children:Object(k.jsx)("h1",{className:"crr-ok",children:"\u0426\u0420\u0420 \u041e.\u041a."})})}),Object(k.jsxs)("div",{className:"container current-request-container",children:[Object(k.jsx)("h3",{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(k.jsx)(_,{from:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f",to:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21161",clientName:"\u042f",status:"openGetter",fromMe:!0,prefix:"current"}),Object(k.jsx)(c.a,{children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0440\u044b\u0448\u043a\u0443"})]}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)(D,{}),Object(k.jsx)(B,{}),Object(k.jsxs)("div",{className:"container requests",children:[Object(k.jsx)("h2",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(k.jsx)(_,{from:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21167",to:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f",clientName:"Amogus",status:"toGetter"}),Object(k.jsx)(_,{from:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f",to:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u21161",clientName:"Edventy",status:"waiting",fromMe:!0})]}),Object(k.jsxs)("div",{className:"container test-box",children:["[\u0422\u0415\u0421\u0422] \u0410\u043b\u0435\u0440\u0442-\u043c\u0435\u0441\u0441\u0435\u0434\u0436",Object(k.jsx)(F,{values:[{value:n.unknown,label:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"},{value:n.robotBroken,label:"\u0422\u0435\u0445-\u0440\u0430\u0431\u043e\u0442\u044b"},{value:n.hallOverlow,label:"\u0425\u043e\u043b\u043b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d"}],onChangeCallback:function(e){return g.dispatch(m(null===e||void 0===e?void 0:e.value))},defaultValue:{value:n.hallOverlow,label:"\u0425\u043e\u043b\u043b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d"}}),Object(k.jsx)(c.a,{variant:"contained",onClick:function(){return g.dispatch(g.getState().deliveryDisabled?y():f())},children:"[\u0422\u0415\u0421\u0422] \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"})]}),Object(k.jsxs)("div",{className:"container info-card",id:"info",children:[Object(k.jsx)("h2",{children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0426\u0420\u0420 \u041e\u041a?"}),Object(k.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod iusto soluta, a asperiores voluptates velit delectus eveniet at nisi assumenda quam officia unde, rerum sed odit ullam placeat laborum voluptas?"})]})]})]})},P=(a(95),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))});l.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(M,{})}),document.getElementById("root")),P()}},[[96,1,2]]]);
//# sourceMappingURL=main.cf8e3b9e.chunk.js.map