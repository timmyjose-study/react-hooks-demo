#!/usr/bin/env bash

echo "Deleting ios and android directories..."
rm -rf ios android

echo "Performing prebuild..."
npx expo prebuild