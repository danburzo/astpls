module.exports = {
	sections: [
		{
			title: {
				ro: 'Caracterele corecte',
				en: 'The correct characters'
			},
			rows: [
				// Ăă
				{
					groups: [
						{
							caption: {
								ro: 'cu breve',
								en: 'with breve'
							},
							items: [
								{
									char: 'Ă',
									codes: [
										{
											code: 'U+0102',
											label: 'LATIN CAPITAL LETTER A WITH BREVE'
										}
									]
								},
								{
									char: 'ă',
									codes: [
										{
											code: 'U+0103',
											label: 'LATIN SMALL LETTER A WITH BREVE'
										}
									]
								}
							],
							correct: true
						},
						{
							caption: {
								ro: 'nu cu tildă',
								en: 'not with tilde'
							},
							items: [
								{
									char: 'Ã',
									codes: [
										{
											code: 'U+00C3',
											label: 'LATIN CAPITAL LETTER A WITH TILDE'
										}
									]
								},
								{
									char: 'ã',
									codes: [
										{
											code: 'U+00E3',
											label: 'LATIN SMALL LETTER A WITH TILDE'
										}
									]
								}
							],
							correct: false
						},
						{
							caption: {
								ro: 'nu cu caron',
								en: 'not with caron'
							},
							items: [
								{
									char: 'Ǎ',
									codes: [
										{
											code: 'U+01CD',
											label: 'LATIN CAPITAL LETTER A WITH CARON'
										}
									]
								},
								{
									char: 'ǎ',
									codes: [
										{
											code: 'U+01CE',
											label: 'LATIN SMALL LETTER A WITH CARON'
										}
									]
								}
							],
							correct: false
						}
					]
				},
				// Șș
				{
					groups: [
						{
							caption: {
								ro: 'cu virgulă',
								en: 'with comma below'
							},
							correct: true,
							items: [
								{
									char: 'Ș',
									codes: [
										{
											code: 'U+0218',
											label: 'LATIN CAPITAL LETTER S WITH COMMA BELOW'
										}
									]
								},
								{
									char: 'ș',
									codes: [
										{
											code: 'U+0219',
											label: 'LATIN SMALL LETTER S WITH COMMA BELOW'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu cu sedilă',
								en: 'not with cedilla'
							},
							correct: false,
							items: [
								{
									char: 'Ş',
									codes: [
										{
											code: 'U+015E',
											label: 'LATIN CAPITAL LETTER S WITH CEDILLA'
										}
									]
								},
								{
									char: 'ş',
									codes: [
										{
											code: 'U+015F',
											label: 'LATIN SMALL LETTER S WITH CEDILLA'
										}
									]
								}
							]
						}
					]
				},
				// Țț
				{
					groups: [
						{
							caption: {
								ro: 'cu virgulă',
								en: 'with comma below'
							},
							correct: true,
							items: [
								{
									char: 'Ț',
									codes: [
										{
											code: 'U+021A',
											label: 'LATIN CAPITAL LETTER T WITH COMMA BELOW'
										}
									]
								},
								{
									char: 'ț',
									codes: [
										{
											code: 'U+021B',
											label: 'LATIN SMALL LETTER T WITH COMMA BELOW'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu cu sedilă',
								en: 'not with cedilla'
							},
							correct: false,
							items: [
								{
									char: 'Ţ',
									codes: [
										{
											code: 'U+0162',
											label: 'LATIN CAPITAL LETTER T WITH CEDILLA'
										}
									]
								},
								{
									char: 'ţ',
									codes: [
										{
											code: 'U+0163',
											label: 'LATIN SMALL LETTER T WITH CEDILLA'
										}
									]
								}
							]
						}
					]
				},
				// Apostrof
				{
					groups: [
						{
							caption: {
								ro: 'apostrof',
								en: 'apostrophe'
							},
							correct: true,
							items: [
								{
									char: '<span class="dim">abc</span>’',
									codes: [
										{
											code: 'U+2019',
											label: 'RIGHT SINGLE QUOTATION MARK'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu apostrof drept',
								en: 'not plain apostrophe'
							},
							correct: false,
							items: [
								{
									char: '<span class="dim">abc</span>\'',
									codes: [
										{
											code: 'U+0027',
											label: 'APOSTROPHE'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu prim',
								en: 'not prime'
							},
							correct: false,
							items: [
								{
									char: '<span class="dim">abc</span>′',
									codes: [
										{
											code: 'U+2032',
											label: 'PRIME'
										}
									]
								}
							]
						}
					]
				},
				// Ghilimele
				{
					groups: [
						{
							caption: {
								ro: '99 jos, 99 sus',
								en: '99 down, 99 up'
							},
							correct: true,
							items: [
								{
									char: '„<span class="dim">abc</span>”',
									codes: [
										{
											code: 'U+201E',
											label: 'DOUBLE LOW-9 QUOTATION MARK'
										},
										{
											code: 'U+201D',
											label: 'RIGHT DOUBLE QUOTATION MARK'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu 99 jos, 66 sus',
								en: 'not 99 down, 66 up'
							},
							correct: false,
							items: [
								{
									char: '„<span class="dim">abc</span>“',
									codes: [
										{
											code: 'U+201E',
											label: 'DOUBLE LOW-9 QUOTATION MARK'
										},
										{
											code: 'U+201C',
											label: 'LEFT DOUBLE QUOTATION MARK'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu 66 sus, 99 sus',
								en: 'not 66 up, 99 up'
							},
							correct: false,
							items: [
								{
									char: '“<span class="dim">abc</span>”',
									codes: [
										{
											code: 'U+201C',
											label: 'LEFT DOUBLE QUOTATION MARK'
										},
										{
											code: 'U+201D',
											label: 'RIGHT DOUBLE QUOTATION MARK'
										}
									]
								}
							]
						},
						{
							caption: {
								ro: 'nu ghilimele drepte',
								en: 'not plain quotes'
							},
							correct: false,
							items: [
								{
									char: '"<span class="dim">abc</span>"',
									codes: [
										{
											code: 'U+0022',
											label: 'QUOTATION MARK'
										},
										{
											code: 'U+0022',
											label: 'QUOTATION MARK'
										}
									]
								}
							]
						}
					]
				},
				// Ghilimele franțuzești
				{
					groups: [
						{
							caption: {
								ro: 'ghilimele franțuzești',
								en: 'guillemets'
							},
							correct: true,
							items: [
								{
									char: '<span class="dim">„a</span>«<span class="dim">b</span>»<span class="dim">c”</span>',
									codes: [
										{
											code: 'U+00AB',
											label: 'LEFT-POINTING DOUBLE ANGLE QUOTATION MARK'
										},
										{
											code: 'U+00BB',
											label: 'RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
};
