#! /usr/bin/env bash
echo "Doing git pull..."
git pull
echo "Building a website..."
cd build
node build.js