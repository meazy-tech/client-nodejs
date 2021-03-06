/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BaseCurrency
 */
class BaseCurrency extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.code = this.constructor.getValue(obj.code);
        this.name = this.constructor.getValue(obj.name);
        this.decimal_points = this.constructor.getValue(obj.decimal_points);
        this.symbol = this.constructor.getValue(obj.symbol);
        this.active_flag = this.constructor.getValue(obj.active_flag);
        this.is_custom_flag = this.constructor.getValue(obj.is_custom_flag);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'code', realName: 'code' },
            { name: 'name', realName: 'name' },
            { name: 'decimal_points', realName: 'decimal_points' },
            { name: 'symbol', realName: 'symbol' },
            { name: 'active_flag', realName: 'active_flag' },
            { name: 'is_custom_flag', realName: 'is_custom_flag' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = BaseCurrency;
