#!/bin/bash

# Shadcn Tooltip Persistent Installer

# Maximum number of attempts
MAX_ATTEMPTS=50

# Delay between attempts (in seconds)
RETRY_DELAY=3

# Log file to track attempts
LOG_FILE="shadcn_tooltip_install.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Main installation attempt function
install_tooltip() {
    log_message "Attempting to install Shadcn UI Tooltip component..."
    bunx --bun shadcn@latest add tooltip
    return $?
}

# Retry loop
attempt=1
while [ $attempt -le $MAX_ATTEMPTS ]; do
    log_message "Attempt $attempt of $MAX_ATTEMPTS"
    
    # Try to install
    if install_tooltip; then
        log_message "✅ Successfully installed Shadcn UI Tooltip component!"
        exit 0
    fi
    
    # If installation failed, log the error and wait
    log_message "❌ Installation attempt failed. Waiting $RETRY_DELAY seconds before retrying..."
    
    # Increment attempt counter
    ((attempt++))
    
    # Wait before next attempt
    sleep $RETRY_DELAY
done

# If we've exhausted all attempts
log_message "❌ Failed to install Shadcn UI Tooltip after $MAX_ATTEMPTS attempts."
exit 1