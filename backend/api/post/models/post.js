'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title && data.slug === '') {
        data.slug = slugify(data.title.toLowerCase());
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title && data.slug === '') {
        data.slug = slugify(data.title.toLowerCase());
      }
    },
  }
};
