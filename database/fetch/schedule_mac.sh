#!/bin/bash
# Schedule the ScholarConnect sync to run every day on this Mac (uses macOS launchd).
#   bash schedule_mac.sh install      # daily at 08:00 (change HOUR/MINUTE below)
#   bash schedule_mac.sh run-now      # trigger it immediately to test
#   bash schedule_mac.sh status       # show the last log lines
#   bash schedule_mac.sh uninstall    # stop the daily job
# Add --apply behaviour by setting APPLY=1 below (needs the `mysql` command + MYSQL_* in .env).
HOUR=8
MINUTE=0
APPLY=0

LABEL="in.scholarconnect.sync"
DIR="$(cd "$(dirname "$0")" && pwd)"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
LOG="$DIR/../imported/sync.log"
PY="$(command -v python3)"
ARGS="<string>$DIR/sync.py</string>"
[ "$APPLY" = "1" ] && ARGS="$ARGS<string>--apply</string>"

case "$1" in
  install)
    case "$DIR" in
      "$HOME/Downloads"*|"$HOME/Desktop"*|"$HOME/Documents"*)
        echo "WARNING: macOS blocks background jobs from reading Downloads/Desktop/Documents."
        echo "Move the project first, e.g.:  mv ~/Downloads/\"WPL_Mini-Project-main 2\" ~/ScholarConnect"
        echo "then run this script again from ~/ScholarConnect/database/fetch"; exit 1;;
    esac
    mkdir -p "$HOME/Library/LaunchAgents" "$(dirname "$LOG")"
    cat > "$PLIST" <<PL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key><array><string>$PY</string>$ARGS</array>
  <key>WorkingDirectory</key><string>$DIR</string>
  <key>StartCalendarInterval</key><dict><key>Hour</key><integer>$HOUR</integer><key>Minute</key><integer>$MINUTE</integer></dict>
  <key>StandardOutPath</key><string>$LOG</string>
  <key>StandardErrorPath</key><string>$LOG</string>
</dict></plist>
PL
    launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null
    launchctl bootstrap "gui/$(id -u)" "$PLIST" && echo "Installed: sync runs daily at $(printf %02d:%02d $HOUR $MINUTE). Log: $LOG";;
  run-now)   launchctl kickstart -k "gui/$(id -u)/$LABEL" && echo "Started. Check: bash $0 status";;
  status)    tail -n 25 "$LOG" 2>/dev/null || echo "No log yet.";;
  uninstall) launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null; rm -f "$PLIST"; echo "Removed the daily job.";;
  *) echo "usage: bash $0 install | run-now | status | uninstall";;
esac
