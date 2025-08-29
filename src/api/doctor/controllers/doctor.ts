/**
 * doctor controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::doctor.doctor');


export default factories.createCoreController('api::doctor.doctor', ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      // Use the slug to find the page
      const entity = await strapi.db.query('api::doctor.doctor').findOne({
        where: { slug },
        populate: {
            languages: true,
            category: true,
            img: true,
            qualifications: true,
            expertise: true,
            specializations: true,
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


