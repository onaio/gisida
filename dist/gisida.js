(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum__ = __webpack_require__(23);
/* @flow */



/**
 * The mean, _also known as average_,
 * is the sum of all values over the number of values.
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @throws {Error} if the the length of x is less than one
 * @returns {number} mean
 * @example
 * mean([0, 10]); // => 5
 */
function mean(x /*: Array<number> */)/*: number */ {
    // The mean of no numbers is null
    if (x.length === 0) {
        throw new Error('mean requires at least one data point');
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0__sum__["a" /* default */])(x) / x.length;
}

/* harmony default export */ __webpack_exports__["a"] = (mean);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * We use `ε`, epsilon, as a stopping criterion when we want to iterate
 * until we're "close enough". Epsilon is a very small number: for
 * simple statistics, that number is **0.0001**
 *
 * This is used in calculations like the binomialDistribution, in which
 * the process of finding a value is [iterative](https://en.wikipedia.org/wiki/Iterative_method):
 * it progresses until it is close enough.
 *
 * Below is an example of using epsilon in [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent),
 * where we're trying to find a local minimum of a function's derivative,
 * given by the `fDerivative` method.
 *
 * @example
 * // From calculation, we expect that the local minimum occurs at x=9/4
 * var x_old = 0;
 * // The algorithm starts at x=6
 * var x_new = 6;
 * var stepSize = 0.01;
 *
 * function fDerivative(x) {
 *   return 4 * Math.pow(x, 3) - 9 * Math.pow(x, 2);
 * }
 *
 * // The loop runs until the difference between the previous
 * // value and the current value is smaller than epsilon - a rough
 * // meaure of 'close enough'
 * while (Math.abs(x_new - x_old) > ss.epsilon) {
 *   x_old = x_new;
 *   x_new = x_old - stepSize * fDerivative(x_old);
 * }
 *
 * console.log('Local minimum occurs at', x_new);
 */
var epsilon = 0.0001;

/* harmony default export */ __webpack_exports__["a"] = (epsilon);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initApp = exports.initApp = function initApp(config) {
  return {
    type: 'INIT_APP',
    config: config
  };
};

var initStyles = exports.initStyles = function initStyles(styles, mapConfig) {
  return {
    type: 'INIT_STYLES',
    styles: styles,
    mapConfig: mapConfig
  };
};

var initRegions = exports.initRegions = function initRegions(regions, mapConfig) {
  return {
    type: 'INIT_REGIONS',
    regions: regions,
    mapConfig: mapConfig
  };
};

var addLayer = exports.addLayer = function addLayer(layer) {
  return {
    type: 'ADD_LAYER',
    layer: layer
  };
};

var changeRegion = exports.changeRegion = function changeRegion(region) {
  return {
    type: 'CHANGE_REGION',
    region: region
  };
};

var changeStyle = exports.changeStyle = function changeStyle(style) {
  return {
    type: 'CHANGE_STYLE',
    style: style
  };
};

var toggleLayer = exports.toggleLayer = function toggleLayer(layerId) {
  return {
    type: 'TOGGLE_LAYER',
    layerId: layerId
  };
};

var requestData = exports.requestData = function requestData(layerId) {
  return {
    type: 'REQUEST_DATA',
    layerId: layerId
  };
};

var receiveData = exports.receiveData = function receiveData(layer) {
  return {
    type: 'RECEIVE_DATA',
    layer: layer
  };
};

var mapLoaded = exports.mapLoaded = function mapLoaded(isLoaded) {
  return {
    type: 'IS_LOADED',
    isLoaded: isLoaded
  };
};

exports.default = {
  initApp: initApp,
  initStyles: initStyles,
  initRegions: initRegions,
  addLayer: addLayer,
  toggleLayer: toggleLayer,
  requestData: requestData,
  receiveData: receiveData,
  mapLoaded: mapLoaded,
  changeRegion: changeRegion,
  changeStyle: changeStyle
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* @flow */



/**
 * The sum of deviations to the Nth power.
 * When n=2 it's the sum of squared deviations.
 * When n=3 it's the sum of cubed deviations.
 *
 * @param {Array<number>} x
 * @param {number} n power
 * @returns {number} sum of nth power deviations
 *
 * @example
 * var input = [1, 2, 3];
 * // since the variance of a set is the mean squared
 * // deviations, we can calculate that with sumNthPowerDeviations:
 * sumNthPowerDeviations(input, 2) / input.length;
 */
function sumNthPowerDeviations(x/*: Array<number> */, n/*: number */)/*: number */ {
    var meanValue = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(x),
        sum = 0,
        tempValue,
        i;

    // This is an optimization: when n is 2 (we're computing a number squared),
    // multiplying the number by itself is significantly faster than using
    // the Math.pow method.
    if (n === 2) {
        for (i = 0; i < x.length; i++) {
            tempValue = x[i] - meanValue;
            sum += tempValue * tempValue;
        }
    } else {
        for (i = 0; i < x.length; i++) {
            sum += Math.pow(x[i] - meanValue, n);
        }
    }

    return sum;
}

/* harmony default export */ __webpack_exports__["a"] = (sumNthPowerDeviations);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Sort an array of numbers by their numeric value, ensuring that the
 * array is not changed in place.
 *
 * This is necessary because the default behavior of .sort
 * in JavaScript is to sort arrays as string values
 *
 *     [1, 10, 12, 102, 20].sort()
 *     // output
 *     [1, 10, 102, 12, 20]
 *
 * @param {Array<number>} x input array
 * @return {Array<number>} sorted array
 * @private
 * @example
 * numericSort([3, 2, 1]) // => [1, 2, 3]
 */
function numericSort(x /*: Array<number> */) /*: Array<number> */ {
    return x
        // ensure the array is not changed in-place
        .slice()
        // comparator function that treats input as numeric
        .sort(function(a, b) {
            return a - b;
        });
}

/* harmony default export */ __webpack_exports__["a"] = (numericSort);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quantile_sorted__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quickselect__ = __webpack_require__(27);
/* @flow */




/**
 * The [quantile](https://en.wikipedia.org/wiki/Quantile):
 * this is a population quantile, since we assume to know the entire
 * dataset in this library. This is an implementation of the
 * [Quantiles of a Population](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population)
 * algorithm from wikipedia.
 *
 * Sample is a one-dimensional array of numbers,
 * and p is either a decimal number from 0 to 1 or an array of decimal
 * numbers from 0 to 1.
 * In terms of a k/q quantile, p = k/q - it's just dealing with fractions or dealing
 * with decimal values.
 * When p is an array, the result of the function is also an array containing the appropriate
 * quantiles in input order
 *
 * @param {Array<number>} x sample of one or more numbers
 * @param {Array<number> | number} p the desired quantile, as a number between 0 and 1
 * @returns {number} quantile
 * @example
 * quantile([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20], 0.5); // => 9
 */
function quantile(x/*: Array<number> */, p/*: Array<number> | number */)/*: Array<number> | number */ {
    var copy = x.slice();

    if (Array.isArray(p)) {
        // rearrange elements so that each element corresponding to a requested
        // quantile is on a place it would be if the array was fully sorted
        multiQuantileSelect(copy, p);
        // Initialize the result array
        var results = [];
        // For each requested quantile
        for (var i = 0; i < p.length; i++) {
            results[i] = Object(__WEBPACK_IMPORTED_MODULE_0__quantile_sorted__["a" /* default */])(copy, p[i]);
        }
        return results;
    } else {
        var idx = quantileIndex(copy.length, p);
        quantileSelect(copy, idx, 0, copy.length - 1);
        return Object(__WEBPACK_IMPORTED_MODULE_0__quantile_sorted__["a" /* default */])(copy, p);
    }
}

function quantileSelect(arr, k, left, right) {
    if (k % 1 === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_1__quickselect__["a" /* default */])(arr, k, left, right);
    } else {
        k = Math.floor(k);
        Object(__WEBPACK_IMPORTED_MODULE_1__quickselect__["a" /* default */])(arr, k, left, right);
        Object(__WEBPACK_IMPORTED_MODULE_1__quickselect__["a" /* default */])(arr, k + 1, k + 1, right);
    }
}

function multiQuantileSelect(arr, p) {
    var indices = [0];
    for (var i = 0; i < p.length; i++) {
        indices.push(quantileIndex(arr.length, p[i]));
    }
    indices.push(arr.length - 1);
    indices.sort(compare);

    var stack = [0, indices.length - 1];

    while (stack.length) {
        var r = Math.ceil(stack.pop());
        var l = Math.floor(stack.pop());
        if (r - l <= 1) continue;

        var m = Math.floor((l + r) / 2);
        quantileSelect(arr, indices[m], indices[l], indices[r]);

        stack.push(l, m, m, r);
    }
}

function compare(a, b) {
    return a - b;
}

function quantileIndex(len /*: number */, p /*: number */)/*:number*/ {
    var idx = len * p;
    if (p === 1) {
        // If p is 1, directly return the last index
        return len - 1;
    } else if (p === 0) {
        // If p is 0, directly return the first index
        return 0;
    } else if (idx % 1 !== 0) {
        // If index is not integer, return the next index in array
        return Math.ceil(idx) - 1;
    } else if (len % 2 === 0) {
        // If the list has even-length, we'll return the middle of two indices
        // around quantile to indicate that we need an average value of the two
        return idx - 0.5;
    } else {
        // Finally, in the simple case of an integer index
        // with an odd-length list, return the index
        return idx;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (quantile);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * This is the internal implementation of quantiles: when you know
 * that the order is sorted, you don't need to re-sort it, and the computations
 * are faster.
 *
 * @param {Array<number>} x sample of one or more data points
 * @param {number} p desired quantile: a number between 0 to 1, inclusive
 * @returns {number} quantile value
 * @throws {Error} if p ix outside of the range from 0 to 1
 * @throws {Error} if x is empty
 * @example
 * quantileSorted([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20], 0.5); // => 9
 */
function quantileSorted(x /*: Array<number> */, p /*: number */)/*: number */ {
    var idx = x.length * p;
    if (x.length === 0) {
        throw new Error('quantile requires at least one data point.');
    } else if (p < 0 || p > 1) {
        throw new Error('quantiles must be between 0 and 1');
    } else if (p === 1) {
        // If p is 1, directly return the last element
        return x[x.length - 1];
    } else if (p === 0) {
        // If p is 0, directly return the first element
        return x[0];
    } else if (idx % 1 !== 0) {
        // If p is not integer, return the next element in array
        return x[Math.ceil(idx) - 1];
    } else if (x.length % 2 === 0) {
        // If the list has even-length, we'll take the average of this number
        // and the next value, if there is one
        return (x[idx - 1] + x[idx]) / 2;
    } else {
        // Finally, in the simple case of an integer value
        // with an odd-length list, return the x value at the index.
        return x[idx];
    }
}

/* harmony default export */ __webpack_exports__["a"] = (quantileSorted);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_variance__ = __webpack_require__(8);
/* @flow */



/**
 * The [sample standard deviation](http://en.wikipedia.org/wiki/Standard_deviation#Sample_standard_deviation)
 * is the square root of the sample variance.
 *
 * @param {Array<number>} x input array
 * @returns {number} sample standard deviation
 * @example
 * sampleStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9]).toFixed(2);
 * // => '2.14'
 */
function sampleStandardDeviation(x/*:Array<number>*/)/*:number*/ {
    // The standard deviation of no numbers is null
    var sampleVarianceX = Object(__WEBPACK_IMPORTED_MODULE_0__sample_variance__["a" /* default */])(x);
    return Math.sqrt(sampleVarianceX);
}

/* harmony default export */ __webpack_exports__["a"] = (sampleStandardDeviation);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum_nth_power_deviations__ = __webpack_require__(3);
/* @flow */



/**
 * The [sample variance](https://en.wikipedia.org/wiki/Variance#Sample_variance)
 * is the sum of squared deviations from the mean. The sample variance
 * is distinguished from the variance by the usage of [Bessel's Correction](https://en.wikipedia.org/wiki/Bessel's_correction):
 * instead of dividing the sum of squared deviations by the length of the input,
 * it is divided by the length minus one. This corrects the bias in estimating
 * a value from a set that you don't know if full.
 *
 * References:
 * * [Wolfram MathWorld on Sample Variance](http://mathworld.wolfram.com/SampleVariance.html)
 *
 * @param {Array<number>} x a sample of two or more data points
 * @throws {Error} if the length of x is less than 2
 * @return {number} sample variance
 * @example
 * sampleVariance([1, 2, 3, 4, 5]); // => 2.5
 */
function sampleVariance(x /*: Array<number> */)/*:number*/ {
    // The variance of no numbers is null
    if (x.length < 2) {
        throw new Error('sampleVariance requires at least two data points');
    }

    var sumSquaredDeviationsValue = Object(__WEBPACK_IMPORTED_MODULE_0__sum_nth_power_deviations__["a" /* default */])(x, 2);

    // this is Bessels' Correction: an adjustment made to sample statistics
    // that allows for the reduced degree of freedom entailed in calculating
    // values from samples rather than complete populations.
    var besselsCorrection = x.length - 1;

    // Find the mean value of that list
    return sumSquaredDeviationsValue / besselsCorrection;
}

/* harmony default export */ __webpack_exports__["a"] = (sampleVariance);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(51);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(45);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaultState = __webpack_require__(59);

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function APP() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState2.default.APP;
  var action = arguments[1];

  switch (action.type) {
    case 'INIT_APP':
      return _extends({}, state, action.config);
    default:
      return state;
  }
}

function STYLES() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState2.default.STYLES;
  var action = arguments[1];

  switch (action.type) {
    case 'INIT_STYLES':
      {
        var styles = action.styles.map(function (s) {
          var style = s;
          if (style.style === action.mapConfig.style) style.current = true;
          return style;
        });
        return styles;
      }
    case 'CHANGE_STYLE':
      {
        var updatedStyles = state.map(function (s) {
          var style = s;
          if (action.style === style.style) {
            style.current = true;
          } else style.current = false;
          return style;
        });
        return updatedStyles;
      }
    default:
      return state;
  }
}

function LAYERS() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState2.default.LAYERS;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_LAYER':
      {
        var updatedState = {};
        updatedState[action.layer.id] = action.layer;
        return _extends({}, state, updatedState);
      }
    case 'TOGGLE_LAYER':
      {
        var layerId = action.layerId;

        var layer = state[layerId];
        return _extends({}, state, _defineProperty({}, layerId, _extends({}, layer, {
          visible: !layer.visible
        })));
      }
    case 'REQUEST_DATA':
      {
        var _layerId = action.layerId;

        var _layer = state[_layerId];
        return _extends({}, state, _defineProperty({}, _layerId, _extends({}, _layer, {
          isLoading: true,
          loaded: false
        })));
      }
    case 'RECEIVE_DATA':
      {
        var _layer2 = action.layer;

        var oldLayer = state[_layer2.id];
        return _extends({}, state, _defineProperty({}, _layer2.id, _extends({}, oldLayer, {
          source: _layer2.source,
          labels: _layer2.labels,
          isLoading: false,
          loaded: true
        })));
      }
    default:
      return state;
  }
}

function REGIONS() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState2.default.REGIONS;
  var action = arguments[1];

  switch (action.type) {
    case 'INIT_REGIONS':
      {
        var regions = action.regions.map(function (r) {
          var region = r;
          if (region.center[0] === action.mapConfig.center[0] && region.center[1] === action.mapConfig.center[1]) {
            region.current = true;
          }
          return region;
        });
        return regions;
      }
    case 'CHANGE_REGION':
      {
        var updatedRegions = state.map(function (r) {
          var region = r;
          if (action.region === region.name) {
            region.current = true;
          } else region.current = false;
          return region;
        });
        return updatedRegions;
      }
    default:
      return state;
  }
}

function MAP() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState2.default.MAP;
  var action = arguments[1];

  var activeLayers = void 0;
  var activeLayerKeys = void 0;
  var processedLayers = void 0;
  var layersToRemove = void 0;
  var layersToAdd = void 0;

  switch (action.type) {
    case 'IS_LOADED':
      return _extends({}, state, {
        isLoaded: true
      });
    case 'ADD_LAYERS':
      processedLayers = _extends({}, state.processedLayers);
      activeLayers = _extends({}, state.activeLayers);
      layersToAdd = [];

      action.layers.forEach(function (l) {
        processedLayers[l.id] = l;
        if (!Object.keys(activeLayers).includes(l.id)) {
          layersToAdd.push(l.id);
        }
        activeLayers[l.id] = l;
      });
      return _extends({}, state, {
        processedLayers: processedLayers,
        activeLayers: activeLayers,
        layersToAdd: layersToAdd
      });
    case 'REMOVE_LAYERS':
      activeLayerKeys = Object.keys(state.activeLayers);
      activeLayers = {};
      layersToRemove = [];

      activeLayerKeys.forEach(function (l) {
        if (!action.layers.includes(l)) {
          activeLayers[l] = _extends({}, state.activeLayers[l]);
        } else {
          layersToRemove.push(l);
        }
      });

      return _extends({}, state, {
        activeLayers: activeLayers,
        layersToRemove: layersToRemove
      });
    case 'LAYERS_REMOVED':
      return _extends({}, state, {
        layersToRemove: []
      });
    case 'LAYERS_ADDED':
      return _extends({}, state, {
        layersToAdd: []
      });
    default:
      return state;
  }
}

exports.default = {
  APP: APP, LAYERS: LAYERS, STYLES: STYLES, MAP: MAP, REGIONS: REGIONS
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadJSON = loadJSON;
exports.loadCSV = loadCSV;

var _papaparse = __webpack_require__(60);

function fetchURL(path, mimeType, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType(mimeType);
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function loadJSON(path, callback) {
  fetchURL(path, 'application/json', function (response) {
    try {
      callback(JSON.parse(response));
    } catch (e) {
      console.error('Error loading ' + path + ' (' + e + ')');
    }
  });
}

function loadCSV(path, callback) {
  fetchURL(path, 'text/csv', function (response) {
    try {
      callback((0, _papaparse.parse)(response, { header: true }).data);
    } catch (e) {
      console.error('Error loading ' + path + ' (' + e + ')');
    }
  });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = prepareLayer;

var _aggregateData = __webpack_require__(61);

var _aggregateData2 = _interopRequireDefault(_aggregateData);

var _fetchFormData = __webpack_require__(62);

var _fetchFormData2 = _interopRequireDefault(_fetchFormData);

var _files = __webpack_require__(17);

var _filters = __webpack_require__(19);

var _Actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Proceses MapSpec and adds it to state.
* */
function prepareLayer(layerSpec, dispatch) {
  var _this = this;

  var filterOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // Sets state to loading;
  dispatch((0, _Actions.requestData)(layerSpec.id));

  var processedLayer = _extends({}, layerSpec);

  // if (layerSpec.popup && layerSpec.type !== 'chart') {
  //   this.activeLayers.push(layerSpec.id);
  // }

  function renderData(spec) {
    if (!spec.labels) {
      dispatch((0, _Actions.receiveData)(spec));
    } else {
      (0, _files.loadCSV)(spec.labels.data, function (labels) {
        spec.labels.data = labels;
        dispatch((0, _Actions.receiveData)(spec));
      });
    }
  }

  function readData(spec, source) {
    var layer = _extends({}, spec);
    var fileType = source.split('.').pop();
    if (fileType === 'csv') {
      (0, _files.loadCSV)(spec.source.data, function (data) {
        layer.source.data = data;
        layer.mergedData = data;
        if (spec.aggregate && spec.aggregate.filter) {
          (0, _filters.generateFilterOptions)(spec);
        }
        renderData(layer);
      });
    }
    if (fileType === 'geojson') {
      (0, _files.loadJSON)(spec.source.data, function (data) {
        layer.source.data = data;
        renderData(layer);
      });
    }
  }

  // if layer has source
  if (layerSpec.source) {
    // if not processed, grab the csv or geojson data
    if (typeof layerSpec.source.data === 'string') {
      readData(layerSpec, layerSpec.source.data);
    } else if (layerSpec.source.data instanceof Array && !(layerSpec.source.data[0] instanceof Object) && layerSpec.source.data.length >= 1 && !layerSpec.loaded) {
      var q = d3.queue();
      var filePaths = layerSpec.source.data;
      filePaths.forEach(function (filePath) {
        if (Number.isInteger(filePath)) {
          q = q.defer(_fetchFormData2.default, filePath, layerSpec.properties);
        } else q = q.defer(d3.csv, filePath);
      });
      q.awaitAll(function (error, data) {
        var _ref;

        var mergedData = (_ref = []).concat.apply(_ref, _toConsumableArray(data));
        processedLayer.mergedData = mergedData;
        if (layerSpec.aggregate && layerSpec.aggregate.filter) {
          (0, _filters.generateFilterOptions)(layerSpec);
        }
        processedLayer.source.data = layerSpec.aggregate.type ? (0, _aggregateData2.default)(layerSpec, _this.props.locations) : mergedData;
        processedLayer.loaded = true;
        // renderData(layerSpec);
      });
    } else if (filterOptions) {
      processedLayer.source.data = layerSpec.aggregate.type ? (0, _aggregateData2.default)(layerSpec, this.props.locations, filterOptions) : (0, _filters.processFilters)(layerSpec, filterOptions);
      // self.addLayer(layerSpec);
    } else {
      // add the already processed layer
      dispatch((0, _Actions.receiveData)(layerSpec));
    }
  } else if (layerSpec.layers) {
    // if layer has sublayers, add all sublayers
    // self.addLegend(layerSpec);
    layerSpec.layers.forEach(function (sublayer) {
      var subLayer = _this.props.layerSpec[sublayer];
      subLayer.id = sublayer;
      if (typeof subLayer.source.data === 'string') {
        readData(subLayer, subLayer.source.data);
      } else {
        // self.addLayer(subLayer);
      }
    });
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processFilters = processFilters;
exports.generateFilterOptions = generateFilterOptions;
exports.filterDataByPeriod = filterDataByPeriod;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function processFilters(layerData, filterOptions) {
  var data = layerData.mergedData || layerData.source.data;
  var acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  var acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  var filters = [];
  if (layerData.aggregate.filter && filterOptions) {
    // Get array of disabled filters
    Object.keys(filterOptions).forEach(function (opt) {
      if (filterOptions[opt] === false) {
        filters.push(opt);
      }
    });
    // apply filters
    data = data.filter(function (datum) {
      if (acceptedFilterValues && acceptedSubFilterValues && !acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from second filter field
        return !filters.includes(datum[layerData.aggregate.filter]);
      } else if (acceptedSubFilterValues && acceptedSubFilterValues.includes(datum[layerData.aggregate['sub-filter']])) {
        // remove rows that should be filtered out, ignore rows with values from first filter field
        return !filters.includes(datum[layerData.aggregate['sub-filter']]);
      } else if (!acceptedFilterValues && !acceptedSubFilterValues) {
        return !filters.includes(datum[layerData.aggregate.filter]);
      }return true;
    });
  }
  return data;
}

function generateFilterOptions(layerData) {
  var data = layerData.mergedData || layerData.source.data;
  var acceptedFilterValues = layerData.aggregate['accepted-filter-values'];
  var acceptedSubFilterValues = layerData.aggregate['accepted-sub-filter-values'];
  // get filter options from filter field
  if (layerData.aggregate.filter) {
    var _ref;

    var filterValues = data.map(function (datum) {
      return datum[layerData.aggregate.filter];
    });
    var subfilterValues = data.map(function (datum) {
      return datum[layerData.aggregate['sub-filter']];
    });
    var allFilters = (_ref = []).concat.apply(_ref, [filterValues, subfilterValues]);

    allFilters = allFilters.filter(function (datum) {
      return datum !== undefined;
    });
    // check filter values are in accepted values lists, remove those that are not
    var acceptedFilters = [];
    if (acceptedFilterValues || acceptedSubFilterValues) {
      acceptedFilters = allFilters.filter(function (datum) {
        var _ref2;

        return datum !== undefined && (_ref2 = []).concat.apply(_ref2, [acceptedFilterValues, acceptedSubFilterValues]).includes(datum);
      });
    } else acceptedFilters = allFilters;
    layerData.filterOptions = [].concat(_toConsumableArray(new Set(acceptedFilters)));
  }
}
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function filterDataByPeriod(layerData, periodField, period) {
  var periods = period ? [period] : layerData.map(function (datum) {
    return datum[periodField];
  });
  if (!period) periods = Array.from(new Set(periods));

  if (months.indexOf(periods[0]) !== false) {
    periods.sort(function (a, b) {
      return months.indexOf(a) - months.indexOf(b);
    });
  } else if (periods[0].indexOf('/') !== -1) {
    periods.sort(function (a, b) {
      return Number(a.split('/')[1]) - Number(b.split('/')[1]);
    });
  }

  var periodFilter = periods[periods.length - 1];

  return layerData.filter(function (datum) {
    return datum[periodField] === periodFilter;
  });
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear_regression__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linearRegression", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear_regression__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_linear_regression_line__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linearRegressionLine", function() { return __WEBPACK_IMPORTED_MODULE_1__src_linear_regression_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_standard_deviation__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "standardDeviation", function() { return __WEBPACK_IMPORTED_MODULE_2__src_standard_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_r_squared__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rSquared", function() { return __WEBPACK_IMPORTED_MODULE_3__src_r_squared__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mode__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mode", function() { return __WEBPACK_IMPORTED_MODULE_4__src_mode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_mode_fast__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "modeFast", function() { return __WEBPACK_IMPORTED_MODULE_5__src_mode_fast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_mode_sorted__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "modeSorted", function() { return __WEBPACK_IMPORTED_MODULE_6__src_mode_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_min__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_7__src_min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_max__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_8__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_min_sorted__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "minSorted", function() { return __WEBPACK_IMPORTED_MODULE_9__src_min_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_max_sorted__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "maxSorted", function() { return __WEBPACK_IMPORTED_MODULE_10__src_max_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sum__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_11__src_sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_sum_simple__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sumSimple", function() { return __WEBPACK_IMPORTED_MODULE_12__src_sum_simple__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_product__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return __WEBPACK_IMPORTED_MODULE_13__src_product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_quantile__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_14__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_quantile_sorted__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return __WEBPACK_IMPORTED_MODULE_15__src_quantile_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_interquartile_range__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interquartileRange", function() { return __WEBPACK_IMPORTED_MODULE_16__src_interquartile_range__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "iqr", function() { return __WEBPACK_IMPORTED_MODULE_16__src_interquartile_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_median_absolute_deviation__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "medianAbsoluteDeviation", function() { return __WEBPACK_IMPORTED_MODULE_17__src_median_absolute_deviation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mad", function() { return __WEBPACK_IMPORTED_MODULE_17__src_median_absolute_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_chunk__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return __WEBPACK_IMPORTED_MODULE_18__src_chunk__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_sample_with_replacement__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleWithReplacement", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sample_with_replacement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_shuffle__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_20__src_shuffle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle_in_place__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleInPlace", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle_in_place__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sample__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sample__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ckmeans__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ckmeans", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ckmeans__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_unique_count_sorted__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueCountSorted", function() { return __WEBPACK_IMPORTED_MODULE_24__src_unique_count_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_sum_nth_power_deviations__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sumNthPowerDeviations", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sum_nth_power_deviations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_equal_interval_breaks__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "equalIntervalBreaks", function() { return __WEBPACK_IMPORTED_MODULE_26__src_equal_interval_breaks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_sample_covariance__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleCovariance", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sample_covariance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_sample_correlation__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleCorrelation", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sample_correlation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_sample_variance__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleVariance", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sample_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_sample_standard_deviation__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleStandardDeviation", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sample_standard_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_sample_skewness__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleSkewness", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sample_skewness__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_sample_kurtosis__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sampleKurtosis", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sample_kurtosis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_permutations_heap__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "permutationsHeap", function() { return __WEBPACK_IMPORTED_MODULE_33__src_permutations_heap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_combinations__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combinations", function() { return __WEBPACK_IMPORTED_MODULE_34__src_combinations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_combinations_replacement__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combinationsReplacement", function() { return __WEBPACK_IMPORTED_MODULE_35__src_combinations_replacement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_add_to_mean__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addToMean", function() { return __WEBPACK_IMPORTED_MODULE_36__src_add_to_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_combine_means__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineMeans", function() { return __WEBPACK_IMPORTED_MODULE_37__src_combine_means__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_combine_variances__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineVariances", function() { return __WEBPACK_IMPORTED_MODULE_38__src_combine_variances__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_geometric_mean__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geometricMean", function() { return __WEBPACK_IMPORTED_MODULE_39__src_geometric_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_harmonic_mean__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "harmonicMean", function() { return __WEBPACK_IMPORTED_MODULE_40__src_harmonic_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_mean__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return __WEBPACK_IMPORTED_MODULE_41__src_mean__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_41__src_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_median__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_42__src_median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_median_sorted__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "medianSorted", function() { return __WEBPACK_IMPORTED_MODULE_43__src_median_sorted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_subtract_from_mean__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subtractFromMean", function() { return __WEBPACK_IMPORTED_MODULE_44__src_subtract_from_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_root_mean_square__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rootMeanSquare", function() { return __WEBPACK_IMPORTED_MODULE_45__src_root_mean_square__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rms", function() { return __WEBPACK_IMPORTED_MODULE_45__src_root_mean_square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_variance__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_46__src_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_t_test__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tTest", function() { return __WEBPACK_IMPORTED_MODULE_47__src_t_test__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_t_test_two_sample__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tTestTwoSample", function() { return __WEBPACK_IMPORTED_MODULE_48__src_t_test_two_sample__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_bayesian_classifier__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BayesianClassifier", function() { return __WEBPACK_IMPORTED_MODULE_49__src_bayesian_classifier__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bayesian", function() { return __WEBPACK_IMPORTED_MODULE_49__src_bayesian_classifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_perceptron__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PerceptronModel", function() { return __WEBPACK_IMPORTED_MODULE_50__src_perceptron__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "perceptron", function() { return __WEBPACK_IMPORTED_MODULE_50__src_perceptron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__src_epsilon__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return __WEBPACK_IMPORTED_MODULE_51__src_epsilon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__src_factorial__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "factorial", function() { return __WEBPACK_IMPORTED_MODULE_52__src_factorial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__src_bernoulli_distribution__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bernoulliDistribution", function() { return __WEBPACK_IMPORTED_MODULE_53__src_bernoulli_distribution__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__src_binomial_distribution__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "binomialDistribution", function() { return __WEBPACK_IMPORTED_MODULE_54__src_binomial_distribution__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__src_poisson_distribution__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "poissonDistribution", function() { return __WEBPACK_IMPORTED_MODULE_55__src_poisson_distribution__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__src_chi_squared_distribution_table__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chiSquaredDistributionTable", function() { return __WEBPACK_IMPORTED_MODULE_56__src_chi_squared_distribution_table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__src_chi_squared_goodness_of_fit__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chiSquaredGoodnessOfFit", function() { return __WEBPACK_IMPORTED_MODULE_57__src_chi_squared_goodness_of_fit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__src_kernel_density_estimation__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "kernelDensityEstimation", function() { return __WEBPACK_IMPORTED_MODULE_58__src_kernel_density_estimation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "kde", function() { return __WEBPACK_IMPORTED_MODULE_58__src_kernel_density_estimation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__src_z_score__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zScore", function() { return __WEBPACK_IMPORTED_MODULE_59__src_z_score__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__src_cumulative_std_normal_probability__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cumulativeStdNormalProbability", function() { return __WEBPACK_IMPORTED_MODULE_60__src_cumulative_std_normal_probability__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__src_standard_normal_table__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "standardNormalTable", function() { return __WEBPACK_IMPORTED_MODULE_61__src_standard_normal_table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__src_error_function__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "errorFunction", function() { return __WEBPACK_IMPORTED_MODULE_62__src_error_function__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "erf", function() { return __WEBPACK_IMPORTED_MODULE_62__src_error_function__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__src_inverse_error_function__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inverseErrorFunction", function() { return __WEBPACK_IMPORTED_MODULE_63__src_inverse_error_function__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__src_probit__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "probit", function() { return __WEBPACK_IMPORTED_MODULE_64__src_probit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__src_bisect__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_65__src_bisect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__src_quickselect__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return __WEBPACK_IMPORTED_MODULE_66__src_quickselect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__src_sign__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return __WEBPACK_IMPORTED_MODULE_67__src_sign__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__src_numeric_sort__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "numericSort", function() { return __WEBPACK_IMPORTED_MODULE_68__src_numeric_sort__["a"]; });
/* @flow */

// # simple-statistics
//
// A simple, literate statistics system.

// Linear Regression




























// sample statistics







// combinatorics




// measures of centrality














// ss.jenks = require('./src/jenks');

// Classifiers



// Distribution-related methods
 // We make ε available to the test suite.








// Normal distribution







// Root-finding methods


// Utils





/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(22);
/* @flow */



/**
 * The [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation)
 * is the square root of the variance. This is also known as the population
 * standard deviation. It's useful for measuring the amount
 * of variation or dispersion in a set of values.
 *
 * Standard deviation is only appropriate for full-population knowledge: for
 * samples of a population, {@link sampleStandardDeviation} is
 * more appropriate.
 *
 * @param {Array<number>} x input
 * @returns {number} standard deviation
 * @example
 * variance([2, 4, 4, 4, 5, 5, 7, 9]); // => 4
 * standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]); // => 2
 */
function standardDeviation(x /*: Array<number> */)/*:number*/ {
    if (x.length === 1) {
        return 0;
    }
    var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(x);
    return Math.sqrt(v);
}

/* harmony default export */ __webpack_exports__["a"] = (standardDeviation);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum_nth_power_deviations__ = __webpack_require__(3);
/* @flow */



/**
 * The [variance](http://en.wikipedia.org/wiki/Variance)
 * is the sum of squared deviations from the mean.
 *
 * This is an implementation of variance, not sample variance:
 * see the `sampleVariance` method if you want a sample measure.
 *
 * @param {Array<number>} x a population of one or more data points
 * @returns {number} variance: a value greater than or equal to zero.
 * zero indicates that all values are identical.
 * @throws {Error} if x's length is 0
 * @example
 * variance([1, 2, 3, 4, 5, 6]); // => 2.9166666666666665
 */
function variance(x/*: Array<number> */)/*:number*/ {
    // The variance of no numbers is null
    if (x.length === 0) {
        throw new Error('variance requires at least one data point');
    }

    // Find the mean of squared deviations between the
    // mean value and each value.
    return Object(__WEBPACK_IMPORTED_MODULE_0__sum_nth_power_deviations__["a" /* default */])(x, 2) / x.length;
}

/* harmony default export */ __webpack_exports__["a"] = (variance);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Our default sum is the [Kahan-Babuska algorithm](https://pdfs.semanticscholar.org/1760/7d467cda1d0277ad272deb2113533131dc09.pdf).
 * This method is an improvement over the classical
 * [Kahan summation algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm).
 * It aims at computing the sum of a list of numbers while correcting for
 * floating-point errors. Traditionally, sums are calculated as many
 * successive additions, each one with its own floating-point roundoff. These
 * losses in precision add up as the number of numbers increases. This alternative
 * algorithm is more accurate than the simple way of calculating sums by simple
 * addition.
 *
 * This runs on `O(n)`, linear time in respect to the array.
 *
 * @param {Array<number>} x input
 * @return {number} sum of all input numbers
 * @example
 * sum([1, 2, 3]); // => 6
 */
function sum(x/*: Array<number> */)/*: number */ {

    // If the array is empty, we needn't bother computing its sum
    if (x.length === 0) {
        return 0;
    }

    // Initializing the sum as the first number in the array
    var sum = x[0];

    // Keeping track of the floating-point error correction
    var correction = 0;

    var transition;

    for (var i = 1; i < x.length; i++) {
        transition = sum + x[i];

        // Here we need to update the correction in a different fashion
        // if the new absolute value is greater than the absolute sum
        if (Math.abs(sum) >= Math.abs(x[i])) {
            correction += ((sum - transition) + x[i]);
        }
        else {
            correction += ((x[i] - transition) + sum);
        }

        sum = transition;
    }

    // Returning the corrected sum
    return sum + correction;
}

/* harmony default export */ __webpack_exports__["a"] = (sum);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [mode](http://bit.ly/W5K4Yt) is the number that appears in a list the highest number of times.
 * There can be multiple modes in a list: in the event of a tie, this
 * algorithm will return the most recently seen mode.
 *
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * This runs in `O(n)` because the input is sorted.
 *
 * @param {Array<number>} sorted a sample of one or more data points
 * @returns {number} mode
 * @throws {Error} if sorted is empty
 * @example
 * modeSorted([0, 0, 1]); // => 0
 */
function modeSorted(sorted /*: Array<number> */)/*:number*/ {

    // Handle edge cases:
    // The mode of an empty list is undefined
    if (sorted.length === 0) {
        throw new Error('mode requires at least one data point');
    } else if (sorted.length === 1) {
        return sorted[0];
    }

    // This assumes it is dealing with an array of size > 1, since size
    // 0 and 1 are handled immediately. Hence it starts at index 1 in the
    // array.
    var last = sorted[0],
        // store the mode as we find new modes
        value = NaN,
        // store how many times we've seen the mode
        maxSeen = 0,
        // how many times the current candidate for the mode
        // has been seen
        seenThis = 1;

    // end at sorted.length + 1 to fix the case in which the mode is
    // the highest number that occurs in the sequence. the last iteration
    // compares sorted[i], which is undefined, to the highest number
    // in the series
    for (var i = 1; i < sorted.length + 1; i++) {
        // we're seeing a new number pass by
        if (sorted[i] !== last) {
            // the last number is the new mode since we saw it more
            // often than the old one
            if (seenThis > maxSeen) {
                maxSeen = seenThis;
                value = last;
            }
            seenThis = 1;
            last = sorted[i];
        // if this isn't a new number, it's one more occurrence of
        // the potential mode
        } else { seenThis++; }
    }
    return value;
}

/* harmony default export */ __webpack_exports__["a"] = (modeSorted);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The min is the lowest number in the array. This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @throws {Error} if the the length of x is less than one
 * @returns {number} minimum value
 * @example
 * min([1, 5, -10, 100, 2]); // => -10
 */
function min(x /*: Array<number> */)/*:number*/ {

    if (x.length === 0) {
        throw new Error('min requires at least one data point');
    }

    var value = x[0];
    for (var i = 1; i < x.length; i++) {
        // On the first iteration of this loop, min is
        // undefined and is thus made the minimum element in the array
        if (x[i] < value) {
            value = x[i];
        }
    }
    return value;
}

/* harmony default export */ __webpack_exports__["a"] = (min);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * This computes the maximum number in an array.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @returns {number} maximum value
 * @throws {Error} if the the length of x is less than one
 * @example
 * max([1, 2, 3, 4]);
 * // => 4
 */
function max(x /*: Array<number> */) /*:number*/ {

    if (x.length === 0) {
        throw new Error('max requires at least one data point');
    }

    var value = x[0];
    for (var i = 1; i < x.length; i++) {
        // On the first iteration of this loop, max is
        // undefined and is thus made the maximum element in the array
        if (x[i] > value) {
            value = x[i];
        }
    }
    return value;
}

/* harmony default export */ __webpack_exports__["a"] = (max);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Rearrange items in `arr` so that all items in `[left, k]` range are the smallest.
 * The `k`-th element will have the `(k - left + 1)`-th smallest value in `[left, right]`.
 *
 * Implements Floyd-Rivest selection algorithm https://en.wikipedia.org/wiki/Floyd-Rivest_algorithm
 *
 * @param {Array<number>} arr input array
 * @param {number} k pivot index
 * @param {number} [left] left index
 * @param {number} [right] right index
 * @returns {void} mutates input array
 * @example
 * var arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];
 * quickselect(arr, 8);
 * // = [39, 28, 28, 33, 21, 12, 22, 50, 53, 56, 59, 65, 90, 77, 95]
 */
function quickselect(arr/*: Array<number> */, k/*: number */, left/*: ?number */, right/*: ?number */)/*: void */ {
    left = left || 0;
    right = right || (arr.length - 1);

    while (right > left) {
        // 600 and 0.5 are arbitrary constants chosen in the original paper to minimize execution time
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n);
            if (m - n / 2 < 0) sd *= -1;
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselect(arr, k, newLeft, newRight);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (arr[right] > t) swap(arr, left, right);

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (arr[i] < t) i++;
            while (arr[j] > t) j--;
        }

        if (arr[left] === t) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/* harmony default export */ __webpack_exports__["a"] = (quickselect);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quantile__ = __webpack_require__(5);
/* @flow */



/**
 * The [Interquartile range](http://en.wikipedia.org/wiki/Interquartile_range) is
 * a measure of statistical dispersion, or how scattered, spread, or
 * concentrated a distribution is. It's computed as the difference between
 * the third quartile and first quartile.
 *
 * @param {Array<number>} x sample of one or more numbers
 * @returns {number} interquartile range: the span between lower and upper quartile,
 * 0.25 and 0.75
 * @example
 * interquartileRange([0, 1, 2, 3]); // => 2
 */
function interquartileRange(x/*: Array<number> */) {
    // Interquartile range is the span between the upper quartile,
    // at `0.75`, and lower quartile, `0.25`
    var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__quantile__["a" /* default */])(x, 0.75),
        q2 = Object(__WEBPACK_IMPORTED_MODULE_0__quantile__["a" /* default */])(x, 0.25);

    if (typeof q1 === 'number' && typeof q2 === 'number') {
        return q1 - q2;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (interquartileRange);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quantile__ = __webpack_require__(5);
/* @flow */



/**
 * The [median](http://en.wikipedia.org/wiki/Median) is
 * the middle number of a list. This is often a good indicator of 'the middle'
 * when there are outliers that skew the `mean()` value.
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * The median isn't necessarily one of the elements in the list: the value
 * can be the average of two elements if the list has an even length
 * and the two central values are different.
 *
 * @param {Array<number>} x input
 * @returns {number} median value
 * @example
 * median([10, 2, 5, 100, 2, 1]); // => 3.5
 */
function median(x /*: Array<number> */)/*: number */ {
    return +Object(__WEBPACK_IMPORTED_MODULE_0__quantile__["a" /* default */])(x, 0.5);
}

/* harmony default export */ __webpack_exports__["a"] = (median);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shuffle_in_place__ = __webpack_require__(31);
/* @flow */



/**
 * A [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 * is a fast way to create a random permutation of a finite set. This is
 * a function around `shuffle_in_place` that adds the guarantee that
 * it will not modify its input.
 *
 * @param {Array} x sample of 0 or more numbers
 * @param {Function} [randomSource=Math.random] an optional entropy source that
 * returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
 * @return {Array} shuffled version of input
 * @example
 * var shuffled = shuffle([1, 2, 3, 4]);
 * shuffled; // = [2, 3, 1, 4] or any other random permutation
 */
function shuffle/*::<T>*/(x/*: Array<T> */, randomSource/*: ?Function */) {
    // slice the original array so that it is not modified
    var sample = x.slice();

    // and then shuffle that shallow-copied array, in place
    return Object(__WEBPACK_IMPORTED_MODULE_0__shuffle_in_place__["a" /* default */])(sample.slice(), randomSource);
}

/* harmony default export */ __webpack_exports__["a"] = (shuffle);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * A [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 * in-place - which means that it **will change the order of the original
 * array by reference**.
 *
 * This is an algorithm that generates a random [permutation](https://en.wikipedia.org/wiki/Permutation)
 * of a set.
 *
 * @param {Array} x sample of one or more numbers
 * @param {Function} [randomSource=Math.random] an optional entropy source that
 * returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
 * @returns {Array} x
 * @example
 * var x = [1, 2, 3, 4];
 * shuffleInPlace(x);
 * // x is shuffled to a value like [2, 1, 4, 3]
 */
function shuffleInPlace(x/*: Array<any> */, randomSource/*: ?Function */)/*: Array<any> */ {

    // a custom random number source can be provided if you want to use
    // a fixed seed or another random number generator, like
    // [random-js](https://www.npmjs.org/package/random-js)
    randomSource = randomSource || Math.random;

    // store the current length of the x to determine
    // when no elements remain to shuffle.
    var length = x.length;

    // temporary is used to hold an item when it is being
    // swapped between indices.
    var temporary;

    // The index to swap at each stage.
    var index;

    // While there are still items to shuffle
    while (length > 0) {
        // chose a random index within the subset of the array
        // that is not yet shuffled
        index = Math.floor(randomSource() * length--);

        // store the value that we'll move temporarily
        temporary = x[length];

        // swap the value at `x[length]` with `x[index]`
        x[length] = x[index];
        x[index] = temporary;
    }

    return x;
}

/* harmony default export */ __webpack_exports__["a"] = (shuffleInPlace);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * For a sorted input, counting the number of unique values
 * is possible in constant time and constant memory. This is
 * a simple implementation of the algorithm.
 *
 * Values are compared with `===`, so objects and non-primitive objects
 * are not handled in any special way.
 *
 * @param {Array<*>} x an array of any kind of value
 * @returns {number} count of unique values
 * @example
 * uniqueCountSorted([1, 2, 3]); // => 3
 * uniqueCountSorted([1, 1, 1]); // => 1
 */
function uniqueCountSorted(x/*: Array<any>*/)/*: number */ {
    var uniqueValueCount = 0,
        lastSeenValue;
    for (var i = 0; i < x.length; i++) {
        if (i === 0 || x[i] !== lastSeenValue) {
            lastSeenValue = x[i];
            uniqueValueCount++;
        }
    }
    return uniqueValueCount;
}

/* harmony default export */ __webpack_exports__["a"] = (uniqueCountSorted);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* @flow */



/**
 * [Sample covariance](https://en.wikipedia.org/wiki/Sample_mean_and_sampleCovariance) of two datasets:
 * how much do the two datasets move together?
 * x and y are two datasets, represented as arrays of numbers.
 *
 * @param {Array<number>} x a sample of two or more data points
 * @param {Array<number>} y a sample of two or more data points
 * @throws {Error} if x and y do not have equal lengths
 * @throws {Error} if x or y have length of one or less
 * @returns {number} sample covariance
 * @example
 * sampleCovariance([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]); // => -3.5
 */
function sampleCovariance(x /*:Array<number>*/, y /*:Array<number>*/)/*:number*/ {

    // The two datasets must have the same length which must be more than 1
    if (x.length !== y.length) {
        throw new Error('sampleCovariance requires samples with equal lengths');
    }

    if (x.length < 2) {
        throw new Error('sampleCovariance requires at least two data points in each sample');
    }

    // determine the mean of each dataset so that we can judge each
    // value of the dataset fairly as the difference from the mean. this
    // way, if one dataset is [1, 2, 3] and [2, 3, 4], their covariance
    // does not suffer because of the difference in absolute values
    var xmean = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(x),
        ymean = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(y),
        sum = 0;

    // for each pair of values, the covariance increases when their
    // difference from the mean is associated - if both are well above
    // or if both are well below
    // the mean, the covariance increases significantly.
    for (var i = 0; i < x.length; i++) {
        sum += (x[i] - xmean) * (y[i] - ymean);
    }

    // this is Bessels' Correction: an adjustment made to sample statistics
    // that allows for the reduced degree of freedom entailed in calculating
    // values from samples rather than complete populations.
    var besselsCorrection = x.length - 1;

    // the covariance is weighted by the length of the datasets.
    return sum / besselsCorrection;
}

/* harmony default export */ __webpack_exports__["a"] = (sampleCovariance);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * When combining two lists of values for which one already knows the means,
 * one does not have to necessary recompute the mean of the combined lists in
 * linear time. They can instead use this function to compute the combined
 * mean by providing the mean & number of values of the first list and the mean
 * & number of values of the second list.
 *
 * @since 3.0.0
 * @param {number} mean1 mean of the first list
 * @param {number} n1 number of items in the first list
 * @param {number} mean2 mean of the second list
 * @param {number} n2 number of items in the second list
 * @returns {number} the combined mean
 *
 * @example
 * combineMeans(5, 3, 4, 3); // => 4.5
 */
function combineMeans(mean1 /*: number*/, n1/*: number */, mean2 /*: number*/, n2/*: number */)/*: number */ {
    return (mean1 * n1 + mean2 * n2) / (n1 + n2);
}

/* harmony default export */ __webpack_exports__["a"] = (combineMeans);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * **Percentage Points of the χ2 (Chi-Squared) Distribution**
 *
 * The [χ2 (Chi-Squared) Distribution](http://en.wikipedia.org/wiki/Chi-squared_distribution) is used in the common
 * chi-squared tests for goodness of fit of an observed distribution to a theoretical one, the independence of two
 * criteria of classification of qualitative data, and in confidence interval estimation for a population standard
 * deviation of a normal distribution from a sample standard deviation.
 *
 * Values from Appendix 1, Table III of William W. Hines & Douglas C. Montgomery, "Probability and Statistics in
 * Engineering and Management Science", Wiley (1980).
 */
var chiSquaredDistributionTable = {
    '1': {
        '0.995': 0,
        '0.99': 0,
        '0.975': 0,
        '0.95': 0,
        '0.9': 0.02,
        '0.5': 0.45,
        '0.1': 2.71,
        '0.05': 3.84,
        '0.025': 5.02,
        '0.01': 6.63,
        '0.005': 7.88
    },
    '2': {
        '0.995': 0.01,
        '0.99': 0.02,
        '0.975': 0.05,
        '0.95': 0.1,
        '0.9': 0.21,
        '0.5': 1.39,
        '0.1': 4.61,
        '0.05': 5.99,
        '0.025': 7.38,
        '0.01': 9.21,
        '0.005': 10.6
    },
    '3': {
        '0.995': 0.07,
        '0.99': 0.11,
        '0.975': 0.22,
        '0.95': 0.35,
        '0.9': 0.58,
        '0.5': 2.37,
        '0.1': 6.25,
        '0.05': 7.81,
        '0.025': 9.35,
        '0.01': 11.34,
        '0.005': 12.84
    },
    '4': {
        '0.995': 0.21,
        '0.99': 0.3,
        '0.975': 0.48,
        '0.95': 0.71,
        '0.9': 1.06,
        '0.5': 3.36,
        '0.1': 7.78,
        '0.05': 9.49,
        '0.025': 11.14,
        '0.01': 13.28,
        '0.005': 14.86
    },
    '5': {
        '0.995': 0.41,
        '0.99': 0.55,
        '0.975': 0.83,
        '0.95': 1.15,
        '0.9': 1.61,
        '0.5': 4.35,
        '0.1': 9.24,
        '0.05': 11.07,
        '0.025': 12.83,
        '0.01': 15.09,
        '0.005': 16.75
    },
    '6': {
        '0.995': 0.68,
        '0.99': 0.87,
        '0.975': 1.24,
        '0.95': 1.64,
        '0.9': 2.2,
        '0.5': 5.35,
        '0.1': 10.65,
        '0.05': 12.59,
        '0.025': 14.45,
        '0.01': 16.81,
        '0.005': 18.55
    },
    '7': {
        '0.995': 0.99,
        '0.99': 1.25,
        '0.975': 1.69,
        '0.95': 2.17,
        '0.9': 2.83,
        '0.5': 6.35,
        '0.1': 12.02,
        '0.05': 14.07,
        '0.025': 16.01,
        '0.01': 18.48,
        '0.005': 20.28
    },
    '8': {
        '0.995': 1.34,
        '0.99': 1.65,
        '0.975': 2.18,
        '0.95': 2.73,
        '0.9': 3.49,
        '0.5': 7.34,
        '0.1': 13.36,
        '0.05': 15.51,
        '0.025': 17.53,
        '0.01': 20.09,
        '0.005': 21.96
    },
    '9': {
        '0.995': 1.73,
        '0.99': 2.09,
        '0.975': 2.7,
        '0.95': 3.33,
        '0.9': 4.17,
        '0.5': 8.34,
        '0.1': 14.68,
        '0.05': 16.92,
        '0.025': 19.02,
        '0.01': 21.67,
        '0.005': 23.59
    },
    '10': {
        '0.995': 2.16,
        '0.99': 2.56,
        '0.975': 3.25,
        '0.95': 3.94,
        '0.9': 4.87,
        '0.5': 9.34,
        '0.1': 15.99,
        '0.05': 18.31,
        '0.025': 20.48,
        '0.01': 23.21,
        '0.005': 25.19
    },
    '11': {
        '0.995': 2.6,
        '0.99': 3.05,
        '0.975': 3.82,
        '0.95': 4.57,
        '0.9': 5.58,
        '0.5': 10.34,
        '0.1': 17.28,
        '0.05': 19.68,
        '0.025': 21.92,
        '0.01': 24.72,
        '0.005': 26.76
    },
    '12': {
        '0.995': 3.07,
        '0.99': 3.57,
        '0.975': 4.4,
        '0.95': 5.23,
        '0.9': 6.3,
        '0.5': 11.34,
        '0.1': 18.55,
        '0.05': 21.03,
        '0.025': 23.34,
        '0.01': 26.22,
        '0.005': 28.3
    },
    '13': {
        '0.995': 3.57,
        '0.99': 4.11,
        '0.975': 5.01,
        '0.95': 5.89,
        '0.9': 7.04,
        '0.5': 12.34,
        '0.1': 19.81,
        '0.05': 22.36,
        '0.025': 24.74,
        '0.01': 27.69,
        '0.005': 29.82
    },
    '14': {
        '0.995': 4.07,
        '0.99': 4.66,
        '0.975': 5.63,
        '0.95': 6.57,
        '0.9': 7.79,
        '0.5': 13.34,
        '0.1': 21.06,
        '0.05': 23.68,
        '0.025': 26.12,
        '0.01': 29.14,
        '0.005': 31.32
    },
    '15': {
        '0.995': 4.6,
        '0.99': 5.23,
        '0.975': 6.27,
        '0.95': 7.26,
        '0.9': 8.55,
        '0.5': 14.34,
        '0.1': 22.31,
        '0.05': 25,
        '0.025': 27.49,
        '0.01': 30.58,
        '0.005': 32.8
    },
    '16': {
        '0.995': 5.14,
        '0.99': 5.81,
        '0.975': 6.91,
        '0.95': 7.96,
        '0.9': 9.31,
        '0.5': 15.34,
        '0.1': 23.54,
        '0.05': 26.3,
        '0.025': 28.85,
        '0.01': 32,
        '0.005': 34.27
    },
    '17': {
        '0.995': 5.7,
        '0.99': 6.41,
        '0.975': 7.56,
        '0.95': 8.67,
        '0.9': 10.09,
        '0.5': 16.34,
        '0.1': 24.77,
        '0.05': 27.59,
        '0.025': 30.19,
        '0.01': 33.41,
        '0.005': 35.72
    },
    '18': {
        '0.995': 6.26,
        '0.99': 7.01,
        '0.975': 8.23,
        '0.95': 9.39,
        '0.9': 10.87,
        '0.5': 17.34,
        '0.1': 25.99,
        '0.05': 28.87,
        '0.025': 31.53,
        '0.01': 34.81,
        '0.005': 37.16
    },
    '19': {
        '0.995': 6.84,
        '0.99': 7.63,
        '0.975': 8.91,
        '0.95': 10.12,
        '0.9': 11.65,
        '0.5': 18.34,
        '0.1': 27.2,
        '0.05': 30.14,
        '0.025': 32.85,
        '0.01': 36.19,
        '0.005': 38.58
    },
    '20': {
        '0.995': 7.43,
        '0.99': 8.26,
        '0.975': 9.59,
        '0.95': 10.85,
        '0.9': 12.44,
        '0.5': 19.34,
        '0.1': 28.41,
        '0.05': 31.41,
        '0.025': 34.17,
        '0.01': 37.57,
        '0.005': 40
    },
    '21': {
        '0.995': 8.03,
        '0.99': 8.9,
        '0.975': 10.28,
        '0.95': 11.59,
        '0.9': 13.24,
        '0.5': 20.34,
        '0.1': 29.62,
        '0.05': 32.67,
        '0.025': 35.48,
        '0.01': 38.93,
        '0.005': 41.4
    },
    '22': {
        '0.995': 8.64,
        '0.99': 9.54,
        '0.975': 10.98,
        '0.95': 12.34,
        '0.9': 14.04,
        '0.5': 21.34,
        '0.1': 30.81,
        '0.05': 33.92,
        '0.025': 36.78,
        '0.01': 40.29,
        '0.005': 42.8
    },
    '23': {
        '0.995': 9.26,
        '0.99': 10.2,
        '0.975': 11.69,
        '0.95': 13.09,
        '0.9': 14.85,
        '0.5': 22.34,
        '0.1': 32.01,
        '0.05': 35.17,
        '0.025': 38.08,
        '0.01': 41.64,
        '0.005': 44.18
    },
    '24': {
        '0.995': 9.89,
        '0.99': 10.86,
        '0.975': 12.4,
        '0.95': 13.85,
        '0.9': 15.66,
        '0.5': 23.34,
        '0.1': 33.2,
        '0.05': 36.42,
        '0.025': 39.36,
        '0.01': 42.98,
        '0.005': 45.56
    },
    '25': {
        '0.995': 10.52,
        '0.99': 11.52,
        '0.975': 13.12,
        '0.95': 14.61,
        '0.9': 16.47,
        '0.5': 24.34,
        '0.1': 34.28,
        '0.05': 37.65,
        '0.025': 40.65,
        '0.01': 44.31,
        '0.005': 46.93
    },
    '26': {
        '0.995': 11.16,
        '0.99': 12.2,
        '0.975': 13.84,
        '0.95': 15.38,
        '0.9': 17.29,
        '0.5': 25.34,
        '0.1': 35.56,
        '0.05': 38.89,
        '0.025': 41.92,
        '0.01': 45.64,
        '0.005': 48.29
    },
    '27': {
        '0.995': 11.81,
        '0.99': 12.88,
        '0.975': 14.57,
        '0.95': 16.15,
        '0.9': 18.11,
        '0.5': 26.34,
        '0.1': 36.74,
        '0.05': 40.11,
        '0.025': 43.19,
        '0.01': 46.96,
        '0.005': 49.65
    },
    '28': {
        '0.995': 12.46,
        '0.99': 13.57,
        '0.975': 15.31,
        '0.95': 16.93,
        '0.9': 18.94,
        '0.5': 27.34,
        '0.1': 37.92,
        '0.05': 41.34,
        '0.025': 44.46,
        '0.01': 48.28,
        '0.005': 50.99
    },
    '29': {
        '0.995': 13.12,
        '0.99': 14.26,
        '0.975': 16.05,
        '0.95': 17.71,
        '0.9': 19.77,
        '0.5': 28.34,
        '0.1': 39.09,
        '0.05': 42.56,
        '0.025': 45.72,
        '0.01': 49.59,
        '0.005': 52.34
    },
    '30': {
        '0.995': 13.79,
        '0.99': 14.95,
        '0.975': 16.79,
        '0.95': 18.49,
        '0.9': 20.6,
        '0.5': 29.34,
        '0.1': 40.26,
        '0.05': 43.77,
        '0.025': 46.98,
        '0.01': 50.89,
        '0.005': 53.67
    },
    '40': {
        '0.995': 20.71,
        '0.99': 22.16,
        '0.975': 24.43,
        '0.95': 26.51,
        '0.9': 29.05,
        '0.5': 39.34,
        '0.1': 51.81,
        '0.05': 55.76,
        '0.025': 59.34,
        '0.01': 63.69,
        '0.005': 66.77
    },
    '50': {
        '0.995': 27.99,
        '0.99': 29.71,
        '0.975': 32.36,
        '0.95': 34.76,
        '0.9': 37.69,
        '0.5': 49.33,
        '0.1': 63.17,
        '0.05': 67.5,
        '0.025': 71.42,
        '0.01': 76.15,
        '0.005': 79.49
    },
    '60': {
        '0.995': 35.53,
        '0.99': 37.48,
        '0.975': 40.48,
        '0.95': 43.19,
        '0.9': 46.46,
        '0.5': 59.33,
        '0.1': 74.4,
        '0.05': 79.08,
        '0.025': 83.3,
        '0.01': 88.38,
        '0.005': 91.95
    },
    '70': {
        '0.995': 43.28,
        '0.99': 45.44,
        '0.975': 48.76,
        '0.95': 51.74,
        '0.9': 55.33,
        '0.5': 69.33,
        '0.1': 85.53,
        '0.05': 90.53,
        '0.025': 95.02,
        '0.01': 100.42,
        '0.005': 104.22
    },
    '80': {
        '0.995': 51.17,
        '0.99': 53.54,
        '0.975': 57.15,
        '0.95': 60.39,
        '0.9': 64.28,
        '0.5': 79.33,
        '0.1': 96.58,
        '0.05': 101.88,
        '0.025': 106.63,
        '0.01': 112.33,
        '0.005': 116.32
    },
    '90': {
        '0.995': 59.2,
        '0.99': 61.75,
        '0.975': 65.65,
        '0.95': 69.13,
        '0.9': 73.29,
        '0.5': 89.33,
        '0.1': 107.57,
        '0.05': 113.14,
        '0.025': 118.14,
        '0.01': 124.12,
        '0.005': 128.3
    },
    '100': {
        '0.995': 67.33,
        '0.99': 70.06,
        '0.975': 74.22,
        '0.95': 77.93,
        '0.9': 82.36,
        '0.5': 99.33,
        '0.1': 118.5,
        '0.05': 124.34,
        '0.025': 129.56,
        '0.01': 135.81,
        '0.005': 140.17
    }
};

/* harmony default export */ __webpack_exports__["a"] = (chiSquaredDistributionTable);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

var SQRT_2PI = Math.sqrt(2 * Math.PI);

function cumulativeDistribution(z) {
    var sum = z,
        tmp = z;

    // 15 iterations are enough for 4-digit precision
    for (var i = 1; i < 15; i++) {
        tmp *= z * z / (2 * i + 1);
        sum += tmp;
    }
    return Math.round((0.5 + (sum / SQRT_2PI) * Math.exp(-z * z / 2)) * 1e4) / 1e4;
}

/**
 * A standard normal table, also called the unit normal table or Z table,
 * is a mathematical table for the values of Φ (phi), which are the values of
 * the cumulative distribution function of the normal distribution.
 * It is used to find the probability that a statistic is observed below,
 * above, or between values on the standard normal distribution, and by
 * extension, any normal distribution.
 *
 * The probabilities are calculated using the
 * [Cumulative distribution function](https://en.wikipedia.org/wiki/Normal_distribution#Cumulative_distribution_function).
 * The table used is the cumulative, and not cumulative from 0 to mean
 * (even though the latter has 5 digits precision, instead of 4).
 */
var standardNormalTable/*: Array<number> */ = [];

for (var z = 0; z <= 3.09; z += 0.01) {
    standardNormalTable.push(cumulativeDistribution(z));
}

/* harmony default export */ __webpack_exports__["a"] = (standardNormalTable);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The Inverse [Gaussian error function](http://en.wikipedia.org/wiki/Error_function)
 * returns a numerical approximation to the value that would have caused
 * `errorFunction()` to return x.
 *
 * @param {number} x value of error function
 * @returns {number} estimated inverted value
 */
function inverseErrorFunction(x/*: number */)/*: number */ {
    var a = (8 * (Math.PI - 3)) / (3 * Math.PI * (4 - Math.PI));

    var inv = Math.sqrt(Math.sqrt(
        Math.pow(2 / (Math.PI * a) + Math.log(1 - x * x) / 2, 2) -
        Math.log(1 - x * x) / a) -
        (2 / (Math.PI * a) + Math.log(1 - x * x) / 2));

    if (x >= 0) {
        return inv;
    } else {
        return -inv;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (inverseErrorFunction);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * [Sign](https://en.wikipedia.org/wiki/Sign_function) is a function
 * that extracts the sign of a real number
 *
 * @param {number} x input value
 * @returns {number} sign value either 1, 0 or -1
 * @throws {TypeError} if the input argument x is not a number
 * @private
 *
 * @example
 * sign(2); // => 1
 */
function sign(x/*: number */)/*: number */ {
    if (typeof x === 'number') {
        if (x < 0) {
            return -1;
        } else if (x === 0) {
            return 0
        } else {
            return 1;
        }
    } else {
        throw new TypeError('not a number');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (sign);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gisida = {};

gisida.version = __webpack_require__(41).version;
gisida.initStore = __webpack_require__(42).default;
gisida.Actions = __webpack_require__(2).default;
gisida.Reducers = __webpack_require__(16).default;
gisida.prepareLayer = __webpack_require__(18).default;
gisida.addLayer = __webpack_require__(63).default;

module.exports = gisida;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {"name":"gisida","description":"A dashboard builder library for map visualizations","version":"0.0.1","author":"Ona Systems Inc.","repository":{"type":"git","url":"https://github.com/onaio/gisida#gisida"},"jest":{"transform":{".*":"./node_modules/jest-css-modules"}},"dependencies":{"babel-core":"v6.25.0","babel-loader":"v6.4.1","babel-preset-es2015":"^6.24.0","babel-preset-es2016":"^6.24.1","babel-preset-stage-0":"^6.24.1","colorbrewer":"^1.0.0","jsx-loader":"^0.13.2","mustache":"^2.3.0","papaparse":"^4.3.6","redux":"^3.7.2","simple-statistics":"^5.2.0","webpack":"^3.8.1"},"devDependencies":{"babel-eslint":"^8.1.2","eslint":"^4.14.0","eslint-config-airbnb":"^16.1.0","eslint-plugin-import":"^2.8.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.5.1"},"keywords":["mapping","maps","data visualization","mapspec"],"license":"MIT","main":"dist/gisida.js","scripts":{"lint":"eslint src --ext=jsx --ext=js","build":"webpack --progress --env.production=true","develop":"webpack --progress --watch --env.production=false"}}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = initStore;

var _redux = __webpack_require__(43);

var _Actions = __webpack_require__(2);

var _Reducers = __webpack_require__(16);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _files = __webpack_require__(17);

var _prepareLayer = __webpack_require__(18);

var _prepareLayer2 = _interopRequireDefault(_prepareLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initStore(customReducers) {
  var reducers = void 0;
  if (customReducers) {
    reducers = (0, _redux.combineReducers)(_extends({}, _Reducers2.default, customReducers));
  } else {
    reducers = (0, _redux.combineReducers)(_Reducers2.default);
  }

  // Create initial store
  var store = (0, _redux.createStore)(reducers);

  // Add config to redux store
  function addConfigToStore(config) {
    // Check if config has list of layers and add them to store
    if (config.LAYERS.length > 0 && config.APP.layersPath) {
      config.LAYERS.map(function (layer) {
        // todo: check if `layer` is full URL e.g http://mydomailn/mylayer.json
        // and load it directly
        var path = config.APP.layersPath + '/' + layer + '.json';

        function addLayerToStore(responseObj) {
          var layerObj = responseObj;
          layerObj.id = layer;
          layerObj.loaded = false;
          store.dispatch((0, _Actions.addLayer)(layerObj));
          if (layerObj.visible && !layerObj.loaded) {
            (0, _prepareLayer2.default)(layerObj, store.dispatch);
          }
        }

        return (0, _files.loadJSON)(path, addLayerToStore);
      });
    }

    store.dispatch((0, _Actions.initApp)(config.APP));
    store.dispatch((0, _Actions.initStyles)(config.STYLES, config.APP.mapConfig));
    store.dispatch((0, _Actions.initRegions)(config.REGIONS, config.APP.mapConfig));
  }

  // Read config.json and add to redux store
  (0, _files.loadJSON)('config.json', addConfigToStore);
  return store;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(48);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(46);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(12);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(50);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(55);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(54)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(14);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaultState = {
  APP: {
    mapConfig: {
      container: 'map',
      style: '',
      center: [0, 0],
      zoom: 5
    },
    accessToken: false,
    appIcon: 'gisida-sample.png',
    appName: 'React Gisida'
  },
  LAYERS: [],
  STYLES: [{
    label: 'Satelitte',
    style: 'mapbox://styles/mapbox/satellite-v9'
  }, {
    label: 'Satelitte Streets',
    style: 'mapbox://styles/mapbox/satellite-streets-v9'
  }],
  REGIONS: [],
  MAP: {
    isLoaded: false,
    processedLayers: {},
    activeLayers: {},
    layersToRemove: [],
    layersToAdd: []
  }
};

exports.default = defaultState;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Papa Parse
	v4.3.6
	https://github.com/mholt/PapaParse
	License: MIT
*/
(function(root, factory)
{
	if (true)
	{
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module === 'object' && typeof exports !== 'undefined')
	{
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	}
	else
	{
		// Browser globals (root is window)
		root.Papa = factory();
	}
}(this, function()
{
	'use strict';

	var global = (function () {
		// alternative method, similar to `Function('return this')()`
		// but without using `eval` (which is disabled when
		// using Content Security Policy).

		if (typeof self !== 'undefined') { return self; }
		if (typeof window !== 'undefined') { return window; }
		if (typeof global !== 'undefined') { return global; }

		// When running tests none of the above have been defined
		return {};
	})();


	var IS_WORKER = !global.document && !!global.postMessage,
		IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
		LOADED_SYNC = false, AUTO_SCRIPT_PATH;
	var workers = {}, workerIdCounter = 0;

	var Papa = {};

	Papa.parse = CsvToJson;
	Papa.unparse = JsonToCsv;

	Papa.RECORD_SEP = String.fromCharCode(30);
	Papa.UNIT_SEP = String.fromCharCode(31);
	Papa.BYTE_ORDER_MARK = '\ufeff';
	Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
	Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
	Papa.SCRIPT_PATH = null;	// Must be set by your code if you use workers and this lib is loaded asynchronously

	// Configurable chunk sizes for local and remote files, respectively
	Papa.LocalChunkSize = 1024 * 1024 * 10;	// 10 MB
	Papa.RemoteChunkSize = 1024 * 1024 * 5;	// 5 MB
	Papa.DefaultDelimiter = ',';			// Used if not specified and detection fails

	// Exposed for testing and development only
	Papa.Parser = Parser;
	Papa.ParserHandle = ParserHandle;
	Papa.NetworkStreamer = NetworkStreamer;
	Papa.FileStreamer = FileStreamer;
	Papa.StringStreamer = StringStreamer;
	Papa.ReadableStreamStreamer = ReadableStreamStreamer;

	if (global.jQuery)
	{
		var $ = global.jQuery;
		$.fn.parse = function(options)
		{
			var config = options.config || {};
			var queue = [];

			this.each(function(idx)
			{
				var supported = $(this).prop('tagName').toUpperCase() === 'INPUT'
								&& $(this).attr('type').toLowerCase() === 'file'
								&& global.FileReader;

				if (!supported || !this.files || this.files.length === 0)
					return true;	// continue to next input element

				for (var i = 0; i < this.files.length; i++)
				{
					queue.push({
						file: this.files[i],
						inputElem: this,
						instanceConfig: $.extend({}, config)
					});
				}
			});

			parseNextFile();	// begin parsing
			return this;		// maintains chainability


			function parseNextFile()
			{
				if (queue.length === 0)
				{
					if (isFunction(options.complete))
						options.complete();
					return;
				}

				var f = queue[0];

				if (isFunction(options.before))
				{
					var returned = options.before(f.file, f.inputElem);

					if (typeof returned === 'object')
					{
						if (returned.action === 'abort')
						{
							error('AbortError', f.file, f.inputElem, returned.reason);
							return;	// Aborts all queued files immediately
						}
						else if (returned.action === 'skip')
						{
							fileComplete();	// parse the next file in the queue, if any
							return;
						}
						else if (typeof returned.config === 'object')
							f.instanceConfig = $.extend(f.instanceConfig, returned.config);
					}
					else if (returned === 'skip')
					{
						fileComplete();	// parse the next file in the queue, if any
						return;
					}
				}

				// Wrap up the user's complete callback, if any, so that ours also gets executed
				var userCompleteFunc = f.instanceConfig.complete;
				f.instanceConfig.complete = function(results)
				{
					if (isFunction(userCompleteFunc))
						userCompleteFunc(results, f.file, f.inputElem);
					fileComplete();
				};

				Papa.parse(f.file, f.instanceConfig);
			}

			function error(name, file, elem, reason)
			{
				if (isFunction(options.error))
					options.error({name: name}, file, elem, reason);
			}

			function fileComplete()
			{
				queue.splice(0, 1);
				parseNextFile();
			}
		}
	}


	if (IS_PAPA_WORKER)
	{
		global.onmessage = workerThreadReceivedMessage;
	}
	else if (Papa.WORKERS_SUPPORTED)
	{
		AUTO_SCRIPT_PATH = getScriptPath();

		// Check if the script was loaded synchronously
		if (!document.body)
		{
			// Body doesn't exist yet, must be synchronous
			LOADED_SYNC = true;
		}
		else
		{
			document.addEventListener('DOMContentLoaded', function () {
				LOADED_SYNC = true;
			}, true);
		}
	}




	function CsvToJson(_input, _config)
	{
		_config = _config || {};
		var dynamicTyping = _config.dynamicTyping || false;
		if (isFunction(dynamicTyping)) {
			_config.dynamicTypingFunction = dynamicTyping;
			// Will be filled on first row call
			dynamicTyping = {};
		}
		_config.dynamicTyping = dynamicTyping;

		if (_config.worker && Papa.WORKERS_SUPPORTED)
		{
			var w = newWorker();

			w.userStep = _config.step;
			w.userChunk = _config.chunk;
			w.userComplete = _config.complete;
			w.userError = _config.error;

			_config.step = isFunction(_config.step);
			_config.chunk = isFunction(_config.chunk);
			_config.complete = isFunction(_config.complete);
			_config.error = isFunction(_config.error);
			delete _config.worker;	// prevent infinite loop

			w.postMessage({
				input: _input,
				config: _config,
				workerId: w.id
			});

			return;
		}

		var streamer = null;
		if (typeof _input === 'string')
		{
			if (_config.download)
				streamer = new NetworkStreamer(_config);
			else
				streamer = new StringStreamer(_config);
		}
		else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on))
		{
			streamer = new ReadableStreamStreamer(_config);
		}
		else if ((global.File && _input instanceof File) || _input instanceof Object)	// ...Safari. (see issue #106)
			streamer = new FileStreamer(_config);

		return streamer.stream(_input);
	}






	function JsonToCsv(_input, _config)
	{
		var _output = '';
		var _fields = [];

		// Default configuration

		/** whether to surround every datum with quotes */
		var _quotes = false;

		/** whether to write headers */
		var _writeHeader = true;

		/** delimiting character */
		var _delimiter = ',';

		/** newline character(s) */
		var _newline = '\r\n';

		/** quote character */
		var _quoteChar = '"';

		unpackConfig();

		var quoteCharRegex = new RegExp(_quoteChar, 'g');

		if (typeof _input === 'string')
			_input = JSON.parse(_input);

		if (_input instanceof Array)
		{
			if (!_input.length || _input[0] instanceof Array)
				return serialize(null, _input);
			else if (typeof _input[0] === 'object')
				return serialize(objectKeys(_input[0]), _input);
		}
		else if (typeof _input === 'object')
		{
			if (typeof _input.data === 'string')
				_input.data = JSON.parse(_input.data);

			if (_input.data instanceof Array)
			{
				if (!_input.fields)
					_input.fields =  _input.meta && _input.meta.fields;

				if (!_input.fields)
					_input.fields =  _input.data[0] instanceof Array
									? _input.fields
									: objectKeys(_input.data[0]);

				if (!(_input.data[0] instanceof Array) && typeof _input.data[0] !== 'object')
					_input.data = [_input.data];	// handles input like [1,2,3] or ['asdf']
			}

			return serialize(_input.fields || [], _input.data || []);
		}

		// Default (any valid paths should return before this)
		throw 'exception: Unable to serialize unrecognized input';


		function unpackConfig()
		{
			if (typeof _config !== 'object')
				return;

			if (typeof _config.delimiter === 'string'
				&& _config.delimiter.length === 1
				&& Papa.BAD_DELIMITERS.indexOf(_config.delimiter) === -1)
			{
				_delimiter = _config.delimiter;
			}

			if (typeof _config.quotes === 'boolean'
				|| _config.quotes instanceof Array)
				_quotes = _config.quotes;

			if (typeof _config.newline === 'string')
				_newline = _config.newline;

			if (typeof _config.quoteChar === 'string')
				_quoteChar = _config.quoteChar;

			if (typeof _config.header === 'boolean')
				_writeHeader = _config.header;
		}


		/** Turns an object's keys into an array */
		function objectKeys(obj)
		{
			if (typeof obj !== 'object')
				return [];
			var keys = [];
			for (var key in obj)
				keys.push(key);
			return keys;
		}

		/** The double for loop that iterates the data and writes out a CSV string including header row */
		function serialize(fields, data)
		{
			var csv = '';

			if (typeof fields === 'string')
				fields = JSON.parse(fields);
			if (typeof data === 'string')
				data = JSON.parse(data);

			var hasHeader = fields instanceof Array && fields.length > 0;
			var dataKeyedByField = !(data[0] instanceof Array);

			// If there a header row, write it first
			if (hasHeader && _writeHeader)
			{
				for (var i = 0; i < fields.length; i++)
				{
					if (i > 0)
						csv += _delimiter;
					csv += safe(fields[i], i);
				}
				if (data.length > 0)
					csv += _newline;
			}

			// Then write out the data
			for (var row = 0; row < data.length; row++)
			{
				var maxCol = hasHeader ? fields.length : data[row].length;

				for (var col = 0; col < maxCol; col++)
				{
					if (col > 0)
						csv += _delimiter;
					var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
					csv += safe(data[row][colIdx], col);
				}

				if (row < data.length - 1)
					csv += _newline;
			}

			return csv;
		}

		/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
		function safe(str, col)
		{
			if (typeof str === 'undefined' || str === null)
				return '';

			str = str.toString().replace(quoteCharRegex, _quoteChar+_quoteChar);

			var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
							|| (_quotes instanceof Array && _quotes[col])
							|| hasAny(str, Papa.BAD_DELIMITERS)
							|| str.indexOf(_delimiter) > -1
							|| str.charAt(0) === ' '
							|| str.charAt(str.length - 1) === ' ';

			return needsQuotes ? _quoteChar + str + _quoteChar : str;
		}

		function hasAny(str, substrings)
		{
			for (var i = 0; i < substrings.length; i++)
				if (str.indexOf(substrings[i]) > -1)
					return true;
			return false;
		}
	}

	/** ChunkStreamer is the base prototype for various streamer implementations. */
	function ChunkStreamer(config)
	{
		this._handle = null;
		this._paused = false;
		this._finished = false;
		this._input = null;
		this._baseIndex = 0;
		this._partialLine = '';
		this._rowCount = 0;
		this._start = 0;
		this._nextChunk = null;
		this.isFirstChunk = true;
		this._completeResults = {
			data: [],
			errors: [],
			meta: {}
		};
		replaceConfig.call(this, config);

		this.parseChunk = function(chunk)
		{
			// First chunk pre-processing
			if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
			{
				var modifiedChunk = this._config.beforeFirstChunk(chunk);
				if (modifiedChunk !== undefined)
					chunk = modifiedChunk;
			}
			this.isFirstChunk = false;

			// Rejoin the line we likely just split in two by chunking the file
			var aggregate = this._partialLine + chunk;
			this._partialLine = '';

			var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

			if (this._handle.paused() || this._handle.aborted())
				return;

			var lastIndex = results.meta.cursor;

			if (!this._finished)
			{
				this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
				this._baseIndex = lastIndex;
			}

			if (results && results.data)
				this._rowCount += results.data.length;

			var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

			if (IS_PAPA_WORKER)
			{
				global.postMessage({
					results: results,
					workerId: Papa.WORKER_ID,
					finished: finishedIncludingPreview
				});
			}
			else if (isFunction(this._config.chunk))
			{
				this._config.chunk(results, this._handle);
				if (this._paused)
					return;
				results = undefined;
				this._completeResults = undefined;
			}

			if (!this._config.step && !this._config.chunk) {
				this._completeResults.data = this._completeResults.data.concat(results.data);
				this._completeResults.errors = this._completeResults.errors.concat(results.errors);
				this._completeResults.meta = results.meta;
			}

			if (finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted))
				this._config.complete(this._completeResults, this._input);

			if (!finishedIncludingPreview && (!results || !results.meta.paused))
				this._nextChunk();

			return results;
		};

		this._sendError = function(error)
		{
			if (isFunction(this._config.error))
				this._config.error(error);
			else if (IS_PAPA_WORKER && this._config.error)
			{
				global.postMessage({
					workerId: Papa.WORKER_ID,
					error: error,
					finished: false
				});
			}
		};

		function replaceConfig(config)
		{
			// Deep-copy the config so we can edit it
			var configCopy = copy(config);
			configCopy.chunkSize = parseInt(configCopy.chunkSize);	// parseInt VERY important so we don't concatenate strings!
			if (!config.step && !config.chunk)
				configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
			this._handle = new ParserHandle(configCopy);
			this._handle.streamer = this;
			this._config = configCopy;	// persist the copy to the caller
		}
	}


	function NetworkStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.RemoteChunkSize;
		ChunkStreamer.call(this, config);

		var xhr;

		if (IS_WORKER)
		{
			this._nextChunk = function()
			{
				this._readChunk();
				this._chunkLoaded();
			};
		}
		else
		{
			this._nextChunk = function()
			{
				this._readChunk();
			};
		}

		this.stream = function(url)
		{
			this._input = url;
			this._nextChunk();	// Starts streaming
		};

		this._readChunk = function()
		{
			if (this._finished)
			{
				this._chunkLoaded();
				return;
			}

			xhr = new XMLHttpRequest();

			if (this._config.withCredentials)
			{
				xhr.withCredentials = this._config.withCredentials;
			}

			if (!IS_WORKER)
			{
				xhr.onload = bindFunction(this._chunkLoaded, this);
				xhr.onerror = bindFunction(this._chunkError, this);
			}

			xhr.open('GET', this._input, !IS_WORKER);
			// Headers can only be set when once the request state is OPENED
			if (this._config.downloadRequestHeaders)
			{
				var headers = this._config.downloadRequestHeaders;

				for (var headerName in headers)
				{
					xhr.setRequestHeader(headerName, headers[headerName]);
				}
			}

			if (this._config.chunkSize)
			{
				var end = this._start + this._config.chunkSize - 1;	// minus one because byte range is inclusive
				xhr.setRequestHeader('Range', 'bytes='+this._start+'-'+end);
				xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
			}

			try {
				xhr.send();
			}
			catch (err) {
				this._chunkError(err.message);
			}

			if (IS_WORKER && xhr.status === 0)
				this._chunkError();
			else
				this._start += this._config.chunkSize;
		}

		this._chunkLoaded = function()
		{
			if (xhr.readyState != 4)
				return;

			if (xhr.status < 200 || xhr.status >= 400)
			{
				this._chunkError();
				return;
			}

			this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
			this.parseChunk(xhr.responseText);
		}

		this._chunkError = function(errorMessage)
		{
			var errorText = xhr.statusText || errorMessage;
			this._sendError(errorText);
		}

		function getFileSize(xhr)
		{
			var contentRange = xhr.getResponseHeader('Content-Range');
			if (contentRange === null) { // no content range, then finish!
					return -1;
					}
			return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
		}
	}
	NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
	NetworkStreamer.prototype.constructor = NetworkStreamer;


	function FileStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.LocalChunkSize;
		ChunkStreamer.call(this, config);

		var reader, slice;

		// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
		// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
		var usingAsyncReader = typeof FileReader !== 'undefined';	// Safari doesn't consider it a function - see issue #105

		this.stream = function(file)
		{
			this._input = file;
			slice = file.slice || file.webkitSlice || file.mozSlice;

			if (usingAsyncReader)
			{
				reader = new FileReader();		// Preferred method of reading files, even in workers
				reader.onload = bindFunction(this._chunkLoaded, this);
				reader.onerror = bindFunction(this._chunkError, this);
			}
			else
				reader = new FileReaderSync();	// Hack for running in a web worker in Firefox

			this._nextChunk();	// Starts streaming
		};

		this._nextChunk = function()
		{
			if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
				this._readChunk();
		}

		this._readChunk = function()
		{
			var input = this._input;
			if (this._config.chunkSize)
			{
				var end = Math.min(this._start + this._config.chunkSize, this._input.size);
				input = slice.call(input, this._start, end);
			}
			var txt = reader.readAsText(input, this._config.encoding);
			if (!usingAsyncReader)
				this._chunkLoaded({ target: { result: txt } });	// mimic the async signature
		}

		this._chunkLoaded = function(event)
		{
			// Very important to increment start each time before handling results
			this._start += this._config.chunkSize;
			this._finished = !this._config.chunkSize || this._start >= this._input.size;
			this.parseChunk(event.target.result);
		}

		this._chunkError = function()
		{
			this._sendError(reader.error);
		}

	}
	FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
	FileStreamer.prototype.constructor = FileStreamer;


	function StringStreamer(config)
	{
		config = config || {};
		ChunkStreamer.call(this, config);

		var string;
		var remaining;
		this.stream = function(s)
		{
			string = s;
			remaining = s;
			return this._nextChunk();
		}
		this._nextChunk = function()
		{
			if (this._finished) return;
			var size = this._config.chunkSize;
			var chunk = size ? remaining.substr(0, size) : remaining;
			remaining = size ? remaining.substr(size) : '';
			this._finished = !remaining;
			return this.parseChunk(chunk);
		}
	}
	StringStreamer.prototype = Object.create(StringStreamer.prototype);
	StringStreamer.prototype.constructor = StringStreamer;


	function ReadableStreamStreamer(config)
	{
		config = config || {};

		ChunkStreamer.call(this, config);

		var queue = [];
		var parseOnData = true;

		this.stream = function(stream)
		{
			this._input = stream;

			this._input.on('data', this._streamData);
			this._input.on('end', this._streamEnd);
			this._input.on('error', this._streamError);
		}

		this._nextChunk = function()
		{
			if (queue.length)
			{
				this.parseChunk(queue.shift());
			}
			else
			{
				parseOnData = true;
			}
		}

		this._streamData = bindFunction(function(chunk)
		{
			try
			{
				queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

				if (parseOnData)
				{
					parseOnData = false;
					this.parseChunk(queue.shift());
				}
			}
			catch (error)
			{
				this._streamError(error);
			}
		}, this);

		this._streamError = bindFunction(function(error)
		{
			this._streamCleanUp();
			this._sendError(error.message);
		}, this);

		this._streamEnd = bindFunction(function()
		{
			this._streamCleanUp();
			this._finished = true;
			this._streamData('');
		}, this);

		this._streamCleanUp = bindFunction(function()
		{
			this._input.removeListener('data', this._streamData);
			this._input.removeListener('end', this._streamEnd);
			this._input.removeListener('error', this._streamError);
		}, this);
	}
	ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
	ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;


	// Use one ParserHandle per entire CSV file or string
	function ParserHandle(_config)
	{
		// One goal is to minimize the use of regular expressions...
		var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;

		var self = this;
		var _stepCounter = 0;	// Number of times step was called (number of rows parsed)
		var _input;				// The input being parsed
		var _parser;			// The core parser being used
		var _paused = false;	// Whether we are paused or not
		var _aborted = false;	// Whether the parser has aborted or not
		var _delimiterError;	// Temporary state between delimiter detection and processing results
		var _fields = [];		// Fields are from the header row of the input, if there is one
		var _results = {		// The last results returned from the parser
			data: [],
			errors: [],
			meta: {}
		};

		if (isFunction(_config.step))
		{
			var userStep = _config.step;
			_config.step = function(results)
			{
				_results = results;

				if (needsHeaderRow())
					processResults();
				else	// only call user's step function after header row
				{
					processResults();

					// It's possbile that this line was empty and there's no row here after all
					if (_results.data.length === 0)
						return;

					_stepCounter += results.data.length;
					if (_config.preview && _stepCounter > _config.preview)
						_parser.abort();
					else
						userStep(_results, self);
				}
			};
		}

		/**
		 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
		 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
		 * when an input comes in multiple chunks, like from a file.
		 */
		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			if (!_config.newline)
				_config.newline = guessLineEndings(input);

			_delimiterError = false;
			if (!_config.delimiter)
			{
				var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines);
				if (delimGuess.successful)
					_config.delimiter = delimGuess.bestDelimiter;
				else
				{
					_delimiterError = true;	// add error after parsing (otherwise it would be overwritten)
					_config.delimiter = Papa.DefaultDelimiter;
				}
				_results.meta.delimiter = _config.delimiter;
			}
			else if(isFunction(_config.delimiter))
			{
				_config.delimiter = _config.delimiter(input);
				_results.meta.delimiter = _config.delimiter;
			}

			var parserConfig = copy(_config);
			if (_config.preview && _config.header)
				parserConfig.preview++;	// to compensate for header row

			_input = input;
			_parser = new Parser(parserConfig);
			_results = _parser.parse(_input, baseIndex, ignoreLastRow);
			processResults();
			return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
		};

		this.paused = function()
		{
			return _paused;
		};

		this.pause = function()
		{
			_paused = true;
			_parser.abort();
			_input = _input.substr(_parser.getCharIndex());
		};

		this.resume = function()
		{
			_paused = false;
			self.streamer.parseChunk(_input);
		};

		this.aborted = function ()
		{
			return _aborted;
		};

		this.abort = function()
		{
			_aborted = true;
			_parser.abort();
			_results.meta.aborted = true;
			if (isFunction(_config.complete))
				_config.complete(_results);
			_input = '';
		};

		function processResults()
		{
			if (_results && _delimiterError)
			{
				addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \''+Papa.DefaultDelimiter+'\'');
				_delimiterError = false;
			}

			if (_config.skipEmptyLines)
			{
				for (var i = 0; i < _results.data.length; i++)
					if (_results.data[i].length === 1 && _results.data[i][0] === '')
						_results.data.splice(i--, 1);
			}

			if (needsHeaderRow())
				fillHeaderFields();

			return applyHeaderAndDynamicTyping();
		}

		function needsHeaderRow()
		{
			return _config.header && _fields.length === 0;
		}

		function fillHeaderFields()
		{
			if (!_results)
				return;
			for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
				for (var j = 0; j < _results.data[i].length; j++)
					_fields.push(_results.data[i][j]);
			_results.data.splice(0, 1);
		}

		function shouldApplyDynamicTyping(field) {
			// Cache function values to avoid calling it for each row
			if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
				_config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
			}
			return (_config.dynamicTyping[field] || _config.dynamicTyping) === true
		}

		function parseDynamic(field, value)
		{
			if (shouldApplyDynamicTyping(field))
			{
				if (value === 'true' || value === 'TRUE')
					return true;
				else if (value === 'false' || value === 'FALSE')
					return false;
				else
					return tryParseFloat(value);
			}
			return value;
		}

		function applyHeaderAndDynamicTyping()
		{
			if (!_results || (!_config.header && !_config.dynamicTyping))
				return _results;

			for (var i = 0; i < _results.data.length; i++)
			{
				var row = _config.header ? {} : [];

				for (var j = 0; j < _results.data[i].length; j++)
				{
					var field = j;
					var value = _results.data[i][j];

					if (_config.header)
						field = j >= _fields.length ? '__parsed_extra' : _fields[j];

					value = parseDynamic(field, value);

					if (field === '__parsed_extra')
					{
						row[field] = row[field] || [];
						row[field].push(value);
					}
					else
						row[field] = value;
				}

				_results.data[i] = row;

				if (_config.header)
				{
					if (j > _fields.length)
						addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, i);
					else if (j < _fields.length)
						addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, i);
				}
			}

			if (_config.header && _results.meta)
				_results.meta.fields = _fields;
			return _results;
		}

		function guessDelimiter(input, newline, skipEmptyLines)
		{
			var delimChoices = [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i = 0; i < delimChoices.length; i++)
			{
				var delim = delimChoices[i];
				var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
				fieldCountPrevRow = undefined;

				var preview = new Parser({
					delimiter: delim,
					newline: newline,
					preview: 10
				}).parse(input);

				for (var j = 0; j < preview.data.length; j++)
				{
					if (skipEmptyLines && preview.data[j].length === 1 && preview.data[j][0].length === 0) {
						emptyLinesCount++
						continue
					}
					var fieldCount = preview.data[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined')
					{
						fieldCountPrevRow = fieldCount;
						continue;
					}
					else if (fieldCount > 1)
					{
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				if (preview.data.length > 0)
					avgFieldCount /= (preview.data.length - emptyLinesCount);

				if ((typeof bestDelta === 'undefined' || delta < bestDelta)
					&& avgFieldCount > 1.99)
				{
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return {
				successful: !!bestDelim,
				bestDelimiter: bestDelim
			}
		}

		function guessLineEndings(input)
		{
			input = input.substr(0, 1024*1024);	// max length 1 MB

			var r = input.split('\r');

			var n = input.split('\n');

			var nAppearsFirst = (n.length > 1 && n[0].length < r[0].length);

			if (r.length === 1 || nAppearsFirst)
				return '\n';

			var numWithN = 0;
			for (var i = 0; i < r.length; i++)
			{
				if (r[i][0] === '\n')
					numWithN++;
			}

			return numWithN >= r.length / 2 ? '\r\n' : '\r';
		}

		function tryParseFloat(val)
		{
			var isNumber = FLOAT.test(val);
			return isNumber ? parseFloat(val) : val;
		}

		function addError(type, code, msg, row)
		{
			_results.errors.push({
				type: type,
				code: code,
				message: msg,
				row: row
			});
		}
	}





	/** The core parser implements speedy and correct CSV parsing */
	function Parser(config)
	{
		// Unpack the config object
		config = config || {};
		var delim = config.delimiter;
		var newline = config.newline;
		var comments = config.comments;
		var step = config.step;
		var preview = config.preview;
		var fastMode = config.fastMode;
		var quoteChar = config.quoteChar || '"';

		// Delimiter must be valid
		if (typeof delim !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(delim) > -1)
			delim = ',';

		// Comment character must be valid
		if (comments === delim)
			throw 'Comment character same as delimiter';
		else if (comments === true)
			comments = '#';
		else if (typeof comments !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(comments) > -1)
			comments = false;

		// Newline must be valid: \r, \n, or \r\n
		if (newline != '\n' && newline != '\r' && newline != '\r\n')
			newline = '\n';

		// We're gonna need these at the Parser scope
		var cursor = 0;
		var aborted = false;

		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			// For some reason, in Chrome, this speeds things up (!?)
			if (typeof input !== 'string')
				throw 'Input must be a string';

			// We don't need to compute some of these every time parse() is called,
			// but having them in a more local scope seems to perform better
			var inputLen = input.length,
				delimLen = delim.length,
				newlineLen = newline.length,
				commentsLen = comments.length;
			var stepIsFunction = isFunction(step);

			// Establish starting state
			cursor = 0;
			var data = [], errors = [], row = [], lastCursor = 0;

			if (!input)
				return returnable();

			if (fastMode || (fastMode !== false && input.indexOf(quoteChar) === -1))
			{
				var rows = input.split(newline);
				for (var i = 0; i < rows.length; i++)
				{
					var row = rows[i];
					cursor += row.length;
					if (i !== rows.length - 1)
						cursor += newline.length;
					else if (ignoreLastRow)
						return returnable();
					if (comments && row.substr(0, commentsLen) === comments)
						continue;
					if (stepIsFunction)
					{
						data = [];
						pushRow(row.split(delim));
						doStep();
						if (aborted)
							return returnable();
					}
					else
						pushRow(row.split(delim));
					if (preview && i >= preview)
					{
						data = data.slice(0, preview);
						return returnable(true);
					}
				}
				return returnable();
			}

			var nextDelim = input.indexOf(delim, cursor);
			var nextNewline = input.indexOf(newline, cursor);
			var quoteCharRegex = new RegExp(quoteChar+quoteChar, 'g');

			// Parser loop
			for (;;)
			{
				// Field has opening quote
				if (input[cursor] === quoteChar)
				{
					// Start our search for the closing quote where the cursor is
					var quoteSearch = cursor;

					// Skip the opening quote
					cursor++;

					for (;;)
					{
						// Find closing quote
						var quoteSearch = input.indexOf(quoteChar, quoteSearch+1);

						//No other quotes are found - no other delimiters
						if (quoteSearch === -1)
						{
							if (!ignoreLastRow) {
								// No closing quote... what a pity
								errors.push({
									type: 'Quotes',
									code: 'MissingQuotes',
									message: 'Quoted field unterminated',
									row: data.length,	// row has yet to be inserted
									index: cursor
								});
							}
							return finish();
						}

						// Closing quote at EOF
						if (quoteSearch === inputLen-1)
						{
							var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
							return finish(value);
						}

						// If this quote is escaped, it's part of the data; skip it
						if (input[quoteSearch+1] === quoteChar)
						{
							quoteSearch++;
							continue;
						}

						// Closing quote followed by delimiter
						if (input[quoteSearch+1] === delim)
						{
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							cursor = quoteSearch + 1 + delimLen;
							nextDelim = input.indexOf(delim, cursor);
							nextNewline = input.indexOf(newline, cursor);
							break;
						}

						// Closing quote followed by newline
						if (input.substr(quoteSearch+1, newlineLen) === newline)
						{
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							saveRow(quoteSearch + 1 + newlineLen);
							nextDelim = input.indexOf(delim, cursor);	// because we may have skipped the nextDelim in the quoted field

							if (stepIsFunction)
							{
								doStep();
								if (aborted)
									return returnable();
							}

							if (preview && data.length >= preview)
								return returnable(true);

							break;
						}


						// Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
						errors.push({
							type: 'Quotes',
							code: 'InvalidQuotes',
							message: 'Trailing quote on quoted field is malformed',
							row: data.length,	// row has yet to be inserted
							index: cursor
						});

						quoteSearch++;
						continue;

					}

					continue;
				}

				// Comment found at start of new line
				if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
				{
					if (nextNewline === -1)	// Comment ends at EOF
						return returnable();
					cursor = nextNewline + newlineLen;
					nextNewline = input.indexOf(newline, cursor);
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// Next delimiter comes before next newline, so we've reached end of field
				if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
				{
					row.push(input.substring(cursor, nextDelim));
					cursor = nextDelim + delimLen;
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// End of row
				if (nextNewline !== -1)
				{
					row.push(input.substring(cursor, nextNewline));
					saveRow(nextNewline + newlineLen);

					if (stepIsFunction)
					{
						doStep();
						if (aborted)
							return returnable();
					}

					if (preview && data.length >= preview)
						return returnable(true);

					continue;
				}

				break;
			}


			return finish();


			function pushRow(row)
			{
				data.push(row);
				lastCursor = cursor;
			}

			/**
			 * Appends the remaining input from cursor to the end into
			 * row, saves the row, calls step, and returns the results.
			 */
			function finish(value)
			{
				if (ignoreLastRow)
					return returnable();
				if (typeof value === 'undefined')
					value = input.substr(cursor);
				row.push(value);
				cursor = inputLen;	// important in case parsing is paused
				pushRow(row);
				if (stepIsFunction)
					doStep();
				return returnable();
			}

			/**
			 * Appends the current row to the results. It sets the cursor
			 * to newCursor and finds the nextNewline. The caller should
			 * take care to execute user's step function and check for
			 * preview and end parsing if necessary.
			 */
			function saveRow(newCursor)
			{
				cursor = newCursor;
				pushRow(row);
				row = [];
				nextNewline = input.indexOf(newline, cursor);
			}

			/** Returns an object with the results, errors, and meta. */
			function returnable(stopped)
			{
				return {
					data: data,
					errors: errors,
					meta: {
						delimiter: delim,
						linebreak: newline,
						aborted: aborted,
						truncated: !!stopped,
						cursor: lastCursor + (baseIndex || 0)
					}
				};
			}

			/** Executes the user's step function and resets data & errors. */
			function doStep()
			{
				step(returnable());
				data = [], errors = [];
			}
		};

		/** Sets the abort flag */
		this.abort = function()
		{
			aborted = true;
		};

		/** Gets the cursor position */
		this.getCharIndex = function()
		{
			return cursor;
		};
	}


	// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
	// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
	function getScriptPath()
	{
		var scripts = document.getElementsByTagName('script');
		return scripts.length ? scripts[scripts.length - 1].src : '';
	}

	function newWorker()
	{
		if (!Papa.WORKERS_SUPPORTED)
			return false;
		if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
			throw new Error(
				'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
				'You need to set Papa.SCRIPT_PATH manually.'
			);
		var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
		// Append 'papaworker' to the search string to tell papaparse that this is our worker.
		workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
		var w = new global.Worker(workerUrl);
		w.onmessage = mainThreadReceivedMessage;
		w.id = workerIdCounter++;
		workers[w.id] = w;
		return w;
	}

	/** Callback when main thread receives a message */
	function mainThreadReceivedMessage(e)
	{
		var msg = e.data;
		var worker = workers[msg.workerId];
		var aborted = false;

		if (msg.error)
			worker.userError(msg.error, msg.file);
		else if (msg.results && msg.results.data)
		{
			var abort = function() {
				aborted = true;
				completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
			};

			var handle = {
				abort: abort,
				pause: notImplemented,
				resume: notImplemented
			};

			if (isFunction(worker.userStep))
			{
				for (var i = 0; i < msg.results.data.length; i++)
				{
					worker.userStep({
						data: [msg.results.data[i]],
						errors: msg.results.errors,
						meta: msg.results.meta
					}, handle);
					if (aborted)
						break;
				}
				delete msg.results;	// free memory ASAP
			}
			else if (isFunction(worker.userChunk))
			{
				worker.userChunk(msg.results, handle, msg.file);
				delete msg.results;
			}
		}

		if (msg.finished && !aborted)
			completeWorker(msg.workerId, msg.results);
	}

	function completeWorker(workerId, results) {
		var worker = workers[workerId];
		if (isFunction(worker.userComplete))
			worker.userComplete(results);
		worker.terminate();
		delete workers[workerId];
	}

	function notImplemented() {
		throw 'Not implemented.';
	}

	/** Callback when worker thread receives a message */
	function workerThreadReceivedMessage(e)
	{
		var msg = e.data;

		if (typeof Papa.WORKER_ID === 'undefined' && msg)
			Papa.WORKER_ID = msg.workerId;

		if (typeof msg.input === 'string')
		{
			global.postMessage({
				workerId: Papa.WORKER_ID,
				results: Papa.parse(msg.input, msg.config),
				finished: true
			});
		}
		else if ((global.File && msg.input instanceof File) || msg.input instanceof Object)	// thank you, Safari (see issue #106)
		{
			var results = Papa.parse(msg.input, msg.config);
			if (results)
				global.postMessage({
					workerId: Papa.WORKER_ID,
					results: results,
					finished: true
				});
		}
	}

	/** Makes a deep copy of an array or object (mostly) */
	function copy(obj)
	{
		if (typeof obj !== 'object')
			return obj;
		var cpy = obj instanceof Array ? [] : {};
		for (var key in obj)
			cpy[key] = copy(obj[key]);
		return cpy;
	}

	function bindFunction(f, self)
	{
		return function() { f.apply(self, arguments); };
	}

	function isFunction(func)
	{
		return typeof func === 'function';
	}

	return Papa;
}));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = aggregateData;

var _filters = __webpack_require__(19);

function aggregateData(layerData, locations, filterOptions) {
  var data = layerData.mergedData;
  var aggregatedData = [];
  // merge OSM Ids
  if (layerData['merge-locations']) {
    data.map(function (datum) {
      var row = datum;
      if (!datum.district_id) {
        // add district_id if not defined
        row.district_id = locations[datum.District];
        if (!datum.district_id) {
          // Use alternative district field
          row.district_id = locations[datum['survey_intro/District_miss']];
        }
        if (!datum.district_id) {
          // Use alternative region miss field
          row.district_id = locations[datum['survey_intro/Region_miss']];
        }
      }
      return row;
    });
  }

  layerData.mergedData = data.filter(function (datum) {
    return datum.district_id !== undefined;
  });

  // Process filters with filterOptions
  data = (0, _filters.processFilters)(layerData, filterOptions);
  // aggregate raw data
  aggregatedData = milia.stats.aggregate_data(data, layerData.property, layerData.aggregate);

  return aggregatedData;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchFormData;
var protocol = 'https';
var host = 'api.ona.io';

function fetchFormData(datasetID, properties, callback) {
  var fields = properties.map(function (p) {
    return '"' + p + '"';
  }).join();
  var queryParams = { fields: '[' + fields + ']' };
  milia.wrapper.set_host(protocol, host);
  milia.wrapper.get_form_data(datasetID, queryParams,
  //  self.props.mapConfig.apiAccessToken, // get API access token from state
  callback);
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addLayer;

var _sortLayers = __webpack_require__(64);

var _sortLayers2 = _interopRequireDefault(_sortLayers);

var _buildTimeseriesData = __webpack_require__(65);

var _buildTimeseriesData2 = _interopRequireDefault(_buildTimeseriesData);

var _generateStops = __webpack_require__(66);

var _generateStops2 = _interopRequireDefault(_generateStops);

var _addChart = __webpack_require__(111);

var _addChart2 = _interopRequireDefault(_addChart);

var _addLegend = __webpack_require__(112);

var _addLegend2 = _interopRequireDefault(_addLegend);

var _addLabels = __webpack_require__(115);

var _addLabels2 = _interopRequireDefault(_addLabels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function addLayer(map, layer, mapConfig) {
  var timefield = layer.aggregate && layer.aggregate.timeseries ? layer.aggregate.timeseries.field : '';
  var stops = void 0;
  var newStops = void 0;
  var circleLayer = void 0;
  var fillLayer = void 0;
  var lineLayer = void 0;
  var symbolLayer = void 0;

  if (layer === undefined) {
    return null;
  }

  var layerObj = layer;
  if (typeof layerObj.isChartMin === 'undefined') {
    layerObj.isChartMin = true;
    layerObj.legendBottom = 40;
  }

  if (layer.property) {
    stops = (0, _generateStops2.default)(layer, timefield);
  }

  if (stops) {
    newStops = { stops: stops, id: layer.id };
    var colorStops = timefield ? stops[0][stops[0].length - 1] : stops[0][0];
    var radiusStops = stops[1][0];
    var stopsData = layer.type === 'circle' ? radiusStops : colorStops;
    var breaks = stops[3];
    var colors = stops[4];
    var currPeriod = stops[2][stops[2].length - 1];
    var currData = layer.source.data.filter(function (data) {
      return data[timefield] === currPeriod;
    });
    var Data = timefield ? currData : layer.source.data;

    (0, _addLegend2.default)(layer, stopsData, Data, breaks, colors);
    (0, _addLabels2.default)(map, layer, Data);
  } else if (layer.credit && layer.categories && layer.categories.breaks === 'no') {
    (0, _addLegend2.default)(layer);
  } else {
    $('.legend-row.primary').removeClass('primary');
  }

  /*
   * CIRCLE ==========================================================
   */
  if (layer.type === 'circle') {
    circleLayer = {
      id: layer.id,
      visible: layer.visible,
      type: 'circle',
      source: {
        type: layer.source.type
      },
      layout: {},
      paint: {
        'circle-color': layer.categories.color instanceof Array && !layer.paint ? {
          property: layer.source.join[0],
          stops: timefield ? stops[0][stops[0].length - 1] : stops[0][0],
          type: 'categorical'
        } : layer.categories.color,
        'circle-opacity': 0.8,
        'circle-stroke-color': '#fff',
        'circle-stroke-width': layer.categories.color instanceof Array && !layer.paint ? {
          property: layer.source.join[0],
          stops: timefield ? stops[5][stops[5].length - 1] : stops[5][0],
          type: 'categorical',
          default: 0
        } : 1,
        'circle-stroke-opacity': 1
      }
    };

    // override from layers.json
    if (layer.paint) {
      circleLayer.paint = layer.paint;
    }

    if (layer.source.minzoom) {
      circleLayer.minzoom = layer.source.minzoom;
    }
    if (layer.source.maxzoom) {
      circleLayer.maxzoom = layer.source.maxzoom;
    }

    if (layer.source.data) {
      if (layer.source.type === 'vector') {
        var layerStops = stops ? timefield ? stops[1][stops[1].length - 1] : stops[1][0] : [[0, 0]];
        circleLayer.paint['circle-radius'] = {
          property: layer.source.join[0],
          stops: layerStops,
          type: 'categorical',
          default: stops ? 0 : 3
        };
        circleLayer.source.url = layer.source.url;
        circleLayer['source-layer'] = layer.source.layer;
      } else if (layer.source.type === 'geojson') {
        if (stops) {
          circleLayer.paint['circle-radius'] = {
            property: layer.source.join[0],
            stops: stops[1][0]
          };
        }
        circleLayer.source.data = layer.source.data;
      }
    }
    // add filter
    if (layer.filter) {
      circleLayer.filter = layer.filter;
    }

    if (!map.getLayer(circleLayer.id)) map.addLayer(circleLayer);
    if (map.getLayer(circleLayer.id)) {
      map.setLayoutProperty(circleLayer.id, 'visibility', circleLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * FILL ==========================================================
   */
  if (layer.type === 'fill') {
    fillLayer = {
      id: layer.id,
      visible: layer.visible,
      type: 'fill',
      source: {
        type: layer.source.type
      },
      layout: {},
      paint: {
        'fill-color': '#f00',
        'fill-opacity': 0.7
      }
    };

    // override from layers.json
    if (layer.paint) {
      fillLayer.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      fillLayer.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      fillLayer.maxzoom = layer.maxzoom;
    }

    if (!layer['no-outline']) {
      fillLayer.paint['fill-outline-color'] = '#fff';
    }

    if (layer.source.type === 'geojson') {
      fillLayer.source.data = layer.source.data;
    } else {
      fillLayer.source.url = layer.source.url;
      fillLayer['source-layer'] = layer.source.layer;
    }

    if (layer.source.data && !layer.paint) {
      var _layerStops = timefield ? stops[0][stops[1].length - 1] : stops[0][0];

      fillLayer.paint['fill-color'] = {
        property: layer.source.join[0],
        stops: _layerStops,
        type: 'categorical',
        default: 'rgba(0,0,0,0)'
      };
    }
    // add filter
    if (layer.filter) {
      fillLayer.filter = layer.filter;
    }

    if (!map.getLayer(fillLayer.id)) map.addLayer(fillLayer);
    if (map.getLayer(fillLayer.id)) {
      map.setLayoutProperty(fillLayer.id, 'visibility', fillLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * LINE ==========================================================
   */
  if (layer.type === 'line') {
    lineLayer = {
      id: layer.id,
      type: 'line',
      visible: layer.visible,
      source: {
        type: layer.source.type
      },
      layout: {},
      paint: {
        'line-color': '#f00',
        'line-width': 1
      }
    };
    if (layer.paint) {
      lineLayer.paint = layer.paint;
    }
    if (layer.source.minzoom) {
      lineLayer.minzoom = layer.source.minzoom;
    }
    if (layer.maxzoom) {
      lineLayer.maxzoom = layer.maxzoom;
    }
    if (layer.source.type === 'geojson') {
      lineLayer.source.data = layer.source.data;
    } else {
      lineLayer.source.url = layer.source.url;
      lineLayer['source-layer'] = layer.source.layer;
    }
    if (!map.getLayer(lineLayer.id)) map.addLayer(lineLayer);
    if (map.getLayer(lineLayer.id)) {
      map.setLayoutProperty(lineLayer.id, 'visibility', lineLayer.visible ? 'visible' : 'none');
    }
  }

  /*
   * SYMBOL ==========================================================
   */
  if (layer.type === 'symbol') {
    symbolLayer = {
      id: layer.id,
      visible: layer.visible,
      type: 'symbol',
      source: {
        type: layer.source.type
      },
      minzoom: layer.source.minzoom ? layer.source.minzoom : mapConfig.zoom,
      maxzoom: layer.source.maxzoom ? layer.source.maxzoom : 22,
      layout: layer.layout,
      paint: layer.paint
    };

    // add filter
    if (layer.filter) {
      symbolLayer.filter = layer.filter;
    }

    if (layer.source.type === 'geojson') {
      if (layer.source.data.features && layer.source.data.features[0] && layer.source.data.features[0].geometry) {
        symbolLayer.source.data = layer.source.data;
      } else if (layer.properties && layer.properties.length) {
        symbolLayer.source.data = {
          type: 'FeatureCollection',
          features: layer.source.data.map(function (d) {
            var propertiesMap = {};
            layer.properties.forEach(function (prop) {
              propertiesMap[prop] = isNaN(d[prop]) ? d[prop] : Number(d[prop]);
            });
            return {
              type: 'Feature',
              properties: propertiesMap,
              geometry: {
                type: 'Point',
                coordinates: [Number(d.Longitude), Number(d.Latitude)]
              }
            };
          })
        };
      }
    } else {
      symbolLayer.source.url = layer.source.url;
      symbolLayer['source-layer'] = layer.source.layer;
    }

    if (layer.categories && layer.categories.shape) {
      var iconStops = [];
      layer.categories.type.forEach(function (type, index) {
        iconStops.push([type, layer.categories.shape[index]]);
      });
      symbolLayer.layout['icon-image'].stops = iconStops;
    }

    if (!map.getLayer(symbolLayer.id)) {
      if (layer['highlight-layout'] || layer['highlight-paint']) {
        var highlightLayer = Object.assign({}, symbolLayer);

        if (layer['highlight-layout']) {
          highlightLayer.layout = Object.assign({}, highlightLayer.layout, layer['highlight-layout']);
        }
        if (layer['highlight-paint']) {
          highlightLayer.paint = Object.assign({}, highlightLayer.paint, layer['highlight-paint']);
        }

        highlightLayer.id += '-highlight';
        highlightLayer.filter = ['==', 'Fixed Site Unique ID', ''];
        map.addLayer(highlightLayer);

        symbolLayer.filter = ['!=', 'Fixed Site Unique ID', ''];
      }

      map.addLayer(symbolLayer);
    }
    if (map.getLayer(symbolLayer.id)) {
      map.setLayoutProperty(symbolLayer.id, 'visibility', symbolLayer.visible ? 'visible' : 'none');
    }
  }
  /*
   * CHART ==========================================================
   */
  if (layer.type === 'chart') {
    var data = layer.source.data;
    if (timefield) {
      var period = [].concat(_toConsumableArray(new Set(layer.source.data.map(function (p) {
        return p[timefield];
      }))));
      newStops = { id: layer.id, period: period, timefield: timefield };
      data = layer.source.data.filter(function (d) {
        return d[timefield] === period[period.length - 1];
      });
    }
    (0, _addChart2.default)(layer, data);
  }

  // Generate layersObj
  // let layersObj = [];
  // for (let lo = 0; lo < this.state.layersObj.length; lo += 1) {
  //   if (this.state.layersObj[lo].id !== layer.id) {
  //     layersObj.push(this.state.layersObj[lo]);
  //   }
  // }
  // layersObj.push(layer);


  // sort the layers
  // sortLayers();

  // disallow multiple fill layers on the map (todo - convert filters to nested for loops)
  // let id;
  // const filterLayerObjs = lo => lo.id !== id;
  // const filterActiveLayers = lo => lo !== id;
  // for (let l = 0; l < this.state.layersObj.length; l += 1) {
  //   if (this.state.layersObj[l].type === 'fill') {
  //     id = this.state.layersObj[l].id;
  //     if (map.getLayer(id)) {
  //       map.removeLayer(id);
  //       if (map.getSource(id)) {
  //         map.removeSource(id);
  //       }
  //       this.removeLabels(this.state.layersObj[l]);
  //       this.removeLegend(this.state.layersObj[l]);
  //       layersObj = layersObj.filter(filterLayerObjs);
  //       self.activeLayers = self.activeLayers.filter(filterActiveLayers);
  //     }
  //   }
  // }

  // const timeseriesMap = buildTimeseriesData(newStops);
  // if (timeseriesMap[layer.id]) {
  //   let mbLayer;
  //   switch (layer.type) {
  //     case 'circle':
  //       mbLayer = circleLayer;
  //       break;
  //     case 'fill':
  //       mbLayer = fillLayer;
  //       break;
  //     case 'line':
  //       mbLayer = lineLayer;
  //       break;
  //     case 'symbol':
  //       mbLayer = symbolLayer;
  //       break;
  //     default:
  //       mbLayer = null;
  //   }
  //   timeseriesMap[layer.id].mapBoxLayer = mbLayer;
  // }

  // this.setState({
  //   layerObj,
  //   layersObj,
  //   stops: newStops,
  //   timeseries: Object.assign({}, this.state.timeseries, timeseriesMap),
  // });

  return map;
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortLayers;
function sortLayers(map, layers) {
  Object.keys(layers).forEach(function (key) {
    if (layers[key].type === 'line') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });

  Object.keys(layers).forEach(function (key) {
    if (layers[key].type === 'circle') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });

  Object.keys(layers).forEach(function (key) {
    if (layers[key].type === 'symbol') {
      if (map.getLayer(key)) {
        map.moveLayer(key);
      }
    }
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildTimeseriesData;
function buildTimeseriesData(Stops) {
  var timeSeriesLayers = this.getSliderLayers();
  var activeLayers = this.state.layers.map(function (layer) {
    return layer.title;
  });
  var timeseriesMap = {};

  var layerId = void 0;
  var index = void 0;
  var layerObj = void 0;
  var temporalIndex = void 0;
  var data = void 0;
  var layerProperty = void 0;
  var periodData = void 0;
  var charts = void 0;

  var period = void 0;
  var colorStops = void 0;
  var radiusStops = void 0;
  var breaks = void 0;
  var colors = void 0;
  var stops = Stops;
  var strokeWidthStops = void 0;

  var chartDataFilter = function chartDataFilter(d) {
    return d[stops.timefield] === period[temporalIndex];
  };
  var periodHasDataReducer = function periodHasDataReducer(sum, d) {
    return sum + Number(d[layerProperty]);
  };
  var periodDataFilter = function periodDataFilter(p) {
    // define actual period data
    periodData[p] = {
      data: layerObj.source.data.filter(function (d) {
        return d[layerObj.aggregate.timeseries.field] === p;
      })
    };
    // determine if period data has any non-zero values
    periodData[p].hasData = !!periodData[p].data.reduce(periodHasDataReducer, 0);
  };

  for (var i = 0; i < timeSeriesLayers.length; i += 1) {
    layerId = timeSeriesLayers[i];

    if (activeLayers.includes(layerId) && !this.state.timeseries[layerId]) {
      index = getLastIndex(activeLayers, layerId);
      layerObj = this.props.layerData[layerId];
      charts = layerObj && !!layerObj.charts ? layerObj.charts : null;

      if (this.state && this.state.layers[index] && this.state.layers[index].visible === true && layerObj.source.data instanceof Object && stops && layerObj.id === stops.id) {
        // Determine later stops
        if (layerObj.type === 'chart') {
          period = this.state.stops.period;
          colorStops = layerObj.source.data;
        } else {
          var paintStops = stops.stops;
          colorStops = paintStops[0];
          radiusStops = paintStops[1];
          period = paintStops[2];
          breaks = paintStops[3];
          colors = paintStops[4];
          strokeWidthStops = paintStops[5];
          stops = layerObj.type === 'circle' ? radiusStops : colorStops;
        }

        temporalIndex = period.length - 1;

        if (layerObj.type === 'chart') {
          data = stops.filter(chartDataFilter);
        } else if (layerObj.aggregate && layerObj.aggregate.timeseries) {
          // define period data for each period
          layerProperty = layerObj.property;
          periodData = {};
          period.forEach(periodDataFilter);

          data = periodData[period[temporalIndex]].data;
        } else {
          data = layerObj.source.data;
        }
      }

      timeseriesMap[layerId] = {
        layerId: layerId,
        index: index,
        layerObj: layerObj,
        temporalIndex: temporalIndex,
        data: data,
        charts: charts,
        periodData: periodData,
        colors: colors,
        colorStops: colorStops,
        radiusStops: radiusStops,
        period: period,
        breaks: breaks,
        strokeWidthStops: strokeWidthStops,
        stops: stops,
        layerProperty: layerProperty
      };
    }
  }

  return timeseriesMap;
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (layer, timefield) {
  var data = [];
  var osmIDs = [];
  var periods = [];
  var clusters = layer.categories.clusters;
  var colors = getColorBrewerColor(layer.categories.color, clusters) || layer.categories.color;
  var rows = layer.source.data.features || layer.source.data;
  var isGeoJSON = layer.source.data.features;
  var geoJSONWithOSMKey = isGeoJSON && layer.source.join[1];
  var limit = layer.categories.limit;
  var radiusRange = layer['radius-range'];

  for (var i = 0; i < rows.length; i += 1) {
    if (isGeoJSON) {
      data.push(Number(rows[i].properties[layer.property]));
      if (geoJSONWithOSMKey) {
        osmIDs.push(rows[i].properties[layer.source.join[1]]);
      }
    } else {
      periods.push(rows[i][timefield]);
      data.push(Number(rows[i][layer.property]));
      osmIDs.push(rows[i][layer.source.join[1]]);
    }
  }

  return getStops({ data: data, colors: colors, osmIDs: osmIDs, periods: periods, limit: limit, clusters: clusters, radiusRange: radiusRange });
};

var _colorbrewer = __webpack_require__(67);

var _colorbrewer2 = _interopRequireDefault(_colorbrewer);

var _simpleStatistics = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultRadiusRange = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30'];

var getColorBrewerColor = function getColorBrewerColor(c, numColors) {
  if (_colorbrewer2.default[c]) {
    return _colorbrewer2.default[c][numColors];
  }
  return c;
};
var getColor = function getColor(c, i) {
  if (c instanceof Array) {
    return c[i];
  }
  return c;
};

function getStops(layer) {
  var colorsStops = [];
  var radiusStops = [];
  var radius = layer.radiusRange || defaultRadiusRange;
  var breaks = [];

  // Sort data based on data value
  var list = layer.data.map(function (x, i) {
    return {
      data: x,
      osmIDs: layer.osmIDs[i],
      periods: layer.periods[i]
    };
  }, this);
  list.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data === b.data ? 0 : 1;
  });
  var sortedData = list.map(function (items) {
    return items.data;
  });
  var osmID = list.map(function (items) {
    return items.osmIDs;
  });
  var period = list.map(function (items) {
    return items.periods;
  });

  // Sort for limit data based on osmIDs
  var dataList = layer.osmIDs.map(function (x, i) {
    return {
      osmIDs: x,
      data: layer.data[i],
      periods: layer.periods[i]
    };
  }, this);
  dataList.sort(function (a, b) {
    return a.osmIDs < b.osmIDs ? -1 : a.osmIDs === b.osmIDs ? 0 : 1;
  });
  var rangeData = dataList.map(function (l) {
    return l.data;
  });
  var rangeID = dataList.map(function (l) {
    return l.osmIDs;
  });
  var rangePeriod = dataList.map(function (l) {
    return l.periods;
  });

  // Split the data into nClusters
  var cluster = layer.clusters ? (0, _simpleStatistics.ckmeans)(sortedData, layer.clusters) : null;
  breaks = layer.limit ? layer.limit : cluster.map(function (cl) {
    return cl[cl.length - 1];
  });
  var OSMIDsExist = layer.osmIDs && layer.osmIDs.length !== 0;
  var data = layer.limit ? rangeData : sortedData;
  var osmIDs = layer.limit ? rangeID : osmID;

  // Assign colors and radius to osmId or data value
  for (var k = 0; k < data.length; k += 1) {
    for (var i = 0; i < breaks.length; i += 1) {
      if (data[k] <= breaks[i]) {
        colorsStops.push([OSMIDsExist ? osmIDs[k] : data[k], getColor(layer.colors, i)]);
        radiusStops.push([OSMIDsExist ? osmIDs[k] : data[k], Number(radius[i])]);
        break;
      }
    }
  }

  if (layer.periods) {
    var uniqPeriods = [].concat(_toConsumableArray(new Set(layer.periods)));
    var periodStops = [];
    var periodRadius = [];
    var periodStroke = [];
    for (var j = 0; j < uniqPeriods.length; j += 1) {
      periodStops[j] = [];
      periodRadius[j] = [];
      periodStroke[j] = [];
    }
    var periodProp = layer.limit ? rangePeriod : period;
    for (var m = 0; m < periodProp.length; m += 1) {
      for (var n = 0; n < uniqPeriods.length; n += 1) {
        if (periodProp[m] === uniqPeriods[n]) {
          periodStops[n].push(colorsStops[m]);
          periodRadius[n].push(radiusStops[m]);
          periodStroke[n].push([radiusStops[m][0], 1]);
        }
      }
    }
    return [periodStops, periodRadius, uniqPeriods, breaks, layer.colors, periodStroke];
  }
  return [];
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
// JavaScript specs as packaged in the D3 library (d3js.org). Please see license at http://colorbrewer.org/export/LICENSE.txt
!function() {

var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};

if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (colorbrewer),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module === "object" && module.exports) {
    module.exports = colorbrewer;
} else {
    this.colorbrewer = colorbrewer;
}

}();


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * [Simple linear regression](http://en.wikipedia.org/wiki/Simple_linear_regression)
 * is a simple way to find a fitted line
 * between a set of coordinates. This algorithm finds the slope and y-intercept of a regression line
 * using the least sum of squares.
 *
 * @param {Array<Array<number>>} data an array of two-element of arrays,
 * like `[[0, 1], [2, 3]]`
 * @returns {Object} object containing slope and intersect of regression line
 * @example
 * linearRegression([[0, 0], [1, 1]]); // => { m: 1, b: 0 }
 */
function linearRegression(data/*: Array<Array<number>> */)/*: { m: number, b: number } */ {

    var m, b;

    // Store data length in a local variable to reduce
    // repeated object property lookups
    var dataLength = data.length;

    //if there's only one point, arbitrarily choose a slope of 0
    //and a y-intercept of whatever the y of the initial point is
    if (dataLength === 1) {
        m = 0;
        b = data[0][1];
    } else {
        // Initialize our sums and scope the `m` and `b`
        // variables that define the line.
        var sumX = 0, sumY = 0,
            sumXX = 0, sumXY = 0;

        // Use local variables to grab point values
        // with minimal object property lookups
        var point, x, y;

        // Gather the sum of all x values, the sum of all
        // y values, and the sum of x^2 and (x*y) for each
        // value.
        //
        // In math notation, these would be SS_x, SS_y, SS_xx, and SS_xy
        for (var i = 0; i < dataLength; i++) {
            point = data[i];
            x = point[0];
            y = point[1];

            sumX += x;
            sumY += y;

            sumXX += x * x;
            sumXY += x * y;
        }

        // `m` is the slope of the regression line
        m = ((dataLength * sumXY) - (sumX * sumY)) /
            ((dataLength * sumXX) - (sumX * sumX));

        // `b` is the y-intercept of the line.
        b = (sumY / dataLength) - ((m * sumX) / dataLength);
    }

    // Return both values as an object.
    return {
        m: m,
        b: b
    };
}


/* harmony default export */ __webpack_exports__["a"] = (linearRegression);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Given the output of `linearRegression`: an object
 * with `m` and `b` values indicating slope and intercept,
 * respectively, generate a line function that translates
 * x values into y values.
 *
 * @param {Object} mb object with `m` and `b` members, representing
 * slope and intersect of desired line
 * @returns {Function} method that computes y-value at any given
 * x-value on the line.
 * @example
 * var l = linearRegressionLine(linearRegression([[0, 0], [1, 1]]));
 * l(0) // = 0
 * l(2) // = 2
 * linearRegressionLine({ b: 0, m: 1 })(1); // => 1
 * linearRegressionLine({ b: 1, m: 1 })(1); // => 2
 */
function linearRegressionLine(mb/*: { b: number, m: number }*/)/*: Function */ {
    // Return a function that computes a `y` value for each
    // x value it is given, based on the values of `b` and `a`
    // that we just computed.
    return function(x) {
        return mb.b + (mb.m * x);
    };
}

/* harmony default export */ __webpack_exports__["a"] = (linearRegressionLine);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [R Squared](http://en.wikipedia.org/wiki/Coefficient_of_determination)
 * value of data compared with a function `f`
 * is the sum of the squared differences between the prediction
 * and the actual value.
 *
 * @param {Array<Array<number>>} x input data: this should be doubly-nested
 * @param {Function} func function called on `[i][0]` values within the dataset
 * @returns {number} r-squared value
 * @example
 * var samples = [[0, 0], [1, 1]];
 * var regressionLine = linearRegressionLine(linearRegression(samples));
 * rSquared(samples, regressionLine); // = 1 this line is a perfect fit
 */
function rSquared(x /*: Array<Array<number>> */, func /*: Function */) /*: number */ {
    if (x.length < 2) { return 1; }

    // Compute the average y value for the actual
    // data set in order to compute the
    // _total sum of squares_
    var sum = 0, average;
    for (var i = 0; i < x.length; i++) {
        sum += x[i][1];
    }
    average = sum / x.length;

    // Compute the total sum of squares - the
    // squared difference between each point
    // and the average of all points.
    var sumOfSquares = 0;
    for (var j = 0; j < x.length; j++) {
        sumOfSquares += Math.pow(average - x[j][1], 2);
    }

    // Finally estimate the error: the squared
    // difference between the estimate and the actual data
    // value at each point.
    var err = 0;
    for (var k = 0; k < x.length; k++) {
        err += Math.pow(x[k][1] - func(x[k][0]), 2);
    }

    // As the error grows larger, its ratio to the
    // sum of squares increases and the r squared
    // value grows lower.
    return 1 - err / sumOfSquares;
}

/* harmony default export */ __webpack_exports__["a"] = (rSquared);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mode_sorted__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__numeric_sort__ = __webpack_require__(4);
/* @flow */




/**
 * The [mode](http://bit.ly/W5K4Yt) is the number that appears in a list the highest number of times.
 * There can be multiple modes in a list: in the event of a tie, this
 * algorithm will return the most recently seen mode.
 *
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * This runs on `O(nlog(n))` because it needs to sort the array internally
 * before running an `O(n)` search to find the mode.
 *
 * @param {Array<number>} x input
 * @returns {number} mode
 * @example
 * mode([0, 0, 1]); // => 0
 */
function mode(x /*: Array<number> */)/*:number*/ {
    // Sorting the array lets us iterate through it below and be sure
    // that every time we see a new number it's new and we'll never
    // see the same number twice
    return Object(__WEBPACK_IMPORTED_MODULE_0__mode_sorted__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__numeric_sort__["a" /* default */])(x));
}

/* harmony default export */ __webpack_exports__["a"] = (mode);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */
/* globals Map: false */

/**
 * The [mode](http://bit.ly/W5K4Yt) is the number that appears in a list the highest number of times.
 * There can be multiple modes in a list: in the event of a tie, this
 * algorithm will return the most recently seen mode.
 *
 * modeFast uses a Map object to keep track of the mode, instead of the approach
 * used with `mode`, a sorted array. As a result, it is faster
 * than `mode` and supports any data type that can be compared with `==`.
 * It also requires a
 * [JavaScript environment with support for Map](https://kangax.github.io/compat-table/es6/#test-Map),
 * and will throw an error if Map is not available.
 *
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * @param {Array<*>} x a sample of one or more data points
 * @returns {?*} mode
 * @throws {ReferenceError} if the JavaScript environment doesn't support Map
 * @throws {Error} if x is empty
 * @example
 * modeFast(['rabbits', 'rabbits', 'squirrels']); // => 'rabbits'
 */
function modeFast/*::<T>*/(x /*: Array<T> */)/*: ?T */ {

    // This index will reflect the incidence of different values, indexing
    // them like
    // { value: count }
    var index = new Map();

    // A running `mode` and the number of times it has been encountered.
    var mode;
    var modeCount = 0;

    for (var i = 0; i < x.length; i++) {
        var newCount = index.get(x[i]);
        if (newCount === undefined) {
            newCount = 1;
        } else {
            newCount++;
        }
        if (newCount > modeCount) {
            mode = x[i];
            modeCount = newCount;
        }
        index.set(x[i], newCount);
    }

    if (modeCount === 0) {
        throw new Error('mode requires at last one data point');
    }

    return mode;
}

/* harmony default export */ __webpack_exports__["a"] = (modeFast);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The minimum is the lowest number in the array. With a sorted array,
 * the first element in the array is always the smallest, so this calculation
 * can be done in one step, or constant time.
 *
 * @param {Array<number>} x input
 * @returns {number} minimum value
 * @example
 * minSorted([-100, -10, 1, 2, 5]); // => -100
 */
function minSorted(x /*: Array<number> */)/*: number */ {
    return x[0];
}

/* harmony default export */ __webpack_exports__["a"] = (minSorted);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The maximum is the highest number in the array. With a sorted array,
 * the last element in the array is always the largest, so this calculation
 * can be done in one step, or constant time.
 *
 * @param {Array<number>} x input
 * @returns {number} maximum value
 * @example
 * maxSorted([-100, -10, 1, 2, 5]); // => 5
 */
function maxSorted(x /*: Array<number> */)/*:number*/ {
    return x[x.length - 1];
}

/* harmony default export */ __webpack_exports__["a"] = (maxSorted);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The simple [sum](https://en.wikipedia.org/wiki/Summation) of an array
 * is the result of adding all numbers together, starting from zero.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x input
 * @return {number} sum of all input numbers
 * @example
 * sumSimple([1, 2, 3]); // => 6
 */
function sumSimple(x/*: Array<number> */)/*: number */ {
    var value = 0;
    for (var i = 0; i < x.length; i++) {
        value += x[i];
    }
    return value;
}

/* harmony default export */ __webpack_exports__["a"] = (sumSimple);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [product](https://en.wikipedia.org/wiki/Product_(mathematics)) of an array
 * is the result of multiplying all numbers together, starting using one as the multiplicative identity.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x input
 * @return {number} product of all input numbers
 * @example
 * product([1, 2, 3, 4]); // => 24
 */
function product(x/*: Array<number> */)/*: number */ {
    var value = 1;
    for (var i = 0; i < x.length; i++) {
        value *= x[i];
    }
    return value;
}

/* harmony default export */ __webpack_exports__["a"] = (product);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__median__ = __webpack_require__(29);
/* @flow */



/**
 * The [Median Absolute Deviation](http://en.wikipedia.org/wiki/Median_absolute_deviation) is
 * a robust measure of statistical
 * dispersion. It is more resilient to outliers than the standard deviation.
 *
 * @param {Array<number>} x input array
 * @returns {number} median absolute deviation
 * @example
 * medianAbsoluteDeviation([1, 1, 2, 2, 4, 6, 9]); // => 1
 */
function medianAbsoluteDeviation(x/*: Array<number> */)/*: number */ {
    // The mad of nothing is null
    var medianValue = Object(__WEBPACK_IMPORTED_MODULE_0__median__["a" /* default */])(x),
        medianAbsoluteDeviations = [];

    // Make a list of absolute deviations from the median
    for (var i = 0; i < x.length; i++) {
        medianAbsoluteDeviations.push(Math.abs(x[i] - medianValue));
    }

    // Find the median value of that list
    return Object(__WEBPACK_IMPORTED_MODULE_0__median__["a" /* default */])(medianAbsoluteDeviations);
}

/* harmony default export */ __webpack_exports__["a"] = (medianAbsoluteDeviation);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Split an array into chunks of a specified size. This function
 * has the same behavior as [PHP's array_chunk](http://php.net/manual/en/function.array-chunk.php)
 * function, and thus will insert smaller-sized chunks at the end if
 * the input size is not divisible by the chunk size.
 *
 * `x` is expected to be an array, and `chunkSize` a number.
 * The `x` array can contain any kind of data.
 *
 * @param {Array} x a sample
 * @param {number} chunkSize size of each output array. must be a positive integer
 * @returns {Array<Array>} a chunked array
 * @throws {Error} if chunk size is less than 1 or not an integer
 * @example
 * chunk([1, 2, 3, 4, 5, 6], 2);
 * // => [[1, 2], [3, 4], [5, 6]]
 */
function chunk(x/*:Array<any>*/, chunkSize/*:number*/)/*:?Array<Array<any>>*/ {

    // a list of result chunks, as arrays in an array
    var output = [];

    // `chunkSize` must be zero or higher - otherwise the loop below,
    // in which we call `start += chunkSize`, will loop infinitely.
    // So, we'll detect and throw in that case to indicate
    // invalid input.
    if (chunkSize < 1) {
        throw new Error('chunk size must be a positive number');
    }

    if (Math.floor(chunkSize) !== chunkSize) {
        throw new Error('chunk size must be an integer');
    }

    // `start` is the index at which `.slice` will start selecting
    // new array elements
    for (var start = 0; start < x.length; start += chunkSize) {

        // for each chunk, slice that part of the array and add it
        // to the output. The `.slice` function does not change
        // the original array.
        output.push(x.slice(start, start + chunkSize));
    }
    return output;
}

/* harmony default export */ __webpack_exports__["a"] = (chunk);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Sampling with replacement is a type of sampling that allows the same
 * item to be picked out of a population more than once.
 *
 * @param {Array<*>} x an array of any kind of value
 * @param {number} n count of how many elements to take
 * @param {Function} [randomSource=Math.random] an optional entropy source that
 * returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
 * @return {Array} n sampled items from the population
 * @example
 * var values = [1, 2, 3, 4];
 * sampleWithReplacement(values, 2); // returns 2 random values, like [2, 4];
 */
function sampleWithReplacement/*::<T>*/(
    x/*: Array<T> */,
    n/*: number */,
    randomSource/*: ?Function */) {

    if (x.length === 0) {
        return [];
    }

    // a custom random number source can be provided if you want to use
    // a fixed seed or another random number generator, like
    // [random-js](https://www.npmjs.org/package/random-js)
    randomSource = randomSource || Math.random;

    var length = x.length;
    var sample = [];

    for (var i = 0; i < n; i++) {
        var index = Math.floor(randomSource() * length);

        sample.push(x[index]);
    }

    return sample;
}

/* harmony default export */ __webpack_exports__["a"] = (sampleWithReplacement);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shuffle__ = __webpack_require__(30);
/* @flow */



/**
 * Create a [simple random sample](http://en.wikipedia.org/wiki/Simple_random_sample)
 * from a given array of `n` elements.
 *
 * The sampled values will be in any order, not necessarily the order
 * they appear in the input.
 *
 * @param {Array<any>} x input array. can contain any type
 * @param {number} n count of how many elements to take
 * @param {Function} [randomSource=Math.random] an optional entropy source that
 * returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
 * @return {Array} subset of n elements in original array
 *
 * @example
 * var values = [1, 2, 4, 5, 6, 7, 8, 9];
 * sample(values, 3); // returns 3 random values, like [2, 5, 8];
 */
function sample/*:: <T> */(
    x /*: Array<T> */,
    n /*: number */,
    randomSource /*: ?Function */) /*: Array<T> */ {
    // shuffle the original array using a fisher-yates shuffle
    var shuffled = Object(__WEBPACK_IMPORTED_MODULE_0__shuffle__["a" /* default */])(x, randomSource);

    // and then return a subset of it - the first `n` elements.
    return shuffled.slice(0, n);
}

/* harmony default export */ __webpack_exports__["a"] = (sample);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numeric_sort__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unique_count_sorted__ = __webpack_require__(32);
/* @flow */




/**
 * Create a new column x row matrix.
 *
 * @private
 * @param {number} columns
 * @param {number} rows
 * @return {Array<Array<number>>} matrix
 * @example
 * makeMatrix(10, 10);
 */
function makeMatrix(columns, rows) {
    var matrix = [];
    for (var i = 0; i < columns; i++) {
        var column = [];
        for (var j = 0; j < rows; j++) {
            column.push(0);
        }
        matrix.push(column);
    }
    return matrix;
}

/**
 * Generates incrementally computed values based on the sums and sums of
 * squares for the data array
 *
 * @private
 * @param {number} j
 * @param {number} i
 * @param {Array<number>} sums
 * @param {Array<number>} sumsOfSquares
 * @return {number}
 * @example
 * ssq(0, 1, [-1, 0, 2], [1, 1, 5]);
 */
function ssq(j, i, sums, sumsOfSquares) {
    var sji; // s(j, i)
    if (j > 0) {
        var muji = (sums[i] - sums[j - 1]) / (i - j + 1); // mu(j, i)
        sji = sumsOfSquares[i] - sumsOfSquares[j - 1] - (i - j + 1) * muji * muji;
    } else {
        sji = sumsOfSquares[i] - sums[i] * sums[i] / (i + 1);
    }
    if (sji < 0) {
        return 0;
    }
    return sji;
}

/**
 * Function that recursively divides and conquers computations
 * for cluster j
 *
 * @private
 * @param {number} iMin Minimum index in cluster to be computed
 * @param {number} iMax Maximum index in cluster to be computed
 * @param {number} cluster Index of the cluster currently being computed
 * @param {Array<Array<number>>} matrix
 * @param {Array<Array<number>>} backtrackMatrix
 * @param {Array<number>} sums
 * @param {Array<number>} sumsOfSquares
 */
function fillMatrixColumn(iMin, iMax, cluster, matrix, backtrackMatrix, sums, sumsOfSquares) {
    if (iMin > iMax) {
        return;
    }

    // Start at midpoint between iMin and iMax
    var i = Math.floor((iMin + iMax) / 2);

    matrix[cluster][i] = matrix[cluster - 1][i - 1];
    backtrackMatrix[cluster][i] = i;

    var jlow = cluster; // the lower end for j

    if (iMin > cluster) {
        jlow = Math.max(jlow, backtrackMatrix[cluster][iMin - 1] || 0);
    }
    jlow = Math.max(jlow, backtrackMatrix[cluster - 1][i] || 0);

    var jhigh = i - 1; // the upper end for j
    if (iMax < matrix.length - 1) {
        jhigh = Math.min(jhigh, backtrackMatrix[cluster][iMax + 1] || 0);
    }

    var sji;
    var sjlowi;
    var ssqjlow;
    var ssqj;
    for (var j = jhigh; j >= jlow; --j) {
        sji = ssq(j, i, sums, sumsOfSquares);

        if (sji + matrix[cluster - 1][jlow - 1] >= matrix[cluster][i]) {
            break;
        }

        // Examine the lower bound of the cluster border
        sjlowi = ssq(jlow, i, sums, sumsOfSquares);

        ssqjlow = sjlowi + matrix[cluster - 1][jlow - 1];

        if (ssqjlow < matrix[cluster][i]) {
            // Shrink the lower bound
            matrix[cluster][i] = ssqjlow;
            backtrackMatrix[cluster][i] = jlow;
        }
        jlow++;

        ssqj = sji + matrix[cluster - 1][j - 1];
        if (ssqj < matrix[cluster][i]) {
            matrix[cluster][i] = ssqj;
            backtrackMatrix[cluster][i] = j;
        }
    }

    fillMatrixColumn(iMin, i - 1, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
    fillMatrixColumn(i + 1, iMax, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
}

/**
 * Initializes the main matrices used in Ckmeans and kicks
 * off the divide and conquer cluster computation strategy
 *
 * @private
 * @param {Array<number>} data sorted array of values
 * @param {Array<Array<number>>} matrix
 * @param {Array<Array<number>>} backtrackMatrix
 */
function fillMatrices(data, matrix, backtrackMatrix) {
    var nValues = matrix[0].length;

    // Shift values by the median to improve numeric stability
    var shift = data[Math.floor(nValues / 2)];

    // Cumulative sum and cumulative sum of squares for all values in data array
    var sums = [];
    var sumsOfSquares = [];

    // Initialize first column in matrix & backtrackMatrix
    for (var i = 0, shiftedValue; i < nValues; ++i) {
        shiftedValue = data[i] - shift;
        if (i === 0) {
            sums.push(shiftedValue);
            sumsOfSquares.push(shiftedValue * shiftedValue);
        } else {
            sums.push(sums[i - 1] + shiftedValue);
            sumsOfSquares.push(sumsOfSquares[i - 1] + shiftedValue * shiftedValue);
        }

        // Initialize for cluster = 0
        matrix[0][i] = ssq(0, i, sums, sumsOfSquares);
        backtrackMatrix[0][i] = 0;
    }

    // Initialize the rest of the columns
    var iMin;
    for (var cluster = 1; cluster < matrix.length; ++cluster) {
        if (cluster < matrix.length - 1) {
            iMin = cluster;
        } else {
            // No need to compute matrix[K-1][0] ... matrix[K-1][N-2]
            iMin = nValues - 1;
        }

        fillMatrixColumn(iMin, nValues - 1, cluster, matrix, backtrackMatrix, sums, sumsOfSquares);
    }
}

/**
 * Ckmeans clustering is an improvement on heuristic-based clustering
 * approaches like Jenks. The algorithm was developed in
 * [Haizhou Wang and Mingzhou Song](http://journal.r-project.org/archive/2011-2/RJournal_2011-2_Wang+Song.pdf)
 * as a [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) approach
 * to the problem of clustering numeric data into groups with the least
 * within-group sum-of-squared-deviations.
 *
 * Minimizing the difference within groups - what Wang & Song refer to as
 * `withinss`, or within sum-of-squares, means that groups are optimally
 * homogenous within and the data is split into representative groups.
 * This is very useful for visualization, where you may want to represent
 * a continuous variable in discrete color or style groups. This function
 * can provide groups that emphasize differences between data.
 *
 * Being a dynamic approach, this algorithm is based on two matrices that
 * store incrementally-computed values for squared deviations and backtracking
 * indexes.
 *
 * This implementation is based on Ckmeans 3.4.6, which introduced a new divide
 * and conquer approach that improved runtime from O(kn^2) to O(kn log(n)).
 *
 * Unlike the [original implementation](https://cran.r-project.org/web/packages/Ckmeans.1d.dp/index.html),
 * this implementation does not include any code to automatically determine
 * the optimal number of clusters: this information needs to be explicitly
 * provided.
 *
 * ### References
 * _Ckmeans.1d.dp: Optimal k-means Clustering in One Dimension by Dynamic
 * Programming_ Haizhou Wang and Mingzhou Song ISSN 2073-4859
 *
 * from The R Journal Vol. 3/2, December 2011
 * @param {Array<number>} x input data, as an array of number values
 * @param {number} nClusters number of desired classes. This cannot be
 * greater than the number of values in the data array.
 * @returns {Array<Array<number>>} clustered input
 * @throws {Error} if the number of requested clusters is higher than the size of the data
 * @example
 * ckmeans([-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3);
 * // The input, clustered into groups of similar numbers.
 * //= [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]]);
 */
function ckmeans(
    x/*: Array<number> */,
    nClusters/*: number */)/*: Array<Array<number>> */ {

    if (nClusters > x.length) {
        throw new Error('cannot generate more classes than there are data values');
    }

    var sorted = Object(__WEBPACK_IMPORTED_MODULE_0__numeric_sort__["a" /* default */])(x),
        // we'll use this as the maximum number of clusters
        uniqueCount = Object(__WEBPACK_IMPORTED_MODULE_1__unique_count_sorted__["a" /* default */])(sorted);

    // if all of the input values are identical, there's one cluster
    // with all of the input in it.
    if (uniqueCount === 1) {
        return [sorted];
    }

    // named 'S' originally
    var matrix = makeMatrix(nClusters, sorted.length),
        // named 'J' originally
        backtrackMatrix = makeMatrix(nClusters, sorted.length);

    // This is a dynamic programming way to solve the problem of minimizing
    // within-cluster sum of squares. It's similar to linear regression
    // in this way, and this calculation incrementally computes the
    // sum of squares that are later read.
    fillMatrices(sorted, matrix, backtrackMatrix);

    // The real work of Ckmeans clustering happens in the matrix generation:
    // the generated matrices encode all possible clustering combinations, and
    // once they're generated we can solve for the best clustering groups
    // very quickly.
    var clusters = [],
        clusterRight = backtrackMatrix[0].length - 1;

    // Backtrack the clusters from the dynamic programming matrix. This
    // starts at the bottom-right corner of the matrix (if the top-left is 0, 0),
    // and moves the cluster target with the loop.
    for (var cluster = backtrackMatrix.length - 1; cluster >= 0; cluster--) {

        var clusterLeft = backtrackMatrix[cluster][clusterRight];

        // fill the cluster from the sorted input by taking a slice of the
        // array. the backtrack matrix makes this easy - it stores the
        // indexes where the cluster should start and end.
        clusters[cluster] = sorted.slice(clusterLeft, clusterRight + 1);

        if (cluster > 0) {
            clusterRight = clusterLeft - 1;
        }
    }

    return clusters;
}

/* harmony default export */ __webpack_exports__["a"] = (ckmeans);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__max__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__min__ = __webpack_require__(25);
/* @flow */




/**
 * Given an array of x, this will find the extent of the
 * x and return an array of breaks that can be used
 * to categorize the x into a number of classes. The
 * returned array will always be 1 longer than the number of
 * classes because it includes the minimum value.
 *
 * @param {Array<number>} x an array of number values
 * @param {number} nClasses number of desired classes
 * @returns {Array<number>} array of class break positions
 * @example
 * equalIntervalBreaks([1, 2, 3, 4, 5, 6], 4); // => [1, 2.25, 3.5, 4.75, 6]
 */
function equalIntervalBreaks(x/*: Array<number> */, nClasses/*:number*/)/*: Array<number> */ {

    if (x.length < 2) {
        return x;
    }

    var theMin = Object(__WEBPACK_IMPORTED_MODULE_1__min__["a" /* default */])(x);
    var theMax = Object(__WEBPACK_IMPORTED_MODULE_0__max__["a" /* default */])(x);

    // the first break will always be the minimum value
    // in the xset
    var breaks = [theMin];

    // The size of each break is the full range of the x
    // divided by the number of classes requested
    var breakSize = (theMax - theMin) / nClasses;

    // In the case of nClasses = 1, this loop won't run
    // and the returned breaks will be [min, max]
    for (var i = 1; i < nClasses; i++) {
        breaks.push(breaks[0] + breakSize * i);
    }

    // the last break will always be the
    // maximum.
    breaks.push(theMax);

    return breaks;
}

/* harmony default export */ __webpack_exports__["a"] = (equalIntervalBreaks);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_covariance__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_standard_deviation__ = __webpack_require__(7);
/* @flow */




/**
 * The [correlation](http://en.wikipedia.org/wiki/Correlation_and_dependence) is
 * a measure of how correlated two datasets are, between -1 and 1
 *
 * @param {Array<number>} x first input
 * @param {Array<number>} y second input
 * @returns {number} sample correlation
 * @example
 * sampleCorrelation([1, 2, 3, 4, 5, 6], [2, 2, 3, 4, 5, 60]).toFixed(2);
 * // => '0.69'
 */
function sampleCorrelation(x/*: Array<number> */, y/*: Array<number> */)/*:number*/ {
    var cov = Object(__WEBPACK_IMPORTED_MODULE_0__sample_covariance__["a" /* default */])(x, y),
        xstd = Object(__WEBPACK_IMPORTED_MODULE_1__sample_standard_deviation__["a" /* default */])(x),
        ystd = Object(__WEBPACK_IMPORTED_MODULE_1__sample_standard_deviation__["a" /* default */])(y);

    return cov / xstd / ystd;
}

/* harmony default export */ __webpack_exports__["a"] = (sampleCorrelation);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* @flow */



/**
 * [Skewness](http://en.wikipedia.org/wiki/Skewness) is
 * a measure of the extent to which a probability distribution of a
 * real-valued random variable "leans" to one side of the mean.
 * The skewness value can be positive or negative, or even undefined.
 *
 * Implementation is based on the adjusted Fisher-Pearson standardized
 * moment coefficient, which is the version found in Excel and several
 * statistical packages including Minitab, SAS and SPSS.
 *
 * @since 4.1.0
 * @param {Array<number>} x a sample of 3 or more data points
 * @returns {number} sample skewness
 * @throws {Error} if x has length less than 3
 * @example
 * sampleSkewness([2, 4, 6, 3, 1]); // => 0.590128656384365
 */
function sampleSkewness(x /*: Array<number> */)/*:number*/ {

    if (x.length < 3) {
        throw new Error('sampleSkewness requires at least three data points');
    }

    var meanValue = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(x);
    var tempValue;
    var sumSquaredDeviations = 0;
    var sumCubedDeviations = 0;

    for (var i = 0; i < x.length; i++) {
        tempValue = x[i] - meanValue;
        sumSquaredDeviations += tempValue * tempValue;
        sumCubedDeviations += tempValue * tempValue * tempValue;
    }

    // this is Bessels' Correction: an adjustment made to sample statistics
    // that allows for the reduced degree of freedom entailed in calculating
    // values from samples rather than complete populations.
    var besselsCorrection = x.length - 1;

    // Find the mean value of that list
    var theSampleStandardDeviation = Math.sqrt(sumSquaredDeviations / besselsCorrection);

    var n = x.length,
        cubedS = Math.pow(theSampleStandardDeviation, 3);

    return n * sumCubedDeviations / ((n - 1) * (n - 2) * cubedS);
}

/* harmony default export */ __webpack_exports__["a"] = (sampleSkewness);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* @flow */



/**
 * [Kurtosis](http://en.wikipedia.org/wiki/Kurtosis) is
 * a measure of the heaviness of a distribution's tails relative to its
 * variance. The kurtosis value can be positive or negative, or even undefined.
 *
 * Implementation is based on Fisher's excess kurtosis definition and uses
 * unbiased moment estimators. This is the version found in Excel and available
 * in several statistical packages, including SAS and SciPy.
 *
 * @param {Array<number>} x a sample of 4 or more data points
 * @returns {number} sample kurtosis
 * @throws {Error} if x has length less than 4
 * @example
 * sampleKurtosis([1, 2, 2, 3, 5]); // => 1.4555765595463122
 */
function sampleKurtosis(x /*: Array<number> */)/*:number*/ {

    var n = x.length;

    if (n < 4) {
        throw new Error('sampleKurtosis requires at least four data points');
    }

    var meanValue = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(x);
    var tempValue;
    var secondCentralMoment = 0;
    var fourthCentralMoment = 0;

    for (var i = 0; i < n; i++) {
        tempValue = x[i] - meanValue;
        secondCentralMoment += tempValue * tempValue;
        fourthCentralMoment += tempValue * tempValue * tempValue * tempValue;
    }

    return (n - 1) / ((n - 2) * (n - 3)) *
        (n * (n + 1) * fourthCentralMoment / (secondCentralMoment * secondCentralMoment) - 3 * (n - 1));
}

/* harmony default export */ __webpack_exports__["a"] = (sampleKurtosis);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Implementation of [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
 * for generating permutations.
 *
 * @param {Array} elements any type of data
 * @returns {Array<Array>} array of permutations
 */
function permutationsHeap/*:: <T> */(elements /*: Array<T> */)/*: Array<Array<T>> */ {
    var indexes = new Array(elements.length);
    var permutations = [elements.slice()];

    for (var i = 0; i < elements.length; i++) {
        indexes[i] = 0;
    }

    for (i = 0; i < elements.length;) {
        if (indexes[i] < i) {

            // At odd indexes, swap from indexes[i] instead
            // of from the beginning of the array
            var swapFrom = 0;
            if (i % 2 !== 0) {
                swapFrom = indexes[i];
            }

            // swap between swapFrom and i, using
            // a temporary variable as storage.
            var temp = elements[swapFrom];
            elements[swapFrom] = elements[i];
            elements[i] = temp;

            permutations.push(elements.slice());
            indexes[i]++;
            i = 0;

        } else {
            indexes[i] = 0;
            i++;
        }
    }

    return permutations;
}

/* harmony default export */ __webpack_exports__["a"] = (permutationsHeap);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Implementation of Combinations
 * Combinations are unique subsets of a collection - in this case, k x from a collection at a time.
 * https://en.wikipedia.org/wiki/Combination
 * @param {Array} x any type of data
 * @param {int} k the number of objects in each group (without replacement)
 * @returns {Array<Array>} array of permutations
 * @example
 * combinations([1, 2, 3], 2); // => [[1,2], [1,3], [2,3]]
 */

function combinations(
    x/*: Array<any> */,
    k/*: number */)/*: Array<Array<any>> */ {
    var i;
    var subI;
    var combinationList = [];
    var subsetCombinations;
    var next;

    for (i = 0; i < x.length; i++) {
        if (k === 1) {
            combinationList.push([x[i]])
        } else {
            subsetCombinations = combinations(x.slice( i + 1, x.length ), k - 1);
            for (subI = 0; subI < subsetCombinations.length; subI++) {
                next = subsetCombinations[subI];
                next.unshift(x[i]);
                combinationList.push(next);
            }
        }
    }
    return combinationList;
}

/* harmony default export */ __webpack_exports__["a"] = (combinations);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * Implementation of [Combinations](https://en.wikipedia.org/wiki/Combination) with replacement
 * Combinations are unique subsets of a collection - in this case, k x from a collection at a time.
 * 'With replacement' means that a given element can be chosen multiple times.
 * Unlike permutation, order doesn't matter for combinations.
 *
 * @param {Array} x any type of data
 * @param {int} k the number of objects in each group (without replacement)
 * @returns {Array<Array>} array of permutations
 * @example
 * combinationsReplacement([1, 2], 2); // => [[1, 1], [1, 2], [2, 2]]
 */
function combinationsReplacement(
    x /*: Array<any> */,
    k /*: number */)/*: Array<Array<any>> */ {

    var combinationList = [];

    for (var i = 0; i < x.length; i++) {
        if (k === 1) {
            // If we're requested to find only one element, we don't need
            // to recurse: just push `x[i]` onto the list of combinations.
            combinationList.push([x[i]])
        } else {
            // Otherwise, recursively find combinations, given `k - 1`. Note that
            // we request `k - 1`, so if you were looking for k=3 combinations, we're
            // requesting k=2. This -1 gets reversed in the for loop right after this
            // code, since we concatenate `x[i]` onto the selected combinations,
            // bringing `k` back up to your requested level.
            // This recursion may go many levels deep, since it only stops once
            // k=1.
            var subsetCombinations = combinationsReplacement(
                x.slice(i, x.length),
                k - 1);

            for (var j = 0; j < subsetCombinations.length; j++) {
                combinationList.push([x[i]]
                    .concat(subsetCombinations[j]));
            }
        }
    }

    return combinationList;
}

/* harmony default export */ __webpack_exports__["a"] = (combinationsReplacement);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * When adding a new value to a list, one does not have to necessary
 * recompute the mean of the list in linear time. They can instead use
 * this function to compute the new mean by providing the current mean,
 * the number of elements in the list that produced it and the new
 * value to add.
 *
 * @since 2.5.0
 * @param {number} mean current mean
 * @param {number} n number of items in the list
 * @param {number} newValue the added value
 * @returns {number} the new mean
 *
 * @example
 * addToMean(14, 5, 53); // => 20.5
 */
function addToMean(mean /*: number*/, n/*: number */, newValue/*: number */)/*: number */ {
    return mean + ((newValue - mean) / (n + 1));
}

/* harmony default export */ __webpack_exports__["a"] = (addToMean);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combine_means__ = __webpack_require__(34);
/* @flow */



/**
 * When combining two lists of values for which one already knows the variances,
 * one does not have to necessary recompute the variance of the combined lists
 * in linear time. They can instead use this function to compute the combined
 * variance by providing the variance, mean & number of values of the first list
 * and the variance, mean & number of values of the second list.
 *
 * @since 3.0.0
 * @param {number} variance1 variance of the first list
 * @param {number} mean1 mean of the first list
 * @param {number} n1 number of items in the first list
 * @param {number} variance2 variance of the second list
 * @param {number} mean2 mean of the second list
 * @param {number} n2 number of items in the second list
 * @returns {number} the combined mean
 *
 * @example
 * combineVariances(14 / 3, 5, 3, 8 / 3, 4, 3); // => 47 / 12
 */
function combineVariances(
    variance1 /*: number*/,
    mean1 /*: number*/,
    n1/*: number */,
    variance2 /*: number*/,
    mean2 /*: number*/,
    n2/*: number */)/*: number */ {

    var newMean = Object(__WEBPACK_IMPORTED_MODULE_0__combine_means__["a" /* default */])(mean1, n1, mean2, n2);

    return (
        n1 * (variance1 + Math.pow(mean1 - newMean, 2)) +
        n2 * (variance2 + Math.pow(mean2 - newMean, 2))
    ) / (n1 + n2);
}

/* harmony default export */ __webpack_exports__["a"] = (combineVariances);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [Geometric Mean](https://en.wikipedia.org/wiki/Geometric_mean) is
 * a mean function that is more useful for numbers in different
 * ranges.
 *
 * This is the nth root of the input numbers multiplied by each other.
 *
 * The geometric mean is often useful for
 * **[proportional growth](https://en.wikipedia.org/wiki/Geometric_mean#Proportional_growth)**: given
 * growth rates for multiple years, like _80%, 16.66% and 42.85%_, a simple
 * mean will incorrectly estimate an average growth rate, whereas a geometric
 * mean will correctly estimate a growth rate that, over those years,
 * will yield the same end value.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @returns {number} geometric mean
 * @throws {Error} if x is empty
 * @throws {Error} if x contains a negative number
 * @example
 * var growthRates = [1.80, 1.166666, 1.428571];
 * var averageGrowth = ss.geometricMean(growthRates);
 * var averageGrowthRates = [averageGrowth, averageGrowth, averageGrowth];
 * var startingValue = 10;
 * var startingValueMean = 10;
 * growthRates.forEach(function(rate) {
 *   startingValue *= rate;
 * });
 * averageGrowthRates.forEach(function(rate) {
 *   startingValueMean *= rate;
 * });
 * startingValueMean === startingValue;
 */
function geometricMean(x /*: Array<number> */)/*: number */ {
    // The mean of no numbers is null
    if (x.length === 0) {
        throw new Error('geometricMean requires at least one data point');
    }

    // the starting value.
    var value = 1;

    for (var i = 0; i < x.length; i++) {
        // the geometric mean is only valid for positive numbers
        if (x[i] <= 0) {
            throw new Error('geometricMean requires only positive numbers as input');
        }

        // repeatedly multiply the value by each number
        value *= x[i];
    }

    return Math.pow(value, 1 / x.length);
}

/* harmony default export */ __webpack_exports__["a"] = (geometricMean);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [Harmonic Mean](https://en.wikipedia.org/wiki/Harmonic_mean) is
 * a mean function typically used to find the average of rates.
 * This mean is calculated by taking the reciprocal of the arithmetic mean
 * of the reciprocals of the input numbers.
 *
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * This runs on `O(n)`, linear time in respect to the array.
 *
 * @param {Array<number>} x sample of one or more data points
 * @returns {number} harmonic mean
 * @throws {Error} if x is empty
 * @throws {Error} if x contains a negative number
 * @example
 * harmonicMean([2, 3]).toFixed(2) // => '2.40'
 */
function harmonicMean(x /*: Array<number> */)/*: number */ {
    // The mean of no numbers is null
    if (x.length === 0) {
        throw new Error('harmonicMean requires at least one data point');
    }

    var reciprocalSum = 0;

    for (var i = 0; i < x.length; i++) {
        // the harmonic mean is only valid for positive numbers
        if (x[i] <= 0) {
            throw new Error('harmonicMean requires only positive numbers as input');
        }

        reciprocalSum += 1 / x[i];
    }

    // divide n by the the reciprocal sum
    return x.length / reciprocalSum;
}

/* harmony default export */ __webpack_exports__["a"] = (harmonicMean);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quantile_sorted__ = __webpack_require__(6);
/* @flow */



/**
 * The [median](http://en.wikipedia.org/wiki/Median) is
 * the middle number of a list. This is often a good indicator of 'the middle'
 * when there are outliers that skew the `mean()` value.
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * The median isn't necessarily one of the elements in the list: the value
 * can be the average of two elements if the list has an even length
 * and the two central values are different.
 *
 * @param {Array<number>} sorted input
 * @returns {number} median value
 * @example
 * medianSorted([10, 2, 5, 100, 2, 1]); // => 52.5
 */
function medianSorted(sorted /*: Array<number> */)/*:number*/ {
    return Object(__WEBPACK_IMPORTED_MODULE_0__quantile_sorted__["a" /* default */])(sorted, 0.5);
}

/* harmony default export */ __webpack_exports__["a"] = (medianSorted);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * When removing a value from a list, one does not have to necessary
 * recompute the mean of the list in linear time. They can instead use
 * this function to compute the new mean by providing the current mean,
 * the number of elements in the list that produced it and the value to remove.
 *
 * @since 3.0.0
 * @param {number} mean current mean
 * @param {number} n number of items in the list
 * @param {number} value the value to remove
 * @returns {number} the new mean
 *
 * @example
 * subtractFromMean(20.5, 6, 53); // => 14
 */
function subtractFromMean(mean /*: number*/, n/*: number */, value/*: number */)/*: number */ {
    return ((mean * n) - value) / (n - 1);
}

/* harmony default export */ __webpack_exports__["a"] = (subtractFromMean);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The Root Mean Square (RMS) is
 * a mean function used as a measure of the magnitude of a set
 * of numbers, regardless of their sign.
 * This is the square root of the mean of the squares of the
 * input numbers.
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x a sample of one or more data points
 * @returns {number} root mean square
 * @throws {Error} if x is empty
 * @example
 * rootMeanSquare([-1, 1, -1, 1]); // => 1
 */
function rootMeanSquare(x /*: Array<number> */)/*:number*/ {
    if (x.length === 0) {
        throw new Error('rootMeanSquare requires at least one data point');
    }

    var sumOfSquares = 0;
    for (var i = 0; i < x.length; i++) {
        sumOfSquares += Math.pow(x[i], 2);
    }

    return Math.sqrt(sumOfSquares / x.length);
}

/* harmony default export */ __webpack_exports__["a"] = (rootMeanSquare);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__standard_deviation__ = __webpack_require__(21);
/* @flow */




/**
 * This is to compute [a one-sample t-test](https://en.wikipedia.org/wiki/Student%27s_t-test#One-sample_t-test), comparing the mean
 * of a sample to a known value, x.
 *
 * in this case, we're trying to determine whether the
 * population mean is equal to the value that we know, which is `x`
 * here. usually the results here are used to look up a
 * [p-value](http://en.wikipedia.org/wiki/P-value), which, for
 * a certain level of significance, will let you determine that the
 * null hypothesis can or cannot be rejected.
 *
 * @param {Array<number>} x sample of one or more numbers
 * @param {number} expectedValue expected value of the population mean
 * @returns {number} value
 * @example
 * tTest([1, 2, 3, 4, 5, 6], 3.385).toFixed(2); // => '0.16'
 */
function tTest(x/*: Array<number> */, expectedValue/*: number */)/*:number*/ {
    // The mean of the sample
    var sampleMean = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(x);

    // The standard deviation of the sample
    var sd = Object(__WEBPACK_IMPORTED_MODULE_1__standard_deviation__["a" /* default */])(x);

    // Square root the length of the sample
    var rootN = Math.sqrt(x.length);

    // returning the t value
    return (sampleMean - expectedValue) / (sd / rootN);
}

/* harmony default export */ __webpack_exports__["a"] = (tTest);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mean__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_variance__ = __webpack_require__(8);
/* @flow */




/**
 * This is to compute [two sample t-test](http://en.wikipedia.org/wiki/Student's_t-test).
 * Tests whether "mean(X)-mean(Y) = difference", (
 * in the most common case, we often have `difference == 0` to test if two samples
 * are likely to be taken from populations with the same mean value) with
 * no prior knowledge on standard deviations of both samples
 * other than the fact that they have the same standard deviation.
 *
 * Usually the results here are used to look up a
 * [p-value](http://en.wikipedia.org/wiki/P-value), which, for
 * a certain level of significance, will let you determine that the
 * null hypothesis can or cannot be rejected.
 *
 * `diff` can be omitted if it equals 0.
 *
 * [This is used to confirm or deny](http://www.monarchlab.org/Lab/Research/Stats/2SampleT.aspx)
 * a null hypothesis that the two populations that have been sampled into
 * `sampleX` and `sampleY` are equal to each other.
 *
 * @param {Array<number>} sampleX a sample as an array of numbers
 * @param {Array<number>} sampleY a sample as an array of numbers
 * @param {number} [difference=0]
 * @returns {number|null} test result
 *
 * @example
 * tTestTwoSample([1, 2, 3, 4], [3, 4, 5, 6], 0); // => -2.1908902300206643
 */
function tTestTwoSample(
    sampleX/*: Array<number> */,
    sampleY/*: Array<number> */,
    difference/*: ?number */)/*: ?number */ {
    var n = sampleX.length,
        m = sampleY.length;

    // If either sample doesn't actually have any values, we can't
    // compute this at all, so we return `null`.
    if (!n || !m) { return null; }

    // default difference (mu) is zero
    if (!difference) {
        difference = 0;
    }

    var meanX = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(sampleX),
        meanY = Object(__WEBPACK_IMPORTED_MODULE_0__mean__["a" /* default */])(sampleY),
        sampleVarianceX = Object(__WEBPACK_IMPORTED_MODULE_1__sample_variance__["a" /* default */])(sampleX),
        sampleVarianceY = Object(__WEBPACK_IMPORTED_MODULE_1__sample_variance__["a" /* default */])(sampleY);

    if (typeof meanX === 'number' &&
        typeof meanY === 'number' &&
        typeof sampleVarianceX === 'number' &&
        typeof sampleVarianceY === 'number') {
        var weightedVariance = ((n - 1) * sampleVarianceX +
            (m - 1) * sampleVarianceY) / (n + m - 2);

        return (meanX - meanY - difference) /
            Math.sqrt(weightedVariance * (1 / n + 1 / m));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (tTestTwoSample);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * [Bayesian Classifier](http://en.wikipedia.org/wiki/Naive_Bayes_classifier)
 *
 * This is a naïve bayesian classifier that takes
 * singly-nested objects.
 *
 * @class
 * @example
 * var bayes = new BayesianClassifier();
 * bayes.train({
 *   species: 'Cat'
 * }, 'animal');
 * var result = bayes.score({
 *   species: 'Cat'
 * })
 * // result
 * // {
 * //   animal: 1
 * // }
 */
function BayesianClassifier() {
    // The number of items that are currently
    // classified in the model
    this.totalCount = 0;
    // Every item classified in the model
    this.data = {};
}

/**
 * Train the classifier with a new item, which has a single
 * dimension of Javascript literal keys and values.
 *
 * @param {Object} item an object with singly-deep properties
 * @param {string} category the category this item belongs to
 * @return {undefined} adds the item to the classifier
 */
BayesianClassifier.prototype.train = function(item, category) {
    // If the data object doesn't have any values
    // for this category, create a new object for it.
    if (!this.data[category]) {
        this.data[category] = {};
    }

    // Iterate through each key in the item.
    for (var k in item) {
        var v = item[k];
        // Initialize the nested object `data[category][k][item[k]]`
        // with an object of keys that equal 0.
        if (this.data[category][k] === undefined) {
            this.data[category][k] = {};
        }
        if (this.data[category][k][v] === undefined) {
            this.data[category][k][v] = 0;
        }

        // And increment the key for this key/value combination.
        this.data[category][k][v]++;
    }

    // Increment the number of items classified
    this.totalCount++;
};

/**
 * Generate a score of how well this item matches all
 * possible categories based on its attributes
 *
 * @param {Object} item an item in the same format as with train
 * @returns {Object} of probabilities that this item belongs to a
 * given category.
 */
BayesianClassifier.prototype.score = function(item) {
    // Initialize an empty array of odds per category.
    var odds = {}, category;
    // Iterate through each key in the item,
    // then iterate through each category that has been used
    // in previous calls to `.train()`
    for (var k in item) {
        var v = item[k];
        for (category in this.data) {
            // Create an empty object for storing key - value combinations
            // for this category.
            odds[category] = {};

            // If this item doesn't even have a property, it counts for nothing,
            // but if it does have the property that we're looking for from
            // the item to categorize, it counts based on how popular it is
            // versus the whole population.
            if (this.data[category][k]) {
                odds[category][k + '_' + v] = (this.data[category][k][v] || 0) / this.totalCount;
            } else {
                odds[category][k + '_' + v] = 0;
            }
        }
    }

    // Set up a new object that will contain sums of these odds by category
    var oddsSums = {};

    for (category in odds) {
        // Tally all of the odds for each category-combination pair -
        // the non-existence of a category does not add anything to the
        // score.
        oddsSums[category] = 0;
        for (var combination in odds[category]) {
            oddsSums[category] += odds[category][combination];
        }
    }

    return oddsSums;
};

/* harmony default export */ __webpack_exports__["a"] = (BayesianClassifier);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * This is a single-layer [Perceptron Classifier](http://en.wikipedia.org/wiki/Perceptron) that takes
 * arrays of numbers and predicts whether they should be classified
 * as either 0 or 1 (negative or positive examples).
 * @class
 * @example
 * // Create the model
 * var p = new PerceptronModel();
 * // Train the model with input with a diagonal boundary.
 * for (var i = 0; i < 5; i++) {
 *     p.train([1, 1], 1);
 *     p.train([0, 1], 0);
 *     p.train([1, 0], 0);
 *     p.train([0, 0], 0);
 * }
 * p.predict([0, 0]); // 0
 * p.predict([0, 1]); // 0
 * p.predict([1, 0]); // 0
 * p.predict([1, 1]); // 1
 */
function PerceptronModel() {
    // The weights, or coefficients of the model;
    // weights are only populated when training with data.
    this.weights = [];
    // The bias term, or intercept; it is also a weight but
    // it's stored separately for convenience as it is always
    // multiplied by one.
    this.bias = 0;
}

/**
 * **Predict**: Use an array of features with the weight array and bias
 * to predict whether an example is labeled 0 or 1.
 *
 * @param {Array<number>} features an array of features as numbers
 * @returns {number} 1 if the score is over 0, otherwise 0
 */
PerceptronModel.prototype.predict = function(features) {

    // Only predict if previously trained
    // on the same size feature array(s).
    if (features.length !== this.weights.length) { return null; }

    // Calculate the sum of features times weights,
    // with the bias added (implicitly times one).
    var score = 0;
    for (var i = 0; i < this.weights.length; i++) {
        score += this.weights[i] * features[i];
    }
    score += this.bias;

    // Classify as 1 if the score is over 0, otherwise 0.
    if (score > 0) {
        return 1;
    } else {
        return 0;
    }
};

/**
 * **Train** the classifier with a new example, which is
 * a numeric array of features and a 0 or 1 label.
 *
 * @param {Array<number>} features an array of features as numbers
 * @param {number} label either 0 or 1
 * @returns {PerceptronModel} this
 */
PerceptronModel.prototype.train = function(features, label) {
    // Require that only labels of 0 or 1 are considered.
    if (label !== 0 && label !== 1) { return null; }
    // The length of the feature array determines
    // the length of the weight array.
    // The perceptron will continue learning as long as
    // it keeps seeing feature arrays of the same length.
    // When it sees a new data shape, it initializes.
    if (features.length !== this.weights.length) {
        this.weights = features;
        this.bias = 1;
    }
    // Make a prediction based on current weights.
    var prediction = this.predict(features);
    // Update the weights if the prediction is wrong.
    if (prediction !== label) {
        var gradient = label - prediction;
        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] += gradient * features[i];
        }
        this.bias += gradient;
    }
    return this;
};

/* harmony default export */ __webpack_exports__["a"] = (PerceptronModel);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * A [Factorial](https://en.wikipedia.org/wiki/Factorial), usually written n!, is the product of all positive
 * integers less than or equal to n. Often factorial is implemented
 * recursively, but this iterative approach is significantly faster
 * and simpler.
 *
 * @param {number} n input, must be an integer number 1 or greater
 * @returns {number} factorial: n!
 * @throws {Error} if n is less than 0 or not an integer
 * @example
 * factorial(5); // => 120
 */
function factorial(n /*: number */)/*: number */ {

    // factorial is mathematically undefined for negative numbers
    if (n < 0) {
        throw new Error('factorial requires a non-negative value');
    }

    if (Math.floor(n) !== n) {
        throw new Error('factorial requires an integer input');
    }

    // typically you'll expand the factorial function going down, like
    // 5! = 5 * 4 * 3 * 2 * 1. This is going in the opposite direction,
    // counting from 2 up to the number in question, and since anything
    // multiplied by 1 is itself, the loop only needs to start at 2.
    var accumulator = 1;
    for (var i = 2; i <= n; i++) {
        // for each number up to and including the number `n`, multiply
        // the accumulator my that number.
        accumulator *= i;
    }
    return accumulator;
}

/* harmony default export */ __webpack_exports__["a"] = (factorial);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [Bernoulli distribution](http://en.wikipedia.org/wiki/Bernoulli_distribution)
 * is the probability discrete
 * distribution of a random variable which takes value 1 with success
 * probability `p` and value 0 with failure
 * probability `q` = 1 - `p`. It can be used, for example, to represent the
 * toss of a coin, where "1" is defined to mean "heads" and "0" is defined
 * to mean "tails" (or vice versa). It is
 * a special case of a Binomial Distribution
 * where `n` = 1.
 *
 * @param {number} p input value, between 0 and 1 inclusive
 * @returns {number[]} values of bernoulli distribution at this point
 * @throws {Error} if p is outside 0 and 1
 * @example
 * bernoulliDistribution(0.3); // => [0.7, 0.3]
 */
function bernoulliDistribution(p/*: number */) /*: number[] */ {
    // Check that `p` is a valid probability (0 ≤ p ≤ 1)
    if (p < 0 || p > 1 ) {
        throw new Error('bernoulliDistribution requires probability to be between 0 and 1 inclusive');
    }

    return [1 - p, p];
}

/* harmony default export */ __webpack_exports__["a"] = (bernoulliDistribution);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__epsilon__ = __webpack_require__(1);
/* @flow */



/**
 * The [Binomial Distribution](http://en.wikipedia.org/wiki/Binomial_distribution) is the discrete probability
 * distribution of the number of successes in a sequence of n independent yes/no experiments, each of which yields
 * success with probability `probability`. Such a success/failure experiment is also called a Bernoulli experiment or
 * Bernoulli trial; when trials = 1, the Binomial Distribution is a Bernoulli Distribution.
 *
 * @param {number} trials number of trials to simulate
 * @param {number} probability
 * @returns {number[]} output
 */
function binomialDistribution(
    trials/*: number */,
    probability/*: number */)/*: ?number[] */ {
    // Check that `p` is a valid probability (0 ≤ p ≤ 1),
    // that `n` is an integer, strictly positive.
    if (probability < 0 || probability > 1 ||
        trials <= 0 || trials % 1 !== 0) {
        return undefined;
    }

    // We initialize `x`, the random variable, and `accumulator`, an accumulator
    // for the cumulative distribution function to 0. `distribution_functions`
    // is the object we'll return with the `probability_of_x` and the
    // `cumulativeProbability_of_x`, as well as the calculated mean &
    // variance. We iterate until the `cumulativeProbability_of_x` is
    // within `epsilon` of 1.0.
    var x = 0,
        cumulativeProbability = 0,
        cells = [],
        binomialCoefficient = 1;

    // This algorithm iterates through each potential outcome,
    // until the `cumulativeProbability` is very close to 1, at
    // which point we've defined the vast majority of outcomes
    do {
        // a [probability mass function](https://en.wikipedia.org/wiki/Probability_mass_function)
        cells[x] = binomialCoefficient *
            Math.pow(probability, x) * Math.pow(1 - probability, trials - x);
        cumulativeProbability += cells[x];
        x++;
        binomialCoefficient = binomialCoefficient * (trials - x + 1) / x;
    // when the cumulativeProbability is nearly 1, we've calculated
    // the useful range of this distribution
    } while (cumulativeProbability < 1 - __WEBPACK_IMPORTED_MODULE_0__epsilon__["a" /* default */]);

    return cells;
}

/* harmony default export */ __webpack_exports__["a"] = (binomialDistribution);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__epsilon__ = __webpack_require__(1);
/* @flow */



/**
 * The [Poisson Distribution](http://en.wikipedia.org/wiki/Poisson_distribution)
 * is a discrete probability distribution that expresses the probability
 * of a given number of events occurring in a fixed interval of time
 * and/or space if these events occur with a known average rate and
 * independently of the time since the last event.
 *
 * The Poisson Distribution is characterized by the strictly positive
 * mean arrival or occurrence rate, `λ`.
 *
 * @param {number} lambda location poisson distribution
 * @returns {number[]} values of poisson distribution at that point
 */
function poissonDistribution(lambda/*: number */) /*: ?number[] */ {
    // Check that lambda is strictly positive
    if (lambda <= 0) { return undefined; }

    // our current place in the distribution
    var x = 0,
        // and we keep track of the current cumulative probability, in
        // order to know when to stop calculating chances.
        cumulativeProbability = 0,
        // the calculated cells to be returned
        cells = [],
        factorialX = 1;

    // This algorithm iterates through each potential outcome,
    // until the `cumulativeProbability` is very close to 1, at
    // which point we've defined the vast majority of outcomes
    do {
        // a [probability mass function](https://en.wikipedia.org/wiki/Probability_mass_function)
        cells[x] = (Math.exp(-lambda) * Math.pow(lambda, x)) / factorialX;
        cumulativeProbability += cells[x];
        x++;
        factorialX *= x;
    // when the cumulativeProbability is nearly 1, we've calculated
    // the useful range of this distribution
    } while (cumulativeProbability < 1 - __WEBPACK_IMPORTED_MODULE_0__epsilon__["a" /* default */]);

    return cells;
}

/* harmony default export */ __webpack_exports__["a"] = (poissonDistribution);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chi_squared_distribution_table__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mean__ = __webpack_require__(0);
/* @flow */




/**
 * The [χ2 (Chi-Squared) Goodness-of-Fit Test](http://en.wikipedia.org/wiki/Goodness_of_fit#Pearson.27s_chi-squared_test)
 * uses a measure of goodness of fit which is the sum of differences between observed and expected outcome frequencies
 * (that is, counts of observations), each squared and divided by the number of observations expected given the
 * hypothesized distribution. The resulting χ2 statistic, `chiSquared`, can be compared to the chi-squared distribution
 * to determine the goodness of fit. In order to determine the degrees of freedom of the chi-squared distribution, one
 * takes the total number of observed frequencies and subtracts the number of estimated parameters. The test statistic
 * follows, approximately, a chi-square distribution with (k − c) degrees of freedom where `k` is the number of non-empty
 * cells and `c` is the number of estimated parameters for the distribution.
 *
 * @param {Array<number>} data
 * @param {Function} distributionType a function that returns a point in a distribution:
 * for instance, binomial, bernoulli, or poisson
 * @param {number} significance
 * @returns {number} chi squared goodness of fit
 * @example
 * // Data from Poisson goodness-of-fit example 10-19 in William W. Hines & Douglas C. Montgomery,
 * // "Probability and Statistics in Engineering and Management Science", Wiley (1980).
 * var data1019 = [
 *     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 *     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 *     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 *     2, 2, 2, 2, 2, 2, 2, 2, 2,
 *     3, 3, 3, 3
 * ];
 * ss.chiSquaredGoodnessOfFit(data1019, ss.poissonDistribution, 0.05); //= false
 */
function chiSquaredGoodnessOfFit(
    data/*: Array<number> */,
    distributionType/*: Function */,
    significance/*: number */)/*: boolean */ {
    // Estimate from the sample data, a weighted mean.
    var inputMean = Object(__WEBPACK_IMPORTED_MODULE_1__mean__["a" /* default */])(data),
        // Calculated value of the χ2 statistic.
        chiSquared = 0,
        // Degrees of freedom, calculated as (number of class intervals -
        // number of hypothesized distribution parameters estimated - 1)
        degreesOfFreedom,
        // Number of hypothesized distribution parameters estimated, expected to be supplied in the distribution test.
        // Lose one degree of freedom for estimating `lambda` from the sample data.
        c = 1,
        // The hypothesized distribution.
        // Generate the hypothesized distribution.
        hypothesizedDistribution = distributionType(inputMean),
        observedFrequencies = [],
        expectedFrequencies = [],
        k;

    // Create an array holding a histogram from the sample data, of
    // the form `{ value: numberOfOcurrences }`
    for (var i = 0; i < data.length; i++) {
        if (observedFrequencies[data[i]] === undefined) {
            observedFrequencies[data[i]] = 0;
        }
        observedFrequencies[data[i]]++;
    }

    // The histogram we created might be sparse - there might be gaps
    // between values. So we iterate through the histogram, making
    // sure that instead of undefined, gaps have 0 values.
    for (i = 0; i < observedFrequencies.length; i++) {
        if (observedFrequencies[i] === undefined) {
            observedFrequencies[i] = 0;
        }
    }

    // Create an array holding a histogram of expected data given the
    // sample size and hypothesized distribution.
    for (k in hypothesizedDistribution) {
        if (k in observedFrequencies) {
            expectedFrequencies[+k] = hypothesizedDistribution[k] * data.length;
        }
    }

    // Working backward through the expected frequencies, collapse classes
    // if less than three observations are expected for a class.
    // This transformation is applied to the observed frequencies as well.
    for (k = expectedFrequencies.length - 1; k >= 0; k--) {
        if (expectedFrequencies[k] < 3) {
            expectedFrequencies[k - 1] += expectedFrequencies[k];
            expectedFrequencies.pop();

            observedFrequencies[k - 1] += observedFrequencies[k];
            observedFrequencies.pop();
        }
    }

    // Iterate through the squared differences between observed & expected
    // frequencies, accumulating the `chiSquared` statistic.
    for (k = 0; k < observedFrequencies.length; k++) {
        chiSquared += Math.pow(
            observedFrequencies[k] - expectedFrequencies[k], 2) /
            expectedFrequencies[k];
    }

    // Calculate degrees of freedom for this test and look it up in the
    // `chiSquaredDistributionTable` in order to
    // accept or reject the goodness-of-fit of the hypothesized distribution.
    degreesOfFreedom = observedFrequencies.length - c - 1;
    return __WEBPACK_IMPORTED_MODULE_0__chi_squared_distribution_table__["a" /* default */][degreesOfFreedom][significance] < chiSquared;
}

/* harmony default export */ __webpack_exports__["a"] = (chiSquaredGoodnessOfFit);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interquartile_range__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_standard_deviation__ = __webpack_require__(7);
/* @flow */




var SQRT_2PI = Math.sqrt(2 * Math.PI);

/**
 * [Well-known kernels](https://en.wikipedia.org/wiki/Kernel_(statistics)#Kernel_functions_in_common_use)
 * @private
 */
var kernels /*: {[string]: (number) => number} */ = {
    /**
     * The gaussian kernel.
     * @private
     */
    gaussian: function (u) {
        return Math.exp(-0.5 * u * u) / SQRT_2PI;
    }
};

/**
 * Well known bandwidth selection methods
 * @private
 */
var bandwidthMethods /*: {[string]: (Array<number>) => number} */ = {
    /**
     * The ["normal reference distribution"
     * rule-of-thumb](https://stat.ethz.ch/R-manual/R-devel/library/MASS/html/bandwidth.nrd.html),
     * a commonly used version of [Silverman's
     * rule-of-thumb](https://en.wikipedia.org/wiki/Kernel_density_estimation#A_rule-of-thumb_bandwidth_estimator).
     * @private
     */
    nrd: function (x /*: Array<number> */) {
        var s = Object(__WEBPACK_IMPORTED_MODULE_1__sample_standard_deviation__["a" /* default */])(x);
        var iqr = Object(__WEBPACK_IMPORTED_MODULE_0__interquartile_range__["a" /* default */])(x);
        if (typeof iqr === 'number') {
            s = Math.min(s, iqr / 1.34)
        }
        return 1.06 * s * Math.pow(x.length, -0.2);
    }
}

/**
 * [Kernel density estimation](https://en.wikipedia.org/wiki/Kernel_density_estimation)
 * is a useful tool for, among other things, estimating the shape of the
 * underlying probability distribution from a sample.
 *
 * @name kernelDensityEstimation
 * @param X sample values
 * @param kernel The kernel function to use. If a function is provided, it should return non-negative values and integrate to 1. Defaults to 'gaussian'.
 * @param bandwidthMethod The "bandwidth selection" method to use, or a fixed bandwidth value. Defaults to "nrd", the commonly-used ["normal reference distribution" rule-of-thumb](https://stat.ethz.ch/R-manual/R-devel/library/MASS/html/bandwidth.nrd.html).
 * @returns {Function} An estimated [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) for the given sample. The returned function runs in `O(X.length)`.
 */
function kernelDensityEstimation(
    X /*: Array<number> */,
    kernel /*: $Keys<typeof kernels> | ((number) => number) | void*/,
    bandwidthMethod /*: $Keys<typeof bandwidthMethods> | number | void*/
) {
    var kernelFn/*: (number) => number */;
    if (kernel === undefined) {
        kernelFn = kernels.gaussian;
    } else if (typeof kernel === 'string') {
        if (!kernels[kernel]) {
            throw new Error('Unknown kernel "' + kernel + '"');
        }
        kernelFn = kernels[kernel];
    } else {
        kernelFn = kernel;
    }

    var bandwidth;
    if (typeof bandwidthMethod === 'undefined') {
        bandwidth = bandwidthMethods.nrd(X);
    } else if (typeof bandwidthMethod === 'string') {
        if (!bandwidthMethods[bandwidthMethod]) {
            throw new Error('Unknown bandwidth method "' + bandwidthMethod + '"');
        }
        bandwidth = bandwidthMethods[bandwidthMethod](X);
    } else {
        bandwidth = bandwidthMethod;
    }

    return function (x /*: number*/) {
        var i = 0;
        var sum = 0;
        for (i = 0; i < X.length; i++) {
            sum += kernelFn((x - X[i]) / bandwidth);
        }
        return sum / bandwidth / X.length;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (kernelDensityEstimation);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * The [Z-Score, or Standard Score](http://en.wikipedia.org/wiki/Standard_score).
 *
 * The standard score is the number of standard deviations an observation
 * or datum is above or below the mean. Thus, a positive standard score
 * represents a datum above the mean, while a negative standard score
 * represents a datum below the mean. It is a dimensionless quantity
 * obtained by subtracting the population mean from an individual raw
 * score and then dividing the difference by the population standard
 * deviation.
 *
 * The z-score is only defined if one knows the population parameters;
 * if one only has a sample set, then the analogous computation with
 * sample mean and sample standard deviation yields the
 * Student's t-statistic.
 *
 * @param {number} x
 * @param {number} mean
 * @param {number} standardDeviation
 * @return {number} z score
 * @example
 * zScore(78, 80, 5); // => -0.4
 */
function zScore(x/*:number*/, mean/*:number*/, standardDeviation/*:number*/)/*:number*/ {
    return (x - mean) / standardDeviation;
}

/* harmony default export */ __webpack_exports__["a"] = (zScore);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__standard_normal_table__ = __webpack_require__(36);
/* @flow */



/**
 * **[Cumulative Standard Normal Probability](http://en.wikipedia.org/wiki/Standard_normal_table)**
 *
 * Since probability tables cannot be
 * printed for every normal distribution, as there are an infinite variety
 * of normal distributions, it is common practice to convert a normal to a
 * standard normal and then use the standard normal table to find probabilities.
 *
 * You can use `.5 + .5 * errorFunction(x / Math.sqrt(2))` to calculate the probability
 * instead of looking it up in a table.
 *
 * @param {number} z
 * @returns {number} cumulative standard normal probability
 */
function cumulativeStdNormalProbability(z /*:number */)/*:number */ {

    // Calculate the position of this value.
    var absZ = Math.abs(z),
        // Each row begins with a different
        // significant digit: 0.5, 0.6, 0.7, and so on. Each value in the table
        // corresponds to a range of 0.01 in the input values, so the value is
        // multiplied by 100.
        index = Math.min(Math.round(absZ * 100), __WEBPACK_IMPORTED_MODULE_0__standard_normal_table__["a" /* default */].length - 1);

    // The index we calculate must be in the table as a positive value,
    // but we still pay attention to whether the input is positive
    // or negative, and flip the output value as a last step.
    if (z >= 0) {
        return __WEBPACK_IMPORTED_MODULE_0__standard_normal_table__["a" /* default */][index];
    } else {
        // due to floating-point arithmetic, values in the table with
        // 4 significant figures can nevertheless end up as repeating
        // fractions when they're computed here.
        return +(1 - __WEBPACK_IMPORTED_MODULE_0__standard_normal_table__["a" /* default */][index]).toFixed(4);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (cumulativeStdNormalProbability);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* @flow */

/**
 * **[Gaussian error function](http://en.wikipedia.org/wiki/Error_function)**
 *
 * The `errorFunction(x/(sd * Math.sqrt(2)))` is the probability that a value in a
 * normal distribution with standard deviation sd is within x of the mean.
 *
 * This function returns a numerical approximation to the exact value.
 *
 * @param {number} x input
 * @return {number} error estimation
 * @example
 * errorFunction(1).toFixed(2); // => '0.84'
 */
function errorFunction(x/*: number */)/*: number */ {
    var t = 1 / (1 + 0.5 * Math.abs(x));
    var tau = t * Math.exp(-Math.pow(x, 2) -
        1.26551223 +
        1.00002368 * t +
        0.37409196 * Math.pow(t, 2) +
        0.09678418 * Math.pow(t, 3) -
        0.18628806 * Math.pow(t, 4) +
        0.27886807 * Math.pow(t, 5) -
        1.13520398 * Math.pow(t, 6) +
        1.48851587 * Math.pow(t, 7) -
        0.82215223 * Math.pow(t, 8) +
        0.17087277 * Math.pow(t, 9));
    if (x >= 0) {
        return 1 - tau;
    } else {
        return tau - 1;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (errorFunction);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__epsilon__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inverse_error_function__ = __webpack_require__(37);
/* @flow */




/**
 * The [Probit](http://en.wikipedia.org/wiki/Probit)
 * is the inverse of cumulativeStdNormalProbability(),
 * and is also known as the normal quantile function.
 *
 * It returns the number of standard deviations from the mean
 * where the p'th quantile of values can be found in a normal distribution.
 * So, for example, probit(0.5 + 0.6827/2) ≈ 1 because 68.27% of values are
 * normally found within 1 standard deviation above or below the mean.
 *
 * @param {number} p
 * @returns {number} probit
 */
function probit(p /*: number */)/*: number */ {
    if (p === 0) {
        p = __WEBPACK_IMPORTED_MODULE_0__epsilon__["a" /* default */];
    } else if (p >= 1) {
        p = 1 - __WEBPACK_IMPORTED_MODULE_0__epsilon__["a" /* default */];
    }
    return Math.sqrt(2) * Object(__WEBPACK_IMPORTED_MODULE_1__inverse_error_function__["a" /* default */])(2 * p - 1);
}

/* harmony default export */ __webpack_exports__["a"] = (probit);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(38);
/* @flow */



/**
 * [Bisection method](https://en.wikipedia.org/wiki/Bisection_method) is a root-finding
 * method that repeatedly bisects an interval to find the root.
 *
 * This function returns a numerical approximation to the exact value.
 *
 * @param {Function} func input function
 * @param {number} start - start of interval
 * @param {number} end - end of interval
 * @param {number} maxIterations - the maximum number of iterations
 * @param {number} errorTolerance - the error tolerance
 * @returns {number} estimated root value
 * @throws {TypeError} Argument func must be a function
 *
 * @example
 * bisect(Math.cos,0,4,100,0.003); // => 1.572265625
 */
function bisect(
    func/*: (x: any) => number */,
    start/*: number */,
    end/*: number */,
    maxIterations/*: number */,
    errorTolerance/*: number */)/*:number*/ {

    if (typeof func !== 'function') throw new TypeError('func must be a function');

    for (var i = 0; i < maxIterations; i++) {
        var output = (start + end) / 2;

        if (func(output) === 0 || Math.abs((end - start) / 2) < errorTolerance) {
            return output;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* default */])(func(output)) === Object(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* default */])(func(start))) {
            start = output;
        } else {
            end = output;
        }
    }

    throw new Error('maximum number of iterations exceeded');
}

/* harmony default export */ __webpack_exports__["a"] = (bisect);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addChart;

var _simpleStatistics = __webpack_require__(20);

function addChart(layer, data) {
  var _this = this;

  var population = data.map(function (d) {
    return d[layer.categories.total];
  });
  var clusters = (0, _simpleStatistics.ckmeans)(population, layer.categories.clusters);

  // create a DOM element for the marker
  data.forEach(function (district) {
    var total = district[layer.categories.total];
    var chartArr = [];
    var chartProp = '';
    var propTotal = 0;
    var dimension = void 0;

    if (layer.categories.title) {
      chartProp += '<div><b>' + district[layer.categories.title] + '</b></div>';
    }

    if (layer.categories['total-label']) {
      chartProp += '<div>' + layer.categories['total-label'] + ': <b>' + total + '</b></div>';
    }

    for (var i = 0; i < layer.categories.property.length; i += 1) {
      chartArr.push({
        color: layer.categories.color[i],
        y: parseInt(district[layer.categories.property[i]] / total * 100, 10),
        label: layer.categories.label[i]
      });
      propTotal += parseInt(district[layer.categories.property[i]] / total * 100, 10);
      chartProp += '<div><span class="swatch" style="background: ' + layer.categories.color[i] + ';"></span>\n          ' + layer.categories.label[i] + ':\n          <b>' + (district[layer.categories.property[i]] / total * 100).toFixed(1) + '%</b></div>';
    }

    if (layer.categories.difference) {
      chartProp += '<div><span class="swatch" style="background: ' + layer.categories.difference[1] + ';"></span>\n            ' + layer.categories.difference[0] + ': <b>' + (100 - propTotal).toFixed(1) + '%</b></div>';
      chartArr.splice(0, 0, {
        color: layer.categories.difference[1],
        y: 100 - propTotal,
        label: layer.categories.difference[0]
      });
    }

    for (var _i = 0; _i < clusters.length; _i += 1) {
      if (clusters[_i].includes(total)) {
        dimension = layer.categories.dimension[_i];
      }
    }

    var chartData = [{
      data: chartArr,
      size: layer.chart.size,
      innerSize: layer.chart.innerSize
    }];

    var content = '<div><b>' + district[layer.source.join[1]] + '</b></div>' + chartProp;

    var el = document.createElement('div');
    el.id = 'chart-' + district[layer.source.join[1]] + '-' + layer.id + '-' + _this.props.mapId;
    el.className = 'marker-chart marker-chart-' + layer.id + '-' + _this.props.mapId;
    el.style.width = layer.chart.width;
    el.style.height = layer.chart.height;
    $(el).attr('data-map', _this.props.mapId);
    $(el).attr('data-lng', district[layer.chart.coordinates[0]]);
    $(el).attr('data-lat', district[layer.chart.coordinates[1]]);
    $(el).attr('data-popup', content);

    // add marker to map
    new mapboxgl.Marker(el, {
      offset: layer.chart.offset
    }).setLngLat([district[layer.chart.coordinates[0]], district[layer.chart.coordinates[1]]]).addTo(_this.map);

    var container = $('#chart-' + district[layer.source.join[1]] + '-' + layer.id + '-' + _this.props.mapId)[0];
    Map.drawDoughnutChart(container, chartData, dimension);
  });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addLegend;

var _formatNum = __webpack_require__(113);

var _formatNum2 = _interopRequireDefault(_formatNum);

var _hexToRgbA = __webpack_require__(114);

var _hexToRgbA2 = _interopRequireDefault(_hexToRgbA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function addLegend(layer, stops, data, breaks, colors) {
  // todo: change for split map
  var mapId = '01';

  if (!layer.visible) {
    // $(`#legend-${layerId}-${mapId} .set-primary-layer`).off('click', this.setPrimaryLayer);
    $('#legend-' + layer.id + '-' + mapId).remove();
  } else {
    var background = '';
    // legends for circle layers
    if (layer.credit && layer.type === 'circle' && !layer.categories.shape) {
      $('.legend.' + mapId).prepend('<div id="legend-' + layer.id + '-' + mapId + '"\n          class="legend-shapes legend-row" data-layer="' + layer.id + '">\n          <b>' + layer.label + '</b>\n          <div class="legend-symbols">\n            <span class="circle-sm" style="background:' + layer.categories.color + ';"></span>\n            <span class="circle-md" style="background:' + layer.categories.color + ';"></span>\n            <span class="circle-lg" style="background:' + layer.categories.color + ';"></span>\n          </div>\n          <span>' + layer.credit + '</span>\n        </div>');

      // legends for symbol layers
    } else if (layer.credit && layer.categories.shape && layer.type !== 'circle') {
      layer.categories.color.forEach(function (color, index) {
        var style = layer.categories.shape[index] === 'triangle-stroked-11' || layer.categories.shape[index] === 'triangle-15' ? 'border-bottom-color:' : 'background:';

        background += '<li class="layer-symbols"> <span class="' + layer.categories.shape[index] + '" style="' + style + color + ';"></span>' + layer.categories.label[index] + '</li>';
      });

      $('.legend.' + mapId).prepend('<div id="legend-' + layer.id + '-' + mapId + '" class="legend-row" data-layer="' + layer.id + '">\n          <b>' + layer.label + '</b>\n          <div class="legend-shapes">\n            <ul style="left: 0;">' + background + '</ul>\n          </div>\n          <span>' + layer.credit + '</span>\n        </div>');

      // legends for fill layers with no breaks
    } else if (layer.credit && layer.categories.breaks === 'no') {
      layer.categories.color.forEach(function (color, index) {
        background += '<li style="background:' + color + '; width:' + 100 / layer.categories.color.length + '%;">' + layer.categories.label[index] + '</li>';
      });

      $('.legend.' + mapId).prepend('<div id="legend-' + layer.id + '-' + mapId + '" class="legend-row" data-layer="' + layer.id + '">\n          <b>' + layer.label + '</b>\n          <div class="legend-fill ' + (layer.categories ? 'legend-label' : '') + '">\n            <ul>' + background + '</ul>\n          </div>\n          <span>' + layer.credit + '</span>\n        </div>');

      // legends for fill layrs with breaks
    } else if (layer.credit && layer.type !== 'circle' && layer.type !== 'chart') {
      var dataValues = data.map(function (values) {
        return values[layer.property];
      });
      var colorLegend = [].concat(_toConsumableArray(new Set(stops.map(function (stop) {
        return stop[1];
      }))));
      var legendSuffix = layer.categories.suffix ? layer.categories.suffix : '';

      if (colorLegend.includes('transparent') && !colors.includes('transparent')) {
        colors.splice(0, 0, 'transparent');
        breaks.splice(1, 0, breaks[0]);
      }

      colorLegend.forEach(function (color, index) {
        var firstVal = breaks[index - 1] !== undefined ? breaks[index - 1] : 0;
        var lastVal = color === colorLegend[colorLegend.length - 1] || breaks[index] === undefined ? Math.max.apply(Math, _toConsumableArray(dataValues)) : breaks[index];
        background += '<li class="background-block-' + layer.id + '-' + mapId + '"' + ('data-tooltip="' + (0, _formatNum2.default)(firstVal, 1) + '-' + (0, _formatNum2.default)(lastVal, 1) + legendSuffix + '"') + ('style="background:' + (0, _hexToRgbA2.default)(color, 0.9) + '; width:' + 100 / colorLegend.length + '%;"></li > ');
      });

      $('.legend.' + mapId).prepend('<div id="legend-' + layer.id + '-' + mapId + '" class="legend-row" data-layer="' + layer.id + '">\n          <b>' + layer.label + '</b>\n          <ul class="legend-limit" style="padding: 0% 0% 3% 0%;"> \n            <li id="first-limit-' + layer.id + '" class="' + mapId + '"\n              style="position: absolute; list-style: none; display: inline; left: 3%;">\n              ' + 0 + legendSuffix + '\n            </li>\n            <li id="last-limit-' + layer.id + '" class="' + mapId + ' \n              "style="position: absolute; list-style: none; display: inline; right: 3%;">\n              ' + (0, _formatNum2.default)(Math.max.apply(Math, _toConsumableArray(dataValues)), 1) + legendSuffix + '\n            </li>\n          </ul>\n          <div class="legend-fill">\n            <ul id="legend-background">' + background + '</ul>\n          </div>\n          <span>' + layer.credit + '</span>\n        </div>');

      $('.background-block-' + layer.id + '-' + mapId).hover(function () {
        $('#first-limit-' + layer.id + '.' + mapId).text($('first-limit').text());
        $('#last-limit-' + layer.id + '.' + mapId).text($('last-limit').text());
      }, function () {
        $('#first-limit-' + layer.id + '.' + mapId).text(0 + legendSuffix);
        $('#last-limit-' + layer.id + '.' + mapId).text((0, _formatNum2.default)(Math.max.apply(Math, _toConsumableArray(dataValues)), 1) + legendSuffix);
      });

      // no legend
    } else {
      $('.set-primary-layer.primary').removeClass('primary');
    }

    // $('.set-primary-layer.primary').removeClass('primary');
    //   $(`#legend-${layer.id}-${mapId} .set-primary-layer`)
    //     .on('click', this.setPrimaryLayer)
    //     .addClass('primary');

    $('.legend-row.primary').removeClass('primary');
    $('#legend-' + layer.id + '-' + mapId).addClass('primary');
    // .on('click', this.setPrimaryLayer);
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNum;
function formatNum(num, decimal) {
  var x = ('' + num).length;
  if (Number.isInteger(num) && x > 3) {
    var pow = Math.pow(10, decimal);
    x -= x % 3;
    return Math.round(num * pow / Math.pow(10, x)) / pow + ' kMGTPE'[x / 3];
  }
  return num;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
var hexToRgbA = function hexToRgbA(hex, alpha) {
  var c = void 0;
  var a = alpha || alpha === 0 ? alpha : 1;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = [[c[0], c[1]].join(''), [c[2], c[3]].join(''), [c[4], c[5]].join('')];
    return 'rgba(' + parseInt(c[0], 16) + ', ' + parseInt(c[1], 16) + ', ' + parseInt(c[2], 16) + ', ' + a + ')';
  }
  throw new Error('Bad Hex');
};

exports.default = hexToRgbA;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addLabels;

var _mustache = __webpack_require__(116);

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo: change for split map
var mapId = '01';

function removeLabels(layer) {
  var classItems = document.getElementsByClassName('marker-label-' + layer.id + '-' + mapId);
  while (classItems[0]) {
    classItems[0].parentNode.removeChild(classItems[0]);
  }
}

function addLabels(map, layer, data) {
  if (layer.labels && layer.labels.data && layer.labels.join) {
    var labels = [];

    data.forEach(function (row) {
      var el = document.createElement('div');
      el.className = 'marker-label marker-label-' + layer.id + '-' + mapId;
      el.style.width = layer.labels.width;
      el.style.height = layer.labels.height;
      el.style['font-size'] = '12px';
      el.style['font-weight'] = 'normal';
      $(el).html(_mustache2.default.render(layer.labels.label, row));
      layer.labels.data.forEach(function (label) {
        if (label[layer.labels.join[0]] === row[layer.labels.join[1]]) {
          labels.push({
            el: el,
            offset: layer.labels.offset,
            coordinates: [label[layer.labels.coordinates[0]], label[layer.labels.coordinates[1]]]
          });
        }
      });
    });

    if (map.getZoom() > layer.labels.minzoom) {
      labels.forEach(function (row) {
        new mapboxgl.Marker(row.el, {
          offset: row.offset
        }).setLngLat(row.coordinates).addTo(map);
      });
    }

    if (typeof layer.labels.maxzoom === 'undefined') {
      layer.labels.maxzoom = 22;
    }
    map.on('zoom', function () {
      if (map.getZoom() > layer.labels.minzoom && map.getZoom() < layer.labels.maxzoom && map.getLayer(layer.id) !== undefined) {
        removeLabels(layer);

        labels.forEach(function (row) {
          new mapboxgl.Marker(row.el, {
            offset: row.offset
          }).setLngLat(row.coordinates).addTo(map);
        });
      } else {
        removeLabels(layer);
      }
    });
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk0NzkwZGM5M2UxYzA5MTdkOWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtX250aF9wb3dlcl9kZXZpYXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbnVtZXJpY19zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcXVhbnRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWFudGlsZV9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvcHJlcGFyZUxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N0YW5kYXJkX2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZV9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWlja3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2ludGVycXVhcnRpbGVfcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tZWRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zaHVmZmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2h1ZmZsZV9pbl9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3VuaXF1ZV9jb3VudF9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGVfY292YXJpYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmVfbWVhbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jaGlfc3F1YXJlZF9kaXN0cmlidXRpb25fdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zdGFuZGFyZF9ub3JtYWxfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9pbnZlcnNlX2Vycm9yX2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYWdncmVnYXRlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZmV0Y2hGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZExheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvc29ydExheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2J1aWxkVGltZXNlcmllc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC9nZW5lcmF0ZVN0b3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvcmJyZXdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2xpbmVhcl9yZWdyZXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbGluZWFyX3JlZ3Jlc3Npb25fbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Jfc3F1YXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tb2RlX2Zhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9taW5fc29ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWF4X3NvcnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N1bV9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX2Fic29sdXRlX2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3dpdGhfcmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9ja21lYW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXF1YWxfaW50ZXJ2YWxfYnJlYWtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2NvcnJlbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3NrZXduZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2t1cnRvc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVybXV0YXRpb25zX2hlYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jb21iaW5hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jb21iaW5hdGlvbnNfcmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9hZGRfdG9fbWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmVfdmFyaWFuY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZ2VvbWV0cmljX21lYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9oYXJtb25pY19tZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX3NvcnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N1YnRyYWN0X2Zyb21fbWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Jvb3RfbWVhbl9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy90X3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy90X3Rlc3RfdHdvX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2JheWVzaWFuX2NsYXNzaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9wZXJjZXB0cm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZmFjdG9yaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvYmVybm91bGxpX2Rpc3RyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jpbm9taWFsX2Rpc3RyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3BvaXNzb25fZGlzdHJpYnV0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY2hpX3NxdWFyZWRfZ29vZG5lc3Nfb2ZfZml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMva2VybmVsX2RlbnNpdHlfZXN0aW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3pfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jdW11bGF0aXZlX3N0ZF9ub3JtYWxfcHJvYmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9lcnJvcl9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Byb2JpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jpc2VjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZENoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvYWRkTGVnZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9mb3JtYXROdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hleFRvUmdiQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZExhYmVscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNqZkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVUsY0FBYyxFQUFFLEVBQUU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhCQUE4QixnQkFBZ0IsRUFBRTtBQUNsRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtNQUNyRSxLQUFLLEdBQUcsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztNQUM1QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztBQUV0RSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFZLE1BQU0sSUFBSSxLQUFLLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFOztRQUV0SyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1VBQzdCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7VUFDakMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ25DLE1BQU07VUFDTCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1VBQzdCLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDM0IsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUM1QixNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZCLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdkIsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2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LFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDckMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO09BQ0Y7S0FDRjtJQUNELE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztHQUNyRjtFQUNELE9BQU8sRUFBRSxDQUFDOzs7Ozs7O0FDckpaO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7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QUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakYsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0Qzs7SUFFSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO01BQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDaEMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUJBQXFCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sd0NBQXdDO0FBQy9DO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixNQUFNOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJnaXNpZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjk0NzkwZGM5M2UxYzA5MTdkOWYiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc3VtIGZyb20gJy4vc3VtJztcblxuLyoqXG4gKiBUaGUgbWVhbiwgX2Fsc28ga25vd24gYXMgYXZlcmFnZV8sXG4gKiBpcyB0aGUgc3VtIG9mIGFsbCB2YWx1ZXMgb3ZlciB0aGUgbnVtYmVyIG9mIHZhbHVlcy5cbiAqIFRoaXMgaXMgYSBbbWVhc3VyZSBvZiBjZW50cmFsIHRlbmRlbmN5XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZW50cmFsX3RlbmRlbmN5KTpcbiAqIGEgbWV0aG9kIG9mIGZpbmRpbmcgYSB0eXBpY2FsIG9yIGNlbnRyYWwgdmFsdWUgb2YgYSBzZXQgb2YgbnVtYmVycy5cbiAqXG4gKiBUaGlzIHJ1bnMgb24gYE8obilgLCBsaW5lYXIgdGltZSBpbiByZXNwZWN0IHRvIHRoZSBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB0aGUgdGhlIGxlbmd0aCBvZiB4IGlzIGxlc3MgdGhhbiBvbmVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1lYW5cbiAqIEBleGFtcGxlXG4gKiBtZWFuKFswLCAxMF0pOyAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIG1lYW4oeCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjogbnVtYmVyICovIHtcbiAgICAvLyBUaGUgbWVhbiBvZiBubyBudW1iZXJzIGlzIG51bGxcbiAgICBpZiAoeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZWFuIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bSh4KSAvIHgubGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21lYW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXZSB1c2UgYM61YCwgZXBzaWxvbiwgYXMgYSBzdG9wcGluZyBjcml0ZXJpb24gd2hlbiB3ZSB3YW50IHRvIGl0ZXJhdGVcbiAqIHVudGlsIHdlJ3JlIFwiY2xvc2UgZW5vdWdoXCIuIEVwc2lsb24gaXMgYSB2ZXJ5IHNtYWxsIG51bWJlcjogZm9yXG4gKiBzaW1wbGUgc3RhdGlzdGljcywgdGhhdCBudW1iZXIgaXMgKiowLjAwMDEqKlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbiBjYWxjdWxhdGlvbnMgbGlrZSB0aGUgYmlub21pYWxEaXN0cmlidXRpb24sIGluIHdoaWNoXG4gKiB0aGUgcHJvY2VzcyBvZiBmaW5kaW5nIGEgdmFsdWUgaXMgW2l0ZXJhdGl2ZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSXRlcmF0aXZlX21ldGhvZCk6XG4gKiBpdCBwcm9ncmVzc2VzIHVudGlsIGl0IGlzIGNsb3NlIGVub3VnaC5cbiAqXG4gKiBCZWxvdyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIGVwc2lsb24gaW4gW2dyYWRpZW50IGRlc2NlbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYWRpZW50X2Rlc2NlbnQpLFxuICogd2hlcmUgd2UncmUgdHJ5aW5nIHRvIGZpbmQgYSBsb2NhbCBtaW5pbXVtIG9mIGEgZnVuY3Rpb24ncyBkZXJpdmF0aXZlLFxuICogZ2l2ZW4gYnkgdGhlIGBmRGVyaXZhdGl2ZWAgbWV0aG9kLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGcm9tIGNhbGN1bGF0aW9uLCB3ZSBleHBlY3QgdGhhdCB0aGUgbG9jYWwgbWluaW11bSBvY2N1cnMgYXQgeD05LzRcbiAqIHZhciB4X29sZCA9IDA7XG4gKiAvLyBUaGUgYWxnb3JpdGhtIHN0YXJ0cyBhdCB4PTZcbiAqIHZhciB4X25ldyA9IDY7XG4gKiB2YXIgc3RlcFNpemUgPSAwLjAxO1xuICpcbiAqIGZ1bmN0aW9uIGZEZXJpdmF0aXZlKHgpIHtcbiAqICAgcmV0dXJuIDQgKiBNYXRoLnBvdyh4LCAzKSAtIDkgKiBNYXRoLnBvdyh4LCAyKTtcbiAqIH1cbiAqXG4gKiAvLyBUaGUgbG9vcCBydW5zIHVudGlsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHByZXZpb3VzXG4gKiAvLyB2YWx1ZSBhbmQgdGhlIGN1cnJlbnQgdmFsdWUgaXMgc21hbGxlciB0aGFuIGVwc2lsb24gLSBhIHJvdWdoXG4gKiAvLyBtZWF1cmUgb2YgJ2Nsb3NlIGVub3VnaCdcbiAqIHdoaWxlIChNYXRoLmFicyh4X25ldyAtIHhfb2xkKSA+IHNzLmVwc2lsb24pIHtcbiAqICAgeF9vbGQgPSB4X25ldztcbiAqICAgeF9uZXcgPSB4X29sZCAtIHN0ZXBTaXplICogZkRlcml2YXRpdmUoeF9vbGQpO1xuICogfVxuICpcbiAqIGNvbnNvbGUubG9nKCdMb2NhbCBtaW5pbXVtIG9jY3VycyBhdCcsIHhfbmV3KTtcbiAqL1xudmFyIGVwc2lsb24gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGVwc2lsb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXBzaWxvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaW5pdEFwcCA9IGV4cG9ydHMuaW5pdEFwcCA9IGZ1bmN0aW9uIGluaXRBcHAoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOSVRfQVBQJyxcbiAgICBjb25maWc6IGNvbmZpZ1xuICB9O1xufTtcblxudmFyIGluaXRTdHlsZXMgPSBleHBvcnRzLmluaXRTdHlsZXMgPSBmdW5jdGlvbiBpbml0U3R5bGVzKHN0eWxlcywgbWFwQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOSVRfU1RZTEVTJyxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBtYXBDb25maWc6IG1hcENvbmZpZ1xuICB9O1xufTtcblxudmFyIGluaXRSZWdpb25zID0gZXhwb3J0cy5pbml0UmVnaW9ucyA9IGZ1bmN0aW9uIGluaXRSZWdpb25zKHJlZ2lvbnMsIG1hcENvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTklUX1JFR0lPTlMnLFxuICAgIHJlZ2lvbnM6IHJlZ2lvbnMsXG4gICAgbWFwQ29uZmlnOiBtYXBDb25maWdcbiAgfTtcbn07XG5cbnZhciBhZGRMYXllciA9IGV4cG9ydHMuYWRkTGF5ZXIgPSBmdW5jdGlvbiBhZGRMYXllcihsYXllcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdBRERfTEFZRVInLFxuICAgIGxheWVyOiBsYXllclxuICB9O1xufTtcblxudmFyIGNoYW5nZVJlZ2lvbiA9IGV4cG9ydHMuY2hhbmdlUmVnaW9uID0gZnVuY3Rpb24gY2hhbmdlUmVnaW9uKHJlZ2lvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEFOR0VfUkVHSU9OJyxcbiAgICByZWdpb246IHJlZ2lvblxuICB9O1xufTtcblxudmFyIGNoYW5nZVN0eWxlID0gZXhwb3J0cy5jaGFuZ2VTdHlsZSA9IGZ1bmN0aW9uIGNoYW5nZVN0eWxlKHN0eWxlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0NIQU5HRV9TVFlMRScsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH07XG59O1xuXG52YXIgdG9nZ2xlTGF5ZXIgPSBleHBvcnRzLnRvZ2dsZUxheWVyID0gZnVuY3Rpb24gdG9nZ2xlTGF5ZXIobGF5ZXJJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdUT0dHTEVfTEFZRVInLFxuICAgIGxheWVySWQ6IGxheWVySWRcbiAgfTtcbn07XG5cbnZhciByZXF1ZXN0RGF0YSA9IGV4cG9ydHMucmVxdWVzdERhdGEgPSBmdW5jdGlvbiByZXF1ZXN0RGF0YShsYXllcklkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFUVVFU1RfREFUQScsXG4gICAgbGF5ZXJJZDogbGF5ZXJJZFxuICB9O1xufTtcblxudmFyIHJlY2VpdmVEYXRhID0gZXhwb3J0cy5yZWNlaXZlRGF0YSA9IGZ1bmN0aW9uIHJlY2VpdmVEYXRhKGxheWVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFQ0VJVkVfREFUQScsXG4gICAgbGF5ZXI6IGxheWVyXG4gIH07XG59O1xuXG52YXIgbWFwTG9hZGVkID0gZXhwb3J0cy5tYXBMb2FkZWQgPSBmdW5jdGlvbiBtYXBMb2FkZWQoaXNMb2FkZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSVNfTE9BREVEJyxcbiAgICBpc0xvYWRlZDogaXNMb2FkZWRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgaW5pdEFwcDogaW5pdEFwcCxcbiAgaW5pdFN0eWxlczogaW5pdFN0eWxlcyxcbiAgaW5pdFJlZ2lvbnM6IGluaXRSZWdpb25zLFxuICBhZGRMYXllcjogYWRkTGF5ZXIsXG4gIHRvZ2dsZUxheWVyOiB0b2dnbGVMYXllcixcbiAgcmVxdWVzdERhdGE6IHJlcXVlc3REYXRhLFxuICByZWNlaXZlRGF0YTogcmVjZWl2ZURhdGEsXG4gIG1hcExvYWRlZDogbWFwTG9hZGVkLFxuICBjaGFuZ2VSZWdpb246IGNoYW5nZVJlZ2lvbixcbiAgY2hhbmdlU3R5bGU6IGNoYW5nZVN0eWxlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3N0b3JlL2FjdGlvbnMvQWN0aW9ucy5qcyIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBtZWFuIGZyb20gJy4vbWVhbic7XG5cbi8qKlxuICogVGhlIHN1bSBvZiBkZXZpYXRpb25zIHRvIHRoZSBOdGggcG93ZXIuXG4gKiBXaGVuIG49MiBpdCdzIHRoZSBzdW0gb2Ygc3F1YXJlZCBkZXZpYXRpb25zLlxuICogV2hlbiBuPTMgaXQncyB0aGUgc3VtIG9mIGN1YmVkIGRldmlhdGlvbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4XG4gKiBAcGFyYW0ge251bWJlcn0gbiBwb3dlclxuICogQHJldHVybnMge251bWJlcn0gc3VtIG9mIG50aCBwb3dlciBkZXZpYXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBpbnB1dCA9IFsxLCAyLCAzXTtcbiAqIC8vIHNpbmNlIHRoZSB2YXJpYW5jZSBvZiBhIHNldCBpcyB0aGUgbWVhbiBzcXVhcmVkXG4gKiAvLyBkZXZpYXRpb25zLCB3ZSBjYW4gY2FsY3VsYXRlIHRoYXQgd2l0aCBzdW1OdGhQb3dlckRldmlhdGlvbnM6XG4gKiBzdW1OdGhQb3dlckRldmlhdGlvbnMoaW5wdXQsIDIpIC8gaW5wdXQubGVuZ3RoO1xuICovXG5mdW5jdGlvbiBzdW1OdGhQb3dlckRldmlhdGlvbnMoeC8qOiBBcnJheTxudW1iZXI+ICovLCBuLyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgbWVhblZhbHVlID0gbWVhbih4KSxcbiAgICAgICAgc3VtID0gMCxcbiAgICAgICAgdGVtcFZhbHVlLFxuICAgICAgICBpO1xuXG4gICAgLy8gVGhpcyBpcyBhbiBvcHRpbWl6YXRpb246IHdoZW4gbiBpcyAyICh3ZSdyZSBjb21wdXRpbmcgYSBudW1iZXIgc3F1YXJlZCksXG4gICAgLy8gbXVsdGlwbHlpbmcgdGhlIG51bWJlciBieSBpdHNlbGYgaXMgc2lnbmlmaWNhbnRseSBmYXN0ZXIgdGhhbiB1c2luZ1xuICAgIC8vIHRoZSBNYXRoLnBvdyBtZXRob2QuXG4gICAgaWYgKG4gPT09IDIpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBWYWx1ZSA9IHhbaV0gLSBtZWFuVmFsdWU7XG4gICAgICAgICAgICBzdW0gKz0gdGVtcFZhbHVlICogdGVtcFZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBNYXRoLnBvdyh4W2ldIC0gbWVhblZhbHVlLCBuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bU50aFBvd2VyRGV2aWF0aW9ucztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zdW1fbnRoX3Bvd2VyX2RldmlhdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBTb3J0IGFuIGFycmF5IG9mIG51bWJlcnMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZSwgZW5zdXJpbmcgdGhhdCB0aGVcbiAqIGFycmF5IGlzIG5vdCBjaGFuZ2VkIGluIHBsYWNlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgLnNvcnRcbiAqIGluIEphdmFTY3JpcHQgaXMgdG8gc29ydCBhcnJheXMgYXMgc3RyaW5nIHZhbHVlc1xuICpcbiAqICAgICBbMSwgMTAsIDEyLCAxMDIsIDIwXS5zb3J0KClcbiAqICAgICAvLyBvdXRwdXRcbiAqICAgICBbMSwgMTAsIDEwMiwgMTIsIDIwXVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dCBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gc29ydGVkIGFycmF5XG4gKiBAcHJpdmF0ZVxuICogQGV4YW1wbGVcbiAqIG51bWVyaWNTb3J0KFszLCAyLCAxXSkgLy8gPT4gWzEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIG51bWVyaWNTb3J0KHggLyo6IEFycmF5PG51bWJlcj4gKi8pIC8qOiBBcnJheTxudW1iZXI+ICovIHtcbiAgICByZXR1cm4geFxuICAgICAgICAvLyBlbnN1cmUgdGhlIGFycmF5IGlzIG5vdCBjaGFuZ2VkIGluLXBsYWNlXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC8vIGNvbXBhcmF0b3IgZnVuY3Rpb24gdGhhdCB0cmVhdHMgaW5wdXQgYXMgbnVtZXJpY1xuICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBudW1lcmljU29ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9udW1lcmljX3NvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHF1YW50aWxlU29ydGVkIGZyb20gJy4vcXVhbnRpbGVfc29ydGVkJztcbmltcG9ydCBxdWlja3NlbGVjdCBmcm9tICcuL3F1aWNrc2VsZWN0JztcblxuLyoqXG4gKiBUaGUgW3F1YW50aWxlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9RdWFudGlsZSk6XG4gKiB0aGlzIGlzIGEgcG9wdWxhdGlvbiBxdWFudGlsZSwgc2luY2Ugd2UgYXNzdW1lIHRvIGtub3cgdGhlIGVudGlyZVxuICogZGF0YXNldCBpbiB0aGlzIGxpYnJhcnkuIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlXG4gKiBbUXVhbnRpbGVzIG9mIGEgUG9wdWxhdGlvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9RdWFudGlsZSNRdWFudGlsZXNfb2ZfYV9wb3B1bGF0aW9uKVxuICogYWxnb3JpdGhtIGZyb20gd2lraXBlZGlhLlxuICpcbiAqIFNhbXBsZSBpcyBhIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBudW1iZXJzLFxuICogYW5kIHAgaXMgZWl0aGVyIGEgZGVjaW1hbCBudW1iZXIgZnJvbSAwIHRvIDEgb3IgYW4gYXJyYXkgb2YgZGVjaW1hbFxuICogbnVtYmVycyBmcm9tIDAgdG8gMS5cbiAqIEluIHRlcm1zIG9mIGEgay9xIHF1YW50aWxlLCBwID0gay9xIC0gaXQncyBqdXN0IGRlYWxpbmcgd2l0aCBmcmFjdGlvbnMgb3IgZGVhbGluZ1xuICogd2l0aCBkZWNpbWFsIHZhbHVlcy5cbiAqIFdoZW4gcCBpcyBhbiBhcnJheSwgdGhlIHJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gaXMgYWxzbyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBhcHByb3ByaWF0ZVxuICogcXVhbnRpbGVzIGluIGlucHV0IG9yZGVyXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBudW1iZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj4gfCBudW1iZXJ9IHAgdGhlIGRlc2lyZWQgcXVhbnRpbGUsIGFzIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuICogQHJldHVybnMge251bWJlcn0gcXVhbnRpbGVcbiAqIEBleGFtcGxlXG4gKiBxdWFudGlsZShbMywgNiwgNywgOCwgOCwgOSwgMTAsIDEzLCAxNSwgMTYsIDIwXSwgMC41KTsgLy8gPT4gOVxuICovXG5mdW5jdGlvbiBxdWFudGlsZSh4Lyo6IEFycmF5PG51bWJlcj4gKi8sIHAvKjogQXJyYXk8bnVtYmVyPiB8IG51bWJlciAqLykvKjogQXJyYXk8bnVtYmVyPiB8IG51bWJlciAqLyB7XG4gICAgdmFyIGNvcHkgPSB4LnNsaWNlKCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwKSkge1xuICAgICAgICAvLyByZWFycmFuZ2UgZWxlbWVudHMgc28gdGhhdCBlYWNoIGVsZW1lbnQgY29ycmVzcG9uZGluZyB0byBhIHJlcXVlc3RlZFxuICAgICAgICAvLyBxdWFudGlsZSBpcyBvbiBhIHBsYWNlIGl0IHdvdWxkIGJlIGlmIHRoZSBhcnJheSB3YXMgZnVsbHkgc29ydGVkXG4gICAgICAgIG11bHRpUXVhbnRpbGVTZWxlY3QoY29weSwgcCk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHJlc3VsdCBhcnJheVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAvLyBGb3IgZWFjaCByZXF1ZXN0ZWQgcXVhbnRpbGVcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRzW2ldID0gcXVhbnRpbGVTb3J0ZWQoY29weSwgcFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlkeCA9IHF1YW50aWxlSW5kZXgoY29weS5sZW5ndGgsIHApO1xuICAgICAgICBxdWFudGlsZVNlbGVjdChjb3B5LCBpZHgsIDAsIGNvcHkubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBxdWFudGlsZVNvcnRlZChjb3B5LCBwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHF1YW50aWxlU2VsZWN0KGFyciwgaywgbGVmdCwgcmlnaHQpIHtcbiAgICBpZiAoayAlIDEgPT09IDApIHtcbiAgICAgICAgcXVpY2tzZWxlY3QoYXJyLCBrLCBsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgayA9IE1hdGguZmxvb3Ioayk7XG4gICAgICAgIHF1aWNrc2VsZWN0KGFyciwgaywgbGVmdCwgcmlnaHQpO1xuICAgICAgICBxdWlja3NlbGVjdChhcnIsIGsgKyAxLCBrICsgMSwgcmlnaHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbXVsdGlRdWFudGlsZVNlbGVjdChhcnIsIHApIHtcbiAgICB2YXIgaW5kaWNlcyA9IFswXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHF1YW50aWxlSW5kZXgoYXJyLmxlbmd0aCwgcFtpXSkpO1xuICAgIH1cbiAgICBpbmRpY2VzLnB1c2goYXJyLmxlbmd0aCAtIDEpO1xuICAgIGluZGljZXMuc29ydChjb21wYXJlKTtcblxuICAgIHZhciBzdGFjayA9IFswLCBpbmRpY2VzLmxlbmd0aCAtIDFdO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICB2YXIgciA9IE1hdGguY2VpbChzdGFjay5wb3AoKSk7XG4gICAgICAgIHZhciBsID0gTWF0aC5mbG9vcihzdGFjay5wb3AoKSk7XG4gICAgICAgIGlmIChyIC0gbCA8PSAxKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGwgKyByKSAvIDIpO1xuICAgICAgICBxdWFudGlsZVNlbGVjdChhcnIsIGluZGljZXNbbV0sIGluZGljZXNbbF0sIGluZGljZXNbcl0pO1xuXG4gICAgICAgIHN0YWNrLnB1c2gobCwgbSwgbSwgcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG59XG5cbmZ1bmN0aW9uIHF1YW50aWxlSW5kZXgobGVuIC8qOiBudW1iZXIgKi8sIHAgLyo6IG51bWJlciAqLykvKjpudW1iZXIqLyB7XG4gICAgdmFyIGlkeCA9IGxlbiAqIHA7XG4gICAgaWYgKHAgPT09IDEpIHtcbiAgICAgICAgLy8gSWYgcCBpcyAxLCBkaXJlY3RseSByZXR1cm4gdGhlIGxhc3QgaW5kZXhcbiAgICAgICAgcmV0dXJuIGxlbiAtIDE7XG4gICAgfSBlbHNlIGlmIChwID09PSAwKSB7XG4gICAgICAgIC8vIElmIHAgaXMgMCwgZGlyZWN0bHkgcmV0dXJuIHRoZSBmaXJzdCBpbmRleFxuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGlkeCAlIDEgIT09IDApIHtcbiAgICAgICAgLy8gSWYgaW5kZXggaXMgbm90IGludGVnZXIsIHJldHVybiB0aGUgbmV4dCBpbmRleCBpbiBhcnJheVxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGlkeCkgLSAxO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGUgbGlzdCBoYXMgZXZlbi1sZW5ndGgsIHdlJ2xsIHJldHVybiB0aGUgbWlkZGxlIG9mIHR3byBpbmRpY2VzXG4gICAgICAgIC8vIGFyb3VuZCBxdWFudGlsZSB0byBpbmRpY2F0ZSB0aGF0IHdlIG5lZWQgYW4gYXZlcmFnZSB2YWx1ZSBvZiB0aGUgdHdvXG4gICAgICAgIHJldHVybiBpZHggLSAwLjU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmluYWxseSwgaW4gdGhlIHNpbXBsZSBjYXNlIG9mIGFuIGludGVnZXIgaW5kZXhcbiAgICAgICAgLy8gd2l0aCBhbiBvZGQtbGVuZ3RoIGxpc3QsIHJldHVybiB0aGUgaW5kZXhcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1YW50aWxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3F1YW50aWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgcXVhbnRpbGVzOiB3aGVuIHlvdSBrbm93XG4gKiB0aGF0IHRoZSBvcmRlciBpcyBzb3J0ZWQsIHlvdSBkb24ndCBuZWVkIHRvIHJlLXNvcnQgaXQsIGFuZCB0aGUgY29tcHV0YXRpb25zXG4gKiBhcmUgZmFzdGVyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBwIGRlc2lyZWQgcXVhbnRpbGU6IGEgbnVtYmVyIGJldHdlZW4gMCB0byAxLCBpbmNsdXNpdmVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHF1YW50aWxlIHZhbHVlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgcCBpeCBvdXRzaWRlIG9mIHRoZSByYW5nZSBmcm9tIDAgdG8gMVxuICogQHRocm93cyB7RXJyb3J9IGlmIHggaXMgZW1wdHlcbiAqIEBleGFtcGxlXG4gKiBxdWFudGlsZVNvcnRlZChbMywgNiwgNywgOCwgOCwgOSwgMTAsIDEzLCAxNSwgMTYsIDIwXSwgMC41KTsgLy8gPT4gOVxuICovXG5mdW5jdGlvbiBxdWFudGlsZVNvcnRlZCh4IC8qOiBBcnJheTxudW1iZXI+ICovLCBwIC8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgdmFyIGlkeCA9IHgubGVuZ3RoICogcDtcbiAgICBpZiAoeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdxdWFudGlsZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludC4nKTtcbiAgICB9IGVsc2UgaWYgKHAgPCAwIHx8IHAgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncXVhbnRpbGVzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxJyk7XG4gICAgfSBlbHNlIGlmIChwID09PSAxKSB7XG4gICAgICAgIC8vIElmIHAgaXMgMSwgZGlyZWN0bHkgcmV0dXJuIHRoZSBsYXN0IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIHhbeC5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2UgaWYgKHAgPT09IDApIHtcbiAgICAgICAgLy8gSWYgcCBpcyAwLCBkaXJlY3RseSByZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIHhbMF07XG4gICAgfSBlbHNlIGlmIChpZHggJSAxICE9PSAwKSB7XG4gICAgICAgIC8vIElmIHAgaXMgbm90IGludGVnZXIsIHJldHVybiB0aGUgbmV4dCBlbGVtZW50IGluIGFycmF5XG4gICAgICAgIHJldHVybiB4W01hdGguY2VpbChpZHgpIC0gMV07XG4gICAgfSBlbHNlIGlmICh4Lmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlIGxpc3QgaGFzIGV2ZW4tbGVuZ3RoLCB3ZSdsbCB0YWtlIHRoZSBhdmVyYWdlIG9mIHRoaXMgbnVtYmVyXG4gICAgICAgIC8vIGFuZCB0aGUgbmV4dCB2YWx1ZSwgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIHJldHVybiAoeFtpZHggLSAxXSArIHhbaWR4XSkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpbmFsbHksIGluIHRoZSBzaW1wbGUgY2FzZSBvZiBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICAgIC8vIHdpdGggYW4gb2RkLWxlbmd0aCBsaXN0LCByZXR1cm4gdGhlIHggdmFsdWUgYXQgdGhlIGluZGV4LlxuICAgICAgICByZXR1cm4geFtpZHhdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVhbnRpbGVTb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcXVhbnRpbGVfc29ydGVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzYW1wbGVWYXJpYW5jZSBmcm9tICcuL3NhbXBsZV92YXJpYW5jZSc7XG5cbi8qKlxuICogVGhlIFtzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N0YW5kYXJkX2RldmlhdGlvbiNTYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uKVxuICogaXMgdGhlIHNxdWFyZSByb290IG9mIHRoZSBzYW1wbGUgdmFyaWFuY2UuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGlucHV0IGFycmF5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAZXhhbXBsZVxuICogc2FtcGxlU3RhbmRhcmREZXZpYXRpb24oWzIsIDQsIDQsIDQsIDUsIDUsIDcsIDldKS50b0ZpeGVkKDIpO1xuICogLy8gPT4gJzIuMTQnXG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9uKHgvKjpBcnJheTxudW1iZXI+Ki8pLyo6bnVtYmVyKi8ge1xuICAgIC8vIFRoZSBzdGFuZGFyZCBkZXZpYXRpb24gb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgdmFyIHNhbXBsZVZhcmlhbmNlWCA9IHNhbXBsZVZhcmlhbmNlKHgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoc2FtcGxlVmFyaWFuY2VYKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlU3RhbmRhcmREZXZpYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3N0YW5kYXJkX2RldmlhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc3VtTnRoUG93ZXJEZXZpYXRpb25zIGZyb20gJy4vc3VtX250aF9wb3dlcl9kZXZpYXRpb25zJztcblxuLyoqXG4gKiBUaGUgW3NhbXBsZSB2YXJpYW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVmFyaWFuY2UjU2FtcGxlX3ZhcmlhbmNlKVxuICogaXMgdGhlIHN1bSBvZiBzcXVhcmVkIGRldmlhdGlvbnMgZnJvbSB0aGUgbWVhbi4gVGhlIHNhbXBsZSB2YXJpYW5jZVxuICogaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIHRoZSB2YXJpYW5jZSBieSB0aGUgdXNhZ2Ugb2YgW0Jlc3NlbCdzIENvcnJlY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jlc3NlbCdzX2NvcnJlY3Rpb24pOlxuICogaW5zdGVhZCBvZiBkaXZpZGluZyB0aGUgc3VtIG9mIHNxdWFyZWQgZGV2aWF0aW9ucyBieSB0aGUgbGVuZ3RoIG9mIHRoZSBpbnB1dCxcbiAqIGl0IGlzIGRpdmlkZWQgYnkgdGhlIGxlbmd0aCBtaW51cyBvbmUuIFRoaXMgY29ycmVjdHMgdGhlIGJpYXMgaW4gZXN0aW1hdGluZ1xuICogYSB2YWx1ZSBmcm9tIGEgc2V0IHRoYXQgeW91IGRvbid0IGtub3cgaWYgZnVsbC5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogKiBbV29sZnJhbSBNYXRoV29ybGQgb24gU2FtcGxlIFZhcmlhbmNlXShodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL1NhbXBsZVZhcmlhbmNlLmh0bWwpXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGEgc2FtcGxlIG9mIHR3byBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgdGhlIGxlbmd0aCBvZiB4IGlzIGxlc3MgdGhhbiAyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHNhbXBsZSB2YXJpYW5jZVxuICogQGV4YW1wbGVcbiAqIHNhbXBsZVZhcmlhbmNlKFsxLCAyLCAzLCA0LCA1XSk7IC8vID0+IDIuNVxuICovXG5mdW5jdGlvbiBzYW1wbGVWYXJpYW5jZSh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICAvLyBUaGUgdmFyaWFuY2Ugb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgaWYgKHgubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NhbXBsZVZhcmlhbmNlIHJlcXVpcmVzIGF0IGxlYXN0IHR3byBkYXRhIHBvaW50cycpO1xuICAgIH1cblxuICAgIHZhciBzdW1TcXVhcmVkRGV2aWF0aW9uc1ZhbHVlID0gc3VtTnRoUG93ZXJEZXZpYXRpb25zKHgsIDIpO1xuXG4gICAgLy8gdGhpcyBpcyBCZXNzZWxzJyBDb3JyZWN0aW9uOiBhbiBhZGp1c3RtZW50IG1hZGUgdG8gc2FtcGxlIHN0YXRpc3RpY3NcbiAgICAvLyB0aGF0IGFsbG93cyBmb3IgdGhlIHJlZHVjZWQgZGVncmVlIG9mIGZyZWVkb20gZW50YWlsZWQgaW4gY2FsY3VsYXRpbmdcbiAgICAvLyB2YWx1ZXMgZnJvbSBzYW1wbGVzIHJhdGhlciB0aGFuIGNvbXBsZXRlIHBvcHVsYXRpb25zLlxuICAgIHZhciBiZXNzZWxzQ29ycmVjdGlvbiA9IHgubGVuZ3RoIC0gMTtcblxuICAgIC8vIEZpbmQgdGhlIG1lYW4gdmFsdWUgb2YgdGhhdCBsaXN0XG4gICAgcmV0dXJuIHN1bVNxdWFyZWREZXZpYXRpb25zVmFsdWUgLyBiZXNzZWxzQ29ycmVjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlVmFyaWFuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3ZhcmlhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICAqXG4gICAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAgICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAgKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICAgKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gICAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAgICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgICpcbiAgICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAgICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAgKi9cbn07ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbXBvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9kZWZhdWx0U3RhdGUgPSByZXF1aXJlKCcuLi9kZWZhdWx0U3RhdGUnKTtcblxudmFyIF9kZWZhdWx0U3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFN0YXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gQVBQKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF9kZWZhdWx0U3RhdGUyLmRlZmF1bHQuQVBQO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJTklUX0FQUCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhY3Rpb24uY29uZmlnKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFNUWUxFUygpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfZGVmYXVsdFN0YXRlMi5kZWZhdWx0LlNUWUxFUztcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5JVF9TVFlMRVMnOlxuICAgICAge1xuICAgICAgICB2YXIgc3R5bGVzID0gYWN0aW9uLnN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBzO1xuICAgICAgICAgIGlmIChzdHlsZS5zdHlsZSA9PT0gYWN0aW9uLm1hcENvbmZpZy5zdHlsZSkgc3R5bGUuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH1cbiAgICBjYXNlICdDSEFOR0VfU1RZTEUnOlxuICAgICAge1xuICAgICAgICB2YXIgdXBkYXRlZFN0eWxlcyA9IHN0YXRlLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHZhciBzdHlsZSA9IHM7XG4gICAgICAgICAgaWYgKGFjdGlvbi5zdHlsZSA9PT0gc3R5bGUuc3R5bGUpIHtcbiAgICAgICAgICAgIHN0eWxlLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBzdHlsZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRTdHlsZXM7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBMQVlFUlMoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX2RlZmF1bHRTdGF0ZTIuZGVmYXVsdC5MQVlFUlM7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9MQVlFUic6XG4gICAgICB7XG4gICAgICAgIHZhciB1cGRhdGVkU3RhdGUgPSB7fTtcbiAgICAgICAgdXBkYXRlZFN0YXRlW2FjdGlvbi5sYXllci5pZF0gPSBhY3Rpb24ubGF5ZXI7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHVwZGF0ZWRTdGF0ZSk7XG4gICAgICB9XG4gICAgY2FzZSAnVE9HR0xFX0xBWUVSJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGxheWVySWQgPSBhY3Rpb24ubGF5ZXJJZDtcblxuICAgICAgICB2YXIgbGF5ZXIgPSBzdGF0ZVtsYXllcklkXTtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgX2RlZmluZVByb3BlcnR5KHt9LCBsYXllcklkLCBfZXh0ZW5kcyh7fSwgbGF5ZXIsIHtcbiAgICAgICAgICB2aXNpYmxlOiAhbGF5ZXIudmlzaWJsZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGNhc2UgJ1JFUVVFU1RfREFUQSc6XG4gICAgICB7XG4gICAgICAgIHZhciBfbGF5ZXJJZCA9IGFjdGlvbi5sYXllcklkO1xuXG4gICAgICAgIHZhciBfbGF5ZXIgPSBzdGF0ZVtfbGF5ZXJJZF07XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2xheWVySWQsIF9leHRlbmRzKHt9LCBfbGF5ZXIsIHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGNhc2UgJ1JFQ0VJVkVfREFUQSc6XG4gICAgICB7XG4gICAgICAgIHZhciBfbGF5ZXIyID0gYWN0aW9uLmxheWVyO1xuXG4gICAgICAgIHZhciBvbGRMYXllciA9IHN0YXRlW19sYXllcjIuaWRdO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBfZGVmaW5lUHJvcGVydHkoe30sIF9sYXllcjIuaWQsIF9leHRlbmRzKHt9LCBvbGRMYXllciwge1xuICAgICAgICAgIHNvdXJjZTogX2xheWVyMi5zb3VyY2UsXG4gICAgICAgICAgbGFiZWxzOiBfbGF5ZXIyLmxhYmVscyxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gUkVHSU9OUygpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfZGVmYXVsdFN0YXRlMi5kZWZhdWx0LlJFR0lPTlM7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOSVRfUkVHSU9OUyc6XG4gICAgICB7XG4gICAgICAgIHZhciByZWdpb25zID0gYWN0aW9uLnJlZ2lvbnMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgdmFyIHJlZ2lvbiA9IHI7XG4gICAgICAgICAgaWYgKHJlZ2lvbi5jZW50ZXJbMF0gPT09IGFjdGlvbi5tYXBDb25maWcuY2VudGVyWzBdICYmIHJlZ2lvbi5jZW50ZXJbMV0gPT09IGFjdGlvbi5tYXBDb25maWcuY2VudGVyWzFdKSB7XG4gICAgICAgICAgICByZWdpb24uY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWdpb247XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVnaW9ucztcbiAgICAgIH1cbiAgICBjYXNlICdDSEFOR0VfUkVHSU9OJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRSZWdpb25zID0gc3RhdGUubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgdmFyIHJlZ2lvbiA9IHI7XG4gICAgICAgICAgaWYgKGFjdGlvbi5yZWdpb24gPT09IHJlZ2lvbi5uYW1lKSB7XG4gICAgICAgICAgICByZWdpb24uY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHJlZ2lvbi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHJlZ2lvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGVkUmVnaW9ucztcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIE1BUCgpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfZGVmYXVsdFN0YXRlMi5kZWZhdWx0Lk1BUDtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgYWN0aXZlTGF5ZXJzID0gdm9pZCAwO1xuICB2YXIgYWN0aXZlTGF5ZXJLZXlzID0gdm9pZCAwO1xuICB2YXIgcHJvY2Vzc2VkTGF5ZXJzID0gdm9pZCAwO1xuICB2YXIgbGF5ZXJzVG9SZW1vdmUgPSB2b2lkIDA7XG4gIHZhciBsYXllcnNUb0FkZCA9IHZvaWQgMDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSVNfTE9BREVEJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNMb2FkZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIGNhc2UgJ0FERF9MQVlFUlMnOlxuICAgICAgcHJvY2Vzc2VkTGF5ZXJzID0gX2V4dGVuZHMoe30sIHN0YXRlLnByb2Nlc3NlZExheWVycyk7XG4gICAgICBhY3RpdmVMYXllcnMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuYWN0aXZlTGF5ZXJzKTtcbiAgICAgIGxheWVyc1RvQWRkID0gW107XG5cbiAgICAgIGFjdGlvbi5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICBwcm9jZXNzZWRMYXllcnNbbC5pZF0gPSBsO1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGFjdGl2ZUxheWVycykuaW5jbHVkZXMobC5pZCkpIHtcbiAgICAgICAgICBsYXllcnNUb0FkZC5wdXNoKGwuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUxheWVyc1tsLmlkXSA9IGw7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcHJvY2Vzc2VkTGF5ZXJzOiBwcm9jZXNzZWRMYXllcnMsXG4gICAgICAgIGFjdGl2ZUxheWVyczogYWN0aXZlTGF5ZXJzLFxuICAgICAgICBsYXllcnNUb0FkZDogbGF5ZXJzVG9BZGRcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1JFTU9WRV9MQVlFUlMnOlxuICAgICAgYWN0aXZlTGF5ZXJLZXlzID0gT2JqZWN0LmtleXMoc3RhdGUuYWN0aXZlTGF5ZXJzKTtcbiAgICAgIGFjdGl2ZUxheWVycyA9IHt9O1xuICAgICAgbGF5ZXJzVG9SZW1vdmUgPSBbXTtcblxuICAgICAgYWN0aXZlTGF5ZXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgaWYgKCFhY3Rpb24ubGF5ZXJzLmluY2x1ZGVzKGwpKSB7XG4gICAgICAgICAgYWN0aXZlTGF5ZXJzW2xdID0gX2V4dGVuZHMoe30sIHN0YXRlLmFjdGl2ZUxheWVyc1tsXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF5ZXJzVG9SZW1vdmUucHVzaChsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgYWN0aXZlTGF5ZXJzOiBhY3RpdmVMYXllcnMsXG4gICAgICAgIGxheWVyc1RvUmVtb3ZlOiBsYXllcnNUb1JlbW92ZVxuICAgICAgfSk7XG4gICAgY2FzZSAnTEFZRVJTX1JFTU9WRUQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBsYXllcnNUb1JlbW92ZTogW11cbiAgICAgIH0pO1xuICAgIGNhc2UgJ0xBWUVSU19BRERFRCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGxheWVyc1RvQWRkOiBbXVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIEFQUDogQVBQLCBMQVlFUlM6IExBWUVSUywgU1RZTEVTOiBTVFlMRVMsIE1BUDogTUFQLCBSRUdJT05TOiBSRUdJT05TXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3N0b3JlL3JlZHVjZXJzL1JlZHVjZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5sb2FkSlNPTiA9IGxvYWRKU09OO1xuZXhwb3J0cy5sb2FkQ1NWID0gbG9hZENTVjtcblxudmFyIF9wYXBhcGFyc2UgPSByZXF1aXJlKCdwYXBhcGFyc2UnKTtcblxuZnVuY3Rpb24gZmV0Y2hVUkwocGF0aCwgbWltZVR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhvYmoub3ZlcnJpZGVNaW1lVHlwZShtaW1lVHlwZSk7XG4gIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY2FsbGJhY2soeG9iai5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgfTtcbiAgeG9iai5zZW5kKG51bGwpO1xufVxuXG5mdW5jdGlvbiBsb2FkSlNPTihwYXRoLCBjYWxsYmFjaykge1xuICBmZXRjaFVSTChwYXRoLCAnYXBwbGljYXRpb24vanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyAnICsgcGF0aCArICcgKCcgKyBlICsgJyknKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQ1NWKHBhdGgsIGNhbGxiYWNrKSB7XG4gIGZldGNoVVJMKHBhdGgsICd0ZXh0L2NzdicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjaygoMCwgX3BhcGFwYXJzZS5wYXJzZSkocmVzcG9uc2UsIHsgaGVhZGVyOiB0cnVlIH0pLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgJyArIHBhdGggKyAnICgnICsgZSArICcpJyk7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy91dGlscy9maWxlcy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcHJlcGFyZUxheWVyO1xuXG52YXIgX2FnZ3JlZ2F0ZURhdGEgPSByZXF1aXJlKCcuLi91dGlscy9hZ2dyZWdhdGVEYXRhJyk7XG5cbnZhciBfYWdncmVnYXRlRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZ2dyZWdhdGVEYXRhKTtcblxudmFyIF9mZXRjaEZvcm1EYXRhID0gcmVxdWlyZSgnLi8uLi91dGlscy9mZXRjaEZvcm1EYXRhJyk7XG5cbnZhciBfZmV0Y2hGb3JtRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mZXRjaEZvcm1EYXRhKTtcblxudmFyIF9maWxlcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZpbGVzJyk7XG5cbnZhciBfZmlsdGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZpbHRlcnMnKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi4vc3RvcmUvYWN0aW9ucy9BY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcbiAqIFByb2Nlc2VzIE1hcFNwZWMgYW5kIGFkZHMgaXQgdG8gc3RhdGUuXG4qICovXG5mdW5jdGlvbiBwcmVwYXJlTGF5ZXIobGF5ZXJTcGVjLCBkaXNwYXRjaCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBmaWx0ZXJPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAvLyBTZXRzIHN0YXRlIHRvIGxvYWRpbmc7XG4gIGRpc3BhdGNoKCgwLCBfQWN0aW9ucy5yZXF1ZXN0RGF0YSkobGF5ZXJTcGVjLmlkKSk7XG5cbiAgdmFyIHByb2Nlc3NlZExheWVyID0gX2V4dGVuZHMoe30sIGxheWVyU3BlYyk7XG5cbiAgLy8gaWYgKGxheWVyU3BlYy5wb3B1cCAmJiBsYXllclNwZWMudHlwZSAhPT0gJ2NoYXJ0Jykge1xuICAvLyAgIHRoaXMuYWN0aXZlTGF5ZXJzLnB1c2gobGF5ZXJTcGVjLmlkKTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckRhdGEoc3BlYykge1xuICAgIGlmICghc3BlYy5sYWJlbHMpIHtcbiAgICAgIGRpc3BhdGNoKCgwLCBfQWN0aW9ucy5yZWNlaXZlRGF0YSkoc3BlYykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoMCwgX2ZpbGVzLmxvYWRDU1YpKHNwZWMubGFiZWxzLmRhdGEsIGZ1bmN0aW9uIChsYWJlbHMpIHtcbiAgICAgICAgc3BlYy5sYWJlbHMuZGF0YSA9IGxhYmVscztcbiAgICAgICAgZGlzcGF0Y2goKDAsIF9BY3Rpb25zLnJlY2VpdmVEYXRhKShzcGVjKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkRGF0YShzcGVjLCBzb3VyY2UpIHtcbiAgICB2YXIgbGF5ZXIgPSBfZXh0ZW5kcyh7fSwgc3BlYyk7XG4gICAgdmFyIGZpbGVUeXBlID0gc291cmNlLnNwbGl0KCcuJykucG9wKCk7XG4gICAgaWYgKGZpbGVUeXBlID09PSAnY3N2Jykge1xuICAgICAgKDAsIF9maWxlcy5sb2FkQ1NWKShzcGVjLnNvdXJjZS5kYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsYXllci5zb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIGxheWVyLm1lcmdlZERhdGEgPSBkYXRhO1xuICAgICAgICBpZiAoc3BlYy5hZ2dyZWdhdGUgJiYgc3BlYy5hZ2dyZWdhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgKDAsIF9maWx0ZXJzLmdlbmVyYXRlRmlsdGVyT3B0aW9ucykoc3BlYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyRGF0YShsYXllcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpbGVUeXBlID09PSAnZ2VvanNvbicpIHtcbiAgICAgICgwLCBfZmlsZXMubG9hZEpTT04pKHNwZWMuc291cmNlLmRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxheWVyLnNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICAgICAgcmVuZGVyRGF0YShsYXllcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiBsYXllciBoYXMgc291cmNlXG4gIGlmIChsYXllclNwZWMuc291cmNlKSB7XG4gICAgLy8gaWYgbm90IHByb2Nlc3NlZCwgZ3JhYiB0aGUgY3N2IG9yIGdlb2pzb24gZGF0YVxuICAgIGlmICh0eXBlb2YgbGF5ZXJTcGVjLnNvdXJjZS5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgcmVhZERhdGEobGF5ZXJTcGVjLCBsYXllclNwZWMuc291cmNlLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAobGF5ZXJTcGVjLnNvdXJjZS5kYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgIShsYXllclNwZWMuc291cmNlLmRhdGFbMF0gaW5zdGFuY2VvZiBPYmplY3QpICYmIGxheWVyU3BlYy5zb3VyY2UuZGF0YS5sZW5ndGggPj0gMSAmJiAhbGF5ZXJTcGVjLmxvYWRlZCkge1xuICAgICAgdmFyIHEgPSBkMy5xdWV1ZSgpO1xuICAgICAgdmFyIGZpbGVQYXRocyA9IGxheWVyU3BlYy5zb3VyY2UuZGF0YTtcbiAgICAgIGZpbGVQYXRocy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlUGF0aCkge1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihmaWxlUGF0aCkpIHtcbiAgICAgICAgICBxID0gcS5kZWZlcihfZmV0Y2hGb3JtRGF0YTIuZGVmYXVsdCwgZmlsZVBhdGgsIGxheWVyU3BlYy5wcm9wZXJ0aWVzKTtcbiAgICAgICAgfSBlbHNlIHEgPSBxLmRlZmVyKGQzLmNzdiwgZmlsZVBhdGgpO1xuICAgICAgfSk7XG4gICAgICBxLmF3YWl0QWxsKGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICB2YXIgbWVyZ2VkRGF0YSA9IChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCBfdG9Db25zdW1hYmxlQXJyYXkoZGF0YSkpO1xuICAgICAgICBwcm9jZXNzZWRMYXllci5tZXJnZWREYXRhID0gbWVyZ2VkRGF0YTtcbiAgICAgICAgaWYgKGxheWVyU3BlYy5hZ2dyZWdhdGUgJiYgbGF5ZXJTcGVjLmFnZ3JlZ2F0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAoMCwgX2ZpbHRlcnMuZ2VuZXJhdGVGaWx0ZXJPcHRpb25zKShsYXllclNwZWMpO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NlZExheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXJTcGVjLmFnZ3JlZ2F0ZS50eXBlID8gKDAsIF9hZ2dyZWdhdGVEYXRhMi5kZWZhdWx0KShsYXllclNwZWMsIF90aGlzLnByb3BzLmxvY2F0aW9ucykgOiBtZXJnZWREYXRhO1xuICAgICAgICBwcm9jZXNzZWRMYXllci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAvLyByZW5kZXJEYXRhKGxheWVyU3BlYyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlck9wdGlvbnMpIHtcbiAgICAgIHByb2Nlc3NlZExheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXJTcGVjLmFnZ3JlZ2F0ZS50eXBlID8gKDAsIF9hZ2dyZWdhdGVEYXRhMi5kZWZhdWx0KShsYXllclNwZWMsIHRoaXMucHJvcHMubG9jYXRpb25zLCBmaWx0ZXJPcHRpb25zKSA6ICgwLCBfZmlsdGVycy5wcm9jZXNzRmlsdGVycykobGF5ZXJTcGVjLCBmaWx0ZXJPcHRpb25zKTtcbiAgICAgIC8vIHNlbGYuYWRkTGF5ZXIobGF5ZXJTcGVjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIHRoZSBhbHJlYWR5IHByb2Nlc3NlZCBsYXllclxuICAgICAgZGlzcGF0Y2goKDAsIF9BY3Rpb25zLnJlY2VpdmVEYXRhKShsYXllclNwZWMpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobGF5ZXJTcGVjLmxheWVycykge1xuICAgIC8vIGlmIGxheWVyIGhhcyBzdWJsYXllcnMsIGFkZCBhbGwgc3VibGF5ZXJzXG4gICAgLy8gc2VsZi5hZGRMZWdlbmQobGF5ZXJTcGVjKTtcbiAgICBsYXllclNwZWMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YmxheWVyKSB7XG4gICAgICB2YXIgc3ViTGF5ZXIgPSBfdGhpcy5wcm9wcy5sYXllclNwZWNbc3VibGF5ZXJdO1xuICAgICAgc3ViTGF5ZXIuaWQgPSBzdWJsYXllcjtcbiAgICAgIGlmICh0eXBlb2Ygc3ViTGF5ZXIuc291cmNlLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlYWREYXRhKHN1YkxheWVyLCBzdWJMYXllci5zb3VyY2UuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZWxmLmFkZExheWVyKHN1YkxheWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL21hcC9wcmVwYXJlTGF5ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByb2Nlc3NGaWx0ZXJzID0gcHJvY2Vzc0ZpbHRlcnM7XG5leHBvcnRzLmdlbmVyYXRlRmlsdGVyT3B0aW9ucyA9IGdlbmVyYXRlRmlsdGVyT3B0aW9ucztcbmV4cG9ydHMuZmlsdGVyRGF0YUJ5UGVyaW9kID0gZmlsdGVyRGF0YUJ5UGVyaW9kO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gcHJvY2Vzc0ZpbHRlcnMobGF5ZXJEYXRhLCBmaWx0ZXJPcHRpb25zKSB7XG4gIHZhciBkYXRhID0gbGF5ZXJEYXRhLm1lcmdlZERhdGEgfHwgbGF5ZXJEYXRhLnNvdXJjZS5kYXRhO1xuICB2YXIgYWNjZXB0ZWRGaWx0ZXJWYWx1ZXMgPSBsYXllckRhdGEuYWdncmVnYXRlWydhY2NlcHRlZC1maWx0ZXItdmFsdWVzJ107XG4gIHZhciBhY2NlcHRlZFN1YkZpbHRlclZhbHVlcyA9IGxheWVyRGF0YS5hZ2dyZWdhdGVbJ2FjY2VwdGVkLXN1Yi1maWx0ZXItdmFsdWVzJ107XG4gIHZhciBmaWx0ZXJzID0gW107XG4gIGlmIChsYXllckRhdGEuYWdncmVnYXRlLmZpbHRlciAmJiBmaWx0ZXJPcHRpb25zKSB7XG4gICAgLy8gR2V0IGFycmF5IG9mIGRpc2FibGVkIGZpbHRlcnNcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXJPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zW29wdF0gPT09IGZhbHNlKSB7XG4gICAgICAgIGZpbHRlcnMucHVzaChvcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGFwcGx5IGZpbHRlcnNcbiAgICBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICBpZiAoYWNjZXB0ZWRGaWx0ZXJWYWx1ZXMgJiYgYWNjZXB0ZWRTdWJGaWx0ZXJWYWx1ZXMgJiYgIWFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzLmluY2x1ZGVzKGRhdHVtW2xheWVyRGF0YS5hZ2dyZWdhdGVbJ3N1Yi1maWx0ZXInXV0pKSB7XG4gICAgICAgIC8vIHJlbW92ZSByb3dzIHRoYXQgc2hvdWxkIGJlIGZpbHRlcmVkIG91dCwgaWdub3JlIHJvd3Mgd2l0aCB2YWx1ZXMgZnJvbSBzZWNvbmQgZmlsdGVyIGZpZWxkXG4gICAgICAgIHJldHVybiAhZmlsdGVycy5pbmNsdWRlcyhkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlLmZpbHRlcl0pO1xuICAgICAgfSBlbHNlIGlmIChhY2NlcHRlZFN1YkZpbHRlclZhbHVlcyAmJiBhY2NlcHRlZFN1YkZpbHRlclZhbHVlcy5pbmNsdWRlcyhkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlWydzdWItZmlsdGVyJ11dKSkge1xuICAgICAgICAvLyByZW1vdmUgcm93cyB0aGF0IHNob3VsZCBiZSBmaWx0ZXJlZCBvdXQsIGlnbm9yZSByb3dzIHdpdGggdmFsdWVzIGZyb20gZmlyc3QgZmlsdGVyIGZpZWxkXG4gICAgICAgIHJldHVybiAhZmlsdGVycy5pbmNsdWRlcyhkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlWydzdWItZmlsdGVyJ11dKTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjY2VwdGVkRmlsdGVyVmFsdWVzICYmICFhY2NlcHRlZFN1YkZpbHRlclZhbHVlcykge1xuICAgICAgICByZXR1cm4gIWZpbHRlcnMuaW5jbHVkZXMoZGF0dW1bbGF5ZXJEYXRhLmFnZ3JlZ2F0ZS5maWx0ZXJdKTtcbiAgICAgIH1yZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGaWx0ZXJPcHRpb25zKGxheWVyRGF0YSkge1xuICB2YXIgZGF0YSA9IGxheWVyRGF0YS5tZXJnZWREYXRhIHx8IGxheWVyRGF0YS5zb3VyY2UuZGF0YTtcbiAgdmFyIGFjY2VwdGVkRmlsdGVyVmFsdWVzID0gbGF5ZXJEYXRhLmFnZ3JlZ2F0ZVsnYWNjZXB0ZWQtZmlsdGVyLXZhbHVlcyddO1xuICB2YXIgYWNjZXB0ZWRTdWJGaWx0ZXJWYWx1ZXMgPSBsYXllckRhdGEuYWdncmVnYXRlWydhY2NlcHRlZC1zdWItZmlsdGVyLXZhbHVlcyddO1xuICAvLyBnZXQgZmlsdGVyIG9wdGlvbnMgZnJvbSBmaWx0ZXIgZmllbGRcbiAgaWYgKGxheWVyRGF0YS5hZ2dyZWdhdGUuZmlsdGVyKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgZmlsdGVyVmFsdWVzID0gZGF0YS5tYXAoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICByZXR1cm4gZGF0dW1bbGF5ZXJEYXRhLmFnZ3JlZ2F0ZS5maWx0ZXJdO1xuICAgIH0pO1xuICAgIHZhciBzdWJmaWx0ZXJWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICAgIHJldHVybiBkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlWydzdWItZmlsdGVyJ11dO1xuICAgIH0pO1xuICAgIHZhciBhbGxGaWx0ZXJzID0gKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIFtmaWx0ZXJWYWx1ZXMsIHN1YmZpbHRlclZhbHVlc10pO1xuXG4gICAgYWxsRmlsdGVycyA9IGFsbEZpbHRlcnMuZmlsdGVyKGZ1bmN0aW9uIChkYXR1bSkge1xuICAgICAgcmV0dXJuIGRhdHVtICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgLy8gY2hlY2sgZmlsdGVyIHZhbHVlcyBhcmUgaW4gYWNjZXB0ZWQgdmFsdWVzIGxpc3RzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90XG4gICAgdmFyIGFjY2VwdGVkRmlsdGVycyA9IFtdO1xuICAgIGlmIChhY2NlcHRlZEZpbHRlclZhbHVlcyB8fCBhY2NlcHRlZFN1YkZpbHRlclZhbHVlcykge1xuICAgICAgYWNjZXB0ZWRGaWx0ZXJzID0gYWxsRmlsdGVycy5maWx0ZXIoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICByZXR1cm4gZGF0dW0gIT09IHVuZGVmaW5lZCAmJiAoX3JlZjIgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYyLCBbYWNjZXB0ZWRGaWx0ZXJWYWx1ZXMsIGFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzXSkuaW5jbHVkZXMoZGF0dW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGFjY2VwdGVkRmlsdGVycyA9IGFsbEZpbHRlcnM7XG4gICAgbGF5ZXJEYXRhLmZpbHRlck9wdGlvbnMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBTZXQoYWNjZXB0ZWRGaWx0ZXJzKSkpO1xuICB9XG59XG52YXIgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbmZ1bmN0aW9uIGZpbHRlckRhdGFCeVBlcmlvZChsYXllckRhdGEsIHBlcmlvZEZpZWxkLCBwZXJpb2QpIHtcbiAgdmFyIHBlcmlvZHMgPSBwZXJpb2QgPyBbcGVyaW9kXSA6IGxheWVyRGF0YS5tYXAoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgcmV0dXJuIGRhdHVtW3BlcmlvZEZpZWxkXTtcbiAgfSk7XG4gIGlmICghcGVyaW9kKSBwZXJpb2RzID0gQXJyYXkuZnJvbShuZXcgU2V0KHBlcmlvZHMpKTtcblxuICBpZiAobW9udGhzLmluZGV4T2YocGVyaW9kc1swXSkgIT09IGZhbHNlKSB7XG4gICAgcGVyaW9kcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gbW9udGhzLmluZGV4T2YoYSkgLSBtb250aHMuaW5kZXhPZihiKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwZXJpb2RzWzBdLmluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICBwZXJpb2RzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIoYS5zcGxpdCgnLycpWzFdKSAtIE51bWJlcihiLnNwbGl0KCcvJylbMV0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBlcmlvZEZpbHRlciA9IHBlcmlvZHNbcGVyaW9kcy5sZW5ndGggLSAxXTtcblxuICByZXR1cm4gbGF5ZXJEYXRhLmZpbHRlcihmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICByZXR1cm4gZGF0dW1bcGVyaW9kRmllbGRdID09PSBwZXJpb2RGaWx0ZXI7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2ZpbHRlcnMuanMiLCIvKiBAZmxvdyAqL1xuXG4vLyAjIHNpbXBsZS1zdGF0aXN0aWNzXG4vL1xuLy8gQSBzaW1wbGUsIGxpdGVyYXRlIHN0YXRpc3RpY3Mgc3lzdGVtLlxuXG4vLyBMaW5lYXIgUmVncmVzc2lvblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5lYXJSZWdyZXNzaW9uIH0gZnJvbSAnLi9zcmMvbGluZWFyX3JlZ3Jlc3Npb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5lYXJSZWdyZXNzaW9uTGluZSB9IGZyb20gJy4vc3JjL2xpbmVhcl9yZWdyZXNzaW9uX2xpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGFuZGFyZERldmlhdGlvbiB9IGZyb20gJy4vc3JjL3N0YW5kYXJkX2RldmlhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJTcXVhcmVkIH0gZnJvbSAnLi9zcmMvcl9zcXVhcmVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW9kZSB9IGZyb20gJy4vc3JjL21vZGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb2RlRmFzdCB9IGZyb20gJy4vc3JjL21vZGVfZmFzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vZGVTb3J0ZWQgfSBmcm9tICcuL3NyYy9tb2RlX3NvcnRlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pbiB9IGZyb20gJy4vc3JjL21pbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJy4vc3JjL21heCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pblNvcnRlZCB9IGZyb20gJy4vc3JjL21pbl9zb3J0ZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXhTb3J0ZWQgfSBmcm9tICcuL3NyYy9tYXhfc29ydGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VtIH0gZnJvbSAnLi9zcmMvc3VtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VtU2ltcGxlIH0gZnJvbSAnLi9zcmMvc3VtX3NpbXBsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb2R1Y3QgfSBmcm9tICcuL3NyYy9wcm9kdWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcXVhbnRpbGUgfSBmcm9tICcuL3NyYy9xdWFudGlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHF1YW50aWxlU29ydGVkIH0gZnJvbSAnLi9zcmMvcXVhbnRpbGVfc29ydGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW50ZXJxdWFydGlsZVJhbmdlLCBkZWZhdWx0IGFzIGlxciB9IGZyb20gJy4vc3JjL2ludGVycXVhcnRpbGVfcmFuZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZWRpYW5BYnNvbHV0ZURldmlhdGlvbiwgZGVmYXVsdCBhcyBtYWQgfSBmcm9tICcuL3NyYy9tZWRpYW5fYWJzb2x1dGVfZGV2aWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2h1bmsgfSBmcm9tICcuL3NyYy9jaHVuayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZVdpdGhSZXBsYWNlbWVudCB9IGZyb20gJy4vc3JjL3NhbXBsZV93aXRoX3JlcGxhY2VtZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2h1ZmZsZSB9IGZyb20gJy4vc3JjL3NodWZmbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaHVmZmxlSW5QbGFjZSB9IGZyb20gJy4vc3JjL3NodWZmbGVfaW5fcGxhY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGUgfSBmcm9tICcuL3NyYy9zYW1wbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBja21lYW5zIH0gZnJvbSAnLi9zcmMvY2ttZWFucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXF1ZUNvdW50U29ydGVkIH0gZnJvbSAnLi9zcmMvdW5pcXVlX2NvdW50X3NvcnRlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1bU50aFBvd2VyRGV2aWF0aW9ucyB9IGZyb20gJy4vc3JjL3N1bV9udGhfcG93ZXJfZGV2aWF0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsSW50ZXJ2YWxCcmVha3MgfSBmcm9tICcuL3NyYy9lcXVhbF9pbnRlcnZhbF9icmVha3MnO1xuXG4vLyBzYW1wbGUgc3RhdGlzdGljc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGVDb3ZhcmlhbmNlIH0gZnJvbSAnLi9zcmMvc2FtcGxlX2NvdmFyaWFuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGVDb3JyZWxhdGlvbiB9IGZyb20gJy4vc3JjL3NhbXBsZV9jb3JyZWxhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZVZhcmlhbmNlIH0gZnJvbSAnLi9zcmMvc2FtcGxlX3ZhcmlhbmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2FtcGxlU3RhbmRhcmREZXZpYXRpb24gfSBmcm9tICcuL3NyYy9zYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2FtcGxlU2tld25lc3MgfSBmcm9tICcuL3NyYy9zYW1wbGVfc2tld25lc3MnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGVLdXJ0b3NpcyB9IGZyb20gJy4vc3JjL3NhbXBsZV9rdXJ0b3Npcyc7XG5cbi8vIGNvbWJpbmF0b3JpY3NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGVybXV0YXRpb25zSGVhcCB9IGZyb20gJy4vc3JjL3Blcm11dGF0aW9uc19oZWFwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tYmluYXRpb25zIH0gZnJvbSAnLi9zcmMvY29tYmluYXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tYmluYXRpb25zUmVwbGFjZW1lbnQgfSBmcm9tICcuL3NyYy9jb21iaW5hdGlvbnNfcmVwbGFjZW1lbnQnO1xuXG4vLyBtZWFzdXJlcyBvZiBjZW50cmFsaXR5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZFRvTWVhbiB9IGZyb20gJy4vc3JjL2FkZF90b19tZWFuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tYmluZU1lYW5zIH0gZnJvbSAnLi9zcmMvY29tYmluZV9tZWFucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWJpbmVWYXJpYW5jZXMgfSBmcm9tICcuL3NyYy9jb21iaW5lX3ZhcmlhbmNlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdlb21ldHJpY01lYW4gfSBmcm9tICcuL3NyYy9nZW9tZXRyaWNfbWVhbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhcm1vbmljTWVhbiB9IGZyb20gJy4vc3JjL2hhcm1vbmljX21lYW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhdmVyYWdlLCBkZWZhdWx0IGFzIG1lYW4gfSBmcm9tICcuL3NyYy9tZWFuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVkaWFuIH0gZnJvbSAnLi9zcmMvbWVkaWFuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVkaWFuU29ydGVkIH0gZnJvbSAnLi9zcmMvbWVkaWFuX3NvcnRlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1YnRyYWN0RnJvbU1lYW4gfSBmcm9tICcuL3NyYy9zdWJ0cmFjdF9mcm9tX21lYW4nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJvb3RNZWFuU3F1YXJlLCBkZWZhdWx0IGFzIHJtcyB9IGZyb20gJy4vc3JjL3Jvb3RfbWVhbl9zcXVhcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YXJpYW5jZSB9IGZyb20gJy4vc3JjL3ZhcmlhbmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdFRlc3QgfSBmcm9tICcuL3NyYy90X3Rlc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0VGVzdFR3b1NhbXBsZSB9IGZyb20gJy4vc3JjL3RfdGVzdF90d29fc2FtcGxlJztcbi8vIHNzLmplbmtzID0gcmVxdWlyZSgnLi9zcmMvamVua3MnKTtcblxuLy8gQ2xhc3NpZmllcnNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmF5ZXNpYW5DbGFzc2lmaWVyLCBkZWZhdWx0IGFzIGJheWVzaWFuIH0gZnJvbSAnLi9zcmMvYmF5ZXNpYW5fY2xhc3NpZmllcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlcHRyb25Nb2RlbCwgZGVmYXVsdCBhcyBwZXJjZXB0cm9uIH0gZnJvbSAnLi9zcmMvcGVyY2VwdHJvbic7XG5cbi8vIERpc3RyaWJ1dGlvbi1yZWxhdGVkIG1ldGhvZHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXBzaWxvbiB9IGZyb20gJy4vc3JjL2Vwc2lsb24nOyAvLyBXZSBtYWtlIM61IGF2YWlsYWJsZSB0byB0aGUgdGVzdCBzdWl0ZS5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmFjdG9yaWFsIH0gZnJvbSAnLi9zcmMvZmFjdG9yaWFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmVybm91bGxpRGlzdHJpYnV0aW9uIH0gZnJvbSAnLi9zcmMvYmVybm91bGxpX2Rpc3RyaWJ1dGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbm9taWFsRGlzdHJpYnV0aW9uIH0gZnJvbSAnLi9zcmMvYmlub21pYWxfZGlzdHJpYnV0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9pc3NvbkRpc3RyaWJ1dGlvbiB9IGZyb20gJy4vc3JjL3BvaXNzb25fZGlzdHJpYnV0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hpU3F1YXJlZERpc3RyaWJ1dGlvblRhYmxlIH0gZnJvbSAnLi9zcmMvY2hpX3NxdWFyZWRfZGlzdHJpYnV0aW9uX3RhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hpU3F1YXJlZEdvb2RuZXNzT2ZGaXQgfSBmcm9tICcuL3NyYy9jaGlfc3F1YXJlZF9nb29kbmVzc19vZl9maXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXJuZWxEZW5zaXR5RXN0aW1hdGlvbiwgZGVmYXVsdCBhcyBrZGUgfSBmcm9tICcuL3NyYy9rZXJuZWxfZGVuc2l0eV9lc3RpbWF0aW9uJztcblxuLy8gTm9ybWFsIGRpc3RyaWJ1dGlvblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB6U2NvcmUgfSBmcm9tICcuL3NyYy96X3Njb3JlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5IH0gZnJvbSAnLi9zcmMvY3VtdWxhdGl2ZV9zdGRfbm9ybWFsX3Byb2JhYmlsaXR5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhbmRhcmROb3JtYWxUYWJsZSB9IGZyb20gJy4vc3JjL3N0YW5kYXJkX25vcm1hbF90YWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVycm9yRnVuY3Rpb24sIGRlZmF1bHQgYXMgZXJmIH0gZnJvbSAnLi9zcmMvZXJyb3JfZnVuY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnZlcnNlRXJyb3JGdW5jdGlvbiB9IGZyb20gJy4vc3JjL2ludmVyc2VfZXJyb3JfZnVuY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9iaXQgfSBmcm9tICcuL3NyYy9wcm9iaXQnO1xuXG4vLyBSb290LWZpbmRpbmcgbWV0aG9kc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaXNlY3QgfSBmcm9tICcuL3NyYy9iaXNlY3QnO1xuXG4vLyBVdGlsc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBxdWlja3NlbGVjdCB9IGZyb20gJy4vc3JjL3F1aWNrc2VsZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2lnbiB9IGZyb20gJy4vc3JjL3NpZ24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBudW1lcmljU29ydCB9IGZyb20gJy4vc3JjL251bWVyaWNfc29ydCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHZhcmlhbmNlIGZyb20gJy4vdmFyaWFuY2UnO1xuXG4vKipcbiAqIFRoZSBbc3RhbmRhcmQgZGV2aWF0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N0YW5kYXJkX2RldmlhdGlvbilcbiAqIGlzIHRoZSBzcXVhcmUgcm9vdCBvZiB0aGUgdmFyaWFuY2UuIFRoaXMgaXMgYWxzbyBrbm93biBhcyB0aGUgcG9wdWxhdGlvblxuICogc3RhbmRhcmQgZGV2aWF0aW9uLiBJdCdzIHVzZWZ1bCBmb3IgbWVhc3VyaW5nIHRoZSBhbW91bnRcbiAqIG9mIHZhcmlhdGlvbiBvciBkaXNwZXJzaW9uIGluIGEgc2V0IG9mIHZhbHVlcy5cbiAqXG4gKiBTdGFuZGFyZCBkZXZpYXRpb24gaXMgb25seSBhcHByb3ByaWF0ZSBmb3IgZnVsbC1wb3B1bGF0aW9uIGtub3dsZWRnZTogZm9yXG4gKiBzYW1wbGVzIG9mIGEgcG9wdWxhdGlvbiwge0BsaW5rIHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9ufSBpc1xuICogbW9yZSBhcHByb3ByaWF0ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHN0YW5kYXJkIGRldmlhdGlvblxuICogQGV4YW1wbGVcbiAqIHZhcmlhbmNlKFsyLCA0LCA0LCA0LCA1LCA1LCA3LCA5XSk7IC8vID0+IDRcbiAqIHN0YW5kYXJkRGV2aWF0aW9uKFsyLCA0LCA0LCA0LCA1LCA1LCA3LCA5XSk7IC8vID0+IDJcbiAqL1xuZnVuY3Rpb24gc3RhbmRhcmREZXZpYXRpb24oeCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG4gICAgaWYgKHgubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdiA9IHZhcmlhbmNlKHgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQodik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW5kYXJkRGV2aWF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N0YW5kYXJkX2RldmlhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHN1bU50aFBvd2VyRGV2aWF0aW9ucyBmcm9tICcuL3N1bV9udGhfcG93ZXJfZGV2aWF0aW9ucyc7XG5cbi8qKlxuICogVGhlIFt2YXJpYW5jZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9WYXJpYW5jZSlcbiAqIGlzIHRoZSBzdW0gb2Ygc3F1YXJlZCBkZXZpYXRpb25zIGZyb20gdGhlIG1lYW4uXG4gKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB2YXJpYW5jZSwgbm90IHNhbXBsZSB2YXJpYW5jZTpcbiAqIHNlZSB0aGUgYHNhbXBsZVZhcmlhbmNlYCBtZXRob2QgaWYgeW91IHdhbnQgYSBzYW1wbGUgbWVhc3VyZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBwb3B1bGF0aW9uIG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB2YXJpYW5jZTogYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5cbiAqIHplcm8gaW5kaWNhdGVzIHRoYXQgYWxsIHZhbHVlcyBhcmUgaWRlbnRpY2FsLlxuICogQHRocm93cyB7RXJyb3J9IGlmIHgncyBsZW5ndGggaXMgMFxuICogQGV4YW1wbGVcbiAqIHZhcmlhbmNlKFsxLCAyLCAzLCA0LCA1LCA2XSk7IC8vID0+IDIuOTE2NjY2NjY2NjY2NjY2NVxuICovXG5mdW5jdGlvbiB2YXJpYW5jZSh4Lyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuICAgIC8vIFRoZSB2YXJpYW5jZSBvZiBubyBudW1iZXJzIGlzIG51bGxcbiAgICBpZiAoeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2YXJpYW5jZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIG1lYW4gb2Ygc3F1YXJlZCBkZXZpYXRpb25zIGJldHdlZW4gdGhlXG4gICAgLy8gbWVhbiB2YWx1ZSBhbmQgZWFjaCB2YWx1ZS5cbiAgICByZXR1cm4gc3VtTnRoUG93ZXJEZXZpYXRpb25zKHgsIDIpIC8geC5sZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhcmlhbmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3ZhcmlhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIE91ciBkZWZhdWx0IHN1bSBpcyB0aGUgW0thaGFuLUJhYnVza2EgYWxnb3JpdGhtXShodHRwczovL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZy8xNzYwLzdkNDY3Y2RhMWQwMjc3YWQyNzJkZWIyMTEzNTMzMTMxZGMwOS5wZGYpLlxuICogVGhpcyBtZXRob2QgaXMgYW4gaW1wcm92ZW1lbnQgb3ZlciB0aGUgY2xhc3NpY2FsXG4gKiBbS2FoYW4gc3VtbWF0aW9uIGFsZ29yaXRobV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FoYW5fc3VtbWF0aW9uX2FsZ29yaXRobSkuXG4gKiBJdCBhaW1zIGF0IGNvbXB1dGluZyB0aGUgc3VtIG9mIGEgbGlzdCBvZiBudW1iZXJzIHdoaWxlIGNvcnJlY3RpbmcgZm9yXG4gKiBmbG9hdGluZy1wb2ludCBlcnJvcnMuIFRyYWRpdGlvbmFsbHksIHN1bXMgYXJlIGNhbGN1bGF0ZWQgYXMgbWFueVxuICogc3VjY2Vzc2l2ZSBhZGRpdGlvbnMsIGVhY2ggb25lIHdpdGggaXRzIG93biBmbG9hdGluZy1wb2ludCByb3VuZG9mZi4gVGhlc2VcbiAqIGxvc3NlcyBpbiBwcmVjaXNpb24gYWRkIHVwIGFzIHRoZSBudW1iZXIgb2YgbnVtYmVycyBpbmNyZWFzZXMuIFRoaXMgYWx0ZXJuYXRpdmVcbiAqIGFsZ29yaXRobSBpcyBtb3JlIGFjY3VyYXRlIHRoYW4gdGhlIHNpbXBsZSB3YXkgb2YgY2FsY3VsYXRpbmcgc3VtcyBieSBzaW1wbGVcbiAqIGFkZGl0aW9uLlxuICpcbiAqIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfSBzdW0gb2YgYWxsIGlucHV0IG51bWJlcnNcbiAqIEBleGFtcGxlXG4gKiBzdW0oWzEsIDIsIDNdKTsgLy8gPT4gNlxuICovXG5mdW5jdGlvbiBzdW0oeC8qOiBBcnJheTxudW1iZXI+ICovKS8qOiBudW1iZXIgKi8ge1xuXG4gICAgLy8gSWYgdGhlIGFycmF5IGlzIGVtcHR5LCB3ZSBuZWVkbid0IGJvdGhlciBjb21wdXRpbmcgaXRzIHN1bVxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXppbmcgdGhlIHN1bSBhcyB0aGUgZmlyc3QgbnVtYmVyIGluIHRoZSBhcnJheVxuICAgIHZhciBzdW0gPSB4WzBdO1xuXG4gICAgLy8gS2VlcGluZyB0cmFjayBvZiB0aGUgZmxvYXRpbmctcG9pbnQgZXJyb3IgY29ycmVjdGlvblxuICAgIHZhciBjb3JyZWN0aW9uID0gMDtcblxuICAgIHZhciB0cmFuc2l0aW9uO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSBzdW0gKyB4W2ldO1xuXG4gICAgICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNvcnJlY3Rpb24gaW4gYSBkaWZmZXJlbnQgZmFzaGlvblxuICAgICAgICAvLyBpZiB0aGUgbmV3IGFic29sdXRlIHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgYWJzb2x1dGUgc3VtXG4gICAgICAgIGlmIChNYXRoLmFicyhzdW0pID49IE1hdGguYWJzKHhbaV0pKSB7XG4gICAgICAgICAgICBjb3JyZWN0aW9uICs9ICgoc3VtIC0gdHJhbnNpdGlvbikgKyB4W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gKz0gKCh4W2ldIC0gdHJhbnNpdGlvbikgKyBzdW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VtID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5pbmcgdGhlIGNvcnJlY3RlZCBzdW1cbiAgICByZXR1cm4gc3VtICsgY29ycmVjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgW21vZGVdKGh0dHA6Ly9iaXQubHkvVzVLNFl0KSBpcyB0aGUgbnVtYmVyIHRoYXQgYXBwZWFycyBpbiBhIGxpc3QgdGhlIGhpZ2hlc3QgbnVtYmVyIG9mIHRpbWVzLlxuICogVGhlcmUgY2FuIGJlIG11bHRpcGxlIG1vZGVzIGluIGEgbGlzdDogaW4gdGhlIGV2ZW50IG9mIGEgdGllLCB0aGlzXG4gKiBhbGdvcml0aG0gd2lsbCByZXR1cm4gdGhlIG1vc3QgcmVjZW50bHkgc2VlbiBtb2RlLlxuICpcbiAqIFRoaXMgaXMgYSBbbWVhc3VyZSBvZiBjZW50cmFsIHRlbmRlbmN5XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZW50cmFsX3RlbmRlbmN5KTpcbiAqIGEgbWV0aG9kIG9mIGZpbmRpbmcgYSB0eXBpY2FsIG9yIGNlbnRyYWwgdmFsdWUgb2YgYSBzZXQgb2YgbnVtYmVycy5cbiAqXG4gKiBUaGlzIHJ1bnMgaW4gYE8obilgIGJlY2F1c2UgdGhlIGlucHV0IGlzIHNvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNvcnRlZCBhIHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gbW9kZVxuICogQHRocm93cyB7RXJyb3J9IGlmIHNvcnRlZCBpcyBlbXB0eVxuICogQGV4YW1wbGVcbiAqIG1vZGVTb3J0ZWQoWzAsIDAsIDFdKTsgLy8gPT4gMFxuICovXG5mdW5jdGlvbiBtb2RlU29ydGVkKHNvcnRlZCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG5cbiAgICAvLyBIYW5kbGUgZWRnZSBjYXNlczpcbiAgICAvLyBUaGUgbW9kZSBvZiBhbiBlbXB0eSBsaXN0IGlzIHVuZGVmaW5lZFxuICAgIGlmIChzb3J0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH0gZWxzZSBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gc29ydGVkWzBdO1xuICAgIH1cblxuICAgIC8vIFRoaXMgYXNzdW1lcyBpdCBpcyBkZWFsaW5nIHdpdGggYW4gYXJyYXkgb2Ygc2l6ZSA+IDEsIHNpbmNlIHNpemVcbiAgICAvLyAwIGFuZCAxIGFyZSBoYW5kbGVkIGltbWVkaWF0ZWx5LiBIZW5jZSBpdCBzdGFydHMgYXQgaW5kZXggMSBpbiB0aGVcbiAgICAvLyBhcnJheS5cbiAgICB2YXIgbGFzdCA9IHNvcnRlZFswXSxcbiAgICAgICAgLy8gc3RvcmUgdGhlIG1vZGUgYXMgd2UgZmluZCBuZXcgbW9kZXNcbiAgICAgICAgdmFsdWUgPSBOYU4sXG4gICAgICAgIC8vIHN0b3JlIGhvdyBtYW55IHRpbWVzIHdlJ3ZlIHNlZW4gdGhlIG1vZGVcbiAgICAgICAgbWF4U2VlbiA9IDAsXG4gICAgICAgIC8vIGhvdyBtYW55IHRpbWVzIHRoZSBjdXJyZW50IGNhbmRpZGF0ZSBmb3IgdGhlIG1vZGVcbiAgICAgICAgLy8gaGFzIGJlZW4gc2VlblxuICAgICAgICBzZWVuVGhpcyA9IDE7XG5cbiAgICAvLyBlbmQgYXQgc29ydGVkLmxlbmd0aCArIDEgdG8gZml4IHRoZSBjYXNlIGluIHdoaWNoIHRoZSBtb2RlIGlzXG4gICAgLy8gdGhlIGhpZ2hlc3QgbnVtYmVyIHRoYXQgb2NjdXJzIGluIHRoZSBzZXF1ZW5jZS4gdGhlIGxhc3QgaXRlcmF0aW9uXG4gICAgLy8gY29tcGFyZXMgc29ydGVkW2ldLCB3aGljaCBpcyB1bmRlZmluZWQsIHRvIHRoZSBoaWdoZXN0IG51bWJlclxuICAgIC8vIGluIHRoZSBzZXJpZXNcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgLy8gd2UncmUgc2VlaW5nIGEgbmV3IG51bWJlciBwYXNzIGJ5XG4gICAgICAgIGlmIChzb3J0ZWRbaV0gIT09IGxhc3QpIHtcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IG51bWJlciBpcyB0aGUgbmV3IG1vZGUgc2luY2Ugd2Ugc2F3IGl0IG1vcmVcbiAgICAgICAgICAgIC8vIG9mdGVuIHRoYW4gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGlmIChzZWVuVGhpcyA+IG1heFNlZW4pIHtcbiAgICAgICAgICAgICAgICBtYXhTZWVuID0gc2VlblRoaXM7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsYXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VlblRoaXMgPSAxO1xuICAgICAgICAgICAgbGFzdCA9IHNvcnRlZFtpXTtcbiAgICAgICAgLy8gaWYgdGhpcyBpc24ndCBhIG5ldyBudW1iZXIsIGl0J3Mgb25lIG1vcmUgb2NjdXJyZW5jZSBvZlxuICAgICAgICAvLyB0aGUgcG90ZW50aWFsIG1vZGVcbiAgICAgICAgfSBlbHNlIHsgc2VlblRoaXMrKzsgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVTb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZV9zb3J0ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogVGhlIG1pbiBpcyB0aGUgbG93ZXN0IG51bWJlciBpbiB0aGUgYXJyYXkuIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSB0aGUgbGVuZ3RoIG9mIHggaXMgbGVzcyB0aGFuIG9uZVxuICogQHJldHVybnMge251bWJlcn0gbWluaW11bSB2YWx1ZVxuICogQGV4YW1wbGVcbiAqIG1pbihbMSwgNSwgLTEwLCAxMDAsIDJdKTsgLy8gPT4gLTEwXG4gKi9cbmZ1bmN0aW9uIG1pbih4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcblxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbiByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHhbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb2YgdGhpcyBsb29wLCBtaW4gaXNcbiAgICAgICAgLy8gdW5kZWZpbmVkIGFuZCBpcyB0aHVzIG1hZGUgdGhlIG1pbmltdW0gZWxlbWVudCBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYgKHhbaV0gPCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB4W2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGlzIGNvbXB1dGVzIHRoZSBtYXhpbXVtIG51bWJlciBpbiBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIHJ1bnMgb24gYE8obilgLCBsaW5lYXIgdGltZSBpbiByZXNwZWN0IHRvIHRoZSBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1heGltdW0gdmFsdWVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB0aGUgdGhlIGxlbmd0aCBvZiB4IGlzIGxlc3MgdGhhbiBvbmVcbiAqIEBleGFtcGxlXG4gKiBtYXgoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IDRcbiAqL1xuZnVuY3Rpb24gbWF4KHggLyo6IEFycmF5PG51bWJlcj4gKi8pIC8qOm51bWJlciovIHtcblxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHhbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb2YgdGhpcyBsb29wLCBtYXggaXNcbiAgICAgICAgLy8gdW5kZWZpbmVkIGFuZCBpcyB0aHVzIG1hZGUgdGhlIG1heGltdW0gZWxlbWVudCBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYgKHhbaV0gPiB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB4W2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21heC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBSZWFycmFuZ2UgaXRlbXMgaW4gYGFycmAgc28gdGhhdCBhbGwgaXRlbXMgaW4gYFtsZWZ0LCBrXWAgcmFuZ2UgYXJlIHRoZSBzbWFsbGVzdC5cbiAqIFRoZSBga2AtdGggZWxlbWVudCB3aWxsIGhhdmUgdGhlIGAoayAtIGxlZnQgKyAxKWAtdGggc21hbGxlc3QgdmFsdWUgaW4gYFtsZWZ0LCByaWdodF1gLlxuICpcbiAqIEltcGxlbWVudHMgRmxveWQtUml2ZXN0IHNlbGVjdGlvbiBhbGdvcml0aG0gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmxveWQtUml2ZXN0X2FsZ29yaXRobVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYXJyIGlucHV0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gayBwaXZvdCBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtsZWZ0XSBsZWZ0IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW3JpZ2h0XSByaWdodCBpbmRleFxuICogQHJldHVybnMge3ZvaWR9IG11dGF0ZXMgaW5wdXQgYXJyYXlcbiAqIEBleGFtcGxlXG4gKiB2YXIgYXJyID0gWzY1LCAyOCwgNTksIDMzLCAyMSwgNTYsIDIyLCA5NSwgNTAsIDEyLCA5MCwgNTMsIDI4LCA3NywgMzldO1xuICogcXVpY2tzZWxlY3QoYXJyLCA4KTtcbiAqIC8vID0gWzM5LCAyOCwgMjgsIDMzLCAyMSwgMTIsIDIyLCA1MCwgNTMsIDU2LCA1OSwgNjUsIDkwLCA3NywgOTVdXG4gKi9cbmZ1bmN0aW9uIHF1aWNrc2VsZWN0KGFyci8qOiBBcnJheTxudW1iZXI+ICovLCBrLyo6IG51bWJlciAqLywgbGVmdC8qOiA/bnVtYmVyICovLCByaWdodC8qOiA/bnVtYmVyICovKS8qOiB2b2lkICovIHtcbiAgICBsZWZ0ID0gbGVmdCB8fCAwO1xuICAgIHJpZ2h0ID0gcmlnaHQgfHwgKGFyci5sZW5ndGggLSAxKTtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgLy8gNjAwIGFuZCAwLjUgYXJlIGFyYml0cmFyeSBjb25zdGFudHMgY2hvc2VuIGluIHRoZSBvcmlnaW5hbCBwYXBlciB0byBtaW5pbWl6ZSBleGVjdXRpb24gdGltZVxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICAgICAgICB2YXIgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIHZhciB6ID0gTWF0aC5sb2cobik7XG4gICAgICAgICAgICB2YXIgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICAgICAgICB2YXIgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbik7XG4gICAgICAgICAgICBpZiAobSAtIG4gLyAyIDwgMCkgc2QgKj0gLTE7XG4gICAgICAgICAgICB2YXIgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICB2YXIgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHF1aWNrc2VsZWN0KGFyciwgaywgbmV3TGVmdCwgbmV3UmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHQgPSBhcnJba107XG4gICAgICAgIHZhciBpID0gbGVmdDtcbiAgICAgICAgdmFyIGogPSByaWdodDtcblxuICAgICAgICBzd2FwKGFyciwgbGVmdCwgayk7XG4gICAgICAgIGlmIChhcnJbcmlnaHRdID4gdCkgc3dhcChhcnIsIGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIHN3YXAoYXJyLCBpLCBqKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIHdoaWxlIChhcnJbaV0gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoYXJyW2pdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFycltsZWZ0XSA9PT0gdCkgc3dhcChhcnIsIGxlZnQsIGopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXAoYXJyLCBqLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIHZhciB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVpY2tzZWxlY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcXVpY2tzZWxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBxdWFudGlsZSBmcm9tICcuL3F1YW50aWxlJztcblxuLyoqXG4gKiBUaGUgW0ludGVycXVhcnRpbGUgcmFuZ2VdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJxdWFydGlsZV9yYW5nZSkgaXNcbiAqIGEgbWVhc3VyZSBvZiBzdGF0aXN0aWNhbCBkaXNwZXJzaW9uLCBvciBob3cgc2NhdHRlcmVkLCBzcHJlYWQsIG9yXG4gKiBjb25jZW50cmF0ZWQgYSBkaXN0cmlidXRpb24gaXMuIEl0J3MgY29tcHV0ZWQgYXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogdGhlIHRoaXJkIHF1YXJ0aWxlIGFuZCBmaXJzdCBxdWFydGlsZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggc2FtcGxlIG9mIG9uZSBvciBtb3JlIG51bWJlcnNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGludGVycXVhcnRpbGUgcmFuZ2U6IHRoZSBzcGFuIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIHF1YXJ0aWxlLFxuICogMC4yNSBhbmQgMC43NVxuICogQGV4YW1wbGVcbiAqIGludGVycXVhcnRpbGVSYW5nZShbMCwgMSwgMiwgM10pOyAvLyA9PiAyXG4gKi9cbmZ1bmN0aW9uIGludGVycXVhcnRpbGVSYW5nZSh4Lyo6IEFycmF5PG51bWJlcj4gKi8pIHtcbiAgICAvLyBJbnRlcnF1YXJ0aWxlIHJhbmdlIGlzIHRoZSBzcGFuIGJldHdlZW4gdGhlIHVwcGVyIHF1YXJ0aWxlLFxuICAgIC8vIGF0IGAwLjc1YCwgYW5kIGxvd2VyIHF1YXJ0aWxlLCBgMC4yNWBcbiAgICB2YXIgcTEgPSBxdWFudGlsZSh4LCAwLjc1KSxcbiAgICAgICAgcTIgPSBxdWFudGlsZSh4LCAwLjI1KTtcblxuICAgIGlmICh0eXBlb2YgcTEgPT09ICdudW1iZXInICYmIHR5cGVvZiBxMiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHExIC0gcTI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcnF1YXJ0aWxlUmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvaW50ZXJxdWFydGlsZV9yYW5nZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHF1YW50aWxlIGZyb20gJy4vcXVhbnRpbGUnO1xuXG4vKipcbiAqIFRoZSBbbWVkaWFuXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01lZGlhbikgaXNcbiAqIHRoZSBtaWRkbGUgbnVtYmVyIG9mIGEgbGlzdC4gVGhpcyBpcyBvZnRlbiBhIGdvb2QgaW5kaWNhdG9yIG9mICd0aGUgbWlkZGxlJ1xuICogd2hlbiB0aGVyZSBhcmUgb3V0bGllcnMgdGhhdCBza2V3IHRoZSBgbWVhbigpYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBbbWVhc3VyZSBvZiBjZW50cmFsIHRlbmRlbmN5XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZW50cmFsX3RlbmRlbmN5KTpcbiAqIGEgbWV0aG9kIG9mIGZpbmRpbmcgYSB0eXBpY2FsIG9yIGNlbnRyYWwgdmFsdWUgb2YgYSBzZXQgb2YgbnVtYmVycy5cbiAqXG4gKiBUaGUgbWVkaWFuIGlzbid0IG5lY2Vzc2FyaWx5IG9uZSBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIGxpc3Q6IHRoZSB2YWx1ZVxuICogY2FuIGJlIHRoZSBhdmVyYWdlIG9mIHR3byBlbGVtZW50cyBpZiB0aGUgbGlzdCBoYXMgYW4gZXZlbiBsZW5ndGhcbiAqIGFuZCB0aGUgdHdvIGNlbnRyYWwgdmFsdWVzIGFyZSBkaWZmZXJlbnQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGlucHV0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtZWRpYW4gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtZWRpYW4oWzEwLCAyLCA1LCAxMDAsIDIsIDFdKTsgLy8gPT4gMy41XG4gKi9cbmZ1bmN0aW9uIG1lZGlhbih4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHJldHVybiArcXVhbnRpbGUoeCwgMC41KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVkaWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21lZGlhbi5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHNodWZmbGVJblBsYWNlIGZyb20gJy4vc2h1ZmZsZV9pbl9wbGFjZSc7XG5cbi8qKlxuICogQSBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyJUUyJTgwJTkzWWF0ZXNfc2h1ZmZsZSlcbiAqIGlzIGEgZmFzdCB3YXkgdG8gY3JlYXRlIGEgcmFuZG9tIHBlcm11dGF0aW9uIG9mIGEgZmluaXRlIHNldC4gVGhpcyBpc1xuICogYSBmdW5jdGlvbiBhcm91bmQgYHNodWZmbGVfaW5fcGxhY2VgIHRoYXQgYWRkcyB0aGUgZ3VhcmFudGVlIHRoYXRcbiAqIGl0IHdpbGwgbm90IG1vZGlmeSBpdHMgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0geCBzYW1wbGUgb2YgMCBvciBtb3JlIG51bWJlcnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyYW5kb21Tb3VyY2U9TWF0aC5yYW5kb21dIGFuIG9wdGlvbmFsIGVudHJvcHkgc291cmNlIHRoYXRcbiAqIHJldHVybnMgbnVtYmVycyBiZXR3ZWVuIDAgaW5jbHVzaXZlIGFuZCAxIGV4Y2x1c2l2ZTogdGhlIHJhbmdlIFswLCAxKVxuICogQHJldHVybiB7QXJyYXl9IHNodWZmbGVkIHZlcnNpb24gb2YgaW5wdXRcbiAqIEBleGFtcGxlXG4gKiB2YXIgc2h1ZmZsZWQgPSBzaHVmZmxlKFsxLCAyLCAzLCA0XSk7XG4gKiBzaHVmZmxlZDsgLy8gPSBbMiwgMywgMSwgNF0gb3IgYW55IG90aGVyIHJhbmRvbSBwZXJtdXRhdGlvblxuICovXG5mdW5jdGlvbiBzaHVmZmxlLyo6OjxUPiovKHgvKjogQXJyYXk8VD4gKi8sIHJhbmRvbVNvdXJjZS8qOiA/RnVuY3Rpb24gKi8pIHtcbiAgICAvLyBzbGljZSB0aGUgb3JpZ2luYWwgYXJyYXkgc28gdGhhdCBpdCBpcyBub3QgbW9kaWZpZWRcbiAgICB2YXIgc2FtcGxlID0geC5zbGljZSgpO1xuXG4gICAgLy8gYW5kIHRoZW4gc2h1ZmZsZSB0aGF0IHNoYWxsb3ctY29waWVkIGFycmF5LCBpbiBwbGFjZVxuICAgIHJldHVybiBzaHVmZmxlSW5QbGFjZShzYW1wbGUuc2xpY2UoKSwgcmFuZG9tU291cmNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2h1ZmZsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zaHVmZmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEEgW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlciVFMiU4MCU5M1lhdGVzX3NodWZmbGUpXG4gKiBpbi1wbGFjZSAtIHdoaWNoIG1lYW5zIHRoYXQgaXQgKip3aWxsIGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIG9yaWdpbmFsXG4gKiBhcnJheSBieSByZWZlcmVuY2UqKi5cbiAqXG4gKiBUaGlzIGlzIGFuIGFsZ29yaXRobSB0aGF0IGdlbmVyYXRlcyBhIHJhbmRvbSBbcGVybXV0YXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Blcm11dGF0aW9uKVxuICogb2YgYSBzZXQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JhbmRvbVNvdXJjZT1NYXRoLnJhbmRvbV0gYW4gb3B0aW9uYWwgZW50cm9weSBzb3VyY2UgdGhhdFxuICogcmV0dXJucyBudW1iZXJzIGJldHdlZW4gMCBpbmNsdXNpdmUgYW5kIDEgZXhjbHVzaXZlOiB0aGUgcmFuZ2UgWzAsIDEpXG4gKiBAcmV0dXJucyB7QXJyYXl9IHhcbiAqIEBleGFtcGxlXG4gKiB2YXIgeCA9IFsxLCAyLCAzLCA0XTtcbiAqIHNodWZmbGVJblBsYWNlKHgpO1xuICogLy8geCBpcyBzaHVmZmxlZCB0byBhIHZhbHVlIGxpa2UgWzIsIDEsIDQsIDNdXG4gKi9cbmZ1bmN0aW9uIHNodWZmbGVJblBsYWNlKHgvKjogQXJyYXk8YW55PiAqLywgcmFuZG9tU291cmNlLyo6ID9GdW5jdGlvbiAqLykvKjogQXJyYXk8YW55PiAqLyB7XG5cbiAgICAvLyBhIGN1c3RvbSByYW5kb20gbnVtYmVyIHNvdXJjZSBjYW4gYmUgcHJvdmlkZWQgaWYgeW91IHdhbnQgdG8gdXNlXG4gICAgLy8gYSBmaXhlZCBzZWVkIG9yIGFub3RoZXIgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IsIGxpa2VcbiAgICAvLyBbcmFuZG9tLWpzXShodHRwczovL3d3dy5ucG1qcy5vcmcvcGFja2FnZS9yYW5kb20tanMpXG4gICAgcmFuZG9tU291cmNlID0gcmFuZG9tU291cmNlIHx8IE1hdGgucmFuZG9tO1xuXG4gICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgbGVuZ3RoIG9mIHRoZSB4IHRvIGRldGVybWluZVxuICAgIC8vIHdoZW4gbm8gZWxlbWVudHMgcmVtYWluIHRvIHNodWZmbGUuXG4gICAgdmFyIGxlbmd0aCA9IHgubGVuZ3RoO1xuXG4gICAgLy8gdGVtcG9yYXJ5IGlzIHVzZWQgdG8gaG9sZCBhbiBpdGVtIHdoZW4gaXQgaXMgYmVpbmdcbiAgICAvLyBzd2FwcGVkIGJldHdlZW4gaW5kaWNlcy5cbiAgICB2YXIgdGVtcG9yYXJ5O1xuXG4gICAgLy8gVGhlIGluZGV4IHRvIHN3YXAgYXQgZWFjaCBzdGFnZS5cbiAgICB2YXIgaW5kZXg7XG5cbiAgICAvLyBXaGlsZSB0aGVyZSBhcmUgc3RpbGwgaXRlbXMgdG8gc2h1ZmZsZVxuICAgIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGNob3NlIGEgcmFuZG9tIGluZGV4IHdpdGhpbiB0aGUgc3Vic2V0IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyB0aGF0IGlzIG5vdCB5ZXQgc2h1ZmZsZWRcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbVNvdXJjZSgpICogbGVuZ3RoLS0pO1xuXG4gICAgICAgIC8vIHN0b3JlIHRoZSB2YWx1ZSB0aGF0IHdlJ2xsIG1vdmUgdGVtcG9yYXJpbHlcbiAgICAgICAgdGVtcG9yYXJ5ID0geFtsZW5ndGhdO1xuXG4gICAgICAgIC8vIHN3YXAgdGhlIHZhbHVlIGF0IGB4W2xlbmd0aF1gIHdpdGggYHhbaW5kZXhdYFxuICAgICAgICB4W2xlbmd0aF0gPSB4W2luZGV4XTtcbiAgICAgICAgeFtpbmRleF0gPSB0ZW1wb3Jhcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNodWZmbGVJblBsYWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NodWZmbGVfaW5fcGxhY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogRm9yIGEgc29ydGVkIGlucHV0LCBjb3VudGluZyB0aGUgbnVtYmVyIG9mIHVuaXF1ZSB2YWx1ZXNcbiAqIGlzIHBvc3NpYmxlIGluIGNvbnN0YW50IHRpbWUgYW5kIGNvbnN0YW50IG1lbW9yeS4gVGhpcyBpc1xuICogYSBzaW1wbGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIGFsZ29yaXRobS5cbiAqXG4gKiBWYWx1ZXMgYXJlIGNvbXBhcmVkIHdpdGggYD09PWAsIHNvIG9iamVjdHMgYW5kIG5vbi1wcmltaXRpdmUgb2JqZWN0c1xuICogYXJlIG5vdCBoYW5kbGVkIGluIGFueSBzcGVjaWFsIHdheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PCo+fSB4IGFuIGFycmF5IG9mIGFueSBraW5kIG9mIHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBjb3VudCBvZiB1bmlxdWUgdmFsdWVzXG4gKiBAZXhhbXBsZVxuICogdW5pcXVlQ291bnRTb3J0ZWQoWzEsIDIsIDNdKTsgLy8gPT4gM1xuICogdW5pcXVlQ291bnRTb3J0ZWQoWzEsIDEsIDFdKTsgLy8gPT4gMVxuICovXG5mdW5jdGlvbiB1bmlxdWVDb3VudFNvcnRlZCh4Lyo6IEFycmF5PGFueT4qLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdW5pcXVlVmFsdWVDb3VudCA9IDAsXG4gICAgICAgIGxhc3RTZWVuVmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09PSAwIHx8IHhbaV0gIT09IGxhc3RTZWVuVmFsdWUpIHtcbiAgICAgICAgICAgIGxhc3RTZWVuVmFsdWUgPSB4W2ldO1xuICAgICAgICAgICAgdW5pcXVlVmFsdWVDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmlxdWVWYWx1ZUNvdW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1bmlxdWVDb3VudFNvcnRlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy91bmlxdWVfY291bnRfc29ydGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgbWVhbiBmcm9tICcuL21lYW4nO1xuXG4vKipcbiAqIFtTYW1wbGUgY292YXJpYW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2FtcGxlX21lYW5fYW5kX3NhbXBsZUNvdmFyaWFuY2UpIG9mIHR3byBkYXRhc2V0czpcbiAqIGhvdyBtdWNoIGRvIHRoZSB0d28gZGF0YXNldHMgbW92ZSB0b2dldGhlcj9cbiAqIHggYW5kIHkgYXJlIHR3byBkYXRhc2V0cywgcmVwcmVzZW50ZWQgYXMgYXJyYXlzIG9mIG51bWJlcnMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGEgc2FtcGxlIG9mIHR3byBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHkgYSBzYW1wbGUgb2YgdHdvIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGFuZCB5IGRvIG5vdCBoYXZlIGVxdWFsIGxlbmd0aHNcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IG9yIHkgaGF2ZSBsZW5ndGggb2Ygb25lIG9yIGxlc3NcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHNhbXBsZSBjb3ZhcmlhbmNlXG4gKiBAZXhhbXBsZVxuICogc2FtcGxlQ292YXJpYW5jZShbMSwgMiwgMywgNCwgNSwgNl0sIFs2LCA1LCA0LCAzLCAyLCAxXSk7IC8vID0+IC0zLjVcbiAqL1xuZnVuY3Rpb24gc2FtcGxlQ292YXJpYW5jZSh4IC8qOkFycmF5PG51bWJlcj4qLywgeSAvKjpBcnJheTxudW1iZXI+Ki8pLyo6bnVtYmVyKi8ge1xuXG4gICAgLy8gVGhlIHR3byBkYXRhc2V0cyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoIHdoaWNoIG11c3QgYmUgbW9yZSB0aGFuIDFcbiAgICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2FtcGxlQ292YXJpYW5jZSByZXF1aXJlcyBzYW1wbGVzIHdpdGggZXF1YWwgbGVuZ3RocycpO1xuICAgIH1cblxuICAgIGlmICh4Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYW1wbGVDb3ZhcmlhbmNlIHJlcXVpcmVzIGF0IGxlYXN0IHR3byBkYXRhIHBvaW50cyBpbiBlYWNoIHNhbXBsZScpO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZSB0aGUgbWVhbiBvZiBlYWNoIGRhdGFzZXQgc28gdGhhdCB3ZSBjYW4ganVkZ2UgZWFjaFxuICAgIC8vIHZhbHVlIG9mIHRoZSBkYXRhc2V0IGZhaXJseSBhcyB0aGUgZGlmZmVyZW5jZSBmcm9tIHRoZSBtZWFuLiB0aGlzXG4gICAgLy8gd2F5LCBpZiBvbmUgZGF0YXNldCBpcyBbMSwgMiwgM10gYW5kIFsyLCAzLCA0XSwgdGhlaXIgY292YXJpYW5jZVxuICAgIC8vIGRvZXMgbm90IHN1ZmZlciBiZWNhdXNlIG9mIHRoZSBkaWZmZXJlbmNlIGluIGFic29sdXRlIHZhbHVlc1xuICAgIHZhciB4bWVhbiA9IG1lYW4oeCksXG4gICAgICAgIHltZWFuID0gbWVhbih5KSxcbiAgICAgICAgc3VtID0gMDtcblxuICAgIC8vIGZvciBlYWNoIHBhaXIgb2YgdmFsdWVzLCB0aGUgY292YXJpYW5jZSBpbmNyZWFzZXMgd2hlbiB0aGVpclxuICAgIC8vIGRpZmZlcmVuY2UgZnJvbSB0aGUgbWVhbiBpcyBhc3NvY2lhdGVkIC0gaWYgYm90aCBhcmUgd2VsbCBhYm92ZVxuICAgIC8vIG9yIGlmIGJvdGggYXJlIHdlbGwgYmVsb3dcbiAgICAvLyB0aGUgbWVhbiwgdGhlIGNvdmFyaWFuY2UgaW5jcmVhc2VzIHNpZ25pZmljYW50bHkuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSAoeFtpXSAtIHhtZWFuKSAqICh5W2ldIC0geW1lYW4pO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgQmVzc2VscycgQ29ycmVjdGlvbjogYW4gYWRqdXN0bWVudCBtYWRlIHRvIHNhbXBsZSBzdGF0aXN0aWNzXG4gICAgLy8gdGhhdCBhbGxvd3MgZm9yIHRoZSByZWR1Y2VkIGRlZ3JlZSBvZiBmcmVlZG9tIGVudGFpbGVkIGluIGNhbGN1bGF0aW5nXG4gICAgLy8gdmFsdWVzIGZyb20gc2FtcGxlcyByYXRoZXIgdGhhbiBjb21wbGV0ZSBwb3B1bGF0aW9ucy5cbiAgICB2YXIgYmVzc2Vsc0NvcnJlY3Rpb24gPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICAvLyB0aGUgY292YXJpYW5jZSBpcyB3ZWlnaHRlZCBieSB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhc2V0cy5cbiAgICByZXR1cm4gc3VtIC8gYmVzc2Vsc0NvcnJlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZUNvdmFyaWFuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2NvdmFyaWFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogV2hlbiBjb21iaW5pbmcgdHdvIGxpc3RzIG9mIHZhbHVlcyBmb3Igd2hpY2ggb25lIGFscmVhZHkga25vd3MgdGhlIG1lYW5zLFxuICogb25lIGRvZXMgbm90IGhhdmUgdG8gbmVjZXNzYXJ5IHJlY29tcHV0ZSB0aGUgbWVhbiBvZiB0aGUgY29tYmluZWQgbGlzdHMgaW5cbiAqIGxpbmVhciB0aW1lLiBUaGV5IGNhbiBpbnN0ZWFkIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGNvbXB1dGUgdGhlIGNvbWJpbmVkXG4gKiBtZWFuIGJ5IHByb3ZpZGluZyB0aGUgbWVhbiAmIG51bWJlciBvZiB2YWx1ZXMgb2YgdGhlIGZpcnN0IGxpc3QgYW5kIHRoZSBtZWFuXG4gKiAmIG51bWJlciBvZiB2YWx1ZXMgb2YgdGhlIHNlY29uZCBsaXN0LlxuICpcbiAqIEBzaW5jZSAzLjAuMFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW4xIG1lYW4gb2YgdGhlIGZpcnN0IGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBuMSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGZpcnN0IGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtZWFuMiBtZWFuIG9mIHRoZSBzZWNvbmQgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4yIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgc2Vjb25kIGxpc3RcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb21iaW5lZCBtZWFuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbWJpbmVNZWFucyg1LCAzLCA0LCAzKTsgLy8gPT4gNC41XG4gKi9cbmZ1bmN0aW9uIGNvbWJpbmVNZWFucyhtZWFuMSAvKjogbnVtYmVyKi8sIG4xLyo6IG51bWJlciAqLywgbWVhbjIgLyo6IG51bWJlciovLCBuMi8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgcmV0dXJuIChtZWFuMSAqIG4xICsgbWVhbjIgKiBuMikgLyAobjEgKyBuMik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVNZWFucztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jb21iaW5lX21lYW5zLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqICoqUGVyY2VudGFnZSBQb2ludHMgb2YgdGhlIM+HMiAoQ2hpLVNxdWFyZWQpIERpc3RyaWJ1dGlvbioqXG4gKlxuICogVGhlIFvPhzIgKENoaS1TcXVhcmVkKSBEaXN0cmlidXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2hpLXNxdWFyZWRfZGlzdHJpYnV0aW9uKSBpcyB1c2VkIGluIHRoZSBjb21tb25cbiAqIGNoaS1zcXVhcmVkIHRlc3RzIGZvciBnb29kbmVzcyBvZiBmaXQgb2YgYW4gb2JzZXJ2ZWQgZGlzdHJpYnV0aW9uIHRvIGEgdGhlb3JldGljYWwgb25lLCB0aGUgaW5kZXBlbmRlbmNlIG9mIHR3b1xuICogY3JpdGVyaWEgb2YgY2xhc3NpZmljYXRpb24gb2YgcXVhbGl0YXRpdmUgZGF0YSwgYW5kIGluIGNvbmZpZGVuY2UgaW50ZXJ2YWwgZXN0aW1hdGlvbiBmb3IgYSBwb3B1bGF0aW9uIHN0YW5kYXJkXG4gKiBkZXZpYXRpb24gb2YgYSBub3JtYWwgZGlzdHJpYnV0aW9uIGZyb20gYSBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uLlxuICpcbiAqIFZhbHVlcyBmcm9tIEFwcGVuZGl4IDEsIFRhYmxlIElJSSBvZiBXaWxsaWFtIFcuIEhpbmVzICYgRG91Z2xhcyBDLiBNb250Z29tZXJ5LCBcIlByb2JhYmlsaXR5IGFuZCBTdGF0aXN0aWNzIGluXG4gKiBFbmdpbmVlcmluZyBhbmQgTWFuYWdlbWVudCBTY2llbmNlXCIsIFdpbGV5ICgxOTgwKS5cbiAqL1xudmFyIGNoaVNxdWFyZWREaXN0cmlidXRpb25UYWJsZSA9IHtcbiAgICAnMSc6IHtcbiAgICAgICAgJzAuOTk1JzogMCxcbiAgICAgICAgJzAuOTknOiAwLFxuICAgICAgICAnMC45NzUnOiAwLFxuICAgICAgICAnMC45NSc6IDAsXG4gICAgICAgICcwLjknOiAwLjAyLFxuICAgICAgICAnMC41JzogMC40NSxcbiAgICAgICAgJzAuMSc6IDIuNzEsXG4gICAgICAgICcwLjA1JzogMy44NCxcbiAgICAgICAgJzAuMDI1JzogNS4wMixcbiAgICAgICAgJzAuMDEnOiA2LjYzLFxuICAgICAgICAnMC4wMDUnOiA3Ljg4XG4gICAgfSxcbiAgICAnMic6IHtcbiAgICAgICAgJzAuOTk1JzogMC4wMSxcbiAgICAgICAgJzAuOTknOiAwLjAyLFxuICAgICAgICAnMC45NzUnOiAwLjA1LFxuICAgICAgICAnMC45NSc6IDAuMSxcbiAgICAgICAgJzAuOSc6IDAuMjEsXG4gICAgICAgICcwLjUnOiAxLjM5LFxuICAgICAgICAnMC4xJzogNC42MSxcbiAgICAgICAgJzAuMDUnOiA1Ljk5LFxuICAgICAgICAnMC4wMjUnOiA3LjM4LFxuICAgICAgICAnMC4wMSc6IDkuMjEsXG4gICAgICAgICcwLjAwNSc6IDEwLjZcbiAgICB9LFxuICAgICczJzoge1xuICAgICAgICAnMC45OTUnOiAwLjA3LFxuICAgICAgICAnMC45OSc6IDAuMTEsXG4gICAgICAgICcwLjk3NSc6IDAuMjIsXG4gICAgICAgICcwLjk1JzogMC4zNSxcbiAgICAgICAgJzAuOSc6IDAuNTgsXG4gICAgICAgICcwLjUnOiAyLjM3LFxuICAgICAgICAnMC4xJzogNi4yNSxcbiAgICAgICAgJzAuMDUnOiA3LjgxLFxuICAgICAgICAnMC4wMjUnOiA5LjM1LFxuICAgICAgICAnMC4wMSc6IDExLjM0LFxuICAgICAgICAnMC4wMDUnOiAxMi44NFxuICAgIH0sXG4gICAgJzQnOiB7XG4gICAgICAgICcwLjk5NSc6IDAuMjEsXG4gICAgICAgICcwLjk5JzogMC4zLFxuICAgICAgICAnMC45NzUnOiAwLjQ4LFxuICAgICAgICAnMC45NSc6IDAuNzEsXG4gICAgICAgICcwLjknOiAxLjA2LFxuICAgICAgICAnMC41JzogMy4zNixcbiAgICAgICAgJzAuMSc6IDcuNzgsXG4gICAgICAgICcwLjA1JzogOS40OSxcbiAgICAgICAgJzAuMDI1JzogMTEuMTQsXG4gICAgICAgICcwLjAxJzogMTMuMjgsXG4gICAgICAgICcwLjAwNSc6IDE0Ljg2XG4gICAgfSxcbiAgICAnNSc6IHtcbiAgICAgICAgJzAuOTk1JzogMC40MSxcbiAgICAgICAgJzAuOTknOiAwLjU1LFxuICAgICAgICAnMC45NzUnOiAwLjgzLFxuICAgICAgICAnMC45NSc6IDEuMTUsXG4gICAgICAgICcwLjknOiAxLjYxLFxuICAgICAgICAnMC41JzogNC4zNSxcbiAgICAgICAgJzAuMSc6IDkuMjQsXG4gICAgICAgICcwLjA1JzogMTEuMDcsXG4gICAgICAgICcwLjAyNSc6IDEyLjgzLFxuICAgICAgICAnMC4wMSc6IDE1LjA5LFxuICAgICAgICAnMC4wMDUnOiAxNi43NVxuICAgIH0sXG4gICAgJzYnOiB7XG4gICAgICAgICcwLjk5NSc6IDAuNjgsXG4gICAgICAgICcwLjk5JzogMC44NyxcbiAgICAgICAgJzAuOTc1JzogMS4yNCxcbiAgICAgICAgJzAuOTUnOiAxLjY0LFxuICAgICAgICAnMC45JzogMi4yLFxuICAgICAgICAnMC41JzogNS4zNSxcbiAgICAgICAgJzAuMSc6IDEwLjY1LFxuICAgICAgICAnMC4wNSc6IDEyLjU5LFxuICAgICAgICAnMC4wMjUnOiAxNC40NSxcbiAgICAgICAgJzAuMDEnOiAxNi44MSxcbiAgICAgICAgJzAuMDA1JzogMTguNTVcbiAgICB9LFxuICAgICc3Jzoge1xuICAgICAgICAnMC45OTUnOiAwLjk5LFxuICAgICAgICAnMC45OSc6IDEuMjUsXG4gICAgICAgICcwLjk3NSc6IDEuNjksXG4gICAgICAgICcwLjk1JzogMi4xNyxcbiAgICAgICAgJzAuOSc6IDIuODMsXG4gICAgICAgICcwLjUnOiA2LjM1LFxuICAgICAgICAnMC4xJzogMTIuMDIsXG4gICAgICAgICcwLjA1JzogMTQuMDcsXG4gICAgICAgICcwLjAyNSc6IDE2LjAxLFxuICAgICAgICAnMC4wMSc6IDE4LjQ4LFxuICAgICAgICAnMC4wMDUnOiAyMC4yOFxuICAgIH0sXG4gICAgJzgnOiB7XG4gICAgICAgICcwLjk5NSc6IDEuMzQsXG4gICAgICAgICcwLjk5JzogMS42NSxcbiAgICAgICAgJzAuOTc1JzogMi4xOCxcbiAgICAgICAgJzAuOTUnOiAyLjczLFxuICAgICAgICAnMC45JzogMy40OSxcbiAgICAgICAgJzAuNSc6IDcuMzQsXG4gICAgICAgICcwLjEnOiAxMy4zNixcbiAgICAgICAgJzAuMDUnOiAxNS41MSxcbiAgICAgICAgJzAuMDI1JzogMTcuNTMsXG4gICAgICAgICcwLjAxJzogMjAuMDksXG4gICAgICAgICcwLjAwNSc6IDIxLjk2XG4gICAgfSxcbiAgICAnOSc6IHtcbiAgICAgICAgJzAuOTk1JzogMS43MyxcbiAgICAgICAgJzAuOTknOiAyLjA5LFxuICAgICAgICAnMC45NzUnOiAyLjcsXG4gICAgICAgICcwLjk1JzogMy4zMyxcbiAgICAgICAgJzAuOSc6IDQuMTcsXG4gICAgICAgICcwLjUnOiA4LjM0LFxuICAgICAgICAnMC4xJzogMTQuNjgsXG4gICAgICAgICcwLjA1JzogMTYuOTIsXG4gICAgICAgICcwLjAyNSc6IDE5LjAyLFxuICAgICAgICAnMC4wMSc6IDIxLjY3LFxuICAgICAgICAnMC4wMDUnOiAyMy41OVxuICAgIH0sXG4gICAgJzEwJzoge1xuICAgICAgICAnMC45OTUnOiAyLjE2LFxuICAgICAgICAnMC45OSc6IDIuNTYsXG4gICAgICAgICcwLjk3NSc6IDMuMjUsXG4gICAgICAgICcwLjk1JzogMy45NCxcbiAgICAgICAgJzAuOSc6IDQuODcsXG4gICAgICAgICcwLjUnOiA5LjM0LFxuICAgICAgICAnMC4xJzogMTUuOTksXG4gICAgICAgICcwLjA1JzogMTguMzEsXG4gICAgICAgICcwLjAyNSc6IDIwLjQ4LFxuICAgICAgICAnMC4wMSc6IDIzLjIxLFxuICAgICAgICAnMC4wMDUnOiAyNS4xOVxuICAgIH0sXG4gICAgJzExJzoge1xuICAgICAgICAnMC45OTUnOiAyLjYsXG4gICAgICAgICcwLjk5JzogMy4wNSxcbiAgICAgICAgJzAuOTc1JzogMy44MixcbiAgICAgICAgJzAuOTUnOiA0LjU3LFxuICAgICAgICAnMC45JzogNS41OCxcbiAgICAgICAgJzAuNSc6IDEwLjM0LFxuICAgICAgICAnMC4xJzogMTcuMjgsXG4gICAgICAgICcwLjA1JzogMTkuNjgsXG4gICAgICAgICcwLjAyNSc6IDIxLjkyLFxuICAgICAgICAnMC4wMSc6IDI0LjcyLFxuICAgICAgICAnMC4wMDUnOiAyNi43NlxuICAgIH0sXG4gICAgJzEyJzoge1xuICAgICAgICAnMC45OTUnOiAzLjA3LFxuICAgICAgICAnMC45OSc6IDMuNTcsXG4gICAgICAgICcwLjk3NSc6IDQuNCxcbiAgICAgICAgJzAuOTUnOiA1LjIzLFxuICAgICAgICAnMC45JzogNi4zLFxuICAgICAgICAnMC41JzogMTEuMzQsXG4gICAgICAgICcwLjEnOiAxOC41NSxcbiAgICAgICAgJzAuMDUnOiAyMS4wMyxcbiAgICAgICAgJzAuMDI1JzogMjMuMzQsXG4gICAgICAgICcwLjAxJzogMjYuMjIsXG4gICAgICAgICcwLjAwNSc6IDI4LjNcbiAgICB9LFxuICAgICcxMyc6IHtcbiAgICAgICAgJzAuOTk1JzogMy41NyxcbiAgICAgICAgJzAuOTknOiA0LjExLFxuICAgICAgICAnMC45NzUnOiA1LjAxLFxuICAgICAgICAnMC45NSc6IDUuODksXG4gICAgICAgICcwLjknOiA3LjA0LFxuICAgICAgICAnMC41JzogMTIuMzQsXG4gICAgICAgICcwLjEnOiAxOS44MSxcbiAgICAgICAgJzAuMDUnOiAyMi4zNixcbiAgICAgICAgJzAuMDI1JzogMjQuNzQsXG4gICAgICAgICcwLjAxJzogMjcuNjksXG4gICAgICAgICcwLjAwNSc6IDI5LjgyXG4gICAgfSxcbiAgICAnMTQnOiB7XG4gICAgICAgICcwLjk5NSc6IDQuMDcsXG4gICAgICAgICcwLjk5JzogNC42NixcbiAgICAgICAgJzAuOTc1JzogNS42MyxcbiAgICAgICAgJzAuOTUnOiA2LjU3LFxuICAgICAgICAnMC45JzogNy43OSxcbiAgICAgICAgJzAuNSc6IDEzLjM0LFxuICAgICAgICAnMC4xJzogMjEuMDYsXG4gICAgICAgICcwLjA1JzogMjMuNjgsXG4gICAgICAgICcwLjAyNSc6IDI2LjEyLFxuICAgICAgICAnMC4wMSc6IDI5LjE0LFxuICAgICAgICAnMC4wMDUnOiAzMS4zMlxuICAgIH0sXG4gICAgJzE1Jzoge1xuICAgICAgICAnMC45OTUnOiA0LjYsXG4gICAgICAgICcwLjk5JzogNS4yMyxcbiAgICAgICAgJzAuOTc1JzogNi4yNyxcbiAgICAgICAgJzAuOTUnOiA3LjI2LFxuICAgICAgICAnMC45JzogOC41NSxcbiAgICAgICAgJzAuNSc6IDE0LjM0LFxuICAgICAgICAnMC4xJzogMjIuMzEsXG4gICAgICAgICcwLjA1JzogMjUsXG4gICAgICAgICcwLjAyNSc6IDI3LjQ5LFxuICAgICAgICAnMC4wMSc6IDMwLjU4LFxuICAgICAgICAnMC4wMDUnOiAzMi44XG4gICAgfSxcbiAgICAnMTYnOiB7XG4gICAgICAgICcwLjk5NSc6IDUuMTQsXG4gICAgICAgICcwLjk5JzogNS44MSxcbiAgICAgICAgJzAuOTc1JzogNi45MSxcbiAgICAgICAgJzAuOTUnOiA3Ljk2LFxuICAgICAgICAnMC45JzogOS4zMSxcbiAgICAgICAgJzAuNSc6IDE1LjM0LFxuICAgICAgICAnMC4xJzogMjMuNTQsXG4gICAgICAgICcwLjA1JzogMjYuMyxcbiAgICAgICAgJzAuMDI1JzogMjguODUsXG4gICAgICAgICcwLjAxJzogMzIsXG4gICAgICAgICcwLjAwNSc6IDM0LjI3XG4gICAgfSxcbiAgICAnMTcnOiB7XG4gICAgICAgICcwLjk5NSc6IDUuNyxcbiAgICAgICAgJzAuOTknOiA2LjQxLFxuICAgICAgICAnMC45NzUnOiA3LjU2LFxuICAgICAgICAnMC45NSc6IDguNjcsXG4gICAgICAgICcwLjknOiAxMC4wOSxcbiAgICAgICAgJzAuNSc6IDE2LjM0LFxuICAgICAgICAnMC4xJzogMjQuNzcsXG4gICAgICAgICcwLjA1JzogMjcuNTksXG4gICAgICAgICcwLjAyNSc6IDMwLjE5LFxuICAgICAgICAnMC4wMSc6IDMzLjQxLFxuICAgICAgICAnMC4wMDUnOiAzNS43MlxuICAgIH0sXG4gICAgJzE4Jzoge1xuICAgICAgICAnMC45OTUnOiA2LjI2LFxuICAgICAgICAnMC45OSc6IDcuMDEsXG4gICAgICAgICcwLjk3NSc6IDguMjMsXG4gICAgICAgICcwLjk1JzogOS4zOSxcbiAgICAgICAgJzAuOSc6IDEwLjg3LFxuICAgICAgICAnMC41JzogMTcuMzQsXG4gICAgICAgICcwLjEnOiAyNS45OSxcbiAgICAgICAgJzAuMDUnOiAyOC44NyxcbiAgICAgICAgJzAuMDI1JzogMzEuNTMsXG4gICAgICAgICcwLjAxJzogMzQuODEsXG4gICAgICAgICcwLjAwNSc6IDM3LjE2XG4gICAgfSxcbiAgICAnMTknOiB7XG4gICAgICAgICcwLjk5NSc6IDYuODQsXG4gICAgICAgICcwLjk5JzogNy42MyxcbiAgICAgICAgJzAuOTc1JzogOC45MSxcbiAgICAgICAgJzAuOTUnOiAxMC4xMixcbiAgICAgICAgJzAuOSc6IDExLjY1LFxuICAgICAgICAnMC41JzogMTguMzQsXG4gICAgICAgICcwLjEnOiAyNy4yLFxuICAgICAgICAnMC4wNSc6IDMwLjE0LFxuICAgICAgICAnMC4wMjUnOiAzMi44NSxcbiAgICAgICAgJzAuMDEnOiAzNi4xOSxcbiAgICAgICAgJzAuMDA1JzogMzguNThcbiAgICB9LFxuICAgICcyMCc6IHtcbiAgICAgICAgJzAuOTk1JzogNy40MyxcbiAgICAgICAgJzAuOTknOiA4LjI2LFxuICAgICAgICAnMC45NzUnOiA5LjU5LFxuICAgICAgICAnMC45NSc6IDEwLjg1LFxuICAgICAgICAnMC45JzogMTIuNDQsXG4gICAgICAgICcwLjUnOiAxOS4zNCxcbiAgICAgICAgJzAuMSc6IDI4LjQxLFxuICAgICAgICAnMC4wNSc6IDMxLjQxLFxuICAgICAgICAnMC4wMjUnOiAzNC4xNyxcbiAgICAgICAgJzAuMDEnOiAzNy41NyxcbiAgICAgICAgJzAuMDA1JzogNDBcbiAgICB9LFxuICAgICcyMSc6IHtcbiAgICAgICAgJzAuOTk1JzogOC4wMyxcbiAgICAgICAgJzAuOTknOiA4LjksXG4gICAgICAgICcwLjk3NSc6IDEwLjI4LFxuICAgICAgICAnMC45NSc6IDExLjU5LFxuICAgICAgICAnMC45JzogMTMuMjQsXG4gICAgICAgICcwLjUnOiAyMC4zNCxcbiAgICAgICAgJzAuMSc6IDI5LjYyLFxuICAgICAgICAnMC4wNSc6IDMyLjY3LFxuICAgICAgICAnMC4wMjUnOiAzNS40OCxcbiAgICAgICAgJzAuMDEnOiAzOC45MyxcbiAgICAgICAgJzAuMDA1JzogNDEuNFxuICAgIH0sXG4gICAgJzIyJzoge1xuICAgICAgICAnMC45OTUnOiA4LjY0LFxuICAgICAgICAnMC45OSc6IDkuNTQsXG4gICAgICAgICcwLjk3NSc6IDEwLjk4LFxuICAgICAgICAnMC45NSc6IDEyLjM0LFxuICAgICAgICAnMC45JzogMTQuMDQsXG4gICAgICAgICcwLjUnOiAyMS4zNCxcbiAgICAgICAgJzAuMSc6IDMwLjgxLFxuICAgICAgICAnMC4wNSc6IDMzLjkyLFxuICAgICAgICAnMC4wMjUnOiAzNi43OCxcbiAgICAgICAgJzAuMDEnOiA0MC4yOSxcbiAgICAgICAgJzAuMDA1JzogNDIuOFxuICAgIH0sXG4gICAgJzIzJzoge1xuICAgICAgICAnMC45OTUnOiA5LjI2LFxuICAgICAgICAnMC45OSc6IDEwLjIsXG4gICAgICAgICcwLjk3NSc6IDExLjY5LFxuICAgICAgICAnMC45NSc6IDEzLjA5LFxuICAgICAgICAnMC45JzogMTQuODUsXG4gICAgICAgICcwLjUnOiAyMi4zNCxcbiAgICAgICAgJzAuMSc6IDMyLjAxLFxuICAgICAgICAnMC4wNSc6IDM1LjE3LFxuICAgICAgICAnMC4wMjUnOiAzOC4wOCxcbiAgICAgICAgJzAuMDEnOiA0MS42NCxcbiAgICAgICAgJzAuMDA1JzogNDQuMThcbiAgICB9LFxuICAgICcyNCc6IHtcbiAgICAgICAgJzAuOTk1JzogOS44OSxcbiAgICAgICAgJzAuOTknOiAxMC44NixcbiAgICAgICAgJzAuOTc1JzogMTIuNCxcbiAgICAgICAgJzAuOTUnOiAxMy44NSxcbiAgICAgICAgJzAuOSc6IDE1LjY2LFxuICAgICAgICAnMC41JzogMjMuMzQsXG4gICAgICAgICcwLjEnOiAzMy4yLFxuICAgICAgICAnMC4wNSc6IDM2LjQyLFxuICAgICAgICAnMC4wMjUnOiAzOS4zNixcbiAgICAgICAgJzAuMDEnOiA0Mi45OCxcbiAgICAgICAgJzAuMDA1JzogNDUuNTZcbiAgICB9LFxuICAgICcyNSc6IHtcbiAgICAgICAgJzAuOTk1JzogMTAuNTIsXG4gICAgICAgICcwLjk5JzogMTEuNTIsXG4gICAgICAgICcwLjk3NSc6IDEzLjEyLFxuICAgICAgICAnMC45NSc6IDE0LjYxLFxuICAgICAgICAnMC45JzogMTYuNDcsXG4gICAgICAgICcwLjUnOiAyNC4zNCxcbiAgICAgICAgJzAuMSc6IDM0LjI4LFxuICAgICAgICAnMC4wNSc6IDM3LjY1LFxuICAgICAgICAnMC4wMjUnOiA0MC42NSxcbiAgICAgICAgJzAuMDEnOiA0NC4zMSxcbiAgICAgICAgJzAuMDA1JzogNDYuOTNcbiAgICB9LFxuICAgICcyNic6IHtcbiAgICAgICAgJzAuOTk1JzogMTEuMTYsXG4gICAgICAgICcwLjk5JzogMTIuMixcbiAgICAgICAgJzAuOTc1JzogMTMuODQsXG4gICAgICAgICcwLjk1JzogMTUuMzgsXG4gICAgICAgICcwLjknOiAxNy4yOSxcbiAgICAgICAgJzAuNSc6IDI1LjM0LFxuICAgICAgICAnMC4xJzogMzUuNTYsXG4gICAgICAgICcwLjA1JzogMzguODksXG4gICAgICAgICcwLjAyNSc6IDQxLjkyLFxuICAgICAgICAnMC4wMSc6IDQ1LjY0LFxuICAgICAgICAnMC4wMDUnOiA0OC4yOVxuICAgIH0sXG4gICAgJzI3Jzoge1xuICAgICAgICAnMC45OTUnOiAxMS44MSxcbiAgICAgICAgJzAuOTknOiAxMi44OCxcbiAgICAgICAgJzAuOTc1JzogMTQuNTcsXG4gICAgICAgICcwLjk1JzogMTYuMTUsXG4gICAgICAgICcwLjknOiAxOC4xMSxcbiAgICAgICAgJzAuNSc6IDI2LjM0LFxuICAgICAgICAnMC4xJzogMzYuNzQsXG4gICAgICAgICcwLjA1JzogNDAuMTEsXG4gICAgICAgICcwLjAyNSc6IDQzLjE5LFxuICAgICAgICAnMC4wMSc6IDQ2Ljk2LFxuICAgICAgICAnMC4wMDUnOiA0OS42NVxuICAgIH0sXG4gICAgJzI4Jzoge1xuICAgICAgICAnMC45OTUnOiAxMi40NixcbiAgICAgICAgJzAuOTknOiAxMy41NyxcbiAgICAgICAgJzAuOTc1JzogMTUuMzEsXG4gICAgICAgICcwLjk1JzogMTYuOTMsXG4gICAgICAgICcwLjknOiAxOC45NCxcbiAgICAgICAgJzAuNSc6IDI3LjM0LFxuICAgICAgICAnMC4xJzogMzcuOTIsXG4gICAgICAgICcwLjA1JzogNDEuMzQsXG4gICAgICAgICcwLjAyNSc6IDQ0LjQ2LFxuICAgICAgICAnMC4wMSc6IDQ4LjI4LFxuICAgICAgICAnMC4wMDUnOiA1MC45OVxuICAgIH0sXG4gICAgJzI5Jzoge1xuICAgICAgICAnMC45OTUnOiAxMy4xMixcbiAgICAgICAgJzAuOTknOiAxNC4yNixcbiAgICAgICAgJzAuOTc1JzogMTYuMDUsXG4gICAgICAgICcwLjk1JzogMTcuNzEsXG4gICAgICAgICcwLjknOiAxOS43NyxcbiAgICAgICAgJzAuNSc6IDI4LjM0LFxuICAgICAgICAnMC4xJzogMzkuMDksXG4gICAgICAgICcwLjA1JzogNDIuNTYsXG4gICAgICAgICcwLjAyNSc6IDQ1LjcyLFxuICAgICAgICAnMC4wMSc6IDQ5LjU5LFxuICAgICAgICAnMC4wMDUnOiA1Mi4zNFxuICAgIH0sXG4gICAgJzMwJzoge1xuICAgICAgICAnMC45OTUnOiAxMy43OSxcbiAgICAgICAgJzAuOTknOiAxNC45NSxcbiAgICAgICAgJzAuOTc1JzogMTYuNzksXG4gICAgICAgICcwLjk1JzogMTguNDksXG4gICAgICAgICcwLjknOiAyMC42LFxuICAgICAgICAnMC41JzogMjkuMzQsXG4gICAgICAgICcwLjEnOiA0MC4yNixcbiAgICAgICAgJzAuMDUnOiA0My43NyxcbiAgICAgICAgJzAuMDI1JzogNDYuOTgsXG4gICAgICAgICcwLjAxJzogNTAuODksXG4gICAgICAgICcwLjAwNSc6IDUzLjY3XG4gICAgfSxcbiAgICAnNDAnOiB7XG4gICAgICAgICcwLjk5NSc6IDIwLjcxLFxuICAgICAgICAnMC45OSc6IDIyLjE2LFxuICAgICAgICAnMC45NzUnOiAyNC40MyxcbiAgICAgICAgJzAuOTUnOiAyNi41MSxcbiAgICAgICAgJzAuOSc6IDI5LjA1LFxuICAgICAgICAnMC41JzogMzkuMzQsXG4gICAgICAgICcwLjEnOiA1MS44MSxcbiAgICAgICAgJzAuMDUnOiA1NS43NixcbiAgICAgICAgJzAuMDI1JzogNTkuMzQsXG4gICAgICAgICcwLjAxJzogNjMuNjksXG4gICAgICAgICcwLjAwNSc6IDY2Ljc3XG4gICAgfSxcbiAgICAnNTAnOiB7XG4gICAgICAgICcwLjk5NSc6IDI3Ljk5LFxuICAgICAgICAnMC45OSc6IDI5LjcxLFxuICAgICAgICAnMC45NzUnOiAzMi4zNixcbiAgICAgICAgJzAuOTUnOiAzNC43NixcbiAgICAgICAgJzAuOSc6IDM3LjY5LFxuICAgICAgICAnMC41JzogNDkuMzMsXG4gICAgICAgICcwLjEnOiA2My4xNyxcbiAgICAgICAgJzAuMDUnOiA2Ny41LFxuICAgICAgICAnMC4wMjUnOiA3MS40MixcbiAgICAgICAgJzAuMDEnOiA3Ni4xNSxcbiAgICAgICAgJzAuMDA1JzogNzkuNDlcbiAgICB9LFxuICAgICc2MCc6IHtcbiAgICAgICAgJzAuOTk1JzogMzUuNTMsXG4gICAgICAgICcwLjk5JzogMzcuNDgsXG4gICAgICAgICcwLjk3NSc6IDQwLjQ4LFxuICAgICAgICAnMC45NSc6IDQzLjE5LFxuICAgICAgICAnMC45JzogNDYuNDYsXG4gICAgICAgICcwLjUnOiA1OS4zMyxcbiAgICAgICAgJzAuMSc6IDc0LjQsXG4gICAgICAgICcwLjA1JzogNzkuMDgsXG4gICAgICAgICcwLjAyNSc6IDgzLjMsXG4gICAgICAgICcwLjAxJzogODguMzgsXG4gICAgICAgICcwLjAwNSc6IDkxLjk1XG4gICAgfSxcbiAgICAnNzAnOiB7XG4gICAgICAgICcwLjk5NSc6IDQzLjI4LFxuICAgICAgICAnMC45OSc6IDQ1LjQ0LFxuICAgICAgICAnMC45NzUnOiA0OC43NixcbiAgICAgICAgJzAuOTUnOiA1MS43NCxcbiAgICAgICAgJzAuOSc6IDU1LjMzLFxuICAgICAgICAnMC41JzogNjkuMzMsXG4gICAgICAgICcwLjEnOiA4NS41MyxcbiAgICAgICAgJzAuMDUnOiA5MC41MyxcbiAgICAgICAgJzAuMDI1JzogOTUuMDIsXG4gICAgICAgICcwLjAxJzogMTAwLjQyLFxuICAgICAgICAnMC4wMDUnOiAxMDQuMjJcbiAgICB9LFxuICAgICc4MCc6IHtcbiAgICAgICAgJzAuOTk1JzogNTEuMTcsXG4gICAgICAgICcwLjk5JzogNTMuNTQsXG4gICAgICAgICcwLjk3NSc6IDU3LjE1LFxuICAgICAgICAnMC45NSc6IDYwLjM5LFxuICAgICAgICAnMC45JzogNjQuMjgsXG4gICAgICAgICcwLjUnOiA3OS4zMyxcbiAgICAgICAgJzAuMSc6IDk2LjU4LFxuICAgICAgICAnMC4wNSc6IDEwMS44OCxcbiAgICAgICAgJzAuMDI1JzogMTA2LjYzLFxuICAgICAgICAnMC4wMSc6IDExMi4zMyxcbiAgICAgICAgJzAuMDA1JzogMTE2LjMyXG4gICAgfSxcbiAgICAnOTAnOiB7XG4gICAgICAgICcwLjk5NSc6IDU5LjIsXG4gICAgICAgICcwLjk5JzogNjEuNzUsXG4gICAgICAgICcwLjk3NSc6IDY1LjY1LFxuICAgICAgICAnMC45NSc6IDY5LjEzLFxuICAgICAgICAnMC45JzogNzMuMjksXG4gICAgICAgICcwLjUnOiA4OS4zMyxcbiAgICAgICAgJzAuMSc6IDEwNy41NyxcbiAgICAgICAgJzAuMDUnOiAxMTMuMTQsXG4gICAgICAgICcwLjAyNSc6IDExOC4xNCxcbiAgICAgICAgJzAuMDEnOiAxMjQuMTIsXG4gICAgICAgICcwLjAwNSc6IDEyOC4zXG4gICAgfSxcbiAgICAnMTAwJzoge1xuICAgICAgICAnMC45OTUnOiA2Ny4zMyxcbiAgICAgICAgJzAuOTknOiA3MC4wNixcbiAgICAgICAgJzAuOTc1JzogNzQuMjIsXG4gICAgICAgICcwLjk1JzogNzcuOTMsXG4gICAgICAgICcwLjknOiA4Mi4zNixcbiAgICAgICAgJzAuNSc6IDk5LjMzLFxuICAgICAgICAnMC4xJzogMTE4LjUsXG4gICAgICAgICcwLjA1JzogMTI0LjM0LFxuICAgICAgICAnMC4wMjUnOiAxMjkuNTYsXG4gICAgICAgICcwLjAxJzogMTM1LjgxLFxuICAgICAgICAnMC4wMDUnOiAxNDAuMTdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY2hpX3NxdWFyZWRfZGlzdHJpYnV0aW9uX3RhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG52YXIgU1FSVF8yUEkgPSBNYXRoLnNxcnQoMiAqIE1hdGguUEkpO1xuXG5mdW5jdGlvbiBjdW11bGF0aXZlRGlzdHJpYnV0aW9uKHopIHtcbiAgICB2YXIgc3VtID0geixcbiAgICAgICAgdG1wID0gejtcblxuICAgIC8vIDE1IGl0ZXJhdGlvbnMgYXJlIGVub3VnaCBmb3IgNC1kaWdpdCBwcmVjaXNpb25cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgdG1wICo9IHogKiB6IC8gKDIgKiBpICsgMSk7XG4gICAgICAgIHN1bSArPSB0bXA7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnJvdW5kKCgwLjUgKyAoc3VtIC8gU1FSVF8yUEkpICogTWF0aC5leHAoLXogKiB6IC8gMikpICogMWU0KSAvIDFlNDtcbn1cblxuLyoqXG4gKiBBIHN0YW5kYXJkIG5vcm1hbCB0YWJsZSwgYWxzbyBjYWxsZWQgdGhlIHVuaXQgbm9ybWFsIHRhYmxlIG9yIFogdGFibGUsXG4gKiBpcyBhIG1hdGhlbWF0aWNhbCB0YWJsZSBmb3IgdGhlIHZhbHVlcyBvZiDOpiAocGhpKSwgd2hpY2ggYXJlIHRoZSB2YWx1ZXMgb2ZcbiAqIHRoZSBjdW11bGF0aXZlIGRpc3RyaWJ1dGlvbiBmdW5jdGlvbiBvZiB0aGUgbm9ybWFsIGRpc3RyaWJ1dGlvbi5cbiAqIEl0IGlzIHVzZWQgdG8gZmluZCB0aGUgcHJvYmFiaWxpdHkgdGhhdCBhIHN0YXRpc3RpYyBpcyBvYnNlcnZlZCBiZWxvdyxcbiAqIGFib3ZlLCBvciBiZXR3ZWVuIHZhbHVlcyBvbiB0aGUgc3RhbmRhcmQgbm9ybWFsIGRpc3RyaWJ1dGlvbiwgYW5kIGJ5XG4gKiBleHRlbnNpb24sIGFueSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICpcbiAqIFRoZSBwcm9iYWJpbGl0aWVzIGFyZSBjYWxjdWxhdGVkIHVzaW5nIHRoZVxuICogW0N1bXVsYXRpdmUgZGlzdHJpYnV0aW9uIGZ1bmN0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ob3JtYWxfZGlzdHJpYnV0aW9uI0N1bXVsYXRpdmVfZGlzdHJpYnV0aW9uX2Z1bmN0aW9uKS5cbiAqIFRoZSB0YWJsZSB1c2VkIGlzIHRoZSBjdW11bGF0aXZlLCBhbmQgbm90IGN1bXVsYXRpdmUgZnJvbSAwIHRvIG1lYW5cbiAqIChldmVuIHRob3VnaCB0aGUgbGF0dGVyIGhhcyA1IGRpZ2l0cyBwcmVjaXNpb24sIGluc3RlYWQgb2YgNCkuXG4gKi9cbnZhciBzdGFuZGFyZE5vcm1hbFRhYmxlLyo6IEFycmF5PG51bWJlcj4gKi8gPSBbXTtcblxuZm9yICh2YXIgeiA9IDA7IHogPD0gMy4wOTsgeiArPSAwLjAxKSB7XG4gICAgc3RhbmRhcmROb3JtYWxUYWJsZS5wdXNoKGN1bXVsYXRpdmVEaXN0cmlidXRpb24oeikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFuZGFyZE5vcm1hbFRhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N0YW5kYXJkX25vcm1hbF90YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgSW52ZXJzZSBbR2F1c3NpYW4gZXJyb3IgZnVuY3Rpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXJyb3JfZnVuY3Rpb24pXG4gKiByZXR1cm5zIGEgbnVtZXJpY2FsIGFwcHJveGltYXRpb24gdG8gdGhlIHZhbHVlIHRoYXQgd291bGQgaGF2ZSBjYXVzZWRcbiAqIGBlcnJvckZ1bmN0aW9uKClgIHRvIHJldHVybiB4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHZhbHVlIG9mIGVycm9yIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBlc3RpbWF0ZWQgaW52ZXJ0ZWQgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZUVycm9yRnVuY3Rpb24oeC8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgdmFyIGEgPSAoOCAqIChNYXRoLlBJIC0gMykpIC8gKDMgKiBNYXRoLlBJICogKDQgLSBNYXRoLlBJKSk7XG5cbiAgICB2YXIgaW52ID0gTWF0aC5zcXJ0KE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3coMiAvIChNYXRoLlBJICogYSkgKyBNYXRoLmxvZygxIC0geCAqIHgpIC8gMiwgMikgLVxuICAgICAgICBNYXRoLmxvZygxIC0geCAqIHgpIC8gYSkgLVxuICAgICAgICAoMiAvIChNYXRoLlBJICogYSkgKyBNYXRoLmxvZygxIC0geCAqIHgpIC8gMikpO1xuXG4gICAgaWYgKHggPj0gMCkge1xuICAgICAgICByZXR1cm4gaW52O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtaW52O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW52ZXJzZUVycm9yRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvaW52ZXJzZV9lcnJvcl9mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBbU2lnbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2lnbl9mdW5jdGlvbikgaXMgYSBmdW5jdGlvblxuICogdGhhdCBleHRyYWN0cyB0aGUgc2lnbiBvZiBhIHJlYWwgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHggaW5wdXQgdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHNpZ24gdmFsdWUgZWl0aGVyIDEsIDAgb3IgLTFcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgdGhlIGlucHV0IGFyZ3VtZW50IHggaXMgbm90IGEgbnVtYmVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBzaWduKDIpOyAvLyA9PiAxXG4gKi9cbmZ1bmN0aW9uIHNpZ24oeC8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmICh4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBudW1iZXInKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2lzaWRhID0ge307XG5cbmdpc2lkYS52ZXJzaW9uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbmdpc2lkYS5pbml0U3RvcmUgPSByZXF1aXJlKCcuL3N0b3JlL2luaXRTdG9yZScpLmRlZmF1bHQ7XG5naXNpZGEuQWN0aW9ucyA9IHJlcXVpcmUoJy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25zJykuZGVmYXVsdDtcbmdpc2lkYS5SZWR1Y2VycyA9IHJlcXVpcmUoJy4vc3RvcmUvcmVkdWNlcnMvUmVkdWNlcnMnKS5kZWZhdWx0O1xuZ2lzaWRhLnByZXBhcmVMYXllciA9IHJlcXVpcmUoJy4vbWFwL3ByZXBhcmVMYXllcicpLmRlZmF1bHQ7XG5naXNpZGEuYWRkTGF5ZXIgPSByZXF1aXJlKCcuL21hcC9hZGRMYXllcicpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2lzaWRhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJnaXNpZGFcIixcImRlc2NyaXB0aW9uXCI6XCJBIGRhc2hib2FyZCBidWlsZGVyIGxpYnJhcnkgZm9yIG1hcCB2aXN1YWxpemF0aW9uc1wiLFwidmVyc2lvblwiOlwiMC4wLjFcIixcImF1dGhvclwiOlwiT25hIFN5c3RlbXMgSW5jLlwiLFwicmVwb3NpdG9yeVwiOntcInR5cGVcIjpcImdpdFwiLFwidXJsXCI6XCJodHRwczovL2dpdGh1Yi5jb20vb25haW8vZ2lzaWRhI2dpc2lkYVwifSxcImplc3RcIjp7XCJ0cmFuc2Zvcm1cIjp7XCIuKlwiOlwiLi9ub2RlX21vZHVsZXMvamVzdC1jc3MtbW9kdWxlc1wifX0sXCJkZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJ2Ni4yNS4wXCIsXCJiYWJlbC1sb2FkZXJcIjpcInY2LjQuMVwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMFwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNlwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTBcIjpcIl42LjI0LjFcIixcImNvbG9yYnJld2VyXCI6XCJeMS4wLjBcIixcImpzeC1sb2FkZXJcIjpcIl4wLjEzLjJcIixcIm11c3RhY2hlXCI6XCJeMi4zLjBcIixcInBhcGFwYXJzZVwiOlwiXjQuMy42XCIsXCJyZWR1eFwiOlwiXjMuNy4yXCIsXCJzaW1wbGUtc3RhdGlzdGljc1wiOlwiXjUuMi4wXCIsXCJ3ZWJwYWNrXCI6XCJeMy44LjFcIn0sXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1lc2xpbnRcIjpcIl44LjEuMlwiLFwiZXNsaW50XCI6XCJeNC4xNC4wXCIsXCJlc2xpbnQtY29uZmlnLWFpcmJuYlwiOlwiXjE2LjEuMFwiLFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjpcIl4yLjguMFwiLFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOlwiXjYuMC4zXCIsXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6XCJeNy41LjFcIn0sXCJrZXl3b3Jkc1wiOltcIm1hcHBpbmdcIixcIm1hcHNcIixcImRhdGEgdmlzdWFsaXphdGlvblwiLFwibWFwc3BlY1wiXSxcImxpY2Vuc2VcIjpcIk1JVFwiLFwibWFpblwiOlwiZGlzdC9naXNpZGEuanNcIixcInNjcmlwdHNcIjp7XCJsaW50XCI6XCJlc2xpbnQgc3JjIC0tZXh0PWpzeCAtLWV4dD1qc1wiLFwiYnVpbGRcIjpcIndlYnBhY2sgLS1wcm9ncmVzcyAtLWVudi5wcm9kdWN0aW9uPXRydWVcIixcImRldmVsb3BcIjpcIndlYnBhY2sgLS1wcm9ncmVzcyAtLXdhdGNoIC0tZW52LnByb2R1Y3Rpb249ZmFsc2VcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaW5pdFN0b3JlO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbnMnKTtcblxudmFyIF9SZWR1Y2VycyA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvUmVkdWNlcnMnKTtcblxudmFyIF9SZWR1Y2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWR1Y2Vycyk7XG5cbnZhciBfZmlsZXMgPSByZXF1aXJlKCcuLi91dGlscy9maWxlcycpO1xuXG52YXIgX3ByZXBhcmVMYXllciA9IHJlcXVpcmUoJy4uL21hcC9wcmVwYXJlTGF5ZXInKTtcblxudmFyIF9wcmVwYXJlTGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlcGFyZUxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaW5pdFN0b3JlKGN1c3RvbVJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VycyA9IHZvaWQgMDtcbiAgaWYgKGN1c3RvbVJlZHVjZXJzKSB7XG4gICAgcmVkdWNlcnMgPSAoMCwgX3JlZHV4LmNvbWJpbmVSZWR1Y2VycykoX2V4dGVuZHMoe30sIF9SZWR1Y2VyczIuZGVmYXVsdCwgY3VzdG9tUmVkdWNlcnMpKTtcbiAgfSBlbHNlIHtcbiAgICByZWR1Y2VycyA9ICgwLCBfcmVkdXguY29tYmluZVJlZHVjZXJzKShfUmVkdWNlcnMyLmRlZmF1bHQpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGluaXRpYWwgc3RvcmVcbiAgdmFyIHN0b3JlID0gKDAsIF9yZWR1eC5jcmVhdGVTdG9yZSkocmVkdWNlcnMpO1xuXG4gIC8vIEFkZCBjb25maWcgdG8gcmVkdXggc3RvcmVcbiAgZnVuY3Rpb24gYWRkQ29uZmlnVG9TdG9yZShjb25maWcpIHtcbiAgICAvLyBDaGVjayBpZiBjb25maWcgaGFzIGxpc3Qgb2YgbGF5ZXJzIGFuZCBhZGQgdGhlbSB0byBzdG9yZVxuICAgIGlmIChjb25maWcuTEFZRVJTLmxlbmd0aCA+IDAgJiYgY29uZmlnLkFQUC5sYXllcnNQYXRoKSB7XG4gICAgICBjb25maWcuTEFZRVJTLm1hcChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgLy8gdG9kbzogY2hlY2sgaWYgYGxheWVyYCBpcyBmdWxsIFVSTCBlLmcgaHR0cDovL215ZG9tYWlsbi9teWxheWVyLmpzb25cbiAgICAgICAgLy8gYW5kIGxvYWQgaXQgZGlyZWN0bHlcbiAgICAgICAgdmFyIHBhdGggPSBjb25maWcuQVBQLmxheWVyc1BhdGggKyAnLycgKyBsYXllciArICcuanNvbic7XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkTGF5ZXJUb1N0b3JlKHJlc3BvbnNlT2JqKSB7XG4gICAgICAgICAgdmFyIGxheWVyT2JqID0gcmVzcG9uc2VPYmo7XG4gICAgICAgICAgbGF5ZXJPYmouaWQgPSBsYXllcjtcbiAgICAgICAgICBsYXllck9iai5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgoMCwgX0FjdGlvbnMuYWRkTGF5ZXIpKGxheWVyT2JqKSk7XG4gICAgICAgICAgaWYgKGxheWVyT2JqLnZpc2libGUgJiYgIWxheWVyT2JqLmxvYWRlZCkge1xuICAgICAgICAgICAgKDAsIF9wcmVwYXJlTGF5ZXIyLmRlZmF1bHQpKGxheWVyT2JqLCBzdG9yZS5kaXNwYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgwLCBfZmlsZXMubG9hZEpTT04pKHBhdGgsIGFkZExheWVyVG9TdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9yZS5kaXNwYXRjaCgoMCwgX0FjdGlvbnMuaW5pdEFwcCkoY29uZmlnLkFQUCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKCgwLCBfQWN0aW9ucy5pbml0U3R5bGVzKShjb25maWcuU1RZTEVTLCBjb25maWcuQVBQLm1hcENvbmZpZykpO1xuICAgIHN0b3JlLmRpc3BhdGNoKCgwLCBfQWN0aW9ucy5pbml0UmVnaW9ucykoY29uZmlnLlJFR0lPTlMsIGNvbmZpZy5BUFAubWFwQ29uZmlnKSk7XG4gIH1cblxuICAvLyBSZWFkIGNvbmZpZy5qc29uIGFuZCBhZGQgdG8gcmVkdXggc3RvcmVcbiAgKDAsIF9maWxlcy5sb2FkSlNPTikoJ2NvbmZpZy5qc29uJywgYWRkQ29uZmlnVG9TdG9yZSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9zdG9yZS9pbml0U3RvcmUuanMiLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgY29tYmluZVJlZHVjZXJzIGZyb20gJy4vY29tYmluZVJlZHVjZXJzJztcbmltcG9ydCBiaW5kQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IGFwcGx5TWlkZGxld2FyZSBmcm9tICcuL2FwcGx5TWlkZGxld2FyZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcXCdwcm9kdWN0aW9uXFwnLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwuanMnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gJyArICdJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uXFwndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsICcgKyAneW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0gdm9pZCAwO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgQVBQOiB7XG4gICAgbWFwQ29uZmlnOiB7XG4gICAgICBjb250YWluZXI6ICdtYXAnLFxuICAgICAgc3R5bGU6ICcnLFxuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiA1XG4gICAgfSxcbiAgICBhY2Nlc3NUb2tlbjogZmFsc2UsXG4gICAgYXBwSWNvbjogJ2dpc2lkYS1zYW1wbGUucG5nJyxcbiAgICBhcHBOYW1lOiAnUmVhY3QgR2lzaWRhJ1xuICB9LFxuICBMQVlFUlM6IFtdLFxuICBTVFlMRVM6IFt7XG4gICAgbGFiZWw6ICdTYXRlbGl0dGUnLFxuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjknXG4gIH0sIHtcbiAgICBsYWJlbDogJ1NhdGVsaXR0ZSBTdHJlZXRzJyxcbiAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXN0cmVldHMtdjknXG4gIH1dLFxuICBSRUdJT05TOiBbXSxcbiAgTUFQOiB7XG4gICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgIHByb2Nlc3NlZExheWVyczoge30sXG4gICAgYWN0aXZlTGF5ZXJzOiB7fSxcbiAgICBsYXllcnNUb1JlbW92ZTogW10sXG4gICAgbGF5ZXJzVG9BZGQ6IFtdXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRTdGF0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9zdG9yZS9kZWZhdWx0U3RhdGUuanMiLCIvKiFcblx0UGFwYSBQYXJzZVxuXHR2NC4zLjZcblx0aHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuXHRMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSlcbntcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0e1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuUGFwYSA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpXG57XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBhbHRlcm5hdGl2ZSBtZXRob2QsIHNpbWlsYXIgdG8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdFx0Ly8gYnV0IHdpdGhvdXQgdXNpbmcgYGV2YWxgICh3aGljaCBpcyBkaXNhYmxlZCB3aGVuXG5cdFx0Ly8gdXNpbmcgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuXG5cdFx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdFx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblxuXHRcdC8vIFdoZW4gcnVubmluZyB0ZXN0cyBub25lIG9mIHRoZSBhYm92ZSBoYXZlIGJlZW4gZGVmaW5lZFxuXHRcdHJldHVybiB7fTtcblx0fSkoKTtcblxuXG5cdHZhciBJU19XT1JLRVIgPSAhZ2xvYmFsLmRvY3VtZW50ICYmICEhZ2xvYmFsLnBvc3RNZXNzYWdlLFxuXHRcdElTX1BBUEFfV09SS0VSID0gSVNfV09SS0VSICYmIC8oXFw/fCYpcGFwYXdvcmtlcig9fCZ8JCkvLnRlc3QoZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCksXG5cdFx0TE9BREVEX1NZTkMgPSBmYWxzZSwgQVVUT19TQ1JJUFRfUEFUSDtcblx0dmFyIHdvcmtlcnMgPSB7fSwgd29ya2VySWRDb3VudGVyID0gMDtcblxuXHR2YXIgUGFwYSA9IHt9O1xuXG5cdFBhcGEucGFyc2UgPSBDc3ZUb0pzb247XG5cdFBhcGEudW5wYXJzZSA9IEpzb25Ub0NzdjtcblxuXHRQYXBhLlJFQ09SRF9TRVAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTtcblx0UGFwYS5VTklUX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzEpO1xuXHRQYXBhLkJZVEVfT1JERVJfTUFSSyA9ICdcXHVmZWZmJztcblx0UGFwYS5CQURfREVMSU1JVEVSUyA9IFsnXFxyJywgJ1xcbicsICdcIicsIFBhcGEuQllURV9PUkRFUl9NQVJLXTtcblx0UGFwYS5XT1JLRVJTX1NVUFBPUlRFRCA9ICFJU19XT1JLRVIgJiYgISFnbG9iYWwuV29ya2VyO1xuXHRQYXBhLlNDUklQVF9QQVRIID0gbnVsbDtcdC8vIE11c3QgYmUgc2V0IGJ5IHlvdXIgY29kZSBpZiB5b3UgdXNlIHdvcmtlcnMgYW5kIHRoaXMgbGliIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseVxuXG5cdC8vIENvbmZpZ3VyYWJsZSBjaHVuayBzaXplcyBmb3IgbG9jYWwgYW5kIHJlbW90ZSBmaWxlcywgcmVzcGVjdGl2ZWx5XG5cdFBhcGEuTG9jYWxDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDEwO1x0Ly8gMTAgTUJcblx0UGFwYS5SZW1vdGVDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDU7XHQvLyA1IE1CXG5cdFBhcGEuRGVmYXVsdERlbGltaXRlciA9ICcsJztcdFx0XHQvLyBVc2VkIGlmIG5vdCBzcGVjaWZpZWQgYW5kIGRldGVjdGlvbiBmYWlsc1xuXG5cdC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcgYW5kIGRldmVsb3BtZW50IG9ubHlcblx0UGFwYS5QYXJzZXIgPSBQYXJzZXI7XG5cdFBhcGEuUGFyc2VySGFuZGxlID0gUGFyc2VySGFuZGxlO1xuXHRQYXBhLk5ldHdvcmtTdHJlYW1lciA9IE5ldHdvcmtTdHJlYW1lcjtcblx0UGFwYS5GaWxlU3RyZWFtZXIgPSBGaWxlU3RyZWFtZXI7XG5cdFBhcGEuU3RyaW5nU3RyZWFtZXIgPSBTdHJpbmdTdHJlYW1lcjtcblx0UGFwYS5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXHRpZiAoZ2xvYmFsLmpRdWVyeSlcblx0e1xuXHRcdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblx0XHQkLmZuLnBhcnNlID0gZnVuY3Rpb24ob3B0aW9ucylcblx0XHR7XG5cdFx0XHR2YXIgY29uZmlnID0gb3B0aW9ucy5jb25maWcgfHwge307XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKGlkeClcblx0XHRcdHtcblx0XHRcdFx0dmFyIHN1cHBvcnRlZCA9ICQodGhpcykucHJvcCgndGFnTmFtZScpLnRvVXBwZXJDYXNlKCkgPT09ICdJTlBVVCdcblx0XHRcdFx0XHRcdFx0XHQmJiAkKHRoaXMpLmF0dHIoJ3R5cGUnKS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZSdcblx0XHRcdFx0XHRcdFx0XHQmJiBnbG9iYWwuRmlsZVJlYWRlcjtcblxuXHRcdFx0XHRpZiAoIXN1cHBvcnRlZCB8fCAhdGhpcy5maWxlcyB8fCB0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcdC8vIGNvbnRpbnVlIHRvIG5leHQgaW5wdXQgZWxlbWVudFxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdFx0ZmlsZTogdGhpcy5maWxlc1tpXSxcblx0XHRcdFx0XHRcdGlucHV0RWxlbTogdGhpcyxcblx0XHRcdFx0XHRcdGluc3RhbmNlQ29uZmlnOiAkLmV4dGVuZCh7fSwgY29uZmlnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cGFyc2VOZXh0RmlsZSgpO1x0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdFx0cmV0dXJuIHRoaXM7XHRcdC8vIG1haW50YWlucyBjaGFpbmFiaWxpdHlcblxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZU5leHRGaWxlKClcblx0XHRcdHtcblx0XHRcdFx0aWYgKHF1ZXVlLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY29tcGxldGUpKVxuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmID0gcXVldWVbMF07XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5iZWZvcmUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJldHVybmVkID0gb3B0aW9ucy5iZWZvcmUoZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldHVybmVkID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAocmV0dXJuZWQuYWN0aW9uID09PSAnYWJvcnQnKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRlcnJvcignQWJvcnRFcnJvcicsIGYuZmlsZSwgZi5pbnB1dEVsZW0sIHJldHVybmVkLnJlYXNvbik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcdC8vIEFib3J0cyBhbGwgcXVldWVkIGZpbGVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmIChyZXR1cm5lZC5hY3Rpb24gPT09ICdza2lwJylcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiByZXR1cm5lZC5jb25maWcgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnID0gJC5leHRlbmQoZi5pbnN0YW5jZUNvbmZpZywgcmV0dXJuZWQuY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocmV0dXJuZWQgPT09ICdza2lwJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcdC8vIHBhcnNlIHRoZSBuZXh0IGZpbGUgaW4gdGhlIHF1ZXVlLCBpZiBhbnlcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXcmFwIHVwIHRoZSB1c2VyJ3MgY29tcGxldGUgY2FsbGJhY2ssIGlmIGFueSwgc28gdGhhdCBvdXJzIGFsc28gZ2V0cyBleGVjdXRlZFxuXHRcdFx0XHR2YXIgdXNlckNvbXBsZXRlRnVuYyA9IGYuaW5zdGFuY2VDb25maWcuY29tcGxldGU7XG5cdFx0XHRcdGYuaW5zdGFuY2VDb25maWcuY29tcGxldGUgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24odXNlckNvbXBsZXRlRnVuYykpXG5cdFx0XHRcdFx0XHR1c2VyQ29tcGxldGVGdW5jKHJlc3VsdHMsIGYuZmlsZSwgZi5pbnB1dEVsZW0pO1xuXHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdFBhcGEucGFyc2UoZi5maWxlLCBmLmluc3RhbmNlQ29uZmlnKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZXJyb3IobmFtZSwgZmlsZSwgZWxlbSwgcmVhc29uKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmVycm9yKSlcblx0XHRcdFx0XHRvcHRpb25zLmVycm9yKHtuYW1lOiBuYW1lfSwgZmlsZSwgZWxlbSwgcmVhc29uKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZmlsZUNvbXBsZXRlKClcblx0XHRcdHtcblx0XHRcdFx0cXVldWUuc3BsaWNlKDAsIDEpO1xuXHRcdFx0XHRwYXJzZU5leHRGaWxlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRpZiAoSVNfUEFQQV9XT1JLRVIpXG5cdHtcblx0XHRnbG9iYWwub25tZXNzYWdlID0gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlO1xuXHR9XG5cdGVsc2UgaWYgKFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdHtcblx0XHRBVVRPX1NDUklQVF9QQVRIID0gZ2V0U2NyaXB0UGF0aCgpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHNjcmlwdCB3YXMgbG9hZGVkIHN5bmNocm9ub3VzbHlcblx0XHRpZiAoIWRvY3VtZW50LmJvZHkpXG5cdFx0e1xuXHRcdFx0Ly8gQm9keSBkb2Vzbid0IGV4aXN0IHlldCwgbXVzdCBiZSBzeW5jaHJvbm91c1xuXHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblx0ZnVuY3Rpb24gQ3N2VG9Kc29uKF9pbnB1dCwgX2NvbmZpZylcblx0e1xuXHRcdF9jb25maWcgPSBfY29uZmlnIHx8IHt9O1xuXHRcdHZhciBkeW5hbWljVHlwaW5nID0gX2NvbmZpZy5keW5hbWljVHlwaW5nIHx8IGZhbHNlO1xuXHRcdGlmIChpc0Z1bmN0aW9uKGR5bmFtaWNUeXBpbmcpKSB7XG5cdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiA9IGR5bmFtaWNUeXBpbmc7XG5cdFx0XHQvLyBXaWxsIGJlIGZpbGxlZCBvbiBmaXJzdCByb3cgY2FsbFxuXHRcdFx0ZHluYW1pY1R5cGluZyA9IHt9O1xuXHRcdH1cblx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmcgPSBkeW5hbWljVHlwaW5nO1xuXG5cdFx0aWYgKF9jb25maWcud29ya2VyICYmIFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0e1xuXHRcdFx0dmFyIHcgPSBuZXdXb3JrZXIoKTtcblxuXHRcdFx0dy51c2VyU3RlcCA9IF9jb25maWcuc3RlcDtcblx0XHRcdHcudXNlckNodW5rID0gX2NvbmZpZy5jaHVuaztcblx0XHRcdHcudXNlckNvbXBsZXRlID0gX2NvbmZpZy5jb21wbGV0ZTtcblx0XHRcdHcudXNlckVycm9yID0gX2NvbmZpZy5lcnJvcjtcblxuXHRcdFx0X2NvbmZpZy5zdGVwID0gaXNGdW5jdGlvbihfY29uZmlnLnN0ZXApO1xuXHRcdFx0X2NvbmZpZy5jaHVuayA9IGlzRnVuY3Rpb24oX2NvbmZpZy5jaHVuayk7XG5cdFx0XHRfY29uZmlnLmNvbXBsZXRlID0gaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKTtcblx0XHRcdF9jb25maWcuZXJyb3IgPSBpc0Z1bmN0aW9uKF9jb25maWcuZXJyb3IpO1xuXHRcdFx0ZGVsZXRlIF9jb25maWcud29ya2VyO1x0Ly8gcHJldmVudCBpbmZpbml0ZSBsb29wXG5cblx0XHRcdHcucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRpbnB1dDogX2lucHV0LFxuXHRcdFx0XHRjb25maWc6IF9jb25maWcsXG5cdFx0XHRcdHdvcmtlcklkOiB3LmlkXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzdHJlYW1lciA9IG51bGw7XG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdHtcblx0XHRcdGlmIChfY29uZmlnLmRvd25sb2FkKVxuXHRcdFx0XHRzdHJlYW1lciA9IG5ldyBOZXR3b3JrU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHN0cmVhbWVyID0gbmV3IFN0cmluZ1N0cmVhbWVyKF9jb25maWcpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfaW5wdXQucmVhZGFibGUgPT09IHRydWUgJiYgaXNGdW5jdGlvbihfaW5wdXQucmVhZCkgJiYgaXNGdW5jdGlvbihfaW5wdXQub24pKVxuXHRcdHtcblx0XHRcdHN0cmVhbWVyID0gbmV3IFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChnbG9iYWwuRmlsZSAmJiBfaW5wdXQgaW5zdGFuY2VvZiBGaWxlKSB8fCBfaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpXHQvLyAuLi5TYWZhcmkuIChzZWUgaXNzdWUgIzEwNilcblx0XHRcdHN0cmVhbWVyID0gbmV3IEZpbGVTdHJlYW1lcihfY29uZmlnKTtcblxuXHRcdHJldHVybiBzdHJlYW1lci5zdHJlYW0oX2lucHV0KTtcblx0fVxuXG5cblxuXG5cblxuXHRmdW5jdGlvbiBKc29uVG9Dc3YoX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0dmFyIF9vdXRwdXQgPSAnJztcblx0XHR2YXIgX2ZpZWxkcyA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBjb25maWd1cmF0aW9uXG5cblx0XHQvKiogd2hldGhlciB0byBzdXJyb3VuZCBldmVyeSBkYXR1bSB3aXRoIHF1b3RlcyAqL1xuXHRcdHZhciBfcXVvdGVzID0gZmFsc2U7XG5cblx0XHQvKiogd2hldGhlciB0byB3cml0ZSBoZWFkZXJzICovXG5cdFx0dmFyIF93cml0ZUhlYWRlciA9IHRydWU7XG5cblx0XHQvKiogZGVsaW1pdGluZyBjaGFyYWN0ZXIgKi9cblx0XHR2YXIgX2RlbGltaXRlciA9ICcsJztcblxuXHRcdC8qKiBuZXdsaW5lIGNoYXJhY3RlcihzKSAqL1xuXHRcdHZhciBfbmV3bGluZSA9ICdcXHJcXG4nO1xuXG5cdFx0LyoqIHF1b3RlIGNoYXJhY3RlciAqL1xuXHRcdHZhciBfcXVvdGVDaGFyID0gJ1wiJztcblxuXHRcdHVucGFja0NvbmZpZygpO1xuXG5cdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChfcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0X2lucHV0ID0gSlNPTi5wYXJzZShfaW5wdXQpO1xuXG5cdFx0aWYgKF9pbnB1dCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHtcblx0XHRcdGlmICghX2lucHV0Lmxlbmd0aCB8fCBfaW5wdXRbMF0gaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShudWxsLCBfaW5wdXQpO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIF9pbnB1dFswXSA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUob2JqZWN0S2V5cyhfaW5wdXRbMF0pLCBfaW5wdXQpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2YgX2lucHV0ID09PSAnb2JqZWN0Jylcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIF9pbnB1dC5kYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0X2lucHV0LmRhdGEgPSBKU09OLnBhcnNlKF9pbnB1dC5kYXRhKTtcblxuXHRcdFx0aWYgKF9pbnB1dC5kYXRhIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghX2lucHV0LmZpZWxkcylcblx0XHRcdFx0XHRfaW5wdXQuZmllbGRzID0gIF9pbnB1dC5tZXRhICYmIF9pbnB1dC5tZXRhLmZpZWxkcztcblxuXHRcdFx0XHRpZiAoIV9pbnB1dC5maWVsZHMpXG5cdFx0XHRcdFx0X2lucHV0LmZpZWxkcyA9ICBfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbnB1dC5maWVsZHNcblx0XHRcdFx0XHRcdFx0XHRcdDogb2JqZWN0S2V5cyhfaW5wdXQuZGF0YVswXSk7XG5cblx0XHRcdFx0aWYgKCEoX2lucHV0LmRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheSkgJiYgdHlwZW9mIF9pbnB1dC5kYXRhWzBdICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRfaW5wdXQuZGF0YSA9IFtfaW5wdXQuZGF0YV07XHQvLyBoYW5kbGVzIGlucHV0IGxpa2UgWzEsMiwzXSBvciBbJ2FzZGYnXVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VyaWFsaXplKF9pbnB1dC5maWVsZHMgfHwgW10sIF9pbnB1dC5kYXRhIHx8IFtdKTtcblx0XHR9XG5cblx0XHQvLyBEZWZhdWx0IChhbnkgdmFsaWQgcGF0aHMgc2hvdWxkIHJldHVybiBiZWZvcmUgdGhpcylcblx0XHR0aHJvdyAnZXhjZXB0aW9uOiBVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dCc7XG5cblxuXHRcdGZ1bmN0aW9uIHVucGFja0NvbmZpZygpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcuZGVsaW1pdGVyID09PSAnc3RyaW5nJ1xuXHRcdFx0XHQmJiBfY29uZmlnLmRlbGltaXRlci5sZW5ndGggPT09IDFcblx0XHRcdFx0JiYgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKF9jb25maWcuZGVsaW1pdGVyKSA9PT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdF9kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlcyA9PT0gJ2Jvb2xlYW4nXG5cdFx0XHRcdHx8IF9jb25maWcucXVvdGVzIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdF9xdW90ZXMgPSBfY29uZmlnLnF1b3RlcztcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLm5ld2xpbmUgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfbmV3bGluZSA9IF9jb25maWcubmV3bGluZTtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlQ2hhciA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9xdW90ZUNoYXIgPSBfY29uZmlnLnF1b3RlQ2hhcjtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLmhlYWRlciA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRfd3JpdGVIZWFkZXIgPSBfY29uZmlnLmhlYWRlcjtcblx0XHR9XG5cblxuXHRcdC8qKiBUdXJucyBhbiBvYmplY3QncyBrZXlzIGludG8gYW4gYXJyYXkgKi9cblx0XHRmdW5jdGlvbiBvYmplY3RLZXlzKG9iailcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHRcdHJldHVybiBrZXlzO1xuXHRcdH1cblxuXHRcdC8qKiBUaGUgZG91YmxlIGZvciBsb29wIHRoYXQgaXRlcmF0ZXMgdGhlIGRhdGEgYW5kIHdyaXRlcyBvdXQgYSBDU1Ygc3RyaW5nIGluY2x1ZGluZyBoZWFkZXIgcm93ICovXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplKGZpZWxkcywgZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgY3N2ID0gJyc7XG5cblx0XHRcdGlmICh0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZmllbGRzID0gSlNPTi5wYXJzZShmaWVsZHMpO1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cblx0XHRcdHZhciBoYXNIZWFkZXIgPSBmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSAmJiBmaWVsZHMubGVuZ3RoID4gMDtcblx0XHRcdHZhciBkYXRhS2V5ZWRCeUZpZWxkID0gIShkYXRhWzBdIGluc3RhbmNlb2YgQXJyYXkpO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhIGhlYWRlciByb3csIHdyaXRlIGl0IGZpcnN0XG5cdFx0XHRpZiAoaGFzSGVhZGVyICYmIF93cml0ZUhlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShmaWVsZHNbaV0sIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGVuIHdyaXRlIG91dCB0aGUgZGF0YVxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgZGF0YS5sZW5ndGg7IHJvdysrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWF4Q29sID0gaGFzSGVhZGVyID8gZmllbGRzLmxlbmd0aCA6IGRhdGFbcm93XS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbWF4Q29sOyBjb2wrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChjb2wgPiAwKVxuXHRcdFx0XHRcdFx0Y3N2ICs9IF9kZWxpbWl0ZXI7XG5cdFx0XHRcdFx0dmFyIGNvbElkeCA9IGhhc0hlYWRlciAmJiBkYXRhS2V5ZWRCeUZpZWxkID8gZmllbGRzW2NvbF0gOiBjb2w7XG5cdFx0XHRcdFx0Y3N2ICs9IHNhZmUoZGF0YVtyb3ddW2NvbElkeF0sIGNvbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocm93IDwgZGF0YS5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdGNzdiArPSBfbmV3bGluZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNzdjtcblx0XHR9XG5cblx0XHQvKiogRW5jbG9zZXMgYSB2YWx1ZSBhcm91bmQgcXVvdGVzIGlmIG5lZWRlZCAobWFrZXMgYSB2YWx1ZSBzYWZlIGZvciBDU1YgaW5zZXJ0aW9uKSAqL1xuXHRcdGZ1bmN0aW9uIHNhZmUoc3RyLCBjb2wpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnIHx8IHN0ciA9PT0gbnVsbClcblx0XHRcdFx0cmV0dXJuICcnO1xuXG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBfcXVvdGVDaGFyK19xdW90ZUNoYXIpO1xuXG5cdFx0XHR2YXIgbmVlZHNRdW90ZXMgPSAodHlwZW9mIF9xdW90ZXMgPT09ICdib29sZWFuJyAmJiBfcXVvdGVzKVxuXHRcdFx0XHRcdFx0XHR8fCAoX3F1b3RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIF9xdW90ZXNbY29sXSlcblx0XHRcdFx0XHRcdFx0fHwgaGFzQW55KHN0ciwgUGFwYS5CQURfREVMSU1JVEVSUylcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmluZGV4T2YoX2RlbGltaXRlcikgPiAtMVxuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KDApID09PSAnICdcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkgPT09ICcgJztcblxuXHRcdFx0cmV0dXJuIG5lZWRzUXVvdGVzID8gX3F1b3RlQ2hhciArIHN0ciArIF9xdW90ZUNoYXIgOiBzdHI7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFzQW55KHN0ciwgc3Vic3RyaW5ncylcblx0XHR7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGlmIChzdHIuaW5kZXhPZihzdWJzdHJpbmdzW2ldKSA+IC0xKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBDaHVua1N0cmVhbWVyIGlzIHRoZSBiYXNlIHByb3RvdHlwZSBmb3IgdmFyaW91cyBzdHJlYW1lciBpbXBsZW1lbnRhdGlvbnMuICovXG5cdGZ1bmN0aW9uIENodW5rU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0dGhpcy5faGFuZGxlID0gbnVsbDtcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2lucHV0ID0gbnVsbDtcblx0XHR0aGlzLl9iYXNlSW5kZXggPSAwO1xuXHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cdFx0dGhpcy5fcm93Q291bnQgPSAwO1xuXHRcdHRoaXMuX3N0YXJ0ID0gMDtcblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBudWxsO1xuXHRcdHRoaXMuaXNGaXJzdENodW5rID0gdHJ1ZTtcblx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yczogW10sXG5cdFx0XHRtZXRhOiB7fVxuXHRcdH07XG5cdFx0cmVwbGFjZUNvbmZpZy5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnBhcnNlQ2h1bmsgPSBmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHQvLyBGaXJzdCBjaHVuayBwcmUtcHJvY2Vzc2luZ1xuXHRcdFx0aWYgKHRoaXMuaXNGaXJzdENodW5rICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbW9kaWZpZWRDaHVuayA9IHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGNodW5rKTtcblx0XHRcdFx0aWYgKG1vZGlmaWVkQ2h1bmsgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRjaHVuayA9IG1vZGlmaWVkQ2h1bms7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IGZhbHNlO1xuXG5cdFx0XHQvLyBSZWpvaW4gdGhlIGxpbmUgd2UgbGlrZWx5IGp1c3Qgc3BsaXQgaW4gdHdvIGJ5IGNodW5raW5nIHRoZSBmaWxlXG5cdFx0XHR2YXIgYWdncmVnYXRlID0gdGhpcy5fcGFydGlhbExpbmUgKyBjaHVuaztcblx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cblx0XHRcdHZhciByZXN1bHRzID0gdGhpcy5faGFuZGxlLnBhcnNlKGFnZ3JlZ2F0ZSwgdGhpcy5fYmFzZUluZGV4LCAhdGhpcy5fZmluaXNoZWQpO1xuXG5cdFx0XHRpZiAodGhpcy5faGFuZGxlLnBhdXNlZCgpIHx8IHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0dmFyIGxhc3RJbmRleCA9IHJlc3VsdHMubWV0YS5jdXJzb3I7XG5cblx0XHRcdGlmICghdGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gYWdncmVnYXRlLnN1YnN0cmluZyhsYXN0SW5kZXggLSB0aGlzLl9iYXNlSW5kZXgpO1xuXHRcdFx0XHR0aGlzLl9iYXNlSW5kZXggPSBsYXN0SW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXN1bHRzICYmIHJlc3VsdHMuZGF0YSlcblx0XHRcdFx0dGhpcy5fcm93Q291bnQgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblxuXHRcdFx0dmFyIGZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyA9IHRoaXMuX2ZpbmlzaGVkIHx8ICh0aGlzLl9jb25maWcucHJldmlldyAmJiB0aGlzLl9yb3dDb3VudCA+PSB0aGlzLl9jb25maWcucHJldmlldyk7XG5cblx0XHRcdGlmIChJU19QQVBBX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRmaW5pc2hlZDogZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jb25maWcuY2h1bmsocmVzdWx0cywgdGhpcy5faGFuZGxlKTtcblx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdHJlc3VsdHMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9jb25maWcuc3RlcCAmJiAhdGhpcy5fY29uZmlnLmNodW5rKSB7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhID0gdGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KHJlc3VsdHMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChyZXN1bHRzLmVycm9ycyk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhID0gcmVzdWx0cy5tZXRhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbXBsZXRlKSAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5hYm9ydGVkKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cywgdGhpcy5faW5wdXQpO1xuXG5cdFx0XHRpZiAoIWZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5wYXVzZWQpKVxuXHRcdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHRcdHRoaXMuX3NlbmRFcnJvciA9IGZ1bmN0aW9uKGVycm9yKVxuXHRcdHtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5lcnJvcikpXG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5lcnJvcihlcnJvcik7XG5cdFx0XHRlbHNlIGlmIChJU19QQVBBX1dPUktFUiAmJiB0aGlzLl9jb25maWcuZXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdGVycm9yOiBlcnJvcixcblx0XHRcdFx0XHRmaW5pc2hlZDogZmFsc2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHJlcGxhY2VDb25maWcoY29uZmlnKVxuXHRcdHtcblx0XHRcdC8vIERlZXAtY29weSB0aGUgY29uZmlnIHNvIHdlIGNhbiBlZGl0IGl0XG5cdFx0XHR2YXIgY29uZmlnQ29weSA9IGNvcHkoY29uZmlnKTtcblx0XHRcdGNvbmZpZ0NvcHkuY2h1bmtTaXplID0gcGFyc2VJbnQoY29uZmlnQ29weS5jaHVua1NpemUpO1x0Ly8gcGFyc2VJbnQgVkVSWSBpbXBvcnRhbnQgc28gd2UgZG9uJ3QgY29uY2F0ZW5hdGUgc3RyaW5ncyFcblx0XHRcdGlmICghY29uZmlnLnN0ZXAgJiYgIWNvbmZpZy5jaHVuaylcblx0XHRcdFx0Y29uZmlnQ29weS5jaHVua1NpemUgPSBudWxsOyAgLy8gZGlzYWJsZSBSYW5nZSBoZWFkZXIgaWYgbm90IHN0cmVhbWluZzsgYmFkIHZhbHVlcyBicmVhayBJSVMgLSBzZWUgaXNzdWUgIzE5NlxuXHRcdFx0dGhpcy5faGFuZGxlID0gbmV3IFBhcnNlckhhbmRsZShjb25maWdDb3B5KTtcblx0XHRcdHRoaXMuX2hhbmRsZS5zdHJlYW1lciA9IHRoaXM7XG5cdFx0XHR0aGlzLl9jb25maWcgPSBjb25maWdDb3B5O1x0Ly8gcGVyc2lzdCB0aGUgY29weSB0byB0aGUgY2FsbGVyXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBOZXR3b3JrU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmICghY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdGNvbmZpZy5jaHVua1NpemUgPSBQYXBhLlJlbW90ZUNodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciB4aHI7XG5cblx0XHRpZiAoSVNfV09SS0VSKVxuXHRcdHtcblx0XHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbih1cmwpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSB1cmw7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcdC8vIFN0YXJ0cyBzdHJlYW1pbmdcblx0XHR9O1xuXG5cdFx0dGhpcy5fcmVhZENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9maW5pc2hlZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpXG5cdFx0XHR7XG5cdFx0XHRcdHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIUlTX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHhoci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbignR0VUJywgdGhpcy5faW5wdXQsICFJU19XT1JLRVIpO1xuXHRcdFx0Ly8gSGVhZGVycyBjYW4gb25seSBiZSBzZXQgd2hlbiBvbmNlIHRoZSByZXF1ZXN0IHN0YXRlIGlzIE9QRU5FRFxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgaGVhZGVycyA9IHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO1xuXG5cdFx0XHRcdGZvciAodmFyIGhlYWRlck5hbWUgaW4gaGVhZGVycylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlcnNbaGVhZGVyTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gdGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplIC0gMTtcdC8vIG1pbnVzIG9uZSBiZWNhdXNlIGJ5dGUgcmFuZ2UgaXMgaW5jbHVzaXZlXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsICdieXRlcz0nK3RoaXMuX3N0YXJ0KyctJytlbmQpO1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignSWYtTm9uZS1NYXRjaCcsICd3ZWJraXQtbm8tY2FjaGUnKTsgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgyNjcyXG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHhoci5zZW5kKCk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoSVNfV09SS0VSICYmIHhoci5zdGF0dXMgPT09IDApXG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5fc3RhcnQgKz0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDQwMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXRoaXMuX2NvbmZpZy5jaHVua1NpemUgfHwgdGhpcy5fc3RhcnQgPiBnZXRGaWxlU2l6ZSh4aHIpO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpXG5cdFx0e1xuXHRcdFx0dmFyIGVycm9yVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8IGVycm9yTWVzc2FnZTtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihlcnJvclRleHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEZpbGVTaXplKHhocilcblx0XHR7XG5cdFx0XHR2YXIgY29udGVudFJhbmdlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVJhbmdlJyk7XG5cdFx0XHRpZiAoY29udGVudFJhbmdlID09PSBudWxsKSB7IC8vIG5vIGNvbnRlbnQgcmFuZ2UsIHRoZW4gZmluaXNoIVxuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoY29udGVudFJhbmdlLnN1YnN0cihjb250ZW50UmFuZ2UubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcblx0XHR9XG5cdH1cblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHROZXR3b3JrU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV0d29ya1N0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gRmlsZVN0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5Mb2NhbENodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciByZWFkZXIsIHNsaWNlO1xuXG5cdFx0Ly8gRmlsZVJlYWRlciBpcyBiZXR0ZXIgdGhhbiBGaWxlUmVhZGVyU3luYyAoZXZlbiBpbiB3b3JrZXIpIC0gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzI0NzA4NjQ5LzEwNDg4NjJcblx0XHQvLyBCdXQgRmlyZWZveCBpcyBhIHBpbGwsIHRvbyAtIHNlZSBpc3N1ZSAjNzY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzc2XG5cdFx0dmFyIHVzaW5nQXN5bmNSZWFkZXIgPSB0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCc7XHQvLyBTYWZhcmkgZG9lc24ndCBjb25zaWRlciBpdCBhIGZ1bmN0aW9uIC0gc2VlIGlzc3VlICMxMDVcblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24oZmlsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IGZpbGU7XG5cdFx0XHRzbGljZSA9IGZpbGUuc2xpY2UgfHwgZmlsZS53ZWJraXRTbGljZSB8fCBmaWxlLm1velNsaWNlO1xuXG5cdFx0XHRpZiAodXNpbmdBc3luY1JlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcdFx0Ly8gUHJlZmVycmVkIG1ldGhvZCBvZiByZWFkaW5nIGZpbGVzLCBldmVuIGluIHdvcmtlcnNcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHJlYWRlci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZWFkZXIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcdC8vIEhhY2sgZm9yIHJ1bm5pbmcgaW4gYSB3ZWIgd29ya2VyIGluIEZpcmVmb3hcblxuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoIXRoaXMuX2ZpbmlzaGVkICYmICghdGhpcy5fY29uZmlnLnByZXZpZXcgfHwgdGhpcy5fcm93Q291bnQgPCB0aGlzLl9jb25maWcucHJldmlldykpXG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dDtcblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gTWF0aC5taW4odGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplLCB0aGlzLl9pbnB1dC5zaXplKTtcblx0XHRcdFx0aW5wdXQgPSBzbGljZS5jYWxsKGlucHV0LCB0aGlzLl9zdGFydCwgZW5kKTtcblx0XHRcdH1cblx0XHRcdHZhciB0eHQgPSByZWFkZXIucmVhZEFzVGV4dChpbnB1dCwgdGhpcy5fY29uZmlnLmVuY29kaW5nKTtcblx0XHRcdGlmICghdXNpbmdBc3luY1JlYWRlcilcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoeyB0YXJnZXQ6IHsgcmVzdWx0OiB0eHQgfSB9KTtcdC8vIG1pbWljIHRoZSBhc3luYyBzaWduYXR1cmVcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKGV2ZW50KVxuXHRcdHtcblx0XHRcdC8vIFZlcnkgaW1wb3J0YW50IHRvIGluY3JlbWVudCBzdGFydCBlYWNoIHRpbWUgYmVmb3JlIGhhbmRsaW5nIHJlc3VsdHNcblx0XHRcdHRoaXMuX3N0YXJ0ICs9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICF0aGlzLl9jb25maWcuY2h1bmtTaXplIHx8IHRoaXMuX3N0YXJ0ID49IHRoaXMuX2lucHV0LnNpemU7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IocmVhZGVyLmVycm9yKTtcblx0XHR9XG5cblx0fVxuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdEZpbGVTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBTdHJpbmdTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgc3RyaW5nO1xuXHRcdHZhciByZW1haW5pbmc7XG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzKVxuXHRcdHtcblx0XHRcdHN0cmluZyA9IHM7XG5cdFx0XHRyZW1haW5pbmcgPSBzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX25leHRDaHVuaygpO1xuXHRcdH1cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKSByZXR1cm47XG5cdFx0XHR2YXIgc2l6ZSA9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR2YXIgY2h1bmsgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cigwLCBzaXplKSA6IHJlbWFpbmluZztcblx0XHRcdHJlbWFpbmluZyA9IHNpemUgPyByZW1haW5pbmcuc3Vic3RyKHNpemUpIDogJyc7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICFyZW1haW5pbmc7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNodW5rKGNodW5rKTtcblx0XHR9XG5cdH1cblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHR2YXIgcGFyc2VPbkRhdGEgPSB0cnVlO1xuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSBzdHJlYW07XG5cblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdkYXRhJywgdGhpcy5fc3RyZWFtRGF0YSk7XG5cdFx0XHR0aGlzLl9pbnB1dC5vbignZW5kJywgdGhpcy5fc3RyZWFtRW5kKTtcblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdlcnJvcicsIHRoaXMuX3N0cmVhbUVycm9yKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHF1ZXVlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wYXJzZUNodW5rKHF1ZXVlLnNoaWZ0KCkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRwYXJzZU9uRGF0YSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3RyZWFtRGF0YSA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHR0cnlcblx0XHRcdHtcblx0XHRcdFx0cXVldWUucHVzaCh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gY2h1bmsgOiBjaHVuay50b1N0cmluZyh0aGlzLl9jb25maWcuZW5jb2RpbmcpKTtcblxuXHRcdFx0XHRpZiAocGFyc2VPbkRhdGEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXJzZU9uRGF0YSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMucGFyc2VDaHVuayhxdWV1ZS5zaGlmdCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9zdHJlYW1FcnJvcihlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FcnJvciA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihlcnJvcilcblx0XHR7XG5cdFx0XHR0aGlzLl9zdHJlYW1DbGVhblVwKCk7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IoZXJyb3IubWVzc2FnZSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FbmQgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuX3N0cmVhbUNsZWFuVXAoKTtcblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3N0cmVhbURhdGEoJycpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5fc3RyZWFtQ2xlYW5VcCA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCB0aGlzLl9zdHJlYW1EYXRhKTtcblx0XHRcdHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKCdlbmQnLCB0aGlzLl9zdHJlYW1FbmQpO1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fc3RyZWFtRXJyb3IpO1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXG5cdC8vIFVzZSBvbmUgUGFyc2VySGFuZGxlIHBlciBlbnRpcmUgQ1NWIGZpbGUgb3Igc3RyaW5nXG5cdGZ1bmN0aW9uIFBhcnNlckhhbmRsZShfY29uZmlnKVxuXHR7XG5cdFx0Ly8gT25lIGdvYWwgaXMgdG8gbWluaW1pemUgdGhlIHVzZSBvZiByZWd1bGFyIGV4cHJlc3Npb25zLi4uXG5cdFx0dmFyIEZMT0FUID0gL15cXHMqLT8oXFxkKlxcLj9cXGQrfFxcZCtcXC4/XFxkKikoZVstK10/XFxkKyk/XFxzKiQvaTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgX3N0ZXBDb3VudGVyID0gMDtcdC8vIE51bWJlciBvZiB0aW1lcyBzdGVwIHdhcyBjYWxsZWQgKG51bWJlciBvZiByb3dzIHBhcnNlZClcblx0XHR2YXIgX2lucHV0O1x0XHRcdFx0Ly8gVGhlIGlucHV0IGJlaW5nIHBhcnNlZFxuXHRcdHZhciBfcGFyc2VyO1x0XHRcdC8vIFRoZSBjb3JlIHBhcnNlciBiZWluZyB1c2VkXG5cdFx0dmFyIF9wYXVzZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgd2UgYXJlIHBhdXNlZCBvciBub3Rcblx0XHR2YXIgX2Fib3J0ZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgdGhlIHBhcnNlciBoYXMgYWJvcnRlZCBvciBub3Rcblx0XHR2YXIgX2RlbGltaXRlckVycm9yO1x0Ly8gVGVtcG9yYXJ5IHN0YXRlIGJldHdlZW4gZGVsaW1pdGVyIGRldGVjdGlvbiBhbmQgcHJvY2Vzc2luZyByZXN1bHRzXG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcdFx0Ly8gRmllbGRzIGFyZSBmcm9tIHRoZSBoZWFkZXIgcm93IG9mIHRoZSBpbnB1dCwgaWYgdGhlcmUgaXMgb25lXG5cdFx0dmFyIF9yZXN1bHRzID0ge1x0XHQvLyBUaGUgbGFzdCByZXN1bHRzIHJldHVybmVkIGZyb20gdGhlIHBhcnNlclxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXG5cdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKSlcblx0XHR7XG5cdFx0XHR2YXIgdXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0e1xuXHRcdFx0XHRfcmVzdWx0cyA9IHJlc3VsdHM7XG5cblx0XHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdFx0ZWxzZVx0Ly8gb25seSBjYWxsIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFmdGVyIGhlYWRlciByb3dcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cblx0XHRcdFx0XHQvLyBJdCdzIHBvc3NiaWxlIHRoYXQgdGhpcyBsaW5lIHdhcyBlbXB0eSBhbmQgdGhlcmUncyBubyByb3cgaGVyZSBhZnRlciBhbGxcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YS5sZW5ndGggPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRfc3RlcENvdW50ZXIgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9zdGVwQ291bnRlciA+IF9jb25maWcucHJldmlldylcblx0XHRcdFx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR1c2VyU3RlcChfcmVzdWx0cywgc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUGFyc2VzIGlucHV0LiBNb3N0IHVzZXJzIHdvbid0IG5lZWQsIGFuZCBzaG91bGRuJ3QgbWVzcyB3aXRoLCB0aGUgYmFzZUluZGV4XG5cdFx0ICogYW5kIGlnbm9yZUxhc3RSb3cgcGFyYW1ldGVycy4gVGhleSBhcmUgdXNlZCBieSBzdHJlYW1lcnMgKHdyYXBwZXIgZnVuY3Rpb25zKVxuXHRcdCAqIHdoZW4gYW4gaW5wdXQgY29tZXMgaW4gbXVsdGlwbGUgY2h1bmtzLCBsaWtlIGZyb20gYSBmaWxlLlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KVxuXHRcdHtcblx0XHRcdGlmICghX2NvbmZpZy5uZXdsaW5lKVxuXHRcdFx0XHRfY29uZmlnLm5ld2xpbmUgPSBndWVzc0xpbmVFbmRpbmdzKGlucHV0KTtcblxuXHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHRpZiAoIV9jb25maWcuZGVsaW1pdGVyKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW1HdWVzcyA9IGd1ZXNzRGVsaW1pdGVyKGlucHV0LCBfY29uZmlnLm5ld2xpbmUsIF9jb25maWcuc2tpcEVtcHR5TGluZXMpO1xuXHRcdFx0XHRpZiAoZGVsaW1HdWVzcy5zdWNjZXNzZnVsKVxuXHRcdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gZGVsaW1HdWVzcy5iZXN0RGVsaW1pdGVyO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSB0cnVlO1x0Ly8gYWRkIGVycm9yIGFmdGVyIHBhcnNpbmcgKG90aGVyd2lzZSBpdCB3b3VsZCBiZSBvdmVyd3JpdHRlbilcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IFBhcGEuRGVmYXVsdERlbGltaXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihpc0Z1bmN0aW9uKF9jb25maWcuZGVsaW1pdGVyKSlcblx0XHRcdHtcblx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcihpbnB1dCk7XG5cdFx0XHRcdF9yZXN1bHRzLm1ldGEuZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXJzZXJDb25maWcgPSBjb3B5KF9jb25maWcpO1xuXHRcdFx0aWYgKF9jb25maWcucHJldmlldyAmJiBfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0cGFyc2VyQ29uZmlnLnByZXZpZXcrKztcdC8vIHRvIGNvbXBlbnNhdGUgZm9yIGhlYWRlciByb3dcblxuXHRcdFx0X2lucHV0ID0gaW5wdXQ7XG5cdFx0XHRfcGFyc2VyID0gbmV3IFBhcnNlcihwYXJzZXJDb25maWcpO1xuXHRcdFx0X3Jlc3VsdHMgPSBfcGFyc2VyLnBhcnNlKF9pbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KTtcblx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cdFx0XHRyZXR1cm4gX3BhdXNlZCA/IHsgbWV0YTogeyBwYXVzZWQ6IHRydWUgfSB9IDogKF9yZXN1bHRzIHx8IHsgbWV0YTogeyBwYXVzZWQ6IGZhbHNlIH0gfSk7XG5cdFx0fTtcblxuXHRcdHRoaXMucGF1c2VkID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHJldHVybiBfcGF1c2VkO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhdXNlID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9wYXVzZWQgPSB0cnVlO1xuXHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LnN1YnN0cihfcGFyc2VyLmdldENoYXJJbmRleCgpKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X3BhdXNlZCA9IGZhbHNlO1xuXHRcdFx0c2VsZi5zdHJlYW1lci5wYXJzZUNodW5rKF9pbnB1dCk7XG5cdFx0fTtcblxuXHRcdHRoaXMuYWJvcnRlZCA9IGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9hYm9ydGVkO1xuXHRcdH07XG5cblx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdF9yZXN1bHRzLm1ldGEuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKSlcblx0XHRcdFx0X2NvbmZpZy5jb21wbGV0ZShfcmVzdWx0cyk7XG5cdFx0XHRfaW5wdXQgPSAnJztcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdHMoKVxuXHRcdHtcblx0XHRcdGlmIChfcmVzdWx0cyAmJiBfZGVsaW1pdGVyRXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGFkZEVycm9yKCdEZWxpbWl0ZXInLCAnVW5kZXRlY3RhYmxlRGVsaW1pdGVyJywgJ1VuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvIFxcJycrUGFwYS5EZWZhdWx0RGVsaW1pdGVyKydcXCcnKTtcblx0XHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLnNraXBFbXB0eUxpbmVzKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aWYgKF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoID09PSAxICYmIF9yZXN1bHRzLmRhdGFbaV1bMF0gPT09ICcnKVxuXHRcdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YS5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdGZpbGxIZWFkZXJGaWVsZHMoKTtcblxuXHRcdFx0cmV0dXJuIGFwcGx5SGVhZGVyQW5kRHluYW1pY1R5cGluZygpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5lZWRzSGVhZGVyUm93KClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX2NvbmZpZy5oZWFkZXIgJiYgX2ZpZWxkcy5sZW5ndGggPT09IDA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmlsbEhlYWRlckZpZWxkcygpXG5cdFx0e1xuXHRcdFx0aWYgKCFfcmVzdWx0cylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IG5lZWRzSGVhZGVyUm93KCkgJiYgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRfZmllbGRzLnB1c2goX3Jlc3VsdHMuZGF0YVtpXVtqXSk7XG5cdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZSgwLCAxKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpIHtcblx0XHRcdC8vIENhY2hlIGZ1bmN0aW9uIHZhbHVlcyB0byBhdm9pZCBjYWxsaW5nIGl0IGZvciBlYWNoIHJvd1xuXHRcdFx0aWYgKF9jb25maWcuZHluYW1pY1R5cGluZ0Z1bmN0aW9uICYmIF9jb25maWcuZHluYW1pY1R5cGluZ1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdID0gX2NvbmZpZy5keW5hbWljVHlwaW5nRnVuY3Rpb24oZmllbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdIHx8IF9jb25maWcuZHluYW1pY1R5cGluZykgPT09IHRydWVcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKVxuXHRcdHtcblx0XHRcdGlmIChzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ1RSVUUnKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ0ZBTFNFJylcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gdHJ5UGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKClcblx0XHR7XG5cdFx0XHRpZiAoIV9yZXN1bHRzIHx8ICghX2NvbmZpZy5oZWFkZXIgJiYgIV9jb25maWcuZHluYW1pY1R5cGluZykpXG5cdFx0XHRcdHJldHVybiBfcmVzdWx0cztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93ID0gX2NvbmZpZy5oZWFkZXIgPyB7fSA6IFtdO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBmaWVsZCA9IGo7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gX3Jlc3VsdHMuZGF0YVtpXVtqXTtcblxuXHRcdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0XHRcdGZpZWxkID0gaiA+PSBfZmllbGRzLmxlbmd0aCA/ICdfX3BhcnNlZF9leHRyYScgOiBfZmllbGRzW2pdO1xuXG5cdFx0XHRcdFx0dmFsdWUgPSBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKTtcblxuXHRcdFx0XHRcdGlmIChmaWVsZCA9PT0gJ19fcGFyc2VkX2V4dHJhJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3dbZmllbGRdID0gcm93W2ZpZWxkXSB8fCBbXTtcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV0gPSByb3c7XG5cblx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGogPiBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKCdGaWVsZE1pc21hdGNoJywgJ1Rvb01hbnlGaWVsZHMnLCAnVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCAnICsgX2ZpZWxkcy5sZW5ndGggKyAnIGZpZWxkcyBidXQgcGFyc2VkICcgKyBqLCBpKTtcblx0XHRcdFx0XHRlbHNlIGlmIChqIDwgX2ZpZWxkcy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRhZGRFcnJvcignRmllbGRNaXNtYXRjaCcsICdUb29GZXdGaWVsZHMnLCAnVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkICcgKyBfZmllbGRzLmxlbmd0aCArICcgZmllbGRzIGJ1dCBwYXJzZWQgJyArIGosIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLmhlYWRlciAmJiBfcmVzdWx0cy5tZXRhKVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmZpZWxkcyA9IF9maWVsZHM7XG5cdFx0XHRyZXR1cm4gX3Jlc3VsdHM7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQsIG5ld2xpbmUsIHNraXBFbXB0eUxpbmVzKVxuXHRcdHtcblx0XHRcdHZhciBkZWxpbUNob2ljZXMgPSBbJywnLCAnXFx0JywgJ3wnLCAnOycsIFBhcGEuUkVDT1JEX1NFUCwgUGFwYS5VTklUX1NFUF07XG5cdFx0XHR2YXIgYmVzdERlbGltLCBiZXN0RGVsdGEsIGZpZWxkQ291bnRQcmV2Um93O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlbGltQ2hvaWNlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIGRlbGltID0gZGVsaW1DaG9pY2VzW2ldO1xuXHRcdFx0XHR2YXIgZGVsdGEgPSAwLCBhdmdGaWVsZENvdW50ID0gMCwgZW1wdHlMaW5lc0NvdW50ID0gMDtcblx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0dmFyIHByZXZpZXcgPSBuZXcgUGFyc2VyKHtcblx0XHRcdFx0XHRkZWxpbWl0ZXI6IGRlbGltLFxuXHRcdFx0XHRcdG5ld2xpbmU6IG5ld2xpbmUsXG5cdFx0XHRcdFx0cHJldmlldzogMTBcblx0XHRcdFx0fSkucGFyc2UoaW5wdXQpO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcHJldmlldy5kYXRhLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKHNraXBFbXB0eUxpbmVzICYmIHByZXZpZXcuZGF0YVtqXS5sZW5ndGggPT09IDEgJiYgcHJldmlldy5kYXRhW2pdWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0ZW1wdHlMaW5lc0NvdW50Kytcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBmaWVsZENvdW50ID0gcHJldmlldy5kYXRhW2pdLmxlbmd0aDtcblx0XHRcdFx0XHRhdmdGaWVsZENvdW50ICs9IGZpZWxkQ291bnQ7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIGZpZWxkQ291bnRQcmV2Um93ID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IGZpZWxkQ291bnQ7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZmllbGRDb3VudCA+IDEpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGVsdGEgKz0gTWF0aC5hYnMoZmllbGRDb3VudCAtIGZpZWxkQ291bnRQcmV2Um93KTtcblx0XHRcdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gZmllbGRDb3VudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJldmlldy5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0YXZnRmllbGRDb3VudCAvPSAocHJldmlldy5kYXRhLmxlbmd0aCAtIGVtcHR5TGluZXNDb3VudCk7XG5cblx0XHRcdFx0aWYgKCh0eXBlb2YgYmVzdERlbHRhID09PSAndW5kZWZpbmVkJyB8fCBkZWx0YSA8IGJlc3REZWx0YSlcblx0XHRcdFx0XHQmJiBhdmdGaWVsZENvdW50ID4gMS45OSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJlc3REZWx0YSA9IGRlbHRhO1xuXHRcdFx0XHRcdGJlc3REZWxpbSA9IGRlbGltO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gYmVzdERlbGltO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzZnVsOiAhIWJlc3REZWxpbSxcblx0XHRcdFx0YmVzdERlbGltaXRlcjogYmVzdERlbGltXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NMaW5lRW5kaW5ncyhpbnB1dClcblx0XHR7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnN1YnN0cigwLCAxMDI0KjEwMjQpO1x0Ly8gbWF4IGxlbmd0aCAxIE1CXG5cblx0XHRcdHZhciByID0gaW5wdXQuc3BsaXQoJ1xccicpO1xuXG5cdFx0XHR2YXIgbiA9IGlucHV0LnNwbGl0KCdcXG4nKTtcblxuXHRcdFx0dmFyIG5BcHBlYXJzRmlyc3QgPSAobi5sZW5ndGggPiAxICYmIG5bMF0ubGVuZ3RoIDwgclswXS5sZW5ndGgpO1xuXG5cdFx0XHRpZiAoci5sZW5ndGggPT09IDEgfHwgbkFwcGVhcnNGaXJzdClcblx0XHRcdFx0cmV0dXJuICdcXG4nO1xuXG5cdFx0XHR2YXIgbnVtV2l0aE4gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAocltpXVswXSA9PT0gJ1xcbicpXG5cdFx0XHRcdFx0bnVtV2l0aE4rKztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bVdpdGhOID49IHIubGVuZ3RoIC8gMiA/ICdcXHJcXG4nIDogJ1xccic7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJ5UGFyc2VGbG9hdCh2YWwpXG5cdFx0e1xuXHRcdFx0dmFyIGlzTnVtYmVyID0gRkxPQVQudGVzdCh2YWwpO1xuXHRcdFx0cmV0dXJuIGlzTnVtYmVyID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZEVycm9yKHR5cGUsIGNvZGUsIG1zZywgcm93KVxuXHRcdHtcblx0XHRcdF9yZXN1bHRzLmVycm9ycy5wdXNoKHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0Y29kZTogY29kZSxcblx0XHRcdFx0bWVzc2FnZTogbXNnLFxuXHRcdFx0XHRyb3c6IHJvd1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXHQvKiogVGhlIGNvcmUgcGFyc2VyIGltcGxlbWVudHMgc3BlZWR5IGFuZCBjb3JyZWN0IENTViBwYXJzaW5nICovXG5cdGZ1bmN0aW9uIFBhcnNlcihjb25maWcpXG5cdHtcblx0XHQvLyBVbnBhY2sgdGhlIGNvbmZpZyBvYmplY3Rcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0dmFyIGRlbGltID0gY29uZmlnLmRlbGltaXRlcjtcblx0XHR2YXIgbmV3bGluZSA9IGNvbmZpZy5uZXdsaW5lO1xuXHRcdHZhciBjb21tZW50cyA9IGNvbmZpZy5jb21tZW50cztcblx0XHR2YXIgc3RlcCA9IGNvbmZpZy5zdGVwO1xuXHRcdHZhciBwcmV2aWV3ID0gY29uZmlnLnByZXZpZXc7XG5cdFx0dmFyIGZhc3RNb2RlID0gY29uZmlnLmZhc3RNb2RlO1xuXHRcdHZhciBxdW90ZUNoYXIgPSBjb25maWcucXVvdGVDaGFyIHx8ICdcIic7XG5cblx0XHQvLyBEZWxpbWl0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmICh0eXBlb2YgZGVsaW0gIT09ICdzdHJpbmcnXG5cdFx0XHR8fCBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoZGVsaW0pID4gLTEpXG5cdFx0XHRkZWxpbSA9ICcsJztcblxuXHRcdC8vIENvbW1lbnQgY2hhcmFjdGVyIG11c3QgYmUgdmFsaWRcblx0XHRpZiAoY29tbWVudHMgPT09IGRlbGltKVxuXHRcdFx0dGhyb3cgJ0NvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyJztcblx0XHRlbHNlIGlmIChjb21tZW50cyA9PT0gdHJ1ZSlcblx0XHRcdGNvbW1lbnRzID0gJyMnO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBjb21tZW50cyAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihjb21tZW50cykgPiAtMSlcblx0XHRcdGNvbW1lbnRzID0gZmFsc2U7XG5cblx0XHQvLyBOZXdsaW5lIG11c3QgYmUgdmFsaWQ6IFxcciwgXFxuLCBvciBcXHJcXG5cblx0XHRpZiAobmV3bGluZSAhPSAnXFxuJyAmJiBuZXdsaW5lICE9ICdcXHInICYmIG5ld2xpbmUgIT0gJ1xcclxcbicpXG5cdFx0XHRuZXdsaW5lID0gJ1xcbic7XG5cblx0XHQvLyBXZSdyZSBnb25uYSBuZWVkIHRoZXNlIGF0IHRoZSBQYXJzZXIgc2NvcGVcblx0XHR2YXIgY3Vyc29yID0gMDtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0Ly8gRm9yIHNvbWUgcmVhc29uLCBpbiBDaHJvbWUsIHRoaXMgc3BlZWRzIHRoaW5ncyB1cCAoIT8pXG5cdFx0XHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJylcblx0XHRcdFx0dGhyb3cgJ0lucHV0IG11c3QgYmUgYSBzdHJpbmcnO1xuXG5cdFx0XHQvLyBXZSBkb24ndCBuZWVkIHRvIGNvbXB1dGUgc29tZSBvZiB0aGVzZSBldmVyeSB0aW1lIHBhcnNlKCkgaXMgY2FsbGVkLFxuXHRcdFx0Ly8gYnV0IGhhdmluZyB0aGVtIGluIGEgbW9yZSBsb2NhbCBzY29wZSBzZWVtcyB0byBwZXJmb3JtIGJldHRlclxuXHRcdFx0dmFyIGlucHV0TGVuID0gaW5wdXQubGVuZ3RoLFxuXHRcdFx0XHRkZWxpbUxlbiA9IGRlbGltLmxlbmd0aCxcblx0XHRcdFx0bmV3bGluZUxlbiA9IG5ld2xpbmUubGVuZ3RoLFxuXHRcdFx0XHRjb21tZW50c0xlbiA9IGNvbW1lbnRzLmxlbmd0aDtcblx0XHRcdHZhciBzdGVwSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oc3RlcCk7XG5cblx0XHRcdC8vIEVzdGFibGlzaCBzdGFydGluZyBzdGF0ZVxuXHRcdFx0Y3Vyc29yID0gMDtcblx0XHRcdHZhciBkYXRhID0gW10sIGVycm9ycyA9IFtdLCByb3cgPSBbXSwgbGFzdEN1cnNvciA9IDA7XG5cblx0XHRcdGlmICghaW5wdXQpXG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cblx0XHRcdGlmIChmYXN0TW9kZSB8fCAoZmFzdE1vZGUgIT09IGZhbHNlICYmIGlucHV0LmluZGV4T2YocXVvdGVDaGFyKSA9PT0gLTEpKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93cyA9IGlucHV0LnNwbGl0KG5ld2xpbmUpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcm93ID0gcm93c1tpXTtcblx0XHRcdFx0XHRjdXJzb3IgKz0gcm93Lmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoaSAhPT0gcm93cy5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdFx0Y3Vyc29yICs9IG5ld2xpbmUubGVuZ3RoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cuc3Vic3RyKDAsIGNvbW1lbnRzTGVuKSA9PT0gY29tbWVudHMpXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IFtdO1xuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHB1c2hSb3cocm93LnNwbGl0KGRlbGltKSk7XG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgaSA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIHByZXZpZXcpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0dmFyIG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChxdW90ZUNoYXIrcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0XHQvLyBQYXJzZXIgbG9vcFxuXHRcdFx0Zm9yICg7Oylcblx0XHRcdHtcblx0XHRcdFx0Ly8gRmllbGQgaGFzIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0aWYgKGlucHV0W2N1cnNvcl0gPT09IHF1b3RlQ2hhcilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIFN0YXJ0IG91ciBzZWFyY2ggZm9yIHRoZSBjbG9zaW5nIHF1b3RlIHdoZXJlIHRoZSBjdXJzb3IgaXNcblx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBjdXJzb3I7XG5cblx0XHRcdFx0XHQvLyBTa2lwIHRoZSBvcGVuaW5nIHF1b3RlXG5cdFx0XHRcdFx0Y3Vyc29yKys7XG5cblx0XHRcdFx0XHRmb3IgKDs7KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgY2xvc2luZyBxdW90ZVxuXHRcdFx0XHRcdFx0dmFyIHF1b3RlU2VhcmNoID0gaW5wdXQuaW5kZXhPZihxdW90ZUNoYXIsIHF1b3RlU2VhcmNoKzEpO1xuXG5cdFx0XHRcdFx0XHQvL05vIG90aGVyIHF1b3RlcyBhcmUgZm91bmQgLSBubyBvdGhlciBkZWxpbWl0ZXJzXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IC0xKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlnbm9yZUxhc3RSb3cpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBObyBjbG9zaW5nIHF1b3RlLi4uIHdoYXQgYSBwaXR5XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2RlOiAnTWlzc2luZ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4OiBjdXJzb3Jcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgYXQgRU9GXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IGlucHV0TGVuLTEpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhpcyBxdW90ZSBpcyBlc2NhcGVkLCBpdCdzIHBhcnQgb2YgdGhlIGRhdGE7IHNraXAgaXRcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gcXVvdGVDaGFyKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRxdW90ZVNlYXJjaCsrO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBkZWxpbWl0ZXJcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gZGVsaW0pXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpKTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yID0gcXVvdGVTZWFyY2ggKyAxICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBuZXdsaW5lXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXQuc3Vic3RyKHF1b3RlU2VhcmNoKzEsIG5ld2xpbmVMZW4pID09PSBuZXdsaW5lKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgcXVvdGVDaGFyKSk7XG5cdFx0XHRcdFx0XHRcdHNhdmVSb3cocXVvdGVTZWFyY2ggKyAxICsgbmV3bGluZUxlbik7XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XHQvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHNraXBwZWQgdGhlIG5leHREZWxpbSBpbiB0aGUgcXVvdGVkIGZpZWxkXG5cblx0XHRcdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgZGF0YS5sZW5ndGggPj0gcHJldmlldylcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHQvLyBDaGVja3MgZm9yIHZhbGlkIGNsb3NpbmcgcXVvdGVzIGFyZSBjb21wbGV0ZSAoZXNjYXBlZCBxdW90ZXMgb3IgcXVvdGUgZm9sbG93ZWQgYnkgRU9GL2RlbGltaXRlci9uZXdsaW5lKSAtLSBhc3N1bWUgdGhlc2UgcXVvdGVzIGFyZSBwYXJ0IG9mIGFuIGludmFsaWQgdGV4dCBzdHJpbmdcblx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdGNvZGU6ICdJbnZhbGlkUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWQnLFxuXHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0aW5kZXg6IGN1cnNvclxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHF1b3RlU2VhcmNoKys7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29tbWVudCBmb3VuZCBhdCBzdGFydCBvZiBuZXcgbGluZVxuXHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93Lmxlbmd0aCA9PT0gMCAmJiBpbnB1dC5zdWJzdHIoY3Vyc29yLCBjb21tZW50c0xlbikgPT09IGNvbW1lbnRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKG5leHROZXdsaW5lID09PSAtMSlcdC8vIENvbW1lbnQgZW5kcyBhdCBFT0Zcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0Y3Vyc29yID0gbmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuO1xuXHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBOZXh0IGRlbGltaXRlciBjb21lcyBiZWZvcmUgbmV4dCBuZXdsaW5lLCBzbyB3ZSd2ZSByZWFjaGVkIGVuZCBvZiBmaWVsZFxuXHRcdFx0XHRpZiAobmV4dERlbGltICE9PSAtMSAmJiAobmV4dERlbGltIDwgbmV4dE5ld2xpbmUgfHwgbmV4dE5ld2xpbmUgPT09IC0xKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIG5leHREZWxpbSkpO1xuXHRcdFx0XHRcdGN1cnNvciA9IG5leHREZWxpbSArIGRlbGltTGVuO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBFbmQgb2Ygcm93XG5cdFx0XHRcdGlmIChuZXh0TmV3bGluZSAhPT0gLTEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBuZXh0TmV3bGluZSkpO1xuXHRcdFx0XHRcdHNhdmVSb3cobmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuKTtcblxuXHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGRhdGEubGVuZ3RoID49IHByZXZpZXcpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblxuXHRcdFx0cmV0dXJuIGZpbmlzaCgpO1xuXG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hSb3cocm93KVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLnB1c2gocm93KTtcblx0XHRcdFx0bGFzdEN1cnNvciA9IGN1cnNvcjtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSByZW1haW5pbmcgaW5wdXQgZnJvbSBjdXJzb3IgdG8gdGhlIGVuZCBpbnRvXG5cdFx0XHQgKiByb3csIHNhdmVzIHRoZSByb3csIGNhbGxzIHN0ZXAsIGFuZCByZXR1cm5zIHRoZSByZXN1bHRzLlxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBmaW5pc2godmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpZ25vcmVMYXN0Um93KVxuXHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXQuc3Vic3RyKGN1cnNvcik7XG5cdFx0XHRcdHJvdy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y3Vyc29yID0gaW5wdXRMZW47XHQvLyBpbXBvcnRhbnQgaW4gY2FzZSBwYXJzaW5nIGlzIHBhdXNlZFxuXHRcdFx0XHRwdXNoUm93KHJvdyk7XG5cdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSBjdXJyZW50IHJvdyB0byB0aGUgcmVzdWx0cy4gSXQgc2V0cyB0aGUgY3Vyc29yXG5cdFx0XHQgKiB0byBuZXdDdXJzb3IgYW5kIGZpbmRzIHRoZSBuZXh0TmV3bGluZS4gVGhlIGNhbGxlciBzaG91bGRcblx0XHRcdCAqIHRha2UgY2FyZSB0byBleGVjdXRlIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFuZCBjaGVjayBmb3Jcblx0XHRcdCAqIHByZXZpZXcgYW5kIGVuZCBwYXJzaW5nIGlmIG5lY2Vzc2FyeS5cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gc2F2ZVJvdyhuZXdDdXJzb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnNvciA9IG5ld0N1cnNvcjtcblx0XHRcdFx0cHVzaFJvdyhyb3cpO1xuXHRcdFx0XHRyb3cgPSBbXTtcblx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSByZXN1bHRzLCBlcnJvcnMsIGFuZCBtZXRhLiAqL1xuXHRcdFx0ZnVuY3Rpb24gcmV0dXJuYWJsZShzdG9wcGVkKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0ZXJyb3JzOiBlcnJvcnMsXG5cdFx0XHRcdFx0bWV0YToge1xuXHRcdFx0XHRcdFx0ZGVsaW1pdGVyOiBkZWxpbSxcblx0XHRcdFx0XHRcdGxpbmVicmVhazogbmV3bGluZSxcblx0XHRcdFx0XHRcdGFib3J0ZWQ6IGFib3J0ZWQsXG5cdFx0XHRcdFx0XHR0cnVuY2F0ZWQ6ICEhc3RvcHBlZCxcblx0XHRcdFx0XHRcdGN1cnNvcjogbGFzdEN1cnNvciArIChiYXNlSW5kZXggfHwgMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBFeGVjdXRlcyB0aGUgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYW5kIHJlc2V0cyBkYXRhICYgZXJyb3JzLiAqL1xuXHRcdFx0ZnVuY3Rpb24gZG9TdGVwKClcblx0XHRcdHtcblx0XHRcdFx0c3RlcChyZXR1cm5hYmxlKCkpO1xuXHRcdFx0XHRkYXRhID0gW10sIGVycm9ycyA9IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKiogU2V0cyB0aGUgYWJvcnQgZmxhZyAqL1xuXHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdC8qKiBHZXRzIHRoZSBjdXJzb3IgcG9zaXRpb24gKi9cblx0XHR0aGlzLmdldENoYXJJbmRleCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gY3Vyc29yO1xuXHRcdH07XG5cdH1cblxuXG5cdC8vIElmIHlvdSBuZWVkIHRvIGxvYWQgUGFwYSBQYXJzZSBhc3luY2hyb25vdXNseSBhbmQgeW91IGFsc28gbmVlZCB3b3JrZXIgdGhyZWFkcywgaGFyZC1jb2RlXG5cdC8vIHRoZSBzY3JpcHQgcGF0aCBoZXJlLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzg3I2lzc3VlY29tbWVudC01Nzg4NTM1OFxuXHRmdW5jdGlvbiBnZXRTY3JpcHRQYXRoKClcblx0e1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdHJldHVybiBzY3JpcHRzLmxlbmd0aCA/IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMgOiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIG5ld1dvcmtlcigpXG5cdHtcblx0XHRpZiAoIVBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCFMT0FERURfU1lOQyAmJiBQYXBhLlNDUklQVF9QQVRIID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnU2NyaXB0IHBhdGggY2Fubm90IGJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSB3aGVuIFBhcGEgUGFyc2UgaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5LiAnICtcblx0XHRcdFx0J1lvdSBuZWVkIHRvIHNldCBQYXBhLlNDUklQVF9QQVRIIG1hbnVhbGx5Lidcblx0XHRcdCk7XG5cdFx0dmFyIHdvcmtlclVybCA9IFBhcGEuU0NSSVBUX1BBVEggfHwgQVVUT19TQ1JJUFRfUEFUSDtcblx0XHQvLyBBcHBlbmQgJ3BhcGF3b3JrZXInIHRvIHRoZSBzZWFyY2ggc3RyaW5nIHRvIHRlbGwgcGFwYXBhcnNlIHRoYXQgdGhpcyBpcyBvdXIgd29ya2VyLlxuXHRcdHdvcmtlclVybCArPSAod29ya2VyVXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPycpICsgJ3BhcGF3b3JrZXInO1xuXHRcdHZhciB3ID0gbmV3IGdsb2JhbC5Xb3JrZXIod29ya2VyVXJsKTtcblx0XHR3Lm9ubWVzc2FnZSA9IG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdFx0dy5pZCA9IHdvcmtlcklkQ291bnRlcisrO1xuXHRcdHdvcmtlcnNbdy5pZF0gPSB3O1xuXHRcdHJldHVybiB3O1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gbWFpbiB0aHJlYWQgcmVjZWl2ZXMgYSBtZXNzYWdlICovXG5cdGZ1bmN0aW9uIG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbbXNnLndvcmtlcklkXTtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKG1zZy5lcnJvcilcblx0XHRcdHdvcmtlci51c2VyRXJyb3IobXNnLmVycm9yLCBtc2cuZmlsZSk7XG5cdFx0ZWxzZSBpZiAobXNnLnJlc3VsdHMgJiYgbXNnLnJlc3VsdHMuZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0XHRcdGNvbXBsZXRlV29ya2VyKG1zZy53b3JrZXJJZCwgeyBkYXRhOiBbXSwgZXJyb3JzOiBbXSwgbWV0YTogeyBhYm9ydGVkOiB0cnVlIH0gfSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgaGFuZGxlID0ge1xuXHRcdFx0XHRhYm9ydDogYWJvcnQsXG5cdFx0XHRcdHBhdXNlOiBub3RJbXBsZW1lbnRlZCxcblx0XHRcdFx0cmVzdW1lOiBub3RJbXBsZW1lbnRlZFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJTdGVwKSlcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2cucmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d29ya2VyLnVzZXJTdGVwKHtcblx0XHRcdFx0XHRcdGRhdGE6IFttc2cucmVzdWx0cy5kYXRhW2ldXSxcblx0XHRcdFx0XHRcdGVycm9yczogbXNnLnJlc3VsdHMuZXJyb3JzLFxuXHRcdFx0XHRcdFx0bWV0YTogbXNnLnJlc3VsdHMubWV0YVxuXHRcdFx0XHRcdH0sIGhhbmRsZSk7XG5cdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgbXNnLnJlc3VsdHM7XHQvLyBmcmVlIG1lbW9yeSBBU0FQXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR3b3JrZXIudXNlckNodW5rKG1zZy5yZXN1bHRzLCBoYW5kbGUsIG1zZy5maWxlKTtcblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtc2cuZmluaXNoZWQgJiYgIWFib3J0ZWQpXG5cdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIG1zZy5yZXN1bHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBsZXRlV29ya2VyKHdvcmtlcklkLCByZXN1bHRzKSB7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbd29ya2VySWRdO1xuXHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ29tcGxldGUpKVxuXHRcdFx0d29ya2VyLnVzZXJDb21wbGV0ZShyZXN1bHRzKTtcblx0XHR3b3JrZXIudGVybWluYXRlKCk7XG5cdFx0ZGVsZXRlIHdvcmtlcnNbd29ya2VySWRdO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG5cdFx0dGhyb3cgJ05vdCBpbXBsZW1lbnRlZC4nO1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gd29ya2VyIHRocmVhZCByZWNlaXZlcyBhIG1lc3NhZ2UgKi9cblx0ZnVuY3Rpb24gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXG5cdFx0aWYgKHR5cGVvZiBQYXBhLldPUktFUl9JRCA9PT0gJ3VuZGVmaW5lZCcgJiYgbXNnKVxuXHRcdFx0UGFwYS5XT1JLRVJfSUQgPSBtc2cud29ya2VySWQ7XG5cblx0XHRpZiAodHlwZW9mIG1zZy5pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRyZXN1bHRzOiBQYXBhLnBhcnNlKG1zZy5pbnB1dCwgbXNnLmNvbmZpZyksXG5cdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIG1zZy5pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IG1zZy5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIHRoYW5rIHlvdSwgU2FmYXJpIChzZWUgaXNzdWUgIzEwNilcblx0XHR7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKTtcblx0XHRcdGlmIChyZXN1bHRzKVxuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBNYWtlcyBhIGRlZXAgY29weSBvZiBhbiBhcnJheSBvciBvYmplY3QgKG1vc3RseSkgKi9cblx0ZnVuY3Rpb24gY29weShvYmopXG5cdHtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdHZhciBjcHkgPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG5cdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdGNweVtrZXldID0gY29weShvYmpba2V5XSk7XG5cdFx0cmV0dXJuIGNweTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRGdW5jdGlvbihmLCBzZWxmKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBmLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpXG5cdHtcblx0XHRyZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG5cdH1cblxuXHRyZXR1cm4gUGFwYTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFnZ3JlZ2F0ZURhdGE7XG5cbnZhciBfZmlsdGVycyA9IHJlcXVpcmUoJy4vZmlsdGVycycpO1xuXG5mdW5jdGlvbiBhZ2dyZWdhdGVEYXRhKGxheWVyRGF0YSwgbG9jYXRpb25zLCBmaWx0ZXJPcHRpb25zKSB7XG4gIHZhciBkYXRhID0gbGF5ZXJEYXRhLm1lcmdlZERhdGE7XG4gIHZhciBhZ2dyZWdhdGVkRGF0YSA9IFtdO1xuICAvLyBtZXJnZSBPU00gSWRzXG4gIGlmIChsYXllckRhdGFbJ21lcmdlLWxvY2F0aW9ucyddKSB7XG4gICAgZGF0YS5tYXAoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICB2YXIgcm93ID0gZGF0dW07XG4gICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgIC8vIGFkZCBkaXN0cmljdF9pZCBpZiBub3QgZGVmaW5lZFxuICAgICAgICByb3cuZGlzdHJpY3RfaWQgPSBsb2NhdGlvbnNbZGF0dW0uRGlzdHJpY3RdO1xuICAgICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgICAgLy8gVXNlIGFsdGVybmF0aXZlIGRpc3RyaWN0IGZpZWxkXG4gICAgICAgICAgcm93LmRpc3RyaWN0X2lkID0gbG9jYXRpb25zW2RhdHVtWydzdXJ2ZXlfaW50cm8vRGlzdHJpY3RfbWlzcyddXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgICAgLy8gVXNlIGFsdGVybmF0aXZlIHJlZ2lvbiBtaXNzIGZpZWxkXG4gICAgICAgICAgcm93LmRpc3RyaWN0X2lkID0gbG9jYXRpb25zW2RhdHVtWydzdXJ2ZXlfaW50cm8vUmVnaW9uX21pc3MnXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3c7XG4gICAgfSk7XG4gIH1cblxuICBsYXllckRhdGEubWVyZ2VkRGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXR1bSkge1xuICAgIHJldHVybiBkYXR1bS5kaXN0cmljdF9pZCAhPT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICAvLyBQcm9jZXNzIGZpbHRlcnMgd2l0aCBmaWx0ZXJPcHRpb25zXG4gIGRhdGEgPSAoMCwgX2ZpbHRlcnMucHJvY2Vzc0ZpbHRlcnMpKGxheWVyRGF0YSwgZmlsdGVyT3B0aW9ucyk7XG4gIC8vIGFnZ3JlZ2F0ZSByYXcgZGF0YVxuICBhZ2dyZWdhdGVkRGF0YSA9IG1pbGlhLnN0YXRzLmFnZ3JlZ2F0ZV9kYXRhKGRhdGEsIGxheWVyRGF0YS5wcm9wZXJ0eSwgbGF5ZXJEYXRhLmFnZ3JlZ2F0ZSk7XG5cbiAgcmV0dXJuIGFnZ3JlZ2F0ZWREYXRhO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2FnZ3JlZ2F0ZURhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmZXRjaEZvcm1EYXRhO1xudmFyIHByb3RvY29sID0gJ2h0dHBzJztcbnZhciBob3N0ID0gJ2FwaS5vbmEuaW8nO1xuXG5mdW5jdGlvbiBmZXRjaEZvcm1EYXRhKGRhdGFzZXRJRCwgcHJvcGVydGllcywgY2FsbGJhY2spIHtcbiAgdmFyIGZpZWxkcyA9IHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuICdcIicgKyBwICsgJ1wiJztcbiAgfSkuam9pbigpO1xuICB2YXIgcXVlcnlQYXJhbXMgPSB7IGZpZWxkczogJ1snICsgZmllbGRzICsgJ10nIH07XG4gIG1pbGlhLndyYXBwZXIuc2V0X2hvc3QocHJvdG9jb2wsIGhvc3QpO1xuICBtaWxpYS53cmFwcGVyLmdldF9mb3JtX2RhdGEoZGF0YXNldElELCBxdWVyeVBhcmFtcyxcbiAgLy8gIHNlbGYucHJvcHMubWFwQ29uZmlnLmFwaUFjY2Vzc1Rva2VuLCAvLyBnZXQgQVBJIGFjY2VzcyB0b2tlbiBmcm9tIHN0YXRlXG4gIGNhbGxiYWNrKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy91dGlscy9mZXRjaEZvcm1EYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTGF5ZXI7XG5cbnZhciBfc29ydExheWVycyA9IHJlcXVpcmUoJy4vc29ydExheWVycycpO1xuXG52YXIgX3NvcnRMYXllcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydExheWVycyk7XG5cbnZhciBfYnVpbGRUaW1lc2VyaWVzRGF0YSA9IHJlcXVpcmUoJy4vYnVpbGRUaW1lc2VyaWVzRGF0YScpO1xuXG52YXIgX2J1aWxkVGltZXNlcmllc0RhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGRUaW1lc2VyaWVzRGF0YSk7XG5cbnZhciBfZ2VuZXJhdGVTdG9wcyA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVTdG9wcycpO1xuXG52YXIgX2dlbmVyYXRlU3RvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVTdG9wcyk7XG5cbnZhciBfYWRkQ2hhcnQgPSByZXF1aXJlKCcuL2FkZENoYXJ0Jyk7XG5cbnZhciBfYWRkQ2hhcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkQ2hhcnQpO1xuXG52YXIgX2FkZExlZ2VuZCA9IHJlcXVpcmUoJy4vYWRkTGVnZW5kJyk7XG5cbnZhciBfYWRkTGVnZW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZExlZ2VuZCk7XG5cbnZhciBfYWRkTGFiZWxzID0gcmVxdWlyZSgnLi9hZGRMYWJlbHMnKTtcblxudmFyIF9hZGRMYWJlbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkTGFiZWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIGFkZExheWVyKG1hcCwgbGF5ZXIsIG1hcENvbmZpZykge1xuICB2YXIgdGltZWZpZWxkID0gbGF5ZXIuYWdncmVnYXRlICYmIGxheWVyLmFnZ3JlZ2F0ZS50aW1lc2VyaWVzID8gbGF5ZXIuYWdncmVnYXRlLnRpbWVzZXJpZXMuZmllbGQgOiAnJztcbiAgdmFyIHN0b3BzID0gdm9pZCAwO1xuICB2YXIgbmV3U3RvcHMgPSB2b2lkIDA7XG4gIHZhciBjaXJjbGVMYXllciA9IHZvaWQgMDtcbiAgdmFyIGZpbGxMYXllciA9IHZvaWQgMDtcbiAgdmFyIGxpbmVMYXllciA9IHZvaWQgMDtcbiAgdmFyIHN5bWJvbExheWVyID0gdm9pZCAwO1xuXG4gIGlmIChsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbGF5ZXJPYmogPSBsYXllcjtcbiAgaWYgKHR5cGVvZiBsYXllck9iai5pc0NoYXJ0TWluID09PSAndW5kZWZpbmVkJykge1xuICAgIGxheWVyT2JqLmlzQ2hhcnRNaW4gPSB0cnVlO1xuICAgIGxheWVyT2JqLmxlZ2VuZEJvdHRvbSA9IDQwO1xuICB9XG5cbiAgaWYgKGxheWVyLnByb3BlcnR5KSB7XG4gICAgc3RvcHMgPSAoMCwgX2dlbmVyYXRlU3RvcHMyLmRlZmF1bHQpKGxheWVyLCB0aW1lZmllbGQpO1xuICB9XG5cbiAgaWYgKHN0b3BzKSB7XG4gICAgbmV3U3RvcHMgPSB7IHN0b3BzOiBzdG9wcywgaWQ6IGxheWVyLmlkIH07XG4gICAgdmFyIGNvbG9yU3RvcHMgPSB0aW1lZmllbGQgPyBzdG9wc1swXVtzdG9wc1swXS5sZW5ndGggLSAxXSA6IHN0b3BzWzBdWzBdO1xuICAgIHZhciByYWRpdXNTdG9wcyA9IHN0b3BzWzFdWzBdO1xuICAgIHZhciBzdG9wc0RhdGEgPSBsYXllci50eXBlID09PSAnY2lyY2xlJyA/IHJhZGl1c1N0b3BzIDogY29sb3JTdG9wcztcbiAgICB2YXIgYnJlYWtzID0gc3RvcHNbM107XG4gICAgdmFyIGNvbG9ycyA9IHN0b3BzWzRdO1xuICAgIHZhciBjdXJyUGVyaW9kID0gc3RvcHNbMl1bc3RvcHNbMl0ubGVuZ3RoIC0gMV07XG4gICAgdmFyIGN1cnJEYXRhID0gbGF5ZXIuc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YVt0aW1lZmllbGRdID09PSBjdXJyUGVyaW9kO1xuICAgIH0pO1xuICAgIHZhciBEYXRhID0gdGltZWZpZWxkID8gY3VyckRhdGEgOiBsYXllci5zb3VyY2UuZGF0YTtcblxuICAgICgwLCBfYWRkTGVnZW5kMi5kZWZhdWx0KShsYXllciwgc3RvcHNEYXRhLCBEYXRhLCBicmVha3MsIGNvbG9ycyk7XG4gICAgKDAsIF9hZGRMYWJlbHMyLmRlZmF1bHQpKG1hcCwgbGF5ZXIsIERhdGEpO1xuICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci5jYXRlZ29yaWVzICYmIGxheWVyLmNhdGVnb3JpZXMuYnJlYWtzID09PSAnbm8nKSB7XG4gICAgKDAsIF9hZGRMZWdlbmQyLmRlZmF1bHQpKGxheWVyKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcubGVnZW5kLXJvdy5wcmltYXJ5JykucmVtb3ZlQ2xhc3MoJ3ByaW1hcnknKTtcbiAgfVxuXG4gIC8qXG4gICAqIENJUkNMRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBpZiAobGF5ZXIudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICBjaXJjbGVMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICB0eXBlOiBsYXllci5zb3VyY2UudHlwZVxuICAgICAgfSxcbiAgICAgIGxheW91dDoge30sXG4gICAgICBwYWludDoge1xuICAgICAgICAnY2lyY2xlLWNvbG9yJzogbGF5ZXIuY2F0ZWdvcmllcy5jb2xvciBpbnN0YW5jZW9mIEFycmF5ICYmICFsYXllci5wYWludCA/IHtcbiAgICAgICAgICBwcm9wZXJ0eTogbGF5ZXIuc291cmNlLmpvaW5bMF0sXG4gICAgICAgICAgc3RvcHM6IHRpbWVmaWVsZCA/IHN0b3BzWzBdW3N0b3BzWzBdLmxlbmd0aCAtIDFdIDogc3RvcHNbMF1bMF0sXG4gICAgICAgICAgdHlwZTogJ2NhdGVnb3JpY2FsJ1xuICAgICAgICB9IDogbGF5ZXIuY2F0ZWdvcmllcy5jb2xvcixcbiAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogMC44LFxuICAgICAgICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICcjZmZmJyxcbiAgICAgICAgJ2NpcmNsZS1zdHJva2Utd2lkdGgnOiBsYXllci5jYXRlZ29yaWVzLmNvbG9yIGluc3RhbmNlb2YgQXJyYXkgJiYgIWxheWVyLnBhaW50ID8ge1xuICAgICAgICAgIHByb3BlcnR5OiBsYXllci5zb3VyY2Uuam9pblswXSxcbiAgICAgICAgICBzdG9wczogdGltZWZpZWxkID8gc3RvcHNbNV1bc3RvcHNbNV0ubGVuZ3RoIC0gMV0gOiBzdG9wc1s1XVswXSxcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSA6IDEsXG4gICAgICAgICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknOiAxXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIG92ZXJyaWRlIGZyb20gbGF5ZXJzLmpzb25cbiAgICBpZiAobGF5ZXIucGFpbnQpIHtcbiAgICAgIGNpcmNsZUxheWVyLnBhaW50ID0gbGF5ZXIucGFpbnQ7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyLnNvdXJjZS5taW56b29tKSB7XG4gICAgICBjaXJjbGVMYXllci5taW56b29tID0gbGF5ZXIuc291cmNlLm1pbnpvb207XG4gICAgfVxuICAgIGlmIChsYXllci5zb3VyY2UubWF4em9vbSkge1xuICAgICAgY2lyY2xlTGF5ZXIubWF4em9vbSA9IGxheWVyLnNvdXJjZS5tYXh6b29tO1xuICAgIH1cblxuICAgIGlmIChsYXllci5zb3VyY2UuZGF0YSkge1xuICAgICAgaWYgKGxheWVyLnNvdXJjZS50eXBlID09PSAndmVjdG9yJykge1xuICAgICAgICB2YXIgbGF5ZXJTdG9wcyA9IHN0b3BzID8gdGltZWZpZWxkID8gc3RvcHNbMV1bc3RvcHNbMV0ubGVuZ3RoIC0gMV0gOiBzdG9wc1sxXVswXSA6IFtbMCwgMF1dO1xuICAgICAgICBjaXJjbGVMYXllci5wYWludFsnY2lyY2xlLXJhZGl1cyddID0ge1xuICAgICAgICAgIHByb3BlcnR5OiBsYXllci5zb3VyY2Uuam9pblswXSxcbiAgICAgICAgICBzdG9wczogbGF5ZXJTdG9wcyxcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxuICAgICAgICAgIGRlZmF1bHQ6IHN0b3BzID8gMCA6IDNcbiAgICAgICAgfTtcbiAgICAgICAgY2lyY2xlTGF5ZXIuc291cmNlLnVybCA9IGxheWVyLnNvdXJjZS51cmw7XG4gICAgICAgIGNpcmNsZUxheWVyWydzb3VyY2UtbGF5ZXInXSA9IGxheWVyLnNvdXJjZS5sYXllcjtcbiAgICAgIH0gZWxzZSBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgICBpZiAoc3RvcHMpIHtcbiAgICAgICAgICBjaXJjbGVMYXllci5wYWludFsnY2lyY2xlLXJhZGl1cyddID0ge1xuICAgICAgICAgICAgcHJvcGVydHk6IGxheWVyLnNvdXJjZS5qb2luWzBdLFxuICAgICAgICAgICAgc3RvcHM6IHN0b3BzWzFdWzBdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjaXJjbGVMYXllci5zb3VyY2UuZGF0YSA9IGxheWVyLnNvdXJjZS5kYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgZmlsdGVyXG4gICAgaWYgKGxheWVyLmZpbHRlcikge1xuICAgICAgY2lyY2xlTGF5ZXIuZmlsdGVyID0gbGF5ZXIuZmlsdGVyO1xuICAgIH1cblxuICAgIGlmICghbWFwLmdldExheWVyKGNpcmNsZUxheWVyLmlkKSkgbWFwLmFkZExheWVyKGNpcmNsZUxheWVyKTtcbiAgICBpZiAobWFwLmdldExheWVyKGNpcmNsZUxheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KGNpcmNsZUxheWVyLmlkLCAndmlzaWJpbGl0eScsIGNpcmNsZUxheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEZJTEwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgaWYgKGxheWVyLnR5cGUgPT09ICdmaWxsJykge1xuICAgIGZpbGxMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICB0eXBlOiAnZmlsbCcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogbGF5ZXIuc291cmNlLnR5cGVcbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IHt9LFxuICAgICAgcGFpbnQ6IHtcbiAgICAgICAgJ2ZpbGwtY29sb3InOiAnI2YwMCcsXG4gICAgICAgICdmaWxsLW9wYWNpdHknOiAwLjdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBsYXllcnMuanNvblxuICAgIGlmIChsYXllci5wYWludCkge1xuICAgICAgZmlsbExheWVyLnBhaW50ID0gbGF5ZXIucGFpbnQ7XG4gICAgfVxuICAgIGlmIChsYXllci5zb3VyY2UubWluem9vbSkge1xuICAgICAgZmlsbExheWVyLm1pbnpvb20gPSBsYXllci5zb3VyY2UubWluem9vbTtcbiAgICB9XG4gICAgaWYgKGxheWVyLm1heHpvb20pIHtcbiAgICAgIGZpbGxMYXllci5tYXh6b29tID0gbGF5ZXIubWF4em9vbTtcbiAgICB9XG5cbiAgICBpZiAoIWxheWVyWyduby1vdXRsaW5lJ10pIHtcbiAgICAgIGZpbGxMYXllci5wYWludFsnZmlsbC1vdXRsaW5lLWNvbG9yJ10gPSAnI2ZmZic7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyLnNvdXJjZS50eXBlID09PSAnZ2VvanNvbicpIHtcbiAgICAgIGZpbGxMYXllci5zb3VyY2UuZGF0YSA9IGxheWVyLnNvdXJjZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxsTGF5ZXIuc291cmNlLnVybCA9IGxheWVyLnNvdXJjZS51cmw7XG4gICAgICBmaWxsTGF5ZXJbJ3NvdXJjZS1sYXllciddID0gbGF5ZXIuc291cmNlLmxheWVyO1xuICAgIH1cblxuICAgIGlmIChsYXllci5zb3VyY2UuZGF0YSAmJiAhbGF5ZXIucGFpbnQpIHtcbiAgICAgIHZhciBfbGF5ZXJTdG9wcyA9IHRpbWVmaWVsZCA/IHN0b3BzWzBdW3N0b3BzWzFdLmxlbmd0aCAtIDFdIDogc3RvcHNbMF1bMF07XG5cbiAgICAgIGZpbGxMYXllci5wYWludFsnZmlsbC1jb2xvciddID0ge1xuICAgICAgICBwcm9wZXJ0eTogbGF5ZXIuc291cmNlLmpvaW5bMF0sXG4gICAgICAgIHN0b3BzOiBfbGF5ZXJTdG9wcyxcbiAgICAgICAgdHlwZTogJ2NhdGVnb3JpY2FsJyxcbiAgICAgICAgZGVmYXVsdDogJ3JnYmEoMCwwLDAsMCknXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBhZGQgZmlsdGVyXG4gICAgaWYgKGxheWVyLmZpbHRlcikge1xuICAgICAgZmlsbExheWVyLmZpbHRlciA9IGxheWVyLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIW1hcC5nZXRMYXllcihmaWxsTGF5ZXIuaWQpKSBtYXAuYWRkTGF5ZXIoZmlsbExheWVyKTtcbiAgICBpZiAobWFwLmdldExheWVyKGZpbGxMYXllci5pZCkpIHtcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShmaWxsTGF5ZXIuaWQsICd2aXNpYmlsaXR5JywgZmlsbExheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIExJTkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgaWYgKGxheWVyLnR5cGUgPT09ICdsaW5lJykge1xuICAgIGxpbmVMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogbGF5ZXIuc291cmNlLnR5cGVcbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IHt9LFxuICAgICAgcGFpbnQ6IHtcbiAgICAgICAgJ2xpbmUtY29sb3InOiAnI2YwMCcsXG4gICAgICAgICdsaW5lLXdpZHRoJzogMVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxheWVyLnBhaW50KSB7XG4gICAgICBsaW5lTGF5ZXIucGFpbnQgPSBsYXllci5wYWludDtcbiAgICB9XG4gICAgaWYgKGxheWVyLnNvdXJjZS5taW56b29tKSB7XG4gICAgICBsaW5lTGF5ZXIubWluem9vbSA9IGxheWVyLnNvdXJjZS5taW56b29tO1xuICAgIH1cbiAgICBpZiAobGF5ZXIubWF4em9vbSkge1xuICAgICAgbGluZUxheWVyLm1heHpvb20gPSBsYXllci5tYXh6b29tO1xuICAgIH1cbiAgICBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgbGluZUxheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVMYXllci5zb3VyY2UudXJsID0gbGF5ZXIuc291cmNlLnVybDtcbiAgICAgIGxpbmVMYXllclsnc291cmNlLWxheWVyJ10gPSBsYXllci5zb3VyY2UubGF5ZXI7XG4gICAgfVxuICAgIGlmICghbWFwLmdldExheWVyKGxpbmVMYXllci5pZCkpIG1hcC5hZGRMYXllcihsaW5lTGF5ZXIpO1xuICAgIGlmIChtYXAuZ2V0TGF5ZXIobGluZUxheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KGxpbmVMYXllci5pZCwgJ3Zpc2liaWxpdHknLCBsaW5lTGF5ZXIudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU1lNQk9MID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG4gIGlmIChsYXllci50eXBlID09PSAnc3ltYm9sJykge1xuICAgIHN5bWJvbExheWVyID0ge1xuICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHR5cGU6IGxheWVyLnNvdXJjZS50eXBlXG4gICAgICB9LFxuICAgICAgbWluem9vbTogbGF5ZXIuc291cmNlLm1pbnpvb20gPyBsYXllci5zb3VyY2UubWluem9vbSA6IG1hcENvbmZpZy56b29tLFxuICAgICAgbWF4em9vbTogbGF5ZXIuc291cmNlLm1heHpvb20gPyBsYXllci5zb3VyY2UubWF4em9vbSA6IDIyLFxuICAgICAgbGF5b3V0OiBsYXllci5sYXlvdXQsXG4gICAgICBwYWludDogbGF5ZXIucGFpbnRcbiAgICB9O1xuXG4gICAgLy8gYWRkIGZpbHRlclxuICAgIGlmIChsYXllci5maWx0ZXIpIHtcbiAgICAgIHN5bWJvbExheWVyLmZpbHRlciA9IGxheWVyLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgaWYgKGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzICYmIGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzWzBdICYmIGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XG4gICAgICAgIHN5bWJvbExheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgICB9IGVsc2UgaWYgKGxheWVyLnByb3BlcnRpZXMgJiYgbGF5ZXIucHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgc3ltYm9sTGF5ZXIuc291cmNlLmRhdGEgPSB7XG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICBmZWF0dXJlczogbGF5ZXIuc291cmNlLmRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllc01hcCA9IHt9O1xuICAgICAgICAgICAgbGF5ZXIucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXNNYXBbcHJvcF0gPSBpc05hTihkW3Byb3BdKSA/IGRbcHJvcF0gOiBOdW1iZXIoZFtwcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc01hcCxcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbTnVtYmVyKGQuTG9uZ2l0dWRlKSwgTnVtYmVyKGQuTGF0aXR1ZGUpXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bWJvbExheWVyLnNvdXJjZS51cmwgPSBsYXllci5zb3VyY2UudXJsO1xuICAgICAgc3ltYm9sTGF5ZXJbJ3NvdXJjZS1sYXllciddID0gbGF5ZXIuc291cmNlLmxheWVyO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzICYmIGxheWVyLmNhdGVnb3JpZXMuc2hhcGUpIHtcbiAgICAgIHZhciBpY29uU3RvcHMgPSBbXTtcbiAgICAgIGxheWVyLmNhdGVnb3JpZXMudHlwZS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlLCBpbmRleCkge1xuICAgICAgICBpY29uU3RvcHMucHVzaChbdHlwZSwgbGF5ZXIuY2F0ZWdvcmllcy5zaGFwZVtpbmRleF1dKTtcbiAgICAgIH0pO1xuICAgICAgc3ltYm9sTGF5ZXIubGF5b3V0WydpY29uLWltYWdlJ10uc3RvcHMgPSBpY29uU3RvcHM7XG4gICAgfVxuXG4gICAgaWYgKCFtYXAuZ2V0TGF5ZXIoc3ltYm9sTGF5ZXIuaWQpKSB7XG4gICAgICBpZiAobGF5ZXJbJ2hpZ2hsaWdodC1sYXlvdXQnXSB8fCBsYXllclsnaGlnaGxpZ2h0LXBhaW50J10pIHtcbiAgICAgICAgdmFyIGhpZ2hsaWdodExheWVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3ltYm9sTGF5ZXIpO1xuXG4gICAgICAgIGlmIChsYXllclsnaGlnaGxpZ2h0LWxheW91dCddKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0TGF5ZXIubGF5b3V0ID0gT2JqZWN0LmFzc2lnbih7fSwgaGlnaGxpZ2h0TGF5ZXIubGF5b3V0LCBsYXllclsnaGlnaGxpZ2h0LWxheW91dCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXJbJ2hpZ2hsaWdodC1wYWludCddKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0TGF5ZXIucGFpbnQgPSBPYmplY3QuYXNzaWduKHt9LCBoaWdobGlnaHRMYXllci5wYWludCwgbGF5ZXJbJ2hpZ2hsaWdodC1wYWludCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZ2hsaWdodExheWVyLmlkICs9ICctaGlnaGxpZ2h0JztcbiAgICAgICAgaGlnaGxpZ2h0TGF5ZXIuZmlsdGVyID0gWyc9PScsICdGaXhlZCBTaXRlIFVuaXF1ZSBJRCcsICcnXTtcbiAgICAgICAgbWFwLmFkZExheWVyKGhpZ2hsaWdodExheWVyKTtcblxuICAgICAgICBzeW1ib2xMYXllci5maWx0ZXIgPSBbJyE9JywgJ0ZpeGVkIFNpdGUgVW5pcXVlIElEJywgJyddO1xuICAgICAgfVxuXG4gICAgICBtYXAuYWRkTGF5ZXIoc3ltYm9sTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAobWFwLmdldExheWVyKHN5bWJvbExheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KHN5bWJvbExheWVyLmlkLCAndmlzaWJpbGl0eScsIHN5bWJvbExheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuICAvKlxuICAgKiBDSEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBpZiAobGF5ZXIudHlwZSA9PT0gJ2NoYXJ0Jykge1xuICAgIHZhciBkYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgaWYgKHRpbWVmaWVsZCkge1xuICAgICAgdmFyIHBlcmlvZCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChsYXllci5zb3VyY2UuZGF0YS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHBbdGltZWZpZWxkXTtcbiAgICAgIH0pKSkpO1xuICAgICAgbmV3U3RvcHMgPSB7IGlkOiBsYXllci5pZCwgcGVyaW9kOiBwZXJpb2QsIHRpbWVmaWVsZDogdGltZWZpZWxkIH07XG4gICAgICBkYXRhID0gbGF5ZXIuc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW3RpbWVmaWVsZF0gPT09IHBlcmlvZFtwZXJpb2QubGVuZ3RoIC0gMV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgKDAsIF9hZGRDaGFydDIuZGVmYXVsdCkobGF5ZXIsIGRhdGEpO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgbGF5ZXJzT2JqXG4gIC8vIGxldCBsYXllcnNPYmogPSBbXTtcbiAgLy8gZm9yIChsZXQgbG8gPSAwOyBsbyA8IHRoaXMuc3RhdGUubGF5ZXJzT2JqLmxlbmd0aDsgbG8gKz0gMSkge1xuICAvLyAgIGlmICh0aGlzLnN0YXRlLmxheWVyc09ialtsb10uaWQgIT09IGxheWVyLmlkKSB7XG4gIC8vICAgICBsYXllcnNPYmoucHVzaCh0aGlzLnN0YXRlLmxheWVyc09ialtsb10pO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBsYXllcnNPYmoucHVzaChsYXllcik7XG5cblxuICAvLyBzb3J0IHRoZSBsYXllcnNcbiAgLy8gc29ydExheWVycygpO1xuXG4gIC8vIGRpc2FsbG93IG11bHRpcGxlIGZpbGwgbGF5ZXJzIG9uIHRoZSBtYXAgKHRvZG8gLSBjb252ZXJ0IGZpbHRlcnMgdG8gbmVzdGVkIGZvciBsb29wcylcbiAgLy8gbGV0IGlkO1xuICAvLyBjb25zdCBmaWx0ZXJMYXllck9ianMgPSBsbyA9PiBsby5pZCAhPT0gaWQ7XG4gIC8vIGNvbnN0IGZpbHRlckFjdGl2ZUxheWVycyA9IGxvID0+IGxvICE9PSBpZDtcbiAgLy8gZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLnN0YXRlLmxheWVyc09iai5sZW5ndGg7IGwgKz0gMSkge1xuICAvLyAgIGlmICh0aGlzLnN0YXRlLmxheWVyc09ialtsXS50eXBlID09PSAnZmlsbCcpIHtcbiAgLy8gICAgIGlkID0gdGhpcy5zdGF0ZS5sYXllcnNPYmpbbF0uaWQ7XG4gIC8vICAgICBpZiAobWFwLmdldExheWVyKGlkKSkge1xuICAvLyAgICAgICBtYXAucmVtb3ZlTGF5ZXIoaWQpO1xuICAvLyAgICAgICBpZiAobWFwLmdldFNvdXJjZShpZCkpIHtcbiAgLy8gICAgICAgICBtYXAucmVtb3ZlU291cmNlKGlkKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICB0aGlzLnJlbW92ZUxhYmVscyh0aGlzLnN0YXRlLmxheWVyc09ialtsXSk7XG4gIC8vICAgICAgIHRoaXMucmVtb3ZlTGVnZW5kKHRoaXMuc3RhdGUubGF5ZXJzT2JqW2xdKTtcbiAgLy8gICAgICAgbGF5ZXJzT2JqID0gbGF5ZXJzT2JqLmZpbHRlcihmaWx0ZXJMYXllck9ianMpO1xuICAvLyAgICAgICBzZWxmLmFjdGl2ZUxheWVycyA9IHNlbGYuYWN0aXZlTGF5ZXJzLmZpbHRlcihmaWx0ZXJBY3RpdmVMYXllcnMpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGNvbnN0IHRpbWVzZXJpZXNNYXAgPSBidWlsZFRpbWVzZXJpZXNEYXRhKG5ld1N0b3BzKTtcbiAgLy8gaWYgKHRpbWVzZXJpZXNNYXBbbGF5ZXIuaWRdKSB7XG4gIC8vICAgbGV0IG1iTGF5ZXI7XG4gIC8vICAgc3dpdGNoIChsYXllci50eXBlKSB7XG4gIC8vICAgICBjYXNlICdjaXJjbGUnOlxuICAvLyAgICAgICBtYkxheWVyID0gY2lyY2xlTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnZmlsbCc6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBmaWxsTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnbGluZSc6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBsaW5lTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnc3ltYm9sJzpcbiAgLy8gICAgICAgbWJMYXllciA9IHN5bWJvbExheWVyO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBudWxsO1xuICAvLyAgIH1cbiAgLy8gICB0aW1lc2VyaWVzTWFwW2xheWVyLmlkXS5tYXBCb3hMYXllciA9IG1iTGF5ZXI7XG4gIC8vIH1cblxuICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICBsYXllck9iaixcbiAgLy8gICBsYXllcnNPYmosXG4gIC8vICAgc3RvcHM6IG5ld1N0b3BzLFxuICAvLyAgIHRpbWVzZXJpZXM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudGltZXNlcmllcywgdGltZXNlcmllc01hcCksXG4gIC8vIH0pO1xuXG4gIHJldHVybiBtYXA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExheWVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc29ydExheWVycztcbmZ1bmN0aW9uIHNvcnRMYXllcnMobWFwLCBsYXllcnMpIHtcbiAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAobGF5ZXJzW2tleV0udHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBpZiAobWFwLmdldExheWVyKGtleSkpIHtcbiAgICAgICAgbWFwLm1vdmVMYXllcihrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAobGF5ZXJzW2tleV0udHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGlmIChtYXAuZ2V0TGF5ZXIoa2V5KSkge1xuICAgICAgICBtYXAubW92ZUxheWVyKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBPYmplY3Qua2V5cyhsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChsYXllcnNba2V5XS50eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgaWYgKG1hcC5nZXRMYXllcihrZXkpKSB7XG4gICAgICAgIG1hcC5tb3ZlTGF5ZXIoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL21hcC9zb3J0TGF5ZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRUaW1lc2VyaWVzRGF0YTtcbmZ1bmN0aW9uIGJ1aWxkVGltZXNlcmllc0RhdGEoU3RvcHMpIHtcbiAgdmFyIHRpbWVTZXJpZXNMYXllcnMgPSB0aGlzLmdldFNsaWRlckxheWVycygpO1xuICB2YXIgYWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5sYXllcnMubWFwKGZ1bmN0aW9uIChsYXllcikge1xuICAgIHJldHVybiBsYXllci50aXRsZTtcbiAgfSk7XG4gIHZhciB0aW1lc2VyaWVzTWFwID0ge307XG5cbiAgdmFyIGxheWVySWQgPSB2b2lkIDA7XG4gIHZhciBpbmRleCA9IHZvaWQgMDtcbiAgdmFyIGxheWVyT2JqID0gdm9pZCAwO1xuICB2YXIgdGVtcG9yYWxJbmRleCA9IHZvaWQgMDtcbiAgdmFyIGRhdGEgPSB2b2lkIDA7XG4gIHZhciBsYXllclByb3BlcnR5ID0gdm9pZCAwO1xuICB2YXIgcGVyaW9kRGF0YSA9IHZvaWQgMDtcbiAgdmFyIGNoYXJ0cyA9IHZvaWQgMDtcblxuICB2YXIgcGVyaW9kID0gdm9pZCAwO1xuICB2YXIgY29sb3JTdG9wcyA9IHZvaWQgMDtcbiAgdmFyIHJhZGl1c1N0b3BzID0gdm9pZCAwO1xuICB2YXIgYnJlYWtzID0gdm9pZCAwO1xuICB2YXIgY29sb3JzID0gdm9pZCAwO1xuICB2YXIgc3RvcHMgPSBTdG9wcztcbiAgdmFyIHN0cm9rZVdpZHRoU3RvcHMgPSB2b2lkIDA7XG5cbiAgdmFyIGNoYXJ0RGF0YUZpbHRlciA9IGZ1bmN0aW9uIGNoYXJ0RGF0YUZpbHRlcihkKSB7XG4gICAgcmV0dXJuIGRbc3RvcHMudGltZWZpZWxkXSA9PT0gcGVyaW9kW3RlbXBvcmFsSW5kZXhdO1xuICB9O1xuICB2YXIgcGVyaW9kSGFzRGF0YVJlZHVjZXIgPSBmdW5jdGlvbiBwZXJpb2RIYXNEYXRhUmVkdWNlcihzdW0sIGQpIHtcbiAgICByZXR1cm4gc3VtICsgTnVtYmVyKGRbbGF5ZXJQcm9wZXJ0eV0pO1xuICB9O1xuICB2YXIgcGVyaW9kRGF0YUZpbHRlciA9IGZ1bmN0aW9uIHBlcmlvZERhdGFGaWx0ZXIocCkge1xuICAgIC8vIGRlZmluZSBhY3R1YWwgcGVyaW9kIGRhdGFcbiAgICBwZXJpb2REYXRhW3BdID0ge1xuICAgICAgZGF0YTogbGF5ZXJPYmouc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW2xheWVyT2JqLmFnZ3JlZ2F0ZS50aW1lc2VyaWVzLmZpZWxkXSA9PT0gcDtcbiAgICAgIH0pXG4gICAgfTtcbiAgICAvLyBkZXRlcm1pbmUgaWYgcGVyaW9kIGRhdGEgaGFzIGFueSBub24temVybyB2YWx1ZXNcbiAgICBwZXJpb2REYXRhW3BdLmhhc0RhdGEgPSAhIXBlcmlvZERhdGFbcF0uZGF0YS5yZWR1Y2UocGVyaW9kSGFzRGF0YVJlZHVjZXIsIDApO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZVNlcmllc0xheWVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxheWVySWQgPSB0aW1lU2VyaWVzTGF5ZXJzW2ldO1xuXG4gICAgaWYgKGFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcklkKSAmJiAhdGhpcy5zdGF0ZS50aW1lc2VyaWVzW2xheWVySWRdKSB7XG4gICAgICBpbmRleCA9IGdldExhc3RJbmRleChhY3RpdmVMYXllcnMsIGxheWVySWQpO1xuICAgICAgbGF5ZXJPYmogPSB0aGlzLnByb3BzLmxheWVyRGF0YVtsYXllcklkXTtcbiAgICAgIGNoYXJ0cyA9IGxheWVyT2JqICYmICEhbGF5ZXJPYmouY2hhcnRzID8gbGF5ZXJPYmouY2hhcnRzIDogbnVsbDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5sYXllcnNbaW5kZXhdICYmIHRoaXMuc3RhdGUubGF5ZXJzW2luZGV4XS52aXNpYmxlID09PSB0cnVlICYmIGxheWVyT2JqLnNvdXJjZS5kYXRhIGluc3RhbmNlb2YgT2JqZWN0ICYmIHN0b3BzICYmIGxheWVyT2JqLmlkID09PSBzdG9wcy5pZCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgbGF0ZXIgc3RvcHNcbiAgICAgICAgaWYgKGxheWVyT2JqLnR5cGUgPT09ICdjaGFydCcpIHtcbiAgICAgICAgICBwZXJpb2QgPSB0aGlzLnN0YXRlLnN0b3BzLnBlcmlvZDtcbiAgICAgICAgICBjb2xvclN0b3BzID0gbGF5ZXJPYmouc291cmNlLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBhaW50U3RvcHMgPSBzdG9wcy5zdG9wcztcbiAgICAgICAgICBjb2xvclN0b3BzID0gcGFpbnRTdG9wc1swXTtcbiAgICAgICAgICByYWRpdXNTdG9wcyA9IHBhaW50U3RvcHNbMV07XG4gICAgICAgICAgcGVyaW9kID0gcGFpbnRTdG9wc1syXTtcbiAgICAgICAgICBicmVha3MgPSBwYWludFN0b3BzWzNdO1xuICAgICAgICAgIGNvbG9ycyA9IHBhaW50U3RvcHNbNF07XG4gICAgICAgICAgc3Ryb2tlV2lkdGhTdG9wcyA9IHBhaW50U3RvcHNbNV07XG4gICAgICAgICAgc3RvcHMgPSBsYXllck9iai50eXBlID09PSAnY2lyY2xlJyA/IHJhZGl1c1N0b3BzIDogY29sb3JTdG9wcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBvcmFsSW5kZXggPSBwZXJpb2QubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAobGF5ZXJPYmoudHlwZSA9PT0gJ2NoYXJ0Jykge1xuICAgICAgICAgIGRhdGEgPSBzdG9wcy5maWx0ZXIoY2hhcnREYXRhRmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXllck9iai5hZ2dyZWdhdGUgJiYgbGF5ZXJPYmouYWdncmVnYXRlLnRpbWVzZXJpZXMpIHtcbiAgICAgICAgICAvLyBkZWZpbmUgcGVyaW9kIGRhdGEgZm9yIGVhY2ggcGVyaW9kXG4gICAgICAgICAgbGF5ZXJQcm9wZXJ0eSA9IGxheWVyT2JqLnByb3BlcnR5O1xuICAgICAgICAgIHBlcmlvZERhdGEgPSB7fTtcbiAgICAgICAgICBwZXJpb2QuZm9yRWFjaChwZXJpb2REYXRhRmlsdGVyKTtcblxuICAgICAgICAgIGRhdGEgPSBwZXJpb2REYXRhW3BlcmlvZFt0ZW1wb3JhbEluZGV4XV0uZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gbGF5ZXJPYmouc291cmNlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGltZXNlcmllc01hcFtsYXllcklkXSA9IHtcbiAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBsYXllck9iajogbGF5ZXJPYmosXG4gICAgICAgIHRlbXBvcmFsSW5kZXg6IHRlbXBvcmFsSW5kZXgsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNoYXJ0czogY2hhcnRzLFxuICAgICAgICBwZXJpb2REYXRhOiBwZXJpb2REYXRhLFxuICAgICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgICAgY29sb3JTdG9wczogY29sb3JTdG9wcyxcbiAgICAgICAgcmFkaXVzU3RvcHM6IHJhZGl1c1N0b3BzLFxuICAgICAgICBwZXJpb2Q6IHBlcmlvZCxcbiAgICAgICAgYnJlYWtzOiBicmVha3MsXG4gICAgICAgIHN0cm9rZVdpZHRoU3RvcHM6IHN0cm9rZVdpZHRoU3RvcHMsXG4gICAgICAgIHN0b3BzOiBzdG9wcyxcbiAgICAgICAgbGF5ZXJQcm9wZXJ0eTogbGF5ZXJQcm9wZXJ0eVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGltZXNlcmllc01hcDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9tYXAvYnVpbGRUaW1lc2VyaWVzRGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGxheWVyLCB0aW1lZmllbGQpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdmFyIG9zbUlEcyA9IFtdO1xuICB2YXIgcGVyaW9kcyA9IFtdO1xuICB2YXIgY2x1c3RlcnMgPSBsYXllci5jYXRlZ29yaWVzLmNsdXN0ZXJzO1xuICB2YXIgY29sb3JzID0gZ2V0Q29sb3JCcmV3ZXJDb2xvcihsYXllci5jYXRlZ29yaWVzLmNvbG9yLCBjbHVzdGVycykgfHwgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvcjtcbiAgdmFyIHJvd3MgPSBsYXllci5zb3VyY2UuZGF0YS5mZWF0dXJlcyB8fCBsYXllci5zb3VyY2UuZGF0YTtcbiAgdmFyIGlzR2VvSlNPTiA9IGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzO1xuICB2YXIgZ2VvSlNPTldpdGhPU01LZXkgPSBpc0dlb0pTT04gJiYgbGF5ZXIuc291cmNlLmpvaW5bMV07XG4gIHZhciBsaW1pdCA9IGxheWVyLmNhdGVnb3JpZXMubGltaXQ7XG4gIHZhciByYWRpdXNSYW5nZSA9IGxheWVyWydyYWRpdXMtcmFuZ2UnXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNHZW9KU09OKSB7XG4gICAgICBkYXRhLnB1c2goTnVtYmVyKHJvd3NbaV0ucHJvcGVydGllc1tsYXllci5wcm9wZXJ0eV0pKTtcbiAgICAgIGlmIChnZW9KU09OV2l0aE9TTUtleSkge1xuICAgICAgICBvc21JRHMucHVzaChyb3dzW2ldLnByb3BlcnRpZXNbbGF5ZXIuc291cmNlLmpvaW5bMV1dKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVyaW9kcy5wdXNoKHJvd3NbaV1bdGltZWZpZWxkXSk7XG4gICAgICBkYXRhLnB1c2goTnVtYmVyKHJvd3NbaV1bbGF5ZXIucHJvcGVydHldKSk7XG4gICAgICBvc21JRHMucHVzaChyb3dzW2ldW2xheWVyLnNvdXJjZS5qb2luWzFdXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFN0b3BzKHsgZGF0YTogZGF0YSwgY29sb3JzOiBjb2xvcnMsIG9zbUlEczogb3NtSURzLCBwZXJpb2RzOiBwZXJpb2RzLCBsaW1pdDogbGltaXQsIGNsdXN0ZXJzOiBjbHVzdGVycywgcmFkaXVzUmFuZ2U6IHJhZGl1c1JhbmdlIH0pO1xufTtcblxudmFyIF9jb2xvcmJyZXdlciA9IHJlcXVpcmUoJ2NvbG9yYnJld2VyJyk7XG5cbnZhciBfY29sb3JicmV3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JicmV3ZXIpO1xuXG52YXIgX3NpbXBsZVN0YXRpc3RpY3MgPSByZXF1aXJlKCdzaW1wbGUtc3RhdGlzdGljcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIGRlZmF1bHRSYWRpdXNSYW5nZSA9IFsnMycsICc2JywgJzknLCAnMTInLCAnMTUnLCAnMTgnLCAnMjEnLCAnMjQnLCAnMjcnLCAnMzAnXTtcblxudmFyIGdldENvbG9yQnJld2VyQ29sb3IgPSBmdW5jdGlvbiBnZXRDb2xvckJyZXdlckNvbG9yKGMsIG51bUNvbG9ycykge1xuICBpZiAoX2NvbG9yYnJld2VyMi5kZWZhdWx0W2NdKSB7XG4gICAgcmV0dXJuIF9jb2xvcmJyZXdlcjIuZGVmYXVsdFtjXVtudW1Db2xvcnNdO1xuICB9XG4gIHJldHVybiBjO1xufTtcbnZhciBnZXRDb2xvciA9IGZ1bmN0aW9uIGdldENvbG9yKGMsIGkpIHtcbiAgaWYgKGMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBjW2ldO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxuZnVuY3Rpb24gZ2V0U3RvcHMobGF5ZXIpIHtcbiAgdmFyIGNvbG9yc1N0b3BzID0gW107XG4gIHZhciByYWRpdXNTdG9wcyA9IFtdO1xuICB2YXIgcmFkaXVzID0gbGF5ZXIucmFkaXVzUmFuZ2UgfHwgZGVmYXVsdFJhZGl1c1JhbmdlO1xuICB2YXIgYnJlYWtzID0gW107XG5cbiAgLy8gU29ydCBkYXRhIGJhc2VkIG9uIGRhdGEgdmFsdWVcbiAgdmFyIGxpc3QgPSBsYXllci5kYXRhLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB4LFxuICAgICAgb3NtSURzOiBsYXllci5vc21JRHNbaV0sXG4gICAgICBwZXJpb2RzOiBsYXllci5wZXJpb2RzW2ldXG4gICAgfTtcbiAgfSwgdGhpcyk7XG4gIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmRhdGEgPCBiLmRhdGEgPyAtMSA6IGEuZGF0YSA9PT0gYi5kYXRhID8gMCA6IDE7XG4gIH0pO1xuICB2YXIgc29ydGVkRGF0YSA9IGxpc3QubWFwKGZ1bmN0aW9uIChpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5kYXRhO1xuICB9KTtcbiAgdmFyIG9zbUlEID0gbGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm9zbUlEcztcbiAgfSk7XG4gIHZhciBwZXJpb2QgPSBsaXN0Lm1hcChmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMucGVyaW9kcztcbiAgfSk7XG5cbiAgLy8gU29ydCBmb3IgbGltaXQgZGF0YSBiYXNlZCBvbiBvc21JRHNcbiAgdmFyIGRhdGFMaXN0ID0gbGF5ZXIub3NtSURzLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgIHJldHVybiB7XG4gICAgICBvc21JRHM6IHgsXG4gICAgICBkYXRhOiBsYXllci5kYXRhW2ldLFxuICAgICAgcGVyaW9kczogbGF5ZXIucGVyaW9kc1tpXVxuICAgIH07XG4gIH0sIHRoaXMpO1xuICBkYXRhTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEub3NtSURzIDwgYi5vc21JRHMgPyAtMSA6IGEub3NtSURzID09PSBiLm9zbUlEcyA/IDAgOiAxO1xuICB9KTtcbiAgdmFyIHJhbmdlRGF0YSA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLmRhdGE7XG4gIH0pO1xuICB2YXIgcmFuZ2VJRCA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLm9zbUlEcztcbiAgfSk7XG4gIHZhciByYW5nZVBlcmlvZCA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLnBlcmlvZHM7XG4gIH0pO1xuXG4gIC8vIFNwbGl0IHRoZSBkYXRhIGludG8gbkNsdXN0ZXJzXG4gIHZhciBjbHVzdGVyID0gbGF5ZXIuY2x1c3RlcnMgPyAoMCwgX3NpbXBsZVN0YXRpc3RpY3MuY2ttZWFucykoc29ydGVkRGF0YSwgbGF5ZXIuY2x1c3RlcnMpIDogbnVsbDtcbiAgYnJlYWtzID0gbGF5ZXIubGltaXQgPyBsYXllci5saW1pdCA6IGNsdXN0ZXIubWFwKGZ1bmN0aW9uIChjbCkge1xuICAgIHJldHVybiBjbFtjbC5sZW5ndGggLSAxXTtcbiAgfSk7XG4gIHZhciBPU01JRHNFeGlzdCA9IGxheWVyLm9zbUlEcyAmJiBsYXllci5vc21JRHMubGVuZ3RoICE9PSAwO1xuICB2YXIgZGF0YSA9IGxheWVyLmxpbWl0ID8gcmFuZ2VEYXRhIDogc29ydGVkRGF0YTtcbiAgdmFyIG9zbUlEcyA9IGxheWVyLmxpbWl0ID8gcmFuZ2VJRCA6IG9zbUlEO1xuXG4gIC8vIEFzc2lnbiBjb2xvcnMgYW5kIHJhZGl1cyB0byBvc21JZCBvciBkYXRhIHZhbHVlXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZGF0YS5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnJlYWtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGF0YVtrXSA8PSBicmVha3NbaV0pIHtcbiAgICAgICAgY29sb3JzU3RvcHMucHVzaChbT1NNSURzRXhpc3QgPyBvc21JRHNba10gOiBkYXRhW2tdLCBnZXRDb2xvcihsYXllci5jb2xvcnMsIGkpXSk7XG4gICAgICAgIHJhZGl1c1N0b3BzLnB1c2goW09TTUlEc0V4aXN0ID8gb3NtSURzW2tdIDogZGF0YVtrXSwgTnVtYmVyKHJhZGl1c1tpXSldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxheWVyLnBlcmlvZHMpIHtcbiAgICB2YXIgdW5pcVBlcmlvZHMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBTZXQobGF5ZXIucGVyaW9kcykpKTtcbiAgICB2YXIgcGVyaW9kU3RvcHMgPSBbXTtcbiAgICB2YXIgcGVyaW9kUmFkaXVzID0gW107XG4gICAgdmFyIHBlcmlvZFN0cm9rZSA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdW5pcVBlcmlvZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHBlcmlvZFN0b3BzW2pdID0gW107XG4gICAgICBwZXJpb2RSYWRpdXNbal0gPSBbXTtcbiAgICAgIHBlcmlvZFN0cm9rZVtqXSA9IFtdO1xuICAgIH1cbiAgICB2YXIgcGVyaW9kUHJvcCA9IGxheWVyLmxpbWl0ID8gcmFuZ2VQZXJpb2QgOiBwZXJpb2Q7XG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCBwZXJpb2RQcm9wLmxlbmd0aDsgbSArPSAxKSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHVuaXFQZXJpb2RzLmxlbmd0aDsgbiArPSAxKSB7XG4gICAgICAgIGlmIChwZXJpb2RQcm9wW21dID09PSB1bmlxUGVyaW9kc1tuXSkge1xuICAgICAgICAgIHBlcmlvZFN0b3BzW25dLnB1c2goY29sb3JzU3RvcHNbbV0pO1xuICAgICAgICAgIHBlcmlvZFJhZGl1c1tuXS5wdXNoKHJhZGl1c1N0b3BzW21dKTtcbiAgICAgICAgICBwZXJpb2RTdHJva2Vbbl0ucHVzaChbcmFkaXVzU3RvcHNbbV1bMF0sIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3BlcmlvZFN0b3BzLCBwZXJpb2RSYWRpdXMsIHVuaXFQZXJpb2RzLCBicmVha3MsIGxheWVyLmNvbG9ycywgcGVyaW9kU3Ryb2tlXTtcbiAgfVxuICByZXR1cm4gW107XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2dlbmVyYXRlU3RvcHMuanMiLCIvLyBUaGlzIHByb2R1Y3QgaW5jbHVkZXMgY29sb3Igc3BlY2lmaWNhdGlvbnMgYW5kIGRlc2lnbnMgZGV2ZWxvcGVkIGJ5IEN5bnRoaWEgQnJld2VyIChodHRwOi8vY29sb3JicmV3ZXIub3JnLykuXG4vLyBKYXZhU2NyaXB0IHNwZWNzIGFzIHBhY2thZ2VkIGluIHRoZSBEMyBsaWJyYXJ5IChkM2pzLm9yZykuIFBsZWFzZSBzZWUgbGljZW5zZSBhdCBodHRwOi8vY29sb3JicmV3ZXIub3JnL2V4cG9ydC9MSUNFTlNFLnR4dFxuIWZ1bmN0aW9uKCkge1xuXG52YXIgY29sb3JicmV3ZXIgPSB7WWxHbjoge1xuMzogW1wiI2Y3ZmNiOVwiLFwiI2FkZGQ4ZVwiLFwiIzMxYTM1NFwiXSxcbjQ6IFtcIiNmZmZmY2NcIixcIiNjMmU2OTlcIixcIiM3OGM2NzlcIixcIiMyMzg0NDNcIl0sXG41OiBbXCIjZmZmZmNjXCIsXCIjYzJlNjk5XCIsXCIjNzhjNjc5XCIsXCIjMzFhMzU0XCIsXCIjMDA2ODM3XCJdLFxuNjogW1wiI2ZmZmZjY1wiLFwiI2Q5ZjBhM1wiLFwiI2FkZGQ4ZVwiLFwiIzc4YzY3OVwiLFwiIzMxYTM1NFwiLFwiIzAwNjgzN1wiXSxcbjc6IFtcIiNmZmZmY2NcIixcIiNkOWYwYTNcIixcIiNhZGRkOGVcIixcIiM3OGM2NzlcIixcIiM0MWFiNWRcIixcIiMyMzg0NDNcIixcIiMwMDVhMzJcIl0sXG44OiBbXCIjZmZmZmU1XCIsXCIjZjdmY2I5XCIsXCIjZDlmMGEzXCIsXCIjYWRkZDhlXCIsXCIjNzhjNjc5XCIsXCIjNDFhYjVkXCIsXCIjMjM4NDQzXCIsXCIjMDA1YTMyXCJdLFxuOTogW1wiI2ZmZmZlNVwiLFwiI2Y3ZmNiOVwiLFwiI2Q5ZjBhM1wiLFwiI2FkZGQ4ZVwiLFwiIzc4YzY3OVwiLFwiIzQxYWI1ZFwiLFwiIzIzODQ0M1wiLFwiIzAwNjgzN1wiLFwiIzAwNDUyOVwiXVxufSxZbEduQnU6IHtcbjM6IFtcIiNlZGY4YjFcIixcIiM3ZmNkYmJcIixcIiMyYzdmYjhcIl0sXG40OiBbXCIjZmZmZmNjXCIsXCIjYTFkYWI0XCIsXCIjNDFiNmM0XCIsXCIjMjI1ZWE4XCJdLFxuNTogW1wiI2ZmZmZjY1wiLFwiI2ExZGFiNFwiLFwiIzQxYjZjNFwiLFwiIzJjN2ZiOFwiLFwiIzI1MzQ5NFwiXSxcbjY6IFtcIiNmZmZmY2NcIixcIiNjN2U5YjRcIixcIiM3ZmNkYmJcIixcIiM0MWI2YzRcIixcIiMyYzdmYjhcIixcIiMyNTM0OTRcIl0sXG43OiBbXCIjZmZmZmNjXCIsXCIjYzdlOWI0XCIsXCIjN2ZjZGJiXCIsXCIjNDFiNmM0XCIsXCIjMWQ5MWMwXCIsXCIjMjI1ZWE4XCIsXCIjMGMyYzg0XCJdLFxuODogW1wiI2ZmZmZkOVwiLFwiI2VkZjhiMVwiLFwiI2M3ZTliNFwiLFwiIzdmY2RiYlwiLFwiIzQxYjZjNFwiLFwiIzFkOTFjMFwiLFwiIzIyNWVhOFwiLFwiIzBjMmM4NFwiXSxcbjk6IFtcIiNmZmZmZDlcIixcIiNlZGY4YjFcIixcIiNjN2U5YjRcIixcIiM3ZmNkYmJcIixcIiM0MWI2YzRcIixcIiMxZDkxYzBcIixcIiMyMjVlYThcIixcIiMyNTM0OTRcIixcIiMwODFkNThcIl1cbn0sR25CdToge1xuMzogW1wiI2UwZjNkYlwiLFwiI2E4ZGRiNVwiLFwiIzQzYTJjYVwiXSxcbjQ6IFtcIiNmMGY5ZThcIixcIiNiYWU0YmNcIixcIiM3YmNjYzRcIixcIiMyYjhjYmVcIl0sXG41OiBbXCIjZjBmOWU4XCIsXCIjYmFlNGJjXCIsXCIjN2JjY2M0XCIsXCIjNDNhMmNhXCIsXCIjMDg2OGFjXCJdLFxuNjogW1wiI2YwZjllOFwiLFwiI2NjZWJjNVwiLFwiI2E4ZGRiNVwiLFwiIzdiY2NjNFwiLFwiIzQzYTJjYVwiLFwiIzA4NjhhY1wiXSxcbjc6IFtcIiNmMGY5ZThcIixcIiNjY2ViYzVcIixcIiNhOGRkYjVcIixcIiM3YmNjYzRcIixcIiM0ZWIzZDNcIixcIiMyYjhjYmVcIixcIiMwODU4OWVcIl0sXG44OiBbXCIjZjdmY2YwXCIsXCIjZTBmM2RiXCIsXCIjY2NlYmM1XCIsXCIjYThkZGI1XCIsXCIjN2JjY2M0XCIsXCIjNGViM2QzXCIsXCIjMmI4Y2JlXCIsXCIjMDg1ODllXCJdLFxuOTogW1wiI2Y3ZmNmMFwiLFwiI2UwZjNkYlwiLFwiI2NjZWJjNVwiLFwiI2E4ZGRiNVwiLFwiIzdiY2NjNFwiLFwiIzRlYjNkM1wiLFwiIzJiOGNiZVwiLFwiIzA4NjhhY1wiLFwiIzA4NDA4MVwiXVxufSxCdUduOiB7XG4zOiBbXCIjZTVmNWY5XCIsXCIjOTlkOGM5XCIsXCIjMmNhMjVmXCJdLFxuNDogW1wiI2VkZjhmYlwiLFwiI2IyZTJlMlwiLFwiIzY2YzJhNFwiLFwiIzIzOGI0NVwiXSxcbjU6IFtcIiNlZGY4ZmJcIixcIiNiMmUyZTJcIixcIiM2NmMyYTRcIixcIiMyY2EyNWZcIixcIiMwMDZkMmNcIl0sXG42OiBbXCIjZWRmOGZiXCIsXCIjY2NlY2U2XCIsXCIjOTlkOGM5XCIsXCIjNjZjMmE0XCIsXCIjMmNhMjVmXCIsXCIjMDA2ZDJjXCJdLFxuNzogW1wiI2VkZjhmYlwiLFwiI2NjZWNlNlwiLFwiIzk5ZDhjOVwiLFwiIzY2YzJhNFwiLFwiIzQxYWU3NlwiLFwiIzIzOGI0NVwiLFwiIzAwNTgyNFwiXSxcbjg6IFtcIiNmN2ZjZmRcIixcIiNlNWY1ZjlcIixcIiNjY2VjZTZcIixcIiM5OWQ4YzlcIixcIiM2NmMyYTRcIixcIiM0MWFlNzZcIixcIiMyMzhiNDVcIixcIiMwMDU4MjRcIl0sXG45OiBbXCIjZjdmY2ZkXCIsXCIjZTVmNWY5XCIsXCIjY2NlY2U2XCIsXCIjOTlkOGM5XCIsXCIjNjZjMmE0XCIsXCIjNDFhZTc2XCIsXCIjMjM4YjQ1XCIsXCIjMDA2ZDJjXCIsXCIjMDA0NDFiXCJdXG59LFB1QnVHbjoge1xuMzogW1wiI2VjZTJmMFwiLFwiI2E2YmRkYlwiLFwiIzFjOTA5OVwiXSxcbjQ6IFtcIiNmNmVmZjdcIixcIiNiZGM5ZTFcIixcIiM2N2E5Y2ZcIixcIiMwMjgxOGFcIl0sXG41OiBbXCIjZjZlZmY3XCIsXCIjYmRjOWUxXCIsXCIjNjdhOWNmXCIsXCIjMWM5MDk5XCIsXCIjMDE2YzU5XCJdLFxuNjogW1wiI2Y2ZWZmN1wiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzY3YTljZlwiLFwiIzFjOTA5OVwiLFwiIzAxNmM1OVwiXSxcbjc6IFtcIiNmNmVmZjdcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM2N2E5Y2ZcIixcIiMzNjkwYzBcIixcIiMwMjgxOGFcIixcIiMwMTY0NTBcIl0sXG44OiBbXCIjZmZmN2ZiXCIsXCIjZWNlMmYwXCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNjdhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDI4MThhXCIsXCIjMDE2NDUwXCJdLFxuOTogW1wiI2ZmZjdmYlwiLFwiI2VjZTJmMFwiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzY3YTljZlwiLFwiIzM2OTBjMFwiLFwiIzAyODE4YVwiLFwiIzAxNmM1OVwiLFwiIzAxNDYzNlwiXVxufSxQdUJ1OiB7XG4zOiBbXCIjZWNlN2YyXCIsXCIjYTZiZGRiXCIsXCIjMmI4Y2JlXCJdLFxuNDogW1wiI2YxZWVmNlwiLFwiI2JkYzllMVwiLFwiIzc0YTljZlwiLFwiIzA1NzBiMFwiXSxcbjU6IFtcIiNmMWVlZjZcIixcIiNiZGM5ZTFcIixcIiM3NGE5Y2ZcIixcIiMyYjhjYmVcIixcIiMwNDVhOGRcIl0sXG42OiBbXCIjZjFlZWY2XCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNzRhOWNmXCIsXCIjMmI4Y2JlXCIsXCIjMDQ1YThkXCJdLFxuNzogW1wiI2YxZWVmNlwiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzc0YTljZlwiLFwiIzM2OTBjMFwiLFwiIzA1NzBiMFwiLFwiIzAzNGU3YlwiXSxcbjg6IFtcIiNmZmY3ZmJcIixcIiNlY2U3ZjJcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM3NGE5Y2ZcIixcIiMzNjkwYzBcIixcIiMwNTcwYjBcIixcIiMwMzRlN2JcIl0sXG45OiBbXCIjZmZmN2ZiXCIsXCIjZWNlN2YyXCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNzRhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDU3MGIwXCIsXCIjMDQ1YThkXCIsXCIjMDIzODU4XCJdXG59LEJ1UHU6IHtcbjM6IFtcIiNlMGVjZjRcIixcIiM5ZWJjZGFcIixcIiM4ODU2YTdcIl0sXG40OiBbXCIjZWRmOGZiXCIsXCIjYjNjZGUzXCIsXCIjOGM5NmM2XCIsXCIjODg0MTlkXCJdLFxuNTogW1wiI2VkZjhmYlwiLFwiI2IzY2RlM1wiLFwiIzhjOTZjNlwiLFwiIzg4NTZhN1wiLFwiIzgxMGY3Y1wiXSxcbjY6IFtcIiNlZGY4ZmJcIixcIiNiZmQzZTZcIixcIiM5ZWJjZGFcIixcIiM4Yzk2YzZcIixcIiM4ODU2YTdcIixcIiM4MTBmN2NcIl0sXG43OiBbXCIjZWRmOGZiXCIsXCIjYmZkM2U2XCIsXCIjOWViY2RhXCIsXCIjOGM5NmM2XCIsXCIjOGM2YmIxXCIsXCIjODg0MTlkXCIsXCIjNmUwMTZiXCJdLFxuODogW1wiI2Y3ZmNmZFwiLFwiI2UwZWNmNFwiLFwiI2JmZDNlNlwiLFwiIzllYmNkYVwiLFwiIzhjOTZjNlwiLFwiIzhjNmJiMVwiLFwiIzg4NDE5ZFwiLFwiIzZlMDE2YlwiXSxcbjk6IFtcIiNmN2ZjZmRcIixcIiNlMGVjZjRcIixcIiNiZmQzZTZcIixcIiM5ZWJjZGFcIixcIiM4Yzk2YzZcIixcIiM4YzZiYjFcIixcIiM4ODQxOWRcIixcIiM4MTBmN2NcIixcIiM0ZDAwNGJcIl1cbn0sUmRQdToge1xuMzogW1wiI2ZkZTBkZFwiLFwiI2ZhOWZiNVwiLFwiI2M1MWI4YVwiXSxcbjQ6IFtcIiNmZWViZTJcIixcIiNmYmI0YjlcIixcIiNmNzY4YTFcIixcIiNhZTAxN2VcIl0sXG41OiBbXCIjZmVlYmUyXCIsXCIjZmJiNGI5XCIsXCIjZjc2OGExXCIsXCIjYzUxYjhhXCIsXCIjN2EwMTc3XCJdLFxuNjogW1wiI2ZlZWJlMlwiLFwiI2ZjYzVjMFwiLFwiI2ZhOWZiNVwiLFwiI2Y3NjhhMVwiLFwiI2M1MWI4YVwiLFwiIzdhMDE3N1wiXSxcbjc6IFtcIiNmZWViZTJcIixcIiNmY2M1YzBcIixcIiNmYTlmYjVcIixcIiNmNzY4YTFcIixcIiNkZDM0OTdcIixcIiNhZTAxN2VcIixcIiM3YTAxNzdcIl0sXG44OiBbXCIjZmZmN2YzXCIsXCIjZmRlMGRkXCIsXCIjZmNjNWMwXCIsXCIjZmE5ZmI1XCIsXCIjZjc2OGExXCIsXCIjZGQzNDk3XCIsXCIjYWUwMTdlXCIsXCIjN2EwMTc3XCJdLFxuOTogW1wiI2ZmZjdmM1wiLFwiI2ZkZTBkZFwiLFwiI2ZjYzVjMFwiLFwiI2ZhOWZiNVwiLFwiI2Y3NjhhMVwiLFwiI2RkMzQ5N1wiLFwiI2FlMDE3ZVwiLFwiIzdhMDE3N1wiLFwiIzQ5MDA2YVwiXVxufSxQdVJkOiB7XG4zOiBbXCIjZTdlMWVmXCIsXCIjYzk5NGM3XCIsXCIjZGQxYzc3XCJdLFxuNDogW1wiI2YxZWVmNlwiLFwiI2Q3YjVkOFwiLFwiI2RmNjViMFwiLFwiI2NlMTI1NlwiXSxcbjU6IFtcIiNmMWVlZjZcIixcIiNkN2I1ZDhcIixcIiNkZjY1YjBcIixcIiNkZDFjNzdcIixcIiM5ODAwNDNcIl0sXG42OiBbXCIjZjFlZWY2XCIsXCIjZDRiOWRhXCIsXCIjYzk5NGM3XCIsXCIjZGY2NWIwXCIsXCIjZGQxYzc3XCIsXCIjOTgwMDQzXCJdLFxuNzogW1wiI2YxZWVmNlwiLFwiI2Q0YjlkYVwiLFwiI2M5OTRjN1wiLFwiI2RmNjViMFwiLFwiI2U3Mjk4YVwiLFwiI2NlMTI1NlwiLFwiIzkxMDAzZlwiXSxcbjg6IFtcIiNmN2Y0ZjlcIixcIiNlN2UxZWZcIixcIiNkNGI5ZGFcIixcIiNjOTk0YzdcIixcIiNkZjY1YjBcIixcIiNlNzI5OGFcIixcIiNjZTEyNTZcIixcIiM5MTAwM2ZcIl0sXG45OiBbXCIjZjdmNGY5XCIsXCIjZTdlMWVmXCIsXCIjZDRiOWRhXCIsXCIjYzk5NGM3XCIsXCIjZGY2NWIwXCIsXCIjZTcyOThhXCIsXCIjY2UxMjU2XCIsXCIjOTgwMDQzXCIsXCIjNjcwMDFmXCJdXG59LE9yUmQ6IHtcbjM6IFtcIiNmZWU4YzhcIixcIiNmZGJiODRcIixcIiNlMzRhMzNcIl0sXG40OiBbXCIjZmVmMGQ5XCIsXCIjZmRjYzhhXCIsXCIjZmM4ZDU5XCIsXCIjZDczMDFmXCJdLFxuNTogW1wiI2ZlZjBkOVwiLFwiI2ZkY2M4YVwiLFwiI2ZjOGQ1OVwiLFwiI2UzNGEzM1wiLFwiI2IzMDAwMFwiXSxcbjY6IFtcIiNmZWYwZDlcIixcIiNmZGQ0OWVcIixcIiNmZGJiODRcIixcIiNmYzhkNTlcIixcIiNlMzRhMzNcIixcIiNiMzAwMDBcIl0sXG43OiBbXCIjZmVmMGQ5XCIsXCIjZmRkNDllXCIsXCIjZmRiYjg0XCIsXCIjZmM4ZDU5XCIsXCIjZWY2NTQ4XCIsXCIjZDczMDFmXCIsXCIjOTkwMDAwXCJdLFxuODogW1wiI2ZmZjdlY1wiLFwiI2ZlZThjOFwiLFwiI2ZkZDQ5ZVwiLFwiI2ZkYmI4NFwiLFwiI2ZjOGQ1OVwiLFwiI2VmNjU0OFwiLFwiI2Q3MzAxZlwiLFwiIzk5MDAwMFwiXSxcbjk6IFtcIiNmZmY3ZWNcIixcIiNmZWU4YzhcIixcIiNmZGQ0OWVcIixcIiNmZGJiODRcIixcIiNmYzhkNTlcIixcIiNlZjY1NDhcIixcIiNkNzMwMWZcIixcIiNiMzAwMDBcIixcIiM3ZjAwMDBcIl1cbn0sWWxPclJkOiB7XG4zOiBbXCIjZmZlZGEwXCIsXCIjZmViMjRjXCIsXCIjZjAzYjIwXCJdLFxuNDogW1wiI2ZmZmZiMlwiLFwiI2ZlY2M1Y1wiLFwiI2ZkOGQzY1wiLFwiI2UzMWExY1wiXSxcbjU6IFtcIiNmZmZmYjJcIixcIiNmZWNjNWNcIixcIiNmZDhkM2NcIixcIiNmMDNiMjBcIixcIiNiZDAwMjZcIl0sXG42OiBbXCIjZmZmZmIyXCIsXCIjZmVkOTc2XCIsXCIjZmViMjRjXCIsXCIjZmQ4ZDNjXCIsXCIjZjAzYjIwXCIsXCIjYmQwMDI2XCJdLFxuNzogW1wiI2ZmZmZiMlwiLFwiI2ZlZDk3NlwiLFwiI2ZlYjI0Y1wiLFwiI2ZkOGQzY1wiLFwiI2ZjNGUyYVwiLFwiI2UzMWExY1wiLFwiI2IxMDAyNlwiXSxcbjg6IFtcIiNmZmZmY2NcIixcIiNmZmVkYTBcIixcIiNmZWQ5NzZcIixcIiNmZWIyNGNcIixcIiNmZDhkM2NcIixcIiNmYzRlMmFcIixcIiNlMzFhMWNcIixcIiNiMTAwMjZcIl0sXG45OiBbXCIjZmZmZmNjXCIsXCIjZmZlZGEwXCIsXCIjZmVkOTc2XCIsXCIjZmViMjRjXCIsXCIjZmQ4ZDNjXCIsXCIjZmM0ZTJhXCIsXCIjZTMxYTFjXCIsXCIjYmQwMDI2XCIsXCIjODAwMDI2XCJdXG59LFlsT3JCcjoge1xuMzogW1wiI2ZmZjdiY1wiLFwiI2ZlYzQ0ZlwiLFwiI2Q5NWYwZVwiXSxcbjQ6IFtcIiNmZmZmZDRcIixcIiNmZWQ5OGVcIixcIiNmZTk5MjlcIixcIiNjYzRjMDJcIl0sXG41OiBbXCIjZmZmZmQ0XCIsXCIjZmVkOThlXCIsXCIjZmU5OTI5XCIsXCIjZDk1ZjBlXCIsXCIjOTkzNDA0XCJdLFxuNjogW1wiI2ZmZmZkNFwiLFwiI2ZlZTM5MVwiLFwiI2ZlYzQ0ZlwiLFwiI2ZlOTkyOVwiLFwiI2Q5NWYwZVwiLFwiIzk5MzQwNFwiXSxcbjc6IFtcIiNmZmZmZDRcIixcIiNmZWUzOTFcIixcIiNmZWM0NGZcIixcIiNmZTk5MjlcIixcIiNlYzcwMTRcIixcIiNjYzRjMDJcIixcIiM4YzJkMDRcIl0sXG44OiBbXCIjZmZmZmU1XCIsXCIjZmZmN2JjXCIsXCIjZmVlMzkxXCIsXCIjZmVjNDRmXCIsXCIjZmU5OTI5XCIsXCIjZWM3MDE0XCIsXCIjY2M0YzAyXCIsXCIjOGMyZDA0XCJdLFxuOTogW1wiI2ZmZmZlNVwiLFwiI2ZmZjdiY1wiLFwiI2ZlZTM5MVwiLFwiI2ZlYzQ0ZlwiLFwiI2ZlOTkyOVwiLFwiI2VjNzAxNFwiLFwiI2NjNGMwMlwiLFwiIzk5MzQwNFwiLFwiIzY2MjUwNlwiXVxufSxQdXJwbGVzOiB7XG4zOiBbXCIjZWZlZGY1XCIsXCIjYmNiZGRjXCIsXCIjNzU2YmIxXCJdLFxuNDogW1wiI2YyZjBmN1wiLFwiI2NiYzllMlwiLFwiIzllOWFjOFwiLFwiIzZhNTFhM1wiXSxcbjU6IFtcIiNmMmYwZjdcIixcIiNjYmM5ZTJcIixcIiM5ZTlhYzhcIixcIiM3NTZiYjFcIixcIiM1NDI3OGZcIl0sXG42OiBbXCIjZjJmMGY3XCIsXCIjZGFkYWViXCIsXCIjYmNiZGRjXCIsXCIjOWU5YWM4XCIsXCIjNzU2YmIxXCIsXCIjNTQyNzhmXCJdLFxuNzogW1wiI2YyZjBmN1wiLFwiI2RhZGFlYlwiLFwiI2JjYmRkY1wiLFwiIzllOWFjOFwiLFwiIzgwN2RiYVwiLFwiIzZhNTFhM1wiLFwiIzRhMTQ4NlwiXSxcbjg6IFtcIiNmY2ZiZmRcIixcIiNlZmVkZjVcIixcIiNkYWRhZWJcIixcIiNiY2JkZGNcIixcIiM5ZTlhYzhcIixcIiM4MDdkYmFcIixcIiM2YTUxYTNcIixcIiM0YTE0ODZcIl0sXG45OiBbXCIjZmNmYmZkXCIsXCIjZWZlZGY1XCIsXCIjZGFkYWViXCIsXCIjYmNiZGRjXCIsXCIjOWU5YWM4XCIsXCIjODA3ZGJhXCIsXCIjNmE1MWEzXCIsXCIjNTQyNzhmXCIsXCIjM2YwMDdkXCJdXG59LEJsdWVzOiB7XG4zOiBbXCIjZGVlYmY3XCIsXCIjOWVjYWUxXCIsXCIjMzE4MmJkXCJdLFxuNDogW1wiI2VmZjNmZlwiLFwiI2JkZDdlN1wiLFwiIzZiYWVkNlwiLFwiIzIxNzFiNVwiXSxcbjU6IFtcIiNlZmYzZmZcIixcIiNiZGQ3ZTdcIixcIiM2YmFlZDZcIixcIiMzMTgyYmRcIixcIiMwODUxOWNcIl0sXG42OiBbXCIjZWZmM2ZmXCIsXCIjYzZkYmVmXCIsXCIjOWVjYWUxXCIsXCIjNmJhZWQ2XCIsXCIjMzE4MmJkXCIsXCIjMDg1MTljXCJdLFxuNzogW1wiI2VmZjNmZlwiLFwiI2M2ZGJlZlwiLFwiIzllY2FlMVwiLFwiIzZiYWVkNlwiLFwiIzQyOTJjNlwiLFwiIzIxNzFiNVwiLFwiIzA4NDU5NFwiXSxcbjg6IFtcIiNmN2ZiZmZcIixcIiNkZWViZjdcIixcIiNjNmRiZWZcIixcIiM5ZWNhZTFcIixcIiM2YmFlZDZcIixcIiM0MjkyYzZcIixcIiMyMTcxYjVcIixcIiMwODQ1OTRcIl0sXG45OiBbXCIjZjdmYmZmXCIsXCIjZGVlYmY3XCIsXCIjYzZkYmVmXCIsXCIjOWVjYWUxXCIsXCIjNmJhZWQ2XCIsXCIjNDI5MmM2XCIsXCIjMjE3MWI1XCIsXCIjMDg1MTljXCIsXCIjMDgzMDZiXCJdXG59LEdyZWVuczoge1xuMzogW1wiI2U1ZjVlMFwiLFwiI2ExZDk5YlwiLFwiIzMxYTM1NFwiXSxcbjQ6IFtcIiNlZGY4ZTlcIixcIiNiYWU0YjNcIixcIiM3NGM0NzZcIixcIiMyMzhiNDVcIl0sXG41OiBbXCIjZWRmOGU5XCIsXCIjYmFlNGIzXCIsXCIjNzRjNDc2XCIsXCIjMzFhMzU0XCIsXCIjMDA2ZDJjXCJdLFxuNjogW1wiI2VkZjhlOVwiLFwiI2M3ZTljMFwiLFwiI2ExZDk5YlwiLFwiIzc0YzQ3NlwiLFwiIzMxYTM1NFwiLFwiIzAwNmQyY1wiXSxcbjc6IFtcIiNlZGY4ZTlcIixcIiNjN2U5YzBcIixcIiNhMWQ5OWJcIixcIiM3NGM0NzZcIixcIiM0MWFiNWRcIixcIiMyMzhiNDVcIixcIiMwMDVhMzJcIl0sXG44OiBbXCIjZjdmY2Y1XCIsXCIjZTVmNWUwXCIsXCIjYzdlOWMwXCIsXCIjYTFkOTliXCIsXCIjNzRjNDc2XCIsXCIjNDFhYjVkXCIsXCIjMjM4YjQ1XCIsXCIjMDA1YTMyXCJdLFxuOTogW1wiI2Y3ZmNmNVwiLFwiI2U1ZjVlMFwiLFwiI2M3ZTljMFwiLFwiI2ExZDk5YlwiLFwiIzc0YzQ3NlwiLFwiIzQxYWI1ZFwiLFwiIzIzOGI0NVwiLFwiIzAwNmQyY1wiLFwiIzAwNDQxYlwiXVxufSxPcmFuZ2VzOiB7XG4zOiBbXCIjZmVlNmNlXCIsXCIjZmRhZTZiXCIsXCIjZTY1NTBkXCJdLFxuNDogW1wiI2ZlZWRkZVwiLFwiI2ZkYmU4NVwiLFwiI2ZkOGQzY1wiLFwiI2Q5NDcwMVwiXSxcbjU6IFtcIiNmZWVkZGVcIixcIiNmZGJlODVcIixcIiNmZDhkM2NcIixcIiNlNjU1MGRcIixcIiNhNjM2MDNcIl0sXG42OiBbXCIjZmVlZGRlXCIsXCIjZmRkMGEyXCIsXCIjZmRhZTZiXCIsXCIjZmQ4ZDNjXCIsXCIjZTY1NTBkXCIsXCIjYTYzNjAzXCJdLFxuNzogW1wiI2ZlZWRkZVwiLFwiI2ZkZDBhMlwiLFwiI2ZkYWU2YlwiLFwiI2ZkOGQzY1wiLFwiI2YxNjkxM1wiLFwiI2Q5NDgwMVwiLFwiIzhjMmQwNFwiXSxcbjg6IFtcIiNmZmY1ZWJcIixcIiNmZWU2Y2VcIixcIiNmZGQwYTJcIixcIiNmZGFlNmJcIixcIiNmZDhkM2NcIixcIiNmMTY5MTNcIixcIiNkOTQ4MDFcIixcIiM4YzJkMDRcIl0sXG45OiBbXCIjZmZmNWViXCIsXCIjZmVlNmNlXCIsXCIjZmRkMGEyXCIsXCIjZmRhZTZiXCIsXCIjZmQ4ZDNjXCIsXCIjZjE2OTEzXCIsXCIjZDk0ODAxXCIsXCIjYTYzNjAzXCIsXCIjN2YyNzA0XCJdXG59LFJlZHM6IHtcbjM6IFtcIiNmZWUwZDJcIixcIiNmYzkyNzJcIixcIiNkZTJkMjZcIl0sXG40OiBbXCIjZmVlNWQ5XCIsXCIjZmNhZTkxXCIsXCIjZmI2YTRhXCIsXCIjY2IxODFkXCJdLFxuNTogW1wiI2ZlZTVkOVwiLFwiI2ZjYWU5MVwiLFwiI2ZiNmE0YVwiLFwiI2RlMmQyNlwiLFwiI2E1MGYxNVwiXSxcbjY6IFtcIiNmZWU1ZDlcIixcIiNmY2JiYTFcIixcIiNmYzkyNzJcIixcIiNmYjZhNGFcIixcIiNkZTJkMjZcIixcIiNhNTBmMTVcIl0sXG43OiBbXCIjZmVlNWQ5XCIsXCIjZmNiYmExXCIsXCIjZmM5MjcyXCIsXCIjZmI2YTRhXCIsXCIjZWYzYjJjXCIsXCIjY2IxODFkXCIsXCIjOTkwMDBkXCJdLFxuODogW1wiI2ZmZjVmMFwiLFwiI2ZlZTBkMlwiLFwiI2ZjYmJhMVwiLFwiI2ZjOTI3MlwiLFwiI2ZiNmE0YVwiLFwiI2VmM2IyY1wiLFwiI2NiMTgxZFwiLFwiIzk5MDAwZFwiXSxcbjk6IFtcIiNmZmY1ZjBcIixcIiNmZWUwZDJcIixcIiNmY2JiYTFcIixcIiNmYzkyNzJcIixcIiNmYjZhNGFcIixcIiNlZjNiMmNcIixcIiNjYjE4MWRcIixcIiNhNTBmMTVcIixcIiM2NzAwMGRcIl1cbn0sR3JleXM6IHtcbjM6IFtcIiNmMGYwZjBcIixcIiNiZGJkYmRcIixcIiM2MzYzNjNcIl0sXG40OiBbXCIjZjdmN2Y3XCIsXCIjY2NjY2NjXCIsXCIjOTY5Njk2XCIsXCIjNTI1MjUyXCJdLFxuNTogW1wiI2Y3ZjdmN1wiLFwiI2NjY2NjY1wiLFwiIzk2OTY5NlwiLFwiIzYzNjM2M1wiLFwiIzI1MjUyNVwiXSxcbjY6IFtcIiNmN2Y3ZjdcIixcIiNkOWQ5ZDlcIixcIiNiZGJkYmRcIixcIiM5Njk2OTZcIixcIiM2MzYzNjNcIixcIiMyNTI1MjVcIl0sXG43OiBbXCIjZjdmN2Y3XCIsXCIjZDlkOWQ5XCIsXCIjYmRiZGJkXCIsXCIjOTY5Njk2XCIsXCIjNzM3MzczXCIsXCIjNTI1MjUyXCIsXCIjMjUyNTI1XCJdLFxuODogW1wiI2ZmZmZmZlwiLFwiI2YwZjBmMFwiLFwiI2Q5ZDlkOVwiLFwiI2JkYmRiZFwiLFwiIzk2OTY5NlwiLFwiIzczNzM3M1wiLFwiIzUyNTI1MlwiLFwiIzI1MjUyNVwiXSxcbjk6IFtcIiNmZmZmZmZcIixcIiNmMGYwZjBcIixcIiNkOWQ5ZDlcIixcIiNiZGJkYmRcIixcIiM5Njk2OTZcIixcIiM3MzczNzNcIixcIiM1MjUyNTJcIixcIiMyNTI1MjVcIixcIiMwMDAwMDBcIl1cbn0sUHVPcjoge1xuMzogW1wiI2YxYTM0MFwiLFwiI2Y3ZjdmN1wiLFwiIzk5OGVjM1wiXSxcbjQ6IFtcIiNlNjYxMDFcIixcIiNmZGI4NjNcIixcIiNiMmFiZDJcIixcIiM1ZTNjOTlcIl0sXG41OiBbXCIjZTY2MTAxXCIsXCIjZmRiODYzXCIsXCIjZjdmN2Y3XCIsXCIjYjJhYmQyXCIsXCIjNWUzYzk5XCJdLFxuNjogW1wiI2IzNTgwNlwiLFwiI2YxYTM0MFwiLFwiI2ZlZTBiNlwiLFwiI2Q4ZGFlYlwiLFwiIzk5OGVjM1wiLFwiIzU0Mjc4OFwiXSxcbjc6IFtcIiNiMzU4MDZcIixcIiNmMWEzNDBcIixcIiNmZWUwYjZcIixcIiNmN2Y3ZjdcIixcIiNkOGRhZWJcIixcIiM5OThlYzNcIixcIiM1NDI3ODhcIl0sXG44OiBbXCIjYjM1ODA2XCIsXCIjZTA4MjE0XCIsXCIjZmRiODYzXCIsXCIjZmVlMGI2XCIsXCIjZDhkYWViXCIsXCIjYjJhYmQyXCIsXCIjODA3M2FjXCIsXCIjNTQyNzg4XCJdLFxuOTogW1wiI2IzNTgwNlwiLFwiI2UwODIxNFwiLFwiI2ZkYjg2M1wiLFwiI2ZlZTBiNlwiLFwiI2Y3ZjdmN1wiLFwiI2Q4ZGFlYlwiLFwiI2IyYWJkMlwiLFwiIzgwNzNhY1wiLFwiIzU0Mjc4OFwiXSxcbjEwOiBbXCIjN2YzYjA4XCIsXCIjYjM1ODA2XCIsXCIjZTA4MjE0XCIsXCIjZmRiODYzXCIsXCIjZmVlMGI2XCIsXCIjZDhkYWViXCIsXCIjYjJhYmQyXCIsXCIjODA3M2FjXCIsXCIjNTQyNzg4XCIsXCIjMmQwMDRiXCJdLFxuMTE6IFtcIiM3ZjNiMDhcIixcIiNiMzU4MDZcIixcIiNlMDgyMTRcIixcIiNmZGI4NjNcIixcIiNmZWUwYjZcIixcIiNmN2Y3ZjdcIixcIiNkOGRhZWJcIixcIiNiMmFiZDJcIixcIiM4MDczYWNcIixcIiM1NDI3ODhcIixcIiMyZDAwNGJcIl1cbn0sQnJCRzoge1xuMzogW1wiI2Q4YjM2NVwiLFwiI2Y1ZjVmNVwiLFwiIzVhYjRhY1wiXSxcbjQ6IFtcIiNhNjYxMWFcIixcIiNkZmMyN2RcIixcIiM4MGNkYzFcIixcIiMwMTg1NzFcIl0sXG41OiBbXCIjYTY2MTFhXCIsXCIjZGZjMjdkXCIsXCIjZjVmNWY1XCIsXCIjODBjZGMxXCIsXCIjMDE4NTcxXCJdLFxuNjogW1wiIzhjNTEwYVwiLFwiI2Q4YjM2NVwiLFwiI2Y2ZThjM1wiLFwiI2M3ZWFlNVwiLFwiIzVhYjRhY1wiLFwiIzAxNjY1ZVwiXSxcbjc6IFtcIiM4YzUxMGFcIixcIiNkOGIzNjVcIixcIiNmNmU4YzNcIixcIiNmNWY1ZjVcIixcIiNjN2VhZTVcIixcIiM1YWI0YWNcIixcIiMwMTY2NWVcIl0sXG44OiBbXCIjOGM1MTBhXCIsXCIjYmY4MTJkXCIsXCIjZGZjMjdkXCIsXCIjZjZlOGMzXCIsXCIjYzdlYWU1XCIsXCIjODBjZGMxXCIsXCIjMzU5NzhmXCIsXCIjMDE2NjVlXCJdLFxuOTogW1wiIzhjNTEwYVwiLFwiI2JmODEyZFwiLFwiI2RmYzI3ZFwiLFwiI2Y2ZThjM1wiLFwiI2Y1ZjVmNVwiLFwiI2M3ZWFlNVwiLFwiIzgwY2RjMVwiLFwiIzM1OTc4ZlwiLFwiIzAxNjY1ZVwiXSxcbjEwOiBbXCIjNTQzMDA1XCIsXCIjOGM1MTBhXCIsXCIjYmY4MTJkXCIsXCIjZGZjMjdkXCIsXCIjZjZlOGMzXCIsXCIjYzdlYWU1XCIsXCIjODBjZGMxXCIsXCIjMzU5NzhmXCIsXCIjMDE2NjVlXCIsXCIjMDAzYzMwXCJdLFxuMTE6IFtcIiM1NDMwMDVcIixcIiM4YzUxMGFcIixcIiNiZjgxMmRcIixcIiNkZmMyN2RcIixcIiNmNmU4YzNcIixcIiNmNWY1ZjVcIixcIiNjN2VhZTVcIixcIiM4MGNkYzFcIixcIiMzNTk3OGZcIixcIiMwMTY2NWVcIixcIiMwMDNjMzBcIl1cbn0sUFJHbjoge1xuMzogW1wiI2FmOGRjM1wiLFwiI2Y3ZjdmN1wiLFwiIzdmYmY3YlwiXSxcbjQ6IFtcIiM3YjMyOTRcIixcIiNjMmE1Y2ZcIixcIiNhNmRiYTBcIixcIiMwMDg4MzdcIl0sXG41OiBbXCIjN2IzMjk0XCIsXCIjYzJhNWNmXCIsXCIjZjdmN2Y3XCIsXCIjYTZkYmEwXCIsXCIjMDA4ODM3XCJdLFxuNjogW1wiIzc2MmE4M1wiLFwiI2FmOGRjM1wiLFwiI2U3ZDRlOFwiLFwiI2Q5ZjBkM1wiLFwiIzdmYmY3YlwiLFwiIzFiNzgzN1wiXSxcbjc6IFtcIiM3NjJhODNcIixcIiNhZjhkYzNcIixcIiNlN2Q0ZThcIixcIiNmN2Y3ZjdcIixcIiNkOWYwZDNcIixcIiM3ZmJmN2JcIixcIiMxYjc4MzdcIl0sXG44OiBbXCIjNzYyYTgzXCIsXCIjOTk3MGFiXCIsXCIjYzJhNWNmXCIsXCIjZTdkNGU4XCIsXCIjZDlmMGQzXCIsXCIjYTZkYmEwXCIsXCIjNWFhZTYxXCIsXCIjMWI3ODM3XCJdLFxuOTogW1wiIzc2MmE4M1wiLFwiIzk5NzBhYlwiLFwiI2MyYTVjZlwiLFwiI2U3ZDRlOFwiLFwiI2Y3ZjdmN1wiLFwiI2Q5ZjBkM1wiLFwiI2E2ZGJhMFwiLFwiIzVhYWU2MVwiLFwiIzFiNzgzN1wiXSxcbjEwOiBbXCIjNDAwMDRiXCIsXCIjNzYyYTgzXCIsXCIjOTk3MGFiXCIsXCIjYzJhNWNmXCIsXCIjZTdkNGU4XCIsXCIjZDlmMGQzXCIsXCIjYTZkYmEwXCIsXCIjNWFhZTYxXCIsXCIjMWI3ODM3XCIsXCIjMDA0NDFiXCJdLFxuMTE6IFtcIiM0MDAwNGJcIixcIiM3NjJhODNcIixcIiM5OTcwYWJcIixcIiNjMmE1Y2ZcIixcIiNlN2Q0ZThcIixcIiNmN2Y3ZjdcIixcIiNkOWYwZDNcIixcIiNhNmRiYTBcIixcIiM1YWFlNjFcIixcIiMxYjc4MzdcIixcIiMwMDQ0MWJcIl1cbn0sUGlZRzoge1xuMzogW1wiI2U5YTNjOVwiLFwiI2Y3ZjdmN1wiLFwiI2ExZDc2YVwiXSxcbjQ6IFtcIiNkMDFjOGJcIixcIiNmMWI2ZGFcIixcIiNiOGUxODZcIixcIiM0ZGFjMjZcIl0sXG41OiBbXCIjZDAxYzhiXCIsXCIjZjFiNmRhXCIsXCIjZjdmN2Y3XCIsXCIjYjhlMTg2XCIsXCIjNGRhYzI2XCJdLFxuNjogW1wiI2M1MWI3ZFwiLFwiI2U5YTNjOVwiLFwiI2ZkZTBlZlwiLFwiI2U2ZjVkMFwiLFwiI2ExZDc2YVwiLFwiIzRkOTIyMVwiXSxcbjc6IFtcIiNjNTFiN2RcIixcIiNlOWEzYzlcIixcIiNmZGUwZWZcIixcIiNmN2Y3ZjdcIixcIiNlNmY1ZDBcIixcIiNhMWQ3NmFcIixcIiM0ZDkyMjFcIl0sXG44OiBbXCIjYzUxYjdkXCIsXCIjZGU3N2FlXCIsXCIjZjFiNmRhXCIsXCIjZmRlMGVmXCIsXCIjZTZmNWQwXCIsXCIjYjhlMTg2XCIsXCIjN2ZiYzQxXCIsXCIjNGQ5MjIxXCJdLFxuOTogW1wiI2M1MWI3ZFwiLFwiI2RlNzdhZVwiLFwiI2YxYjZkYVwiLFwiI2ZkZTBlZlwiLFwiI2Y3ZjdmN1wiLFwiI2U2ZjVkMFwiLFwiI2I4ZTE4NlwiLFwiIzdmYmM0MVwiLFwiIzRkOTIyMVwiXSxcbjEwOiBbXCIjOGUwMTUyXCIsXCIjYzUxYjdkXCIsXCIjZGU3N2FlXCIsXCIjZjFiNmRhXCIsXCIjZmRlMGVmXCIsXCIjZTZmNWQwXCIsXCIjYjhlMTg2XCIsXCIjN2ZiYzQxXCIsXCIjNGQ5MjIxXCIsXCIjMjc2NDE5XCJdLFxuMTE6IFtcIiM4ZTAxNTJcIixcIiNjNTFiN2RcIixcIiNkZTc3YWVcIixcIiNmMWI2ZGFcIixcIiNmZGUwZWZcIixcIiNmN2Y3ZjdcIixcIiNlNmY1ZDBcIixcIiNiOGUxODZcIixcIiM3ZmJjNDFcIixcIiM0ZDkyMjFcIixcIiMyNzY0MTlcIl1cbn0sUmRCdToge1xuMzogW1wiI2VmOGE2MlwiLFwiI2Y3ZjdmN1wiLFwiIzY3YTljZlwiXSxcbjQ6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiM5MmM1ZGVcIixcIiMwNTcxYjBcIl0sXG41OiBbXCIjY2EwMDIwXCIsXCIjZjRhNTgyXCIsXCIjZjdmN2Y3XCIsXCIjOTJjNWRlXCIsXCIjMDU3MWIwXCJdLFxuNjogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2QxZTVmMFwiLFwiIzY3YTljZlwiLFwiIzIxNjZhY1wiXSxcbjc6IFtcIiNiMjE4MmJcIixcIiNlZjhhNjJcIixcIiNmZGRiYzdcIixcIiNmN2Y3ZjdcIixcIiNkMWU1ZjBcIixcIiM2N2E5Y2ZcIixcIiMyMTY2YWNcIl0sXG44OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZDFlNWYwXCIsXCIjOTJjNWRlXCIsXCIjNDM5M2MzXCIsXCIjMjE2NmFjXCJdLFxuOTogW1wiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2Y3ZjdmN1wiLFwiI2QxZTVmMFwiLFwiIzkyYzVkZVwiLFwiIzQzOTNjM1wiLFwiIzIxNjZhY1wiXSxcbjEwOiBbXCIjNjcwMDFmXCIsXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZDFlNWYwXCIsXCIjOTJjNWRlXCIsXCIjNDM5M2MzXCIsXCIjMjE2NmFjXCIsXCIjMDUzMDYxXCJdLFxuMTE6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNmN2Y3ZjdcIixcIiNkMWU1ZjBcIixcIiM5MmM1ZGVcIixcIiM0MzkzYzNcIixcIiMyMTY2YWNcIixcIiMwNTMwNjFcIl1cbn0sUmRHeToge1xuMzogW1wiI2VmOGE2MlwiLFwiI2ZmZmZmZlwiLFwiIzk5OTk5OVwiXSxcbjQ6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiNiYWJhYmFcIixcIiM0MDQwNDBcIl0sXG41OiBbXCIjY2EwMDIwXCIsXCIjZjRhNTgyXCIsXCIjZmZmZmZmXCIsXCIjYmFiYWJhXCIsXCIjNDA0MDQwXCJdLFxuNjogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2UwZTBlMFwiLFwiIzk5OTk5OVwiLFwiIzRkNGQ0ZFwiXSxcbjc6IFtcIiNiMjE4MmJcIixcIiNlZjhhNjJcIixcIiNmZGRiYzdcIixcIiNmZmZmZmZcIixcIiNlMGUwZTBcIixcIiM5OTk5OTlcIixcIiM0ZDRkNGRcIl0sXG44OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZTBlMGUwXCIsXCIjYmFiYWJhXCIsXCIjODc4Nzg3XCIsXCIjNGQ0ZDRkXCJdLFxuOTogW1wiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2ZmZmZmZlwiLFwiI2UwZTBlMFwiLFwiI2JhYmFiYVwiLFwiIzg3ODc4N1wiLFwiIzRkNGQ0ZFwiXSxcbjEwOiBbXCIjNjcwMDFmXCIsXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZTBlMGUwXCIsXCIjYmFiYWJhXCIsXCIjODc4Nzg3XCIsXCIjNGQ0ZDRkXCIsXCIjMWExYTFhXCJdLFxuMTE6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNmZmZmZmZcIixcIiNlMGUwZTBcIixcIiNiYWJhYmFcIixcIiM4Nzg3ODdcIixcIiM0ZDRkNGRcIixcIiMxYTFhMWFcIl1cbn0sUmRZbEJ1OiB7XG4zOiBbXCIjZmM4ZDU5XCIsXCIjZmZmZmJmXCIsXCIjOTFiZmRiXCJdLFxuNDogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2FiZDllOVwiLFwiIzJjN2JiNlwiXSxcbjU6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNmZmZmYmZcIixcIiNhYmQ5ZTlcIixcIiMyYzdiYjZcIl0sXG42OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDkwXCIsXCIjZTBmM2Y4XCIsXCIjOTFiZmRiXCIsXCIjNDU3NWI0XCJdLFxuNzogW1wiI2Q3MzAyN1wiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA5MFwiLFwiI2ZmZmZiZlwiLFwiI2UwZjNmOFwiLFwiIzkxYmZkYlwiLFwiIzQ1NzViNFwiXSxcbjg6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOTBcIixcIiNlMGYzZjhcIixcIiNhYmQ5ZTlcIixcIiM3NGFkZDFcIixcIiM0NTc1YjRcIl0sXG45OiBbXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDkwXCIsXCIjZmZmZmJmXCIsXCIjZTBmM2Y4XCIsXCIjYWJkOWU5XCIsXCIjNzRhZGQxXCIsXCIjNDU3NWI0XCJdLFxuMTA6IFtcIiNhNTAwMjZcIixcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOTBcIixcIiNlMGYzZjhcIixcIiNhYmQ5ZTlcIixcIiM3NGFkZDFcIixcIiM0NTc1YjRcIixcIiMzMTM2OTVcIl0sXG4xMTogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA5MFwiLFwiI2ZmZmZiZlwiLFwiI2UwZjNmOFwiLFwiI2FiZDllOVwiLFwiIzc0YWRkMVwiLFwiIzQ1NzViNFwiLFwiIzMxMzY5NVwiXVxufSxTcGVjdHJhbDoge1xuMzogW1wiI2ZjOGQ1OVwiLFwiI2ZmZmZiZlwiLFwiIzk5ZDU5NFwiXSxcbjQ6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNhYmRkYTRcIixcIiMyYjgzYmFcIl0sXG41OiBbXCIjZDcxOTFjXCIsXCIjZmRhZTYxXCIsXCIjZmZmZmJmXCIsXCIjYWJkZGE0XCIsXCIjMmI4M2JhXCJdLFxuNjogW1wiI2Q1M2U0ZlwiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA4YlwiLFwiI2U2ZjU5OFwiLFwiIzk5ZDU5NFwiLFwiIzMyODhiZFwiXSxcbjc6IFtcIiNkNTNlNGZcIixcIiNmYzhkNTlcIixcIiNmZWUwOGJcIixcIiNmZmZmYmZcIixcIiNlNmY1OThcIixcIiM5OWQ1OTRcIixcIiMzMjg4YmRcIl0sXG44OiBbXCIjZDUzZTRmXCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZTZmNTk4XCIsXCIjYWJkZGE0XCIsXCIjNjZjMmE1XCIsXCIjMzI4OGJkXCJdLFxuOTogW1wiI2Q1M2U0ZlwiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2U2ZjU5OFwiLFwiI2FiZGRhNFwiLFwiIzY2YzJhNVwiLFwiIzMyODhiZFwiXSxcbjEwOiBbXCIjOWUwMTQyXCIsXCIjZDUzZTRmXCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZTZmNTk4XCIsXCIjYWJkZGE0XCIsXCIjNjZjMmE1XCIsXCIjMzI4OGJkXCIsXCIjNWU0ZmEyXCJdLFxuMTE6IFtcIiM5ZTAxNDJcIixcIiNkNTNlNGZcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNmZmZmYmZcIixcIiNlNmY1OThcIixcIiNhYmRkYTRcIixcIiM2NmMyYTVcIixcIiMzMjg4YmRcIixcIiM1ZTRmYTJcIl1cbn0sUmRZbEduOiB7XG4zOiBbXCIjZmM4ZDU5XCIsXCIjZmZmZmJmXCIsXCIjOTFjZjYwXCJdLFxuNDogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2E2ZDk2YVwiLFwiIzFhOTY0MVwiXSxcbjU6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNmZmZmYmZcIixcIiNhNmQ5NmFcIixcIiMxYTk2NDFcIl0sXG42OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDhiXCIsXCIjZDllZjhiXCIsXCIjOTFjZjYwXCIsXCIjMWE5ODUwXCJdLFxuNzogW1wiI2Q3MzAyN1wiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2Q5ZWY4YlwiLFwiIzkxY2Y2MFwiLFwiIzFhOTg1MFwiXSxcbjg6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNkOWVmOGJcIixcIiNhNmQ5NmFcIixcIiM2NmJkNjNcIixcIiMxYTk4NTBcIl0sXG45OiBbXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZmZmZmJmXCIsXCIjZDllZjhiXCIsXCIjYTZkOTZhXCIsXCIjNjZiZDYzXCIsXCIjMWE5ODUwXCJdLFxuMTA6IFtcIiNhNTAwMjZcIixcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNkOWVmOGJcIixcIiNhNmQ5NmFcIixcIiM2NmJkNjNcIixcIiMxYTk4NTBcIixcIiMwMDY4MzdcIl0sXG4xMTogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2Q5ZWY4YlwiLFwiI2E2ZDk2YVwiLFwiIzY2YmQ2M1wiLFwiIzFhOTg1MFwiLFwiIzAwNjgzN1wiXVxufSxBY2NlbnQ6IHtcbjM6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIl0sXG40OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCJdLFxuNTogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiLFwiI2ZmZmY5OVwiLFwiIzM4NmNiMFwiXSxcbjY6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIixcIiNmZmZmOTlcIixcIiMzODZjYjBcIixcIiNmMDAyN2ZcIl0sXG43OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCIsXCIjMzg2Y2IwXCIsXCIjZjAwMjdmXCIsXCIjYmY1YjE3XCJdLFxuODogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiLFwiI2ZmZmY5OVwiLFwiIzM4NmNiMFwiLFwiI2YwMDI3ZlwiLFwiI2JmNWIxN1wiLFwiIzY2NjY2NlwiXVxufSxEYXJrMjoge1xuMzogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiXSxcbjQ6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIl0sXG41OiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCIsXCIjZTcyOThhXCIsXCIjNjZhNjFlXCJdLFxuNjogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiLFwiI2U3Mjk4YVwiLFwiIzY2YTYxZVwiLFwiI2U2YWIwMlwiXSxcbjc6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIixcIiM2NmE2MWVcIixcIiNlNmFiMDJcIixcIiNhNjc2MWRcIl0sXG44OiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCIsXCIjZTcyOThhXCIsXCIjNjZhNjFlXCIsXCIjZTZhYjAyXCIsXCIjYTY3NjFkXCIsXCIjNjY2NjY2XCJdXG59LFBhaXJlZDoge1xuMzogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiXSxcbjQ6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIl0sXG41OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCJdLFxuNjogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiXSxcbjc6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIl0sXG44OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCJdLFxuOTogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiLFwiI2ZmN2YwMFwiLFwiI2NhYjJkNlwiXSxcbjEwOiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCIsXCIjY2FiMmQ2XCIsXCIjNmEzZDlhXCJdLFxuMTE6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIixcIiNmZjdmMDBcIixcIiNjYWIyZDZcIixcIiM2YTNkOWFcIixcIiNmZmZmOTlcIl0sXG4xMjogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiLFwiI2ZmN2YwMFwiLFwiI2NhYjJkNlwiLFwiIzZhM2Q5YVwiLFwiI2ZmZmY5OVwiLFwiI2IxNTkyOFwiXVxufSxQYXN0ZWwxOiB7XG4zOiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCJdLFxuNDogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiXSxcbjU6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIl0sXG42OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCIsXCIjZmVkOWE2XCIsXCIjZmZmZmNjXCJdLFxuNzogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiLFwiI2ZlZDlhNlwiLFwiI2ZmZmZjY1wiLFwiI2U1ZDhiZFwiXSxcbjg6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIixcIiNmZmZmY2NcIixcIiNlNWQ4YmRcIixcIiNmZGRhZWNcIl0sXG45OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCIsXCIjZmVkOWE2XCIsXCIjZmZmZmNjXCIsXCIjZTVkOGJkXCIsXCIjZmRkYWVjXCIsXCIjZjJmMmYyXCJdXG59LFBhc3RlbDI6IHtcbjM6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIl0sXG40OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCJdLFxuNTogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiLFwiI2Y0Y2FlNFwiLFwiI2U2ZjVjOVwiXSxcbjY6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIixcIiNmNGNhZTRcIixcIiNlNmY1YzlcIixcIiNmZmYyYWVcIl0sXG43OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCIsXCIjZTZmNWM5XCIsXCIjZmZmMmFlXCIsXCIjZjFlMmNjXCJdLFxuODogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiLFwiI2Y0Y2FlNFwiLFwiI2U2ZjVjOVwiLFwiI2ZmZjJhZVwiLFwiI2YxZTJjY1wiLFwiI2NjY2NjY1wiXVxufSxTZXQxOiB7XG4zOiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCJdLFxuNDogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiXSxcbjU6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIl0sXG42OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCIsXCIjZmY3ZjAwXCIsXCIjZmZmZjMzXCJdLFxuNzogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiLFwiI2ZmN2YwMFwiLFwiI2ZmZmYzM1wiLFwiI2E2NTYyOFwiXSxcbjg6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIixcIiNmZmZmMzNcIixcIiNhNjU2MjhcIixcIiNmNzgxYmZcIl0sXG45OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCIsXCIjZmY3ZjAwXCIsXCIjZmZmZjMzXCIsXCIjYTY1NjI4XCIsXCIjZjc4MWJmXCIsXCIjOTk5OTk5XCJdXG59LFNldDI6IHtcbjM6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIl0sXG40OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCJdLFxuNTogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiLFwiI2U3OGFjM1wiLFwiI2E2ZDg1NFwiXSxcbjY6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIixcIiNlNzhhYzNcIixcIiNhNmQ4NTRcIixcIiNmZmQ5MmZcIl0sXG43OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCIsXCIjYTZkODU0XCIsXCIjZmZkOTJmXCIsXCIjZTVjNDk0XCJdLFxuODogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiLFwiI2U3OGFjM1wiLFwiI2E2ZDg1NFwiLFwiI2ZmZDkyZlwiLFwiI2U1YzQ5NFwiLFwiI2IzYjNiM1wiXVxufSxTZXQzOiB7XG4zOiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCJdLFxuNDogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiXSxcbjU6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIl0sXG42OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCJdLFxuNzogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiXSxcbjg6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIl0sXG45OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCIsXCIjZmNjZGU1XCIsXCIjZDlkOWQ5XCJdLFxuMTA6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIixcIiNkOWQ5ZDlcIixcIiNiYzgwYmRcIl0sXG4xMTogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiLFwiI2ZjY2RlNVwiLFwiI2Q5ZDlkOVwiLFwiI2JjODBiZFwiLFwiI2NjZWJjNVwiXSxcbjEyOiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCIsXCIjZmNjZGU1XCIsXCIjZDlkOWQ5XCIsXCIjYmM4MGJkXCIsXCIjY2NlYmM1XCIsXCIjZmZlZDZmXCJdXG59fTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGNvbG9yYnJld2VyKTtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gY29sb3JicmV3ZXI7XG59IGVsc2Uge1xuICAgIHRoaXMuY29sb3JicmV3ZXIgPSBjb2xvcmJyZXdlcjtcbn1cblxufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29sb3JicmV3ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogW1NpbXBsZSBsaW5lYXIgcmVncmVzc2lvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaW1wbGVfbGluZWFyX3JlZ3Jlc3Npb24pXG4gKiBpcyBhIHNpbXBsZSB3YXkgdG8gZmluZCBhIGZpdHRlZCBsaW5lXG4gKiBiZXR3ZWVuIGEgc2V0IG9mIGNvb3JkaW5hdGVzLiBUaGlzIGFsZ29yaXRobSBmaW5kcyB0aGUgc2xvcGUgYW5kIHktaW50ZXJjZXB0IG9mIGEgcmVncmVzc2lvbiBsaW5lXG4gKiB1c2luZyB0aGUgbGVhc3Qgc3VtIG9mIHNxdWFyZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZGF0YSBhbiBhcnJheSBvZiB0d28tZWxlbWVudCBvZiBhcnJheXMsXG4gKiBsaWtlIGBbWzAsIDFdLCBbMiwgM11dYFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgc2xvcGUgYW5kIGludGVyc2VjdCBvZiByZWdyZXNzaW9uIGxpbmVcbiAqIEBleGFtcGxlXG4gKiBsaW5lYXJSZWdyZXNzaW9uKFtbMCwgMF0sIFsxLCAxXV0pOyAvLyA9PiB7IG06IDEsIGI6IDAgfVxuICovXG5mdW5jdGlvbiBsaW5lYXJSZWdyZXNzaW9uKGRhdGEvKjogQXJyYXk8QXJyYXk8bnVtYmVyPj4gKi8pLyo6IHsgbTogbnVtYmVyLCBiOiBudW1iZXIgfSAqLyB7XG5cbiAgICB2YXIgbSwgYjtcblxuICAgIC8vIFN0b3JlIGRhdGEgbGVuZ3RoIGluIGEgbG9jYWwgdmFyaWFibGUgdG8gcmVkdWNlXG4gICAgLy8gcmVwZWF0ZWQgb2JqZWN0IHByb3BlcnR5IGxvb2t1cHNcbiAgICB2YXIgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgLy9pZiB0aGVyZSdzIG9ubHkgb25lIHBvaW50LCBhcmJpdHJhcmlseSBjaG9vc2UgYSBzbG9wZSBvZiAwXG4gICAgLy9hbmQgYSB5LWludGVyY2VwdCBvZiB3aGF0ZXZlciB0aGUgeSBvZiB0aGUgaW5pdGlhbCBwb2ludCBpc1xuICAgIGlmIChkYXRhTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG0gPSAwO1xuICAgICAgICBiID0gZGF0YVswXVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbml0aWFsaXplIG91ciBzdW1zIGFuZCBzY29wZSB0aGUgYG1gIGFuZCBgYmBcbiAgICAgICAgLy8gdmFyaWFibGVzIHRoYXQgZGVmaW5lIHRoZSBsaW5lLlxuICAgICAgICB2YXIgc3VtWCA9IDAsIHN1bVkgPSAwLFxuICAgICAgICAgICAgc3VtWFggPSAwLCBzdW1YWSA9IDA7XG5cbiAgICAgICAgLy8gVXNlIGxvY2FsIHZhcmlhYmxlcyB0byBncmFiIHBvaW50IHZhbHVlc1xuICAgICAgICAvLyB3aXRoIG1pbmltYWwgb2JqZWN0IHByb3BlcnR5IGxvb2t1cHNcbiAgICAgICAgdmFyIHBvaW50LCB4LCB5O1xuXG4gICAgICAgIC8vIEdhdGhlciB0aGUgc3VtIG9mIGFsbCB4IHZhbHVlcywgdGhlIHN1bSBvZiBhbGxcbiAgICAgICAgLy8geSB2YWx1ZXMsIGFuZCB0aGUgc3VtIG9mIHheMiBhbmQgKHgqeSkgZm9yIGVhY2hcbiAgICAgICAgLy8gdmFsdWUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluIG1hdGggbm90YXRpb24sIHRoZXNlIHdvdWxkIGJlIFNTX3gsIFNTX3ksIFNTX3h4LCBhbmQgU1NfeHlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50ID0gZGF0YVtpXTtcbiAgICAgICAgICAgIHggPSBwb2ludFswXTtcbiAgICAgICAgICAgIHkgPSBwb2ludFsxXTtcblxuICAgICAgICAgICAgc3VtWCArPSB4O1xuICAgICAgICAgICAgc3VtWSArPSB5O1xuXG4gICAgICAgICAgICBzdW1YWCArPSB4ICogeDtcbiAgICAgICAgICAgIHN1bVhZICs9IHggKiB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYG1gIGlzIHRoZSBzbG9wZSBvZiB0aGUgcmVncmVzc2lvbiBsaW5lXG4gICAgICAgIG0gPSAoKGRhdGFMZW5ndGggKiBzdW1YWSkgLSAoc3VtWCAqIHN1bVkpKSAvXG4gICAgICAgICAgICAoKGRhdGFMZW5ndGggKiBzdW1YWCkgLSAoc3VtWCAqIHN1bVgpKTtcblxuICAgICAgICAvLyBgYmAgaXMgdGhlIHktaW50ZXJjZXB0IG9mIHRoZSBsaW5lLlxuICAgICAgICBiID0gKHN1bVkgLyBkYXRhTGVuZ3RoKSAtICgobSAqIHN1bVgpIC8gZGF0YUxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGJvdGggdmFsdWVzIGFzIGFuIG9iamVjdC5cbiAgICByZXR1cm4ge1xuICAgICAgICBtOiBtLFxuICAgICAgICBiOiBiXG4gICAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsaW5lYXJSZWdyZXNzaW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2xpbmVhcl9yZWdyZXNzaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEdpdmVuIHRoZSBvdXRwdXQgb2YgYGxpbmVhclJlZ3Jlc3Npb25gOiBhbiBvYmplY3RcbiAqIHdpdGggYG1gIGFuZCBgYmAgdmFsdWVzIGluZGljYXRpbmcgc2xvcGUgYW5kIGludGVyY2VwdCxcbiAqIHJlc3BlY3RpdmVseSwgZ2VuZXJhdGUgYSBsaW5lIGZ1bmN0aW9uIHRoYXQgdHJhbnNsYXRlc1xuICogeCB2YWx1ZXMgaW50byB5IHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWIgb2JqZWN0IHdpdGggYG1gIGFuZCBgYmAgbWVtYmVycywgcmVwcmVzZW50aW5nXG4gKiBzbG9wZSBhbmQgaW50ZXJzZWN0IG9mIGRlc2lyZWQgbGluZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBtZXRob2QgdGhhdCBjb21wdXRlcyB5LXZhbHVlIGF0IGFueSBnaXZlblxuICogeC12YWx1ZSBvbiB0aGUgbGluZS5cbiAqIEBleGFtcGxlXG4gKiB2YXIgbCA9IGxpbmVhclJlZ3Jlc3Npb25MaW5lKGxpbmVhclJlZ3Jlc3Npb24oW1swLCAwXSwgWzEsIDFdXSkpO1xuICogbCgwKSAvLyA9IDBcbiAqIGwoMikgLy8gPSAyXG4gKiBsaW5lYXJSZWdyZXNzaW9uTGluZSh7IGI6IDAsIG06IDEgfSkoMSk7IC8vID0+IDFcbiAqIGxpbmVhclJlZ3Jlc3Npb25MaW5lKHsgYjogMSwgbTogMSB9KSgxKTsgLy8gPT4gMlxuICovXG5mdW5jdGlvbiBsaW5lYXJSZWdyZXNzaW9uTGluZShtYi8qOiB7IGI6IG51bWJlciwgbTogbnVtYmVyIH0qLykvKjogRnVuY3Rpb24gKi8ge1xuICAgIC8vIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgYSBgeWAgdmFsdWUgZm9yIGVhY2hcbiAgICAvLyB4IHZhbHVlIGl0IGlzIGdpdmVuLCBiYXNlZCBvbiB0aGUgdmFsdWVzIG9mIGBiYCBhbmQgYGFgXG4gICAgLy8gdGhhdCB3ZSBqdXN0IGNvbXB1dGVkLlxuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBtYi5iICsgKG1iLm0gKiB4KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaW5lYXJSZWdyZXNzaW9uTGluZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9saW5lYXJfcmVncmVzc2lvbl9saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbUiBTcXVhcmVkXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZWZmaWNpZW50X29mX2RldGVybWluYXRpb24pXG4gKiB2YWx1ZSBvZiBkYXRhIGNvbXBhcmVkIHdpdGggYSBmdW5jdGlvbiBgZmBcbiAqIGlzIHRoZSBzdW0gb2YgdGhlIHNxdWFyZWQgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgcHJlZGljdGlvblxuICogYW5kIHRoZSBhY3R1YWwgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0geCBpbnB1dCBkYXRhOiB0aGlzIHNob3VsZCBiZSBkb3VibHktbmVzdGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIGZ1bmN0aW9uIGNhbGxlZCBvbiBgW2ldWzBdYCB2YWx1ZXMgd2l0aGluIHRoZSBkYXRhc2V0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSByLXNxdWFyZWQgdmFsdWVcbiAqIEBleGFtcGxlXG4gKiB2YXIgc2FtcGxlcyA9IFtbMCwgMF0sIFsxLCAxXV07XG4gKiB2YXIgcmVncmVzc2lvbkxpbmUgPSBsaW5lYXJSZWdyZXNzaW9uTGluZShsaW5lYXJSZWdyZXNzaW9uKHNhbXBsZXMpKTtcbiAqIHJTcXVhcmVkKHNhbXBsZXMsIHJlZ3Jlc3Npb25MaW5lKTsgLy8gPSAxIHRoaXMgbGluZSBpcyBhIHBlcmZlY3QgZml0XG4gKi9cbmZ1bmN0aW9uIHJTcXVhcmVkKHggLyo6IEFycmF5PEFycmF5PG51bWJlcj4+ICovLCBmdW5jIC8qOiBGdW5jdGlvbiAqLykgLyo6IG51bWJlciAqLyB7XG4gICAgaWYgKHgubGVuZ3RoIDwgMikgeyByZXR1cm4gMTsgfVxuXG4gICAgLy8gQ29tcHV0ZSB0aGUgYXZlcmFnZSB5IHZhbHVlIGZvciB0aGUgYWN0dWFsXG4gICAgLy8gZGF0YSBzZXQgaW4gb3JkZXIgdG8gY29tcHV0ZSB0aGVcbiAgICAvLyBfdG90YWwgc3VtIG9mIHNxdWFyZXNfXG4gICAgdmFyIHN1bSA9IDAsIGF2ZXJhZ2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSB4W2ldWzFdO1xuICAgIH1cbiAgICBhdmVyYWdlID0gc3VtIC8geC5sZW5ndGg7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCBzdW0gb2Ygc3F1YXJlcyAtIHRoZVxuICAgIC8vIHNxdWFyZWQgZGlmZmVyZW5jZSBiZXR3ZWVuIGVhY2ggcG9pbnRcbiAgICAvLyBhbmQgdGhlIGF2ZXJhZ2Ugb2YgYWxsIHBvaW50cy5cbiAgICB2YXIgc3VtT2ZTcXVhcmVzID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc3VtT2ZTcXVhcmVzICs9IE1hdGgucG93KGF2ZXJhZ2UgLSB4W2pdWzFdLCAyKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IGVzdGltYXRlIHRoZSBlcnJvcjogdGhlIHNxdWFyZWRcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVzdGltYXRlIGFuZCB0aGUgYWN0dWFsIGRhdGFcbiAgICAvLyB2YWx1ZSBhdCBlYWNoIHBvaW50LlxuICAgIHZhciBlcnIgPSAwO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgeC5sZW5ndGg7IGsrKykge1xuICAgICAgICBlcnIgKz0gTWF0aC5wb3coeFtrXVsxXSAtIGZ1bmMoeFtrXVswXSksIDIpO1xuICAgIH1cblxuICAgIC8vIEFzIHRoZSBlcnJvciBncm93cyBsYXJnZXIsIGl0cyByYXRpbyB0byB0aGVcbiAgICAvLyBzdW0gb2Ygc3F1YXJlcyBpbmNyZWFzZXMgYW5kIHRoZSByIHNxdWFyZWRcbiAgICAvLyB2YWx1ZSBncm93cyBsb3dlci5cbiAgICByZXR1cm4gMSAtIGVyciAvIHN1bU9mU3F1YXJlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgclNxdWFyZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcl9zcXVhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgbW9kZVNvcnRlZCBmcm9tICcuL21vZGVfc29ydGVkJztcbmltcG9ydCBudW1lcmljU29ydCBmcm9tICcuL251bWVyaWNfc29ydCc7XG5cbi8qKlxuICogVGhlIFttb2RlXShodHRwOi8vYml0Lmx5L1c1SzRZdCkgaXMgdGhlIG51bWJlciB0aGF0IGFwcGVhcnMgaW4gYSBsaXN0IHRoZSBoaWdoZXN0IG51bWJlciBvZiB0aW1lcy5cbiAqIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBtb2RlcyBpbiBhIGxpc3Q6IGluIHRoZSBldmVudCBvZiBhIHRpZSwgdGhpc1xuICogYWxnb3JpdGhtIHdpbGwgcmV0dXJuIHRoZSBtb3N0IHJlY2VudGx5IHNlZW4gbW9kZS5cbiAqXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG5sb2cobikpYCBiZWNhdXNlIGl0IG5lZWRzIHRvIHNvcnQgdGhlIGFycmF5IGludGVybmFsbHlcbiAqIGJlZm9yZSBydW5uaW5nIGFuIGBPKG4pYCBzZWFyY2ggdG8gZmluZCB0aGUgbW9kZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1vZGVcbiAqIEBleGFtcGxlXG4gKiBtb2RlKFswLCAwLCAxXSk7IC8vID0+IDBcbiAqL1xuZnVuY3Rpb24gbW9kZSh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICAvLyBTb3J0aW5nIHRoZSBhcnJheSBsZXRzIHVzIGl0ZXJhdGUgdGhyb3VnaCBpdCBiZWxvdyBhbmQgYmUgc3VyZVxuICAgIC8vIHRoYXQgZXZlcnkgdGltZSB3ZSBzZWUgYSBuZXcgbnVtYmVyIGl0J3MgbmV3IGFuZCB3ZSdsbCBuZXZlclxuICAgIC8vIHNlZSB0aGUgc2FtZSBudW1iZXIgdHdpY2VcbiAgICByZXR1cm4gbW9kZVNvcnRlZChudW1lcmljU29ydCh4KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cbi8qIGdsb2JhbHMgTWFwOiBmYWxzZSAqL1xuXG4vKipcbiAqIFRoZSBbbW9kZV0oaHR0cDovL2JpdC5seS9XNUs0WXQpIGlzIHRoZSBudW1iZXIgdGhhdCBhcHBlYXJzIGluIGEgbGlzdCB0aGUgaGlnaGVzdCBudW1iZXIgb2YgdGltZXMuXG4gKiBUaGVyZSBjYW4gYmUgbXVsdGlwbGUgbW9kZXMgaW4gYSBsaXN0OiBpbiB0aGUgZXZlbnQgb2YgYSB0aWUsIHRoaXNcbiAqIGFsZ29yaXRobSB3aWxsIHJldHVybiB0aGUgbW9zdCByZWNlbnRseSBzZWVuIG1vZGUuXG4gKlxuICogbW9kZUZhc3QgdXNlcyBhIE1hcCBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiB0aGUgbW9kZSwgaW5zdGVhZCBvZiB0aGUgYXBwcm9hY2hcbiAqIHVzZWQgd2l0aCBgbW9kZWAsIGEgc29ydGVkIGFycmF5LiBBcyBhIHJlc3VsdCwgaXQgaXMgZmFzdGVyXG4gKiB0aGFuIGBtb2RlYCBhbmQgc3VwcG9ydHMgYW55IGRhdGEgdHlwZSB0aGF0IGNhbiBiZSBjb21wYXJlZCB3aXRoIGA9PWAuXG4gKiBJdCBhbHNvIHJlcXVpcmVzIGFcbiAqIFtKYXZhU2NyaXB0IGVudmlyb25tZW50IHdpdGggc3VwcG9ydCBmb3IgTWFwXShodHRwczovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNi8jdGVzdC1NYXApLFxuICogYW5kIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgTWFwIGlzIG5vdCBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIFttZWFzdXJlIG9mIGNlbnRyYWwgdGVuZGVuY3ldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyYWxfdGVuZGVuY3kpOlxuICogYSBtZXRob2Qgb2YgZmluZGluZyBhIHR5cGljYWwgb3IgY2VudHJhbCB2YWx1ZSBvZiBhIHNldCBvZiBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IHggYSBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHs/Kn0gbW9kZVxuICogQHRocm93cyB7UmVmZXJlbmNlRXJyb3J9IGlmIHRoZSBKYXZhU2NyaXB0IGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBNYXBcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogbW9kZUZhc3QoWydyYWJiaXRzJywgJ3JhYmJpdHMnLCAnc3F1aXJyZWxzJ10pOyAvLyA9PiAncmFiYml0cydcbiAqL1xuZnVuY3Rpb24gbW9kZUZhc3QvKjo6PFQ+Ki8oeCAvKjogQXJyYXk8VD4gKi8pLyo6ID9UICovIHtcblxuICAgIC8vIFRoaXMgaW5kZXggd2lsbCByZWZsZWN0IHRoZSBpbmNpZGVuY2Ugb2YgZGlmZmVyZW50IHZhbHVlcywgaW5kZXhpbmdcbiAgICAvLyB0aGVtIGxpa2VcbiAgICAvLyB7IHZhbHVlOiBjb3VudCB9XG4gICAgdmFyIGluZGV4ID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gQSBydW5uaW5nIGBtb2RlYCBhbmQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICB2YXIgbW9kZTtcbiAgICB2YXIgbW9kZUNvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3Q291bnQgPSBpbmRleC5nZXQoeFtpXSk7XG4gICAgICAgIGlmIChuZXdDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdDb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDb3VudCA+IG1vZGVDb3VudCkge1xuICAgICAgICAgICAgbW9kZSA9IHhbaV07XG4gICAgICAgICAgICBtb2RlQ291bnQgPSBuZXdDb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpbmRleC5zZXQoeFtpXSwgbmV3Q291bnQpO1xuICAgIH1cblxuICAgIGlmIChtb2RlQ291bnQgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2RlIHJlcXVpcmVzIGF0IGxhc3Qgb25lIGRhdGEgcG9pbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZUZhc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZV9mYXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGlzIHRoZSBsb3dlc3QgbnVtYmVyIGluIHRoZSBhcnJheS4gV2l0aCBhIHNvcnRlZCBhcnJheSxcbiAqIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBhcnJheSBpcyBhbHdheXMgdGhlIHNtYWxsZXN0LCBzbyB0aGlzIGNhbGN1bGF0aW9uXG4gKiBjYW4gYmUgZG9uZSBpbiBvbmUgc3RlcCwgb3IgY29uc3RhbnQgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1pbmltdW0gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtaW5Tb3J0ZWQoWy0xMDAsIC0xMCwgMSwgMiwgNV0pOyAvLyA9PiAtMTAwXG4gKi9cbmZ1bmN0aW9uIG1pblNvcnRlZCh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHJldHVybiB4WzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5Tb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWluX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgbWF4aW11bSBpcyB0aGUgaGlnaGVzdCBudW1iZXIgaW4gdGhlIGFycmF5LiBXaXRoIGEgc29ydGVkIGFycmF5LFxuICogdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgYXJyYXkgaXMgYWx3YXlzIHRoZSBsYXJnZXN0LCBzbyB0aGlzIGNhbGN1bGF0aW9uXG4gKiBjYW4gYmUgZG9uZSBpbiBvbmUgc3RlcCwgb3IgY29uc3RhbnQgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1heGltdW0gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtYXhTb3J0ZWQoWy0xMDAsIC0xMCwgMSwgMiwgNV0pOyAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIG1heFNvcnRlZCh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4geFt4Lmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXhTb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWF4X3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgc2ltcGxlIFtzdW1dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1bW1hdGlvbikgb2YgYW4gYXJyYXlcbiAqIGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGFsbCBudW1iZXJzIHRvZ2V0aGVyLCBzdGFydGluZyBmcm9tIHplcm8uXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm4ge251bWJlcn0gc3VtIG9mIGFsbCBpbnB1dCBudW1iZXJzXG4gKiBAZXhhbXBsZVxuICogc3VtU2ltcGxlKFsxLCAyLCAzXSk7IC8vID0+IDZcbiAqL1xuZnVuY3Rpb24gc3VtU2ltcGxlKHgvKjogQXJyYXk8bnVtYmVyPiAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSArPSB4W2ldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bVNpbXBsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zdW1fc2ltcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbcHJvZHVjdF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHJvZHVjdF8obWF0aGVtYXRpY3MpKSBvZiBhbiBhcnJheVxuICogaXMgdGhlIHJlc3VsdCBvZiBtdWx0aXBseWluZyBhbGwgbnVtYmVycyB0b2dldGhlciwgc3RhcnRpbmcgdXNpbmcgb25lIGFzIHRoZSBtdWx0aXBsaWNhdGl2ZSBpZGVudGl0eS5cbiAqXG4gKiBUaGlzIHJ1bnMgb24gYE8obilgLCBsaW5lYXIgdGltZSBpbiByZXNwZWN0IHRvIHRoZSBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfSBwcm9kdWN0IG9mIGFsbCBpbnB1dCBudW1iZXJzXG4gKiBAZXhhbXBsZVxuICogcHJvZHVjdChbMSwgMiwgMywgNF0pOyAvLyA9PiAyNFxuICovXG5mdW5jdGlvbiBwcm9kdWN0KHgvKjogQXJyYXk8bnVtYmVyPiAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdmFsdWUgPSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSAqPSB4W2ldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcHJvZHVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lZGlhbiBmcm9tICcuL21lZGlhbic7XG5cbi8qKlxuICogVGhlIFtNZWRpYW4gQWJzb2x1dGUgRGV2aWF0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01lZGlhbl9hYnNvbHV0ZV9kZXZpYXRpb24pIGlzXG4gKiBhIHJvYnVzdCBtZWFzdXJlIG9mIHN0YXRpc3RpY2FsXG4gKiBkaXNwZXJzaW9uLiBJdCBpcyBtb3JlIHJlc2lsaWVudCB0byBvdXRsaWVycyB0aGFuIHRoZSBzdGFuZGFyZCBkZXZpYXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGlucHV0IGFycmF5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtZWRpYW4gYWJzb2x1dGUgZGV2aWF0aW9uXG4gKiBAZXhhbXBsZVxuICogbWVkaWFuQWJzb2x1dGVEZXZpYXRpb24oWzEsIDEsIDIsIDIsIDQsIDYsIDldKTsgLy8gPT4gMVxuICovXG5mdW5jdGlvbiBtZWRpYW5BYnNvbHV0ZURldmlhdGlvbih4Lyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1hZCBvZiBub3RoaW5nIGlzIG51bGxcbiAgICB2YXIgbWVkaWFuVmFsdWUgPSBtZWRpYW4oeCksXG4gICAgICAgIG1lZGlhbkFic29sdXRlRGV2aWF0aW9ucyA9IFtdO1xuXG4gICAgLy8gTWFrZSBhIGxpc3Qgb2YgYWJzb2x1dGUgZGV2aWF0aW9ucyBmcm9tIHRoZSBtZWRpYW5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVkaWFuQWJzb2x1dGVEZXZpYXRpb25zLnB1c2goTWF0aC5hYnMoeFtpXSAtIG1lZGlhblZhbHVlKSk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgbWVkaWFuIHZhbHVlIG9mIHRoYXQgbGlzdFxuICAgIHJldHVybiBtZWRpYW4obWVkaWFuQWJzb2x1dGVEZXZpYXRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVkaWFuQWJzb2x1dGVEZXZpYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX2Fic29sdXRlX2RldmlhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBhIHNwZWNpZmllZCBzaXplLiBUaGlzIGZ1bmN0aW9uXG4gKiBoYXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgW1BIUCdzIGFycmF5X2NodW5rXShodHRwOi8vcGhwLm5ldC9tYW51YWwvZW4vZnVuY3Rpb24uYXJyYXktY2h1bmsucGhwKVxuICogZnVuY3Rpb24sIGFuZCB0aHVzIHdpbGwgaW5zZXJ0IHNtYWxsZXItc2l6ZWQgY2h1bmtzIGF0IHRoZSBlbmQgaWZcbiAqIHRoZSBpbnB1dCBzaXplIGlzIG5vdCBkaXZpc2libGUgYnkgdGhlIGNodW5rIHNpemUuXG4gKlxuICogYHhgIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGFycmF5LCBhbmQgYGNodW5rU2l6ZWAgYSBudW1iZXIuXG4gKiBUaGUgYHhgIGFycmF5IGNhbiBjb250YWluIGFueSBraW5kIG9mIGRhdGEuXG4gKlxuICogQHBhcmFtIHtBcnJheX0geCBhIHNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGNodW5rU2l6ZSBzaXplIG9mIGVhY2ggb3V0cHV0IGFycmF5LiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYSBjaHVua2VkIGFycmF5XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgY2h1bmsgc2l6ZSBpcyBsZXNzIHRoYW4gMSBvciBub3QgYW4gaW50ZWdlclxuICogQGV4YW1wbGVcbiAqIGNodW5rKFsxLCAyLCAzLCA0LCA1LCA2XSwgMik7XG4gKiAvLyA9PiBbWzEsIDJdLCBbMywgNF0sIFs1LCA2XV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoeC8qOkFycmF5PGFueT4qLywgY2h1bmtTaXplLyo6bnVtYmVyKi8pLyo6P0FycmF5PEFycmF5PGFueT4+Ki8ge1xuXG4gICAgLy8gYSBsaXN0IG9mIHJlc3VsdCBjaHVua3MsIGFzIGFycmF5cyBpbiBhbiBhcnJheVxuICAgIHZhciBvdXRwdXQgPSBbXTtcblxuICAgIC8vIGBjaHVua1NpemVgIG11c3QgYmUgemVybyBvciBoaWdoZXIgLSBvdGhlcndpc2UgdGhlIGxvb3AgYmVsb3csXG4gICAgLy8gaW4gd2hpY2ggd2UgY2FsbCBgc3RhcnQgKz0gY2h1bmtTaXplYCwgd2lsbCBsb29wIGluZmluaXRlbHkuXG4gICAgLy8gU28sIHdlJ2xsIGRldGVjdCBhbmQgdGhyb3cgaW4gdGhhdCBjYXNlIHRvIGluZGljYXRlXG4gICAgLy8gaW52YWxpZCBpbnB1dC5cbiAgICBpZiAoY2h1bmtTaXplIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NodW5rIHNpemUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmZsb29yKGNodW5rU2l6ZSkgIT09IGNodW5rU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NodW5rIHNpemUgbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG4gICAgfVxuXG4gICAgLy8gYHN0YXJ0YCBpcyB0aGUgaW5kZXggYXQgd2hpY2ggYC5zbGljZWAgd2lsbCBzdGFydCBzZWxlY3RpbmdcbiAgICAvLyBuZXcgYXJyYXkgZWxlbWVudHNcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgeC5sZW5ndGg7IHN0YXJ0ICs9IGNodW5rU2l6ZSkge1xuXG4gICAgICAgIC8vIGZvciBlYWNoIGNodW5rLCBzbGljZSB0aGF0IHBhcnQgb2YgdGhlIGFycmF5IGFuZCBhZGQgaXRcbiAgICAgICAgLy8gdG8gdGhlIG91dHB1dC4gVGhlIGAuc2xpY2VgIGZ1bmN0aW9uIGRvZXMgbm90IGNoYW5nZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgYXJyYXkuXG4gICAgICAgIG91dHB1dC5wdXNoKHguc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY2h1bmtTaXplKSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNodW5rO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NodW5rLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFNhbXBsaW5nIHdpdGggcmVwbGFjZW1lbnQgaXMgYSB0eXBlIG9mIHNhbXBsaW5nIHRoYXQgYWxsb3dzIHRoZSBzYW1lXG4gKiBpdGVtIHRvIGJlIHBpY2tlZCBvdXQgb2YgYSBwb3B1bGF0aW9uIG1vcmUgdGhhbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IHggYW4gYXJyYXkgb2YgYW55IGtpbmQgb2YgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIGNvdW50IG9mIGhvdyBtYW55IGVsZW1lbnRzIHRvIHRha2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyYW5kb21Tb3VyY2U9TWF0aC5yYW5kb21dIGFuIG9wdGlvbmFsIGVudHJvcHkgc291cmNlIHRoYXRcbiAqIHJldHVybnMgbnVtYmVycyBiZXR3ZWVuIDAgaW5jbHVzaXZlIGFuZCAxIGV4Y2x1c2l2ZTogdGhlIHJhbmdlIFswLCAxKVxuICogQHJldHVybiB7QXJyYXl9IG4gc2FtcGxlZCBpdGVtcyBmcm9tIHRoZSBwb3B1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIHZhbHVlcyA9IFsxLCAyLCAzLCA0XTtcbiAqIHNhbXBsZVdpdGhSZXBsYWNlbWVudCh2YWx1ZXMsIDIpOyAvLyByZXR1cm5zIDIgcmFuZG9tIHZhbHVlcywgbGlrZSBbMiwgNF07XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVdpdGhSZXBsYWNlbWVudC8qOjo8VD4qLyhcbiAgICB4Lyo6IEFycmF5PFQ+ICovLFxuICAgIG4vKjogbnVtYmVyICovLFxuICAgIHJhbmRvbVNvdXJjZS8qOiA/RnVuY3Rpb24gKi8pIHtcblxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gYSBjdXN0b20gcmFuZG9tIG51bWJlciBzb3VyY2UgY2FuIGJlIHByb3ZpZGVkIGlmIHlvdSB3YW50IHRvIHVzZVxuICAgIC8vIGEgZml4ZWQgc2VlZCBvciBhbm90aGVyIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLCBsaWtlXG4gICAgLy8gW3JhbmRvbS1qc10oaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvcmFuZG9tLWpzKVxuICAgIHJhbmRvbVNvdXJjZSA9IHJhbmRvbVNvdXJjZSB8fCBNYXRoLnJhbmRvbTtcblxuICAgIHZhciBsZW5ndGggPSB4Lmxlbmd0aDtcbiAgICB2YXIgc2FtcGxlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbVNvdXJjZSgpICogbGVuZ3RoKTtcblxuICAgICAgICBzYW1wbGUucHVzaCh4W2luZGV4XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlV2l0aFJlcGxhY2VtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV93aXRoX3JlcGxhY2VtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICcuL3NodWZmbGUnO1xuXG4vKipcbiAqIENyZWF0ZSBhIFtzaW1wbGUgcmFuZG9tIHNhbXBsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaW1wbGVfcmFuZG9tX3NhbXBsZSlcbiAqIGZyb20gYSBnaXZlbiBhcnJheSBvZiBgbmAgZWxlbWVudHMuXG4gKlxuICogVGhlIHNhbXBsZWQgdmFsdWVzIHdpbGwgYmUgaW4gYW55IG9yZGVyLCBub3QgbmVjZXNzYXJpbHkgdGhlIG9yZGVyXG4gKiB0aGV5IGFwcGVhciBpbiB0aGUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSB4IGlucHV0IGFycmF5LiBjYW4gY29udGFpbiBhbnkgdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gY291bnQgb2YgaG93IG1hbnkgZWxlbWVudHMgdG8gdGFrZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JhbmRvbVNvdXJjZT1NYXRoLnJhbmRvbV0gYW4gb3B0aW9uYWwgZW50cm9weSBzb3VyY2UgdGhhdFxuICogcmV0dXJucyBudW1iZXJzIGJldHdlZW4gMCBpbmNsdXNpdmUgYW5kIDEgZXhjbHVzaXZlOiB0aGUgcmFuZ2UgWzAsIDEpXG4gKiBAcmV0dXJuIHtBcnJheX0gc3Vic2V0IG9mIG4gZWxlbWVudHMgaW4gb3JpZ2luYWwgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHZhbHVlcyA9IFsxLCAyLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAqIHNhbXBsZSh2YWx1ZXMsIDMpOyAvLyByZXR1cm5zIDMgcmFuZG9tIHZhbHVlcywgbGlrZSBbMiwgNSwgOF07XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZS8qOjogPFQ+ICovKFxuICAgIHggLyo6IEFycmF5PFQ+ICovLFxuICAgIG4gLyo6IG51bWJlciAqLyxcbiAgICByYW5kb21Tb3VyY2UgLyo6ID9GdW5jdGlvbiAqLykgLyo6IEFycmF5PFQ+ICovIHtcbiAgICAvLyBzaHVmZmxlIHRoZSBvcmlnaW5hbCBhcnJheSB1c2luZyBhIGZpc2hlci15YXRlcyBzaHVmZmxlXG4gICAgdmFyIHNodWZmbGVkID0gc2h1ZmZsZSh4LCByYW5kb21Tb3VyY2UpO1xuXG4gICAgLy8gYW5kIHRoZW4gcmV0dXJuIGEgc3Vic2V0IG9mIGl0IC0gdGhlIGZpcnN0IGBuYCBlbGVtZW50cy5cbiAgICByZXR1cm4gc2h1ZmZsZWQuc2xpY2UoMCwgbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBudW1lcmljU29ydCBmcm9tICcuL251bWVyaWNfc29ydCc7XG5pbXBvcnQgdW5pcXVlQ291bnRTb3J0ZWQgZnJvbSAnLi91bmlxdWVfY291bnRfc29ydGVkJztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgY29sdW1uIHggcm93IG1hdHJpeC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gbWF0cml4XG4gKiBAZXhhbXBsZVxuICogbWFrZU1hdHJpeCgxMCwgMTApO1xuICovXG5mdW5jdGlvbiBtYWtlTWF0cml4KGNvbHVtbnMsIHJvd3MpIHtcbiAgICB2YXIgbWF0cml4ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvd3M7IGorKykge1xuICAgICAgICAgICAgY29sdW1uLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0cml4LnB1c2goY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgaW5jcmVtZW50YWxseSBjb21wdXRlZCB2YWx1ZXMgYmFzZWQgb24gdGhlIHN1bXMgYW5kIHN1bXMgb2ZcbiAqIHNxdWFyZXMgZm9yIHRoZSBkYXRhIGFycmF5XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBqXG4gKiBAcGFyYW0ge251bWJlcn0gaVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzdW1zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHN1bXNPZlNxdWFyZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqIEBleGFtcGxlXG4gKiBzc3EoMCwgMSwgWy0xLCAwLCAyXSwgWzEsIDEsIDVdKTtcbiAqL1xuZnVuY3Rpb24gc3NxKGosIGksIHN1bXMsIHN1bXNPZlNxdWFyZXMpIHtcbiAgICB2YXIgc2ppOyAvLyBzKGosIGkpXG4gICAgaWYgKGogPiAwKSB7XG4gICAgICAgIHZhciBtdWppID0gKHN1bXNbaV0gLSBzdW1zW2ogLSAxXSkgLyAoaSAtIGogKyAxKTsgLy8gbXUoaiwgaSlcbiAgICAgICAgc2ppID0gc3Vtc09mU3F1YXJlc1tpXSAtIHN1bXNPZlNxdWFyZXNbaiAtIDFdIC0gKGkgLSBqICsgMSkgKiBtdWppICogbXVqaTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzamkgPSBzdW1zT2ZTcXVhcmVzW2ldIC0gc3Vtc1tpXSAqIHN1bXNbaV0gLyAoaSArIDEpO1xuICAgIH1cbiAgICBpZiAoc2ppIDwgMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHNqaTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJlY3Vyc2l2ZWx5IGRpdmlkZXMgYW5kIGNvbnF1ZXJzIGNvbXB1dGF0aW9uc1xuICogZm9yIGNsdXN0ZXIgalxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaU1pbiBNaW5pbXVtIGluZGV4IGluIGNsdXN0ZXIgdG8gYmUgY29tcHV0ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpTWF4IE1heGltdW0gaW5kZXggaW4gY2x1c3RlciB0byBiZSBjb21wdXRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGNsdXN0ZXIgSW5kZXggb2YgdGhlIGNsdXN0ZXIgY3VycmVudGx5IGJlaW5nIGNvbXB1dGVkXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGJhY2t0cmFja01hdHJpeFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzdW1zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHN1bXNPZlNxdWFyZXNcbiAqL1xuZnVuY3Rpb24gZmlsbE1hdHJpeENvbHVtbihpTWluLCBpTWF4LCBjbHVzdGVyLCBtYXRyaXgsIGJhY2t0cmFja01hdHJpeCwgc3Vtcywgc3Vtc09mU3F1YXJlcykge1xuICAgIGlmIChpTWluID4gaU1heCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgYXQgbWlkcG9pbnQgYmV0d2VlbiBpTWluIGFuZCBpTWF4XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKChpTWluICsgaU1heCkgLyAyKTtcblxuICAgIG1hdHJpeFtjbHVzdGVyXVtpXSA9IG1hdHJpeFtjbHVzdGVyIC0gMV1baSAtIDFdO1xuICAgIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyXVtpXSA9IGk7XG5cbiAgICB2YXIgamxvdyA9IGNsdXN0ZXI7IC8vIHRoZSBsb3dlciBlbmQgZm9yIGpcblxuICAgIGlmIChpTWluID4gY2x1c3Rlcikge1xuICAgICAgICBqbG93ID0gTWF0aC5tYXgoamxvdywgYmFja3RyYWNrTWF0cml4W2NsdXN0ZXJdW2lNaW4gLSAxXSB8fCAwKTtcbiAgICB9XG4gICAgamxvdyA9IE1hdGgubWF4KGpsb3csIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyIC0gMV1baV0gfHwgMCk7XG5cbiAgICB2YXIgamhpZ2ggPSBpIC0gMTsgLy8gdGhlIHVwcGVyIGVuZCBmb3IgalxuICAgIGlmIChpTWF4IDwgbWF0cml4Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgamhpZ2ggPSBNYXRoLm1pbihqaGlnaCwgYmFja3RyYWNrTWF0cml4W2NsdXN0ZXJdW2lNYXggKyAxXSB8fCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc2ppO1xuICAgIHZhciBzamxvd2k7XG4gICAgdmFyIHNzcWpsb3c7XG4gICAgdmFyIHNzcWo7XG4gICAgZm9yICh2YXIgaiA9IGpoaWdoOyBqID49IGpsb3c7IC0taikge1xuICAgICAgICBzamkgPSBzc3EoaiwgaSwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG5cbiAgICAgICAgaWYgKHNqaSArIG1hdHJpeFtjbHVzdGVyIC0gMV1bamxvdyAtIDFdID49IG1hdHJpeFtjbHVzdGVyXVtpXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeGFtaW5lIHRoZSBsb3dlciBib3VuZCBvZiB0aGUgY2x1c3RlciBib3JkZXJcbiAgICAgICAgc2psb3dpID0gc3NxKGpsb3csIGksIHN1bXMsIHN1bXNPZlNxdWFyZXMpO1xuXG4gICAgICAgIHNzcWpsb3cgPSBzamxvd2kgKyBtYXRyaXhbY2x1c3RlciAtIDFdW2psb3cgLSAxXTtcblxuICAgICAgICBpZiAoc3NxamxvdyA8IG1hdHJpeFtjbHVzdGVyXVtpXSkge1xuICAgICAgICAgICAgLy8gU2hyaW5rIHRoZSBsb3dlciBib3VuZFxuICAgICAgICAgICAgbWF0cml4W2NsdXN0ZXJdW2ldID0gc3NxamxvdztcbiAgICAgICAgICAgIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyXVtpXSA9IGpsb3c7XG4gICAgICAgIH1cbiAgICAgICAgamxvdysrO1xuXG4gICAgICAgIHNzcWogPSBzamkgKyBtYXRyaXhbY2x1c3RlciAtIDFdW2ogLSAxXTtcbiAgICAgICAgaWYgKHNzcWogPCBtYXRyaXhbY2x1c3Rlcl1baV0pIHtcbiAgICAgICAgICAgIG1hdHJpeFtjbHVzdGVyXVtpXSA9IHNzcWo7XG4gICAgICAgICAgICBiYWNrdHJhY2tNYXRyaXhbY2x1c3Rlcl1baV0gPSBqO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbE1hdHJpeENvbHVtbihpTWluLCBpIC0gMSwgY2x1c3RlciwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgsIHN1bXMsIHN1bXNPZlNxdWFyZXMpO1xuICAgIGZpbGxNYXRyaXhDb2x1bW4oaSArIDEsIGlNYXgsIGNsdXN0ZXIsIG1hdHJpeCwgYmFja3RyYWNrTWF0cml4LCBzdW1zLCBzdW1zT2ZTcXVhcmVzKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgbWFpbiBtYXRyaWNlcyB1c2VkIGluIENrbWVhbnMgYW5kIGtpY2tzXG4gKiBvZmYgdGhlIGRpdmlkZSBhbmQgY29ucXVlciBjbHVzdGVyIGNvbXB1dGF0aW9uIHN0cmF0ZWd5XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZGF0YSBzb3J0ZWQgYXJyYXkgb2YgdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGJhY2t0cmFja01hdHJpeFxuICovXG5mdW5jdGlvbiBmaWxsTWF0cmljZXMoZGF0YSwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgpIHtcbiAgICB2YXIgblZhbHVlcyA9IG1hdHJpeFswXS5sZW5ndGg7XG5cbiAgICAvLyBTaGlmdCB2YWx1ZXMgYnkgdGhlIG1lZGlhbiB0byBpbXByb3ZlIG51bWVyaWMgc3RhYmlsaXR5XG4gICAgdmFyIHNoaWZ0ID0gZGF0YVtNYXRoLmZsb29yKG5WYWx1ZXMgLyAyKV07XG5cbiAgICAvLyBDdW11bGF0aXZlIHN1bSBhbmQgY3VtdWxhdGl2ZSBzdW0gb2Ygc3F1YXJlcyBmb3IgYWxsIHZhbHVlcyBpbiBkYXRhIGFycmF5XG4gICAgdmFyIHN1bXMgPSBbXTtcbiAgICB2YXIgc3Vtc09mU3F1YXJlcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaXJzdCBjb2x1bW4gaW4gbWF0cml4ICYgYmFja3RyYWNrTWF0cml4XG4gICAgZm9yICh2YXIgaSA9IDAsIHNoaWZ0ZWRWYWx1ZTsgaSA8IG5WYWx1ZXM7ICsraSkge1xuICAgICAgICBzaGlmdGVkVmFsdWUgPSBkYXRhW2ldIC0gc2hpZnQ7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBzdW1zLnB1c2goc2hpZnRlZFZhbHVlKTtcbiAgICAgICAgICAgIHN1bXNPZlNxdWFyZXMucHVzaChzaGlmdGVkVmFsdWUgKiBzaGlmdGVkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vtcy5wdXNoKHN1bXNbaSAtIDFdICsgc2hpZnRlZFZhbHVlKTtcbiAgICAgICAgICAgIHN1bXNPZlNxdWFyZXMucHVzaChzdW1zT2ZTcXVhcmVzW2kgLSAxXSArIHNoaWZ0ZWRWYWx1ZSAqIHNoaWZ0ZWRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXplIGZvciBjbHVzdGVyID0gMFxuICAgICAgICBtYXRyaXhbMF1baV0gPSBzc3EoMCwgaSwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG4gICAgICAgIGJhY2t0cmFja01hdHJpeFswXVtpXSA9IDA7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVzdCBvZiB0aGUgY29sdW1uc1xuICAgIHZhciBpTWluO1xuICAgIGZvciAodmFyIGNsdXN0ZXIgPSAxOyBjbHVzdGVyIDwgbWF0cml4Lmxlbmd0aDsgKytjbHVzdGVyKSB7XG4gICAgICAgIGlmIChjbHVzdGVyIDwgbWF0cml4Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlNaW4gPSBjbHVzdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBjb21wdXRlIG1hdHJpeFtLLTFdWzBdIC4uLiBtYXRyaXhbSy0xXVtOLTJdXG4gICAgICAgICAgICBpTWluID0gblZhbHVlcyAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmaWxsTWF0cml4Q29sdW1uKGlNaW4sIG5WYWx1ZXMgLSAxLCBjbHVzdGVyLCBtYXRyaXgsIGJhY2t0cmFja01hdHJpeCwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIENrbWVhbnMgY2x1c3RlcmluZyBpcyBhbiBpbXByb3ZlbWVudCBvbiBoZXVyaXN0aWMtYmFzZWQgY2x1c3RlcmluZ1xuICogYXBwcm9hY2hlcyBsaWtlIEplbmtzLiBUaGUgYWxnb3JpdGhtIHdhcyBkZXZlbG9wZWQgaW5cbiAqIFtIYWl6aG91IFdhbmcgYW5kIE1pbmd6aG91IFNvbmddKGh0dHA6Ly9qb3VybmFsLnItcHJvamVjdC5vcmcvYXJjaGl2ZS8yMDExLTIvUkpvdXJuYWxfMjAxMS0yX1dhbmcrU29uZy5wZGYpXG4gKiBhcyBhIFtkeW5hbWljIHByb2dyYW1taW5nXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EeW5hbWljX3Byb2dyYW1taW5nKSBhcHByb2FjaFxuICogdG8gdGhlIHByb2JsZW0gb2YgY2x1c3RlcmluZyBudW1lcmljIGRhdGEgaW50byBncm91cHMgd2l0aCB0aGUgbGVhc3RcbiAqIHdpdGhpbi1ncm91cCBzdW0tb2Ytc3F1YXJlZC1kZXZpYXRpb25zLlxuICpcbiAqIE1pbmltaXppbmcgdGhlIGRpZmZlcmVuY2Ugd2l0aGluIGdyb3VwcyAtIHdoYXQgV2FuZyAmIFNvbmcgcmVmZXIgdG8gYXNcbiAqIGB3aXRoaW5zc2AsIG9yIHdpdGhpbiBzdW0tb2Ytc3F1YXJlcywgbWVhbnMgdGhhdCBncm91cHMgYXJlIG9wdGltYWxseVxuICogaG9tb2dlbm91cyB3aXRoaW4gYW5kIHRoZSBkYXRhIGlzIHNwbGl0IGludG8gcmVwcmVzZW50YXRpdmUgZ3JvdXBzLlxuICogVGhpcyBpcyB2ZXJ5IHVzZWZ1bCBmb3IgdmlzdWFsaXphdGlvbiwgd2hlcmUgeW91IG1heSB3YW50IHRvIHJlcHJlc2VudFxuICogYSBjb250aW51b3VzIHZhcmlhYmxlIGluIGRpc2NyZXRlIGNvbG9yIG9yIHN0eWxlIGdyb3Vwcy4gVGhpcyBmdW5jdGlvblxuICogY2FuIHByb3ZpZGUgZ3JvdXBzIHRoYXQgZW1waGFzaXplIGRpZmZlcmVuY2VzIGJldHdlZW4gZGF0YS5cbiAqXG4gKiBCZWluZyBhIGR5bmFtaWMgYXBwcm9hY2gsIHRoaXMgYWxnb3JpdGhtIGlzIGJhc2VkIG9uIHR3byBtYXRyaWNlcyB0aGF0XG4gKiBzdG9yZSBpbmNyZW1lbnRhbGx5LWNvbXB1dGVkIHZhbHVlcyBmb3Igc3F1YXJlZCBkZXZpYXRpb25zIGFuZCBiYWNrdHJhY2tpbmdcbiAqIGluZGV4ZXMuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiBDa21lYW5zIDMuNC42LCB3aGljaCBpbnRyb2R1Y2VkIGEgbmV3IGRpdmlkZVxuICogYW5kIGNvbnF1ZXIgYXBwcm9hY2ggdGhhdCBpbXByb3ZlZCBydW50aW1lIGZyb20gTyhrbl4yKSB0byBPKGtuIGxvZyhuKSkuXG4gKlxuICogVW5saWtlIHRoZSBbb3JpZ2luYWwgaW1wbGVtZW50YXRpb25dKGh0dHBzOi8vY3Jhbi5yLXByb2plY3Qub3JnL3dlYi9wYWNrYWdlcy9Da21lYW5zLjFkLmRwL2luZGV4Lmh0bWwpLFxuICogdGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBpbmNsdWRlIGFueSBjb2RlIHRvIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lXG4gKiB0aGUgb3B0aW1hbCBudW1iZXIgb2YgY2x1c3RlcnM6IHRoaXMgaW5mb3JtYXRpb24gbmVlZHMgdG8gYmUgZXhwbGljaXRseVxuICogcHJvdmlkZWQuXG4gKlxuICogIyMjIFJlZmVyZW5jZXNcbiAqIF9Da21lYW5zLjFkLmRwOiBPcHRpbWFsIGstbWVhbnMgQ2x1c3RlcmluZyBpbiBPbmUgRGltZW5zaW9uIGJ5IER5bmFtaWNcbiAqIFByb2dyYW1taW5nXyBIYWl6aG91IFdhbmcgYW5kIE1pbmd6aG91IFNvbmcgSVNTTiAyMDczLTQ4NTlcbiAqXG4gKiBmcm9tIFRoZSBSIEpvdXJuYWwgVm9sLiAzLzIsIERlY2VtYmVyIDIwMTFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dCBkYXRhLCBhcyBhbiBhcnJheSBvZiBudW1iZXIgdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbkNsdXN0ZXJzIG51bWJlciBvZiBkZXNpcmVkIGNsYXNzZXMuIFRoaXMgY2Fubm90IGJlXG4gKiBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlIGRhdGEgYXJyYXkuXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNsdXN0ZXJlZCBpbnB1dFxuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSBudW1iZXIgb2YgcmVxdWVzdGVkIGNsdXN0ZXJzIGlzIGhpZ2hlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBkYXRhXG4gKiBAZXhhbXBsZVxuICogY2ttZWFucyhbLTEsIDIsIC0xLCAyLCA0LCA1LCA2LCAtMSwgMiwgLTFdLCAzKTtcbiAqIC8vIFRoZSBpbnB1dCwgY2x1c3RlcmVkIGludG8gZ3JvdXBzIG9mIHNpbWlsYXIgbnVtYmVycy5cbiAqIC8vPSBbWy0xLCAtMSwgLTEsIC0xXSwgWzIsIDIsIDJdLCBbNCwgNSwgNl1dKTtcbiAqL1xuZnVuY3Rpb24gY2ttZWFucyhcbiAgICB4Lyo6IEFycmF5PG51bWJlcj4gKi8sXG4gICAgbkNsdXN0ZXJzLyo6IG51bWJlciAqLykvKjogQXJyYXk8QXJyYXk8bnVtYmVyPj4gKi8ge1xuXG4gICAgaWYgKG5DbHVzdGVycyA+IHgubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGdlbmVyYXRlIG1vcmUgY2xhc3NlcyB0aGFuIHRoZXJlIGFyZSBkYXRhIHZhbHVlcycpO1xuICAgIH1cblxuICAgIHZhciBzb3J0ZWQgPSBudW1lcmljU29ydCh4KSxcbiAgICAgICAgLy8gd2UnbGwgdXNlIHRoaXMgYXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNsdXN0ZXJzXG4gICAgICAgIHVuaXF1ZUNvdW50ID0gdW5pcXVlQ291bnRTb3J0ZWQoc29ydGVkKTtcblxuICAgIC8vIGlmIGFsbCBvZiB0aGUgaW5wdXQgdmFsdWVzIGFyZSBpZGVudGljYWwsIHRoZXJlJ3Mgb25lIGNsdXN0ZXJcbiAgICAvLyB3aXRoIGFsbCBvZiB0aGUgaW5wdXQgaW4gaXQuXG4gICAgaWYgKHVuaXF1ZUNvdW50ID09PSAxKSB7XG4gICAgICAgIHJldHVybiBbc29ydGVkXTtcbiAgICB9XG5cbiAgICAvLyBuYW1lZCAnUycgb3JpZ2luYWxseVxuICAgIHZhciBtYXRyaXggPSBtYWtlTWF0cml4KG5DbHVzdGVycywgc29ydGVkLmxlbmd0aCksXG4gICAgICAgIC8vIG5hbWVkICdKJyBvcmlnaW5hbGx5XG4gICAgICAgIGJhY2t0cmFja01hdHJpeCA9IG1ha2VNYXRyaXgobkNsdXN0ZXJzLCBzb3J0ZWQubGVuZ3RoKTtcblxuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHByb2dyYW1taW5nIHdheSB0byBzb2x2ZSB0aGUgcHJvYmxlbSBvZiBtaW5pbWl6aW5nXG4gICAgLy8gd2l0aGluLWNsdXN0ZXIgc3VtIG9mIHNxdWFyZXMuIEl0J3Mgc2ltaWxhciB0byBsaW5lYXIgcmVncmVzc2lvblxuICAgIC8vIGluIHRoaXMgd2F5LCBhbmQgdGhpcyBjYWxjdWxhdGlvbiBpbmNyZW1lbnRhbGx5IGNvbXB1dGVzIHRoZVxuICAgIC8vIHN1bSBvZiBzcXVhcmVzIHRoYXQgYXJlIGxhdGVyIHJlYWQuXG4gICAgZmlsbE1hdHJpY2VzKHNvcnRlZCwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgpO1xuXG4gICAgLy8gVGhlIHJlYWwgd29yayBvZiBDa21lYW5zIGNsdXN0ZXJpbmcgaGFwcGVucyBpbiB0aGUgbWF0cml4IGdlbmVyYXRpb246XG4gICAgLy8gdGhlIGdlbmVyYXRlZCBtYXRyaWNlcyBlbmNvZGUgYWxsIHBvc3NpYmxlIGNsdXN0ZXJpbmcgY29tYmluYXRpb25zLCBhbmRcbiAgICAvLyBvbmNlIHRoZXkncmUgZ2VuZXJhdGVkIHdlIGNhbiBzb2x2ZSBmb3IgdGhlIGJlc3QgY2x1c3RlcmluZyBncm91cHNcbiAgICAvLyB2ZXJ5IHF1aWNrbHkuXG4gICAgdmFyIGNsdXN0ZXJzID0gW10sXG4gICAgICAgIGNsdXN0ZXJSaWdodCA9IGJhY2t0cmFja01hdHJpeFswXS5sZW5ndGggLSAxO1xuXG4gICAgLy8gQmFja3RyYWNrIHRoZSBjbHVzdGVycyBmcm9tIHRoZSBkeW5hbWljIHByb2dyYW1taW5nIG1hdHJpeC4gVGhpc1xuICAgIC8vIHN0YXJ0cyBhdCB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgbWF0cml4IChpZiB0aGUgdG9wLWxlZnQgaXMgMCwgMCksXG4gICAgLy8gYW5kIG1vdmVzIHRoZSBjbHVzdGVyIHRhcmdldCB3aXRoIHRoZSBsb29wLlxuICAgIGZvciAodmFyIGNsdXN0ZXIgPSBiYWNrdHJhY2tNYXRyaXgubGVuZ3RoIC0gMTsgY2x1c3RlciA+PSAwOyBjbHVzdGVyLS0pIHtcblxuICAgICAgICB2YXIgY2x1c3RlckxlZnQgPSBiYWNrdHJhY2tNYXRyaXhbY2x1c3Rlcl1bY2x1c3RlclJpZ2h0XTtcblxuICAgICAgICAvLyBmaWxsIHRoZSBjbHVzdGVyIGZyb20gdGhlIHNvcnRlZCBpbnB1dCBieSB0YWtpbmcgYSBzbGljZSBvZiB0aGVcbiAgICAgICAgLy8gYXJyYXkuIHRoZSBiYWNrdHJhY2sgbWF0cml4IG1ha2VzIHRoaXMgZWFzeSAtIGl0IHN0b3JlcyB0aGVcbiAgICAgICAgLy8gaW5kZXhlcyB3aGVyZSB0aGUgY2x1c3RlciBzaG91bGQgc3RhcnQgYW5kIGVuZC5cbiAgICAgICAgY2x1c3RlcnNbY2x1c3Rlcl0gPSBzb3J0ZWQuc2xpY2UoY2x1c3RlckxlZnQsIGNsdXN0ZXJSaWdodCArIDEpO1xuXG4gICAgICAgIGlmIChjbHVzdGVyID4gMCkge1xuICAgICAgICAgICAgY2x1c3RlclJpZ2h0ID0gY2x1c3RlckxlZnQgLSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsdXN0ZXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBja21lYW5zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NrbWVhbnMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBtYXggZnJvbSAnLi9tYXgnO1xuaW1wb3J0IG1pbiBmcm9tICcuL21pbic7XG5cbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2YgeCwgdGhpcyB3aWxsIGZpbmQgdGhlIGV4dGVudCBvZiB0aGVcbiAqIHggYW5kIHJldHVybiBhbiBhcnJheSBvZiBicmVha3MgdGhhdCBjYW4gYmUgdXNlZFxuICogdG8gY2F0ZWdvcml6ZSB0aGUgeCBpbnRvIGEgbnVtYmVyIG9mIGNsYXNzZXMuIFRoZVxuICogcmV0dXJuZWQgYXJyYXkgd2lsbCBhbHdheXMgYmUgMSBsb25nZXIgdGhhbiB0aGUgbnVtYmVyIG9mXG4gKiBjbGFzc2VzIGJlY2F1c2UgaXQgaW5jbHVkZXMgdGhlIG1pbmltdW0gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGFuIGFycmF5IG9mIG51bWJlciB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuQ2xhc3NlcyBudW1iZXIgb2YgZGVzaXJlZCBjbGFzc2VzXG4gKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gYXJyYXkgb2YgY2xhc3MgYnJlYWsgcG9zaXRpb25zXG4gKiBAZXhhbXBsZVxuICogZXF1YWxJbnRlcnZhbEJyZWFrcyhbMSwgMiwgMywgNCwgNSwgNl0sIDQpOyAvLyA9PiBbMSwgMi4yNSwgMy41LCA0Ljc1LCA2XVxuICovXG5mdW5jdGlvbiBlcXVhbEludGVydmFsQnJlYWtzKHgvKjogQXJyYXk8bnVtYmVyPiAqLywgbkNsYXNzZXMvKjpudW1iZXIqLykvKjogQXJyYXk8bnVtYmVyPiAqLyB7XG5cbiAgICBpZiAoeC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIHZhciB0aGVNaW4gPSBtaW4oeCk7XG4gICAgdmFyIHRoZU1heCA9IG1heCh4KTtcblxuICAgIC8vIHRoZSBmaXJzdCBicmVhayB3aWxsIGFsd2F5cyBiZSB0aGUgbWluaW11bSB2YWx1ZVxuICAgIC8vIGluIHRoZSB4c2V0XG4gICAgdmFyIGJyZWFrcyA9IFt0aGVNaW5dO1xuXG4gICAgLy8gVGhlIHNpemUgb2YgZWFjaCBicmVhayBpcyB0aGUgZnVsbCByYW5nZSBvZiB0aGUgeFxuICAgIC8vIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiBjbGFzc2VzIHJlcXVlc3RlZFxuICAgIHZhciBicmVha1NpemUgPSAodGhlTWF4IC0gdGhlTWluKSAvIG5DbGFzc2VzO1xuXG4gICAgLy8gSW4gdGhlIGNhc2Ugb2YgbkNsYXNzZXMgPSAxLCB0aGlzIGxvb3Agd29uJ3QgcnVuXG4gICAgLy8gYW5kIHRoZSByZXR1cm5lZCBicmVha3Mgd2lsbCBiZSBbbWluLCBtYXhdXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuQ2xhc3NlczsgaSsrKSB7XG4gICAgICAgIGJyZWFrcy5wdXNoKGJyZWFrc1swXSArIGJyZWFrU2l6ZSAqIGkpO1xuICAgIH1cblxuICAgIC8vIHRoZSBsYXN0IGJyZWFrIHdpbGwgYWx3YXlzIGJlIHRoZVxuICAgIC8vIG1heGltdW0uXG4gICAgYnJlYWtzLnB1c2godGhlTWF4KTtcblxuICAgIHJldHVybiBicmVha3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsSW50ZXJ2YWxCcmVha3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXF1YWxfaW50ZXJ2YWxfYnJlYWtzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2FtcGxlQ292YXJpYW5jZSBmcm9tICcuL3NhbXBsZV9jb3ZhcmlhbmNlJztcbmltcG9ydCBzYW1wbGVTdGFuZGFyZERldmlhdGlvbiBmcm9tICcuL3NhbXBsZV9zdGFuZGFyZF9kZXZpYXRpb24nO1xuXG4vKipcbiAqIFRoZSBbY29ycmVsYXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29ycmVsYXRpb25fYW5kX2RlcGVuZGVuY2UpIGlzXG4gKiBhIG1lYXN1cmUgb2YgaG93IGNvcnJlbGF0ZWQgdHdvIGRhdGFzZXRzIGFyZSwgYmV0d2VlbiAtMSBhbmQgMVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBmaXJzdCBpbnB1dFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB5IHNlY29uZCBpbnB1dFxuICogQHJldHVybnMge251bWJlcn0gc2FtcGxlIGNvcnJlbGF0aW9uXG4gKiBAZXhhbXBsZVxuICogc2FtcGxlQ29ycmVsYXRpb24oWzEsIDIsIDMsIDQsIDUsIDZdLCBbMiwgMiwgMywgNCwgNSwgNjBdKS50b0ZpeGVkKDIpO1xuICogLy8gPT4gJzAuNjknXG4gKi9cbmZ1bmN0aW9uIHNhbXBsZUNvcnJlbGF0aW9uKHgvKjogQXJyYXk8bnVtYmVyPiAqLywgeS8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICB2YXIgY292ID0gc2FtcGxlQ292YXJpYW5jZSh4LCB5KSxcbiAgICAgICAgeHN0ZCA9IHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9uKHgpLFxuICAgICAgICB5c3RkID0gc2FtcGxlU3RhbmRhcmREZXZpYXRpb24oeSk7XG5cbiAgICByZXR1cm4gY292IC8geHN0ZCAvIHlzdGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZUNvcnJlbGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV9jb3JyZWxhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcblxuLyoqXG4gKiBbU2tld25lc3NdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2tld25lc3MpIGlzXG4gKiBhIG1lYXN1cmUgb2YgdGhlIGV4dGVudCB0byB3aGljaCBhIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiBvZiBhXG4gKiByZWFsLXZhbHVlZCByYW5kb20gdmFyaWFibGUgXCJsZWFuc1wiIHRvIG9uZSBzaWRlIG9mIHRoZSBtZWFuLlxuICogVGhlIHNrZXduZXNzIHZhbHVlIGNhbiBiZSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSwgb3IgZXZlbiB1bmRlZmluZWQuXG4gKlxuICogSW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIGFkanVzdGVkIEZpc2hlci1QZWFyc29uIHN0YW5kYXJkaXplZFxuICogbW9tZW50IGNvZWZmaWNpZW50LCB3aGljaCBpcyB0aGUgdmVyc2lvbiBmb3VuZCBpbiBFeGNlbCBhbmQgc2V2ZXJhbFxuICogc3RhdGlzdGljYWwgcGFja2FnZXMgaW5jbHVkaW5nIE1pbml0YWIsIFNBUyBhbmQgU1BTUy5cbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBhIHNhbXBsZSBvZiAzIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHNhbXBsZSBza2V3bmVzc1xuICogQHRocm93cyB7RXJyb3J9IGlmIHggaGFzIGxlbmd0aCBsZXNzIHRoYW4gM1xuICogQGV4YW1wbGVcbiAqIHNhbXBsZVNrZXduZXNzKFsyLCA0LCA2LCAzLCAxXSk7IC8vID0+IDAuNTkwMTI4NjU2Mzg0MzY1XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVNrZXduZXNzKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuXG4gICAgaWYgKHgubGVuZ3RoIDwgMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NhbXBsZVNrZXduZXNzIHJlcXVpcmVzIGF0IGxlYXN0IHRocmVlIGRhdGEgcG9pbnRzJyk7XG4gICAgfVxuXG4gICAgdmFyIG1lYW5WYWx1ZSA9IG1lYW4oeCk7XG4gICAgdmFyIHRlbXBWYWx1ZTtcbiAgICB2YXIgc3VtU3F1YXJlZERldmlhdGlvbnMgPSAwO1xuICAgIHZhciBzdW1DdWJlZERldmlhdGlvbnMgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBWYWx1ZSA9IHhbaV0gLSBtZWFuVmFsdWU7XG4gICAgICAgIHN1bVNxdWFyZWREZXZpYXRpb25zICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICAgICAgc3VtQ3ViZWREZXZpYXRpb25zICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIEJlc3NlbHMnIENvcnJlY3Rpb246IGFuIGFkanVzdG1lbnQgbWFkZSB0byBzYW1wbGUgc3RhdGlzdGljc1xuICAgIC8vIHRoYXQgYWxsb3dzIGZvciB0aGUgcmVkdWNlZCBkZWdyZWUgb2YgZnJlZWRvbSBlbnRhaWxlZCBpbiBjYWxjdWxhdGluZ1xuICAgIC8vIHZhbHVlcyBmcm9tIHNhbXBsZXMgcmF0aGVyIHRoYW4gY29tcGxldGUgcG9wdWxhdGlvbnMuXG4gICAgdmFyIGJlc3NlbHNDb3JyZWN0aW9uID0geC5sZW5ndGggLSAxO1xuXG4gICAgLy8gRmluZCB0aGUgbWVhbiB2YWx1ZSBvZiB0aGF0IGxpc3RcbiAgICB2YXIgdGhlU2FtcGxlU3RhbmRhcmREZXZpYXRpb24gPSBNYXRoLnNxcnQoc3VtU3F1YXJlZERldmlhdGlvbnMgLyBiZXNzZWxzQ29ycmVjdGlvbik7XG5cbiAgICB2YXIgbiA9IHgubGVuZ3RoLFxuICAgICAgICBjdWJlZFMgPSBNYXRoLnBvdyh0aGVTYW1wbGVTdGFuZGFyZERldmlhdGlvbiwgMyk7XG5cbiAgICByZXR1cm4gbiAqIHN1bUN1YmVkRGV2aWF0aW9ucyAvICgobiAtIDEpICogKG4gLSAyKSAqIGN1YmVkUyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZVNrZXduZXNzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV9za2V3bmVzcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcblxuLyoqXG4gKiBbS3VydG9zaXNdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS3VydG9zaXMpIGlzXG4gKiBhIG1lYXN1cmUgb2YgdGhlIGhlYXZpbmVzcyBvZiBhIGRpc3RyaWJ1dGlvbidzIHRhaWxzIHJlbGF0aXZlIHRvIGl0c1xuICogdmFyaWFuY2UuIFRoZSBrdXJ0b3NpcyB2YWx1ZSBjYW4gYmUgcG9zaXRpdmUgb3IgbmVnYXRpdmUsIG9yIGV2ZW4gdW5kZWZpbmVkLlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIEZpc2hlcidzIGV4Y2VzcyBrdXJ0b3NpcyBkZWZpbml0aW9uIGFuZCB1c2VzXG4gKiB1bmJpYXNlZCBtb21lbnQgZXN0aW1hdG9ycy4gVGhpcyBpcyB0aGUgdmVyc2lvbiBmb3VuZCBpbiBFeGNlbCBhbmQgYXZhaWxhYmxlXG4gKiBpbiBzZXZlcmFsIHN0YXRpc3RpY2FsIHBhY2thZ2VzLCBpbmNsdWRpbmcgU0FTIGFuZCBTY2lQeS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBzYW1wbGUgb2YgNCBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBzYW1wbGUga3VydG9zaXNcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGhhcyBsZW5ndGggbGVzcyB0aGFuIDRcbiAqIEBleGFtcGxlXG4gKiBzYW1wbGVLdXJ0b3NpcyhbMSwgMiwgMiwgMywgNV0pOyAvLyA9PiAxLjQ1NTU3NjU1OTU0NjMxMjJcbiAqL1xuZnVuY3Rpb24gc2FtcGxlS3VydG9zaXMoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG5cbiAgICB2YXIgbiA9IHgubGVuZ3RoO1xuXG4gICAgaWYgKG4gPCA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2FtcGxlS3VydG9zaXMgcmVxdWlyZXMgYXQgbGVhc3QgZm91ciBkYXRhIHBvaW50cycpO1xuICAgIH1cblxuICAgIHZhciBtZWFuVmFsdWUgPSBtZWFuKHgpO1xuICAgIHZhciB0ZW1wVmFsdWU7XG4gICAgdmFyIHNlY29uZENlbnRyYWxNb21lbnQgPSAwO1xuICAgIHZhciBmb3VydGhDZW50cmFsTW9tZW50ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHRlbXBWYWx1ZSA9IHhbaV0gLSBtZWFuVmFsdWU7XG4gICAgICAgIHNlY29uZENlbnRyYWxNb21lbnQgKz0gdGVtcFZhbHVlICogdGVtcFZhbHVlO1xuICAgICAgICBmb3VydGhDZW50cmFsTW9tZW50ICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG4gLSAxKSAvICgobiAtIDIpICogKG4gLSAzKSkgKlxuICAgICAgICAobiAqIChuICsgMSkgKiBmb3VydGhDZW50cmFsTW9tZW50IC8gKHNlY29uZENlbnRyYWxNb21lbnQgKiBzZWNvbmRDZW50cmFsTW9tZW50KSAtIDMgKiAobiAtIDEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlS3VydG9zaXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2t1cnRvc2lzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFtIZWFwJ3MgQWxnb3JpdGhtXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFwJTI3c19hbGdvcml0aG0pXG4gKiBmb3IgZ2VuZXJhdGluZyBwZXJtdXRhdGlvbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZWxlbWVudHMgYW55IHR5cGUgb2YgZGF0YVxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYXJyYXkgb2YgcGVybXV0YXRpb25zXG4gKi9cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc0hlYXAvKjo6IDxUPiAqLyhlbGVtZW50cyAvKjogQXJyYXk8VD4gKi8pLyo6IEFycmF5PEFycmF5PFQ+PiAqLyB7XG4gICAgdmFyIGluZGV4ZXMgPSBuZXcgQXJyYXkoZWxlbWVudHMubGVuZ3RoKTtcbiAgICB2YXIgcGVybXV0YXRpb25zID0gW2VsZW1lbnRzLnNsaWNlKCldO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbmRleGVzW2ldID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOykge1xuICAgICAgICBpZiAoaW5kZXhlc1tpXSA8IGkpIHtcblxuICAgICAgICAgICAgLy8gQXQgb2RkIGluZGV4ZXMsIHN3YXAgZnJvbSBpbmRleGVzW2ldIGluc3RlYWRcbiAgICAgICAgICAgIC8vIG9mIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIHZhciBzd2FwRnJvbSA9IDA7XG4gICAgICAgICAgICBpZiAoaSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzd2FwRnJvbSA9IGluZGV4ZXNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN3YXAgYmV0d2VlbiBzd2FwRnJvbSBhbmQgaSwgdXNpbmdcbiAgICAgICAgICAgIC8vIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIGFzIHN0b3JhZ2UuXG4gICAgICAgICAgICB2YXIgdGVtcCA9IGVsZW1lbnRzW3N3YXBGcm9tXTtcbiAgICAgICAgICAgIGVsZW1lbnRzW3N3YXBGcm9tXSA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudHNbaV0gPSB0ZW1wO1xuXG4gICAgICAgICAgICBwZXJtdXRhdGlvbnMucHVzaChlbGVtZW50cy5zbGljZSgpKTtcbiAgICAgICAgICAgIGluZGV4ZXNbaV0rKztcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleGVzW2ldID0gMDtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwZXJtdXRhdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBlcm11dGF0aW9uc0hlYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVybXV0YXRpb25zX2hlYXAuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgQ29tYmluYXRpb25zXG4gKiBDb21iaW5hdGlvbnMgYXJlIHVuaXF1ZSBzdWJzZXRzIG9mIGEgY29sbGVjdGlvbiAtIGluIHRoaXMgY2FzZSwgayB4IGZyb20gYSBjb2xsZWN0aW9uIGF0IGEgdGltZS5cbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmF0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSB4IGFueSB0eXBlIG9mIGRhdGFcbiAqIEBwYXJhbSB7aW50fSBrIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbiBlYWNoIGdyb3VwICh3aXRob3V0IHJlcGxhY2VtZW50KVxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYXJyYXkgb2YgcGVybXV0YXRpb25zXG4gKiBAZXhhbXBsZVxuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7IC8vID0+IFtbMSwyXSwgWzEsM10sIFsyLDNdXVxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmF0aW9ucyhcbiAgICB4Lyo6IEFycmF5PGFueT4gKi8sXG4gICAgay8qOiBudW1iZXIgKi8pLyo6IEFycmF5PEFycmF5PGFueT4+ICovIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgc3ViSTtcbiAgICB2YXIgY29tYmluYXRpb25MaXN0ID0gW107XG4gICAgdmFyIHN1YnNldENvbWJpbmF0aW9ucztcbiAgICB2YXIgbmV4dDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrID09PSAxKSB7XG4gICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChbeFtpXV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzZXRDb21iaW5hdGlvbnMgPSBjb21iaW5hdGlvbnMoeC5zbGljZSggaSArIDEsIHgubGVuZ3RoICksIGsgLSAxKTtcbiAgICAgICAgICAgIGZvciAoc3ViSSA9IDA7IHN1YkkgPCBzdWJzZXRDb21iaW5hdGlvbnMubGVuZ3RoOyBzdWJJKyspIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gc3Vic2V0Q29tYmluYXRpb25zW3N1YkldO1xuICAgICAgICAgICAgICAgIG5leHQudW5zaGlmdCh4W2ldKTtcbiAgICAgICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tYmluYXRpb25MaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5hdGlvbnM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY29tYmluYXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFtDb21iaW5hdGlvbnNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmF0aW9uKSB3aXRoIHJlcGxhY2VtZW50XG4gKiBDb21iaW5hdGlvbnMgYXJlIHVuaXF1ZSBzdWJzZXRzIG9mIGEgY29sbGVjdGlvbiAtIGluIHRoaXMgY2FzZSwgayB4IGZyb20gYSBjb2xsZWN0aW9uIGF0IGEgdGltZS5cbiAqICdXaXRoIHJlcGxhY2VtZW50JyBtZWFucyB0aGF0IGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgY2hvc2VuIG11bHRpcGxlIHRpbWVzLlxuICogVW5saWtlIHBlcm11dGF0aW9uLCBvcmRlciBkb2Vzbid0IG1hdHRlciBmb3IgY29tYmluYXRpb25zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHggYW55IHR5cGUgb2YgZGF0YVxuICogQHBhcmFtIHtpbnR9IGsgdGhlIG51bWJlciBvZiBvYmplY3RzIGluIGVhY2ggZ3JvdXAgKHdpdGhvdXQgcmVwbGFjZW1lbnQpXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk+fSBhcnJheSBvZiBwZXJtdXRhdGlvbnNcbiAqIEBleGFtcGxlXG4gKiBjb21iaW5hdGlvbnNSZXBsYWNlbWVudChbMSwgMl0sIDIpOyAvLyA9PiBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXV1cbiAqL1xuZnVuY3Rpb24gY29tYmluYXRpb25zUmVwbGFjZW1lbnQoXG4gICAgeCAvKjogQXJyYXk8YW55PiAqLyxcbiAgICBrIC8qOiBudW1iZXIgKi8pLyo6IEFycmF5PEFycmF5PGFueT4+ICovIHtcblxuICAgIHZhciBjb21iaW5hdGlvbkxpc3QgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoayA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgcmVxdWVzdGVkIHRvIGZpbmQgb25seSBvbmUgZWxlbWVudCwgd2UgZG9uJ3QgbmVlZFxuICAgICAgICAgICAgLy8gdG8gcmVjdXJzZToganVzdCBwdXNoIGB4W2ldYCBvbnRvIHRoZSBsaXN0IG9mIGNvbWJpbmF0aW9ucy5cbiAgICAgICAgICAgIGNvbWJpbmF0aW9uTGlzdC5wdXNoKFt4W2ldXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmVjdXJzaXZlbHkgZmluZCBjb21iaW5hdGlvbnMsIGdpdmVuIGBrIC0gMWAuIE5vdGUgdGhhdFxuICAgICAgICAgICAgLy8gd2UgcmVxdWVzdCBgayAtIDFgLCBzbyBpZiB5b3Ugd2VyZSBsb29raW5nIGZvciBrPTMgY29tYmluYXRpb25zLCB3ZSdyZVxuICAgICAgICAgICAgLy8gcmVxdWVzdGluZyBrPTIuIFRoaXMgLTEgZ2V0cyByZXZlcnNlZCBpbiB0aGUgZm9yIGxvb3AgcmlnaHQgYWZ0ZXIgdGhpc1xuICAgICAgICAgICAgLy8gY29kZSwgc2luY2Ugd2UgY29uY2F0ZW5hdGUgYHhbaV1gIG9udG8gdGhlIHNlbGVjdGVkIGNvbWJpbmF0aW9ucyxcbiAgICAgICAgICAgIC8vIGJyaW5naW5nIGBrYCBiYWNrIHVwIHRvIHlvdXIgcmVxdWVzdGVkIGxldmVsLlxuICAgICAgICAgICAgLy8gVGhpcyByZWN1cnNpb24gbWF5IGdvIG1hbnkgbGV2ZWxzIGRlZXAsIHNpbmNlIGl0IG9ubHkgc3RvcHMgb25jZVxuICAgICAgICAgICAgLy8gaz0xLlxuICAgICAgICAgICAgdmFyIHN1YnNldENvbWJpbmF0aW9ucyA9IGNvbWJpbmF0aW9uc1JlcGxhY2VtZW50KFxuICAgICAgICAgICAgICAgIHguc2xpY2UoaSwgeC5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIGsgLSAxKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzdWJzZXRDb21iaW5hdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChbeFtpXV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzdWJzZXRDb21iaW5hdGlvbnNbal0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdGlvbkxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmF0aW9uc1JlcGxhY2VtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmF0aW9uc19yZXBsYWNlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXaGVuIGFkZGluZyBhIG5ldyB2YWx1ZSB0byBhIGxpc3QsIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeVxuICogcmVjb21wdXRlIHRoZSBtZWFuIG9mIHRoZSBsaXN0IGluIGxpbmVhciB0aW1lLiBUaGV5IGNhbiBpbnN0ZWFkIHVzZVxuICogdGhpcyBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBuZXcgbWVhbiBieSBwcm92aWRpbmcgdGhlIGN1cnJlbnQgbWVhbixcbiAqIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3QgdGhhdCBwcm9kdWNlZCBpdCBhbmQgdGhlIG5ld1xuICogdmFsdWUgdG8gYWRkLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW4gY3VycmVudCBtZWFuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdWYWx1ZSB0aGUgYWRkZWQgdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBuZXcgbWVhblxuICpcbiAqIEBleGFtcGxlXG4gKiBhZGRUb01lYW4oMTQsIDUsIDUzKTsgLy8gPT4gMjAuNVxuICovXG5mdW5jdGlvbiBhZGRUb01lYW4obWVhbiAvKjogbnVtYmVyKi8sIG4vKjogbnVtYmVyICovLCBuZXdWYWx1ZS8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgcmV0dXJuIG1lYW4gKyAoKG5ld1ZhbHVlIC0gbWVhbikgLyAobiArIDEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkVG9NZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2FkZF90b19tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgY29tYmluZU1lYW5zIGZyb20gJy4vY29tYmluZV9tZWFucyc7XG5cbi8qKlxuICogV2hlbiBjb21iaW5pbmcgdHdvIGxpc3RzIG9mIHZhbHVlcyBmb3Igd2hpY2ggb25lIGFscmVhZHkga25vd3MgdGhlIHZhcmlhbmNlcyxcbiAqIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeSByZWNvbXB1dGUgdGhlIHZhcmlhbmNlIG9mIHRoZSBjb21iaW5lZCBsaXN0c1xuICogaW4gbGluZWFyIHRpbWUuIFRoZXkgY2FuIGluc3RlYWQgdXNlIHRoaXMgZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgY29tYmluZWRcbiAqIHZhcmlhbmNlIGJ5IHByb3ZpZGluZyB0aGUgdmFyaWFuY2UsIG1lYW4gJiBudW1iZXIgb2YgdmFsdWVzIG9mIHRoZSBmaXJzdCBsaXN0XG4gKiBhbmQgdGhlIHZhcmlhbmNlLCBtZWFuICYgbnVtYmVyIG9mIHZhbHVlcyBvZiB0aGUgc2Vjb25kIGxpc3QuXG4gKlxuICogQHNpbmNlIDMuMC4wXG4gKiBAcGFyYW0ge251bWJlcn0gdmFyaWFuY2UxIHZhcmlhbmNlIG9mIHRoZSBmaXJzdCBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbWVhbjEgbWVhbiBvZiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4xIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IHZhcmlhbmNlMiB2YXJpYW5jZSBvZiB0aGUgc2Vjb25kIGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtZWFuMiBtZWFuIG9mIHRoZSBzZWNvbmQgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4yIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgc2Vjb25kIGxpc3RcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb21iaW5lZCBtZWFuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbWJpbmVWYXJpYW5jZXMoMTQgLyAzLCA1LCAzLCA4IC8gMywgNCwgMyk7IC8vID0+IDQ3IC8gMTJcbiAqL1xuZnVuY3Rpb24gY29tYmluZVZhcmlhbmNlcyhcbiAgICB2YXJpYW5jZTEgLyo6IG51bWJlciovLFxuICAgIG1lYW4xIC8qOiBudW1iZXIqLyxcbiAgICBuMS8qOiBudW1iZXIgKi8sXG4gICAgdmFyaWFuY2UyIC8qOiBudW1iZXIqLyxcbiAgICBtZWFuMiAvKjogbnVtYmVyKi8sXG4gICAgbjIvKjogbnVtYmVyICovKS8qOiBudW1iZXIgKi8ge1xuXG4gICAgdmFyIG5ld01lYW4gPSBjb21iaW5lTWVhbnMobWVhbjEsIG4xLCBtZWFuMiwgbjIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgbjEgKiAodmFyaWFuY2UxICsgTWF0aC5wb3cobWVhbjEgLSBuZXdNZWFuLCAyKSkgK1xuICAgICAgICBuMiAqICh2YXJpYW5jZTIgKyBNYXRoLnBvdyhtZWFuMiAtIG5ld01lYW4sIDIpKVxuICAgICkgLyAobjEgKyBuMik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVWYXJpYW5jZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY29tYmluZV92YXJpYW5jZXMuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogVGhlIFtHZW9tZXRyaWMgTWVhbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2VvbWV0cmljX21lYW4pIGlzXG4gKiBhIG1lYW4gZnVuY3Rpb24gdGhhdCBpcyBtb3JlIHVzZWZ1bCBmb3IgbnVtYmVycyBpbiBkaWZmZXJlbnRcbiAqIHJhbmdlcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBudGggcm9vdCBvZiB0aGUgaW5wdXQgbnVtYmVycyBtdWx0aXBsaWVkIGJ5IGVhY2ggb3RoZXIuXG4gKlxuICogVGhlIGdlb21ldHJpYyBtZWFuIGlzIG9mdGVuIHVzZWZ1bCBmb3JcbiAqICoqW3Byb3BvcnRpb25hbCBncm93dGhdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dlb21ldHJpY19tZWFuI1Byb3BvcnRpb25hbF9ncm93dGgpKio6IGdpdmVuXG4gKiBncm93dGggcmF0ZXMgZm9yIG11bHRpcGxlIHllYXJzLCBsaWtlIF84MCUsIDE2LjY2JSBhbmQgNDIuODUlXywgYSBzaW1wbGVcbiAqIG1lYW4gd2lsbCBpbmNvcnJlY3RseSBlc3RpbWF0ZSBhbiBhdmVyYWdlIGdyb3d0aCByYXRlLCB3aGVyZWFzIGEgZ2VvbWV0cmljXG4gKiBtZWFuIHdpbGwgY29ycmVjdGx5IGVzdGltYXRlIGEgZ3Jvd3RoIHJhdGUgdGhhdCwgb3ZlciB0aG9zZSB5ZWFycyxcbiAqIHdpbGwgeWllbGQgdGhlIHNhbWUgZW5kIHZhbHVlLlxuICpcbiAqIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gZ2VvbWV0cmljIG1lYW5cbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgeCBjb250YWlucyBhIG5lZ2F0aXZlIG51bWJlclxuICogQGV4YW1wbGVcbiAqIHZhciBncm93dGhSYXRlcyA9IFsxLjgwLCAxLjE2NjY2NiwgMS40Mjg1NzFdO1xuICogdmFyIGF2ZXJhZ2VHcm93dGggPSBzcy5nZW9tZXRyaWNNZWFuKGdyb3d0aFJhdGVzKTtcbiAqIHZhciBhdmVyYWdlR3Jvd3RoUmF0ZXMgPSBbYXZlcmFnZUdyb3d0aCwgYXZlcmFnZUdyb3d0aCwgYXZlcmFnZUdyb3d0aF07XG4gKiB2YXIgc3RhcnRpbmdWYWx1ZSA9IDEwO1xuICogdmFyIHN0YXJ0aW5nVmFsdWVNZWFuID0gMTA7XG4gKiBncm93dGhSYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhdGUpIHtcbiAqICAgc3RhcnRpbmdWYWx1ZSAqPSByYXRlO1xuICogfSk7XG4gKiBhdmVyYWdlR3Jvd3RoUmF0ZXMuZm9yRWFjaChmdW5jdGlvbihyYXRlKSB7XG4gKiAgIHN0YXJ0aW5nVmFsdWVNZWFuICo9IHJhdGU7XG4gKiB9KTtcbiAqIHN0YXJ0aW5nVmFsdWVNZWFuID09PSBzdGFydGluZ1ZhbHVlO1xuICovXG5mdW5jdGlvbiBnZW9tZXRyaWNNZWFuKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1lYW4gb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2VvbWV0cmljTWVhbiByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH1cblxuICAgIC8vIHRoZSBzdGFydGluZyB2YWx1ZS5cbiAgICB2YXIgdmFsdWUgPSAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHRoZSBnZW9tZXRyaWMgbWVhbiBpcyBvbmx5IHZhbGlkIGZvciBwb3NpdGl2ZSBudW1iZXJzXG4gICAgICAgIGlmICh4W2ldIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2VvbWV0cmljTWVhbiByZXF1aXJlcyBvbmx5IHBvc2l0aXZlIG51bWJlcnMgYXMgaW5wdXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGVhdGVkbHkgbXVsdGlwbHkgdGhlIHZhbHVlIGJ5IGVhY2ggbnVtYmVyXG4gICAgICAgIHZhbHVlICo9IHhbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucG93KHZhbHVlLCAxIC8geC5sZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW9tZXRyaWNNZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2dlb21ldHJpY19tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbSGFybW9uaWMgTWVhbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGFybW9uaWNfbWVhbikgaXNcbiAqIGEgbWVhbiBmdW5jdGlvbiB0eXBpY2FsbHkgdXNlZCB0byBmaW5kIHRoZSBhdmVyYWdlIG9mIHJhdGVzLlxuICogVGhpcyBtZWFuIGlzIGNhbGN1bGF0ZWQgYnkgdGFraW5nIHRoZSByZWNpcHJvY2FsIG9mIHRoZSBhcml0aG1ldGljIG1lYW5cbiAqIG9mIHRoZSByZWNpcHJvY2FscyBvZiB0aGUgaW5wdXQgbnVtYmVycy5cbiAqXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gaGFybW9uaWMgbWVhblxuICogQHRocm93cyB7RXJyb3J9IGlmIHggaXMgZW1wdHlcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGNvbnRhaW5zIGEgbmVnYXRpdmUgbnVtYmVyXG4gKiBAZXhhbXBsZVxuICogaGFybW9uaWNNZWFuKFsyLCAzXSkudG9GaXhlZCgyKSAvLyA9PiAnMi40MCdcbiAqL1xuZnVuY3Rpb24gaGFybW9uaWNNZWFuKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1lYW4gb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFybW9uaWNNZWFuIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHJlY2lwcm9jYWxTdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHRoZSBoYXJtb25pYyBtZWFuIGlzIG9ubHkgdmFsaWQgZm9yIHBvc2l0aXZlIG51bWJlcnNcbiAgICAgICAgaWYgKHhbaV0gPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYXJtb25pY01lYW4gcmVxdWlyZXMgb25seSBwb3NpdGl2ZSBudW1iZXJzIGFzIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNpcHJvY2FsU3VtICs9IDEgLyB4W2ldO1xuICAgIH1cblxuICAgIC8vIGRpdmlkZSBuIGJ5IHRoZSB0aGUgcmVjaXByb2NhbCBzdW1cbiAgICByZXR1cm4geC5sZW5ndGggLyByZWNpcHJvY2FsU3VtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXJtb25pY01lYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvaGFybW9uaWNfbWVhbi5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHF1YW50aWxlU29ydGVkIGZyb20gJy4vcXVhbnRpbGVfc29ydGVkJztcblxuLyoqXG4gKiBUaGUgW21lZGlhbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NZWRpYW4pIGlzXG4gKiB0aGUgbWlkZGxlIG51bWJlciBvZiBhIGxpc3QuIFRoaXMgaXMgb2Z0ZW4gYSBnb29kIGluZGljYXRvciBvZiAndGhlIG1pZGRsZSdcbiAqIHdoZW4gdGhlcmUgYXJlIG91dGxpZXJzIHRoYXQgc2tldyB0aGUgYG1lYW4oKWAgdmFsdWUuXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhlIG1lZGlhbiBpc24ndCBuZWNlc3NhcmlseSBvbmUgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBsaXN0OiB0aGUgdmFsdWVcbiAqIGNhbiBiZSB0aGUgYXZlcmFnZSBvZiB0d28gZWxlbWVudHMgaWYgdGhlIGxpc3QgaGFzIGFuIGV2ZW4gbGVuZ3RoXG4gKiBhbmQgdGhlIHR3byBjZW50cmFsIHZhbHVlcyBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc29ydGVkIGlucHV0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtZWRpYW4gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtZWRpYW5Tb3J0ZWQoWzEwLCAyLCA1LCAxMDAsIDIsIDFdKTsgLy8gPT4gNTIuNVxuICovXG5mdW5jdGlvbiBtZWRpYW5Tb3J0ZWQoc29ydGVkIC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4gcXVhbnRpbGVTb3J0ZWQoc29ydGVkLCAwLjUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZWRpYW5Tb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXaGVuIHJlbW92aW5nIGEgdmFsdWUgZnJvbSBhIGxpc3QsIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeVxuICogcmVjb21wdXRlIHRoZSBtZWFuIG9mIHRoZSBsaXN0IGluIGxpbmVhciB0aW1lLiBUaGV5IGNhbiBpbnN0ZWFkIHVzZVxuICogdGhpcyBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBuZXcgbWVhbiBieSBwcm92aWRpbmcgdGhlIGN1cnJlbnQgbWVhbixcbiAqIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3QgdGhhdCBwcm9kdWNlZCBpdCBhbmQgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtZWFuIGN1cnJlbnQgbWVhblxuICogQHBhcmFtIHtudW1iZXJ9IG4gbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgdGhlIHZhbHVlIHRvIHJlbW92ZVxuICogQHJldHVybnMge251bWJlcn0gdGhlIG5ldyBtZWFuXG4gKlxuICogQGV4YW1wbGVcbiAqIHN1YnRyYWN0RnJvbU1lYW4oMjAuNSwgNiwgNTMpOyAvLyA9PiAxNFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdEZyb21NZWFuKG1lYW4gLyo6IG51bWJlciovLCBuLyo6IG51bWJlciAqLywgdmFsdWUvKjogbnVtYmVyICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHJldHVybiAoKG1lYW4gKiBuKSAtIHZhbHVlKSAvIChuIC0gMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1YnRyYWN0RnJvbU1lYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VidHJhY3RfZnJvbV9tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBSb290IE1lYW4gU3F1YXJlIChSTVMpIGlzXG4gKiBhIG1lYW4gZnVuY3Rpb24gdXNlZCBhcyBhIG1lYXN1cmUgb2YgdGhlIG1hZ25pdHVkZSBvZiBhIHNldFxuICogb2YgbnVtYmVycywgcmVnYXJkbGVzcyBvZiB0aGVpciBzaWduLlxuICogVGhpcyBpcyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhlIG1lYW4gb2YgdGhlIHNxdWFyZXMgb2YgdGhlXG4gKiBpbnB1dCBudW1iZXJzLlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHJvb3QgbWVhbiBzcXVhcmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogcm9vdE1lYW5TcXVhcmUoWy0xLCAxLCAtMSwgMV0pOyAvLyA9PiAxXG4gKi9cbmZ1bmN0aW9uIHJvb3RNZWFuU3F1YXJlKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNZWFuU3F1YXJlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHN1bU9mU3F1YXJlcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bU9mU3F1YXJlcyArPSBNYXRoLnBvdyh4W2ldLCAyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcyAvIHgubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdE1lYW5TcXVhcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcm9vdF9tZWFuX3NxdWFyZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcbmltcG9ydCBzdGFuZGFyZERldmlhdGlvbiBmcm9tICcuL3N0YW5kYXJkX2RldmlhdGlvbic7XG5cbi8qKlxuICogVGhpcyBpcyB0byBjb21wdXRlIFthIG9uZS1zYW1wbGUgdC10ZXN0XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdHVkZW50JTI3c190LXRlc3QjT25lLXNhbXBsZV90LXRlc3QpLCBjb21wYXJpbmcgdGhlIG1lYW5cbiAqIG9mIGEgc2FtcGxlIHRvIGEga25vd24gdmFsdWUsIHguXG4gKlxuICogaW4gdGhpcyBjYXNlLCB3ZSdyZSB0cnlpbmcgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXG4gKiBwb3B1bGF0aW9uIG1lYW4gaXMgZXF1YWwgdG8gdGhlIHZhbHVlIHRoYXQgd2Uga25vdywgd2hpY2ggaXMgYHhgXG4gKiBoZXJlLiB1c3VhbGx5IHRoZSByZXN1bHRzIGhlcmUgYXJlIHVzZWQgdG8gbG9vayB1cCBhXG4gKiBbcC12YWx1ZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QLXZhbHVlKSwgd2hpY2gsIGZvclxuICogYSBjZXJ0YWluIGxldmVsIG9mIHNpZ25pZmljYW5jZSwgd2lsbCBsZXQgeW91IGRldGVybWluZSB0aGF0IHRoZVxuICogbnVsbCBoeXBvdGhlc2lzIGNhbiBvciBjYW5ub3QgYmUgcmVqZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBudW1iZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gZXhwZWN0ZWRWYWx1ZSBleHBlY3RlZCB2YWx1ZSBvZiB0aGUgcG9wdWxhdGlvbiBtZWFuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB2YWx1ZVxuICogQGV4YW1wbGVcbiAqIHRUZXN0KFsxLCAyLCAzLCA0LCA1LCA2XSwgMy4zODUpLnRvRml4ZWQoMik7IC8vID0+ICcwLjE2J1xuICovXG5mdW5jdGlvbiB0VGVzdCh4Lyo6IEFycmF5PG51bWJlcj4gKi8sIGV4cGVjdGVkVmFsdWUvKjogbnVtYmVyICovKS8qOm51bWJlciovIHtcbiAgICAvLyBUaGUgbWVhbiBvZiB0aGUgc2FtcGxlXG4gICAgdmFyIHNhbXBsZU1lYW4gPSBtZWFuKHgpO1xuXG4gICAgLy8gVGhlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgc2FtcGxlXG4gICAgdmFyIHNkID0gc3RhbmRhcmREZXZpYXRpb24oeCk7XG5cbiAgICAvLyBTcXVhcmUgcm9vdCB0aGUgbGVuZ3RoIG9mIHRoZSBzYW1wbGVcbiAgICB2YXIgcm9vdE4gPSBNYXRoLnNxcnQoeC5sZW5ndGgpO1xuXG4gICAgLy8gcmV0dXJuaW5nIHRoZSB0IHZhbHVlXG4gICAgcmV0dXJuIChzYW1wbGVNZWFuIC0gZXhwZWN0ZWRWYWx1ZSkgLyAoc2QgLyByb290Tik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRUZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3RfdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcbmltcG9ydCBzYW1wbGVWYXJpYW5jZSBmcm9tICcuL3NhbXBsZV92YXJpYW5jZSc7XG5cbi8qKlxuICogVGhpcyBpcyB0byBjb21wdXRlIFt0d28gc2FtcGxlIHQtdGVzdF0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdHVkZW50J3NfdC10ZXN0KS5cbiAqIFRlc3RzIHdoZXRoZXIgXCJtZWFuKFgpLW1lYW4oWSkgPSBkaWZmZXJlbmNlXCIsIChcbiAqIGluIHRoZSBtb3N0IGNvbW1vbiBjYXNlLCB3ZSBvZnRlbiBoYXZlIGBkaWZmZXJlbmNlID09IDBgIHRvIHRlc3QgaWYgdHdvIHNhbXBsZXNcbiAqIGFyZSBsaWtlbHkgdG8gYmUgdGFrZW4gZnJvbSBwb3B1bGF0aW9ucyB3aXRoIHRoZSBzYW1lIG1lYW4gdmFsdWUpIHdpdGhcbiAqIG5vIHByaW9yIGtub3dsZWRnZSBvbiBzdGFuZGFyZCBkZXZpYXRpb25zIG9mIGJvdGggc2FtcGxlc1xuICogb3RoZXIgdGhhbiB0aGUgZmFjdCB0aGF0IHRoZXkgaGF2ZSB0aGUgc2FtZSBzdGFuZGFyZCBkZXZpYXRpb24uXG4gKlxuICogVXN1YWxseSB0aGUgcmVzdWx0cyBoZXJlIGFyZSB1c2VkIHRvIGxvb2sgdXAgYVxuICogW3AtdmFsdWVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUC12YWx1ZSksIHdoaWNoLCBmb3JcbiAqIGEgY2VydGFpbiBsZXZlbCBvZiBzaWduaWZpY2FuY2UsIHdpbGwgbGV0IHlvdSBkZXRlcm1pbmUgdGhhdCB0aGVcbiAqIG51bGwgaHlwb3RoZXNpcyBjYW4gb3IgY2Fubm90IGJlIHJlamVjdGVkLlxuICpcbiAqIGBkaWZmYCBjYW4gYmUgb21pdHRlZCBpZiBpdCBlcXVhbHMgMC5cbiAqXG4gKiBbVGhpcyBpcyB1c2VkIHRvIGNvbmZpcm0gb3IgZGVueV0oaHR0cDovL3d3dy5tb25hcmNobGFiLm9yZy9MYWIvUmVzZWFyY2gvU3RhdHMvMlNhbXBsZVQuYXNweClcbiAqIGEgbnVsbCBoeXBvdGhlc2lzIHRoYXQgdGhlIHR3byBwb3B1bGF0aW9ucyB0aGF0IGhhdmUgYmVlbiBzYW1wbGVkIGludG9cbiAqIGBzYW1wbGVYYCBhbmQgYHNhbXBsZVlgIGFyZSBlcXVhbCB0byBlYWNoIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2FtcGxlWCBhIHNhbXBsZSBhcyBhbiBhcnJheSBvZiBudW1iZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNhbXBsZVkgYSBzYW1wbGUgYXMgYW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtkaWZmZXJlbmNlPTBdXG4gKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9IHRlc3QgcmVzdWx0XG4gKlxuICogQGV4YW1wbGVcbiAqIHRUZXN0VHdvU2FtcGxlKFsxLCAyLCAzLCA0XSwgWzMsIDQsIDUsIDZdLCAwKTsgLy8gPT4gLTIuMTkwODkwMjMwMDIwNjY0M1xuICovXG5mdW5jdGlvbiB0VGVzdFR3b1NhbXBsZShcbiAgICBzYW1wbGVYLyo6IEFycmF5PG51bWJlcj4gKi8sXG4gICAgc2FtcGxlWS8qOiBBcnJheTxudW1iZXI+ICovLFxuICAgIGRpZmZlcmVuY2UvKjogP251bWJlciAqLykvKjogP251bWJlciAqLyB7XG4gICAgdmFyIG4gPSBzYW1wbGVYLmxlbmd0aCxcbiAgICAgICAgbSA9IHNhbXBsZVkubGVuZ3RoO1xuXG4gICAgLy8gSWYgZWl0aGVyIHNhbXBsZSBkb2Vzbid0IGFjdHVhbGx5IGhhdmUgYW55IHZhbHVlcywgd2UgY2FuJ3RcbiAgICAvLyBjb21wdXRlIHRoaXMgYXQgYWxsLCBzbyB3ZSByZXR1cm4gYG51bGxgLlxuICAgIGlmICghbiB8fCAhbSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgLy8gZGVmYXVsdCBkaWZmZXJlbmNlIChtdSkgaXMgemVyb1xuICAgIGlmICghZGlmZmVyZW5jZSkge1xuICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICB9XG5cbiAgICB2YXIgbWVhblggPSBtZWFuKHNhbXBsZVgpLFxuICAgICAgICBtZWFuWSA9IG1lYW4oc2FtcGxlWSksXG4gICAgICAgIHNhbXBsZVZhcmlhbmNlWCA9IHNhbXBsZVZhcmlhbmNlKHNhbXBsZVgpLFxuICAgICAgICBzYW1wbGVWYXJpYW5jZVkgPSBzYW1wbGVWYXJpYW5jZShzYW1wbGVZKTtcblxuICAgIGlmICh0eXBlb2YgbWVhblggPT09ICdudW1iZXInICYmXG4gICAgICAgIHR5cGVvZiBtZWFuWSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgdHlwZW9mIHNhbXBsZVZhcmlhbmNlWCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgdHlwZW9mIHNhbXBsZVZhcmlhbmNlWSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIHdlaWdodGVkVmFyaWFuY2UgPSAoKG4gLSAxKSAqIHNhbXBsZVZhcmlhbmNlWCArXG4gICAgICAgICAgICAobSAtIDEpICogc2FtcGxlVmFyaWFuY2VZKSAvIChuICsgbSAtIDIpO1xuXG4gICAgICAgIHJldHVybiAobWVhblggLSBtZWFuWSAtIGRpZmZlcmVuY2UpIC9cbiAgICAgICAgICAgIE1hdGguc3FydCh3ZWlnaHRlZFZhcmlhbmNlICogKDEgLyBuICsgMSAvIG0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRUZXN0VHdvU2FtcGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3RfdGVzdF90d29fc2FtcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFtCYXllc2lhbiBDbGFzc2lmaWVyXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05haXZlX0JheWVzX2NsYXNzaWZpZXIpXG4gKlxuICogVGhpcyBpcyBhIG5hw692ZSBiYXllc2lhbiBjbGFzc2lmaWVyIHRoYXQgdGFrZXNcbiAqIHNpbmdseS1uZXN0ZWQgb2JqZWN0cy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiB2YXIgYmF5ZXMgPSBuZXcgQmF5ZXNpYW5DbGFzc2lmaWVyKCk7XG4gKiBiYXllcy50cmFpbih7XG4gKiAgIHNwZWNpZXM6ICdDYXQnXG4gKiB9LCAnYW5pbWFsJyk7XG4gKiB2YXIgcmVzdWx0ID0gYmF5ZXMuc2NvcmUoe1xuICogICBzcGVjaWVzOiAnQ2F0J1xuICogfSlcbiAqIC8vIHJlc3VsdFxuICogLy8ge1xuICogLy8gICBhbmltYWw6IDFcbiAqIC8vIH1cbiAqL1xuZnVuY3Rpb24gQmF5ZXNpYW5DbGFzc2lmaWVyKCkge1xuICAgIC8vIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCBhcmUgY3VycmVudGx5XG4gICAgLy8gY2xhc3NpZmllZCBpbiB0aGUgbW9kZWxcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIC8vIEV2ZXJ5IGl0ZW0gY2xhc3NpZmllZCBpbiB0aGUgbW9kZWxcbiAgICB0aGlzLmRhdGEgPSB7fTtcbn1cblxuLyoqXG4gKiBUcmFpbiB0aGUgY2xhc3NpZmllciB3aXRoIGEgbmV3IGl0ZW0sIHdoaWNoIGhhcyBhIHNpbmdsZVxuICogZGltZW5zaW9uIG9mIEphdmFzY3JpcHQgbGl0ZXJhbCBrZXlzIGFuZCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gYW4gb2JqZWN0IHdpdGggc2luZ2x5LWRlZXAgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5IHRoZSBjYXRlZ29yeSB0aGlzIGl0ZW0gYmVsb25ncyB0b1xuICogQHJldHVybiB7dW5kZWZpbmVkfSBhZGRzIHRoZSBpdGVtIHRvIHRoZSBjbGFzc2lmaWVyXG4gKi9cbkJheWVzaWFuQ2xhc3NpZmllci5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbihpdGVtLCBjYXRlZ29yeSkge1xuICAgIC8vIElmIHRoZSBkYXRhIG9iamVjdCBkb2Vzbid0IGhhdmUgYW55IHZhbHVlc1xuICAgIC8vIGZvciB0aGlzIGNhdGVnb3J5LCBjcmVhdGUgYSBuZXcgb2JqZWN0IGZvciBpdC5cbiAgICBpZiAoIXRoaXMuZGF0YVtjYXRlZ29yeV0pIHtcbiAgICAgICAgdGhpcy5kYXRhW2NhdGVnb3J5XSA9IHt9O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSBpbiB0aGUgaXRlbS5cbiAgICBmb3IgKHZhciBrIGluIGl0ZW0pIHtcbiAgICAgICAgdmFyIHYgPSBpdGVtW2tdO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBuZXN0ZWQgb2JqZWN0IGBkYXRhW2NhdGVnb3J5XVtrXVtpdGVtW2tdXWBcbiAgICAgICAgLy8gd2l0aCBhbiBvYmplY3Qgb2Yga2V5cyB0aGF0IGVxdWFsIDAuXG4gICAgICAgIGlmICh0aGlzLmRhdGFbY2F0ZWdvcnldW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtjYXRlZ29yeV1ba10gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhW2NhdGVnb3J5XVtrXVt2XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbY2F0ZWdvcnldW2tdW3ZdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZCBpbmNyZW1lbnQgdGhlIGtleSBmb3IgdGhpcyBrZXkvdmFsdWUgY29tYmluYXRpb24uXG4gICAgICAgIHRoaXMuZGF0YVtjYXRlZ29yeV1ba11bdl0rKztcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiBpdGVtcyBjbGFzc2lmaWVkXG4gICAgdGhpcy50b3RhbENvdW50Kys7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2NvcmUgb2YgaG93IHdlbGwgdGhpcyBpdGVtIG1hdGNoZXMgYWxsXG4gKiBwb3NzaWJsZSBjYXRlZ29yaWVzIGJhc2VkIG9uIGl0cyBhdHRyaWJ1dGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gYW4gaXRlbSBpbiB0aGUgc2FtZSBmb3JtYXQgYXMgd2l0aCB0cmFpblxuICogQHJldHVybnMge09iamVjdH0gb2YgcHJvYmFiaWxpdGllcyB0aGF0IHRoaXMgaXRlbSBiZWxvbmdzIHRvIGFcbiAqIGdpdmVuIGNhdGVnb3J5LlxuICovXG5CYXllc2lhbkNsYXNzaWZpZXIucHJvdG90eXBlLnNjb3JlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIC8vIEluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXkgb2Ygb2RkcyBwZXIgY2F0ZWdvcnkuXG4gICAgdmFyIG9kZHMgPSB7fSwgY2F0ZWdvcnk7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2gga2V5IGluIHRoZSBpdGVtLFxuICAgIC8vIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIGVhY2ggY2F0ZWdvcnkgdGhhdCBoYXMgYmVlbiB1c2VkXG4gICAgLy8gaW4gcHJldmlvdXMgY2FsbHMgdG8gYC50cmFpbigpYFxuICAgIGZvciAodmFyIGsgaW4gaXRlbSkge1xuICAgICAgICB2YXIgdiA9IGl0ZW1ba107XG4gICAgICAgIGZvciAoY2F0ZWdvcnkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgb2JqZWN0IGZvciBzdG9yaW5nIGtleSAtIHZhbHVlIGNvbWJpbmF0aW9uc1xuICAgICAgICAgICAgLy8gZm9yIHRoaXMgY2F0ZWdvcnkuXG4gICAgICAgICAgICBvZGRzW2NhdGVnb3J5XSA9IHt9O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gZG9lc24ndCBldmVuIGhhdmUgYSBwcm9wZXJ0eSwgaXQgY291bnRzIGZvciBub3RoaW5nLFxuICAgICAgICAgICAgLy8gYnV0IGlmIGl0IGRvZXMgaGF2ZSB0aGUgcHJvcGVydHkgdGhhdCB3ZSdyZSBsb29raW5nIGZvciBmcm9tXG4gICAgICAgICAgICAvLyB0aGUgaXRlbSB0byBjYXRlZ29yaXplLCBpdCBjb3VudHMgYmFzZWQgb24gaG93IHBvcHVsYXIgaXQgaXNcbiAgICAgICAgICAgIC8vIHZlcnN1cyB0aGUgd2hvbGUgcG9wdWxhdGlvbi5cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbY2F0ZWdvcnldW2tdKSB7XG4gICAgICAgICAgICAgICAgb2Rkc1tjYXRlZ29yeV1bayArICdfJyArIHZdID0gKHRoaXMuZGF0YVtjYXRlZ29yeV1ba11bdl0gfHwgMCkgLyB0aGlzLnRvdGFsQ291bnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9kZHNbY2F0ZWdvcnldW2sgKyAnXycgKyB2XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYSBuZXcgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHN1bXMgb2YgdGhlc2Ugb2RkcyBieSBjYXRlZ29yeVxuICAgIHZhciBvZGRzU3VtcyA9IHt9O1xuXG4gICAgZm9yIChjYXRlZ29yeSBpbiBvZGRzKSB7XG4gICAgICAgIC8vIFRhbGx5IGFsbCBvZiB0aGUgb2RkcyBmb3IgZWFjaCBjYXRlZ29yeS1jb21iaW5hdGlvbiBwYWlyIC1cbiAgICAgICAgLy8gdGhlIG5vbi1leGlzdGVuY2Ugb2YgYSBjYXRlZ29yeSBkb2VzIG5vdCBhZGQgYW55dGhpbmcgdG8gdGhlXG4gICAgICAgIC8vIHNjb3JlLlxuICAgICAgICBvZGRzU3Vtc1tjYXRlZ29yeV0gPSAwO1xuICAgICAgICBmb3IgKHZhciBjb21iaW5hdGlvbiBpbiBvZGRzW2NhdGVnb3J5XSkge1xuICAgICAgICAgICAgb2Rkc1N1bXNbY2F0ZWdvcnldICs9IG9kZHNbY2F0ZWdvcnldW2NvbWJpbmF0aW9uXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZGRzU3Vtcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJheWVzaWFuQ2xhc3NpZmllcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9iYXllc2lhbl9jbGFzc2lmaWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzaW5nbGUtbGF5ZXIgW1BlcmNlcHRyb24gQ2xhc3NpZmllcl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QZXJjZXB0cm9uKSB0aGF0IHRha2VzXG4gKiBhcnJheXMgb2YgbnVtYmVycyBhbmQgcHJlZGljdHMgd2hldGhlciB0aGV5IHNob3VsZCBiZSBjbGFzc2lmaWVkXG4gKiBhcyBlaXRoZXIgMCBvciAxIChuZWdhdGl2ZSBvciBwb3NpdGl2ZSBleGFtcGxlcykuXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIG1vZGVsXG4gKiB2YXIgcCA9IG5ldyBQZXJjZXB0cm9uTW9kZWwoKTtcbiAqIC8vIFRyYWluIHRoZSBtb2RlbCB3aXRoIGlucHV0IHdpdGggYSBkaWFnb25hbCBib3VuZGFyeS5cbiAqIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gKiAgICAgcC50cmFpbihbMSwgMV0sIDEpO1xuICogICAgIHAudHJhaW4oWzAsIDFdLCAwKTtcbiAqICAgICBwLnRyYWluKFsxLCAwXSwgMCk7XG4gKiAgICAgcC50cmFpbihbMCwgMF0sIDApO1xuICogfVxuICogcC5wcmVkaWN0KFswLCAwXSk7IC8vIDBcbiAqIHAucHJlZGljdChbMCwgMV0pOyAvLyAwXG4gKiBwLnByZWRpY3QoWzEsIDBdKTsgLy8gMFxuICogcC5wcmVkaWN0KFsxLCAxXSk7IC8vIDFcbiAqL1xuZnVuY3Rpb24gUGVyY2VwdHJvbk1vZGVsKCkge1xuICAgIC8vIFRoZSB3ZWlnaHRzLCBvciBjb2VmZmljaWVudHMgb2YgdGhlIG1vZGVsO1xuICAgIC8vIHdlaWdodHMgYXJlIG9ubHkgcG9wdWxhdGVkIHdoZW4gdHJhaW5pbmcgd2l0aCBkYXRhLlxuICAgIHRoaXMud2VpZ2h0cyA9IFtdO1xuICAgIC8vIFRoZSBiaWFzIHRlcm0sIG9yIGludGVyY2VwdDsgaXQgaXMgYWxzbyBhIHdlaWdodCBidXRcbiAgICAvLyBpdCdzIHN0b3JlZCBzZXBhcmF0ZWx5IGZvciBjb252ZW5pZW5jZSBhcyBpdCBpcyBhbHdheXNcbiAgICAvLyBtdWx0aXBsaWVkIGJ5IG9uZS5cbiAgICB0aGlzLmJpYXMgPSAwO1xufVxuXG4vKipcbiAqICoqUHJlZGljdCoqOiBVc2UgYW4gYXJyYXkgb2YgZmVhdHVyZXMgd2l0aCB0aGUgd2VpZ2h0IGFycmF5IGFuZCBiaWFzXG4gKiB0byBwcmVkaWN0IHdoZXRoZXIgYW4gZXhhbXBsZSBpcyBsYWJlbGVkIDAgb3IgMS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVzIGFuIGFycmF5IG9mIGZlYXR1cmVzIGFzIG51bWJlcnNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IDEgaWYgdGhlIHNjb3JlIGlzIG92ZXIgMCwgb3RoZXJ3aXNlIDBcbiAqL1xuUGVyY2VwdHJvbk1vZGVsLnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24oZmVhdHVyZXMpIHtcblxuICAgIC8vIE9ubHkgcHJlZGljdCBpZiBwcmV2aW91c2x5IHRyYWluZWRcbiAgICAvLyBvbiB0aGUgc2FtZSBzaXplIGZlYXR1cmUgYXJyYXkocykuXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCAhPT0gdGhpcy53ZWlnaHRzLmxlbmd0aCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzdW0gb2YgZmVhdHVyZXMgdGltZXMgd2VpZ2h0cyxcbiAgICAvLyB3aXRoIHRoZSBiaWFzIGFkZGVkIChpbXBsaWNpdGx5IHRpbWVzIG9uZSkuXG4gICAgdmFyIHNjb3JlID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2VpZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzY29yZSArPSB0aGlzLndlaWdodHNbaV0gKiBmZWF0dXJlc1tpXTtcbiAgICB9XG4gICAgc2NvcmUgKz0gdGhpcy5iaWFzO1xuXG4gICAgLy8gQ2xhc3NpZnkgYXMgMSBpZiB0aGUgc2NvcmUgaXMgb3ZlciAwLCBvdGhlcndpc2UgMC5cbiAgICBpZiAoc2NvcmUgPiAwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogKipUcmFpbioqIHRoZSBjbGFzc2lmaWVyIHdpdGggYSBuZXcgZXhhbXBsZSwgd2hpY2ggaXNcbiAqIGEgbnVtZXJpYyBhcnJheSBvZiBmZWF0dXJlcyBhbmQgYSAwIG9yIDEgbGFiZWwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlcyBhbiBhcnJheSBvZiBmZWF0dXJlcyBhcyBudW1iZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gbGFiZWwgZWl0aGVyIDAgb3IgMVxuICogQHJldHVybnMge1BlcmNlcHRyb25Nb2RlbH0gdGhpc1xuICovXG5QZXJjZXB0cm9uTW9kZWwucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24oZmVhdHVyZXMsIGxhYmVsKSB7XG4gICAgLy8gUmVxdWlyZSB0aGF0IG9ubHkgbGFiZWxzIG9mIDAgb3IgMSBhcmUgY29uc2lkZXJlZC5cbiAgICBpZiAobGFiZWwgIT09IDAgJiYgbGFiZWwgIT09IDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAvLyBUaGUgbGVuZ3RoIG9mIHRoZSBmZWF0dXJlIGFycmF5IGRldGVybWluZXNcbiAgICAvLyB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWlnaHQgYXJyYXkuXG4gICAgLy8gVGhlIHBlcmNlcHRyb24gd2lsbCBjb250aW51ZSBsZWFybmluZyBhcyBsb25nIGFzXG4gICAgLy8gaXQga2VlcHMgc2VlaW5nIGZlYXR1cmUgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAvLyBXaGVuIGl0IHNlZXMgYSBuZXcgZGF0YSBzaGFwZSwgaXQgaW5pdGlhbGl6ZXMuXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCAhPT0gdGhpcy53ZWlnaHRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLndlaWdodHMgPSBmZWF0dXJlcztcbiAgICAgICAgdGhpcy5iaWFzID0gMTtcbiAgICB9XG4gICAgLy8gTWFrZSBhIHByZWRpY3Rpb24gYmFzZWQgb24gY3VycmVudCB3ZWlnaHRzLlxuICAgIHZhciBwcmVkaWN0aW9uID0gdGhpcy5wcmVkaWN0KGZlYXR1cmVzKTtcbiAgICAvLyBVcGRhdGUgdGhlIHdlaWdodHMgaWYgdGhlIHByZWRpY3Rpb24gaXMgd3JvbmcuXG4gICAgaWYgKHByZWRpY3Rpb24gIT09IGxhYmVsKSB7XG4gICAgICAgIHZhciBncmFkaWVudCA9IGxhYmVsIC0gcHJlZGljdGlvbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0c1tpXSArPSBncmFkaWVudCAqIGZlYXR1cmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmlhcyArPSBncmFkaWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJjZXB0cm9uTW9kZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVyY2VwdHJvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBBIFtGYWN0b3JpYWxdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZhY3RvcmlhbCksIHVzdWFsbHkgd3JpdHRlbiBuISwgaXMgdGhlIHByb2R1Y3Qgb2YgYWxsIHBvc2l0aXZlXG4gKiBpbnRlZ2VycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gbi4gT2Z0ZW4gZmFjdG9yaWFsIGlzIGltcGxlbWVudGVkXG4gKiByZWN1cnNpdmVseSwgYnV0IHRoaXMgaXRlcmF0aXZlIGFwcHJvYWNoIGlzIHNpZ25pZmljYW50bHkgZmFzdGVyXG4gKiBhbmQgc2ltcGxlci5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBpbnB1dCwgbXVzdCBiZSBhbiBpbnRlZ2VyIG51bWJlciAxIG9yIGdyZWF0ZXJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGZhY3RvcmlhbDogbiFcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBuIGlzIGxlc3MgdGhhbiAwIG9yIG5vdCBhbiBpbnRlZ2VyXG4gKiBAZXhhbXBsZVxuICogZmFjdG9yaWFsKDUpOyAvLyA9PiAxMjBcbiAqL1xuZnVuY3Rpb24gZmFjdG9yaWFsKG4gLyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcblxuICAgIC8vIGZhY3RvcmlhbCBpcyBtYXRoZW1hdGljYWxseSB1bmRlZmluZWQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAobiA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWN0b3JpYWwgcmVxdWlyZXMgYSBub24tbmVnYXRpdmUgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5mbG9vcihuKSAhPT0gbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhY3RvcmlhbCByZXF1aXJlcyBhbiBpbnRlZ2VyIGlucHV0Jyk7XG4gICAgfVxuXG4gICAgLy8gdHlwaWNhbGx5IHlvdSdsbCBleHBhbmQgdGhlIGZhY3RvcmlhbCBmdW5jdGlvbiBnb2luZyBkb3duLCBsaWtlXG4gICAgLy8gNSEgPSA1ICogNCAqIDMgKiAyICogMS4gVGhpcyBpcyBnb2luZyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLFxuICAgIC8vIGNvdW50aW5nIGZyb20gMiB1cCB0byB0aGUgbnVtYmVyIGluIHF1ZXN0aW9uLCBhbmQgc2luY2UgYW55dGhpbmdcbiAgICAvLyBtdWx0aXBsaWVkIGJ5IDEgaXMgaXRzZWxmLCB0aGUgbG9vcCBvbmx5IG5lZWRzIHRvIHN0YXJ0IGF0IDIuXG4gICAgdmFyIGFjY3VtdWxhdG9yID0gMTtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgLy8gZm9yIGVhY2ggbnVtYmVyIHVwIHRvIGFuZCBpbmNsdWRpbmcgdGhlIG51bWJlciBgbmAsIG11bHRpcGx5XG4gICAgICAgIC8vIHRoZSBhY2N1bXVsYXRvciBteSB0aGF0IG51bWJlci5cbiAgICAgICAgYWNjdW11bGF0b3IgKj0gaTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmYWN0b3JpYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZmFjdG9yaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgW0Jlcm5vdWxsaSBkaXN0cmlidXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmVybm91bGxpX2Rpc3RyaWJ1dGlvbilcbiAqIGlzIHRoZSBwcm9iYWJpbGl0eSBkaXNjcmV0ZVxuICogZGlzdHJpYnV0aW9uIG9mIGEgcmFuZG9tIHZhcmlhYmxlIHdoaWNoIHRha2VzIHZhbHVlIDEgd2l0aCBzdWNjZXNzXG4gKiBwcm9iYWJpbGl0eSBgcGAgYW5kIHZhbHVlIDAgd2l0aCBmYWlsdXJlXG4gKiBwcm9iYWJpbGl0eSBgcWAgPSAxIC0gYHBgLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIHJlcHJlc2VudCB0aGVcbiAqIHRvc3Mgb2YgYSBjb2luLCB3aGVyZSBcIjFcIiBpcyBkZWZpbmVkIHRvIG1lYW4gXCJoZWFkc1wiIGFuZCBcIjBcIiBpcyBkZWZpbmVkXG4gKiB0byBtZWFuIFwidGFpbHNcIiAob3IgdmljZSB2ZXJzYSkuIEl0IGlzXG4gKiBhIHNwZWNpYWwgY2FzZSBvZiBhIEJpbm9taWFsIERpc3RyaWJ1dGlvblxuICogd2hlcmUgYG5gID0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcCBpbnB1dCB2YWx1ZSwgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZVxuICogQHJldHVybnMge251bWJlcltdfSB2YWx1ZXMgb2YgYmVybm91bGxpIGRpc3RyaWJ1dGlvbiBhdCB0aGlzIHBvaW50XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgcCBpcyBvdXRzaWRlIDAgYW5kIDFcbiAqIEBleGFtcGxlXG4gKiBiZXJub3VsbGlEaXN0cmlidXRpb24oMC4zKTsgLy8gPT4gWzAuNywgMC4zXVxuICovXG5mdW5jdGlvbiBiZXJub3VsbGlEaXN0cmlidXRpb24ocC8qOiBudW1iZXIgKi8pIC8qOiBudW1iZXJbXSAqLyB7XG4gICAgLy8gQ2hlY2sgdGhhdCBgcGAgaXMgYSB2YWxpZCBwcm9iYWJpbGl0eSAoMCDiiaQgcCDiiaQgMSlcbiAgICBpZiAocCA8IDAgfHwgcCA+IDEgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmVybm91bGxpRGlzdHJpYnV0aW9uIHJlcXVpcmVzIHByb2JhYmlsaXR5IHRvIGJlIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWzEgLSBwLCBwXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmVybm91bGxpRGlzdHJpYnV0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jlcm5vdWxsaV9kaXN0cmlidXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuXG4vKipcbiAqIFRoZSBbQmlub21pYWwgRGlzdHJpYnV0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpbm9taWFsX2Rpc3RyaWJ1dGlvbikgaXMgdGhlIGRpc2NyZXRlIHByb2JhYmlsaXR5XG4gKiBkaXN0cmlidXRpb24gb2YgdGhlIG51bWJlciBvZiBzdWNjZXNzZXMgaW4gYSBzZXF1ZW5jZSBvZiBuIGluZGVwZW5kZW50IHllcy9ubyBleHBlcmltZW50cywgZWFjaCBvZiB3aGljaCB5aWVsZHNcbiAqIHN1Y2Nlc3Mgd2l0aCBwcm9iYWJpbGl0eSBgcHJvYmFiaWxpdHlgLiBTdWNoIGEgc3VjY2Vzcy9mYWlsdXJlIGV4cGVyaW1lbnQgaXMgYWxzbyBjYWxsZWQgYSBCZXJub3VsbGkgZXhwZXJpbWVudCBvclxuICogQmVybm91bGxpIHRyaWFsOyB3aGVuIHRyaWFscyA9IDEsIHRoZSBCaW5vbWlhbCBEaXN0cmlidXRpb24gaXMgYSBCZXJub3VsbGkgRGlzdHJpYnV0aW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0cmlhbHMgbnVtYmVyIG9mIHRyaWFscyB0byBzaW11bGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHByb2JhYmlsaXR5XG4gKiBAcmV0dXJucyB7bnVtYmVyW119IG91dHB1dFxuICovXG5mdW5jdGlvbiBiaW5vbWlhbERpc3RyaWJ1dGlvbihcbiAgICB0cmlhbHMvKjogbnVtYmVyICovLFxuICAgIHByb2JhYmlsaXR5Lyo6IG51bWJlciAqLykvKjogP251bWJlcltdICovIHtcbiAgICAvLyBDaGVjayB0aGF0IGBwYCBpcyBhIHZhbGlkIHByb2JhYmlsaXR5ICgwIOKJpCBwIOKJpCAxKSxcbiAgICAvLyB0aGF0IGBuYCBpcyBhbiBpbnRlZ2VyLCBzdHJpY3RseSBwb3NpdGl2ZS5cbiAgICBpZiAocHJvYmFiaWxpdHkgPCAwIHx8IHByb2JhYmlsaXR5ID4gMSB8fFxuICAgICAgICB0cmlhbHMgPD0gMCB8fCB0cmlhbHMgJSAxICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gV2UgaW5pdGlhbGl6ZSBgeGAsIHRoZSByYW5kb20gdmFyaWFibGUsIGFuZCBgYWNjdW11bGF0b3JgLCBhbiBhY2N1bXVsYXRvclxuICAgIC8vIGZvciB0aGUgY3VtdWxhdGl2ZSBkaXN0cmlidXRpb24gZnVuY3Rpb24gdG8gMC4gYGRpc3RyaWJ1dGlvbl9mdW5jdGlvbnNgXG4gICAgLy8gaXMgdGhlIG9iamVjdCB3ZSdsbCByZXR1cm4gd2l0aCB0aGUgYHByb2JhYmlsaXR5X29mX3hgIGFuZCB0aGVcbiAgICAvLyBgY3VtdWxhdGl2ZVByb2JhYmlsaXR5X29mX3hgLCBhcyB3ZWxsIGFzIHRoZSBjYWxjdWxhdGVkIG1lYW4gJlxuICAgIC8vIHZhcmlhbmNlLiBXZSBpdGVyYXRlIHVudGlsIHRoZSBgY3VtdWxhdGl2ZVByb2JhYmlsaXR5X29mX3hgIGlzXG4gICAgLy8gd2l0aGluIGBlcHNpbG9uYCBvZiAxLjAuXG4gICAgdmFyIHggPSAwLFxuICAgICAgICBjdW11bGF0aXZlUHJvYmFiaWxpdHkgPSAwLFxuICAgICAgICBjZWxscyA9IFtdLFxuICAgICAgICBiaW5vbWlhbENvZWZmaWNpZW50ID0gMTtcblxuICAgIC8vIFRoaXMgYWxnb3JpdGhtIGl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwb3RlbnRpYWwgb3V0Y29tZSxcbiAgICAvLyB1bnRpbCB0aGUgYGN1bXVsYXRpdmVQcm9iYWJpbGl0eWAgaXMgdmVyeSBjbG9zZSB0byAxLCBhdFxuICAgIC8vIHdoaWNoIHBvaW50IHdlJ3ZlIGRlZmluZWQgdGhlIHZhc3QgbWFqb3JpdHkgb2Ygb3V0Y29tZXNcbiAgICBkbyB7XG4gICAgICAgIC8vIGEgW3Byb2JhYmlsaXR5IG1hc3MgZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Byb2JhYmlsaXR5X21hc3NfZnVuY3Rpb24pXG4gICAgICAgIGNlbGxzW3hdID0gYmlub21pYWxDb2VmZmljaWVudCAqXG4gICAgICAgICAgICBNYXRoLnBvdyhwcm9iYWJpbGl0eSwgeCkgKiBNYXRoLnBvdygxIC0gcHJvYmFiaWxpdHksIHRyaWFscyAtIHgpO1xuICAgICAgICBjdW11bGF0aXZlUHJvYmFiaWxpdHkgKz0gY2VsbHNbeF07XG4gICAgICAgIHgrKztcbiAgICAgICAgYmlub21pYWxDb2VmZmljaWVudCA9IGJpbm9taWFsQ29lZmZpY2llbnQgKiAodHJpYWxzIC0geCArIDEpIC8geDtcbiAgICAvLyB3aGVuIHRoZSBjdW11bGF0aXZlUHJvYmFiaWxpdHkgaXMgbmVhcmx5IDEsIHdlJ3ZlIGNhbGN1bGF0ZWRcbiAgICAvLyB0aGUgdXNlZnVsIHJhbmdlIG9mIHRoaXMgZGlzdHJpYnV0aW9uXG4gICAgfSB3aGlsZSAoY3VtdWxhdGl2ZVByb2JhYmlsaXR5IDwgMSAtIGVwc2lsb24pO1xuXG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5vbWlhbERpc3RyaWJ1dGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9iaW5vbWlhbF9kaXN0cmlidXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuXG4vKipcbiAqIFRoZSBbUG9pc3NvbiBEaXN0cmlidXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9pc3Nvbl9kaXN0cmlidXRpb24pXG4gKiBpcyBhIGRpc2NyZXRlIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiB0aGF0IGV4cHJlc3NlcyB0aGUgcHJvYmFiaWxpdHlcbiAqIG9mIGEgZ2l2ZW4gbnVtYmVyIG9mIGV2ZW50cyBvY2N1cnJpbmcgaW4gYSBmaXhlZCBpbnRlcnZhbCBvZiB0aW1lXG4gKiBhbmQvb3Igc3BhY2UgaWYgdGhlc2UgZXZlbnRzIG9jY3VyIHdpdGggYSBrbm93biBhdmVyYWdlIHJhdGUgYW5kXG4gKiBpbmRlcGVuZGVudGx5IG9mIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGV2ZW50LlxuICpcbiAqIFRoZSBQb2lzc29uIERpc3RyaWJ1dGlvbiBpcyBjaGFyYWN0ZXJpemVkIGJ5IHRoZSBzdHJpY3RseSBwb3NpdGl2ZVxuICogbWVhbiBhcnJpdmFsIG9yIG9jY3VycmVuY2UgcmF0ZSwgYM67YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGFtYmRhIGxvY2F0aW9uIHBvaXNzb24gZGlzdHJpYnV0aW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyW119IHZhbHVlcyBvZiBwb2lzc29uIGRpc3RyaWJ1dGlvbiBhdCB0aGF0IHBvaW50XG4gKi9cbmZ1bmN0aW9uIHBvaXNzb25EaXN0cmlidXRpb24obGFtYmRhLyo6IG51bWJlciAqLykgLyo6ID9udW1iZXJbXSAqLyB7XG4gICAgLy8gQ2hlY2sgdGhhdCBsYW1iZGEgaXMgc3RyaWN0bHkgcG9zaXRpdmVcbiAgICBpZiAobGFtYmRhIDw9IDApIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4gICAgLy8gb3VyIGN1cnJlbnQgcGxhY2UgaW4gdGhlIGRpc3RyaWJ1dGlvblxuICAgIHZhciB4ID0gMCxcbiAgICAgICAgLy8gYW5kIHdlIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgY3VtdWxhdGl2ZSBwcm9iYWJpbGl0eSwgaW5cbiAgICAgICAgLy8gb3JkZXIgdG8ga25vdyB3aGVuIHRvIHN0b3AgY2FsY3VsYXRpbmcgY2hhbmNlcy5cbiAgICAgICAgY3VtdWxhdGl2ZVByb2JhYmlsaXR5ID0gMCxcbiAgICAgICAgLy8gdGhlIGNhbGN1bGF0ZWQgY2VsbHMgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgY2VsbHMgPSBbXSxcbiAgICAgICAgZmFjdG9yaWFsWCA9IDE7XG5cbiAgICAvLyBUaGlzIGFsZ29yaXRobSBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggcG90ZW50aWFsIG91dGNvbWUsXG4gICAgLy8gdW50aWwgdGhlIGBjdW11bGF0aXZlUHJvYmFiaWxpdHlgIGlzIHZlcnkgY2xvc2UgdG8gMSwgYXRcbiAgICAvLyB3aGljaCBwb2ludCB3ZSd2ZSBkZWZpbmVkIHRoZSB2YXN0IG1ham9yaXR5IG9mIG91dGNvbWVzXG4gICAgZG8ge1xuICAgICAgICAvLyBhIFtwcm9iYWJpbGl0eSBtYXNzIGZ1bmN0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9iYWJpbGl0eV9tYXNzX2Z1bmN0aW9uKVxuICAgICAgICBjZWxsc1t4XSA9IChNYXRoLmV4cCgtbGFtYmRhKSAqIE1hdGgucG93KGxhbWJkYSwgeCkpIC8gZmFjdG9yaWFsWDtcbiAgICAgICAgY3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IGNlbGxzW3hdO1xuICAgICAgICB4Kys7XG4gICAgICAgIGZhY3RvcmlhbFggKj0geDtcbiAgICAvLyB3aGVuIHRoZSBjdW11bGF0aXZlUHJvYmFiaWxpdHkgaXMgbmVhcmx5IDEsIHdlJ3ZlIGNhbGN1bGF0ZWRcbiAgICAvLyB0aGUgdXNlZnVsIHJhbmdlIG9mIHRoaXMgZGlzdHJpYnV0aW9uXG4gICAgfSB3aGlsZSAoY3VtdWxhdGl2ZVByb2JhYmlsaXR5IDwgMSAtIGVwc2lsb24pO1xuXG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwb2lzc29uRGlzdHJpYnV0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3BvaXNzb25fZGlzdHJpYnV0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IGNoaVNxdWFyZWREaXN0cmlidXRpb25UYWJsZSBmcm9tICcuL2NoaV9zcXVhcmVkX2Rpc3RyaWJ1dGlvbl90YWJsZSc7XG5pbXBvcnQgbWVhbiBmcm9tICcuL21lYW4nO1xuXG4vKipcbiAqIFRoZSBbz4cyIChDaGktU3F1YXJlZCkgR29vZG5lc3Mtb2YtRml0IFRlc3RdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR29vZG5lc3Nfb2ZfZml0I1BlYXJzb24uMjdzX2NoaS1zcXVhcmVkX3Rlc3QpXG4gKiB1c2VzIGEgbWVhc3VyZSBvZiBnb29kbmVzcyBvZiBmaXQgd2hpY2ggaXMgdGhlIHN1bSBvZiBkaWZmZXJlbmNlcyBiZXR3ZWVuIG9ic2VydmVkIGFuZCBleHBlY3RlZCBvdXRjb21lIGZyZXF1ZW5jaWVzXG4gKiAodGhhdCBpcywgY291bnRzIG9mIG9ic2VydmF0aW9ucyksIGVhY2ggc3F1YXJlZCBhbmQgZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIG9ic2VydmF0aW9ucyBleHBlY3RlZCBnaXZlbiB0aGVcbiAqIGh5cG90aGVzaXplZCBkaXN0cmlidXRpb24uIFRoZSByZXN1bHRpbmcgz4cyIHN0YXRpc3RpYywgYGNoaVNxdWFyZWRgLCBjYW4gYmUgY29tcGFyZWQgdG8gdGhlIGNoaS1zcXVhcmVkIGRpc3RyaWJ1dGlvblxuICogdG8gZGV0ZXJtaW5lIHRoZSBnb29kbmVzcyBvZiBmaXQuIEluIG9yZGVyIHRvIGRldGVybWluZSB0aGUgZGVncmVlcyBvZiBmcmVlZG9tIG9mIHRoZSBjaGktc3F1YXJlZCBkaXN0cmlidXRpb24sIG9uZVxuICogdGFrZXMgdGhlIHRvdGFsIG51bWJlciBvZiBvYnNlcnZlZCBmcmVxdWVuY2llcyBhbmQgc3VidHJhY3RzIHRoZSBudW1iZXIgb2YgZXN0aW1hdGVkIHBhcmFtZXRlcnMuIFRoZSB0ZXN0IHN0YXRpc3RpY1xuICogZm9sbG93cywgYXBwcm94aW1hdGVseSwgYSBjaGktc3F1YXJlIGRpc3RyaWJ1dGlvbiB3aXRoIChrIOKIkiBjKSBkZWdyZWVzIG9mIGZyZWVkb20gd2hlcmUgYGtgIGlzIHRoZSBudW1iZXIgb2Ygbm9uLWVtcHR5XG4gKiBjZWxscyBhbmQgYGNgIGlzIHRoZSBudW1iZXIgb2YgZXN0aW1hdGVkIHBhcmFtZXRlcnMgZm9yIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXN0cmlidXRpb25UeXBlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcG9pbnQgaW4gYSBkaXN0cmlidXRpb246XG4gKiBmb3IgaW5zdGFuY2UsIGJpbm9taWFsLCBiZXJub3VsbGksIG9yIHBvaXNzb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWduaWZpY2FuY2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGNoaSBzcXVhcmVkIGdvb2RuZXNzIG9mIGZpdFxuICogQGV4YW1wbGVcbiAqIC8vIERhdGEgZnJvbSBQb2lzc29uIGdvb2RuZXNzLW9mLWZpdCBleGFtcGxlIDEwLTE5IGluIFdpbGxpYW0gVy4gSGluZXMgJiBEb3VnbGFzIEMuIE1vbnRnb21lcnksXG4gKiAvLyBcIlByb2JhYmlsaXR5IGFuZCBTdGF0aXN0aWNzIGluIEVuZ2luZWVyaW5nIGFuZCBNYW5hZ2VtZW50IFNjaWVuY2VcIiwgV2lsZXkgKDE5ODApLlxuICogdmFyIGRhdGExMDE5ID0gW1xuICogICAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gKiAgICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAqICAgICAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLFxuICogICAgIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsXG4gKiAgICAgMywgMywgMywgM1xuICogXTtcbiAqIHNzLmNoaVNxdWFyZWRHb29kbmVzc09mRml0KGRhdGExMDE5LCBzcy5wb2lzc29uRGlzdHJpYnV0aW9uLCAwLjA1KTsgLy89IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNoaVNxdWFyZWRHb29kbmVzc09mRml0KFxuICAgIGRhdGEvKjogQXJyYXk8bnVtYmVyPiAqLyxcbiAgICBkaXN0cmlidXRpb25UeXBlLyo6IEZ1bmN0aW9uICovLFxuICAgIHNpZ25pZmljYW5jZS8qOiBudW1iZXIgKi8pLyo6IGJvb2xlYW4gKi8ge1xuICAgIC8vIEVzdGltYXRlIGZyb20gdGhlIHNhbXBsZSBkYXRhLCBhIHdlaWdodGVkIG1lYW4uXG4gICAgdmFyIGlucHV0TWVhbiA9IG1lYW4oZGF0YSksXG4gICAgICAgIC8vIENhbGN1bGF0ZWQgdmFsdWUgb2YgdGhlIM+HMiBzdGF0aXN0aWMuXG4gICAgICAgIGNoaVNxdWFyZWQgPSAwLFxuICAgICAgICAvLyBEZWdyZWVzIG9mIGZyZWVkb20sIGNhbGN1bGF0ZWQgYXMgKG51bWJlciBvZiBjbGFzcyBpbnRlcnZhbHMgLVxuICAgICAgICAvLyBudW1iZXIgb2YgaHlwb3RoZXNpemVkIGRpc3RyaWJ1dGlvbiBwYXJhbWV0ZXJzIGVzdGltYXRlZCAtIDEpXG4gICAgICAgIGRlZ3JlZXNPZkZyZWVkb20sXG4gICAgICAgIC8vIE51bWJlciBvZiBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uIHBhcmFtZXRlcnMgZXN0aW1hdGVkLCBleHBlY3RlZCB0byBiZSBzdXBwbGllZCBpbiB0aGUgZGlzdHJpYnV0aW9uIHRlc3QuXG4gICAgICAgIC8vIExvc2Ugb25lIGRlZ3JlZSBvZiBmcmVlZG9tIGZvciBlc3RpbWF0aW5nIGBsYW1iZGFgIGZyb20gdGhlIHNhbXBsZSBkYXRhLlxuICAgICAgICBjID0gMSxcbiAgICAgICAgLy8gVGhlIGh5cG90aGVzaXplZCBkaXN0cmlidXRpb24uXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uLlxuICAgICAgICBoeXBvdGhlc2l6ZWREaXN0cmlidXRpb24gPSBkaXN0cmlidXRpb25UeXBlKGlucHV0TWVhbiksXG4gICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXMgPSBbXSxcbiAgICAgICAgZXhwZWN0ZWRGcmVxdWVuY2llcyA9IFtdLFxuICAgICAgICBrO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IGhvbGRpbmcgYSBoaXN0b2dyYW0gZnJvbSB0aGUgc2FtcGxlIGRhdGEsIG9mXG4gICAgLy8gdGhlIGZvcm0gYHsgdmFsdWU6IG51bWJlck9mT2N1cnJlbmNlcyB9YFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JzZXJ2ZWRGcmVxdWVuY2llc1tkYXRhW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYnNlcnZlZEZyZXF1ZW5jaWVzW2RhdGFbaV1dID0gMDtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlZEZyZXF1ZW5jaWVzW2RhdGFbaV1dKys7XG4gICAgfVxuXG4gICAgLy8gVGhlIGhpc3RvZ3JhbSB3ZSBjcmVhdGVkIG1pZ2h0IGJlIHNwYXJzZSAtIHRoZXJlIG1pZ2h0IGJlIGdhcHNcbiAgICAvLyBiZXR3ZWVuIHZhbHVlcy4gU28gd2UgaXRlcmF0ZSB0aHJvdWdoIHRoZSBoaXN0b2dyYW0sIG1ha2luZ1xuICAgIC8vIHN1cmUgdGhhdCBpbnN0ZWFkIG9mIHVuZGVmaW5lZCwgZ2FwcyBoYXZlIDAgdmFsdWVzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBvYnNlcnZlZEZyZXF1ZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYnNlcnZlZEZyZXF1ZW5jaWVzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXNbaV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IGhvbGRpbmcgYSBoaXN0b2dyYW0gb2YgZXhwZWN0ZWQgZGF0YSBnaXZlbiB0aGVcbiAgICAvLyBzYW1wbGUgc2l6ZSBhbmQgaHlwb3RoZXNpemVkIGRpc3RyaWJ1dGlvbi5cbiAgICBmb3IgKGsgaW4gaHlwb3RoZXNpemVkRGlzdHJpYnV0aW9uKSB7XG4gICAgICAgIGlmIChrIGluIG9ic2VydmVkRnJlcXVlbmNpZXMpIHtcbiAgICAgICAgICAgIGV4cGVjdGVkRnJlcXVlbmNpZXNbK2tdID0gaHlwb3RoZXNpemVkRGlzdHJpYnV0aW9uW2tdICogZGF0YS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXb3JraW5nIGJhY2t3YXJkIHRocm91Z2ggdGhlIGV4cGVjdGVkIGZyZXF1ZW5jaWVzLCBjb2xsYXBzZSBjbGFzc2VzXG4gICAgLy8gaWYgbGVzcyB0aGFuIHRocmVlIG9ic2VydmF0aW9ucyBhcmUgZXhwZWN0ZWQgZm9yIGEgY2xhc3MuXG4gICAgLy8gVGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBvYnNlcnZlZCBmcmVxdWVuY2llcyBhcyB3ZWxsLlxuICAgIGZvciAoayA9IGV4cGVjdGVkRnJlcXVlbmNpZXMubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkRnJlcXVlbmNpZXNba10gPCAzKSB7XG4gICAgICAgICAgICBleHBlY3RlZEZyZXF1ZW5jaWVzW2sgLSAxXSArPSBleHBlY3RlZEZyZXF1ZW5jaWVzW2tdO1xuICAgICAgICAgICAgZXhwZWN0ZWRGcmVxdWVuY2llcy5wb3AoKTtcblxuICAgICAgICAgICAgb2JzZXJ2ZWRGcmVxdWVuY2llc1trIC0gMV0gKz0gb2JzZXJ2ZWRGcmVxdWVuY2llc1trXTtcbiAgICAgICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHNxdWFyZWQgZGlmZmVyZW5jZXMgYmV0d2VlbiBvYnNlcnZlZCAmIGV4cGVjdGVkXG4gICAgLy8gZnJlcXVlbmNpZXMsIGFjY3VtdWxhdGluZyB0aGUgYGNoaVNxdWFyZWRgIHN0YXRpc3RpYy5cbiAgICBmb3IgKGsgPSAwOyBrIDwgb2JzZXJ2ZWRGcmVxdWVuY2llcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBjaGlTcXVhcmVkICs9IE1hdGgucG93KFxuICAgICAgICAgICAgb2JzZXJ2ZWRGcmVxdWVuY2llc1trXSAtIGV4cGVjdGVkRnJlcXVlbmNpZXNba10sIDIpIC9cbiAgICAgICAgICAgIGV4cGVjdGVkRnJlcXVlbmNpZXNba107XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGRlZ3JlZXMgb2YgZnJlZWRvbSBmb3IgdGhpcyB0ZXN0IGFuZCBsb29rIGl0IHVwIGluIHRoZVxuICAgIC8vIGBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGVgIGluIG9yZGVyIHRvXG4gICAgLy8gYWNjZXB0IG9yIHJlamVjdCB0aGUgZ29vZG5lc3Mtb2YtZml0IG9mIHRoZSBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uLlxuICAgIGRlZ3JlZXNPZkZyZWVkb20gPSBvYnNlcnZlZEZyZXF1ZW5jaWVzLmxlbmd0aCAtIGMgLSAxO1xuICAgIHJldHVybiBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGVbZGVncmVlc09mRnJlZWRvbV1bc2lnbmlmaWNhbmNlXSA8IGNoaVNxdWFyZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoaVNxdWFyZWRHb29kbmVzc09mRml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NoaV9zcXVhcmVkX2dvb2RuZXNzX29mX2ZpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBpbnRlcnF1YXJ0aWxlUmFuZ2UgZnJvbSAnLi9pbnRlcnF1YXJ0aWxlX3JhbmdlJztcbmltcG9ydCBzdGRkZXYgZnJvbSAnLi9zYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uJztcblxudmFyIFNRUlRfMlBJID0gTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKTtcblxuLyoqXG4gKiBbV2VsbC1rbm93biBrZXJuZWxzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXJuZWxfKHN0YXRpc3RpY3MpI0tlcm5lbF9mdW5jdGlvbnNfaW5fY29tbW9uX3VzZSlcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBrZXJuZWxzIC8qOiB7W3N0cmluZ106IChudW1iZXIpID0+IG51bWJlcn0gKi8gPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGdhdXNzaWFuIGtlcm5lbC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGdhdXNzaWFuOiBmdW5jdGlvbiAodSkge1xuICAgICAgICByZXR1cm4gTWF0aC5leHAoLTAuNSAqIHUgKiB1KSAvIFNRUlRfMlBJO1xuICAgIH1cbn07XG5cbi8qKlxuICogV2VsbCBrbm93biBiYW5kd2lkdGggc2VsZWN0aW9uIG1ldGhvZHNcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBiYW5kd2lkdGhNZXRob2RzIC8qOiB7W3N0cmluZ106IChBcnJheTxudW1iZXI+KSA9PiBudW1iZXJ9ICovID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBbXCJub3JtYWwgcmVmZXJlbmNlIGRpc3RyaWJ1dGlvblwiXG4gICAgICogcnVsZS1vZi10aHVtYl0oaHR0cHM6Ly9zdGF0LmV0aHouY2gvUi1tYW51YWwvUi1kZXZlbC9saWJyYXJ5L01BU1MvaHRtbC9iYW5kd2lkdGgubnJkLmh0bWwpLFxuICAgICAqIGEgY29tbW9ubHkgdXNlZCB2ZXJzaW9uIG9mIFtTaWx2ZXJtYW4nc1xuICAgICAqIHJ1bGUtb2YtdGh1bWJdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0tlcm5lbF9kZW5zaXR5X2VzdGltYXRpb24jQV9ydWxlLW9mLXRodW1iX2JhbmR3aWR0aF9lc3RpbWF0b3IpLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbnJkOiBmdW5jdGlvbiAoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykge1xuICAgICAgICB2YXIgcyA9IHN0ZGRldih4KTtcbiAgICAgICAgdmFyIGlxciA9IGludGVycXVhcnRpbGVSYW5nZSh4KTtcbiAgICAgICAgaWYgKHR5cGVvZiBpcXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzID0gTWF0aC5taW4ocywgaXFyIC8gMS4zNClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMS4wNiAqIHMgKiBNYXRoLnBvdyh4Lmxlbmd0aCwgLTAuMik7XG4gICAgfVxufVxuXG4vKipcbiAqIFtLZXJuZWwgZGVuc2l0eSBlc3RpbWF0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXJuZWxfZGVuc2l0eV9lc3RpbWF0aW9uKVxuICogaXMgYSB1c2VmdWwgdG9vbCBmb3IsIGFtb25nIG90aGVyIHRoaW5ncywgZXN0aW1hdGluZyB0aGUgc2hhcGUgb2YgdGhlXG4gKiB1bmRlcmx5aW5nIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiBmcm9tIGEgc2FtcGxlLlxuICpcbiAqIEBuYW1lIGtlcm5lbERlbnNpdHlFc3RpbWF0aW9uXG4gKiBAcGFyYW0gWCBzYW1wbGUgdmFsdWVzXG4gKiBAcGFyYW0ga2VybmVsIFRoZSBrZXJuZWwgZnVuY3Rpb24gdG8gdXNlLiBJZiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBpdCBzaG91bGQgcmV0dXJuIG5vbi1uZWdhdGl2ZSB2YWx1ZXMgYW5kIGludGVncmF0ZSB0byAxLiBEZWZhdWx0cyB0byAnZ2F1c3NpYW4nLlxuICogQHBhcmFtIGJhbmR3aWR0aE1ldGhvZCBUaGUgXCJiYW5kd2lkdGggc2VsZWN0aW9uXCIgbWV0aG9kIHRvIHVzZSwgb3IgYSBmaXhlZCBiYW5kd2lkdGggdmFsdWUuIERlZmF1bHRzIHRvIFwibnJkXCIsIHRoZSBjb21tb25seS11c2VkIFtcIm5vcm1hbCByZWZlcmVuY2UgZGlzdHJpYnV0aW9uXCIgcnVsZS1vZi10aHVtYl0oaHR0cHM6Ly9zdGF0LmV0aHouY2gvUi1tYW51YWwvUi1kZXZlbC9saWJyYXJ5L01BU1MvaHRtbC9iYW5kd2lkdGgubnJkLmh0bWwpLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBbiBlc3RpbWF0ZWQgW3Byb2JhYmlsaXR5IGRlbnNpdHkgZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Byb2JhYmlsaXR5X2RlbnNpdHlfZnVuY3Rpb24pIGZvciB0aGUgZ2l2ZW4gc2FtcGxlLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gcnVucyBpbiBgTyhYLmxlbmd0aClgLlxuICovXG5mdW5jdGlvbiBrZXJuZWxEZW5zaXR5RXN0aW1hdGlvbihcbiAgICBYIC8qOiBBcnJheTxudW1iZXI+ICovLFxuICAgIGtlcm5lbCAvKjogJEtleXM8dHlwZW9mIGtlcm5lbHM+IHwgKChudW1iZXIpID0+IG51bWJlcikgfCB2b2lkKi8sXG4gICAgYmFuZHdpZHRoTWV0aG9kIC8qOiAkS2V5czx0eXBlb2YgYmFuZHdpZHRoTWV0aG9kcz4gfCBudW1iZXIgfCB2b2lkKi9cbikge1xuICAgIHZhciBrZXJuZWxGbi8qOiAobnVtYmVyKSA9PiBudW1iZXIgKi87XG4gICAgaWYgKGtlcm5lbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVscy5nYXVzc2lhbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBrZXJuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgha2VybmVsc1trZXJuZWxdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24ga2VybmVsIFwiJyArIGtlcm5lbCArICdcIicpO1xuICAgICAgICB9XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVsc1trZXJuZWxdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVsO1xuICAgIH1cblxuICAgIHZhciBiYW5kd2lkdGg7XG4gICAgaWYgKHR5cGVvZiBiYW5kd2lkdGhNZXRob2QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGJhbmR3aWR0aCA9IGJhbmR3aWR0aE1ldGhvZHMubnJkKFgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJhbmR3aWR0aE1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCFiYW5kd2lkdGhNZXRob2RzW2JhbmR3aWR0aE1ldGhvZF0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBiYW5kd2lkdGggbWV0aG9kIFwiJyArIGJhbmR3aWR0aE1ldGhvZCArICdcIicpO1xuICAgICAgICB9XG4gICAgICAgIGJhbmR3aWR0aCA9IGJhbmR3aWR0aE1ldGhvZHNbYmFuZHdpZHRoTWV0aG9kXShYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiYW5kd2lkdGggPSBiYW5kd2lkdGhNZXRob2Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4IC8qOiBudW1iZXIqLykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgWC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGtlcm5lbEZuKCh4IC0gWFtpXSkgLyBiYW5kd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW0gLyBiYW5kd2lkdGggLyBYLmxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGtlcm5lbERlbnNpdHlFc3RpbWF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2tlcm5lbF9kZW5zaXR5X2VzdGltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbWi1TY29yZSwgb3IgU3RhbmRhcmQgU2NvcmVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3RhbmRhcmRfc2NvcmUpLlxuICpcbiAqIFRoZSBzdGFuZGFyZCBzY29yZSBpcyB0aGUgbnVtYmVyIG9mIHN0YW5kYXJkIGRldmlhdGlvbnMgYW4gb2JzZXJ2YXRpb25cbiAqIG9yIGRhdHVtIGlzIGFib3ZlIG9yIGJlbG93IHRoZSBtZWFuLiBUaHVzLCBhIHBvc2l0aXZlIHN0YW5kYXJkIHNjb3JlXG4gKiByZXByZXNlbnRzIGEgZGF0dW0gYWJvdmUgdGhlIG1lYW4sIHdoaWxlIGEgbmVnYXRpdmUgc3RhbmRhcmQgc2NvcmVcbiAqIHJlcHJlc2VudHMgYSBkYXR1bSBiZWxvdyB0aGUgbWVhbi4gSXQgaXMgYSBkaW1lbnNpb25sZXNzIHF1YW50aXR5XG4gKiBvYnRhaW5lZCBieSBzdWJ0cmFjdGluZyB0aGUgcG9wdWxhdGlvbiBtZWFuIGZyb20gYW4gaW5kaXZpZHVhbCByYXdcbiAqIHNjb3JlIGFuZCB0aGVuIGRpdmlkaW5nIHRoZSBkaWZmZXJlbmNlIGJ5IHRoZSBwb3B1bGF0aW9uIHN0YW5kYXJkXG4gKiBkZXZpYXRpb24uXG4gKlxuICogVGhlIHotc2NvcmUgaXMgb25seSBkZWZpbmVkIGlmIG9uZSBrbm93cyB0aGUgcG9wdWxhdGlvbiBwYXJhbWV0ZXJzO1xuICogaWYgb25lIG9ubHkgaGFzIGEgc2FtcGxlIHNldCwgdGhlbiB0aGUgYW5hbG9nb3VzIGNvbXB1dGF0aW9uIHdpdGhcbiAqIHNhbXBsZSBtZWFuIGFuZCBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIHlpZWxkcyB0aGVcbiAqIFN0dWRlbnQncyB0LXN0YXRpc3RpYy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFuZGFyZERldmlhdGlvblxuICogQHJldHVybiB7bnVtYmVyfSB6IHNjb3JlXG4gKiBAZXhhbXBsZVxuICogelNjb3JlKDc4LCA4MCwgNSk7IC8vID0+IC0wLjRcbiAqL1xuZnVuY3Rpb24gelNjb3JlKHgvKjpudW1iZXIqLywgbWVhbi8qOm51bWJlciovLCBzdGFuZGFyZERldmlhdGlvbi8qOm51bWJlciovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4gKHggLSBtZWFuKSAvIHN0YW5kYXJkRGV2aWF0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB6U2NvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvel9zY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzdGFuZGFyZE5vcm1hbFRhYmxlIGZyb20gJy4vc3RhbmRhcmRfbm9ybWFsX3RhYmxlJztcblxuLyoqXG4gKiAqKltDdW11bGF0aXZlIFN0YW5kYXJkIE5vcm1hbCBQcm9iYWJpbGl0eV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdGFuZGFyZF9ub3JtYWxfdGFibGUpKipcbiAqXG4gKiBTaW5jZSBwcm9iYWJpbGl0eSB0YWJsZXMgY2Fubm90IGJlXG4gKiBwcmludGVkIGZvciBldmVyeSBub3JtYWwgZGlzdHJpYnV0aW9uLCBhcyB0aGVyZSBhcmUgYW4gaW5maW5pdGUgdmFyaWV0eVxuICogb2Ygbm9ybWFsIGRpc3RyaWJ1dGlvbnMsIGl0IGlzIGNvbW1vbiBwcmFjdGljZSB0byBjb252ZXJ0IGEgbm9ybWFsIHRvIGFcbiAqIHN0YW5kYXJkIG5vcm1hbCBhbmQgdGhlbiB1c2UgdGhlIHN0YW5kYXJkIG5vcm1hbCB0YWJsZSB0byBmaW5kIHByb2JhYmlsaXRpZXMuXG4gKlxuICogWW91IGNhbiB1c2UgYC41ICsgLjUgKiBlcnJvckZ1bmN0aW9uKHggLyBNYXRoLnNxcnQoMikpYCB0byBjYWxjdWxhdGUgdGhlIHByb2JhYmlsaXR5XG4gKiBpbnN0ZWFkIG9mIGxvb2tpbmcgaXQgdXAgaW4gYSB0YWJsZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gelxuICogQHJldHVybnMge251bWJlcn0gY3VtdWxhdGl2ZSBzdGFuZGFyZCBub3JtYWwgcHJvYmFiaWxpdHlcbiAqL1xuZnVuY3Rpb24gY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5KHogLyo6bnVtYmVyICovKS8qOm51bWJlciAqLyB7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoaXMgdmFsdWUuXG4gICAgdmFyIGFic1ogPSBNYXRoLmFicyh6KSxcbiAgICAgICAgLy8gRWFjaCByb3cgYmVnaW5zIHdpdGggYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gc2lnbmlmaWNhbnQgZGlnaXQ6IDAuNSwgMC42LCAwLjcsIGFuZCBzbyBvbi4gRWFjaCB2YWx1ZSBpbiB0aGUgdGFibGVcbiAgICAgICAgLy8gY29ycmVzcG9uZHMgdG8gYSByYW5nZSBvZiAwLjAxIGluIHRoZSBpbnB1dCB2YWx1ZXMsIHNvIHRoZSB2YWx1ZSBpc1xuICAgICAgICAvLyBtdWx0aXBsaWVkIGJ5IDEwMC5cbiAgICAgICAgaW5kZXggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGFic1ogKiAxMDApLCBzdGFuZGFyZE5vcm1hbFRhYmxlLmxlbmd0aCAtIDEpO1xuXG4gICAgLy8gVGhlIGluZGV4IHdlIGNhbGN1bGF0ZSBtdXN0IGJlIGluIHRoZSB0YWJsZSBhcyBhIHBvc2l0aXZlIHZhbHVlLFxuICAgIC8vIGJ1dCB3ZSBzdGlsbCBwYXkgYXR0ZW50aW9uIHRvIHdoZXRoZXIgdGhlIGlucHV0IGlzIHBvc2l0aXZlXG4gICAgLy8gb3IgbmVnYXRpdmUsIGFuZCBmbGlwIHRoZSBvdXRwdXQgdmFsdWUgYXMgYSBsYXN0IHN0ZXAuXG4gICAgaWYgKHogPj0gMCkge1xuICAgICAgICByZXR1cm4gc3RhbmRhcmROb3JtYWxUYWJsZVtpbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZHVlIHRvIGZsb2F0aW5nLXBvaW50IGFyaXRobWV0aWMsIHZhbHVlcyBpbiB0aGUgdGFibGUgd2l0aFxuICAgICAgICAvLyA0IHNpZ25pZmljYW50IGZpZ3VyZXMgY2FuIG5ldmVydGhlbGVzcyBlbmQgdXAgYXMgcmVwZWF0aW5nXG4gICAgICAgIC8vIGZyYWN0aW9ucyB3aGVuIHRoZXkncmUgY29tcHV0ZWQgaGVyZS5cbiAgICAgICAgcmV0dXJuICsoMSAtIHN0YW5kYXJkTm9ybWFsVGFibGVbaW5kZXhdKS50b0ZpeGVkKDQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2N1bXVsYXRpdmVfc3RkX25vcm1hbF9wcm9iYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogKipbR2F1c3NpYW4gZXJyb3IgZnVuY3Rpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXJyb3JfZnVuY3Rpb24pKipcbiAqXG4gKiBUaGUgYGVycm9yRnVuY3Rpb24oeC8oc2QgKiBNYXRoLnNxcnQoMikpKWAgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgYSB2YWx1ZSBpbiBhXG4gKiBub3JtYWwgZGlzdHJpYnV0aW9uIHdpdGggc3RhbmRhcmQgZGV2aWF0aW9uIHNkIGlzIHdpdGhpbiB4IG9mIHRoZSBtZWFuLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIG51bWVyaWNhbCBhcHByb3hpbWF0aW9uIHRvIHRoZSBleGFjdCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geCBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfSBlcnJvciBlc3RpbWF0aW9uXG4gKiBAZXhhbXBsZVxuICogZXJyb3JGdW5jdGlvbigxKS50b0ZpeGVkKDIpOyAvLyA9PiAnMC44NCdcbiAqL1xuZnVuY3Rpb24gZXJyb3JGdW5jdGlvbih4Lyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdCA9IDEgLyAoMSArIDAuNSAqIE1hdGguYWJzKHgpKTtcbiAgICB2YXIgdGF1ID0gdCAqIE1hdGguZXhwKC1NYXRoLnBvdyh4LCAyKSAtXG4gICAgICAgIDEuMjY1NTEyMjMgK1xuICAgICAgICAxLjAwMDAyMzY4ICogdCArXG4gICAgICAgIDAuMzc0MDkxOTYgKiBNYXRoLnBvdyh0LCAyKSArXG4gICAgICAgIDAuMDk2Nzg0MTggKiBNYXRoLnBvdyh0LCAzKSAtXG4gICAgICAgIDAuMTg2Mjg4MDYgKiBNYXRoLnBvdyh0LCA0KSArXG4gICAgICAgIDAuMjc4ODY4MDcgKiBNYXRoLnBvdyh0LCA1KSAtXG4gICAgICAgIDEuMTM1MjAzOTggKiBNYXRoLnBvdyh0LCA2KSArXG4gICAgICAgIDEuNDg4NTE1ODcgKiBNYXRoLnBvdyh0LCA3KSAtXG4gICAgICAgIDAuODIyMTUyMjMgKiBNYXRoLnBvdyh0LCA4KSArXG4gICAgICAgIDAuMTcwODcyNzcgKiBNYXRoLnBvdyh0LCA5KSk7XG4gICAgaWYgKHggPj0gMCkge1xuICAgICAgICByZXR1cm4gMSAtIHRhdTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGF1IC0gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9yRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXJyb3JfZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuaW1wb3J0IGludmVyc2VFcnJvckZ1bmN0aW9uIGZyb20gJy4vaW52ZXJzZV9lcnJvcl9mdW5jdGlvbic7XG5cbi8qKlxuICogVGhlIFtQcm9iaXRdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHJvYml0KVxuICogaXMgdGhlIGludmVyc2Ugb2YgY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5KCksXG4gKiBhbmQgaXMgYWxzbyBrbm93biBhcyB0aGUgbm9ybWFsIHF1YW50aWxlIGZ1bmN0aW9uLlxuICpcbiAqIEl0IHJldHVybnMgdGhlIG51bWJlciBvZiBzdGFuZGFyZCBkZXZpYXRpb25zIGZyb20gdGhlIG1lYW5cbiAqIHdoZXJlIHRoZSBwJ3RoIHF1YW50aWxlIG9mIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4gYSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICogU28sIGZvciBleGFtcGxlLCBwcm9iaXQoMC41ICsgMC42ODI3LzIpIOKJiCAxIGJlY2F1c2UgNjguMjclIG9mIHZhbHVlcyBhcmVcbiAqIG5vcm1hbGx5IGZvdW5kIHdpdGhpbiAxIHN0YW5kYXJkIGRldmlhdGlvbiBhYm92ZSBvciBiZWxvdyB0aGUgbWVhbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcFxuICogQHJldHVybnMge251bWJlcn0gcHJvYml0XG4gKi9cbmZ1bmN0aW9uIHByb2JpdChwIC8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgaWYgKHAgPT09IDApIHtcbiAgICAgICAgcCA9IGVwc2lsb247XG4gICAgfSBlbHNlIGlmIChwID49IDEpIHtcbiAgICAgICAgcCA9IDEgLSBlcHNpbG9uO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KDIpICogaW52ZXJzZUVycm9yRnVuY3Rpb24oMiAqIHAgLSAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvYml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Byb2JpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzaWduIGZyb20gJy4vc2lnbic7XG5cbi8qKlxuICogW0Jpc2VjdGlvbiBtZXRob2RdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpc2VjdGlvbl9tZXRob2QpIGlzIGEgcm9vdC1maW5kaW5nXG4gKiBtZXRob2QgdGhhdCByZXBlYXRlZGx5IGJpc2VjdHMgYW4gaW50ZXJ2YWwgdG8gZmluZCB0aGUgcm9vdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBudW1lcmljYWwgYXBwcm94aW1hdGlvbiB0byB0aGUgZXhhY3QgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBpbnB1dCBmdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gc3RhcnQgb2YgaW50ZXJ2YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBlbmQgb2YgaW50ZXJ2YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhJdGVyYXRpb25zIC0gdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvclRvbGVyYW5jZSAtIHRoZSBlcnJvciB0b2xlcmFuY2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGVzdGltYXRlZCByb290IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IEFyZ3VtZW50IGZ1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIGJpc2VjdChNYXRoLmNvcywwLDQsMTAwLDAuMDAzKTsgLy8gPT4gMS41NzIyNjU2MjVcbiAqL1xuZnVuY3Rpb24gYmlzZWN0KFxuICAgIGZ1bmMvKjogKHg6IGFueSkgPT4gbnVtYmVyICovLFxuICAgIHN0YXJ0Lyo6IG51bWJlciAqLyxcbiAgICBlbmQvKjogbnVtYmVyICovLFxuICAgIG1heEl0ZXJhdGlvbnMvKjogbnVtYmVyICovLFxuICAgIGVycm9yVG9sZXJhbmNlLyo6IG51bWJlciAqLykvKjpudW1iZXIqLyB7XG5cbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG5cbiAgICAgICAgaWYgKGZ1bmMob3V0cHV0KSA9PT0gMCB8fCBNYXRoLmFicygoZW5kIC0gc3RhcnQpIC8gMikgPCBlcnJvclRvbGVyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduKGZ1bmMob3V0cHV0KSkgPT09IHNpZ24oZnVuYyhzdGFydCkpKSB7XG4gICAgICAgICAgICBzdGFydCA9IG91dHB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBudW1iZXIgb2YgaXRlcmF0aW9ucyBleGNlZWRlZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaXNlY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvYmlzZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2hhcnQ7XG5cbnZhciBfc2ltcGxlU3RhdGlzdGljcyA9IHJlcXVpcmUoJ3NpbXBsZS1zdGF0aXN0aWNzJyk7XG5cbmZ1bmN0aW9uIGFkZENoYXJ0KGxheWVyLCBkYXRhKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHBvcHVsYXRpb24gPSBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkW2xheWVyLmNhdGVnb3JpZXMudG90YWxdO1xuICB9KTtcbiAgdmFyIGNsdXN0ZXJzID0gKDAsIF9zaW1wbGVTdGF0aXN0aWNzLmNrbWVhbnMpKHBvcHVsYXRpb24sIGxheWVyLmNhdGVnb3JpZXMuY2x1c3RlcnMpO1xuXG4gIC8vIGNyZWF0ZSBhIERPTSBlbGVtZW50IGZvciB0aGUgbWFya2VyXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGlzdHJpY3QpIHtcbiAgICB2YXIgdG90YWwgPSBkaXN0cmljdFtsYXllci5jYXRlZ29yaWVzLnRvdGFsXTtcbiAgICB2YXIgY2hhcnRBcnIgPSBbXTtcbiAgICB2YXIgY2hhcnRQcm9wID0gJyc7XG4gICAgdmFyIHByb3BUb3RhbCA9IDA7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHZvaWQgMDtcblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzLnRpdGxlKSB7XG4gICAgICBjaGFydFByb3AgKz0gJzxkaXY+PGI+JyArIGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMudGl0bGVdICsgJzwvYj48L2Rpdj4nO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzWyd0b3RhbC1sYWJlbCddKSB7XG4gICAgICBjaGFydFByb3AgKz0gJzxkaXY+JyArIGxheWVyLmNhdGVnb3JpZXNbJ3RvdGFsLWxhYmVsJ10gKyAnOiA8Yj4nICsgdG90YWwgKyAnPC9iPjwvZGl2Pic7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXllci5jYXRlZ29yaWVzLnByb3BlcnR5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjaGFydEFyci5wdXNoKHtcbiAgICAgICAgY29sb3I6IGxheWVyLmNhdGVnb3JpZXMuY29sb3JbaV0sXG4gICAgICAgIHk6IHBhcnNlSW50KGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDAsIDEwKSxcbiAgICAgICAgbGFiZWw6IGxheWVyLmNhdGVnb3JpZXMubGFiZWxbaV1cbiAgICAgIH0pO1xuICAgICAgcHJvcFRvdGFsICs9IHBhcnNlSW50KGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDAsIDEwKTtcbiAgICAgIGNoYXJ0UHJvcCArPSAnPGRpdj48c3BhbiBjbGFzcz1cInN3YXRjaFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJyArIGxheWVyLmNhdGVnb3JpZXMuY29sb3JbaV0gKyAnO1wiPjwvc3Bhbj5cXG4gICAgICAgICAgJyArIGxheWVyLmNhdGVnb3JpZXMubGFiZWxbaV0gKyAnOlxcbiAgICAgICAgICA8Yj4nICsgKGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDApLnRvRml4ZWQoMSkgKyAnJTwvYj48L2Rpdj4nO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2UpIHtcbiAgICAgIGNoYXJ0UHJvcCArPSAnPGRpdj48c3BhbiBjbGFzcz1cInN3YXRjaFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJyArIGxheWVyLmNhdGVnb3JpZXMuZGlmZmVyZW5jZVsxXSArICc7XCI+PC9zcGFuPlxcbiAgICAgICAgICAgICcgKyBsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2VbMF0gKyAnOiA8Yj4nICsgKDEwMCAtIHByb3BUb3RhbCkudG9GaXhlZCgxKSArICclPC9iPjwvZGl2Pic7XG4gICAgICBjaGFydEFyci5zcGxpY2UoMCwgMCwge1xuICAgICAgICBjb2xvcjogbGF5ZXIuY2F0ZWdvcmllcy5kaWZmZXJlbmNlWzFdLFxuICAgICAgICB5OiAxMDAgLSBwcm9wVG90YWwsXG4gICAgICAgIGxhYmVsOiBsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2VbMF1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBjbHVzdGVycy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIGlmIChjbHVzdGVyc1tfaV0uaW5jbHVkZXModG90YWwpKSB7XG4gICAgICAgIGRpbWVuc2lvbiA9IGxheWVyLmNhdGVnb3JpZXMuZGltZW5zaW9uW19pXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhcnREYXRhID0gW3tcbiAgICAgIGRhdGE6IGNoYXJ0QXJyLFxuICAgICAgc2l6ZTogbGF5ZXIuY2hhcnQuc2l6ZSxcbiAgICAgIGlubmVyU2l6ZTogbGF5ZXIuY2hhcnQuaW5uZXJTaXplXG4gICAgfV07XG5cbiAgICB2YXIgY29udGVudCA9ICc8ZGl2PjxiPicgKyBkaXN0cmljdFtsYXllci5zb3VyY2Uuam9pblsxXV0gKyAnPC9iPjwvZGl2PicgKyBjaGFydFByb3A7XG5cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pZCA9ICdjaGFydC0nICsgZGlzdHJpY3RbbGF5ZXIuc291cmNlLmpvaW5bMV1dICsgJy0nICsgbGF5ZXIuaWQgKyAnLScgKyBfdGhpcy5wcm9wcy5tYXBJZDtcbiAgICBlbC5jbGFzc05hbWUgPSAnbWFya2VyLWNoYXJ0IG1hcmtlci1jaGFydC0nICsgbGF5ZXIuaWQgKyAnLScgKyBfdGhpcy5wcm9wcy5tYXBJZDtcbiAgICBlbC5zdHlsZS53aWR0aCA9IGxheWVyLmNoYXJ0LndpZHRoO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IGxheWVyLmNoYXJ0LmhlaWdodDtcbiAgICAkKGVsKS5hdHRyKCdkYXRhLW1hcCcsIF90aGlzLnByb3BzLm1hcElkKTtcbiAgICAkKGVsKS5hdHRyKCdkYXRhLWxuZycsIGRpc3RyaWN0W2xheWVyLmNoYXJ0LmNvb3JkaW5hdGVzWzBdXSk7XG4gICAgJChlbCkuYXR0cignZGF0YS1sYXQnLCBkaXN0cmljdFtsYXllci5jaGFydC5jb29yZGluYXRlc1sxXV0pO1xuICAgICQoZWwpLmF0dHIoJ2RhdGEtcG9wdXAnLCBjb250ZW50KTtcblxuICAgIC8vIGFkZCBtYXJrZXIgdG8gbWFwXG4gICAgbmV3IG1hcGJveGdsLk1hcmtlcihlbCwge1xuICAgICAgb2Zmc2V0OiBsYXllci5jaGFydC5vZmZzZXRcbiAgICB9KS5zZXRMbmdMYXQoW2Rpc3RyaWN0W2xheWVyLmNoYXJ0LmNvb3JkaW5hdGVzWzBdXSwgZGlzdHJpY3RbbGF5ZXIuY2hhcnQuY29vcmRpbmF0ZXNbMV1dXSkuYWRkVG8oX3RoaXMubWFwKTtcblxuICAgIHZhciBjb250YWluZXIgPSAkKCcjY2hhcnQtJyArIGRpc3RyaWN0W2xheWVyLnNvdXJjZS5qb2luWzFdXSArICctJyArIGxheWVyLmlkICsgJy0nICsgX3RoaXMucHJvcHMubWFwSWQpWzBdO1xuICAgIE1hcC5kcmF3RG91Z2hudXRDaGFydChjb250YWluZXIsIGNoYXJ0RGF0YSwgZGltZW5zaW9uKTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZENoYXJ0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTGVnZW5kO1xuXG52YXIgX2Zvcm1hdE51bSA9IHJlcXVpcmUoJy4uL3V0aWxzL2Zvcm1hdE51bScpO1xuXG52YXIgX2Zvcm1hdE51bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtYXROdW0pO1xuXG52YXIgX2hleFRvUmdiQSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hleFRvUmdiQScpO1xuXG52YXIgX2hleFRvUmdiQTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXhUb1JnYkEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gYWRkTGVnZW5kKGxheWVyLCBzdG9wcywgZGF0YSwgYnJlYWtzLCBjb2xvcnMpIHtcbiAgLy8gdG9kbzogY2hhbmdlIGZvciBzcGxpdCBtYXBcbiAgdmFyIG1hcElkID0gJzAxJztcblxuICBpZiAoIWxheWVyLnZpc2libGUpIHtcbiAgICAvLyAkKGAjbGVnZW5kLSR7bGF5ZXJJZH0tJHttYXBJZH0gLnNldC1wcmltYXJ5LWxheWVyYCkub2ZmKCdjbGljaycsIHRoaXMuc2V0UHJpbWFyeUxheWVyKTtcbiAgICAkKCcjbGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkKS5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYmFja2dyb3VuZCA9ICcnO1xuICAgIC8vIGxlZ2VuZHMgZm9yIGNpcmNsZSBsYXllcnNcbiAgICBpZiAobGF5ZXIuY3JlZGl0ICYmIGxheWVyLnR5cGUgPT09ICdjaXJjbGUnICYmICFsYXllci5jYXRlZ29yaWVzLnNoYXBlKSB7XG4gICAgICAkKCcubGVnZW5kLicgKyBtYXBJZCkucHJlcGVuZCgnPGRpdiBpZD1cImxlZ2VuZC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCArICdcIlxcbiAgICAgICAgICBjbGFzcz1cImxlZ2VuZC1zaGFwZXMgbGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtc3ltYm9sc1wiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlLXNtXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOicgKyBsYXllci5jYXRlZ29yaWVzLmNvbG9yICsgJztcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGUtbWRcIiBzdHlsZT1cImJhY2tncm91bmQ6JyArIGxheWVyLmNhdGVnb3JpZXMuY29sb3IgKyAnO1wiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZS1sZ1wiIHN0eWxlPVwiYmFja2dyb3VuZDonICsgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvciArICc7XCI+PC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+JyArIGxheWVyLmNyZWRpdCArICc8L3NwYW4+XFxuICAgICAgICA8L2Rpdj4nKTtcblxuICAgICAgLy8gbGVnZW5kcyBmb3Igc3ltYm9sIGxheWVyc1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuY3JlZGl0ICYmIGxheWVyLmNhdGVnb3JpZXMuc2hhcGUgJiYgbGF5ZXIudHlwZSAhPT0gJ2NpcmNsZScpIHtcbiAgICAgIGxheWVyLmNhdGVnb3JpZXMuY29sb3IuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IsIGluZGV4KSB7XG4gICAgICAgIHZhciBzdHlsZSA9IGxheWVyLmNhdGVnb3JpZXMuc2hhcGVbaW5kZXhdID09PSAndHJpYW5nbGUtc3Ryb2tlZC0xMScgfHwgbGF5ZXIuY2F0ZWdvcmllcy5zaGFwZVtpbmRleF0gPT09ICd0cmlhbmdsZS0xNScgPyAnYm9yZGVyLWJvdHRvbS1jb2xvcjonIDogJ2JhY2tncm91bmQ6JztcblxuICAgICAgICBiYWNrZ3JvdW5kICs9ICc8bGkgY2xhc3M9XCJsYXllci1zeW1ib2xzXCI+IDxzcGFuIGNsYXNzPVwiJyArIGxheWVyLmNhdGVnb3JpZXMuc2hhcGVbaW5kZXhdICsgJ1wiIHN0eWxlPVwiJyArIHN0eWxlICsgY29sb3IgKyAnO1wiPjwvc3Bhbj4nICsgbGF5ZXIuY2F0ZWdvcmllcy5sYWJlbFtpbmRleF0gKyAnPC9saT4nO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtc2hhcGVzXCI+XFxuICAgICAgICAgICAgPHVsIHN0eWxlPVwibGVmdDogMDtcIj4nICsgYmFja2dyb3VuZCArICc8L3VsPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+JyArIGxheWVyLmNyZWRpdCArICc8L3NwYW4+XFxuICAgICAgICA8L2Rpdj4nKTtcblxuICAgICAgLy8gbGVnZW5kcyBmb3IgZmlsbCBsYXllcnMgd2l0aCBubyBicmVha3NcbiAgICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci5jYXRlZ29yaWVzLmJyZWFrcyA9PT0gJ25vJykge1xuICAgICAgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvci5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvciwgaW5kZXgpIHtcbiAgICAgICAgYmFja2dyb3VuZCArPSAnPGxpIHN0eWxlPVwiYmFja2dyb3VuZDonICsgY29sb3IgKyAnOyB3aWR0aDonICsgMTAwIC8gbGF5ZXIuY2F0ZWdvcmllcy5jb2xvci5sZW5ndGggKyAnJTtcIj4nICsgbGF5ZXIuY2F0ZWdvcmllcy5sYWJlbFtpbmRleF0gKyAnPC9saT4nO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtZmlsbCAnICsgKGxheWVyLmNhdGVnb3JpZXMgPyAnbGVnZW5kLWxhYmVsJyA6ICcnKSArICdcIj5cXG4gICAgICAgICAgICA8dWw+JyArIGJhY2tncm91bmQgKyAnPC91bD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxzcGFuPicgKyBsYXllci5jcmVkaXQgKyAnPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+Jyk7XG5cbiAgICAgIC8vIGxlZ2VuZHMgZm9yIGZpbGwgbGF5cnMgd2l0aCBicmVha3NcbiAgICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci50eXBlICE9PSAnY2lyY2xlJyAmJiBsYXllci50eXBlICE9PSAnY2hhcnQnKSB7XG4gICAgICB2YXIgZGF0YVZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1tsYXllci5wcm9wZXJ0eV07XG4gICAgICB9KTtcbiAgICAgIHZhciBjb2xvckxlZ2VuZCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChzdG9wcy5tYXAoZnVuY3Rpb24gKHN0b3ApIHtcbiAgICAgICAgcmV0dXJuIHN0b3BbMV07XG4gICAgICB9KSkpKTtcbiAgICAgIHZhciBsZWdlbmRTdWZmaXggPSBsYXllci5jYXRlZ29yaWVzLnN1ZmZpeCA/IGxheWVyLmNhdGVnb3JpZXMuc3VmZml4IDogJyc7XG5cbiAgICAgIGlmIChjb2xvckxlZ2VuZC5pbmNsdWRlcygndHJhbnNwYXJlbnQnKSAmJiAhY29sb3JzLmluY2x1ZGVzKCd0cmFuc3BhcmVudCcpKSB7XG4gICAgICAgIGNvbG9ycy5zcGxpY2UoMCwgMCwgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIGJyZWFrcy5zcGxpY2UoMSwgMCwgYnJlYWtzWzBdKTtcbiAgICAgIH1cblxuICAgICAgY29sb3JMZWdlbmQuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IsIGluZGV4KSB7XG4gICAgICAgIHZhciBmaXJzdFZhbCA9IGJyZWFrc1tpbmRleCAtIDFdICE9PSB1bmRlZmluZWQgPyBicmVha3NbaW5kZXggLSAxXSA6IDA7XG4gICAgICAgIHZhciBsYXN0VmFsID0gY29sb3IgPT09IGNvbG9yTGVnZW5kW2NvbG9yTGVnZW5kLmxlbmd0aCAtIDFdIHx8IGJyZWFrc1tpbmRleF0gPT09IHVuZGVmaW5lZCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShkYXRhVmFsdWVzKSkgOiBicmVha3NbaW5kZXhdO1xuICAgICAgICBiYWNrZ3JvdW5kICs9ICc8bGkgY2xhc3M9XCJiYWNrZ3JvdW5kLWJsb2NrLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiJyArICgnZGF0YS10b29sdGlwPVwiJyArICgwLCBfZm9ybWF0TnVtMi5kZWZhdWx0KShmaXJzdFZhbCwgMSkgKyAnLScgKyAoMCwgX2Zvcm1hdE51bTIuZGVmYXVsdCkobGFzdFZhbCwgMSkgKyBsZWdlbmRTdWZmaXggKyAnXCInKSArICgnc3R5bGU9XCJiYWNrZ3JvdW5kOicgKyAoMCwgX2hleFRvUmdiQTIuZGVmYXVsdCkoY29sb3IsIDAuOSkgKyAnOyB3aWR0aDonICsgMTAwIC8gY29sb3JMZWdlbmQubGVuZ3RoICsgJyU7XCI+PC9saSA+ICcpO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cImxlZ2VuZC1saW1pdFwiIHN0eWxlPVwicGFkZGluZzogMCUgMCUgMyUgMCU7XCI+IFxcbiAgICAgICAgICAgIDxsaSBpZD1cImZpcnN0LWxpbWl0LScgKyBsYXllci5pZCArICdcIiBjbGFzcz1cIicgKyBtYXBJZCArICdcIlxcbiAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGlubGluZTsgbGVmdDogMyU7XCI+XFxuICAgICAgICAgICAgICAnICsgMCArIGxlZ2VuZFN1ZmZpeCArICdcXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBpZD1cImxhc3QtbGltaXQtJyArIGxheWVyLmlkICsgJ1wiIGNsYXNzPVwiJyArIG1hcElkICsgJyBcXG4gICAgICAgICAgICAgIFwic3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGlubGluZTsgcmlnaHQ6IDMlO1wiPlxcbiAgICAgICAgICAgICAgJyArICgwLCBfZm9ybWF0TnVtMi5kZWZhdWx0KShNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoZGF0YVZhbHVlcykpLCAxKSArIGxlZ2VuZFN1ZmZpeCArICdcXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWZpbGxcIj5cXG4gICAgICAgICAgICA8dWwgaWQ9XCJsZWdlbmQtYmFja2dyb3VuZFwiPicgKyBiYWNrZ3JvdW5kICsgJzwvdWw+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj4nICsgbGF5ZXIuY3JlZGl0ICsgJzwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PicpO1xuXG4gICAgICAkKCcuYmFja2dyb3VuZC1ibG9jay0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCkuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjZmlyc3QtbGltaXQtJyArIGxheWVyLmlkICsgJy4nICsgbWFwSWQpLnRleHQoJCgnZmlyc3QtbGltaXQnKS50ZXh0KCkpO1xuICAgICAgICAkKCcjbGFzdC1saW1pdC0nICsgbGF5ZXIuaWQgKyAnLicgKyBtYXBJZCkudGV4dCgkKCdsYXN0LWxpbWl0JykudGV4dCgpKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZpcnN0LWxpbWl0LScgKyBsYXllci5pZCArICcuJyArIG1hcElkKS50ZXh0KDAgKyBsZWdlbmRTdWZmaXgpO1xuICAgICAgICAkKCcjbGFzdC1saW1pdC0nICsgbGF5ZXIuaWQgKyAnLicgKyBtYXBJZCkudGV4dCgoMCwgX2Zvcm1hdE51bTIuZGVmYXVsdCkoTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGRhdGFWYWx1ZXMpKSwgMSkgKyBsZWdlbmRTdWZmaXgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG5vIGxlZ2VuZFxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2V0LXByaW1hcnktbGF5ZXIucHJpbWFyeScpLnJlbW92ZUNsYXNzKCdwcmltYXJ5Jyk7XG4gICAgfVxuXG4gICAgLy8gJCgnLnNldC1wcmltYXJ5LWxheWVyLnByaW1hcnknKS5yZW1vdmVDbGFzcygncHJpbWFyeScpO1xuICAgIC8vICAgJChgI2xlZ2VuZC0ke2xheWVyLmlkfS0ke21hcElkfSAuc2V0LXByaW1hcnktbGF5ZXJgKVxuICAgIC8vICAgICAub24oJ2NsaWNrJywgdGhpcy5zZXRQcmltYXJ5TGF5ZXIpXG4gICAgLy8gICAgIC5hZGRDbGFzcygncHJpbWFyeScpO1xuXG4gICAgJCgnLmxlZ2VuZC1yb3cucHJpbWFyeScpLnJlbW92ZUNsYXNzKCdwcmltYXJ5Jyk7XG4gICAgJCgnI2xlZ2VuZC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCkuYWRkQ2xhc3MoJ3ByaW1hcnknKTtcbiAgICAvLyAub24oJ2NsaWNrJywgdGhpcy5zZXRQcmltYXJ5TGF5ZXIpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExlZ2VuZC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZvcm1hdE51bTtcbmZ1bmN0aW9uIGZvcm1hdE51bShudW0sIGRlY2ltYWwpIHtcbiAgdmFyIHggPSAoJycgKyBudW0pLmxlbmd0aDtcbiAgaWYgKE51bWJlci5pc0ludGVnZXIobnVtKSAmJiB4ID4gMykge1xuICAgIHZhciBwb3cgPSBNYXRoLnBvdygxMCwgZGVjaW1hbCk7XG4gICAgeCAtPSB4ICUgMztcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwb3cgLyBNYXRoLnBvdygxMCwgeCkpIC8gcG93ICsgJyBrTUdUUEUnW3ggLyAzXTtcbiAgfVxuICByZXR1cm4gbnVtO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2Zvcm1hdE51bS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTY0NjczOC9jb252ZXJ0LWhleC10by1yZ2JhXG52YXIgaGV4VG9SZ2JBID0gZnVuY3Rpb24gaGV4VG9SZ2JBKGhleCwgYWxwaGEpIHtcbiAgdmFyIGMgPSB2b2lkIDA7XG4gIHZhciBhID0gYWxwaGEgfHwgYWxwaGEgPT09IDAgPyBhbHBoYSA6IDE7XG4gIGlmICgvXiMoW0EtRmEtZjAtOV17M30pezEsMn0kLy50ZXN0KGhleCkpIHtcbiAgICBjID0gaGV4LnN1YnN0cmluZygxKS5zcGxpdCgnJyk7XG4gICAgaWYgKGMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjID0gW2NbMF0sIGNbMF0sIGNbMV0sIGNbMV0sIGNbMl0sIGNbMl1dO1xuICAgIH1cbiAgICBjID0gW1tjWzBdLCBjWzFdXS5qb2luKCcnKSwgW2NbMl0sIGNbM11dLmpvaW4oJycpLCBbY1s0XSwgY1s1XV0uam9pbignJyldO1xuICAgIHJldHVybiAncmdiYSgnICsgcGFyc2VJbnQoY1swXSwgMTYpICsgJywgJyArIHBhcnNlSW50KGNbMV0sIDE2KSArICcsICcgKyBwYXJzZUludChjWzJdLCAxNikgKyAnLCAnICsgYSArICcpJztcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBIZXgnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGhleFRvUmdiQTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy91dGlscy9oZXhUb1JnYkEuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRMYWJlbHM7XG5cbnZhciBfbXVzdGFjaGUgPSByZXF1aXJlKCdtdXN0YWNoZScpO1xuXG52YXIgX211c3RhY2hlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX211c3RhY2hlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gdG9kbzogY2hhbmdlIGZvciBzcGxpdCBtYXBcbnZhciBtYXBJZCA9ICcwMSc7XG5cbmZ1bmN0aW9uIHJlbW92ZUxhYmVscyhsYXllcikge1xuICB2YXIgY2xhc3NJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlci1sYWJlbC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCk7XG4gIHdoaWxlIChjbGFzc0l0ZW1zWzBdKSB7XG4gICAgY2xhc3NJdGVtc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsYXNzSXRlbXNbMF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExhYmVscyhtYXAsIGxheWVyLCBkYXRhKSB7XG4gIGlmIChsYXllci5sYWJlbHMgJiYgbGF5ZXIubGFiZWxzLmRhdGEgJiYgbGF5ZXIubGFiZWxzLmpvaW4pIHtcbiAgICB2YXIgbGFiZWxzID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSAnbWFya2VyLWxhYmVsIG1hcmtlci1sYWJlbC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZDtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gbGF5ZXIubGFiZWxzLndpZHRoO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbGF5ZXIubGFiZWxzLmhlaWdodDtcbiAgICAgIGVsLnN0eWxlWydmb250LXNpemUnXSA9ICcxMnB4JztcbiAgICAgIGVsLnN0eWxlWydmb250LXdlaWdodCddID0gJ25vcm1hbCc7XG4gICAgICAkKGVsKS5odG1sKF9tdXN0YWNoZTIuZGVmYXVsdC5yZW5kZXIobGF5ZXIubGFiZWxzLmxhYmVsLCByb3cpKTtcbiAgICAgIGxheWVyLmxhYmVscy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIGlmIChsYWJlbFtsYXllci5sYWJlbHMuam9pblswXV0gPT09IHJvd1tsYXllci5sYWJlbHMuam9pblsxXV0pIHtcbiAgICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBvZmZzZXQ6IGxheWVyLmxhYmVscy5vZmZzZXQsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW2xhYmVsW2xheWVyLmxhYmVscy5jb29yZGluYXRlc1swXV0sIGxhYmVsW2xheWVyLmxhYmVscy5jb29yZGluYXRlc1sxXV1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKG1hcC5nZXRab29tKCkgPiBsYXllci5sYWJlbHMubWluem9vbSkge1xuICAgICAgbGFiZWxzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKHJvdy5lbCwge1xuICAgICAgICAgIG9mZnNldDogcm93Lm9mZnNldFxuICAgICAgICB9KS5zZXRMbmdMYXQocm93LmNvb3JkaW5hdGVzKS5hZGRUbyhtYXApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsYXllci5sYWJlbHMubWF4em9vbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxheWVyLmxhYmVscy5tYXh6b29tID0gMjI7XG4gICAgfVxuICAgIG1hcC5vbignem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYXAuZ2V0Wm9vbSgpID4gbGF5ZXIubGFiZWxzLm1pbnpvb20gJiYgbWFwLmdldFpvb20oKSA8IGxheWVyLmxhYmVscy5tYXh6b29tICYmIG1hcC5nZXRMYXllcihsYXllci5pZCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVMYWJlbHMobGF5ZXIpO1xuXG4gICAgICAgIGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKHJvdy5lbCwge1xuICAgICAgICAgICAgb2Zmc2V0OiByb3cub2Zmc2V0XG4gICAgICAgICAgfSkuc2V0TG5nTGF0KHJvdy5jb29yZGluYXRlcykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVMYWJlbHMobGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExhYmVscy5qcyIsIi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKTsgLy8gc2NyaXB0LCB3c2gsIGFzcFxuICB9XG59KHRoaXMsIGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeSAobXVzdGFjaGUpIHtcblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgdmFyIHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICB2YXIgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpXG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcbiAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgIGlmICghb3BlblNlY3Rpb24pXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbilcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gICAqIHRvIGEgc2luZ2xlIHRva2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgc3F1YXNoZWRUb2tlbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgbGFzdFRva2VuO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gICAqIHRva2VucyB0aGF0IHJlcHJlc2VudCBhIHNlY3Rpb24gaGF2ZSB0d28gYWRkaXRpb25hbCBpdGVtczogMSkgYW4gYXJyYXkgb2ZcbiAgICogYWxsIHRva2VucyB0aGF0IGFwcGVhciBpbiB0aGF0IHNlY3Rpb24gYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWxcbiAgICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbmVzdFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICAgIHZhciBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG4gICAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBjb250ZXh0IGJ5IHdyYXBwaW5nIGEgdmlldyBvYmplY3QgYW5kXG4gICAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICovXG4gIGZ1bmN0aW9uIENvbnRleHQgKHZpZXcsIHBhcmVudENvbnRleHQpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuY2FjaGUgPSB7ICcuJzogdGhpcy52aWV3IH07XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCB1c2luZyB0aGUgZ2l2ZW4gdmlldyB3aXRoIHRoaXMgY29udGV4dFxuICAgKiBhcyB0aGUgcGFyZW50LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKHZpZXcpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICAgKiB1cCB0aGUgY29udGV4dCBoaWVyYXJjaHkgaWYgdGhlIHZhbHVlIGlzIGFic2VudCBpbiB0aGlzIGNvbnRleHQncyB2aWV3LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eSh2YWx1ZSwgbmFtZXNbaW5kZXhdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtuYW1lc1tpbmRleCsrXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xuICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9va3VwSGl0KVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBXcml0ZXIga25vd3MgaG93IHRvIHRha2UgYSBzdHJlYW0gb2YgdG9rZW5zIGFuZCByZW5kZXIgdGhlbSB0byBhXG4gICAqIHN0cmluZywgZ2l2ZW4gYSBjb250ZXh0LiBJdCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIHRlbXBsYXRlcyB0b1xuICAgKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAgICovXG4gIGZ1bmN0aW9uIFdyaXRlciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgYW5kIHJldHVybnMgdGhlIGFycmF5IG9mIHRva2Vuc1xuICAgKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgIHZhciB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV07XG5cbiAgICBpZiAodG9rZW5zID09IG51bGwpXG4gICAgICB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV0gPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZSh0ZW1wbGF0ZSk7XG4gICAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgYnVmZmVyID0gJyc7XG5cbiAgICB2YXIgdG9rZW4sIHN5bWJvbCwgdmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJyYnKSB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XG4gICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZCA9IGZ1bmN0aW9uIHJlbmRlckludmVydGVkICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLCBjb250ZXh0LCBwYXJ0aWFscywgdmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBtdXN0YWNoZS5uYW1lID0gJ211c3RhY2hlLmpzJztcbiAgbXVzdGFjaGUudmVyc2lvbiA9ICcyLjMuMCc7XG4gIG11c3RhY2hlLnRhZ3MgPSBbICd7eycsICd9fScgXTtcblxuICAvLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG4gIHZhciBkZWZhdWx0V3JpdGVyID0gbmV3IFdyaXRlcigpO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAgICogYXJyYXkgb2YgdG9rZW5zIGl0IGNvbnRhaW5zLiBEb2luZyB0aGlzIGFoZWFkIG9mIHRpbWUgYXZvaWRzIHRoZSBuZWVkIHRvXG4gICAqIHBhcnNlIHRlbXBsYXRlcyBvbiB0aGUgZmx5IGFzIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVzdGFjaGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGB0ZW1wbGF0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHZpZXdgIGFuZCBgcGFydGlhbHNgIHVzaW5nIHRoZVxuICAgKiBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAwLjQueC4sXG4gIC8qZXNsaW50LWRpc2FibGUgKi8gLy8gZXNsaW50IHdhbnRzIGNhbWVsIGNhc2VkIGZ1bmN0aW9uIG5hbWVcbiAgbXVzdGFjaGUudG9faHRtbCA9IGZ1bmN0aW9uIHRvX2h0bWwgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgc2VuZCkge1xuICAgIC8qZXNsaW50LWVuYWJsZSovXG5cbiAgICB2YXIgcmVzdWx0ID0gbXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZW5kKSkge1xuICAgICAgc2VuZChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9