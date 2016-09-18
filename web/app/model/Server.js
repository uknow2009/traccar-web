/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.model.Server', {
    extend: 'Ext.data.Model',
    identifier: 'negative',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'registration',
        type: 'boolean'
    }, {
        name: 'readonly',
        type: 'boolean'
    }, {
        name: 'map',
        type: 'string'
    }, {
        name: 'bingKey',
        type: 'string'
    }, {
        name: 'mapUrl',
        type: 'string'
    }, {
        name: 'distanceUnit',
        type: 'string'
    }, {
        name: 'speedUnit',
        type: 'string'
    }, {
        name: 'latitude',
        type: 'float'
    }, {
        name: 'longitude',
        type: 'float'
    }, {
        name: 'zoom',
        type: 'int'
    }, {
        name: 'twelveHourFormat',
        type: 'boolean'
    }, {
        name: 'attributes'
    }],

    proxy: {
        type: 'ajax',
        url: 'api/server',
        actionMethods: {
            update: 'PUT'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});
