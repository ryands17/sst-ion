# SST Ion

This is a project made with [SST v3](https://sst.dev/) (Ion) to see how Pulumi works as compared to the CDK.

## Prerequisites

- Node LTS v20 or later
- PNPM
- AWS account and credentials setup locally

## Setup

- Clone this repo
- Install the dependencies
- Run `pnpm sst deploy` to see resources deployed

## Commands

- `pnpm sst dev` - Run the app in dev mode with live changes
- `pnpm sst deploy --stage <STAGE>` - Deploy the app to a given stage
- `pnpm sst remove --stage <STAGE>` - Remove the deployed resources of a stage
