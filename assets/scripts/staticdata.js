var gamestaticdata = {
    animators: [
        {
            "id": 0,
            "name": "Leg3nd Magician",
            "icon": "leg3nd.png",
            "effect": "-$AMOUNT$ enemies required to complete a zone.",
            "bonus": "-$AMOUNT$",
            "maxLevel": 5,
            "costFormula": "leg3ndMagician",
            "effectFormula": "linear",
            "params": [1]
        },
        {
            "id": 1,
            "name": "Animator Gamers",
            "icon": "handsome_blueberry.png",
            "effect": "Start with $AM_FORMAT$ <coin></coin> coins when you prestige.",
            "bonus": "+$AM_FORMAT$",
            "maxLevel": 0,
            "costFormula": "exponential",
            "effectFormula": "animatorGamers",
            "params": []
        },
        {
            "id": 2,
            "name": "Placeholder Animator",
            "icon": "ph2.png",
            "effect": "Increases all coins gained by $AMOUNT$%.",
            "bonus": "+$AMOUNT$%",
            "maxLevel": 0,
            "costFormula": "linear1",
            "effectFormula": "linear",
            "params": [10]
        },
        {
            "id": 3,
            "name": "Tribot Animations",
            "icon": "tribot.png",
            "effect": "+$AMOUNT$% DPS.",
            "bonus": "+$AMOUNT$%",
            "maxLevel": 0,
            "costFormula": "linear1",
            "effectFormula": "linear",
            "params": [5]
        },
        {
            "id": 4,
            "name": "Placeholder Animator",
            "icon": "ph2.png",
            "effect": "+$AMOUNT$% Damage Per Click.",
            "bonus": "+$AMOUNT$%",
            "maxLevel": 0,
            "costFormula": "linear1",
            "effectFormula": "linear",
            "params": [10]
        },
        {
            "id": 5,
            "name": "Placeholder Animator",
            "icon": "ph2.png",
            "effect": "+$AMOUNT$% <scoin></scoin> soul coins gained from bosses.",
            "bonus": "+$AMOUNT$%",
            "maxLevel": 0,
            "costFormula": "linear1",
            "effectFormula": "linear",
            "params": [5]
        },
        {
            "id": 6,
            "name": "Placeholder Animator",
            "icon": "ph2.png",
            "effect": "+$AMOUNT$% duration of boss timers.",
            "bonus": "+$AMOUNT$%",
            "maxLevel": 0,
            "costFormula": "linear1",
            "effectFormula": "diminishing",
            "params": [200, -0.008]
        }
    ],
    zones: [
        {
            "id": 0,
            "name": "Rocky Ridge",
            "enemies": [
                { name: "Stickman", texture: "stickman.png" },
                { name: "Fast Stickman", texture: "fast_stickman.png"},
                { name: "Buff Stickman", texture: "buff_stickman.png" },
                { name: "Pistol Stickman", texture: "pistol_stickman.png"},
                { name: "Beginner Magician", texture: "beginner_magician.png"}
            ],
            "boss": { name: "Machine Gun Stickman", texture: "machine_gun.png" },
        }
    ],
    characters: [
        {
            "id": 0,
            "name": "Helping Hand",
            "cost": "5",
            "df": -1,
            "multiplier25": 0,
            "multiplier1000": 0,
            "description": "A cursor of epic proportions. Level it up to increase your soul coins per click.",
            "icon": "helping_hand.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Index Finger", type: "selfBoost", amount: "100", flavor: "The helping hand is somewhat weak by itself. Upgrade it to make it more powerful." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Middle Finger", type: "selfBoost", amount: "100", flavor: "Whoever thought that clicking with two fingers would be twice as effective?" },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Ring Finger", type: "selfBoost", amount: "100", flavor: "As you continue to add more and more fingers, the strength of your clicks grows exponentially." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Thumb Finger", type: "selfBoost", amount: "150", flavor: "Wait, is this even a finger? You aren't exactly sure, but who are you to pass up an upgrade?" },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Pinky Finger", type: "selfBoost", amount: "200", flavor: "Do not underestimate the strength of the pinky finger." },
            ]
        },
        {
            "id": 1,
            "name": "Stickman",
            "cost": "50",
            "df": 0,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This stickman has volunteered himself to your cause. He doesn't seem all that smart, but you could use some extra hands.",
            "icon": "stickman.png",
            "upgrades": [
                { order: 1, icon: "adrenaline.png", level: 10, name: "Adrenaline", type: "selfBoost", amount: "100", flavor: "Feeling energized, the Stickman jumps back into his job with newly fueled enthusiasm." },
                { order: 2, icon: "running.png", level: 25, name: "Cross-Country Training", type: "selfBoost", amount: "150", flavor: "You feel slightly irritated about the Stickman's continuing clumsiness. You decide that cross-country training will improve performance." },
                { order: 3, icon: "jumping.png", level: 50, name: "Jumping Exercises", type: "selfBoost", amount: "200", flavor: "With the Stickman's obvious inability to traverse cliffs, you set him to work to improve his jump height and distance." },
                { order: 4, icon: "brain.png", level: 75, name: "Mental Workout", type: "selfBoost", amount: "250", flavor: "None of this training is working very well! Then it hits you. The Stickman needs to improve his poor mental capacity." },
                { order: 5, icon: "double_mouse.png", level: 100, name: "Second Mouse", type: "clickBoost", amount: "1", flavor: "Exasperated with the Stickman's poor performance, you give him the task of clicking a mouse. Twice the clicks!" },
            ]
        },
        {
            "id": 2,
            "name": "Smart Stickman",
            "cost": "320",
            "df": 1,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "He knows a lot of things, some of which can be very useful. So smart, he's never lost a game of cards in his whole life.",
            "icon": "smart_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Smarter Stickman", type: "selfBoost", amount: "100", flavor: "Blessed with extraordinary brainpower, the Smart Stickman seeks to increase his IQ to 300." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Supreme Brainpower", type: "selfBoost", amount: "150", flavor: "The Smart Stickman's head swells to accomodate his ever expanding brain." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Massive Brain", type: "selfBoost", amount: "200", flavor: "The Smart Stickman has now achieved his IQ goal of 300. Very impressive!" },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "301 IQ", type: "selfBoost", amount: "250", flavor: "Just when you thought he couldn't get any smarter..." }
            ]
        },
        {
            "id": 3,
            "name": "Fast Stickman",
            "cost": "2000",
            "df": 2,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "Doesn't even need to sprint in order to outrun an average stickman, this fellow is one of the fastest stickmen in the lands. Just make sure he doesn't crash into things.",
            "icon": "fast_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Caffeinated Sprinting", type: "selfBoost", amount: "100", flavor: "You begin to consider limiting the amount of coffee he's allowed to have in the mornings, because this is ridiculous." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Obstacle Course", type: "selfBoost", amount: "150", flavor: "With his speed almost doubled, the Fast Stickman now must train to avoid obstacles that he can barely see." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "A Lot of Speed", type: "selfBoost", amount: "200", flavor: "He's beginning to appear blurred." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Speed Classes", type: "allDamageBoost", amount: "25", flavor: "Having reached his ideal speed, the Fast Stickman extends his training to your other stickmen." },
            ]
        },
        {
            "id": 4,
            "name": "Stick Swordsman",
            "cost": "12500",
            "df": 3,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "The weapon of choice for most stickmen is a ranged weapon, but this stickman has taken to training with his blades. He hopes to learn enough to impress Liam himself.",
            "icon": "swordsman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Poisoned Blades", type: "selfBoost", amount: "100", flavor: "By coating his blades with poison, he is now able to neutralize his enemies much more efficiently. The downside is that they cannot be used as steak knivesany more." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Dual Wielding", type: "selfBoost", amount: "150", flavor: "\"Two swords are better than one,\" he says." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Disciple of Liam", type: "selfBoost", amount: "200", flavor: "Impressed by the Swordsman's proficiency with his blades, the famed swordmaster Liam takes him on as a disciple to further his training." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Weapon Mastery", type: "selfBoost", amount: "250", flavor: "Having learned everything Liam has to teach, the Swordsman graduates from discipleship and is now a sword master." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Tutoring", type: "allDamageBoost", amount: "25", flavor: "Now qualified to teach, the Swordsman offers tutoring to the rest of your team, making them stronger." },
            ]
        },
        {
            "id": 5,
            "name": "Gunner Stickman",
            "cost": "80000",
            "df": 4,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "Not a very accurate shooter, but helpful nonetheless. The only question now is when he'll finally run out of ammunition.",
            "icon": "gunner.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Powerful Gun", type: "selfBoost", amount: "100", flavor: "The Gunner persuades you to use some of your wealth to purchase him a more powerful gun. After seeing the results, you don't regret it." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Infinite Ammunition", type: "selfBoost", amount: "150", flavor: "We've been tricked, backstabbed, and we've been quite possibly, bamboozled." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Laser Blaster", type: "selfBoost", amount: "200", flavor: "Powered by ions, this laser gun is the most powerful ever made. The Gunner nearly faints when he sees it." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Camouflage", type: "selfBoost", amount: "250", flavor: "He'll be much more dangerous if you can't even see him." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Bulletproof Mouse", type: "clickBoost", amount: "1", flavor: "The Gunner has been practicing so much lately that you have to install bulletproof casings on your mice to protect them from stray shots." }
            ]
        },
        {
            "id": 6,
            "name": "Stickman with Cards",
            "cost": "7.5e5",
            "df": 5,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "After being ferociously defeated in poker for the eleventh time, the Smart Stickman maintains that it \"doesn't count\" because you're not allowed to use UNO reverse cards.",
            "icon": "card_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Magic Cards", type: "selfBoost", amount: "100", flavor: "This stickman's cards seem quite peculiar. Whatever they say, happens. A coincidence, right?" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tarot Cards", type: "selfBoost", amount: "150", flavor: "The card stickman can use tarot cards to predict what will happen. Not useful in a fight, but cool nonetheless." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Royal Flush", type: "selfBoost", amount: "200", flavor: "Seems slightly suspicious that he got five of these in a row." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Debit Card", type: "allCoinBoost", amount: "25", flavor: "You're not sure where they came from, but they boost your income tremendously." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "UNO Reverse Card", type: "allDamageBoost", amount: "25", flavor: "A power beyond anything we've ever seen before." }
            ]
        },
        {
            "id": 7,
            "name": "Beginner Magician",
            "cost": "6.5e6",
            "df": 6,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This magician has worked hard for a while, and is now able to use magic. In celebration, he agrees to help you.",
            "icon": "beginner.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Meditation", type: "selfBoost", amount: "100", flavor: "To gain better control over his magic, the beginner magician begins to meditate for eight hours a day." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Enhanced Speed", type: "selfBoost", amount: "150", flavor: "Using his magic, the Beginner Magician is able to propel himself for a short amount of time, which is very useful in fights." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 1", type: "selfBoost", amount: "200", flavor: "The Beginner Magician has finally unlocked full control over his powers." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Wild Ethusiasm", type: "selfBoost", amount: "250", flavor: "Having full control of his magic is a cause for celebration. And celebrate he does, by bringing in more coins than ever before." }
            ]
        },
        {
            "id": 8,
            "name": "Bazooka Stickman",
            "cost": "5.0e7",
            "df": 7,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This stickman takes great pleasure in blowing stuff up. His weapon is able to bring his emenies down like bowling pins.",
            "icon": "bazooka.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Target Practice", type: "selfBoost", amount: "100", flavor: "You notice the amount of scorch marks both on the target and on the ground and make a mental note never to get within range while he's practicing." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Grenade Launcher", type: "selfBoost", amount: "150", flavor: "The grenade launcher is much more powerful than the standard bazooka, and this stickman uses it well." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Rocket Launcher", type: "selfBoost", amount: "200", flavor: "While slightly underpowered compared to the grenade launcher, it is much more accurate." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Infinite Firepower", type: "selfBoost", amount: "250", flavor: "With help from the Gunner, they are able to equip his rocket launcher with an infinite supply of rockets." }
            ]
        },
        {
            "id": 9,
            "name": "Rookie Magician",
            "cost": "4.5e8",
            "df": 8,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This magician is now able to levitate, and cast a shield. He is now able to travel to the more dangerous cliffs and earn more coins for you.",
            "icon": "rookie.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Shield", type: "selfBoost", amount: "100", flavor: "The best offense is a good defense. That's how they say it, right?" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tri-Shot", type: "selfBoost", amount: "150", flavor: "A brilliant upgrade, which allows him to fire thrice as much magic as before." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 2", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level one." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Levitation", type: "selfBoost", amount: "250", flavor: "The ability to fly is sought after by many, but this magician actually achieved it." }
            ]
        },
        {
            "id": 10,
            "name": "Royal Stickman",
            "cost": "4.0e9",
            "df": 9,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This stickman is so rich, believes he's the king of the Stickworld. Someone needs to give him a reality check.",
            "icon": "king_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Exuberant Spending", type: "allCoinBoost", amount: "25", flavor: "\"I'll take your entire stock.\"" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Skilled Investing", type: "allCoinBoost", amount: "25", flavor: "With help from the Smart Stickman, the 'king' doubles his net worth many times over." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Palace", type: "allCoinBoost", amount: "25", flavor: "You were a bit concerned that he would run out of money in building this, but it still seems he has plenty to spare." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Royal Guard", type: "allCoinBoost", amount: "50", flavor: "Even though he's not the king, he sure acts like one and knights every member of your team. This gives them a boost in confidence." },
                { order: 6, icon: "placeholder_5.png", level: 125, name: "Skyscraper", type: "allCoinBoost", amount: "100", flavor: "The royal stickman goes all out and buys a skyscraper to serve as your base of operations." }
            ]
        },
        {
            "id": 11,
            "name": "Intermediate Magician",
            "cost": "3.6e10",
            "df": 10,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "More skilled than a rookie, and yellow in color, this stickman is really difficult to see on a white background.",
            "icon": "intermediate.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Reflective Shield", type: "selfBoost", amount: "100", flavor: "With his magic power increasing, his shield is now strong enough to reflect attacks." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Faster Shots", type: "selfBoost", amount: "150", flavor: "The ability to fire faster means that your enemy has less time to react. This magician employs this strategy to great effect." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 3", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level two." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Pinpoint Accuracy", type: "selfBoost", amount: "250", flavor: "This magician never misses any more shots." }
            ]
        },
        {
            "id": 12,
            "name": "Stickbot",
            "cost": "3.4e11",
            "df": 11,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "No one is sure where this robot came from, or who made it. Its limbs are lethal to any unsuspecting stick figure who wanders close enough for it to demonstrate its extension attack.",
            "icon": "stickbot.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Machine Learning", type: "selfBoost", amount: "100", flavor: "You reprogram the stickbot so that it can become better with practice. You begin seeing results immediately." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Better AI", type: "selfBoost", amount: "150", flavor: "You are constantly having to edit the code of the stickbot to fix bugs. You decide to give it artificial intelligence so that it can program itself." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Quick Strike", type: "selfBoost", amount: "300", flavor: "With almost no warning, the stickbot's arm shoots out and impales one of your enemies in the chest. Hopefully the stickbot won't malfunction while you're standing next to it anytime soon!" },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Mechanical Clicking", type: "clickBoost", amount: "1", flavor: "What better way to click faster than to get a robot to do it?" }
            ]
        },
        {
            "id": 13,
            "name": "Expert Magician",
            "cost": "3.2e12",
            "df": 12,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "No longer a novice at magic, this magician is able to obliterate almost any obstacle that stands in its way. Maybe your weaker magicians can learn a thing or two from this magician.",
            "icon": "expert.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Powerful Shield", type: "selfBoost", amount: "100", flavor: "This shield is very strong, and can deflect a lot of enemy attacks!" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Lethal Magic", type: "selfBoost", amount: "150", flavor: "The explosive power of level four magic is such that weaker enemies can be totally destroyed by it, leaving behind nothing but dust." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 4", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level three." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Expert Energy Magician", type: "selfBoost", amount: "250", flavor: "Studying hard, the expert magician learns to use energy magic, a much more powerful (and mana consuming) form of power." }
            ]
        },
        {
            "id": 14,
            "name": "Magic Stickbot Prototype",
            "cost": "3.0e13",
            "df": 13,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "Are the stickbots evolving? This one can use magic! You should probably find out where they're coming from.",
            "icon": "ms_prototype.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Recycled Code", type: "selfBoost", amount: "100", flavor: "You take the AI code you used on the first stickbot and port it over to the new model, to allow it to become better the more it practices." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Faster Mana Recharge", type: "selfBoost", amount: "150", flavor: "You upgrade the prototype to regenerate artificial mana at a faster rate. It helps a ton." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Oiled Joints", type: "selfBoost", amount: "300", flavor: "Grit has accumulated on the joints of the prototype, making it ineffective. A bit of WD-40 will fix that." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Metal Shield", type: "allDamageBoost", amount: "25", flavor: "The stickbot uses its body to shield your team from harm... it's like a vegetarian meat shield. Get it? Because no meat...? Hello...?" }
            ]
        },
        {
            "id": 15,
            "name": "Master Magician",
            "cost": "2.8e14",
            "df": 14,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "This stickman is a master at being a magician. Identified by its dark blue color, this magician is much more powerful than its expert counterpart.",
            "icon": "master.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Shield Attack", type: "selfBoost", amount: "100", flavor: "Now you can attack and deflect at the same time!" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Obstacle Course", type: "selfBoost", amount: "150", flavor: "The master magician reveals that he got better at dodging attacks by participating in a number of obstacle courses." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 5", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level four." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Master Energy Magician", type: "selfBoost", amount: "250", flavor: "With help from the expert energy magician, the master magician becomes proficient in energy magic, making him more powerful." }
            ]
        },
        {
            "id": 16,
            "name": "Magic Stickbot",
            "cost": "2.6e15",
            "df": 15,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "They're still being improved! In addition to magic, this stickbot is now capable of shooting lasers out of it's eyes! You have to find the manufacturer and order some more, they're very powerful.",
            "icon": "ms_1.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Perfected AI", type: "selfBoost", amount: "100", flavor: "It seems that the creator was finally able to make a strong AI. Could probably beat a master magician." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Laser Eyes", type: "selfBoost", amount: "150", flavor: "At first you think its eyes glow because it's angry, but you soon see that it is capable of firing a magic laser fifty times as powerful as the Gunner's laser blaster." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Shield", type: "selfBoost", amount: "300", flavor: "The stickbots can actually protect themselves now, who would have thought?" },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Enchanted Mouse", type: "clickBoost", amount: "1", flavor: "Whilst recharging this stickbot's battery, a surge of magic pulses through the system and strengthens your clicks via magic." }
            ]
        },
        {
            "id": 17,
            "name": "Legend Magician",
            "cost": "2.4e16",
            "df": 16,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "A magician much rarer than a master magician. He is fast enough to beat the Fast Stickman in a race many times over, and loves to show off.",
            "icon": "legend.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Superspeed", type: "selfBoost", amount: "100", flavor: "The Fast Stickman storms away after doing one lap in the time the legend magician does eleven." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Flight Training", type: "selfBoost", amount: "150", flavor: "\"I'm so fast I sometimes run into things,\" he explains. \"With this training that won't happen anymore.\"" },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 6", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level five." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Legend Energy Magician", type: "selfBoost", amount: "250", flavor: "The legend magician learns to use energy magic, more than doubling his strength." }
            ]
        },
        {
            "id": 18,
            "name": "Magic Stickbot v2",
            "cost": "2.2e17",
            "df": 17,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "Who the heck keeps making these?",
            "icon": "ms_2.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Overclocked Processor", type: "selfBoost", amount: "100", flavor: "Using a way to safely overclock the processor on the Stickbot, you greatly expand its mental capacity." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tough Shell", type: "selfBoost", amount: "150", flavor: "You replace all the material on the stickbot into something more durable... and expensive." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Agility and Balance", type: "selfBoost", amount: "300", flavor: "Faster and more balanced. It could probably stand on the head of a snake and not fall off. Probably." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Protectiveness", type: "allDamageBoost", amount: "25", flavor: "The new stickbot has learned that it needs allies. It uses bursts of magic to shoot down incoming projectiles and protect your team." }
            ]
        },
        {
            "id": 19,
            "name": "Myth Magician",
            "cost": "2.0e18",
            "df": 18,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "So rare, this magician is literally called a myth. It has trained for many years in order to reach this almost unheard of level of power.",
            "icon": "myth.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Hyperspeed", type: "selfBoost", amount: "100", flavor: "Overshadows the legend magician by at least 10%." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Six Orbs", type: "selfBoost", amount: "150", flavor: "\"It took a lot of patience, but I'm now able to summon six magic orbs around myself, for protection and faster attacking,\" he explains." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 7", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level six." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Myth Energy Magician", type: "selfBoost", amount: "250", flavor: "\"The final upgrade.\"" }
            ]
        },
        {
            "id": 20,
            "name": "Magic Stickbot v3",
            "cost": "1.0e21",
            "df": 21,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "A stickbot much more powerful from the previous. Your magicians decide to do some investigating to find the creator.",
            "icon": "ms_3.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Hyper Engine", type: "selfBoost", amount: "100", flavor: "Allows the stickbot to mimic the speed of the Myth Magician." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Reinforced Material", type: "selfBoost", amount: "150", flavor: "The enemies you are facing are becoming strong enough to dent the armor of the stickbot, so you purchase some stronger material." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Emergency Mode", type: "selfBoost", amount: "300", flavor: "As the stickbot becomes weak with battle damage, the lights on it suddenly turn red and it proceeds to annihilate its opponent." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Mouse Engine", type: "clickBoost", amount: "1", flavor: "You build an machine to replicate the powers of the hyper engine and hook it up to your mouse, making it hugely effective." }
            ]
        },
        {
            "id": 21,
            "name": "Fire Magician",
            "cost": "5.0e23",
            "df": 24,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "A scorching magician with a scorching temper, this magician will bestow a sunburn upon anyone who stands next to him for too long.",
            "icon": "fire.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Sunbeam", type: "selfBoost", amount: "100", flavor: "A warm sunbeam never fails to brighten the day. A hot sunbeam can really ruin your enemy's day." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Fireball", type: "selfBoost", amount: "150", flavor: "The fire magician becomes a blurred ball of flame, speeding across the sky." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Huge Health", type: "selfBoost", amount: "200", flavor: "With his rising power and magic level, the fire magician has so much health that it's difficult to damage him very much." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Raging Inferno", type: "selfBoost", amount: "250", flavor: "Fires rage across the land as the fire magician incinerates any enemy who dares stand in his way." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Scorching Presence", type: "allDamageBoost", amount: "25", flavor: "\"Why hello there, today's your unlucky day.\"" }
            ]
        },
        {
            "id": 22,
            "name": "Ice Magician",
            "cost": "2.5e26",
            "df": 27,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "The coolest magician around.",
            "icon": "ice.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Chilly", type: "selfBoost", amount: "100", flavor: "Decreases the temperature of the world by 1%." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Vortex", type: "selfBoost", amount: "150", flavor: "The ice magician harnesses the power of the polar vortex to improve his magic." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Frozen Magic", type: "selfBoost", amount: "200", flavor: "Your other stickmen's weapons have been around the ice magician for so long that they've frozen solid. Really stuns enemies, too." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Permafrost", type: "selfBoost", amount: "250", flavor: "The Ice Magician uses his power to freeze enemies solid." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Cooling Aura", type: "allDamageBoost", amount: "25", flavor: "\"There now,\" he says. \"Let's calm down, all right? We have some enemies to kill.\"" }
            ]
        },
        {
            "id": 23,
            "name": "Time Magician",
            "cost": "1.5e29",
            "df": 30,
            "multiplier25": 400,
            "multiplier1000": 2400,
            "description": "He was once late to a doctor's appointment and had to wait in line for half an hour. Since then, he has vowed to master time magic to ensure that never happens again.",
            "icon": "time.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Ultimate Speed", type: "selfBoost", amount: "100", flavor: "He's so powerful that time seems to slow down around him, allowing him to move with slightly frightening speed." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Time Magic", type: "selfBoost", amount: "150", flavor: "The Time Magician slows down time for enemies, allowing them to be easily hit." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Strategic Training", type: "selfBoost", amount: "200", flavor: "In order to outwit his enemies, the Time Magician trains against your own characters, allowing him to be more strategic." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Time Stop", type: "selfBoost", amount: "250", flavor: "The Time Magician has gained the power to stop time for your enemies, making them pitifully easy to dispatch." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "For All Time", type: "allDamageBoost", amount: "25", flavor: "Always." },
            ]
        }
    ]
}