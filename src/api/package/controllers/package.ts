/**
 * package controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::package.package');


export default factories.createCoreController('api::package.package', ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      // Use the slug to find the page
      const entity = await strapi.db.query('api::package.package').findOne({
        where: { slug },
        populate: {
            widgets:{
                populate: {
                    cover: true,
                    items: {
                        populate:{
                            cover: true,
                            img: true,
                            items:true
                        }
                      
                    },
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
