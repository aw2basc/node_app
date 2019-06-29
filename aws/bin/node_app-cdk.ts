#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { NodeAppStack } from '../lib/node_app-stack';

const app = new cdk.App();
new NodeAppStack(app, 'NodeAppStack');