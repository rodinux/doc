"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5696],{5171:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/thunderbird_config_1-32ea23d31464d442d817793b6afdc7de.png"},5537:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(6540),i=n(4164),l=n(5627),o=n(6347),s=n(372),a=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=h(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=g({queryString:n,groupId:i}),[f,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),b=(()=>{const e=u??f;return m({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&a(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),p(e)}),[d,p,l]),tabValues:l}}var p=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=a.indexOf(t),i=s[n].value;i!==r&&(u(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{a.push(e)},onKeyDown:d,onClick:c,...l,className:(0,i.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function v(e){const t=(0,p.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(t))}},8398:(e,t,n)=>{n.r(t),n.d(t,{SmallInline:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"user_guide/email_configure_client","title":"Configure email clients","description":"You can fetch and send emails using your YunoHost instance from desktop email clients such as Thunderbird Desktop or on your smartphone with applications like K-9 Mail.","source":"@site/docs/04.user_guide/05.email_configure_client.mdx","sourceDirName":"04.user_guide","slug":"/user_guide/email_configure_client","permalink":"/user_guide/email_configure_client","draft":false,"unlisted":false,"editUrl":"https://github.com/YunoHost/doc/tree/docusaurus/docs/04.user_guide/05.email_configure_client.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Configure email clients"},"sidebar":"docsSidebar","previous":{"title":"User guide","permalink":"/user_guide/"},"next":{"title":"Migrating email from an email provider to a YunoHost instance","permalink":"/user_guide/email_migration"}}');var i=n(4848),l=n(8453),o=n(5537),s=n(9329),a=n(9030);const u={title:"Configure email clients"},c=void 0,d={};function h({url:e,alt:t}){return(0,i.jsx)("img",{src:(0,a.Ay)(e),width:"60",style:{verticalAlign:"middle",margin:"5px"},alt:t})}const m=[{value:"Generic settings",id:"generic-settings",level:3},{value:"Client by client",id:"client-by-client",level:3},{value:"<SmallInline></SmallInline> Configure Thunderbird Desktop (on a desktop computer)",id:"-configure-thunderbird-desktop-on-a-desktop-computer",level:5},{value:"<SmallInline></SmallInline> Configure K-9 Mail / Thunderbird Mobile (on Android)",id:"-configure-k-9-mail--thunderbird-mobile-on-android",level:5},{value:"<SmallInline></SmallInline> Configure Dekko (on Ubuntu Touch)",id:"-configure-dekko-on-ubuntu-touch",level:5}];function g(e){const t={a:"a",code:"code",h3:"h3",h5:"h5",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"You can fetch and send emails using your YunoHost instance from desktop email clients such as Thunderbird Desktop or on your smartphone with applications like K-9 Mail."}),"\n",(0,i.jsx)(t.p,{children:"Modern mail clients should be able to configure themselves automatically. If autoconfiguration fails, you can do it manually following the instructions below. (If the autoconfiguration fails though, it should be understood as a bug in YunoHost, and we would be glad to read your feedback to try to reproduce the issue on our side!)"}),"\n",(0,i.jsx)(t.h3,{id:"generic-settings",children:"Generic settings"}),"\n",(0,i.jsxs)(t.p,{children:["Here are the element you should enter to manually configure your mail client (",(0,i.jsx)(t.code,{children:"domain.tld"})," refers to what's after the @ in your email address, and ",(0,i.jsx)(t.code,{children:"username"})," what's before @)."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Protocol"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Port"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Encryption"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Authentication"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Username"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"IMAP"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"993"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"SSL/TLS"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Normal password"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"username"})," (without the ",(0,i.jsx)(t.code,{children:"@domain.tld"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"SMTP"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"587"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"STARTTLS"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Normal password"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"username"})," (without the ",(0,i.jsx)(t.code,{children:"@domain.tld"}),")"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"client-by-client",children:"Client by client"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsxs)(s.A,{value:"thunderbird",label:"Mozilla Thunderbird",children:[(0,i.jsxs)(t.h5,{id:"-configure-thunderbird-desktop-on-a-desktop-computer",children:[(0,i.jsx)(h,{url:"/img/thunderbird.png"})," Configure Thunderbird Desktop (on a desktop computer)"]}),(0,i.jsx)(t.p,{children:"To manually configure a new account in Thunderbird Desktop, add the account information, then click on 'Configure manually'."}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For the incoming server, use IMAP with port 993 and SSL/TLS."}),"\n",(0,i.jsx)(t.li,{children:"For outgoing server, use port 587 with STARTTLS."}),"\n",(0,i.jsx)(t.li,{children:"Select 'Normal Password' for the the authentication method of both."}),"\n"]}),(0,i.jsx)(t.p,{children:"You may need to accept the certificate exceptions for fetching mails and after you send your first mail. Don't forget to remove the dot before the domain name."}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(5171).A+"",width:"1031",height:"607"}),"\n",(0,i.jsx)(t.img,{src:n(9896).A+"",width:"1031",height:"858"})]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://support.mozilla.org/en-US/kb/configuring-email-aliases",children:"Manage alias mails"})}),"\n"]})]}),(0,i.jsxs)(s.A,{value:"k9",label:"K-9 Mail",children:[(0,i.jsxs)(t.h5,{id:"-configure-k-9-mail--thunderbird-mobile-on-android",children:[(0,i.jsx)(h,{url:"/img/k9mail.png"})," Configure K-9 Mail / Thunderbird Mobile (on Android)"]}),(0,i.jsx)(t.p,{children:"Follow the following steps. (As for Thunderbird Desktop, you might need to accept certificates at some points)"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Enter your email address then click "Next"'}),"\n",(0,i.jsx)("img",{src:"/img/thunderbird_mobile_config_1.png",alt:"",width:"280"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Enter your domain name in the "Server" field, fill the "Security" and "Port" fields as per the IMAP row in the table above, then enter your password in the "Password" field and click "Next"'}),"\n",(0,i.jsx)("img",{src:"/img/thunderbird_mobile_config_2.png",alt:"",width:"280"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Again, your domain name in the "Server" field, but fill the "Security" and "Port" fields as per the SMTP row in the table above, then enter your password in the "Password" field and click "Next"'}),"\n",(0,i.jsx)("img",{src:"/img/thunderbird_mobile_config_3.png",alt:"",width:"280"}),"\n"]}),"\n"]})]}),(0,i.jsxs)(s.A,{value:"dekko",label:"Dekko",children:[(0,i.jsxs)(t.h5,{id:"-configure-dekko-on-ubuntu-touch",children:[(0,i.jsx)(h,{url:"/img/dekko-app.png"})," Configure Dekko (on Ubuntu Touch)"]}),(0,i.jsx)(t.p,{children:"The first time you can simply choose \"Add account\". If you already have an account configured, tap the hamburger menu then tap the gear, choose Mail, Accounts and press the '+'-symbol."}),(0,i.jsx)(t.p,{children:'Then you choose IMAP. Fill in the fields and press Next. Now Dekko will look for the configuration. Check that all fields are correct. Make sure you have your YunoHost username, NOT your email address and choose "Allow untrusted certificates". Do this for IMAP and SMTP and press Next. Dekko will now synchronise the account after which you are done. Congratz!'}),(0,i.jsx)("img",{src:"/img/dekko_config_1.png",width:"280"}),(0,i.jsx)("img",{src:"/img/dekko_config_2.png",width:"280"}),(0,i.jsx)("img",{src:"/img/dekko_config_3.png",width:"280"}),(0,i.jsx)("img",{src:"/img/dekko_config_4.png",width:"280"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const i={},l=r.createContext(i);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var l=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}},9896:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/thunderbird_config_2-39767f3a92e78be04ea01b00a4bbd301.png"}}]);