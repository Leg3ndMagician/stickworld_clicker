var gamestaticdata = {
    characters: [
        {
            "id": 0,
            "name": "Helping Hand",
            "cost": "100",
            "df": -1,
            "description": "A cursor of epic proportions. Level it up to increase your soul coins per click.",
            "icon": "helping_hand.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Index Finger", type: "selfBoost", amount: "100", flavor: "The helping hand is somewhat weak by itself. Upgrade it to make it more powerful." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Middle Finger", type: "selfBoost", amount: "100", flavor: "Whoever thought that clicking with two fingers would be twice as effective?" },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Ring Finger", type: "selfBoost", amount: "100", flavor: "As you continue to add more and more fingers, the strength of your clicks grows exponentially." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Thumb Finger", type: "selfBoost", amount: "100", flavor: "Wait, is this even a finger? You aren't exactly sure, but who are you to pass up an upgrade?" },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Pinky Finger", type: "selfBoost", amount: "100", flavor: "Do not underestimate the strength of the pinky finger." },
            ]
        },
        {
            "id": 1,
            "name": "Stickman",
            "cost": "500",
            "df": 0,
            "description": "This stickman has volunteered himself to your cause. He doesn't seem all that smart, but you could use some extra hands.",
            "icon": "stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Adrenaline", type: "selfBoost", amount: "100", flavor: "Feeling energized, the Stickman jumps back into his job with newly fueled enthusiasm." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Cross-Country Training", type: "selfBoost", amount: "150", flavor: "You feel slightly irritated about the Stickman's continuing clumsiness. You decide that cross-country training will improve performance." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Jumping Exercises", type: "selfBoost", amount: "200", flavor: "With the Stickman's obvious inability to traverse cliffs, you set him to work to improve his jump height and distance." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Mental Workout", type: "selfBoost", amount: "250", flavor: "None of this training is working very well! Then it hits you. The Stickman needs to improve his poor mental capacity." },
                { order: 6, icon: "placeholder_5.png", level: 125, name: "Second Mouse", type: "clickBoost", amount: "1", flavor: "Exasperated with the Stickman's poor performance, you give him the task of clicking a mouse. Twice the clicks!" },
            ]
        },
        {
            "id": 2,
            "name": "Smart Stickman",
            "cost": "3200",
            "df": 1,
            "description": "He knows a lot of things, some of which can be very useful. So smart, he's never lost a game of cards in his whole life.",
            "icon": "smart_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Smarter Stickman", type: "selfBoost", amount: "100", flavor: "Blessed with extraordinary brainpower, the Smart Stickman seeks to increase his IQ to 300." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Supreme Brainpower", type: "selfBoost", amount: "150", flavor: "The Smart Stickman's head swells to accomodate his ever expanding brain." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Massive Brain", type: "selfBoost", amount: "200", flavor: "The Smart Stickman has now achieved his IQ goal of 300. Very impressive!" },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "301 IQ", type: "selfBoost", amount: "250", flavor: "Just when you thought he couldn't get any smarter..." }
            ]
        },
        {
            "id": 3,
            "name": "Fast Stickman",
            "cost": "25000",
            "df": 2,
            "description": "Doesn't even need to sprint in order to outrun an average stickman, this fellow is one of the fastest stickmen in the lands. Just make sure he doesn't crash into things.",
            "icon": "fast_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Caffeinated Sprinting", type: "selfBoost", amount: "100", flavor: "You begin to consider limiting the amount of coffee he's allowed to have in the mornings, because this is ridiculous." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Obstacle Course", type: "selfBoost", amount: "150", flavor: "With his speed almost doubled, the Fast Stickman now must train to avoid obstacles that he can barely see." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "A Lot of Speed", type: "selfBoost", amount: "200", flavor: "He's beginning to appear blurred." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Speed Classes", type: "globalBoost", amount: "25", flavor: "Having reached his ideal speed, the Fast Stickman extends his training to your other stickmen." },
            ]
        },
        {
            "id": 4,
            "name": "Stick Swordsman",
            "cost": "2.2e5",
            "df": 3,
            "description": "The weapon of choice for most stickmen is a ranged weapon, but this stickman has taken to training with his blades. He hopes to learn enough to impress Liam himself.",
            "icon": "swordsman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Poisoned Blades", type: "selfBoost", amount: "100", flavor: "By coating his blades with poison, he is now able to neutralize his enemies much more efficiently. The downside is that they cannot be used as steak knives any more." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Dual Wielding", type: "selfBoost", amount: "150", flavor: "\"Two swords are better than one,\" he says." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Disciple of Liam", type: "selfBoost", amount: "200", flavor: "Impressed by the Swordsman's proficiency with his blades, the famed swordmaster Liam takes him on as a disciple to further his training." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Weapon Mastery", type: "selfBoost", amount: "250", flavor: "Having learned everything Liam has to teach, the Swordsman graduates from discipleship and is now a sword master." },
                { order: 6, icon: "placeholder_5.png", level: 125, name: "Tutoring", type: "globalBoost", amount: "25", flavor: "Now qualified to teach, Liam offers tutoring to the rest of your team, making them stronger." },
            ]
        },
        {
            "id": 5,
            "name": "Gunner Stickman",
            "cost": "2.0e6",
            "df": 4,
            "description": "Not a very accurate shooter, but helpful nonetheless. The only question now is when he'll finally run out of ammunition.",
            "icon": "gunner.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Powerful Gun", type: "selfBoost", amount: "100", flavor: "The Gunner persuades you to use some of your wealth to purchase him a more powerful gun. After seeing the results, you don't regret it." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Infinite Ammunition", type: "selfBoost", amount: "150", flavor: "We've been tricked, backstabbed, and we've been quite possibly, bamboozled." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Laser Blaster", type: "selfBoost", amount: "200", flavor: "Powered by ions, this laser gun is the most powerful ever made. The Gunner nearly faints when he sees it." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Camouflage", type: "selfBoost", amount: "250", flavor: "He'll be much more dangerous if you can't even see him." },
                { order: 6, icon: "placeholder_5.png", level: 125, name: "Bulletproof Mouse", type: "clickBoost", amount: "1", flavor: "The Gunner has been practicing so much lately that you have to install bulletproof casings on your mice to protect them from stray shots." }
            ]
        },
        {
            "id": 6,
            "name": "Stickman with Cards",
            "cost": "1.8e7",
            "df": 5,
            "description": "After being ferociously defeated in poker for the eleventh time, the Smart Stickman maintains that it \"doesn't count\" because you're not allowed to use UNO reverse cards.",
            "icon": "card_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Magic Cards", type: "selfBoost", amount: "100", flavor: "This stickman's cards seem quite peculiar. Whatever they say, happens. A coincidence, right?" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tarot Cards", type: "selfBoost", amount: "150", flavor: "The card stickman can use tarot cards to predict what will happen. Not useful in a fight, but cool nonetheless." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Royal Flush", type: "selfBoost", amount: "200", flavor: "Seems slightly suspicious that he got five of these in a row." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Debit Card", type: "globalBoost", amount: "25", flavor: "You're not sure where they came from, but they boost your income tremendously." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "UNO Reverse Card", type: "globalBoost", amount: "25", flavor: "A power beyond anything we've ever seen before." }
            ]
        },
        {
            "id": 7,
            "name": "Beginner Magician",
            "cost": "1.6e8",
            "df": 6,
            "description": "This magician has worked hard for a while, and is now able to use magic. In celebration, he agrees to help you.",
            "icon": "beginner.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Meditation", type: "selfBoost", amount: "100", flavor: "To gain better control over his magic, the beginner magician begins to meditate for eight hours a day." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Enhanced Speed", type: "selfBoost", amount: "150", flavor: "Using his magic, the Beginner Magician is able to propel himself for a short amount of time, which is very useful in fights." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 1", type: "selfBoost", amount: "200", flavor: "The Beginner Magician has finally unlocked full control over his powers." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Wild Ethusiasm", type: "selfBoost", amount: "250", flavor: "Having full control of his magic is a cause for celebration. And celebrate he does, by bringing in more coins than ever before." }
            ]
        },
        {
            "id": 8,
            "name": "Bazooka Stickman",
            "cost": "1.4e9",
            "df": 7,
            "description": "This stickman takes great pleasure in blowing stuff up. His weapon is able to bring his emenies down like bowling pins.",
            "icon": "bazooka.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Target Practice", type: "selfBoost", amount: "100", flavor: "You notice the amount of scorch marks both on the target and on the ground and make a mental note never to get within range while he's practicing." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Grenade Launcher", type: "selfBoost", amount: "150", flavor: "The grenade launcher is much more powerful than the standard bazooka, and this stickman uses it well." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Rocket Launcher", type: "selfBoost", amount: "200", flavor: "While slightly underpowered compared to the grenade launcher, it is much more accurate." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Infinite Firepower", type: "selfBoost", amount: "250", flavor: "With help from the Gunner, they are able to equip his rocket launcher with an infinite supply of rockets." }
            ]
        },
        {
            "id": 9,
            "name": "Rookie Magician",
            "cost": "1.3e10",
            "df": 8,
            "description": "This magician is now able to levitate, and cast a shield. He is now able to travel to the more dangerous cliffs and earn more coins for you.",
            "icon": "rookie.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Shield", type: "selfBoost", amount: "100", flavor: "The best offense is a good defense. That's how they say it, right?" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tri-Shot", type: "selfBoost", amount: "150", flavor: "A brilliant upgrade, which allows him to fire thrice as much magic as before." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 2", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level one." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Levitation", type: "selfBoost", amount: "250", flavor: "The ability to fly is sought after by many, but this magician actually achieved it." }
            ]
        },
        {
            "id": 10,
            "name": "Royal Stickman",
            "cost": "1.2e11",
            "df": 9,
            "description": "This stickman is so rich, believes he's the king of the Stickworld. Someone needs to give him a reality check.",
            "icon": "king_stickman.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Exuberant Spending", type: "globalBoost", amount: "10", flavor: "\"I'll take your entire stock.\"" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Skilled Investing", type: "globalBoost", amount: "15", flavor: "With help from the Smart Stickman, the 'king' doubles his net worth many times over." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Palace", type: "globalBoost", amount: "20", flavor: "You were a bit concerned that he would run out of money in building this, but it still seems he has plenty to spare." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Royal Guard", type: "globalBoost", amount: "25", flavor: "Even though he's not the king, he sure acts like one and knights every member of your team. This gives them a boost in confidence." },
                { order: 5, icon: "placeholder_5.png", level: 100, name: "Skyscraper", type: "globalBoost", amount: "50", flavor: "The royal stickman goes all out and buys a skyscraper to serve as your base of operations." }
            ]
        },
        {
            "id": 11,
            "name": "Intermediate Magician",
            "cost": "1.1e12",
            "df": 10,
            "description": "More skilled than a rookie, and yellow in color, this stickman is really difficult to see on a white background.",
            "icon": "intermediate.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Reflective Shield", type: "selfBoost", amount: "100", flavor: "With his magic power increasing, his shield is now strong enough to reflect attacks." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Faster Shots", type: "selfBoost", amount: "150", flavor: "The ability to fire faster means that your enemy has less time to react. This magician employs this strategy to great effect." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 3", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level two." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Pinpoint Accuracy", type: "selfBoost", amount: "250", flavor: "This magician never misses any more shots." }
            ]
        },
        {
            "id": 12,
            "name": "Stickbot",
            "cost": "9.0e12",
            "df": 11,
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
            "cost": "7.5e13",
            "df": 12,
            "description": "No longer a novice at magic, this magician is able to obliterate almost any obstacle that stands in its way. Maybe your weaker magicians can learn a thing or two from this magician.",
            "icon": "expert.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Powerful Shield", type: "selfBoost", amount: "100", flavor: "This shield is very strong, and can deflect a lot of enemy attacks!" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Lethal Magic", type: "selfBoost", amount: "150", flavor: "The explosive power of level four magic is such that weaker enemies can be totally destroyed by it, leaving behind nothing but dust." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 4", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level three." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Expert Energy Magician", type: "selfBoost", amount: "250", flavor: "Studying hard, the expert magician learns to use energy magic, a much more powerful (and mana consuming) form of power." }
            ]
        },
        {
            "id": 14,
            "name": "Magic Stickbot Prototype",
            "cost": "6.2e14",
            "df": 13,
            "description": "Are the stickbots evolving? This one can use magic! You should probably find out where they're coming from.",
            "icon": "ms_prototype.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Recycled Code", type: "selfBoost", amount: "100", flavor: "You take the AI code you used on the first stickbot and port it over to the new model, to allow it to become better the more it practices." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Faster Mana Recharge", type: "selfBoost", amount: "150", flavor: "You upgrade the prototype to regenerate artificial mana at a faster rate. It helps a ton." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Oiled Joints", type: "selfBoost", amount: "300", flavor: "Grit has accumulated on the joints of the prototype, making it ineffective. A bit of WD-40 will fix that." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Metal Shield", type: "globalBoost", amount: "25", flavor: "The stickbot uses its body to shield your team from harm... it's like a vegetarian meat shield. Get it? Because no meat...? Hello...?" }
            ]
        },
        {
            "id": 15,
            "name": "Master Magician",
            "cost": "5.2e15",
            "df": 14,
            "description": "This stickman is a master at being a magician. Identified by its dark blue color, this magician is much more powerful than its expert counterpart.",
            "icon": "master.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Shield Attack", type: "selfBoost", amount: "100", flavor: "Now you can attack and deflect at the same time!" },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Obstacle Course", type: "selfBoost", amount: "150", flavor: "The master magician reveals that he got better at dodging attacks by participating in a number of obstacle courses." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 5", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level four." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Master Energy Magician", type: "selfBoost", amount: "250", flavor: "With help from the expert energy magician, the master magician becomes proficient in energy magic, making him more powerful." }
            ]
        },
        {
            "id": 16,
            "name": "Magic Stickbot",
            "cost": "4.6e16",
            "df": 15,
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
            "cost": "4.1e17",
            "df": 16,
            "description": "A magician much rarer than a master magician. He is fast enough to beat the Fast Stickman in a race many times over, and loves to show off.",
            "icon": "legend.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Superspeed", type: "selfBoost", amount: "100", flavor: "The Fast Stickman storms away after doing one lap in the time the legend magician does eleven." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Flight Training", type: "selfBoost", amount: "150", flavor: "\"I'm so fast I sometimes run into things,\" he explains. \"With this training that won't happen anymore.\"" },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 6", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level five." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Legend Energy Magician", type: "selfBoost", amount: "250", flavor: "The legend magician learns to use energy magic, more than doubling his strength." }
            ]
        },
        {
            "id": 18,
            "name": "Magic Stickbot v2",
            "cost": "3.6e18",
            "df": 17,
            "description": "Who the heck keeps making these?",
            "icon": "ms_2.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Overclocked Processor", type: "selfBoost", amount: "100", flavor: "Using a way to safely overclock the processor on the Stickbot, you greatly expand its mental capacity." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Tough Shell", type: "selfBoost", amount: "150", flavor: "You replace all the material on the stickbot into something more durable... and expensive." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Agility and Balance", type: "selfBoost", amount: "300", flavor: "Faster and more balanced. It could probably stand on the head of a snake and not fall off. Probably." },
                { order: 4, icon: "placeholder_4.png", level: 75, name: "Protectiveness", type: "globalBoost", amount: "25", flavor: "The new stickbot has learned that it needs allies. It uses bursts of magic to shoot down incoming projectiles and protect your team." }
            ]
        },
        {
            "id": 19,
            "name": "Myth Magician",
            "cost": "3.2e19",
            "df": 18,
            "description": "So rare, this magician is literally called a myth. It has trained for many years in order to reach this almost unheard of level of power.",
            "icon": "myth.png",
            "upgrades": [
                { order: 1, icon: "placeholder_1.png", level: 10, name: "Hyperspeed", type: "selfBoost", amount: "100", flavor: "Overshadows the legend magician by at least 10%." },
                { order: 2, icon: "placeholder_2.png", level: 25, name: "Six Orbs", type: "selfBoost", amount: "150", flavor: "\"It took a lot of patience, but I'm now able to summon six magic orbs around myself, for protection and faster attacking,\" he explains." },
                { order: 3, icon: "placeholder_3.png", level: 50, name: "Magic Level 7", type: "selfBoost", amount: "200", flavor: "Twice as strong as magic level six." },
                { order: 5, icon: "placeholder_4.png", level: 100, name: "Myth Energy Magician", type: "selfBoost", amount: "250", flavor: "\"The final upgrade.\"" }
            ]
        }
    ]
}