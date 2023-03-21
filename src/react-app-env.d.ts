/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      API_URL: 'http://127.0.0.1:8080'
      }
  }
  interface Window {
      Stripe: any
  }
  