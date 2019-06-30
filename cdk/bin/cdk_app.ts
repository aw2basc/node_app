#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import CdkStack from '../lib/cdk_stack';

const app = new cdk.App();
new CdkStack(app, 'cdk-stack', {
  env: {
    region: 'us-east-1',
    account: '881385135648' 
  }
});

// console.log(app.synth());