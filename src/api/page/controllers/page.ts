/**
 * page controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::page.page');

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      // Use the slug to find the page
      const entity = await strapi.db.query('api::page.page').findOne({
        where: { slug },
        populate: {
            author: true,
            category: true,
            thumb: true,
            cover: true,
            widgets:{
                populate: {
                    cover: true,
                    img: true,
                    link:true,
                    items: {
                        populate:{
                            cover: true,
                            img: true,
                            items: {
                              populate:{
                                  cover: true,
                                  img: true
                              }
                          },
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
