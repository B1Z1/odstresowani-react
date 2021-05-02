const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  query: `
    postBySlug(id: ID slug: String locale: String): Post
  `,
  resolver: {
    Query: {
      postBySlug: {
        resolverOf: 'Post.findOne',
        async resolver(_, {slug, locale}) {
          const entity = await strapi.query('post').findOne({locale, slug});
          return sanitizeEntity(entity, {model: strapi.models.post})
        }
      }
    }
  }
}
