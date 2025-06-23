---
title: Setting up VoxaCommunications-NetNode
description: Basic Guide
---

## Requirements:

- Docker (If using Containers)
    - Linux, or WSL2 Based Containers
    - Docker config, must allow for over **+10GB** of Container RAM
- Python (If running without a Container)
    - UnPnP Router
    - Required modules installed, as listed in [`requirements.txt`](https://github.com/Voxa-Communications/VoxaCommunications-NetNode/blob/dev/requirements.txt)
- Git (For VCS)

## Setup:
1. Clone `Voxa-Communications/VoxaCommunications-NetNode` using Git
2. Run: `bash run.sh` To start the node. From here everything else should be handled.

## Configuring:
Visit the `\config` directory for `.json` config files. The main file for configuration is `settings.json`.

An example config looks like this:
```json
{
    "node-network-level": "testnet",
    "node-autoupdate-config": true,
    // server-settings dosent matter too much, as ssu will have an adapter/translator that allows p2p requests to access this internal api
    "server-settings": {
        "host": "0.0.0.0",
        "port": 9999
    },
    "features": {
        "enable-transaction-fee": true,
        "enable-transaction-signing": true,
        "enable-block-validation": true,
        "enable-async-operations": true,
        "enable-transaction-history": true,
        "enable-network-sync": true,
        "enable-wallet-management": true,
        "enable-smart-contracts": false,
        "enable-multi-signature": false,
        "enable-kytan-vpn": true,
        "enable-upnpc-port-forwarding": true,
        "enable-ssu": true,
        "enable-dns": true,
        "enable-app-deployment": true
    }
}
```
Comments are defined using JS comment syntax, but must be as a new line.

## Benchmarking
If you are using `dev` builds, you should benchmark the performance of your Node, to do so, follow the instructions provided:

1. `cd scripts`
2. `bash benchmark.sh` - This will auto run the `src/cli` command needed to benchmark the Node
3. Submit Details and Benchmarks to our discord, outlined in [Community](general/community)