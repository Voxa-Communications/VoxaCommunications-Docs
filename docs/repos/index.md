---
title: VoxaCommunications Repository Documentation
description: Comprehensive documentation for all VoxaCommunications repositories
---

# VoxaCommunications Repository Documentation

Welcome to the comprehensive documentation hub for all VoxaCommunications repositories. This section provides detailed technical documentation, guides, and resources for each component of the VoxaCommunications ecosystem.

> !!! warning "Documentation Sync Notice"
    Repository documentation may not be up to date with the latest versions, as each repo has to be checked out manually. If you wish to update these docs run: `git checkout dev` in the respective repository directories.

## 🏗️ Repository Overview

The VoxaCommunications ecosystem consists of multiple interconnected repositories, each serving a specific purpose in creating a secure, decentralized communication network:

### Core Components

| Repository | Purpose | Status | Language |
|------------|---------|--------|----------|
| **NetNode** | Decentralized networking platform and application deployment | 🟢 Active | Python/Rust |
| **Registry** | Identity management and node authentication | 🟢 Active | Python |

---

## 📦 VoxaCommunications-NetNode

The core decentralized networking platform that enables secure communication and application deployment.

### 🎯 **What is NetNode?**

VoxaCommunications-NetNode is an innovative decentralized networking platform that revolutionizes secure communication through advanced **request splitting technology**, dynamic routing, and integrated application deployment capabilities. It represents a significant advancement over traditional anonymity networks like TOR.

### 🔑 **Key Innovations**

- **Request Splitting Technology**: Divides requests into multiple parts with cryptographic verification
- **Decentralized App Platform**: Deploy and manage containerized applications across the network
- **Advanced P2P Networking**: Multi-protocol support with UPnP and NAT traversal
- **Security & Sandboxing**: Container isolation and comprehensive security policies

### 📚 **Documentation Quick Links**

- [📖 Complete NetNode Documentation](VoxaCommunications-NetNode/README.md)
- [🚀 Getting Started Guide](VoxaCommunications-NetNode/docs/GETTING_STARTED.md)
- [⚙️ Installation Guide](VoxaCommunications-NetNode/docs/INSTALLATION.md)
- [🏗️ Architecture Overview](VoxaCommunications-NetNode/docs/ARCHITECTURE.md)
- [📡 API Reference](VoxaCommunications-NetNode/docs/API_REFERENCE.md)
- [🚀 App Deployment](VoxaCommunications-NetNode/docs/APP_DEPLOYMENT.md)
- [🔒 Security Guide](VoxaCommunications-NetNode/docs/SECURITY.md)

### 🛠️ **Technical Stack**

- **Backend**: Python, Rust
- **Networking**: P2P protocols, UPnP, NAT traversal
- **Containerization**: Docker, Docker Compose
- **Security**: Cryptographic verification, sandboxing
- **APIs**: REST API, CLI interface

---

## 🔐 VoxaCommunications-Registry

The central security and identity management system for the decentralized VoxaCommunications Network.

### 🎯 **What is Registry?**

The VoxaCommunications Registry serves as the sole centralized component in an otherwise fully decentralized communications network. It provides secure identity management, node registration, and authentication services while preserving user privacy and network integrity.

### 🔑 **Core Functions**

- **Node Registration & Management**: Maintains authoritative records of legitimate network nodes
- **Anonymous Identity Provision**: Creates anonymous user identifiers for secure communication
- **Authentication Services**: Provides JWT-based authentication and two-factor authentication (2FA)
- **Security Gateway**: Prevents malicious nodes from participating in the network

### 📚 **Documentation Quick Links**

- [📖 Complete Registry Documentation](VoxaCommunications-Registry/README.md)
- [⚙️ Setup Guide](VoxaCommunications-Registry/SETUP.md)
- [🔒 Security Documentation](VoxaCommunications-Registry/SECURITY.md)
- [🤝 Contributing Guide](VoxaCommunications-Registry/CONTRIBUTING.md)

### 🛠️ **Technical Stack**

- **Backend**: Python Flask
- **Database**: MySQL
- **Authentication**: JWT tokens, TOTP-based 2FA
- **Security**: Encryption, tokenization, audit logging

---

## 🚀 Quick Start Guide

### Prerequisites

- Docker and Docker Compose
- Python 3.8+
- Git

### Getting Started with NetNode

```bash
# Clone the repository
git clone https://github.com/Voxa-Communications/VoxaCommunications-NetNode.git
cd VoxaCommunications-NetNode

# Start the node (auto-installs dependencies)
chmod +x run.sh
./run.sh

# In a new terminal, deploy your first app
python src/cli.py app deploy
```

Visit `http://localhost:9999/docs` to explore the API!

### Getting Started with Registry

```bash
# Clone the repository
git clone https://github.com/Voxa-Communications/VoxaCommunications-Registry.git
cd VoxaCommunications-Registry

# Start the registry
chmod +x run.sh
./run.sh
```

---

## 🤝 Contributing

We welcome contributions to all VoxaCommunications repositories! Here's how to get involved:

### For Developers

1. **Choose a Repository**: Pick the component you're interested in working on
2. **Read the Contributing Guide**: Each repo has specific contribution guidelines
3. **Set Up Development Environment**: Follow the setup instructions in each repository
4. **Find an Issue**: Look for "good first issue" labels or create new feature proposals

### For Documentation

1. **Improve Docs**: Help us keep documentation current and comprehensive
2. **Create Tutorials**: Write guides for common use cases
3. **Report Issues**: Found outdated or incorrect information? Let us know!

### Community Channels

- **Telegram**: [Join our Telegram](https://t.me/voxacommunications)
- **Discord**: [Join our Discord](https://discord.gg/EDtPX5E4D4)
- **GitHub Discussions**: Use GitHub issues and discussions in each repository

---

## 📊 Development Status

### Current Features

- ✅ **Decentralized Application Platform**: Deploy and manage containerized applications
- ✅ **P2P Networking**: Multi-protocol networking with UPnP and NAT traversal
- ✅ **Security & Authentication**: JWT-based auth, 2FA, and security policies
- ✅ **Load Balancing**: Intelligent traffic distribution and health monitoring
- ✅ **CLI & API Interfaces**: Comprehensive command-line and REST API tools
- ✅ **Multi-Node Development**: Local testing with multiple nodes

### Roadmap

The VoxaCommunications project is actively developing towards creating the most secure and private decentralized communication network. Check individual repository roadmaps for specific feature timelines.

---

## 📄 License

All VoxaCommunications repositories are open-source projects. Check individual repository LICENSE files for specific licensing terms.

---

## 🆘 Support

Need help? Here are your options:

- **Documentation**: Start with the comprehensive docs in each repository
- **Community Forums**: Join our Telegram or Discord channels
- **GitHub Issues**: Report bugs or request features in the appropriate repository
- **FAQ**: Check the FAQ sections in individual repositories

---

*Last updated: June 2025*