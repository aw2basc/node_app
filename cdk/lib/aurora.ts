import cdk = require('@aws-cdk/core');
import rds = require('@aws-cdk/aws-rds');
import ec2 = require('@aws-cdk/aws-ec2');

export class AuroraDb extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: any) {
    super(scope, id);

    const vpcId: string = "vpc-655cfb1e";

    const vpc: ec2.IVpc = ec2.Vpc.fromLookup(this, 'node-app-db-vpc', { vpcId });

    const cluster = new rds.DatabaseCluster(this, 'node-app-db-cluster', {
        engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
        masterUser: {
            username: 'admin'
        },
        instanceProps: {
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
            vpc
        }
    });
  }
}
