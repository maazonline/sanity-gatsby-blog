export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8e7f01c226e05831ef8f8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5mvm7dzw',
                  apiId: '0e34faea-722e-4745-8f40-d28fc857d0e9'
                },
                {
                  buildHookId: '5e8e7f01bb16326a1a08e43e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-43jq4fqg',
                  apiId: 'c7b5bdc7-d05f-4905-9c84-e8fac2161bf3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maazonline/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-43jq4fqg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
