/*
Hello and welcome to the cursed wasteland of game.js
Most of this is probably really unorganized.

CREDITS:
https://github.com/MikeMcl/bignumber.js - BigNumber.js library
http://www.webtoolkit.info/ - Base64 encoding and decoding

Broman - Efficient Roman Numeral System
Purpmogus - Pretty much everything else
*/

let BETA_STATUS = false;
let BIGNUMBER_STATS = ["dps", "dpc", "coins", "totalCoins", "soulCoins", "pendingSoulCoins", "totalSoulCoins", "soulCoinsSpent", "globalDamageMultiplier", "globalCoinMultiplier", "globalClickPercent"];
let SETTINGS = ["scientificNotation", "hideAllTooltips", "autoZone"];

let game = {
    userData: {
        stats: {
            // DAMAGE
            dps: BigNumber('0'),
            dpc: BigNumber('1'),
            // COINS
            coins: BigNumber('0'),
            totalCoins: BigNumber('0'),
            // SOUL COINS
            soulCoins: BigNumber('0'),
            pendingSoulCoins: BigNumber('0'),
            totalSoulCoins: BigNumber('0'),
            soulCoinsSpent: BigNumber('0'),
            // ZONE
            zone: 1,
            highestZoneUnlocked: 1,
            enemiesBeatenThisZone: 0,
            // CHARACTERS + UPGRADES
            highestCharacterUnlocked: 0,
            globalDamageMultiplier: BigNumber('1'),
            globalCoinMultiplier: BigNumber('1'),
            globalClickPercent: BigNumber('0'),
            // ACHIEVEMENTS
            highestZoneEver: 1,
            numberOfPrestiges: 0,
            numberOfClicks: 0
        },
        settings: {
            scientificNotation: false,
            hideAllTooltips: false,
            autoZone: false
        },
        characters: [],
        animators: []
    },
    staticData: gamestaticdata,

    toggleSetting: function (setting) {
        if (typeof game.userData.settings[setting] == 'boolean') game.userData.settings[setting] = !game.userData.settings[setting]

        if (setting = "scientificNotation") {
            display.update.upgrades.characters.all();
            display.update.upgrades.animators.all()
        }
    },

    getValue: {
        characterLevelUpCost: function (index) {
            let level = game.userData.characters[index].level;
            let returnValue = BigNumber(game.staticData.characters[index].cost);
            returnValue = returnValue.multipliedBy(BigNumber('1.075').exponentiatedBy(level));

            return returnValue;
        },

        characterUpgradeCost: function (index, order) {
            let orders = ['1', '10', '60', '350', '2100', '13000', '80000', '500000']
            return BigNumber(game.staticData.characters[index].cost).multipliedBy(orders[order]);
        },

        character25Multiplier: function(index) {
            return game.staticData.characters[index].multiplier25;
        },

        character1000Multiplier: function (index) {
            return game.staticData.characters[index].multiplier1000;
        },

        characterNextBonus: function (index) {
            if ((Math.floor((game.userData.characters[index].level) / 25) * 25 + 25) % 1000 == 0) {
                return game.getValue.character1000Multiplier(index);
            } else {
                return game.getValue.character25Multiplier(index);
            }
        },

        characterBonus: function (index) {
            let level = game.userData.characters[index].level;
            let levelMinus175 = game.userData.characters[index].level - 175;
            let numberOf1000 = Math.floor(level / 1000);
            let numberOf25 = Math.floor((levelMinus175 / 25) - numberOf1000);

            let twentyFive = game.getValue.multipliedByIncrease(BigNumber(game.getValue.character25Multiplier(index))).exponentiatedBy(numberOf25);
            let thousand = game.getValue.multipliedByIncrease(BigNumber(game.getValue.character1000Multiplier(index))).exponentiatedBy(numberOf1000);

            return twentyFive.multipliedBy(thousand);
        },

        characterDPS: function (index, level = "THIS") {

            // check if Helping Hand
            if (index == 0) return BigNumber('0');

            let char = game.userData.characters[index];
            let df = game.staticData.characters[index].df;

            if (level == "NEXT") {
                level = char.level + 1
            } else {
                level = char.level
            }

            let returnValue = BigNumber(game.staticData.characters[index].cost).dividedBy('10');
            returnValue = returnValue.multipliedBy(BigNumber('0.77').exponentiatedBy(df));
            // Self and global multipliers
            returnValue = returnValue.multipliedBy(game.userData.stats.globalDamageMultiplier);
            returnValue = returnValue.multipliedBy(char.multiplier).integerValue(1);
            returnValue = returnValue.multipliedBy(char.levelMultiplier).integerValue(1);
            // Multiply by level
            returnValue = returnValue.multipliedBy(level).integerValue(1);
            // Prestige Bonuses
            returnValue = returnValue.multipliedBy(game.getValue.multipliedByIncrease(game.userData.stats.soulCoins.multipliedBy(5))); // raw coin bonus
            returnValue = returnValue.multipliedBy(game.getValue.multipliedByIncrease(game.getValue.animatorEffect(3))); // Tribot bonus
            return returnValue;
        },

        characterDPC: function (index) {

            let char = game.userData.characters[index];

            let returnValue = BigNumber('1');
            // Self and global multipliers
            returnValue = returnValue.multipliedBy(game.userData.stats.globalDamageMultiplier);
            returnValue = returnValue.multipliedBy(char.multiplier).integerValue(1);
            // Multiply by level
            returnValue = returnValue.multipliedBy(char.level).integerValue(1);
            return returnValue;
        },

        animatorLevelUpCost: function (index) {
            let formula = game.staticData.animators[index].costFormula
            let level = game.userData.animators[index].level
            let levelPlusOne = level + 1;

            let cost = BigNumber('0');

            switch (formula) {
                case "linear1":
                    cost = BigNumber(levelPlusOne);
                    break;
                case "exponential":
                    cost = BigNumber('2').exponentiatedBy(levelPlusOne);
                    break;
                case "leg3ndMagician":
                    cost = BigNumber('100').multipliedBy(BigNumber(levelPlusOne).multipliedBy(levelPlusOne + 1).dividedBy('2'))
            }

            return cost;
        },

        isAnimatorMaxed: function (index) {
            return game.userData.animators[index].level >= game.staticData.animators[index].maxLevel && !game.staticData.animators[index].maxLevel == 0
        },

        animatorEffect: function (index, next = false) {
            let formula = game.staticData.animators[index].effectFormula
            let paramaters = game.staticData.animators[index].params
            let level = game.userData.animators[index].level
            if (next == true) level++;

            let value = BigNumber('0');

            switch (formula) {
                case "linear":
                    value = BigNumber(paramaters[0]).multipliedBy(level);
                    break;
                case "diminishing":
                    let cap = paramaters[0];
                    let scaling = paramaters[1];
                    let fraction = 1 - (Math.E ** (scaling * level));
                    value = BigNumber(cap).multipliedBy(fraction);
                    break;
                case "animatorGamers":
                    let base = BigNumber('50').multipliedBy(level);
                    let exponent = BigNumber('1.5').exponentiatedBy(BigNumber(level).minus(1));
                    value = base.multipliedBy(exponent);
                    break;
            }

            return value;
        },

        multipliedByIncrease: function (value) {
            increase = BigNumber(value);
            multiplier = BigNumber('1');
            multiplier = multiplier.plus(increase.multipliedBy('0.01'));
            return multiplier;
        },

        animatorBonuses: {
            enemiesPerZone: function() {
                if (game.userData.stats.zone % 10 == 0) return 1;

                let base = 10;
                let subtract = game.getValue.animatorEffect(0).toNumber();

                return base - subtract;
            },

            bossTimer: function() {
                let base = 20000;
                let add = game.getValue.animatorEffect(6).toNumber();
                add = 1 + (add / 100)

                return base * add;
            },

            coinsGainedOnPrestige: function() {
                return game.getValue.animatorEffect(1);
            }
        },

        damage: {
            perSecond: function () {
                returnValue = BigNumber('0');

                for (i = 0; i < game.staticData.characters.length; i++) {
                    returnValue = returnValue.plus(game.getValue.characterDPS(i));
                }

                return returnValue;
            },

            perClick: function () {
                returnValue = BigNumber('1');
                returnValue = returnValue.plus(game.getValue.characterDPC(0));
                returnValue = returnValue.plus(game.userData.stats.dps.multipliedBy(game.userData.stats.globalClickPercent.multipliedBy('0.01')));
                returnValue = returnValue.multipliedBy(game.getValue.multipliedByIncrease(game.getValue.animatorEffect(4))); // click prestige upgrade bonus
                return returnValue;
            }
        }
    }
}

