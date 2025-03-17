#!/bin/bash

# This script will help you prepare and send the Cursor Auto Continue extension submission email

echo "========================================================"
echo "  Cursor Auto Continue Extension Submission Helper"
echo "========================================================"
echo ""
echo "This script will help you send your extension to the Cursor team."
echo ""
echo "You have two options to send the email:"
echo ""
echo "1. Using Mail.app (Recommended)"
echo "   - A new Mail.app window should be open"
echo "   - Create a new email message (Cmd+N)"
echo "   - Use 'support@cursor.sh' as the recipient"
echo "   - Use 'New Cursor Extension Submission: Cursor Auto Continue' as the subject"
echo "   - Paste the content from your clipboard (Cmd+V)"
echo "   - Attach the VSIX file from your Desktop"
echo "   - Send the email"
echo ""
echo "2. Using Thunderbird"
echo "   - A new Thunderbird window should be open"
echo "   - Create a new email message"
echo "   - Use 'support@cursor.sh' as the recipient"
echo "   - Use 'New Cursor Extension Submission: Cursor Auto Continue' as the subject"
echo "   - Paste the content from your clipboard (Cmd+V)"
echo "   - Attach the VSIX file from your Desktop"
echo "   - Send the email"
echo ""
echo "Your VSIX file has been copied to your Desktop for easy access."
echo "The email content has been copied to your clipboard. Just paste it in your email."
echo ""

# Open the VSIX file location in Finder for easy access
open ~/Desktop/

echo "Would you like to open Mail.app again? (y/n)"
read choice
if [[ "$choice" == "y" ]]; then
  open -a Mail
fi

echo "Would you like to open Thunderbird again? (y/n)"
read choice
if [[ "$choice" == "y" ]]; then
  open -a Thunderbird
fi

echo ""
echo "After sending the email, don't forget to post on the Cursor Discord to notify the team about your submission."
echo "Discord link: https://discord.gg/cursor"
echo ""
echo "Thank you for submitting your extension to the Cursor Marketplace!" 