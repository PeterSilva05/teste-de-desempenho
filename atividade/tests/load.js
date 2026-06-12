import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
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
    'http://localhost:3000/checkout/simple',
    payload,
    params
  );

  check(res, {
    'status 201': (r) => r.status === 201,
  });
}