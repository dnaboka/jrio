/*
 * Copyright (C) 2005 - 2018 TIBCO Software Inc. All rights reserved.
 * http://www.jaspersoft.com.
 *
 * Unless you have purchased  a commercial license agreement from Jaspersoft,
 * the following license terms  apply:
 *
 * This program is free software: you can redistribute it and/or  modify
 * it under the terms of the GNU Affero General Public License  as
 * published by the Free Software Foundation, either version 3 of  the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero  General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public  License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * @author: Pavel Savushchyk
 * @version: $Id: loggingLevels.js 4602 2018-02-20 13:51:58Z dgorbenk $
 */

(function (factory, global) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        global.logging || (global.logging = {});
        global.logging.loggingLevels = factory();
    }
}(function () {
    return {
        DEBUG: 100,
        INFO:  200,
        WARN:  300,
        ERROR: 400
    };
}, this));