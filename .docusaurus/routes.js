import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/__docusaurus/debug',
    component: ComponentCreator('/fr/__docusaurus/debug', '40a'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/config',
    component: ComponentCreator('/fr/__docusaurus/debug/config', 'c9c'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/content',
    component: ComponentCreator('/fr/__docusaurus/debug/content', '525'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/globalData',
    component: ComponentCreator('/fr/__docusaurus/debug/globalData', '200'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/metadata',
    component: ComponentCreator('/fr/__docusaurus/debug/metadata', '9f0'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/registry',
    component: ComponentCreator('/fr/__docusaurus/debug/registry', '587'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/routes',
    component: ComponentCreator('/fr/__docusaurus/debug/routes', '41a'),
    exact: true
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', '0d4'),
    routes: [
      {
        path: '/fr/',
        component: ComponentCreator('/fr/', 'b71'),
        routes: [
          {
            path: '/fr/',
            component: ComponentCreator('/fr/', '08b'),
            routes: [
              {
                path: '/fr/administer/admin_guide/',
                component: ComponentCreator('/fr/administer/admin_guide/', '9fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/admin',
                component: ComponentCreator('/fr/administer/admin_guide/admin', 'b13'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/apps/',
                component: ComponentCreator('/fr/administer/admin_guide/apps/', '6a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/apps/custom_apps',
                component: ComponentCreator('/fr/administer/admin_guide/apps/custom_apps', '9a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/command_line',
                component: ComponentCreator('/fr/administer/admin_guide/command_line', 'fce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/domains/',
                component: ComponentCreator('/fr/administer/admin_guide/domains/', '02b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/domains/certificate',
                component: ComponentCreator('/fr/administer/admin_guide/domains/certificate', 'd25'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/email',
                component: ComponentCreator('/fr/administer/admin_guide/email', '00d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/guidelines',
                component: ComponentCreator('/fr/administer/admin_guide/guidelines', '9c4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/upgrade/',
                component: ComponentCreator('/fr/administer/admin_guide/upgrade/', 'ef9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/upgrade/bullseye_bookworm/',
                component: ComponentCreator('/fr/administer/admin_guide/upgrade/bullseye_bookworm/', '617'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/upgrade/bullseye_bookworm/issues_faq/',
                component: ComponentCreator('/fr/administer/admin_guide/upgrade/bullseye_bookworm/issues_faq/', 'c2b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/upgrade/buster_bullseye_migration',
                component: ComponentCreator('/fr/administer/admin_guide/upgrade/buster_bullseye_migration', '190'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/users/',
                component: ComponentCreator('/fr/administer/admin_guide/users/', '10b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/admin_guide/users/groups_and_permissions',
                component: ComponentCreator('/fr/administer/admin_guide/users/groups_and_permissions', '1b5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/',
                component: ComponentCreator('/fr/administer/backups/', '7be'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/avoid_hardware_failure',
                component: ComponentCreator('/fr/administer/backups/avoid_hardware_failure', '63a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/backup_methods',
                component: ComponentCreator('/fr/administer/backups/backup_methods', '6ea'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/clone_filesystem',
                component: ComponentCreator('/fr/administer/backups/clone_filesystem', '461'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/custom_backup_methods',
                component: ComponentCreator('/fr/administer/backups/custom_backup_methods', '85e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/evaluate',
                component: ComponentCreator('/fr/administer/backups/evaluate', '2e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/include_exclude_files',
                component: ComponentCreator('/fr/administer/backups/include_exclude_files', '4e0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/backups/migrate_or_merge_servers',
                component: ComponentCreator('/fr/administer/backups/migrate_or_merge_servers', '750'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/',
                component: ComponentCreator('/fr/administer/troubleshooting/', '5e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/blacklist_forms',
                component: ComponentCreator('/fr/administer/troubleshooting/blacklist_forms', '78c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/change_admin_password',
                component: ComponentCreator('/fr/administer/troubleshooting/change_admin_password', '65d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/cleanup',
                component: ComponentCreator('/fr/administer/troubleshooting/cleanup', '81c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/fail2ban',
                component: ComponentCreator('/fr/administer/troubleshooting/fail2ban', 'c95'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/ipv6',
                component: ComponentCreator('/fr/administer/troubleshooting/ipv6', 'bf3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/troubleshooting/noaccess',
                component: ComponentCreator('/fr/administer/troubleshooting/noaccess', '308'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/certificate_custom',
                component: ComponentCreator('/fr/administer/tutorials/certificate_custom', '17c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/domains/dns_dynamicip',
                component: ComponentCreator('/fr/administer/tutorials/domains/dns_dynamicip', '4d5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/domains/dns_local_network',
                component: ComponentCreator('/fr/administer/tutorials/domains/dns_local_network', 'ea9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/domains/dns_nohost_me',
                component: ComponentCreator('/fr/administer/tutorials/domains/dns_nohost_me', '986'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/domains/dns_subdomains',
                component: ComponentCreator('/fr/administer/tutorials/domains/dns_subdomains', '9b3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/email_configure_relay',
                component: ComponentCreator('/fr/administer/tutorials/email_configure_relay', 'cf2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/external_storage',
                component: ComponentCreator('/fr/administer/tutorials/external_storage', '70f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/filezilla',
                component: ComponentCreator('/fr/administer/tutorials/filezilla', '7f1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/moving_app_folder',
                component: ComponentCreator('/fr/administer/tutorials/moving_app_folder', 'b70'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/security',
                component: ComponentCreator('/fr/administer/tutorials/security', '0b1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/sftp_on_apps',
                component: ComponentCreator('/fr/administer/tutorials/sftp_on_apps', 'a86'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/theming',
                component: ComponentCreator('/fr/administer/tutorials/theming', 'eea'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/administer/tutorials/torhiddenservice',
                component: ComponentCreator('/fr/administer/tutorials/torhiddenservice', '16e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/administration-guide',
                component: ComponentCreator('/fr/category/administration-guide', 'c60'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/advanced',
                component: ComponentCreator('/fr/category/advanced', '93c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/backups',
                component: ComponentCreator('/fr/category/backups', 'ac9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/community',
                component: ComponentCreator('/fr/category/community', '17b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/domains',
                component: ComponentCreator('/fr/category/domains', '8c9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/misc-resources',
                component: ComponentCreator('/fr/category/misc-resources', 'efc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/overview',
                component: ComponentCreator('/fr/category/overview', '227'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/providers',
                component: ComponentCreator('/fr/category/providers', 'abc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/category/tutorials',
                component: ComponentCreator('/fr/category/tutorials', 'e7f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/asking_for_help_efficiently',
                component: ComponentCreator('/fr/community/asking_for_help_efficiently', '59d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/chat_rooms',
                component: ComponentCreator('/fr/community/chat_rooms', 'ed5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/chatons',
                component: ComponentCreator('/fr/community/chatons', '5cc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/faq',
                component: ComponentCreator('/fr/community/faq', '2a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/forum',
                component: ComponentCreator('/fr/community/forum', 'bff'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/help',
                component: ComponentCreator('/fr/community/help', '3ed'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/press_kit',
                component: ComponentCreator('/fr/community/press_kit', 'a9e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/project_budget',
                component: ComponentCreator('/fr/community/project_budget', '863'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/security_team',
                component: ComponentCreator('/fr/community/security_team', '184'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/sponsors_partners',
                component: ComponentCreator('/fr/community/sponsors_partners', '124'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/terms_of_services',
                component: ComponentCreator('/fr/community/terms_of_services', 'f57'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/community/yunohost_project_organization',
                component: ComponentCreator('/fr/community/yunohost_project_organization', '107'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/',
                component: ComponentCreator('/fr/contribute/', '480'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/dev/',
                component: ComponentCreator('/fr/contribute/dev/', '744'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/dev/forms',
                component: ComponentCreator('/fr/contribute/dev/forms', '821'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/dev/maindomain',
                component: ComponentCreator('/fr/contribute/dev/maindomain', '09e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/',
                component: ComponentCreator('/fr/contribute/packaging_apps/', '4cc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/advanced/advanced_packagers',
                component: ComponentCreator('/fr/contribute/packaging_apps/advanced/advanced_packagers', '58e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/advanced/config_panels',
                component: ComponentCreator('/fr/contribute/packaging_apps/advanced/config_panels', '2d5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/advanced/packaging_apps_hooks',
                component: ComponentCreator('/fr/contribute/packaging_apps/advanced/packaging_apps_hooks', 'b27'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/advanced/packaging_v2',
                component: ComponentCreator('/fr/contribute/packaging_apps/advanced/packaging_v2', '72a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/advanced/sso_ldap_integration',
                component: ComponentCreator('/fr/contribute/packaging_apps/advanced/sso_ldap_integration', '089'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/doc',
                component: ComponentCreator('/fr/contribute/packaging_apps/doc', '7dd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/manifest/',
                component: ComponentCreator('/fr/contribute/packaging_apps/manifest/', '293'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/manifest/app_resources',
                component: ComponentCreator('/fr/contribute/packaging_apps/manifest/app_resources', '49c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/policy',
                component: ComponentCreator('/fr/contribute/packaging_apps/policy', '6f3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/publishing',
                component: ComponentCreator('/fr/contribute/packaging_apps/publishing', '380'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/resources/packaging_apps_git',
                component: ComponentCreator('/fr/contribute/packaging_apps/resources/packaging_apps_git', 'd34'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/resources/packaging_apps_virtualbox',
                component: ComponentCreator('/fr/contribute/packaging_apps/resources/packaging_apps_virtualbox', '7da'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/scripts/',
                component: ComponentCreator('/fr/contribute/packaging_apps/scripts/', 'f07'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/scripts/packaging_app_scripts_helpers',
                component: ComponentCreator('/fr/contribute/packaging_apps/scripts/packaging_app_scripts_helpers', '3ed'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/scripts/packaging_app_scripts_helpers_v21',
                component: ComponentCreator('/fr/contribute/packaging_apps/scripts/packaging_app_scripts_helpers_v21', '08a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/scripts/shell_variables_scope',
                component: ComponentCreator('/fr/contribute/packaging_apps/scripts/shell_variables_scope', 'd49'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/packaging_apps/testing',
                component: ComponentCreator('/fr/contribute/packaging_apps/testing', 'ef6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/write_documentation/',
                component: ComponentCreator('/fr/contribute/write_documentation/', 'c1e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/write_documentation/apps_documentation',
                component: ComponentCreator('/fr/contribute/write_documentation/apps_documentation', '2c8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/write_documentation/git',
                component: ComponentCreator('/fr/contribute/write_documentation/git', '348'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/contribute/write_documentation/markdown_guide',
                component: ComponentCreator('/fr/contribute/write_documentation/markdown_guide', '1c1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/',
                component: ComponentCreator('/fr/install/', '48c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/isp/',
                component: ComponentCreator('/fr/install/providers/isp/', 'b8b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/registrar/',
                component: ComponentCreator('/fr/install/providers/registrar/', 'f05'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/registrar/gandi',
                component: ComponentCreator('/fr/install/providers/registrar/gandi', '93e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/registrar/namecheap',
                component: ComponentCreator('/fr/install/providers/registrar/namecheap', '628'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/registrar/ovh/autodns',
                component: ComponentCreator('/fr/install/providers/registrar/ovh/autodns', '47d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/registrar/ovh/manualdns',
                component: ComponentCreator('/fr/install/providers/registrar/ovh/manualdns', 'ce5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/servers',
                component: ComponentCreator('/fr/install/providers/servers', 'fca'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/vpn/',
                component: ComponentCreator('/fr/install/providers/vpn/', '6fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/install/providers/vpn/vpn_advantage',
                component: ComponentCreator('/fr/install/providers/vpn/vpn_advantage', 'da0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/overview/self_hosting',
                component: ComponentCreator('/fr/overview/self_hosting', 'b25'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/overview/try_yunohost',
                component: ComponentCreator('/fr/overview/try_yunohost', '39e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/overview/what_is_yunohost',
                component: ComponentCreator('/fr/overview/what_is_yunohost', 'cbc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/user_guide/',
                component: ComponentCreator('/fr/user_guide/', '77c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/user_guide/email_configure_client',
                component: ComponentCreator('/fr/user_guide/email_configure_client', '671'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/user_guide/email_migration',
                component: ComponentCreator('/fr/user_guide/email_migration', '182'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/fr/',
                component: ComponentCreator('/fr/', 'cf4'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
