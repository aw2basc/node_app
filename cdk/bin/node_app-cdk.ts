#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { NodeAppStack } from '../lib/node_app-stack';

const app = new cdk.App();
new NodeAppStack(app, 'node-app-stack', {
  env: {
    region: 'us-east-1',
    account: '881385135648' 
  }
});

// console.log(app.synth());