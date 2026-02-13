#!/usr/bin/env bash

set -e

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 output.png image1.png image2.png [image3 ...]"
  exit 1
fi

OUTPUT="$1"
shift

# Stack images vertically (top to bottom)
magick "$@" -append "$OUTPUT"

echo "Created $OUTPUT"
