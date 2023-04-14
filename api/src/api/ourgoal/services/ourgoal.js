'use strict';

/**
 * ourgoal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ourgoal.ourgoal');