let enemies = {
    enemyInfo: { zoneType: 0, id: 0 },
    maxHealth: BigNumber('10'),
    currentHealth: BigNumber('10'),
    bossTimer: 20000,
    dying: false,

    tick: function () {
        enemies.damage(game.userData.stats.dps.dividedBy('50'));
        // BOSS TIMER
        if (game.userData.stats.zone % 10 == 0 && !enemies.dying) {
            enemies.bossTimer -= 20;
        } else {
            enemies.bossTimer = game.getValue.animatorBonuses.bossTimer();
        }

        if (enemies.bossTimer <= 0) {
            enemies.bossTimer = 0;
            enemies.bossFail();
        }

        if (!enemies.dying && enemies.currentHealth.isLessThanOrEqualTo('0')) {
            events.addCoins(enemies.calculateCoinReward(game.userData.stats.zone));
            if (enemies.givesSoulCoins()) game.userData.stats.pendingSoulCoins = game.userData.stats.pendingSoulCoins.plus(enemies.getSoulCoinReward());
            enemies.deathSequence();
        }
    },

    damage: function (value) {
        if (!enemies.dying) {
            enemies.currentHealth = enemies.currentHealth.minus(value);
            if (enemies.currentHealth.isLessThan('0')) enemies.currentHealth = BigNumber('0');
        }
    },

    deathSequence: function () {
        enemies.dying = true;

        element = document.getElementById("enemy")
        element.style.opacity = 1;
        var op = 1;
        var deathFadeTimer = setInterval(function () {
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= 0.05;
        }, 20);

        setTimeout(() => {
            window.clearInterval(deathFadeTimer);
            document.getElementById("enemy").style.opacity = 1;
            enemies.bossTimer = game.getValue.animatorBonuses.bossTimer();
            if (game.userData.stats.zone == game.userData.stats.highestZoneUnlocked) game.userData.stats.enemiesBeatenThisZone++;
            if (game.userData.stats.enemiesBeatenThisZone >= game.getValue.animatorBonuses.enemiesPerZone()) {
                game.userData.stats.highestZoneUnlocked++;
                game.userData.stats.enemiesBeatenThisZone = 0;
            }
            // GO TO NEXT ZONE IF HIGHEST ZONE
            if (game.userData.settings.autoZone == true && game.userData.stats.zone != game.userData.stats.highestZoneUnlocked) events.changeLevel(game.userData.stats.highestZoneUnlocked);
            enemies.dying = false;
            enemies.spawnNewEnemy();
        }, 500);
    },

    bossFail: function () {
        enemies.bossTimer = game.getValue.animatorBonuses.bossTimer();
        events.changeLevel('PREVIOUS');
    },

    getEnemyObject: function() {
        if (game.userData.stats.zone % 10 == 0) {
            return game.staticData.zones[enemies.enemyInfo.zoneType].boss;
        } else {
            return game.staticData.zones[enemies.enemyInfo.zoneType].enemies[enemies.enemyInfo.id];
        }
    },

    getSoulCoinReward: function() {
        let returnValue = BigNumber('1')
        returnValue = returnValue.plus(BigNumber(game.userData.stats.zone / 10).exponentiatedBy(2).dividedBy(10));
        return returnValue.multipliedBy(game.getValue.multipliedByIncrease(game.getValue.animatorEffect(5))).integerValue(4)
    },

    givesSoulCoins: function() {
        return game.userData.stats.highestZoneUnlocked % 10 == 0 && game.userData.stats.zone == game.userData.stats.highestZoneUnlocked;
    },

    spawnNewEnemy: function () {

        var zoneType = enemies.enemyInfo.zoneType;
        var enemyId;

        enemies.maxHealth = enemies.calculateHealth(game.userData.stats.zone);
        enemies.currentHealth = enemies.maxHealth;

        enemyId = Math.floor(Math.random() * game.staticData.zones[zoneType].enemies.length);
        enemies.enemyInfo.id = enemyId;

        document.getElementById("enemy").src = "assets/images/enemies/" + enemies.getEnemyObject().texture;

        if (Math.round(Math.random()) == 1) {
            document.getElementById("enemy").style.transform = "scaleX(-1)";
        } else {
            document.getElementById("enemy").style.transform = "scaleX(1)";
        }
    },

    calculateHealth: function (level) {
        var levelMinusOne = (level - 1)
        var health = BigNumber('10');
        var exponent = BigNumber('1.385').exponentiatedBy(levelMinusOne);

        health = health.multipliedBy(levelMinusOne);
        health = health.multipliedBy(exponent);
        health = health.plus('10');

        if (level % 10 == 0) health = health.multipliedBy('10');
        return health;
    },

    calculateCoinReward: function (level) {
        var levelMinusOne = (level - 1)
        var reward = BigNumber('1');
        var exponent = BigNumber('1.415').exponentiatedBy(levelMinusOne);

        reward = reward.multipliedBy(levelMinusOne);
        reward = reward.multipliedBy(exponent);
        reward = reward.plus('1');

        if (level % 10 == 0) reward = reward.multipliedBy('10');
        reward = reward.multipliedBy(game.userData.stats.globalCoinMultiplier);
        return reward;
    }
}

