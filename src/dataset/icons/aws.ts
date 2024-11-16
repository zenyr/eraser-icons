export const PATTERN = `https://app.tryeraser.com/static/canvas-icons/{name}.svg`;
export const ICONS = [
  "aws-athena,interactive-query,serverless-sql,data-analysis",
  "aws-cloudsearch,full-text-search,search-as-a-service,document-indexing",
  "aws-emr,elastic-mapreduce,big-data,analytics,cluster-compute",
  "aws-finspace,financial-data,analytics-platform,managed-service",
  "aws-kinesis,real-time-data,streaming-analytics,data-ingestion",
  "aws-kinesis-data-analytics,kda,real-time-analytics,stream-processing,sql-streaming",
  "aws-kinesis-data-streams,kds,real-time-ingestion,data-streaming,scalable-streams",
  "aws-kinesis-firehose,firehose,stream-delivery,data-pipelines,s3-integration",
  "aws-kinesis-video-streams,video-streaming,real-time-media,video-ingestion",
  "aws-managed-streaming-for-apache-kafka,msk,kafka-as-a-service,message-brokering,streaming-platform",
  "aws-opensearch-service,elasticsearch-service,search-engine,analytics-service,opensearch",
  "aws-quicksight,bi-tool,data-visualization,serverless-insights",
  "aws-redshift,data-warehouse,analytics,scalable-sql,query-optimization",
  "aws-data-exchange,data-sharing,marketplace,sas-integration",
  "aws-data-pipeline,data-integration,workflow-orchestration,etl-process",
  "aws-glue,etl-service,data-catalog,serverless-integration",
  "aws-glue-databrew,databrew,data-preparation,visual-data-cleaning,ml-integration",
  "aws-glue-elastic-views,elastic-views,materialized-views,real-time-data,serverless-views",
  "aws-lake-formation,data-lake,storage-management,secure-access",
  "aws-api-gateway,rest-api,websocket-api,api-management,serverless-api",
  "aws-appflow,data-integration,salesforce-sync,s3-integration",
  "aws-eventbridge,event-bus,event-driven-architecture,serverless-events",
  "aws-managed-workflows-for-apache-airflow,mwaa,workflow-management,dag-orchestration,etl-pipelines",
  "aws-mq,message-broker,managed-activemq,rabbitmq-service",
  "aws-simple-notification-service,sns,pub-sub,messaging,notification-service",
  "aws-simple-queue-service,sqs,message-queue,asynchronous-processing,queue-management",
  "aws-appsync,graphql,real-time-api,app-development,serverless-api",
  "aws-console-mobile-application,mobile-management,aws-console-access,resource-monitoring",
  "aws-express-workflows,serverless-workflows,event-orchestration,step-functions-lite",
  "aws-step-functions,sfn,workflow-orchestration,serverless-flows,state-machines",
  "aws-managed-blockchain,blockchain-as-a-service,ledger-network,hyperledger",
  "aws-quantum-ledger-database,qldb,immutable-ledger,blockchain-database,secure-records",
  "aws-alexa-for-business,voice-assistance,meeting-management,device-integration",
  "aws-chime,video-calling,online-meetings,communication-service",
  "aws-chime-sdk,developer-sdk,voice-and-video,real-time-communication",
  "aws-chime-voice-connector,voice-routing,sip-integration,pstn-connectivity",
  "aws-connect,call-center,customer-engagement,contact-center",
  "aws-honeycode,app-builder,no-code,workflow-automation",
  "aws-pinpoint,customer-engagement,multi-channel-messaging,marketing-campaigns",
  "aws-pinpoint-apis,api-access,engagement-metrics,channel-integration",
  "aws-simple-email-service,ses,email-service,transactional-email,bulk-email",
  "aws-workdocs,document-collaboration,file-sharing,secure-storage",
  "aws-workdocs-sdk,developer-sdk,api-integration,document-management",
  "aws-workmail,managed-email,calendar-integration,secure-email",
  "aws-application-cost-profiler,cost-tracking,usage-analysis,resource-tagging",
  "aws-billing-conductor,billing-management,customized-invoicing,cost-reporting",
  "aws-budgets,cost-control,alerting,spending-limits",
  "aws-cost-and-usage-report,usage-tracking,cost-optimization,reporting-tools",
  "aws-cost-explorer,cost-insights,usage-patterns,cost-saving",
  "aws-reserved-instance-reporting,ri-management,cost-prediction,savings-insights",
  "aws-savings-plans,flexible-pricing,compute-usage,discounted-rates",
  "aws-ec2,elastic-compute-cloud,virtual-servers,on-demand-instances,scalable-compute",
  "aws-ec2-auto-scaling,auto-scaling,scalable-servers,load-balancing,resource-optimization",
  "aws-ec2-image-builder,automated-image-creation,os-customization,ami-builder,patch-management",
  "aws-elastic-container-kubernetes,kubernetes-service,container-orchestration,eks-integration,scalable-clusters",
  "aws-elastic-container-registry,ecr,container-registry,image-storage,docker-integration,secure-images",
  "aws-elastic-container-service,ecs,container-management,serverless-containers,task-orchestration,service-deployment",
  "aws-genomics-cli,genomics-workflow,dna-analysis,bioinformatics,genome-data",
  "aws-lightsail,simplified-cloud-hosting,virtual-private-server,app-deployment,managed-services",
  "aws-app-runner,container-deployment,scalable-apps,serverless-web,application-hosting",
  "aws-batch,batch-processing,compute-management,job-scheduling,high-performance-computing",
  "aws-compute-optimizer,cost-optimization,performance-insights,resource-rightsizing,compute-analysis",
  "aws-elastic-beanstalk,managed-deployment,scalable-applications,web-apps,auto-provisioning",
  "aws-fargate,serverless-containers,container-scaling,orchestration,ecs-integration",
  "aws-lambda,serverless-compute,event-driven,microservices,function-as-a-service",
  "aws-local-zones,low-latency-compute,regional-expansion,edge-compute,hybrid-cloud",
  "aws-nitro-enclaves,secure-compute,data-isolation,confidential-computing,enclave-security",
  "aws-outposts-family,hybrid-cloud,on-premises-infrastructure,aws-integration,edge-compute",
  "aws-outposts-rack,on-premises-rack,aws-services,hybrid-infrastructure,datacenter-extension",
  "aws-outposts-servers,hybrid-server,aws-services,compact-deployment,edge-resources",
  "aws-parallelcluster,cluster-management,high-performance-computing,hpc-automation,scalable-clusters",
  "aws-serverless-application-repository,serverless-repository,application-sharing,lambda-integrations,prebuilt-apps",
  "aws-thinkbox-deadline,render-management,task-scheduling,cloud-rendering,visual-effects",
  "aws-thinkbox-frost,particle-meshing,3d-visualization,simulation-tool,content-creation",
  "aws-thinkbox-krakatoa,particle-rendering,visual-effects,3d-animation,simulation",
  "aws-thinkbox-sequoia,3d-point-clouds,visualization,modeling-tool,meshing",
  "aws-thinkbox-stoke,particle-simulation,fluid-dynamics,visual-effects,3d-content",
  "aws-thinkbox-xmesh,geometry-caching,3d-assets,pipeline-integration,render-optimization",
  "aws-wavelength,edge-computing,low-latency,5g-integration,mobile-apps",
  "aws-bottlerocket,secure-os,container-optimized,lightweight-linux,ecs-eks",
  "aws-elastic-fabric-adapter,efa,low-latency,hpc-communication,network-optimized",
  "aws-nice-dcv,remote-desktop,graphics-streaming,secure-access,visualization",
  "aws-nice-enginframe,hpc-job-management,remote-access,cloud-hpc,workflow-automation",
  "aws-vmware-cloud-on-aws,hybrid-cloud,vmware-integration,datacenter-extension,vm-migration",
  "aws-ecs-anywhere,ecs-outside-aws,container-orchestration,hybrid-deployment,serverless-containers",
  "aws-eks-anywhere,eks-outside-aws,kubernetes-on-prem,hybrid-clusters,scalable-deployment",
  "aws-eks-cloud,managed-kubernetes,container-orchestration,cloud-native,eks-managed",
  "aws-eks-distro,kubernetes-distribution,open-source-eks,kubernetes-clusters,eks-tools",
  "aws-elastic-kubernetes-service,eks,managed-kubernetes,container-management,orchestration-service",
  "aws-red-hat-openshift,openshift,managed-openshift,kubernetes-deployment,red-hat-integration",
  "aws-activate,startup-support,cloud-resources,startup-credits,entrepreneur-program",
  "aws-iq,expert-support,freelancer-network,aws-consultants,project-help",
  "aws-managed-services,enterprise-management,cloud-operations,fully-managed,secure-cloud",
  "aws-professional-services,consulting-support,cloud-expertise,custom-solutions,enterprise-help",
  "aws-repost,community-forum,aws-support,developer-questions,knowledge-sharing",
  "aws-support,customer-support,technical-help,aws-troubleshooting,cloud-assistance",
  "aws-training-certification,aws-education,certification-prep,cloud-skills,career-development",
  "aws-aurora,relational-database,scalable-rds,high-performance-db,serverless-database",
  "aws-documentdb,managed-mongodb,document-database,scalable-storage,no-sql",
  "aws-dynamodb,nosql-database,serverless-storage,key-value-db,high-performance-db",
  "aws-elasticache,in-memory-database,caching-service,redis-memcached,low-latency",
  "aws-keyspaces,managed-cassandra,cassandra-compatible,nosql-database,scalable-storage",
  "aws-memorydb-for-redis,redis-compatible,in-memory-db,low-latency,high-availability",
  "aws-neptune,graph-database,knowledge-graphs,linked-data,high-performance",
  "aws-rds,relational-database-service,managed-database,scalable-rdbms,mysql-postgresql",
  "aws-rds-on-vmware,on-prem-database,hybrid-database,vmware-integration,managed-db",
  "aws-timestream,time-series-database,iot-database,serverless-storage,analytics-optimized",
  "aws-database-migration-service,dms,database-migration,cross-platform-migration,cloud-migration",
  "aws-corretto,java-openjdk,secure-java,jvm-platform,free-java",
  "aws-cloud-control-api,unified-control,resource-management,api-standardization,cloud-resources",
  "aws-cloud-development-kit,cdk,infrastructure-as-code,cloud-automation,developer-tools",
  "aws-cloud9,online-ide,cloud-development,real-time-coding,team-collaboration",
  "aws-cloudshell,cloud-terminal,command-line-tools,remote-shell,aws-shell",
  "aws-codeartifact,artifact-repository,package-management,dependency-storage,secure-packages",
  "aws-codebuild,continuous-integration,build-automation,ci-service,code-testing",
  "aws-codecommit,git-repository,version-control,collaborative-coding,secure-repositories",
  "aws-codedeploy,deployment-automation,application-deployment,serverless-deployment,update-management",
  "aws-codepipeline,ci-cd,workflow-automation,code-delivery,release-management",
  "aws-codestar,developer-tools,collaborative-development,project-management,code-integration",
  "aws-command-line-interface,cli,terminal-access,cloud-scripting,aws-automation",
  "aws-tools-and-sdks,developer-tools,cloud-development,sdk-integration,aws-libraries",
  "aws-x-ray,application-tracing,performance-insights,distributed-tracing,debugging-tool",
  "aws-appstream,remote-desktop,application-streaming,virtual-apps,secure-streaming",
  "aws-worklink,secure-access,mobile-browser,web-apps,enterprise-security",
  "aws-workspaces,virtual-desktop,remote-work,secure-vdi,managed-workstations",
  "aws-workspaces-web,web-browser-access,secure-desktops,remote-working,cloud-workstations",
  "aws-location-service,map-service,geospatial-data,tracking,location-intelligence",
  "aws-amplify,app-development,frontend-tools,serverless-backend,mobile-integration",
  "aws-device-farm,app-testing,device-testing,cross-platform-testing,real-device-cloud",
  "aws-gamelift,game-hosting,game-server,matchmaking,scalable-games",
  "aws-gamesparks,game-development,serverless-backend,game-logic,social-gaming",
  "aws-gamekit,game-integration,player-management,cloud-gaming,game-tools",
  "aws-open-3d-engine,o3de,game-engine,3d-development,open-source-tools",
  "aws-marketplace,cloud-marketplace,software-purchasing,third-party-integration,app-store",
  "aws-iot-1-click,simple-iot,device-actions,event-triggers,iot-buttons",
  "aws-iot-analytics,iot-data,analytics-platform,iot-insights,data-processing",
  "aws-iot-button,iot-device,event-trigger,simple-actions,custom-integration",
  "aws-iot-core,iot-platform,device-management,message-routing,secure-communication",
  "aws-iot-device-defender,iot-security,device-monitoring,threat-detection,policy-management",
  "aws-iot-device-management,device-onboarding,fleet-management,iot-operations,remote-monitoring",
  "aws-iot-edukit,iot-learning,iot-starter-kits,developer-education,hardware-tools",
  "aws-iot-events,event-detection,iot-triggers,event-actions,device-monitoring",
  "aws-iot-expresslink,secure-connectivity,iot-module,iot-development,easy-iot",
  "aws-iot-fleetwise,vehicle-data,automotive-iot,data-collection,smart-vehicles",
  "aws-iot-greengrass,edge-computing,iot-devices,local-processing,secure-edge",
  "aws-iot-roborunner,robotics-management,iot-robots,robot-fleet,automation-tools",
  "aws-iot-sitewise,industrial-iot,data-visualization,manufacturing-iot,secure-iot",
  "aws-iot-things-graph,iot-workflows,visual-iot,integration-builder,device-logic",
  "aws-iot-twinmaker,digital-twin,iot-models,3d-representation,asset-simulation",
  "aws-freertos,iot-os,embedded-systems,microcontroller-os,secure-firmware",
  "aws-augmented-ai-a2i,a2i,human-review,ml-integration,data-labeling,workflow-management",
  "aws-codeguru,code-review,performance-analysis,developer-tools,bug-detection",
  "aws-codewhisperer,ai-coding-assistant,developer-productivity,code-suggestions,intelligent-autocomplete",
  "aws-comprehend,language-processing,text-analysis,entity-recognition,sentiment-analysis",
  "aws-comprehend-medical,medical-nlp,health-data,entity-recognition,secure-insights",
  "aws-devops-guru,devops-insights,performance-optimization,application-monitoring,error-detection",
  "aws-elastic-inference,ml-inference,low-cost-ml,accelerated-compute,inference-optimization",
  "aws-forecast,time-series-prediction,demand-planning,forecasting-service,ml-powered",
  "aws-fraud-detector,fraud-detection,ml-based-security,transaction-analysis,secure-transactions",
  "aws-healthlake,healthcare-data,medical-records,secure-analytics,fhir-integration",
  "aws-kendra,intelligent-search,document-search,enterprise-search,ml-powered-insights",
  "aws-lex,conversational-ai,chatbot-service,voice-assistant,natural-language-processing",
  "aws-lookout-for-equipment,industrial-predictive-maintenance,equipment-monitoring,anomaly-detection,ml-based-monitoring",
  "aws-lookout-for-metrics,anomaly-detection,data-insights,performance-monitoring,ml-analytics",
  "aws-lookout-for-vision,visual-inspection,defect-detection,computer-vision,quality-control",
  "aws-monitron,industrial-monitoring,condition-based-maintenance,predictive-analytics,sensor-based",
  "aws-personalize,recommendation-engine,user-personalization,ml-powered,real-time-insights",
  "aws-polly,text-to-speech,tts,voice-generation,natural-voices",
  "aws-rekognition,image-recognition,video-analysis,facial-recognition,object-detection",
  "aws-sagemaker,ml-training,model-deployment,ml-development,ai-platform",
  "aws-sagemaker-ground-truth,ground-truth,data-labeling,ml-datasets,annotation-tool,training-data",
  "aws-sagemaker-studio-lab,ml-lab,notebook-environment,ml-learning,developer-tools",
  "aws-textract,document-processing,text-extraction,ocr-service,intelligent-automation",
  "aws-transcribe,speech-to-text,audio-transcription,voice-recognition,language-processing",
  "aws-translate,language-translation,text-translation,ml-powered,real-time-translation",
  "aws-apache-mxnet-on-aws,mxnet-library,deep-learning,ml-framework,scalable-ai",
  "aws-deep-learning-amis,dl-amis,ai-amis,preconfigured-images,ml-tools",
  "aws-deep-learning-containers,dl-containers,prebuilt-containers,ml-workflows,docker-ml",
  "aws-deepcomposer,ml-music,creative-ai,music-generation,ml-integration",
  "aws-deeplens,ai-camera,deep-learning-device,vision-processing,developer-tools",
  "aws-deepracer,autonomous-driving,ai-racing,reinforcement-learning,ml-competition",
  "aws-neuron,inf1-optimization,ml-inference,aws-chip,ai-acceleration",
  "aws-panorama,edge-ai,computer-vision,ai-cameras,video-analytics",
  "aws-tensorflow-on-aws,tensorflow,deep-learning,ai-framework,ml-development",
  "aws-torchserve,ml-serving,model-deployment,pytorch,ai-serving",
  "aws-cloudwatch,monitoring,metrics-insights,log-analysis,resource-management",
  "aws-managed-grafana,data-visualization,metrics-monitoring,scalable-dashboard,enterprise-monitoring",
  "aws-managed-service-for-prometheus,metrics-collection,prometheus-as-a-service,log-analysis,scalable-monitoring",
  "aws-appconfig,configuration-management,application-updates,dynamic-settings,secure-config",
  "aws-application-auto-scaling,auto-scaling,resource-optimization,dynamic-scaling,scalability",
  "aws-auto-scaling,scaling-management,resource-scaling,dynamic-allocation,auto-provisioning",
  "aws-backint-agent,backup-integration,sap-backup,sap-solution,cloud-backup",
  "aws-chatbot,chat-integration,devops-notifications,team-alerts,chatops",
  "aws-cloudformation,infrastructure-as-code,resource-provisioning,template-management,stack-deployment",
  "aws-cloudtrail,audit-service,compliance-tracking,event-logging,security-monitoring",
  "aws-config,resource-compliance,configuration-tracking,security-audit,policy-management",
  "aws-control-tower,cloud-governance,landing-zone,account-management,secure-setup",
  "aws-distro-for-opentelemetry,opentelemetry-collector,metrics-tracing,observability,cloud-native-tracing",
  "aws-fault-injection-simulator,fis,chaos-engineering,fault-testing,resilience-testing",
  "aws-launch-wizard,workload-deployment,automated-setup,preconfigured-blueprints,simplified-launch",
  "aws-license-manager,license-tracking,software-license,compliance-management,cost-optimization",
  "aws-management-console,web-interface,cloud-management,aws-console,resource-access",
  "aws-opsworks,application-lifecycle,chef-puppet,configuration-management,app-deployment",
  "aws-organizations,multi-account-management,policy-controls,billing-aggregation,cloud-governance",
  "aws-personal-health-dashboard,phd,health-monitoring,service-status,event-alerts",
  "aws-proton,container-deployment,serverless-deployment,application-management,service-deployment",
  "aws-resilience-hub,resiliency-assessment,disaster-recovery,architecture-checks,system-monitoring",
  "aws-service-catalog,product-management,service-provisioning,compliance-control,application-launch",
  "aws-systems-manager,ssm,operations-management,resource-monitoring,automation-service",
  "aws-systems-manager-incident-manager,incident-manager,incident-response,incident-tracking,disaster-recovery",
  "aws-trusted-advisor,resource-optimization,best-practices,security-recommendations,cost-management",
  "aws-well-architected-tool,architecture-assessment,best-practices,resource-optimization,secure-setup",
  "aws-elastic-transcoder,media-transcoding,video-processing,audio-optimization,media-conversion",
  "aws-interactive-video-service,ivs,live-streaming,real-time-video,interactive-content,low-latency",
  "aws-nimble-studio,creative-workflows,animation-production,vfx-tools,media-studio",
  "aws-elemental-appliances-&-software,media-hardware,streaming-tools,video-processing,on-prem-solutions",
  "aws-elemental-conductor,media-management,workflow-orchestration,streaming-control,live-video",
  "aws-elemental-delta,streaming-delivery,video-on-demand,secure-delivery,media-packaging",
  "aws-elemental-link,streaming-hardware,video-ingestion,secure-connection,media-uplink",
  "aws-elemental-live,live-streaming,real-time-video,media-broadcasting,video-production",
  "aws-elemental-mediaconnect,video-transmission,secure-streaming,media-pipeline,low-latency",
  "aws-elemental-mediaconvert,media-encoding,video-conversion,content-adaptation,audio-optimization",
  "aws-elemental-medialive,live-streaming-service,real-time-video,streaming-production,media-management",
  "aws-elemental-mediapackage,content-packaging,streaming-adaptation,media-delivery,secure-streaming",
  "aws-elemental-mediastore,media-storage,secure-video-storage,low-latency,media-delivery",
  "aws-elemental-mediatailor,ad-insertion,personalized-streaming,media-targeting,content-delivery",
  "aws-elemental-server,on-prem-media,media-processing,video-tools,streaming-infrastructure",
  "aws-application-discovery-service,application-inventory,resource-mapping,cloud-migration,migration-assessment",
  "aws-application-migration-service,cloud-migration,live-migration,application-movement,migration-tool",
  "aws-datasync,automated-data-transfer,file-migration,storage-synchronization,secure-data-transfer",
  "aws-mainframe-modernization,legacy-modernization,application-migration,cloud-mainframe,refactoring-tools",
  "aws-migration-evaluator,migration-assessment,cost-optimization,workload-analysis,migration-planning",
  "aws-migration-hub,migration-tracking,workload-management,centralized-view,cloud-migration",
  "aws-server-migration-service,server-migration,live-migration,application-transfers,vm-to-cloud",
  "aws-transfer-family,managed-file-transfer,sftp-ftp,secure-transfers,ftps-integration",
  "aws-cloud-directory,cloud-schema,identity-directory,object-management,secure-directory",
  "aws-cloudfront,cdn,content-delivery,low-latency,secure-delivery",
  "aws-route-53,dns-management,domain-routing,global-dns,traffic-control",
  "aws-app-mesh,service-mesh,application-networking,service-communication,secure-mesh",
  "aws-client-vpn,secure-access,remote-connectivity,vpn-service,private-network",
  "aws-cloud-map,service-discovery,resource-mapping,networking-tools,dns-management",
  "aws-cloud-wan,wide-area-network,global-networking,secure-connections,network-management",
  "aws-direct-connect,dedicated-networking,low-latency,private-connectivity,data-transfer",
  "aws-global-accelerator,traffic-optimization,network-performance,low-latency,global-routing",
  "aws-private-5g,private-networking,5g-deployment,secure-connectivity,custom-networks",
  "aws-privatelink,private-connectivity,secure-networking,service-access,vpc-integration",
  "aws-site-to-site-vpn,vpn-service,secure-tunnels,network-bridging,private-connectivity",
  "aws-transit-gateway,network-hub,vpc-connection,centralized-networking,secure-routing",
  "aws-elastic-load-balancing,elb,traffic-distribution,load-balancing,scalable-infrastructure",
  "aws-braket,quantum-computing,cloud-quantum,research-tools,quantum-workflows",
  "aws-robomaker,robotics-development,simulation-tools,robotics-platform,iot-integration",
  "aws-ground-station,satellite-communication,earth-stations,data-streaming,satellite-services",
  "aws-cognito,user-authentication,identity-management,sso-service,secure-login",
  "aws-detective,security-investigation,threat-analysis,incident-response,forensic-tools",
  "aws-guardduty,threat-detection,security-monitoring,malware-detection,network-protection",
  "aws-inspector,vulnerability-assessment,security-scans,application-insights,secure-deployment",
  "aws-macie,data-protection,sensitive-data,compliance-monitoring,security-tools",
  "aws-artifact,compliance-documents,audit-trails,security-assurance,compliance-reporting",
  "aws-audit-manager,compliance-automation,audit-tracking,reporting-tools,security-monitoring",
  "aws-certificate-manager,acm,ssl-certificates,certificate-management,secure-communication",
  "aws-cloudhsm,hardware-security,cryptographic-keys,secure-storage,hardware-module",
  "aws-directory-service,managed-directory,identity-services,active-directory-integration,secure-directory",
  "aws-firewall-manager,centralized-firewall,security-management,network-protection,compliance-enforcement",
  "aws-iam-identity-center,sso-management,identity-governance,user-access,centralized-authentication",
  "aws-identity-and-access-management,iam,access-control,user-permissions,secure-management",
  "aws-key-management-service,kms,encryption-keys,data-security,key-management,secure-storage",
  "aws-network-firewall,network-security,firewall-as-a-service,traffic-monitoring,secure-routing",
  "aws-resource-access-manager,ram,resource-sharing,access-control,multi-account-management",
  "aws-secrets-manager,credential-storage,secure-secrets,automated-rotation,password-management",
  "aws-security-hub,centralized-security,threat-monitoring,compliance-checks,security-automation",
  "aws-shield,ddos-protection,web-security,application-protection,network-defense",
  "aws-signer,code-signing,software-authentication,secure-keys,release-verification",
  "aws-waf,web-application-firewall,security-rules,bot-management,traffic-filtering",
  "aws-efs,elastic-file-system,network-file-system,scalable-storage,cloud-nfs",
  "aws-elastic-block-store,ebs,block-storage,high-performance-disks,secure-storage",
  "aws-fsx,file-storage,managed-filesystems,performance-optimized,enterprise-storage",
  "aws-fsx-for-lustre,lustre-filesystem,hpc-storage,scalable-performance,cloud-lustre",
  "aws-fsx-for-netapp-ontap,netapp-integration,ontap-filesystem,hybrid-cloud,secure-storage",
  "aws-fsx-for-openzfs,openzfs-integration,file-storage,zfs-tools,high-performance",
  "aws-fsx-for-wfs,windows-file-storage,enterprise-integration,secure-access,file-shares",
  "aws-s3-on-outposts,s3-outposts,local-storage,hybrid-cloud,secure-buckets",
  "aws-simple-storage-service,s3,object-storage,scalable-storage,data-management",
  "aws-simple-storage-service-glacier,s3-glacier,cold-storage,archival-storage,secure-archiving",
  "aws-backup,backup-service,data-protection,recovery-plans,automated-backups",
  "aws-snowball,data-transfer,edge-computing,secure-device,large-scale-migration",
  "aws-snowball-edge,edge-storage,data-processing,secure-data-movement,portable-device",
  "aws-snowcone,lightweight-storage,data-mobility,secure-processing,portable-compute",
  "aws-snowmobile,massive-data-transfer,secure-shipping,petabyte-scale,migration-service",
  "aws-storage-gateway,hybrid-storage,cloud-integration,data-caching,backup-gateway",
  "aws-cloudendure-disaster-recovery,disaster-recovery,live-migration,secure-replication,application-resilience",
  "aws-sumerian,vr-development,ar-tools,3d-environments,immersive-apps",
  "aws-analytics,data-analysis,business-intelligence,insight-tools,cloud-analytics",
  "aws-application-integration,service-integration,api-management,event-architecture,workflow-tools",
  "aws-blockchain,blockchain-solutions,ledger-services,secure-networks,distributed-systems",
  "aws-business-applications,enterprise-apps,cloud-solutions,productivity-tools,secure-apps",
  "aws-cloud-financial-management,cost-control,billing-management,cloud-costs,spending-optimization",
  "aws-compute,cloud-compute,scalable-infrastructure,virtual-machines,serverless-compute",
  "aws-containers,container-orchestration,scalable-containers,kubernetes-integration,serverless-container",
  "aws-customer-enablement,training-support,aws-education,cloud-guidance,technical-support",
  "aws-database,cloud-databases,relational-database,nosql-storage,data-management",
  "aws-developer-tools,developer-resources,ci-cd-tools,cloud-sdks,devops-tools",
  "aws-end-user-computing,remote-work,virtual-desktops,secure-collaboration,end-user-apps",
  "aws-front-end-web-mobile,frontend-development,mobile-tools,web-integration,app-building",
  "aws-game-tech,game-development,scalable-backends,game-hosting,cloud-gaming",
  "aws-internet-of-things,iot-services,device-management,edge-computing,secure-iot",
  "aws-machine-learning,ai-platform,ml-development,model-deployment,intelligent-systems",
  "aws-management-governance,resource-governance,cloud-operations,policy-management,secure-deployment",
  "aws-media-services,media-streaming,video-tools,content-delivery,secure-streaming",
  "aws-migration-transfer,cloud-migration,application-movement,data-transfer,migration-planning",
  "aws-networking-content-delivery,network-optimization,content-delivery,cloud-networking,low-latency",
  "aws-quantum-technologies,quantum-computing,research-tools,cloud-quantum,ai-integration",
  "aws-robotics,robotics-platform,simulation-tools,iot-integration,robotic-development",
  "aws-satellite,satellite-communication,earth-stations,data-transmission,secure-networks",
  "aws-security-identity-compliance,cloud-security,identity-management,compliance-tools,secure-cloud",
  "aws-serverless,serverless-compute,application-management,serverless-tools,scalable-functions",
  "aws-storage,cloud-storage,scalable-data,file-systems,object-storage",
  "aws-vr-ar,immersive-technology,vr-development,ar-tools,3d-apps",
  "aws-ec2-m5n,compute-optimized,memory-intensive,network-enhanced",
  "aws-ec2-r5n,memory-optimized,high-performance,network-intensive",
] as const;
