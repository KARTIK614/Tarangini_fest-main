// Cache for storing memoized data
const memoCache = new Map();

// Resource pool for managing concurrent requests
const resourcePool = {
  maxConcurrent: 5,
  currentRequests: 0,
  queue: [],
};

// Request queue processor
const processQueue = async () => {
  while (resourcePool.queue.length > 0 && resourcePool.currentRequests < resourcePool.maxConcurrent) {
    const nextRequest = resourcePool.queue.shift();
    if (nextRequest) {
      try {
        resourcePool.currentRequests++;
        await nextRequest();
      } catch (error) {
        console.error('Request failed:', error);
      } finally {
        resourcePool.currentRequests--;
        processQueue();
      }
    }
  }
};

// Memoize expensive computations with TTL (Time To Live)
export const memoizeWithTTL = (fn, ttl = 60000) => {
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = memoCache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < ttl) {
      return cached.value;
    }

    const result = fn(...args);
    memoCache.set(key, { value: result, timestamp: now });
    return result;
  };
};

// Queue and manage concurrent requests
export const queueRequest = (request) => {
  return new Promise((resolve, reject) => {
    const wrappedRequest = async () => {
      try {
        const result = await request();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    resourcePool.queue.push(wrappedRequest);
    processQueue();
  });
};

// Debounce function for handling rapid user interactions
export const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Clear expired cache entries
const cleanupCache = () => {
  const now = Date.now();
  for (const [key, { timestamp }] of memoCache.entries()) {
    if (now - timestamp > 300000) { // 5 minutes TTL for cache cleanup
      memoCache.delete(key);
    }
  }
};

// Run cache cleanup every 5 minutes
setInterval(cleanupCache, 300000);

// Manage component update frequency
export const shouldComponentUpdate = (prevProps, nextProps, updateInterval = 1000) => {
  const now = Date.now();
  if (!shouldComponentUpdate.lastUpdate) {
    shouldComponentUpdate.lastUpdate = now;
    return true;
  }

  if (now - shouldComponentUpdate.lastUpdate < updateInterval) {
    return false;
  }

  shouldComponentUpdate.lastUpdate = now;
  return true;
};

// Request scheduler with priority
export const scheduleRequest = (request, priority = 'normal') => {
  const priorities = {
    high: 0,
    normal: 1000,
    low: 2000,
  };

  const delay = priorities[priority] || priorities.normal;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      queueRequest(request)
        .then(resolve)
        .catch(reject);
    }, delay);
  });
};