#!/bin/bash

cd /Users/lienemilee/oasis-heardle

mkdir -p public/audio

names=(
  "dummy"
  "bag_it_up"
  "the_turning"
  "waiting_for_the_rapture"
  "the_shock_of_the_lightning"
  "im_outta_time"
  "get_off_your_high_horse_lady"
  "falling_down"
  "to_be_where_theres_life"
  "aint_got_nothin"
  "the_nature_of_reality"
  "soldier_on"
)

echo "Dig Out Your Soul song filenames:"
printf '%s\n' "${names[@]}"
