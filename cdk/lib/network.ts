import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2');

export class Network extends cdk.Construct {
  public securityGroup: ec2.SecurityGroup;
  public vpc: ec2.IVpc;

  constructor(scope: cdk.Construct, id: string, props?: any) {
    super(scope, id);

    const vpcId: string = "vpc-655cfb1e";

    this.vpc = ec2.Vpc.fromLookup(this, 'node-app-vpc', { vpcId });
    // this.vpc = ec2.Vpc.fromLookup(this, 'cdk-vpc', { isDefault: true });
    /*
    this.vpc = new ec2.Vpc(this, 'cdk-vpc', {
      cidr: "10.0.0.0/16"
    });
     */
    /*

    this.securityGroup = new ec2.SecurityGroup(this, 'cdk-security-group', {
      securityGroupName: 'cdk-security-group',
      description: 'cdk security group',
      vpc: this.vpc
    });
    const peer = ec2.Peer.anyIpv4();
    const port = ec2.Port.allTraffic();
    this.securityGroup.addIngressRule(peer, port);
     */
  }
}
