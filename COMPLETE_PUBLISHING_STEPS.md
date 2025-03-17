# Complete Publishing Steps

This document provides the remaining steps needed to publish the Auto Continue extension to both the VS Code Marketplace and Cursor Marketplace.

## A. VS Code Marketplace Publishing

The repository has been set up, but we need to complete the VS Code Marketplace registration and publishing:

### 1. Create a Publisher Account on VS Code Marketplace

1. Go to [VS Code Marketplace Management](https://marketplace.visualstudio.com/manage)
2. Sign in with a Microsoft Account
3. If you don't already have a publisher, choose "Create Publisher"
4. Fill in the details:
   - Publisher ID: `risa-labs` (this should match the "publisher" field in package.json)
   - Display Name: `Risa Labs`
   - Detailed description about your organization
5. Complete the registration process

### 2. Create a Personal Access Token (PAT)

1. Go to [Azure DevOps](https://dev.azure.com)
2. Sign in with the same Microsoft account
3. Click on your profile picture → Personal Access Tokens
4. Click "New Token"
5. Fill in the details:
   - Name: `VS Code Marketplace Publishing`
   - Organization: `All accessible organizations`
   - Expiration: Choose appropriate date
   - Scopes: Custom defined → Marketplace → Manage
6. Click "Create" and **copy the token** (you'll only see it once)

### 3. Publish the Extension

Once you have the token, run:

```bash
vsce publish -p <your-access-token>
```

Or store the token for future use:

```bash
vsce login risa-labs
# Enter your token when prompted
vsce publish
```

### 4. Verify Publication

1. Go to [VS Code Marketplace](https://marketplace.visualstudio.com/vscode)
2. Search for "Auto Continue"
3. Verify your extension appears and the details are correct

## B. Cursor Marketplace Submission

To submit to the Cursor Marketplace:

### 1. Prepare Your Submission Email

1. Create an email to support@cursor.sh with:
   - Subject: "New Cursor Extension Submission: Auto Continue"
   - Attach the .vsix file (located at `vscode-auto-continue-0.1.0.vsix`)
   - Include the following information:

```
Dear Cursor Team,

I'm submitting a new extension for the Cursor Marketplace called "Auto Continue." This extension automatically continues conversations when Claude AI hits the tool call limit.

Extension Details:
- Name: Auto Continue
- Description: Automatically responds with 'continue' when Claude hits the tool call limit
- GitHub Repository: https://github.com/risa-labs-inc/vscode-auto-continue
- Version: 0.1.0

Key Features:
- Automatic continuation when Claude AI reaches tool call limits
- Visual indicators in the status bar and chat window
- Theme-aware UI that adapts to light and dark themes
- Configurable wait time before auto-continuing

The .vsix file is attached to this email. Please let me know if you need any additional information.

Thank you,
[Your Name]
Risa Labs
```

### 2. Join Cursor Discord

You can also reach out to the Cursor team via their Discord server:
1. Join the [Cursor Discord](https://discord.gg/cursor)
2. Look for channels related to extensions or development
3. Reach out to the team about your submission

## C. Monitor and Maintain

After publishing:

1. Monitor for user feedback and issues
2. Fix bugs and release updates as needed
3. For updates, increment the version number in package.json, update the CHANGELOG.md, and run `vsce publish` again
4. For Cursor updates, repeat the email process with the new version

---

Remember to keep your Personal Access Token secure. You may want to set up token renewal reminders before it expires. 