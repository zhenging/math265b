#!/bin/bash
# This script is for local test only. Do not use it in production environment.
TARGET_DIRTORIES=(calculus cis241 econ201a)
echo 'Star to process directories'
for dir_basename in ${TARGET_DIRTORIES[@]}; do
  unset GIT_INDEX_FILE
  WORK_TREE=~/workspace/note-x/source/$dir_basename
  GIT_DIR=~/workspace/$dir_basename/.git
  echo 'Work tree =>' $WORK_TREE
  echo 'Git dir   =>' $GIT_DIR
  rm -rf $WORK_TREE
  mkdir -p $WORK_TREE
  echo 'Checking out =========>' $GIT_DIR
  git --work-tree=$WORK_TREE --git-dir=$GIT_DIR checkout -f
done