let events = {
    onButtonClick: function () {
        game.userData.stats.numberOfClicks++;
        enemies.damage(game.userData.stats.dpc);
    },

    // GAIN FUNCTIONS
    addCoins: function(number) {
        let amount = BigNumber(number);
        let multiplier = game.getValue.multipliedByIncrease(game.getValue.animatorEffect(2))
        amount = amount.multipliedBy(multiplier);
        game.userData.stats.coins = game.userData.stats.coins.plus(amount);
        game.userData.stats.totalCoins = game.userData.stats.totalCoins.plus(amount);
    },

    addSoulCoins: function(number) {
        let amount = BigNumber(number);
        game.userData.stats.soulCoins = game.userData.stats.soulCoins.plus(amount);
        game.userData.stats.totalSoulCoins = game.userData.stats.totalSoulCoins.plus(amount);
        display.update.damage();
    },

    changeLevel: function(level) {
        if (level == 'NEXT' && enemies.dying) {
            // do nothing
        }
        else if (level == 'NEXT' && game.userData.stats.highestZoneUnlocked > game.userData.stats.zone) {
            // next zone
            game.userData.stats.zone++;
            game.userData.stats.enemiesBeatenThisZone = 0;
            enemies.spawnNewEnemy();
        } else if (level == 'PREVIOUS' && game.userData.stats.zone > 1) {
            // previous zone
            game.userData.stats.zone--;
            game.userData.stats.enemiesBeatenThisZone = 0;
            enemies.spawnNewEnemy();
        } else if (typeof level == 'number') {
            game.userData.stats.zone = level;
            game.userData.stats.enemiesBeatenThisZone = 0;
            enemies.spawnNewEnemy();
        }
    },

    prestige: {
        confirm: function() {
            if (game.userData.stats.highestZoneUnlocked > 10) {
                display.popup.display("Are you sure you want to prestige? Your game will restart but you will recieve " + utility.number.format(game.userData.stats.pendingSoulCoins) + " soul coins to spend on powerful bonuses. Click OK to confirm.", "OK", "events.prestige.reset()");
            } else {
                display.popup.display("You must beat level 10 before you can prestige!", "ONWARD!", "CLOSE");
            }
        },

        reset: function() {
            // RESET CURRENCY
            game.userData.stats.coins = BigNumber('0');
            // RESET ZONE
            game.userData.stats.zone = 1;
            game.userData.stats.highestZoneUnlocked = 1;
            game.userData.stats.enemiesBeatenThisZone = 0;
            // UPGRADES
            game.userData.stats.globalDamageMultiplier = BigNumber('1');
            game.userData.stats.globalCoinMultiplier = BigNumber('1');
            game.userData.stats.globalClickPercent = BigNumber('1');
            // MISC
            game.userData.stats.highestCharacterUnlocked = 0;
            // EVERYTHING ELSE
            events.addCoins(game.getValue.animatorBonuses.coinsGainedOnPrestige());
            events.addSoulCoins(game.userData.stats.pendingSoulCoins);
            game.userData.stats.pendingSoulCoins = BigNumber('0');
            game.userData.stats.numberOfPrestiges++;

            display.update.upgrades.characters.load();
            display.update.all()
            enemies.spawnNewEnemy();

            display.popup.hide();
        }
    },

    animators: {
        purchase: function (index) {
            cost = game.getValue.animatorLevelUpCost(index)
            if (!game.getValue.isAnimatorMaxed(index) && game.userData.stats.soulCoins.isGreaterThanOrEqualTo(cost)) {
                game.userData.stats.soulCoins = game.userData.stats.soulCoins.minus(cost);
                game.userData.stats.soulCoinsSpent = game.userData.stats.soulCoinsSpent.plus(cost);
                game.userData.animators[index].level++;

                display.update.upgrades.animators.single(index);
                display.update.damage();
            }
        }
    },

    characters: {
        purchase: function (index) {
            cost = game.getValue.characterLevelUpCost(index, amountOfLevels = 1)
            if (game.userData.stats.coins.isGreaterThanOrEqualTo(cost)) {
                game.userData.stats.coins = game.userData.stats.coins.minus(cost);
                game.userData.characters[index].level++;

                if (index != 0 && game.userData.characters[index].level >= 200 && (game.userData.characters[index].level % 25) == 0) {
                    game.userData.characters[index].levelMultiplier = game.getValue.characterBonus(index)
                }

                display.update.upgrades.characters.single(index);
                display.update.damage();
            }
        },

        purchaseUpgrade: function (char, up) {
            char_d = game.staticData.characters[char];
            data = game.userData.characters[char];
            cost = game.getValue.characterUpgradeCost(char, char_d.upgrades[up].order);

            if (game.userData.stats.coins.isGreaterThanOrEqualTo(cost) && data.level >= char_d.upgrades[up].level) {
                game.userData.stats.coins = game.userData.stats.coins.minus(cost);

                data.upgrades[up].unlocked = true;

                // type of upgrade
                switch (char_d.upgrades[up].type) {
                    case "selfBoost":
                        game.userData.characters[char].multiplier = data.multiplier.multipliedBy(game.getValue.multipliedByIncrease(char_d.upgrades[up].amount));
                        break;
                    case "allDamageBoost":
                        game.userData.stats.globalDamageMultiplier = game.userData.stats.globalDamageMultiplier.multipliedBy(game.getValue.multipliedByIncrease(char_d.upgrades[up].amount));
                        // update all character text
                        for (c = 0; c < game.staticData.characters.length; c++) {
                            if (c >= 1) {
                                document.getElementById("char_" + c + "_dps").innerHTML = utility.number.format(game.getValue.characterDPS(c)) + " DPS"
                            } else { document.getElementById("char_" + c + "_dps").innerHTML = utility.number.format(game.getValue.characterDPC(c)) + " Damage Per Click" }
                        }
                    case "allCoinBoost":
                        game.userData.stats.globalCoinMultiplier = game.userData.stats.globalCoinMultiplier.multipliedBy(game.getValue.multipliedByIncrease(char_d.upgrades[up].amount));
                        break;
                    case "clickBoost":
                        game.userData.stats.globalClickPercent = game.userData.stats.globalClickPercent.plus(char_d.upgrades[up].amount);
                        break;
                }
                display.update.upgrades.characters.single(char);
                display.update.damage();
            }
        }
    }
}

