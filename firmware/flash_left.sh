#!/usr/bin/env bash
set -u

VOL="/Volumes/NICENANO/"
UF2="./artifacts/my_keyboard_left.uf2"

TIMEOUT=1800   # seconds
INTERVAL=0.2 # seconds

echo "Waiting for volume: $VOL (timeout: ${TIMEOUT}s)"

deadline=$((SECONDS + TIMEOUT))
while [[ ! -d "$VOL" ]]; do
  if (( SECONDS >= deadline )); then
    echo "Timeout: $VOL not mounted."
    exit 1
  fi
  sleep "$INTERVAL"
done

echo "connected to left side"

# Copy, but ignore errors (and don't crash the script)
# Also silence normal output; keep stderr out too.
cp -f "$UF2" "$VOL/" >/dev/null 2>&1 || true

# Best-effort flush
sync >/dev/null 2>&1 || true

echo "done (copy attempted; errors ignored)"



