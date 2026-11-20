type Sample = readonly [title: string, pixabayPath: string];
type SampleGroup = { label: string; samples: readonly [Sample, ...Sample[]] };

export const soundSampleGroups = [
  {
    label: '디저트 전달',
    samples: [
      ['UI Click Wooden', 'film-special-effects-ui-click-wooden-634791'],
      ['Tap on Wooden Table', 'household-tap-on-wooden-table-44998'],
      ['Putting Something Onto Table', 'film-special-effects-putting-something-onto-table-94531'],
      ['Small Wood Block', 'film-special-effects-small-wood-block-64458'],
      ['Stiff Wooden Tap', 'film-special-effects-stiff-wooden-tap-42877'],
      ['Wood Effect', 'film-special-effects-wood-effect-254997'],
      ['Wood Block', 'film-special-effects-wood-block-105066'],
      ['Tapping on Desk', 'household-tapping-on-desk-85718'],
      ['Wooden Door Knock', 'film-special-effects-wooden-door-knock-97641'],
      ['Cracker Foley 4 Far', 'household-cracker-foley-4-far-30264'],
    ],
  },
  {
    label: '트레이 가득 참',
    samples: [
      ['Soft UI Warning Alert 1', 'film-special-effects-soft-ui-warning-alert-1-614153'],
      ['Soft Alert', 'film-special-effects-soft-alert-81627'],
      ['Negative Notification', 'film-special-effects-negative-notification-132470'],
      ['Warning Notification', 'film-special-effects-warning-notification-199277'],
      ['Error Notification 02', 'film-special-effects-error-notification-02-126514'],
      ['Soft Notification', 'film-special-effects-soft-notification-124468'],
      ['Soft Tone 001', 'technology-soft-tone-001-9755'],
      ['Ambient Flute Notification 1', 'musical-ambient-flute-notification-1-185273'],
      ['Soft Fantasy Digital Alert', 'film-special-effects-magical-notification-tone-soft-fantasy-digital-alert-438278'],
      ['Soft Landing Intro · Modern Stereo', 'film-special-effects-soft-landing-intro-modern-stereo-332450'],
    ],
  },
  {
    label: '스테이지 실패',
    samples: [
      ['Marimba Game Over', 'film-special-effects-marimba-game-over-250960'],
      ['Sad Chime Effect', 'film-special-effects-sad-chime-effect-99818'],
      ['Game Over · Orchestral Stinger', 'musical-game-over-orchestral-stinger-cartoon-defeat-546515'],
      ['Game Over Classic', 'musical-game-over-classic-206486'],
      ['Game Over · Alphix', 'musical-game-over-417465'],
      ['Game Over 39', 'musical-game-over-39-199830'],
      ['Game Over · Ivan Luzan', 'film-special-effects-game-over-160612'],
      ['Game Over · Freesound Community', 'film-special-effects-game-over-38511'],
      ['Failure 2', 'musical-failure-2-89169'],
      ['Game Over 31', 'film-special-effects-game-over-31-179699'],
    ],
  },
  {
    label: '스테이지 성공',
    samples: [
      ['Positive Orchestral Jingle', 'positive-orchestral-jingle-21444'],
      ['Reward Chime', 'film-special-effects-reward-chime-144757'],
      ['Victory Fanfare', 'musical-victory-fanfare-152480'],
      ['Level Up Fanfare', 'musical-level-up-fanfare-151765'],
      ['Level Complete', 'film-special-effects-level-complete-143022'],
      ['UI Complete', 'film-special-effects-ui-complete-243461'],
      ['Ringing Success · Short 2', 'musical-ringing-success-short-2-version-635614'],
      ['Shine 5', 'film-special-effects-shine-5-268908'],
      ['Shine 8', 'film-special-effects-shine-8-268901'],
      ['Intro Sound 2', 'film-special-effects-intro-sound-2-269294'],
    ],
  },
] as const satisfies readonly [SampleGroup, ...SampleGroup[]];
