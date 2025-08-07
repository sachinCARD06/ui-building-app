# SonarQube Setup for UI Building App

## Overview
This document explains how to set up and use SonarQube for code quality analysis in the UI Building App project.

## Current Setup

### 1. SonarQube Scanner
- ✅ Installed globally via npm: `sonarqube-scanner`
- ✅ Configuration file: `sonar-project.properties`
- ✅ Scanner version: 7.2.0.5079

### 2. Configuration
The `sonar-project.properties` file is configured for:
- Project key: `ui-building-app`
- Project name: `UI Building App`
- Source directory: `src/`
- Exclusions: `node_modules/`, `dist/`, `build/`, `public/`, config files, etc.

## Running Analysis

### Option 1: Local SonarQube Server (Recommended)
1. Install SonarQube server:
   ```bash
   # Download from https://www.sonarqube.org/downloads/
   # Or use Docker:
   docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
   ```

2. Start SonarQube server:
   ```bash
   # If using Docker:
   docker start sonarqube
   ```

3. Access SonarQube at: http://localhost:9000
   - Default credentials: admin/admin
   - Create a new project and get the token

4. Update `sonar-project.properties`:
   ```properties
   sonar.host.url=http://localhost:9000
   sonar.login=your-generated-token
   ```

5. Run analysis:
   ```bash
   sonar-scanner
   ```

### Option 2: SonarCloud (Cloud-based)
1. Go to https://sonarcloud.io
2. Create an account and organization
3. Create a new project
4. Update `sonar-project.properties`:
   ```properties
   sonar.host.url=https://sonarcloud.io
   sonar.organization=your-organization-key
   sonar.login=your-generated-token
   ```

5. Run analysis:
   ```bash
   sonar-scanner
   ```

### Option 3: Quick Code Quality Check
For immediate code quality analysis without SonarQube server:

```bash
# Run comprehensive analysis
npm run analyze

# Run quick quality check
npm run quality
```

## Analysis Results

### Current Status
- ✅ TypeScript compilation: No errors
- ⚠️ ESLint: 6 issues found
- ✅ Project structure: Well organized
- ✅ Dependencies: Up to date

### Issues Found
1. **React Refresh Issues**: Some UI components export both components and constants
   - Files affected: `badge.tsx`, `button.tsx`, `form.tsx`, `navigation-menu.tsx`, `toggle.tsx`
   - Solution: Move constants to separate files

2. **Unused Variable**: `actionTypes` in `use-toast.ts`
   - Solution: Remove or use the variable

## Recommendations

### 1. Fix ESLint Issues
```bash
# Auto-fix some issues
npm run lint -- --fix
```

### 2. Add Testing
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Add test scripts to package.json
```

### 3. Add Code Coverage
```bash
# Install coverage tools
npm install --save-dev @types/jest jest-environment-jsdom
```

### 4. Continuous Integration
Set up GitHub Actions or similar CI/CD to run SonarQube analysis automatically.

## Useful Commands

```bash
# Run full analysis
npm run analyze

# Quick quality check
npm run quality

# Fix linting issues
npm run lint -- --fix

# Check TypeScript
npx tsc --noEmit

# Format code
npm run format
```

## Troubleshooting

### SonarQube Server Issues
- Check if server is running: `curl http://localhost:9000`
- Check logs: `docker logs sonarqube`
- Restart server: `docker restart sonarqube`

### Scanner Issues
- Update scanner: `npm update -g sonarqube-scanner`
- Check configuration: `sonar-scanner --version`
- Validate properties: `sonar-scanner -Dsonar.projectKey=test`

## Next Steps
1. Fix the ESLint issues identified
2. Set up a local SonarQube server or SonarCloud account
3. Add unit tests for components
4. Configure continuous integration
5. Set up code coverage reporting 