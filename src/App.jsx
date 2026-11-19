import { useState, useRef, useEffect } from 'react'
import './App.css'

const studioSongs = [
  // Definitely Maybe
  { title: "Rock 'n' Roll Star", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Shakermaker", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Live Forever", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Up in the Sky", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Columbia", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Supersonic", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Bring It On Down", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Cigarettes & Alcohol", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Digsy's Dinner", file: "digsy_s_dinner.mp3", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Slide Away", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },
  { title: "Married with Children", album: "Definitely Maybe", image: "/images/definitely_maybe.jpg" },

  // (What's the Story) Morning Glory?
  { title: "Hello", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Roll With It", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Wonderwall", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Don't Look Back in Anger", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Hey Now!", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "The Swamp Song (Excerpt 1)", file: "swamp_song_1.mp3", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Some Might Say", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Cast No Shadow", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "She's Electric", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Morning Glory", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "The Swamp Song (Excerpt 2)", file: "swamp_song_2.mp3", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },
  { title: "Champagne Supernova", album: "(What's the Story) Morning Glory?", image: "/images/morning_glory.jpg" },

  // Be Here Now
  { title: "D'You Know What I Mean?", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "My Big Mouth", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "Magic Pie", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "Stand by Me", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "I Hope, I Think, I Know", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "The Girl in the Dirty Shirt", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "Fade In-Out", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "Don't Go Away", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "Be Here Now", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "All Around the World", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "It's Gettin' Better (Man!!)", album: "Be Here Now", image: "/images/be_here_now.jpg" },
  { title: "All Around the World (Reprise)", album: "Be Here Now", image: "/images/be_here_now.jpg" },

  // Standing on the Shoulder of Giants
  { title: "Fuckin' in the Bushes", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Go Let It Out", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Who Feels Love?", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Put Yer Money Where Yer Mouth Is", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Little James", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Gas Panic!", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Where Did It All Go Wrong?", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Sunday Morning Call", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "I Can See a Liar", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },
  { title: "Roll It Over", album: "Standing on the Shoulder of Giants", image: "/images/sotsog.jpeg" },

  // Heathen Chemistry
  { title: "The Hindu Times", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Force of Nature", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Hung in a Bad Place", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Stop Crying Your Heart Out", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Songbird", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Little by Little", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "A Quick Peep", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "(Probably) All in the Mind", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "She Is Love", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Born on a Different Cloud", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },
  { title: "Better Man", album: "Heathen Chemistry", image: "/images/heathen_chemistry.jpg" },

  // Don't Believe the Truth
  { title: "Turn Up the Sun", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Mucky Fingers", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Lyla", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Love Like a Bomb", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "The Importance of Being Idle", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "The Meaning of Soul", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Guess God Thinks I'm Abel", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Part of the Queue", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Keep the Dream Alive", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "A Bell Will Ring", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },
  { title: "Let There Be Love", album: "Don't Believe the Truth", image: "/images/dont_believe_the_truth.jpg" },

  // Dig Out Your Soul
  { title: "Bag It Up", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "The Turning", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "Waiting for the Rapture", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "The Shock of the Lightning", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "I'm Outta Time", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "(Get Off Your) High Horse Lady", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "Falling Down", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "To Be Where There's Life", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "Ain't Got Nothin", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "The Nature of Reality", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },
  { title: "Soldier On", album: "Dig Out Your Soul", image: "/images/dig_out_your_soul.jpg" },

  // The Masterplan
  { title: "Acquiesce", file: "acquiesce.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Underneath the Sky", file: "underneath_the_sky.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Talk Tonight", file: "talk_tonight.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Going Nowhere", file: "going_nowhere.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Fade Away", file: "fade_away.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "The Swamp Song", file: "the_swamp_song.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "I Am the Walrus (Live)", file: "i_am_the_walrus_live.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Listen Up", file: "listen_up.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Rockin' Chair", file: "rockin_chair.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Half the World Away", file: "half_the_world_away.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "(It's Good) To Be Free", file: "its_good_to_be_free.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Stay Young", file: "stay_young.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "Headshrinker", file: "headshrinker.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },
  { title: "The Masterplan", file: "the_masterplan.mp3", album: "The Masterplan", image: "/images/the_masterplan.jpg" },

  // B-Sides
  { title: "Take Me Away", album: "B-Sides", image: "/images/supersonic.jpg", file: "take_me_away.mp3", isBside: true },
  { title: "I Will Believe", album: "B-Sides", image: "/images/supersonic.jpg", file: "i_will_believe_live.mp3", isBside: true },
  { title: "Columbia (White Label Demo)", album: "B-Sides", image: "/images/supersonic.jpg", file: "columbia_white_label_demo.mp3", isBside: true },
  { title: "D'Yer Wanna Be a Spaceman?", album: "B-Sides", image: "/images/shakermaker.jpg", file: "dyer_wanna_be_a_spaceman.mp3", isBside: true },
  { title: "Alive (8 Track Demo)", album: "B-Sides", image: "/images/shakermaker.jpg", file: "alive_8_track_demo.mp3", isBside: true },
  { title: "Up In The Sky (Acoustic)", album: "B-Sides", image: "/images/live_forever.jpg", file: "up_in_the_sky_acoustic.mp3", isBside: true },
  { title: "Cloudburst", album: "B-Sides", image: "/images/live_forever.jpg", file: "cloudburst.mp3", isBside: true },
  { title: "Whatever", album: "(it was just a single)", image: "/images/whatever.jpg", file: "whatever.mp3", isBside: true },
  { title: "It's Better People", album: "B-Sides", image: "/images/roll_with_it.jpg", file: "its_better_people.mp3", isBside: true },
  { title: "Round Are Way", album: "B-Sides", image: "/images/wonderwall.jpg", file: "round_are_way.mp3", isBside: true },
  { title: "Step Out", album: "B-Sides", image: "/images/dont_look_back_in_anger.jpg", file: "step_out.mp3", isBside: true },
  { title: "Cum On Feel The Noize", album: "B-Sides", image: "/images/dont_look_back_in_anger.jpg", file: "cum_on_feel_the_noize.mp3", isBside: true },
  { title: "Angel Child (Demo)", album: "B-Sides", image: "/images/dyou_know_what_i_mean.jpg", file: "angel_child_demo.mp3", isBside: true },
  { title: "Heroes", album: "B-Sides", image: "/images/dyou_know_what_i_mean.jpg", file: "heroes.mp3", isBside: true },
  { title: "(I Got) The Fever", album: "B-Sides", image: "/images/stand_by_me.jpg", file: "i_got_the_fever.mp3", isBside: true },
  { title: "My Sister Lover", album: "B-Sides", image: "/images/stand_by_me.jpg", file: "my_sister_lover.mp3", isBside: true },
  { title: "The Fame", album: "B-Sides", image: "/images/all_around_the_world.jpg", file: "the_fame.mp3", isBside: true },
  { title: "Flashbax", album: "B-Sides", image: "/images/all_around_the_world.jpg", file: "flashbax.mp3", isBside: true },
  { title: "Street Fighting Man", album: "B-Sides", image: "/images/all_around_the_world.jpg", file: "street_fighting_man.mp3", isBside: true },
  { title: "Let's All Make Believe", album: "B-Sides", image: "/images/go_let_it_out.jpg", file: "lets_all_make_believe.mp3", isBside: true },
  { title: "(As Long As They've Got) Cigarettes In Hell", album: "B-Sides", image: "/images/go_let_it_out.jpg", file: "cigarettes_in_hell.mp3", isBside: true },
  { title: "One Way Road", album: "B-Sides", image: "/images/who_feels_love.jpg", file: "one_way_road.mp3", isBside: true },
  { title: "Helter Skelter", album: "B-Sides", image: "/images/who_feels_love.jpg", file: "helter_skelter.mp3", isBside: true },
  { title: "Carry Us All", album: "B-Sides", image: "/images/sunday_morning_call.jpg", file: "carry_us_all.mp3", isBside: true },
  { title: "Full On", album: "B-Sides", image: "/images/sunday_morning_call.jpg", file: "full_on.mp3", isBside: true },
  { title: "Just Getting Older", album: "B-Sides", image: "/images/the_hindu_times.jpg", file: "just_getting_older.mp3", isBside: true },
  { title: "Idler's Dream", album: "B-Sides", image: "/images/the_hindu_times.jpg", file: "idlers_dream.mp3", isBside: true },
  { title: "Thank You For The Good Times", album: "B-Sides", image: "/images/stop_crying_your_heart_out.jpg", file: "thank_you_for_the_good_times.mp3", isBside: true },
  { title: "Shout It Out Loud", album: "B-Sides", image: "/images/stop_crying_your_heart_out.jpg", file: "shout_it_out_loud.mp3", isBside: true },
  { title: "My Generation", album: "B-Sides", image: "/images/little_by_little_she_is_love.jpg", file: "my_generation.mp3", isBside: true },
  { title: "(You've Got) The Heart Of A Star", album: "B-Sides", image: "/images/songbird.jpg", file: "the_heart_of_a_star.mp3", isBside: true },
  { title: "Eyeball Tickler", album: "B-Sides", image: "/images/lyla.jpg", file: "eyeball_tickler.mp3", isBside: true },
  { title: "Won't Let You Down", album: "B-Sides", image: "/images/lyla.jpg", file: "wont_let_you_down.mp3", isBside: true },
  { title: "Pass Me Down The Wine", album: "B-Sides", image: "/images/the_importance_of_being_idle.jpg", file: "pass_me_down_the_wine.mp3", isBside: true },
  { title: "The Quiet Ones", album: "B-Sides", image: "/images/the_importance_of_being_idle.jpg", file: "the_quiet_ones.mp3", isBside: true },
  { title: "Sittin' Here In Silence (On My Own)", album: "B-Sides", image: "/images/let_there_be_love.jpg", file: "sittin_here_in_silence.mp3", isBside: true },
  { title: "Lord Don't Slow Me Down", album: "(i think it's just a single lmao)", image: "/images/lord_dont_slow_me_down.jpg", file: "lord_dont_slow_me_down.mp3", isBside: true },
  { title: "The Meaning Of Soul (Live at City of Manchester Stadium '05)", album: "B-Sides", image: "/images/lord_dont_slow_me_down.jpg", file: "the_meaning_of_soul_live.mp3", isBside: true },
  { title: "Falling Down (The Chemical Brothers Remix)", album: "B-Sides", image: "/images/falling_down.jpg", file: "falling_down_chemical_brothers_remix.mp3", isBside: true },
  { title: "I'm Outta Time (Remix)", album: "B-Sides", image: "/images/im_outta_time.jpg", file: "im_outta_time_remix.mp3", isBside: true },
  { title: "The Shock Of The Lightning (The Jagz Kooner Remix)", album: "B-Sides", image: "/images/the_shock_of_the_lightning.jpg", file: "the_shock_of_the_lightning_jagz_kooner_remix.mp3", isBside: true },
  { title: "Those Swollen Hand Blues", album: "B-Sides", image: "/images/falling_down.jpg", file: "those_swollen_hand_blues.mp3", isBside: true },
  { title: "Falling Down (The Gibb Mix)", album: "B-Sides", image: "/images/falling_down.jpg", file: "falling_down_the_gibb_mix.mp3", isBside: true },
  { title: "Falling Down (The Prodigy Version)", album: "B-Sides", image: "/images/falling_down.jpg", file: "falling_down_the_prodigy_version.mp3", isBside: true },

  // Bonus tracks
  { title: "Sad Song", file: "sad_song.mp3", album: "Definitely Maybe (Bonus)", image: "/images/definitely_maybe.jpg", isBonus: true },
  { title: "Bonehead's Bank Holiday", file: "boneheads_bank_holiday.mp3", album: "(What's the Story) Morning Glory? (Bonus)", image: "/images/morning_glory.jpg", isBonus: true },
  { title: "The Cage", file: "the_cage.mp3", album: "Heathen Chemistry (Hidden Track)", image: "/images/heathen_chemistry.jpg", isBonus: true },
  { title: "Can Y'See It Now? (I Can See It Now!!)", file: "can_ysee_it_now.mp3", album: "Don't Believe the Truth (Bonus)", image: "/images/dont_believe_the_truth.jpg", isBonus: true },
  { title: "I Believe in All", file: "i_believe_in_all.mp3", album: "Dig Out Your Soul (Bonus)", image: "/images/dig_out_your_soul.jpg", isBonus: true },
  { title: "Boy with the Blues", file: "boy_with_the_blues.mp3", album: "Dig Out Your Soul (Bonus)", image: "/images/dig_out_your_soul.jpg", isBonus: true },
  { title: "Strange Thing", file: "strange_thing.mp3", album: "Definitely Maybe (Bonus)", image: "/images/definitely_maybe.jpg", isBonus: true },
  { title: "If We Shadows (Demo)", file: "if_we_shadows.mp3", album: "Be Here Now (Bonus)", image: "/images/be_here_now.jpg", isBonus: true },
  { title: "Help! (Live in LA)", file: "help_live_la.mp3", album: "Morning Glory (Bonus)", image: "/images/morning_glory.jpg", isBonus: true },
  { title: "If We Shadows", file: "if_we_shadows_full_band.mp3", album: "Be Here Now (Bonus)", image: "/images/be_here_now.jpg", isBonus: true },
  { title: "Song 2", file: "song_2.mp3", album: "Blur", image: "/images/blur.jpg", isBonus: true },

  // Unreleased tracks ('91-'93)
  { title: "Alice", file: "alice.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Reminisce", file: "reminisce.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Colour My Life", file: "colour_my_life.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Take Me (Abraham Moss)", file: "take_me_abraham_moss.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "See The Sun", file: "see_the_sun.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Must Be The Music", file: "must_be_the_music.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Better Let You Know", file: "better_let_you_know.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Snakebite", file: "snakebite.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Must Be The Music (Live at the Boardwalk)", file: "must_be_the_music_live.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Take Me (Live at the Boardwalk)", file: "take_me_boardwalk.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Life In Vain", file: "life_in_vain.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "I Will Show", file: "i_will_show.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Better Let You Know (Live at the Boardwalk)", file: "better_let_you_know_live.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Must Be The Music (Rehearsal Demo)", file: "must_be_the_music_rehearsal.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Lock All The Doors", file: "lock_all_the_doors.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true },
  { title: "Setting Sun (Comin' On Strong)", file: "setting_sun.mp3", album: "Unreleased", image: "/images/oasis_1991.jpg", isUnreleased: true }
]

const CLIP_LENGTHS = [1, 3, 5, 10, 30]

function normalizeSong(song) {
  return song
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function getCoreTitle(song) {
  return normalizeSong(song.replace(/\s*\([^)]*\)\s*$/, ''))
}

function getFilename(songObj) {
  if (songObj.file) return songObj.file
  return songObj.title
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '') + '.mp3'
}

function highlightMatch(title, query) {
  if (!query) return title
  const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  const regex = new RegExp(`(${escapedQuery})`, 'gi')
  const parts = title.split(regex)

  return parts.map((part, i) => 
    regex.test(part) ? (
      <span key={i} style={{ color: '#11d65a', fontWeight: 'bold' }}>{part}</span>
    ) : (
      part
    )
  )
}

function App() {
  const [clipLength, setClipLength] = useState(1)
  const [unlockedIndex, setUnlockedIndex] = useState(0)

  const [guess, setGuess] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  
  const [showHints, setShowHints] = useState(() => {
    return localStorage.getItem('oasis_heardle_hints') !== 'false'
  })

  const [status, setStatus] = useState('ready')
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [guesses, setGuesses] = useState([])
  const [answerObj, setAnswerObj] = useState(null)

  const [includeBonus, setIncludeBonus] = useState(() => {
    return localStorage.getItem('oasis_heardle_bonus') === 'true'
  })

  const [includeUnreleased, setIncludeUnreleased] = useState(() => {
    return localStorage.getItem('oasis_heardle_unreleased') === 'true'
  })

  const [includeBsides, setIncludeBsides] = useState(() => {
    return localStorage.getItem('oasis_heardle_bsides') === 'true'
  })

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem('oasis_heardle_streak') || '0', 10)
  })

  const [maxStreak, setMaxStreak] = useState(() => {
    return parseInt(localStorage.getItem('oasis_heardle_max_streak') || '0', 10)
  })
  
  const [usedSongs, setUsedSongs] = useState([])

  const audioRef = useRef(null)
  const timeoutRef = useRef(null)
  const inputRef = useRef(null)

  const activeSongPool = studioSongs.filter(song => {
  if (song.isBonus && !includeBonus) return false
  if (song.isUnreleased && !includeUnreleased) return false
  if (song.isBside && !includeBsides) return false
  return true
})

  const matchingSongs = !showHints || guess.trim() === '' || status !== 'playing'
    ? []
    : activeSongPool.filter(song =>
        song.title.toLowerCase().includes(guess.toLowerCase())
      ).slice(0, 6)

  const activeUsedCount = usedSongs.filter(title =>
    activeSongPool.some(song => song.title === title)
  ).length

  function toggleBonusTracks() {
    const nextValue = !includeBonus
    setIncludeBonus(nextValue)
    localStorage.setItem('oasis_heardle_bonus', String(nextValue))

    if (!nextValue && answerObj?.isBonus) {
      resetActiveRound()
    }
  }

  function toggleUnreleasedTracks() {
    const nextValue = !includeUnreleased
    setIncludeUnreleased(nextValue)
    localStorage.setItem('oasis_heardle_unreleased', String(nextValue))

    if (!nextValue && answerObj?.isUnreleased) {
      resetActiveRound()
    }
  }

  function toggleBsidesTracks() {
    const nextValue = !includeBsides
    setIncludeBsides(nextValue)
    localStorage.setItem('oasis_heardle_bsides', String(nextValue))

    if (!nextValue && answerObj?.isBside) {
      resetActiveRound()
    }
  }

  function resetActiveRound() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlayingAudio(false)
    setAnswerObj(null)
    setGuesses([])
    setGuess('')
    setShowDropdown(false)
    setStatus('ready')
  }

  function startRound() {
    const availablePool = activeSongPool.filter(song => !usedSongs.includes(song.title))

    if (availablePool.length === 0) {
      setStatus('completed')
      if (audioRef.current) audioRef.current.pause()
      return
    }

    const randomSong = availablePool[Math.floor(Math.random() * availablePool.length)]

    setUsedSongs(prev => [...prev, randomSong.title])

    setAnswerObj(randomSong)
    setGuess('')
    setShowDropdown(false)
    setGuesses([])
    setClipLength(CLIP_LENGTHS[0])
    setUnlockedIndex(0)
    setStatus('playing')
    setIsPlayingAudio(false)

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  function playClip() {
    if (!audioRef.current || status !== 'playing') return

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    audioRef.current.currentTime = 0
    audioRef.current.play().then(() => {
      setIsPlayingAudio(true)

      timeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
        }
        setIsPlayingAudio(false)

        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, clipLength * 1000)
    }).catch(err => {
      console.log("Playback error:", err)
      setIsPlayingAudio(false)
    })
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.key === 'h' || e.key === 'H') && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        const nextHints = !showHints
        setShowHints(nextHints)
        localStorage.setItem('oasis_heardle_hints', String(nextHints))
        if (!nextHints) setShowDropdown(false)
        return
      }

      if (status === 'ready') {
        if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault()
          startRound()
        }
        return
      }

      if ((e.key === ' ' || e.code === 'Space') && document.activeElement?.tagName !== 'INPUT' && status === 'playing') {
        e.preventDefault()
        playClip()
      }

      if (e.key === 'Enter' && (status === 'won' || status === 'lost' || status === 'completed')) {
        e.preventDefault()

        if (status === 'completed') {
          setUsedSongs([])
          setStreak(0)
          localStorage.setItem('oasis_heardle_streak', '0')
          startRound()
        } else {
          startRound()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [status, clipLength, includeBonus, includeUnreleased, includeBsides, showHints])

  function handleClipSelect(length, index) {
    if (index <= unlockedIndex) {
      setClipLength(length)
      return
    }

    if (status === 'playing' && index === unlockedIndex + 1) {
      const skipEntry = {
        song: '[skip]',
        correct: false,
        isSkip: true
      }

      const updatedGuesses = [...guesses, skipEntry]
      setGuesses(updatedGuesses)

      if (updatedGuesses.length >= CLIP_LENGTHS.length) {
        setStatus('lost')
        if (audioRef.current) audioRef.current.pause()

        setStreak(0)
        setUsedSongs([])
        localStorage.setItem('oasis_heardle_streak', '0')
      } else {
        setUnlockedIndex(index)
        setClipLength(length)
      }
    }
  }

  function submitGuess(event) {
    event.preventDefault()
    if (!guess.trim() || status !== 'playing' || !answerObj) return

    const normalizedGuess = normalizeSong(guess)
    const isCorrect =
      normalizedGuess === normalizeSong(answerObj.title) ||
      normalizedGuess === getCoreTitle(answerObj.title)

    const updatedGuesses = [...guesses, {
      song: guess.trim(),
      correct: isCorrect,
      isSkip: false
    }]

    setGuesses(updatedGuesses)
    setGuess('')
    setShowDropdown(false)

    if (inputRef.current) {
      inputRef.current.blur()
    }
    
    if (isCorrect) {
      const updatedUsedSongs = [...usedSongs, answerObj.title]
      setUsedSongs(updatedUsedSongs)

      const newStreak = streak + 1
      setStreak(newStreak)
      localStorage.setItem('oasis_heardle_streak', newStreak)

      if (newStreak > maxStreak) {
        setMaxStreak(newStreak)
        localStorage.setItem('oasis_heardle_max_streak', newStreak)
      }

      const remainingPool = activeSongPool.filter(song => !updatedUsedSongs.includes(song.title))

      if (remainingPool.length === 0) {
        setStatus('completed')
        if (audioRef.current) audioRef.current.pause()
      } else {
        setStatus('won')
        if (audioRef.current) audioRef.current.pause()
      }
    } else if (updatedGuesses.length >= CLIP_LENGTHS.length) {
      setStatus('lost')
      if (audioRef.current) audioRef.current.pause()

      setStreak(0)
      setUsedSongs([])
      localStorage.setItem('oasis_heardle_streak', '0')
    } else {
      const nextIndex = Math.min(unlockedIndex + 1, CLIP_LENGTHS.length - 1)
      setUnlockedIndex(nextIndex)
      setClipLength(CLIP_LENGTHS[nextIndex])
    }
  }

  function handleGiveUp() {
    if (status !== 'playing') return

    setGuesses([...guesses, { song: 'gave up', correct: false, isSkip: false }])
    setStatus('lost')
    setShowDropdown(false)

    if (audioRef.current) audioRef.current.pause()

    setStreak(0)
    setUsedSongs([])
    localStorage.setItem('oasis_heardle_streak', '0')
  }

  const audioSrc = answerObj ? `/audio/${getFilename(answerObj)}` : undefined

  return (
    <main className="app">
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      <header className="header">
        <div className="logo" onClick={resetActiveRound} title="Back to start">
          oasis<span> heardle</span>
        </div>
        <div className="header-progress">
          <strong>{activeUsedCount}</strong> / {activeSongPool.length}
        </div>
        <div className="header-stats">
          streak: <strong>{streak}</strong> &nbsp; best: <strong>{maxStreak}</strong>
        </div>
      </header>

      <section className="game">
        {status === 'completed' ? (
          <div className="result">
            <h2>wow!</h2>
            <img 
              src="/images/liam_noel_90s.jpg" 
              alt="Liam and Noel in the 90s" 
              className="completion-art"
              onMouseEnter={(e) => { e.currentTarget.src = "/images/liam_noel_venice.jpg" }}
              onMouseLeave={(e) => { e.currentTarget.src = "/images/liam_noel_90s.jpg" }}
            />
            <p>you actually guessed all {activeSongPool.length} songs and b-sides.</p>
            <p>now you can go on twitter and show this as proof you deserve your tickets.</p>
            <button
              className="start-button"
              onClick={() => {
                setUsedSongs([])
                setStreak(0)
                localStorage.setItem('oasis_heardle_streak', '0')
                startRound()
              }}
            >
              play again
            </button>
          </div>
        ) : (
          <>
            <div className="audio-box">
              <button
                className="play-icon"
                onClick={status === 'ready' ? startRound : playClip}
                aria-label={status === 'ready' ? "Start game" : "Play audio snippet"}
              >
                {status === 'ready' ? '▶' : (isPlayingAudio ? '⏹' : '▶')}
              </button>
              <div>
                <strong>
                  {status === 'ready'
                    ? 'press start'
                    : isPlayingAudio 
                      ? `playing ${clipLength}s clip` 
                      : `play clip (${clipLength}s)`}
                </strong>
                <p style={{ margin: 0 }}>
                  press space to play, enter to guess, hints with [h]. HINTS:{' '}
                  <span style={{ color: showHints ? '#11d65a' : '#d32929', fontWeight: 'bold' }}>
                    {showHints ? 'ON' : 'OFF'}
                  </span>
                </p>
              </div>
            </div>

            {status === 'ready' ? (
              <>
                <button className="start-button" onClick={startRound}>
                  start
                </button>

                <div className="mode-toggles">
                  <button
                    type="button"
                    className={`mode-button ${includeBonus ? 'active' : ''}`}
                    onClick={toggleBonusTracks}
                  >
                    bonus: {includeBonus ? 'ON' : 'OFF'}
                  </button>

                  <button
                    type="button"
                    className={`mode-button ${includeUnreleased ? 'active' : ''}`}
                    onClick={toggleUnreleasedTracks}
                  >
                    unreleased: {includeUnreleased ? 'ON' : 'OFF'}
                  </button>

                  <button
                    type="button"
                    className={`mode-button ${includeBsides ? 'active' : ''}`}
                    onClick={toggleBsidesTracks}
                  >
                    b-sides: {includeBsides ? 'ON' : 'OFF'}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="clip-options">
                  <div className="clip-buttons">
                    {CLIP_LENGTHS.map((length, index) => {
                      const isLocked = status === 'playing'
                        ? index > unlockedIndex + 1
                        : index > unlockedIndex

                      return (
                        <button
                          key={length}
                          className={`${clipLength === length ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                          onClick={() => handleClipSelect(length, index)}
                          disabled={isLocked}
                        >
                          {length}s
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Autocomplete Dropdown & Guess Form Wrapper */}
                <div style={{ position: 'relative', width: '100%' }}>
                  {showHints && showDropdown && matchingSongs.length > 0 && (
                    <div className="autocomplete-dropdown">
                      {matchingSongs.map((song, idx) => (
                        <div 
                          key={idx} 
                          className="autocomplete-item"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setGuess(song.title)
                            setShowDropdown(false)
                            if (inputRef.current) {
                              inputRef.current.focus()
                            }
                          }}
                        >
                          {highlightMatch(song.title, guess)}
                        </div>
                      ))}
                    </div>
                  )}

                  <form
                    className="guess-area"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (status === 'playing') {
                        setShowDropdown(false)
                        submitGuess(e)
                      } else {
                        startRound()
                      }
                    }}
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder={status === 'playing' ? "take a guess..." : "press [enter] to try again"}
                      value={guess}
                      onChange={event => {
                        setGuess(event.target.value)
                        setShowDropdown(true)
                      }}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setShowDropdown(false)}
                      disabled={status !== 'playing'}
                      autoComplete="off"
                    />

                    {status === 'playing' ? (
                      <>
                        <button className="submit-button" type="submit">
                          guess
                        </button>
                        <button type="button" className="skip-button" onClick={handleGiveUp}>
                          give up
                        </button>
                      </>
                    ) : (
                      <button type="button" className="submit-button" onClick={startRound}>
                        again!!
                      </button>
                    )}
                  </form>
                </div>

                <p className="guess-count">
                  {guesses.length} / {CLIP_LENGTHS.length} guesses used
                </p>
              </>
            )}

            {status === 'won' && answerObj && (
              <div className="result">
                <h2>madferit!!!</h2>
                <img
                  src={answerObj.image}
                  alt={answerObj.album}
                  className="album-art"
                />
                <p>
                  that's <span style={{ fontWeight: '600', color: '#fff' }}>{answerObj.title}</span> from <span style={{ fontWeight: '600', color: '#fff' }}>{answerObj.album}</span>, nice!
                </p>
              </div>
            )}

            {status === 'lost' && answerObj && (
              <div className="result">
                <h2>what for??</h2>
                <img
                  src={answerObj.image}
                  alt={answerObj.album}
                  className="album-art"
                />
                <p>
                  that was <span style={{ fontWeight: '600', color: '#fff' }}>{answerObj.title}</span> on <span style={{ fontWeight: '600', color: '#fff' }}>{answerObj.album}</span>
                </p>
              </div>
            )}

            {guesses.length > 0 && (
              <div className="guess-history">
                {guesses.slice().reverse().map((item, index) => {
                  const actualNumber = guesses.length - index
                  const statusColor = item.isSkip ? '#a3a3a3' : (item.correct ? '#11d65a' : '#d32929')

                  return (
                    <div className="guess-item" key={actualNumber}>
                      <span>
                        {actualNumber}.{' '}
                        <span style={{ color: statusColor, fontStyle: item.isSkip ? 'italic' : 'normal' }}>
                          {item.song}
                        </span>
                      </span>
                      <span>
                        {item.isSkip ? '⏭️' : (item.correct ? '✅' : '❌')}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </section>

      <footer>
        made by idxaly <span>-</span> for knebworth n6
      </footer>
    </main>
  )
}

export default App