let display = {
    tooltip: {
        visible: false,

        show: function () {
            if(game.userData.settings["hideAllTooltips"] == false) this.visible = true;
        },

        hide: function () {
            this.visible = false;
        },

        showText: function (html) {
            document.getElementById("tooltip_content").innerHTML = html;
            this.show();
        },

        getText: {
            character: function (index) {
                var text = "";

                text += "<h3>" + game.staticData.characters[index].name + "</h3>";
                text += "<p>" + game.staticData.characters[index].description + "</p>";
                text += "<p>DPS: " + utility.number.format(game.getValue.characterDPS(index, "THIS")); + "</p>";
                text += "<p>Next Level: " + utility.number.format(game.getValue.characterDPS(index, "NEXT")); + "</p>";
                if (index != 0 && game.userData.characters[index].level >= 175) { text += "<p><b>+" + game.getValue.characterNextBonus(index) +"% DPS<b> at level " + (Math.floor((game.userData.characters[index].level) / 25) * 25 + 25) };
                return text;
            },

            characterUpgrade: function (char, up) {
                var character = game.staticData.characters[char];
                var upgrade = character.upgrades[up];
                var text = "";

                text += "<h3>" + upgrade.name + "</h3>"
                text += "<p>Requires LVL " + upgrade.level + "<br>Cost: <coin></coin><b>" + utility.number.format(game.getValue.characterUpgradeCost(char, upgrade.order)) + " coins</b></p>"
                text += "<p>" + display.tooltip.getText.upgradeDescriptions(char, up) + "</b></p>"
                text += "<p><i>" + upgrade.flavor + "</i></p>"

                return text;
            },

            upgradeDescriptions: function (char, up) {

                var character = game.staticData.characters[char];
                var upgrade = character.upgrades[up];

                var text = ""
                switch (upgrade.type) {
                    case "selfBoost":
                        text = "Increases the effectiveness of <b>$NAME$</b> by <b>$AMOUNT$</b>%.";
                        break;
                    case "allDamageBoost":
                        text = "Increases the effectiveness of all characters by <b>$AMOUNT$</b>%.";
                        break;
                    case "allCoinBoost":
                        text = "Increases all coins dropped by <b>$AMOUNT$</b>%.";
                        break;
                    case "clickBoost":
                        text = "Increases your Damage Per Click by <b>$AMOUNT$</b>% of your DPS.";
                        break;
                    default:
                        text = "Unknown upgrade bonus! Grants +$AMOUNT$ of whatever.";
                        break;
                }

                text = text.replace("$NAME$", character.name).replace("$AMOUNT$", upgrade.amount);
                return text;
            },

            animator: function (index) {
                var text = "";

                text += "<h3>" + game.staticData.animators[index].name + "</h3>";
                text += "<p><b>" + display.tooltip.getText.animatorEffect(index) + "</b></p>";
                if (game.staticData.animators[index].maxLevel != 0) text += "<p>Maximum level: " + game.staticData.animators[index].maxLevel
                if (!game.getValue.isAnimatorMaxed(index)) text += "<p>Next level bonus: " + display.tooltip.getText.animatorBonusNext(index);
                return text;
            },

            animatorEffect: function (index) {
                return game.staticData.animators[index].effect.replace('$AMOUNT$', utility.number.formatScientific(game.getValue.animatorEffect(index), true)).replace('$AM_FORMAT$', utility.number.format(game.getValue.animatorEffect(index)))
            },

            animatorBonusNext: function (index) {
                return game.staticData.animators[index].bonus.replace('$AMOUNT$', utility.number.formatScientific(game.getValue.animatorEffect(index, true), true)).replace('$AM_FORMAT$', utility.number.format(game.getValue.animatorEffect(index, true)))
            }
        }
    },
    update: {
        all: function () {
            display.update.main();
            display.update.damage();
            display.update.upgrades.characters.all();
            display.update.upgrades.animators.all();
        },

        main: function () {

            // ZONE INFO
            document.getElementById("zoneLevel").innerHTML = "Level " + game.userData.stats.zone;
            // boss timer/already completed zones
            if (game.userData.stats.zone == game.userData.stats.highestZoneUnlocked && !(game.userData.stats.zone % 10 == 0)) {
                document.getElementById("zoneEnemies").innerHTML = game.userData.stats.enemiesBeatenThisZone + "/" + game.getValue.animatorBonuses.enemiesPerZone() + " enemies defeated";
            } else if (game.userData.stats.zone % 10 == 0) {
                document.getElementById("zoneEnemies").innerHTML = (enemies.bossTimer / 1000).toFixed(2) + " seconds";
            } else {
                document.getElementById("zoneEnemies").innerHTML = "Zone completed!";
            }

            // enabled and disable buttons
            if (game.userData.stats.zone == 1) {
                document.getElementById("prevZone").disabled = true;
            } else {
                document.getElementById("prevZone").disabled = false;
            }
            if (game.userData.stats.zone == game.userData.stats.highestZoneUnlocked) {
                document.getElementById("nextZone").disabled = true;
            } else {
                document.getElementById("nextZone").disabled = false;
            }
            
            // ENEMY AND HEALTH
            if (enemies.givesSoulCoins()) {
                document.getElementById("enemyInfo").innerHTML = enemies.getEnemyObject().name + " - <b>" + utility.number.format(enemies.getSoulCoinReward()) + " soul coins</b>";
            } else {
                document.getElementById("enemyInfo").innerHTML = enemies.getEnemyObject().name + ", Lvl " + game.userData.stats.zone;
            }
            
            if (enemies.dying) {
                document.getElementById("healthAmount").innerHTML = "Defeated!";
            } else {
                document.getElementById("healthAmount").innerHTML = utility.number.format(enemies.currentHealth) + " Health";
            }
            document.getElementById("healthBar").style.width = utility.calculatePercentOf(enemies.currentHealth, enemies.maxHealth) + "%";

            document.getElementById("coinDisplay").innerHTML = utility.number.format(game.userData.stats.coins);
            document.getElementById("soulCoinDisplay").innerHTML = utility.number.format(game.userData.stats.soulCoins);
            document.getElementById("soulCoinDisplayPercent").innerHTML = utility.number.formatScientific(game.userData.stats.soulCoins.multipliedBy(5));
            document.getElementById("pendingSoulCoinDisplay").innerHTML = utility.number.format(game.userData.stats.pendingSoulCoins);

            if (display.tooltip.visible == false) {
                document.getElementById("tooltip_anchor").style.display = "none";
            } else {
                document.getElementById("tooltip_anchor").style.display = "block";
            }
        },

        damage: function() {
            game.userData.stats.dps = game.getValue.damage.perSecond();
            game.userData.stats.dpc = game.getValue.damage.perClick();

            document.getElementById("dpsDisplay").innerHTML = utility.number.format(game.userData.stats.dps);
            document.getElementById("dpcDisplay").innerHTML = utility.number.format(game.userData.stats.dpc);
        },

        upgrades: {
            animators: {
                load: function () {
                    // USER DATA
                    for (i = 0; i < game.staticData.animators.length; i++) {
                        game.userData.animators[i] = { id: i, level: 0 };
                    }

                    // HTML
                    html = "";
                    for (i = 0; i < game.staticData.animators.length; i++) {
                        var char = game.staticData.animators[i];
                        var prefix = "anim_" + i;

                        var divId = prefix;
                        var divName = prefix + "_name";
                        var divLevel = prefix + "_level";
                        var divEffect = prefix + "_effect";
                        var divButton = prefix + "_button";

                        var buttonMouseControl = "onmouseenter=\"display.tooltip.showText(display.tooltip.getText.animator(" + i + "))\" onmouseleave=\"display.tooltip.hide()\"";

                        html += "<div id=\"" + divId + "\" class=\"charUpgrade\"><table><td><img class=\"framed\" style=\"margin-right:20px;\" height=128px width=128px src=\"assets/images/animators/" + char.icon + "\"></image></td><td style=\"width:260px;\"><p id=\"" + divName + "\"><p id=\"" + divLevel + "\"></p></td><td><p id=\"" + divEffect + "\" style=\"font-weight:normal;\"></p></td><button id=\"" + divButton + "\" " + buttonMouseControl + " onclick=\"events.animators.purchase(" + i + ")\" style=\"float:right;\" class=\"upgradeButton\"></button></table></div>";
                    }
                    document.getElementById("animators").innerHTML = html;
                    display.update.upgrades.animators.all();
                },
                single: function (index) {
                    var anim = game.staticData.animators[index];
                    var data = game.userData.animators[index];

                    var prefix = "anim_" + index;

                    var divId = prefix;
                    var divName = prefix + "_name";
                    var divLevel = prefix + "_level";
                    var divEffect = prefix + "_effect";
                    var divButton = prefix + "_button";

                    var level = data.level
                    //var baseCost = game.getValue.characterLevelUpCost(index);

                    document.getElementById(divName).innerHTML = anim.name;
                    document.getElementById(divLevel).innerHTML = "Lvl " + level;

                    document.getElementById(divEffect).innerHTML = display.tooltip.getText.animatorEffect(index);

                    if (game.getValue.isAnimatorMaxed(index)) {
                        document.getElementById(divButton).innerHTML = "<br>MAX<br>";
                    } else {
                        document.getElementById(divButton).innerHTML = "<br>LVL UP<br><scoin></scoin>" + utility.number.format(game.getValue.animatorLevelUpCost(index));
                    }
                },

                all: function () {
                    for (i = 0; i < game.staticData.animators.length; i++) {
                        display.update.upgrades.animators.single(i);
                    }
                }
            },
            characters: {
                load: function () {
                    // USER DATA
                    for (i = 0; i < game.staticData.characters.length; i++) {
                        game.userData.characters[i] = { id: i, level: 0, multiplier: BigNumber('1'), levelMultiplier: BigNumber('1'), upgrades: [] };
                        for (u = 0; u < game.staticData.characters[i].upgrades.length; u++) {
                            game.userData.characters[i].upgrades[u] = { unlocked: false };
                        }
                    }

                    // HTML
                    html = "";
                    for (i = 0; i < game.staticData.characters.length; i++) {
                        var char = game.staticData.characters[i];
                        var prefix = "char_" + i;

                        var divId = prefix;
                        var divName = prefix + "_name";
                        var divLevel = prefix + "_level";
                        var divDPS = prefix + "_dps";
                        var divUpgrades = prefix + "_upgrades";
                        var divButton = prefix + "_button";

                        var buttonMouseControl = "onmouseenter=\"display.tooltip.showText(display.tooltip.getText.character(" + i + "))\" onmouseleave=\"display.tooltip.hide()\"";

                        html += "<div id=\"" + divId + "\" class=\"charUpgrade\"><table><td><img style=\"margin-right:20px;\" height=128px width=128px src=\"assets/images/characters/" + char.icon + "\"></image></td><td style=\"width:260px;\"><p id=\"" + divName + "\"><p id=\"" + divLevel + "\"></p><p id=\"" + divDPS + "\"></p></td><td><p id=\"" + divUpgrades + "\" style=\"font-size:15px;font-weight:normal;\"></p></td><button id=\"" + divButton + "\" " + buttonMouseControl + " onclick=\"events.characters.purchase(" + i + ")\" style=\"float:right;\" class=\"upgradeButton\"></button></table></div>";
                    }
                    document.getElementById("characters").innerHTML = html;
                    display.update.upgrades.characters.all();
                },

                setVisibility: function () {
                    for (i = 1; i < game.staticData.characters.length; i++) {
                        if (game.userData.stats.highestCharacterUnlocked >= i) { document.getElementById("char_" + i).style.display = "block" }
                        else if (game.userData.stats.coins.isGreaterThanOrEqualTo(game.staticData.characters[i - 1].cost)) {
                            document.getElementById("char_" + i).style.display = "block";
                            if (game.userData.stats.highestCharacterUnlocked < i) game.userData.stats.highestCharacterUnlocked = i;
                        } else {
                            document.getElementById("char_" + i).style.display = "none";
                        }
                    }
                },

                single: function (index) {
                    var char = game.staticData.characters[index];
                    var data = game.userData.characters[index];

                    var prefix = "char_" + index;

                    var divId = prefix;
                    var divName = prefix + "_name";
                    var divLevel = prefix + "_level";
                    var divDPS = prefix + "_dps";
                    var divUpgrades = prefix + "_upgrades";
                    var divButton = prefix + "_button";

                    var level = game.userData.characters[index].level
                    var baseCost = game.getValue.characterLevelUpCost(index);

                    document.getElementById(divName).innerHTML = game.staticData.characters[index].name;
                    document.getElementById(divLevel).innerHTML = "Lvl " + level;

                    let upgrades = ""
                    for (u = 0; u < char.upgrades.length; u++) {
                        prev = u - 1
                        if (prev <= 0) prev = 0;
                        if (u == 0 || data.upgrades[prev].unlocked == true) {
                            var imageSrc = ""
                            let onClick = ""
                            if (data.upgrades[u].unlocked) {
                                imageSrc = "assets/images/characters/upgrades/unlocked.png";
                            } else {
                                imageSrc = "assets/images/characters/upgrades/" + char.upgrades[u].icon;
                                onClick = "onclick=\"events.characters.purchaseUpgrade(" + char.id + ", " + u + ")\""
                            }
                            upgrades += "<image class=\"framed\" src=\"" + imageSrc + "\" " + onClick + " height=48px width=48px style=\"margin:2px\" onmouseenter=\"display.tooltip.showText(display.tooltip.getText.characterUpgrade(" + char.id + ", " + u + "))\" onmouseleave=\"display.tooltip.hide()\"></image>"
                        }
                    }
                    document.getElementById(divUpgrades).innerHTML = upgrades;

                    if (index >= 1) {
                        document.getElementById(divDPS).innerHTML = utility.number.format(game.getValue.characterDPS(index)) + " DPS"
                    } else { document.getElementById(divDPS).innerHTML = utility.number.format(game.getValue.characterDPC(index)) + " Damage Per Click" }
                    document.getElementById(divButton).innerHTML = "<br>LVL UP<br><coin></coin>" + utility.number.format(baseCost)
                },

                all: function () {
                    for (i = 0; i < game.staticData.characters.length; i++) {
                        display.update.upgrades.characters.single(i);
                    }
                }
            }
        }
    },
    popup: {
        show: function () {
            document.querySelector('.popup-background').style.display = 'flex';
        },

        hide: function () {
            document.querySelector('.popup-background').style.display = 'none';
        },

        display: function (mainText, buttonText, buttonOnClickFunction) {

            const CLOSE_ID = "CLOSE";
            if (buttonOnClickFunction == CLOSE_ID) buttonOnClickFunction = "display.popup.hide()";
            document.getElementById("popup-text").innerHTML = mainText;
            document.getElementById("popup-button").innerHTML = "<b>" + buttonText + "</b>";
            document.getElementById("popup-button").setAttribute("onClick", "javascript: " + buttonOnClickFunction + ";");
            display.popup.show();
        }
    }
}

