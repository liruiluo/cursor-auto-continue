# Cursor-Specific Information

This document provides specific information about the Auto Continue extension when used with Cursor AI.

## Why This Extension Is Valuable for Cursor

Cursor AI integrates Claude's powerful AI capabilities, but Claude has a limit on the number of tool calls it can make in a single response. When this limit is reached, users typically need to manually click "Continue" or type "continue" to proceed. This extension automates that process, providing a smoother experience when working with Claude in Cursor.

## Installation in Cursor

Since Cursor is built on VS Code, installing the extension follows the same process:

### Method 1: Direct Installation

1. Open Cursor
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Auto Continue"
4. Click Install

### Method 2: Manual Installation

1. Download the .vsix file from the [GitHub releases page](https://github.com/risa-labs-inc/vscode-auto-continue/releases)
2. In Cursor, press Cmd+Shift+P (macOS) or Ctrl+Shift+P (Windows/Linux) to open the Command Palette
3. Type "Install from VSIX" and select that option
4. Browse to the downloaded .vsix file and select it

## Cursor-Specific Features

The extension has been optimized for Cursor in several ways:

1. **DOM Detection**: The extension specifically looks for Cursor's unique DOM elements related to Claude's tool call limits
2. **Theme Integration**: The UI adapts to Cursor's theme (light or dark)
3. **Multiple Detection Methods**: Uses multiple backup methods to ensure reliable detection across Cursor updates

## Troubleshooting in Cursor

If you encounter issues with the extension in Cursor:

1. **Extension Not Working**: Make sure the AUTO indicator is visible in the status bar and shows as enabled (green)
2. **Detection Problems**: If the extension isn't detecting tool call limits, you can:
   - Check the extension settings and increase the wait time
   - Disable and re-enable the extension
   - Restart Cursor
3. **Visual Glitches**: If you notice UI inconsistencies, try toggling between light and dark themes

## Feedback

If you encounter Cursor-specific issues or have suggestions for improvements:

1. Open an issue on the [GitHub repository](https://github.com/risa-labs-inc/vscode-auto-continue/issues)
2. Specify that you're using Cursor rather than VS Code
3. Include your Cursor version and operating system

---

This extension was built and tested specifically with Cursor's implementation of Claude AI in mind. 