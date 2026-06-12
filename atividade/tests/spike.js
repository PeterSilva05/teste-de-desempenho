import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 1 },
    { duration: '10s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '10s', target: 1 },
  ],
};

export default function () {
  const payload = JSON.stringify({
    valor: 100
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(
    'http://localhost:3000/checkout/crypto',
    payload,
    params
  );

  check(res, {
    'status 201': (r) => r.status === 201,
  });
}