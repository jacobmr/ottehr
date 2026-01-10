# Epic: Modernize Frontend Dependencies & Telehealth Stack

**Priority:** Medium
**Created:** 2026-01-10
**Status:** Backlog

## Overview
Modernize the forked Ottehr codebase to use current dependencies and evaluate telehealth provider options.

## Background
The current codebase has several outdated dependencies that cause build warnings and limit Node.js version compatibility. As a fork, we have freedom to modernize without upstream constraints, while maintaining FHIR backend (Oystehr) compatibility.

## Stories

### 1. Telehealth Provider Evaluation
**Current:** Amazon Chime SDK (Node 18-22 constraint, AWS lock-in)

**Evaluate alternatives based on:**
- [ ] **Cost** - Per-minute pricing, monthly minimums, overage charges
- [ ] **Complexity** - SDK size, React integration, learning curve
- [ ] **HIPAA compliance** - BAA availability, encryption, audit logs
- [ ] **Node compatibility** - Support for Node 22+
- [ ] **Features** - Recording, screen share, waiting room, mobile support

**Candidates:**
| Provider | Pricing Model | HIPAA | Open Source | Notes |
|----------|--------------|-------|-------------|-------|
| Daily.co | Per-minute | Yes (BAA) | No | Simple API, good DX |
| LiveKit | Self-host or cloud | Yes | Yes | WebRTC-native, full control |
| Twilio Video | Per-minute | Yes (BAA) | No | Mature, enterprise-grade |
| 100ms | Per-minute | Yes | No | Modern API, competitive pricing |
| Chime (upgrade) | Per-minute | Yes | No | Already integrated, needs SDK update |

### 2. ESLint 9 Upgrade
- Migrate from ESLint 8.x to 9.x
- Update config format (flat config)
- Remove deprecated `@humanwhocodes/*` packages

### 3. Dependency Audit & Fixes
- Run `npm audit fix`
- Address 36 vulnerabilities (24 low, 4 moderate, 8 high)
- Replace `lodash.get` with native optional chaining

### 4. Node.js Version Standardization
- Pin to Node 22 LTS across all environments
- Update CI/CD configurations
- Verify all dependencies support Node 22+

## Acceptance Criteria
- [ ] Zero npm warnings during install
- [ ] Zero high/critical vulnerabilities
- [ ] Telehealth works on Node 22+
- [ ] All FHIR integrations remain functional

## Decision Log
_Record decisions here as they're made_

---
