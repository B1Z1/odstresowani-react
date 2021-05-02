const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  query: `
    categoryBySlug(id: ID slug: String locale: String): Category
  `,
  resolver: {
    Query: {
      categoryBySlug: {
        resolverOf: 'Category.findOne',
        async resolver(_, {slug, locale}) {
          const entity = await strapi.query('category').findOne({locale, slug});
          console.log(entity);
          return sanitizeEntity(entity, {model: strapi.models.category})
        }
      }
    }
  }
}
