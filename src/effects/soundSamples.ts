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
      ['Negative Notification', 'film-special-effects-negative-notification-132470'],
      ['Warning Notification', 'film-special-effects-warning-notification-199277'],
      ['Error Notification 012', 'film-special-effects-error-notification-012-132111'],
      ['Error Notification 02', 'film-special-effects-error-notification-02-126514'],
      ['Error Notification 010', 'film-special-effects-error-notification-010-206498'],
      ['Error Notification · 129258', 'film-special-effects-error-notification-129258'],
      ['Error Notification · 119113', 'film-special-effects-error-notification-119113'],
      ['Error Notification · 153314', 'film-special-effects-error-notification-153314'],
      ['Error Notification · 352286', 'film-special-effects-error-notification-352286'],
      ['UI Error Denied Sound 2', 'technology-ui-error-denied-sound-2-547856'],
    ],
  },
  {
    label: '스테이지 실패',
    samples: [
      ['Melancholy UI Chime', 'musical-melancholy-ui-chime-47804'],
      ['Wrong Answer · 126515', 'film-special-effects-wrong-answer-126515'],
      ['Wrong Answer · 129254', 'film-special-effects-wrong-answer-129254'],
      ['Marimba Game Over', 'film-special-effects-marimba-game-over-250960'],
      ['Sad Chime Effect', 'film-special-effects-sad-chime-effect-99818'],
      ['Classic Game Action Negative 4', 'film-special-effects-classic-game-action-negative-4-224418'],
      ['Failure 1', 'film-special-effects-failure-1-89170'],
      ['Failure 2', 'musical-failure-2-89169'],
      ['Negative', 'film-special-effects-negative-101682'],
      ['UI Error Denied Sound 4', 'film-special-effects-ui-error-denied-sound-4-547863'],
    ],
  },
  {
    label: '스테이지 성공',
    samples: [
      ['Success Notification', 'film-special-effects-success-notification-132473'],
      ['Level Up Chime', 'film-special-effects-level-up-chime-132474'],
      ['Reward Chime', 'film-special-effects-reward-chime-144757'],
      ['Reward Notification', 'musical-reward-notification-140576'],
      ['Level Complete', 'film-special-effects-level-complete-143022'],
      ['Level Up', 'film-special-effects-level-up-191997'],
      ['Level Passed · 142971', 'film-special-effects-level-passed-142971'],
      ['Level Up 02', 'film-special-effects-level-up-02-199574'],
      ['Achievement Unlock', 'film-special-effects-achievement-unlock-243762'],
      ['Level Passed · 143039', 'film-special-effects-level-passed-143039'],
    ],
  },
] as const satisfies readonly [SampleGroup, ...SampleGroup[]];
