# Publishing Instructions

This document provides step-by-step instructions for publishing the Auto Continue extension to both the VS Code Marketplace and Cursor Marketplace.

## Prerequisites

1. Visual Studio Code installed
2. Node.js and npm installed
3. A VS Code Marketplace publisher account
4. A GitHub account
5. A Cursor account (for Cursor marketplace)

## Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name it "vscode-auto-continue"
4. Choose public or private visibility
5. Click "Create repository"
6. Follow the instructions to push your existing repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/vscode-auto-continue.git
git branch -M main
git push -u origin main
```

## Publish to VS Code Marketplace

### 1. Create a Personal Access Token (PAT)

1. Go to [Azure DevOps](https://dev.azure.com)
2. Sign in with your Microsoft account
3. Click on your profile picture in the top-right corner
4. Select "Personal access tokens"
5. Click "New Token"
6. Name it "VS Code Marketplace Publishing"
7. Set the organization to "All accessible organizations"
8. Set the expiration date as needed
9. Under "Scopes", select "Custom defined" and choose "Marketplace > Manage"
10. Click "Create"
11. Copy the token (you'll only see it once)

### 2. Create a Publisher (if you don't have one)

```bash
vsce create-publisher PUBLISHER_NAME
```

Follow the prompts to complete the publisher creation.

### 3. Login with your PAT

```bash
vsce login PUBLISHER_NAME
```

You'll be prompted to enter your Personal Access Token.

### 4. Update the Extension

Make sure your `package.json` has the correct publisher name:

```json
{
  "publisher": "YOUR_PUBLISHER_NAME",
  ...
}
```

### 5. Package and Publish

```bash
vsce package
vsce publish
```

## Publish to Cursor Marketplace

As of now, Cursor doesn't have a public marketplace submission process like VS Code. Instead:

1. Package your extension (`vsce package`)
2. Submit your extension via one of these methods:
   - Reach out to Cursor team via their Discord server
   - Email the packaged extension to the Cursor team at support@cursor.sh
   - If they have an online submission form, use that

Include the following information in your submission:

- Extension name and description
- The .vsix file
- GitHub repository link
- Contact information
- Any special instructions or requirements

## Update Version and Republish

When you need to update the extension:

1. Update the version in `package.json`
2. Update `CHANGELOG.md` with the changes
3. Commit the changes to Git
4. Push to GitHub
5. Run `vsce publish` again

---

**Note:** These instructions may change as marketplace requirements evolve. Always check the latest documentation for VS Code and Cursor extension publishing. 