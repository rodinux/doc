"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2693],{8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(6540);const o={},n=r.createContext(o);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:s},e.children)}},9706:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"administer/tutorials/sftp_on_apps","title":"Give SFTP permission to edit an app","description":"In YunoHost permission management web admin interface, you can specify which user can access your system through SFTP.","source":"@site/docs/03.administer/45.tutorials/65.sftp_on_apps.md","sourceDirName":"03.administer/45.tutorials","slug":"/administer/tutorials/sftp_on_apps","permalink":"/administer/tutorials/sftp_on_apps","draft":false,"unlisted":false,"editUrl":"https://github.com/YunoHost/doc/tree/docusaurus/docs/03.administer/45.tutorials/65.sftp_on_apps.md","tags":[],"version":"current","sidebarPosition":65,"frontMatter":{"sidebar_label":"Access apps via SFTP","title":"Give SFTP permission to edit an app"},"sidebar":"docsSidebar","previous":{"title":"Security","permalink":"/administer/tutorials/security"},"next":{"title":"Troubleshooting","permalink":"/administer/troubleshooting/"}}');var o=t(4848),n=t(8453);const i={sidebar_label:"Access apps via SFTP",title:"Give SFTP permission to edit an app"},a=void 0,p={},c=[];function d(e){const s={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"In YunoHost permission management web admin interface, you can specify which user can access your system through SFTP."}),"\n",(0,o.jsx)(s.p,{children:"However, those user are chrooted in their home directory for security reasons."}),"\n",(0,o.jsx)(s.p,{children:"If you want to give access to a specific apps through SFTP, here are additional steps to do after giving the SFTP permission in the web interface."}),"\n",(0,o.jsx)(s.p,{children:"In instructions below, USER is the user to whom you wish to give permission to edit wordpress files."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'mkdir -p /home/USER/apps/wordpress\ntouch /home/USER/.nobackup\nmount --bind /var/www/wordpress /home/USER/apps/wordpress\necho "/var/www/wordpress /home/USER/apps/wordpress none defaults,bind 0 0" >> /etc/fstab\nfind /var/www/wordpress -type d -exec chmod g+s {} \\;\n\nsetfacl -R -m u:wordpress:rwX /var/www/wordpress\nsetfacl -R -d -m u:wordpress:rwX /var/www/wordpress\nsetfacl -m u:wordpress:r-- /var/www/wordpress/wp-config.php\n\nsetfacl -R -m u:USER:rwX /var/www/wordpress\nsetfacl -R -d -m u:USER:rwX /var/www/wordpress\n'})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);