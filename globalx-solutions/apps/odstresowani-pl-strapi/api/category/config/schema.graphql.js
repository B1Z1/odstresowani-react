const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  query: `
    categoryBySlug(id: ID slug: String): Category
  `,
  resolver: {
    Query: {
      categoryBySlug: {
        resolverOf: 'Category.findOne',
        async resolver(_, {slug}) {
          const entity = await strapi.services.category.findOne({slug});
          console.log(entity);
          return sanitizeEntity(entity, {model: strapi.models.category})
        }
      }
    }
  }
}
