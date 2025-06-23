---
title: Getting Started
description: Your guide to getting started with VoxaCommunications
---

# Getting Started with VoxaCommunications

Welcome to VoxaCommunications! This guide will help you get up and running with our decentralized communication platform. Whether you're looking to set up your own node, deploy applications, or contribute to the project, this guide has you covered.

## What is VoxaCommunications?

VoxaCommunications is a decentralized communication platform that allows users to host their own instances and deploy applications on the network. Built with privacy and decentralization in mind, it provides a robust infrastructure for secure communications.

> !!!warning 
    **Important Note**: As of June 23, 2025, the VoxaCommunications Network has not reached MainNet. You can deploy applications to TestNet, but things are subject to change and break.

## Quick Start Options

Choose your path based on what you want to accomplish:

### 🚀 For Users
- **Want to join the network?** Start with [community channels](/general/community/) to connect with other users
- **Need support?** Check out our [community resources](/general/community/) for help

### 🏗️ For Developers & Node Operators
- **Set up your own node:** Follow our [NetNode setup guide](/guides/setup/netnode/)
- **Deploy applications:** Learn about [Docker container deployment](/guides/docker/deploying/)
- **Host your own instance:** Check out our [hosting guide](/guides/setup/hosting/)

### 💰 For Supporters
- **Want to support the project?** Learn about our [funding options](/general/funding/)

## Prerequisites

Before you begin, make sure you have:

- **For Node Setup:**
    - Docker (for containerized deployment) with Linux or WSL2 support
    - Docker configuration allowing **+10GB** of container RAM
    - OR Python (for non-containerized setup) with required modules
    - Git for version control
    - UnPnP Router (for non-containerized Python setup)

- **For Development:**
    - Basic familiarity with Docker and containerization
    - Understanding of networking concepts
    - Git version control knowledge

## Step-by-Step Setup

### 1. Setting Up a VoxaCommunications NetNode

The NetNode is the core component that connects you to the VoxaCommunications network:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Voxa-Communications/VoxaCommunications-NetNode
   cd VoxaCommunications-NetNode
   ```

2. **Start the node:**
   ```bash
   bash run.sh
   ```

3. **Configuration:** The setup process will handle most configuration automatically, but you may need to customize settings based on your environment.

For detailed instructions, see our [NetNode setup guide](/guides/setup/netnode/).

### 2. Deploying Your First Application

Once your node is running, you can deploy Docker containers to the network:

1. **Local endpoint:** Access `/apps/add_app.py` on your local node
2. **Follow the deployment process** as outlined in our [Docker deployment guide](/guides/docker/deploying/)

### 3. Hosting Your Own Instance

If you want to host your own VoxaCommunications instance:

- Follow our comprehensive [hosting guide](/guides/setup/hosting/) for detailed instructions
- Ensure you meet the system requirements outlined above

## Next Steps

### Join the Community

Connect with other VoxaCommunications users and developers:

- **Discord:** Join our [official Discord server](https://discord.gg/EDtPX5E4D4)
- **Telegram:** Our [preferred communication method](https://t.me/voxacommunications)
- **GitHub:** Contribute to development on [GitHub](https://github.com/Voxa-Communications)
- **Discussions:** Join technical discussions in our [GitHub Discussions](https://github.com/orgs/Voxa-Communications/discussions)

> 🚨 **Security Notice**: No admin or moderator will ever contact you without prior contact. Be aware of potential scammers.

### Support the Project

VoxaCommunications is community-funded. Consider supporting our development:

- **Patreon:** Regular monthly contributions with [sponsorship tiers](https://patreon.com/VoxaCommunications)
- **Open Collective:** Alternative funding platform
- **Sponsorships:** Website and repository sponsorships available from Bronze ($25/month) to Platinum ($500+/month)

For more details, visit our [funding page](/general/funding/).

### Explore Advanced Features

- **Learn more:** Visit our [About page](/learn/about/) to understand the platform better
- **Technical documentation:** Dive deeper into specific guides and technical details
- **Development:** Contribute to the Stellaris blockchain or Kytan fork projects

## Getting Help

If you run into issues:

1. **Check the guides:** Most common issues are covered in our detailed guides
2. **Community support:** Ask questions in our Discord or Telegram channels
3. **GitHub Issues:** Report bugs or request features on our GitHub repositories
4. **Documentation:** Browse through our comprehensive documentation

## Troubleshooting Common Issues

- **Docker RAM issues:** Ensure your Docker configuration allows for +10GB of container RAM
- **Networking problems:** Check your router's UnPnP settings for non-containerized setups
- **Installation failures:** Verify all prerequisites are met and dependencies are installed

## What's Next?

- Explore the various [guides](/guides/) for specific use cases
- Join our [community](/general/community/) to stay updated
- Consider [contributing](/general/funding/) to the project's development

Welcome to the VoxaCommunications ecosystem! We're excited to have you on board.
