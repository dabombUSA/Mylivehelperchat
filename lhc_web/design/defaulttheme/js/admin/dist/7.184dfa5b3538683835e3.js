(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[7],{88:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),l=a(2),c=a.n(l),s=a(0),i=a.n(s),o=a(15),m=a.n(o),u=a(54),d=a(27),p=a.n(d),f=i.a.memo((function(e){var t=e.children,a=Object(s.useState)(!1),n=r()(a,2),l=n[0],c=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pb-2"},i.a.createElement("button",{onClick:function(){return c(!l)},className:"btn btn-sm btn-outline-secondary"},"...")),l&&t)})),v=a(30),g=a.n(v),h=a(84),b=a(73),E=a.n(b),_=a(75),y=a.n(_),N=a(3),O=a.n(N),w=a(4),R=a.n(w),k=a(32),j=a.n(k),I=a(76),A=a.n(I),x=a(78),C=a.n(x),S=a(80),P=a.n(S),W=a(86);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=function(e){A()(r,e);var t,a,n=(t=r,function(){var e,a=P()(t);if(F()){var n=P()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return C()(this,e)});function r(e){var t;return O()(this,r),t=n.call(this,e),c()(j()(t),"state",{hightlight:!1,files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,progress:""}),t.fileInputRef=i.a.createRef(),t.dropAreaRef=i.a.createRef(),t.openFileDialog=t.openFileDialog.bind(j()(t)),t.onFilesAddedUI=t.onFilesAddedUI.bind(j()(t)),t.onDragOver=t.onDragOver.bind(j()(t)),t.onDragLeave=t.onDragLeave.bind(j()(t)),t.onDrop=t.onDrop.bind(j()(t)),t.onPaste=t.onPaste.bind(j()(t)),t.onFilesAdded=t.onFilesAdded.bind(j()(t)),t.uploadFiles=t.uploadFiles.bind(j()(t)),t.sendRequest=t.sendRequest.bind(j()(t)),t.chooseFromUploaded=t.chooseFromUploaded.bind(j()(t)),t.fileUploaded=t.fileUploaded.bind(j()(t)),t}return R()(r,[{key:"onFilesAdded",value:function(e){var t=this,a=this.props.t,n=new RegExp("(.|/)("+this.props.moptions.fop_op+")$","i"),r=[];e.forEach((function(e){n.test(e.type)||n.test(e.name)||r.push(e.name+": "+a("file.incorrect_type")),e.size>t.props.moptions.fop_size&&r.push(e.name+": "+a("file.to_big_file"))})),r.length>0?alert(r.join("\n")):this.setState({files:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.files.length>0&&0==this.state.uploading&&this.uploadFiles()}},{key:"uploadFiles",value:(a=y()(E.a.mark((function e(){var t,a=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({uploadProgress:{},uploading:!0}),t=[],this.state.files.forEach((function(e){t.push(a.sendRequest(e))})),e.prev=3,e.next=6,Promise.all(t);case 6:this.setState({successfullUploaded:!0,uploading:!1,files:[]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.setState({successfullUploaded:!0,uploading:!1,files:[]});case 12:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return a.apply(this,arguments)})},{key:"fileUploaded",value:function(e){this.props.fileAttached(e)}},{key:"sendRequest",value:function(e){var t=this,a=this.props.t;return new Promise((function(n,r){var l=new XMLHttpRequest;l.upload.addEventListener("progress",(function(n){n.lengthComputable&&(T({},t.state.uploadProgress)[e.name]={state:"pending",percentage:n.loaded/n.total*100},t.setState({progress:a("file.uploading")+" "+Math.round(n.loaded/n.total*100)+"%"}))})),l.upload.addEventListener("load",(function(a){T({},t.state.uploadProgress)[e.name]={state:"done",percentage:100},t.setState({progress:""}),n(l.response)}));var c=t;l.onreadystatechange=function(){4===l.readyState&&c.fileUploaded(JSON.parse(l.response))},l.upload.addEventListener("error",(function(a){var n=T({},t.state.uploadProgress);n[e.name]={state:"error",percentage:0},t.setState({progress:n}),r(l.response)}));var s=new FormData;s.append("files",e,e.name),l.open("POST",WWW_DIR_JAVASCRIPT+"mailconv/uploadfile"),l.send(s)}))}},{key:"openFileDialog",value:function(){this.state.uploading||this.fileInputRef.current.click()}},{key:"onFilesAddedUI",value:function(e){var t=e.target.files,a=this.fileListToArray(t);this.onFilesAdded(a)}},{key:"onDragOver",value:function(e){e.preventDefault(),this.state.uploading||this.setState({hightlight:!0})}},{key:"componentDidMount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=this.onDragOver,this.dropAreaRef.current.ondragleave=this.onDragLeave,this.dropAreaRef.current.ondrop=this.onDrop)}},{key:"componentWillUnmount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=null,this.dropAreaRef.current.ondragleave=null,this.dropAreaRef.current.ondrop=null),window.attatchReplyCurrent=null}},{key:"onPaste",value:function(e){var t=e&&e.clipboardData&&e.clipboardData.items;if(t&&t.length){for(var a=[],n=0;n<t.length;n++){var r=t[n].getAsFile&&t[n].getAsFile();r&&a.push(r)}a.length>0&&this.onFilesAdded(a)}}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.state.uploading){var t=e.dataTransfer.files,a=this.fileListToArray(t);this.onFilesAdded(a),this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"chooseFromUploaded",value:function(){var e=this.props.t;lhc.revealModal({title:e("file.choose_uploaded"),iframe:!0,height:500,url:WWW_DIR_JAVASCRIPT+"mailconv/attatchfile/(attachment)/1"});var t=this;window.attatchReplyCurrent=function(e){t.props.fileAttached(e)}}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:this.chooseFromUploaded},i.a.createElement("i",{className:"material-icons"},"list")," ",e("file.choose_uploaded")),i.a.createElement("button",{ref:this.dropAreaRef,onClick:this.openFileDialog,className:"btn btn-sm "+(1==this.state.hightlight?"btn-outline-primary":"btn-outline-secondary")},i.a.createElement("i",{className:"material-icons"},"attach_file")," ",this.state.progress||e("file.drop_here")),i.a.createElement("input",{onChange:this.onFilesAddedUI,ref:this.fileInputRef,id:"fileupload",type:"file",name:"files[]",multiple:!0,className:"d-none"}))}}]),r}(s.PureComponent),J=Object(W.a)("mail_chat")(M);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=i.a.memo((function(e){var t=Object(s.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"add_recipient":return(e=V({},e))[n].push({name:"",email:""}),e;case"remove_recipient":return(e=V({},e))[n.recipient]=e[n.recipient].filter((function(e,t){return t!==n.index})),e;case"set":return n;case"set_attribute":return(e=V({},e))[n.value.type][n.value.index][n.value.field]=n.value.value,e;case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),a=r()(t,2),n=a[0],l=a[1],o=function(t,a){l({type:t,value:a}),e.setRecipients(n)};Object(s.useEffect)((function(){l({type:"set",value:e.recipients}),e.setRecipients(e.recipients)}),[e.recipients]);var m=Object(u.a)("mail_chat"),d=m.t;m.i18n;return i.a.createElement("div",{className:"row"},!e.readOnly&&i.a.createElement("div",{className:"col-12 text-secondary font-weight-bold fs13 pb-1"},d("r.recipients")," ",i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","reply")},style:{fontSize:"20px"}},"add")," Cc ",i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","cc")},style:{fontSize:"20px"}},"add")," Bcc ",i.a.createElement("i",{onClick:function(e){return o("add_recipient","bcc")},className:"material-icons settings text-muted",style:{fontSize:"20px"}},"add")),i.a.createElement("div",{className:"col-6"},n.reply&&n.reply.map((function(t,a){var n;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},d("r.to"),":"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(n={disabled:e.readOnly,type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:a,field:"email"}})},value:t.email},c()(n,"placeholder",d("r.email")),c()(n,"aria-describedby","validationTooltipUsernamePrepend"),n)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"text",disabled:e.readOnly,placeholder:d("r.name"),onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:a,field:"name"}})},value:t.name,className:"form-control form-control-sm"})),!e.readOnly&&a>0&&i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"reply",index:a})}},"remove")))}))),i.a.createElement("div",{className:"col-6"},n.cc&&n.cc.map((function(t,a){var n;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Cc:"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(n={type:"text",disabled:e.readOnly,className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:a,field:"email"}})},value:t.email},c()(n,"placeholder",d("r.email")),c()(n,"aria-describedby","validationTooltipUsernamePrepend"),n)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{disabled:e.readOnly,type:"text",placeholder:d("r.name"),onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:a,field:"name"}})},value:t.name,className:"form-control form-control-sm"})),!e.readOnly&&i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"cc",index:a})}},"remove")))}))),i.a.createElement("div",{className:"col-6"},n.bcc&&n.bcc.map((function(t,a){var n;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Bcc:"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(n={type:"text",disabled:e.readOnly,className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:a,field:"email"}})},value:t.email},c()(n,"placeholder",d("r.email")),c()(n,"aria-describedby","validationTooltipUsernamePrepend"),n)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"text",disabled:e.readOnly,placeholder:d("r.name"),onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:a,field:"name"}})},value:t.name,className:"form-control form-control-sm"})),!e.readOnly&&i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"bcc",index:a})}},"remove")))}))))})),q=i.a.memo((function(e){var t=Object(s.useState)(!1),a=r()(t,2);a[0],a[1];return i.a.createElement(i.a.Fragment,null,e.status.send&&i.a.createElement("div",{className:"alert alert-success p-1 pl-2",role:"alert"},"Success!"),!e.status.send&&i.a.createElement("div",{className:"alert alert-danger p-1 pl-2",role:"alert"},i.a.createElement("ul",{className:"mb-0"},e.status.errors.general&&i.a.createElement("li",null,e.status.errors.general),e.status.errors.reply&&i.a.createElement("li",null,e.status.errors.reply),e.status.errors.content&&i.a.createElement("li",null,e.status.errors.content))))})),H=i.a.memo((function(e){var t=Object(s.useState)(!1),a=r()(t,2),n=a[0],l=a[1],o=Object(s.useState)(!1),d=r()(o,2),p=d[0],f=d[1],v=Object(s.useState)(null),b=r()(v,2),E=(b[0],b[1],Object(s.useState)(null)),_=r()(E,2),y=_[0],N=_[1],O=Object(s.useState)(null),w=r()(O,2),R=w[0],k=w[1],j=Object(s.useState)(!1),I=r()(j,2),A=I[0],x=I[1],C=Object(s.useState)([]),S=r()(C,2),P=S[0],W=S[1],D=Object(s.useState)([]),T=r()(D,2),F=T[0],M=T[1],U=Object(s.useState)([]),V=r()(U,2),H=V[0],z=V[1],B=Object(s.useState)(!1),$=r()(B,2),K=$[0],X=$[1],G=Object(s.useState)(!1),Q=r()(G,2),Y=Q[0],Z=Q[1],ee=Object(s.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),te=r()(ee,2),ae=te[0],ne=te[1],re=Object(s.useRef)();re.current=ae;Object(s.useEffect)((function(){return function(){re.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}))}}),[]),Object(s.useEffect)((function(){1!=n&&1!=p||0!=A?0==n&&0==p&&1==A&&(x(!1),re.current.length>0&&(re.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")})),ne({type:"cleanup"}))):m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/getreplydata/"+e.message.id+"/"+(1==n?"reply":"forward")).then((function(e){x(!0),N(e.data.intro),k(e.data.signature),W(e.data.recipients),Z(e.data.signature_under)}))}),[n,p]),1==e.replyMode&&0==n&&(1==p&&(x(!1),f(!1)),l(!0)),1==e.forwardMode&&0==p&&(1==n&&(x(!1),l(!1)),f(!0));var le=Object(u.a)("mail_chat"),ce=le.t;le.i18n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},!n&&!p&&!e.fetchingMessages&&i.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){f(!1),l(!0)}},i.a.createElement("i",{className:"material-icons"},"reply"),ce("msg.reply")),i.a.createElement("button",{disabled:1==e.message.response_type,type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.noReplyRequired()}},i.a.createElement("i",{className:"material-icons"},"done"),ce("msg.nrr")),!e.moptions.hide_recipients&&i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){l(!1),f(!0)}},i.a.createElement("i",{className:"material-icons"},"forward"),ce("msg.forward"))),!e.fetchingMessages&&(n||p)&&A&&i.a.createElement("div",{className:"shadow p-2"},H.send_tried&&i.a.createElement(q,{status:H}),i.a.createElement(L,{readOnly:e.moptions.hide_recipients,setRecipients:function(e){return M(e)},mode:1==n?"reply":"forward",message:e.message,recipients:P}),i.a.createElement(h.a,{tinymceScriptSrc:"/design/defaulttheme/js/tinymce/js/tinymce/tinymce.min.js",initialValue:"<p></p>"+y+"<blockquote>"+e.message.body_front+"</blockquote>"+(0==Y?R:""),onInit:function(){tinyMCE.get("reply-to-mce-"+e.message.id).focus()},id:"reply-to-mce-"+e.message.id,init:{height:320,automatic_uploads:e.moptions.files_enabled,file_picker_types:"image",images_upload_url:WWW_DIR_JAVASCRIPT+"mailconv/uploadimage",templates:WWW_DIR_JAVASCRIPT+"mailconv/apiresponsetemplates/"+e.message.id,paste_data_images:e.moptions.files_enabled,relative_urls:!1,browser_spellcheck:!0,paste_as_text:!0,contextmenu:!1,menubar:!1,plugins:e.moptions.mce_plugins,toolbar_mode:"wrap",toolbar:e.moptions.mce_toolbar}}),n&&i.a.createElement("div",{className:"float-right"},i.a.createElement("a",{className:"action-image",onClick:function(){l(!1),e.cancelReply()}},i.a.createElement("i",{className:"material-icons"},"delete"))),p&&i.a.createElement("div",{className:"float-right"},i.a.createElement("a",{className:"action-image",onClick:function(){f(!1),e.cancelForward()}},i.a.createElement("i",{className:"material-icons"},"delete"))),i.a.createElement("div",{className:"btn-group mt-1",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",disabled:K,className:"btn btn-sm btn-outline-primary",onClick:function(){return t={recipients:F,content:tinyMCE.get("reply-to-mce-"+e.message.id).getContent(),attatchements:ae,mode:1==n?"reply":"forward"},X(!0),void m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apisendreply/"+e.message.id,t).then((function(t){z(t.data),X(!1),1==t.data.send&&e.fetchMessages()})).catch((function(e){X(!1),e.response?400===e.response.status?z(e.response.data):alert("Unhandled error."+e.response.data):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}));var t}},i.a.createElement("i",{className:"material-icons"},"send"),ce(1==K?"msg.sending":"msg.send")),e.moptions.files_enabled&&i.a.createElement(J,{moptions:e.moptions,fileAttached:function(e){return ne({type:"add",value:e})},message:e.message})),ae&&ae.length>0&&i.a.createElement("div",{className:"pt-2"},ae.map((function(e,t){return i.a.createElement("button",c()({title:ce("msg.click_to_remove"),onClick:function(){return function(e,t){ne({type:"remove",value:t}),!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}(e,t)},className:"btn btn-sm btn-outline-info mr-1 mb-1"},"title",e.id),e.name)}))))))})),z=i.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,l=e.noReplyRequired,c=e.mode,o=e.addLabel,m=e.moptions,v=e.fetchMessages,g=e.fetchingMessages,h=Object(s.useState)(!1),b=r()(h,2),E=b[0],_=b[1],y=Object(s.useState)(a+1==n),N=r()(y,2),O=N[0],w=N[1],R=Object(s.useState)(!1),k=r()(R,2),j=k[0],I=k[1],A=Object(s.useState)(!1),x=r()(A,2),C=x[0],S=x[1];1!=g||1!=j&&1!=C||(I(!1),S(!1));var P=Object(u.a)("mail_chat"),W=P.t;P.i18n;return i.a.createElement("div",{className:"row pb-2 mb-2 border-secondary"+("preview"!==c?" border-top pt-2":" border-bottom")},i.a.createElement("div",{className:"col-7 action-image",onClick:function(){return w(!O)}},i.a.createElement("span",{title:"Expand message "+t.id},i.a.createElement("i",{className:"material-icons"},O?"expand_less":"expand_more")),i.a.createElement("b",null,t.from_name),i.a.createElement("small",null," <",t.from_address,"> "),i.a.createElement("small",{className:t.status&&1!=t.status?t.cls_time?"chat-closed":"chat-active":"chat-pending"},i.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),i.a.createElement("div",{className:"col-5 text-right text-muted"},i.a.createElement("small",{className:"pr-1"},t.subjects&&t.subjects.map((function(e,t){return i.a.createElement("span",{className:"badge badge-info mr-1"},e.name)})),"preview"!==c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{title:W("msg.ar_label"),onClick:function(){return o(t)},className:"material-icons action-image text-muted"},"label")," |")),i.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ",W("msg.ago"),"."),"preview"!==c&&i.a.createElement("i",{onClick:function(e){e.stopPropagation(),S(!1),I(!0)},className:"material-icons settings text-muted"},"reply"),i.a.createElement("i",{onClick:function(e){e.stopPropagation(),_(!E)},className:"material-icons settings text-muted"},E?"expand_less":"expand_more"),"preview"!==c&&i.a.createElement("div",{className:"dropdown float-right"},i.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),S(!1),I(!0)}},i.a.createElement("i",{className:"material-icons text-muted"},"reply"),W("msg.reply")),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),I(!1),S(!0)}},i.a.createElement("i",{className:"material-icons text-muted"},"forward"),W("msg.forward")),i.a.createElement("a",{className:"dropdown-item",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprint/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"print"),W("mail.print")),i.a.createElement("a",{className:"dropdown-item",href:WWW_DIR_JAVASCRIPT+"mailconv/apimaildownload/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"cloud_download"),W("msg.download")),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return l(t)}},i.a.createElement("i",{className:"material-icons text-muted"},"done"),W("msg.no_reply"))))),E&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},W("msg.info")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},W("msg.from"),":")," ",i.a.createElement("b",null,t.from_name)," <",t.from_address,">"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},W("msg.to"),":")," ",t.to_data_front),t.cc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"cc:")," ",t.cc_data_front),t.bcc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"bcc:")," ",t.bcc_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},W("msg.reply_to"),":")," ",t.reply_to_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},W("msg.mailed_by"),":")," ",t.from_host))),i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},t.accept_time_front&&i.a.createElement("li",null,W("mail.accepted_at"),": ",t.accept_time_front),t.plain_user_name&&i.a.createElement("li",null,W("mail.accepted_by"),": ",i.a.createElement("b",null,t.plain_user_name)),t.wait_time&&i.a.createElement("li",null,W("mail.accept_wait_time"),": ",t.wait_time_pending),t.lr_time&&t.response_time&&i.a.createElement("li",null,W("mail.response_wait_time"),": ",t.wait_time_response,", ",W("mail.exc_pending_time")),t.lr_time&&i.a.createElement("li",null,"Response type: ",1==t.response_type?W("msg.nrr"):2==t.response_type?W("msg.orm"):W("msg.rbe")),t.interaction_time&&i.a.createElement("li",null,W("mail.interaction_time"),": ",t.interaction_time_duration),t.cls_time&&i.a.createElement("li",null,W("mail.closed_at"),": ",t.cls_time_front),t.conv_duration_front&&i.a.createElement("li",null,W("mail.response_wait_time"),": ",t.conv_duration_front))))))),O&&t.body_front&&i.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=r()(t,2),l=n[0],c=n[1];if(l){var s=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(l.trim());a[s]=c.trim()}})),a)),i.a.createElement("blockquote",e.attribs,i.a.createElement(f,null,Object(d.domToReact)(e.children)))}var t,a}}),t.attachments&&t.attachments.length>0&&i.a.createElement("div",{className:"pt-2"},t.attachments.map((function(e){return i.a.createElement("a",{className:"btn btn-sm btn-outline-info mr-1",href:e.download_url,title:e.description},e.name)})))),"preview"!==c&&!g&&(a+1==n||j||C)&&i.a.createElement(H,{fetchingMessages:g,fetchMessages:function(e){return v()},moptions:m,forwardMode:C,cancelForward:function(e){return S(!1)},cancelReply:function(e){return I(!1)},replyMode:j,lastMessage:a+1==n,message:t,noReplyRequired:function(){return l(t)}}))}));function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return K({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,t.conv&&(e.conv=t.conv),t.fetching_messages&&(e.fetching_messages=t.fetching_messages),e=K({},e);case"update_history":return e=K({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var t=Object(s.useRef)(null),a=Object(s.useReducer)(X,{messages:[],operators:[],conv:null,loaded:!1,saving_remarks:!1,old_message_id:0,last_message:"",remarks:"",last_message_id:0,lmsop:0,lgsync:0,fetching_messages:!1}),n=r()(a,2),l=n[0],c=n[1],o=function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId+"/(mode)/"+(""!=e.mode?e.mode:"normal")).then((function(t){c({type:"update",value:{conv:t.data.conv,messages:t.data.messages,moptions:t.data.moptions,loaded:!0,fetching_messages:!1}}),!1===e.disableRemember&&"preview"!==e.mode&&function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("machat_id",t.join(",")))}catch(e){}}(e.chatId)})).catch((function(t){lhinst.removeDialogTabMail("mc"+e.chatId,$("#tabs"),!0)}))},d=function t(a){m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apifetchmails/"+e.chatId+"/"+a).then((function(e){1==e.data.updated?o():setTimeout((function(){return t(a)}),1e3)}))},p=function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+e.url})};Object(s.useEffect)((function(){if(null!==l.conv){var t=setTimeout((function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/saveremarks/"+e.chatId,{data:l.remarks}).then((function(e){c({type:"update",value:{saving_remarks:!1}})}))}),500);return function(){return clearTimeout(t)}}}),[l.remarks]);Object(s.useEffect)((function(){function t(t){e.chatId==t&&o()}return o(),ee.addListener("mailChatModified",t),function(){ee.removeListener("mailChatModified",t),function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("machat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]),Object(s.useEffect)((function(){if(1==l.loaded){t.current;ee.emitEvent("mailChatContentLoaded",[e.chatId])}}),[l.loaded]);var f=Object(u.a)("mail_chat"),v=f.t;f.i18n;return 0==l.loaded?i.a.createElement("span",null,"..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"chat-main-left-column "+("preview"==e.mode?"col-12":"col-7")},"preview"!==e.mode&&i.a.createElement("h1",{className:"pb-2"},i.a.createElement("i",{className:"material-icons"},1==l.conv.start_type?"call_made":"call_received"),l.conv.subject),i.a.createElement("div",null,l.messages.map((function(t,a){return i.a.createElement(z,{moptions:l.moptions,fetchMessages:function(e){return c({type:"update",value:{fetching_messages:!0}}),void d(Math.floor(Date.now()/1e3))},fetchingMessages:l.fetching_messages,mode:e.mode,key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:l.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){c({type:"update_message",message:e.data.message,conv:e.data.conv})})).catch((function(e){}))}(t)},addLabel:function(e){return function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"mailconv/apilabelmessage/"+e.id,hidecallback:function(){m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apigetlabels/"+e.id).then((function(e){c({type:"update_message",message:e.data.message})})).catch((function(e){}))}})}(t)}})})),l.fetching_messages&&i.a.createElement("div",{className:"alert alert-success p-1 pl-2",role:"alert"},v("mail.send_fetching")))),i.a.createElement("div",{className:"chat-main-right-column "+("preview"==e.mode?"d-none":"col-5")},i.a.createElement("div",{role:"tabpanel"},i.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:v("mail.information"),role:"tab","data-toggle":"tab"},i.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#mail-chat-remarks-"+e.chatId,"aria-controls":"#mail-chat-remarks-"+e.chatId,role:"tab","data-toggle":"tab",title:v("mail.remarks")},i.a.createElement("i",{className:"material-icons mr-0"},"mode_edit")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-remarks-"+e.chatId},i.a.createElement("div",{className:"material-icons pb-1 text-success"+(l.saving_remarks?" text-warning":"")},"mode_edit"),i.a.createElement("div",null,l.conv&&i.a.createElement("textarea",{placeholder:"Enter your remarks here.",onKeyUp:function(e){return t=e.target.value,void c({type:"update",value:{saving_remarks:!0,remarks:t}});var t},class:"form-control mh150",defaultValue:l.conv.remarks}))),i.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},i.a.createElement("div",{className:"pb-2"},i.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e=!1,l.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+l.conv.id).then((function(e){c({type:"update",value:{conv:e.data.conv,messages:e.data.messages}}),document.getElementById("chat-tab-link-mc"+l.conv.id)&&lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0)})).catch((function(e){})));var e}},i.a.createElement("i",{className:"material-icons"},"close"),v("mail.close"))),i.a.createElement("div",{id:"mail-external-details-"+e.chatId}),l.conv&&i.a.createElement("table",{className:"table table-sm"},i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},i.a.createElement("i",{className:"material-icons action-image",title:v("mail.interactions_history"),onClick:function(){return p({url:"mailconv/mailhistory/"+e.chatId})}},"history"),i.a.createElement("a",{className:"material-icons action-image",onClick:function(){return p({url:"mailconv/transfermail/"+e.chatId})},title:v("mail.transfer_chat")},"supervisor_account"),i.a.createElement("a",{className:"text-dark material-icons",title:v("mail.print"),target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprintcovnersation/"+e.chatId},"print"),l.conv.can_delete&&i.a.createElement("a",{className:"material-icons mr-0",onClick:function(e){confirm("Are you sure?")&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apideleteconversation/"+l.conv.id).then((function(e){document.getElementById("chat-tab-link-mc"+l.conv.id)?lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0):document.location=WWW_DIR_JAVASCRIPT+"mailconv/conversations"})).catch((function(e){}))},title:"Delete chat"},"delete"))),i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.sender")),i.a.createElement("td",null,l.conv.from_name," <",l.conv.from_address,">")),i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.status")),i.a.createElement("td",null,!l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),v("status.pending")),1==l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),v("status.active")),2==l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),v("status.closed")))),i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.department")),i.a.createElement("td",null,l.conv.department_name)),i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.received")),i.a.createElement("td",null,l.conv.udate_front)),i.a.createElement("tr",null,i.a.createElement("td",null,"ID"),i.a.createElement("td",null,l.conv.id)),l.conv.accept_time&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.last_accepted_at")),i.a.createElement("td",null,l.conv.accept_time_front,l.conv.wait_time_pending&&i.a.createElement(i.a.Fragment,null," | Wait time ",l.conv.wait_time_pending))),l.conv.response_time&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.last_responded_at")),i.a.createElement("td",null,l.conv.lr_time_front,l.conv.wait_time_response&&i.a.createElement(i.a.Fragment,null," | Wait time ",l.conv.wait_time_response))),l.conv.cls_time&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.closed_at")),i.a.createElement("td",null,l.conv.cls_time_front)),l.conv.conv_duration&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.conv_duration")),i.a.createElement("td",null,l.conv.conv_duration_front)),l.conv.interaction_time&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.last_interaction_time")),i.a.createElement("td",null,l.conv.interaction_time_duration)),l.conv.priority&&i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.priority")),i.a.createElement("td",null,l.conv.priority)),i.a.createElement("tr",null,i.a.createElement("td",null,v("mail.chat_owner")),i.a.createElement("td",null,l.conv.plain_user_name)))))))))}}}]);
//# sourceMappingURL=7.184dfa5b3538683835e3.js.map