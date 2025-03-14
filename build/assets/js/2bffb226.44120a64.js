"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3571],{7563:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"administer/tutorials/torhiddenservice","title":"Using YunoHost as a Tor Hidden Service","description":"This tuto is not finished ! Some data could leak with this setup like the main domain of your YunoHost, so it\'s not a \\"Hidden Service\\".","source":"@site/docs/03.administer/45.tutorials/40.torhiddenservice.md","sourceDirName":"03.administer/45.tutorials","slug":"/administer/tutorials/torhiddenservice","permalink":"/administer/tutorials/torhiddenservice","draft":false,"unlisted":false,"editUrl":"https://github.com/YunoHost/doc/tree/docusaurus/docs/03.administer/45.tutorials/40.torhiddenservice.md","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_label":"Configure Tor Hidden Service","title":"Using YunoHost as a Tor Hidden Service"},"sidebar":"docsSidebar","previous":{"title":"Configure SMTP relay","permalink":"/administer/tutorials/email_configure_relay"},"next":{"title":"Custom certificates","permalink":"/administer/tutorials/certificate_custom"}}');var o=n(4848),r=n(8453);const s={sidebar_label:"Configure Tor Hidden Service",title:"Using YunoHost as a Tor Hidden Service"},d=void 0,a={},c=[{value:"\xa0Installing Tor",id:"installing-tor",level:3},{value:"\xa0Configuring our hidden service",id:"configuring-our-hidden-service",level:3},{value:"\xa0Restart Tor",id:"restart-tor",level:3},{value:"Get your Tor Hidden Service hostname",id:"get-your-tor-hidden-service-hostname",level:3},{value:"Add the .onion domain to YunoHost",id:"add-the-onion-domain-to-yunohost",level:3},{value:"Avoid SSO redirection (optional)",id:"avoid-sso-redirection-optional",level:3},{value:"Restart NGINX",id:"restart-nginx",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsxs)(i.p,{children:['This tuto is not finished ! Some data could leak with this setup like the main domain of your YunoHost, so it\'s not a "Hidden Service".\nSee ',(0,o.jsx)(i.a,{href:"https://www.torproject.org/docs/tor-hidden-service.html.en",children:"The official Tor hidden service documentation"}),"."]})}),"\n",(0,o.jsx)(i.h3,{id:"installing-tor",children:"\xa0Installing Tor"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"apt install tor \n"})}),"\n",(0,o.jsx)(i.h3,{id:"configuring-our-hidden-service",children:"\xa0Configuring our hidden service"}),"\n",(0,o.jsxs)(i.p,{children:["Edit ",(0,o.jsx)(i.code,{children:"/etc/tor/torrc"}),", and add these lines:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-text",children:"HiddenServiceDir  /var/lib/tor/hidden_service/\nHiddenServicePort 80 127.0.0.1:80\nHiddenServicePort 443 127.0.0.1:443\n"})}),"\n",(0,o.jsx)(i.h3,{id:"restart-tor",children:"\xa0Restart Tor"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"service tor restart\n"})}),"\n",(0,o.jsx)(i.h3,{id:"get-your-tor-hidden-service-hostname",children:"Get your Tor Hidden Service hostname"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"cat /var/lib/tor/hidden_service/hostname\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Your domain looks like ",(0,o.jsx)(i.em,{children:"random123456789.onion"})]}),"\n",(0,o.jsx)(i.h3,{id:"add-the-onion-domain-to-yunohost",children:"Add the .onion domain to YunoHost"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"yunohost domain add random123456789.onion\n"})}),"\n",(0,o.jsx)(i.h3,{id:"avoid-sso-redirection-optional",children:"Avoid SSO redirection (optional)"}),"\n",(0,o.jsxs)(i.p,{children:["If you want to avoid being redirected to the SSO portal at login, you can deactivate SSOwat for this specific tor domain, by editing the file ",(0,o.jsx)(i.code,{children:"/etc/nginx/conf.d/random123456789.onion.conf"})," and commenting the following line (two times):"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-text",children:"#access_by_lua_file /usr/share/ssowat/access.lua;\n"})}),"\n",(0,o.jsx)(i.h3,{id:"restart-nginx",children:"Restart NGINX"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"service nginx restart\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>d});var t=n(6540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);