const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  query: `
    postBySlug(id: ID slug: String): Post
  `,
  resolver: {
    Query: {
      postBySlug: {
        resolverOf: 'Post.findOne',
        async resolver(_, {slug}) {
          const entity = await strapi.services.post.findOne({slug});
          return sanitizeEntity(entity, {model: strapi.models.post})
        }
      }
    }
  }
}
