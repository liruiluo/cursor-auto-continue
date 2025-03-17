# VS Code Auto Continue Extension

An extension that automatically continues conversations when Claude's AI hits the tool call limit.

## Features

- **Automatic Continuation**: Detects when Claude AI reaches tool call limits and automatically continues the conversation
- **Visual Indicator**: Shows an "AUTO" indicator in the status bar and chat window for clear visibility
- **Theme-Aware UI**: Adapts to light and dark themes for seamless integration with your editor
- **Configurable Timing**: Adjust the wait time before auto-continuing

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Auto Continue"
4. Click Install

### From VSIX File

1. Download the .vsix file from the [releases page](https://github.com/YOUR_USERNAME/vscode-auto-continue/releases)
2. In VS Code/Cursor, select "Extensions" from the sidebar
3. Click "..." at the top of the Extensions panel
4. Select "Install from VSIX..."
5. Navigate to and select the downloaded .vsix file

## Usage

The extension works automatically once installed. When Claude AI reaches its tool call limit, Auto Continue will detect this and automatically continue the conversation after a brief delay.

### Status Bar Controls

- Click the "AUTO" indicator in the status bar to toggle the extension on/off
- The status bar shows the current state:
  - Green: Enabled and ready
  - Red: Disabled

### Configuration

To adjust settings:

1. Go to File > Preferences > Settings (or Code > Preferences > Settings on macOS)
2. Search for "Auto Continue"
3. Adjust the following settings:
   - `autoContinue.enabled`: Enable/disable the extension
   - `autoContinue.waitTimeMs`: Wait time in milliseconds before auto-continuing

## Requirements

- VS Code 1.60.0 or higher
- Works in Cursor AI as well

## Development

### Building from source

```bash
git clone https://github.com/YOUR_USERNAME/vscode-auto-continue.git
cd vscode-auto-continue
npm install
npm run compile
npm run package
```

## License

ISC License

## Acknowledgements

Created to enhance the experience with Claude AI in VS Code/Cursor. 