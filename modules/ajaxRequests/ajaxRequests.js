/**
 * Analyzes AJAX requests
 */
/* global window: true */
'use strict';

module.exports = function(phantomas) {
	phantomas.setMetric('ajaxRequests'); // @desc number of AJAX requests @offenders
};
