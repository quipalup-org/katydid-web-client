import React from 'react';
import { MLabel, MIcon } from '~/@material-extend';
import { PATH_APP, PATH_PAGE } from '~/routes/paths';

// ----------------------------------------------------------------------

const path = name => `/static/icons/navbar/${name}.svg`;

const ICONS = {
  authenticator: <MIcon src={path('ic_authenticator')} />,
  blog: <MIcon src={path('ic_blog')} />,
  calendar: <MIcon src={path('ic_calendar')} />,
  cart: <MIcon src={path('ic_cart')} />,
  charts: <MIcon src={path('ic_charts')} />,
  chat: <MIcon src={path('ic_chat')} />,
  components: <MIcon src={path('ic_components')} />,
  dashboard: <MIcon src={path('ic_dashboard')} />,
  editor: <MIcon src={path('ic_editor')} />,
  elements: <MIcon src={path('ic_elements')} />,
  error: <MIcon src={path('ic_error')} />,
  mail: <MIcon src={path('ic_mail')} />,
  map: <MIcon src={path('ic_map')} />,
  page: <MIcon src={path('ic_page')} />,
  user: <MIcon src={path('ic_user')} />,
  upload: <MIcon src={path('ic_upload')} />,
  copy: <MIcon src={path('ic_copy')} />,
  carousel: <MIcon src={path('ic_carousel')} />,
  language: <MIcon src={path('ic_language')} />
};

export default [
  // Kids
  // ----------------------------------------------------------------------
  {
    subheader: 'Kids',
    items: [
      {
        title: 'today',
        icon: ICONS.user,
        href: PATH_APP.management.user.children,
        items: [
          {
            title: 'children',
            href: PATH_APP.management.user.children
          },
        ]
      }
    ]
  },


  // MAIN DASHBOARD
  // ----------------------------------------------------------------------
  {
    subheader: 'Overview',
    items: [
      {
        title: 'dashboard',
        icon: ICONS.dashboard,
        href: PATH_APP.main.root,
        items: [
          {
            title: 'This week report',
            href: PATH_APP.main.root
          }
        ]
      }
    ]
  }
];
