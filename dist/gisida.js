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

var initStyles = exports.initStyles = function initStyles(styles) {
  return {
    type: 'INIT_STYLES',
    styles: styles
  };
};

var addLayer = exports.addLayer = function addLayer(layer) {
  return {
    type: 'ADD_LAYER',
    layer: layer
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
  addLayer: addLayer,
  toggleLayer: toggleLayer,
  requestData: requestData,
  receiveData: receiveData,
  mapLoaded: mapLoaded
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.styles.slice(0)));
    case 'CHANGE_STYLE':
      state.map(function (style) {
        // if (style.style===action.style)
      });
      return state;
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
  APP: APP, LAYERS: LAYERS, STYLES: STYLES, MAP: MAP
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
    store.dispatch((0, _Actions.initStyles)(config.STYLES));
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
  LAYERS: {},
  STYLES: [{
    label: 'Satelitte',
    style: 'mapbox: //styles/mapbox/satellite-v9'
  }, {
    label: 'Satelitte Streets',
    style: 'mapbox: //styles/mapbox/satellite-streets-v9'
  }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTRjNWI5Yzk4NGVjNDAwY2Q3MDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtX250aF9wb3dlcl9kZXZpYXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbnVtZXJpY19zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcXVhbnRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWFudGlsZV9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvcHJlcGFyZUxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N0YW5kYXJkX2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZV9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWlja3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2ludGVycXVhcnRpbGVfcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tZWRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zaHVmZmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2h1ZmZsZV9pbl9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3VuaXF1ZV9jb3VudF9zb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGVfY292YXJpYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmVfbWVhbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jaGlfc3F1YXJlZF9kaXN0cmlidXRpb25fdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zdGFuZGFyZF9ub3JtYWxfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9pbnZlcnNlX2Vycm9yX2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbml0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYWdncmVnYXRlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZmV0Y2hGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZExheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvc29ydExheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2J1aWxkVGltZXNlcmllc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC9nZW5lcmF0ZVN0b3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvcmJyZXdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2xpbmVhcl9yZWdyZXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbGluZWFyX3JlZ3Jlc3Npb25fbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Jfc3F1YXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL21vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tb2RlX2Zhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9taW5fc29ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWF4X3NvcnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N1bV9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX2Fic29sdXRlX2RldmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3dpdGhfcmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9ja21lYW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXF1YWxfaW50ZXJ2YWxfYnJlYWtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2NvcnJlbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX3NrZXduZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2t1cnRvc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVybXV0YXRpb25zX2hlYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jb21iaW5hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jb21iaW5hdGlvbnNfcmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9hZGRfdG9fbWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmVfdmFyaWFuY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZ2VvbWV0cmljX21lYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9oYXJtb25pY19tZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX3NvcnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3N1YnRyYWN0X2Zyb21fbWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Jvb3RfbWVhbl9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy90X3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy90X3Rlc3RfdHdvX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2JheWVzaWFuX2NsYXNzaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9wZXJjZXB0cm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZmFjdG9yaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvYmVybm91bGxpX2Rpc3RyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jpbm9taWFsX2Rpc3RyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3BvaXNzb25fZGlzdHJpYnV0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY2hpX3NxdWFyZWRfZ29vZG5lc3Nfb2ZfZml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMva2VybmVsX2RlbnNpdHlfZXN0aW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3pfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jdW11bGF0aXZlX3N0ZF9ub3JtYWxfcHJvYmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9lcnJvcl9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Byb2JpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jpc2VjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZENoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAvYWRkTGVnZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9mb3JtYXROdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hleFRvUmdiQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2FkZExhYmVscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFT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QUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0VBRXBELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFDM0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUMsQ0FBQyxDQUFDO0dBQ0osTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFDM0IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUQsQ0FBQyxDQUFDO0FBQ1AsR0FBRzs7QUFFSCxFQUFFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUUvQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUU7SUFDdkMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssWUFBWSxDQUFDO0dBQzVDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLGdDQUFnQywyQ0FBMkM7QUFDM0U7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOEJBQThCLGdCQUFnQixFQUFFO0FBQ2xGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNB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QUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ3BDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNyQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7T0FDRjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ3JGO0VBQ0QsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7QUNySlo7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7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QUFHLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDN0YsRUFBRSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNqRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDOztJQUVJLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7TUFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTtBQUNoQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FB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QUcsQ0FBQyxFQUFFO0lBQ3hDLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE9BQU8sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7R0FDOUc7RUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMsQzs7Ozs7OztBQ3BCZDs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7QUFFNUIsSUFBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxHQUFVLENBQUMsQ0FBQzs7QUFFcEMsSUFBSSxVQUFVLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRW5ELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFL0YsNkJBQTZCO0FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFO0VBQzNCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7RUFDM0YsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDcEIsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDckQ7QUFDSCxDQUFDOztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0VBQ25DLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUM5RCxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtNQUMxQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQ3ZDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO01BQ3JFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO01BQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDO01BQy9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUFDO01BQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUMvRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUU7UUFDekMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsRUFBRSxFQUFFLEVBQUU7WUFDTixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQzNCLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ3RGLENBQUMsQ0FBQztTQUNKO09BQ0YsQ0FBQyxDQUFDO0FBQ1QsS0FBSyxDQUFDLENBQUM7O0lBRUgsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7TUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtRQUM1QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtVQUMxQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07U0FDbkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQzFDLENBQUMsQ0FBQztBQUNULEtBQUs7O0lBRUQsSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtNQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDM0I7SUFDRCxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZO01BQ3pCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDaEksUUFBUSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRXBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUU7VUFDNUIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1dBQ25CLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7T0FDSixNQUFNO1FBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3JCO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7Ozs7Ozs7QUN0RUg7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsR0FBRztBQUNIO0FBQUE7QUFBQTtBQUFBLHFHQUFpQztBQUNqQyxHQUFHO0FBQ0g7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsdUJBQXVCLG9CQUFvQixLQUFLO0FBQ2hELHlCQUF5Qjs7QUFFekI7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsaUJBQWlCO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxQkFBcUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0M7QUFDL0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsZUFBZTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6Imdpc2lkYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNGM1YjljOTg0ZWM0MDBjZDcwMSIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzdW0gZnJvbSAnLi9zdW0nO1xuXG4vKipcbiAqIFRoZSBtZWFuLCBfYWxzbyBrbm93biBhcyBhdmVyYWdlXyxcbiAqIGlzIHRoZSBzdW0gb2YgYWxsIHZhbHVlcyBvdmVyIHRoZSBudW1iZXIgb2YgdmFsdWVzLlxuICogVGhpcyBpcyBhIFttZWFzdXJlIG9mIGNlbnRyYWwgdGVuZGVuY3ldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyYWxfdGVuZGVuY3kpOlxuICogYSBtZXRob2Qgb2YgZmluZGluZyBhIHR5cGljYWwgb3IgY2VudHJhbCB2YWx1ZSBvZiBhIHNldCBvZiBudW1iZXJzLlxuICpcbiAqIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSB0aGUgbGVuZ3RoIG9mIHggaXMgbGVzcyB0aGFuIG9uZVxuICogQHJldHVybnMge251bWJlcn0gbWVhblxuICogQGV4YW1wbGVcbiAqIG1lYW4oWzAsIDEwXSk7IC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gbWVhbih4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOiBudW1iZXIgKi8ge1xuICAgIC8vIFRoZSBtZWFuIG9mIG5vIG51bWJlcnMgaXMgbnVsbFxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21lYW4gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGRhdGEgcG9pbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtKHgpIC8geC5sZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVhbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFdlIHVzZSBgzrVgLCBlcHNpbG9uLCBhcyBhIHN0b3BwaW5nIGNyaXRlcmlvbiB3aGVuIHdlIHdhbnQgdG8gaXRlcmF0ZVxuICogdW50aWwgd2UncmUgXCJjbG9zZSBlbm91Z2hcIi4gRXBzaWxvbiBpcyBhIHZlcnkgc21hbGwgbnVtYmVyOiBmb3JcbiAqIHNpbXBsZSBzdGF0aXN0aWNzLCB0aGF0IG51bWJlciBpcyAqKjAuMDAwMSoqXG4gKlxuICogVGhpcyBpcyB1c2VkIGluIGNhbGN1bGF0aW9ucyBsaWtlIHRoZSBiaW5vbWlhbERpc3RyaWJ1dGlvbiwgaW4gd2hpY2hcbiAqIHRoZSBwcm9jZXNzIG9mIGZpbmRpbmcgYSB2YWx1ZSBpcyBbaXRlcmF0aXZlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JdGVyYXRpdmVfbWV0aG9kKTpcbiAqIGl0IHByb2dyZXNzZXMgdW50aWwgaXQgaXMgY2xvc2UgZW5vdWdoLlxuICpcbiAqIEJlbG93IGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgZXBzaWxvbiBpbiBbZ3JhZGllbnQgZGVzY2VudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JhZGllbnRfZGVzY2VudCksXG4gKiB3aGVyZSB3ZSdyZSB0cnlpbmcgdG8gZmluZCBhIGxvY2FsIG1pbmltdW0gb2YgYSBmdW5jdGlvbidzIGRlcml2YXRpdmUsXG4gKiBnaXZlbiBieSB0aGUgYGZEZXJpdmF0aXZlYCBtZXRob2QuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZyb20gY2FsY3VsYXRpb24sIHdlIGV4cGVjdCB0aGF0IHRoZSBsb2NhbCBtaW5pbXVtIG9jY3VycyBhdCB4PTkvNFxuICogdmFyIHhfb2xkID0gMDtcbiAqIC8vIFRoZSBhbGdvcml0aG0gc3RhcnRzIGF0IHg9NlxuICogdmFyIHhfbmV3ID0gNjtcbiAqIHZhciBzdGVwU2l6ZSA9IDAuMDE7XG4gKlxuICogZnVuY3Rpb24gZkRlcml2YXRpdmUoeCkge1xuICogICByZXR1cm4gNCAqIE1hdGgucG93KHgsIDMpIC0gOSAqIE1hdGgucG93KHgsIDIpO1xuICogfVxuICpcbiAqIC8vIFRoZSBsb29wIHJ1bnMgdW50aWwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcHJldmlvdXNcbiAqIC8vIHZhbHVlIGFuZCB0aGUgY3VycmVudCB2YWx1ZSBpcyBzbWFsbGVyIHRoYW4gZXBzaWxvbiAtIGEgcm91Z2hcbiAqIC8vIG1lYXVyZSBvZiAnY2xvc2UgZW5vdWdoJ1xuICogd2hpbGUgKE1hdGguYWJzKHhfbmV3IC0geF9vbGQpID4gc3MuZXBzaWxvbikge1xuICogICB4X29sZCA9IHhfbmV3O1xuICogICB4X25ldyA9IHhfb2xkIC0gc3RlcFNpemUgKiBmRGVyaXZhdGl2ZSh4X29sZCk7XG4gKiB9XG4gKlxuICogY29uc29sZS5sb2coJ0xvY2FsIG1pbmltdW0gb2NjdXJzIGF0JywgeF9uZXcpO1xuICovXG52YXIgZXBzaWxvbiA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZXBzaWxvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9lcHNpbG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBpbml0QXBwID0gZXhwb3J0cy5pbml0QXBwID0gZnVuY3Rpb24gaW5pdEFwcChjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5JVF9BUFAnLFxuICAgIGNvbmZpZzogY29uZmlnXG4gIH07XG59O1xuXG52YXIgaW5pdFN0eWxlcyA9IGV4cG9ydHMuaW5pdFN0eWxlcyA9IGZ1bmN0aW9uIGluaXRTdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOSVRfU1RZTEVTJyxcbiAgICBzdHlsZXM6IHN0eWxlc1xuICB9O1xufTtcblxudmFyIGFkZExheWVyID0gZXhwb3J0cy5hZGRMYXllciA9IGZ1bmN0aW9uIGFkZExheWVyKGxheWVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0FERF9MQVlFUicsXG4gICAgbGF5ZXI6IGxheWVyXG4gIH07XG59O1xuXG52YXIgdG9nZ2xlTGF5ZXIgPSBleHBvcnRzLnRvZ2dsZUxheWVyID0gZnVuY3Rpb24gdG9nZ2xlTGF5ZXIobGF5ZXJJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdUT0dHTEVfTEFZRVInLFxuICAgIGxheWVySWQ6IGxheWVySWRcbiAgfTtcbn07XG5cbnZhciByZXF1ZXN0RGF0YSA9IGV4cG9ydHMucmVxdWVzdERhdGEgPSBmdW5jdGlvbiByZXF1ZXN0RGF0YShsYXllcklkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFUVVFU1RfREFUQScsXG4gICAgbGF5ZXJJZDogbGF5ZXJJZFxuICB9O1xufTtcblxudmFyIHJlY2VpdmVEYXRhID0gZXhwb3J0cy5yZWNlaXZlRGF0YSA9IGZ1bmN0aW9uIHJlY2VpdmVEYXRhKGxheWVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFQ0VJVkVfREFUQScsXG4gICAgbGF5ZXI6IGxheWVyXG4gIH07XG59O1xuXG52YXIgbWFwTG9hZGVkID0gZXhwb3J0cy5tYXBMb2FkZWQgPSBmdW5jdGlvbiBtYXBMb2FkZWQoaXNMb2FkZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSVNfTE9BREVEJyxcbiAgICBpc0xvYWRlZDogaXNMb2FkZWRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgaW5pdEFwcDogaW5pdEFwcCxcbiAgaW5pdFN0eWxlczogaW5pdFN0eWxlcyxcbiAgYWRkTGF5ZXI6IGFkZExheWVyLFxuICB0b2dnbGVMYXllcjogdG9nZ2xlTGF5ZXIsXG4gIHJlcXVlc3REYXRhOiByZXF1ZXN0RGF0YSxcbiAgcmVjZWl2ZURhdGE6IHJlY2VpdmVEYXRhLFxuICBtYXBMb2FkZWQ6IG1hcExvYWRlZFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9zdG9yZS9hY3Rpb25zL0FjdGlvbnMuanMiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgbWVhbiBmcm9tICcuL21lYW4nO1xuXG4vKipcbiAqIFRoZSBzdW0gb2YgZGV2aWF0aW9ucyB0byB0aGUgTnRoIHBvd2VyLlxuICogV2hlbiBuPTIgaXQncyB0aGUgc3VtIG9mIHNxdWFyZWQgZGV2aWF0aW9ucy5cbiAqIFdoZW4gbj0zIGl0J3MgdGhlIHN1bSBvZiBjdWJlZCBkZXZpYXRpb25zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geFxuICogQHBhcmFtIHtudW1iZXJ9IG4gcG93ZXJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHN1bSBvZiBudGggcG93ZXIgZGV2aWF0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgaW5wdXQgPSBbMSwgMiwgM107XG4gKiAvLyBzaW5jZSB0aGUgdmFyaWFuY2Ugb2YgYSBzZXQgaXMgdGhlIG1lYW4gc3F1YXJlZFxuICogLy8gZGV2aWF0aW9ucywgd2UgY2FuIGNhbGN1bGF0ZSB0aGF0IHdpdGggc3VtTnRoUG93ZXJEZXZpYXRpb25zOlxuICogc3VtTnRoUG93ZXJEZXZpYXRpb25zKGlucHV0LCAyKSAvIGlucHV0Lmxlbmd0aDtcbiAqL1xuZnVuY3Rpb24gc3VtTnRoUG93ZXJEZXZpYXRpb25zKHgvKjogQXJyYXk8bnVtYmVyPiAqLywgbi8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgdmFyIG1lYW5WYWx1ZSA9IG1lYW4oeCksXG4gICAgICAgIHN1bSA9IDAsXG4gICAgICAgIHRlbXBWYWx1ZSxcbiAgICAgICAgaTtcblxuICAgIC8vIFRoaXMgaXMgYW4gb3B0aW1pemF0aW9uOiB3aGVuIG4gaXMgMiAod2UncmUgY29tcHV0aW5nIGEgbnVtYmVyIHNxdWFyZWQpLFxuICAgIC8vIG11bHRpcGx5aW5nIHRoZSBudW1iZXIgYnkgaXRzZWxmIGlzIHNpZ25pZmljYW50bHkgZmFzdGVyIHRoYW4gdXNpbmdcbiAgICAvLyB0aGUgTWF0aC5wb3cgbWV0aG9kLlxuICAgIGlmIChuID09PSAyKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wVmFsdWUgPSB4W2ldIC0gbWVhblZhbHVlO1xuICAgICAgICAgICAgc3VtICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gTWF0aC5wb3coeFtpXSAtIG1lYW5WYWx1ZSwgbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdW1OdGhQb3dlckRldmlhdGlvbnM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtX250aF9wb3dlcl9kZXZpYXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogU29ydCBhbiBhcnJheSBvZiBudW1iZXJzIGJ5IHRoZWlyIG51bWVyaWMgdmFsdWUsIGVuc3VyaW5nIHRoYXQgdGhlXG4gKiBhcnJheSBpcyBub3QgY2hhbmdlZCBpbiBwbGFjZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIC5zb3J0XG4gKiBpbiBKYXZhU2NyaXB0IGlzIHRvIHNvcnQgYXJyYXlzIGFzIHN0cmluZyB2YWx1ZXNcbiAqXG4gKiAgICAgWzEsIDEwLCAxMiwgMTAyLCAyMF0uc29ydCgpXG4gKiAgICAgLy8gb3V0cHV0XG4gKiAgICAgWzEsIDEwLCAxMDIsIDEyLCAyMF1cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXQgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IHNvcnRlZCBhcnJheVxuICogQHByaXZhdGVcbiAqIEBleGFtcGxlXG4gKiBudW1lcmljU29ydChbMywgMiwgMV0pIC8vID0+IFsxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBudW1lcmljU29ydCh4IC8qOiBBcnJheTxudW1iZXI+ICovKSAvKjogQXJyYXk8bnVtYmVyPiAqLyB7XG4gICAgcmV0dXJuIHhcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBhcnJheSBpcyBub3QgY2hhbmdlZCBpbi1wbGFjZVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAvLyBjb21wYXJhdG9yIGZ1bmN0aW9uIHRoYXQgdHJlYXRzIGlucHV0IGFzIG51bWVyaWNcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtZXJpY1NvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbnVtZXJpY19zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBxdWFudGlsZVNvcnRlZCBmcm9tICcuL3F1YW50aWxlX3NvcnRlZCc7XG5pbXBvcnQgcXVpY2tzZWxlY3QgZnJvbSAnLi9xdWlja3NlbGVjdCc7XG5cbi8qKlxuICogVGhlIFtxdWFudGlsZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUXVhbnRpbGUpOlxuICogdGhpcyBpcyBhIHBvcHVsYXRpb24gcXVhbnRpbGUsIHNpbmNlIHdlIGFzc3VtZSB0byBrbm93IHRoZSBlbnRpcmVcbiAqIGRhdGFzZXQgaW4gdGhpcyBsaWJyYXJ5LiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZVxuICogW1F1YW50aWxlcyBvZiBhIFBvcHVsYXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUXVhbnRpbGUjUXVhbnRpbGVzX29mX2FfcG9wdWxhdGlvbilcbiAqIGFsZ29yaXRobSBmcm9tIHdpa2lwZWRpYS5cbiAqXG4gKiBTYW1wbGUgaXMgYSBvbmUtZGltZW5zaW9uYWwgYXJyYXkgb2YgbnVtYmVycyxcbiAqIGFuZCBwIGlzIGVpdGhlciBhIGRlY2ltYWwgbnVtYmVyIGZyb20gMCB0byAxIG9yIGFuIGFycmF5IG9mIGRlY2ltYWxcbiAqIG51bWJlcnMgZnJvbSAwIHRvIDEuXG4gKiBJbiB0ZXJtcyBvZiBhIGsvcSBxdWFudGlsZSwgcCA9IGsvcSAtIGl0J3MganVzdCBkZWFsaW5nIHdpdGggZnJhY3Rpb25zIG9yIGRlYWxpbmdcbiAqIHdpdGggZGVjaW1hbCB2YWx1ZXMuXG4gKiBXaGVuIHAgaXMgYW4gYXJyYXksIHRoZSByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGlzIGFsc28gYW4gYXJyYXkgY29udGFpbmluZyB0aGUgYXBwcm9wcmlhdGVcbiAqIHF1YW50aWxlcyBpbiBpbnB1dCBvcmRlclxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgbnVtYmVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+IHwgbnVtYmVyfSBwIHRoZSBkZXNpcmVkIHF1YW50aWxlLCBhcyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDFcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHF1YW50aWxlXG4gKiBAZXhhbXBsZVxuICogcXVhbnRpbGUoWzMsIDYsIDcsIDgsIDgsIDksIDEwLCAxMywgMTUsIDE2LCAyMF0sIDAuNSk7IC8vID0+IDlcbiAqL1xuZnVuY3Rpb24gcXVhbnRpbGUoeC8qOiBBcnJheTxudW1iZXI+ICovLCBwLyo6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgKi8pLyo6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgKi8ge1xuICAgIHZhciBjb3B5ID0geC5zbGljZSgpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgLy8gcmVhcnJhbmdlIGVsZW1lbnRzIHNvIHRoYXQgZWFjaCBlbGVtZW50IGNvcnJlc3BvbmRpbmcgdG8gYSByZXF1ZXN0ZWRcbiAgICAgICAgLy8gcXVhbnRpbGUgaXMgb24gYSBwbGFjZSBpdCB3b3VsZCBiZSBpZiB0aGUgYXJyYXkgd2FzIGZ1bGx5IHNvcnRlZFxuICAgICAgICBtdWx0aVF1YW50aWxlU2VsZWN0KGNvcHksIHApO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSByZXN1bHQgYXJyYXlcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgLy8gRm9yIGVhY2ggcmVxdWVzdGVkIHF1YW50aWxlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHF1YW50aWxlU29ydGVkKGNvcHksIHBbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpZHggPSBxdWFudGlsZUluZGV4KGNvcHkubGVuZ3RoLCBwKTtcbiAgICAgICAgcXVhbnRpbGVTZWxlY3QoY29weSwgaWR4LCAwLCBjb3B5Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gcXVhbnRpbGVTb3J0ZWQoY29weSwgcCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBxdWFudGlsZVNlbGVjdChhcnIsIGssIGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGsgJSAxID09PSAwKSB7XG4gICAgICAgIHF1aWNrc2VsZWN0KGFyciwgaywgbGVmdCwgcmlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGsgPSBNYXRoLmZsb29yKGspO1xuICAgICAgICBxdWlja3NlbGVjdChhcnIsIGssIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgcXVpY2tzZWxlY3QoYXJyLCBrICsgMSwgayArIDEsIHJpZ2h0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG11bHRpUXVhbnRpbGVTZWxlY3QoYXJyLCBwKSB7XG4gICAgdmFyIGluZGljZXMgPSBbMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluZGljZXMucHVzaChxdWFudGlsZUluZGV4KGFyci5sZW5ndGgsIHBbaV0pKTtcbiAgICB9XG4gICAgaW5kaWNlcy5wdXNoKGFyci5sZW5ndGggLSAxKTtcbiAgICBpbmRpY2VzLnNvcnQoY29tcGFyZSk7XG5cbiAgICB2YXIgc3RhY2sgPSBbMCwgaW5kaWNlcy5sZW5ndGggLSAxXTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHIgPSBNYXRoLmNlaWwoc3RhY2sucG9wKCkpO1xuICAgICAgICB2YXIgbCA9IE1hdGguZmxvb3Ioc3RhY2sucG9wKCkpO1xuICAgICAgICBpZiAociAtIGwgPD0gMSkgY29udGludWU7XG5cbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChsICsgcikgLyAyKTtcbiAgICAgICAgcXVhbnRpbGVTZWxlY3QoYXJyLCBpbmRpY2VzW21dLCBpbmRpY2VzW2xdLCBpbmRpY2VzW3JdKTtcblxuICAgICAgICBzdGFjay5wdXNoKGwsIG0sIG0sIHIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xufVxuXG5mdW5jdGlvbiBxdWFudGlsZUluZGV4KGxlbiAvKjogbnVtYmVyICovLCBwIC8qOiBudW1iZXIgKi8pLyo6bnVtYmVyKi8ge1xuICAgIHZhciBpZHggPSBsZW4gKiBwO1xuICAgIGlmIChwID09PSAxKSB7XG4gICAgICAgIC8vIElmIHAgaXMgMSwgZGlyZWN0bHkgcmV0dXJuIHRoZSBsYXN0IGluZGV4XG4gICAgICAgIHJldHVybiBsZW4gLSAxO1xuICAgIH0gZWxzZSBpZiAocCA9PT0gMCkge1xuICAgICAgICAvLyBJZiBwIGlzIDAsIGRpcmVjdGx5IHJldHVybiB0aGUgZmlyc3QgaW5kZXhcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChpZHggJSAxICE9PSAwKSB7XG4gICAgICAgIC8vIElmIGluZGV4IGlzIG5vdCBpbnRlZ2VyLCByZXR1cm4gdGhlIG5leHQgaW5kZXggaW4gYXJyYXlcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpZHgpIC0gMTtcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDIgPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlIGxpc3QgaGFzIGV2ZW4tbGVuZ3RoLCB3ZSdsbCByZXR1cm4gdGhlIG1pZGRsZSBvZiB0d28gaW5kaWNlc1xuICAgICAgICAvLyBhcm91bmQgcXVhbnRpbGUgdG8gaW5kaWNhdGUgdGhhdCB3ZSBuZWVkIGFuIGF2ZXJhZ2UgdmFsdWUgb2YgdGhlIHR3b1xuICAgICAgICByZXR1cm4gaWR4IC0gMC41O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpbmFsbHksIGluIHRoZSBzaW1wbGUgY2FzZSBvZiBhbiBpbnRlZ2VyIGluZGV4XG4gICAgICAgIC8vIHdpdGggYW4gb2RkLWxlbmd0aCBsaXN0LCByZXR1cm4gdGhlIGluZGV4XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWFudGlsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWFudGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIHF1YW50aWxlczogd2hlbiB5b3Uga25vd1xuICogdGhhdCB0aGUgb3JkZXIgaXMgc29ydGVkLCB5b3UgZG9uJ3QgbmVlZCB0byByZS1zb3J0IGl0LCBhbmQgdGhlIGNvbXB1dGF0aW9uc1xuICogYXJlIGZhc3Rlci5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggc2FtcGxlIG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gcCBkZXNpcmVkIHF1YW50aWxlOiBhIG51bWJlciBiZXR3ZWVuIDAgdG8gMSwgaW5jbHVzaXZlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBxdWFudGlsZSB2YWx1ZVxuICogQHRocm93cyB7RXJyb3J9IGlmIHAgaXggb3V0c2lkZSBvZiB0aGUgcmFuZ2UgZnJvbSAwIHRvIDFcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogcXVhbnRpbGVTb3J0ZWQoWzMsIDYsIDcsIDgsIDgsIDksIDEwLCAxMywgMTUsIDE2LCAyMF0sIDAuNSk7IC8vID0+IDlcbiAqL1xuZnVuY3Rpb24gcXVhbnRpbGVTb3J0ZWQoeCAvKjogQXJyYXk8bnVtYmVyPiAqLywgcCAvKjogbnVtYmVyICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHZhciBpZHggPSB4Lmxlbmd0aCAqIHA7XG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncXVhbnRpbGUgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGRhdGEgcG9pbnQuJyk7XG4gICAgfSBlbHNlIGlmIChwIDwgMCB8fCBwID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3F1YW50aWxlcyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMScpO1xuICAgIH0gZWxzZSBpZiAocCA9PT0gMSkge1xuICAgICAgICAvLyBJZiBwIGlzIDEsIGRpcmVjdGx5IHJldHVybiB0aGUgbGFzdCBlbGVtZW50XG4gICAgICAgIHJldHVybiB4W3gubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIGlmIChwID09PSAwKSB7XG4gICAgICAgIC8vIElmIHAgaXMgMCwgZGlyZWN0bHkgcmV0dXJuIHRoZSBmaXJzdCBlbGVtZW50XG4gICAgICAgIHJldHVybiB4WzBdO1xuICAgIH0gZWxzZSBpZiAoaWR4ICUgMSAhPT0gMCkge1xuICAgICAgICAvLyBJZiBwIGlzIG5vdCBpbnRlZ2VyLCByZXR1cm4gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheVxuICAgICAgICByZXR1cm4geFtNYXRoLmNlaWwoaWR4KSAtIDFdO1xuICAgIH0gZWxzZSBpZiAoeC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZSBsaXN0IGhhcyBldmVuLWxlbmd0aCwgd2UnbGwgdGFrZSB0aGUgYXZlcmFnZSBvZiB0aGlzIG51bWJlclxuICAgICAgICAvLyBhbmQgdGhlIG5leHQgdmFsdWUsIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICByZXR1cm4gKHhbaWR4IC0gMV0gKyB4W2lkeF0pIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaW5hbGx5LCBpbiB0aGUgc2ltcGxlIGNhc2Ugb2YgYW4gaW50ZWdlciB2YWx1ZVxuICAgICAgICAvLyB3aXRoIGFuIG9kZC1sZW5ndGggbGlzdCwgcmV0dXJuIHRoZSB4IHZhbHVlIGF0IHRoZSBpbmRleC5cbiAgICAgICAgcmV0dXJuIHhbaWR4XTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1YW50aWxlU29ydGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3F1YW50aWxlX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2FtcGxlVmFyaWFuY2UgZnJvbSAnLi9zYW1wbGVfdmFyaWFuY2UnO1xuXG4vKipcbiAqIFRoZSBbc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdGFuZGFyZF9kZXZpYXRpb24jU2FtcGxlX3N0YW5kYXJkX2RldmlhdGlvbilcbiAqIGlzIHRoZSBzcXVhcmUgcm9vdCBvZiB0aGUgc2FtcGxlIHZhcmlhbmNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dCBhcnJheVxuICogQHJldHVybnMge251bWJlcn0gc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQGV4YW1wbGVcbiAqIHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9uKFsyLCA0LCA0LCA0LCA1LCA1LCA3LCA5XSkudG9GaXhlZCgyKTtcbiAqIC8vID0+ICcyLjE0J1xuICovXG5mdW5jdGlvbiBzYW1wbGVTdGFuZGFyZERldmlhdGlvbih4Lyo6QXJyYXk8bnVtYmVyPiovKS8qOm51bWJlciovIHtcbiAgICAvLyBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIG5vIG51bWJlcnMgaXMgbnVsbFxuICAgIHZhciBzYW1wbGVWYXJpYW5jZVggPSBzYW1wbGVWYXJpYW5jZSh4KTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHNhbXBsZVZhcmlhbmNlWCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV9zdGFuZGFyZF9kZXZpYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHN1bU50aFBvd2VyRGV2aWF0aW9ucyBmcm9tICcuL3N1bV9udGhfcG93ZXJfZGV2aWF0aW9ucyc7XG5cbi8qKlxuICogVGhlIFtzYW1wbGUgdmFyaWFuY2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1ZhcmlhbmNlI1NhbXBsZV92YXJpYW5jZSlcbiAqIGlzIHRoZSBzdW0gb2Ygc3F1YXJlZCBkZXZpYXRpb25zIGZyb20gdGhlIG1lYW4uIFRoZSBzYW1wbGUgdmFyaWFuY2VcbiAqIGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSB0aGUgdmFyaWFuY2UgYnkgdGhlIHVzYWdlIG9mIFtCZXNzZWwncyBDb3JyZWN0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CZXNzZWwnc19jb3JyZWN0aW9uKTpcbiAqIGluc3RlYWQgb2YgZGl2aWRpbmcgdGhlIHN1bSBvZiBzcXVhcmVkIGRldmlhdGlvbnMgYnkgdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQsXG4gKiBpdCBpcyBkaXZpZGVkIGJ5IHRoZSBsZW5ndGggbWludXMgb25lLiBUaGlzIGNvcnJlY3RzIHRoZSBiaWFzIGluIGVzdGltYXRpbmdcbiAqIGEgdmFsdWUgZnJvbSBhIHNldCB0aGF0IHlvdSBkb24ndCBrbm93IGlmIGZ1bGwuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICogW1dvbGZyYW0gTWF0aFdvcmxkIG9uIFNhbXBsZSBWYXJpYW5jZV0oaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9TYW1wbGVWYXJpYW5jZS5odG1sKVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBhIHNhbXBsZSBvZiB0d28gb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSBsZW5ndGggb2YgeCBpcyBsZXNzIHRoYW4gMlxuICogQHJldHVybiB7bnVtYmVyfSBzYW1wbGUgdmFyaWFuY2VcbiAqIEBleGFtcGxlXG4gKiBzYW1wbGVWYXJpYW5jZShbMSwgMiwgMywgNCwgNV0pOyAvLyA9PiAyLjVcbiAqL1xuZnVuY3Rpb24gc2FtcGxlVmFyaWFuY2UoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG4gICAgLy8gVGhlIHZhcmlhbmNlIG9mIG5vIG51bWJlcnMgaXMgbnVsbFxuICAgIGlmICh4Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYW1wbGVWYXJpYW5jZSByZXF1aXJlcyBhdCBsZWFzdCB0d28gZGF0YSBwb2ludHMnKTtcbiAgICB9XG5cbiAgICB2YXIgc3VtU3F1YXJlZERldmlhdGlvbnNWYWx1ZSA9IHN1bU50aFBvd2VyRGV2aWF0aW9ucyh4LCAyKTtcblxuICAgIC8vIHRoaXMgaXMgQmVzc2VscycgQ29ycmVjdGlvbjogYW4gYWRqdXN0bWVudCBtYWRlIHRvIHNhbXBsZSBzdGF0aXN0aWNzXG4gICAgLy8gdGhhdCBhbGxvd3MgZm9yIHRoZSByZWR1Y2VkIGRlZ3JlZSBvZiBmcmVlZG9tIGVudGFpbGVkIGluIGNhbGN1bGF0aW5nXG4gICAgLy8gdmFsdWVzIGZyb20gc2FtcGxlcyByYXRoZXIgdGhhbiBjb21wbGV0ZSBwb3B1bGF0aW9ucy5cbiAgICB2YXIgYmVzc2Vsc0NvcnJlY3Rpb24gPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICAvLyBGaW5kIHRoZSBtZWFuIHZhbHVlIG9mIHRoYXQgbGlzdFxuICAgIHJldHVybiBzdW1TcXVhcmVkRGV2aWF0aW9uc1ZhbHVlIC8gYmVzc2Vsc0NvcnJlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZVZhcmlhbmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV92YXJpYW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZGVmYXVsdFN0YXRlID0gcmVxdWlyZSgnLi4vZGVmYXVsdFN0YXRlJyk7XG5cbnZhciBfZGVmYXVsdFN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRTdGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBBUFAoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX2RlZmF1bHRTdGF0ZTIuZGVmYXVsdC5BUFA7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOSVRfQVBQJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGFjdGlvbi5jb25maWcpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gU1RZTEVTKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF9kZWZhdWx0U3RhdGUyLmRlZmF1bHQuU1RZTEVTO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJTklUX1NUWUxFUyc6XG4gICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZSksIF90b0NvbnN1bWFibGVBcnJheShhY3Rpb24uc3R5bGVzLnNsaWNlKDApKSk7XG4gICAgY2FzZSAnQ0hBTkdFX1NUWUxFJzpcbiAgICAgIHN0YXRlLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgLy8gaWYgKHN0eWxlLnN0eWxlPT09YWN0aW9uLnN0eWxlKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBMQVlFUlMoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX2RlZmF1bHRTdGF0ZTIuZGVmYXVsdC5MQVlFUlM7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9MQVlFUic6XG4gICAgICB7XG4gICAgICAgIHZhciB1cGRhdGVkU3RhdGUgPSB7fTtcbiAgICAgICAgdXBkYXRlZFN0YXRlW2FjdGlvbi5sYXllci5pZF0gPSBhY3Rpb24ubGF5ZXI7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHVwZGF0ZWRTdGF0ZSk7XG4gICAgICB9XG4gICAgY2FzZSAnVE9HR0xFX0xBWUVSJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGxheWVySWQgPSBhY3Rpb24ubGF5ZXJJZDtcblxuICAgICAgICB2YXIgbGF5ZXIgPSBzdGF0ZVtsYXllcklkXTtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgX2RlZmluZVByb3BlcnR5KHt9LCBsYXllcklkLCBfZXh0ZW5kcyh7fSwgbGF5ZXIsIHtcbiAgICAgICAgICB2aXNpYmxlOiAhbGF5ZXIudmlzaWJsZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGNhc2UgJ1JFUVVFU1RfREFUQSc6XG4gICAgICB7XG4gICAgICAgIHZhciBfbGF5ZXJJZCA9IGFjdGlvbi5sYXllcklkO1xuXG4gICAgICAgIHZhciBfbGF5ZXIgPSBzdGF0ZVtfbGF5ZXJJZF07XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX2xheWVySWQsIF9leHRlbmRzKHt9LCBfbGF5ZXIsIHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGNhc2UgJ1JFQ0VJVkVfREFUQSc6XG4gICAgICB7XG4gICAgICAgIHZhciBfbGF5ZXIyID0gYWN0aW9uLmxheWVyO1xuXG4gICAgICAgIHZhciBvbGRMYXllciA9IHN0YXRlW19sYXllcjIuaWRdO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBfZGVmaW5lUHJvcGVydHkoe30sIF9sYXllcjIuaWQsIF9leHRlbmRzKHt9LCBvbGRMYXllciwge1xuICAgICAgICAgIHNvdXJjZTogX2xheWVyMi5zb3VyY2UsXG4gICAgICAgICAgbGFiZWxzOiBfbGF5ZXIyLmxhYmVscyxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZVxuICAgICAgICB9KSkpO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gTUFQKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF9kZWZhdWx0U3RhdGUyLmRlZmF1bHQuTUFQO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHZhciBhY3RpdmVMYXllcnMgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmVMYXllcktleXMgPSB2b2lkIDA7XG4gIHZhciBwcm9jZXNzZWRMYXllcnMgPSB2b2lkIDA7XG4gIHZhciBsYXllcnNUb1JlbW92ZSA9IHZvaWQgMDtcbiAgdmFyIGxheWVyc1RvQWRkID0gdm9pZCAwO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJU19MT0FERUQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0xvYWRlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX0xBWUVSUyc6XG4gICAgICBwcm9jZXNzZWRMYXllcnMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUucHJvY2Vzc2VkTGF5ZXJzKTtcbiAgICAgIGFjdGl2ZUxheWVycyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5hY3RpdmVMYXllcnMpO1xuICAgICAgbGF5ZXJzVG9BZGQgPSBbXTtcblxuICAgICAgYWN0aW9uLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHByb2Nlc3NlZExheWVyc1tsLmlkXSA9IGw7XG4gICAgICAgIGlmICghT2JqZWN0LmtleXMoYWN0aXZlTGF5ZXJzKS5pbmNsdWRlcyhsLmlkKSkge1xuICAgICAgICAgIGxheWVyc1RvQWRkLnB1c2gobC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlTGF5ZXJzW2wuaWRdID0gbDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwcm9jZXNzZWRMYXllcnM6IHByb2Nlc3NlZExheWVycyxcbiAgICAgICAgYWN0aXZlTGF5ZXJzOiBhY3RpdmVMYXllcnMsXG4gICAgICAgIGxheWVyc1RvQWRkOiBsYXllcnNUb0FkZFxuICAgICAgfSk7XG4gICAgY2FzZSAnUkVNT1ZFX0xBWUVSUyc6XG4gICAgICBhY3RpdmVMYXllcktleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5hY3RpdmVMYXllcnMpO1xuICAgICAgYWN0aXZlTGF5ZXJzID0ge307XG4gICAgICBsYXllcnNUb1JlbW92ZSA9IFtdO1xuXG4gICAgICBhY3RpdmVMYXllcktleXMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICBpZiAoIWFjdGlvbi5sYXllcnMuaW5jbHVkZXMobCkpIHtcbiAgICAgICAgICBhY3RpdmVMYXllcnNbbF0gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuYWN0aXZlTGF5ZXJzW2xdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXllcnNUb1JlbW92ZS5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBhY3RpdmVMYXllcnM6IGFjdGl2ZUxheWVycyxcbiAgICAgICAgbGF5ZXJzVG9SZW1vdmU6IGxheWVyc1RvUmVtb3ZlXG4gICAgICB9KTtcbiAgICBjYXNlICdMQVlFUlNfUkVNT1ZFRCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGxheWVyc1RvUmVtb3ZlOiBbXVxuICAgICAgfSk7XG4gICAgY2FzZSAnTEFZRVJTX0FEREVEJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgbGF5ZXJzVG9BZGQ6IFtdXG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgQVBQOiBBUFAsIExBWUVSUzogTEFZRVJTLCBTVFlMRVM6IFNUWUxFUywgTUFQOiBNQVBcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvc3RvcmUvcmVkdWNlcnMvUmVkdWNlcnMuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxvYWRKU09OID0gbG9hZEpTT047XG5leHBvcnRzLmxvYWRDU1YgPSBsb2FkQ1NWO1xuXG52YXIgX3BhcGFwYXJzZSA9IHJlcXVpcmUoJ3BhcGFwYXJzZScpO1xuXG5mdW5jdGlvbiBmZXRjaFVSTChwYXRoLCBtaW1lVHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeG9iai5vdmVycmlkZU1pbWVUeXBlKG1pbWVUeXBlKTtcbiAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhvYmoucmVhZHlTdGF0ZSA9PT0gNCAmJiB4b2JqLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICB9O1xuICB4b2JqLnNlbmQobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRKU09OKHBhdGgsIGNhbGxiYWNrKSB7XG4gIGZldGNoVVJMKHBhdGgsICdhcHBsaWNhdGlvbi9qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nICcgKyBwYXRoICsgJyAoJyArIGUgKyAnKScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDU1YocGF0aCwgY2FsbGJhY2spIHtcbiAgZmV0Y2hVUkwocGF0aCwgJ3RleHQvY3N2JywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNhbGxiYWNrKCgwLCBfcGFwYXBhcnNlLnBhcnNlKShyZXNwb25zZSwgeyBoZWFkZXI6IHRydWUgfSkuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyAnICsgcGF0aCArICcgKCcgKyBlICsgJyknKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2ZpbGVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwcmVwYXJlTGF5ZXI7XG5cbnZhciBfYWdncmVnYXRlRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWxzL2FnZ3JlZ2F0ZURhdGEnKTtcblxudmFyIF9hZ2dyZWdhdGVEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FnZ3JlZ2F0ZURhdGEpO1xuXG52YXIgX2ZldGNoRm9ybURhdGEgPSByZXF1aXJlKCcuLy4uL3V0aWxzL2ZldGNoRm9ybURhdGEnKTtcblxudmFyIF9mZXRjaEZvcm1EYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZldGNoRm9ybURhdGEpO1xuXG52YXIgX2ZpbGVzID0gcmVxdWlyZSgnLi4vdXRpbHMvZmlsZXMnKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvZmlsdGVycycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuLi9zdG9yZS9hY3Rpb25zL0FjdGlvbnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbi8qKlxuICogUHJvY2VzZXMgTWFwU3BlYyBhbmQgYWRkcyBpdCB0byBzdGF0ZS5cbiogKi9cbmZ1bmN0aW9uIHByZXBhcmVMYXllcihsYXllclNwZWMsIGRpc3BhdGNoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGZpbHRlck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIC8vIFNldHMgc3RhdGUgdG8gbG9hZGluZztcbiAgZGlzcGF0Y2goKDAsIF9BY3Rpb25zLnJlcXVlc3REYXRhKShsYXllclNwZWMuaWQpKTtcblxuICB2YXIgcHJvY2Vzc2VkTGF5ZXIgPSBfZXh0ZW5kcyh7fSwgbGF5ZXJTcGVjKTtcblxuICAvLyBpZiAobGF5ZXJTcGVjLnBvcHVwICYmIGxheWVyU3BlYy50eXBlICE9PSAnY2hhcnQnKSB7XG4gIC8vICAgdGhpcy5hY3RpdmVMYXllcnMucHVzaChsYXllclNwZWMuaWQpO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRGF0YShzcGVjKSB7XG4gICAgaWYgKCFzcGVjLmxhYmVscykge1xuICAgICAgZGlzcGF0Y2goKDAsIF9BY3Rpb25zLnJlY2VpdmVEYXRhKShzcGVjKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICgwLCBfZmlsZXMubG9hZENTVikoc3BlYy5sYWJlbHMuZGF0YSwgZnVuY3Rpb24gKGxhYmVscykge1xuICAgICAgICBzcGVjLmxhYmVscy5kYXRhID0gbGFiZWxzO1xuICAgICAgICBkaXNwYXRjaCgoMCwgX0FjdGlvbnMucmVjZWl2ZURhdGEpKHNwZWMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWREYXRhKHNwZWMsIHNvdXJjZSkge1xuICAgIHZhciBsYXllciA9IF9leHRlbmRzKHt9LCBzcGVjKTtcbiAgICB2YXIgZmlsZVR5cGUgPSBzb3VyY2Uuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICBpZiAoZmlsZVR5cGUgPT09ICdjc3YnKSB7XG4gICAgICAoMCwgX2ZpbGVzLmxvYWRDU1YpKHNwZWMuc291cmNlLmRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxheWVyLnNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICAgICAgbGF5ZXIubWVyZ2VkRGF0YSA9IGRhdGE7XG4gICAgICAgIGlmIChzcGVjLmFnZ3JlZ2F0ZSAmJiBzcGVjLmFnZ3JlZ2F0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAoMCwgX2ZpbHRlcnMuZ2VuZXJhdGVGaWx0ZXJPcHRpb25zKShzcGVjKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJEYXRhKGxheWVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlsZVR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgKDAsIF9maWxlcy5sb2FkSlNPTikoc3BlYy5zb3VyY2UuZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGF5ZXIuc291cmNlLmRhdGEgPSBkYXRhO1xuICAgICAgICByZW5kZXJEYXRhKGxheWVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIGxheWVyIGhhcyBzb3VyY2VcbiAgaWYgKGxheWVyU3BlYy5zb3VyY2UpIHtcbiAgICAvLyBpZiBub3QgcHJvY2Vzc2VkLCBncmFiIHRoZSBjc3Ygb3IgZ2VvanNvbiBkYXRhXG4gICAgaWYgKHR5cGVvZiBsYXllclNwZWMuc291cmNlLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWFkRGF0YShsYXllclNwZWMsIGxheWVyU3BlYy5zb3VyY2UuZGF0YSk7XG4gICAgfSBlbHNlIGlmIChsYXllclNwZWMuc291cmNlLmRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiAhKGxheWVyU3BlYy5zb3VyY2UuZGF0YVswXSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgbGF5ZXJTcGVjLnNvdXJjZS5kYXRhLmxlbmd0aCA+PSAxICYmICFsYXllclNwZWMubG9hZGVkKSB7XG4gICAgICB2YXIgcSA9IGQzLnF1ZXVlKCk7XG4gICAgICB2YXIgZmlsZVBhdGhzID0gbGF5ZXJTcGVjLnNvdXJjZS5kYXRhO1xuICAgICAgZmlsZVBhdGhzLmZvckVhY2goZnVuY3Rpb24gKGZpbGVQYXRoKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGZpbGVQYXRoKSkge1xuICAgICAgICAgIHEgPSBxLmRlZmVyKF9mZXRjaEZvcm1EYXRhMi5kZWZhdWx0LCBmaWxlUGF0aCwgbGF5ZXJTcGVjLnByb3BlcnRpZXMpO1xuICAgICAgICB9IGVsc2UgcSA9IHEuZGVmZXIoZDMuY3N2LCBmaWxlUGF0aCk7XG4gICAgICB9KTtcbiAgICAgIHEuYXdhaXRBbGwoZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIHZhciBtZXJnZWREYXRhID0gKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIF90b0NvbnN1bWFibGVBcnJheShkYXRhKSk7XG4gICAgICAgIHByb2Nlc3NlZExheWVyLm1lcmdlZERhdGEgPSBtZXJnZWREYXRhO1xuICAgICAgICBpZiAobGF5ZXJTcGVjLmFnZ3JlZ2F0ZSAmJiBsYXllclNwZWMuYWdncmVnYXRlLmZpbHRlcikge1xuICAgICAgICAgICgwLCBfZmlsdGVycy5nZW5lcmF0ZUZpbHRlck9wdGlvbnMpKGxheWVyU3BlYyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc2VkTGF5ZXIuc291cmNlLmRhdGEgPSBsYXllclNwZWMuYWdncmVnYXRlLnR5cGUgPyAoMCwgX2FnZ3JlZ2F0ZURhdGEyLmRlZmF1bHQpKGxheWVyU3BlYywgX3RoaXMucHJvcHMubG9jYXRpb25zKSA6IG1lcmdlZERhdGE7XG4gICAgICAgIHByb2Nlc3NlZExheWVyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIC8vIHJlbmRlckRhdGEobGF5ZXJTcGVjKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyT3B0aW9ucykge1xuICAgICAgcHJvY2Vzc2VkTGF5ZXIuc291cmNlLmRhdGEgPSBsYXllclNwZWMuYWdncmVnYXRlLnR5cGUgPyAoMCwgX2FnZ3JlZ2F0ZURhdGEyLmRlZmF1bHQpKGxheWVyU3BlYywgdGhpcy5wcm9wcy5sb2NhdGlvbnMsIGZpbHRlck9wdGlvbnMpIDogKDAsIF9maWx0ZXJzLnByb2Nlc3NGaWx0ZXJzKShsYXllclNwZWMsIGZpbHRlck9wdGlvbnMpO1xuICAgICAgLy8gc2VsZi5hZGRMYXllcihsYXllclNwZWMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgdGhlIGFscmVhZHkgcHJvY2Vzc2VkIGxheWVyXG4gICAgICBkaXNwYXRjaCgoMCwgX0FjdGlvbnMucmVjZWl2ZURhdGEpKGxheWVyU3BlYykpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsYXllclNwZWMubGF5ZXJzKSB7XG4gICAgLy8gaWYgbGF5ZXIgaGFzIHN1YmxheWVycywgYWRkIGFsbCBzdWJsYXllcnNcbiAgICAvLyBzZWxmLmFkZExlZ2VuZChsYXllclNwZWMpO1xuICAgIGxheWVyU3BlYy5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoc3VibGF5ZXIpIHtcbiAgICAgIHZhciBzdWJMYXllciA9IF90aGlzLnByb3BzLmxheWVyU3BlY1tzdWJsYXllcl07XG4gICAgICBzdWJMYXllci5pZCA9IHN1YmxheWVyO1xuICAgICAgaWYgKHR5cGVvZiBzdWJMYXllci5zb3VyY2UuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVhZERhdGEoc3ViTGF5ZXIsIHN1YkxheWVyLnNvdXJjZS5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlbGYuYWRkTGF5ZXIoc3ViTGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL3ByZXBhcmVMYXllci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvY2Vzc0ZpbHRlcnMgPSBwcm9jZXNzRmlsdGVycztcbmV4cG9ydHMuZ2VuZXJhdGVGaWx0ZXJPcHRpb25zID0gZ2VuZXJhdGVGaWx0ZXJPcHRpb25zO1xuZXhwb3J0cy5maWx0ZXJEYXRhQnlQZXJpb2QgPSBmaWx0ZXJEYXRhQnlQZXJpb2Q7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBwcm9jZXNzRmlsdGVycyhsYXllckRhdGEsIGZpbHRlck9wdGlvbnMpIHtcbiAgdmFyIGRhdGEgPSBsYXllckRhdGEubWVyZ2VkRGF0YSB8fCBsYXllckRhdGEuc291cmNlLmRhdGE7XG4gIHZhciBhY2NlcHRlZEZpbHRlclZhbHVlcyA9IGxheWVyRGF0YS5hZ2dyZWdhdGVbJ2FjY2VwdGVkLWZpbHRlci12YWx1ZXMnXTtcbiAgdmFyIGFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzID0gbGF5ZXJEYXRhLmFnZ3JlZ2F0ZVsnYWNjZXB0ZWQtc3ViLWZpbHRlci12YWx1ZXMnXTtcbiAgdmFyIGZpbHRlcnMgPSBbXTtcbiAgaWYgKGxheWVyRGF0YS5hZ2dyZWdhdGUuZmlsdGVyICYmIGZpbHRlck9wdGlvbnMpIHtcbiAgICAvLyBHZXQgYXJyYXkgb2YgZGlzYWJsZWQgZmlsdGVyc1xuICAgIE9iamVjdC5rZXlzKGZpbHRlck9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnNbb3B0XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlsdGVycy5wdXNoKG9wdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gYXBwbHkgZmlsdGVyc1xuICAgIGRhdGEgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICAgIGlmIChhY2NlcHRlZEZpbHRlclZhbHVlcyAmJiBhY2NlcHRlZFN1YkZpbHRlclZhbHVlcyAmJiAhYWNjZXB0ZWRTdWJGaWx0ZXJWYWx1ZXMuaW5jbHVkZXMoZGF0dW1bbGF5ZXJEYXRhLmFnZ3JlZ2F0ZVsnc3ViLWZpbHRlciddXSkpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHJvd3MgdGhhdCBzaG91bGQgYmUgZmlsdGVyZWQgb3V0LCBpZ25vcmUgcm93cyB3aXRoIHZhbHVlcyBmcm9tIHNlY29uZCBmaWx0ZXIgZmllbGRcbiAgICAgICAgcmV0dXJuICFmaWx0ZXJzLmluY2x1ZGVzKGRhdHVtW2xheWVyRGF0YS5hZ2dyZWdhdGUuZmlsdGVyXSk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzICYmIGFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzLmluY2x1ZGVzKGRhdHVtW2xheWVyRGF0YS5hZ2dyZWdhdGVbJ3N1Yi1maWx0ZXInXV0pKSB7XG4gICAgICAgIC8vIHJlbW92ZSByb3dzIHRoYXQgc2hvdWxkIGJlIGZpbHRlcmVkIG91dCwgaWdub3JlIHJvd3Mgd2l0aCB2YWx1ZXMgZnJvbSBmaXJzdCBmaWx0ZXIgZmllbGRcbiAgICAgICAgcmV0dXJuICFmaWx0ZXJzLmluY2x1ZGVzKGRhdHVtW2xheWVyRGF0YS5hZ2dyZWdhdGVbJ3N1Yi1maWx0ZXInXV0pO1xuICAgICAgfSBlbHNlIGlmICghYWNjZXB0ZWRGaWx0ZXJWYWx1ZXMgJiYgIWFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAhZmlsdGVycy5pbmNsdWRlcyhkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlLmZpbHRlcl0pO1xuICAgICAgfXJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZpbHRlck9wdGlvbnMobGF5ZXJEYXRhKSB7XG4gIHZhciBkYXRhID0gbGF5ZXJEYXRhLm1lcmdlZERhdGEgfHwgbGF5ZXJEYXRhLnNvdXJjZS5kYXRhO1xuICB2YXIgYWNjZXB0ZWRGaWx0ZXJWYWx1ZXMgPSBsYXllckRhdGEuYWdncmVnYXRlWydhY2NlcHRlZC1maWx0ZXItdmFsdWVzJ107XG4gIHZhciBhY2NlcHRlZFN1YkZpbHRlclZhbHVlcyA9IGxheWVyRGF0YS5hZ2dyZWdhdGVbJ2FjY2VwdGVkLXN1Yi1maWx0ZXItdmFsdWVzJ107XG4gIC8vIGdldCBmaWx0ZXIgb3B0aW9ucyBmcm9tIGZpbHRlciBmaWVsZFxuICBpZiAobGF5ZXJEYXRhLmFnZ3JlZ2F0ZS5maWx0ZXIpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBmaWx0ZXJWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICAgIHJldHVybiBkYXR1bVtsYXllckRhdGEuYWdncmVnYXRlLmZpbHRlcl07XG4gICAgfSk7XG4gICAgdmFyIHN1YmZpbHRlclZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChkYXR1bSkge1xuICAgICAgcmV0dXJuIGRhdHVtW2xheWVyRGF0YS5hZ2dyZWdhdGVbJ3N1Yi1maWx0ZXInXV07XG4gICAgfSk7XG4gICAgdmFyIGFsbEZpbHRlcnMgPSAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgW2ZpbHRlclZhbHVlcywgc3ViZmlsdGVyVmFsdWVzXSk7XG5cbiAgICBhbGxGaWx0ZXJzID0gYWxsRmlsdGVycy5maWx0ZXIoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICByZXR1cm4gZGF0dW0gIT09IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICAvLyBjaGVjayBmaWx0ZXIgdmFsdWVzIGFyZSBpbiBhY2NlcHRlZCB2YWx1ZXMgbGlzdHMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3RcbiAgICB2YXIgYWNjZXB0ZWRGaWx0ZXJzID0gW107XG4gICAgaWYgKGFjY2VwdGVkRmlsdGVyVmFsdWVzIHx8IGFjY2VwdGVkU3ViRmlsdGVyVmFsdWVzKSB7XG4gICAgICBhY2NlcHRlZEZpbHRlcnMgPSBhbGxGaWx0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIHJldHVybiBkYXR1bSAhPT0gdW5kZWZpbmVkICYmIChfcmVmMiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjIsIFthY2NlcHRlZEZpbHRlclZhbHVlcywgYWNjZXB0ZWRTdWJGaWx0ZXJWYWx1ZXNdKS5pbmNsdWRlcyhkYXR1bSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgYWNjZXB0ZWRGaWx0ZXJzID0gYWxsRmlsdGVycztcbiAgICBsYXllckRhdGEuZmlsdGVyT3B0aW9ucyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChhY2NlcHRlZEZpbHRlcnMpKSk7XG4gIH1cbn1cbnZhciBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuZnVuY3Rpb24gZmlsdGVyRGF0YUJ5UGVyaW9kKGxheWVyRGF0YSwgcGVyaW9kRmllbGQsIHBlcmlvZCkge1xuICB2YXIgcGVyaW9kcyA9IHBlcmlvZCA/IFtwZXJpb2RdIDogbGF5ZXJEYXRhLm1hcChmdW5jdGlvbiAoZGF0dW0pIHtcbiAgICByZXR1cm4gZGF0dW1bcGVyaW9kRmllbGRdO1xuICB9KTtcbiAgaWYgKCFwZXJpb2QpIHBlcmlvZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQocGVyaW9kcykpO1xuXG4gIGlmIChtb250aHMuaW5kZXhPZihwZXJpb2RzWzBdKSAhPT0gZmFsc2UpIHtcbiAgICBwZXJpb2RzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBtb250aHMuaW5kZXhPZihhKSAtIG1vbnRocy5pbmRleE9mKGIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHBlcmlvZHNbMF0uaW5kZXhPZignLycpICE9PSAtMSkge1xuICAgIHBlcmlvZHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIE51bWJlcihhLnNwbGl0KCcvJylbMV0pIC0gTnVtYmVyKGIuc3BsaXQoJy8nKVsxXSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVyaW9kRmlsdGVyID0gcGVyaW9kc1twZXJpb2RzLmxlbmd0aCAtIDFdO1xuXG4gIHJldHVybiBsYXllckRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXR1bSkge1xuICAgIHJldHVybiBkYXR1bVtwZXJpb2RGaWVsZF0gPT09IHBlcmlvZEZpbHRlcjtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvdXRpbHMvZmlsdGVycy5qcyIsIi8qIEBmbG93ICovXG5cbi8vICMgc2ltcGxlLXN0YXRpc3RpY3Ncbi8vXG4vLyBBIHNpbXBsZSwgbGl0ZXJhdGUgc3RhdGlzdGljcyBzeXN0ZW0uXG5cbi8vIExpbmVhciBSZWdyZXNzaW9uXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbmVhclJlZ3Jlc3Npb24gfSBmcm9tICcuL3NyYy9saW5lYXJfcmVncmVzc2lvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbmVhclJlZ3Jlc3Npb25MaW5lIH0gZnJvbSAnLi9zcmMvbGluZWFyX3JlZ3Jlc3Npb25fbGluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YW5kYXJkRGV2aWF0aW9uIH0gZnJvbSAnLi9zcmMvc3RhbmRhcmRfZGV2aWF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgclNxdWFyZWQgfSBmcm9tICcuL3NyYy9yX3NxdWFyZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb2RlIH0gZnJvbSAnLi9zcmMvbW9kZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vZGVGYXN0IH0gZnJvbSAnLi9zcmMvbW9kZV9mYXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW9kZVNvcnRlZCB9IGZyb20gJy4vc3JjL21vZGVfc29ydGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWluIH0gZnJvbSAnLi9zcmMvbWluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAnLi9zcmMvbWF4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWluU29ydGVkIH0gZnJvbSAnLi9zcmMvbWluX3NvcnRlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heFNvcnRlZCB9IGZyb20gJy4vc3JjL21heF9zb3J0ZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdW0gfSBmcm9tICcuL3NyYy9zdW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdW1TaW1wbGUgfSBmcm9tICcuL3NyYy9zdW1fc2ltcGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvZHVjdCB9IGZyb20gJy4vc3JjL3Byb2R1Y3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBxdWFudGlsZSB9IGZyb20gJy4vc3JjL3F1YW50aWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcXVhbnRpbGVTb3J0ZWQgfSBmcm9tICcuL3NyYy9xdWFudGlsZV9zb3J0ZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRlcnF1YXJ0aWxlUmFuZ2UsIGRlZmF1bHQgYXMgaXFyIH0gZnJvbSAnLi9zcmMvaW50ZXJxdWFydGlsZV9yYW5nZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lZGlhbkFic29sdXRlRGV2aWF0aW9uLCBkZWZhdWx0IGFzIG1hZCB9IGZyb20gJy4vc3JjL21lZGlhbl9hYnNvbHV0ZV9kZXZpYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaHVuayB9IGZyb20gJy4vc3JjL2NodW5rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2FtcGxlV2l0aFJlcGxhY2VtZW50IH0gZnJvbSAnLi9zcmMvc2FtcGxlX3dpdGhfcmVwbGFjZW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaHVmZmxlIH0gZnJvbSAnLi9zcmMvc2h1ZmZsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNodWZmbGVJblBsYWNlIH0gZnJvbSAnLi9zcmMvc2h1ZmZsZV9pbl9wbGFjZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZSB9IGZyb20gJy4vc3JjL3NhbXBsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNrbWVhbnMgfSBmcm9tICcuL3NyYy9ja21lYW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pcXVlQ291bnRTb3J0ZWQgfSBmcm9tICcuL3NyYy91bmlxdWVfY291bnRfc29ydGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VtTnRoUG93ZXJEZXZpYXRpb25zIH0gZnJvbSAnLi9zcmMvc3VtX250aF9wb3dlcl9kZXZpYXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxJbnRlcnZhbEJyZWFrcyB9IGZyb20gJy4vc3JjL2VxdWFsX2ludGVydmFsX2JyZWFrcyc7XG5cbi8vIHNhbXBsZSBzdGF0aXN0aWNzXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZUNvdmFyaWFuY2UgfSBmcm9tICcuL3NyYy9zYW1wbGVfY292YXJpYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZUNvcnJlbGF0aW9uIH0gZnJvbSAnLi9zcmMvc2FtcGxlX2NvcnJlbGF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2FtcGxlVmFyaWFuY2UgfSBmcm9tICcuL3NyYy9zYW1wbGVfdmFyaWFuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGVTdGFuZGFyZERldmlhdGlvbiB9IGZyb20gJy4vc3JjL3NhbXBsZV9zdGFuZGFyZF9kZXZpYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYW1wbGVTa2V3bmVzcyB9IGZyb20gJy4vc3JjL3NhbXBsZV9za2V3bmVzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZUt1cnRvc2lzIH0gZnJvbSAnLi9zcmMvc2FtcGxlX2t1cnRvc2lzJztcblxuLy8gY29tYmluYXRvcmljc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJtdXRhdGlvbnNIZWFwIH0gZnJvbSAnLi9zcmMvcGVybXV0YXRpb25zX2hlYXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21iaW5hdGlvbnMgfSBmcm9tICcuL3NyYy9jb21iaW5hdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21iaW5hdGlvbnNSZXBsYWNlbWVudCB9IGZyb20gJy4vc3JjL2NvbWJpbmF0aW9uc19yZXBsYWNlbWVudCc7XG5cbi8vIG1lYXN1cmVzIG9mIGNlbnRyYWxpdHlcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRkVG9NZWFuIH0gZnJvbSAnLi9zcmMvYWRkX3RvX21lYW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21iaW5lTWVhbnMgfSBmcm9tICcuL3NyYy9jb21iaW5lX21lYW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tYmluZVZhcmlhbmNlcyB9IGZyb20gJy4vc3JjL2NvbWJpbmVfdmFyaWFuY2VzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2VvbWV0cmljTWVhbiB9IGZyb20gJy4vc3JjL2dlb21ldHJpY19tZWFuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFybW9uaWNNZWFuIH0gZnJvbSAnLi9zcmMvaGFybW9uaWNfbWVhbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGF2ZXJhZ2UsIGRlZmF1bHQgYXMgbWVhbiB9IGZyb20gJy4vc3JjL21lYW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZWRpYW4gfSBmcm9tICcuL3NyYy9tZWRpYW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZWRpYW5Tb3J0ZWQgfSBmcm9tICcuL3NyYy9tZWRpYW5fc29ydGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VidHJhY3RGcm9tTWVhbiB9IGZyb20gJy4vc3JjL3N1YnRyYWN0X2Zyb21fbWVhbic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcm9vdE1lYW5TcXVhcmUsIGRlZmF1bHQgYXMgcm1zIH0gZnJvbSAnLi9zcmMvcm9vdF9tZWFuX3NxdWFyZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhcmlhbmNlIH0gZnJvbSAnLi9zcmMvdmFyaWFuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0VGVzdCB9IGZyb20gJy4vc3JjL3RfdGVzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRUZXN0VHdvU2FtcGxlIH0gZnJvbSAnLi9zcmMvdF90ZXN0X3R3b19zYW1wbGUnO1xuLy8gc3MuamVua3MgPSByZXF1aXJlKCcuL3NyYy9qZW5rcycpO1xuXG4vLyBDbGFzc2lmaWVyc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXllc2lhbkNsYXNzaWZpZXIsIGRlZmF1bHQgYXMgYmF5ZXNpYW4gfSBmcm9tICcuL3NyYy9iYXllc2lhbl9jbGFzc2lmaWVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VwdHJvbk1vZGVsLCBkZWZhdWx0IGFzIHBlcmNlcHRyb24gfSBmcm9tICcuL3NyYy9wZXJjZXB0cm9uJztcblxuLy8gRGlzdHJpYnV0aW9uLXJlbGF0ZWQgbWV0aG9kc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcHNpbG9uIH0gZnJvbSAnLi9zcmMvZXBzaWxvbic7IC8vIFdlIG1ha2UgzrUgYXZhaWxhYmxlIHRvIHRoZSB0ZXN0IHN1aXRlLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmYWN0b3JpYWwgfSBmcm9tICcuL3NyYy9mYWN0b3JpYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZXJub3VsbGlEaXN0cmlidXRpb24gfSBmcm9tICcuL3NyYy9iZXJub3VsbGlfZGlzdHJpYnV0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmlub21pYWxEaXN0cmlidXRpb24gfSBmcm9tICcuL3NyYy9iaW5vbWlhbF9kaXN0cmlidXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb2lzc29uRGlzdHJpYnV0aW9uIH0gZnJvbSAnLi9zcmMvcG9pc3Nvbl9kaXN0cmlidXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGUgfSBmcm9tICcuL3NyYy9jaGlfc3F1YXJlZF9kaXN0cmlidXRpb25fdGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGlTcXVhcmVkR29vZG5lc3NPZkZpdCB9IGZyb20gJy4vc3JjL2NoaV9zcXVhcmVkX2dvb2RuZXNzX29mX2ZpdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtlcm5lbERlbnNpdHlFc3RpbWF0aW9uLCBkZWZhdWx0IGFzIGtkZSB9IGZyb20gJy4vc3JjL2tlcm5lbF9kZW5zaXR5X2VzdGltYXRpb24nO1xuXG4vLyBOb3JtYWwgZGlzdHJpYnV0aW9uXG5leHBvcnQgeyBkZWZhdWx0IGFzIHpTY29yZSB9IGZyb20gJy4vc3JjL3pfc2NvcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdW11bGF0aXZlU3RkTm9ybWFsUHJvYmFiaWxpdHkgfSBmcm9tICcuL3NyYy9jdW11bGF0aXZlX3N0ZF9ub3JtYWxfcHJvYmFiaWxpdHknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGFuZGFyZE5vcm1hbFRhYmxlIH0gZnJvbSAnLi9zcmMvc3RhbmRhcmRfbm9ybWFsX3RhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXJyb3JGdW5jdGlvbiwgZGVmYXVsdCBhcyBlcmYgfSBmcm9tICcuL3NyYy9lcnJvcl9mdW5jdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGludmVyc2VFcnJvckZ1bmN0aW9uIH0gZnJvbSAnLi9zcmMvaW52ZXJzZV9lcnJvcl9mdW5jdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb2JpdCB9IGZyb20gJy4vc3JjL3Byb2JpdCc7XG5cbi8vIFJvb3QtZmluZGluZyBtZXRob2RzXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpc2VjdCB9IGZyb20gJy4vc3JjL2Jpc2VjdCc7XG5cbi8vIFV0aWxzXG5leHBvcnQgeyBkZWZhdWx0IGFzIHF1aWNrc2VsZWN0IH0gZnJvbSAnLi9zcmMvcXVpY2tzZWxlY3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWduIH0gZnJvbSAnLi9zcmMvc2lnbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG51bWVyaWNTb3J0IH0gZnJvbSAnLi9zcmMvbnVtZXJpY19zb3J0JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgdmFyaWFuY2UgZnJvbSAnLi92YXJpYW5jZSc7XG5cbi8qKlxuICogVGhlIFtzdGFuZGFyZCBkZXZpYXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3RhbmRhcmRfZGV2aWF0aW9uKVxuICogaXMgdGhlIHNxdWFyZSByb290IG9mIHRoZSB2YXJpYW5jZS4gVGhpcyBpcyBhbHNvIGtub3duIGFzIHRoZSBwb3B1bGF0aW9uXG4gKiBzdGFuZGFyZCBkZXZpYXRpb24uIEl0J3MgdXNlZnVsIGZvciBtZWFzdXJpbmcgdGhlIGFtb3VudFxuICogb2YgdmFyaWF0aW9uIG9yIGRpc3BlcnNpb24gaW4gYSBzZXQgb2YgdmFsdWVzLlxuICpcbiAqIFN0YW5kYXJkIGRldmlhdGlvbiBpcyBvbmx5IGFwcHJvcHJpYXRlIGZvciBmdWxsLXBvcHVsYXRpb24ga25vd2xlZGdlOiBmb3JcbiAqIHNhbXBsZXMgb2YgYSBwb3B1bGF0aW9uLCB7QGxpbmsgc2FtcGxlU3RhbmRhcmREZXZpYXRpb259IGlzXG4gKiBtb3JlIGFwcHJvcHJpYXRlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dFxuICogQHJldHVybnMge251bWJlcn0gc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyaWFuY2UoWzIsIDQsIDQsIDQsIDUsIDUsIDcsIDldKTsgLy8gPT4gNFxuICogc3RhbmRhcmREZXZpYXRpb24oWzIsIDQsIDQsIDQsIDUsIDUsIDcsIDldKTsgLy8gPT4gMlxuICovXG5mdW5jdGlvbiBzdGFuZGFyZERldmlhdGlvbih4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICBpZiAoeC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciB2ID0gdmFyaWFuY2UoeCk7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhbmRhcmREZXZpYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3RhbmRhcmRfZGV2aWF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc3VtTnRoUG93ZXJEZXZpYXRpb25zIGZyb20gJy4vc3VtX250aF9wb3dlcl9kZXZpYXRpb25zJztcblxuLyoqXG4gKiBUaGUgW3ZhcmlhbmNlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1ZhcmlhbmNlKVxuICogaXMgdGhlIHN1bSBvZiBzcXVhcmVkIGRldmlhdGlvbnMgZnJvbSB0aGUgbWVhbi5cbiAqXG4gKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHZhcmlhbmNlLCBub3Qgc2FtcGxlIHZhcmlhbmNlOlxuICogc2VlIHRoZSBgc2FtcGxlVmFyaWFuY2VgIG1ldGhvZCBpZiB5b3Ugd2FudCBhIHNhbXBsZSBtZWFzdXJlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBhIHBvcHVsYXRpb24gb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHZhcmlhbmNlOiBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLlxuICogemVybyBpbmRpY2F0ZXMgdGhhdCBhbGwgdmFsdWVzIGFyZSBpZGVudGljYWwuXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgeCdzIGxlbmd0aCBpcyAwXG4gKiBAZXhhbXBsZVxuICogdmFyaWFuY2UoWzEsIDIsIDMsIDQsIDUsIDZdKTsgLy8gPT4gMi45MTY2NjY2NjY2NjY2NjY1XG4gKi9cbmZ1bmN0aW9uIHZhcmlhbmNlKHgvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG4gICAgLy8gVGhlIHZhcmlhbmNlIG9mIG5vIG51bWJlcnMgaXMgbnVsbFxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZhcmlhbmNlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgbWVhbiBvZiBzcXVhcmVkIGRldmlhdGlvbnMgYmV0d2VlbiB0aGVcbiAgICAvLyBtZWFuIHZhbHVlIGFuZCBlYWNoIHZhbHVlLlxuICAgIHJldHVybiBzdW1OdGhQb3dlckRldmlhdGlvbnMoeCwgMikgLyB4Lmxlbmd0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFyaWFuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvdmFyaWFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogT3VyIGRlZmF1bHQgc3VtIGlzIHRoZSBbS2FoYW4tQmFidXNrYSBhbGdvcml0aG1dKGh0dHBzOi8vcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnLzE3NjAvN2Q0NjdjZGExZDAyNzdhZDI3MmRlYjIxMTM1MzMxMzFkYzA5LnBkZikuXG4gKiBUaGlzIG1ldGhvZCBpcyBhbiBpbXByb3ZlbWVudCBvdmVyIHRoZSBjbGFzc2ljYWxcbiAqIFtLYWhhbiBzdW1tYXRpb24gYWxnb3JpdGhtXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYWhhbl9zdW1tYXRpb25fYWxnb3JpdGhtKS5cbiAqIEl0IGFpbXMgYXQgY29tcHV0aW5nIHRoZSBzdW0gb2YgYSBsaXN0IG9mIG51bWJlcnMgd2hpbGUgY29ycmVjdGluZyBmb3JcbiAqIGZsb2F0aW5nLXBvaW50IGVycm9ycy4gVHJhZGl0aW9uYWxseSwgc3VtcyBhcmUgY2FsY3VsYXRlZCBhcyBtYW55XG4gKiBzdWNjZXNzaXZlIGFkZGl0aW9ucywgZWFjaCBvbmUgd2l0aCBpdHMgb3duIGZsb2F0aW5nLXBvaW50IHJvdW5kb2ZmLiBUaGVzZVxuICogbG9zc2VzIGluIHByZWNpc2lvbiBhZGQgdXAgYXMgdGhlIG51bWJlciBvZiBudW1iZXJzIGluY3JlYXNlcy4gVGhpcyBhbHRlcm5hdGl2ZVxuICogYWxnb3JpdGhtIGlzIG1vcmUgYWNjdXJhdGUgdGhhbiB0aGUgc2ltcGxlIHdheSBvZiBjYWxjdWxhdGluZyBzdW1zIGJ5IHNpbXBsZVxuICogYWRkaXRpb24uXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHN1bSBvZiBhbGwgaW5wdXQgbnVtYmVyc1xuICogQGV4YW1wbGVcbiAqIHN1bShbMSwgMiwgM10pOyAvLyA9PiA2XG4gKi9cbmZ1bmN0aW9uIHN1bSh4Lyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG5cbiAgICAvLyBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIHdlIG5lZWRuJ3QgYm90aGVyIGNvbXB1dGluZyBpdHMgc3VtXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemluZyB0aGUgc3VtIGFzIHRoZSBmaXJzdCBudW1iZXIgaW4gdGhlIGFycmF5XG4gICAgdmFyIHN1bSA9IHhbMF07XG5cbiAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBmbG9hdGluZy1wb2ludCBlcnJvciBjb3JyZWN0aW9uXG4gICAgdmFyIGNvcnJlY3Rpb24gPSAwO1xuXG4gICAgdmFyIHRyYW5zaXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHN1bSArIHhbaV07XG5cbiAgICAgICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgY29ycmVjdGlvbiBpbiBhIGRpZmZlcmVudCBmYXNoaW9uXG4gICAgICAgIC8vIGlmIHRoZSBuZXcgYWJzb2x1dGUgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIHRoZSBhYnNvbHV0ZSBzdW1cbiAgICAgICAgaWYgKE1hdGguYWJzKHN1bSkgPj0gTWF0aC5hYnMoeFtpXSkpIHtcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gKz0gKChzdW0gLSB0cmFuc2l0aW9uKSArIHhbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ycmVjdGlvbiArPSAoKHhbaV0gLSB0cmFuc2l0aW9uKSArIHN1bSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdW0gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8vIFJldHVybmluZyB0aGUgY29ycmVjdGVkIHN1bVxuICAgIHJldHVybiBzdW0gKyBjb3JyZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VtLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbbW9kZV0oaHR0cDovL2JpdC5seS9XNUs0WXQpIGlzIHRoZSBudW1iZXIgdGhhdCBhcHBlYXJzIGluIGEgbGlzdCB0aGUgaGlnaGVzdCBudW1iZXIgb2YgdGltZXMuXG4gKiBUaGVyZSBjYW4gYmUgbXVsdGlwbGUgbW9kZXMgaW4gYSBsaXN0OiBpbiB0aGUgZXZlbnQgb2YgYSB0aWUsIHRoaXNcbiAqIGFsZ29yaXRobSB3aWxsIHJldHVybiB0aGUgbW9zdCByZWNlbnRseSBzZWVuIG1vZGUuXG4gKlxuICogVGhpcyBpcyBhIFttZWFzdXJlIG9mIGNlbnRyYWwgdGVuZGVuY3ldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyYWxfdGVuZGVuY3kpOlxuICogYSBtZXRob2Qgb2YgZmluZGluZyBhIHR5cGljYWwgb3IgY2VudHJhbCB2YWx1ZSBvZiBhIHNldCBvZiBudW1iZXJzLlxuICpcbiAqIFRoaXMgcnVucyBpbiBgTyhuKWAgYmVjYXVzZSB0aGUgaW5wdXQgaXMgc29ydGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc29ydGVkIGEgc2FtcGxlIG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtb2RlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgc29ydGVkIGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogbW9kZVNvcnRlZChbMCwgMCwgMV0pOyAvLyA9PiAwXG4gKi9cbmZ1bmN0aW9uIG1vZGVTb3J0ZWQoc29ydGVkIC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcblxuICAgIC8vIEhhbmRsZSBlZGdlIGNhc2VzOlxuICAgIC8vIFRoZSBtb2RlIG9mIGFuIGVtcHR5IGxpc3QgaXMgdW5kZWZpbmVkXG4gICAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2RlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfSBlbHNlIGlmIChzb3J0ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzb3J0ZWRbMF07XG4gICAgfVxuXG4gICAgLy8gVGhpcyBhc3N1bWVzIGl0IGlzIGRlYWxpbmcgd2l0aCBhbiBhcnJheSBvZiBzaXplID4gMSwgc2luY2Ugc2l6ZVxuICAgIC8vIDAgYW5kIDEgYXJlIGhhbmRsZWQgaW1tZWRpYXRlbHkuIEhlbmNlIGl0IHN0YXJ0cyBhdCBpbmRleCAxIGluIHRoZVxuICAgIC8vIGFycmF5LlxuICAgIHZhciBsYXN0ID0gc29ydGVkWzBdLFxuICAgICAgICAvLyBzdG9yZSB0aGUgbW9kZSBhcyB3ZSBmaW5kIG5ldyBtb2Rlc1xuICAgICAgICB2YWx1ZSA9IE5hTixcbiAgICAgICAgLy8gc3RvcmUgaG93IG1hbnkgdGltZXMgd2UndmUgc2VlbiB0aGUgbW9kZVxuICAgICAgICBtYXhTZWVuID0gMCxcbiAgICAgICAgLy8gaG93IG1hbnkgdGltZXMgdGhlIGN1cnJlbnQgY2FuZGlkYXRlIGZvciB0aGUgbW9kZVxuICAgICAgICAvLyBoYXMgYmVlbiBzZWVuXG4gICAgICAgIHNlZW5UaGlzID0gMTtcblxuICAgIC8vIGVuZCBhdCBzb3J0ZWQubGVuZ3RoICsgMSB0byBmaXggdGhlIGNhc2UgaW4gd2hpY2ggdGhlIG1vZGUgaXNcbiAgICAvLyB0aGUgaGlnaGVzdCBudW1iZXIgdGhhdCBvY2N1cnMgaW4gdGhlIHNlcXVlbmNlLiB0aGUgbGFzdCBpdGVyYXRpb25cbiAgICAvLyBjb21wYXJlcyBzb3J0ZWRbaV0sIHdoaWNoIGlzIHVuZGVmaW5lZCwgdG8gdGhlIGhpZ2hlc3QgbnVtYmVyXG4gICAgLy8gaW4gdGhlIHNlcmllc1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc29ydGVkLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAvLyB3ZSdyZSBzZWVpbmcgYSBuZXcgbnVtYmVyIHBhc3MgYnlcbiAgICAgICAgaWYgKHNvcnRlZFtpXSAhPT0gbGFzdCkge1xuICAgICAgICAgICAgLy8gdGhlIGxhc3QgbnVtYmVyIGlzIHRoZSBuZXcgbW9kZSBzaW5jZSB3ZSBzYXcgaXQgbW9yZVxuICAgICAgICAgICAgLy8gb2Z0ZW4gdGhhbiB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgaWYgKHNlZW5UaGlzID4gbWF4U2Vlbikge1xuICAgICAgICAgICAgICAgIG1heFNlZW4gPSBzZWVuVGhpcztcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGxhc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuVGhpcyA9IDE7XG4gICAgICAgICAgICBsYXN0ID0gc29ydGVkW2ldO1xuICAgICAgICAvLyBpZiB0aGlzIGlzbid0IGEgbmV3IG51bWJlciwgaXQncyBvbmUgbW9yZSBvY2N1cnJlbmNlIG9mXG4gICAgICAgIC8vIHRoZSBwb3RlbnRpYWwgbW9kZVxuICAgICAgICB9IGVsc2UgeyBzZWVuVGhpcysrOyB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZVNvcnRlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9tb2RlX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgbWluIGlzIHRoZSBsb3dlc3QgbnVtYmVyIGluIHRoZSBhcnJheS4gVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggc2FtcGxlIG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgdGhlIHRoZSBsZW5ndGggb2YgeCBpcyBsZXNzIHRoYW4gb25lXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtaW5pbXVtIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogbWluKFsxLCA1LCAtMTAsIDEwMCwgMl0pOyAvLyA9PiAtMTBcbiAqL1xuZnVuY3Rpb24gbWluKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWluIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0geFswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gT24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AsIG1pbiBpc1xuICAgICAgICAvLyB1bmRlZmluZWQgYW5kIGlzIHRodXMgbWFkZSB0aGUgbWluaW11bSBlbGVtZW50IGluIHRoZSBhcnJheVxuICAgICAgICBpZiAoeFtpXSA8IHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHhbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoaXMgY29tcHV0ZXMgdGhlIG1heGltdW0gbnVtYmVyIGluIGFuIGFycmF5LlxuICpcbiAqIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gbWF4aW11bSB2YWx1ZVxuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSB0aGUgbGVuZ3RoIG9mIHggaXMgbGVzcyB0aGFuIG9uZVxuICogQGV4YW1wbGVcbiAqIG1heChbMSwgMiwgMywgNF0pO1xuICogLy8gPT4gNFxuICovXG5mdW5jdGlvbiBtYXgoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykgLyo6bnVtYmVyKi8ge1xuXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWF4IHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0geFswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gT24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AsIG1heCBpc1xuICAgICAgICAvLyB1bmRlZmluZWQgYW5kIGlzIHRodXMgbWFkZSB0aGUgbWF4aW11bSBlbGVtZW50IGluIHRoZSBhcnJheVxuICAgICAgICBpZiAoeFtpXSA+IHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHhbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWF4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFJlYXJyYW5nZSBpdGVtcyBpbiBgYXJyYCBzbyB0aGF0IGFsbCBpdGVtcyBpbiBgW2xlZnQsIGtdYCByYW5nZSBhcmUgdGhlIHNtYWxsZXN0LlxuICogVGhlIGBrYC10aCBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgYChrIC0gbGVmdCArIDEpYC10aCBzbWFsbGVzdCB2YWx1ZSBpbiBgW2xlZnQsIHJpZ2h0XWAuXG4gKlxuICogSW1wbGVtZW50cyBGbG95ZC1SaXZlc3Qgc2VsZWN0aW9uIGFsZ29yaXRobSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GbG95ZC1SaXZlc3RfYWxnb3JpdGhtXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhcnIgaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBrIHBpdm90IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW2xlZnRdIGxlZnQgaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmlnaHRdIHJpZ2h0IGluZGV4XG4gKiBAcmV0dXJucyB7dm9pZH0gbXV0YXRlcyBpbnB1dCBhcnJheVxuICogQGV4YW1wbGVcbiAqIHZhciBhcnIgPSBbNjUsIDI4LCA1OSwgMzMsIDIxLCA1NiwgMjIsIDk1LCA1MCwgMTIsIDkwLCA1MywgMjgsIDc3LCAzOV07XG4gKiBxdWlja3NlbGVjdChhcnIsIDgpO1xuICogLy8gPSBbMzksIDI4LCAyOCwgMzMsIDIxLCAxMiwgMjIsIDUwLCA1MywgNTYsIDU5LCA2NSwgOTAsIDc3LCA5NV1cbiAqL1xuZnVuY3Rpb24gcXVpY2tzZWxlY3QoYXJyLyo6IEFycmF5PG51bWJlcj4gKi8sIGsvKjogbnVtYmVyICovLCBsZWZ0Lyo6ID9udW1iZXIgKi8sIHJpZ2h0Lyo6ID9udW1iZXIgKi8pLyo6IHZvaWQgKi8ge1xuICAgIGxlZnQgPSBsZWZ0IHx8IDA7XG4gICAgcmlnaHQgPSByaWdodCB8fCAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgICAgICAvLyA2MDAgYW5kIDAuNSBhcmUgYXJiaXRyYXJ5IGNvbnN0YW50cyBjaG9zZW4gaW4gdGhlIG9yaWdpbmFsIHBhcGVyIHRvIG1pbmltaXplIGV4ZWN1dGlvbiB0aW1lXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIHZhciBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIHZhciBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgdmFyIHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIHZhciBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgICAgICAgIHZhciBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKTtcbiAgICAgICAgICAgIGlmIChtIC0gbiAvIDIgPCAwKSBzZCAqPSAtMTtcbiAgICAgICAgICAgIHZhciBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHZhciBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgcXVpY2tzZWxlY3QoYXJyLCBrLCBuZXdMZWZ0LCBuZXdSaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdCA9IGFycltrXTtcbiAgICAgICAgdmFyIGkgPSBsZWZ0O1xuICAgICAgICB2YXIgaiA9IHJpZ2h0O1xuXG4gICAgICAgIHN3YXAoYXJyLCBsZWZ0LCBrKTtcbiAgICAgICAgaWYgKGFycltyaWdodF0gPiB0KSBzd2FwKGFyciwgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcChhcnIsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGFycltpXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChhcnJbal0gPiB0KSBqLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJyW2xlZnRdID09PSB0KSBzd2FwKGFyciwgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcChhcnIsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgdmFyIHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuXG5leHBvcnQgZGVmYXVsdCBxdWlja3NlbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9xdWlja3NlbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHF1YW50aWxlIGZyb20gJy4vcXVhbnRpbGUnO1xuXG4vKipcbiAqIFRoZSBbSW50ZXJxdWFydGlsZSByYW5nZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcnF1YXJ0aWxlX3JhbmdlKSBpc1xuICogYSBtZWFzdXJlIG9mIHN0YXRpc3RpY2FsIGRpc3BlcnNpb24sIG9yIGhvdyBzY2F0dGVyZWQsIHNwcmVhZCwgb3JcbiAqIGNvbmNlbnRyYXRlZCBhIGRpc3RyaWJ1dGlvbiBpcy4gSXQncyBjb21wdXRlZCBhcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiB0aGUgdGhpcmQgcXVhcnRpbGUgYW5kIGZpcnN0IHF1YXJ0aWxlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgbnVtYmVyc1xuICogQHJldHVybnMge251bWJlcn0gaW50ZXJxdWFydGlsZSByYW5nZTogdGhlIHNwYW4gYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgcXVhcnRpbGUsXG4gKiAwLjI1IGFuZCAwLjc1XG4gKiBAZXhhbXBsZVxuICogaW50ZXJxdWFydGlsZVJhbmdlKFswLCAxLCAyLCAzXSk7IC8vID0+IDJcbiAqL1xuZnVuY3Rpb24gaW50ZXJxdWFydGlsZVJhbmdlKHgvKjogQXJyYXk8bnVtYmVyPiAqLykge1xuICAgIC8vIEludGVycXVhcnRpbGUgcmFuZ2UgaXMgdGhlIHNwYW4gYmV0d2VlbiB0aGUgdXBwZXIgcXVhcnRpbGUsXG4gICAgLy8gYXQgYDAuNzVgLCBhbmQgbG93ZXIgcXVhcnRpbGUsIGAwLjI1YFxuICAgIHZhciBxMSA9IHF1YW50aWxlKHgsIDAuNzUpLFxuICAgICAgICBxMiA9IHF1YW50aWxlKHgsIDAuMjUpO1xuXG4gICAgaWYgKHR5cGVvZiBxMSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHEyID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gcTEgLSBxMjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVycXVhcnRpbGVSYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9pbnRlcnF1YXJ0aWxlX3JhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgcXVhbnRpbGUgZnJvbSAnLi9xdWFudGlsZSc7XG5cbi8qKlxuICogVGhlIFttZWRpYW5dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWVkaWFuKSBpc1xuICogdGhlIG1pZGRsZSBudW1iZXIgb2YgYSBsaXN0LiBUaGlzIGlzIG9mdGVuIGEgZ29vZCBpbmRpY2F0b3Igb2YgJ3RoZSBtaWRkbGUnXG4gKiB3aGVuIHRoZXJlIGFyZSBvdXRsaWVycyB0aGF0IHNrZXcgdGhlIGBtZWFuKClgIHZhbHVlLlxuICogVGhpcyBpcyBhIFttZWFzdXJlIG9mIGNlbnRyYWwgdGVuZGVuY3ldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyYWxfdGVuZGVuY3kpOlxuICogYSBtZXRob2Qgb2YgZmluZGluZyBhIHR5cGljYWwgb3IgY2VudHJhbCB2YWx1ZSBvZiBhIHNldCBvZiBudW1iZXJzLlxuICpcbiAqIFRoZSBtZWRpYW4gaXNuJ3QgbmVjZXNzYXJpbHkgb25lIG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgbGlzdDogdGhlIHZhbHVlXG4gKiBjYW4gYmUgdGhlIGF2ZXJhZ2Ugb2YgdHdvIGVsZW1lbnRzIGlmIHRoZSBsaXN0IGhhcyBhbiBldmVuIGxlbmd0aFxuICogYW5kIHRoZSB0d28gY2VudHJhbCB2YWx1ZXMgYXJlIGRpZmZlcmVudC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1lZGlhbiB2YWx1ZVxuICogQGV4YW1wbGVcbiAqIG1lZGlhbihbMTAsIDIsIDUsIDEwMCwgMiwgMV0pOyAvLyA9PiAzLjVcbiAqL1xuZnVuY3Rpb24gbWVkaWFuKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgcmV0dXJuICtxdWFudGlsZSh4LCAwLjUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZWRpYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2h1ZmZsZUluUGxhY2UgZnJvbSAnLi9zaHVmZmxlX2luX3BsYWNlJztcblxuLyoqXG4gKiBBIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXIlRTIlODAlOTNZYXRlc19zaHVmZmxlKVxuICogaXMgYSBmYXN0IHdheSB0byBjcmVhdGUgYSByYW5kb20gcGVybXV0YXRpb24gb2YgYSBmaW5pdGUgc2V0LiBUaGlzIGlzXG4gKiBhIGZ1bmN0aW9uIGFyb3VuZCBgc2h1ZmZsZV9pbl9wbGFjZWAgdGhhdCBhZGRzIHRoZSBndWFyYW50ZWUgdGhhdFxuICogaXQgd2lsbCBub3QgbW9kaWZ5IGl0cyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB4IHNhbXBsZSBvZiAwIG9yIG1vcmUgbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JhbmRvbVNvdXJjZT1NYXRoLnJhbmRvbV0gYW4gb3B0aW9uYWwgZW50cm9weSBzb3VyY2UgdGhhdFxuICogcmV0dXJucyBudW1iZXJzIGJldHdlZW4gMCBpbmNsdXNpdmUgYW5kIDEgZXhjbHVzaXZlOiB0aGUgcmFuZ2UgWzAsIDEpXG4gKiBAcmV0dXJuIHtBcnJheX0gc2h1ZmZsZWQgdmVyc2lvbiBvZiBpbnB1dFxuICogQGV4YW1wbGVcbiAqIHZhciBzaHVmZmxlZCA9IHNodWZmbGUoWzEsIDIsIDMsIDRdKTtcbiAqIHNodWZmbGVkOyAvLyA9IFsyLCAzLCAxLCA0XSBvciBhbnkgb3RoZXIgcmFuZG9tIHBlcm11dGF0aW9uXG4gKi9cbmZ1bmN0aW9uIHNodWZmbGUvKjo6PFQ+Ki8oeC8qOiBBcnJheTxUPiAqLywgcmFuZG9tU291cmNlLyo6ID9GdW5jdGlvbiAqLykge1xuICAgIC8vIHNsaWNlIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB0aGF0IGl0IGlzIG5vdCBtb2RpZmllZFxuICAgIHZhciBzYW1wbGUgPSB4LnNsaWNlKCk7XG5cbiAgICAvLyBhbmQgdGhlbiBzaHVmZmxlIHRoYXQgc2hhbGxvdy1jb3BpZWQgYXJyYXksIGluIHBsYWNlXG4gICAgcmV0dXJuIHNodWZmbGVJblBsYWNlKHNhbXBsZS5zbGljZSgpLCByYW5kb21Tb3VyY2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaHVmZmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NodWZmbGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogQSBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyJUUyJTgwJTkzWWF0ZXNfc2h1ZmZsZSlcbiAqIGluLXBsYWNlIC0gd2hpY2ggbWVhbnMgdGhhdCBpdCAqKndpbGwgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgb3JpZ2luYWxcbiAqIGFycmF5IGJ5IHJlZmVyZW5jZSoqLlxuICpcbiAqIFRoaXMgaXMgYW4gYWxnb3JpdGhtIHRoYXQgZ2VuZXJhdGVzIGEgcmFuZG9tIFtwZXJtdXRhdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGVybXV0YXRpb24pXG4gKiBvZiBhIHNldC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBudW1iZXJzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmFuZG9tU291cmNlPU1hdGgucmFuZG9tXSBhbiBvcHRpb25hbCBlbnRyb3B5IHNvdXJjZSB0aGF0XG4gKiByZXR1cm5zIG51bWJlcnMgYmV0d2VlbiAwIGluY2x1c2l2ZSBhbmQgMSBleGNsdXNpdmU6IHRoZSByYW5nZSBbMCwgMSlcbiAqIEByZXR1cm5zIHtBcnJheX0geFxuICogQGV4YW1wbGVcbiAqIHZhciB4ID0gWzEsIDIsIDMsIDRdO1xuICogc2h1ZmZsZUluUGxhY2UoeCk7XG4gKiAvLyB4IGlzIHNodWZmbGVkIHRvIGEgdmFsdWUgbGlrZSBbMiwgMSwgNCwgM11cbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZUluUGxhY2UoeC8qOiBBcnJheTxhbnk+ICovLCByYW5kb21Tb3VyY2UvKjogP0Z1bmN0aW9uICovKS8qOiBBcnJheTxhbnk+ICovIHtcblxuICAgIC8vIGEgY3VzdG9tIHJhbmRvbSBudW1iZXIgc291cmNlIGNhbiBiZSBwcm92aWRlZCBpZiB5b3Ugd2FudCB0byB1c2VcbiAgICAvLyBhIGZpeGVkIHNlZWQgb3IgYW5vdGhlciByYW5kb20gbnVtYmVyIGdlbmVyYXRvciwgbGlrZVxuICAgIC8vIFtyYW5kb20tanNdKGh0dHBzOi8vd3d3Lm5wbWpzLm9yZy9wYWNrYWdlL3JhbmRvbS1qcylcbiAgICByYW5kb21Tb3VyY2UgPSByYW5kb21Tb3VyY2UgfHwgTWF0aC5yYW5kb207XG5cbiAgICAvLyBzdG9yZSB0aGUgY3VycmVudCBsZW5ndGggb2YgdGhlIHggdG8gZGV0ZXJtaW5lXG4gICAgLy8gd2hlbiBubyBlbGVtZW50cyByZW1haW4gdG8gc2h1ZmZsZS5cbiAgICB2YXIgbGVuZ3RoID0geC5sZW5ndGg7XG5cbiAgICAvLyB0ZW1wb3JhcnkgaXMgdXNlZCB0byBob2xkIGFuIGl0ZW0gd2hlbiBpdCBpcyBiZWluZ1xuICAgIC8vIHN3YXBwZWQgYmV0d2VlbiBpbmRpY2VzLlxuICAgIHZhciB0ZW1wb3Jhcnk7XG5cbiAgICAvLyBUaGUgaW5kZXggdG8gc3dhcCBhdCBlYWNoIHN0YWdlLlxuICAgIHZhciBpbmRleDtcblxuICAgIC8vIFdoaWxlIHRoZXJlIGFyZSBzdGlsbCBpdGVtcyB0byBzaHVmZmxlXG4gICAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gY2hvc2UgYSByYW5kb20gaW5kZXggd2l0aGluIHRoZSBzdWJzZXQgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIHRoYXQgaXMgbm90IHlldCBzaHVmZmxlZFxuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IocmFuZG9tU291cmNlKCkgKiBsZW5ndGgtLSk7XG5cbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlIHRoYXQgd2UnbGwgbW92ZSB0ZW1wb3JhcmlseVxuICAgICAgICB0ZW1wb3JhcnkgPSB4W2xlbmd0aF07XG5cbiAgICAgICAgLy8gc3dhcCB0aGUgdmFsdWUgYXQgYHhbbGVuZ3RoXWAgd2l0aCBgeFtpbmRleF1gXG4gICAgICAgIHhbbGVuZ3RoXSA9IHhbaW5kZXhdO1xuICAgICAgICB4W2luZGV4XSA9IHRlbXBvcmFyeTtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2h1ZmZsZUluUGxhY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2h1ZmZsZV9pbl9wbGFjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBGb3IgYSBzb3J0ZWQgaW5wdXQsIGNvdW50aW5nIHRoZSBudW1iZXIgb2YgdW5pcXVlIHZhbHVlc1xuICogaXMgcG9zc2libGUgaW4gY29uc3RhbnQgdGltZSBhbmQgY29uc3RhbnQgbWVtb3J5LiBUaGlzIGlzXG4gKiBhIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYWxnb3JpdGhtLlxuICpcbiAqIFZhbHVlcyBhcmUgY29tcGFyZWQgd2l0aCBgPT09YCwgc28gb2JqZWN0cyBhbmQgbm9uLXByaW1pdGl2ZSBvYmplY3RzXG4gKiBhcmUgbm90IGhhbmRsZWQgaW4gYW55IHNwZWNpYWwgd2F5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IHggYW4gYXJyYXkgb2YgYW55IGtpbmQgb2YgdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGNvdW50IG9mIHVuaXF1ZSB2YWx1ZXNcbiAqIEBleGFtcGxlXG4gKiB1bmlxdWVDb3VudFNvcnRlZChbMSwgMiwgM10pOyAvLyA9PiAzXG4gKiB1bmlxdWVDb3VudFNvcnRlZChbMSwgMSwgMV0pOyAvLyA9PiAxXG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZUNvdW50U29ydGVkKHgvKjogQXJyYXk8YW55PiovKS8qOiBudW1iZXIgKi8ge1xuICAgIHZhciB1bmlxdWVWYWx1ZUNvdW50ID0gMCxcbiAgICAgICAgbGFzdFNlZW5WYWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDAgfHwgeFtpXSAhPT0gbGFzdFNlZW5WYWx1ZSkge1xuICAgICAgICAgICAgbGFzdFNlZW5WYWx1ZSA9IHhbaV07XG4gICAgICAgICAgICB1bmlxdWVWYWx1ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaXF1ZVZhbHVlQ291bnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXF1ZUNvdW50U29ydGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3VuaXF1ZV9jb3VudF9zb3J0ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBtZWFuIGZyb20gJy4vbWVhbic7XG5cbi8qKlxuICogW1NhbXBsZSBjb3ZhcmlhbmNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TYW1wbGVfbWVhbl9hbmRfc2FtcGxlQ292YXJpYW5jZSkgb2YgdHdvIGRhdGFzZXRzOlxuICogaG93IG11Y2ggZG8gdGhlIHR3byBkYXRhc2V0cyBtb3ZlIHRvZ2V0aGVyP1xuICogeCBhbmQgeSBhcmUgdHdvIGRhdGFzZXRzLCByZXByZXNlbnRlZCBhcyBhcnJheXMgb2YgbnVtYmVycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBzYW1wbGUgb2YgdHdvIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geSBhIHNhbXBsZSBvZiB0d28gb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHRocm93cyB7RXJyb3J9IGlmIHggYW5kIHkgZG8gbm90IGhhdmUgZXF1YWwgbGVuZ3Roc1xuICogQHRocm93cyB7RXJyb3J9IGlmIHggb3IgeSBoYXZlIGxlbmd0aCBvZiBvbmUgb3IgbGVzc1xuICogQHJldHVybnMge251bWJlcn0gc2FtcGxlIGNvdmFyaWFuY2VcbiAqIEBleGFtcGxlXG4gKiBzYW1wbGVDb3ZhcmlhbmNlKFsxLCAyLCAzLCA0LCA1LCA2XSwgWzYsIDUsIDQsIDMsIDIsIDFdKTsgLy8gPT4gLTMuNVxuICovXG5mdW5jdGlvbiBzYW1wbGVDb3ZhcmlhbmNlKHggLyo6QXJyYXk8bnVtYmVyPiovLCB5IC8qOkFycmF5PG51bWJlcj4qLykvKjpudW1iZXIqLyB7XG5cbiAgICAvLyBUaGUgdHdvIGRhdGFzZXRzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGggd2hpY2ggbXVzdCBiZSBtb3JlIHRoYW4gMVxuICAgIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzYW1wbGVDb3ZhcmlhbmNlIHJlcXVpcmVzIHNhbXBsZXMgd2l0aCBlcXVhbCBsZW5ndGhzJyk7XG4gICAgfVxuXG4gICAgaWYgKHgubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NhbXBsZUNvdmFyaWFuY2UgcmVxdWlyZXMgYXQgbGVhc3QgdHdvIGRhdGEgcG9pbnRzIGluIGVhY2ggc2FtcGxlJyk7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRoZSBtZWFuIG9mIGVhY2ggZGF0YXNldCBzbyB0aGF0IHdlIGNhbiBqdWRnZSBlYWNoXG4gICAgLy8gdmFsdWUgb2YgdGhlIGRhdGFzZXQgZmFpcmx5IGFzIHRoZSBkaWZmZXJlbmNlIGZyb20gdGhlIG1lYW4uIHRoaXNcbiAgICAvLyB3YXksIGlmIG9uZSBkYXRhc2V0IGlzIFsxLCAyLCAzXSBhbmQgWzIsIDMsIDRdLCB0aGVpciBjb3ZhcmlhbmNlXG4gICAgLy8gZG9lcyBub3Qgc3VmZmVyIGJlY2F1c2Ugb2YgdGhlIGRpZmZlcmVuY2UgaW4gYWJzb2x1dGUgdmFsdWVzXG4gICAgdmFyIHhtZWFuID0gbWVhbih4KSxcbiAgICAgICAgeW1lYW4gPSBtZWFuKHkpLFxuICAgICAgICBzdW0gPSAwO1xuXG4gICAgLy8gZm9yIGVhY2ggcGFpciBvZiB2YWx1ZXMsIHRoZSBjb3ZhcmlhbmNlIGluY3JlYXNlcyB3aGVuIHRoZWlyXG4gICAgLy8gZGlmZmVyZW5jZSBmcm9tIHRoZSBtZWFuIGlzIGFzc29jaWF0ZWQgLSBpZiBib3RoIGFyZSB3ZWxsIGFib3ZlXG4gICAgLy8gb3IgaWYgYm90aCBhcmUgd2VsbCBiZWxvd1xuICAgIC8vIHRoZSBtZWFuLCB0aGUgY292YXJpYW5jZSBpbmNyZWFzZXMgc2lnbmlmaWNhbnRseS5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3VtICs9ICh4W2ldIC0geG1lYW4pICogKHlbaV0gLSB5bWVhbik7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBCZXNzZWxzJyBDb3JyZWN0aW9uOiBhbiBhZGp1c3RtZW50IG1hZGUgdG8gc2FtcGxlIHN0YXRpc3RpY3NcbiAgICAvLyB0aGF0IGFsbG93cyBmb3IgdGhlIHJlZHVjZWQgZGVncmVlIG9mIGZyZWVkb20gZW50YWlsZWQgaW4gY2FsY3VsYXRpbmdcbiAgICAvLyB2YWx1ZXMgZnJvbSBzYW1wbGVzIHJhdGhlciB0aGFuIGNvbXBsZXRlIHBvcHVsYXRpb25zLlxuICAgIHZhciBiZXNzZWxzQ29ycmVjdGlvbiA9IHgubGVuZ3RoIC0gMTtcblxuICAgIC8vIHRoZSBjb3ZhcmlhbmNlIGlzIHdlaWdodGVkIGJ5IHRoZSBsZW5ndGggb2YgdGhlIGRhdGFzZXRzLlxuICAgIHJldHVybiBzdW0gLyBiZXNzZWxzQ29ycmVjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlQ292YXJpYW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGVfY292YXJpYW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXaGVuIGNvbWJpbmluZyB0d28gbGlzdHMgb2YgdmFsdWVzIGZvciB3aGljaCBvbmUgYWxyZWFkeSBrbm93cyB0aGUgbWVhbnMsXG4gKiBvbmUgZG9lcyBub3QgaGF2ZSB0byBuZWNlc3NhcnkgcmVjb21wdXRlIHRoZSBtZWFuIG9mIHRoZSBjb21iaW5lZCBsaXN0cyBpblxuICogbGluZWFyIHRpbWUuIFRoZXkgY2FuIGluc3RlYWQgdXNlIHRoaXMgZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgY29tYmluZWRcbiAqIG1lYW4gYnkgcHJvdmlkaW5nIHRoZSBtZWFuICYgbnVtYmVyIG9mIHZhbHVlcyBvZiB0aGUgZmlyc3QgbGlzdCBhbmQgdGhlIG1lYW5cbiAqICYgbnVtYmVyIG9mIHZhbHVlcyBvZiB0aGUgc2Vjb25kIGxpc3QuXG4gKlxuICogQHNpbmNlIDMuMC4wXG4gKiBAcGFyYW0ge251bWJlcn0gbWVhbjEgbWVhbiBvZiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4xIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW4yIG1lYW4gb2YgdGhlIHNlY29uZCBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbjIgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBzZWNvbmQgbGlzdFxuICogQHJldHVybnMge251bWJlcn0gdGhlIGNvbWJpbmVkIG1lYW5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29tYmluZU1lYW5zKDUsIDMsIDQsIDMpOyAvLyA9PiA0LjVcbiAqL1xuZnVuY3Rpb24gY29tYmluZU1lYW5zKG1lYW4xIC8qOiBudW1iZXIqLywgbjEvKjogbnVtYmVyICovLCBtZWFuMiAvKjogbnVtYmVyKi8sIG4yLyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICByZXR1cm4gKG1lYW4xICogbjEgKyBtZWFuMiAqIG4yKSAvIChuMSArIG4yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZU1lYW5zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmVfbWVhbnMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogKipQZXJjZW50YWdlIFBvaW50cyBvZiB0aGUgz4cyIChDaGktU3F1YXJlZCkgRGlzdHJpYnV0aW9uKipcbiAqXG4gKiBUaGUgW8+HMiAoQ2hpLVNxdWFyZWQpIERpc3RyaWJ1dGlvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DaGktc3F1YXJlZF9kaXN0cmlidXRpb24pIGlzIHVzZWQgaW4gdGhlIGNvbW1vblxuICogY2hpLXNxdWFyZWQgdGVzdHMgZm9yIGdvb2RuZXNzIG9mIGZpdCBvZiBhbiBvYnNlcnZlZCBkaXN0cmlidXRpb24gdG8gYSB0aGVvcmV0aWNhbCBvbmUsIHRoZSBpbmRlcGVuZGVuY2Ugb2YgdHdvXG4gKiBjcml0ZXJpYSBvZiBjbGFzc2lmaWNhdGlvbiBvZiBxdWFsaXRhdGl2ZSBkYXRhLCBhbmQgaW4gY29uZmlkZW5jZSBpbnRlcnZhbCBlc3RpbWF0aW9uIGZvciBhIHBvcHVsYXRpb24gc3RhbmRhcmRcbiAqIGRldmlhdGlvbiBvZiBhIG5vcm1hbCBkaXN0cmlidXRpb24gZnJvbSBhIHNhbXBsZSBzdGFuZGFyZCBkZXZpYXRpb24uXG4gKlxuICogVmFsdWVzIGZyb20gQXBwZW5kaXggMSwgVGFibGUgSUlJIG9mIFdpbGxpYW0gVy4gSGluZXMgJiBEb3VnbGFzIEMuIE1vbnRnb21lcnksIFwiUHJvYmFiaWxpdHkgYW5kIFN0YXRpc3RpY3MgaW5cbiAqIEVuZ2luZWVyaW5nIGFuZCBNYW5hZ2VtZW50IFNjaWVuY2VcIiwgV2lsZXkgKDE5ODApLlxuICovXG52YXIgY2hpU3F1YXJlZERpc3RyaWJ1dGlvblRhYmxlID0ge1xuICAgICcxJzoge1xuICAgICAgICAnMC45OTUnOiAwLFxuICAgICAgICAnMC45OSc6IDAsXG4gICAgICAgICcwLjk3NSc6IDAsXG4gICAgICAgICcwLjk1JzogMCxcbiAgICAgICAgJzAuOSc6IDAuMDIsXG4gICAgICAgICcwLjUnOiAwLjQ1LFxuICAgICAgICAnMC4xJzogMi43MSxcbiAgICAgICAgJzAuMDUnOiAzLjg0LFxuICAgICAgICAnMC4wMjUnOiA1LjAyLFxuICAgICAgICAnMC4wMSc6IDYuNjMsXG4gICAgICAgICcwLjAwNSc6IDcuODhcbiAgICB9LFxuICAgICcyJzoge1xuICAgICAgICAnMC45OTUnOiAwLjAxLFxuICAgICAgICAnMC45OSc6IDAuMDIsXG4gICAgICAgICcwLjk3NSc6IDAuMDUsXG4gICAgICAgICcwLjk1JzogMC4xLFxuICAgICAgICAnMC45JzogMC4yMSxcbiAgICAgICAgJzAuNSc6IDEuMzksXG4gICAgICAgICcwLjEnOiA0LjYxLFxuICAgICAgICAnMC4wNSc6IDUuOTksXG4gICAgICAgICcwLjAyNSc6IDcuMzgsXG4gICAgICAgICcwLjAxJzogOS4yMSxcbiAgICAgICAgJzAuMDA1JzogMTAuNlxuICAgIH0sXG4gICAgJzMnOiB7XG4gICAgICAgICcwLjk5NSc6IDAuMDcsXG4gICAgICAgICcwLjk5JzogMC4xMSxcbiAgICAgICAgJzAuOTc1JzogMC4yMixcbiAgICAgICAgJzAuOTUnOiAwLjM1LFxuICAgICAgICAnMC45JzogMC41OCxcbiAgICAgICAgJzAuNSc6IDIuMzcsXG4gICAgICAgICcwLjEnOiA2LjI1LFxuICAgICAgICAnMC4wNSc6IDcuODEsXG4gICAgICAgICcwLjAyNSc6IDkuMzUsXG4gICAgICAgICcwLjAxJzogMTEuMzQsXG4gICAgICAgICcwLjAwNSc6IDEyLjg0XG4gICAgfSxcbiAgICAnNCc6IHtcbiAgICAgICAgJzAuOTk1JzogMC4yMSxcbiAgICAgICAgJzAuOTknOiAwLjMsXG4gICAgICAgICcwLjk3NSc6IDAuNDgsXG4gICAgICAgICcwLjk1JzogMC43MSxcbiAgICAgICAgJzAuOSc6IDEuMDYsXG4gICAgICAgICcwLjUnOiAzLjM2LFxuICAgICAgICAnMC4xJzogNy43OCxcbiAgICAgICAgJzAuMDUnOiA5LjQ5LFxuICAgICAgICAnMC4wMjUnOiAxMS4xNCxcbiAgICAgICAgJzAuMDEnOiAxMy4yOCxcbiAgICAgICAgJzAuMDA1JzogMTQuODZcbiAgICB9LFxuICAgICc1Jzoge1xuICAgICAgICAnMC45OTUnOiAwLjQxLFxuICAgICAgICAnMC45OSc6IDAuNTUsXG4gICAgICAgICcwLjk3NSc6IDAuODMsXG4gICAgICAgICcwLjk1JzogMS4xNSxcbiAgICAgICAgJzAuOSc6IDEuNjEsXG4gICAgICAgICcwLjUnOiA0LjM1LFxuICAgICAgICAnMC4xJzogOS4yNCxcbiAgICAgICAgJzAuMDUnOiAxMS4wNyxcbiAgICAgICAgJzAuMDI1JzogMTIuODMsXG4gICAgICAgICcwLjAxJzogMTUuMDksXG4gICAgICAgICcwLjAwNSc6IDE2Ljc1XG4gICAgfSxcbiAgICAnNic6IHtcbiAgICAgICAgJzAuOTk1JzogMC42OCxcbiAgICAgICAgJzAuOTknOiAwLjg3LFxuICAgICAgICAnMC45NzUnOiAxLjI0LFxuICAgICAgICAnMC45NSc6IDEuNjQsXG4gICAgICAgICcwLjknOiAyLjIsXG4gICAgICAgICcwLjUnOiA1LjM1LFxuICAgICAgICAnMC4xJzogMTAuNjUsXG4gICAgICAgICcwLjA1JzogMTIuNTksXG4gICAgICAgICcwLjAyNSc6IDE0LjQ1LFxuICAgICAgICAnMC4wMSc6IDE2LjgxLFxuICAgICAgICAnMC4wMDUnOiAxOC41NVxuICAgIH0sXG4gICAgJzcnOiB7XG4gICAgICAgICcwLjk5NSc6IDAuOTksXG4gICAgICAgICcwLjk5JzogMS4yNSxcbiAgICAgICAgJzAuOTc1JzogMS42OSxcbiAgICAgICAgJzAuOTUnOiAyLjE3LFxuICAgICAgICAnMC45JzogMi44MyxcbiAgICAgICAgJzAuNSc6IDYuMzUsXG4gICAgICAgICcwLjEnOiAxMi4wMixcbiAgICAgICAgJzAuMDUnOiAxNC4wNyxcbiAgICAgICAgJzAuMDI1JzogMTYuMDEsXG4gICAgICAgICcwLjAxJzogMTguNDgsXG4gICAgICAgICcwLjAwNSc6IDIwLjI4XG4gICAgfSxcbiAgICAnOCc6IHtcbiAgICAgICAgJzAuOTk1JzogMS4zNCxcbiAgICAgICAgJzAuOTknOiAxLjY1LFxuICAgICAgICAnMC45NzUnOiAyLjE4LFxuICAgICAgICAnMC45NSc6IDIuNzMsXG4gICAgICAgICcwLjknOiAzLjQ5LFxuICAgICAgICAnMC41JzogNy4zNCxcbiAgICAgICAgJzAuMSc6IDEzLjM2LFxuICAgICAgICAnMC4wNSc6IDE1LjUxLFxuICAgICAgICAnMC4wMjUnOiAxNy41MyxcbiAgICAgICAgJzAuMDEnOiAyMC4wOSxcbiAgICAgICAgJzAuMDA1JzogMjEuOTZcbiAgICB9LFxuICAgICc5Jzoge1xuICAgICAgICAnMC45OTUnOiAxLjczLFxuICAgICAgICAnMC45OSc6IDIuMDksXG4gICAgICAgICcwLjk3NSc6IDIuNyxcbiAgICAgICAgJzAuOTUnOiAzLjMzLFxuICAgICAgICAnMC45JzogNC4xNyxcbiAgICAgICAgJzAuNSc6IDguMzQsXG4gICAgICAgICcwLjEnOiAxNC42OCxcbiAgICAgICAgJzAuMDUnOiAxNi45MixcbiAgICAgICAgJzAuMDI1JzogMTkuMDIsXG4gICAgICAgICcwLjAxJzogMjEuNjcsXG4gICAgICAgICcwLjAwNSc6IDIzLjU5XG4gICAgfSxcbiAgICAnMTAnOiB7XG4gICAgICAgICcwLjk5NSc6IDIuMTYsXG4gICAgICAgICcwLjk5JzogMi41NixcbiAgICAgICAgJzAuOTc1JzogMy4yNSxcbiAgICAgICAgJzAuOTUnOiAzLjk0LFxuICAgICAgICAnMC45JzogNC44NyxcbiAgICAgICAgJzAuNSc6IDkuMzQsXG4gICAgICAgICcwLjEnOiAxNS45OSxcbiAgICAgICAgJzAuMDUnOiAxOC4zMSxcbiAgICAgICAgJzAuMDI1JzogMjAuNDgsXG4gICAgICAgICcwLjAxJzogMjMuMjEsXG4gICAgICAgICcwLjAwNSc6IDI1LjE5XG4gICAgfSxcbiAgICAnMTEnOiB7XG4gICAgICAgICcwLjk5NSc6IDIuNixcbiAgICAgICAgJzAuOTknOiAzLjA1LFxuICAgICAgICAnMC45NzUnOiAzLjgyLFxuICAgICAgICAnMC45NSc6IDQuNTcsXG4gICAgICAgICcwLjknOiA1LjU4LFxuICAgICAgICAnMC41JzogMTAuMzQsXG4gICAgICAgICcwLjEnOiAxNy4yOCxcbiAgICAgICAgJzAuMDUnOiAxOS42OCxcbiAgICAgICAgJzAuMDI1JzogMjEuOTIsXG4gICAgICAgICcwLjAxJzogMjQuNzIsXG4gICAgICAgICcwLjAwNSc6IDI2Ljc2XG4gICAgfSxcbiAgICAnMTInOiB7XG4gICAgICAgICcwLjk5NSc6IDMuMDcsXG4gICAgICAgICcwLjk5JzogMy41NyxcbiAgICAgICAgJzAuOTc1JzogNC40LFxuICAgICAgICAnMC45NSc6IDUuMjMsXG4gICAgICAgICcwLjknOiA2LjMsXG4gICAgICAgICcwLjUnOiAxMS4zNCxcbiAgICAgICAgJzAuMSc6IDE4LjU1LFxuICAgICAgICAnMC4wNSc6IDIxLjAzLFxuICAgICAgICAnMC4wMjUnOiAyMy4zNCxcbiAgICAgICAgJzAuMDEnOiAyNi4yMixcbiAgICAgICAgJzAuMDA1JzogMjguM1xuICAgIH0sXG4gICAgJzEzJzoge1xuICAgICAgICAnMC45OTUnOiAzLjU3LFxuICAgICAgICAnMC45OSc6IDQuMTEsXG4gICAgICAgICcwLjk3NSc6IDUuMDEsXG4gICAgICAgICcwLjk1JzogNS44OSxcbiAgICAgICAgJzAuOSc6IDcuMDQsXG4gICAgICAgICcwLjUnOiAxMi4zNCxcbiAgICAgICAgJzAuMSc6IDE5LjgxLFxuICAgICAgICAnMC4wNSc6IDIyLjM2LFxuICAgICAgICAnMC4wMjUnOiAyNC43NCxcbiAgICAgICAgJzAuMDEnOiAyNy42OSxcbiAgICAgICAgJzAuMDA1JzogMjkuODJcbiAgICB9LFxuICAgICcxNCc6IHtcbiAgICAgICAgJzAuOTk1JzogNC4wNyxcbiAgICAgICAgJzAuOTknOiA0LjY2LFxuICAgICAgICAnMC45NzUnOiA1LjYzLFxuICAgICAgICAnMC45NSc6IDYuNTcsXG4gICAgICAgICcwLjknOiA3Ljc5LFxuICAgICAgICAnMC41JzogMTMuMzQsXG4gICAgICAgICcwLjEnOiAyMS4wNixcbiAgICAgICAgJzAuMDUnOiAyMy42OCxcbiAgICAgICAgJzAuMDI1JzogMjYuMTIsXG4gICAgICAgICcwLjAxJzogMjkuMTQsXG4gICAgICAgICcwLjAwNSc6IDMxLjMyXG4gICAgfSxcbiAgICAnMTUnOiB7XG4gICAgICAgICcwLjk5NSc6IDQuNixcbiAgICAgICAgJzAuOTknOiA1LjIzLFxuICAgICAgICAnMC45NzUnOiA2LjI3LFxuICAgICAgICAnMC45NSc6IDcuMjYsXG4gICAgICAgICcwLjknOiA4LjU1LFxuICAgICAgICAnMC41JzogMTQuMzQsXG4gICAgICAgICcwLjEnOiAyMi4zMSxcbiAgICAgICAgJzAuMDUnOiAyNSxcbiAgICAgICAgJzAuMDI1JzogMjcuNDksXG4gICAgICAgICcwLjAxJzogMzAuNTgsXG4gICAgICAgICcwLjAwNSc6IDMyLjhcbiAgICB9LFxuICAgICcxNic6IHtcbiAgICAgICAgJzAuOTk1JzogNS4xNCxcbiAgICAgICAgJzAuOTknOiA1LjgxLFxuICAgICAgICAnMC45NzUnOiA2LjkxLFxuICAgICAgICAnMC45NSc6IDcuOTYsXG4gICAgICAgICcwLjknOiA5LjMxLFxuICAgICAgICAnMC41JzogMTUuMzQsXG4gICAgICAgICcwLjEnOiAyMy41NCxcbiAgICAgICAgJzAuMDUnOiAyNi4zLFxuICAgICAgICAnMC4wMjUnOiAyOC44NSxcbiAgICAgICAgJzAuMDEnOiAzMixcbiAgICAgICAgJzAuMDA1JzogMzQuMjdcbiAgICB9LFxuICAgICcxNyc6IHtcbiAgICAgICAgJzAuOTk1JzogNS43LFxuICAgICAgICAnMC45OSc6IDYuNDEsXG4gICAgICAgICcwLjk3NSc6IDcuNTYsXG4gICAgICAgICcwLjk1JzogOC42NyxcbiAgICAgICAgJzAuOSc6IDEwLjA5LFxuICAgICAgICAnMC41JzogMTYuMzQsXG4gICAgICAgICcwLjEnOiAyNC43NyxcbiAgICAgICAgJzAuMDUnOiAyNy41OSxcbiAgICAgICAgJzAuMDI1JzogMzAuMTksXG4gICAgICAgICcwLjAxJzogMzMuNDEsXG4gICAgICAgICcwLjAwNSc6IDM1LjcyXG4gICAgfSxcbiAgICAnMTgnOiB7XG4gICAgICAgICcwLjk5NSc6IDYuMjYsXG4gICAgICAgICcwLjk5JzogNy4wMSxcbiAgICAgICAgJzAuOTc1JzogOC4yMyxcbiAgICAgICAgJzAuOTUnOiA5LjM5LFxuICAgICAgICAnMC45JzogMTAuODcsXG4gICAgICAgICcwLjUnOiAxNy4zNCxcbiAgICAgICAgJzAuMSc6IDI1Ljk5LFxuICAgICAgICAnMC4wNSc6IDI4Ljg3LFxuICAgICAgICAnMC4wMjUnOiAzMS41MyxcbiAgICAgICAgJzAuMDEnOiAzNC44MSxcbiAgICAgICAgJzAuMDA1JzogMzcuMTZcbiAgICB9LFxuICAgICcxOSc6IHtcbiAgICAgICAgJzAuOTk1JzogNi44NCxcbiAgICAgICAgJzAuOTknOiA3LjYzLFxuICAgICAgICAnMC45NzUnOiA4LjkxLFxuICAgICAgICAnMC45NSc6IDEwLjEyLFxuICAgICAgICAnMC45JzogMTEuNjUsXG4gICAgICAgICcwLjUnOiAxOC4zNCxcbiAgICAgICAgJzAuMSc6IDI3LjIsXG4gICAgICAgICcwLjA1JzogMzAuMTQsXG4gICAgICAgICcwLjAyNSc6IDMyLjg1LFxuICAgICAgICAnMC4wMSc6IDM2LjE5LFxuICAgICAgICAnMC4wMDUnOiAzOC41OFxuICAgIH0sXG4gICAgJzIwJzoge1xuICAgICAgICAnMC45OTUnOiA3LjQzLFxuICAgICAgICAnMC45OSc6IDguMjYsXG4gICAgICAgICcwLjk3NSc6IDkuNTksXG4gICAgICAgICcwLjk1JzogMTAuODUsXG4gICAgICAgICcwLjknOiAxMi40NCxcbiAgICAgICAgJzAuNSc6IDE5LjM0LFxuICAgICAgICAnMC4xJzogMjguNDEsXG4gICAgICAgICcwLjA1JzogMzEuNDEsXG4gICAgICAgICcwLjAyNSc6IDM0LjE3LFxuICAgICAgICAnMC4wMSc6IDM3LjU3LFxuICAgICAgICAnMC4wMDUnOiA0MFxuICAgIH0sXG4gICAgJzIxJzoge1xuICAgICAgICAnMC45OTUnOiA4LjAzLFxuICAgICAgICAnMC45OSc6IDguOSxcbiAgICAgICAgJzAuOTc1JzogMTAuMjgsXG4gICAgICAgICcwLjk1JzogMTEuNTksXG4gICAgICAgICcwLjknOiAxMy4yNCxcbiAgICAgICAgJzAuNSc6IDIwLjM0LFxuICAgICAgICAnMC4xJzogMjkuNjIsXG4gICAgICAgICcwLjA1JzogMzIuNjcsXG4gICAgICAgICcwLjAyNSc6IDM1LjQ4LFxuICAgICAgICAnMC4wMSc6IDM4LjkzLFxuICAgICAgICAnMC4wMDUnOiA0MS40XG4gICAgfSxcbiAgICAnMjInOiB7XG4gICAgICAgICcwLjk5NSc6IDguNjQsXG4gICAgICAgICcwLjk5JzogOS41NCxcbiAgICAgICAgJzAuOTc1JzogMTAuOTgsXG4gICAgICAgICcwLjk1JzogMTIuMzQsXG4gICAgICAgICcwLjknOiAxNC4wNCxcbiAgICAgICAgJzAuNSc6IDIxLjM0LFxuICAgICAgICAnMC4xJzogMzAuODEsXG4gICAgICAgICcwLjA1JzogMzMuOTIsXG4gICAgICAgICcwLjAyNSc6IDM2Ljc4LFxuICAgICAgICAnMC4wMSc6IDQwLjI5LFxuICAgICAgICAnMC4wMDUnOiA0Mi44XG4gICAgfSxcbiAgICAnMjMnOiB7XG4gICAgICAgICcwLjk5NSc6IDkuMjYsXG4gICAgICAgICcwLjk5JzogMTAuMixcbiAgICAgICAgJzAuOTc1JzogMTEuNjksXG4gICAgICAgICcwLjk1JzogMTMuMDksXG4gICAgICAgICcwLjknOiAxNC44NSxcbiAgICAgICAgJzAuNSc6IDIyLjM0LFxuICAgICAgICAnMC4xJzogMzIuMDEsXG4gICAgICAgICcwLjA1JzogMzUuMTcsXG4gICAgICAgICcwLjAyNSc6IDM4LjA4LFxuICAgICAgICAnMC4wMSc6IDQxLjY0LFxuICAgICAgICAnMC4wMDUnOiA0NC4xOFxuICAgIH0sXG4gICAgJzI0Jzoge1xuICAgICAgICAnMC45OTUnOiA5Ljg5LFxuICAgICAgICAnMC45OSc6IDEwLjg2LFxuICAgICAgICAnMC45NzUnOiAxMi40LFxuICAgICAgICAnMC45NSc6IDEzLjg1LFxuICAgICAgICAnMC45JzogMTUuNjYsXG4gICAgICAgICcwLjUnOiAyMy4zNCxcbiAgICAgICAgJzAuMSc6IDMzLjIsXG4gICAgICAgICcwLjA1JzogMzYuNDIsXG4gICAgICAgICcwLjAyNSc6IDM5LjM2LFxuICAgICAgICAnMC4wMSc6IDQyLjk4LFxuICAgICAgICAnMC4wMDUnOiA0NS41NlxuICAgIH0sXG4gICAgJzI1Jzoge1xuICAgICAgICAnMC45OTUnOiAxMC41MixcbiAgICAgICAgJzAuOTknOiAxMS41MixcbiAgICAgICAgJzAuOTc1JzogMTMuMTIsXG4gICAgICAgICcwLjk1JzogMTQuNjEsXG4gICAgICAgICcwLjknOiAxNi40NyxcbiAgICAgICAgJzAuNSc6IDI0LjM0LFxuICAgICAgICAnMC4xJzogMzQuMjgsXG4gICAgICAgICcwLjA1JzogMzcuNjUsXG4gICAgICAgICcwLjAyNSc6IDQwLjY1LFxuICAgICAgICAnMC4wMSc6IDQ0LjMxLFxuICAgICAgICAnMC4wMDUnOiA0Ni45M1xuICAgIH0sXG4gICAgJzI2Jzoge1xuICAgICAgICAnMC45OTUnOiAxMS4xNixcbiAgICAgICAgJzAuOTknOiAxMi4yLFxuICAgICAgICAnMC45NzUnOiAxMy44NCxcbiAgICAgICAgJzAuOTUnOiAxNS4zOCxcbiAgICAgICAgJzAuOSc6IDE3LjI5LFxuICAgICAgICAnMC41JzogMjUuMzQsXG4gICAgICAgICcwLjEnOiAzNS41NixcbiAgICAgICAgJzAuMDUnOiAzOC44OSxcbiAgICAgICAgJzAuMDI1JzogNDEuOTIsXG4gICAgICAgICcwLjAxJzogNDUuNjQsXG4gICAgICAgICcwLjAwNSc6IDQ4LjI5XG4gICAgfSxcbiAgICAnMjcnOiB7XG4gICAgICAgICcwLjk5NSc6IDExLjgxLFxuICAgICAgICAnMC45OSc6IDEyLjg4LFxuICAgICAgICAnMC45NzUnOiAxNC41NyxcbiAgICAgICAgJzAuOTUnOiAxNi4xNSxcbiAgICAgICAgJzAuOSc6IDE4LjExLFxuICAgICAgICAnMC41JzogMjYuMzQsXG4gICAgICAgICcwLjEnOiAzNi43NCxcbiAgICAgICAgJzAuMDUnOiA0MC4xMSxcbiAgICAgICAgJzAuMDI1JzogNDMuMTksXG4gICAgICAgICcwLjAxJzogNDYuOTYsXG4gICAgICAgICcwLjAwNSc6IDQ5LjY1XG4gICAgfSxcbiAgICAnMjgnOiB7XG4gICAgICAgICcwLjk5NSc6IDEyLjQ2LFxuICAgICAgICAnMC45OSc6IDEzLjU3LFxuICAgICAgICAnMC45NzUnOiAxNS4zMSxcbiAgICAgICAgJzAuOTUnOiAxNi45MyxcbiAgICAgICAgJzAuOSc6IDE4Ljk0LFxuICAgICAgICAnMC41JzogMjcuMzQsXG4gICAgICAgICcwLjEnOiAzNy45MixcbiAgICAgICAgJzAuMDUnOiA0MS4zNCxcbiAgICAgICAgJzAuMDI1JzogNDQuNDYsXG4gICAgICAgICcwLjAxJzogNDguMjgsXG4gICAgICAgICcwLjAwNSc6IDUwLjk5XG4gICAgfSxcbiAgICAnMjknOiB7XG4gICAgICAgICcwLjk5NSc6IDEzLjEyLFxuICAgICAgICAnMC45OSc6IDE0LjI2LFxuICAgICAgICAnMC45NzUnOiAxNi4wNSxcbiAgICAgICAgJzAuOTUnOiAxNy43MSxcbiAgICAgICAgJzAuOSc6IDE5Ljc3LFxuICAgICAgICAnMC41JzogMjguMzQsXG4gICAgICAgICcwLjEnOiAzOS4wOSxcbiAgICAgICAgJzAuMDUnOiA0Mi41NixcbiAgICAgICAgJzAuMDI1JzogNDUuNzIsXG4gICAgICAgICcwLjAxJzogNDkuNTksXG4gICAgICAgICcwLjAwNSc6IDUyLjM0XG4gICAgfSxcbiAgICAnMzAnOiB7XG4gICAgICAgICcwLjk5NSc6IDEzLjc5LFxuICAgICAgICAnMC45OSc6IDE0Ljk1LFxuICAgICAgICAnMC45NzUnOiAxNi43OSxcbiAgICAgICAgJzAuOTUnOiAxOC40OSxcbiAgICAgICAgJzAuOSc6IDIwLjYsXG4gICAgICAgICcwLjUnOiAyOS4zNCxcbiAgICAgICAgJzAuMSc6IDQwLjI2LFxuICAgICAgICAnMC4wNSc6IDQzLjc3LFxuICAgICAgICAnMC4wMjUnOiA0Ni45OCxcbiAgICAgICAgJzAuMDEnOiA1MC44OSxcbiAgICAgICAgJzAuMDA1JzogNTMuNjdcbiAgICB9LFxuICAgICc0MCc6IHtcbiAgICAgICAgJzAuOTk1JzogMjAuNzEsXG4gICAgICAgICcwLjk5JzogMjIuMTYsXG4gICAgICAgICcwLjk3NSc6IDI0LjQzLFxuICAgICAgICAnMC45NSc6IDI2LjUxLFxuICAgICAgICAnMC45JzogMjkuMDUsXG4gICAgICAgICcwLjUnOiAzOS4zNCxcbiAgICAgICAgJzAuMSc6IDUxLjgxLFxuICAgICAgICAnMC4wNSc6IDU1Ljc2LFxuICAgICAgICAnMC4wMjUnOiA1OS4zNCxcbiAgICAgICAgJzAuMDEnOiA2My42OSxcbiAgICAgICAgJzAuMDA1JzogNjYuNzdcbiAgICB9LFxuICAgICc1MCc6IHtcbiAgICAgICAgJzAuOTk1JzogMjcuOTksXG4gICAgICAgICcwLjk5JzogMjkuNzEsXG4gICAgICAgICcwLjk3NSc6IDMyLjM2LFxuICAgICAgICAnMC45NSc6IDM0Ljc2LFxuICAgICAgICAnMC45JzogMzcuNjksXG4gICAgICAgICcwLjUnOiA0OS4zMyxcbiAgICAgICAgJzAuMSc6IDYzLjE3LFxuICAgICAgICAnMC4wNSc6IDY3LjUsXG4gICAgICAgICcwLjAyNSc6IDcxLjQyLFxuICAgICAgICAnMC4wMSc6IDc2LjE1LFxuICAgICAgICAnMC4wMDUnOiA3OS40OVxuICAgIH0sXG4gICAgJzYwJzoge1xuICAgICAgICAnMC45OTUnOiAzNS41MyxcbiAgICAgICAgJzAuOTknOiAzNy40OCxcbiAgICAgICAgJzAuOTc1JzogNDAuNDgsXG4gICAgICAgICcwLjk1JzogNDMuMTksXG4gICAgICAgICcwLjknOiA0Ni40NixcbiAgICAgICAgJzAuNSc6IDU5LjMzLFxuICAgICAgICAnMC4xJzogNzQuNCxcbiAgICAgICAgJzAuMDUnOiA3OS4wOCxcbiAgICAgICAgJzAuMDI1JzogODMuMyxcbiAgICAgICAgJzAuMDEnOiA4OC4zOCxcbiAgICAgICAgJzAuMDA1JzogOTEuOTVcbiAgICB9LFxuICAgICc3MCc6IHtcbiAgICAgICAgJzAuOTk1JzogNDMuMjgsXG4gICAgICAgICcwLjk5JzogNDUuNDQsXG4gICAgICAgICcwLjk3NSc6IDQ4Ljc2LFxuICAgICAgICAnMC45NSc6IDUxLjc0LFxuICAgICAgICAnMC45JzogNTUuMzMsXG4gICAgICAgICcwLjUnOiA2OS4zMyxcbiAgICAgICAgJzAuMSc6IDg1LjUzLFxuICAgICAgICAnMC4wNSc6IDkwLjUzLFxuICAgICAgICAnMC4wMjUnOiA5NS4wMixcbiAgICAgICAgJzAuMDEnOiAxMDAuNDIsXG4gICAgICAgICcwLjAwNSc6IDEwNC4yMlxuICAgIH0sXG4gICAgJzgwJzoge1xuICAgICAgICAnMC45OTUnOiA1MS4xNyxcbiAgICAgICAgJzAuOTknOiA1My41NCxcbiAgICAgICAgJzAuOTc1JzogNTcuMTUsXG4gICAgICAgICcwLjk1JzogNjAuMzksXG4gICAgICAgICcwLjknOiA2NC4yOCxcbiAgICAgICAgJzAuNSc6IDc5LjMzLFxuICAgICAgICAnMC4xJzogOTYuNTgsXG4gICAgICAgICcwLjA1JzogMTAxLjg4LFxuICAgICAgICAnMC4wMjUnOiAxMDYuNjMsXG4gICAgICAgICcwLjAxJzogMTEyLjMzLFxuICAgICAgICAnMC4wMDUnOiAxMTYuMzJcbiAgICB9LFxuICAgICc5MCc6IHtcbiAgICAgICAgJzAuOTk1JzogNTkuMixcbiAgICAgICAgJzAuOTknOiA2MS43NSxcbiAgICAgICAgJzAuOTc1JzogNjUuNjUsXG4gICAgICAgICcwLjk1JzogNjkuMTMsXG4gICAgICAgICcwLjknOiA3My4yOSxcbiAgICAgICAgJzAuNSc6IDg5LjMzLFxuICAgICAgICAnMC4xJzogMTA3LjU3LFxuICAgICAgICAnMC4wNSc6IDExMy4xNCxcbiAgICAgICAgJzAuMDI1JzogMTE4LjE0LFxuICAgICAgICAnMC4wMSc6IDEyNC4xMixcbiAgICAgICAgJzAuMDA1JzogMTI4LjNcbiAgICB9LFxuICAgICcxMDAnOiB7XG4gICAgICAgICcwLjk5NSc6IDY3LjMzLFxuICAgICAgICAnMC45OSc6IDcwLjA2LFxuICAgICAgICAnMC45NzUnOiA3NC4yMixcbiAgICAgICAgJzAuOTUnOiA3Ny45MyxcbiAgICAgICAgJzAuOSc6IDgyLjM2LFxuICAgICAgICAnMC41JzogOTkuMzMsXG4gICAgICAgICcwLjEnOiAxMTguNSxcbiAgICAgICAgJzAuMDUnOiAxMjQuMzQsXG4gICAgICAgICcwLjAyNSc6IDEyOS41NixcbiAgICAgICAgJzAuMDEnOiAxMzUuODEsXG4gICAgICAgICcwLjAwNSc6IDE0MC4xN1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoaVNxdWFyZWREaXN0cmlidXRpb25UYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9jaGlfc3F1YXJlZF9kaXN0cmlidXRpb25fdGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbnZhciBTUVJUXzJQSSA9IE1hdGguc3FydCgyICogTWF0aC5QSSk7XG5cbmZ1bmN0aW9uIGN1bXVsYXRpdmVEaXN0cmlidXRpb24oeikge1xuICAgIHZhciBzdW0gPSB6LFxuICAgICAgICB0bXAgPSB6O1xuXG4gICAgLy8gMTUgaXRlcmF0aW9ucyBhcmUgZW5vdWdoIGZvciA0LWRpZ2l0IHByZWNpc2lvblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTU7IGkrKykge1xuICAgICAgICB0bXAgKj0geiAqIHogLyAoMiAqIGkgKyAxKTtcbiAgICAgICAgc3VtICs9IHRtcDtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDAuNSArIChzdW0gLyBTUVJUXzJQSSkgKiBNYXRoLmV4cCgteiAqIHogLyAyKSkgKiAxZTQpIC8gMWU0O1xufVxuXG4vKipcbiAqIEEgc3RhbmRhcmQgbm9ybWFsIHRhYmxlLCBhbHNvIGNhbGxlZCB0aGUgdW5pdCBub3JtYWwgdGFibGUgb3IgWiB0YWJsZSxcbiAqIGlzIGEgbWF0aGVtYXRpY2FsIHRhYmxlIGZvciB0aGUgdmFsdWVzIG9mIM6mIChwaGkpLCB3aGljaCBhcmUgdGhlIHZhbHVlcyBvZlxuICogdGhlIGN1bXVsYXRpdmUgZGlzdHJpYnV0aW9uIGZ1bmN0aW9uIG9mIHRoZSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICogSXQgaXMgdXNlZCB0byBmaW5kIHRoZSBwcm9iYWJpbGl0eSB0aGF0IGEgc3RhdGlzdGljIGlzIG9ic2VydmVkIGJlbG93LFxuICogYWJvdmUsIG9yIGJldHdlZW4gdmFsdWVzIG9uIHRoZSBzdGFuZGFyZCBub3JtYWwgZGlzdHJpYnV0aW9uLCBhbmQgYnlcbiAqIGV4dGVuc2lvbiwgYW55IG5vcm1hbCBkaXN0cmlidXRpb24uXG4gKlxuICogVGhlIHByb2JhYmlsaXRpZXMgYXJlIGNhbGN1bGF0ZWQgdXNpbmcgdGhlXG4gKiBbQ3VtdWxhdGl2ZSBkaXN0cmlidXRpb24gZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05vcm1hbF9kaXN0cmlidXRpb24jQ3VtdWxhdGl2ZV9kaXN0cmlidXRpb25fZnVuY3Rpb24pLlxuICogVGhlIHRhYmxlIHVzZWQgaXMgdGhlIGN1bXVsYXRpdmUsIGFuZCBub3QgY3VtdWxhdGl2ZSBmcm9tIDAgdG8gbWVhblxuICogKGV2ZW4gdGhvdWdoIHRoZSBsYXR0ZXIgaGFzIDUgZGlnaXRzIHByZWNpc2lvbiwgaW5zdGVhZCBvZiA0KS5cbiAqL1xudmFyIHN0YW5kYXJkTm9ybWFsVGFibGUvKjogQXJyYXk8bnVtYmVyPiAqLyA9IFtdO1xuXG5mb3IgKHZhciB6ID0gMDsgeiA8PSAzLjA5OyB6ICs9IDAuMDEpIHtcbiAgICBzdGFuZGFyZE5vcm1hbFRhYmxlLnB1c2goY3VtdWxhdGl2ZURpc3RyaWJ1dGlvbih6KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW5kYXJkTm9ybWFsVGFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3RhbmRhcmRfbm9ybWFsX3RhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBJbnZlcnNlIFtHYXVzc2lhbiBlcnJvciBmdW5jdGlvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FcnJvcl9mdW5jdGlvbilcbiAqIHJldHVybnMgYSBudW1lcmljYWwgYXBwcm94aW1hdGlvbiB0byB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlIGNhdXNlZFxuICogYGVycm9yRnVuY3Rpb24oKWAgdG8gcmV0dXJuIHguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHggdmFsdWUgb2YgZXJyb3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtudW1iZXJ9IGVzdGltYXRlZCBpbnZlcnRlZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBpbnZlcnNlRXJyb3JGdW5jdGlvbih4Lyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgYSA9ICg4ICogKE1hdGguUEkgLSAzKSkgLyAoMyAqIE1hdGguUEkgKiAoNCAtIE1hdGguUEkpKTtcblxuICAgIHZhciBpbnYgPSBNYXRoLnNxcnQoTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdygyIC8gKE1hdGguUEkgKiBhKSArIE1hdGgubG9nKDEgLSB4ICogeCkgLyAyLCAyKSAtXG4gICAgICAgIE1hdGgubG9nKDEgLSB4ICogeCkgLyBhKSAtXG4gICAgICAgICgyIC8gKE1hdGguUEkgKiBhKSArIE1hdGgubG9nKDEgLSB4ICogeCkgLyAyKSk7XG5cbiAgICBpZiAoeCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBpbnY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC1pbnY7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnZlcnNlRXJyb3JGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9pbnZlcnNlX2Vycm9yX2Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFtTaWduXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaWduX2Z1bmN0aW9uKSBpcyBhIGZ1bmN0aW9uXG4gKiB0aGF0IGV4dHJhY3RzIHRoZSBzaWduIG9mIGEgcmVhbCBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geCBpbnB1dCB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn0gc2lnbiB2YWx1ZSBlaXRoZXIgMSwgMCBvciAtMVxuICogQHRocm93cyB7VHlwZUVycm9yfSBpZiB0aGUgaW5wdXQgYXJndW1lbnQgeCBpcyBub3QgYSBudW1iZXJcbiAqIEBwcml2YXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIHNpZ24oMik7IC8vID0+IDFcbiAqL1xuZnVuY3Rpb24gc2lnbih4Lyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKHggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIG51bWJlcicpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnaXNpZGEgPSB7fTtcblxuZ2lzaWRhLnZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuZ2lzaWRhLmluaXRTdG9yZSA9IHJlcXVpcmUoJy4vc3RvcmUvaW5pdFN0b3JlJykuZGVmYXVsdDtcbmdpc2lkYS5BY3Rpb25zID0gcmVxdWlyZSgnLi9zdG9yZS9hY3Rpb25zL0FjdGlvbnMnKS5kZWZhdWx0O1xuZ2lzaWRhLlJlZHVjZXJzID0gcmVxdWlyZSgnLi9zdG9yZS9yZWR1Y2Vycy9SZWR1Y2VycycpLmRlZmF1bHQ7XG5naXNpZGEucHJlcGFyZUxheWVyID0gcmVxdWlyZSgnLi9tYXAvcHJlcGFyZUxheWVyJykuZGVmYXVsdDtcbmdpc2lkYS5hZGRMYXllciA9IHJlcXVpcmUoJy4vbWFwL2FkZExheWVyJykuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSBnaXNpZGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcImdpc2lkYVwiLFwiZGVzY3JpcHRpb25cIjpcIkEgZGFzaGJvYXJkIGJ1aWxkZXIgbGlicmFyeSBmb3IgbWFwIHZpc3VhbGl6YXRpb25zXCIsXCJ2ZXJzaW9uXCI6XCIwLjAuMVwiLFwiYXV0aG9yXCI6XCJPbmEgU3lzdGVtcyBJbmMuXCIsXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9vbmFpby9naXNpZGEjZ2lzaWRhXCJ9LFwiamVzdFwiOntcInRyYW5zZm9ybVwiOntcIi4qXCI6XCIuL25vZGVfbW9kdWxlcy9qZXN0LWNzcy1tb2R1bGVzXCJ9fSxcImRlcGVuZGVuY2llc1wiOntcImJhYmVsLWNvcmVcIjpcInY2LjI1LjBcIixcImJhYmVsLWxvYWRlclwiOlwidjYuNC4xXCIsXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6XCJeNi4yNC4wXCIsXCJiYWJlbC1wcmVzZXQtZXMyMDE2XCI6XCJeNi4yNC4xXCIsXCJiYWJlbC1wcmVzZXQtc3RhZ2UtMFwiOlwiXjYuMjQuMVwiLFwiY29sb3JicmV3ZXJcIjpcIl4xLjAuMFwiLFwianN4LWxvYWRlclwiOlwiXjAuMTMuMlwiLFwibXVzdGFjaGVcIjpcIl4yLjMuMFwiLFwicGFwYXBhcnNlXCI6XCJeNC4zLjZcIixcInJlZHV4XCI6XCJeMy43LjJcIixcInNpbXBsZS1zdGF0aXN0aWNzXCI6XCJeNS4yLjBcIixcIndlYnBhY2tcIjpcIl4zLjguMVwifSxcImRldkRlcGVuZGVuY2llc1wiOntcImJhYmVsLWVzbGludFwiOlwiXjguMS4yXCIsXCJlc2xpbnRcIjpcIl40LjE0LjBcIixcImVzbGludC1jb25maWctYWlyYm5iXCI6XCJeMTYuMS4wXCIsXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOlwiXjIuOC4wXCIsXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6XCJeNi4wLjNcIixcImVzbGludC1wbHVnaW4tcmVhY3RcIjpcIl43LjUuMVwifSxcImtleXdvcmRzXCI6W1wibWFwcGluZ1wiLFwibWFwc1wiLFwiZGF0YSB2aXN1YWxpemF0aW9uXCIsXCJtYXBzcGVjXCJdLFwibGljZW5zZVwiOlwiTUlUXCIsXCJtYWluXCI6XCJkaXN0L2dpc2lkYS5qc1wiLFwic2NyaXB0c1wiOntcImxpbnRcIjpcImVzbGludCBzcmMgLS1leHQ9anN4IC0tZXh0PWpzXCIsXCJidWlsZFwiOlwid2VicGFjayAtLXByb2dyZXNzIC0tZW52LnByb2R1Y3Rpb249dHJ1ZVwiLFwiZGV2ZWxvcFwiOlwid2VicGFjayAtLXByb2dyZXNzIC0td2F0Y2ggLS1lbnYucHJvZHVjdGlvbj1mYWxzZVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2UuanNvblxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpbml0U3RvcmU7XG5cbnZhciBfcmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9ucycpO1xuXG52YXIgX1JlZHVjZXJzID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9SZWR1Y2VycycpO1xuXG52YXIgX1JlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZHVjZXJzKTtcblxudmFyIF9maWxlcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZpbGVzJyk7XG5cbnZhciBfcHJlcGFyZUxheWVyID0gcmVxdWlyZSgnLi4vbWFwL3ByZXBhcmVMYXllcicpO1xuXG52YXIgX3ByZXBhcmVMYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVwYXJlTGF5ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpbml0U3RvcmUoY3VzdG9tUmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJzID0gdm9pZCAwO1xuICBpZiAoY3VzdG9tUmVkdWNlcnMpIHtcbiAgICByZWR1Y2VycyA9ICgwLCBfcmVkdXguY29tYmluZVJlZHVjZXJzKShfZXh0ZW5kcyh7fSwgX1JlZHVjZXJzMi5kZWZhdWx0LCBjdXN0b21SZWR1Y2VycykpO1xuICB9IGVsc2Uge1xuICAgIHJlZHVjZXJzID0gKDAsIF9yZWR1eC5jb21iaW5lUmVkdWNlcnMpKF9SZWR1Y2VyczIuZGVmYXVsdCk7XG4gIH1cblxuICAvLyBDcmVhdGUgaW5pdGlhbCBzdG9yZVxuICB2YXIgc3RvcmUgPSAoMCwgX3JlZHV4LmNyZWF0ZVN0b3JlKShyZWR1Y2Vycyk7XG5cbiAgLy8gQWRkIGNvbmZpZyB0byByZWR1eCBzdG9yZVxuICBmdW5jdGlvbiBhZGRDb25maWdUb1N0b3JlKGNvbmZpZykge1xuICAgIC8vIENoZWNrIGlmIGNvbmZpZyBoYXMgbGlzdCBvZiBsYXllcnMgYW5kIGFkZCB0aGVtIHRvIHN0b3JlXG4gICAgaWYgKGNvbmZpZy5MQVlFUlMubGVuZ3RoID4gMCAmJiBjb25maWcuQVBQLmxheWVyc1BhdGgpIHtcbiAgICAgIGNvbmZpZy5MQVlFUlMubWFwKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICAvLyB0b2RvOiBjaGVjayBpZiBgbGF5ZXJgIGlzIGZ1bGwgVVJMIGUuZyBodHRwOi8vbXlkb21haWxuL215bGF5ZXIuanNvblxuICAgICAgICAvLyBhbmQgbG9hZCBpdCBkaXJlY3RseVxuICAgICAgICB2YXIgcGF0aCA9IGNvbmZpZy5BUFAubGF5ZXJzUGF0aCArICcvJyArIGxheWVyICsgJy5qc29uJztcblxuICAgICAgICBmdW5jdGlvbiBhZGRMYXllclRvU3RvcmUocmVzcG9uc2VPYmopIHtcbiAgICAgICAgICB2YXIgbGF5ZXJPYmogPSByZXNwb25zZU9iajtcbiAgICAgICAgICBsYXllck9iai5pZCA9IGxheWVyO1xuICAgICAgICAgIGxheWVyT2JqLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCgwLCBfQWN0aW9ucy5hZGRMYXllcikobGF5ZXJPYmopKTtcbiAgICAgICAgICBpZiAobGF5ZXJPYmoudmlzaWJsZSAmJiAhbGF5ZXJPYmoubG9hZGVkKSB7XG4gICAgICAgICAgICAoMCwgX3ByZXBhcmVMYXllcjIuZGVmYXVsdCkobGF5ZXJPYmosIHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDAsIF9maWxlcy5sb2FkSlNPTikocGF0aCwgYWRkTGF5ZXJUb1N0b3JlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3JlLmRpc3BhdGNoKCgwLCBfQWN0aW9ucy5pbml0QXBwKShjb25maWcuQVBQKSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goKDAsIF9BY3Rpb25zLmluaXRTdHlsZXMpKGNvbmZpZy5TVFlMRVMpKTtcbiAgfVxuXG4gIC8vIFJlYWQgY29uZmlnLmpzb24gYW5kIGFkZCB0byByZWR1eCBzdG9yZVxuICAoMCwgX2ZpbGVzLmxvYWRKU09OKSgnY29uZmlnLmpzb24nLCBhZGRDb25maWdUb1N0b3JlKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3N0b3JlL2luaXRTdG9yZS5qcyIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbC5qcycpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiAnICsgJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcgKyAnSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0ICcgKyAnZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSAnICsgJ25vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb25cXCd0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgJyArICd5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBBY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKCdObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCInICsga2V5ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB2b2lkIDA7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvciA9IHZvaWQgMDtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgZGVmYXVsdFN0YXRlID0ge1xuICBBUFA6IHtcbiAgICBtYXBDb25maWc6IHtcbiAgICAgIGNvbnRhaW5lcjogJ21hcCcsXG4gICAgICBzdHlsZTogJycsXG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDVcbiAgICB9LFxuICAgIGFjY2Vzc1Rva2VuOiBmYWxzZSxcbiAgICBhcHBJY29uOiAnZ2lzaWRhLXNhbXBsZS5wbmcnLFxuICAgIGFwcE5hbWU6ICdSZWFjdCBHaXNpZGEnXG4gIH0sXG4gIExBWUVSUzoge30sXG4gIFNUWUxFUzogW3tcbiAgICBsYWJlbDogJ1NhdGVsaXR0ZScsXG4gICAgc3R5bGU6ICdtYXBib3g6IC8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjknXG4gIH0sIHtcbiAgICBsYWJlbDogJ1NhdGVsaXR0ZSBTdHJlZXRzJyxcbiAgICBzdHlsZTogJ21hcGJveDogLy9zdHlsZXMvbWFwYm94L3NhdGVsbGl0ZS1zdHJlZXRzLXY5J1xuICB9XSxcbiAgTUFQOiB7XG4gICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgIHByb2Nlc3NlZExheWVyczoge30sXG4gICAgYWN0aXZlTGF5ZXJzOiB7fSxcbiAgICBsYXllcnNUb1JlbW92ZTogW10sXG4gICAgbGF5ZXJzVG9BZGQ6IFtdXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRTdGF0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9zdG9yZS9kZWZhdWx0U3RhdGUuanMiLCIvKiFcblx0UGFwYSBQYXJzZVxuXHR2NC4zLjZcblx0aHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuXHRMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSlcbntcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0e1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuUGFwYSA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpXG57XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBhbHRlcm5hdGl2ZSBtZXRob2QsIHNpbWlsYXIgdG8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdFx0Ly8gYnV0IHdpdGhvdXQgdXNpbmcgYGV2YWxgICh3aGljaCBpcyBkaXNhYmxlZCB3aGVuXG5cdFx0Ly8gdXNpbmcgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuXG5cdFx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdFx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblxuXHRcdC8vIFdoZW4gcnVubmluZyB0ZXN0cyBub25lIG9mIHRoZSBhYm92ZSBoYXZlIGJlZW4gZGVmaW5lZFxuXHRcdHJldHVybiB7fTtcblx0fSkoKTtcblxuXG5cdHZhciBJU19XT1JLRVIgPSAhZ2xvYmFsLmRvY3VtZW50ICYmICEhZ2xvYmFsLnBvc3RNZXNzYWdlLFxuXHRcdElTX1BBUEFfV09SS0VSID0gSVNfV09SS0VSICYmIC8oXFw/fCYpcGFwYXdvcmtlcig9fCZ8JCkvLnRlc3QoZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCksXG5cdFx0TE9BREVEX1NZTkMgPSBmYWxzZSwgQVVUT19TQ1JJUFRfUEFUSDtcblx0dmFyIHdvcmtlcnMgPSB7fSwgd29ya2VySWRDb3VudGVyID0gMDtcblxuXHR2YXIgUGFwYSA9IHt9O1xuXG5cdFBhcGEucGFyc2UgPSBDc3ZUb0pzb247XG5cdFBhcGEudW5wYXJzZSA9IEpzb25Ub0NzdjtcblxuXHRQYXBhLlJFQ09SRF9TRVAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTtcblx0UGFwYS5VTklUX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzEpO1xuXHRQYXBhLkJZVEVfT1JERVJfTUFSSyA9ICdcXHVmZWZmJztcblx0UGFwYS5CQURfREVMSU1JVEVSUyA9IFsnXFxyJywgJ1xcbicsICdcIicsIFBhcGEuQllURV9PUkRFUl9NQVJLXTtcblx0UGFwYS5XT1JLRVJTX1NVUFBPUlRFRCA9ICFJU19XT1JLRVIgJiYgISFnbG9iYWwuV29ya2VyO1xuXHRQYXBhLlNDUklQVF9QQVRIID0gbnVsbDtcdC8vIE11c3QgYmUgc2V0IGJ5IHlvdXIgY29kZSBpZiB5b3UgdXNlIHdvcmtlcnMgYW5kIHRoaXMgbGliIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseVxuXG5cdC8vIENvbmZpZ3VyYWJsZSBjaHVuayBzaXplcyBmb3IgbG9jYWwgYW5kIHJlbW90ZSBmaWxlcywgcmVzcGVjdGl2ZWx5XG5cdFBhcGEuTG9jYWxDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDEwO1x0Ly8gMTAgTUJcblx0UGFwYS5SZW1vdGVDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDU7XHQvLyA1IE1CXG5cdFBhcGEuRGVmYXVsdERlbGltaXRlciA9ICcsJztcdFx0XHQvLyBVc2VkIGlmIG5vdCBzcGVjaWZpZWQgYW5kIGRldGVjdGlvbiBmYWlsc1xuXG5cdC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcgYW5kIGRldmVsb3BtZW50IG9ubHlcblx0UGFwYS5QYXJzZXIgPSBQYXJzZXI7XG5cdFBhcGEuUGFyc2VySGFuZGxlID0gUGFyc2VySGFuZGxlO1xuXHRQYXBhLk5ldHdvcmtTdHJlYW1lciA9IE5ldHdvcmtTdHJlYW1lcjtcblx0UGFwYS5GaWxlU3RyZWFtZXIgPSBGaWxlU3RyZWFtZXI7XG5cdFBhcGEuU3RyaW5nU3RyZWFtZXIgPSBTdHJpbmdTdHJlYW1lcjtcblx0UGFwYS5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXHRpZiAoZ2xvYmFsLmpRdWVyeSlcblx0e1xuXHRcdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblx0XHQkLmZuLnBhcnNlID0gZnVuY3Rpb24ob3B0aW9ucylcblx0XHR7XG5cdFx0XHR2YXIgY29uZmlnID0gb3B0aW9ucy5jb25maWcgfHwge307XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKGlkeClcblx0XHRcdHtcblx0XHRcdFx0dmFyIHN1cHBvcnRlZCA9ICQodGhpcykucHJvcCgndGFnTmFtZScpLnRvVXBwZXJDYXNlKCkgPT09ICdJTlBVVCdcblx0XHRcdFx0XHRcdFx0XHQmJiAkKHRoaXMpLmF0dHIoJ3R5cGUnKS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZSdcblx0XHRcdFx0XHRcdFx0XHQmJiBnbG9iYWwuRmlsZVJlYWRlcjtcblxuXHRcdFx0XHRpZiAoIXN1cHBvcnRlZCB8fCAhdGhpcy5maWxlcyB8fCB0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcdC8vIGNvbnRpbnVlIHRvIG5leHQgaW5wdXQgZWxlbWVudFxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdFx0ZmlsZTogdGhpcy5maWxlc1tpXSxcblx0XHRcdFx0XHRcdGlucHV0RWxlbTogdGhpcyxcblx0XHRcdFx0XHRcdGluc3RhbmNlQ29uZmlnOiAkLmV4dGVuZCh7fSwgY29uZmlnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cGFyc2VOZXh0RmlsZSgpO1x0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdFx0cmV0dXJuIHRoaXM7XHRcdC8vIG1haW50YWlucyBjaGFpbmFiaWxpdHlcblxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZU5leHRGaWxlKClcblx0XHRcdHtcblx0XHRcdFx0aWYgKHF1ZXVlLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY29tcGxldGUpKVxuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmID0gcXVldWVbMF07XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5iZWZvcmUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJldHVybmVkID0gb3B0aW9ucy5iZWZvcmUoZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldHVybmVkID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAocmV0dXJuZWQuYWN0aW9uID09PSAnYWJvcnQnKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRlcnJvcignQWJvcnRFcnJvcicsIGYuZmlsZSwgZi5pbnB1dEVsZW0sIHJldHVybmVkLnJlYXNvbik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcdC8vIEFib3J0cyBhbGwgcXVldWVkIGZpbGVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmIChyZXR1cm5lZC5hY3Rpb24gPT09ICdza2lwJylcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiByZXR1cm5lZC5jb25maWcgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnID0gJC5leHRlbmQoZi5pbnN0YW5jZUNvbmZpZywgcmV0dXJuZWQuY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocmV0dXJuZWQgPT09ICdza2lwJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcdC8vIHBhcnNlIHRoZSBuZXh0IGZpbGUgaW4gdGhlIHF1ZXVlLCBpZiBhbnlcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXcmFwIHVwIHRoZSB1c2VyJ3MgY29tcGxldGUgY2FsbGJhY2ssIGlmIGFueSwgc28gdGhhdCBvdXJzIGFsc28gZ2V0cyBleGVjdXRlZFxuXHRcdFx0XHR2YXIgdXNlckNvbXBsZXRlRnVuYyA9IGYuaW5zdGFuY2VDb25maWcuY29tcGxldGU7XG5cdFx0XHRcdGYuaW5zdGFuY2VDb25maWcuY29tcGxldGUgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24odXNlckNvbXBsZXRlRnVuYykpXG5cdFx0XHRcdFx0XHR1c2VyQ29tcGxldGVGdW5jKHJlc3VsdHMsIGYuZmlsZSwgZi5pbnB1dEVsZW0pO1xuXHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdFBhcGEucGFyc2UoZi5maWxlLCBmLmluc3RhbmNlQ29uZmlnKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZXJyb3IobmFtZSwgZmlsZSwgZWxlbSwgcmVhc29uKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmVycm9yKSlcblx0XHRcdFx0XHRvcHRpb25zLmVycm9yKHtuYW1lOiBuYW1lfSwgZmlsZSwgZWxlbSwgcmVhc29uKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZmlsZUNvbXBsZXRlKClcblx0XHRcdHtcblx0XHRcdFx0cXVldWUuc3BsaWNlKDAsIDEpO1xuXHRcdFx0XHRwYXJzZU5leHRGaWxlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRpZiAoSVNfUEFQQV9XT1JLRVIpXG5cdHtcblx0XHRnbG9iYWwub25tZXNzYWdlID0gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlO1xuXHR9XG5cdGVsc2UgaWYgKFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdHtcblx0XHRBVVRPX1NDUklQVF9QQVRIID0gZ2V0U2NyaXB0UGF0aCgpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHNjcmlwdCB3YXMgbG9hZGVkIHN5bmNocm9ub3VzbHlcblx0XHRpZiAoIWRvY3VtZW50LmJvZHkpXG5cdFx0e1xuXHRcdFx0Ly8gQm9keSBkb2Vzbid0IGV4aXN0IHlldCwgbXVzdCBiZSBzeW5jaHJvbm91c1xuXHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblx0ZnVuY3Rpb24gQ3N2VG9Kc29uKF9pbnB1dCwgX2NvbmZpZylcblx0e1xuXHRcdF9jb25maWcgPSBfY29uZmlnIHx8IHt9O1xuXHRcdHZhciBkeW5hbWljVHlwaW5nID0gX2NvbmZpZy5keW5hbWljVHlwaW5nIHx8IGZhbHNlO1xuXHRcdGlmIChpc0Z1bmN0aW9uKGR5bmFtaWNUeXBpbmcpKSB7XG5cdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiA9IGR5bmFtaWNUeXBpbmc7XG5cdFx0XHQvLyBXaWxsIGJlIGZpbGxlZCBvbiBmaXJzdCByb3cgY2FsbFxuXHRcdFx0ZHluYW1pY1R5cGluZyA9IHt9O1xuXHRcdH1cblx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmcgPSBkeW5hbWljVHlwaW5nO1xuXG5cdFx0aWYgKF9jb25maWcud29ya2VyICYmIFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0e1xuXHRcdFx0dmFyIHcgPSBuZXdXb3JrZXIoKTtcblxuXHRcdFx0dy51c2VyU3RlcCA9IF9jb25maWcuc3RlcDtcblx0XHRcdHcudXNlckNodW5rID0gX2NvbmZpZy5jaHVuaztcblx0XHRcdHcudXNlckNvbXBsZXRlID0gX2NvbmZpZy5jb21wbGV0ZTtcblx0XHRcdHcudXNlckVycm9yID0gX2NvbmZpZy5lcnJvcjtcblxuXHRcdFx0X2NvbmZpZy5zdGVwID0gaXNGdW5jdGlvbihfY29uZmlnLnN0ZXApO1xuXHRcdFx0X2NvbmZpZy5jaHVuayA9IGlzRnVuY3Rpb24oX2NvbmZpZy5jaHVuayk7XG5cdFx0XHRfY29uZmlnLmNvbXBsZXRlID0gaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKTtcblx0XHRcdF9jb25maWcuZXJyb3IgPSBpc0Z1bmN0aW9uKF9jb25maWcuZXJyb3IpO1xuXHRcdFx0ZGVsZXRlIF9jb25maWcud29ya2VyO1x0Ly8gcHJldmVudCBpbmZpbml0ZSBsb29wXG5cblx0XHRcdHcucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRpbnB1dDogX2lucHV0LFxuXHRcdFx0XHRjb25maWc6IF9jb25maWcsXG5cdFx0XHRcdHdvcmtlcklkOiB3LmlkXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzdHJlYW1lciA9IG51bGw7XG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdHtcblx0XHRcdGlmIChfY29uZmlnLmRvd25sb2FkKVxuXHRcdFx0XHRzdHJlYW1lciA9IG5ldyBOZXR3b3JrU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHN0cmVhbWVyID0gbmV3IFN0cmluZ1N0cmVhbWVyKF9jb25maWcpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfaW5wdXQucmVhZGFibGUgPT09IHRydWUgJiYgaXNGdW5jdGlvbihfaW5wdXQucmVhZCkgJiYgaXNGdW5jdGlvbihfaW5wdXQub24pKVxuXHRcdHtcblx0XHRcdHN0cmVhbWVyID0gbmV3IFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChnbG9iYWwuRmlsZSAmJiBfaW5wdXQgaW5zdGFuY2VvZiBGaWxlKSB8fCBfaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpXHQvLyAuLi5TYWZhcmkuIChzZWUgaXNzdWUgIzEwNilcblx0XHRcdHN0cmVhbWVyID0gbmV3IEZpbGVTdHJlYW1lcihfY29uZmlnKTtcblxuXHRcdHJldHVybiBzdHJlYW1lci5zdHJlYW0oX2lucHV0KTtcblx0fVxuXG5cblxuXG5cblxuXHRmdW5jdGlvbiBKc29uVG9Dc3YoX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0dmFyIF9vdXRwdXQgPSAnJztcblx0XHR2YXIgX2ZpZWxkcyA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBjb25maWd1cmF0aW9uXG5cblx0XHQvKiogd2hldGhlciB0byBzdXJyb3VuZCBldmVyeSBkYXR1bSB3aXRoIHF1b3RlcyAqL1xuXHRcdHZhciBfcXVvdGVzID0gZmFsc2U7XG5cblx0XHQvKiogd2hldGhlciB0byB3cml0ZSBoZWFkZXJzICovXG5cdFx0dmFyIF93cml0ZUhlYWRlciA9IHRydWU7XG5cblx0XHQvKiogZGVsaW1pdGluZyBjaGFyYWN0ZXIgKi9cblx0XHR2YXIgX2RlbGltaXRlciA9ICcsJztcblxuXHRcdC8qKiBuZXdsaW5lIGNoYXJhY3RlcihzKSAqL1xuXHRcdHZhciBfbmV3bGluZSA9ICdcXHJcXG4nO1xuXG5cdFx0LyoqIHF1b3RlIGNoYXJhY3RlciAqL1xuXHRcdHZhciBfcXVvdGVDaGFyID0gJ1wiJztcblxuXHRcdHVucGFja0NvbmZpZygpO1xuXG5cdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChfcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0X2lucHV0ID0gSlNPTi5wYXJzZShfaW5wdXQpO1xuXG5cdFx0aWYgKF9pbnB1dCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHtcblx0XHRcdGlmICghX2lucHV0Lmxlbmd0aCB8fCBfaW5wdXRbMF0gaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShudWxsLCBfaW5wdXQpO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIF9pbnB1dFswXSA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUob2JqZWN0S2V5cyhfaW5wdXRbMF0pLCBfaW5wdXQpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2YgX2lucHV0ID09PSAnb2JqZWN0Jylcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIF9pbnB1dC5kYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0X2lucHV0LmRhdGEgPSBKU09OLnBhcnNlKF9pbnB1dC5kYXRhKTtcblxuXHRcdFx0aWYgKF9pbnB1dC5kYXRhIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghX2lucHV0LmZpZWxkcylcblx0XHRcdFx0XHRfaW5wdXQuZmllbGRzID0gIF9pbnB1dC5tZXRhICYmIF9pbnB1dC5tZXRhLmZpZWxkcztcblxuXHRcdFx0XHRpZiAoIV9pbnB1dC5maWVsZHMpXG5cdFx0XHRcdFx0X2lucHV0LmZpZWxkcyA9ICBfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbnB1dC5maWVsZHNcblx0XHRcdFx0XHRcdFx0XHRcdDogb2JqZWN0S2V5cyhfaW5wdXQuZGF0YVswXSk7XG5cblx0XHRcdFx0aWYgKCEoX2lucHV0LmRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheSkgJiYgdHlwZW9mIF9pbnB1dC5kYXRhWzBdICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRfaW5wdXQuZGF0YSA9IFtfaW5wdXQuZGF0YV07XHQvLyBoYW5kbGVzIGlucHV0IGxpa2UgWzEsMiwzXSBvciBbJ2FzZGYnXVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VyaWFsaXplKF9pbnB1dC5maWVsZHMgfHwgW10sIF9pbnB1dC5kYXRhIHx8IFtdKTtcblx0XHR9XG5cblx0XHQvLyBEZWZhdWx0IChhbnkgdmFsaWQgcGF0aHMgc2hvdWxkIHJldHVybiBiZWZvcmUgdGhpcylcblx0XHR0aHJvdyAnZXhjZXB0aW9uOiBVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dCc7XG5cblxuXHRcdGZ1bmN0aW9uIHVucGFja0NvbmZpZygpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcuZGVsaW1pdGVyID09PSAnc3RyaW5nJ1xuXHRcdFx0XHQmJiBfY29uZmlnLmRlbGltaXRlci5sZW5ndGggPT09IDFcblx0XHRcdFx0JiYgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKF9jb25maWcuZGVsaW1pdGVyKSA9PT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdF9kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlcyA9PT0gJ2Jvb2xlYW4nXG5cdFx0XHRcdHx8IF9jb25maWcucXVvdGVzIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdF9xdW90ZXMgPSBfY29uZmlnLnF1b3RlcztcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLm5ld2xpbmUgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfbmV3bGluZSA9IF9jb25maWcubmV3bGluZTtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlQ2hhciA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9xdW90ZUNoYXIgPSBfY29uZmlnLnF1b3RlQ2hhcjtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLmhlYWRlciA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRfd3JpdGVIZWFkZXIgPSBfY29uZmlnLmhlYWRlcjtcblx0XHR9XG5cblxuXHRcdC8qKiBUdXJucyBhbiBvYmplY3QncyBrZXlzIGludG8gYW4gYXJyYXkgKi9cblx0XHRmdW5jdGlvbiBvYmplY3RLZXlzKG9iailcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHRcdHJldHVybiBrZXlzO1xuXHRcdH1cblxuXHRcdC8qKiBUaGUgZG91YmxlIGZvciBsb29wIHRoYXQgaXRlcmF0ZXMgdGhlIGRhdGEgYW5kIHdyaXRlcyBvdXQgYSBDU1Ygc3RyaW5nIGluY2x1ZGluZyBoZWFkZXIgcm93ICovXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplKGZpZWxkcywgZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgY3N2ID0gJyc7XG5cblx0XHRcdGlmICh0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZmllbGRzID0gSlNPTi5wYXJzZShmaWVsZHMpO1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cblx0XHRcdHZhciBoYXNIZWFkZXIgPSBmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSAmJiBmaWVsZHMubGVuZ3RoID4gMDtcblx0XHRcdHZhciBkYXRhS2V5ZWRCeUZpZWxkID0gIShkYXRhWzBdIGluc3RhbmNlb2YgQXJyYXkpO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhIGhlYWRlciByb3csIHdyaXRlIGl0IGZpcnN0XG5cdFx0XHRpZiAoaGFzSGVhZGVyICYmIF93cml0ZUhlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShmaWVsZHNbaV0sIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGVuIHdyaXRlIG91dCB0aGUgZGF0YVxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgZGF0YS5sZW5ndGg7IHJvdysrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWF4Q29sID0gaGFzSGVhZGVyID8gZmllbGRzLmxlbmd0aCA6IGRhdGFbcm93XS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbWF4Q29sOyBjb2wrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChjb2wgPiAwKVxuXHRcdFx0XHRcdFx0Y3N2ICs9IF9kZWxpbWl0ZXI7XG5cdFx0XHRcdFx0dmFyIGNvbElkeCA9IGhhc0hlYWRlciAmJiBkYXRhS2V5ZWRCeUZpZWxkID8gZmllbGRzW2NvbF0gOiBjb2w7XG5cdFx0XHRcdFx0Y3N2ICs9IHNhZmUoZGF0YVtyb3ddW2NvbElkeF0sIGNvbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocm93IDwgZGF0YS5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdGNzdiArPSBfbmV3bGluZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNzdjtcblx0XHR9XG5cblx0XHQvKiogRW5jbG9zZXMgYSB2YWx1ZSBhcm91bmQgcXVvdGVzIGlmIG5lZWRlZCAobWFrZXMgYSB2YWx1ZSBzYWZlIGZvciBDU1YgaW5zZXJ0aW9uKSAqL1xuXHRcdGZ1bmN0aW9uIHNhZmUoc3RyLCBjb2wpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnIHx8IHN0ciA9PT0gbnVsbClcblx0XHRcdFx0cmV0dXJuICcnO1xuXG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBfcXVvdGVDaGFyK19xdW90ZUNoYXIpO1xuXG5cdFx0XHR2YXIgbmVlZHNRdW90ZXMgPSAodHlwZW9mIF9xdW90ZXMgPT09ICdib29sZWFuJyAmJiBfcXVvdGVzKVxuXHRcdFx0XHRcdFx0XHR8fCAoX3F1b3RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIF9xdW90ZXNbY29sXSlcblx0XHRcdFx0XHRcdFx0fHwgaGFzQW55KHN0ciwgUGFwYS5CQURfREVMSU1JVEVSUylcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmluZGV4T2YoX2RlbGltaXRlcikgPiAtMVxuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KDApID09PSAnICdcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkgPT09ICcgJztcblxuXHRcdFx0cmV0dXJuIG5lZWRzUXVvdGVzID8gX3F1b3RlQ2hhciArIHN0ciArIF9xdW90ZUNoYXIgOiBzdHI7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFzQW55KHN0ciwgc3Vic3RyaW5ncylcblx0XHR7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGlmIChzdHIuaW5kZXhPZihzdWJzdHJpbmdzW2ldKSA+IC0xKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBDaHVua1N0cmVhbWVyIGlzIHRoZSBiYXNlIHByb3RvdHlwZSBmb3IgdmFyaW91cyBzdHJlYW1lciBpbXBsZW1lbnRhdGlvbnMuICovXG5cdGZ1bmN0aW9uIENodW5rU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0dGhpcy5faGFuZGxlID0gbnVsbDtcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2lucHV0ID0gbnVsbDtcblx0XHR0aGlzLl9iYXNlSW5kZXggPSAwO1xuXHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cdFx0dGhpcy5fcm93Q291bnQgPSAwO1xuXHRcdHRoaXMuX3N0YXJ0ID0gMDtcblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBudWxsO1xuXHRcdHRoaXMuaXNGaXJzdENodW5rID0gdHJ1ZTtcblx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yczogW10sXG5cdFx0XHRtZXRhOiB7fVxuXHRcdH07XG5cdFx0cmVwbGFjZUNvbmZpZy5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnBhcnNlQ2h1bmsgPSBmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHQvLyBGaXJzdCBjaHVuayBwcmUtcHJvY2Vzc2luZ1xuXHRcdFx0aWYgKHRoaXMuaXNGaXJzdENodW5rICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbW9kaWZpZWRDaHVuayA9IHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGNodW5rKTtcblx0XHRcdFx0aWYgKG1vZGlmaWVkQ2h1bmsgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRjaHVuayA9IG1vZGlmaWVkQ2h1bms7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IGZhbHNlO1xuXG5cdFx0XHQvLyBSZWpvaW4gdGhlIGxpbmUgd2UgbGlrZWx5IGp1c3Qgc3BsaXQgaW4gdHdvIGJ5IGNodW5raW5nIHRoZSBmaWxlXG5cdFx0XHR2YXIgYWdncmVnYXRlID0gdGhpcy5fcGFydGlhbExpbmUgKyBjaHVuaztcblx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cblx0XHRcdHZhciByZXN1bHRzID0gdGhpcy5faGFuZGxlLnBhcnNlKGFnZ3JlZ2F0ZSwgdGhpcy5fYmFzZUluZGV4LCAhdGhpcy5fZmluaXNoZWQpO1xuXG5cdFx0XHRpZiAodGhpcy5faGFuZGxlLnBhdXNlZCgpIHx8IHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0dmFyIGxhc3RJbmRleCA9IHJlc3VsdHMubWV0YS5jdXJzb3I7XG5cblx0XHRcdGlmICghdGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gYWdncmVnYXRlLnN1YnN0cmluZyhsYXN0SW5kZXggLSB0aGlzLl9iYXNlSW5kZXgpO1xuXHRcdFx0XHR0aGlzLl9iYXNlSW5kZXggPSBsYXN0SW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXN1bHRzICYmIHJlc3VsdHMuZGF0YSlcblx0XHRcdFx0dGhpcy5fcm93Q291bnQgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblxuXHRcdFx0dmFyIGZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyA9IHRoaXMuX2ZpbmlzaGVkIHx8ICh0aGlzLl9jb25maWcucHJldmlldyAmJiB0aGlzLl9yb3dDb3VudCA+PSB0aGlzLl9jb25maWcucHJldmlldyk7XG5cblx0XHRcdGlmIChJU19QQVBBX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRmaW5pc2hlZDogZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jb25maWcuY2h1bmsocmVzdWx0cywgdGhpcy5faGFuZGxlKTtcblx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdHJlc3VsdHMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9jb25maWcuc3RlcCAmJiAhdGhpcy5fY29uZmlnLmNodW5rKSB7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhID0gdGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KHJlc3VsdHMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChyZXN1bHRzLmVycm9ycyk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhID0gcmVzdWx0cy5tZXRhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbXBsZXRlKSAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5hYm9ydGVkKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cywgdGhpcy5faW5wdXQpO1xuXG5cdFx0XHRpZiAoIWZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5wYXVzZWQpKVxuXHRcdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHRcdHRoaXMuX3NlbmRFcnJvciA9IGZ1bmN0aW9uKGVycm9yKVxuXHRcdHtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5lcnJvcikpXG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5lcnJvcihlcnJvcik7XG5cdFx0XHRlbHNlIGlmIChJU19QQVBBX1dPUktFUiAmJiB0aGlzLl9jb25maWcuZXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdGVycm9yOiBlcnJvcixcblx0XHRcdFx0XHRmaW5pc2hlZDogZmFsc2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHJlcGxhY2VDb25maWcoY29uZmlnKVxuXHRcdHtcblx0XHRcdC8vIERlZXAtY29weSB0aGUgY29uZmlnIHNvIHdlIGNhbiBlZGl0IGl0XG5cdFx0XHR2YXIgY29uZmlnQ29weSA9IGNvcHkoY29uZmlnKTtcblx0XHRcdGNvbmZpZ0NvcHkuY2h1bmtTaXplID0gcGFyc2VJbnQoY29uZmlnQ29weS5jaHVua1NpemUpO1x0Ly8gcGFyc2VJbnQgVkVSWSBpbXBvcnRhbnQgc28gd2UgZG9uJ3QgY29uY2F0ZW5hdGUgc3RyaW5ncyFcblx0XHRcdGlmICghY29uZmlnLnN0ZXAgJiYgIWNvbmZpZy5jaHVuaylcblx0XHRcdFx0Y29uZmlnQ29weS5jaHVua1NpemUgPSBudWxsOyAgLy8gZGlzYWJsZSBSYW5nZSBoZWFkZXIgaWYgbm90IHN0cmVhbWluZzsgYmFkIHZhbHVlcyBicmVhayBJSVMgLSBzZWUgaXNzdWUgIzE5NlxuXHRcdFx0dGhpcy5faGFuZGxlID0gbmV3IFBhcnNlckhhbmRsZShjb25maWdDb3B5KTtcblx0XHRcdHRoaXMuX2hhbmRsZS5zdHJlYW1lciA9IHRoaXM7XG5cdFx0XHR0aGlzLl9jb25maWcgPSBjb25maWdDb3B5O1x0Ly8gcGVyc2lzdCB0aGUgY29weSB0byB0aGUgY2FsbGVyXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBOZXR3b3JrU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmICghY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdGNvbmZpZy5jaHVua1NpemUgPSBQYXBhLlJlbW90ZUNodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciB4aHI7XG5cblx0XHRpZiAoSVNfV09SS0VSKVxuXHRcdHtcblx0XHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbih1cmwpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSB1cmw7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcdC8vIFN0YXJ0cyBzdHJlYW1pbmdcblx0XHR9O1xuXG5cdFx0dGhpcy5fcmVhZENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9maW5pc2hlZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpXG5cdFx0XHR7XG5cdFx0XHRcdHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIUlTX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHhoci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbignR0VUJywgdGhpcy5faW5wdXQsICFJU19XT1JLRVIpO1xuXHRcdFx0Ly8gSGVhZGVycyBjYW4gb25seSBiZSBzZXQgd2hlbiBvbmNlIHRoZSByZXF1ZXN0IHN0YXRlIGlzIE9QRU5FRFxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgaGVhZGVycyA9IHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO1xuXG5cdFx0XHRcdGZvciAodmFyIGhlYWRlck5hbWUgaW4gaGVhZGVycylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlcnNbaGVhZGVyTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gdGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplIC0gMTtcdC8vIG1pbnVzIG9uZSBiZWNhdXNlIGJ5dGUgcmFuZ2UgaXMgaW5jbHVzaXZlXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsICdieXRlcz0nK3RoaXMuX3N0YXJ0KyctJytlbmQpO1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignSWYtTm9uZS1NYXRjaCcsICd3ZWJraXQtbm8tY2FjaGUnKTsgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgyNjcyXG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHhoci5zZW5kKCk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoSVNfV09SS0VSICYmIHhoci5zdGF0dXMgPT09IDApXG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5fc3RhcnQgKz0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDQwMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXRoaXMuX2NvbmZpZy5jaHVua1NpemUgfHwgdGhpcy5fc3RhcnQgPiBnZXRGaWxlU2l6ZSh4aHIpO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpXG5cdFx0e1xuXHRcdFx0dmFyIGVycm9yVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8IGVycm9yTWVzc2FnZTtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihlcnJvclRleHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEZpbGVTaXplKHhocilcblx0XHR7XG5cdFx0XHR2YXIgY29udGVudFJhbmdlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVJhbmdlJyk7XG5cdFx0XHRpZiAoY29udGVudFJhbmdlID09PSBudWxsKSB7IC8vIG5vIGNvbnRlbnQgcmFuZ2UsIHRoZW4gZmluaXNoIVxuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoY29udGVudFJhbmdlLnN1YnN0cihjb250ZW50UmFuZ2UubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcblx0XHR9XG5cdH1cblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHROZXR3b3JrU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV0d29ya1N0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gRmlsZVN0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5Mb2NhbENodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciByZWFkZXIsIHNsaWNlO1xuXG5cdFx0Ly8gRmlsZVJlYWRlciBpcyBiZXR0ZXIgdGhhbiBGaWxlUmVhZGVyU3luYyAoZXZlbiBpbiB3b3JrZXIpIC0gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzI0NzA4NjQ5LzEwNDg4NjJcblx0XHQvLyBCdXQgRmlyZWZveCBpcyBhIHBpbGwsIHRvbyAtIHNlZSBpc3N1ZSAjNzY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzc2XG5cdFx0dmFyIHVzaW5nQXN5bmNSZWFkZXIgPSB0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCc7XHQvLyBTYWZhcmkgZG9lc24ndCBjb25zaWRlciBpdCBhIGZ1bmN0aW9uIC0gc2VlIGlzc3VlICMxMDVcblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24oZmlsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IGZpbGU7XG5cdFx0XHRzbGljZSA9IGZpbGUuc2xpY2UgfHwgZmlsZS53ZWJraXRTbGljZSB8fCBmaWxlLm1velNsaWNlO1xuXG5cdFx0XHRpZiAodXNpbmdBc3luY1JlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcdFx0Ly8gUHJlZmVycmVkIG1ldGhvZCBvZiByZWFkaW5nIGZpbGVzLCBldmVuIGluIHdvcmtlcnNcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHJlYWRlci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZWFkZXIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcdC8vIEhhY2sgZm9yIHJ1bm5pbmcgaW4gYSB3ZWIgd29ya2VyIGluIEZpcmVmb3hcblxuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoIXRoaXMuX2ZpbmlzaGVkICYmICghdGhpcy5fY29uZmlnLnByZXZpZXcgfHwgdGhpcy5fcm93Q291bnQgPCB0aGlzLl9jb25maWcucHJldmlldykpXG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dDtcblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gTWF0aC5taW4odGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplLCB0aGlzLl9pbnB1dC5zaXplKTtcblx0XHRcdFx0aW5wdXQgPSBzbGljZS5jYWxsKGlucHV0LCB0aGlzLl9zdGFydCwgZW5kKTtcblx0XHRcdH1cblx0XHRcdHZhciB0eHQgPSByZWFkZXIucmVhZEFzVGV4dChpbnB1dCwgdGhpcy5fY29uZmlnLmVuY29kaW5nKTtcblx0XHRcdGlmICghdXNpbmdBc3luY1JlYWRlcilcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoeyB0YXJnZXQ6IHsgcmVzdWx0OiB0eHQgfSB9KTtcdC8vIG1pbWljIHRoZSBhc3luYyBzaWduYXR1cmVcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKGV2ZW50KVxuXHRcdHtcblx0XHRcdC8vIFZlcnkgaW1wb3J0YW50IHRvIGluY3JlbWVudCBzdGFydCBlYWNoIHRpbWUgYmVmb3JlIGhhbmRsaW5nIHJlc3VsdHNcblx0XHRcdHRoaXMuX3N0YXJ0ICs9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICF0aGlzLl9jb25maWcuY2h1bmtTaXplIHx8IHRoaXMuX3N0YXJ0ID49IHRoaXMuX2lucHV0LnNpemU7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IocmVhZGVyLmVycm9yKTtcblx0XHR9XG5cblx0fVxuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdEZpbGVTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBTdHJpbmdTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgc3RyaW5nO1xuXHRcdHZhciByZW1haW5pbmc7XG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzKVxuXHRcdHtcblx0XHRcdHN0cmluZyA9IHM7XG5cdFx0XHRyZW1haW5pbmcgPSBzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX25leHRDaHVuaygpO1xuXHRcdH1cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKSByZXR1cm47XG5cdFx0XHR2YXIgc2l6ZSA9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR2YXIgY2h1bmsgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cigwLCBzaXplKSA6IHJlbWFpbmluZztcblx0XHRcdHJlbWFpbmluZyA9IHNpemUgPyByZW1haW5pbmcuc3Vic3RyKHNpemUpIDogJyc7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICFyZW1haW5pbmc7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNodW5rKGNodW5rKTtcblx0XHR9XG5cdH1cblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHR2YXIgcGFyc2VPbkRhdGEgPSB0cnVlO1xuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSBzdHJlYW07XG5cblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdkYXRhJywgdGhpcy5fc3RyZWFtRGF0YSk7XG5cdFx0XHR0aGlzLl9pbnB1dC5vbignZW5kJywgdGhpcy5fc3RyZWFtRW5kKTtcblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdlcnJvcicsIHRoaXMuX3N0cmVhbUVycm9yKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHF1ZXVlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wYXJzZUNodW5rKHF1ZXVlLnNoaWZ0KCkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRwYXJzZU9uRGF0YSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3RyZWFtRGF0YSA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHR0cnlcblx0XHRcdHtcblx0XHRcdFx0cXVldWUucHVzaCh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gY2h1bmsgOiBjaHVuay50b1N0cmluZyh0aGlzLl9jb25maWcuZW5jb2RpbmcpKTtcblxuXHRcdFx0XHRpZiAocGFyc2VPbkRhdGEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXJzZU9uRGF0YSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMucGFyc2VDaHVuayhxdWV1ZS5zaGlmdCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9zdHJlYW1FcnJvcihlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FcnJvciA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihlcnJvcilcblx0XHR7XG5cdFx0XHR0aGlzLl9zdHJlYW1DbGVhblVwKCk7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IoZXJyb3IubWVzc2FnZSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FbmQgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuX3N0cmVhbUNsZWFuVXAoKTtcblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3N0cmVhbURhdGEoJycpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5fc3RyZWFtQ2xlYW5VcCA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCB0aGlzLl9zdHJlYW1EYXRhKTtcblx0XHRcdHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKCdlbmQnLCB0aGlzLl9zdHJlYW1FbmQpO1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fc3RyZWFtRXJyb3IpO1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXG5cdC8vIFVzZSBvbmUgUGFyc2VySGFuZGxlIHBlciBlbnRpcmUgQ1NWIGZpbGUgb3Igc3RyaW5nXG5cdGZ1bmN0aW9uIFBhcnNlckhhbmRsZShfY29uZmlnKVxuXHR7XG5cdFx0Ly8gT25lIGdvYWwgaXMgdG8gbWluaW1pemUgdGhlIHVzZSBvZiByZWd1bGFyIGV4cHJlc3Npb25zLi4uXG5cdFx0dmFyIEZMT0FUID0gL15cXHMqLT8oXFxkKlxcLj9cXGQrfFxcZCtcXC4/XFxkKikoZVstK10/XFxkKyk/XFxzKiQvaTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgX3N0ZXBDb3VudGVyID0gMDtcdC8vIE51bWJlciBvZiB0aW1lcyBzdGVwIHdhcyBjYWxsZWQgKG51bWJlciBvZiByb3dzIHBhcnNlZClcblx0XHR2YXIgX2lucHV0O1x0XHRcdFx0Ly8gVGhlIGlucHV0IGJlaW5nIHBhcnNlZFxuXHRcdHZhciBfcGFyc2VyO1x0XHRcdC8vIFRoZSBjb3JlIHBhcnNlciBiZWluZyB1c2VkXG5cdFx0dmFyIF9wYXVzZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgd2UgYXJlIHBhdXNlZCBvciBub3Rcblx0XHR2YXIgX2Fib3J0ZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgdGhlIHBhcnNlciBoYXMgYWJvcnRlZCBvciBub3Rcblx0XHR2YXIgX2RlbGltaXRlckVycm9yO1x0Ly8gVGVtcG9yYXJ5IHN0YXRlIGJldHdlZW4gZGVsaW1pdGVyIGRldGVjdGlvbiBhbmQgcHJvY2Vzc2luZyByZXN1bHRzXG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcdFx0Ly8gRmllbGRzIGFyZSBmcm9tIHRoZSBoZWFkZXIgcm93IG9mIHRoZSBpbnB1dCwgaWYgdGhlcmUgaXMgb25lXG5cdFx0dmFyIF9yZXN1bHRzID0ge1x0XHQvLyBUaGUgbGFzdCByZXN1bHRzIHJldHVybmVkIGZyb20gdGhlIHBhcnNlclxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXG5cdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKSlcblx0XHR7XG5cdFx0XHR2YXIgdXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0e1xuXHRcdFx0XHRfcmVzdWx0cyA9IHJlc3VsdHM7XG5cblx0XHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdFx0ZWxzZVx0Ly8gb25seSBjYWxsIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFmdGVyIGhlYWRlciByb3dcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cblx0XHRcdFx0XHQvLyBJdCdzIHBvc3NiaWxlIHRoYXQgdGhpcyBsaW5lIHdhcyBlbXB0eSBhbmQgdGhlcmUncyBubyByb3cgaGVyZSBhZnRlciBhbGxcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YS5sZW5ndGggPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRfc3RlcENvdW50ZXIgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9zdGVwQ291bnRlciA+IF9jb25maWcucHJldmlldylcblx0XHRcdFx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR1c2VyU3RlcChfcmVzdWx0cywgc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUGFyc2VzIGlucHV0LiBNb3N0IHVzZXJzIHdvbid0IG5lZWQsIGFuZCBzaG91bGRuJ3QgbWVzcyB3aXRoLCB0aGUgYmFzZUluZGV4XG5cdFx0ICogYW5kIGlnbm9yZUxhc3RSb3cgcGFyYW1ldGVycy4gVGhleSBhcmUgdXNlZCBieSBzdHJlYW1lcnMgKHdyYXBwZXIgZnVuY3Rpb25zKVxuXHRcdCAqIHdoZW4gYW4gaW5wdXQgY29tZXMgaW4gbXVsdGlwbGUgY2h1bmtzLCBsaWtlIGZyb20gYSBmaWxlLlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KVxuXHRcdHtcblx0XHRcdGlmICghX2NvbmZpZy5uZXdsaW5lKVxuXHRcdFx0XHRfY29uZmlnLm5ld2xpbmUgPSBndWVzc0xpbmVFbmRpbmdzKGlucHV0KTtcblxuXHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHRpZiAoIV9jb25maWcuZGVsaW1pdGVyKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW1HdWVzcyA9IGd1ZXNzRGVsaW1pdGVyKGlucHV0LCBfY29uZmlnLm5ld2xpbmUsIF9jb25maWcuc2tpcEVtcHR5TGluZXMpO1xuXHRcdFx0XHRpZiAoZGVsaW1HdWVzcy5zdWNjZXNzZnVsKVxuXHRcdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gZGVsaW1HdWVzcy5iZXN0RGVsaW1pdGVyO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSB0cnVlO1x0Ly8gYWRkIGVycm9yIGFmdGVyIHBhcnNpbmcgKG90aGVyd2lzZSBpdCB3b3VsZCBiZSBvdmVyd3JpdHRlbilcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IFBhcGEuRGVmYXVsdERlbGltaXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihpc0Z1bmN0aW9uKF9jb25maWcuZGVsaW1pdGVyKSlcblx0XHRcdHtcblx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcihpbnB1dCk7XG5cdFx0XHRcdF9yZXN1bHRzLm1ldGEuZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXJzZXJDb25maWcgPSBjb3B5KF9jb25maWcpO1xuXHRcdFx0aWYgKF9jb25maWcucHJldmlldyAmJiBfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0cGFyc2VyQ29uZmlnLnByZXZpZXcrKztcdC8vIHRvIGNvbXBlbnNhdGUgZm9yIGhlYWRlciByb3dcblxuXHRcdFx0X2lucHV0ID0gaW5wdXQ7XG5cdFx0XHRfcGFyc2VyID0gbmV3IFBhcnNlcihwYXJzZXJDb25maWcpO1xuXHRcdFx0X3Jlc3VsdHMgPSBfcGFyc2VyLnBhcnNlKF9pbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KTtcblx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cdFx0XHRyZXR1cm4gX3BhdXNlZCA/IHsgbWV0YTogeyBwYXVzZWQ6IHRydWUgfSB9IDogKF9yZXN1bHRzIHx8IHsgbWV0YTogeyBwYXVzZWQ6IGZhbHNlIH0gfSk7XG5cdFx0fTtcblxuXHRcdHRoaXMucGF1c2VkID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHJldHVybiBfcGF1c2VkO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhdXNlID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9wYXVzZWQgPSB0cnVlO1xuXHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LnN1YnN0cihfcGFyc2VyLmdldENoYXJJbmRleCgpKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X3BhdXNlZCA9IGZhbHNlO1xuXHRcdFx0c2VsZi5zdHJlYW1lci5wYXJzZUNodW5rKF9pbnB1dCk7XG5cdFx0fTtcblxuXHRcdHRoaXMuYWJvcnRlZCA9IGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9hYm9ydGVkO1xuXHRcdH07XG5cblx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdF9yZXN1bHRzLm1ldGEuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKSlcblx0XHRcdFx0X2NvbmZpZy5jb21wbGV0ZShfcmVzdWx0cyk7XG5cdFx0XHRfaW5wdXQgPSAnJztcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdHMoKVxuXHRcdHtcblx0XHRcdGlmIChfcmVzdWx0cyAmJiBfZGVsaW1pdGVyRXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGFkZEVycm9yKCdEZWxpbWl0ZXInLCAnVW5kZXRlY3RhYmxlRGVsaW1pdGVyJywgJ1VuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvIFxcJycrUGFwYS5EZWZhdWx0RGVsaW1pdGVyKydcXCcnKTtcblx0XHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLnNraXBFbXB0eUxpbmVzKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aWYgKF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoID09PSAxICYmIF9yZXN1bHRzLmRhdGFbaV1bMF0gPT09ICcnKVxuXHRcdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YS5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdGZpbGxIZWFkZXJGaWVsZHMoKTtcblxuXHRcdFx0cmV0dXJuIGFwcGx5SGVhZGVyQW5kRHluYW1pY1R5cGluZygpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5lZWRzSGVhZGVyUm93KClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX2NvbmZpZy5oZWFkZXIgJiYgX2ZpZWxkcy5sZW5ndGggPT09IDA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmlsbEhlYWRlckZpZWxkcygpXG5cdFx0e1xuXHRcdFx0aWYgKCFfcmVzdWx0cylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IG5lZWRzSGVhZGVyUm93KCkgJiYgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRfZmllbGRzLnB1c2goX3Jlc3VsdHMuZGF0YVtpXVtqXSk7XG5cdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZSgwLCAxKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpIHtcblx0XHRcdC8vIENhY2hlIGZ1bmN0aW9uIHZhbHVlcyB0byBhdm9pZCBjYWxsaW5nIGl0IGZvciBlYWNoIHJvd1xuXHRcdFx0aWYgKF9jb25maWcuZHluYW1pY1R5cGluZ0Z1bmN0aW9uICYmIF9jb25maWcuZHluYW1pY1R5cGluZ1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdID0gX2NvbmZpZy5keW5hbWljVHlwaW5nRnVuY3Rpb24oZmllbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdIHx8IF9jb25maWcuZHluYW1pY1R5cGluZykgPT09IHRydWVcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKVxuXHRcdHtcblx0XHRcdGlmIChzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ1RSVUUnKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ0ZBTFNFJylcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gdHJ5UGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKClcblx0XHR7XG5cdFx0XHRpZiAoIV9yZXN1bHRzIHx8ICghX2NvbmZpZy5oZWFkZXIgJiYgIV9jb25maWcuZHluYW1pY1R5cGluZykpXG5cdFx0XHRcdHJldHVybiBfcmVzdWx0cztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93ID0gX2NvbmZpZy5oZWFkZXIgPyB7fSA6IFtdO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBmaWVsZCA9IGo7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gX3Jlc3VsdHMuZGF0YVtpXVtqXTtcblxuXHRcdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0XHRcdGZpZWxkID0gaiA+PSBfZmllbGRzLmxlbmd0aCA/ICdfX3BhcnNlZF9leHRyYScgOiBfZmllbGRzW2pdO1xuXG5cdFx0XHRcdFx0dmFsdWUgPSBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKTtcblxuXHRcdFx0XHRcdGlmIChmaWVsZCA9PT0gJ19fcGFyc2VkX2V4dHJhJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3dbZmllbGRdID0gcm93W2ZpZWxkXSB8fCBbXTtcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV0gPSByb3c7XG5cblx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGogPiBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKCdGaWVsZE1pc21hdGNoJywgJ1Rvb01hbnlGaWVsZHMnLCAnVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCAnICsgX2ZpZWxkcy5sZW5ndGggKyAnIGZpZWxkcyBidXQgcGFyc2VkICcgKyBqLCBpKTtcblx0XHRcdFx0XHRlbHNlIGlmIChqIDwgX2ZpZWxkcy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRhZGRFcnJvcignRmllbGRNaXNtYXRjaCcsICdUb29GZXdGaWVsZHMnLCAnVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkICcgKyBfZmllbGRzLmxlbmd0aCArICcgZmllbGRzIGJ1dCBwYXJzZWQgJyArIGosIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLmhlYWRlciAmJiBfcmVzdWx0cy5tZXRhKVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmZpZWxkcyA9IF9maWVsZHM7XG5cdFx0XHRyZXR1cm4gX3Jlc3VsdHM7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQsIG5ld2xpbmUsIHNraXBFbXB0eUxpbmVzKVxuXHRcdHtcblx0XHRcdHZhciBkZWxpbUNob2ljZXMgPSBbJywnLCAnXFx0JywgJ3wnLCAnOycsIFBhcGEuUkVDT1JEX1NFUCwgUGFwYS5VTklUX1NFUF07XG5cdFx0XHR2YXIgYmVzdERlbGltLCBiZXN0RGVsdGEsIGZpZWxkQ291bnRQcmV2Um93O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlbGltQ2hvaWNlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIGRlbGltID0gZGVsaW1DaG9pY2VzW2ldO1xuXHRcdFx0XHR2YXIgZGVsdGEgPSAwLCBhdmdGaWVsZENvdW50ID0gMCwgZW1wdHlMaW5lc0NvdW50ID0gMDtcblx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0dmFyIHByZXZpZXcgPSBuZXcgUGFyc2VyKHtcblx0XHRcdFx0XHRkZWxpbWl0ZXI6IGRlbGltLFxuXHRcdFx0XHRcdG5ld2xpbmU6IG5ld2xpbmUsXG5cdFx0XHRcdFx0cHJldmlldzogMTBcblx0XHRcdFx0fSkucGFyc2UoaW5wdXQpO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcHJldmlldy5kYXRhLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKHNraXBFbXB0eUxpbmVzICYmIHByZXZpZXcuZGF0YVtqXS5sZW5ndGggPT09IDEgJiYgcHJldmlldy5kYXRhW2pdWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0ZW1wdHlMaW5lc0NvdW50Kytcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBmaWVsZENvdW50ID0gcHJldmlldy5kYXRhW2pdLmxlbmd0aDtcblx0XHRcdFx0XHRhdmdGaWVsZENvdW50ICs9IGZpZWxkQ291bnQ7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIGZpZWxkQ291bnRQcmV2Um93ID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IGZpZWxkQ291bnQ7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZmllbGRDb3VudCA+IDEpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGVsdGEgKz0gTWF0aC5hYnMoZmllbGRDb3VudCAtIGZpZWxkQ291bnRQcmV2Um93KTtcblx0XHRcdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gZmllbGRDb3VudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJldmlldy5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0YXZnRmllbGRDb3VudCAvPSAocHJldmlldy5kYXRhLmxlbmd0aCAtIGVtcHR5TGluZXNDb3VudCk7XG5cblx0XHRcdFx0aWYgKCh0eXBlb2YgYmVzdERlbHRhID09PSAndW5kZWZpbmVkJyB8fCBkZWx0YSA8IGJlc3REZWx0YSlcblx0XHRcdFx0XHQmJiBhdmdGaWVsZENvdW50ID4gMS45OSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJlc3REZWx0YSA9IGRlbHRhO1xuXHRcdFx0XHRcdGJlc3REZWxpbSA9IGRlbGltO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gYmVzdERlbGltO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzZnVsOiAhIWJlc3REZWxpbSxcblx0XHRcdFx0YmVzdERlbGltaXRlcjogYmVzdERlbGltXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NMaW5lRW5kaW5ncyhpbnB1dClcblx0XHR7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnN1YnN0cigwLCAxMDI0KjEwMjQpO1x0Ly8gbWF4IGxlbmd0aCAxIE1CXG5cblx0XHRcdHZhciByID0gaW5wdXQuc3BsaXQoJ1xccicpO1xuXG5cdFx0XHR2YXIgbiA9IGlucHV0LnNwbGl0KCdcXG4nKTtcblxuXHRcdFx0dmFyIG5BcHBlYXJzRmlyc3QgPSAobi5sZW5ndGggPiAxICYmIG5bMF0ubGVuZ3RoIDwgclswXS5sZW5ndGgpO1xuXG5cdFx0XHRpZiAoci5sZW5ndGggPT09IDEgfHwgbkFwcGVhcnNGaXJzdClcblx0XHRcdFx0cmV0dXJuICdcXG4nO1xuXG5cdFx0XHR2YXIgbnVtV2l0aE4gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAocltpXVswXSA9PT0gJ1xcbicpXG5cdFx0XHRcdFx0bnVtV2l0aE4rKztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bVdpdGhOID49IHIubGVuZ3RoIC8gMiA/ICdcXHJcXG4nIDogJ1xccic7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJ5UGFyc2VGbG9hdCh2YWwpXG5cdFx0e1xuXHRcdFx0dmFyIGlzTnVtYmVyID0gRkxPQVQudGVzdCh2YWwpO1xuXHRcdFx0cmV0dXJuIGlzTnVtYmVyID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZEVycm9yKHR5cGUsIGNvZGUsIG1zZywgcm93KVxuXHRcdHtcblx0XHRcdF9yZXN1bHRzLmVycm9ycy5wdXNoKHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0Y29kZTogY29kZSxcblx0XHRcdFx0bWVzc2FnZTogbXNnLFxuXHRcdFx0XHRyb3c6IHJvd1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXHQvKiogVGhlIGNvcmUgcGFyc2VyIGltcGxlbWVudHMgc3BlZWR5IGFuZCBjb3JyZWN0IENTViBwYXJzaW5nICovXG5cdGZ1bmN0aW9uIFBhcnNlcihjb25maWcpXG5cdHtcblx0XHQvLyBVbnBhY2sgdGhlIGNvbmZpZyBvYmplY3Rcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0dmFyIGRlbGltID0gY29uZmlnLmRlbGltaXRlcjtcblx0XHR2YXIgbmV3bGluZSA9IGNvbmZpZy5uZXdsaW5lO1xuXHRcdHZhciBjb21tZW50cyA9IGNvbmZpZy5jb21tZW50cztcblx0XHR2YXIgc3RlcCA9IGNvbmZpZy5zdGVwO1xuXHRcdHZhciBwcmV2aWV3ID0gY29uZmlnLnByZXZpZXc7XG5cdFx0dmFyIGZhc3RNb2RlID0gY29uZmlnLmZhc3RNb2RlO1xuXHRcdHZhciBxdW90ZUNoYXIgPSBjb25maWcucXVvdGVDaGFyIHx8ICdcIic7XG5cblx0XHQvLyBEZWxpbWl0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmICh0eXBlb2YgZGVsaW0gIT09ICdzdHJpbmcnXG5cdFx0XHR8fCBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoZGVsaW0pID4gLTEpXG5cdFx0XHRkZWxpbSA9ICcsJztcblxuXHRcdC8vIENvbW1lbnQgY2hhcmFjdGVyIG11c3QgYmUgdmFsaWRcblx0XHRpZiAoY29tbWVudHMgPT09IGRlbGltKVxuXHRcdFx0dGhyb3cgJ0NvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyJztcblx0XHRlbHNlIGlmIChjb21tZW50cyA9PT0gdHJ1ZSlcblx0XHRcdGNvbW1lbnRzID0gJyMnO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBjb21tZW50cyAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihjb21tZW50cykgPiAtMSlcblx0XHRcdGNvbW1lbnRzID0gZmFsc2U7XG5cblx0XHQvLyBOZXdsaW5lIG11c3QgYmUgdmFsaWQ6IFxcciwgXFxuLCBvciBcXHJcXG5cblx0XHRpZiAobmV3bGluZSAhPSAnXFxuJyAmJiBuZXdsaW5lICE9ICdcXHInICYmIG5ld2xpbmUgIT0gJ1xcclxcbicpXG5cdFx0XHRuZXdsaW5lID0gJ1xcbic7XG5cblx0XHQvLyBXZSdyZSBnb25uYSBuZWVkIHRoZXNlIGF0IHRoZSBQYXJzZXIgc2NvcGVcblx0XHR2YXIgY3Vyc29yID0gMDtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0Ly8gRm9yIHNvbWUgcmVhc29uLCBpbiBDaHJvbWUsIHRoaXMgc3BlZWRzIHRoaW5ncyB1cCAoIT8pXG5cdFx0XHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJylcblx0XHRcdFx0dGhyb3cgJ0lucHV0IG11c3QgYmUgYSBzdHJpbmcnO1xuXG5cdFx0XHQvLyBXZSBkb24ndCBuZWVkIHRvIGNvbXB1dGUgc29tZSBvZiB0aGVzZSBldmVyeSB0aW1lIHBhcnNlKCkgaXMgY2FsbGVkLFxuXHRcdFx0Ly8gYnV0IGhhdmluZyB0aGVtIGluIGEgbW9yZSBsb2NhbCBzY29wZSBzZWVtcyB0byBwZXJmb3JtIGJldHRlclxuXHRcdFx0dmFyIGlucHV0TGVuID0gaW5wdXQubGVuZ3RoLFxuXHRcdFx0XHRkZWxpbUxlbiA9IGRlbGltLmxlbmd0aCxcblx0XHRcdFx0bmV3bGluZUxlbiA9IG5ld2xpbmUubGVuZ3RoLFxuXHRcdFx0XHRjb21tZW50c0xlbiA9IGNvbW1lbnRzLmxlbmd0aDtcblx0XHRcdHZhciBzdGVwSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oc3RlcCk7XG5cblx0XHRcdC8vIEVzdGFibGlzaCBzdGFydGluZyBzdGF0ZVxuXHRcdFx0Y3Vyc29yID0gMDtcblx0XHRcdHZhciBkYXRhID0gW10sIGVycm9ycyA9IFtdLCByb3cgPSBbXSwgbGFzdEN1cnNvciA9IDA7XG5cblx0XHRcdGlmICghaW5wdXQpXG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cblx0XHRcdGlmIChmYXN0TW9kZSB8fCAoZmFzdE1vZGUgIT09IGZhbHNlICYmIGlucHV0LmluZGV4T2YocXVvdGVDaGFyKSA9PT0gLTEpKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93cyA9IGlucHV0LnNwbGl0KG5ld2xpbmUpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcm93ID0gcm93c1tpXTtcblx0XHRcdFx0XHRjdXJzb3IgKz0gcm93Lmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoaSAhPT0gcm93cy5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdFx0Y3Vyc29yICs9IG5ld2xpbmUubGVuZ3RoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cuc3Vic3RyKDAsIGNvbW1lbnRzTGVuKSA9PT0gY29tbWVudHMpXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IFtdO1xuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHB1c2hSb3cocm93LnNwbGl0KGRlbGltKSk7XG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgaSA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIHByZXZpZXcpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0dmFyIG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChxdW90ZUNoYXIrcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0XHQvLyBQYXJzZXIgbG9vcFxuXHRcdFx0Zm9yICg7Oylcblx0XHRcdHtcblx0XHRcdFx0Ly8gRmllbGQgaGFzIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0aWYgKGlucHV0W2N1cnNvcl0gPT09IHF1b3RlQ2hhcilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIFN0YXJ0IG91ciBzZWFyY2ggZm9yIHRoZSBjbG9zaW5nIHF1b3RlIHdoZXJlIHRoZSBjdXJzb3IgaXNcblx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBjdXJzb3I7XG5cblx0XHRcdFx0XHQvLyBTa2lwIHRoZSBvcGVuaW5nIHF1b3RlXG5cdFx0XHRcdFx0Y3Vyc29yKys7XG5cblx0XHRcdFx0XHRmb3IgKDs7KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgY2xvc2luZyBxdW90ZVxuXHRcdFx0XHRcdFx0dmFyIHF1b3RlU2VhcmNoID0gaW5wdXQuaW5kZXhPZihxdW90ZUNoYXIsIHF1b3RlU2VhcmNoKzEpO1xuXG5cdFx0XHRcdFx0XHQvL05vIG90aGVyIHF1b3RlcyBhcmUgZm91bmQgLSBubyBvdGhlciBkZWxpbWl0ZXJzXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IC0xKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlnbm9yZUxhc3RSb3cpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBObyBjbG9zaW5nIHF1b3RlLi4uIHdoYXQgYSBwaXR5XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2RlOiAnTWlzc2luZ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4OiBjdXJzb3Jcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgYXQgRU9GXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IGlucHV0TGVuLTEpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhpcyBxdW90ZSBpcyBlc2NhcGVkLCBpdCdzIHBhcnQgb2YgdGhlIGRhdGE7IHNraXAgaXRcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gcXVvdGVDaGFyKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRxdW90ZVNlYXJjaCsrO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBkZWxpbWl0ZXJcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gZGVsaW0pXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpKTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yID0gcXVvdGVTZWFyY2ggKyAxICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBuZXdsaW5lXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXQuc3Vic3RyKHF1b3RlU2VhcmNoKzEsIG5ld2xpbmVMZW4pID09PSBuZXdsaW5lKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgcXVvdGVDaGFyKSk7XG5cdFx0XHRcdFx0XHRcdHNhdmVSb3cocXVvdGVTZWFyY2ggKyAxICsgbmV3bGluZUxlbik7XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XHQvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHNraXBwZWQgdGhlIG5leHREZWxpbSBpbiB0aGUgcXVvdGVkIGZpZWxkXG5cblx0XHRcdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgZGF0YS5sZW5ndGggPj0gcHJldmlldylcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHQvLyBDaGVja3MgZm9yIHZhbGlkIGNsb3NpbmcgcXVvdGVzIGFyZSBjb21wbGV0ZSAoZXNjYXBlZCBxdW90ZXMgb3IgcXVvdGUgZm9sbG93ZWQgYnkgRU9GL2RlbGltaXRlci9uZXdsaW5lKSAtLSBhc3N1bWUgdGhlc2UgcXVvdGVzIGFyZSBwYXJ0IG9mIGFuIGludmFsaWQgdGV4dCBzdHJpbmdcblx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdGNvZGU6ICdJbnZhbGlkUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWQnLFxuXHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0aW5kZXg6IGN1cnNvclxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHF1b3RlU2VhcmNoKys7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29tbWVudCBmb3VuZCBhdCBzdGFydCBvZiBuZXcgbGluZVxuXHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93Lmxlbmd0aCA9PT0gMCAmJiBpbnB1dC5zdWJzdHIoY3Vyc29yLCBjb21tZW50c0xlbikgPT09IGNvbW1lbnRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKG5leHROZXdsaW5lID09PSAtMSlcdC8vIENvbW1lbnQgZW5kcyBhdCBFT0Zcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0Y3Vyc29yID0gbmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuO1xuXHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBOZXh0IGRlbGltaXRlciBjb21lcyBiZWZvcmUgbmV4dCBuZXdsaW5lLCBzbyB3ZSd2ZSByZWFjaGVkIGVuZCBvZiBmaWVsZFxuXHRcdFx0XHRpZiAobmV4dERlbGltICE9PSAtMSAmJiAobmV4dERlbGltIDwgbmV4dE5ld2xpbmUgfHwgbmV4dE5ld2xpbmUgPT09IC0xKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIG5leHREZWxpbSkpO1xuXHRcdFx0XHRcdGN1cnNvciA9IG5leHREZWxpbSArIGRlbGltTGVuO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBFbmQgb2Ygcm93XG5cdFx0XHRcdGlmIChuZXh0TmV3bGluZSAhPT0gLTEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBuZXh0TmV3bGluZSkpO1xuXHRcdFx0XHRcdHNhdmVSb3cobmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuKTtcblxuXHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGRhdGEubGVuZ3RoID49IHByZXZpZXcpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblxuXHRcdFx0cmV0dXJuIGZpbmlzaCgpO1xuXG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hSb3cocm93KVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLnB1c2gocm93KTtcblx0XHRcdFx0bGFzdEN1cnNvciA9IGN1cnNvcjtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSByZW1haW5pbmcgaW5wdXQgZnJvbSBjdXJzb3IgdG8gdGhlIGVuZCBpbnRvXG5cdFx0XHQgKiByb3csIHNhdmVzIHRoZSByb3csIGNhbGxzIHN0ZXAsIGFuZCByZXR1cm5zIHRoZSByZXN1bHRzLlxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBmaW5pc2godmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpZ25vcmVMYXN0Um93KVxuXHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXQuc3Vic3RyKGN1cnNvcik7XG5cdFx0XHRcdHJvdy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y3Vyc29yID0gaW5wdXRMZW47XHQvLyBpbXBvcnRhbnQgaW4gY2FzZSBwYXJzaW5nIGlzIHBhdXNlZFxuXHRcdFx0XHRwdXNoUm93KHJvdyk7XG5cdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSBjdXJyZW50IHJvdyB0byB0aGUgcmVzdWx0cy4gSXQgc2V0cyB0aGUgY3Vyc29yXG5cdFx0XHQgKiB0byBuZXdDdXJzb3IgYW5kIGZpbmRzIHRoZSBuZXh0TmV3bGluZS4gVGhlIGNhbGxlciBzaG91bGRcblx0XHRcdCAqIHRha2UgY2FyZSB0byBleGVjdXRlIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFuZCBjaGVjayBmb3Jcblx0XHRcdCAqIHByZXZpZXcgYW5kIGVuZCBwYXJzaW5nIGlmIG5lY2Vzc2FyeS5cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gc2F2ZVJvdyhuZXdDdXJzb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnNvciA9IG5ld0N1cnNvcjtcblx0XHRcdFx0cHVzaFJvdyhyb3cpO1xuXHRcdFx0XHRyb3cgPSBbXTtcblx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSByZXN1bHRzLCBlcnJvcnMsIGFuZCBtZXRhLiAqL1xuXHRcdFx0ZnVuY3Rpb24gcmV0dXJuYWJsZShzdG9wcGVkKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0ZXJyb3JzOiBlcnJvcnMsXG5cdFx0XHRcdFx0bWV0YToge1xuXHRcdFx0XHRcdFx0ZGVsaW1pdGVyOiBkZWxpbSxcblx0XHRcdFx0XHRcdGxpbmVicmVhazogbmV3bGluZSxcblx0XHRcdFx0XHRcdGFib3J0ZWQ6IGFib3J0ZWQsXG5cdFx0XHRcdFx0XHR0cnVuY2F0ZWQ6ICEhc3RvcHBlZCxcblx0XHRcdFx0XHRcdGN1cnNvcjogbGFzdEN1cnNvciArIChiYXNlSW5kZXggfHwgMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBFeGVjdXRlcyB0aGUgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYW5kIHJlc2V0cyBkYXRhICYgZXJyb3JzLiAqL1xuXHRcdFx0ZnVuY3Rpb24gZG9TdGVwKClcblx0XHRcdHtcblx0XHRcdFx0c3RlcChyZXR1cm5hYmxlKCkpO1xuXHRcdFx0XHRkYXRhID0gW10sIGVycm9ycyA9IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKiogU2V0cyB0aGUgYWJvcnQgZmxhZyAqL1xuXHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdC8qKiBHZXRzIHRoZSBjdXJzb3IgcG9zaXRpb24gKi9cblx0XHR0aGlzLmdldENoYXJJbmRleCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gY3Vyc29yO1xuXHRcdH07XG5cdH1cblxuXG5cdC8vIElmIHlvdSBuZWVkIHRvIGxvYWQgUGFwYSBQYXJzZSBhc3luY2hyb25vdXNseSBhbmQgeW91IGFsc28gbmVlZCB3b3JrZXIgdGhyZWFkcywgaGFyZC1jb2RlXG5cdC8vIHRoZSBzY3JpcHQgcGF0aCBoZXJlLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzg3I2lzc3VlY29tbWVudC01Nzg4NTM1OFxuXHRmdW5jdGlvbiBnZXRTY3JpcHRQYXRoKClcblx0e1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdHJldHVybiBzY3JpcHRzLmxlbmd0aCA/IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMgOiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIG5ld1dvcmtlcigpXG5cdHtcblx0XHRpZiAoIVBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCFMT0FERURfU1lOQyAmJiBQYXBhLlNDUklQVF9QQVRIID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnU2NyaXB0IHBhdGggY2Fubm90IGJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSB3aGVuIFBhcGEgUGFyc2UgaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5LiAnICtcblx0XHRcdFx0J1lvdSBuZWVkIHRvIHNldCBQYXBhLlNDUklQVF9QQVRIIG1hbnVhbGx5Lidcblx0XHRcdCk7XG5cdFx0dmFyIHdvcmtlclVybCA9IFBhcGEuU0NSSVBUX1BBVEggfHwgQVVUT19TQ1JJUFRfUEFUSDtcblx0XHQvLyBBcHBlbmQgJ3BhcGF3b3JrZXInIHRvIHRoZSBzZWFyY2ggc3RyaW5nIHRvIHRlbGwgcGFwYXBhcnNlIHRoYXQgdGhpcyBpcyBvdXIgd29ya2VyLlxuXHRcdHdvcmtlclVybCArPSAod29ya2VyVXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPycpICsgJ3BhcGF3b3JrZXInO1xuXHRcdHZhciB3ID0gbmV3IGdsb2JhbC5Xb3JrZXIod29ya2VyVXJsKTtcblx0XHR3Lm9ubWVzc2FnZSA9IG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdFx0dy5pZCA9IHdvcmtlcklkQ291bnRlcisrO1xuXHRcdHdvcmtlcnNbdy5pZF0gPSB3O1xuXHRcdHJldHVybiB3O1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gbWFpbiB0aHJlYWQgcmVjZWl2ZXMgYSBtZXNzYWdlICovXG5cdGZ1bmN0aW9uIG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbbXNnLndvcmtlcklkXTtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKG1zZy5lcnJvcilcblx0XHRcdHdvcmtlci51c2VyRXJyb3IobXNnLmVycm9yLCBtc2cuZmlsZSk7XG5cdFx0ZWxzZSBpZiAobXNnLnJlc3VsdHMgJiYgbXNnLnJlc3VsdHMuZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0XHRcdGNvbXBsZXRlV29ya2VyKG1zZy53b3JrZXJJZCwgeyBkYXRhOiBbXSwgZXJyb3JzOiBbXSwgbWV0YTogeyBhYm9ydGVkOiB0cnVlIH0gfSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgaGFuZGxlID0ge1xuXHRcdFx0XHRhYm9ydDogYWJvcnQsXG5cdFx0XHRcdHBhdXNlOiBub3RJbXBsZW1lbnRlZCxcblx0XHRcdFx0cmVzdW1lOiBub3RJbXBsZW1lbnRlZFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJTdGVwKSlcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2cucmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d29ya2VyLnVzZXJTdGVwKHtcblx0XHRcdFx0XHRcdGRhdGE6IFttc2cucmVzdWx0cy5kYXRhW2ldXSxcblx0XHRcdFx0XHRcdGVycm9yczogbXNnLnJlc3VsdHMuZXJyb3JzLFxuXHRcdFx0XHRcdFx0bWV0YTogbXNnLnJlc3VsdHMubWV0YVxuXHRcdFx0XHRcdH0sIGhhbmRsZSk7XG5cdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgbXNnLnJlc3VsdHM7XHQvLyBmcmVlIG1lbW9yeSBBU0FQXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR3b3JrZXIudXNlckNodW5rKG1zZy5yZXN1bHRzLCBoYW5kbGUsIG1zZy5maWxlKTtcblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtc2cuZmluaXNoZWQgJiYgIWFib3J0ZWQpXG5cdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIG1zZy5yZXN1bHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBsZXRlV29ya2VyKHdvcmtlcklkLCByZXN1bHRzKSB7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbd29ya2VySWRdO1xuXHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ29tcGxldGUpKVxuXHRcdFx0d29ya2VyLnVzZXJDb21wbGV0ZShyZXN1bHRzKTtcblx0XHR3b3JrZXIudGVybWluYXRlKCk7XG5cdFx0ZGVsZXRlIHdvcmtlcnNbd29ya2VySWRdO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG5cdFx0dGhyb3cgJ05vdCBpbXBsZW1lbnRlZC4nO1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gd29ya2VyIHRocmVhZCByZWNlaXZlcyBhIG1lc3NhZ2UgKi9cblx0ZnVuY3Rpb24gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXG5cdFx0aWYgKHR5cGVvZiBQYXBhLldPUktFUl9JRCA9PT0gJ3VuZGVmaW5lZCcgJiYgbXNnKVxuXHRcdFx0UGFwYS5XT1JLRVJfSUQgPSBtc2cud29ya2VySWQ7XG5cblx0XHRpZiAodHlwZW9mIG1zZy5pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRyZXN1bHRzOiBQYXBhLnBhcnNlKG1zZy5pbnB1dCwgbXNnLmNvbmZpZyksXG5cdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIG1zZy5pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IG1zZy5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIHRoYW5rIHlvdSwgU2FmYXJpIChzZWUgaXNzdWUgIzEwNilcblx0XHR7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKTtcblx0XHRcdGlmIChyZXN1bHRzKVxuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBNYWtlcyBhIGRlZXAgY29weSBvZiBhbiBhcnJheSBvciBvYmplY3QgKG1vc3RseSkgKi9cblx0ZnVuY3Rpb24gY29weShvYmopXG5cdHtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdHZhciBjcHkgPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG5cdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdGNweVtrZXldID0gY29weShvYmpba2V5XSk7XG5cdFx0cmV0dXJuIGNweTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRGdW5jdGlvbihmLCBzZWxmKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBmLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpXG5cdHtcblx0XHRyZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG5cdH1cblxuXHRyZXR1cm4gUGFwYTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFnZ3JlZ2F0ZURhdGE7XG5cbnZhciBfZmlsdGVycyA9IHJlcXVpcmUoJy4vZmlsdGVycycpO1xuXG5mdW5jdGlvbiBhZ2dyZWdhdGVEYXRhKGxheWVyRGF0YSwgbG9jYXRpb25zLCBmaWx0ZXJPcHRpb25zKSB7XG4gIHZhciBkYXRhID0gbGF5ZXJEYXRhLm1lcmdlZERhdGE7XG4gIHZhciBhZ2dyZWdhdGVkRGF0YSA9IFtdO1xuICAvLyBtZXJnZSBPU00gSWRzXG4gIGlmIChsYXllckRhdGFbJ21lcmdlLWxvY2F0aW9ucyddKSB7XG4gICAgZGF0YS5tYXAoZnVuY3Rpb24gKGRhdHVtKSB7XG4gICAgICB2YXIgcm93ID0gZGF0dW07XG4gICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgIC8vIGFkZCBkaXN0cmljdF9pZCBpZiBub3QgZGVmaW5lZFxuICAgICAgICByb3cuZGlzdHJpY3RfaWQgPSBsb2NhdGlvbnNbZGF0dW0uRGlzdHJpY3RdO1xuICAgICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgICAgLy8gVXNlIGFsdGVybmF0aXZlIGRpc3RyaWN0IGZpZWxkXG4gICAgICAgICAgcm93LmRpc3RyaWN0X2lkID0gbG9jYXRpb25zW2RhdHVtWydzdXJ2ZXlfaW50cm8vRGlzdHJpY3RfbWlzcyddXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdHVtLmRpc3RyaWN0X2lkKSB7XG4gICAgICAgICAgLy8gVXNlIGFsdGVybmF0aXZlIHJlZ2lvbiBtaXNzIGZpZWxkXG4gICAgICAgICAgcm93LmRpc3RyaWN0X2lkID0gbG9jYXRpb25zW2RhdHVtWydzdXJ2ZXlfaW50cm8vUmVnaW9uX21pc3MnXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3c7XG4gICAgfSk7XG4gIH1cblxuICBsYXllckRhdGEubWVyZ2VkRGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXR1bSkge1xuICAgIHJldHVybiBkYXR1bS5kaXN0cmljdF9pZCAhPT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICAvLyBQcm9jZXNzIGZpbHRlcnMgd2l0aCBmaWx0ZXJPcHRpb25zXG4gIGRhdGEgPSAoMCwgX2ZpbHRlcnMucHJvY2Vzc0ZpbHRlcnMpKGxheWVyRGF0YSwgZmlsdGVyT3B0aW9ucyk7XG4gIC8vIGFnZ3JlZ2F0ZSByYXcgZGF0YVxuICBhZ2dyZWdhdGVkRGF0YSA9IG1pbGlhLnN0YXRzLmFnZ3JlZ2F0ZV9kYXRhKGRhdGEsIGxheWVyRGF0YS5wcm9wZXJ0eSwgbGF5ZXJEYXRhLmFnZ3JlZ2F0ZSk7XG5cbiAgcmV0dXJuIGFnZ3JlZ2F0ZWREYXRhO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2FnZ3JlZ2F0ZURhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmZXRjaEZvcm1EYXRhO1xudmFyIHByb3RvY29sID0gJ2h0dHBzJztcbnZhciBob3N0ID0gJ2FwaS5vbmEuaW8nO1xuXG5mdW5jdGlvbiBmZXRjaEZvcm1EYXRhKGRhdGFzZXRJRCwgcHJvcGVydGllcywgY2FsbGJhY2spIHtcbiAgdmFyIGZpZWxkcyA9IHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuICdcIicgKyBwICsgJ1wiJztcbiAgfSkuam9pbigpO1xuICB2YXIgcXVlcnlQYXJhbXMgPSB7IGZpZWxkczogJ1snICsgZmllbGRzICsgJ10nIH07XG4gIG1pbGlhLndyYXBwZXIuc2V0X2hvc3QocHJvdG9jb2wsIGhvc3QpO1xuICBtaWxpYS53cmFwcGVyLmdldF9mb3JtX2RhdGEoZGF0YXNldElELCBxdWVyeVBhcmFtcyxcbiAgLy8gIHNlbGYucHJvcHMubWFwQ29uZmlnLmFwaUFjY2Vzc1Rva2VuLCAvLyBnZXQgQVBJIGFjY2VzcyB0b2tlbiBmcm9tIHN0YXRlXG4gIGNhbGxiYWNrKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy91dGlscy9mZXRjaEZvcm1EYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTGF5ZXI7XG5cbnZhciBfc29ydExheWVycyA9IHJlcXVpcmUoJy4vc29ydExheWVycycpO1xuXG52YXIgX3NvcnRMYXllcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydExheWVycyk7XG5cbnZhciBfYnVpbGRUaW1lc2VyaWVzRGF0YSA9IHJlcXVpcmUoJy4vYnVpbGRUaW1lc2VyaWVzRGF0YScpO1xuXG52YXIgX2J1aWxkVGltZXNlcmllc0RhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGRUaW1lc2VyaWVzRGF0YSk7XG5cbnZhciBfZ2VuZXJhdGVTdG9wcyA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVTdG9wcycpO1xuXG52YXIgX2dlbmVyYXRlU3RvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVTdG9wcyk7XG5cbnZhciBfYWRkQ2hhcnQgPSByZXF1aXJlKCcuL2FkZENoYXJ0Jyk7XG5cbnZhciBfYWRkQ2hhcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkQ2hhcnQpO1xuXG52YXIgX2FkZExlZ2VuZCA9IHJlcXVpcmUoJy4vYWRkTGVnZW5kJyk7XG5cbnZhciBfYWRkTGVnZW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZExlZ2VuZCk7XG5cbnZhciBfYWRkTGFiZWxzID0gcmVxdWlyZSgnLi9hZGRMYWJlbHMnKTtcblxudmFyIF9hZGRMYWJlbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkTGFiZWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIGFkZExheWVyKG1hcCwgbGF5ZXIsIG1hcENvbmZpZykge1xuICB2YXIgdGltZWZpZWxkID0gbGF5ZXIuYWdncmVnYXRlICYmIGxheWVyLmFnZ3JlZ2F0ZS50aW1lc2VyaWVzID8gbGF5ZXIuYWdncmVnYXRlLnRpbWVzZXJpZXMuZmllbGQgOiAnJztcbiAgdmFyIHN0b3BzID0gdm9pZCAwO1xuICB2YXIgbmV3U3RvcHMgPSB2b2lkIDA7XG4gIHZhciBjaXJjbGVMYXllciA9IHZvaWQgMDtcbiAgdmFyIGZpbGxMYXllciA9IHZvaWQgMDtcbiAgdmFyIGxpbmVMYXllciA9IHZvaWQgMDtcbiAgdmFyIHN5bWJvbExheWVyID0gdm9pZCAwO1xuXG4gIGlmIChsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbGF5ZXJPYmogPSBsYXllcjtcbiAgaWYgKHR5cGVvZiBsYXllck9iai5pc0NoYXJ0TWluID09PSAndW5kZWZpbmVkJykge1xuICAgIGxheWVyT2JqLmlzQ2hhcnRNaW4gPSB0cnVlO1xuICAgIGxheWVyT2JqLmxlZ2VuZEJvdHRvbSA9IDQwO1xuICB9XG5cbiAgaWYgKGxheWVyLnByb3BlcnR5KSB7XG4gICAgc3RvcHMgPSAoMCwgX2dlbmVyYXRlU3RvcHMyLmRlZmF1bHQpKGxheWVyLCB0aW1lZmllbGQpO1xuICB9XG5cbiAgaWYgKHN0b3BzKSB7XG4gICAgbmV3U3RvcHMgPSB7IHN0b3BzOiBzdG9wcywgaWQ6IGxheWVyLmlkIH07XG4gICAgdmFyIGNvbG9yU3RvcHMgPSB0aW1lZmllbGQgPyBzdG9wc1swXVtzdG9wc1swXS5sZW5ndGggLSAxXSA6IHN0b3BzWzBdWzBdO1xuICAgIHZhciByYWRpdXNTdG9wcyA9IHN0b3BzWzFdWzBdO1xuICAgIHZhciBzdG9wc0RhdGEgPSBsYXllci50eXBlID09PSAnY2lyY2xlJyA/IHJhZGl1c1N0b3BzIDogY29sb3JTdG9wcztcbiAgICB2YXIgYnJlYWtzID0gc3RvcHNbM107XG4gICAgdmFyIGNvbG9ycyA9IHN0b3BzWzRdO1xuICAgIHZhciBjdXJyUGVyaW9kID0gc3RvcHNbMl1bc3RvcHNbMl0ubGVuZ3RoIC0gMV07XG4gICAgdmFyIGN1cnJEYXRhID0gbGF5ZXIuc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YVt0aW1lZmllbGRdID09PSBjdXJyUGVyaW9kO1xuICAgIH0pO1xuICAgIHZhciBEYXRhID0gdGltZWZpZWxkID8gY3VyckRhdGEgOiBsYXllci5zb3VyY2UuZGF0YTtcblxuICAgICgwLCBfYWRkTGVnZW5kMi5kZWZhdWx0KShsYXllciwgc3RvcHNEYXRhLCBEYXRhLCBicmVha3MsIGNvbG9ycyk7XG4gICAgKDAsIF9hZGRMYWJlbHMyLmRlZmF1bHQpKG1hcCwgbGF5ZXIsIERhdGEpO1xuICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci5jYXRlZ29yaWVzICYmIGxheWVyLmNhdGVnb3JpZXMuYnJlYWtzID09PSAnbm8nKSB7XG4gICAgKDAsIF9hZGRMZWdlbmQyLmRlZmF1bHQpKGxheWVyKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcubGVnZW5kLXJvdy5wcmltYXJ5JykucmVtb3ZlQ2xhc3MoJ3ByaW1hcnknKTtcbiAgfVxuXG4gIC8qXG4gICAqIENJUkNMRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBpZiAobGF5ZXIudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICBjaXJjbGVMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICB0eXBlOiBsYXllci5zb3VyY2UudHlwZVxuICAgICAgfSxcbiAgICAgIGxheW91dDoge30sXG4gICAgICBwYWludDoge1xuICAgICAgICAnY2lyY2xlLWNvbG9yJzogbGF5ZXIuY2F0ZWdvcmllcy5jb2xvciBpbnN0YW5jZW9mIEFycmF5ICYmICFsYXllci5wYWludCA/IHtcbiAgICAgICAgICBwcm9wZXJ0eTogbGF5ZXIuc291cmNlLmpvaW5bMF0sXG4gICAgICAgICAgc3RvcHM6IHRpbWVmaWVsZCA/IHN0b3BzWzBdW3N0b3BzWzBdLmxlbmd0aCAtIDFdIDogc3RvcHNbMF1bMF0sXG4gICAgICAgICAgdHlwZTogJ2NhdGVnb3JpY2FsJ1xuICAgICAgICB9IDogbGF5ZXIuY2F0ZWdvcmllcy5jb2xvcixcbiAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogMC44LFxuICAgICAgICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICcjZmZmJyxcbiAgICAgICAgJ2NpcmNsZS1zdHJva2Utd2lkdGgnOiBsYXllci5jYXRlZ29yaWVzLmNvbG9yIGluc3RhbmNlb2YgQXJyYXkgJiYgIWxheWVyLnBhaW50ID8ge1xuICAgICAgICAgIHByb3BlcnR5OiBsYXllci5zb3VyY2Uuam9pblswXSxcbiAgICAgICAgICBzdG9wczogdGltZWZpZWxkID8gc3RvcHNbNV1bc3RvcHNbNV0ubGVuZ3RoIC0gMV0gOiBzdG9wc1s1XVswXSxcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSA6IDEsXG4gICAgICAgICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknOiAxXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIG92ZXJyaWRlIGZyb20gbGF5ZXJzLmpzb25cbiAgICBpZiAobGF5ZXIucGFpbnQpIHtcbiAgICAgIGNpcmNsZUxheWVyLnBhaW50ID0gbGF5ZXIucGFpbnQ7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyLnNvdXJjZS5taW56b29tKSB7XG4gICAgICBjaXJjbGVMYXllci5taW56b29tID0gbGF5ZXIuc291cmNlLm1pbnpvb207XG4gICAgfVxuICAgIGlmIChsYXllci5zb3VyY2UubWF4em9vbSkge1xuICAgICAgY2lyY2xlTGF5ZXIubWF4em9vbSA9IGxheWVyLnNvdXJjZS5tYXh6b29tO1xuICAgIH1cblxuICAgIGlmIChsYXllci5zb3VyY2UuZGF0YSkge1xuICAgICAgaWYgKGxheWVyLnNvdXJjZS50eXBlID09PSAndmVjdG9yJykge1xuICAgICAgICB2YXIgbGF5ZXJTdG9wcyA9IHN0b3BzID8gdGltZWZpZWxkID8gc3RvcHNbMV1bc3RvcHNbMV0ubGVuZ3RoIC0gMV0gOiBzdG9wc1sxXVswXSA6IFtbMCwgMF1dO1xuICAgICAgICBjaXJjbGVMYXllci5wYWludFsnY2lyY2xlLXJhZGl1cyddID0ge1xuICAgICAgICAgIHByb3BlcnR5OiBsYXllci5zb3VyY2Uuam9pblswXSxcbiAgICAgICAgICBzdG9wczogbGF5ZXJTdG9wcyxcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxuICAgICAgICAgIGRlZmF1bHQ6IHN0b3BzID8gMCA6IDNcbiAgICAgICAgfTtcbiAgICAgICAgY2lyY2xlTGF5ZXIuc291cmNlLnVybCA9IGxheWVyLnNvdXJjZS51cmw7XG4gICAgICAgIGNpcmNsZUxheWVyWydzb3VyY2UtbGF5ZXInXSA9IGxheWVyLnNvdXJjZS5sYXllcjtcbiAgICAgIH0gZWxzZSBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgICBpZiAoc3RvcHMpIHtcbiAgICAgICAgICBjaXJjbGVMYXllci5wYWludFsnY2lyY2xlLXJhZGl1cyddID0ge1xuICAgICAgICAgICAgcHJvcGVydHk6IGxheWVyLnNvdXJjZS5qb2luWzBdLFxuICAgICAgICAgICAgc3RvcHM6IHN0b3BzWzFdWzBdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjaXJjbGVMYXllci5zb3VyY2UuZGF0YSA9IGxheWVyLnNvdXJjZS5kYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgZmlsdGVyXG4gICAgaWYgKGxheWVyLmZpbHRlcikge1xuICAgICAgY2lyY2xlTGF5ZXIuZmlsdGVyID0gbGF5ZXIuZmlsdGVyO1xuICAgIH1cblxuICAgIGlmICghbWFwLmdldExheWVyKGNpcmNsZUxheWVyLmlkKSkgbWFwLmFkZExheWVyKGNpcmNsZUxheWVyKTtcbiAgICBpZiAobWFwLmdldExheWVyKGNpcmNsZUxheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KGNpcmNsZUxheWVyLmlkLCAndmlzaWJpbGl0eScsIGNpcmNsZUxheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEZJTEwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgaWYgKGxheWVyLnR5cGUgPT09ICdmaWxsJykge1xuICAgIGZpbGxMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICB0eXBlOiAnZmlsbCcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogbGF5ZXIuc291cmNlLnR5cGVcbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IHt9LFxuICAgICAgcGFpbnQ6IHtcbiAgICAgICAgJ2ZpbGwtY29sb3InOiAnI2YwMCcsXG4gICAgICAgICdmaWxsLW9wYWNpdHknOiAwLjdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBsYXllcnMuanNvblxuICAgIGlmIChsYXllci5wYWludCkge1xuICAgICAgZmlsbExheWVyLnBhaW50ID0gbGF5ZXIucGFpbnQ7XG4gICAgfVxuICAgIGlmIChsYXllci5zb3VyY2UubWluem9vbSkge1xuICAgICAgZmlsbExheWVyLm1pbnpvb20gPSBsYXllci5zb3VyY2UubWluem9vbTtcbiAgICB9XG4gICAgaWYgKGxheWVyLm1heHpvb20pIHtcbiAgICAgIGZpbGxMYXllci5tYXh6b29tID0gbGF5ZXIubWF4em9vbTtcbiAgICB9XG5cbiAgICBpZiAoIWxheWVyWyduby1vdXRsaW5lJ10pIHtcbiAgICAgIGZpbGxMYXllci5wYWludFsnZmlsbC1vdXRsaW5lLWNvbG9yJ10gPSAnI2ZmZic7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyLnNvdXJjZS50eXBlID09PSAnZ2VvanNvbicpIHtcbiAgICAgIGZpbGxMYXllci5zb3VyY2UuZGF0YSA9IGxheWVyLnNvdXJjZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxsTGF5ZXIuc291cmNlLnVybCA9IGxheWVyLnNvdXJjZS51cmw7XG4gICAgICBmaWxsTGF5ZXJbJ3NvdXJjZS1sYXllciddID0gbGF5ZXIuc291cmNlLmxheWVyO1xuICAgIH1cblxuICAgIGlmIChsYXllci5zb3VyY2UuZGF0YSAmJiAhbGF5ZXIucGFpbnQpIHtcbiAgICAgIHZhciBfbGF5ZXJTdG9wcyA9IHRpbWVmaWVsZCA/IHN0b3BzWzBdW3N0b3BzWzFdLmxlbmd0aCAtIDFdIDogc3RvcHNbMF1bMF07XG5cbiAgICAgIGZpbGxMYXllci5wYWludFsnZmlsbC1jb2xvciddID0ge1xuICAgICAgICBwcm9wZXJ0eTogbGF5ZXIuc291cmNlLmpvaW5bMF0sXG4gICAgICAgIHN0b3BzOiBfbGF5ZXJTdG9wcyxcbiAgICAgICAgdHlwZTogJ2NhdGVnb3JpY2FsJyxcbiAgICAgICAgZGVmYXVsdDogJ3JnYmEoMCwwLDAsMCknXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBhZGQgZmlsdGVyXG4gICAgaWYgKGxheWVyLmZpbHRlcikge1xuICAgICAgZmlsbExheWVyLmZpbHRlciA9IGxheWVyLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIW1hcC5nZXRMYXllcihmaWxsTGF5ZXIuaWQpKSBtYXAuYWRkTGF5ZXIoZmlsbExheWVyKTtcbiAgICBpZiAobWFwLmdldExheWVyKGZpbGxMYXllci5pZCkpIHtcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShmaWxsTGF5ZXIuaWQsICd2aXNpYmlsaXR5JywgZmlsbExheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIExJTkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgaWYgKGxheWVyLnR5cGUgPT09ICdsaW5lJykge1xuICAgIGxpbmVMYXllciA9IHtcbiAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIHZpc2libGU6IGxheWVyLnZpc2libGUsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogbGF5ZXIuc291cmNlLnR5cGVcbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IHt9LFxuICAgICAgcGFpbnQ6IHtcbiAgICAgICAgJ2xpbmUtY29sb3InOiAnI2YwMCcsXG4gICAgICAgICdsaW5lLXdpZHRoJzogMVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxheWVyLnBhaW50KSB7XG4gICAgICBsaW5lTGF5ZXIucGFpbnQgPSBsYXllci5wYWludDtcbiAgICB9XG4gICAgaWYgKGxheWVyLnNvdXJjZS5taW56b29tKSB7XG4gICAgICBsaW5lTGF5ZXIubWluem9vbSA9IGxheWVyLnNvdXJjZS5taW56b29tO1xuICAgIH1cbiAgICBpZiAobGF5ZXIubWF4em9vbSkge1xuICAgICAgbGluZUxheWVyLm1heHpvb20gPSBsYXllci5tYXh6b29tO1xuICAgIH1cbiAgICBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgbGluZUxheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVMYXllci5zb3VyY2UudXJsID0gbGF5ZXIuc291cmNlLnVybDtcbiAgICAgIGxpbmVMYXllclsnc291cmNlLWxheWVyJ10gPSBsYXllci5zb3VyY2UubGF5ZXI7XG4gICAgfVxuICAgIGlmICghbWFwLmdldExheWVyKGxpbmVMYXllci5pZCkpIG1hcC5hZGRMYXllcihsaW5lTGF5ZXIpO1xuICAgIGlmIChtYXAuZ2V0TGF5ZXIobGluZUxheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KGxpbmVMYXllci5pZCwgJ3Zpc2liaWxpdHknLCBsaW5lTGF5ZXIudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU1lNQk9MID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG4gIGlmIChsYXllci50eXBlID09PSAnc3ltYm9sJykge1xuICAgIHN5bWJvbExheWVyID0ge1xuICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSxcbiAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHR5cGU6IGxheWVyLnNvdXJjZS50eXBlXG4gICAgICB9LFxuICAgICAgbWluem9vbTogbGF5ZXIuc291cmNlLm1pbnpvb20gPyBsYXllci5zb3VyY2UubWluem9vbSA6IG1hcENvbmZpZy56b29tLFxuICAgICAgbWF4em9vbTogbGF5ZXIuc291cmNlLm1heHpvb20gPyBsYXllci5zb3VyY2UubWF4em9vbSA6IDIyLFxuICAgICAgbGF5b3V0OiBsYXllci5sYXlvdXQsXG4gICAgICBwYWludDogbGF5ZXIucGFpbnRcbiAgICB9O1xuXG4gICAgLy8gYWRkIGZpbHRlclxuICAgIGlmIChsYXllci5maWx0ZXIpIHtcbiAgICAgIHN5bWJvbExheWVyLmZpbHRlciA9IGxheWVyLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAobGF5ZXIuc291cmNlLnR5cGUgPT09ICdnZW9qc29uJykge1xuICAgICAgaWYgKGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzICYmIGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzWzBdICYmIGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XG4gICAgICAgIHN5bWJvbExheWVyLnNvdXJjZS5kYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgICB9IGVsc2UgaWYgKGxheWVyLnByb3BlcnRpZXMgJiYgbGF5ZXIucHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgc3ltYm9sTGF5ZXIuc291cmNlLmRhdGEgPSB7XG4gICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICBmZWF0dXJlczogbGF5ZXIuc291cmNlLmRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllc01hcCA9IHt9O1xuICAgICAgICAgICAgbGF5ZXIucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXNNYXBbcHJvcF0gPSBpc05hTihkW3Byb3BdKSA/IGRbcHJvcF0gOiBOdW1iZXIoZFtwcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc01hcCxcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbTnVtYmVyKGQuTG9uZ2l0dWRlKSwgTnVtYmVyKGQuTGF0aXR1ZGUpXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bWJvbExheWVyLnNvdXJjZS51cmwgPSBsYXllci5zb3VyY2UudXJsO1xuICAgICAgc3ltYm9sTGF5ZXJbJ3NvdXJjZS1sYXllciddID0gbGF5ZXIuc291cmNlLmxheWVyO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzICYmIGxheWVyLmNhdGVnb3JpZXMuc2hhcGUpIHtcbiAgICAgIHZhciBpY29uU3RvcHMgPSBbXTtcbiAgICAgIGxheWVyLmNhdGVnb3JpZXMudHlwZS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlLCBpbmRleCkge1xuICAgICAgICBpY29uU3RvcHMucHVzaChbdHlwZSwgbGF5ZXIuY2F0ZWdvcmllcy5zaGFwZVtpbmRleF1dKTtcbiAgICAgIH0pO1xuICAgICAgc3ltYm9sTGF5ZXIubGF5b3V0WydpY29uLWltYWdlJ10uc3RvcHMgPSBpY29uU3RvcHM7XG4gICAgfVxuXG4gICAgaWYgKCFtYXAuZ2V0TGF5ZXIoc3ltYm9sTGF5ZXIuaWQpKSB7XG4gICAgICBpZiAobGF5ZXJbJ2hpZ2hsaWdodC1sYXlvdXQnXSB8fCBsYXllclsnaGlnaGxpZ2h0LXBhaW50J10pIHtcbiAgICAgICAgdmFyIGhpZ2hsaWdodExheWVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3ltYm9sTGF5ZXIpO1xuXG4gICAgICAgIGlmIChsYXllclsnaGlnaGxpZ2h0LWxheW91dCddKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0TGF5ZXIubGF5b3V0ID0gT2JqZWN0LmFzc2lnbih7fSwgaGlnaGxpZ2h0TGF5ZXIubGF5b3V0LCBsYXllclsnaGlnaGxpZ2h0LWxheW91dCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXJbJ2hpZ2hsaWdodC1wYWludCddKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0TGF5ZXIucGFpbnQgPSBPYmplY3QuYXNzaWduKHt9LCBoaWdobGlnaHRMYXllci5wYWludCwgbGF5ZXJbJ2hpZ2hsaWdodC1wYWludCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZ2hsaWdodExheWVyLmlkICs9ICctaGlnaGxpZ2h0JztcbiAgICAgICAgaGlnaGxpZ2h0TGF5ZXIuZmlsdGVyID0gWyc9PScsICdGaXhlZCBTaXRlIFVuaXF1ZSBJRCcsICcnXTtcbiAgICAgICAgbWFwLmFkZExheWVyKGhpZ2hsaWdodExheWVyKTtcblxuICAgICAgICBzeW1ib2xMYXllci5maWx0ZXIgPSBbJyE9JywgJ0ZpeGVkIFNpdGUgVW5pcXVlIElEJywgJyddO1xuICAgICAgfVxuXG4gICAgICBtYXAuYWRkTGF5ZXIoc3ltYm9sTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAobWFwLmdldExheWVyKHN5bWJvbExheWVyLmlkKSkge1xuICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KHN5bWJvbExheWVyLmlkLCAndmlzaWJpbGl0eScsIHN5bWJvbExheWVyLnZpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuICAvKlxuICAgKiBDSEFSVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBpZiAobGF5ZXIudHlwZSA9PT0gJ2NoYXJ0Jykge1xuICAgIHZhciBkYXRhID0gbGF5ZXIuc291cmNlLmRhdGE7XG4gICAgaWYgKHRpbWVmaWVsZCkge1xuICAgICAgdmFyIHBlcmlvZCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChsYXllci5zb3VyY2UuZGF0YS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHBbdGltZWZpZWxkXTtcbiAgICAgIH0pKSkpO1xuICAgICAgbmV3U3RvcHMgPSB7IGlkOiBsYXllci5pZCwgcGVyaW9kOiBwZXJpb2QsIHRpbWVmaWVsZDogdGltZWZpZWxkIH07XG4gICAgICBkYXRhID0gbGF5ZXIuc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW3RpbWVmaWVsZF0gPT09IHBlcmlvZFtwZXJpb2QubGVuZ3RoIC0gMV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgKDAsIF9hZGRDaGFydDIuZGVmYXVsdCkobGF5ZXIsIGRhdGEpO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgbGF5ZXJzT2JqXG4gIC8vIGxldCBsYXllcnNPYmogPSBbXTtcbiAgLy8gZm9yIChsZXQgbG8gPSAwOyBsbyA8IHRoaXMuc3RhdGUubGF5ZXJzT2JqLmxlbmd0aDsgbG8gKz0gMSkge1xuICAvLyAgIGlmICh0aGlzLnN0YXRlLmxheWVyc09ialtsb10uaWQgIT09IGxheWVyLmlkKSB7XG4gIC8vICAgICBsYXllcnNPYmoucHVzaCh0aGlzLnN0YXRlLmxheWVyc09ialtsb10pO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBsYXllcnNPYmoucHVzaChsYXllcik7XG5cblxuICAvLyBzb3J0IHRoZSBsYXllcnNcbiAgLy8gc29ydExheWVycygpO1xuXG4gIC8vIGRpc2FsbG93IG11bHRpcGxlIGZpbGwgbGF5ZXJzIG9uIHRoZSBtYXAgKHRvZG8gLSBjb252ZXJ0IGZpbHRlcnMgdG8gbmVzdGVkIGZvciBsb29wcylcbiAgLy8gbGV0IGlkO1xuICAvLyBjb25zdCBmaWx0ZXJMYXllck9ianMgPSBsbyA9PiBsby5pZCAhPT0gaWQ7XG4gIC8vIGNvbnN0IGZpbHRlckFjdGl2ZUxheWVycyA9IGxvID0+IGxvICE9PSBpZDtcbiAgLy8gZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLnN0YXRlLmxheWVyc09iai5sZW5ndGg7IGwgKz0gMSkge1xuICAvLyAgIGlmICh0aGlzLnN0YXRlLmxheWVyc09ialtsXS50eXBlID09PSAnZmlsbCcpIHtcbiAgLy8gICAgIGlkID0gdGhpcy5zdGF0ZS5sYXllcnNPYmpbbF0uaWQ7XG4gIC8vICAgICBpZiAobWFwLmdldExheWVyKGlkKSkge1xuICAvLyAgICAgICBtYXAucmVtb3ZlTGF5ZXIoaWQpO1xuICAvLyAgICAgICBpZiAobWFwLmdldFNvdXJjZShpZCkpIHtcbiAgLy8gICAgICAgICBtYXAucmVtb3ZlU291cmNlKGlkKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICB0aGlzLnJlbW92ZUxhYmVscyh0aGlzLnN0YXRlLmxheWVyc09ialtsXSk7XG4gIC8vICAgICAgIHRoaXMucmVtb3ZlTGVnZW5kKHRoaXMuc3RhdGUubGF5ZXJzT2JqW2xdKTtcbiAgLy8gICAgICAgbGF5ZXJzT2JqID0gbGF5ZXJzT2JqLmZpbHRlcihmaWx0ZXJMYXllck9ianMpO1xuICAvLyAgICAgICBzZWxmLmFjdGl2ZUxheWVycyA9IHNlbGYuYWN0aXZlTGF5ZXJzLmZpbHRlcihmaWx0ZXJBY3RpdmVMYXllcnMpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGNvbnN0IHRpbWVzZXJpZXNNYXAgPSBidWlsZFRpbWVzZXJpZXNEYXRhKG5ld1N0b3BzKTtcbiAgLy8gaWYgKHRpbWVzZXJpZXNNYXBbbGF5ZXIuaWRdKSB7XG4gIC8vICAgbGV0IG1iTGF5ZXI7XG4gIC8vICAgc3dpdGNoIChsYXllci50eXBlKSB7XG4gIC8vICAgICBjYXNlICdjaXJjbGUnOlxuICAvLyAgICAgICBtYkxheWVyID0gY2lyY2xlTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnZmlsbCc6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBmaWxsTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnbGluZSc6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBsaW5lTGF5ZXI7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnc3ltYm9sJzpcbiAgLy8gICAgICAgbWJMYXllciA9IHN5bWJvbExheWVyO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgIG1iTGF5ZXIgPSBudWxsO1xuICAvLyAgIH1cbiAgLy8gICB0aW1lc2VyaWVzTWFwW2xheWVyLmlkXS5tYXBCb3hMYXllciA9IG1iTGF5ZXI7XG4gIC8vIH1cblxuICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICBsYXllck9iaixcbiAgLy8gICBsYXllcnNPYmosXG4gIC8vICAgc3RvcHM6IG5ld1N0b3BzLFxuICAvLyAgIHRpbWVzZXJpZXM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudGltZXNlcmllcywgdGltZXNlcmllc01hcCksXG4gIC8vIH0pO1xuXG4gIHJldHVybiBtYXA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExheWVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc29ydExheWVycztcbmZ1bmN0aW9uIHNvcnRMYXllcnMobWFwLCBsYXllcnMpIHtcbiAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAobGF5ZXJzW2tleV0udHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBpZiAobWFwLmdldExheWVyKGtleSkpIHtcbiAgICAgICAgbWFwLm1vdmVMYXllcihrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAobGF5ZXJzW2tleV0udHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGlmIChtYXAuZ2V0TGF5ZXIoa2V5KSkge1xuICAgICAgICBtYXAubW92ZUxheWVyKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBPYmplY3Qua2V5cyhsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChsYXllcnNba2V5XS50eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgaWYgKG1hcC5nZXRMYXllcihrZXkpKSB7XG4gICAgICAgIG1hcC5tb3ZlTGF5ZXIoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL21hcC9zb3J0TGF5ZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRUaW1lc2VyaWVzRGF0YTtcbmZ1bmN0aW9uIGJ1aWxkVGltZXNlcmllc0RhdGEoU3RvcHMpIHtcbiAgdmFyIHRpbWVTZXJpZXNMYXllcnMgPSB0aGlzLmdldFNsaWRlckxheWVycygpO1xuICB2YXIgYWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5sYXllcnMubWFwKGZ1bmN0aW9uIChsYXllcikge1xuICAgIHJldHVybiBsYXllci50aXRsZTtcbiAgfSk7XG4gIHZhciB0aW1lc2VyaWVzTWFwID0ge307XG5cbiAgdmFyIGxheWVySWQgPSB2b2lkIDA7XG4gIHZhciBpbmRleCA9IHZvaWQgMDtcbiAgdmFyIGxheWVyT2JqID0gdm9pZCAwO1xuICB2YXIgdGVtcG9yYWxJbmRleCA9IHZvaWQgMDtcbiAgdmFyIGRhdGEgPSB2b2lkIDA7XG4gIHZhciBsYXllclByb3BlcnR5ID0gdm9pZCAwO1xuICB2YXIgcGVyaW9kRGF0YSA9IHZvaWQgMDtcbiAgdmFyIGNoYXJ0cyA9IHZvaWQgMDtcblxuICB2YXIgcGVyaW9kID0gdm9pZCAwO1xuICB2YXIgY29sb3JTdG9wcyA9IHZvaWQgMDtcbiAgdmFyIHJhZGl1c1N0b3BzID0gdm9pZCAwO1xuICB2YXIgYnJlYWtzID0gdm9pZCAwO1xuICB2YXIgY29sb3JzID0gdm9pZCAwO1xuICB2YXIgc3RvcHMgPSBTdG9wcztcbiAgdmFyIHN0cm9rZVdpZHRoU3RvcHMgPSB2b2lkIDA7XG5cbiAgdmFyIGNoYXJ0RGF0YUZpbHRlciA9IGZ1bmN0aW9uIGNoYXJ0RGF0YUZpbHRlcihkKSB7XG4gICAgcmV0dXJuIGRbc3RvcHMudGltZWZpZWxkXSA9PT0gcGVyaW9kW3RlbXBvcmFsSW5kZXhdO1xuICB9O1xuICB2YXIgcGVyaW9kSGFzRGF0YVJlZHVjZXIgPSBmdW5jdGlvbiBwZXJpb2RIYXNEYXRhUmVkdWNlcihzdW0sIGQpIHtcbiAgICByZXR1cm4gc3VtICsgTnVtYmVyKGRbbGF5ZXJQcm9wZXJ0eV0pO1xuICB9O1xuICB2YXIgcGVyaW9kRGF0YUZpbHRlciA9IGZ1bmN0aW9uIHBlcmlvZERhdGFGaWx0ZXIocCkge1xuICAgIC8vIGRlZmluZSBhY3R1YWwgcGVyaW9kIGRhdGFcbiAgICBwZXJpb2REYXRhW3BdID0ge1xuICAgICAgZGF0YTogbGF5ZXJPYmouc291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW2xheWVyT2JqLmFnZ3JlZ2F0ZS50aW1lc2VyaWVzLmZpZWxkXSA9PT0gcDtcbiAgICAgIH0pXG4gICAgfTtcbiAgICAvLyBkZXRlcm1pbmUgaWYgcGVyaW9kIGRhdGEgaGFzIGFueSBub24temVybyB2YWx1ZXNcbiAgICBwZXJpb2REYXRhW3BdLmhhc0RhdGEgPSAhIXBlcmlvZERhdGFbcF0uZGF0YS5yZWR1Y2UocGVyaW9kSGFzRGF0YVJlZHVjZXIsIDApO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZVNlcmllc0xheWVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxheWVySWQgPSB0aW1lU2VyaWVzTGF5ZXJzW2ldO1xuXG4gICAgaWYgKGFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcklkKSAmJiAhdGhpcy5zdGF0ZS50aW1lc2VyaWVzW2xheWVySWRdKSB7XG4gICAgICBpbmRleCA9IGdldExhc3RJbmRleChhY3RpdmVMYXllcnMsIGxheWVySWQpO1xuICAgICAgbGF5ZXJPYmogPSB0aGlzLnByb3BzLmxheWVyRGF0YVtsYXllcklkXTtcbiAgICAgIGNoYXJ0cyA9IGxheWVyT2JqICYmICEhbGF5ZXJPYmouY2hhcnRzID8gbGF5ZXJPYmouY2hhcnRzIDogbnVsbDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5sYXllcnNbaW5kZXhdICYmIHRoaXMuc3RhdGUubGF5ZXJzW2luZGV4XS52aXNpYmxlID09PSB0cnVlICYmIGxheWVyT2JqLnNvdXJjZS5kYXRhIGluc3RhbmNlb2YgT2JqZWN0ICYmIHN0b3BzICYmIGxheWVyT2JqLmlkID09PSBzdG9wcy5pZCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgbGF0ZXIgc3RvcHNcbiAgICAgICAgaWYgKGxheWVyT2JqLnR5cGUgPT09ICdjaGFydCcpIHtcbiAgICAgICAgICBwZXJpb2QgPSB0aGlzLnN0YXRlLnN0b3BzLnBlcmlvZDtcbiAgICAgICAgICBjb2xvclN0b3BzID0gbGF5ZXJPYmouc291cmNlLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBhaW50U3RvcHMgPSBzdG9wcy5zdG9wcztcbiAgICAgICAgICBjb2xvclN0b3BzID0gcGFpbnRTdG9wc1swXTtcbiAgICAgICAgICByYWRpdXNTdG9wcyA9IHBhaW50U3RvcHNbMV07XG4gICAgICAgICAgcGVyaW9kID0gcGFpbnRTdG9wc1syXTtcbiAgICAgICAgICBicmVha3MgPSBwYWludFN0b3BzWzNdO1xuICAgICAgICAgIGNvbG9ycyA9IHBhaW50U3RvcHNbNF07XG4gICAgICAgICAgc3Ryb2tlV2lkdGhTdG9wcyA9IHBhaW50U3RvcHNbNV07XG4gICAgICAgICAgc3RvcHMgPSBsYXllck9iai50eXBlID09PSAnY2lyY2xlJyA/IHJhZGl1c1N0b3BzIDogY29sb3JTdG9wcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBvcmFsSW5kZXggPSBwZXJpb2QubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAobGF5ZXJPYmoudHlwZSA9PT0gJ2NoYXJ0Jykge1xuICAgICAgICAgIGRhdGEgPSBzdG9wcy5maWx0ZXIoY2hhcnREYXRhRmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXllck9iai5hZ2dyZWdhdGUgJiYgbGF5ZXJPYmouYWdncmVnYXRlLnRpbWVzZXJpZXMpIHtcbiAgICAgICAgICAvLyBkZWZpbmUgcGVyaW9kIGRhdGEgZm9yIGVhY2ggcGVyaW9kXG4gICAgICAgICAgbGF5ZXJQcm9wZXJ0eSA9IGxheWVyT2JqLnByb3BlcnR5O1xuICAgICAgICAgIHBlcmlvZERhdGEgPSB7fTtcbiAgICAgICAgICBwZXJpb2QuZm9yRWFjaChwZXJpb2REYXRhRmlsdGVyKTtcblxuICAgICAgICAgIGRhdGEgPSBwZXJpb2REYXRhW3BlcmlvZFt0ZW1wb3JhbEluZGV4XV0uZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gbGF5ZXJPYmouc291cmNlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGltZXNlcmllc01hcFtsYXllcklkXSA9IHtcbiAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBsYXllck9iajogbGF5ZXJPYmosXG4gICAgICAgIHRlbXBvcmFsSW5kZXg6IHRlbXBvcmFsSW5kZXgsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNoYXJ0czogY2hhcnRzLFxuICAgICAgICBwZXJpb2REYXRhOiBwZXJpb2REYXRhLFxuICAgICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgICAgY29sb3JTdG9wczogY29sb3JTdG9wcyxcbiAgICAgICAgcmFkaXVzU3RvcHM6IHJhZGl1c1N0b3BzLFxuICAgICAgICBwZXJpb2Q6IHBlcmlvZCxcbiAgICAgICAgYnJlYWtzOiBicmVha3MsXG4gICAgICAgIHN0cm9rZVdpZHRoU3RvcHM6IHN0cm9rZVdpZHRoU3RvcHMsXG4gICAgICAgIHN0b3BzOiBzdG9wcyxcbiAgICAgICAgbGF5ZXJQcm9wZXJ0eTogbGF5ZXJQcm9wZXJ0eVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGltZXNlcmllc01hcDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy9tYXAvYnVpbGRUaW1lc2VyaWVzRGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGxheWVyLCB0aW1lZmllbGQpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdmFyIG9zbUlEcyA9IFtdO1xuICB2YXIgcGVyaW9kcyA9IFtdO1xuICB2YXIgY2x1c3RlcnMgPSBsYXllci5jYXRlZ29yaWVzLmNsdXN0ZXJzO1xuICB2YXIgY29sb3JzID0gZ2V0Q29sb3JCcmV3ZXJDb2xvcihsYXllci5jYXRlZ29yaWVzLmNvbG9yLCBjbHVzdGVycykgfHwgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvcjtcbiAgdmFyIHJvd3MgPSBsYXllci5zb3VyY2UuZGF0YS5mZWF0dXJlcyB8fCBsYXllci5zb3VyY2UuZGF0YTtcbiAgdmFyIGlzR2VvSlNPTiA9IGxheWVyLnNvdXJjZS5kYXRhLmZlYXR1cmVzO1xuICB2YXIgZ2VvSlNPTldpdGhPU01LZXkgPSBpc0dlb0pTT04gJiYgbGF5ZXIuc291cmNlLmpvaW5bMV07XG4gIHZhciBsaW1pdCA9IGxheWVyLmNhdGVnb3JpZXMubGltaXQ7XG4gIHZhciByYWRpdXNSYW5nZSA9IGxheWVyWydyYWRpdXMtcmFuZ2UnXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNHZW9KU09OKSB7XG4gICAgICBkYXRhLnB1c2goTnVtYmVyKHJvd3NbaV0ucHJvcGVydGllc1tsYXllci5wcm9wZXJ0eV0pKTtcbiAgICAgIGlmIChnZW9KU09OV2l0aE9TTUtleSkge1xuICAgICAgICBvc21JRHMucHVzaChyb3dzW2ldLnByb3BlcnRpZXNbbGF5ZXIuc291cmNlLmpvaW5bMV1dKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVyaW9kcy5wdXNoKHJvd3NbaV1bdGltZWZpZWxkXSk7XG4gICAgICBkYXRhLnB1c2goTnVtYmVyKHJvd3NbaV1bbGF5ZXIucHJvcGVydHldKSk7XG4gICAgICBvc21JRHMucHVzaChyb3dzW2ldW2xheWVyLnNvdXJjZS5qb2luWzFdXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFN0b3BzKHsgZGF0YTogZGF0YSwgY29sb3JzOiBjb2xvcnMsIG9zbUlEczogb3NtSURzLCBwZXJpb2RzOiBwZXJpb2RzLCBsaW1pdDogbGltaXQsIGNsdXN0ZXJzOiBjbHVzdGVycywgcmFkaXVzUmFuZ2U6IHJhZGl1c1JhbmdlIH0pO1xufTtcblxudmFyIF9jb2xvcmJyZXdlciA9IHJlcXVpcmUoJ2NvbG9yYnJld2VyJyk7XG5cbnZhciBfY29sb3JicmV3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JicmV3ZXIpO1xuXG52YXIgX3NpbXBsZVN0YXRpc3RpY3MgPSByZXF1aXJlKCdzaW1wbGUtc3RhdGlzdGljcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIGRlZmF1bHRSYWRpdXNSYW5nZSA9IFsnMycsICc2JywgJzknLCAnMTInLCAnMTUnLCAnMTgnLCAnMjEnLCAnMjQnLCAnMjcnLCAnMzAnXTtcblxudmFyIGdldENvbG9yQnJld2VyQ29sb3IgPSBmdW5jdGlvbiBnZXRDb2xvckJyZXdlckNvbG9yKGMsIG51bUNvbG9ycykge1xuICBpZiAoX2NvbG9yYnJld2VyMi5kZWZhdWx0W2NdKSB7XG4gICAgcmV0dXJuIF9jb2xvcmJyZXdlcjIuZGVmYXVsdFtjXVtudW1Db2xvcnNdO1xuICB9XG4gIHJldHVybiBjO1xufTtcbnZhciBnZXRDb2xvciA9IGZ1bmN0aW9uIGdldENvbG9yKGMsIGkpIHtcbiAgaWYgKGMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBjW2ldO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxuZnVuY3Rpb24gZ2V0U3RvcHMobGF5ZXIpIHtcbiAgdmFyIGNvbG9yc1N0b3BzID0gW107XG4gIHZhciByYWRpdXNTdG9wcyA9IFtdO1xuICB2YXIgcmFkaXVzID0gbGF5ZXIucmFkaXVzUmFuZ2UgfHwgZGVmYXVsdFJhZGl1c1JhbmdlO1xuICB2YXIgYnJlYWtzID0gW107XG5cbiAgLy8gU29ydCBkYXRhIGJhc2VkIG9uIGRhdGEgdmFsdWVcbiAgdmFyIGxpc3QgPSBsYXllci5kYXRhLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB4LFxuICAgICAgb3NtSURzOiBsYXllci5vc21JRHNbaV0sXG4gICAgICBwZXJpb2RzOiBsYXllci5wZXJpb2RzW2ldXG4gICAgfTtcbiAgfSwgdGhpcyk7XG4gIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmRhdGEgPCBiLmRhdGEgPyAtMSA6IGEuZGF0YSA9PT0gYi5kYXRhID8gMCA6IDE7XG4gIH0pO1xuICB2YXIgc29ydGVkRGF0YSA9IGxpc3QubWFwKGZ1bmN0aW9uIChpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5kYXRhO1xuICB9KTtcbiAgdmFyIG9zbUlEID0gbGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm9zbUlEcztcbiAgfSk7XG4gIHZhciBwZXJpb2QgPSBsaXN0Lm1hcChmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMucGVyaW9kcztcbiAgfSk7XG5cbiAgLy8gU29ydCBmb3IgbGltaXQgZGF0YSBiYXNlZCBvbiBvc21JRHNcbiAgdmFyIGRhdGFMaXN0ID0gbGF5ZXIub3NtSURzLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgIHJldHVybiB7XG4gICAgICBvc21JRHM6IHgsXG4gICAgICBkYXRhOiBsYXllci5kYXRhW2ldLFxuICAgICAgcGVyaW9kczogbGF5ZXIucGVyaW9kc1tpXVxuICAgIH07XG4gIH0sIHRoaXMpO1xuICBkYXRhTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEub3NtSURzIDwgYi5vc21JRHMgPyAtMSA6IGEub3NtSURzID09PSBiLm9zbUlEcyA/IDAgOiAxO1xuICB9KTtcbiAgdmFyIHJhbmdlRGF0YSA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLmRhdGE7XG4gIH0pO1xuICB2YXIgcmFuZ2VJRCA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLm9zbUlEcztcbiAgfSk7XG4gIHZhciByYW5nZVBlcmlvZCA9IGRhdGFMaXN0Lm1hcChmdW5jdGlvbiAobCkge1xuICAgIHJldHVybiBsLnBlcmlvZHM7XG4gIH0pO1xuXG4gIC8vIFNwbGl0IHRoZSBkYXRhIGludG8gbkNsdXN0ZXJzXG4gIHZhciBjbHVzdGVyID0gbGF5ZXIuY2x1c3RlcnMgPyAoMCwgX3NpbXBsZVN0YXRpc3RpY3MuY2ttZWFucykoc29ydGVkRGF0YSwgbGF5ZXIuY2x1c3RlcnMpIDogbnVsbDtcbiAgYnJlYWtzID0gbGF5ZXIubGltaXQgPyBsYXllci5saW1pdCA6IGNsdXN0ZXIubWFwKGZ1bmN0aW9uIChjbCkge1xuICAgIHJldHVybiBjbFtjbC5sZW5ndGggLSAxXTtcbiAgfSk7XG4gIHZhciBPU01JRHNFeGlzdCA9IGxheWVyLm9zbUlEcyAmJiBsYXllci5vc21JRHMubGVuZ3RoICE9PSAwO1xuICB2YXIgZGF0YSA9IGxheWVyLmxpbWl0ID8gcmFuZ2VEYXRhIDogc29ydGVkRGF0YTtcbiAgdmFyIG9zbUlEcyA9IGxheWVyLmxpbWl0ID8gcmFuZ2VJRCA6IG9zbUlEO1xuXG4gIC8vIEFzc2lnbiBjb2xvcnMgYW5kIHJhZGl1cyB0byBvc21JZCBvciBkYXRhIHZhbHVlXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZGF0YS5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnJlYWtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGF0YVtrXSA8PSBicmVha3NbaV0pIHtcbiAgICAgICAgY29sb3JzU3RvcHMucHVzaChbT1NNSURzRXhpc3QgPyBvc21JRHNba10gOiBkYXRhW2tdLCBnZXRDb2xvcihsYXllci5jb2xvcnMsIGkpXSk7XG4gICAgICAgIHJhZGl1c1N0b3BzLnB1c2goW09TTUlEc0V4aXN0ID8gb3NtSURzW2tdIDogZGF0YVtrXSwgTnVtYmVyKHJhZGl1c1tpXSldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxheWVyLnBlcmlvZHMpIHtcbiAgICB2YXIgdW5pcVBlcmlvZHMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBTZXQobGF5ZXIucGVyaW9kcykpKTtcbiAgICB2YXIgcGVyaW9kU3RvcHMgPSBbXTtcbiAgICB2YXIgcGVyaW9kUmFkaXVzID0gW107XG4gICAgdmFyIHBlcmlvZFN0cm9rZSA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdW5pcVBlcmlvZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHBlcmlvZFN0b3BzW2pdID0gW107XG4gICAgICBwZXJpb2RSYWRpdXNbal0gPSBbXTtcbiAgICAgIHBlcmlvZFN0cm9rZVtqXSA9IFtdO1xuICAgIH1cbiAgICB2YXIgcGVyaW9kUHJvcCA9IGxheWVyLmxpbWl0ID8gcmFuZ2VQZXJpb2QgOiBwZXJpb2Q7XG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCBwZXJpb2RQcm9wLmxlbmd0aDsgbSArPSAxKSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHVuaXFQZXJpb2RzLmxlbmd0aDsgbiArPSAxKSB7XG4gICAgICAgIGlmIChwZXJpb2RQcm9wW21dID09PSB1bmlxUGVyaW9kc1tuXSkge1xuICAgICAgICAgIHBlcmlvZFN0b3BzW25dLnB1c2goY29sb3JzU3RvcHNbbV0pO1xuICAgICAgICAgIHBlcmlvZFJhZGl1c1tuXS5wdXNoKHJhZGl1c1N0b3BzW21dKTtcbiAgICAgICAgICBwZXJpb2RTdHJva2Vbbl0ucHVzaChbcmFkaXVzU3RvcHNbbV1bMF0sIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3BlcmlvZFN0b3BzLCBwZXJpb2RSYWRpdXMsIHVuaXFQZXJpb2RzLCBicmVha3MsIGxheWVyLmNvbG9ycywgcGVyaW9kU3Ryb2tlXTtcbiAgfVxuICByZXR1cm4gW107XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2dlbmVyYXRlU3RvcHMuanMiLCIvLyBUaGlzIHByb2R1Y3QgaW5jbHVkZXMgY29sb3Igc3BlY2lmaWNhdGlvbnMgYW5kIGRlc2lnbnMgZGV2ZWxvcGVkIGJ5IEN5bnRoaWEgQnJld2VyIChodHRwOi8vY29sb3JicmV3ZXIub3JnLykuXG4vLyBKYXZhU2NyaXB0IHNwZWNzIGFzIHBhY2thZ2VkIGluIHRoZSBEMyBsaWJyYXJ5IChkM2pzLm9yZykuIFBsZWFzZSBzZWUgbGljZW5zZSBhdCBodHRwOi8vY29sb3JicmV3ZXIub3JnL2V4cG9ydC9MSUNFTlNFLnR4dFxuIWZ1bmN0aW9uKCkge1xuXG52YXIgY29sb3JicmV3ZXIgPSB7WWxHbjoge1xuMzogW1wiI2Y3ZmNiOVwiLFwiI2FkZGQ4ZVwiLFwiIzMxYTM1NFwiXSxcbjQ6IFtcIiNmZmZmY2NcIixcIiNjMmU2OTlcIixcIiM3OGM2NzlcIixcIiMyMzg0NDNcIl0sXG41OiBbXCIjZmZmZmNjXCIsXCIjYzJlNjk5XCIsXCIjNzhjNjc5XCIsXCIjMzFhMzU0XCIsXCIjMDA2ODM3XCJdLFxuNjogW1wiI2ZmZmZjY1wiLFwiI2Q5ZjBhM1wiLFwiI2FkZGQ4ZVwiLFwiIzc4YzY3OVwiLFwiIzMxYTM1NFwiLFwiIzAwNjgzN1wiXSxcbjc6IFtcIiNmZmZmY2NcIixcIiNkOWYwYTNcIixcIiNhZGRkOGVcIixcIiM3OGM2NzlcIixcIiM0MWFiNWRcIixcIiMyMzg0NDNcIixcIiMwMDVhMzJcIl0sXG44OiBbXCIjZmZmZmU1XCIsXCIjZjdmY2I5XCIsXCIjZDlmMGEzXCIsXCIjYWRkZDhlXCIsXCIjNzhjNjc5XCIsXCIjNDFhYjVkXCIsXCIjMjM4NDQzXCIsXCIjMDA1YTMyXCJdLFxuOTogW1wiI2ZmZmZlNVwiLFwiI2Y3ZmNiOVwiLFwiI2Q5ZjBhM1wiLFwiI2FkZGQ4ZVwiLFwiIzc4YzY3OVwiLFwiIzQxYWI1ZFwiLFwiIzIzODQ0M1wiLFwiIzAwNjgzN1wiLFwiIzAwNDUyOVwiXVxufSxZbEduQnU6IHtcbjM6IFtcIiNlZGY4YjFcIixcIiM3ZmNkYmJcIixcIiMyYzdmYjhcIl0sXG40OiBbXCIjZmZmZmNjXCIsXCIjYTFkYWI0XCIsXCIjNDFiNmM0XCIsXCIjMjI1ZWE4XCJdLFxuNTogW1wiI2ZmZmZjY1wiLFwiI2ExZGFiNFwiLFwiIzQxYjZjNFwiLFwiIzJjN2ZiOFwiLFwiIzI1MzQ5NFwiXSxcbjY6IFtcIiNmZmZmY2NcIixcIiNjN2U5YjRcIixcIiM3ZmNkYmJcIixcIiM0MWI2YzRcIixcIiMyYzdmYjhcIixcIiMyNTM0OTRcIl0sXG43OiBbXCIjZmZmZmNjXCIsXCIjYzdlOWI0XCIsXCIjN2ZjZGJiXCIsXCIjNDFiNmM0XCIsXCIjMWQ5MWMwXCIsXCIjMjI1ZWE4XCIsXCIjMGMyYzg0XCJdLFxuODogW1wiI2ZmZmZkOVwiLFwiI2VkZjhiMVwiLFwiI2M3ZTliNFwiLFwiIzdmY2RiYlwiLFwiIzQxYjZjNFwiLFwiIzFkOTFjMFwiLFwiIzIyNWVhOFwiLFwiIzBjMmM4NFwiXSxcbjk6IFtcIiNmZmZmZDlcIixcIiNlZGY4YjFcIixcIiNjN2U5YjRcIixcIiM3ZmNkYmJcIixcIiM0MWI2YzRcIixcIiMxZDkxYzBcIixcIiMyMjVlYThcIixcIiMyNTM0OTRcIixcIiMwODFkNThcIl1cbn0sR25CdToge1xuMzogW1wiI2UwZjNkYlwiLFwiI2E4ZGRiNVwiLFwiIzQzYTJjYVwiXSxcbjQ6IFtcIiNmMGY5ZThcIixcIiNiYWU0YmNcIixcIiM3YmNjYzRcIixcIiMyYjhjYmVcIl0sXG41OiBbXCIjZjBmOWU4XCIsXCIjYmFlNGJjXCIsXCIjN2JjY2M0XCIsXCIjNDNhMmNhXCIsXCIjMDg2OGFjXCJdLFxuNjogW1wiI2YwZjllOFwiLFwiI2NjZWJjNVwiLFwiI2E4ZGRiNVwiLFwiIzdiY2NjNFwiLFwiIzQzYTJjYVwiLFwiIzA4NjhhY1wiXSxcbjc6IFtcIiNmMGY5ZThcIixcIiNjY2ViYzVcIixcIiNhOGRkYjVcIixcIiM3YmNjYzRcIixcIiM0ZWIzZDNcIixcIiMyYjhjYmVcIixcIiMwODU4OWVcIl0sXG44OiBbXCIjZjdmY2YwXCIsXCIjZTBmM2RiXCIsXCIjY2NlYmM1XCIsXCIjYThkZGI1XCIsXCIjN2JjY2M0XCIsXCIjNGViM2QzXCIsXCIjMmI4Y2JlXCIsXCIjMDg1ODllXCJdLFxuOTogW1wiI2Y3ZmNmMFwiLFwiI2UwZjNkYlwiLFwiI2NjZWJjNVwiLFwiI2E4ZGRiNVwiLFwiIzdiY2NjNFwiLFwiIzRlYjNkM1wiLFwiIzJiOGNiZVwiLFwiIzA4NjhhY1wiLFwiIzA4NDA4MVwiXVxufSxCdUduOiB7XG4zOiBbXCIjZTVmNWY5XCIsXCIjOTlkOGM5XCIsXCIjMmNhMjVmXCJdLFxuNDogW1wiI2VkZjhmYlwiLFwiI2IyZTJlMlwiLFwiIzY2YzJhNFwiLFwiIzIzOGI0NVwiXSxcbjU6IFtcIiNlZGY4ZmJcIixcIiNiMmUyZTJcIixcIiM2NmMyYTRcIixcIiMyY2EyNWZcIixcIiMwMDZkMmNcIl0sXG42OiBbXCIjZWRmOGZiXCIsXCIjY2NlY2U2XCIsXCIjOTlkOGM5XCIsXCIjNjZjMmE0XCIsXCIjMmNhMjVmXCIsXCIjMDA2ZDJjXCJdLFxuNzogW1wiI2VkZjhmYlwiLFwiI2NjZWNlNlwiLFwiIzk5ZDhjOVwiLFwiIzY2YzJhNFwiLFwiIzQxYWU3NlwiLFwiIzIzOGI0NVwiLFwiIzAwNTgyNFwiXSxcbjg6IFtcIiNmN2ZjZmRcIixcIiNlNWY1ZjlcIixcIiNjY2VjZTZcIixcIiM5OWQ4YzlcIixcIiM2NmMyYTRcIixcIiM0MWFlNzZcIixcIiMyMzhiNDVcIixcIiMwMDU4MjRcIl0sXG45OiBbXCIjZjdmY2ZkXCIsXCIjZTVmNWY5XCIsXCIjY2NlY2U2XCIsXCIjOTlkOGM5XCIsXCIjNjZjMmE0XCIsXCIjNDFhZTc2XCIsXCIjMjM4YjQ1XCIsXCIjMDA2ZDJjXCIsXCIjMDA0NDFiXCJdXG59LFB1QnVHbjoge1xuMzogW1wiI2VjZTJmMFwiLFwiI2E2YmRkYlwiLFwiIzFjOTA5OVwiXSxcbjQ6IFtcIiNmNmVmZjdcIixcIiNiZGM5ZTFcIixcIiM2N2E5Y2ZcIixcIiMwMjgxOGFcIl0sXG41OiBbXCIjZjZlZmY3XCIsXCIjYmRjOWUxXCIsXCIjNjdhOWNmXCIsXCIjMWM5MDk5XCIsXCIjMDE2YzU5XCJdLFxuNjogW1wiI2Y2ZWZmN1wiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzY3YTljZlwiLFwiIzFjOTA5OVwiLFwiIzAxNmM1OVwiXSxcbjc6IFtcIiNmNmVmZjdcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM2N2E5Y2ZcIixcIiMzNjkwYzBcIixcIiMwMjgxOGFcIixcIiMwMTY0NTBcIl0sXG44OiBbXCIjZmZmN2ZiXCIsXCIjZWNlMmYwXCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNjdhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDI4MThhXCIsXCIjMDE2NDUwXCJdLFxuOTogW1wiI2ZmZjdmYlwiLFwiI2VjZTJmMFwiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzY3YTljZlwiLFwiIzM2OTBjMFwiLFwiIzAyODE4YVwiLFwiIzAxNmM1OVwiLFwiIzAxNDYzNlwiXVxufSxQdUJ1OiB7XG4zOiBbXCIjZWNlN2YyXCIsXCIjYTZiZGRiXCIsXCIjMmI4Y2JlXCJdLFxuNDogW1wiI2YxZWVmNlwiLFwiI2JkYzllMVwiLFwiIzc0YTljZlwiLFwiIzA1NzBiMFwiXSxcbjU6IFtcIiNmMWVlZjZcIixcIiNiZGM5ZTFcIixcIiM3NGE5Y2ZcIixcIiMyYjhjYmVcIixcIiMwNDVhOGRcIl0sXG42OiBbXCIjZjFlZWY2XCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNzRhOWNmXCIsXCIjMmI4Y2JlXCIsXCIjMDQ1YThkXCJdLFxuNzogW1wiI2YxZWVmNlwiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzc0YTljZlwiLFwiIzM2OTBjMFwiLFwiIzA1NzBiMFwiLFwiIzAzNGU3YlwiXSxcbjg6IFtcIiNmZmY3ZmJcIixcIiNlY2U3ZjJcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM3NGE5Y2ZcIixcIiMzNjkwYzBcIixcIiMwNTcwYjBcIixcIiMwMzRlN2JcIl0sXG45OiBbXCIjZmZmN2ZiXCIsXCIjZWNlN2YyXCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNzRhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDU3MGIwXCIsXCIjMDQ1YThkXCIsXCIjMDIzODU4XCJdXG59LEJ1UHU6IHtcbjM6IFtcIiNlMGVjZjRcIixcIiM5ZWJjZGFcIixcIiM4ODU2YTdcIl0sXG40OiBbXCIjZWRmOGZiXCIsXCIjYjNjZGUzXCIsXCIjOGM5NmM2XCIsXCIjODg0MTlkXCJdLFxuNTogW1wiI2VkZjhmYlwiLFwiI2IzY2RlM1wiLFwiIzhjOTZjNlwiLFwiIzg4NTZhN1wiLFwiIzgxMGY3Y1wiXSxcbjY6IFtcIiNlZGY4ZmJcIixcIiNiZmQzZTZcIixcIiM5ZWJjZGFcIixcIiM4Yzk2YzZcIixcIiM4ODU2YTdcIixcIiM4MTBmN2NcIl0sXG43OiBbXCIjZWRmOGZiXCIsXCIjYmZkM2U2XCIsXCIjOWViY2RhXCIsXCIjOGM5NmM2XCIsXCIjOGM2YmIxXCIsXCIjODg0MTlkXCIsXCIjNmUwMTZiXCJdLFxuODogW1wiI2Y3ZmNmZFwiLFwiI2UwZWNmNFwiLFwiI2JmZDNlNlwiLFwiIzllYmNkYVwiLFwiIzhjOTZjNlwiLFwiIzhjNmJiMVwiLFwiIzg4NDE5ZFwiLFwiIzZlMDE2YlwiXSxcbjk6IFtcIiNmN2ZjZmRcIixcIiNlMGVjZjRcIixcIiNiZmQzZTZcIixcIiM5ZWJjZGFcIixcIiM4Yzk2YzZcIixcIiM4YzZiYjFcIixcIiM4ODQxOWRcIixcIiM4MTBmN2NcIixcIiM0ZDAwNGJcIl1cbn0sUmRQdToge1xuMzogW1wiI2ZkZTBkZFwiLFwiI2ZhOWZiNVwiLFwiI2M1MWI4YVwiXSxcbjQ6IFtcIiNmZWViZTJcIixcIiNmYmI0YjlcIixcIiNmNzY4YTFcIixcIiNhZTAxN2VcIl0sXG41OiBbXCIjZmVlYmUyXCIsXCIjZmJiNGI5XCIsXCIjZjc2OGExXCIsXCIjYzUxYjhhXCIsXCIjN2EwMTc3XCJdLFxuNjogW1wiI2ZlZWJlMlwiLFwiI2ZjYzVjMFwiLFwiI2ZhOWZiNVwiLFwiI2Y3NjhhMVwiLFwiI2M1MWI4YVwiLFwiIzdhMDE3N1wiXSxcbjc6IFtcIiNmZWViZTJcIixcIiNmY2M1YzBcIixcIiNmYTlmYjVcIixcIiNmNzY4YTFcIixcIiNkZDM0OTdcIixcIiNhZTAxN2VcIixcIiM3YTAxNzdcIl0sXG44OiBbXCIjZmZmN2YzXCIsXCIjZmRlMGRkXCIsXCIjZmNjNWMwXCIsXCIjZmE5ZmI1XCIsXCIjZjc2OGExXCIsXCIjZGQzNDk3XCIsXCIjYWUwMTdlXCIsXCIjN2EwMTc3XCJdLFxuOTogW1wiI2ZmZjdmM1wiLFwiI2ZkZTBkZFwiLFwiI2ZjYzVjMFwiLFwiI2ZhOWZiNVwiLFwiI2Y3NjhhMVwiLFwiI2RkMzQ5N1wiLFwiI2FlMDE3ZVwiLFwiIzdhMDE3N1wiLFwiIzQ5MDA2YVwiXVxufSxQdVJkOiB7XG4zOiBbXCIjZTdlMWVmXCIsXCIjYzk5NGM3XCIsXCIjZGQxYzc3XCJdLFxuNDogW1wiI2YxZWVmNlwiLFwiI2Q3YjVkOFwiLFwiI2RmNjViMFwiLFwiI2NlMTI1NlwiXSxcbjU6IFtcIiNmMWVlZjZcIixcIiNkN2I1ZDhcIixcIiNkZjY1YjBcIixcIiNkZDFjNzdcIixcIiM5ODAwNDNcIl0sXG42OiBbXCIjZjFlZWY2XCIsXCIjZDRiOWRhXCIsXCIjYzk5NGM3XCIsXCIjZGY2NWIwXCIsXCIjZGQxYzc3XCIsXCIjOTgwMDQzXCJdLFxuNzogW1wiI2YxZWVmNlwiLFwiI2Q0YjlkYVwiLFwiI2M5OTRjN1wiLFwiI2RmNjViMFwiLFwiI2U3Mjk4YVwiLFwiI2NlMTI1NlwiLFwiIzkxMDAzZlwiXSxcbjg6IFtcIiNmN2Y0ZjlcIixcIiNlN2UxZWZcIixcIiNkNGI5ZGFcIixcIiNjOTk0YzdcIixcIiNkZjY1YjBcIixcIiNlNzI5OGFcIixcIiNjZTEyNTZcIixcIiM5MTAwM2ZcIl0sXG45OiBbXCIjZjdmNGY5XCIsXCIjZTdlMWVmXCIsXCIjZDRiOWRhXCIsXCIjYzk5NGM3XCIsXCIjZGY2NWIwXCIsXCIjZTcyOThhXCIsXCIjY2UxMjU2XCIsXCIjOTgwMDQzXCIsXCIjNjcwMDFmXCJdXG59LE9yUmQ6IHtcbjM6IFtcIiNmZWU4YzhcIixcIiNmZGJiODRcIixcIiNlMzRhMzNcIl0sXG40OiBbXCIjZmVmMGQ5XCIsXCIjZmRjYzhhXCIsXCIjZmM4ZDU5XCIsXCIjZDczMDFmXCJdLFxuNTogW1wiI2ZlZjBkOVwiLFwiI2ZkY2M4YVwiLFwiI2ZjOGQ1OVwiLFwiI2UzNGEzM1wiLFwiI2IzMDAwMFwiXSxcbjY6IFtcIiNmZWYwZDlcIixcIiNmZGQ0OWVcIixcIiNmZGJiODRcIixcIiNmYzhkNTlcIixcIiNlMzRhMzNcIixcIiNiMzAwMDBcIl0sXG43OiBbXCIjZmVmMGQ5XCIsXCIjZmRkNDllXCIsXCIjZmRiYjg0XCIsXCIjZmM4ZDU5XCIsXCIjZWY2NTQ4XCIsXCIjZDczMDFmXCIsXCIjOTkwMDAwXCJdLFxuODogW1wiI2ZmZjdlY1wiLFwiI2ZlZThjOFwiLFwiI2ZkZDQ5ZVwiLFwiI2ZkYmI4NFwiLFwiI2ZjOGQ1OVwiLFwiI2VmNjU0OFwiLFwiI2Q3MzAxZlwiLFwiIzk5MDAwMFwiXSxcbjk6IFtcIiNmZmY3ZWNcIixcIiNmZWU4YzhcIixcIiNmZGQ0OWVcIixcIiNmZGJiODRcIixcIiNmYzhkNTlcIixcIiNlZjY1NDhcIixcIiNkNzMwMWZcIixcIiNiMzAwMDBcIixcIiM3ZjAwMDBcIl1cbn0sWWxPclJkOiB7XG4zOiBbXCIjZmZlZGEwXCIsXCIjZmViMjRjXCIsXCIjZjAzYjIwXCJdLFxuNDogW1wiI2ZmZmZiMlwiLFwiI2ZlY2M1Y1wiLFwiI2ZkOGQzY1wiLFwiI2UzMWExY1wiXSxcbjU6IFtcIiNmZmZmYjJcIixcIiNmZWNjNWNcIixcIiNmZDhkM2NcIixcIiNmMDNiMjBcIixcIiNiZDAwMjZcIl0sXG42OiBbXCIjZmZmZmIyXCIsXCIjZmVkOTc2XCIsXCIjZmViMjRjXCIsXCIjZmQ4ZDNjXCIsXCIjZjAzYjIwXCIsXCIjYmQwMDI2XCJdLFxuNzogW1wiI2ZmZmZiMlwiLFwiI2ZlZDk3NlwiLFwiI2ZlYjI0Y1wiLFwiI2ZkOGQzY1wiLFwiI2ZjNGUyYVwiLFwiI2UzMWExY1wiLFwiI2IxMDAyNlwiXSxcbjg6IFtcIiNmZmZmY2NcIixcIiNmZmVkYTBcIixcIiNmZWQ5NzZcIixcIiNmZWIyNGNcIixcIiNmZDhkM2NcIixcIiNmYzRlMmFcIixcIiNlMzFhMWNcIixcIiNiMTAwMjZcIl0sXG45OiBbXCIjZmZmZmNjXCIsXCIjZmZlZGEwXCIsXCIjZmVkOTc2XCIsXCIjZmViMjRjXCIsXCIjZmQ4ZDNjXCIsXCIjZmM0ZTJhXCIsXCIjZTMxYTFjXCIsXCIjYmQwMDI2XCIsXCIjODAwMDI2XCJdXG59LFlsT3JCcjoge1xuMzogW1wiI2ZmZjdiY1wiLFwiI2ZlYzQ0ZlwiLFwiI2Q5NWYwZVwiXSxcbjQ6IFtcIiNmZmZmZDRcIixcIiNmZWQ5OGVcIixcIiNmZTk5MjlcIixcIiNjYzRjMDJcIl0sXG41OiBbXCIjZmZmZmQ0XCIsXCIjZmVkOThlXCIsXCIjZmU5OTI5XCIsXCIjZDk1ZjBlXCIsXCIjOTkzNDA0XCJdLFxuNjogW1wiI2ZmZmZkNFwiLFwiI2ZlZTM5MVwiLFwiI2ZlYzQ0ZlwiLFwiI2ZlOTkyOVwiLFwiI2Q5NWYwZVwiLFwiIzk5MzQwNFwiXSxcbjc6IFtcIiNmZmZmZDRcIixcIiNmZWUzOTFcIixcIiNmZWM0NGZcIixcIiNmZTk5MjlcIixcIiNlYzcwMTRcIixcIiNjYzRjMDJcIixcIiM4YzJkMDRcIl0sXG44OiBbXCIjZmZmZmU1XCIsXCIjZmZmN2JjXCIsXCIjZmVlMzkxXCIsXCIjZmVjNDRmXCIsXCIjZmU5OTI5XCIsXCIjZWM3MDE0XCIsXCIjY2M0YzAyXCIsXCIjOGMyZDA0XCJdLFxuOTogW1wiI2ZmZmZlNVwiLFwiI2ZmZjdiY1wiLFwiI2ZlZTM5MVwiLFwiI2ZlYzQ0ZlwiLFwiI2ZlOTkyOVwiLFwiI2VjNzAxNFwiLFwiI2NjNGMwMlwiLFwiIzk5MzQwNFwiLFwiIzY2MjUwNlwiXVxufSxQdXJwbGVzOiB7XG4zOiBbXCIjZWZlZGY1XCIsXCIjYmNiZGRjXCIsXCIjNzU2YmIxXCJdLFxuNDogW1wiI2YyZjBmN1wiLFwiI2NiYzllMlwiLFwiIzllOWFjOFwiLFwiIzZhNTFhM1wiXSxcbjU6IFtcIiNmMmYwZjdcIixcIiNjYmM5ZTJcIixcIiM5ZTlhYzhcIixcIiM3NTZiYjFcIixcIiM1NDI3OGZcIl0sXG42OiBbXCIjZjJmMGY3XCIsXCIjZGFkYWViXCIsXCIjYmNiZGRjXCIsXCIjOWU5YWM4XCIsXCIjNzU2YmIxXCIsXCIjNTQyNzhmXCJdLFxuNzogW1wiI2YyZjBmN1wiLFwiI2RhZGFlYlwiLFwiI2JjYmRkY1wiLFwiIzllOWFjOFwiLFwiIzgwN2RiYVwiLFwiIzZhNTFhM1wiLFwiIzRhMTQ4NlwiXSxcbjg6IFtcIiNmY2ZiZmRcIixcIiNlZmVkZjVcIixcIiNkYWRhZWJcIixcIiNiY2JkZGNcIixcIiM5ZTlhYzhcIixcIiM4MDdkYmFcIixcIiM2YTUxYTNcIixcIiM0YTE0ODZcIl0sXG45OiBbXCIjZmNmYmZkXCIsXCIjZWZlZGY1XCIsXCIjZGFkYWViXCIsXCIjYmNiZGRjXCIsXCIjOWU5YWM4XCIsXCIjODA3ZGJhXCIsXCIjNmE1MWEzXCIsXCIjNTQyNzhmXCIsXCIjM2YwMDdkXCJdXG59LEJsdWVzOiB7XG4zOiBbXCIjZGVlYmY3XCIsXCIjOWVjYWUxXCIsXCIjMzE4MmJkXCJdLFxuNDogW1wiI2VmZjNmZlwiLFwiI2JkZDdlN1wiLFwiIzZiYWVkNlwiLFwiIzIxNzFiNVwiXSxcbjU6IFtcIiNlZmYzZmZcIixcIiNiZGQ3ZTdcIixcIiM2YmFlZDZcIixcIiMzMTgyYmRcIixcIiMwODUxOWNcIl0sXG42OiBbXCIjZWZmM2ZmXCIsXCIjYzZkYmVmXCIsXCIjOWVjYWUxXCIsXCIjNmJhZWQ2XCIsXCIjMzE4MmJkXCIsXCIjMDg1MTljXCJdLFxuNzogW1wiI2VmZjNmZlwiLFwiI2M2ZGJlZlwiLFwiIzllY2FlMVwiLFwiIzZiYWVkNlwiLFwiIzQyOTJjNlwiLFwiIzIxNzFiNVwiLFwiIzA4NDU5NFwiXSxcbjg6IFtcIiNmN2ZiZmZcIixcIiNkZWViZjdcIixcIiNjNmRiZWZcIixcIiM5ZWNhZTFcIixcIiM2YmFlZDZcIixcIiM0MjkyYzZcIixcIiMyMTcxYjVcIixcIiMwODQ1OTRcIl0sXG45OiBbXCIjZjdmYmZmXCIsXCIjZGVlYmY3XCIsXCIjYzZkYmVmXCIsXCIjOWVjYWUxXCIsXCIjNmJhZWQ2XCIsXCIjNDI5MmM2XCIsXCIjMjE3MWI1XCIsXCIjMDg1MTljXCIsXCIjMDgzMDZiXCJdXG59LEdyZWVuczoge1xuMzogW1wiI2U1ZjVlMFwiLFwiI2ExZDk5YlwiLFwiIzMxYTM1NFwiXSxcbjQ6IFtcIiNlZGY4ZTlcIixcIiNiYWU0YjNcIixcIiM3NGM0NzZcIixcIiMyMzhiNDVcIl0sXG41OiBbXCIjZWRmOGU5XCIsXCIjYmFlNGIzXCIsXCIjNzRjNDc2XCIsXCIjMzFhMzU0XCIsXCIjMDA2ZDJjXCJdLFxuNjogW1wiI2VkZjhlOVwiLFwiI2M3ZTljMFwiLFwiI2ExZDk5YlwiLFwiIzc0YzQ3NlwiLFwiIzMxYTM1NFwiLFwiIzAwNmQyY1wiXSxcbjc6IFtcIiNlZGY4ZTlcIixcIiNjN2U5YzBcIixcIiNhMWQ5OWJcIixcIiM3NGM0NzZcIixcIiM0MWFiNWRcIixcIiMyMzhiNDVcIixcIiMwMDVhMzJcIl0sXG44OiBbXCIjZjdmY2Y1XCIsXCIjZTVmNWUwXCIsXCIjYzdlOWMwXCIsXCIjYTFkOTliXCIsXCIjNzRjNDc2XCIsXCIjNDFhYjVkXCIsXCIjMjM4YjQ1XCIsXCIjMDA1YTMyXCJdLFxuOTogW1wiI2Y3ZmNmNVwiLFwiI2U1ZjVlMFwiLFwiI2M3ZTljMFwiLFwiI2ExZDk5YlwiLFwiIzc0YzQ3NlwiLFwiIzQxYWI1ZFwiLFwiIzIzOGI0NVwiLFwiIzAwNmQyY1wiLFwiIzAwNDQxYlwiXVxufSxPcmFuZ2VzOiB7XG4zOiBbXCIjZmVlNmNlXCIsXCIjZmRhZTZiXCIsXCIjZTY1NTBkXCJdLFxuNDogW1wiI2ZlZWRkZVwiLFwiI2ZkYmU4NVwiLFwiI2ZkOGQzY1wiLFwiI2Q5NDcwMVwiXSxcbjU6IFtcIiNmZWVkZGVcIixcIiNmZGJlODVcIixcIiNmZDhkM2NcIixcIiNlNjU1MGRcIixcIiNhNjM2MDNcIl0sXG42OiBbXCIjZmVlZGRlXCIsXCIjZmRkMGEyXCIsXCIjZmRhZTZiXCIsXCIjZmQ4ZDNjXCIsXCIjZTY1NTBkXCIsXCIjYTYzNjAzXCJdLFxuNzogW1wiI2ZlZWRkZVwiLFwiI2ZkZDBhMlwiLFwiI2ZkYWU2YlwiLFwiI2ZkOGQzY1wiLFwiI2YxNjkxM1wiLFwiI2Q5NDgwMVwiLFwiIzhjMmQwNFwiXSxcbjg6IFtcIiNmZmY1ZWJcIixcIiNmZWU2Y2VcIixcIiNmZGQwYTJcIixcIiNmZGFlNmJcIixcIiNmZDhkM2NcIixcIiNmMTY5MTNcIixcIiNkOTQ4MDFcIixcIiM4YzJkMDRcIl0sXG45OiBbXCIjZmZmNWViXCIsXCIjZmVlNmNlXCIsXCIjZmRkMGEyXCIsXCIjZmRhZTZiXCIsXCIjZmQ4ZDNjXCIsXCIjZjE2OTEzXCIsXCIjZDk0ODAxXCIsXCIjYTYzNjAzXCIsXCIjN2YyNzA0XCJdXG59LFJlZHM6IHtcbjM6IFtcIiNmZWUwZDJcIixcIiNmYzkyNzJcIixcIiNkZTJkMjZcIl0sXG40OiBbXCIjZmVlNWQ5XCIsXCIjZmNhZTkxXCIsXCIjZmI2YTRhXCIsXCIjY2IxODFkXCJdLFxuNTogW1wiI2ZlZTVkOVwiLFwiI2ZjYWU5MVwiLFwiI2ZiNmE0YVwiLFwiI2RlMmQyNlwiLFwiI2E1MGYxNVwiXSxcbjY6IFtcIiNmZWU1ZDlcIixcIiNmY2JiYTFcIixcIiNmYzkyNzJcIixcIiNmYjZhNGFcIixcIiNkZTJkMjZcIixcIiNhNTBmMTVcIl0sXG43OiBbXCIjZmVlNWQ5XCIsXCIjZmNiYmExXCIsXCIjZmM5MjcyXCIsXCIjZmI2YTRhXCIsXCIjZWYzYjJjXCIsXCIjY2IxODFkXCIsXCIjOTkwMDBkXCJdLFxuODogW1wiI2ZmZjVmMFwiLFwiI2ZlZTBkMlwiLFwiI2ZjYmJhMVwiLFwiI2ZjOTI3MlwiLFwiI2ZiNmE0YVwiLFwiI2VmM2IyY1wiLFwiI2NiMTgxZFwiLFwiIzk5MDAwZFwiXSxcbjk6IFtcIiNmZmY1ZjBcIixcIiNmZWUwZDJcIixcIiNmY2JiYTFcIixcIiNmYzkyNzJcIixcIiNmYjZhNGFcIixcIiNlZjNiMmNcIixcIiNjYjE4MWRcIixcIiNhNTBmMTVcIixcIiM2NzAwMGRcIl1cbn0sR3JleXM6IHtcbjM6IFtcIiNmMGYwZjBcIixcIiNiZGJkYmRcIixcIiM2MzYzNjNcIl0sXG40OiBbXCIjZjdmN2Y3XCIsXCIjY2NjY2NjXCIsXCIjOTY5Njk2XCIsXCIjNTI1MjUyXCJdLFxuNTogW1wiI2Y3ZjdmN1wiLFwiI2NjY2NjY1wiLFwiIzk2OTY5NlwiLFwiIzYzNjM2M1wiLFwiIzI1MjUyNVwiXSxcbjY6IFtcIiNmN2Y3ZjdcIixcIiNkOWQ5ZDlcIixcIiNiZGJkYmRcIixcIiM5Njk2OTZcIixcIiM2MzYzNjNcIixcIiMyNTI1MjVcIl0sXG43OiBbXCIjZjdmN2Y3XCIsXCIjZDlkOWQ5XCIsXCIjYmRiZGJkXCIsXCIjOTY5Njk2XCIsXCIjNzM3MzczXCIsXCIjNTI1MjUyXCIsXCIjMjUyNTI1XCJdLFxuODogW1wiI2ZmZmZmZlwiLFwiI2YwZjBmMFwiLFwiI2Q5ZDlkOVwiLFwiI2JkYmRiZFwiLFwiIzk2OTY5NlwiLFwiIzczNzM3M1wiLFwiIzUyNTI1MlwiLFwiIzI1MjUyNVwiXSxcbjk6IFtcIiNmZmZmZmZcIixcIiNmMGYwZjBcIixcIiNkOWQ5ZDlcIixcIiNiZGJkYmRcIixcIiM5Njk2OTZcIixcIiM3MzczNzNcIixcIiM1MjUyNTJcIixcIiMyNTI1MjVcIixcIiMwMDAwMDBcIl1cbn0sUHVPcjoge1xuMzogW1wiI2YxYTM0MFwiLFwiI2Y3ZjdmN1wiLFwiIzk5OGVjM1wiXSxcbjQ6IFtcIiNlNjYxMDFcIixcIiNmZGI4NjNcIixcIiNiMmFiZDJcIixcIiM1ZTNjOTlcIl0sXG41OiBbXCIjZTY2MTAxXCIsXCIjZmRiODYzXCIsXCIjZjdmN2Y3XCIsXCIjYjJhYmQyXCIsXCIjNWUzYzk5XCJdLFxuNjogW1wiI2IzNTgwNlwiLFwiI2YxYTM0MFwiLFwiI2ZlZTBiNlwiLFwiI2Q4ZGFlYlwiLFwiIzk5OGVjM1wiLFwiIzU0Mjc4OFwiXSxcbjc6IFtcIiNiMzU4MDZcIixcIiNmMWEzNDBcIixcIiNmZWUwYjZcIixcIiNmN2Y3ZjdcIixcIiNkOGRhZWJcIixcIiM5OThlYzNcIixcIiM1NDI3ODhcIl0sXG44OiBbXCIjYjM1ODA2XCIsXCIjZTA4MjE0XCIsXCIjZmRiODYzXCIsXCIjZmVlMGI2XCIsXCIjZDhkYWViXCIsXCIjYjJhYmQyXCIsXCIjODA3M2FjXCIsXCIjNTQyNzg4XCJdLFxuOTogW1wiI2IzNTgwNlwiLFwiI2UwODIxNFwiLFwiI2ZkYjg2M1wiLFwiI2ZlZTBiNlwiLFwiI2Y3ZjdmN1wiLFwiI2Q4ZGFlYlwiLFwiI2IyYWJkMlwiLFwiIzgwNzNhY1wiLFwiIzU0Mjc4OFwiXSxcbjEwOiBbXCIjN2YzYjA4XCIsXCIjYjM1ODA2XCIsXCIjZTA4MjE0XCIsXCIjZmRiODYzXCIsXCIjZmVlMGI2XCIsXCIjZDhkYWViXCIsXCIjYjJhYmQyXCIsXCIjODA3M2FjXCIsXCIjNTQyNzg4XCIsXCIjMmQwMDRiXCJdLFxuMTE6IFtcIiM3ZjNiMDhcIixcIiNiMzU4MDZcIixcIiNlMDgyMTRcIixcIiNmZGI4NjNcIixcIiNmZWUwYjZcIixcIiNmN2Y3ZjdcIixcIiNkOGRhZWJcIixcIiNiMmFiZDJcIixcIiM4MDczYWNcIixcIiM1NDI3ODhcIixcIiMyZDAwNGJcIl1cbn0sQnJCRzoge1xuMzogW1wiI2Q4YjM2NVwiLFwiI2Y1ZjVmNVwiLFwiIzVhYjRhY1wiXSxcbjQ6IFtcIiNhNjYxMWFcIixcIiNkZmMyN2RcIixcIiM4MGNkYzFcIixcIiMwMTg1NzFcIl0sXG41OiBbXCIjYTY2MTFhXCIsXCIjZGZjMjdkXCIsXCIjZjVmNWY1XCIsXCIjODBjZGMxXCIsXCIjMDE4NTcxXCJdLFxuNjogW1wiIzhjNTEwYVwiLFwiI2Q4YjM2NVwiLFwiI2Y2ZThjM1wiLFwiI2M3ZWFlNVwiLFwiIzVhYjRhY1wiLFwiIzAxNjY1ZVwiXSxcbjc6IFtcIiM4YzUxMGFcIixcIiNkOGIzNjVcIixcIiNmNmU4YzNcIixcIiNmNWY1ZjVcIixcIiNjN2VhZTVcIixcIiM1YWI0YWNcIixcIiMwMTY2NWVcIl0sXG44OiBbXCIjOGM1MTBhXCIsXCIjYmY4MTJkXCIsXCIjZGZjMjdkXCIsXCIjZjZlOGMzXCIsXCIjYzdlYWU1XCIsXCIjODBjZGMxXCIsXCIjMzU5NzhmXCIsXCIjMDE2NjVlXCJdLFxuOTogW1wiIzhjNTEwYVwiLFwiI2JmODEyZFwiLFwiI2RmYzI3ZFwiLFwiI2Y2ZThjM1wiLFwiI2Y1ZjVmNVwiLFwiI2M3ZWFlNVwiLFwiIzgwY2RjMVwiLFwiIzM1OTc4ZlwiLFwiIzAxNjY1ZVwiXSxcbjEwOiBbXCIjNTQzMDA1XCIsXCIjOGM1MTBhXCIsXCIjYmY4MTJkXCIsXCIjZGZjMjdkXCIsXCIjZjZlOGMzXCIsXCIjYzdlYWU1XCIsXCIjODBjZGMxXCIsXCIjMzU5NzhmXCIsXCIjMDE2NjVlXCIsXCIjMDAzYzMwXCJdLFxuMTE6IFtcIiM1NDMwMDVcIixcIiM4YzUxMGFcIixcIiNiZjgxMmRcIixcIiNkZmMyN2RcIixcIiNmNmU4YzNcIixcIiNmNWY1ZjVcIixcIiNjN2VhZTVcIixcIiM4MGNkYzFcIixcIiMzNTk3OGZcIixcIiMwMTY2NWVcIixcIiMwMDNjMzBcIl1cbn0sUFJHbjoge1xuMzogW1wiI2FmOGRjM1wiLFwiI2Y3ZjdmN1wiLFwiIzdmYmY3YlwiXSxcbjQ6IFtcIiM3YjMyOTRcIixcIiNjMmE1Y2ZcIixcIiNhNmRiYTBcIixcIiMwMDg4MzdcIl0sXG41OiBbXCIjN2IzMjk0XCIsXCIjYzJhNWNmXCIsXCIjZjdmN2Y3XCIsXCIjYTZkYmEwXCIsXCIjMDA4ODM3XCJdLFxuNjogW1wiIzc2MmE4M1wiLFwiI2FmOGRjM1wiLFwiI2U3ZDRlOFwiLFwiI2Q5ZjBkM1wiLFwiIzdmYmY3YlwiLFwiIzFiNzgzN1wiXSxcbjc6IFtcIiM3NjJhODNcIixcIiNhZjhkYzNcIixcIiNlN2Q0ZThcIixcIiNmN2Y3ZjdcIixcIiNkOWYwZDNcIixcIiM3ZmJmN2JcIixcIiMxYjc4MzdcIl0sXG44OiBbXCIjNzYyYTgzXCIsXCIjOTk3MGFiXCIsXCIjYzJhNWNmXCIsXCIjZTdkNGU4XCIsXCIjZDlmMGQzXCIsXCIjYTZkYmEwXCIsXCIjNWFhZTYxXCIsXCIjMWI3ODM3XCJdLFxuOTogW1wiIzc2MmE4M1wiLFwiIzk5NzBhYlwiLFwiI2MyYTVjZlwiLFwiI2U3ZDRlOFwiLFwiI2Y3ZjdmN1wiLFwiI2Q5ZjBkM1wiLFwiI2E2ZGJhMFwiLFwiIzVhYWU2MVwiLFwiIzFiNzgzN1wiXSxcbjEwOiBbXCIjNDAwMDRiXCIsXCIjNzYyYTgzXCIsXCIjOTk3MGFiXCIsXCIjYzJhNWNmXCIsXCIjZTdkNGU4XCIsXCIjZDlmMGQzXCIsXCIjYTZkYmEwXCIsXCIjNWFhZTYxXCIsXCIjMWI3ODM3XCIsXCIjMDA0NDFiXCJdLFxuMTE6IFtcIiM0MDAwNGJcIixcIiM3NjJhODNcIixcIiM5OTcwYWJcIixcIiNjMmE1Y2ZcIixcIiNlN2Q0ZThcIixcIiNmN2Y3ZjdcIixcIiNkOWYwZDNcIixcIiNhNmRiYTBcIixcIiM1YWFlNjFcIixcIiMxYjc4MzdcIixcIiMwMDQ0MWJcIl1cbn0sUGlZRzoge1xuMzogW1wiI2U5YTNjOVwiLFwiI2Y3ZjdmN1wiLFwiI2ExZDc2YVwiXSxcbjQ6IFtcIiNkMDFjOGJcIixcIiNmMWI2ZGFcIixcIiNiOGUxODZcIixcIiM0ZGFjMjZcIl0sXG41OiBbXCIjZDAxYzhiXCIsXCIjZjFiNmRhXCIsXCIjZjdmN2Y3XCIsXCIjYjhlMTg2XCIsXCIjNGRhYzI2XCJdLFxuNjogW1wiI2M1MWI3ZFwiLFwiI2U5YTNjOVwiLFwiI2ZkZTBlZlwiLFwiI2U2ZjVkMFwiLFwiI2ExZDc2YVwiLFwiIzRkOTIyMVwiXSxcbjc6IFtcIiNjNTFiN2RcIixcIiNlOWEzYzlcIixcIiNmZGUwZWZcIixcIiNmN2Y3ZjdcIixcIiNlNmY1ZDBcIixcIiNhMWQ3NmFcIixcIiM0ZDkyMjFcIl0sXG44OiBbXCIjYzUxYjdkXCIsXCIjZGU3N2FlXCIsXCIjZjFiNmRhXCIsXCIjZmRlMGVmXCIsXCIjZTZmNWQwXCIsXCIjYjhlMTg2XCIsXCIjN2ZiYzQxXCIsXCIjNGQ5MjIxXCJdLFxuOTogW1wiI2M1MWI3ZFwiLFwiI2RlNzdhZVwiLFwiI2YxYjZkYVwiLFwiI2ZkZTBlZlwiLFwiI2Y3ZjdmN1wiLFwiI2U2ZjVkMFwiLFwiI2I4ZTE4NlwiLFwiIzdmYmM0MVwiLFwiIzRkOTIyMVwiXSxcbjEwOiBbXCIjOGUwMTUyXCIsXCIjYzUxYjdkXCIsXCIjZGU3N2FlXCIsXCIjZjFiNmRhXCIsXCIjZmRlMGVmXCIsXCIjZTZmNWQwXCIsXCIjYjhlMTg2XCIsXCIjN2ZiYzQxXCIsXCIjNGQ5MjIxXCIsXCIjMjc2NDE5XCJdLFxuMTE6IFtcIiM4ZTAxNTJcIixcIiNjNTFiN2RcIixcIiNkZTc3YWVcIixcIiNmMWI2ZGFcIixcIiNmZGUwZWZcIixcIiNmN2Y3ZjdcIixcIiNlNmY1ZDBcIixcIiNiOGUxODZcIixcIiM3ZmJjNDFcIixcIiM0ZDkyMjFcIixcIiMyNzY0MTlcIl1cbn0sUmRCdToge1xuMzogW1wiI2VmOGE2MlwiLFwiI2Y3ZjdmN1wiLFwiIzY3YTljZlwiXSxcbjQ6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiM5MmM1ZGVcIixcIiMwNTcxYjBcIl0sXG41OiBbXCIjY2EwMDIwXCIsXCIjZjRhNTgyXCIsXCIjZjdmN2Y3XCIsXCIjOTJjNWRlXCIsXCIjMDU3MWIwXCJdLFxuNjogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2QxZTVmMFwiLFwiIzY3YTljZlwiLFwiIzIxNjZhY1wiXSxcbjc6IFtcIiNiMjE4MmJcIixcIiNlZjhhNjJcIixcIiNmZGRiYzdcIixcIiNmN2Y3ZjdcIixcIiNkMWU1ZjBcIixcIiM2N2E5Y2ZcIixcIiMyMTY2YWNcIl0sXG44OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZDFlNWYwXCIsXCIjOTJjNWRlXCIsXCIjNDM5M2MzXCIsXCIjMjE2NmFjXCJdLFxuOTogW1wiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2Y3ZjdmN1wiLFwiI2QxZTVmMFwiLFwiIzkyYzVkZVwiLFwiIzQzOTNjM1wiLFwiIzIxNjZhY1wiXSxcbjEwOiBbXCIjNjcwMDFmXCIsXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZDFlNWYwXCIsXCIjOTJjNWRlXCIsXCIjNDM5M2MzXCIsXCIjMjE2NmFjXCIsXCIjMDUzMDYxXCJdLFxuMTE6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNmN2Y3ZjdcIixcIiNkMWU1ZjBcIixcIiM5MmM1ZGVcIixcIiM0MzkzYzNcIixcIiMyMTY2YWNcIixcIiMwNTMwNjFcIl1cbn0sUmRHeToge1xuMzogW1wiI2VmOGE2MlwiLFwiI2ZmZmZmZlwiLFwiIzk5OTk5OVwiXSxcbjQ6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiNiYWJhYmFcIixcIiM0MDQwNDBcIl0sXG41OiBbXCIjY2EwMDIwXCIsXCIjZjRhNTgyXCIsXCIjZmZmZmZmXCIsXCIjYmFiYWJhXCIsXCIjNDA0MDQwXCJdLFxuNjogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2UwZTBlMFwiLFwiIzk5OTk5OVwiLFwiIzRkNGQ0ZFwiXSxcbjc6IFtcIiNiMjE4MmJcIixcIiNlZjhhNjJcIixcIiNmZGRiYzdcIixcIiNmZmZmZmZcIixcIiNlMGUwZTBcIixcIiM5OTk5OTlcIixcIiM0ZDRkNGRcIl0sXG44OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZTBlMGUwXCIsXCIjYmFiYWJhXCIsXCIjODc4Nzg3XCIsXCIjNGQ0ZDRkXCJdLFxuOTogW1wiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2ZmZmZmZlwiLFwiI2UwZTBlMFwiLFwiI2JhYmFiYVwiLFwiIzg3ODc4N1wiLFwiIzRkNGQ0ZFwiXSxcbjEwOiBbXCIjNjcwMDFmXCIsXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZTBlMGUwXCIsXCIjYmFiYWJhXCIsXCIjODc4Nzg3XCIsXCIjNGQ0ZDRkXCIsXCIjMWExYTFhXCJdLFxuMTE6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNmZmZmZmZcIixcIiNlMGUwZTBcIixcIiNiYWJhYmFcIixcIiM4Nzg3ODdcIixcIiM0ZDRkNGRcIixcIiMxYTFhMWFcIl1cbn0sUmRZbEJ1OiB7XG4zOiBbXCIjZmM4ZDU5XCIsXCIjZmZmZmJmXCIsXCIjOTFiZmRiXCJdLFxuNDogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2FiZDllOVwiLFwiIzJjN2JiNlwiXSxcbjU6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNmZmZmYmZcIixcIiNhYmQ5ZTlcIixcIiMyYzdiYjZcIl0sXG42OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDkwXCIsXCIjZTBmM2Y4XCIsXCIjOTFiZmRiXCIsXCIjNDU3NWI0XCJdLFxuNzogW1wiI2Q3MzAyN1wiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA5MFwiLFwiI2ZmZmZiZlwiLFwiI2UwZjNmOFwiLFwiIzkxYmZkYlwiLFwiIzQ1NzViNFwiXSxcbjg6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOTBcIixcIiNlMGYzZjhcIixcIiNhYmQ5ZTlcIixcIiM3NGFkZDFcIixcIiM0NTc1YjRcIl0sXG45OiBbXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDkwXCIsXCIjZmZmZmJmXCIsXCIjZTBmM2Y4XCIsXCIjYWJkOWU5XCIsXCIjNzRhZGQxXCIsXCIjNDU3NWI0XCJdLFxuMTA6IFtcIiNhNTAwMjZcIixcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOTBcIixcIiNlMGYzZjhcIixcIiNhYmQ5ZTlcIixcIiM3NGFkZDFcIixcIiM0NTc1YjRcIixcIiMzMTM2OTVcIl0sXG4xMTogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA5MFwiLFwiI2ZmZmZiZlwiLFwiI2UwZjNmOFwiLFwiI2FiZDllOVwiLFwiIzc0YWRkMVwiLFwiIzQ1NzViNFwiLFwiIzMxMzY5NVwiXVxufSxTcGVjdHJhbDoge1xuMzogW1wiI2ZjOGQ1OVwiLFwiI2ZmZmZiZlwiLFwiIzk5ZDU5NFwiXSxcbjQ6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNhYmRkYTRcIixcIiMyYjgzYmFcIl0sXG41OiBbXCIjZDcxOTFjXCIsXCIjZmRhZTYxXCIsXCIjZmZmZmJmXCIsXCIjYWJkZGE0XCIsXCIjMmI4M2JhXCJdLFxuNjogW1wiI2Q1M2U0ZlwiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA4YlwiLFwiI2U2ZjU5OFwiLFwiIzk5ZDU5NFwiLFwiIzMyODhiZFwiXSxcbjc6IFtcIiNkNTNlNGZcIixcIiNmYzhkNTlcIixcIiNmZWUwOGJcIixcIiNmZmZmYmZcIixcIiNlNmY1OThcIixcIiM5OWQ1OTRcIixcIiMzMjg4YmRcIl0sXG44OiBbXCIjZDUzZTRmXCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZTZmNTk4XCIsXCIjYWJkZGE0XCIsXCIjNjZjMmE1XCIsXCIjMzI4OGJkXCJdLFxuOTogW1wiI2Q1M2U0ZlwiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2U2ZjU5OFwiLFwiI2FiZGRhNFwiLFwiIzY2YzJhNVwiLFwiIzMyODhiZFwiXSxcbjEwOiBbXCIjOWUwMTQyXCIsXCIjZDUzZTRmXCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZTZmNTk4XCIsXCIjYWJkZGE0XCIsXCIjNjZjMmE1XCIsXCIjMzI4OGJkXCIsXCIjNWU0ZmEyXCJdLFxuMTE6IFtcIiM5ZTAxNDJcIixcIiNkNTNlNGZcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNmZmZmYmZcIixcIiNlNmY1OThcIixcIiNhYmRkYTRcIixcIiM2NmMyYTVcIixcIiMzMjg4YmRcIixcIiM1ZTRmYTJcIl1cbn0sUmRZbEduOiB7XG4zOiBbXCIjZmM4ZDU5XCIsXCIjZmZmZmJmXCIsXCIjOTFjZjYwXCJdLFxuNDogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2E2ZDk2YVwiLFwiIzFhOTY0MVwiXSxcbjU6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNmZmZmYmZcIixcIiNhNmQ5NmFcIixcIiMxYTk2NDFcIl0sXG42OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDhiXCIsXCIjZDllZjhiXCIsXCIjOTFjZjYwXCIsXCIjMWE5ODUwXCJdLFxuNzogW1wiI2Q3MzAyN1wiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2Q5ZWY4YlwiLFwiIzkxY2Y2MFwiLFwiIzFhOTg1MFwiXSxcbjg6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNkOWVmOGJcIixcIiNhNmQ5NmFcIixcIiM2NmJkNjNcIixcIiMxYTk4NTBcIl0sXG45OiBbXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZmZmZmJmXCIsXCIjZDllZjhiXCIsXCIjYTZkOTZhXCIsXCIjNjZiZDYzXCIsXCIjMWE5ODUwXCJdLFxuMTA6IFtcIiNhNTAwMjZcIixcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNkOWVmOGJcIixcIiNhNmQ5NmFcIixcIiM2NmJkNjNcIixcIiMxYTk4NTBcIixcIiMwMDY4MzdcIl0sXG4xMTogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2Q5ZWY4YlwiLFwiI2E2ZDk2YVwiLFwiIzY2YmQ2M1wiLFwiIzFhOTg1MFwiLFwiIzAwNjgzN1wiXVxufSxBY2NlbnQ6IHtcbjM6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIl0sXG40OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCJdLFxuNTogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiLFwiI2ZmZmY5OVwiLFwiIzM4NmNiMFwiXSxcbjY6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIixcIiNmZmZmOTlcIixcIiMzODZjYjBcIixcIiNmMDAyN2ZcIl0sXG43OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCIsXCIjMzg2Y2IwXCIsXCIjZjAwMjdmXCIsXCIjYmY1YjE3XCJdLFxuODogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiLFwiI2ZmZmY5OVwiLFwiIzM4NmNiMFwiLFwiI2YwMDI3ZlwiLFwiI2JmNWIxN1wiLFwiIzY2NjY2NlwiXVxufSxEYXJrMjoge1xuMzogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiXSxcbjQ6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIl0sXG41OiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCIsXCIjZTcyOThhXCIsXCIjNjZhNjFlXCJdLFxuNjogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiLFwiI2U3Mjk4YVwiLFwiIzY2YTYxZVwiLFwiI2U2YWIwMlwiXSxcbjc6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIixcIiM2NmE2MWVcIixcIiNlNmFiMDJcIixcIiNhNjc2MWRcIl0sXG44OiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCIsXCIjZTcyOThhXCIsXCIjNjZhNjFlXCIsXCIjZTZhYjAyXCIsXCIjYTY3NjFkXCIsXCIjNjY2NjY2XCJdXG59LFBhaXJlZDoge1xuMzogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiXSxcbjQ6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIl0sXG41OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCJdLFxuNjogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiXSxcbjc6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIl0sXG44OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCJdLFxuOTogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiLFwiI2ZmN2YwMFwiLFwiI2NhYjJkNlwiXSxcbjEwOiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCIsXCIjY2FiMmQ2XCIsXCIjNmEzZDlhXCJdLFxuMTE6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIixcIiNmZjdmMDBcIixcIiNjYWIyZDZcIixcIiM2YTNkOWFcIixcIiNmZmZmOTlcIl0sXG4xMjogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiLFwiI2ZmN2YwMFwiLFwiI2NhYjJkNlwiLFwiIzZhM2Q5YVwiLFwiI2ZmZmY5OVwiLFwiI2IxNTkyOFwiXVxufSxQYXN0ZWwxOiB7XG4zOiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCJdLFxuNDogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiXSxcbjU6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIl0sXG42OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCIsXCIjZmVkOWE2XCIsXCIjZmZmZmNjXCJdLFxuNzogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiLFwiI2ZlZDlhNlwiLFwiI2ZmZmZjY1wiLFwiI2U1ZDhiZFwiXSxcbjg6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIixcIiNmZmZmY2NcIixcIiNlNWQ4YmRcIixcIiNmZGRhZWNcIl0sXG45OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCIsXCIjZmVkOWE2XCIsXCIjZmZmZmNjXCIsXCIjZTVkOGJkXCIsXCIjZmRkYWVjXCIsXCIjZjJmMmYyXCJdXG59LFBhc3RlbDI6IHtcbjM6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIl0sXG40OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCJdLFxuNTogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiLFwiI2Y0Y2FlNFwiLFwiI2U2ZjVjOVwiXSxcbjY6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIixcIiNmNGNhZTRcIixcIiNlNmY1YzlcIixcIiNmZmYyYWVcIl0sXG43OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCIsXCIjZTZmNWM5XCIsXCIjZmZmMmFlXCIsXCIjZjFlMmNjXCJdLFxuODogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiLFwiI2Y0Y2FlNFwiLFwiI2U2ZjVjOVwiLFwiI2ZmZjJhZVwiLFwiI2YxZTJjY1wiLFwiI2NjY2NjY1wiXVxufSxTZXQxOiB7XG4zOiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCJdLFxuNDogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiXSxcbjU6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIl0sXG42OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCIsXCIjZmY3ZjAwXCIsXCIjZmZmZjMzXCJdLFxuNzogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiLFwiI2ZmN2YwMFwiLFwiI2ZmZmYzM1wiLFwiI2E2NTYyOFwiXSxcbjg6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIixcIiNmZmZmMzNcIixcIiNhNjU2MjhcIixcIiNmNzgxYmZcIl0sXG45OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCIsXCIjZmY3ZjAwXCIsXCIjZmZmZjMzXCIsXCIjYTY1NjI4XCIsXCIjZjc4MWJmXCIsXCIjOTk5OTk5XCJdXG59LFNldDI6IHtcbjM6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIl0sXG40OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCJdLFxuNTogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiLFwiI2U3OGFjM1wiLFwiI2E2ZDg1NFwiXSxcbjY6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIixcIiNlNzhhYzNcIixcIiNhNmQ4NTRcIixcIiNmZmQ5MmZcIl0sXG43OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCIsXCIjYTZkODU0XCIsXCIjZmZkOTJmXCIsXCIjZTVjNDk0XCJdLFxuODogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiLFwiI2U3OGFjM1wiLFwiI2E2ZDg1NFwiLFwiI2ZmZDkyZlwiLFwiI2U1YzQ5NFwiLFwiI2IzYjNiM1wiXVxufSxTZXQzOiB7XG4zOiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCJdLFxuNDogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiXSxcbjU6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIl0sXG42OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCJdLFxuNzogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiXSxcbjg6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIl0sXG45OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCIsXCIjZmNjZGU1XCIsXCIjZDlkOWQ5XCJdLFxuMTA6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIixcIiNkOWQ5ZDlcIixcIiNiYzgwYmRcIl0sXG4xMTogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiLFwiI2ZjY2RlNVwiLFwiI2Q5ZDlkOVwiLFwiI2JjODBiZFwiLFwiI2NjZWJjNVwiXSxcbjEyOiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCIsXCIjZmNjZGU1XCIsXCIjZDlkOWQ5XCIsXCIjYmM4MGJkXCIsXCIjY2NlYmM1XCIsXCIjZmZlZDZmXCJdXG59fTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGNvbG9yYnJld2VyKTtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gY29sb3JicmV3ZXI7XG59IGVsc2Uge1xuICAgIHRoaXMuY29sb3JicmV3ZXIgPSBjb2xvcmJyZXdlcjtcbn1cblxufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29sb3JicmV3ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogW1NpbXBsZSBsaW5lYXIgcmVncmVzc2lvbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaW1wbGVfbGluZWFyX3JlZ3Jlc3Npb24pXG4gKiBpcyBhIHNpbXBsZSB3YXkgdG8gZmluZCBhIGZpdHRlZCBsaW5lXG4gKiBiZXR3ZWVuIGEgc2V0IG9mIGNvb3JkaW5hdGVzLiBUaGlzIGFsZ29yaXRobSBmaW5kcyB0aGUgc2xvcGUgYW5kIHktaW50ZXJjZXB0IG9mIGEgcmVncmVzc2lvbiBsaW5lXG4gKiB1c2luZyB0aGUgbGVhc3Qgc3VtIG9mIHNxdWFyZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZGF0YSBhbiBhcnJheSBvZiB0d28tZWxlbWVudCBvZiBhcnJheXMsXG4gKiBsaWtlIGBbWzAsIDFdLCBbMiwgM11dYFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgc2xvcGUgYW5kIGludGVyc2VjdCBvZiByZWdyZXNzaW9uIGxpbmVcbiAqIEBleGFtcGxlXG4gKiBsaW5lYXJSZWdyZXNzaW9uKFtbMCwgMF0sIFsxLCAxXV0pOyAvLyA9PiB7IG06IDEsIGI6IDAgfVxuICovXG5mdW5jdGlvbiBsaW5lYXJSZWdyZXNzaW9uKGRhdGEvKjogQXJyYXk8QXJyYXk8bnVtYmVyPj4gKi8pLyo6IHsgbTogbnVtYmVyLCBiOiBudW1iZXIgfSAqLyB7XG5cbiAgICB2YXIgbSwgYjtcblxuICAgIC8vIFN0b3JlIGRhdGEgbGVuZ3RoIGluIGEgbG9jYWwgdmFyaWFibGUgdG8gcmVkdWNlXG4gICAgLy8gcmVwZWF0ZWQgb2JqZWN0IHByb3BlcnR5IGxvb2t1cHNcbiAgICB2YXIgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgLy9pZiB0aGVyZSdzIG9ubHkgb25lIHBvaW50LCBhcmJpdHJhcmlseSBjaG9vc2UgYSBzbG9wZSBvZiAwXG4gICAgLy9hbmQgYSB5LWludGVyY2VwdCBvZiB3aGF0ZXZlciB0aGUgeSBvZiB0aGUgaW5pdGlhbCBwb2ludCBpc1xuICAgIGlmIChkYXRhTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG0gPSAwO1xuICAgICAgICBiID0gZGF0YVswXVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbml0aWFsaXplIG91ciBzdW1zIGFuZCBzY29wZSB0aGUgYG1gIGFuZCBgYmBcbiAgICAgICAgLy8gdmFyaWFibGVzIHRoYXQgZGVmaW5lIHRoZSBsaW5lLlxuICAgICAgICB2YXIgc3VtWCA9IDAsIHN1bVkgPSAwLFxuICAgICAgICAgICAgc3VtWFggPSAwLCBzdW1YWSA9IDA7XG5cbiAgICAgICAgLy8gVXNlIGxvY2FsIHZhcmlhYmxlcyB0byBncmFiIHBvaW50IHZhbHVlc1xuICAgICAgICAvLyB3aXRoIG1pbmltYWwgb2JqZWN0IHByb3BlcnR5IGxvb2t1cHNcbiAgICAgICAgdmFyIHBvaW50LCB4LCB5O1xuXG4gICAgICAgIC8vIEdhdGhlciB0aGUgc3VtIG9mIGFsbCB4IHZhbHVlcywgdGhlIHN1bSBvZiBhbGxcbiAgICAgICAgLy8geSB2YWx1ZXMsIGFuZCB0aGUgc3VtIG9mIHheMiBhbmQgKHgqeSkgZm9yIGVhY2hcbiAgICAgICAgLy8gdmFsdWUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluIG1hdGggbm90YXRpb24sIHRoZXNlIHdvdWxkIGJlIFNTX3gsIFNTX3ksIFNTX3h4LCBhbmQgU1NfeHlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50ID0gZGF0YVtpXTtcbiAgICAgICAgICAgIHggPSBwb2ludFswXTtcbiAgICAgICAgICAgIHkgPSBwb2ludFsxXTtcblxuICAgICAgICAgICAgc3VtWCArPSB4O1xuICAgICAgICAgICAgc3VtWSArPSB5O1xuXG4gICAgICAgICAgICBzdW1YWCArPSB4ICogeDtcbiAgICAgICAgICAgIHN1bVhZICs9IHggKiB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYG1gIGlzIHRoZSBzbG9wZSBvZiB0aGUgcmVncmVzc2lvbiBsaW5lXG4gICAgICAgIG0gPSAoKGRhdGFMZW5ndGggKiBzdW1YWSkgLSAoc3VtWCAqIHN1bVkpKSAvXG4gICAgICAgICAgICAoKGRhdGFMZW5ndGggKiBzdW1YWCkgLSAoc3VtWCAqIHN1bVgpKTtcblxuICAgICAgICAvLyBgYmAgaXMgdGhlIHktaW50ZXJjZXB0IG9mIHRoZSBsaW5lLlxuICAgICAgICBiID0gKHN1bVkgLyBkYXRhTGVuZ3RoKSAtICgobSAqIHN1bVgpIC8gZGF0YUxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGJvdGggdmFsdWVzIGFzIGFuIG9iamVjdC5cbiAgICByZXR1cm4ge1xuICAgICAgICBtOiBtLFxuICAgICAgICBiOiBiXG4gICAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsaW5lYXJSZWdyZXNzaW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2xpbmVhcl9yZWdyZXNzaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEdpdmVuIHRoZSBvdXRwdXQgb2YgYGxpbmVhclJlZ3Jlc3Npb25gOiBhbiBvYmplY3RcbiAqIHdpdGggYG1gIGFuZCBgYmAgdmFsdWVzIGluZGljYXRpbmcgc2xvcGUgYW5kIGludGVyY2VwdCxcbiAqIHJlc3BlY3RpdmVseSwgZ2VuZXJhdGUgYSBsaW5lIGZ1bmN0aW9uIHRoYXQgdHJhbnNsYXRlc1xuICogeCB2YWx1ZXMgaW50byB5IHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWIgb2JqZWN0IHdpdGggYG1gIGFuZCBgYmAgbWVtYmVycywgcmVwcmVzZW50aW5nXG4gKiBzbG9wZSBhbmQgaW50ZXJzZWN0IG9mIGRlc2lyZWQgbGluZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBtZXRob2QgdGhhdCBjb21wdXRlcyB5LXZhbHVlIGF0IGFueSBnaXZlblxuICogeC12YWx1ZSBvbiB0aGUgbGluZS5cbiAqIEBleGFtcGxlXG4gKiB2YXIgbCA9IGxpbmVhclJlZ3Jlc3Npb25MaW5lKGxpbmVhclJlZ3Jlc3Npb24oW1swLCAwXSwgWzEsIDFdXSkpO1xuICogbCgwKSAvLyA9IDBcbiAqIGwoMikgLy8gPSAyXG4gKiBsaW5lYXJSZWdyZXNzaW9uTGluZSh7IGI6IDAsIG06IDEgfSkoMSk7IC8vID0+IDFcbiAqIGxpbmVhclJlZ3Jlc3Npb25MaW5lKHsgYjogMSwgbTogMSB9KSgxKTsgLy8gPT4gMlxuICovXG5mdW5jdGlvbiBsaW5lYXJSZWdyZXNzaW9uTGluZShtYi8qOiB7IGI6IG51bWJlciwgbTogbnVtYmVyIH0qLykvKjogRnVuY3Rpb24gKi8ge1xuICAgIC8vIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgYSBgeWAgdmFsdWUgZm9yIGVhY2hcbiAgICAvLyB4IHZhbHVlIGl0IGlzIGdpdmVuLCBiYXNlZCBvbiB0aGUgdmFsdWVzIG9mIGBiYCBhbmQgYGFgXG4gICAgLy8gdGhhdCB3ZSBqdXN0IGNvbXB1dGVkLlxuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBtYi5iICsgKG1iLm0gKiB4KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaW5lYXJSZWdyZXNzaW9uTGluZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9saW5lYXJfcmVncmVzc2lvbl9saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbUiBTcXVhcmVkXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZWZmaWNpZW50X29mX2RldGVybWluYXRpb24pXG4gKiB2YWx1ZSBvZiBkYXRhIGNvbXBhcmVkIHdpdGggYSBmdW5jdGlvbiBgZmBcbiAqIGlzIHRoZSBzdW0gb2YgdGhlIHNxdWFyZWQgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgcHJlZGljdGlvblxuICogYW5kIHRoZSBhY3R1YWwgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0geCBpbnB1dCBkYXRhOiB0aGlzIHNob3VsZCBiZSBkb3VibHktbmVzdGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIGZ1bmN0aW9uIGNhbGxlZCBvbiBgW2ldWzBdYCB2YWx1ZXMgd2l0aGluIHRoZSBkYXRhc2V0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSByLXNxdWFyZWQgdmFsdWVcbiAqIEBleGFtcGxlXG4gKiB2YXIgc2FtcGxlcyA9IFtbMCwgMF0sIFsxLCAxXV07XG4gKiB2YXIgcmVncmVzc2lvbkxpbmUgPSBsaW5lYXJSZWdyZXNzaW9uTGluZShsaW5lYXJSZWdyZXNzaW9uKHNhbXBsZXMpKTtcbiAqIHJTcXVhcmVkKHNhbXBsZXMsIHJlZ3Jlc3Npb25MaW5lKTsgLy8gPSAxIHRoaXMgbGluZSBpcyBhIHBlcmZlY3QgZml0XG4gKi9cbmZ1bmN0aW9uIHJTcXVhcmVkKHggLyo6IEFycmF5PEFycmF5PG51bWJlcj4+ICovLCBmdW5jIC8qOiBGdW5jdGlvbiAqLykgLyo6IG51bWJlciAqLyB7XG4gICAgaWYgKHgubGVuZ3RoIDwgMikgeyByZXR1cm4gMTsgfVxuXG4gICAgLy8gQ29tcHV0ZSB0aGUgYXZlcmFnZSB5IHZhbHVlIGZvciB0aGUgYWN0dWFsXG4gICAgLy8gZGF0YSBzZXQgaW4gb3JkZXIgdG8gY29tcHV0ZSB0aGVcbiAgICAvLyBfdG90YWwgc3VtIG9mIHNxdWFyZXNfXG4gICAgdmFyIHN1bSA9IDAsIGF2ZXJhZ2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSB4W2ldWzFdO1xuICAgIH1cbiAgICBhdmVyYWdlID0gc3VtIC8geC5sZW5ndGg7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCBzdW0gb2Ygc3F1YXJlcyAtIHRoZVxuICAgIC8vIHNxdWFyZWQgZGlmZmVyZW5jZSBiZXR3ZWVuIGVhY2ggcG9pbnRcbiAgICAvLyBhbmQgdGhlIGF2ZXJhZ2Ugb2YgYWxsIHBvaW50cy5cbiAgICB2YXIgc3VtT2ZTcXVhcmVzID0gMDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc3VtT2ZTcXVhcmVzICs9IE1hdGgucG93KGF2ZXJhZ2UgLSB4W2pdWzFdLCAyKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IGVzdGltYXRlIHRoZSBlcnJvcjogdGhlIHNxdWFyZWRcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVzdGltYXRlIGFuZCB0aGUgYWN0dWFsIGRhdGFcbiAgICAvLyB2YWx1ZSBhdCBlYWNoIHBvaW50LlxuICAgIHZhciBlcnIgPSAwO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgeC5sZW5ndGg7IGsrKykge1xuICAgICAgICBlcnIgKz0gTWF0aC5wb3coeFtrXVsxXSAtIGZ1bmMoeFtrXVswXSksIDIpO1xuICAgIH1cblxuICAgIC8vIEFzIHRoZSBlcnJvciBncm93cyBsYXJnZXIsIGl0cyByYXRpbyB0byB0aGVcbiAgICAvLyBzdW0gb2Ygc3F1YXJlcyBpbmNyZWFzZXMgYW5kIHRoZSByIHNxdWFyZWRcbiAgICAvLyB2YWx1ZSBncm93cyBsb3dlci5cbiAgICByZXR1cm4gMSAtIGVyciAvIHN1bU9mU3F1YXJlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgclNxdWFyZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcl9zcXVhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgbW9kZVNvcnRlZCBmcm9tICcuL21vZGVfc29ydGVkJztcbmltcG9ydCBudW1lcmljU29ydCBmcm9tICcuL251bWVyaWNfc29ydCc7XG5cbi8qKlxuICogVGhlIFttb2RlXShodHRwOi8vYml0Lmx5L1c1SzRZdCkgaXMgdGhlIG51bWJlciB0aGF0IGFwcGVhcnMgaW4gYSBsaXN0IHRoZSBoaWdoZXN0IG51bWJlciBvZiB0aW1lcy5cbiAqIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBtb2RlcyBpbiBhIGxpc3Q6IGluIHRoZSBldmVudCBvZiBhIHRpZSwgdGhpc1xuICogYWxnb3JpdGhtIHdpbGwgcmV0dXJuIHRoZSBtb3N0IHJlY2VudGx5IHNlZW4gbW9kZS5cbiAqXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG5sb2cobikpYCBiZWNhdXNlIGl0IG5lZWRzIHRvIHNvcnQgdGhlIGFycmF5IGludGVybmFsbHlcbiAqIGJlZm9yZSBydW5uaW5nIGFuIGBPKG4pYCBzZWFyY2ggdG8gZmluZCB0aGUgbW9kZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1vZGVcbiAqIEBleGFtcGxlXG4gKiBtb2RlKFswLCAwLCAxXSk7IC8vID0+IDBcbiAqL1xuZnVuY3Rpb24gbW9kZSh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICAvLyBTb3J0aW5nIHRoZSBhcnJheSBsZXRzIHVzIGl0ZXJhdGUgdGhyb3VnaCBpdCBiZWxvdyBhbmQgYmUgc3VyZVxuICAgIC8vIHRoYXQgZXZlcnkgdGltZSB3ZSBzZWUgYSBuZXcgbnVtYmVyIGl0J3MgbmV3IGFuZCB3ZSdsbCBuZXZlclxuICAgIC8vIHNlZSB0aGUgc2FtZSBudW1iZXIgdHdpY2VcbiAgICByZXR1cm4gbW9kZVNvcnRlZChudW1lcmljU29ydCh4KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cbi8qIGdsb2JhbHMgTWFwOiBmYWxzZSAqL1xuXG4vKipcbiAqIFRoZSBbbW9kZV0oaHR0cDovL2JpdC5seS9XNUs0WXQpIGlzIHRoZSBudW1iZXIgdGhhdCBhcHBlYXJzIGluIGEgbGlzdCB0aGUgaGlnaGVzdCBudW1iZXIgb2YgdGltZXMuXG4gKiBUaGVyZSBjYW4gYmUgbXVsdGlwbGUgbW9kZXMgaW4gYSBsaXN0OiBpbiB0aGUgZXZlbnQgb2YgYSB0aWUsIHRoaXNcbiAqIGFsZ29yaXRobSB3aWxsIHJldHVybiB0aGUgbW9zdCByZWNlbnRseSBzZWVuIG1vZGUuXG4gKlxuICogbW9kZUZhc3QgdXNlcyBhIE1hcCBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiB0aGUgbW9kZSwgaW5zdGVhZCBvZiB0aGUgYXBwcm9hY2hcbiAqIHVzZWQgd2l0aCBgbW9kZWAsIGEgc29ydGVkIGFycmF5LiBBcyBhIHJlc3VsdCwgaXQgaXMgZmFzdGVyXG4gKiB0aGFuIGBtb2RlYCBhbmQgc3VwcG9ydHMgYW55IGRhdGEgdHlwZSB0aGF0IGNhbiBiZSBjb21wYXJlZCB3aXRoIGA9PWAuXG4gKiBJdCBhbHNvIHJlcXVpcmVzIGFcbiAqIFtKYXZhU2NyaXB0IGVudmlyb25tZW50IHdpdGggc3VwcG9ydCBmb3IgTWFwXShodHRwczovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNi8jdGVzdC1NYXApLFxuICogYW5kIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgTWFwIGlzIG5vdCBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIFttZWFzdXJlIG9mIGNlbnRyYWwgdGVuZGVuY3ldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyYWxfdGVuZGVuY3kpOlxuICogYSBtZXRob2Qgb2YgZmluZGluZyBhIHR5cGljYWwgb3IgY2VudHJhbCB2YWx1ZSBvZiBhIHNldCBvZiBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IHggYSBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHs/Kn0gbW9kZVxuICogQHRocm93cyB7UmVmZXJlbmNlRXJyb3J9IGlmIHRoZSBKYXZhU2NyaXB0IGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBNYXBcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogbW9kZUZhc3QoWydyYWJiaXRzJywgJ3JhYmJpdHMnLCAnc3F1aXJyZWxzJ10pOyAvLyA9PiAncmFiYml0cydcbiAqL1xuZnVuY3Rpb24gbW9kZUZhc3QvKjo6PFQ+Ki8oeCAvKjogQXJyYXk8VD4gKi8pLyo6ID9UICovIHtcblxuICAgIC8vIFRoaXMgaW5kZXggd2lsbCByZWZsZWN0IHRoZSBpbmNpZGVuY2Ugb2YgZGlmZmVyZW50IHZhbHVlcywgaW5kZXhpbmdcbiAgICAvLyB0aGVtIGxpa2VcbiAgICAvLyB7IHZhbHVlOiBjb3VudCB9XG4gICAgdmFyIGluZGV4ID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gQSBydW5uaW5nIGBtb2RlYCBhbmQgdGhlIG51bWJlciBvZiB0aW1lcyBpdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICB2YXIgbW9kZTtcbiAgICB2YXIgbW9kZUNvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3Q291bnQgPSBpbmRleC5nZXQoeFtpXSk7XG4gICAgICAgIGlmIChuZXdDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdDb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDb3VudCA+IG1vZGVDb3VudCkge1xuICAgICAgICAgICAgbW9kZSA9IHhbaV07XG4gICAgICAgICAgICBtb2RlQ291bnQgPSBuZXdDb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpbmRleC5zZXQoeFtpXSwgbmV3Q291bnQpO1xuICAgIH1cblxuICAgIGlmIChtb2RlQ291bnQgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2RlIHJlcXVpcmVzIGF0IGxhc3Qgb25lIGRhdGEgcG9pbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZUZhc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbW9kZV9mYXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGlzIHRoZSBsb3dlc3QgbnVtYmVyIGluIHRoZSBhcnJheS4gV2l0aCBhIHNvcnRlZCBhcnJheSxcbiAqIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBhcnJheSBpcyBhbHdheXMgdGhlIHNtYWxsZXN0LCBzbyB0aGlzIGNhbGN1bGF0aW9uXG4gKiBjYW4gYmUgZG9uZSBpbiBvbmUgc3RlcCwgb3IgY29uc3RhbnQgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1pbmltdW0gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtaW5Tb3J0ZWQoWy0xMDAsIC0xMCwgMSwgMiwgNV0pOyAvLyA9PiAtMTAwXG4gKi9cbmZ1bmN0aW9uIG1pblNvcnRlZCh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHJldHVybiB4WzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5Tb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWluX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgbWF4aW11bSBpcyB0aGUgaGlnaGVzdCBudW1iZXIgaW4gdGhlIGFycmF5LiBXaXRoIGEgc29ydGVkIGFycmF5LFxuICogdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgYXJyYXkgaXMgYWx3YXlzIHRoZSBsYXJnZXN0LCBzbyB0aGlzIGNhbGN1bGF0aW9uXG4gKiBjYW4gYmUgZG9uZSBpbiBvbmUgc3RlcCwgb3IgY29uc3RhbnQgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IG1heGltdW0gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtYXhTb3J0ZWQoWy0xMDAsIC0xMCwgMSwgMiwgNV0pOyAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIG1heFNvcnRlZCh4IC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4geFt4Lmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXhTb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWF4X3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgc2ltcGxlIFtzdW1dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1bW1hdGlvbikgb2YgYW4gYXJyYXlcbiAqIGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGFsbCBudW1iZXJzIHRvZ2V0aGVyLCBzdGFydGluZyBmcm9tIHplcm8uXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggaW5wdXRcbiAqIEByZXR1cm4ge251bWJlcn0gc3VtIG9mIGFsbCBpbnB1dCBudW1iZXJzXG4gKiBAZXhhbXBsZVxuICogc3VtU2ltcGxlKFsxLCAyLCAzXSk7IC8vID0+IDZcbiAqL1xuZnVuY3Rpb24gc3VtU2ltcGxlKHgvKjogQXJyYXk8bnVtYmVyPiAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSArPSB4W2ldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bVNpbXBsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zdW1fc2ltcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbcHJvZHVjdF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHJvZHVjdF8obWF0aGVtYXRpY3MpKSBvZiBhbiBhcnJheVxuICogaXMgdGhlIHJlc3VsdCBvZiBtdWx0aXBseWluZyBhbGwgbnVtYmVycyB0b2dldGhlciwgc3RhcnRpbmcgdXNpbmcgb25lIGFzIHRoZSBtdWx0aXBsaWNhdGl2ZSBpZGVudGl0eS5cbiAqXG4gKiBUaGlzIHJ1bnMgb24gYE8obilgLCBsaW5lYXIgdGltZSBpbiByZXNwZWN0IHRvIHRoZSBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfSBwcm9kdWN0IG9mIGFsbCBpbnB1dCBudW1iZXJzXG4gKiBAZXhhbXBsZVxuICogcHJvZHVjdChbMSwgMiwgMywgNF0pOyAvLyA9PiAyNFxuICovXG5mdW5jdGlvbiBwcm9kdWN0KHgvKjogQXJyYXk8bnVtYmVyPiAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdmFsdWUgPSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSAqPSB4W2ldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcHJvZHVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lZGlhbiBmcm9tICcuL21lZGlhbic7XG5cbi8qKlxuICogVGhlIFtNZWRpYW4gQWJzb2x1dGUgRGV2aWF0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01lZGlhbl9hYnNvbHV0ZV9kZXZpYXRpb24pIGlzXG4gKiBhIHJvYnVzdCBtZWFzdXJlIG9mIHN0YXRpc3RpY2FsXG4gKiBkaXNwZXJzaW9uLiBJdCBpcyBtb3JlIHJlc2lsaWVudCB0byBvdXRsaWVycyB0aGFuIHRoZSBzdGFuZGFyZCBkZXZpYXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGlucHV0IGFycmF5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtZWRpYW4gYWJzb2x1dGUgZGV2aWF0aW9uXG4gKiBAZXhhbXBsZVxuICogbWVkaWFuQWJzb2x1dGVEZXZpYXRpb24oWzEsIDEsIDIsIDIsIDQsIDYsIDldKTsgLy8gPT4gMVxuICovXG5mdW5jdGlvbiBtZWRpYW5BYnNvbHV0ZURldmlhdGlvbih4Lyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1hZCBvZiBub3RoaW5nIGlzIG51bGxcbiAgICB2YXIgbWVkaWFuVmFsdWUgPSBtZWRpYW4oeCksXG4gICAgICAgIG1lZGlhbkFic29sdXRlRGV2aWF0aW9ucyA9IFtdO1xuXG4gICAgLy8gTWFrZSBhIGxpc3Qgb2YgYWJzb2x1dGUgZGV2aWF0aW9ucyBmcm9tIHRoZSBtZWRpYW5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVkaWFuQWJzb2x1dGVEZXZpYXRpb25zLnB1c2goTWF0aC5hYnMoeFtpXSAtIG1lZGlhblZhbHVlKSk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgbWVkaWFuIHZhbHVlIG9mIHRoYXQgbGlzdFxuICAgIHJldHVybiBtZWRpYW4obWVkaWFuQWJzb2x1dGVEZXZpYXRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVkaWFuQWJzb2x1dGVEZXZpYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX2Fic29sdXRlX2RldmlhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBhIHNwZWNpZmllZCBzaXplLiBUaGlzIGZ1bmN0aW9uXG4gKiBoYXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgW1BIUCdzIGFycmF5X2NodW5rXShodHRwOi8vcGhwLm5ldC9tYW51YWwvZW4vZnVuY3Rpb24uYXJyYXktY2h1bmsucGhwKVxuICogZnVuY3Rpb24sIGFuZCB0aHVzIHdpbGwgaW5zZXJ0IHNtYWxsZXItc2l6ZWQgY2h1bmtzIGF0IHRoZSBlbmQgaWZcbiAqIHRoZSBpbnB1dCBzaXplIGlzIG5vdCBkaXZpc2libGUgYnkgdGhlIGNodW5rIHNpemUuXG4gKlxuICogYHhgIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGFycmF5LCBhbmQgYGNodW5rU2l6ZWAgYSBudW1iZXIuXG4gKiBUaGUgYHhgIGFycmF5IGNhbiBjb250YWluIGFueSBraW5kIG9mIGRhdGEuXG4gKlxuICogQHBhcmFtIHtBcnJheX0geCBhIHNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGNodW5rU2l6ZSBzaXplIG9mIGVhY2ggb3V0cHV0IGFycmF5LiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYSBjaHVua2VkIGFycmF5XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgY2h1bmsgc2l6ZSBpcyBsZXNzIHRoYW4gMSBvciBub3QgYW4gaW50ZWdlclxuICogQGV4YW1wbGVcbiAqIGNodW5rKFsxLCAyLCAzLCA0LCA1LCA2XSwgMik7XG4gKiAvLyA9PiBbWzEsIDJdLCBbMywgNF0sIFs1LCA2XV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoeC8qOkFycmF5PGFueT4qLywgY2h1bmtTaXplLyo6bnVtYmVyKi8pLyo6P0FycmF5PEFycmF5PGFueT4+Ki8ge1xuXG4gICAgLy8gYSBsaXN0IG9mIHJlc3VsdCBjaHVua3MsIGFzIGFycmF5cyBpbiBhbiBhcnJheVxuICAgIHZhciBvdXRwdXQgPSBbXTtcblxuICAgIC8vIGBjaHVua1NpemVgIG11c3QgYmUgemVybyBvciBoaWdoZXIgLSBvdGhlcndpc2UgdGhlIGxvb3AgYmVsb3csXG4gICAgLy8gaW4gd2hpY2ggd2UgY2FsbCBgc3RhcnQgKz0gY2h1bmtTaXplYCwgd2lsbCBsb29wIGluZmluaXRlbHkuXG4gICAgLy8gU28sIHdlJ2xsIGRldGVjdCBhbmQgdGhyb3cgaW4gdGhhdCBjYXNlIHRvIGluZGljYXRlXG4gICAgLy8gaW52YWxpZCBpbnB1dC5cbiAgICBpZiAoY2h1bmtTaXplIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NodW5rIHNpemUgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmZsb29yKGNodW5rU2l6ZSkgIT09IGNodW5rU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NodW5rIHNpemUgbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG4gICAgfVxuXG4gICAgLy8gYHN0YXJ0YCBpcyB0aGUgaW5kZXggYXQgd2hpY2ggYC5zbGljZWAgd2lsbCBzdGFydCBzZWxlY3RpbmdcbiAgICAvLyBuZXcgYXJyYXkgZWxlbWVudHNcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgeC5sZW5ndGg7IHN0YXJ0ICs9IGNodW5rU2l6ZSkge1xuXG4gICAgICAgIC8vIGZvciBlYWNoIGNodW5rLCBzbGljZSB0aGF0IHBhcnQgb2YgdGhlIGFycmF5IGFuZCBhZGQgaXRcbiAgICAgICAgLy8gdG8gdGhlIG91dHB1dC4gVGhlIGAuc2xpY2VgIGZ1bmN0aW9uIGRvZXMgbm90IGNoYW5nZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgYXJyYXkuXG4gICAgICAgIG91dHB1dC5wdXNoKHguc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY2h1bmtTaXplKSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNodW5rO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NodW5rLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFNhbXBsaW5nIHdpdGggcmVwbGFjZW1lbnQgaXMgYSB0eXBlIG9mIHNhbXBsaW5nIHRoYXQgYWxsb3dzIHRoZSBzYW1lXG4gKiBpdGVtIHRvIGJlIHBpY2tlZCBvdXQgb2YgYSBwb3B1bGF0aW9uIG1vcmUgdGhhbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IHggYW4gYXJyYXkgb2YgYW55IGtpbmQgb2YgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIGNvdW50IG9mIGhvdyBtYW55IGVsZW1lbnRzIHRvIHRha2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyYW5kb21Tb3VyY2U9TWF0aC5yYW5kb21dIGFuIG9wdGlvbmFsIGVudHJvcHkgc291cmNlIHRoYXRcbiAqIHJldHVybnMgbnVtYmVycyBiZXR3ZWVuIDAgaW5jbHVzaXZlIGFuZCAxIGV4Y2x1c2l2ZTogdGhlIHJhbmdlIFswLCAxKVxuICogQHJldHVybiB7QXJyYXl9IG4gc2FtcGxlZCBpdGVtcyBmcm9tIHRoZSBwb3B1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIHZhbHVlcyA9IFsxLCAyLCAzLCA0XTtcbiAqIHNhbXBsZVdpdGhSZXBsYWNlbWVudCh2YWx1ZXMsIDIpOyAvLyByZXR1cm5zIDIgcmFuZG9tIHZhbHVlcywgbGlrZSBbMiwgNF07XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVdpdGhSZXBsYWNlbWVudC8qOjo8VD4qLyhcbiAgICB4Lyo6IEFycmF5PFQ+ICovLFxuICAgIG4vKjogbnVtYmVyICovLFxuICAgIHJhbmRvbVNvdXJjZS8qOiA/RnVuY3Rpb24gKi8pIHtcblxuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gYSBjdXN0b20gcmFuZG9tIG51bWJlciBzb3VyY2UgY2FuIGJlIHByb3ZpZGVkIGlmIHlvdSB3YW50IHRvIHVzZVxuICAgIC8vIGEgZml4ZWQgc2VlZCBvciBhbm90aGVyIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLCBsaWtlXG4gICAgLy8gW3JhbmRvbS1qc10oaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvcmFuZG9tLWpzKVxuICAgIHJhbmRvbVNvdXJjZSA9IHJhbmRvbVNvdXJjZSB8fCBNYXRoLnJhbmRvbTtcblxuICAgIHZhciBsZW5ndGggPSB4Lmxlbmd0aDtcbiAgICB2YXIgc2FtcGxlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbVNvdXJjZSgpICogbGVuZ3RoKTtcblxuICAgICAgICBzYW1wbGUucHVzaCh4W2luZGV4XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlV2l0aFJlcGxhY2VtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV93aXRoX3JlcGxhY2VtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICcuL3NodWZmbGUnO1xuXG4vKipcbiAqIENyZWF0ZSBhIFtzaW1wbGUgcmFuZG9tIHNhbXBsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaW1wbGVfcmFuZG9tX3NhbXBsZSlcbiAqIGZyb20gYSBnaXZlbiBhcnJheSBvZiBgbmAgZWxlbWVudHMuXG4gKlxuICogVGhlIHNhbXBsZWQgdmFsdWVzIHdpbGwgYmUgaW4gYW55IG9yZGVyLCBub3QgbmVjZXNzYXJpbHkgdGhlIG9yZGVyXG4gKiB0aGV5IGFwcGVhciBpbiB0aGUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSB4IGlucHV0IGFycmF5LiBjYW4gY29udGFpbiBhbnkgdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gY291bnQgb2YgaG93IG1hbnkgZWxlbWVudHMgdG8gdGFrZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JhbmRvbVNvdXJjZT1NYXRoLnJhbmRvbV0gYW4gb3B0aW9uYWwgZW50cm9weSBzb3VyY2UgdGhhdFxuICogcmV0dXJucyBudW1iZXJzIGJldHdlZW4gMCBpbmNsdXNpdmUgYW5kIDEgZXhjbHVzaXZlOiB0aGUgcmFuZ2UgWzAsIDEpXG4gKiBAcmV0dXJuIHtBcnJheX0gc3Vic2V0IG9mIG4gZWxlbWVudHMgaW4gb3JpZ2luYWwgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHZhbHVlcyA9IFsxLCAyLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAqIHNhbXBsZSh2YWx1ZXMsIDMpOyAvLyByZXR1cm5zIDMgcmFuZG9tIHZhbHVlcywgbGlrZSBbMiwgNSwgOF07XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZS8qOjogPFQ+ICovKFxuICAgIHggLyo6IEFycmF5PFQ+ICovLFxuICAgIG4gLyo6IG51bWJlciAqLyxcbiAgICByYW5kb21Tb3VyY2UgLyo6ID9GdW5jdGlvbiAqLykgLyo6IEFycmF5PFQ+ICovIHtcbiAgICAvLyBzaHVmZmxlIHRoZSBvcmlnaW5hbCBhcnJheSB1c2luZyBhIGZpc2hlci15YXRlcyBzaHVmZmxlXG4gICAgdmFyIHNodWZmbGVkID0gc2h1ZmZsZSh4LCByYW5kb21Tb3VyY2UpO1xuXG4gICAgLy8gYW5kIHRoZW4gcmV0dXJuIGEgc3Vic2V0IG9mIGl0IC0gdGhlIGZpcnN0IGBuYCBlbGVtZW50cy5cbiAgICByZXR1cm4gc2h1ZmZsZWQuc2xpY2UoMCwgbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9zYW1wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBudW1lcmljU29ydCBmcm9tICcuL251bWVyaWNfc29ydCc7XG5pbXBvcnQgdW5pcXVlQ291bnRTb3J0ZWQgZnJvbSAnLi91bmlxdWVfY291bnRfc29ydGVkJztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgY29sdW1uIHggcm93IG1hdHJpeC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gbWF0cml4XG4gKiBAZXhhbXBsZVxuICogbWFrZU1hdHJpeCgxMCwgMTApO1xuICovXG5mdW5jdGlvbiBtYWtlTWF0cml4KGNvbHVtbnMsIHJvd3MpIHtcbiAgICB2YXIgbWF0cml4ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvd3M7IGorKykge1xuICAgICAgICAgICAgY29sdW1uLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0cml4LnB1c2goY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgaW5jcmVtZW50YWxseSBjb21wdXRlZCB2YWx1ZXMgYmFzZWQgb24gdGhlIHN1bXMgYW5kIHN1bXMgb2ZcbiAqIHNxdWFyZXMgZm9yIHRoZSBkYXRhIGFycmF5XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBqXG4gKiBAcGFyYW0ge251bWJlcn0gaVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzdW1zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHN1bXNPZlNxdWFyZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqIEBleGFtcGxlXG4gKiBzc3EoMCwgMSwgWy0xLCAwLCAyXSwgWzEsIDEsIDVdKTtcbiAqL1xuZnVuY3Rpb24gc3NxKGosIGksIHN1bXMsIHN1bXNPZlNxdWFyZXMpIHtcbiAgICB2YXIgc2ppOyAvLyBzKGosIGkpXG4gICAgaWYgKGogPiAwKSB7XG4gICAgICAgIHZhciBtdWppID0gKHN1bXNbaV0gLSBzdW1zW2ogLSAxXSkgLyAoaSAtIGogKyAxKTsgLy8gbXUoaiwgaSlcbiAgICAgICAgc2ppID0gc3Vtc09mU3F1YXJlc1tpXSAtIHN1bXNPZlNxdWFyZXNbaiAtIDFdIC0gKGkgLSBqICsgMSkgKiBtdWppICogbXVqaTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzamkgPSBzdW1zT2ZTcXVhcmVzW2ldIC0gc3Vtc1tpXSAqIHN1bXNbaV0gLyAoaSArIDEpO1xuICAgIH1cbiAgICBpZiAoc2ppIDwgMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHNqaTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJlY3Vyc2l2ZWx5IGRpdmlkZXMgYW5kIGNvbnF1ZXJzIGNvbXB1dGF0aW9uc1xuICogZm9yIGNsdXN0ZXIgalxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaU1pbiBNaW5pbXVtIGluZGV4IGluIGNsdXN0ZXIgdG8gYmUgY29tcHV0ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpTWF4IE1heGltdW0gaW5kZXggaW4gY2x1c3RlciB0byBiZSBjb21wdXRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGNsdXN0ZXIgSW5kZXggb2YgdGhlIGNsdXN0ZXIgY3VycmVudGx5IGJlaW5nIGNvbXB1dGVkXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGJhY2t0cmFja01hdHJpeFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzdW1zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHN1bXNPZlNxdWFyZXNcbiAqL1xuZnVuY3Rpb24gZmlsbE1hdHJpeENvbHVtbihpTWluLCBpTWF4LCBjbHVzdGVyLCBtYXRyaXgsIGJhY2t0cmFja01hdHJpeCwgc3Vtcywgc3Vtc09mU3F1YXJlcykge1xuICAgIGlmIChpTWluID4gaU1heCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgYXQgbWlkcG9pbnQgYmV0d2VlbiBpTWluIGFuZCBpTWF4XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKChpTWluICsgaU1heCkgLyAyKTtcblxuICAgIG1hdHJpeFtjbHVzdGVyXVtpXSA9IG1hdHJpeFtjbHVzdGVyIC0gMV1baSAtIDFdO1xuICAgIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyXVtpXSA9IGk7XG5cbiAgICB2YXIgamxvdyA9IGNsdXN0ZXI7IC8vIHRoZSBsb3dlciBlbmQgZm9yIGpcblxuICAgIGlmIChpTWluID4gY2x1c3Rlcikge1xuICAgICAgICBqbG93ID0gTWF0aC5tYXgoamxvdywgYmFja3RyYWNrTWF0cml4W2NsdXN0ZXJdW2lNaW4gLSAxXSB8fCAwKTtcbiAgICB9XG4gICAgamxvdyA9IE1hdGgubWF4KGpsb3csIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyIC0gMV1baV0gfHwgMCk7XG5cbiAgICB2YXIgamhpZ2ggPSBpIC0gMTsgLy8gdGhlIHVwcGVyIGVuZCBmb3IgalxuICAgIGlmIChpTWF4IDwgbWF0cml4Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgamhpZ2ggPSBNYXRoLm1pbihqaGlnaCwgYmFja3RyYWNrTWF0cml4W2NsdXN0ZXJdW2lNYXggKyAxXSB8fCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc2ppO1xuICAgIHZhciBzamxvd2k7XG4gICAgdmFyIHNzcWpsb3c7XG4gICAgdmFyIHNzcWo7XG4gICAgZm9yICh2YXIgaiA9IGpoaWdoOyBqID49IGpsb3c7IC0taikge1xuICAgICAgICBzamkgPSBzc3EoaiwgaSwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG5cbiAgICAgICAgaWYgKHNqaSArIG1hdHJpeFtjbHVzdGVyIC0gMV1bamxvdyAtIDFdID49IG1hdHJpeFtjbHVzdGVyXVtpXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeGFtaW5lIHRoZSBsb3dlciBib3VuZCBvZiB0aGUgY2x1c3RlciBib3JkZXJcbiAgICAgICAgc2psb3dpID0gc3NxKGpsb3csIGksIHN1bXMsIHN1bXNPZlNxdWFyZXMpO1xuXG4gICAgICAgIHNzcWpsb3cgPSBzamxvd2kgKyBtYXRyaXhbY2x1c3RlciAtIDFdW2psb3cgLSAxXTtcblxuICAgICAgICBpZiAoc3NxamxvdyA8IG1hdHJpeFtjbHVzdGVyXVtpXSkge1xuICAgICAgICAgICAgLy8gU2hyaW5rIHRoZSBsb3dlciBib3VuZFxuICAgICAgICAgICAgbWF0cml4W2NsdXN0ZXJdW2ldID0gc3NxamxvdztcbiAgICAgICAgICAgIGJhY2t0cmFja01hdHJpeFtjbHVzdGVyXVtpXSA9IGpsb3c7XG4gICAgICAgIH1cbiAgICAgICAgamxvdysrO1xuXG4gICAgICAgIHNzcWogPSBzamkgKyBtYXRyaXhbY2x1c3RlciAtIDFdW2ogLSAxXTtcbiAgICAgICAgaWYgKHNzcWogPCBtYXRyaXhbY2x1c3Rlcl1baV0pIHtcbiAgICAgICAgICAgIG1hdHJpeFtjbHVzdGVyXVtpXSA9IHNzcWo7XG4gICAgICAgICAgICBiYWNrdHJhY2tNYXRyaXhbY2x1c3Rlcl1baV0gPSBqO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbE1hdHJpeENvbHVtbihpTWluLCBpIC0gMSwgY2x1c3RlciwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgsIHN1bXMsIHN1bXNPZlNxdWFyZXMpO1xuICAgIGZpbGxNYXRyaXhDb2x1bW4oaSArIDEsIGlNYXgsIGNsdXN0ZXIsIG1hdHJpeCwgYmFja3RyYWNrTWF0cml4LCBzdW1zLCBzdW1zT2ZTcXVhcmVzKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgbWFpbiBtYXRyaWNlcyB1c2VkIGluIENrbWVhbnMgYW5kIGtpY2tzXG4gKiBvZmYgdGhlIGRpdmlkZSBhbmQgY29ucXVlciBjbHVzdGVyIGNvbXB1dGF0aW9uIHN0cmF0ZWd5XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZGF0YSBzb3J0ZWQgYXJyYXkgb2YgdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGJhY2t0cmFja01hdHJpeFxuICovXG5mdW5jdGlvbiBmaWxsTWF0cmljZXMoZGF0YSwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgpIHtcbiAgICB2YXIgblZhbHVlcyA9IG1hdHJpeFswXS5sZW5ndGg7XG5cbiAgICAvLyBTaGlmdCB2YWx1ZXMgYnkgdGhlIG1lZGlhbiB0byBpbXByb3ZlIG51bWVyaWMgc3RhYmlsaXR5XG4gICAgdmFyIHNoaWZ0ID0gZGF0YVtNYXRoLmZsb29yKG5WYWx1ZXMgLyAyKV07XG5cbiAgICAvLyBDdW11bGF0aXZlIHN1bSBhbmQgY3VtdWxhdGl2ZSBzdW0gb2Ygc3F1YXJlcyBmb3IgYWxsIHZhbHVlcyBpbiBkYXRhIGFycmF5XG4gICAgdmFyIHN1bXMgPSBbXTtcbiAgICB2YXIgc3Vtc09mU3F1YXJlcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaXJzdCBjb2x1bW4gaW4gbWF0cml4ICYgYmFja3RyYWNrTWF0cml4XG4gICAgZm9yICh2YXIgaSA9IDAsIHNoaWZ0ZWRWYWx1ZTsgaSA8IG5WYWx1ZXM7ICsraSkge1xuICAgICAgICBzaGlmdGVkVmFsdWUgPSBkYXRhW2ldIC0gc2hpZnQ7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBzdW1zLnB1c2goc2hpZnRlZFZhbHVlKTtcbiAgICAgICAgICAgIHN1bXNPZlNxdWFyZXMucHVzaChzaGlmdGVkVmFsdWUgKiBzaGlmdGVkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vtcy5wdXNoKHN1bXNbaSAtIDFdICsgc2hpZnRlZFZhbHVlKTtcbiAgICAgICAgICAgIHN1bXNPZlNxdWFyZXMucHVzaChzdW1zT2ZTcXVhcmVzW2kgLSAxXSArIHNoaWZ0ZWRWYWx1ZSAqIHNoaWZ0ZWRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXplIGZvciBjbHVzdGVyID0gMFxuICAgICAgICBtYXRyaXhbMF1baV0gPSBzc3EoMCwgaSwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG4gICAgICAgIGJhY2t0cmFja01hdHJpeFswXVtpXSA9IDA7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVzdCBvZiB0aGUgY29sdW1uc1xuICAgIHZhciBpTWluO1xuICAgIGZvciAodmFyIGNsdXN0ZXIgPSAxOyBjbHVzdGVyIDwgbWF0cml4Lmxlbmd0aDsgKytjbHVzdGVyKSB7XG4gICAgICAgIGlmIChjbHVzdGVyIDwgbWF0cml4Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlNaW4gPSBjbHVzdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBjb21wdXRlIG1hdHJpeFtLLTFdWzBdIC4uLiBtYXRyaXhbSy0xXVtOLTJdXG4gICAgICAgICAgICBpTWluID0gblZhbHVlcyAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmaWxsTWF0cml4Q29sdW1uKGlNaW4sIG5WYWx1ZXMgLSAxLCBjbHVzdGVyLCBtYXRyaXgsIGJhY2t0cmFja01hdHJpeCwgc3Vtcywgc3Vtc09mU3F1YXJlcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIENrbWVhbnMgY2x1c3RlcmluZyBpcyBhbiBpbXByb3ZlbWVudCBvbiBoZXVyaXN0aWMtYmFzZWQgY2x1c3RlcmluZ1xuICogYXBwcm9hY2hlcyBsaWtlIEplbmtzLiBUaGUgYWxnb3JpdGhtIHdhcyBkZXZlbG9wZWQgaW5cbiAqIFtIYWl6aG91IFdhbmcgYW5kIE1pbmd6aG91IFNvbmddKGh0dHA6Ly9qb3VybmFsLnItcHJvamVjdC5vcmcvYXJjaGl2ZS8yMDExLTIvUkpvdXJuYWxfMjAxMS0yX1dhbmcrU29uZy5wZGYpXG4gKiBhcyBhIFtkeW5hbWljIHByb2dyYW1taW5nXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EeW5hbWljX3Byb2dyYW1taW5nKSBhcHByb2FjaFxuICogdG8gdGhlIHByb2JsZW0gb2YgY2x1c3RlcmluZyBudW1lcmljIGRhdGEgaW50byBncm91cHMgd2l0aCB0aGUgbGVhc3RcbiAqIHdpdGhpbi1ncm91cCBzdW0tb2Ytc3F1YXJlZC1kZXZpYXRpb25zLlxuICpcbiAqIE1pbmltaXppbmcgdGhlIGRpZmZlcmVuY2Ugd2l0aGluIGdyb3VwcyAtIHdoYXQgV2FuZyAmIFNvbmcgcmVmZXIgdG8gYXNcbiAqIGB3aXRoaW5zc2AsIG9yIHdpdGhpbiBzdW0tb2Ytc3F1YXJlcywgbWVhbnMgdGhhdCBncm91cHMgYXJlIG9wdGltYWxseVxuICogaG9tb2dlbm91cyB3aXRoaW4gYW5kIHRoZSBkYXRhIGlzIHNwbGl0IGludG8gcmVwcmVzZW50YXRpdmUgZ3JvdXBzLlxuICogVGhpcyBpcyB2ZXJ5IHVzZWZ1bCBmb3IgdmlzdWFsaXphdGlvbiwgd2hlcmUgeW91IG1heSB3YW50IHRvIHJlcHJlc2VudFxuICogYSBjb250aW51b3VzIHZhcmlhYmxlIGluIGRpc2NyZXRlIGNvbG9yIG9yIHN0eWxlIGdyb3Vwcy4gVGhpcyBmdW5jdGlvblxuICogY2FuIHByb3ZpZGUgZ3JvdXBzIHRoYXQgZW1waGFzaXplIGRpZmZlcmVuY2VzIGJldHdlZW4gZGF0YS5cbiAqXG4gKiBCZWluZyBhIGR5bmFtaWMgYXBwcm9hY2gsIHRoaXMgYWxnb3JpdGhtIGlzIGJhc2VkIG9uIHR3byBtYXRyaWNlcyB0aGF0XG4gKiBzdG9yZSBpbmNyZW1lbnRhbGx5LWNvbXB1dGVkIHZhbHVlcyBmb3Igc3F1YXJlZCBkZXZpYXRpb25zIGFuZCBiYWNrdHJhY2tpbmdcbiAqIGluZGV4ZXMuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiBDa21lYW5zIDMuNC42LCB3aGljaCBpbnRyb2R1Y2VkIGEgbmV3IGRpdmlkZVxuICogYW5kIGNvbnF1ZXIgYXBwcm9hY2ggdGhhdCBpbXByb3ZlZCBydW50aW1lIGZyb20gTyhrbl4yKSB0byBPKGtuIGxvZyhuKSkuXG4gKlxuICogVW5saWtlIHRoZSBbb3JpZ2luYWwgaW1wbGVtZW50YXRpb25dKGh0dHBzOi8vY3Jhbi5yLXByb2plY3Qub3JnL3dlYi9wYWNrYWdlcy9Da21lYW5zLjFkLmRwL2luZGV4Lmh0bWwpLFxuICogdGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBpbmNsdWRlIGFueSBjb2RlIHRvIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lXG4gKiB0aGUgb3B0aW1hbCBudW1iZXIgb2YgY2x1c3RlcnM6IHRoaXMgaW5mb3JtYXRpb24gbmVlZHMgdG8gYmUgZXhwbGljaXRseVxuICogcHJvdmlkZWQuXG4gKlxuICogIyMjIFJlZmVyZW5jZXNcbiAqIF9Da21lYW5zLjFkLmRwOiBPcHRpbWFsIGstbWVhbnMgQ2x1c3RlcmluZyBpbiBPbmUgRGltZW5zaW9uIGJ5IER5bmFtaWNcbiAqIFByb2dyYW1taW5nXyBIYWl6aG91IFdhbmcgYW5kIE1pbmd6aG91IFNvbmcgSVNTTiAyMDczLTQ4NTlcbiAqXG4gKiBmcm9tIFRoZSBSIEpvdXJuYWwgVm9sLiAzLzIsIERlY2VtYmVyIDIwMTFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBpbnB1dCBkYXRhLCBhcyBhbiBhcnJheSBvZiBudW1iZXIgdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbkNsdXN0ZXJzIG51bWJlciBvZiBkZXNpcmVkIGNsYXNzZXMuIFRoaXMgY2Fubm90IGJlXG4gKiBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlIGRhdGEgYXJyYXkuXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNsdXN0ZXJlZCBpbnB1dFxuICogQHRocm93cyB7RXJyb3J9IGlmIHRoZSBudW1iZXIgb2YgcmVxdWVzdGVkIGNsdXN0ZXJzIGlzIGhpZ2hlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBkYXRhXG4gKiBAZXhhbXBsZVxuICogY2ttZWFucyhbLTEsIDIsIC0xLCAyLCA0LCA1LCA2LCAtMSwgMiwgLTFdLCAzKTtcbiAqIC8vIFRoZSBpbnB1dCwgY2x1c3RlcmVkIGludG8gZ3JvdXBzIG9mIHNpbWlsYXIgbnVtYmVycy5cbiAqIC8vPSBbWy0xLCAtMSwgLTEsIC0xXSwgWzIsIDIsIDJdLCBbNCwgNSwgNl1dKTtcbiAqL1xuZnVuY3Rpb24gY2ttZWFucyhcbiAgICB4Lyo6IEFycmF5PG51bWJlcj4gKi8sXG4gICAgbkNsdXN0ZXJzLyo6IG51bWJlciAqLykvKjogQXJyYXk8QXJyYXk8bnVtYmVyPj4gKi8ge1xuXG4gICAgaWYgKG5DbHVzdGVycyA+IHgubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGdlbmVyYXRlIG1vcmUgY2xhc3NlcyB0aGFuIHRoZXJlIGFyZSBkYXRhIHZhbHVlcycpO1xuICAgIH1cblxuICAgIHZhciBzb3J0ZWQgPSBudW1lcmljU29ydCh4KSxcbiAgICAgICAgLy8gd2UnbGwgdXNlIHRoaXMgYXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNsdXN0ZXJzXG4gICAgICAgIHVuaXF1ZUNvdW50ID0gdW5pcXVlQ291bnRTb3J0ZWQoc29ydGVkKTtcblxuICAgIC8vIGlmIGFsbCBvZiB0aGUgaW5wdXQgdmFsdWVzIGFyZSBpZGVudGljYWwsIHRoZXJlJ3Mgb25lIGNsdXN0ZXJcbiAgICAvLyB3aXRoIGFsbCBvZiB0aGUgaW5wdXQgaW4gaXQuXG4gICAgaWYgKHVuaXF1ZUNvdW50ID09PSAxKSB7XG4gICAgICAgIHJldHVybiBbc29ydGVkXTtcbiAgICB9XG5cbiAgICAvLyBuYW1lZCAnUycgb3JpZ2luYWxseVxuICAgIHZhciBtYXRyaXggPSBtYWtlTWF0cml4KG5DbHVzdGVycywgc29ydGVkLmxlbmd0aCksXG4gICAgICAgIC8vIG5hbWVkICdKJyBvcmlnaW5hbGx5XG4gICAgICAgIGJhY2t0cmFja01hdHJpeCA9IG1ha2VNYXRyaXgobkNsdXN0ZXJzLCBzb3J0ZWQubGVuZ3RoKTtcblxuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHByb2dyYW1taW5nIHdheSB0byBzb2x2ZSB0aGUgcHJvYmxlbSBvZiBtaW5pbWl6aW5nXG4gICAgLy8gd2l0aGluLWNsdXN0ZXIgc3VtIG9mIHNxdWFyZXMuIEl0J3Mgc2ltaWxhciB0byBsaW5lYXIgcmVncmVzc2lvblxuICAgIC8vIGluIHRoaXMgd2F5LCBhbmQgdGhpcyBjYWxjdWxhdGlvbiBpbmNyZW1lbnRhbGx5IGNvbXB1dGVzIHRoZVxuICAgIC8vIHN1bSBvZiBzcXVhcmVzIHRoYXQgYXJlIGxhdGVyIHJlYWQuXG4gICAgZmlsbE1hdHJpY2VzKHNvcnRlZCwgbWF0cml4LCBiYWNrdHJhY2tNYXRyaXgpO1xuXG4gICAgLy8gVGhlIHJlYWwgd29yayBvZiBDa21lYW5zIGNsdXN0ZXJpbmcgaGFwcGVucyBpbiB0aGUgbWF0cml4IGdlbmVyYXRpb246XG4gICAgLy8gdGhlIGdlbmVyYXRlZCBtYXRyaWNlcyBlbmNvZGUgYWxsIHBvc3NpYmxlIGNsdXN0ZXJpbmcgY29tYmluYXRpb25zLCBhbmRcbiAgICAvLyBvbmNlIHRoZXkncmUgZ2VuZXJhdGVkIHdlIGNhbiBzb2x2ZSBmb3IgdGhlIGJlc3QgY2x1c3RlcmluZyBncm91cHNcbiAgICAvLyB2ZXJ5IHF1aWNrbHkuXG4gICAgdmFyIGNsdXN0ZXJzID0gW10sXG4gICAgICAgIGNsdXN0ZXJSaWdodCA9IGJhY2t0cmFja01hdHJpeFswXS5sZW5ndGggLSAxO1xuXG4gICAgLy8gQmFja3RyYWNrIHRoZSBjbHVzdGVycyBmcm9tIHRoZSBkeW5hbWljIHByb2dyYW1taW5nIG1hdHJpeC4gVGhpc1xuICAgIC8vIHN0YXJ0cyBhdCB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgbWF0cml4IChpZiB0aGUgdG9wLWxlZnQgaXMgMCwgMCksXG4gICAgLy8gYW5kIG1vdmVzIHRoZSBjbHVzdGVyIHRhcmdldCB3aXRoIHRoZSBsb29wLlxuICAgIGZvciAodmFyIGNsdXN0ZXIgPSBiYWNrdHJhY2tNYXRyaXgubGVuZ3RoIC0gMTsgY2x1c3RlciA+PSAwOyBjbHVzdGVyLS0pIHtcblxuICAgICAgICB2YXIgY2x1c3RlckxlZnQgPSBiYWNrdHJhY2tNYXRyaXhbY2x1c3Rlcl1bY2x1c3RlclJpZ2h0XTtcblxuICAgICAgICAvLyBmaWxsIHRoZSBjbHVzdGVyIGZyb20gdGhlIHNvcnRlZCBpbnB1dCBieSB0YWtpbmcgYSBzbGljZSBvZiB0aGVcbiAgICAgICAgLy8gYXJyYXkuIHRoZSBiYWNrdHJhY2sgbWF0cml4IG1ha2VzIHRoaXMgZWFzeSAtIGl0IHN0b3JlcyB0aGVcbiAgICAgICAgLy8gaW5kZXhlcyB3aGVyZSB0aGUgY2x1c3RlciBzaG91bGQgc3RhcnQgYW5kIGVuZC5cbiAgICAgICAgY2x1c3RlcnNbY2x1c3Rlcl0gPSBzb3J0ZWQuc2xpY2UoY2x1c3RlckxlZnQsIGNsdXN0ZXJSaWdodCArIDEpO1xuXG4gICAgICAgIGlmIChjbHVzdGVyID4gMCkge1xuICAgICAgICAgICAgY2x1c3RlclJpZ2h0ID0gY2x1c3RlckxlZnQgLSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsdXN0ZXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBja21lYW5zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NrbWVhbnMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBtYXggZnJvbSAnLi9tYXgnO1xuaW1wb3J0IG1pbiBmcm9tICcuL21pbic7XG5cbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2YgeCwgdGhpcyB3aWxsIGZpbmQgdGhlIGV4dGVudCBvZiB0aGVcbiAqIHggYW5kIHJldHVybiBhbiBhcnJheSBvZiBicmVha3MgdGhhdCBjYW4gYmUgdXNlZFxuICogdG8gY2F0ZWdvcml6ZSB0aGUgeCBpbnRvIGEgbnVtYmVyIG9mIGNsYXNzZXMuIFRoZVxuICogcmV0dXJuZWQgYXJyYXkgd2lsbCBhbHdheXMgYmUgMSBsb25nZXIgdGhhbiB0aGUgbnVtYmVyIG9mXG4gKiBjbGFzc2VzIGJlY2F1c2UgaXQgaW5jbHVkZXMgdGhlIG1pbmltdW0gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IGFuIGFycmF5IG9mIG51bWJlciB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuQ2xhc3NlcyBudW1iZXIgb2YgZGVzaXJlZCBjbGFzc2VzXG4gKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gYXJyYXkgb2YgY2xhc3MgYnJlYWsgcG9zaXRpb25zXG4gKiBAZXhhbXBsZVxuICogZXF1YWxJbnRlcnZhbEJyZWFrcyhbMSwgMiwgMywgNCwgNSwgNl0sIDQpOyAvLyA9PiBbMSwgMi4yNSwgMy41LCA0Ljc1LCA2XVxuICovXG5mdW5jdGlvbiBlcXVhbEludGVydmFsQnJlYWtzKHgvKjogQXJyYXk8bnVtYmVyPiAqLywgbkNsYXNzZXMvKjpudW1iZXIqLykvKjogQXJyYXk8bnVtYmVyPiAqLyB7XG5cbiAgICBpZiAoeC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIHZhciB0aGVNaW4gPSBtaW4oeCk7XG4gICAgdmFyIHRoZU1heCA9IG1heCh4KTtcblxuICAgIC8vIHRoZSBmaXJzdCBicmVhayB3aWxsIGFsd2F5cyBiZSB0aGUgbWluaW11bSB2YWx1ZVxuICAgIC8vIGluIHRoZSB4c2V0XG4gICAgdmFyIGJyZWFrcyA9IFt0aGVNaW5dO1xuXG4gICAgLy8gVGhlIHNpemUgb2YgZWFjaCBicmVhayBpcyB0aGUgZnVsbCByYW5nZSBvZiB0aGUgeFxuICAgIC8vIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiBjbGFzc2VzIHJlcXVlc3RlZFxuICAgIHZhciBicmVha1NpemUgPSAodGhlTWF4IC0gdGhlTWluKSAvIG5DbGFzc2VzO1xuXG4gICAgLy8gSW4gdGhlIGNhc2Ugb2YgbkNsYXNzZXMgPSAxLCB0aGlzIGxvb3Agd29uJ3QgcnVuXG4gICAgLy8gYW5kIHRoZSByZXR1cm5lZCBicmVha3Mgd2lsbCBiZSBbbWluLCBtYXhdXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuQ2xhc3NlczsgaSsrKSB7XG4gICAgICAgIGJyZWFrcy5wdXNoKGJyZWFrc1swXSArIGJyZWFrU2l6ZSAqIGkpO1xuICAgIH1cblxuICAgIC8vIHRoZSBsYXN0IGJyZWFrIHdpbGwgYWx3YXlzIGJlIHRoZVxuICAgIC8vIG1heGltdW0uXG4gICAgYnJlYWtzLnB1c2godGhlTWF4KTtcblxuICAgIHJldHVybiBicmVha3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsSW50ZXJ2YWxCcmVha3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXF1YWxfaW50ZXJ2YWxfYnJlYWtzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2FtcGxlQ292YXJpYW5jZSBmcm9tICcuL3NhbXBsZV9jb3ZhcmlhbmNlJztcbmltcG9ydCBzYW1wbGVTdGFuZGFyZERldmlhdGlvbiBmcm9tICcuL3NhbXBsZV9zdGFuZGFyZF9kZXZpYXRpb24nO1xuXG4vKipcbiAqIFRoZSBbY29ycmVsYXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29ycmVsYXRpb25fYW5kX2RlcGVuZGVuY2UpIGlzXG4gKiBhIG1lYXN1cmUgb2YgaG93IGNvcnJlbGF0ZWQgdHdvIGRhdGFzZXRzIGFyZSwgYmV0d2VlbiAtMSBhbmQgMVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBmaXJzdCBpbnB1dFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB5IHNlY29uZCBpbnB1dFxuICogQHJldHVybnMge251bWJlcn0gc2FtcGxlIGNvcnJlbGF0aW9uXG4gKiBAZXhhbXBsZVxuICogc2FtcGxlQ29ycmVsYXRpb24oWzEsIDIsIDMsIDQsIDUsIDZdLCBbMiwgMiwgMywgNCwgNSwgNjBdKS50b0ZpeGVkKDIpO1xuICogLy8gPT4gJzAuNjknXG4gKi9cbmZ1bmN0aW9uIHNhbXBsZUNvcnJlbGF0aW9uKHgvKjogQXJyYXk8bnVtYmVyPiAqLywgeS8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICB2YXIgY292ID0gc2FtcGxlQ292YXJpYW5jZSh4LCB5KSxcbiAgICAgICAgeHN0ZCA9IHNhbXBsZVN0YW5kYXJkRGV2aWF0aW9uKHgpLFxuICAgICAgICB5c3RkID0gc2FtcGxlU3RhbmRhcmREZXZpYXRpb24oeSk7XG5cbiAgICByZXR1cm4gY292IC8geHN0ZCAvIHlzdGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZUNvcnJlbGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV9jb3JyZWxhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcblxuLyoqXG4gKiBbU2tld25lc3NdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2tld25lc3MpIGlzXG4gKiBhIG1lYXN1cmUgb2YgdGhlIGV4dGVudCB0byB3aGljaCBhIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiBvZiBhXG4gKiByZWFsLXZhbHVlZCByYW5kb20gdmFyaWFibGUgXCJsZWFuc1wiIHRvIG9uZSBzaWRlIG9mIHRoZSBtZWFuLlxuICogVGhlIHNrZXduZXNzIHZhbHVlIGNhbiBiZSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSwgb3IgZXZlbiB1bmRlZmluZWQuXG4gKlxuICogSW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIGFkanVzdGVkIEZpc2hlci1QZWFyc29uIHN0YW5kYXJkaXplZFxuICogbW9tZW50IGNvZWZmaWNpZW50LCB3aGljaCBpcyB0aGUgdmVyc2lvbiBmb3VuZCBpbiBFeGNlbCBhbmQgc2V2ZXJhbFxuICogc3RhdGlzdGljYWwgcGFja2FnZXMgaW5jbHVkaW5nIE1pbml0YWIsIFNBUyBhbmQgU1BTUy5cbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geCBhIHNhbXBsZSBvZiAzIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHNhbXBsZSBza2V3bmVzc1xuICogQHRocm93cyB7RXJyb3J9IGlmIHggaGFzIGxlbmd0aCBsZXNzIHRoYW4gM1xuICogQGV4YW1wbGVcbiAqIHNhbXBsZVNrZXduZXNzKFsyLCA0LCA2LCAzLCAxXSk7IC8vID0+IDAuNTkwMTI4NjU2Mzg0MzY1XG4gKi9cbmZ1bmN0aW9uIHNhbXBsZVNrZXduZXNzKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuXG4gICAgaWYgKHgubGVuZ3RoIDwgMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NhbXBsZVNrZXduZXNzIHJlcXVpcmVzIGF0IGxlYXN0IHRocmVlIGRhdGEgcG9pbnRzJyk7XG4gICAgfVxuXG4gICAgdmFyIG1lYW5WYWx1ZSA9IG1lYW4oeCk7XG4gICAgdmFyIHRlbXBWYWx1ZTtcbiAgICB2YXIgc3VtU3F1YXJlZERldmlhdGlvbnMgPSAwO1xuICAgIHZhciBzdW1DdWJlZERldmlhdGlvbnMgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXBWYWx1ZSA9IHhbaV0gLSBtZWFuVmFsdWU7XG4gICAgICAgIHN1bVNxdWFyZWREZXZpYXRpb25zICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICAgICAgc3VtQ3ViZWREZXZpYXRpb25zICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIEJlc3NlbHMnIENvcnJlY3Rpb246IGFuIGFkanVzdG1lbnQgbWFkZSB0byBzYW1wbGUgc3RhdGlzdGljc1xuICAgIC8vIHRoYXQgYWxsb3dzIGZvciB0aGUgcmVkdWNlZCBkZWdyZWUgb2YgZnJlZWRvbSBlbnRhaWxlZCBpbiBjYWxjdWxhdGluZ1xuICAgIC8vIHZhbHVlcyBmcm9tIHNhbXBsZXMgcmF0aGVyIHRoYW4gY29tcGxldGUgcG9wdWxhdGlvbnMuXG4gICAgdmFyIGJlc3NlbHNDb3JyZWN0aW9uID0geC5sZW5ndGggLSAxO1xuXG4gICAgLy8gRmluZCB0aGUgbWVhbiB2YWx1ZSBvZiB0aGF0IGxpc3RcbiAgICB2YXIgdGhlU2FtcGxlU3RhbmRhcmREZXZpYXRpb24gPSBNYXRoLnNxcnQoc3VtU3F1YXJlZERldmlhdGlvbnMgLyBiZXNzZWxzQ29ycmVjdGlvbik7XG5cbiAgICB2YXIgbiA9IHgubGVuZ3RoLFxuICAgICAgICBjdWJlZFMgPSBNYXRoLnBvdyh0aGVTYW1wbGVTdGFuZGFyZERldmlhdGlvbiwgMyk7XG5cbiAgICByZXR1cm4gbiAqIHN1bUN1YmVkRGV2aWF0aW9ucyAvICgobiAtIDEpICogKG4gLSAyKSAqIGN1YmVkUyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbXBsZVNrZXduZXNzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3NhbXBsZV9za2V3bmVzcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcblxuLyoqXG4gKiBbS3VydG9zaXNdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS3VydG9zaXMpIGlzXG4gKiBhIG1lYXN1cmUgb2YgdGhlIGhlYXZpbmVzcyBvZiBhIGRpc3RyaWJ1dGlvbidzIHRhaWxzIHJlbGF0aXZlIHRvIGl0c1xuICogdmFyaWFuY2UuIFRoZSBrdXJ0b3NpcyB2YWx1ZSBjYW4gYmUgcG9zaXRpdmUgb3IgbmVnYXRpdmUsIG9yIGV2ZW4gdW5kZWZpbmVkLlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIEZpc2hlcidzIGV4Y2VzcyBrdXJ0b3NpcyBkZWZpbml0aW9uIGFuZCB1c2VzXG4gKiB1bmJpYXNlZCBtb21lbnQgZXN0aW1hdG9ycy4gVGhpcyBpcyB0aGUgdmVyc2lvbiBmb3VuZCBpbiBFeGNlbCBhbmQgYXZhaWxhYmxlXG4gKiBpbiBzZXZlcmFsIHN0YXRpc3RpY2FsIHBhY2thZ2VzLCBpbmNsdWRpbmcgU0FTIGFuZCBTY2lQeS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBzYW1wbGUgb2YgNCBvciBtb3JlIGRhdGEgcG9pbnRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBzYW1wbGUga3VydG9zaXNcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGhhcyBsZW5ndGggbGVzcyB0aGFuIDRcbiAqIEBleGFtcGxlXG4gKiBzYW1wbGVLdXJ0b3NpcyhbMSwgMiwgMiwgMywgNV0pOyAvLyA9PiAxLjQ1NTU3NjU1OTU0NjMxMjJcbiAqL1xuZnVuY3Rpb24gc2FtcGxlS3VydG9zaXMoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykvKjpudW1iZXIqLyB7XG5cbiAgICB2YXIgbiA9IHgubGVuZ3RoO1xuXG4gICAgaWYgKG4gPCA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2FtcGxlS3VydG9zaXMgcmVxdWlyZXMgYXQgbGVhc3QgZm91ciBkYXRhIHBvaW50cycpO1xuICAgIH1cblxuICAgIHZhciBtZWFuVmFsdWUgPSBtZWFuKHgpO1xuICAgIHZhciB0ZW1wVmFsdWU7XG4gICAgdmFyIHNlY29uZENlbnRyYWxNb21lbnQgPSAwO1xuICAgIHZhciBmb3VydGhDZW50cmFsTW9tZW50ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHRlbXBWYWx1ZSA9IHhbaV0gLSBtZWFuVmFsdWU7XG4gICAgICAgIHNlY29uZENlbnRyYWxNb21lbnQgKz0gdGVtcFZhbHVlICogdGVtcFZhbHVlO1xuICAgICAgICBmb3VydGhDZW50cmFsTW9tZW50ICs9IHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZSAqIHRlbXBWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG4gLSAxKSAvICgobiAtIDIpICogKG4gLSAzKSkgKlxuICAgICAgICAobiAqIChuICsgMSkgKiBmb3VydGhDZW50cmFsTW9tZW50IC8gKHNlY29uZENlbnRyYWxNb21lbnQgKiBzZWNvbmRDZW50cmFsTW9tZW50KSAtIDMgKiAobiAtIDEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlS3VydG9zaXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc2FtcGxlX2t1cnRvc2lzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFtIZWFwJ3MgQWxnb3JpdGhtXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFwJTI3c19hbGdvcml0aG0pXG4gKiBmb3IgZ2VuZXJhdGluZyBwZXJtdXRhdGlvbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZWxlbWVudHMgYW55IHR5cGUgb2YgZGF0YVxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYXJyYXkgb2YgcGVybXV0YXRpb25zXG4gKi9cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc0hlYXAvKjo6IDxUPiAqLyhlbGVtZW50cyAvKjogQXJyYXk8VD4gKi8pLyo6IEFycmF5PEFycmF5PFQ+PiAqLyB7XG4gICAgdmFyIGluZGV4ZXMgPSBuZXcgQXJyYXkoZWxlbWVudHMubGVuZ3RoKTtcbiAgICB2YXIgcGVybXV0YXRpb25zID0gW2VsZW1lbnRzLnNsaWNlKCldO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbmRleGVzW2ldID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOykge1xuICAgICAgICBpZiAoaW5kZXhlc1tpXSA8IGkpIHtcblxuICAgICAgICAgICAgLy8gQXQgb2RkIGluZGV4ZXMsIHN3YXAgZnJvbSBpbmRleGVzW2ldIGluc3RlYWRcbiAgICAgICAgICAgIC8vIG9mIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIHZhciBzd2FwRnJvbSA9IDA7XG4gICAgICAgICAgICBpZiAoaSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzd2FwRnJvbSA9IGluZGV4ZXNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN3YXAgYmV0d2VlbiBzd2FwRnJvbSBhbmQgaSwgdXNpbmdcbiAgICAgICAgICAgIC8vIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIGFzIHN0b3JhZ2UuXG4gICAgICAgICAgICB2YXIgdGVtcCA9IGVsZW1lbnRzW3N3YXBGcm9tXTtcbiAgICAgICAgICAgIGVsZW1lbnRzW3N3YXBGcm9tXSA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudHNbaV0gPSB0ZW1wO1xuXG4gICAgICAgICAgICBwZXJtdXRhdGlvbnMucHVzaChlbGVtZW50cy5zbGljZSgpKTtcbiAgICAgICAgICAgIGluZGV4ZXNbaV0rKztcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleGVzW2ldID0gMDtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwZXJtdXRhdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBlcm11dGF0aW9uc0hlYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVybXV0YXRpb25zX2hlYXAuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgQ29tYmluYXRpb25zXG4gKiBDb21iaW5hdGlvbnMgYXJlIHVuaXF1ZSBzdWJzZXRzIG9mIGEgY29sbGVjdGlvbiAtIGluIHRoaXMgY2FzZSwgayB4IGZyb20gYSBjb2xsZWN0aW9uIGF0IGEgdGltZS5cbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmF0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSB4IGFueSB0eXBlIG9mIGRhdGFcbiAqIEBwYXJhbSB7aW50fSBrIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbiBlYWNoIGdyb3VwICh3aXRob3V0IHJlcGxhY2VtZW50KVxuICogQHJldHVybnMge0FycmF5PEFycmF5Pn0gYXJyYXkgb2YgcGVybXV0YXRpb25zXG4gKiBAZXhhbXBsZVxuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7IC8vID0+IFtbMSwyXSwgWzEsM10sIFsyLDNdXVxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmF0aW9ucyhcbiAgICB4Lyo6IEFycmF5PGFueT4gKi8sXG4gICAgay8qOiBudW1iZXIgKi8pLyo6IEFycmF5PEFycmF5PGFueT4+ICovIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgc3ViSTtcbiAgICB2YXIgY29tYmluYXRpb25MaXN0ID0gW107XG4gICAgdmFyIHN1YnNldENvbWJpbmF0aW9ucztcbiAgICB2YXIgbmV4dDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrID09PSAxKSB7XG4gICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChbeFtpXV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzZXRDb21iaW5hdGlvbnMgPSBjb21iaW5hdGlvbnMoeC5zbGljZSggaSArIDEsIHgubGVuZ3RoICksIGsgLSAxKTtcbiAgICAgICAgICAgIGZvciAoc3ViSSA9IDA7IHN1YkkgPCBzdWJzZXRDb21iaW5hdGlvbnMubGVuZ3RoOyBzdWJJKyspIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gc3Vic2V0Q29tYmluYXRpb25zW3N1YkldO1xuICAgICAgICAgICAgICAgIG5leHQudW5zaGlmdCh4W2ldKTtcbiAgICAgICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tYmluYXRpb25MaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5hdGlvbnM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY29tYmluYXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIFtDb21iaW5hdGlvbnNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmF0aW9uKSB3aXRoIHJlcGxhY2VtZW50XG4gKiBDb21iaW5hdGlvbnMgYXJlIHVuaXF1ZSBzdWJzZXRzIG9mIGEgY29sbGVjdGlvbiAtIGluIHRoaXMgY2FzZSwgayB4IGZyb20gYSBjb2xsZWN0aW9uIGF0IGEgdGltZS5cbiAqICdXaXRoIHJlcGxhY2VtZW50JyBtZWFucyB0aGF0IGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgY2hvc2VuIG11bHRpcGxlIHRpbWVzLlxuICogVW5saWtlIHBlcm11dGF0aW9uLCBvcmRlciBkb2Vzbid0IG1hdHRlciBmb3IgY29tYmluYXRpb25zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHggYW55IHR5cGUgb2YgZGF0YVxuICogQHBhcmFtIHtpbnR9IGsgdGhlIG51bWJlciBvZiBvYmplY3RzIGluIGVhY2ggZ3JvdXAgKHdpdGhvdXQgcmVwbGFjZW1lbnQpXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk+fSBhcnJheSBvZiBwZXJtdXRhdGlvbnNcbiAqIEBleGFtcGxlXG4gKiBjb21iaW5hdGlvbnNSZXBsYWNlbWVudChbMSwgMl0sIDIpOyAvLyA9PiBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXV1cbiAqL1xuZnVuY3Rpb24gY29tYmluYXRpb25zUmVwbGFjZW1lbnQoXG4gICAgeCAvKjogQXJyYXk8YW55PiAqLyxcbiAgICBrIC8qOiBudW1iZXIgKi8pLyo6IEFycmF5PEFycmF5PGFueT4+ICovIHtcblxuICAgIHZhciBjb21iaW5hdGlvbkxpc3QgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoayA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgcmVxdWVzdGVkIHRvIGZpbmQgb25seSBvbmUgZWxlbWVudCwgd2UgZG9uJ3QgbmVlZFxuICAgICAgICAgICAgLy8gdG8gcmVjdXJzZToganVzdCBwdXNoIGB4W2ldYCBvbnRvIHRoZSBsaXN0IG9mIGNvbWJpbmF0aW9ucy5cbiAgICAgICAgICAgIGNvbWJpbmF0aW9uTGlzdC5wdXNoKFt4W2ldXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmVjdXJzaXZlbHkgZmluZCBjb21iaW5hdGlvbnMsIGdpdmVuIGBrIC0gMWAuIE5vdGUgdGhhdFxuICAgICAgICAgICAgLy8gd2UgcmVxdWVzdCBgayAtIDFgLCBzbyBpZiB5b3Ugd2VyZSBsb29raW5nIGZvciBrPTMgY29tYmluYXRpb25zLCB3ZSdyZVxuICAgICAgICAgICAgLy8gcmVxdWVzdGluZyBrPTIuIFRoaXMgLTEgZ2V0cyByZXZlcnNlZCBpbiB0aGUgZm9yIGxvb3AgcmlnaHQgYWZ0ZXIgdGhpc1xuICAgICAgICAgICAgLy8gY29kZSwgc2luY2Ugd2UgY29uY2F0ZW5hdGUgYHhbaV1gIG9udG8gdGhlIHNlbGVjdGVkIGNvbWJpbmF0aW9ucyxcbiAgICAgICAgICAgIC8vIGJyaW5naW5nIGBrYCBiYWNrIHVwIHRvIHlvdXIgcmVxdWVzdGVkIGxldmVsLlxuICAgICAgICAgICAgLy8gVGhpcyByZWN1cnNpb24gbWF5IGdvIG1hbnkgbGV2ZWxzIGRlZXAsIHNpbmNlIGl0IG9ubHkgc3RvcHMgb25jZVxuICAgICAgICAgICAgLy8gaz0xLlxuICAgICAgICAgICAgdmFyIHN1YnNldENvbWJpbmF0aW9ucyA9IGNvbWJpbmF0aW9uc1JlcGxhY2VtZW50KFxuICAgICAgICAgICAgICAgIHguc2xpY2UoaSwgeC5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIGsgLSAxKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzdWJzZXRDb21iaW5hdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb21iaW5hdGlvbkxpc3QucHVzaChbeFtpXV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzdWJzZXRDb21iaW5hdGlvbnNbal0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdGlvbkxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmF0aW9uc1JlcGxhY2VtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NvbWJpbmF0aW9uc19yZXBsYWNlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXaGVuIGFkZGluZyBhIG5ldyB2YWx1ZSB0byBhIGxpc3QsIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeVxuICogcmVjb21wdXRlIHRoZSBtZWFuIG9mIHRoZSBsaXN0IGluIGxpbmVhciB0aW1lLiBUaGV5IGNhbiBpbnN0ZWFkIHVzZVxuICogdGhpcyBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBuZXcgbWVhbiBieSBwcm92aWRpbmcgdGhlIGN1cnJlbnQgbWVhbixcbiAqIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3QgdGhhdCBwcm9kdWNlZCBpdCBhbmQgdGhlIG5ld1xuICogdmFsdWUgdG8gYWRkLlxuICpcbiAqIEBzaW5jZSAyLjUuMFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW4gY3VycmVudCBtZWFuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdWYWx1ZSB0aGUgYWRkZWQgdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBuZXcgbWVhblxuICpcbiAqIEBleGFtcGxlXG4gKiBhZGRUb01lYW4oMTQsIDUsIDUzKTsgLy8gPT4gMjAuNVxuICovXG5mdW5jdGlvbiBhZGRUb01lYW4obWVhbiAvKjogbnVtYmVyKi8sIG4vKjogbnVtYmVyICovLCBuZXdWYWx1ZS8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgcmV0dXJuIG1lYW4gKyAoKG5ld1ZhbHVlIC0gbWVhbikgLyAobiArIDEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkVG9NZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2FkZF90b19tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgY29tYmluZU1lYW5zIGZyb20gJy4vY29tYmluZV9tZWFucyc7XG5cbi8qKlxuICogV2hlbiBjb21iaW5pbmcgdHdvIGxpc3RzIG9mIHZhbHVlcyBmb3Igd2hpY2ggb25lIGFscmVhZHkga25vd3MgdGhlIHZhcmlhbmNlcyxcbiAqIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeSByZWNvbXB1dGUgdGhlIHZhcmlhbmNlIG9mIHRoZSBjb21iaW5lZCBsaXN0c1xuICogaW4gbGluZWFyIHRpbWUuIFRoZXkgY2FuIGluc3RlYWQgdXNlIHRoaXMgZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgY29tYmluZWRcbiAqIHZhcmlhbmNlIGJ5IHByb3ZpZGluZyB0aGUgdmFyaWFuY2UsIG1lYW4gJiBudW1iZXIgb2YgdmFsdWVzIG9mIHRoZSBmaXJzdCBsaXN0XG4gKiBhbmQgdGhlIHZhcmlhbmNlLCBtZWFuICYgbnVtYmVyIG9mIHZhbHVlcyBvZiB0aGUgc2Vjb25kIGxpc3QuXG4gKlxuICogQHNpbmNlIDMuMC4wXG4gKiBAcGFyYW0ge251bWJlcn0gdmFyaWFuY2UxIHZhcmlhbmNlIG9mIHRoZSBmaXJzdCBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbWVhbjEgbWVhbiBvZiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4xIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZmlyc3QgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IHZhcmlhbmNlMiB2YXJpYW5jZSBvZiB0aGUgc2Vjb25kIGxpc3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtZWFuMiBtZWFuIG9mIHRoZSBzZWNvbmQgbGlzdFxuICogQHBhcmFtIHtudW1iZXJ9IG4yIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgc2Vjb25kIGxpc3RcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb21iaW5lZCBtZWFuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbWJpbmVWYXJpYW5jZXMoMTQgLyAzLCA1LCAzLCA4IC8gMywgNCwgMyk7IC8vID0+IDQ3IC8gMTJcbiAqL1xuZnVuY3Rpb24gY29tYmluZVZhcmlhbmNlcyhcbiAgICB2YXJpYW5jZTEgLyo6IG51bWJlciovLFxuICAgIG1lYW4xIC8qOiBudW1iZXIqLyxcbiAgICBuMS8qOiBudW1iZXIgKi8sXG4gICAgdmFyaWFuY2UyIC8qOiBudW1iZXIqLyxcbiAgICBtZWFuMiAvKjogbnVtYmVyKi8sXG4gICAgbjIvKjogbnVtYmVyICovKS8qOiBudW1iZXIgKi8ge1xuXG4gICAgdmFyIG5ld01lYW4gPSBjb21iaW5lTWVhbnMobWVhbjEsIG4xLCBtZWFuMiwgbjIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgbjEgKiAodmFyaWFuY2UxICsgTWF0aC5wb3cobWVhbjEgLSBuZXdNZWFuLCAyKSkgK1xuICAgICAgICBuMiAqICh2YXJpYW5jZTIgKyBNYXRoLnBvdyhtZWFuMiAtIG5ld01lYW4sIDIpKVxuICAgICkgLyAobjEgKyBuMik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVWYXJpYW5jZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvY29tYmluZV92YXJpYW5jZXMuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogVGhlIFtHZW9tZXRyaWMgTWVhbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2VvbWV0cmljX21lYW4pIGlzXG4gKiBhIG1lYW4gZnVuY3Rpb24gdGhhdCBpcyBtb3JlIHVzZWZ1bCBmb3IgbnVtYmVycyBpbiBkaWZmZXJlbnRcbiAqIHJhbmdlcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBudGggcm9vdCBvZiB0aGUgaW5wdXQgbnVtYmVycyBtdWx0aXBsaWVkIGJ5IGVhY2ggb3RoZXIuXG4gKlxuICogVGhlIGdlb21ldHJpYyBtZWFuIGlzIG9mdGVuIHVzZWZ1bCBmb3JcbiAqICoqW3Byb3BvcnRpb25hbCBncm93dGhdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dlb21ldHJpY19tZWFuI1Byb3BvcnRpb25hbF9ncm93dGgpKio6IGdpdmVuXG4gKiBncm93dGggcmF0ZXMgZm9yIG11bHRpcGxlIHllYXJzLCBsaWtlIF84MCUsIDE2LjY2JSBhbmQgNDIuODUlXywgYSBzaW1wbGVcbiAqIG1lYW4gd2lsbCBpbmNvcnJlY3RseSBlc3RpbWF0ZSBhbiBhdmVyYWdlIGdyb3d0aCByYXRlLCB3aGVyZWFzIGEgZ2VvbWV0cmljXG4gKiBtZWFuIHdpbGwgY29ycmVjdGx5IGVzdGltYXRlIGEgZ3Jvd3RoIHJhdGUgdGhhdCwgb3ZlciB0aG9zZSB5ZWFycyxcbiAqIHdpbGwgeWllbGQgdGhlIHNhbWUgZW5kIHZhbHVlLlxuICpcbiAqIFRoaXMgcnVucyBvbiBgTyhuKWAsIGxpbmVhciB0aW1lIGluIHJlc3BlY3QgdG8gdGhlIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gZ2VvbWV0cmljIG1lYW5cbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgeCBjb250YWlucyBhIG5lZ2F0aXZlIG51bWJlclxuICogQGV4YW1wbGVcbiAqIHZhciBncm93dGhSYXRlcyA9IFsxLjgwLCAxLjE2NjY2NiwgMS40Mjg1NzFdO1xuICogdmFyIGF2ZXJhZ2VHcm93dGggPSBzcy5nZW9tZXRyaWNNZWFuKGdyb3d0aFJhdGVzKTtcbiAqIHZhciBhdmVyYWdlR3Jvd3RoUmF0ZXMgPSBbYXZlcmFnZUdyb3d0aCwgYXZlcmFnZUdyb3d0aCwgYXZlcmFnZUdyb3d0aF07XG4gKiB2YXIgc3RhcnRpbmdWYWx1ZSA9IDEwO1xuICogdmFyIHN0YXJ0aW5nVmFsdWVNZWFuID0gMTA7XG4gKiBncm93dGhSYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhdGUpIHtcbiAqICAgc3RhcnRpbmdWYWx1ZSAqPSByYXRlO1xuICogfSk7XG4gKiBhdmVyYWdlR3Jvd3RoUmF0ZXMuZm9yRWFjaChmdW5jdGlvbihyYXRlKSB7XG4gKiAgIHN0YXJ0aW5nVmFsdWVNZWFuICo9IHJhdGU7XG4gKiB9KTtcbiAqIHN0YXJ0aW5nVmFsdWVNZWFuID09PSBzdGFydGluZ1ZhbHVlO1xuICovXG5mdW5jdGlvbiBnZW9tZXRyaWNNZWFuKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1lYW4gb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2VvbWV0cmljTWVhbiByZXF1aXJlcyBhdCBsZWFzdCBvbmUgZGF0YSBwb2ludCcpO1xuICAgIH1cblxuICAgIC8vIHRoZSBzdGFydGluZyB2YWx1ZS5cbiAgICB2YXIgdmFsdWUgPSAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHRoZSBnZW9tZXRyaWMgbWVhbiBpcyBvbmx5IHZhbGlkIGZvciBwb3NpdGl2ZSBudW1iZXJzXG4gICAgICAgIGlmICh4W2ldIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2VvbWV0cmljTWVhbiByZXF1aXJlcyBvbmx5IHBvc2l0aXZlIG51bWJlcnMgYXMgaW5wdXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGVhdGVkbHkgbXVsdGlwbHkgdGhlIHZhbHVlIGJ5IGVhY2ggbnVtYmVyXG4gICAgICAgIHZhbHVlICo9IHhbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucG93KHZhbHVlLCAxIC8geC5sZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW9tZXRyaWNNZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2dlb21ldHJpY19tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbSGFybW9uaWMgTWVhbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGFybW9uaWNfbWVhbikgaXNcbiAqIGEgbWVhbiBmdW5jdGlvbiB0eXBpY2FsbHkgdXNlZCB0byBmaW5kIHRoZSBhdmVyYWdlIG9mIHJhdGVzLlxuICogVGhpcyBtZWFuIGlzIGNhbGN1bGF0ZWQgYnkgdGFraW5nIHRoZSByZWNpcHJvY2FsIG9mIHRoZSBhcml0aG1ldGljIG1lYW5cbiAqIG9mIHRoZSByZWNpcHJvY2FscyBvZiB0aGUgaW5wdXQgbnVtYmVycy5cbiAqXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBkYXRhIHBvaW50c1xuICogQHJldHVybnMge251bWJlcn0gaGFybW9uaWMgbWVhblxuICogQHRocm93cyB7RXJyb3J9IGlmIHggaXMgZW1wdHlcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGNvbnRhaW5zIGEgbmVnYXRpdmUgbnVtYmVyXG4gKiBAZXhhbXBsZVxuICogaGFybW9uaWNNZWFuKFsyLCAzXSkudG9GaXhlZCgyKSAvLyA9PiAnMi40MCdcbiAqL1xuZnVuY3Rpb24gaGFybW9uaWNNZWFuKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6IG51bWJlciAqLyB7XG4gICAgLy8gVGhlIG1lYW4gb2Ygbm8gbnVtYmVycyBpcyBudWxsXG4gICAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFybW9uaWNNZWFuIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHJlY2lwcm9jYWxTdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHRoZSBoYXJtb25pYyBtZWFuIGlzIG9ubHkgdmFsaWQgZm9yIHBvc2l0aXZlIG51bWJlcnNcbiAgICAgICAgaWYgKHhbaV0gPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYXJtb25pY01lYW4gcmVxdWlyZXMgb25seSBwb3NpdGl2ZSBudW1iZXJzIGFzIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNpcHJvY2FsU3VtICs9IDEgLyB4W2ldO1xuICAgIH1cblxuICAgIC8vIGRpdmlkZSBuIGJ5IHRoZSB0aGUgcmVjaXByb2NhbCBzdW1cbiAgICByZXR1cm4geC5sZW5ndGggLyByZWNpcHJvY2FsU3VtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXJtb25pY01lYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvaGFybW9uaWNfbWVhbi5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IHF1YW50aWxlU29ydGVkIGZyb20gJy4vcXVhbnRpbGVfc29ydGVkJztcblxuLyoqXG4gKiBUaGUgW21lZGlhbl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NZWRpYW4pIGlzXG4gKiB0aGUgbWlkZGxlIG51bWJlciBvZiBhIGxpc3QuIFRoaXMgaXMgb2Z0ZW4gYSBnb29kIGluZGljYXRvciBvZiAndGhlIG1pZGRsZSdcbiAqIHdoZW4gdGhlcmUgYXJlIG91dGxpZXJzIHRoYXQgc2tldyB0aGUgYG1lYW4oKWAgdmFsdWUuXG4gKiBUaGlzIGlzIGEgW21lYXN1cmUgb2YgY2VudHJhbCB0ZW5kZW5jeV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbF90ZW5kZW5jeSk6XG4gKiBhIG1ldGhvZCBvZiBmaW5kaW5nIGEgdHlwaWNhbCBvciBjZW50cmFsIHZhbHVlIG9mIGEgc2V0IG9mIG51bWJlcnMuXG4gKlxuICogVGhlIG1lZGlhbiBpc24ndCBuZWNlc3NhcmlseSBvbmUgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBsaXN0OiB0aGUgdmFsdWVcbiAqIGNhbiBiZSB0aGUgYXZlcmFnZSBvZiB0d28gZWxlbWVudHMgaWYgdGhlIGxpc3QgaGFzIGFuIGV2ZW4gbGVuZ3RoXG4gKiBhbmQgdGhlIHR3byBjZW50cmFsIHZhbHVlcyBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc29ydGVkIGlucHV0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBtZWRpYW4gdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBtZWRpYW5Tb3J0ZWQoWzEwLCAyLCA1LCAxMDAsIDIsIDFdKTsgLy8gPT4gNTIuNVxuICovXG5mdW5jdGlvbiBtZWRpYW5Tb3J0ZWQoc29ydGVkIC8qOiBBcnJheTxudW1iZXI+ICovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4gcXVhbnRpbGVTb3J0ZWQoc29ydGVkLCAwLjUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZWRpYW5Tb3J0ZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvbWVkaWFuX3NvcnRlZC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBXaGVuIHJlbW92aW5nIGEgdmFsdWUgZnJvbSBhIGxpc3QsIG9uZSBkb2VzIG5vdCBoYXZlIHRvIG5lY2Vzc2FyeVxuICogcmVjb21wdXRlIHRoZSBtZWFuIG9mIHRoZSBsaXN0IGluIGxpbmVhciB0aW1lLiBUaGV5IGNhbiBpbnN0ZWFkIHVzZVxuICogdGhpcyBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBuZXcgbWVhbiBieSBwcm92aWRpbmcgdGhlIGN1cnJlbnQgbWVhbixcbiAqIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3QgdGhhdCBwcm9kdWNlZCBpdCBhbmQgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtZWFuIGN1cnJlbnQgbWVhblxuICogQHBhcmFtIHtudW1iZXJ9IG4gbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgdGhlIHZhbHVlIHRvIHJlbW92ZVxuICogQHJldHVybnMge251bWJlcn0gdGhlIG5ldyBtZWFuXG4gKlxuICogQGV4YW1wbGVcbiAqIHN1YnRyYWN0RnJvbU1lYW4oMjAuNSwgNiwgNTMpOyAvLyA9PiAxNFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdEZyb21NZWFuKG1lYW4gLyo6IG51bWJlciovLCBuLyo6IG51bWJlciAqLywgdmFsdWUvKjogbnVtYmVyICovKS8qOiBudW1iZXIgKi8ge1xuICAgIHJldHVybiAoKG1lYW4gKiBuKSAtIHZhbHVlKSAvIChuIC0gMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1YnRyYWN0RnJvbU1lYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvc3VidHJhY3RfZnJvbV9tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBSb290IE1lYW4gU3F1YXJlIChSTVMpIGlzXG4gKiBhIG1lYW4gZnVuY3Rpb24gdXNlZCBhcyBhIG1lYXN1cmUgb2YgdGhlIG1hZ25pdHVkZSBvZiBhIHNldFxuICogb2YgbnVtYmVycywgcmVnYXJkbGVzcyBvZiB0aGVpciBzaWduLlxuICogVGhpcyBpcyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhlIG1lYW4gb2YgdGhlIHNxdWFyZXMgb2YgdGhlXG4gKiBpbnB1dCBudW1iZXJzLlxuICogVGhpcyBydW5zIG9uIGBPKG4pYCwgbGluZWFyIHRpbWUgaW4gcmVzcGVjdCB0byB0aGUgYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHggYSBzYW1wbGUgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHJvb3QgbWVhbiBzcXVhcmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiB4IGlzIGVtcHR5XG4gKiBAZXhhbXBsZVxuICogcm9vdE1lYW5TcXVhcmUoWy0xLCAxLCAtMSwgMV0pOyAvLyA9PiAxXG4gKi9cbmZ1bmN0aW9uIHJvb3RNZWFuU3F1YXJlKHggLyo6IEFycmF5PG51bWJlcj4gKi8pLyo6bnVtYmVyKi8ge1xuICAgIGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNZWFuU3F1YXJlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBkYXRhIHBvaW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIHN1bU9mU3F1YXJlcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bU9mU3F1YXJlcyArPSBNYXRoLnBvdyh4W2ldLCAyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcyAvIHgubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdE1lYW5TcXVhcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcm9vdF9tZWFuX3NxdWFyZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcbmltcG9ydCBzdGFuZGFyZERldmlhdGlvbiBmcm9tICcuL3N0YW5kYXJkX2RldmlhdGlvbic7XG5cbi8qKlxuICogVGhpcyBpcyB0byBjb21wdXRlIFthIG9uZS1zYW1wbGUgdC10ZXN0XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdHVkZW50JTI3c190LXRlc3QjT25lLXNhbXBsZV90LXRlc3QpLCBjb21wYXJpbmcgdGhlIG1lYW5cbiAqIG9mIGEgc2FtcGxlIHRvIGEga25vd24gdmFsdWUsIHguXG4gKlxuICogaW4gdGhpcyBjYXNlLCB3ZSdyZSB0cnlpbmcgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXG4gKiBwb3B1bGF0aW9uIG1lYW4gaXMgZXF1YWwgdG8gdGhlIHZhbHVlIHRoYXQgd2Uga25vdywgd2hpY2ggaXMgYHhgXG4gKiBoZXJlLiB1c3VhbGx5IHRoZSByZXN1bHRzIGhlcmUgYXJlIHVzZWQgdG8gbG9vayB1cCBhXG4gKiBbcC12YWx1ZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QLXZhbHVlKSwgd2hpY2gsIGZvclxuICogYSBjZXJ0YWluIGxldmVsIG9mIHNpZ25pZmljYW5jZSwgd2lsbCBsZXQgeW91IGRldGVybWluZSB0aGF0IHRoZVxuICogbnVsbCBoeXBvdGhlc2lzIGNhbiBvciBjYW5ub3QgYmUgcmVqZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4IHNhbXBsZSBvZiBvbmUgb3IgbW9yZSBudW1iZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gZXhwZWN0ZWRWYWx1ZSBleHBlY3RlZCB2YWx1ZSBvZiB0aGUgcG9wdWxhdGlvbiBtZWFuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB2YWx1ZVxuICogQGV4YW1wbGVcbiAqIHRUZXN0KFsxLCAyLCAzLCA0LCA1LCA2XSwgMy4zODUpLnRvRml4ZWQoMik7IC8vID0+ICcwLjE2J1xuICovXG5mdW5jdGlvbiB0VGVzdCh4Lyo6IEFycmF5PG51bWJlcj4gKi8sIGV4cGVjdGVkVmFsdWUvKjogbnVtYmVyICovKS8qOm51bWJlciovIHtcbiAgICAvLyBUaGUgbWVhbiBvZiB0aGUgc2FtcGxlXG4gICAgdmFyIHNhbXBsZU1lYW4gPSBtZWFuKHgpO1xuXG4gICAgLy8gVGhlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgc2FtcGxlXG4gICAgdmFyIHNkID0gc3RhbmRhcmREZXZpYXRpb24oeCk7XG5cbiAgICAvLyBTcXVhcmUgcm9vdCB0aGUgbGVuZ3RoIG9mIHRoZSBzYW1wbGVcbiAgICB2YXIgcm9vdE4gPSBNYXRoLnNxcnQoeC5sZW5ndGgpO1xuXG4gICAgLy8gcmV0dXJuaW5nIHRoZSB0IHZhbHVlXG4gICAgcmV0dXJuIChzYW1wbGVNZWFuIC0gZXhwZWN0ZWRWYWx1ZSkgLyAoc2QgLyByb290Tik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRUZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3RfdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IG1lYW4gZnJvbSAnLi9tZWFuJztcbmltcG9ydCBzYW1wbGVWYXJpYW5jZSBmcm9tICcuL3NhbXBsZV92YXJpYW5jZSc7XG5cbi8qKlxuICogVGhpcyBpcyB0byBjb21wdXRlIFt0d28gc2FtcGxlIHQtdGVzdF0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdHVkZW50J3NfdC10ZXN0KS5cbiAqIFRlc3RzIHdoZXRoZXIgXCJtZWFuKFgpLW1lYW4oWSkgPSBkaWZmZXJlbmNlXCIsIChcbiAqIGluIHRoZSBtb3N0IGNvbW1vbiBjYXNlLCB3ZSBvZnRlbiBoYXZlIGBkaWZmZXJlbmNlID09IDBgIHRvIHRlc3QgaWYgdHdvIHNhbXBsZXNcbiAqIGFyZSBsaWtlbHkgdG8gYmUgdGFrZW4gZnJvbSBwb3B1bGF0aW9ucyB3aXRoIHRoZSBzYW1lIG1lYW4gdmFsdWUpIHdpdGhcbiAqIG5vIHByaW9yIGtub3dsZWRnZSBvbiBzdGFuZGFyZCBkZXZpYXRpb25zIG9mIGJvdGggc2FtcGxlc1xuICogb3RoZXIgdGhhbiB0aGUgZmFjdCB0aGF0IHRoZXkgaGF2ZSB0aGUgc2FtZSBzdGFuZGFyZCBkZXZpYXRpb24uXG4gKlxuICogVXN1YWxseSB0aGUgcmVzdWx0cyBoZXJlIGFyZSB1c2VkIHRvIGxvb2sgdXAgYVxuICogW3AtdmFsdWVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUC12YWx1ZSksIHdoaWNoLCBmb3JcbiAqIGEgY2VydGFpbiBsZXZlbCBvZiBzaWduaWZpY2FuY2UsIHdpbGwgbGV0IHlvdSBkZXRlcm1pbmUgdGhhdCB0aGVcbiAqIG51bGwgaHlwb3RoZXNpcyBjYW4gb3IgY2Fubm90IGJlIHJlamVjdGVkLlxuICpcbiAqIGBkaWZmYCBjYW4gYmUgb21pdHRlZCBpZiBpdCBlcXVhbHMgMC5cbiAqXG4gKiBbVGhpcyBpcyB1c2VkIHRvIGNvbmZpcm0gb3IgZGVueV0oaHR0cDovL3d3dy5tb25hcmNobGFiLm9yZy9MYWIvUmVzZWFyY2gvU3RhdHMvMlNhbXBsZVQuYXNweClcbiAqIGEgbnVsbCBoeXBvdGhlc2lzIHRoYXQgdGhlIHR3byBwb3B1bGF0aW9ucyB0aGF0IGhhdmUgYmVlbiBzYW1wbGVkIGludG9cbiAqIGBzYW1wbGVYYCBhbmQgYHNhbXBsZVlgIGFyZSBlcXVhbCB0byBlYWNoIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2FtcGxlWCBhIHNhbXBsZSBhcyBhbiBhcnJheSBvZiBudW1iZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNhbXBsZVkgYSBzYW1wbGUgYXMgYW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtkaWZmZXJlbmNlPTBdXG4gKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9IHRlc3QgcmVzdWx0XG4gKlxuICogQGV4YW1wbGVcbiAqIHRUZXN0VHdvU2FtcGxlKFsxLCAyLCAzLCA0XSwgWzMsIDQsIDUsIDZdLCAwKTsgLy8gPT4gLTIuMTkwODkwMjMwMDIwNjY0M1xuICovXG5mdW5jdGlvbiB0VGVzdFR3b1NhbXBsZShcbiAgICBzYW1wbGVYLyo6IEFycmF5PG51bWJlcj4gKi8sXG4gICAgc2FtcGxlWS8qOiBBcnJheTxudW1iZXI+ICovLFxuICAgIGRpZmZlcmVuY2UvKjogP251bWJlciAqLykvKjogP251bWJlciAqLyB7XG4gICAgdmFyIG4gPSBzYW1wbGVYLmxlbmd0aCxcbiAgICAgICAgbSA9IHNhbXBsZVkubGVuZ3RoO1xuXG4gICAgLy8gSWYgZWl0aGVyIHNhbXBsZSBkb2Vzbid0IGFjdHVhbGx5IGhhdmUgYW55IHZhbHVlcywgd2UgY2FuJ3RcbiAgICAvLyBjb21wdXRlIHRoaXMgYXQgYWxsLCBzbyB3ZSByZXR1cm4gYG51bGxgLlxuICAgIGlmICghbiB8fCAhbSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgLy8gZGVmYXVsdCBkaWZmZXJlbmNlIChtdSkgaXMgemVyb1xuICAgIGlmICghZGlmZmVyZW5jZSkge1xuICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICB9XG5cbiAgICB2YXIgbWVhblggPSBtZWFuKHNhbXBsZVgpLFxuICAgICAgICBtZWFuWSA9IG1lYW4oc2FtcGxlWSksXG4gICAgICAgIHNhbXBsZVZhcmlhbmNlWCA9IHNhbXBsZVZhcmlhbmNlKHNhbXBsZVgpLFxuICAgICAgICBzYW1wbGVWYXJpYW5jZVkgPSBzYW1wbGVWYXJpYW5jZShzYW1wbGVZKTtcblxuICAgIGlmICh0eXBlb2YgbWVhblggPT09ICdudW1iZXInICYmXG4gICAgICAgIHR5cGVvZiBtZWFuWSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgdHlwZW9mIHNhbXBsZVZhcmlhbmNlWCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgdHlwZW9mIHNhbXBsZVZhcmlhbmNlWSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIHdlaWdodGVkVmFyaWFuY2UgPSAoKG4gLSAxKSAqIHNhbXBsZVZhcmlhbmNlWCArXG4gICAgICAgICAgICAobSAtIDEpICogc2FtcGxlVmFyaWFuY2VZKSAvIChuICsgbSAtIDIpO1xuXG4gICAgICAgIHJldHVybiAobWVhblggLSBtZWFuWSAtIGRpZmZlcmVuY2UpIC9cbiAgICAgICAgICAgIE1hdGguc3FydCh3ZWlnaHRlZFZhcmlhbmNlICogKDEgLyBuICsgMSAvIG0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRUZXN0VHdvU2FtcGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3RfdGVzdF90d29fc2FtcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFtCYXllc2lhbiBDbGFzc2lmaWVyXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05haXZlX0JheWVzX2NsYXNzaWZpZXIpXG4gKlxuICogVGhpcyBpcyBhIG5hw692ZSBiYXllc2lhbiBjbGFzc2lmaWVyIHRoYXQgdGFrZXNcbiAqIHNpbmdseS1uZXN0ZWQgb2JqZWN0cy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiB2YXIgYmF5ZXMgPSBuZXcgQmF5ZXNpYW5DbGFzc2lmaWVyKCk7XG4gKiBiYXllcy50cmFpbih7XG4gKiAgIHNwZWNpZXM6ICdDYXQnXG4gKiB9LCAnYW5pbWFsJyk7XG4gKiB2YXIgcmVzdWx0ID0gYmF5ZXMuc2NvcmUoe1xuICogICBzcGVjaWVzOiAnQ2F0J1xuICogfSlcbiAqIC8vIHJlc3VsdFxuICogLy8ge1xuICogLy8gICBhbmltYWw6IDFcbiAqIC8vIH1cbiAqL1xuZnVuY3Rpb24gQmF5ZXNpYW5DbGFzc2lmaWVyKCkge1xuICAgIC8vIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCBhcmUgY3VycmVudGx5XG4gICAgLy8gY2xhc3NpZmllZCBpbiB0aGUgbW9kZWxcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xuICAgIC8vIEV2ZXJ5IGl0ZW0gY2xhc3NpZmllZCBpbiB0aGUgbW9kZWxcbiAgICB0aGlzLmRhdGEgPSB7fTtcbn1cblxuLyoqXG4gKiBUcmFpbiB0aGUgY2xhc3NpZmllciB3aXRoIGEgbmV3IGl0ZW0sIHdoaWNoIGhhcyBhIHNpbmdsZVxuICogZGltZW5zaW9uIG9mIEphdmFzY3JpcHQgbGl0ZXJhbCBrZXlzIGFuZCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gYW4gb2JqZWN0IHdpdGggc2luZ2x5LWRlZXAgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5IHRoZSBjYXRlZ29yeSB0aGlzIGl0ZW0gYmVsb25ncyB0b1xuICogQHJldHVybiB7dW5kZWZpbmVkfSBhZGRzIHRoZSBpdGVtIHRvIHRoZSBjbGFzc2lmaWVyXG4gKi9cbkJheWVzaWFuQ2xhc3NpZmllci5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbihpdGVtLCBjYXRlZ29yeSkge1xuICAgIC8vIElmIHRoZSBkYXRhIG9iamVjdCBkb2Vzbid0IGhhdmUgYW55IHZhbHVlc1xuICAgIC8vIGZvciB0aGlzIGNhdGVnb3J5LCBjcmVhdGUgYSBuZXcgb2JqZWN0IGZvciBpdC5cbiAgICBpZiAoIXRoaXMuZGF0YVtjYXRlZ29yeV0pIHtcbiAgICAgICAgdGhpcy5kYXRhW2NhdGVnb3J5XSA9IHt9O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSBpbiB0aGUgaXRlbS5cbiAgICBmb3IgKHZhciBrIGluIGl0ZW0pIHtcbiAgICAgICAgdmFyIHYgPSBpdGVtW2tdO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBuZXN0ZWQgb2JqZWN0IGBkYXRhW2NhdGVnb3J5XVtrXVtpdGVtW2tdXWBcbiAgICAgICAgLy8gd2l0aCBhbiBvYmplY3Qgb2Yga2V5cyB0aGF0IGVxdWFsIDAuXG4gICAgICAgIGlmICh0aGlzLmRhdGFbY2F0ZWdvcnldW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtjYXRlZ29yeV1ba10gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhW2NhdGVnb3J5XVtrXVt2XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbY2F0ZWdvcnldW2tdW3ZdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZCBpbmNyZW1lbnQgdGhlIGtleSBmb3IgdGhpcyBrZXkvdmFsdWUgY29tYmluYXRpb24uXG4gICAgICAgIHRoaXMuZGF0YVtjYXRlZ29yeV1ba11bdl0rKztcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiBpdGVtcyBjbGFzc2lmaWVkXG4gICAgdGhpcy50b3RhbENvdW50Kys7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2NvcmUgb2YgaG93IHdlbGwgdGhpcyBpdGVtIG1hdGNoZXMgYWxsXG4gKiBwb3NzaWJsZSBjYXRlZ29yaWVzIGJhc2VkIG9uIGl0cyBhdHRyaWJ1dGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gYW4gaXRlbSBpbiB0aGUgc2FtZSBmb3JtYXQgYXMgd2l0aCB0cmFpblxuICogQHJldHVybnMge09iamVjdH0gb2YgcHJvYmFiaWxpdGllcyB0aGF0IHRoaXMgaXRlbSBiZWxvbmdzIHRvIGFcbiAqIGdpdmVuIGNhdGVnb3J5LlxuICovXG5CYXllc2lhbkNsYXNzaWZpZXIucHJvdG90eXBlLnNjb3JlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIC8vIEluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXkgb2Ygb2RkcyBwZXIgY2F0ZWdvcnkuXG4gICAgdmFyIG9kZHMgPSB7fSwgY2F0ZWdvcnk7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2gga2V5IGluIHRoZSBpdGVtLFxuICAgIC8vIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIGVhY2ggY2F0ZWdvcnkgdGhhdCBoYXMgYmVlbiB1c2VkXG4gICAgLy8gaW4gcHJldmlvdXMgY2FsbHMgdG8gYC50cmFpbigpYFxuICAgIGZvciAodmFyIGsgaW4gaXRlbSkge1xuICAgICAgICB2YXIgdiA9IGl0ZW1ba107XG4gICAgICAgIGZvciAoY2F0ZWdvcnkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgb2JqZWN0IGZvciBzdG9yaW5nIGtleSAtIHZhbHVlIGNvbWJpbmF0aW9uc1xuICAgICAgICAgICAgLy8gZm9yIHRoaXMgY2F0ZWdvcnkuXG4gICAgICAgICAgICBvZGRzW2NhdGVnb3J5XSA9IHt9O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gZG9lc24ndCBldmVuIGhhdmUgYSBwcm9wZXJ0eSwgaXQgY291bnRzIGZvciBub3RoaW5nLFxuICAgICAgICAgICAgLy8gYnV0IGlmIGl0IGRvZXMgaGF2ZSB0aGUgcHJvcGVydHkgdGhhdCB3ZSdyZSBsb29raW5nIGZvciBmcm9tXG4gICAgICAgICAgICAvLyB0aGUgaXRlbSB0byBjYXRlZ29yaXplLCBpdCBjb3VudHMgYmFzZWQgb24gaG93IHBvcHVsYXIgaXQgaXNcbiAgICAgICAgICAgIC8vIHZlcnN1cyB0aGUgd2hvbGUgcG9wdWxhdGlvbi5cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFbY2F0ZWdvcnldW2tdKSB7XG4gICAgICAgICAgICAgICAgb2Rkc1tjYXRlZ29yeV1bayArICdfJyArIHZdID0gKHRoaXMuZGF0YVtjYXRlZ29yeV1ba11bdl0gfHwgMCkgLyB0aGlzLnRvdGFsQ291bnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9kZHNbY2F0ZWdvcnldW2sgKyAnXycgKyB2XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgYSBuZXcgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHN1bXMgb2YgdGhlc2Ugb2RkcyBieSBjYXRlZ29yeVxuICAgIHZhciBvZGRzU3VtcyA9IHt9O1xuXG4gICAgZm9yIChjYXRlZ29yeSBpbiBvZGRzKSB7XG4gICAgICAgIC8vIFRhbGx5IGFsbCBvZiB0aGUgb2RkcyBmb3IgZWFjaCBjYXRlZ29yeS1jb21iaW5hdGlvbiBwYWlyIC1cbiAgICAgICAgLy8gdGhlIG5vbi1leGlzdGVuY2Ugb2YgYSBjYXRlZ29yeSBkb2VzIG5vdCBhZGQgYW55dGhpbmcgdG8gdGhlXG4gICAgICAgIC8vIHNjb3JlLlxuICAgICAgICBvZGRzU3Vtc1tjYXRlZ29yeV0gPSAwO1xuICAgICAgICBmb3IgKHZhciBjb21iaW5hdGlvbiBpbiBvZGRzW2NhdGVnb3J5XSkge1xuICAgICAgICAgICAgb2Rkc1N1bXNbY2F0ZWdvcnldICs9IG9kZHNbY2F0ZWdvcnldW2NvbWJpbmF0aW9uXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZGRzU3Vtcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJheWVzaWFuQ2xhc3NpZmllcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9iYXllc2lhbl9jbGFzc2lmaWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzaW5nbGUtbGF5ZXIgW1BlcmNlcHRyb24gQ2xhc3NpZmllcl0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QZXJjZXB0cm9uKSB0aGF0IHRha2VzXG4gKiBhcnJheXMgb2YgbnVtYmVycyBhbmQgcHJlZGljdHMgd2hldGhlciB0aGV5IHNob3VsZCBiZSBjbGFzc2lmaWVkXG4gKiBhcyBlaXRoZXIgMCBvciAxIChuZWdhdGl2ZSBvciBwb3NpdGl2ZSBleGFtcGxlcykuXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIG1vZGVsXG4gKiB2YXIgcCA9IG5ldyBQZXJjZXB0cm9uTW9kZWwoKTtcbiAqIC8vIFRyYWluIHRoZSBtb2RlbCB3aXRoIGlucHV0IHdpdGggYSBkaWFnb25hbCBib3VuZGFyeS5cbiAqIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gKiAgICAgcC50cmFpbihbMSwgMV0sIDEpO1xuICogICAgIHAudHJhaW4oWzAsIDFdLCAwKTtcbiAqICAgICBwLnRyYWluKFsxLCAwXSwgMCk7XG4gKiAgICAgcC50cmFpbihbMCwgMF0sIDApO1xuICogfVxuICogcC5wcmVkaWN0KFswLCAwXSk7IC8vIDBcbiAqIHAucHJlZGljdChbMCwgMV0pOyAvLyAwXG4gKiBwLnByZWRpY3QoWzEsIDBdKTsgLy8gMFxuICogcC5wcmVkaWN0KFsxLCAxXSk7IC8vIDFcbiAqL1xuZnVuY3Rpb24gUGVyY2VwdHJvbk1vZGVsKCkge1xuICAgIC8vIFRoZSB3ZWlnaHRzLCBvciBjb2VmZmljaWVudHMgb2YgdGhlIG1vZGVsO1xuICAgIC8vIHdlaWdodHMgYXJlIG9ubHkgcG9wdWxhdGVkIHdoZW4gdHJhaW5pbmcgd2l0aCBkYXRhLlxuICAgIHRoaXMud2VpZ2h0cyA9IFtdO1xuICAgIC8vIFRoZSBiaWFzIHRlcm0sIG9yIGludGVyY2VwdDsgaXQgaXMgYWxzbyBhIHdlaWdodCBidXRcbiAgICAvLyBpdCdzIHN0b3JlZCBzZXBhcmF0ZWx5IGZvciBjb252ZW5pZW5jZSBhcyBpdCBpcyBhbHdheXNcbiAgICAvLyBtdWx0aXBsaWVkIGJ5IG9uZS5cbiAgICB0aGlzLmJpYXMgPSAwO1xufVxuXG4vKipcbiAqICoqUHJlZGljdCoqOiBVc2UgYW4gYXJyYXkgb2YgZmVhdHVyZXMgd2l0aCB0aGUgd2VpZ2h0IGFycmF5IGFuZCBiaWFzXG4gKiB0byBwcmVkaWN0IHdoZXRoZXIgYW4gZXhhbXBsZSBpcyBsYWJlbGVkIDAgb3IgMS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVzIGFuIGFycmF5IG9mIGZlYXR1cmVzIGFzIG51bWJlcnNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IDEgaWYgdGhlIHNjb3JlIGlzIG92ZXIgMCwgb3RoZXJ3aXNlIDBcbiAqL1xuUGVyY2VwdHJvbk1vZGVsLnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24oZmVhdHVyZXMpIHtcblxuICAgIC8vIE9ubHkgcHJlZGljdCBpZiBwcmV2aW91c2x5IHRyYWluZWRcbiAgICAvLyBvbiB0aGUgc2FtZSBzaXplIGZlYXR1cmUgYXJyYXkocykuXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCAhPT0gdGhpcy53ZWlnaHRzLmxlbmd0aCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzdW0gb2YgZmVhdHVyZXMgdGltZXMgd2VpZ2h0cyxcbiAgICAvLyB3aXRoIHRoZSBiaWFzIGFkZGVkIChpbXBsaWNpdGx5IHRpbWVzIG9uZSkuXG4gICAgdmFyIHNjb3JlID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2VpZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzY29yZSArPSB0aGlzLndlaWdodHNbaV0gKiBmZWF0dXJlc1tpXTtcbiAgICB9XG4gICAgc2NvcmUgKz0gdGhpcy5iaWFzO1xuXG4gICAgLy8gQ2xhc3NpZnkgYXMgMSBpZiB0aGUgc2NvcmUgaXMgb3ZlciAwLCBvdGhlcndpc2UgMC5cbiAgICBpZiAoc2NvcmUgPiAwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogKipUcmFpbioqIHRoZSBjbGFzc2lmaWVyIHdpdGggYSBuZXcgZXhhbXBsZSwgd2hpY2ggaXNcbiAqIGEgbnVtZXJpYyBhcnJheSBvZiBmZWF0dXJlcyBhbmQgYSAwIG9yIDEgbGFiZWwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlcyBhbiBhcnJheSBvZiBmZWF0dXJlcyBhcyBudW1iZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gbGFiZWwgZWl0aGVyIDAgb3IgMVxuICogQHJldHVybnMge1BlcmNlcHRyb25Nb2RlbH0gdGhpc1xuICovXG5QZXJjZXB0cm9uTW9kZWwucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24oZmVhdHVyZXMsIGxhYmVsKSB7XG4gICAgLy8gUmVxdWlyZSB0aGF0IG9ubHkgbGFiZWxzIG9mIDAgb3IgMSBhcmUgY29uc2lkZXJlZC5cbiAgICBpZiAobGFiZWwgIT09IDAgJiYgbGFiZWwgIT09IDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAvLyBUaGUgbGVuZ3RoIG9mIHRoZSBmZWF0dXJlIGFycmF5IGRldGVybWluZXNcbiAgICAvLyB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWlnaHQgYXJyYXkuXG4gICAgLy8gVGhlIHBlcmNlcHRyb24gd2lsbCBjb250aW51ZSBsZWFybmluZyBhcyBsb25nIGFzXG4gICAgLy8gaXQga2VlcHMgc2VlaW5nIGZlYXR1cmUgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAvLyBXaGVuIGl0IHNlZXMgYSBuZXcgZGF0YSBzaGFwZSwgaXQgaW5pdGlhbGl6ZXMuXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCAhPT0gdGhpcy53ZWlnaHRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLndlaWdodHMgPSBmZWF0dXJlcztcbiAgICAgICAgdGhpcy5iaWFzID0gMTtcbiAgICB9XG4gICAgLy8gTWFrZSBhIHByZWRpY3Rpb24gYmFzZWQgb24gY3VycmVudCB3ZWlnaHRzLlxuICAgIHZhciBwcmVkaWN0aW9uID0gdGhpcy5wcmVkaWN0KGZlYXR1cmVzKTtcbiAgICAvLyBVcGRhdGUgdGhlIHdlaWdodHMgaWYgdGhlIHByZWRpY3Rpb24gaXMgd3JvbmcuXG4gICAgaWYgKHByZWRpY3Rpb24gIT09IGxhYmVsKSB7XG4gICAgICAgIHZhciBncmFkaWVudCA9IGxhYmVsIC0gcHJlZGljdGlvbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0c1tpXSArPSBncmFkaWVudCAqIGZlYXR1cmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmlhcyArPSBncmFkaWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJjZXB0cm9uTW9kZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvcGVyY2VwdHJvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBBIFtGYWN0b3JpYWxdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZhY3RvcmlhbCksIHVzdWFsbHkgd3JpdHRlbiBuISwgaXMgdGhlIHByb2R1Y3Qgb2YgYWxsIHBvc2l0aXZlXG4gKiBpbnRlZ2VycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gbi4gT2Z0ZW4gZmFjdG9yaWFsIGlzIGltcGxlbWVudGVkXG4gKiByZWN1cnNpdmVseSwgYnV0IHRoaXMgaXRlcmF0aXZlIGFwcHJvYWNoIGlzIHNpZ25pZmljYW50bHkgZmFzdGVyXG4gKiBhbmQgc2ltcGxlci5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBpbnB1dCwgbXVzdCBiZSBhbiBpbnRlZ2VyIG51bWJlciAxIG9yIGdyZWF0ZXJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGZhY3RvcmlhbDogbiFcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBuIGlzIGxlc3MgdGhhbiAwIG9yIG5vdCBhbiBpbnRlZ2VyXG4gKiBAZXhhbXBsZVxuICogZmFjdG9yaWFsKDUpOyAvLyA9PiAxMjBcbiAqL1xuZnVuY3Rpb24gZmFjdG9yaWFsKG4gLyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcblxuICAgIC8vIGZhY3RvcmlhbCBpcyBtYXRoZW1hdGljYWxseSB1bmRlZmluZWQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAobiA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWN0b3JpYWwgcmVxdWlyZXMgYSBub24tbmVnYXRpdmUgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5mbG9vcihuKSAhPT0gbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhY3RvcmlhbCByZXF1aXJlcyBhbiBpbnRlZ2VyIGlucHV0Jyk7XG4gICAgfVxuXG4gICAgLy8gdHlwaWNhbGx5IHlvdSdsbCBleHBhbmQgdGhlIGZhY3RvcmlhbCBmdW5jdGlvbiBnb2luZyBkb3duLCBsaWtlXG4gICAgLy8gNSEgPSA1ICogNCAqIDMgKiAyICogMS4gVGhpcyBpcyBnb2luZyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLFxuICAgIC8vIGNvdW50aW5nIGZyb20gMiB1cCB0byB0aGUgbnVtYmVyIGluIHF1ZXN0aW9uLCBhbmQgc2luY2UgYW55dGhpbmdcbiAgICAvLyBtdWx0aXBsaWVkIGJ5IDEgaXMgaXRzZWxmLCB0aGUgbG9vcCBvbmx5IG5lZWRzIHRvIHN0YXJ0IGF0IDIuXG4gICAgdmFyIGFjY3VtdWxhdG9yID0gMTtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgLy8gZm9yIGVhY2ggbnVtYmVyIHVwIHRvIGFuZCBpbmNsdWRpbmcgdGhlIG51bWJlciBgbmAsIG11bHRpcGx5XG4gICAgICAgIC8vIHRoZSBhY2N1bXVsYXRvciBteSB0aGF0IG51bWJlci5cbiAgICAgICAgYWNjdW11bGF0b3IgKj0gaTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmYWN0b3JpYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZmFjdG9yaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuLyoqXG4gKiBUaGUgW0Jlcm5vdWxsaSBkaXN0cmlidXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmVybm91bGxpX2Rpc3RyaWJ1dGlvbilcbiAqIGlzIHRoZSBwcm9iYWJpbGl0eSBkaXNjcmV0ZVxuICogZGlzdHJpYnV0aW9uIG9mIGEgcmFuZG9tIHZhcmlhYmxlIHdoaWNoIHRha2VzIHZhbHVlIDEgd2l0aCBzdWNjZXNzXG4gKiBwcm9iYWJpbGl0eSBgcGAgYW5kIHZhbHVlIDAgd2l0aCBmYWlsdXJlXG4gKiBwcm9iYWJpbGl0eSBgcWAgPSAxIC0gYHBgLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIHJlcHJlc2VudCB0aGVcbiAqIHRvc3Mgb2YgYSBjb2luLCB3aGVyZSBcIjFcIiBpcyBkZWZpbmVkIHRvIG1lYW4gXCJoZWFkc1wiIGFuZCBcIjBcIiBpcyBkZWZpbmVkXG4gKiB0byBtZWFuIFwidGFpbHNcIiAob3IgdmljZSB2ZXJzYSkuIEl0IGlzXG4gKiBhIHNwZWNpYWwgY2FzZSBvZiBhIEJpbm9taWFsIERpc3RyaWJ1dGlvblxuICogd2hlcmUgYG5gID0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcCBpbnB1dCB2YWx1ZSwgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZVxuICogQHJldHVybnMge251bWJlcltdfSB2YWx1ZXMgb2YgYmVybm91bGxpIGRpc3RyaWJ1dGlvbiBhdCB0aGlzIHBvaW50XG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgcCBpcyBvdXRzaWRlIDAgYW5kIDFcbiAqIEBleGFtcGxlXG4gKiBiZXJub3VsbGlEaXN0cmlidXRpb24oMC4zKTsgLy8gPT4gWzAuNywgMC4zXVxuICovXG5mdW5jdGlvbiBiZXJub3VsbGlEaXN0cmlidXRpb24ocC8qOiBudW1iZXIgKi8pIC8qOiBudW1iZXJbXSAqLyB7XG4gICAgLy8gQ2hlY2sgdGhhdCBgcGAgaXMgYSB2YWxpZCBwcm9iYWJpbGl0eSAoMCDiiaQgcCDiiaQgMSlcbiAgICBpZiAocCA8IDAgfHwgcCA+IDEgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmVybm91bGxpRGlzdHJpYnV0aW9uIHJlcXVpcmVzIHByb2JhYmlsaXR5IHRvIGJlIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWzEgLSBwLCBwXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmVybm91bGxpRGlzdHJpYnV0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2Jlcm5vdWxsaV9kaXN0cmlidXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuXG4vKipcbiAqIFRoZSBbQmlub21pYWwgRGlzdHJpYnV0aW9uXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpbm9taWFsX2Rpc3RyaWJ1dGlvbikgaXMgdGhlIGRpc2NyZXRlIHByb2JhYmlsaXR5XG4gKiBkaXN0cmlidXRpb24gb2YgdGhlIG51bWJlciBvZiBzdWNjZXNzZXMgaW4gYSBzZXF1ZW5jZSBvZiBuIGluZGVwZW5kZW50IHllcy9ubyBleHBlcmltZW50cywgZWFjaCBvZiB3aGljaCB5aWVsZHNcbiAqIHN1Y2Nlc3Mgd2l0aCBwcm9iYWJpbGl0eSBgcHJvYmFiaWxpdHlgLiBTdWNoIGEgc3VjY2Vzcy9mYWlsdXJlIGV4cGVyaW1lbnQgaXMgYWxzbyBjYWxsZWQgYSBCZXJub3VsbGkgZXhwZXJpbWVudCBvclxuICogQmVybm91bGxpIHRyaWFsOyB3aGVuIHRyaWFscyA9IDEsIHRoZSBCaW5vbWlhbCBEaXN0cmlidXRpb24gaXMgYSBCZXJub3VsbGkgRGlzdHJpYnV0aW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0cmlhbHMgbnVtYmVyIG9mIHRyaWFscyB0byBzaW11bGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHByb2JhYmlsaXR5XG4gKiBAcmV0dXJucyB7bnVtYmVyW119IG91dHB1dFxuICovXG5mdW5jdGlvbiBiaW5vbWlhbERpc3RyaWJ1dGlvbihcbiAgICB0cmlhbHMvKjogbnVtYmVyICovLFxuICAgIHByb2JhYmlsaXR5Lyo6IG51bWJlciAqLykvKjogP251bWJlcltdICovIHtcbiAgICAvLyBDaGVjayB0aGF0IGBwYCBpcyBhIHZhbGlkIHByb2JhYmlsaXR5ICgwIOKJpCBwIOKJpCAxKSxcbiAgICAvLyB0aGF0IGBuYCBpcyBhbiBpbnRlZ2VyLCBzdHJpY3RseSBwb3NpdGl2ZS5cbiAgICBpZiAocHJvYmFiaWxpdHkgPCAwIHx8IHByb2JhYmlsaXR5ID4gMSB8fFxuICAgICAgICB0cmlhbHMgPD0gMCB8fCB0cmlhbHMgJSAxICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gV2UgaW5pdGlhbGl6ZSBgeGAsIHRoZSByYW5kb20gdmFyaWFibGUsIGFuZCBgYWNjdW11bGF0b3JgLCBhbiBhY2N1bXVsYXRvclxuICAgIC8vIGZvciB0aGUgY3VtdWxhdGl2ZSBkaXN0cmlidXRpb24gZnVuY3Rpb24gdG8gMC4gYGRpc3RyaWJ1dGlvbl9mdW5jdGlvbnNgXG4gICAgLy8gaXMgdGhlIG9iamVjdCB3ZSdsbCByZXR1cm4gd2l0aCB0aGUgYHByb2JhYmlsaXR5X29mX3hgIGFuZCB0aGVcbiAgICAvLyBgY3VtdWxhdGl2ZVByb2JhYmlsaXR5X29mX3hgLCBhcyB3ZWxsIGFzIHRoZSBjYWxjdWxhdGVkIG1lYW4gJlxuICAgIC8vIHZhcmlhbmNlLiBXZSBpdGVyYXRlIHVudGlsIHRoZSBgY3VtdWxhdGl2ZVByb2JhYmlsaXR5X29mX3hgIGlzXG4gICAgLy8gd2l0aGluIGBlcHNpbG9uYCBvZiAxLjAuXG4gICAgdmFyIHggPSAwLFxuICAgICAgICBjdW11bGF0aXZlUHJvYmFiaWxpdHkgPSAwLFxuICAgICAgICBjZWxscyA9IFtdLFxuICAgICAgICBiaW5vbWlhbENvZWZmaWNpZW50ID0gMTtcblxuICAgIC8vIFRoaXMgYWxnb3JpdGhtIGl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwb3RlbnRpYWwgb3V0Y29tZSxcbiAgICAvLyB1bnRpbCB0aGUgYGN1bXVsYXRpdmVQcm9iYWJpbGl0eWAgaXMgdmVyeSBjbG9zZSB0byAxLCBhdFxuICAgIC8vIHdoaWNoIHBvaW50IHdlJ3ZlIGRlZmluZWQgdGhlIHZhc3QgbWFqb3JpdHkgb2Ygb3V0Y29tZXNcbiAgICBkbyB7XG4gICAgICAgIC8vIGEgW3Byb2JhYmlsaXR5IG1hc3MgZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Byb2JhYmlsaXR5X21hc3NfZnVuY3Rpb24pXG4gICAgICAgIGNlbGxzW3hdID0gYmlub21pYWxDb2VmZmljaWVudCAqXG4gICAgICAgICAgICBNYXRoLnBvdyhwcm9iYWJpbGl0eSwgeCkgKiBNYXRoLnBvdygxIC0gcHJvYmFiaWxpdHksIHRyaWFscyAtIHgpO1xuICAgICAgICBjdW11bGF0aXZlUHJvYmFiaWxpdHkgKz0gY2VsbHNbeF07XG4gICAgICAgIHgrKztcbiAgICAgICAgYmlub21pYWxDb2VmZmljaWVudCA9IGJpbm9taWFsQ29lZmZpY2llbnQgKiAodHJpYWxzIC0geCArIDEpIC8geDtcbiAgICAvLyB3aGVuIHRoZSBjdW11bGF0aXZlUHJvYmFiaWxpdHkgaXMgbmVhcmx5IDEsIHdlJ3ZlIGNhbGN1bGF0ZWRcbiAgICAvLyB0aGUgdXNlZnVsIHJhbmdlIG9mIHRoaXMgZGlzdHJpYnV0aW9uXG4gICAgfSB3aGlsZSAoY3VtdWxhdGl2ZVByb2JhYmlsaXR5IDwgMSAtIGVwc2lsb24pO1xuXG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5vbWlhbERpc3RyaWJ1dGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zdGF0aXN0aWNzL3NyYy9iaW5vbWlhbF9kaXN0cmlidXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuXG4vKipcbiAqIFRoZSBbUG9pc3NvbiBEaXN0cmlidXRpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9pc3Nvbl9kaXN0cmlidXRpb24pXG4gKiBpcyBhIGRpc2NyZXRlIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiB0aGF0IGV4cHJlc3NlcyB0aGUgcHJvYmFiaWxpdHlcbiAqIG9mIGEgZ2l2ZW4gbnVtYmVyIG9mIGV2ZW50cyBvY2N1cnJpbmcgaW4gYSBmaXhlZCBpbnRlcnZhbCBvZiB0aW1lXG4gKiBhbmQvb3Igc3BhY2UgaWYgdGhlc2UgZXZlbnRzIG9jY3VyIHdpdGggYSBrbm93biBhdmVyYWdlIHJhdGUgYW5kXG4gKiBpbmRlcGVuZGVudGx5IG9mIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGV2ZW50LlxuICpcbiAqIFRoZSBQb2lzc29uIERpc3RyaWJ1dGlvbiBpcyBjaGFyYWN0ZXJpemVkIGJ5IHRoZSBzdHJpY3RseSBwb3NpdGl2ZVxuICogbWVhbiBhcnJpdmFsIG9yIG9jY3VycmVuY2UgcmF0ZSwgYM67YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGFtYmRhIGxvY2F0aW9uIHBvaXNzb24gZGlzdHJpYnV0aW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyW119IHZhbHVlcyBvZiBwb2lzc29uIGRpc3RyaWJ1dGlvbiBhdCB0aGF0IHBvaW50XG4gKi9cbmZ1bmN0aW9uIHBvaXNzb25EaXN0cmlidXRpb24obGFtYmRhLyo6IG51bWJlciAqLykgLyo6ID9udW1iZXJbXSAqLyB7XG4gICAgLy8gQ2hlY2sgdGhhdCBsYW1iZGEgaXMgc3RyaWN0bHkgcG9zaXRpdmVcbiAgICBpZiAobGFtYmRhIDw9IDApIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4gICAgLy8gb3VyIGN1cnJlbnQgcGxhY2UgaW4gdGhlIGRpc3RyaWJ1dGlvblxuICAgIHZhciB4ID0gMCxcbiAgICAgICAgLy8gYW5kIHdlIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgY3VtdWxhdGl2ZSBwcm9iYWJpbGl0eSwgaW5cbiAgICAgICAgLy8gb3JkZXIgdG8ga25vdyB3aGVuIHRvIHN0b3AgY2FsY3VsYXRpbmcgY2hhbmNlcy5cbiAgICAgICAgY3VtdWxhdGl2ZVByb2JhYmlsaXR5ID0gMCxcbiAgICAgICAgLy8gdGhlIGNhbGN1bGF0ZWQgY2VsbHMgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgY2VsbHMgPSBbXSxcbiAgICAgICAgZmFjdG9yaWFsWCA9IDE7XG5cbiAgICAvLyBUaGlzIGFsZ29yaXRobSBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggcG90ZW50aWFsIG91dGNvbWUsXG4gICAgLy8gdW50aWwgdGhlIGBjdW11bGF0aXZlUHJvYmFiaWxpdHlgIGlzIHZlcnkgY2xvc2UgdG8gMSwgYXRcbiAgICAvLyB3aGljaCBwb2ludCB3ZSd2ZSBkZWZpbmVkIHRoZSB2YXN0IG1ham9yaXR5IG9mIG91dGNvbWVzXG4gICAgZG8ge1xuICAgICAgICAvLyBhIFtwcm9iYWJpbGl0eSBtYXNzIGZ1bmN0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9iYWJpbGl0eV9tYXNzX2Z1bmN0aW9uKVxuICAgICAgICBjZWxsc1t4XSA9IChNYXRoLmV4cCgtbGFtYmRhKSAqIE1hdGgucG93KGxhbWJkYSwgeCkpIC8gZmFjdG9yaWFsWDtcbiAgICAgICAgY3VtdWxhdGl2ZVByb2JhYmlsaXR5ICs9IGNlbGxzW3hdO1xuICAgICAgICB4Kys7XG4gICAgICAgIGZhY3RvcmlhbFggKj0geDtcbiAgICAvLyB3aGVuIHRoZSBjdW11bGF0aXZlUHJvYmFiaWxpdHkgaXMgbmVhcmx5IDEsIHdlJ3ZlIGNhbGN1bGF0ZWRcbiAgICAvLyB0aGUgdXNlZnVsIHJhbmdlIG9mIHRoaXMgZGlzdHJpYnV0aW9uXG4gICAgfSB3aGlsZSAoY3VtdWxhdGl2ZVByb2JhYmlsaXR5IDwgMSAtIGVwc2lsb24pO1xuXG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwb2lzc29uRGlzdHJpYnV0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3BvaXNzb25fZGlzdHJpYnV0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQGZsb3cgKi9cblxuaW1wb3J0IGNoaVNxdWFyZWREaXN0cmlidXRpb25UYWJsZSBmcm9tICcuL2NoaV9zcXVhcmVkX2Rpc3RyaWJ1dGlvbl90YWJsZSc7XG5pbXBvcnQgbWVhbiBmcm9tICcuL21lYW4nO1xuXG4vKipcbiAqIFRoZSBbz4cyIChDaGktU3F1YXJlZCkgR29vZG5lc3Mtb2YtRml0IFRlc3RdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR29vZG5lc3Nfb2ZfZml0I1BlYXJzb24uMjdzX2NoaS1zcXVhcmVkX3Rlc3QpXG4gKiB1c2VzIGEgbWVhc3VyZSBvZiBnb29kbmVzcyBvZiBmaXQgd2hpY2ggaXMgdGhlIHN1bSBvZiBkaWZmZXJlbmNlcyBiZXR3ZWVuIG9ic2VydmVkIGFuZCBleHBlY3RlZCBvdXRjb21lIGZyZXF1ZW5jaWVzXG4gKiAodGhhdCBpcywgY291bnRzIG9mIG9ic2VydmF0aW9ucyksIGVhY2ggc3F1YXJlZCBhbmQgZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIG9ic2VydmF0aW9ucyBleHBlY3RlZCBnaXZlbiB0aGVcbiAqIGh5cG90aGVzaXplZCBkaXN0cmlidXRpb24uIFRoZSByZXN1bHRpbmcgz4cyIHN0YXRpc3RpYywgYGNoaVNxdWFyZWRgLCBjYW4gYmUgY29tcGFyZWQgdG8gdGhlIGNoaS1zcXVhcmVkIGRpc3RyaWJ1dGlvblxuICogdG8gZGV0ZXJtaW5lIHRoZSBnb29kbmVzcyBvZiBmaXQuIEluIG9yZGVyIHRvIGRldGVybWluZSB0aGUgZGVncmVlcyBvZiBmcmVlZG9tIG9mIHRoZSBjaGktc3F1YXJlZCBkaXN0cmlidXRpb24sIG9uZVxuICogdGFrZXMgdGhlIHRvdGFsIG51bWJlciBvZiBvYnNlcnZlZCBmcmVxdWVuY2llcyBhbmQgc3VidHJhY3RzIHRoZSBudW1iZXIgb2YgZXN0aW1hdGVkIHBhcmFtZXRlcnMuIFRoZSB0ZXN0IHN0YXRpc3RpY1xuICogZm9sbG93cywgYXBwcm94aW1hdGVseSwgYSBjaGktc3F1YXJlIGRpc3RyaWJ1dGlvbiB3aXRoIChrIOKIkiBjKSBkZWdyZWVzIG9mIGZyZWVkb20gd2hlcmUgYGtgIGlzIHRoZSBudW1iZXIgb2Ygbm9uLWVtcHR5XG4gKiBjZWxscyBhbmQgYGNgIGlzIHRoZSBudW1iZXIgb2YgZXN0aW1hdGVkIHBhcmFtZXRlcnMgZm9yIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXN0cmlidXRpb25UeXBlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcG9pbnQgaW4gYSBkaXN0cmlidXRpb246XG4gKiBmb3IgaW5zdGFuY2UsIGJpbm9taWFsLCBiZXJub3VsbGksIG9yIHBvaXNzb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWduaWZpY2FuY2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGNoaSBzcXVhcmVkIGdvb2RuZXNzIG9mIGZpdFxuICogQGV4YW1wbGVcbiAqIC8vIERhdGEgZnJvbSBQb2lzc29uIGdvb2RuZXNzLW9mLWZpdCBleGFtcGxlIDEwLTE5IGluIFdpbGxpYW0gVy4gSGluZXMgJiBEb3VnbGFzIEMuIE1vbnRnb21lcnksXG4gKiAvLyBcIlByb2JhYmlsaXR5IGFuZCBTdGF0aXN0aWNzIGluIEVuZ2luZWVyaW5nIGFuZCBNYW5hZ2VtZW50IFNjaWVuY2VcIiwgV2lsZXkgKDE5ODApLlxuICogdmFyIGRhdGExMDE5ID0gW1xuICogICAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gKiAgICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAqICAgICAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLFxuICogICAgIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsXG4gKiAgICAgMywgMywgMywgM1xuICogXTtcbiAqIHNzLmNoaVNxdWFyZWRHb29kbmVzc09mRml0KGRhdGExMDE5LCBzcy5wb2lzc29uRGlzdHJpYnV0aW9uLCAwLjA1KTsgLy89IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNoaVNxdWFyZWRHb29kbmVzc09mRml0KFxuICAgIGRhdGEvKjogQXJyYXk8bnVtYmVyPiAqLyxcbiAgICBkaXN0cmlidXRpb25UeXBlLyo6IEZ1bmN0aW9uICovLFxuICAgIHNpZ25pZmljYW5jZS8qOiBudW1iZXIgKi8pLyo6IGJvb2xlYW4gKi8ge1xuICAgIC8vIEVzdGltYXRlIGZyb20gdGhlIHNhbXBsZSBkYXRhLCBhIHdlaWdodGVkIG1lYW4uXG4gICAgdmFyIGlucHV0TWVhbiA9IG1lYW4oZGF0YSksXG4gICAgICAgIC8vIENhbGN1bGF0ZWQgdmFsdWUgb2YgdGhlIM+HMiBzdGF0aXN0aWMuXG4gICAgICAgIGNoaVNxdWFyZWQgPSAwLFxuICAgICAgICAvLyBEZWdyZWVzIG9mIGZyZWVkb20sIGNhbGN1bGF0ZWQgYXMgKG51bWJlciBvZiBjbGFzcyBpbnRlcnZhbHMgLVxuICAgICAgICAvLyBudW1iZXIgb2YgaHlwb3RoZXNpemVkIGRpc3RyaWJ1dGlvbiBwYXJhbWV0ZXJzIGVzdGltYXRlZCAtIDEpXG4gICAgICAgIGRlZ3JlZXNPZkZyZWVkb20sXG4gICAgICAgIC8vIE51bWJlciBvZiBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uIHBhcmFtZXRlcnMgZXN0aW1hdGVkLCBleHBlY3RlZCB0byBiZSBzdXBwbGllZCBpbiB0aGUgZGlzdHJpYnV0aW9uIHRlc3QuXG4gICAgICAgIC8vIExvc2Ugb25lIGRlZ3JlZSBvZiBmcmVlZG9tIGZvciBlc3RpbWF0aW5nIGBsYW1iZGFgIGZyb20gdGhlIHNhbXBsZSBkYXRhLlxuICAgICAgICBjID0gMSxcbiAgICAgICAgLy8gVGhlIGh5cG90aGVzaXplZCBkaXN0cmlidXRpb24uXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uLlxuICAgICAgICBoeXBvdGhlc2l6ZWREaXN0cmlidXRpb24gPSBkaXN0cmlidXRpb25UeXBlKGlucHV0TWVhbiksXG4gICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXMgPSBbXSxcbiAgICAgICAgZXhwZWN0ZWRGcmVxdWVuY2llcyA9IFtdLFxuICAgICAgICBrO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IGhvbGRpbmcgYSBoaXN0b2dyYW0gZnJvbSB0aGUgc2FtcGxlIGRhdGEsIG9mXG4gICAgLy8gdGhlIGZvcm0gYHsgdmFsdWU6IG51bWJlck9mT2N1cnJlbmNlcyB9YFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JzZXJ2ZWRGcmVxdWVuY2llc1tkYXRhW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYnNlcnZlZEZyZXF1ZW5jaWVzW2RhdGFbaV1dID0gMDtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlZEZyZXF1ZW5jaWVzW2RhdGFbaV1dKys7XG4gICAgfVxuXG4gICAgLy8gVGhlIGhpc3RvZ3JhbSB3ZSBjcmVhdGVkIG1pZ2h0IGJlIHNwYXJzZSAtIHRoZXJlIG1pZ2h0IGJlIGdhcHNcbiAgICAvLyBiZXR3ZWVuIHZhbHVlcy4gU28gd2UgaXRlcmF0ZSB0aHJvdWdoIHRoZSBoaXN0b2dyYW0sIG1ha2luZ1xuICAgIC8vIHN1cmUgdGhhdCBpbnN0ZWFkIG9mIHVuZGVmaW5lZCwgZ2FwcyBoYXZlIDAgdmFsdWVzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBvYnNlcnZlZEZyZXF1ZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYnNlcnZlZEZyZXF1ZW5jaWVzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXNbaV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IGhvbGRpbmcgYSBoaXN0b2dyYW0gb2YgZXhwZWN0ZWQgZGF0YSBnaXZlbiB0aGVcbiAgICAvLyBzYW1wbGUgc2l6ZSBhbmQgaHlwb3RoZXNpemVkIGRpc3RyaWJ1dGlvbi5cbiAgICBmb3IgKGsgaW4gaHlwb3RoZXNpemVkRGlzdHJpYnV0aW9uKSB7XG4gICAgICAgIGlmIChrIGluIG9ic2VydmVkRnJlcXVlbmNpZXMpIHtcbiAgICAgICAgICAgIGV4cGVjdGVkRnJlcXVlbmNpZXNbK2tdID0gaHlwb3RoZXNpemVkRGlzdHJpYnV0aW9uW2tdICogZGF0YS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXb3JraW5nIGJhY2t3YXJkIHRocm91Z2ggdGhlIGV4cGVjdGVkIGZyZXF1ZW5jaWVzLCBjb2xsYXBzZSBjbGFzc2VzXG4gICAgLy8gaWYgbGVzcyB0aGFuIHRocmVlIG9ic2VydmF0aW9ucyBhcmUgZXhwZWN0ZWQgZm9yIGEgY2xhc3MuXG4gICAgLy8gVGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBvYnNlcnZlZCBmcmVxdWVuY2llcyBhcyB3ZWxsLlxuICAgIGZvciAoayA9IGV4cGVjdGVkRnJlcXVlbmNpZXMubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkRnJlcXVlbmNpZXNba10gPCAzKSB7XG4gICAgICAgICAgICBleHBlY3RlZEZyZXF1ZW5jaWVzW2sgLSAxXSArPSBleHBlY3RlZEZyZXF1ZW5jaWVzW2tdO1xuICAgICAgICAgICAgZXhwZWN0ZWRGcmVxdWVuY2llcy5wb3AoKTtcblxuICAgICAgICAgICAgb2JzZXJ2ZWRGcmVxdWVuY2llc1trIC0gMV0gKz0gb2JzZXJ2ZWRGcmVxdWVuY2llc1trXTtcbiAgICAgICAgICAgIG9ic2VydmVkRnJlcXVlbmNpZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHNxdWFyZWQgZGlmZmVyZW5jZXMgYmV0d2VlbiBvYnNlcnZlZCAmIGV4cGVjdGVkXG4gICAgLy8gZnJlcXVlbmNpZXMsIGFjY3VtdWxhdGluZyB0aGUgYGNoaVNxdWFyZWRgIHN0YXRpc3RpYy5cbiAgICBmb3IgKGsgPSAwOyBrIDwgb2JzZXJ2ZWRGcmVxdWVuY2llcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBjaGlTcXVhcmVkICs9IE1hdGgucG93KFxuICAgICAgICAgICAgb2JzZXJ2ZWRGcmVxdWVuY2llc1trXSAtIGV4cGVjdGVkRnJlcXVlbmNpZXNba10sIDIpIC9cbiAgICAgICAgICAgIGV4cGVjdGVkRnJlcXVlbmNpZXNba107XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGRlZ3JlZXMgb2YgZnJlZWRvbSBmb3IgdGhpcyB0ZXN0IGFuZCBsb29rIGl0IHVwIGluIHRoZVxuICAgIC8vIGBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGVgIGluIG9yZGVyIHRvXG4gICAgLy8gYWNjZXB0IG9yIHJlamVjdCB0aGUgZ29vZG5lc3Mtb2YtZml0IG9mIHRoZSBoeXBvdGhlc2l6ZWQgZGlzdHJpYnV0aW9uLlxuICAgIGRlZ3JlZXNPZkZyZWVkb20gPSBvYnNlcnZlZEZyZXF1ZW5jaWVzLmxlbmd0aCAtIGMgLSAxO1xuICAgIHJldHVybiBjaGlTcXVhcmVkRGlzdHJpYnV0aW9uVGFibGVbZGVncmVlc09mRnJlZWRvbV1bc2lnbmlmaWNhbmNlXSA8IGNoaVNxdWFyZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoaVNxdWFyZWRHb29kbmVzc09mRml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2NoaV9zcXVhcmVkX2dvb2RuZXNzX29mX2ZpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBpbnRlcnF1YXJ0aWxlUmFuZ2UgZnJvbSAnLi9pbnRlcnF1YXJ0aWxlX3JhbmdlJztcbmltcG9ydCBzdGRkZXYgZnJvbSAnLi9zYW1wbGVfc3RhbmRhcmRfZGV2aWF0aW9uJztcblxudmFyIFNRUlRfMlBJID0gTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKTtcblxuLyoqXG4gKiBbV2VsbC1rbm93biBrZXJuZWxzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXJuZWxfKHN0YXRpc3RpY3MpI0tlcm5lbF9mdW5jdGlvbnNfaW5fY29tbW9uX3VzZSlcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBrZXJuZWxzIC8qOiB7W3N0cmluZ106IChudW1iZXIpID0+IG51bWJlcn0gKi8gPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGdhdXNzaWFuIGtlcm5lbC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGdhdXNzaWFuOiBmdW5jdGlvbiAodSkge1xuICAgICAgICByZXR1cm4gTWF0aC5leHAoLTAuNSAqIHUgKiB1KSAvIFNRUlRfMlBJO1xuICAgIH1cbn07XG5cbi8qKlxuICogV2VsbCBrbm93biBiYW5kd2lkdGggc2VsZWN0aW9uIG1ldGhvZHNcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBiYW5kd2lkdGhNZXRob2RzIC8qOiB7W3N0cmluZ106IChBcnJheTxudW1iZXI+KSA9PiBudW1iZXJ9ICovID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBbXCJub3JtYWwgcmVmZXJlbmNlIGRpc3RyaWJ1dGlvblwiXG4gICAgICogcnVsZS1vZi10aHVtYl0oaHR0cHM6Ly9zdGF0LmV0aHouY2gvUi1tYW51YWwvUi1kZXZlbC9saWJyYXJ5L01BU1MvaHRtbC9iYW5kd2lkdGgubnJkLmh0bWwpLFxuICAgICAqIGEgY29tbW9ubHkgdXNlZCB2ZXJzaW9uIG9mIFtTaWx2ZXJtYW4nc1xuICAgICAqIHJ1bGUtb2YtdGh1bWJdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0tlcm5lbF9kZW5zaXR5X2VzdGltYXRpb24jQV9ydWxlLW9mLXRodW1iX2JhbmR3aWR0aF9lc3RpbWF0b3IpLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbnJkOiBmdW5jdGlvbiAoeCAvKjogQXJyYXk8bnVtYmVyPiAqLykge1xuICAgICAgICB2YXIgcyA9IHN0ZGRldih4KTtcbiAgICAgICAgdmFyIGlxciA9IGludGVycXVhcnRpbGVSYW5nZSh4KTtcbiAgICAgICAgaWYgKHR5cGVvZiBpcXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzID0gTWF0aC5taW4ocywgaXFyIC8gMS4zNClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMS4wNiAqIHMgKiBNYXRoLnBvdyh4Lmxlbmd0aCwgLTAuMik7XG4gICAgfVxufVxuXG4vKipcbiAqIFtLZXJuZWwgZGVuc2l0eSBlc3RpbWF0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXJuZWxfZGVuc2l0eV9lc3RpbWF0aW9uKVxuICogaXMgYSB1c2VmdWwgdG9vbCBmb3IsIGFtb25nIG90aGVyIHRoaW5ncywgZXN0aW1hdGluZyB0aGUgc2hhcGUgb2YgdGhlXG4gKiB1bmRlcmx5aW5nIHByb2JhYmlsaXR5IGRpc3RyaWJ1dGlvbiBmcm9tIGEgc2FtcGxlLlxuICpcbiAqIEBuYW1lIGtlcm5lbERlbnNpdHlFc3RpbWF0aW9uXG4gKiBAcGFyYW0gWCBzYW1wbGUgdmFsdWVzXG4gKiBAcGFyYW0ga2VybmVsIFRoZSBrZXJuZWwgZnVuY3Rpb24gdG8gdXNlLiBJZiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCBpdCBzaG91bGQgcmV0dXJuIG5vbi1uZWdhdGl2ZSB2YWx1ZXMgYW5kIGludGVncmF0ZSB0byAxLiBEZWZhdWx0cyB0byAnZ2F1c3NpYW4nLlxuICogQHBhcmFtIGJhbmR3aWR0aE1ldGhvZCBUaGUgXCJiYW5kd2lkdGggc2VsZWN0aW9uXCIgbWV0aG9kIHRvIHVzZSwgb3IgYSBmaXhlZCBiYW5kd2lkdGggdmFsdWUuIERlZmF1bHRzIHRvIFwibnJkXCIsIHRoZSBjb21tb25seS11c2VkIFtcIm5vcm1hbCByZWZlcmVuY2UgZGlzdHJpYnV0aW9uXCIgcnVsZS1vZi10aHVtYl0oaHR0cHM6Ly9zdGF0LmV0aHouY2gvUi1tYW51YWwvUi1kZXZlbC9saWJyYXJ5L01BU1MvaHRtbC9iYW5kd2lkdGgubnJkLmh0bWwpLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBbiBlc3RpbWF0ZWQgW3Byb2JhYmlsaXR5IGRlbnNpdHkgZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Byb2JhYmlsaXR5X2RlbnNpdHlfZnVuY3Rpb24pIGZvciB0aGUgZ2l2ZW4gc2FtcGxlLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gcnVucyBpbiBgTyhYLmxlbmd0aClgLlxuICovXG5mdW5jdGlvbiBrZXJuZWxEZW5zaXR5RXN0aW1hdGlvbihcbiAgICBYIC8qOiBBcnJheTxudW1iZXI+ICovLFxuICAgIGtlcm5lbCAvKjogJEtleXM8dHlwZW9mIGtlcm5lbHM+IHwgKChudW1iZXIpID0+IG51bWJlcikgfCB2b2lkKi8sXG4gICAgYmFuZHdpZHRoTWV0aG9kIC8qOiAkS2V5czx0eXBlb2YgYmFuZHdpZHRoTWV0aG9kcz4gfCBudW1iZXIgfCB2b2lkKi9cbikge1xuICAgIHZhciBrZXJuZWxGbi8qOiAobnVtYmVyKSA9PiBudW1iZXIgKi87XG4gICAgaWYgKGtlcm5lbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVscy5nYXVzc2lhbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBrZXJuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgha2VybmVsc1trZXJuZWxdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24ga2VybmVsIFwiJyArIGtlcm5lbCArICdcIicpO1xuICAgICAgICB9XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVsc1trZXJuZWxdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtlcm5lbEZuID0ga2VybmVsO1xuICAgIH1cblxuICAgIHZhciBiYW5kd2lkdGg7XG4gICAgaWYgKHR5cGVvZiBiYW5kd2lkdGhNZXRob2QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGJhbmR3aWR0aCA9IGJhbmR3aWR0aE1ldGhvZHMubnJkKFgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJhbmR3aWR0aE1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCFiYW5kd2lkdGhNZXRob2RzW2JhbmR3aWR0aE1ldGhvZF0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBiYW5kd2lkdGggbWV0aG9kIFwiJyArIGJhbmR3aWR0aE1ldGhvZCArICdcIicpO1xuICAgICAgICB9XG4gICAgICAgIGJhbmR3aWR0aCA9IGJhbmR3aWR0aE1ldGhvZHNbYmFuZHdpZHRoTWV0aG9kXShYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiYW5kd2lkdGggPSBiYW5kd2lkdGhNZXRob2Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4IC8qOiBudW1iZXIqLykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgWC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGtlcm5lbEZuKCh4IC0gWFtpXSkgLyBiYW5kd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW0gLyBiYW5kd2lkdGggLyBYLmxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGtlcm5lbERlbnNpdHlFc3RpbWF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2tlcm5lbF9kZW5zaXR5X2VzdGltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG4vKipcbiAqIFRoZSBbWi1TY29yZSwgb3IgU3RhbmRhcmQgU2NvcmVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3RhbmRhcmRfc2NvcmUpLlxuICpcbiAqIFRoZSBzdGFuZGFyZCBzY29yZSBpcyB0aGUgbnVtYmVyIG9mIHN0YW5kYXJkIGRldmlhdGlvbnMgYW4gb2JzZXJ2YXRpb25cbiAqIG9yIGRhdHVtIGlzIGFib3ZlIG9yIGJlbG93IHRoZSBtZWFuLiBUaHVzLCBhIHBvc2l0aXZlIHN0YW5kYXJkIHNjb3JlXG4gKiByZXByZXNlbnRzIGEgZGF0dW0gYWJvdmUgdGhlIG1lYW4sIHdoaWxlIGEgbmVnYXRpdmUgc3RhbmRhcmQgc2NvcmVcbiAqIHJlcHJlc2VudHMgYSBkYXR1bSBiZWxvdyB0aGUgbWVhbi4gSXQgaXMgYSBkaW1lbnNpb25sZXNzIHF1YW50aXR5XG4gKiBvYnRhaW5lZCBieSBzdWJ0cmFjdGluZyB0aGUgcG9wdWxhdGlvbiBtZWFuIGZyb20gYW4gaW5kaXZpZHVhbCByYXdcbiAqIHNjb3JlIGFuZCB0aGVuIGRpdmlkaW5nIHRoZSBkaWZmZXJlbmNlIGJ5IHRoZSBwb3B1bGF0aW9uIHN0YW5kYXJkXG4gKiBkZXZpYXRpb24uXG4gKlxuICogVGhlIHotc2NvcmUgaXMgb25seSBkZWZpbmVkIGlmIG9uZSBrbm93cyB0aGUgcG9wdWxhdGlvbiBwYXJhbWV0ZXJzO1xuICogaWYgb25lIG9ubHkgaGFzIGEgc2FtcGxlIHNldCwgdGhlbiB0aGUgYW5hbG9nb3VzIGNvbXB1dGF0aW9uIHdpdGhcbiAqIHNhbXBsZSBtZWFuIGFuZCBzYW1wbGUgc3RhbmRhcmQgZGV2aWF0aW9uIHlpZWxkcyB0aGVcbiAqIFN0dWRlbnQncyB0LXN0YXRpc3RpYy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IG1lYW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFuZGFyZERldmlhdGlvblxuICogQHJldHVybiB7bnVtYmVyfSB6IHNjb3JlXG4gKiBAZXhhbXBsZVxuICogelNjb3JlKDc4LCA4MCwgNSk7IC8vID0+IC0wLjRcbiAqL1xuZnVuY3Rpb24gelNjb3JlKHgvKjpudW1iZXIqLywgbWVhbi8qOm51bWJlciovLCBzdGFuZGFyZERldmlhdGlvbi8qOm51bWJlciovKS8qOm51bWJlciovIHtcbiAgICByZXR1cm4gKHggLSBtZWFuKSAvIHN0YW5kYXJkRGV2aWF0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB6U2NvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvel9zY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzdGFuZGFyZE5vcm1hbFRhYmxlIGZyb20gJy4vc3RhbmRhcmRfbm9ybWFsX3RhYmxlJztcblxuLyoqXG4gKiAqKltDdW11bGF0aXZlIFN0YW5kYXJkIE5vcm1hbCBQcm9iYWJpbGl0eV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdGFuZGFyZF9ub3JtYWxfdGFibGUpKipcbiAqXG4gKiBTaW5jZSBwcm9iYWJpbGl0eSB0YWJsZXMgY2Fubm90IGJlXG4gKiBwcmludGVkIGZvciBldmVyeSBub3JtYWwgZGlzdHJpYnV0aW9uLCBhcyB0aGVyZSBhcmUgYW4gaW5maW5pdGUgdmFyaWV0eVxuICogb2Ygbm9ybWFsIGRpc3RyaWJ1dGlvbnMsIGl0IGlzIGNvbW1vbiBwcmFjdGljZSB0byBjb252ZXJ0IGEgbm9ybWFsIHRvIGFcbiAqIHN0YW5kYXJkIG5vcm1hbCBhbmQgdGhlbiB1c2UgdGhlIHN0YW5kYXJkIG5vcm1hbCB0YWJsZSB0byBmaW5kIHByb2JhYmlsaXRpZXMuXG4gKlxuICogWW91IGNhbiB1c2UgYC41ICsgLjUgKiBlcnJvckZ1bmN0aW9uKHggLyBNYXRoLnNxcnQoMikpYCB0byBjYWxjdWxhdGUgdGhlIHByb2JhYmlsaXR5XG4gKiBpbnN0ZWFkIG9mIGxvb2tpbmcgaXQgdXAgaW4gYSB0YWJsZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gelxuICogQHJldHVybnMge251bWJlcn0gY3VtdWxhdGl2ZSBzdGFuZGFyZCBub3JtYWwgcHJvYmFiaWxpdHlcbiAqL1xuZnVuY3Rpb24gY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5KHogLyo6bnVtYmVyICovKS8qOm51bWJlciAqLyB7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoaXMgdmFsdWUuXG4gICAgdmFyIGFic1ogPSBNYXRoLmFicyh6KSxcbiAgICAgICAgLy8gRWFjaCByb3cgYmVnaW5zIHdpdGggYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gc2lnbmlmaWNhbnQgZGlnaXQ6IDAuNSwgMC42LCAwLjcsIGFuZCBzbyBvbi4gRWFjaCB2YWx1ZSBpbiB0aGUgdGFibGVcbiAgICAgICAgLy8gY29ycmVzcG9uZHMgdG8gYSByYW5nZSBvZiAwLjAxIGluIHRoZSBpbnB1dCB2YWx1ZXMsIHNvIHRoZSB2YWx1ZSBpc1xuICAgICAgICAvLyBtdWx0aXBsaWVkIGJ5IDEwMC5cbiAgICAgICAgaW5kZXggPSBNYXRoLm1pbihNYXRoLnJvdW5kKGFic1ogKiAxMDApLCBzdGFuZGFyZE5vcm1hbFRhYmxlLmxlbmd0aCAtIDEpO1xuXG4gICAgLy8gVGhlIGluZGV4IHdlIGNhbGN1bGF0ZSBtdXN0IGJlIGluIHRoZSB0YWJsZSBhcyBhIHBvc2l0aXZlIHZhbHVlLFxuICAgIC8vIGJ1dCB3ZSBzdGlsbCBwYXkgYXR0ZW50aW9uIHRvIHdoZXRoZXIgdGhlIGlucHV0IGlzIHBvc2l0aXZlXG4gICAgLy8gb3IgbmVnYXRpdmUsIGFuZCBmbGlwIHRoZSBvdXRwdXQgdmFsdWUgYXMgYSBsYXN0IHN0ZXAuXG4gICAgaWYgKHogPj0gMCkge1xuICAgICAgICByZXR1cm4gc3RhbmRhcmROb3JtYWxUYWJsZVtpbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZHVlIHRvIGZsb2F0aW5nLXBvaW50IGFyaXRobWV0aWMsIHZhbHVlcyBpbiB0aGUgdGFibGUgd2l0aFxuICAgICAgICAvLyA0IHNpZ25pZmljYW50IGZpZ3VyZXMgY2FuIG5ldmVydGhlbGVzcyBlbmQgdXAgYXMgcmVwZWF0aW5nXG4gICAgICAgIC8vIGZyYWN0aW9ucyB3aGVuIHRoZXkncmUgY29tcHV0ZWQgaGVyZS5cbiAgICAgICAgcmV0dXJuICsoMSAtIHN0YW5kYXJkTm9ybWFsVGFibGVbaW5kZXhdKS50b0ZpeGVkKDQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL2N1bXVsYXRpdmVfc3RkX25vcm1hbF9wcm9iYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbi8qKlxuICogKipbR2F1c3NpYW4gZXJyb3IgZnVuY3Rpb25dKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXJyb3JfZnVuY3Rpb24pKipcbiAqXG4gKiBUaGUgYGVycm9yRnVuY3Rpb24oeC8oc2QgKiBNYXRoLnNxcnQoMikpKWAgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgYSB2YWx1ZSBpbiBhXG4gKiBub3JtYWwgZGlzdHJpYnV0aW9uIHdpdGggc3RhbmRhcmQgZGV2aWF0aW9uIHNkIGlzIHdpdGhpbiB4IG9mIHRoZSBtZWFuLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIG51bWVyaWNhbCBhcHByb3hpbWF0aW9uIHRvIHRoZSBleGFjdCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geCBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfSBlcnJvciBlc3RpbWF0aW9uXG4gKiBAZXhhbXBsZVxuICogZXJyb3JGdW5jdGlvbigxKS50b0ZpeGVkKDIpOyAvLyA9PiAnMC44NCdcbiAqL1xuZnVuY3Rpb24gZXJyb3JGdW5jdGlvbih4Lyo6IG51bWJlciAqLykvKjogbnVtYmVyICovIHtcbiAgICB2YXIgdCA9IDEgLyAoMSArIDAuNSAqIE1hdGguYWJzKHgpKTtcbiAgICB2YXIgdGF1ID0gdCAqIE1hdGguZXhwKC1NYXRoLnBvdyh4LCAyKSAtXG4gICAgICAgIDEuMjY1NTEyMjMgK1xuICAgICAgICAxLjAwMDAyMzY4ICogdCArXG4gICAgICAgIDAuMzc0MDkxOTYgKiBNYXRoLnBvdyh0LCAyKSArXG4gICAgICAgIDAuMDk2Nzg0MTggKiBNYXRoLnBvdyh0LCAzKSAtXG4gICAgICAgIDAuMTg2Mjg4MDYgKiBNYXRoLnBvdyh0LCA0KSArXG4gICAgICAgIDAuMjc4ODY4MDcgKiBNYXRoLnBvdyh0LCA1KSAtXG4gICAgICAgIDEuMTM1MjAzOTggKiBNYXRoLnBvdyh0LCA2KSArXG4gICAgICAgIDEuNDg4NTE1ODcgKiBNYXRoLnBvdyh0LCA3KSAtXG4gICAgICAgIDAuODIyMTUyMjMgKiBNYXRoLnBvdyh0LCA4KSArXG4gICAgICAgIDAuMTcwODcyNzcgKiBNYXRoLnBvdyh0LCA5KSk7XG4gICAgaWYgKHggPj0gMCkge1xuICAgICAgICByZXR1cm4gMSAtIHRhdTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGF1IC0gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9yRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvZXJyb3JfZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgZXBzaWxvbiBmcm9tICcuL2Vwc2lsb24nO1xuaW1wb3J0IGludmVyc2VFcnJvckZ1bmN0aW9uIGZyb20gJy4vaW52ZXJzZV9lcnJvcl9mdW5jdGlvbic7XG5cbi8qKlxuICogVGhlIFtQcm9iaXRdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHJvYml0KVxuICogaXMgdGhlIGludmVyc2Ugb2YgY3VtdWxhdGl2ZVN0ZE5vcm1hbFByb2JhYmlsaXR5KCksXG4gKiBhbmQgaXMgYWxzbyBrbm93biBhcyB0aGUgbm9ybWFsIHF1YW50aWxlIGZ1bmN0aW9uLlxuICpcbiAqIEl0IHJldHVybnMgdGhlIG51bWJlciBvZiBzdGFuZGFyZCBkZXZpYXRpb25zIGZyb20gdGhlIG1lYW5cbiAqIHdoZXJlIHRoZSBwJ3RoIHF1YW50aWxlIG9mIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4gYSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICogU28sIGZvciBleGFtcGxlLCBwcm9iaXQoMC41ICsgMC42ODI3LzIpIOKJiCAxIGJlY2F1c2UgNjguMjclIG9mIHZhbHVlcyBhcmVcbiAqIG5vcm1hbGx5IGZvdW5kIHdpdGhpbiAxIHN0YW5kYXJkIGRldmlhdGlvbiBhYm92ZSBvciBiZWxvdyB0aGUgbWVhbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcFxuICogQHJldHVybnMge251bWJlcn0gcHJvYml0XG4gKi9cbmZ1bmN0aW9uIHByb2JpdChwIC8qOiBudW1iZXIgKi8pLyo6IG51bWJlciAqLyB7XG4gICAgaWYgKHAgPT09IDApIHtcbiAgICAgICAgcCA9IGVwc2lsb247XG4gICAgfSBlbHNlIGlmIChwID49IDEpIHtcbiAgICAgICAgcCA9IDEgLSBlcHNpbG9uO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KDIpICogaW52ZXJzZUVycm9yRnVuY3Rpb24oMiAqIHAgLSAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvYml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN0YXRpc3RpY3Mvc3JjL3Byb2JpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIEBmbG93ICovXG5cbmltcG9ydCBzaWduIGZyb20gJy4vc2lnbic7XG5cbi8qKlxuICogW0Jpc2VjdGlvbiBtZXRob2RdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpc2VjdGlvbl9tZXRob2QpIGlzIGEgcm9vdC1maW5kaW5nXG4gKiBtZXRob2QgdGhhdCByZXBlYXRlZGx5IGJpc2VjdHMgYW4gaW50ZXJ2YWwgdG8gZmluZCB0aGUgcm9vdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBudW1lcmljYWwgYXBwcm94aW1hdGlvbiB0byB0aGUgZXhhY3QgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBpbnB1dCBmdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gc3RhcnQgb2YgaW50ZXJ2YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBlbmQgb2YgaW50ZXJ2YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhJdGVyYXRpb25zIC0gdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvclRvbGVyYW5jZSAtIHRoZSBlcnJvciB0b2xlcmFuY2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGVzdGltYXRlZCByb290IHZhbHVlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IEFyZ3VtZW50IGZ1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIGJpc2VjdChNYXRoLmNvcywwLDQsMTAwLDAuMDAzKTsgLy8gPT4gMS41NzIyNjU2MjVcbiAqL1xuZnVuY3Rpb24gYmlzZWN0KFxuICAgIGZ1bmMvKjogKHg6IGFueSkgPT4gbnVtYmVyICovLFxuICAgIHN0YXJ0Lyo6IG51bWJlciAqLyxcbiAgICBlbmQvKjogbnVtYmVyICovLFxuICAgIG1heEl0ZXJhdGlvbnMvKjogbnVtYmVyICovLFxuICAgIGVycm9yVG9sZXJhbmNlLyo6IG51bWJlciAqLykvKjpudW1iZXIqLyB7XG5cbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG5cbiAgICAgICAgaWYgKGZ1bmMob3V0cHV0KSA9PT0gMCB8fCBNYXRoLmFicygoZW5kIC0gc3RhcnQpIC8gMikgPCBlcnJvclRvbGVyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduKGZ1bmMob3V0cHV0KSkgPT09IHNpZ24oZnVuYyhzdGFydCkpKSB7XG4gICAgICAgICAgICBzdGFydCA9IG91dHB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBudW1iZXIgb2YgaXRlcmF0aW9ucyBleGNlZWRlZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaXNlY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3RhdGlzdGljcy9zcmMvYmlzZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2hhcnQ7XG5cbnZhciBfc2ltcGxlU3RhdGlzdGljcyA9IHJlcXVpcmUoJ3NpbXBsZS1zdGF0aXN0aWNzJyk7XG5cbmZ1bmN0aW9uIGFkZENoYXJ0KGxheWVyLCBkYXRhKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHBvcHVsYXRpb24gPSBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkW2xheWVyLmNhdGVnb3JpZXMudG90YWxdO1xuICB9KTtcbiAgdmFyIGNsdXN0ZXJzID0gKDAsIF9zaW1wbGVTdGF0aXN0aWNzLmNrbWVhbnMpKHBvcHVsYXRpb24sIGxheWVyLmNhdGVnb3JpZXMuY2x1c3RlcnMpO1xuXG4gIC8vIGNyZWF0ZSBhIERPTSBlbGVtZW50IGZvciB0aGUgbWFya2VyXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGlzdHJpY3QpIHtcbiAgICB2YXIgdG90YWwgPSBkaXN0cmljdFtsYXllci5jYXRlZ29yaWVzLnRvdGFsXTtcbiAgICB2YXIgY2hhcnRBcnIgPSBbXTtcbiAgICB2YXIgY2hhcnRQcm9wID0gJyc7XG4gICAgdmFyIHByb3BUb3RhbCA9IDA7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHZvaWQgMDtcblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzLnRpdGxlKSB7XG4gICAgICBjaGFydFByb3AgKz0gJzxkaXY+PGI+JyArIGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMudGl0bGVdICsgJzwvYj48L2Rpdj4nO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzWyd0b3RhbC1sYWJlbCddKSB7XG4gICAgICBjaGFydFByb3AgKz0gJzxkaXY+JyArIGxheWVyLmNhdGVnb3JpZXNbJ3RvdGFsLWxhYmVsJ10gKyAnOiA8Yj4nICsgdG90YWwgKyAnPC9iPjwvZGl2Pic7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXllci5jYXRlZ29yaWVzLnByb3BlcnR5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjaGFydEFyci5wdXNoKHtcbiAgICAgICAgY29sb3I6IGxheWVyLmNhdGVnb3JpZXMuY29sb3JbaV0sXG4gICAgICAgIHk6IHBhcnNlSW50KGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDAsIDEwKSxcbiAgICAgICAgbGFiZWw6IGxheWVyLmNhdGVnb3JpZXMubGFiZWxbaV1cbiAgICAgIH0pO1xuICAgICAgcHJvcFRvdGFsICs9IHBhcnNlSW50KGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDAsIDEwKTtcbiAgICAgIGNoYXJ0UHJvcCArPSAnPGRpdj48c3BhbiBjbGFzcz1cInN3YXRjaFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJyArIGxheWVyLmNhdGVnb3JpZXMuY29sb3JbaV0gKyAnO1wiPjwvc3Bhbj5cXG4gICAgICAgICAgJyArIGxheWVyLmNhdGVnb3JpZXMubGFiZWxbaV0gKyAnOlxcbiAgICAgICAgICA8Yj4nICsgKGRpc3RyaWN0W2xheWVyLmNhdGVnb3JpZXMucHJvcGVydHlbaV1dIC8gdG90YWwgKiAxMDApLnRvRml4ZWQoMSkgKyAnJTwvYj48L2Rpdj4nO1xuICAgIH1cblxuICAgIGlmIChsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2UpIHtcbiAgICAgIGNoYXJ0UHJvcCArPSAnPGRpdj48c3BhbiBjbGFzcz1cInN3YXRjaFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJyArIGxheWVyLmNhdGVnb3JpZXMuZGlmZmVyZW5jZVsxXSArICc7XCI+PC9zcGFuPlxcbiAgICAgICAgICAgICcgKyBsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2VbMF0gKyAnOiA8Yj4nICsgKDEwMCAtIHByb3BUb3RhbCkudG9GaXhlZCgxKSArICclPC9iPjwvZGl2Pic7XG4gICAgICBjaGFydEFyci5zcGxpY2UoMCwgMCwge1xuICAgICAgICBjb2xvcjogbGF5ZXIuY2F0ZWdvcmllcy5kaWZmZXJlbmNlWzFdLFxuICAgICAgICB5OiAxMDAgLSBwcm9wVG90YWwsXG4gICAgICAgIGxhYmVsOiBsYXllci5jYXRlZ29yaWVzLmRpZmZlcmVuY2VbMF1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBjbHVzdGVycy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIGlmIChjbHVzdGVyc1tfaV0uaW5jbHVkZXModG90YWwpKSB7XG4gICAgICAgIGRpbWVuc2lvbiA9IGxheWVyLmNhdGVnb3JpZXMuZGltZW5zaW9uW19pXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhcnREYXRhID0gW3tcbiAgICAgIGRhdGE6IGNoYXJ0QXJyLFxuICAgICAgc2l6ZTogbGF5ZXIuY2hhcnQuc2l6ZSxcbiAgICAgIGlubmVyU2l6ZTogbGF5ZXIuY2hhcnQuaW5uZXJTaXplXG4gICAgfV07XG5cbiAgICB2YXIgY29udGVudCA9ICc8ZGl2PjxiPicgKyBkaXN0cmljdFtsYXllci5zb3VyY2Uuam9pblsxXV0gKyAnPC9iPjwvZGl2PicgKyBjaGFydFByb3A7XG5cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pZCA9ICdjaGFydC0nICsgZGlzdHJpY3RbbGF5ZXIuc291cmNlLmpvaW5bMV1dICsgJy0nICsgbGF5ZXIuaWQgKyAnLScgKyBfdGhpcy5wcm9wcy5tYXBJZDtcbiAgICBlbC5jbGFzc05hbWUgPSAnbWFya2VyLWNoYXJ0IG1hcmtlci1jaGFydC0nICsgbGF5ZXIuaWQgKyAnLScgKyBfdGhpcy5wcm9wcy5tYXBJZDtcbiAgICBlbC5zdHlsZS53aWR0aCA9IGxheWVyLmNoYXJ0LndpZHRoO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IGxheWVyLmNoYXJ0LmhlaWdodDtcbiAgICAkKGVsKS5hdHRyKCdkYXRhLW1hcCcsIF90aGlzLnByb3BzLm1hcElkKTtcbiAgICAkKGVsKS5hdHRyKCdkYXRhLWxuZycsIGRpc3RyaWN0W2xheWVyLmNoYXJ0LmNvb3JkaW5hdGVzWzBdXSk7XG4gICAgJChlbCkuYXR0cignZGF0YS1sYXQnLCBkaXN0cmljdFtsYXllci5jaGFydC5jb29yZGluYXRlc1sxXV0pO1xuICAgICQoZWwpLmF0dHIoJ2RhdGEtcG9wdXAnLCBjb250ZW50KTtcblxuICAgIC8vIGFkZCBtYXJrZXIgdG8gbWFwXG4gICAgbmV3IG1hcGJveGdsLk1hcmtlcihlbCwge1xuICAgICAgb2Zmc2V0OiBsYXllci5jaGFydC5vZmZzZXRcbiAgICB9KS5zZXRMbmdMYXQoW2Rpc3RyaWN0W2xheWVyLmNoYXJ0LmNvb3JkaW5hdGVzWzBdXSwgZGlzdHJpY3RbbGF5ZXIuY2hhcnQuY29vcmRpbmF0ZXNbMV1dXSkuYWRkVG8oX3RoaXMubWFwKTtcblxuICAgIHZhciBjb250YWluZXIgPSAkKCcjY2hhcnQtJyArIGRpc3RyaWN0W2xheWVyLnNvdXJjZS5qb2luWzFdXSArICctJyArIGxheWVyLmlkICsgJy0nICsgX3RoaXMucHJvcHMubWFwSWQpWzBdO1xuICAgIE1hcC5kcmF3RG91Z2hudXRDaGFydChjb250YWluZXIsIGNoYXJ0RGF0YSwgZGltZW5zaW9uKTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZENoYXJ0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTGVnZW5kO1xuXG52YXIgX2Zvcm1hdE51bSA9IHJlcXVpcmUoJy4uL3V0aWxzL2Zvcm1hdE51bScpO1xuXG52YXIgX2Zvcm1hdE51bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtYXROdW0pO1xuXG52YXIgX2hleFRvUmdiQSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hleFRvUmdiQScpO1xuXG52YXIgX2hleFRvUmdiQTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXhUb1JnYkEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gYWRkTGVnZW5kKGxheWVyLCBzdG9wcywgZGF0YSwgYnJlYWtzLCBjb2xvcnMpIHtcbiAgLy8gdG9kbzogY2hhbmdlIGZvciBzcGxpdCBtYXBcbiAgdmFyIG1hcElkID0gJzAxJztcblxuICBpZiAoIWxheWVyLnZpc2libGUpIHtcbiAgICAvLyAkKGAjbGVnZW5kLSR7bGF5ZXJJZH0tJHttYXBJZH0gLnNldC1wcmltYXJ5LWxheWVyYCkub2ZmKCdjbGljaycsIHRoaXMuc2V0UHJpbWFyeUxheWVyKTtcbiAgICAkKCcjbGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkKS5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYmFja2dyb3VuZCA9ICcnO1xuICAgIC8vIGxlZ2VuZHMgZm9yIGNpcmNsZSBsYXllcnNcbiAgICBpZiAobGF5ZXIuY3JlZGl0ICYmIGxheWVyLnR5cGUgPT09ICdjaXJjbGUnICYmICFsYXllci5jYXRlZ29yaWVzLnNoYXBlKSB7XG4gICAgICAkKCcubGVnZW5kLicgKyBtYXBJZCkucHJlcGVuZCgnPGRpdiBpZD1cImxlZ2VuZC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCArICdcIlxcbiAgICAgICAgICBjbGFzcz1cImxlZ2VuZC1zaGFwZXMgbGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtc3ltYm9sc1wiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlLXNtXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOicgKyBsYXllci5jYXRlZ29yaWVzLmNvbG9yICsgJztcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGUtbWRcIiBzdHlsZT1cImJhY2tncm91bmQ6JyArIGxheWVyLmNhdGVnb3JpZXMuY29sb3IgKyAnO1wiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZS1sZ1wiIHN0eWxlPVwiYmFja2dyb3VuZDonICsgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvciArICc7XCI+PC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+JyArIGxheWVyLmNyZWRpdCArICc8L3NwYW4+XFxuICAgICAgICA8L2Rpdj4nKTtcblxuICAgICAgLy8gbGVnZW5kcyBmb3Igc3ltYm9sIGxheWVyc1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuY3JlZGl0ICYmIGxheWVyLmNhdGVnb3JpZXMuc2hhcGUgJiYgbGF5ZXIudHlwZSAhPT0gJ2NpcmNsZScpIHtcbiAgICAgIGxheWVyLmNhdGVnb3JpZXMuY29sb3IuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IsIGluZGV4KSB7XG4gICAgICAgIHZhciBzdHlsZSA9IGxheWVyLmNhdGVnb3JpZXMuc2hhcGVbaW5kZXhdID09PSAndHJpYW5nbGUtc3Ryb2tlZC0xMScgfHwgbGF5ZXIuY2F0ZWdvcmllcy5zaGFwZVtpbmRleF0gPT09ICd0cmlhbmdsZS0xNScgPyAnYm9yZGVyLWJvdHRvbS1jb2xvcjonIDogJ2JhY2tncm91bmQ6JztcblxuICAgICAgICBiYWNrZ3JvdW5kICs9ICc8bGkgY2xhc3M9XCJsYXllci1zeW1ib2xzXCI+IDxzcGFuIGNsYXNzPVwiJyArIGxheWVyLmNhdGVnb3JpZXMuc2hhcGVbaW5kZXhdICsgJ1wiIHN0eWxlPVwiJyArIHN0eWxlICsgY29sb3IgKyAnO1wiPjwvc3Bhbj4nICsgbGF5ZXIuY2F0ZWdvcmllcy5sYWJlbFtpbmRleF0gKyAnPC9saT4nO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtc2hhcGVzXCI+XFxuICAgICAgICAgICAgPHVsIHN0eWxlPVwibGVmdDogMDtcIj4nICsgYmFja2dyb3VuZCArICc8L3VsPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+JyArIGxheWVyLmNyZWRpdCArICc8L3NwYW4+XFxuICAgICAgICA8L2Rpdj4nKTtcblxuICAgICAgLy8gbGVnZW5kcyBmb3IgZmlsbCBsYXllcnMgd2l0aCBubyBicmVha3NcbiAgICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci5jYXRlZ29yaWVzLmJyZWFrcyA9PT0gJ25vJykge1xuICAgICAgbGF5ZXIuY2F0ZWdvcmllcy5jb2xvci5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvciwgaW5kZXgpIHtcbiAgICAgICAgYmFja2dyb3VuZCArPSAnPGxpIHN0eWxlPVwiYmFja2dyb3VuZDonICsgY29sb3IgKyAnOyB3aWR0aDonICsgMTAwIC8gbGF5ZXIuY2F0ZWdvcmllcy5jb2xvci5sZW5ndGggKyAnJTtcIj4nICsgbGF5ZXIuY2F0ZWdvcmllcy5sYWJlbFtpbmRleF0gKyAnPC9saT4nO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtZmlsbCAnICsgKGxheWVyLmNhdGVnb3JpZXMgPyAnbGVnZW5kLWxhYmVsJyA6ICcnKSArICdcIj5cXG4gICAgICAgICAgICA8dWw+JyArIGJhY2tncm91bmQgKyAnPC91bD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxzcGFuPicgKyBsYXllci5jcmVkaXQgKyAnPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+Jyk7XG5cbiAgICAgIC8vIGxlZ2VuZHMgZm9yIGZpbGwgbGF5cnMgd2l0aCBicmVha3NcbiAgICB9IGVsc2UgaWYgKGxheWVyLmNyZWRpdCAmJiBsYXllci50eXBlICE9PSAnY2lyY2xlJyAmJiBsYXllci50eXBlICE9PSAnY2hhcnQnKSB7XG4gICAgICB2YXIgZGF0YVZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1tsYXllci5wcm9wZXJ0eV07XG4gICAgICB9KTtcbiAgICAgIHZhciBjb2xvckxlZ2VuZCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChzdG9wcy5tYXAoZnVuY3Rpb24gKHN0b3ApIHtcbiAgICAgICAgcmV0dXJuIHN0b3BbMV07XG4gICAgICB9KSkpKTtcbiAgICAgIHZhciBsZWdlbmRTdWZmaXggPSBsYXllci5jYXRlZ29yaWVzLnN1ZmZpeCA/IGxheWVyLmNhdGVnb3JpZXMuc3VmZml4IDogJyc7XG5cbiAgICAgIGlmIChjb2xvckxlZ2VuZC5pbmNsdWRlcygndHJhbnNwYXJlbnQnKSAmJiAhY29sb3JzLmluY2x1ZGVzKCd0cmFuc3BhcmVudCcpKSB7XG4gICAgICAgIGNvbG9ycy5zcGxpY2UoMCwgMCwgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIGJyZWFrcy5zcGxpY2UoMSwgMCwgYnJlYWtzWzBdKTtcbiAgICAgIH1cblxuICAgICAgY29sb3JMZWdlbmQuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IsIGluZGV4KSB7XG4gICAgICAgIHZhciBmaXJzdFZhbCA9IGJyZWFrc1tpbmRleCAtIDFdICE9PSB1bmRlZmluZWQgPyBicmVha3NbaW5kZXggLSAxXSA6IDA7XG4gICAgICAgIHZhciBsYXN0VmFsID0gY29sb3IgPT09IGNvbG9yTGVnZW5kW2NvbG9yTGVnZW5kLmxlbmd0aCAtIDFdIHx8IGJyZWFrc1tpbmRleF0gPT09IHVuZGVmaW5lZCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShkYXRhVmFsdWVzKSkgOiBicmVha3NbaW5kZXhdO1xuICAgICAgICBiYWNrZ3JvdW5kICs9ICc8bGkgY2xhc3M9XCJiYWNrZ3JvdW5kLWJsb2NrLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiJyArICgnZGF0YS10b29sdGlwPVwiJyArICgwLCBfZm9ybWF0TnVtMi5kZWZhdWx0KShmaXJzdFZhbCwgMSkgKyAnLScgKyAoMCwgX2Zvcm1hdE51bTIuZGVmYXVsdCkobGFzdFZhbCwgMSkgKyBsZWdlbmRTdWZmaXggKyAnXCInKSArICgnc3R5bGU9XCJiYWNrZ3JvdW5kOicgKyAoMCwgX2hleFRvUmdiQTIuZGVmYXVsdCkoY29sb3IsIDAuOSkgKyAnOyB3aWR0aDonICsgMTAwIC8gY29sb3JMZWdlbmQubGVuZ3RoICsgJyU7XCI+PC9saSA+ICcpO1xuICAgICAgfSk7XG5cbiAgICAgICQoJy5sZWdlbmQuJyArIG1hcElkKS5wcmVwZW5kKCc8ZGl2IGlkPVwibGVnZW5kLScgKyBsYXllci5pZCArICctJyArIG1hcElkICsgJ1wiIGNsYXNzPVwibGVnZW5kLXJvd1wiIGRhdGEtbGF5ZXI9XCInICsgbGF5ZXIuaWQgKyAnXCI+XFxuICAgICAgICAgIDxiPicgKyBsYXllci5sYWJlbCArICc8L2I+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cImxlZ2VuZC1saW1pdFwiIHN0eWxlPVwicGFkZGluZzogMCUgMCUgMyUgMCU7XCI+IFxcbiAgICAgICAgICAgIDxsaSBpZD1cImZpcnN0LWxpbWl0LScgKyBsYXllci5pZCArICdcIiBjbGFzcz1cIicgKyBtYXBJZCArICdcIlxcbiAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGlubGluZTsgbGVmdDogMyU7XCI+XFxuICAgICAgICAgICAgICAnICsgMCArIGxlZ2VuZFN1ZmZpeCArICdcXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBpZD1cImxhc3QtbGltaXQtJyArIGxheWVyLmlkICsgJ1wiIGNsYXNzPVwiJyArIG1hcElkICsgJyBcXG4gICAgICAgICAgICAgIFwic3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGlubGluZTsgcmlnaHQ6IDMlO1wiPlxcbiAgICAgICAgICAgICAgJyArICgwLCBfZm9ybWF0TnVtMi5kZWZhdWx0KShNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoZGF0YVZhbHVlcykpLCAxKSArIGxlZ2VuZFN1ZmZpeCArICdcXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWZpbGxcIj5cXG4gICAgICAgICAgICA8dWwgaWQ9XCJsZWdlbmQtYmFja2dyb3VuZFwiPicgKyBiYWNrZ3JvdW5kICsgJzwvdWw+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj4nICsgbGF5ZXIuY3JlZGl0ICsgJzwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PicpO1xuXG4gICAgICAkKCcuYmFja2dyb3VuZC1ibG9jay0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCkuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjZmlyc3QtbGltaXQtJyArIGxheWVyLmlkICsgJy4nICsgbWFwSWQpLnRleHQoJCgnZmlyc3QtbGltaXQnKS50ZXh0KCkpO1xuICAgICAgICAkKCcjbGFzdC1saW1pdC0nICsgbGF5ZXIuaWQgKyAnLicgKyBtYXBJZCkudGV4dCgkKCdsYXN0LWxpbWl0JykudGV4dCgpKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZpcnN0LWxpbWl0LScgKyBsYXllci5pZCArICcuJyArIG1hcElkKS50ZXh0KDAgKyBsZWdlbmRTdWZmaXgpO1xuICAgICAgICAkKCcjbGFzdC1saW1pdC0nICsgbGF5ZXIuaWQgKyAnLicgKyBtYXBJZCkudGV4dCgoMCwgX2Zvcm1hdE51bTIuZGVmYXVsdCkoTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGRhdGFWYWx1ZXMpKSwgMSkgKyBsZWdlbmRTdWZmaXgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG5vIGxlZ2VuZFxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2V0LXByaW1hcnktbGF5ZXIucHJpbWFyeScpLnJlbW92ZUNsYXNzKCdwcmltYXJ5Jyk7XG4gICAgfVxuXG4gICAgLy8gJCgnLnNldC1wcmltYXJ5LWxheWVyLnByaW1hcnknKS5yZW1vdmVDbGFzcygncHJpbWFyeScpO1xuICAgIC8vICAgJChgI2xlZ2VuZC0ke2xheWVyLmlkfS0ke21hcElkfSAuc2V0LXByaW1hcnktbGF5ZXJgKVxuICAgIC8vICAgICAub24oJ2NsaWNrJywgdGhpcy5zZXRQcmltYXJ5TGF5ZXIpXG4gICAgLy8gICAgIC5hZGRDbGFzcygncHJpbWFyeScpO1xuXG4gICAgJCgnLmxlZ2VuZC1yb3cucHJpbWFyeScpLnJlbW92ZUNsYXNzKCdwcmltYXJ5Jyk7XG4gICAgJCgnI2xlZ2VuZC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCkuYWRkQ2xhc3MoJ3ByaW1hcnknKTtcbiAgICAvLyAub24oJ2NsaWNrJywgdGhpcy5zZXRQcmltYXJ5TGF5ZXIpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExlZ2VuZC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZvcm1hdE51bTtcbmZ1bmN0aW9uIGZvcm1hdE51bShudW0sIGRlY2ltYWwpIHtcbiAgdmFyIHggPSAoJycgKyBudW0pLmxlbmd0aDtcbiAgaWYgKE51bWJlci5pc0ludGVnZXIobnVtKSAmJiB4ID4gMykge1xuICAgIHZhciBwb3cgPSBNYXRoLnBvdygxMCwgZGVjaW1hbCk7XG4gICAgeCAtPSB4ICUgMztcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwb3cgLyBNYXRoLnBvdygxMCwgeCkpIC8gcG93ICsgJyBrTUdUUEUnW3ggLyAzXTtcbiAgfVxuICByZXR1cm4gbnVtO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vc3JjL3V0aWxzL2Zvcm1hdE51bS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTY0NjczOC9jb252ZXJ0LWhleC10by1yZ2JhXG52YXIgaGV4VG9SZ2JBID0gZnVuY3Rpb24gaGV4VG9SZ2JBKGhleCwgYWxwaGEpIHtcbiAgdmFyIGMgPSB2b2lkIDA7XG4gIHZhciBhID0gYWxwaGEgfHwgYWxwaGEgPT09IDAgPyBhbHBoYSA6IDE7XG4gIGlmICgvXiMoW0EtRmEtZjAtOV17M30pezEsMn0kLy50ZXN0KGhleCkpIHtcbiAgICBjID0gaGV4LnN1YnN0cmluZygxKS5zcGxpdCgnJyk7XG4gICAgaWYgKGMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjID0gW2NbMF0sIGNbMF0sIGNbMV0sIGNbMV0sIGNbMl0sIGNbMl1dO1xuICAgIH1cbiAgICBjID0gW1tjWzBdLCBjWzFdXS5qb2luKCcnKSwgW2NbMl0sIGNbM11dLmpvaW4oJycpLCBbY1s0XSwgY1s1XV0uam9pbignJyldO1xuICAgIHJldHVybiAncmdiYSgnICsgcGFyc2VJbnQoY1swXSwgMTYpICsgJywgJyArIHBhcnNlSW50KGNbMV0sIDE2KSArICcsICcgKyBwYXJzZUludChjWzJdLCAxNikgKyAnLCAnICsgYSArICcpJztcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBIZXgnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGhleFRvUmdiQTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL3NyYy91dGlscy9oZXhUb1JnYkEuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRMYWJlbHM7XG5cbnZhciBfbXVzdGFjaGUgPSByZXF1aXJlKCdtdXN0YWNoZScpO1xuXG52YXIgX211c3RhY2hlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX211c3RhY2hlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gdG9kbzogY2hhbmdlIGZvciBzcGxpdCBtYXBcbnZhciBtYXBJZCA9ICcwMSc7XG5cbmZ1bmN0aW9uIHJlbW92ZUxhYmVscyhsYXllcikge1xuICB2YXIgY2xhc3NJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlci1sYWJlbC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZCk7XG4gIHdoaWxlIChjbGFzc0l0ZW1zWzBdKSB7XG4gICAgY2xhc3NJdGVtc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsYXNzSXRlbXNbMF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExhYmVscyhtYXAsIGxheWVyLCBkYXRhKSB7XG4gIGlmIChsYXllci5sYWJlbHMgJiYgbGF5ZXIubGFiZWxzLmRhdGEgJiYgbGF5ZXIubGFiZWxzLmpvaW4pIHtcbiAgICB2YXIgbGFiZWxzID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSAnbWFya2VyLWxhYmVsIG1hcmtlci1sYWJlbC0nICsgbGF5ZXIuaWQgKyAnLScgKyBtYXBJZDtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gbGF5ZXIubGFiZWxzLndpZHRoO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbGF5ZXIubGFiZWxzLmhlaWdodDtcbiAgICAgIGVsLnN0eWxlWydmb250LXNpemUnXSA9ICcxMnB4JztcbiAgICAgIGVsLnN0eWxlWydmb250LXdlaWdodCddID0gJ25vcm1hbCc7XG4gICAgICAkKGVsKS5odG1sKF9tdXN0YWNoZTIuZGVmYXVsdC5yZW5kZXIobGF5ZXIubGFiZWxzLmxhYmVsLCByb3cpKTtcbiAgICAgIGxheWVyLmxhYmVscy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIGlmIChsYWJlbFtsYXllci5sYWJlbHMuam9pblswXV0gPT09IHJvd1tsYXllci5sYWJlbHMuam9pblsxXV0pIHtcbiAgICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBvZmZzZXQ6IGxheWVyLmxhYmVscy5vZmZzZXQsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW2xhYmVsW2xheWVyLmxhYmVscy5jb29yZGluYXRlc1swXV0sIGxhYmVsW2xheWVyLmxhYmVscy5jb29yZGluYXRlc1sxXV1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKG1hcC5nZXRab29tKCkgPiBsYXllci5sYWJlbHMubWluem9vbSkge1xuICAgICAgbGFiZWxzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKHJvdy5lbCwge1xuICAgICAgICAgIG9mZnNldDogcm93Lm9mZnNldFxuICAgICAgICB9KS5zZXRMbmdMYXQocm93LmNvb3JkaW5hdGVzKS5hZGRUbyhtYXApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsYXllci5sYWJlbHMubWF4em9vbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxheWVyLmxhYmVscy5tYXh6b29tID0gMjI7XG4gICAgfVxuICAgIG1hcC5vbignem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYXAuZ2V0Wm9vbSgpID4gbGF5ZXIubGFiZWxzLm1pbnpvb20gJiYgbWFwLmdldFpvb20oKSA8IGxheWVyLmxhYmVscy5tYXh6b29tICYmIG1hcC5nZXRMYXllcihsYXllci5pZCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVMYWJlbHMobGF5ZXIpO1xuXG4gICAgICAgIGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKHJvdy5lbCwge1xuICAgICAgICAgICAgb2Zmc2V0OiByb3cub2Zmc2V0XG4gICAgICAgICAgfSkuc2V0TG5nTGF0KHJvdy5jb29yZGluYXRlcykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVMYWJlbHMobGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9zcmMvbWFwL2FkZExhYmVscy5qcyIsIi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKTsgLy8gc2NyaXB0LCB3c2gsIGFzcFxuICB9XG59KHRoaXMsIGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeSAobXVzdGFjaGUpIHtcblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgdmFyIHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICB2YXIgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpXG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcbiAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgIGlmICghb3BlblNlY3Rpb24pXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbilcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gICAqIHRvIGEgc2luZ2xlIHRva2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgc3F1YXNoZWRUb2tlbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgbGFzdFRva2VuO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gICAqIHRva2VucyB0aGF0IHJlcHJlc2VudCBhIHNlY3Rpb24gaGF2ZSB0d28gYWRkaXRpb25hbCBpdGVtczogMSkgYW4gYXJyYXkgb2ZcbiAgICogYWxsIHRva2VucyB0aGF0IGFwcGVhciBpbiB0aGF0IHNlY3Rpb24gYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWxcbiAgICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbmVzdFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICAgIHZhciBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG4gICAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBjb250ZXh0IGJ5IHdyYXBwaW5nIGEgdmlldyBvYmplY3QgYW5kXG4gICAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICovXG4gIGZ1bmN0aW9uIENvbnRleHQgKHZpZXcsIHBhcmVudENvbnRleHQpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuY2FjaGUgPSB7ICcuJzogdGhpcy52aWV3IH07XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCB1c2luZyB0aGUgZ2l2ZW4gdmlldyB3aXRoIHRoaXMgY29udGV4dFxuICAgKiBhcyB0aGUgcGFyZW50LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKHZpZXcpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICAgKiB1cCB0aGUgY29udGV4dCBoaWVyYXJjaHkgaWYgdGhlIHZhbHVlIGlzIGFic2VudCBpbiB0aGlzIGNvbnRleHQncyB2aWV3LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eSh2YWx1ZSwgbmFtZXNbaW5kZXhdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtuYW1lc1tpbmRleCsrXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xuICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9va3VwSGl0KVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBXcml0ZXIga25vd3MgaG93IHRvIHRha2UgYSBzdHJlYW0gb2YgdG9rZW5zIGFuZCByZW5kZXIgdGhlbSB0byBhXG4gICAqIHN0cmluZywgZ2l2ZW4gYSBjb250ZXh0LiBJdCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIHRlbXBsYXRlcyB0b1xuICAgKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAgICovXG4gIGZ1bmN0aW9uIFdyaXRlciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgYW5kIHJldHVybnMgdGhlIGFycmF5IG9mIHRva2Vuc1xuICAgKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgIHZhciB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV07XG5cbiAgICBpZiAodG9rZW5zID09IG51bGwpXG4gICAgICB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV0gPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZSh0ZW1wbGF0ZSk7XG4gICAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgYnVmZmVyID0gJyc7XG5cbiAgICB2YXIgdG9rZW4sIHN5bWJvbCwgdmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJyYnKSB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XG4gICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZCA9IGZ1bmN0aW9uIHJlbmRlckludmVydGVkICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLCBjb250ZXh0LCBwYXJ0aWFscywgdmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBtdXN0YWNoZS5uYW1lID0gJ211c3RhY2hlLmpzJztcbiAgbXVzdGFjaGUudmVyc2lvbiA9ICcyLjMuMCc7XG4gIG11c3RhY2hlLnRhZ3MgPSBbICd7eycsICd9fScgXTtcblxuICAvLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG4gIHZhciBkZWZhdWx0V3JpdGVyID0gbmV3IFdyaXRlcigpO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAgICogYXJyYXkgb2YgdG9rZW5zIGl0IGNvbnRhaW5zLiBEb2luZyB0aGlzIGFoZWFkIG9mIHRpbWUgYXZvaWRzIHRoZSBuZWVkIHRvXG4gICAqIHBhcnNlIHRlbXBsYXRlcyBvbiB0aGUgZmx5IGFzIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVzdGFjaGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGB0ZW1wbGF0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHZpZXdgIGFuZCBgcGFydGlhbHNgIHVzaW5nIHRoZVxuICAgKiBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAwLjQueC4sXG4gIC8qZXNsaW50LWRpc2FibGUgKi8gLy8gZXNsaW50IHdhbnRzIGNhbWVsIGNhc2VkIGZ1bmN0aW9uIG5hbWVcbiAgbXVzdGFjaGUudG9faHRtbCA9IGZ1bmN0aW9uIHRvX2h0bWwgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgc2VuZCkge1xuICAgIC8qZXNsaW50LWVuYWJsZSovXG5cbiAgICB2YXIgcmVzdWx0ID0gbXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZW5kKSkge1xuICAgICAgc2VuZChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9