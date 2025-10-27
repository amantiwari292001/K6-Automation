const smokeTest = {
    vus: 1, // Number of virtual users.
    duration: '6s', // Total test duration.
    thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be <500ms
    http_req_failed: ['rate<0.01'],   // Less than 1% of requests should fail
  }
}

const loadTest = { //Load test works with stages.
    stages: [
        {duration: '3s', target: 2},
        {duration: '6s', target: 4},
        {duration: '3s', target: 2}
    ],
    thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be <500ms
    http_req_failed: ['rate<0.01'],   // Less than 1% of requests should fail
    }
}

module.exports = {smokeTest, loadTest};