let utility = {
    calculatePercentOf: function (firstNumber, secondNumber) {
        let a = BigNumber(firstNumber);
        let b = BigNumber(secondNumber);
        let c = a.dividedBy(b);
        let d = c.multipliedBy('100');
        return d.toNumber();
    },

    randomChanceGenerator: function (chance, max) {
        let roll = Math.random() * max
        return roll <= chance
    },

    number: {
        format: function (numberParam) {
            number = BigNumber(numberParam)
            if (number.isGreaterThanOrEqualTo('1.0e66') || (game.userData.settings["scientificNotation"] == true && number.isGreaterThanOrEqualTo('1.0e5'))) {
                return number.toExponential(3, 1).replace('+', '');
            } else if (number.isLessThan('1000') || game.userData.settings["scientificNotation"] == true) {
                return number.integerValue(1).toNumber().toString();
            } else {
                let symbols = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "d", "U", "D", "!", "@", "#", "$", "%", "^", "&", "*"]
                for (sym = 0; number.isGreaterThanOrEqualTo('1000'); sym++) {
                    number = number.dividedBy('1000');
                }
                var outputValue = (number.toNumber() - 0.004).toFixed(2);
                var returnString = outputValue + "" + symbols[sym]

                return returnString;
            }
        },

        formatScientific: function (numberParam, decimals = false) {
            number = BigNumber(numberParam);
            if (number.isGreaterThanOrEqualTo('100000')) {
                return number.toExponential(3, 1).replace('+', '');
            } else {
                if (decimals == false) number = number.integerValue(1);
                if (decimals == true) number = number.multipliedBy('100').integerValue(1).dividedBy('100');
                return number.toNumber().toString();
            }
        }
    },

    romanNumeral: function (number) {
        // Efficient roman numeral generator by broman

        if (number >= 10000) return number;
        var numeral = ''
        var numeralList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        var decimalList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for (i in decimalList) {
            while (number >= decimalList[i]) {
                number -= decimalList[i];
                numeral += numeralList[i];
            }
        }
        return numeral;
    }
}

