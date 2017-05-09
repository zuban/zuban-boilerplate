/**
 * Created by sergeyzubov on 26/02/2017.
 */
import BaseService from './baseService';

const service = new BaseService();

// singleton
export const Service = () => service;
