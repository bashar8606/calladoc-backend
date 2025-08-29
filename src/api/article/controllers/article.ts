/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::article.article');


export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      // Use the slug to find the page
      const entity = await strapi.db.query('api::article.article').findOne({
        where: { slug },
        populate: {
            author: true,
            category: true,
            thumb: true,
            cover: true,
            blocks:{
                populate: {
                    file: true,
                    files: true
                }
            },
            seo:{
                populate: true
            }
        }
      });
  
      if (!entity) {
        return ctx.notFound();
      }
  
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  }));