let save = {
    save: {},

    saveGame: function () {
        this.save = game.userData
        this.save.version = 3
        this.save.timestamp = Date.now();

        // IS BETA?
        this.save.isBeta = BETA_STATUS;
        let encodedSave = Base64.encode(JSON.stringify(save.save))

        let element = document.createElement('a');
        element.style.display = 'none';
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encodedSave));
        element.setAttribute('download', "tccs.txt");
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    loadGame: function () {
        if (save.save.isBeta != BETA_STATUS) {
            display.popup.display("The save could not be imported", "OK", "CLOSE");
        } else {
            let sd = save.save

            game.userData.stats = {
                ...game.userData.stats,
                ...sd.stats,
            }

            game.userData.settings = {
                ...game.userData.settings,
                ...sd.settings,
            }

            // BigNumber stats
            for (i = 0; i < BIGNUMBER_STATS.length; i++) {
                game.userData.stats[BIGNUMBER_STATS[i]] = BigNumber(game.userData.stats[BIGNUMBER_STATS[i]])
            }

            // settings
            for (i = 0; i < SETTINGS.length; i++) {
                document.getElementById(SETTINGS[i]).checked = sd.settings[SETTINGS[i]]
            }


            // characters
            for (i = 0; i < sd.characters.length; i++) {
                if (typeof sd.characters[i].id != "undefined") game.userData.characters[i].id = sd.characters[i].id;
                if (typeof sd.characters[i].level != "undefined") game.userData.characters[i].level = sd.characters[i].level;
                if (typeof sd.characters[i].multiplier != "undefined") game.userData.characters[i].multiplier = BigNumber(sd.characters[i].multiplier);
                if (typeof sd.characters[i].levelMultiplier != "undefined") game.userData.characters[i].multiplier = BigNumber(sd.characters[i].multiplier);
                if (typeof sd.characters[i].upgrades != "undefined") {
                    for (u = 0; u < game.staticData.characters[i].upgrades.length; u++) {
                        if (typeof sd.characters[i].upgrades[u].unlocked != "undefined") game.userData.characters[i].upgrades[u].unlocked = sd.characters[i].upgrades[u].unlocked;
                    }
                }
            }

            for (i = 0; i < sd.animators.length; i++) {
                if (typeof sd.animators[i].id != "undefined") game.userData.animators[i].id = sd.animators[i].id;
                if (typeof sd.animators[i].level != "undefined") game.userData.animators[i].level = sd.animators[i].level;
            }

            enemies.spawnNewEnemy();
            display.update.all();
        }
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('mousemove', function (e) {
    if (display.tooltip.visible == true) {
        let tooltip = document.getElementById('tooltip_main');
        tooltip.style.left = (e.pageX - 200) + 'px';
        tooltip.style.top = (e.pageY - (tooltip.offsetHeight - 80)) + 'px';
    }
});

const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function () {
        let readText = reader.result;
        save.save = JSON.parse(Base64.decode(readText));
        save.loadGame()
    }
    reader.readAsText(input.files[0]);
});

//setup

enemies.spawnNewEnemy();
display.update.upgrades.animators.load();
display.update.upgrades.characters.load();
display.update.all();
display.update.upgrades.characters.setVisibility();

setInterval(function () {
    enemies.tick();
    display.update.main();
}, 20);

// check costs for visibility
setInterval(function () {
    display.update.upgrades.characters.setVisibility();
}, 350)