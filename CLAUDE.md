# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ottehr is a production-ready, open-source EHR (Electronic Health Record) system built on the [Oystehr](https://www.oystehr.com) platform. It consists of:

- **Patient Portal** (`apps/intake`) - Patient-facing web app for appointments, check-in, paperwork
- **EHR** (`apps/ehr`) - Staff-facing EHR for managing appointments, encounters, charting, eRx, RCM
- **Backend** (`packages/zambdas`) - Serverless endpoints deployed as Oystehr Zambdas

## Common Commands

### Development

```bash
npm run apps:start              # Start all apps (intake, ehr, zambdas) with local Terraform apply
npm run apps:start:no-apply     # Start all apps without Terraform apply
npm run intake:start            # Start only Patient Portal (localhost:3002)
npm run ehr:start               # Start only EHR (localhost:4002)
npm run zambdas:start           # Start only backend server
```

### Building & Linting

```bash
npm run build                   # Build all packages (runs turbo build lint)
npm run lint                    # Run ESLint across all packages
npm run lint:fix                # Fix linting issues
npm run intake:build            # Build Patient Portal only
npm run ehr:build               # Build EHR only
```

### Testing

```bash
npm test                        # Run all unit tests via turbo
npm run intake:e2e:local        # Run Patient Portal E2E tests (headless)
npm run intake:e2e:local:ui     # Run Patient Portal E2E tests with Playwright UI
npm run ehr:e2e:local           # Run EHR E2E tests (headless)
npm run ehr:e2e:local:ui        # Run EHR E2E tests with Playwright UI
```

For running tests in specific packages:

```bash
cd packages/zambdas && npm test           # Run zambdas unit tests
cd packages/utils && npm test             # Run utils unit tests
cd apps/ehr && npm run unit-tests         # Run EHR unit tests
cd apps/ehr && npm run component-tests    # Run EHR component tests
```

### Deployment

```bash
cd deploy && npm run apply-local          # Apply Terraform for local env
cd deploy && npm run apply-staging        # Apply Terraform for staging
cd deploy && ENV=local npm run generate   # Generate Terraform config from spec
```

## Architecture

### Monorepo Structure

- Uses npm workspaces with Turbo for build orchestration
- Node.js v22+ required

### Apps (`apps/`)

- **intake** - React + Vite, MUI components, Auth0 authentication
- **ehr** - React + Vite, MUI components, includes charting, telemedicine (Amazon Chime), RCM

### Packages (`packages/`)

- **zambdas** - Backend FaaS endpoints, organized by domain (`ehr/`, `patient/`, `shared/`, `cron/`, `subscriptions/`)
- **utils** - Shared utilities (FHIR helpers, validation, types, frontend helpers)
- **ui-components** - Shared React components used by both apps
- **spec** - Schema definitions for static configuration in `config/`
- **tsconfig** - Shared TypeScript configuration

### Backend (Zambdas)

The backend runs locally via an Express server (`packages/zambdas/src/local-server/index.ts`) that emulates the Oystehr Zambda runtime. In production, endpoints are deployed as Oystehr Zambdas.

Key zambda directories:

- `src/ehr/` - EHR-specific endpoints (80+ zambdas for charting, appointments, labs, etc.)
- `src/patient/` - Patient portal endpoints (booking, check-in, paperwork, etc.)
- `src/shared/` - Shared zambdas used by both apps
- `src/subscriptions/` - FHIR subscription handlers

### Configuration

- Environment configs: `packages/zambdas/.env/{env}.json` (application variables)
- App env files: `apps/{app}/env/.env.{env}` (frontend variables)
- Terraform vars: `deploy/{env}.tfvars`
- Static config: `config/oystehr/` (Oystehr resource definitions)

### Infrastructure

- Uses Terraform for IaC (Infrastructure as Code)
- Supports AWS (S3 + CloudFront) or GCP (Cloud Storage) for hosting
- Oystehr provides FHIR API, authentication, and zambda runtime

## Key Patterns

### Feature Flags

EHR feature flags are defined in `apps/ehr/src/constants/feature-flags.ts` and controlled via `VITE_APP_*` environment variables.

### FHIR Resources

The codebase extensively uses FHIR R4 resources. Utilities for working with FHIR are in `packages/utils/lib/fhir/`.

### State Management

- React Query (TanStack Query) for server state
- Zustand for client state

### ESLint Rules

- Explicit return types required for functions
- Import sorting via `simple-import-sort`
- React Query exhaustive deps enforced
- Unused variables must be prefixed with `_`

## Environment Setup

1. Create Oystehr account at [oystehr.com](https://oystehr.com)
2. Copy template files:
   - `packages/zambdas/.env/local.template.json` -> `packages/zambdas/.env/local.json`
   - `deploy/terraform.tfvars.template` -> `deploy/local.tfvars`
   - `deploy/backend.config.template` -> `deploy/backend.config`
3. Run `cd deploy && npm run terraform-setup` (one-time)
4. Run `npm run apps:start`

## E2E Testing Setup

E2E tests require ClickSend API for SMS verification. Run `./scripts/e2e-test-setup.sh` to configure test credentials.
